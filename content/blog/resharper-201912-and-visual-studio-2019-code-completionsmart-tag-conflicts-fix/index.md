---
  title: "ReSharper 2019.1.2 and Visual Studio 2019 Code Completion/Smart Tag Conflicts + Fix"
  date: "2019-06-21T10:49:18Z"
---

Not 100% sure when this started, but I eventually got annoyed by Visual Studio and ReSharper having a different keyboard shortcuts for potential code fixes.

ReSharper is `Alt + Enter` Visual Studio is `CTRL + .`

Visual Studio was warning for some potential code problems and I want ReSharper to handle it all. Specifically it was the "Expression value is never used" warning, which wants you to *discard* the return value using the [_ C# 7.0 discard](https://docs.microsoft.com/en-us/dotnet/csharp/discards). It gets annoying not knowing which keyboard shortcut the squiggle wants.\n\nSo eventually I found the setting, which is in the ReSharper settings rather than Visual Studio settings. In Visual Studio 2019 the exact location is as follows

```
Extensions —> ReSharper —> Options —> Code Inspection —> Settings —> Merge Visual Studio Light Bulb actions into ReSharper bulb.
```

There is also a setting here that will allow you to hide the Visual Studio squiggles - I did not find this useful, as when enabled you miss some suggestions even though using the keyboard shortcut with your cursor at the location will give you the same menu.

After enabling this setting, you can now use either of the above shortcuts and you get a merged menu of all options - much better!

Hope somebody finds this helpful.