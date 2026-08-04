# Unions (OneOf / AnyOf)

Union types wrap several `Optional<T>` variants. Construct with a static factory (`Union.Factory(variant)`) or an implicit conversion where listed; read back with the matching `TryGet…(out …)` — it returns `true` when that variant is set. Cells show `—` when the union declares none.

## OneOf (0)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|

## AnyOf (1)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|
| `ActionModel` | Wait, Screenshot, Click, WriteText, PressAKey, Scroll, Scrape, ExecuteJavaScript | `ActionModel.Wait(Wait)`, `ActionModel.Screenshot(Screenshot)`, `ActionModel.Click(Click)`, `ActionModel.WriteText(WriteText)`, `ActionModel.PressAkey(PressAKey)`, `ActionModel.Scroll(Scroll)`, `ActionModel.Scrape(Scrape)`, `ActionModel.ExecuteJavaScript(ExecuteJavaScript)` | `TryGetWait(out …)`, `TryGetScreenshot(out …)`, `TryGetClick(out …)`, `TryGetWriteText(out …)`, `TryGetPressAkey(out …)`, `TryGetScroll(out …)`, `TryGetScrape(out …)`, `TryGetExecuteJavaScript(out …)` | `Wait`, `Screenshot`, `Click`, `WriteText`, `PressAKey`, `Scroll`, `Scrape`, `ExecuteJavaScript` | `Models/AnyOf/ActionModel.cs` |
