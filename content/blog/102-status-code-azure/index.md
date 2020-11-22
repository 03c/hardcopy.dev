---
title: You can't use a 102 http status code in Azure
date: '2019-06-21T10:49:18Z'
---

You can't use a 102 status code because Azure will always wait for a follow up code. In my code I changed it to a 202 Accepted instead.

If you try and use a 102 in Azure, you will eventually get a [502 response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502), which states that the server received an invalid response while acting as a proxy or gateway. Which translates to, I received a 102 but not a final status code from you code.

A 102 should only ever be used to say that the call is still in progress ans must always be followed up with a final status code, be that a 200 or 202 like I changed mine to.
