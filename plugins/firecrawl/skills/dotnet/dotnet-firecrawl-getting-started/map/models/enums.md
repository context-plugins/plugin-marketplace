# Enums

22 enums (22 string / 0 int), namespace `FirecrawlApi.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `ChangeStatus` | StringEnum | `New (new)`, `Same (same)`, `Changed (changed)`, `Removed (removed)` | The result of the comparison between the two page versions. 'new' means this page did not exist before, 'same' means content has not changed, 'changed' means content has changed, 'removed' means the page was removed. | `Models/Enums/ChangeStatus.cs` |
| `Direction` | StringEnum | `Up (up)`, `Down (down)` | Direction to scroll | `Models/Enums/Direction.cs` |
| `Endpoint` | StringEnum | `Search (search)`, `Scrape (scrape)`, `Parse (parse)`, `Map (map)` | — | `Models/Enums/Endpoint.cs` |
| `Event` | StringEnum | `Completed (completed)`, `Page (page)`, `Failed (failed)`, `Started (started)` | — | `Models/Enums/Event.cs` |
| `Format` | StringEnum | `Markdown (markdown)`, `Html (html)`, `RawHtml (rawHtml)`, `Links (links)`, `Screenshot (screenshot)`, `ScreenshotFullPage (screenshot@fullPage)`, `Json (json)`, `ChangeTracking (changeTracking)`, `Branding (branding)` | — | `Models/Enums/Format.cs` |
| `Format1` | StringEnum | `Markdown (markdown)`, `Json (json)`, `Branding (branding)` | — | `Models/Enums/Format1.cs` |
| `Format2` | StringEnum | `Markdown (markdown)`, `Html (html)`, `RawHtml (rawHtml)`, `Links (links)`, `Screenshot (screenshot)`, `ScreenshotFullPage (screenshot@fullPage)`, `Json (json)`, `Branding (branding)` | — | `Models/Enums/Format2.cs` |
| `Mode` | StringEnum | `GitDiff (git-diff)`, `Json (json)` | — | `Models/Enums/Mode.cs` |
| `Proxy` | StringEnum | `Basic (basic)`, `Enhanced (enhanced)`, `Auto (auto)` | Specifies the type of proxy to use. basic : Proxies for scraping sites with none to basic anti-bot solutions. Fast and usually works. enhanced : Enhanced proxies for scraping sites with advanced anti-bot solutions. Slower, but more reliable on certain sites. Costs up to 5 credits per request. auto : Firecrawl will automatically retry scraping with … | `Models/Enums/Proxy.cs` |
| `Rating` | StringEnum | `Good (good)`, `Partial (partial)`, `Bad (bad)` | — | `Models/Enums/Rating.cs` |
| `Status` | StringEnum | `Completed (completed)`, `Processing (processing)`, `Failed (failed)`, `Cancelled (cancelled)` | The current status of the extract job | `Models/Enums/Status.cs` |
| `Status1` | StringEnum | `Cancelled (cancelled)` | — | `Models/Enums/Status1.cs` |
| `Status2` | StringEnum | `Processing (processing)`, `Completed (completed)`, `Failed (failed)` | — | `Models/Enums/Status2.cs` |
| `Type1` | StringEnum | `Screenshot (screenshot)` | Take a screenshot. The links will be in the response's `actions.screenshots` array. | `Models/Enums/Type1.cs` |
| `Type2` | StringEnum | `Click (click)` | Click on an element | `Models/Enums/Type2.cs` |
| `Type3` | StringEnum | `Write (write)` | Write text into an input field, text area, or contenteditable element. Note: You must first focus the element using a 'click' action before writing. The text will be typed character by character to simulate keyboard input. | `Models/Enums/Type3.cs` |
| `Type4` | StringEnum | `Press (press)` | Press a key on the page | `Models/Enums/Type4.cs` |
| `Type5` | StringEnum | `Scroll (scroll)` | Scroll the page or a specific element | `Models/Enums/Type5.cs` |
| `Type6` | StringEnum | `Scrape (scrape)` | Scrape the current page content, returns the url and the html. | `Models/Enums/Type6.cs` |
| `Type7` | StringEnum | `ExecuteJavascript (executeJavascript)` | Execute JavaScript code on the page | `Models/Enums/Type7.cs` |
| `TypeModel` | StringEnum | `Wait (wait)` | Wait for a specified amount of milliseconds | `Models/Enums/TypeModel.cs` |
| `Visibility` | StringEnum | `Visible (visible)`, `Hidden (hidden)` | The visibility of the current page/URL. 'visible' means the URL was discovered through an organic route (links or sitemap), 'hidden' means the URL was discovered through memory from previous crawls. | `Models/Enums/Visibility.cs` |
