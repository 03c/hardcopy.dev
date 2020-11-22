---
title: Entity Framework Core - Create Entities from Database
date: '2019-07-02T11:57:11Z'
---

I recently needed to access a database with EF Core from a console application.

I used the [EF Core Tools](https://docs.microsoft.com/en-us/ef/core/miscellaneous/cli/powershell) to accomplish this. First install the EF Core Tools, run this command in the Package Manger Console:

```
Install-Package Microsoft.EntityFrameworkCore.Tools
```

Once you have the required tools installed you can scaffold the DbContext and enties using the following command. Substitute the database details and required tables:

```
Scaffold-DbContext \"Server=SERVER;Database=DATABASE;Trusted_Connection=True;\" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -Tables TABLE_1, TABLE_2 -Context Context -Force
```

The -Force flag will overwrite any existing files. This is useful if you want to add an extra table later on. Keep in mind you will need to specify all the tables the second time. The process will _not_ update the context, but rather overwrite it. So if you miss any tables the second time you will be unable to use them.

Another option which I think is quite useful is the ContextDir flag, this allows you to specify an alternative location for the DbContext, by default this class will be located along with the Models/Entites.
