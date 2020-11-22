---
title: MSSQL NOLOCK - my comments and its problems
date: '2014-12-04T14:31:03Z'
---

Let me start by saying I'm not a SQL expert or a database admin. Don't get me wrong I have written my fair share for SQL and stored procedures, so I'm no novice either.

I was told at work that we have a policy of always using NOLOCK and ROWLOCK when reading or writing to a table. At first I didn't really question this, but one day I decided to look into what exactly NOLOCK was and when it should be used.

It seemed strange to me that if it was best practice to use it all the time, why it was not the default lock in SQL Server when performing reads?

A quick Google search later and after reading a few articles, mainly this one on [techrepublic.com](http://www.techrepublic.com/article/using-nolock-and-readpast-table-hints-in-sql-server/), I came to the conclusion that NOLOCK really shouldn't be used as the standard way of doing things and here is why...

# What is NOLOCK?

At the very basic level NOLOCK is exactly as you would expect, it tells SQL Server not to use any locks on the database. This will increase the performance of your database and if you need a very high performance database, it might well be worth considering the NOLOCK table hint.

NOLOCK is a synonym for the READUNCOMMITTED table hint. They are the exact same thing! The READUNCOMMITTED table hint doesn't sound quite so appealing does it?

_You mean to tell me, that if I use NOLOCK or READUNCOMMITTED that I can read data that has yet to be committed to my database?_

# NOLOCK/READUNCOMMITTED dirty read problem

If you use either of the table hints above you run the risk of reading uncommitted data. Let me explain...

Say I run this SQL statement

```
SELECT COUNT(*) FROM Customers WITH(NOLOCK)
```

and the return value is 10, so there are 10 rows in the Customers table.

If I then run this SQL statement (notice that I have left the transaction open)

```
BEGIN TRANSACTION
INSERT INTO Customers (Name)
VALUES ('Chris')
```

because I have left this transaction open, the database has not yet committed this to the database and as such I should not be able to read the data, correct? If I now run the same count statement as before in a new query window. What would you expect the result to be, 10 because the data hasn;t yet been committed to the database?

```
SELECT COUNT(*) FROM Customers WITH(NOLOCK)
```

This time it returns 11 because I have used the NOLOCK table hint, this is a dirty read and happens because we are not issuing a lock on the table.

Now normally you don't leave transactions open like this, but what if you had a very time consuming stored proc? That took say 30 seconds? It is possible for those 30 seconds to read data that is uncommitted. Sure, but after 30 seconds this data is going to get committed, so whats the harm done? Well, what if there is a problem and you want to roll this data back? Any reads taken place using the NOLOCK table hint now have invalid data. I can think of places where this wouldn't matter, say you need to count the number of comments on a blog post to display to your viewers; does it really matter if that count is out slightly? No, not really. But what if you are calculating some more sensitive data, say in a banking application? The ramifications could be much worse.

The take home points are this, you need to be careful when using the NOLOCK tabe hint and remember that it is the same as READUNCOMITTED. If you remember this it will remind you that you could end up with a dirty read. If, like I said above, it doesn't matter if you data is slightly out the using the NOLOCK table hint could be a good way to improve the performance of you database, but be careful when accuracy is important.

How do you use NOLOCK in your SQL statements? Are you as careful as you should be?
