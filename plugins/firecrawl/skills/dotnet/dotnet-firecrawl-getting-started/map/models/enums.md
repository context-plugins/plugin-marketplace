# Enums

85 enums (85 string / 0 int), namespace `FirecrawlApi.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `ChangeStatus` | StringEnum | `New (new)`, `Same (same)`, `Changed (changed)`, `Removed (removed)` | The result of the comparison between the two page versions. 'new' means this page did not exist before, 'same' means content has not changed, 'changed' means content has changed, 'removed' means the page was removed. | `Models/Enums/ChangeStatus.cs` |
| `ColorScheme` | StringEnum | `Light (light)`, `Dark (dark)` | The detected color scheme of the page. | `Models/Enums/ColorScheme.cs` |
| `Confidence` | StringEnum | `High (high)`, `Medium (medium)`, `Low (low)` | — | `Models/Enums/Confidence.cs` |
| `Direction` | StringEnum | `Up (up)`, `Down (down)` | Direction to scroll | `Models/Enums/Direction.cs` |
| `Doc` | StringEnum | `Ok (ok)`, `Degraded (degraded)`, `Unavailable (unavailable)`, `Skipped (skipped)` | — | `Models/Enums/Doc.cs` |
| `Endpoint` | StringEnum | `Search (search)`, `Scrape (scrape)`, `Parse (parse)`, `Map (map)` | — | `Models/Enums/Endpoint.cs` |
| `Endpoint1` | StringEnum | `Scrape (scrape)`, `Crawl (crawl)`, `BatchScrape (batch_scrape)`, `Search (search)`, `Extract (extract)`, `Llmstxt (llmstxt)`, `DeepResearch (deep_research)`, `Map (map)`, `Agent (agent)`, `Browser (browser)`, `Interact (interact)` | — | `Models/Enums/Endpoint1.cs` |
| `Endpoint2` | StringEnum | `Scrape (scrape)`, `Crawl (crawl)`, `BatchScrape (batch_scrape)`, `Search (search)`, `Extract (extract)`, `Llmstxt (llmstxt)`, `DeepResearch (deep_research)`, `Map (map)`, `Agent (agent)`, `Browser (browser)`, `Interact (interact)` | The endpoint used for this job | `Models/Enums/Endpoint2.cs` |
| `Enterprise` | StringEnum | `Anon (anon)`, `Zdr (zdr)` | — | `Models/Enums/Enterprise.cs` |
| `Event` | StringEnum | `MonitorPage (monitor.page)`, `MonitorCheckCompleted (monitor.check.completed)` | — | `Models/Enums/Event.cs` |
| `Event1` | StringEnum | `Completed (completed)`, `Page (page)`, `Failed (failed)`, `Started (started)` | — | `Models/Enums/Event1.cs` |
| `FailurePolicy` | StringEnum | `Open (open)`, `Closed (closed)` | What to do when the classifier can't be reached: `closed` blocks the request, `open` allows it. | `Models/Enums/FailurePolicy.cs` |
| `FailurePolicy1` | StringEnum | `Open (open)`, `Closed (closed)` | Behavior when the classifier is unreachable: `closed` blocks (default), `open` allows. | `Models/Enums/FailurePolicy1.cs` |
| `Format` | StringEnum | `A0 (A0)`, `A1 (A1)`, `A2 (A2)`, `A3 (A3)`, `A4 (A4)`, `A5 (A5)`, `A6 (A6)`, `Letter (Letter)`, `Legal (Legal)`, `Tabloid (Tabloid)`, `Ledger (Ledger)` | The page size of the resulting PDF | `Models/Enums/Format.cs` |
| `Issue` | StringEnum | `Ok (ok)`, `Degraded (degraded)`, `Unavailable (unavailable)`, `Skipped (skipped)` | — | `Models/Enums/Issue.cs` |
| `Language` | StringEnum | `Python (python)`, `Node (node)`, `Bash (bash)` | Language of the code to execute. Use `node` for JavaScript or `bash` for agent-browser CLI commands. | `Models/Enums/Language.cs` |
| `Mode` | StringEnum | `GitDiff (git-diff)`, `Json (json)` | — | `Models/Enums/Mode.cs` |
| `Mode1` | StringEnum | `Fast (fast)`, `Auto (auto)`, `Ocr (ocr)` | PDF parsing mode. "fast": text-based extraction only (embedded text, fastest). "auto" (default): attempts fast extraction first, falls back to OCR if needed. "ocr": forces OCR parsing on every page. | `Models/Enums/Mode1.cs` |
| `Mode2` | StringEnum | `Accurate (accurate)`, `Aggressive (aggressive)`, `Fast (fast)` | Redaction strategy. `accurate` is model-only and optimized for precision, `aggressive` increases recall with additional heuristics, and `fast` uses heuristics without the model call. | `Models/Enums/Mode2.cs` |
| `Mode3` | StringEnum | `Off (off)`, `Normal (normal)` | URL scanning mode for this request. `normal` checks URLs against Google Web Risk (+2 credits per URL scanned). | `Models/Enums/Mode3.cs` |
| `Mode4` | StringEnum | `Fast (fast)`, `Auto (auto)`, `Ocr (ocr)` | PDF parsing mode. "fast": text-only extraction. "auto": text-first with OCR fallback. "ocr": OCR on every page. | `Models/Enums/Mode4.cs` |
| `Mode5` | StringEnum | `Similar (similar)`, `Citers (citers)`, `References (references)` | — | `Models/Enums/Mode5.cs` |
| `Mode6` | StringEnum | `Off (off)`, `Normal (normal)` | Threat protection mode. `off` disables checks; `normal` checks URLs against Google Web Risk (+2 credits per URL scanned). | `Models/Enums/Mode6.cs` |
| `Model` | StringEnum | `Spark1Mini (spark-1-mini)`, `Spark1Pro (spark-1-pro)` | The model to use for the agent task. spark-1-mini (default) is 60% cheaper, spark-1-pro offers higher accuracy for complex tasks | `Models/Enums/Model.cs` |
| `Model1` | StringEnum | `Spark1Pro (spark-1-pro)`, `Spark1Mini (spark-1-mini)` | Model preset used for the agent run | `Models/Enums/Model1.cs` |
| `Proxy` | StringEnum | `Basic (basic)`, `Enhanced (enhanced)`, `Auto (auto)` | Specifies the type of proxy to use. basic : Proxies for scraping sites with none to basic anti-bot solutions. Fast and usually works. enhanced : Enhanced proxies for scraping sites with advanced anti-bot solutions. Slower, but more reliable on certain sites. Billed at the same credit cost as basic. auto : Firecrawl will automatically retry … | `Models/Enums/Proxy.cs` |
| `Proxy1` | StringEnum | `Basic (basic)`, `Auto (auto)` | Proxy mode for parse uploads. `/parse` supports only `basic` and `auto`. | `Models/Enums/Proxy1.cs` |
| `PullRequest` | StringEnum | `Ok (ok)`, `Degraded (degraded)`, `Unavailable (unavailable)`, `Skipped (skipped)` | — | `Models/Enums/PullRequest.cs` |
| `Rating` | StringEnum | `Good (good)`, `Partial (partial)`, `Bad (bad)` | — | `Models/Enums/Rating.cs` |
| `Readme` | StringEnum | `Ok (ok)`, `Degraded (degraded)`, `Unavailable (unavailable)`, `Skipped (skipped)` | — | `Models/Enums/Readme.cs` |
| `RedactPiiEntity` | StringEnum | `Person (PERSON)`, `Email (EMAIL)`, `Phone (PHONE)`, `Location (LOCATION)`, `Financial (FINANCIAL)`, `Secret (SECRET)` | Public PII entity buckets supported by Firecrawl redaction. | `Models/Enums/RedactPiiEntity.cs` |
| `ReplaceStyle` | StringEnum | `Tag (tag)`, `Mask (mask)`, `Remove (remove)` | `tag` replaces spans with placeholders like `&lt;EMAIL&gt;`, `mask` replaces characters with `*`, and `remove` deletes the span text. | `Models/Enums/ReplaceStyle.cs` |
| `SearchWindow` | StringEnum | `_5M (5m)`, `_15M (15m)`, `_1H (1h)`, `_6H (6h)`, `_24H (24h)`, `_7D (7d)` | Recency filter — only consider results published within this window. | `Models/Enums/SearchWindow.cs` |
| `Sitemap` | StringEnum | `Skip (skip)`, `Include (include)`, `Only (only)` | Sitemap mode when crawling. If you set it to 'skip', the crawler will ignore the website sitemap and only crawl the entered URL and discover pages from there onwards. If you set it to 'only', the crawler will only crawl URLs from the sitemap (plus the start URL) and will not discover links from HTML. | `Models/Enums/Sitemap.cs` |
| `Sitemap1` | StringEnum | `Skip (skip)`, `Include (include)` | Sitemap handling strategy | `Models/Enums/Sitemap1.cs` |
| `Sitemap2` | StringEnum | `Skip (skip)`, `Include (include)`, `Only (only)` | Sitemap mode when mapping. If you set it to `skip`, the sitemap won't be used to find URLs. If you set it to `only`, only URLs that are in the sitemap will be returned. By default (`include`), the sitemap and other methods will be used together to find URLs. | `Models/Enums/Sitemap2.cs` |
| `Skills` | StringEnum | `Only (only)` | — | `Models/Enums/Skills.cs` |
| `Skills1` | StringEnum | `Only (only)` | Set to `only` to limit the search to indexed agent-skill files. | `Models/Enums/Skills1.cs` |
| `Status` | StringEnum | `Active (active)`, `Paused (paused)` | — | `Models/Enums/Status.cs` |
| `Status1` | StringEnum | `Active (active)`, `Paused (paused)`, `Deleted (deleted)` | — | `Models/Enums/Status1.cs` |
| `Status10` | StringEnum | `Active (active)`, `Destroyed (destroyed)` | — | `Models/Enums/Status10.cs` |
| `Status2` | StringEnum | `Queued (queued)`, `Running (running)`, `Completed (completed)`, `Failed (failed)`, `Partial (partial)`, `SkippedOverlap (skipped_overlap)` | — | `Models/Enums/Status2.cs` |
| `Status3` | StringEnum | `Same (same)`, `New (new)`, `Changed (changed)`, `Removed (removed)`, `Error (error)` | — | `Models/Enums/Status3.cs` |
| `Status4` | StringEnum | `Completed (completed)`, `Processing (processing)`, `Failed (failed)`, `Cancelled (cancelled)` | The current status of the extract job | `Models/Enums/Status4.cs` |
| `Status7` | StringEnum | `Cancelled (cancelled)` | — | `Models/Enums/Status7.cs` |
| `Status9` | StringEnum | `Processing (processing)`, `Completed (completed)`, `Failed (failed)` | — | `Models/Enums/Status9.cs` |
| `Trigger` | StringEnum | `Scheduled (scheduled)`, `Manual (manual)` | — | `Models/Enums/Trigger.cs` |
| `Type1` | StringEnum | `Markdown (markdown)` | — | `Models/Enums/Type1.cs` |
| `Type10` | StringEnum | `Branding (branding)` | — | `Models/Enums/Type10.cs` |
| `Type11` | StringEnum | `Product (product)` | — | `Models/Enums/Type11.cs` |
| `Type12` | StringEnum | `Menu (menu)` | — | `Models/Enums/Type12.cs` |
| `Type13` | StringEnum | `Audio (audio)` | — | `Models/Enums/Type13.cs` |
| `Type14` | StringEnum | `Video (video)` | — | `Models/Enums/Type14.cs` |
| `Type15` | StringEnum | `Question (question)` | — | `Models/Enums/Type15.cs` |
| `Type16` | StringEnum | `Highlights (highlights)` | — | `Models/Enums/Type16.cs` |
| `Type17` | StringEnum | `Pdf (pdf)` | — | `Models/Enums/Type17.cs` |
| `Type18` | StringEnum | `Wait (wait)` | Wait for a specified amount of milliseconds | `Models/Enums/Type18.cs` |
| `Type19` | StringEnum | `Wait (wait)` | Wait for a specific element to appear | `Models/Enums/Type19.cs` |
| `Type2` | StringEnum | `Summary (summary)` | — | `Models/Enums/Type2.cs` |
| `Type20` | StringEnum | `Screenshot (screenshot)` | Take a screenshot. The links will be in the response's `actions.screenshots` array. | `Models/Enums/Type20.cs` |
| `Type21` | StringEnum | `Click (click)` | Click on an element | `Models/Enums/Type21.cs` |
| `Type22` | StringEnum | `Write (write)` | Write text into an input field, text area, or contenteditable element. Note: You must first focus the element using a 'click' action before writing. The text will be typed character by character to simulate keyboard input. | `Models/Enums/Type22.cs` |
| `Type23` | StringEnum | `Press (press)` | Press a key on the page | `Models/Enums/Type23.cs` |
| `Type24` | StringEnum | `Scroll (scroll)` | Scroll the page or a specific element | `Models/Enums/Type24.cs` |
| `Type25` | StringEnum | `Scrape (scrape)` | Scrape the current page content, returns the url and the html. | `Models/Enums/Type25.cs` |
| `Type26` | StringEnum | `ExecuteJavascript (executeJavascript)` | Execute JavaScript code on the page | `Models/Enums/Type26.cs` |
| `Type27` | StringEnum | `Pdf (pdf)` | Generate a PDF of the current page. The PDF will be returned in the `actions.pdfs` array of the response. | `Models/Enums/Type27.cs` |
| `Type28` | StringEnum | `Crawl (crawl)` | — | `Models/Enums/Type28.cs` |
| `Type29` | StringEnum | `Search (search)` | — | `Models/Enums/Type29.cs` |
| `Type3` | StringEnum | `Html (html)` | — | `Models/Enums/Type3.cs` |
| `Type30` | StringEnum | `Added (added)`, `Removed (removed)`, `Changed (changed)` | — | `Models/Enums/Type30.cs` |
| `Type39` | StringEnum | `Doc (doc)`, `Issue (issue)`, `PullRequest (pull_request)`, `Readme (readme)` | Result kind. | `Models/Enums/Type39.cs` |
| `Type4` | StringEnum | `RawHtml (rawHtml)` | — | `Models/Enums/Type4.cs` |
| `Type40` | StringEnum | `Web (web)` | — | `Models/Enums/Type40.cs` |
| `Type42` | StringEnum | `News (news)` | — | `Models/Enums/Type42.cs` |
| `Type43` | StringEnum | `Github (github)` | — | `Models/Enums/Type43.cs` |
| `Type44` | StringEnum | `Research (research)` | — | `Models/Enums/Type44.cs` |
| `Type5` | StringEnum | `Links (links)` | — | `Models/Enums/Type5.cs` |
| `Type6` | StringEnum | `Images (images)` | — | `Models/Enums/Type6.cs` |
| `Type7` | StringEnum | `Screenshot (screenshot)` | — | `Models/Enums/Type7.cs` |
| `Type8` | StringEnum | `Json (json)` | — | `Models/Enums/Type8.cs` |
| `Type9` | StringEnum | `ChangeTracking (changeTracking)` | — | `Models/Enums/Type9.cs` |
| `TypeEnum` | StringEnum | `Scrape (scrape)` | — | `Models/Enums/TypeEnum.cs` |
| `Types1` | StringEnum | `Doc (doc)`, `Issue (issue)`, `PullRequest (pull_request)`, `Readme (readme)` | — | `Models/Enums/Types1.cs` |
| `Visibility` | StringEnum | `Visible (visible)`, `Hidden (hidden)` | The visibility of the current page/URL. 'visible' means the URL was discovered through an organic route (links or sitemap), 'hidden' means the URL was discovered through memory from previous crawls. | `Models/Enums/Visibility.cs` |
