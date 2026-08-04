# Records (`Actions` … `WriteText`)

**Exact coverage: `Actions` through `WriteText`**, alphabetical — these are the literal first and last record names on this page; a name outside that range is on a neighbouring page.

Plain `record` data models (immutable, `init`-only). Each field is `CSharpName (wire_name): Type` —
the parenthesized name is the JSON wire name (`[JsonPropertyName]`). `!req` = C# `required` (must be
set in the object initializer); a trailing `?` on the type = nullable/optional; a field with neither
is optional with a generated default — where the source declares an explicit default it is shown as
`= value`. Summary is the record's XML doc summary (`—` when the source has none). Error-payload
models (the `out` types named by the operation pages' error accessors) are listed here like any
other record. A field whose type is a `OneOf`/`AnyOf` union is tagged `(union)` — construct and
read it via `unions.md` (factories + `TryGet…`), not as a record.
All records on these pages live in namespace `FirecrawlApi.Models`.

| Record | Summary | Fields | Source |
|---|---|---|---|
| `Actions` | Results of the actions specified in the `actions` parameter. Only present if the `actions` parameter was provided in the request | `Screenshots (screenshots): IReadOnlyList<string>?`, `Scrapes (scrapes): IReadOnlyList<Scrape1>?`, `JavascriptReturns (javascriptReturns): IReadOnlyList<JavascriptReturn>?` | `Models/Actions.cs` |
| `Activity` | — | `Type (type): string?`, `Status (status): string?`, `Message (message): string?`, `Timestamp (timestamp): DateTimeOffset?`, `Depth (depth): int?` | `Models/Activity.cs` |
| `BatchScrape402Error` | — | `Error (error): string?` | `Models/BatchScrape402Error.cs` |
| `BatchScrape402Error1` | — | `Error (error): string?` | `Models/BatchScrape402Error1.cs` |
| `BatchScrape404Error` | — | `Error (error): string?` | `Models/BatchScrape404Error.cs` |
| `BatchScrape404Error1` | — | `Error (error): string?` | `Models/BatchScrape404Error1.cs` |
| `BatchScrape429Error` | — | `Error (error): string?` | `Models/BatchScrape429Error.cs` |
| `BatchScrape429Error1` | — | `Error (error): string?` | `Models/BatchScrape429Error1.cs` |
| `BatchScrape500Error` | — | `Error (error): string?` | `Models/BatchScrape500Error.cs` |
| `BatchScrape500Error1` | — | `Error (error): string?` | `Models/BatchScrape500Error1.cs` |
| `BatchScrapeErrors402Error` | — | `Error (error): string?` | `Models/BatchScrapeErrors402Error.cs` |
| `BatchScrapeErrors402Error1` | — | `Error (error): string?` | `Models/BatchScrapeErrors402Error1.cs` |
| `BatchScrapeErrors429Error` | — | `Error (error): string?` | `Models/BatchScrapeErrors429Error.cs` |
| `BatchScrapeErrors429Error1` | — | `Error (error): string?` | `Models/BatchScrapeErrors429Error1.cs` |
| `BatchScrapeErrors500Error` | — | `Error (error): string?` | `Models/BatchScrapeErrors500Error.cs` |
| `BatchScrapeErrors500Error1` | — | `Error (error): string?` | `Models/BatchScrapeErrors500Error1.cs` |
| `BatchScrapeRequest` | — | `Urls (urls): IReadOnlyList<string> !req`, `Webhook (webhook): Webhook?`, `IgnoreInvalidUrls (ignoreInvalidURLs): bool? = false`, `Formats (formats): IReadOnlyList<Format>?`, `OnlyMainContent (onlyMainContent): bool? = true`, `IncludeTags (includeTags): IReadOnlyList<string>?`, `ExcludeTags (excludeTags): IReadOnlyList<string>?`, `MaxAge (maxAge): int? = 0`, `Headers (headers): object?`, `WaitFor (waitFor): int? = 0`, `Mobile (mobile): bool? = false`, `SkipTlsVerification (skipTlsVerification): bool? = false`, `Timeout (timeout): int? = 30000`, `ParsePdf (parsePDF): bool? = true`, `JsonOptions (jsonOptions): JsonOptions?`, `Actions (actions): IReadOnlyList<ActionModel>?` (union), `Location (location): Location?`, `RemoveBase64Images (removeBase64Images): bool?`, `BlockAds (blockAds): bool? = true`, `Proxy (proxy): Proxy?`, `ChangeTrackingOptions (changeTrackingOptions): ChangeTrackingOptions?`, `StoreInCache (storeInCache): bool? = true` | `Models/BatchScrapeRequest.cs` |
| `BatchScrapeResponse` | — | `Success (success): bool?`, `Message (message): string?` | `Models/BatchScrapeResponse.cs` |
| `BatchScrapeResponseObj` | — | `Success (success): bool?`, `Id (id): string?`, `Url (url): string?`, `InvalidUrls (invalidURLs): IReadOnlyList<string?>?` | `Models/BatchScrapeResponseObj.cs` |
| `BatchScrapeStatusResponseObj` | — | `Status (status): string?`, `Total (total): int?`, `Completed (completed): int?`, `CreditsUsed (creditsUsed): int?`, `ExpiresAt (expiresAt): DateTimeOffset?`, `Next (next): string?`, `Data (data): IReadOnlyList<Data1>?` | `Models/BatchScrapeStatusResponseObj.cs` |
| `Branding` | Brand identity information derived from executing on-page javascript. | `Logo (logo): string?`, `Fonts (fonts): IReadOnlyList<Font>?`, `Colors (colors): object?`, `Typography (typography): object?`, `Spacing (spacing): object?`, `Components (components): object?`, `Icons (icons): object?`, `Images (images): object?`, `Animations (animations): object?`, `Layout (layout): object?`, `Tone (tone): object?` | `Models/Branding.cs` |
| `ChangeTracking` | Change tracking information if `changeTracking` is in `formats`. Only present when the `changeTracking` format is requested. | `PreviousScrapeAt (previousScrapeAt): DateTimeOffset?`, `ChangeStatus (changeStatus): ChangeStatus?`, `Visibility (visibility): Visibility?`, `Diff (diff): string?`, `Json (json): object?` | `Models/ChangeTracking.cs` |
| `ChangeTrackingOptions` | Options for change tracking (Beta). Only applicable when 'changeTracking' is included in formats. The 'markdown' format must also be specified when using change tracking. | `Modes (modes): IReadOnlyList<Mode>?`, `Schema (schema): object?`, `Prompt (prompt): string?`, `Tag (tag): string?` | `Models/ChangeTrackingOptions.cs` |
| `Click` | — | `Type (type): Type2 !req`, `Selector (selector): string !req`, `All (all): bool? = false` | `Models/Click.cs` |
| `Crawl` | — | `Id (id): Guid !req`, `TeamId (teamId): string !req`, `Url (url): string !req`, `Options (options): Options !req` | `Models/Crawl.cs` |
| `Crawl402Error` | — | `Error (error): string?` | `Models/Crawl402Error.cs` |
| `Crawl402Error1` | — | `Error (error): string?` | `Models/Crawl402Error1.cs` |
| `Crawl404Error` | — | `Error (error): string?` | `Models/Crawl404Error.cs` |
| `Crawl404Error1` | — | `Error (error): string?` | `Models/Crawl404Error1.cs` |
| `Crawl429Error` | — | `Error (error): string?` | `Models/Crawl429Error.cs` |
| `Crawl429Error1` | — | `Error (error): string?` | `Models/Crawl429Error1.cs` |
| `Crawl500Error` | — | `Error (error): string?` | `Models/Crawl500Error.cs` |
| `Crawl500Error1` | — | `Error (error): string?` | `Models/Crawl500Error1.cs` |
| `CrawlActive402Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/CrawlActive402Error.cs` |
| `CrawlActive402Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/CrawlActive402Error1.cs` |
| `CrawlActive429Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/CrawlActive429Error.cs` |
| `CrawlActive429Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/CrawlActive429Error1.cs` |
| `CrawlActive500Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/CrawlActive500Error.cs` |
| `CrawlActive500Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/CrawlActive500Error1.cs` |
| `CrawlActiveResponse` | — | `Success (success): bool !req`, `Crawls (crawls): IReadOnlyList<Crawl>?` | `Models/CrawlActiveResponse.cs` |
| `CrawlErrors402Error` | — | `Error (error): string?` | `Models/CrawlErrors402Error.cs` |
| `CrawlErrors402Error1` | — | `Error (error): string?` | `Models/CrawlErrors402Error1.cs` |
| `CrawlErrors429Error` | — | `Error (error): string?` | `Models/CrawlErrors429Error.cs` |
| `CrawlErrors429Error1` | — | `Error (error): string?` | `Models/CrawlErrors429Error1.cs` |
| `CrawlErrors500Error` | — | `Error (error): string?` | `Models/CrawlErrors500Error.cs` |
| `CrawlErrors500Error1` | — | `Error (error): string?` | `Models/CrawlErrors500Error1.cs` |
| `CrawlErrorsResponseObj` | — | `Errors (errors): IReadOnlyList<Error>?`, `RobotsBlocked (robotsBlocked): IReadOnlyList<string>?` | `Models/CrawlErrorsResponseObj.cs` |
| `CrawlRequest` | — | `Url (url): string !req`, `ExcludePaths (excludePaths): IReadOnlyList<string>?`, `IncludePaths (includePaths): IReadOnlyList<string>?`, `MaxDepth (maxDepth): int? = 10`, `MaxDiscoveryDepth (maxDiscoveryDepth): int?`, `IgnoreSitemap (ignoreSitemap): bool? = false`, `IgnoreQueryParameters (ignoreQueryParameters): bool? = false`, `Limit (limit): int? = 10000`, `AllowBackwardLinks (allowBackwardLinks): bool? = false`, `AllowExternalLinks (allowExternalLinks): bool? = false`, `Delay (delay): double?`, `Webhook (webhook): Webhook1?`, `ScrapeOptions (scrapeOptions): ScrapeOptions?` | `Models/CrawlRequest.cs` |
| `CrawlResponse` | — | `Success (success): bool?`, `Id (id): string?`, `Url (url): string?` | `Models/CrawlResponse.cs` |
| `CrawlResponse1` | — | `Status (status): Status1?` | `Models/CrawlResponse1.cs` |
| `CrawlStatusResponseObj` | — | `Status (status): string?`, `Total (total): int?`, `Completed (completed): int?`, `CreditsUsed (creditsUsed): int?`, `ExpiresAt (expiresAt): DateTimeOffset?`, `CreatedAt (createdAt): DateTimeOffset?`, `CompletedAt (completedAt): DateTimeOffset?`, `Duration (duration): double?`, `Next (next): string?`, `Data (data): IReadOnlyList<Data1>?` | `Models/CrawlStatusResponseObj.cs` |
| `Data` | — | `Markdown (markdown): string?`, `Html (html): string?`, `RawHtml (rawHtml): string?`, `Screenshot (screenshot): string?`, `Links (links): IReadOnlyList<string>?`, `Actions (actions): Actions?`, `Metadata (metadata): Metadata?`, `LlmExtraction (llm_extraction): object?`, `Warning (warning): string?`, `ChangeTracking (changeTracking): ChangeTracking?`, `Branding (branding): Branding?` | `Models/Data.cs` |
| `Data1` | — | `Markdown (markdown): string?`, `Html (html): string?`, `RawHtml (rawHtml): string?`, `Links (links): IReadOnlyList<string>?`, `Screenshot (screenshot): string?`, `Metadata (metadata): Metadata?` | `Models/Data1.cs` |
| `Data3` | — | `FinalAnalysis (finalAnalysis): string?`, `Json (json): object?`, `Activities (activities): IReadOnlyList<Activity>?`, `Sources (sources): IReadOnlyList<Source>?`, `Status (status): Status2?`, `Error (error): string?`, `ExpiresAt (expiresAt): DateTimeOffset?`, `CurrentDepth (currentDepth): int?`, `MaxDepth (maxDepth): int?`, `TotalUrls (totalUrls): int?` | `Models/Data3.cs` |
| `Data4` | — | `RemainingCredits (remaining_credits): double?` | `Models/Data4.cs` |
| `Data5` | — | `RemainingTokens (remaining_tokens): double?` | `Models/Data5.cs` |
| `Data6` | — | `Title (title): string?`, `Description (description): string?`, `Url (url): string?`, `Markdown (markdown): string?`, `Html (html): string?`, `RawHtml (rawHtml): string?`, `Links (links): IReadOnlyList<string>?`, `Screenshot (screenshot): string?`, `Metadata (metadata): Metadata3?` | `Models/Data6.cs` |
| `Data7` | — | `Llmstxt (llmstxt): string?`, `Llmsfulltxt (llmsfulltxt): string?` | `Models/Data7.cs` |
| `DeepResearch400Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/DeepResearch400Error.cs` |
| `DeepResearch400Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/DeepResearch400Error1.cs` |
| `DeepResearch404Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/DeepResearch404Error.cs` |
| `DeepResearch404Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/DeepResearch404Error1.cs` |
| `DeepResearchRequest` | — | `Query (query): string !req`, `MaxDepth (maxDepth): int? = 7`, `TimeLimit (timeLimit): int? = 300`, `MaxUrls (maxUrls): int? = 20`, `AnalysisPrompt (analysisPrompt): string?`, `SystemPrompt (systemPrompt): string?`, `Formats (formats): IReadOnlyList<Format1>?`, `JsonOptions (jsonOptions): JsonOptions1?` | `Models/DeepResearchRequest.cs` |
| `DeepResearchResponse` | — | `Success (success): bool?`, `Id (id): Guid?` | `Models/DeepResearchResponse.cs` |
| `DeepResearchResponse1` | — | `Success (success): bool?`, `Data (data): Data3?` | `Models/DeepResearchResponse1.cs` |
| `EndpointFeedbackRequest` | — | `Rating (rating): Rating !req`, `ValuableSources (valuableSources): IReadOnlyList<ValuableSource>?`, `MissingContent (missingContent): IReadOnlyList<MissingContent>?`, `QuerySuggestions (querySuggestions): string?`, `Origin (origin): string? = "api"`, `Integration (integration): string?`, `Endpoint (endpoint): Endpoint !req`, `JobId (jobId): Guid !req`, `Issues (issues): IReadOnlyList<string>?`, `Tags (tags): IReadOnlyList<string>?`, `Note (note): string?`, `Url (url): string?`, `PageNumbers (pageNumbers): IReadOnlyList<int>?`, `Metadata (metadata): object?` | `Models/EndpointFeedbackRequest.cs` |
| `Error` | — | `Id (id): string?`, `Timestamp (timestamp): string?`, `Url (url): string?`, `ErrorValue (error): string?` | `Models/Error.cs` |
| `ExecuteJavaScript` | — | `Type (type): Type7 !req`, `Script (script): string !req` | `Models/ExecuteJavaScript.cs` |
| `Extract400Error` | — | `Error (error): string?` | `Models/Extract400Error.cs` |
| `Extract400Error1` | — | `Error (error): string?` | `Models/Extract400Error1.cs` |
| `Extract500Error` | — | `Error (error): string?` | `Models/Extract500Error.cs` |
| `Extract500Error1` | — | `Error (error): string?` | `Models/Extract500Error1.cs` |
| `ExtractRequest` | — | `Urls (urls): IReadOnlyList<string> !req`, `Prompt (prompt): string?`, `Schema (schema): object?`, `EnableWebSearch (enableWebSearch): bool? = false`, `IgnoreSitemap (ignoreSitemap): bool? = false`, `IncludeSubdomains (includeSubdomains): bool? = true`, `ShowSources (showSources): bool? = false`, `ScrapeOptions (scrapeOptions): ScrapeOptions?`, `IgnoreInvalidUrls (ignoreInvalidURLs): bool? = false` | `Models/ExtractRequest.cs` |
| `ExtractResponse` | — | `Success (success): bool?`, `Id (id): string?`, `InvalidUrls (invalidURLs): IReadOnlyList<string?>?` | `Models/ExtractResponse.cs` |
| `ExtractStatusResponse` | — | `Success (success): bool?`, `Data (data): object?`, `Status (status): Status?`, `ExpiresAt (expiresAt): DateTimeOffset?` | `Models/ExtractStatusResponse.cs` |
| `FeedbackErrorResponse` | — | `Success (success): bool !req`, `Error (error): string !req`, `FeedbackErrorCode (feedbackErrorCode): string?`, `Details (details): IReadOnlyList<object>?` | `Models/FeedbackErrorResponse.cs` |
| `FeedbackErrorResponseError` | — | `Success (success): bool !req`, `Error (error): string !req`, `FeedbackErrorCode (feedbackErrorCode): string?`, `Details (details): IReadOnlyList<object>?` | `Models/FeedbackErrorResponseError.cs` |
| `FeedbackResponse` | — | `Success (success): bool !req`, `FeedbackId (feedbackId): Guid !req`, `CreditsRefunded (creditsRefunded): double !req`, `AlreadySubmitted (alreadySubmitted): bool?`, `DailyCapReached (dailyCapReached): bool?`, `CreditsRefundedToday (creditsRefundedToday): double?`, `DailyRefundCap (dailyRefundCap): double?`, `Warning (warning): string?` | `Models/FeedbackResponse.cs` |
| `Font` | — | `Family (family): string?` | `Models/Font.cs` |
| `JavascriptReturn` | — | `Type (type): string?`, `Value (value): object?` | `Models/JavascriptReturn.cs` |
| `JsonOptions` | JSON options object | `Schema (schema): object?`, `SystemPrompt (systemPrompt): string?`, `Prompt (prompt): string?` | `Models/JsonOptions.cs` |
| `JsonOptions1` | Options for JSON output | `Schema (schema): object?`, `SystemPrompt (systemPrompt): string?`, `Prompt (prompt): string?` | `Models/JsonOptions1.cs` |
| `Llmstxt400Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Llmstxt400Error.cs` |
| `Llmstxt400Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Llmstxt400Error1.cs` |
| `Llmstxt404Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Llmstxt404Error.cs` |
| `Llmstxt404Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Llmstxt404Error1.cs` |
| `LlmstxtRequest` | — | `Url (url): string !req`, `MaxUrls (maxUrls): int? = 2`, `ShowFullText (showFullText): bool? = false` | `Models/LlmstxtRequest.cs` |
| `LlmstxtResponse` | — | `Success (success): bool?`, `Id (id): Guid?` | `Models/LlmstxtResponse.cs` |
| `LlmstxtResponse1` | — | `Success (success): bool?`, `Status (status): Status2?`, `Data (data): Data7?`, `ExpiresAt (expiresAt): DateTimeOffset?` | `Models/LlmstxtResponse1.cs` |
| `Location` | Location settings for the request. When specified, this will use an appropriate proxy if available and emulate the corresponding language and timezone settings. Defaults to 'US' if not specified. | `Country (country): string? = "US"`, `Languages (languages): IReadOnlyList<string>?` | `Models/Location.cs` |
| `Map402Error` | — | `Error (error): string?` | `Models/Map402Error.cs` |
| `Map402Error1` | — | `Error (error): string?` | `Models/Map402Error1.cs` |
| `Map429Error` | — | `Error (error): string?` | `Models/Map429Error.cs` |
| `Map429Error1` | — | `Error (error): string?` | `Models/Map429Error1.cs` |
| `Map500Error` | — | `Error (error): string?` | `Models/Map500Error.cs` |
| `Map500Error1` | — | `Error (error): string?` | `Models/Map500Error1.cs` |
| `MapRequest` | — | `Url (url): string !req`, `Search (search): string?`, `IgnoreSitemap (ignoreSitemap): bool? = true`, `SitemapOnly (sitemapOnly): bool? = false`, `IncludeSubdomains (includeSubdomains): bool? = true`, `Limit (limit): int? = 5000`, `Timeout (timeout): int?` | `Models/MapRequest.cs` |
| `MapResponse` | — | `Success (success): bool?`, `Id (id): Guid?`, `Links (links): IReadOnlyList<string>?` | `Models/MapResponse.cs` |
| `Metadata` | — | `Title (title): string?`, `Description (description): string?`, `Language (language): string?`, `SourceUrl (sourceURL): string?`, `AnyOtherMetadata (<any other metadata>): string?`, `StatusCode (statusCode): int?`, `Timezone (timezone): string?`, `Error (error): string?` | `Models/Metadata.cs` |
| `Metadata3` | — | `Title (title): string?`, `Description (description): string?`, `SourceUrl (sourceURL): string?`, `StatusCode (statusCode): int?`, `Error (error): string?` | `Models/Metadata3.cs` |
| `MissingContent` | — | `Topic (topic): string !req`, `Description (description): string?` | `Models/MissingContent.cs` |
| `Options` | The crawler options used for this crawl | `ScrapeOptions (scrapeOptions): ScrapeOptions?` | `Models/Options.cs` |
| `PressAKey` | Press a key on the page. See https://asawicki.info/nosense/doc/devices/keyboard/key_codes.html for key codes. | `Type (type): Type4 !req`, `Key (key): string !req` | `Models/PressAKey.cs` |
| `Scrape` | — | `Type (type): Type6 !req` | `Models/Scrape.cs` |
| `Scrape1` | — | `Url (url): string?`, `Html (html): string?` | `Models/Scrape1.cs` |
| `Scrape402Error` | — | `Error (error): string?` | `Models/Scrape402Error.cs` |
| `Scrape402Error1` | — | `Error (error): string?` | `Models/Scrape402Error1.cs` |
| `Scrape429Error` | — | `Error (error): string?` | `Models/Scrape429Error.cs` |
| `Scrape429Error1` | — | `Error (error): string?` | `Models/Scrape429Error1.cs` |
| `Scrape500Error` | — | `Error (error): string?` | `Models/Scrape500Error.cs` |
| `Scrape500Error1` | — | `Error (error): string?` | `Models/Scrape500Error1.cs` |
| `ScrapeOptions` | — | `Formats (formats): IReadOnlyList<Format>?`, `OnlyMainContent (onlyMainContent): bool? = true`, `IncludeTags (includeTags): IReadOnlyList<string>?`, `ExcludeTags (excludeTags): IReadOnlyList<string>?`, `MaxAge (maxAge): int? = 0`, `Headers (headers): object?`, `WaitFor (waitFor): int? = 0`, `Mobile (mobile): bool? = false`, `SkipTlsVerification (skipTlsVerification): bool? = false`, `Timeout (timeout): int? = 30000`, `ParsePdf (parsePDF): bool? = true`, `JsonOptions (jsonOptions): JsonOptions?`, `Actions (actions): IReadOnlyList<ActionModel>?` (union), `Location (location): Location?`, `RemoveBase64Images (removeBase64Images): bool?`, `BlockAds (blockAds): bool? = true`, `Proxy (proxy): Proxy?`, `ChangeTrackingOptions (changeTrackingOptions): ChangeTrackingOptions?`, `StoreInCache (storeInCache): bool? = true` | `Models/ScrapeOptions.cs` |
| `ScrapeOptions1` | Options for scraping search results | `Formats (formats): IReadOnlyList<Format2>?` | `Models/ScrapeOptions1.cs` |
| `ScrapeRequest` | — | `Url (url): string !req`, `Formats (formats): IReadOnlyList<Format>?`, `OnlyMainContent (onlyMainContent): bool? = true`, `IncludeTags (includeTags): IReadOnlyList<string>?`, `ExcludeTags (excludeTags): IReadOnlyList<string>?`, `MaxAge (maxAge): int? = 0`, `Headers (headers): object?`, `WaitFor (waitFor): int? = 0`, `Mobile (mobile): bool? = false`, `SkipTlsVerification (skipTlsVerification): bool? = false`, `Timeout (timeout): int? = 30000`, `ParsePdf (parsePDF): bool? = true`, `JsonOptions (jsonOptions): JsonOptions?`, `Actions (actions): IReadOnlyList<ActionModel>?` (union), `Location (location): Location?`, `RemoveBase64Images (removeBase64Images): bool?`, `BlockAds (blockAds): bool? = true`, `Proxy (proxy): Proxy?`, `ChangeTrackingOptions (changeTrackingOptions): ChangeTrackingOptions?`, `StoreInCache (storeInCache): bool? = true` | `Models/ScrapeRequest.cs` |
| `ScrapeResponse` | — | `Success (success): bool?`, `Data (data): Data?` | `Models/ScrapeResponse.cs` |
| `Screenshot` | — | `Type (type): Type1 !req`, `FullPage (fullPage): bool? = false` | `Models/Screenshot.cs` |
| `Scroll` | — | `Type (type): Type5 !req`, `Direction (direction): Direction? = Direction.Down`, `Selector (selector): string?` | `Models/Scroll.cs` |
| `Search408Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Search408Error.cs` |
| `Search408Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Search408Error1.cs` |
| `Search500Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Search500Error.cs` |
| `Search500Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Search500Error1.cs` |
| `SearchFeedbackRequest` | For 'good', include valuableSources. For 'partial', include valuableSources or missingContent. For 'bad', include missingContent or querySuggestions. | `Rating (rating): Rating !req`, `ValuableSources (valuableSources): IReadOnlyList<ValuableSource>?`, `MissingContent (missingContent): IReadOnlyList<MissingContent>?`, `QuerySuggestions (querySuggestions): string?`, `Origin (origin): string? = "api"`, `Integration (integration): string?` | `Models/SearchFeedbackRequest.cs` |
| `SearchRequest` | — | `Query (query): string !req`, `Limit (limit): int? = 5`, `Tbs (tbs): string?`, `Location (location): string?`, `Timeout (timeout): int? = 60000`, `IgnoreInvalidUrls (ignoreInvalidURLs): bool? = false`, `ScrapeOptions (scrapeOptions): ScrapeOptions1?` | `Models/SearchRequest.cs` |
| `SearchResponse` | — | `Success (success): bool?`, `Data (data): IReadOnlyList<Data6>?`, `Warning (warning): string?` | `Models/SearchResponse.cs` |
| `Source` | — | `Url (url): string?`, `Title (title): string?`, `Description (description): string?`, `Favicon (favicon): string?` | `Models/Source.cs` |
| `TeamCreditUsage404Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamCreditUsage404Error.cs` |
| `TeamCreditUsage404Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamCreditUsage404Error1.cs` |
| `TeamCreditUsage500Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamCreditUsage500Error.cs` |
| `TeamCreditUsage500Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamCreditUsage500Error1.cs` |
| `TeamCreditUsageResponse` | — | `Success (success): bool?`, `Data (data): Data4?` | `Models/TeamCreditUsageResponse.cs` |
| `TeamTokenUsage404Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamTokenUsage404Error.cs` |
| `TeamTokenUsage404Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamTokenUsage404Error1.cs` |
| `TeamTokenUsage500Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamTokenUsage500Error.cs` |
| `TeamTokenUsage500Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamTokenUsage500Error1.cs` |
| `TeamTokenUsageResponse` | — | `Success (success): bool?`, `Data (data): Data5?` | `Models/TeamTokenUsageResponse.cs` |
| `ValuableSource` | — | `Url (url): string !req`, `Reason (reason): string?` | `Models/ValuableSource.cs` |
| `Wait` | — | `Type (type): TypeModel !req`, `Milliseconds (milliseconds): int?`, `Selector (selector): string?` | `Models/Wait.cs` |
| `Webhook` | A webhook specification object. | `Url (url): string !req`, `Headers (headers): IReadOnlyDictionary<string, string>?`, `Metadata (metadata): object?`, `Events (events): IReadOnlyList<Event>?` | `Models/Webhook.cs` |
| `Webhook1` | A webhook specification object. | `Url (url): string !req`, `Headers (headers): IReadOnlyDictionary<string, string>?`, `Metadata (metadata): object?`, `Events (events): IReadOnlyList<Event>?` | `Models/Webhook1.cs` |
| `WriteText` | — | `Type (type): Type3 !req`, `Text (text): string !req` | `Models/WriteText.cs` |
