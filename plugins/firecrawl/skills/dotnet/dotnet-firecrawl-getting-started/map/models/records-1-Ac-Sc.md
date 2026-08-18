# Records (`Actions` … `Screenshot`)

**Exact coverage: `Actions` through `Screenshot`**, alphabetical — these are the literal first and last record names on this page; a name outside that range is on a neighbouring page.

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
| `Actions` | Results of the actions specified in the `actions` parameter. Only present if the `actions` parameter was provided in the request | `Screenshots (screenshots): IReadOnlyList<string>?`, `Scrapes (scrapes): IReadOnlyList<Scrape1>?`, `JavascriptReturns (javascriptReturns): IReadOnlyList<JavascriptReturn>?`, `Pdfs (pdfs): IReadOnlyList<string>?` | `Models/Actions.cs` |
| `Agent402Error` | — | `Error (error): string?` | `Models/Agent402Error.cs` |
| `Agent402Error1` | — | `Error (error): string?` | `Models/Agent402Error1.cs` |
| `Agent429Error` | — | `Error (error): string?` | `Models/Agent429Error.cs` |
| `Agent429Error1` | — | `Error (error): string?` | `Models/Agent429Error1.cs` |
| `AgentRequest` | — | `Urls (urls): IReadOnlyList<string>?`, `Prompt (prompt): string !req`, `Schema (schema): object?`, `MaxCredits (maxCredits): double?`, `StrictConstrainToUrLs (strictConstrainToURLs): bool?`, `Model (model): Model? = Model.Spark1Mini`, `AuditMetadata (auditMetadata): AuditMetadata?`, `ThreatProtection (threatProtection): ThreatProtectionOverride?` | `Models/AgentRequest.cs` |
| `AgentResponse` | — | `Success (success): bool?`, `Id (id): Guid?` | `Models/AgentResponse.cs` |
| `AgentResponse1` | — | `Success (success): bool?`, `Status (status): Status9?`, `Data (data): object?`, `Model (model): Model1? = Model1.Spark1Pro`, `Error (error): string?`, `ExpiresAt (expiresAt): DateTimeOffset?`, `CreditsUsed (creditsUsed): double?` | `Models/AgentResponse1.cs` |
| `Audio` | Extract audio (MP3) from supported video URLs, e.g. YouTube. Returns a signed GCS URL. | `Type (type): Type13 !req` | `Models/Audio.cs` |
| `AuditMetadata` | User attribution included with SIEM logging events when SIEM Logging is enabled for the organization. | `Username (username): string !req` | `Models/AuditMetadata.cs` |
| `Availability` | The availability of the variant. Always present on a variant. | `InStock (inStock): bool !req`, `Text (text): string?` | `Models/Availability.cs` |
| `Availability1` | The availability of the item. | `InStock (inStock): bool !req`, `Text (text): string?` | `Models/Availability1.cs` |
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
| `BatchScrapeRequest` | — | `Urls (urls): IReadOnlyList<string> !req`, `Webhook (webhook): Webhook?`, `MaxConcurrency (maxConcurrency): int?`, `IgnoreInvalidUrLs (ignoreInvalidURLs): bool? = true`, `Formats (formats): IReadOnlyList<Format>?`, `OnlyMainContent (onlyMainContent): bool? = true`, `OnlyCleanContent (onlyCleanContent): bool? = false`, `IncludeTags (includeTags): IReadOnlyList<string>?`, `ExcludeTags (excludeTags): IReadOnlyList<string>?`, `MaxAge (maxAge): int? = 172800000`, `MinAge (minAge): int?`, `Headers (headers): object?`, `WaitFor (waitFor): int? = 0`, `Mobile (mobile): bool? = false`, `SkipTlsVerification (skipTlsVerification): bool? = true`, `Timeout (timeout): int? = 60000`, `Parsers (parsers): IReadOnlyList<Parser>?`, `Actions (actions): IReadOnlyList<ActionModel>?` (union), `Location (location): Location?`, `RemoveBase64Images (removeBase64Images): bool? = true`, `BlockAds (blockAds): bool? = true`, `Proxy (proxy): Proxy? = Proxy.Auto`, `StoreInCache (storeInCache): bool? = true`, `Lockdown (lockdown): bool? = false`, `RedactPii (redactPII): RedactPii?` (union), `Profile (profile): Profile?`, `ThreatProtection (threatProtection): ThreatProtectionOverride?`, `AuditMetadata (auditMetadata): AuditMetadata?`, `ZeroDataRetention (zeroDataRetention): bool? = false` | `Models/BatchScrapeRequest.cs` |
| `BatchScrapeResponse` | — | `Status (status): Status7?` | `Models/BatchScrapeResponse.cs` |
| `BatchScrapeResponseObj` | — | `Success (success): bool?`, `Id (id): string?`, `Url (url): string?`, `InvalidUrLs (invalidURLs): IReadOnlyList<string?>?` | `Models/BatchScrapeResponseObj.cs` |
| `BatchScrapeStatusResponseObj` | — | `Status (status): string?`, `Total (total): int?`, `Completed (completed): int?`, `CreditsUsed (creditsUsed): int?`, `ExpiresAt (expiresAt): DateTimeOffset?`, `CreatedAt (createdAt): DateTimeOffset?`, `CompletedAt (completedAt): DateTimeOffset?`, `Duration (duration): double?`, `Next (next): string?`, `Data (data): IReadOnlyList<Data2>?` | `Models/BatchScrapeStatusResponseObj.cs` |
| `Branding` | — | `Type (type): Type10 !req` | `Models/Branding.cs` |
| `Branding1` | Branding information extracted from the page if `branding` is in `formats`. Includes colors, fonts, typography, spacing, components, and more. | `ColorScheme (colorScheme): ColorScheme?`, `Logo (logo): string?`, `Colors (colors): Colors?`, `Fonts (fonts): IReadOnlyList<Font?>?`, `Typography (typography): Typography?`, `Spacing (spacing): Spacing?`, `Components (components): Components?`, `Icons (icons): object?`, `Images (images): Images2?`, `Animations (animations): object?`, `Layout (layout): object?`, `Personality (personality): object?` | `Models/Branding1.cs` |
| `ButtonPrimary` | Primary button styles. | `Background (background): string?`, `TextColor (textColor): string?`, `BorderRadius (borderRadius): string?` | `Models/ButtonPrimary.cs` |
| `ButtonSecondary` | Secondary button styles. | `Background (background): string?`, `TextColor (textColor): string?`, `BorderColor (borderColor): string?`, `BorderRadius (borderRadius): string?` | `Models/ButtonSecondary.cs` |
| `ChangeTracking` | — | `Type (type): Type9 !req`, `Modes (modes): IReadOnlyList<Mode>?`, `Schema (schema): object?`, `Prompt (prompt): string?`, `Tag (tag): string?` | `Models/ChangeTracking.cs` |
| `ChangeTracking1` | Change tracking information if `changeTracking` is in `formats`. Only present when the `changeTracking` format is requested. | `PreviousScrapeAt (previousScrapeAt): DateTimeOffset?`, `ChangeStatus (changeStatus): ChangeStatus?`, `Visibility (visibility): Visibility?`, `Diff (diff): string?`, `Json (json): object?` | `Models/ChangeTracking1.cs` |
| `Click` | — | `Type (type): Type21 !req`, `Selector (selector): string !req`, `All (all): bool? = false` | `Models/Click.cs` |
| `Colors` | Brand colors extracted from the page. | `Primary (primary): string?`, `Secondary (secondary): string?`, `Accent (accent): string?`, `Background (background): string?`, `TextPrimary (textPrimary): string?`, `TextSecondary (textSecondary): string?`, `Link (link): string?`, `Success (success): string?`, `Warning (warning): string?`, `Error (error): string?` | `Models/Colors.cs` |
| `Components` | UI component styles. | `ButtonPrimary (buttonPrimary): ButtonPrimary?`, `ButtonSecondary (buttonSecondary): ButtonSecondary?`, `Input (input): object?` | `Models/Components.cs` |
| `Coverage` | Outcome for each result type. Check this when an expected result type is missing: `skipped` means your `types` value did not ask for that type, while `degraded` or `unavailable` means the gap came from the index or from a filter, not from the query. A repository filter is one such cause — see how the repository filters scope a search . | `Doc (doc): Doc?`, `Issue (issue): Issue?`, `PullRequest (pull_request): PullRequest?`, `Readme (readme): Readme?` | `Models/Coverage.cs` |
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
| `CrawlParamsPreview400Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/CrawlParamsPreview400Error.cs` |
| `CrawlParamsPreview400Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/CrawlParamsPreview400Error1.cs` |
| `CrawlParamsPreview401Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/CrawlParamsPreview401Error.cs` |
| `CrawlParamsPreview401Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/CrawlParamsPreview401Error1.cs` |
| `CrawlParamsPreview500Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/CrawlParamsPreview500Error.cs` |
| `CrawlParamsPreview500Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/CrawlParamsPreview500Error1.cs` |
| `CrawlParamsPreviewRequest` | — | `Url (url): string !req`, `Prompt (prompt): string !req` | `Models/CrawlParamsPreviewRequest.cs` |
| `CrawlParamsPreviewResponse` | — | `Success (success): bool?`, `Data (data): Data4?` | `Models/CrawlParamsPreviewResponse.cs` |
| `CrawlRequest` | — | `Url (url): string !req`, `Prompt (prompt): string?`, `ExcludePaths (excludePaths): IReadOnlyList<string>?`, `IncludePaths (includePaths): IReadOnlyList<string>?`, `MaxDiscoveryDepth (maxDiscoveryDepth): int?`, `Sitemap (sitemap): Sitemap? = Sitemap.Include`, `IgnoreQueryParameters (ignoreQueryParameters): bool? = false`, `RegexOnFullUrl (regexOnFullURL): bool? = false`, `Limit (limit): int? = 10000`, `CrawlEntireDomain (crawlEntireDomain): bool? = false`, `AllowExternalLinks (allowExternalLinks): bool? = false`, `AllowSubdomains (allowSubdomains): bool? = false`, `IgnoreRobotsTxt (ignoreRobotsTxt): bool? = false`, `RobotsUserAgent (robotsUserAgent): string?`, `Delay (delay): double?`, `MaxConcurrency (maxConcurrency): int?`, `Webhook (webhook): Webhook1?`, `ScrapeOptions (scrapeOptions): ScrapeOptions?`, `ZeroDataRetention (zeroDataRetention): bool? = false` | `Models/CrawlRequest.cs` |
| `CrawlResponse` | — | `Success (success): bool?`, `Id (id): string?`, `Url (url): string?` | `Models/CrawlResponse.cs` |
| `CrawlResponse1` | — | `Status (status): Status7?` | `Models/CrawlResponse1.cs` |
| `CrawlStatusResponseObj` | — | `Status (status): string?`, `Total (total): int?`, `Completed (completed): int?`, `CreditsUsed (creditsUsed): int?`, `ExpiresAt (expiresAt): DateTimeOffset?`, `CreatedAt (createdAt): DateTimeOffset?`, `CompletedAt (completedAt): DateTimeOffset?`, `Duration (duration): double?`, `Next (next): string?`, `Data (data): IReadOnlyList<Data2>?` | `Models/CrawlStatusResponseObj.cs` |
| `CrawlTarget` | — | `Id (id): Guid?`, `Type (type): Type28 !req`, `Url (url): string !req`, `CrawlOptions (crawlOptions): object?`, `ScrapeOptions (scrapeOptions): ScrapeOptions?` | `Models/CrawlTarget.cs` |
| `Data` | — | `Id (id): Guid?`, `MonitorId (monitorId): Guid?`, `Status (status): Status2?`, `Trigger (trigger): Trigger?`, `ScheduledFor (scheduledFor): DateTimeOffset?`, `StartedAt (startedAt): DateTimeOffset?`, `FinishedAt (finishedAt): DateTimeOffset?`, `EstimatedCredits (estimatedCredits): int?`, `ReservedCredits (reservedCredits): int?`, `ActualCredits (actualCredits): int?`, `BillingStatus (billingStatus): string?`, `Summary (summary): MonitorSummary?`, `TargetResults (targetResults): string?`, `NotificationStatus (notificationStatus): object?`, `Error (error): string?`, `CreatedAt (createdAt): DateTimeOffset?`, `UpdatedAt (updatedAt): DateTimeOffset?`, `Pages (pages): IReadOnlyList<MonitorCheckPage>?`, `Next (next): string?` | `Models/Data.cs` |
| `Data1` | — | `Markdown (markdown): string?`, `Summary (summary): string?`, `Html (html): string?`, `RawHtml (rawHtml): string?`, `Screenshot (screenshot): string?`, `Audio (audio): string?`, `Video (video): string?`, `Answer (answer): string?`, `Highlights (highlights): string?`, `Links (links): IReadOnlyList<string>?`, `Actions (actions): Actions?`, `Metadata (metadata): Metadata?`, `Warning (warning): string?`, `ChangeTracking (changeTracking): ChangeTracking1?`, `Branding (branding): Branding1?`, `Product (product): Product1?`, `Menu (menu): Menu1?` | `Models/Data1.cs` |
| `Data2` | — | `Markdown (markdown): string?`, `Html (html): string?`, `RawHtml (rawHtml): string?`, `Links (links): IReadOnlyList<string>?`, `Screenshot (screenshot): string?`, `Metadata (metadata): Metadata1?` | `Models/Data2.cs` |
| `Data4` | — | `Url (url): string?`, `IncludePaths (includePaths): IReadOnlyList<string>?`, `ExcludePaths (excludePaths): IReadOnlyList<string>?`, `MaxDepth (maxDepth): int?`, `MaxDiscoveryDepth (maxDiscoveryDepth): int?`, `CrawlEntireDomain (crawlEntireDomain): bool?`, `AllowExternalLinks (allowExternalLinks): bool?`, `AllowSubdomains (allowSubdomains): bool?`, `Sitemap (sitemap): Sitemap1?`, `IgnoreQueryParameters (ignoreQueryParameters): bool?`, `IgnoreRobotsTxt (ignoreRobotsTxt): bool?`, `RobotsUserAgent (robotsUserAgent): string?`, `DeduplicateSimilarUrLs (deduplicateSimilarURLs): bool?`, `Delay (delay): double?`, `Limit (limit): int?` | `Models/Data4.cs` |
| `Data5` | — | `RemainingCredits (remainingCredits): double?`, `PlanCredits (planCredits): double?`, `BillingPeriodStart (billingPeriodStart): DateTimeOffset?`, `BillingPeriodEnd (billingPeriodEnd): DateTimeOffset?` | `Models/Data5.cs` |
| `Data6` | — | `RemainingTokens (remainingTokens): double?`, `PlanTokens (planTokens): double?`, `BillingPeriodStart (billingPeriodStart): DateTimeOffset?`, `BillingPeriodEnd (billingPeriodEnd): DateTimeOffset?` | `Models/Data6.cs` |
| `Data7` | — | `Id (id): string?`, `Endpoint (endpoint): Endpoint2?`, `ApiVersion (api_version): string?`, `CreatedAt (created_at): DateTimeOffset?`, `Target (target): string?` | `Models/Data7.cs` |
| `Data8` | The search results. The arrays available will depend on the sources you specified in the request. By default, the `web` array will be returned. | `Web (web): IReadOnlyList<Web1>?`, `Images (images): IReadOnlyList<Images6>?`, `News (news): IReadOnlyList<News1>?` | `Models/Data8.cs` |
| `Data9` | — | `Mode (mode): Mode6?`, `RiskScoreThreshold (riskScoreThreshold): int?`, `Blacklist (blacklist): IReadOnlyList<string>?`, `Whitelist (whitelist): IReadOnlyList<string>?`, `BlockedTlds (blockedTlds): IReadOnlyList<string>?`, `FailurePolicy (failurePolicy): FailurePolicy1?`, `AllowRequestOverrides (allowRequestOverrides): bool?`, `Configured (configured): bool?`, `UpdatedAt (updatedAt): DateTimeOffset?` | `Models/Data9.cs` |
| `DeveloperSearchResponse` | — | `Success (success): bool?`, `Results (results): IReadOnlyList<DeveloperSearchResult>?`, `Coverage (coverage): Coverage?`, `Reranked (reranked): bool?`, `Repos (repos): IReadOnlyList<Repo>?`, `Sources (sources): IReadOnlyList<Source>?` | `Models/DeveloperSearchResponse.cs` |
| `DeveloperSearchResult` | — | `Id (id): string?`, `Type (type): Type39?`, `Url (url): string?`, `Title (title): string?`, `Passages (passages): IReadOnlyList<Passage>?` | `Models/DeveloperSearchResult.cs` |
| `Diff` | Inline diff artifact when the page changed. The shape depends on what the monitor's scrapeOptions.formats asked for. Markdown-only monitors populate both `text` (unified diff) and `json` (parseDiff AST). JSON-extraction monitors populate `json` as a per-field `{previous, current}` map keyed by JSON path. Mixed-mode monitors (`changeTracking` with … | `Text (text): string?`, `Json (json): object?` | `Models/Diff.cs` |
| `Email` | — | `Enabled (enabled): bool? = false`, `Recipients (recipients): IReadOnlyList<string>?`, `IncludeDiffs (includeDiffs): bool? = false` | `Models/Email.cs` |
| `EndpointFeedbackRequest` | — | `Rating (rating): Rating !req`, `ValuableSources (valuableSources): IReadOnlyList<ValuableSource>?`, `MissingContent (missingContent): IReadOnlyList<MissingContent>?`, `QuerySuggestions (querySuggestions): string?`, `Origin (origin): string? = "api"`, `Integration (integration): string?`, `Endpoint (endpoint): Endpoint !req`, `JobId (jobId): Guid !req`, `Issues (issues): IReadOnlyList<string>?`, `Tags (tags): IReadOnlyList<string>?`, `Note (note): string?`, `Url (url): string?`, `PageNumbers (pageNumbers): IReadOnlyList<int>?`, `Metadata (metadata): object?` | `Models/EndpointFeedbackRequest.cs` |
| `Error` | — | `Id (id): string?`, `Timestamp (timestamp): string?`, `Url (url): string?`, `ErrorValue (error): string?` | `Models/Error.cs` |
| `Evidence` | — | `PathOrUrl (pathOrUrl): string?`, `Reason (reason): string?` | `Models/Evidence.cs` |
| `ExecuteJavaScript` | — | `Type (type): Type26 !req`, `Script (script): string !req` | `Models/ExecuteJavaScript.cs` |
| `Extract400Error` | — | `Error (error): string?` | `Models/Extract400Error.cs` |
| `Extract400Error1` | — | `Error (error): string?` | `Models/Extract400Error1.cs` |
| `Extract500Error` | — | `Error (error): string?` | `Models/Extract500Error.cs` |
| `Extract500Error1` | — | `Error (error): string?` | `Models/Extract500Error1.cs` |
| `ExtractRequest` | — | `Urls (urls): IReadOnlyList<string> !req`, `Prompt (prompt): string?`, `Schema (schema): object?`, `EnableWebSearch (enableWebSearch): bool? = false`, `IgnoreSitemap (ignoreSitemap): bool? = false`, `IncludeSubdomains (includeSubdomains): bool? = true`, `ShowSources (showSources): bool? = false`, `ScrapeOptions (scrapeOptions): ScrapeOptions?`, `IgnoreInvalidUrLs (ignoreInvalidURLs): bool? = true`, `ThreatProtection (threatProtection): ThreatProtectionOverride?` | `Models/ExtractRequest.cs` |
| `ExtractResponse` | — | `Success (success): bool?`, `Id (id): string?`, `InvalidUrLs (invalidURLs): IReadOnlyList<string?>?` | `Models/ExtractResponse.cs` |
| `ExtractStatusResponse` | — | `Success (success): bool?`, `Data (data): object?`, `Status (status): Status4?`, `ExpiresAt (expiresAt): DateTimeOffset?`, `TokensUsed (tokensUsed): int?` | `Models/ExtractStatusResponse.cs` |
| `FeedbackErrorResponse` | — | `Success (success): bool !req`, `Error (error): string !req`, `FeedbackErrorCode (feedbackErrorCode): string?`, `Details (details): IReadOnlyList<object>?` | `Models/FeedbackErrorResponse.cs` |
| `FeedbackErrorResponseError` | — | `Success (success): bool !req`, `Error (error): string !req`, `FeedbackErrorCode (feedbackErrorCode): string?`, `Details (details): IReadOnlyList<object>?` | `Models/FeedbackErrorResponseError.cs` |
| `FeedbackResponse` | — | `Success (success): bool !req`, `FeedbackId (feedbackId): Guid !req`, `CreditsRefunded (creditsRefunded): double !req`, `AlreadySubmitted (alreadySubmitted): bool?`, `DailyCapReached (dailyCapReached): bool?`, `CreditsRefundedToday (creditsRefundedToday): double?`, `DailyRefundCap (dailyRefundCap): double?`, `Warning (warning): string?` | `Models/FeedbackResponse.cs` |
| `Font` | — | `Family (family): string?` | `Models/Font.cs` |
| `FontFamilies` | Font families by role. | `Primary (primary): string?`, `Heading (heading): string?`, `Code (code): string?` | `Models/FontFamilies.cs` |
| `FontSizes` | Font sizes for different text levels. | `H1 (h1): string?`, `H2 (h2): string?`, `H3 (h3): string?`, `Body (body): string?` | `Models/FontSizes.cs` |
| `FontWeights` | Font weight definitions. | `Light (light): int?`, `Regular (regular): int?`, `Medium (medium): int?`, `Bold (bold): int?` | `Models/FontWeights.cs` |
| `GeneratePdf` | — | `Type (type): Type27 !req`, `Format (format): Format? = Format.Letter`, `Landscape (landscape): bool? = false`, `Scale (scale): double? = 1d` | `Models/GeneratePdf.cs` |
| `GitHub` | — | `Type (type): Type43 !req` | `Models/GitHub.cs` |
| `Highlights` | Find relevant source text from the page. Returns the selected text in the response `highlights` field. | `Type (type): Type16 !req`, `Query (query): string !req` | `Models/Highlights.cs` |
| `Html` | — | `Type (type): Type3 !req` | `Models/Html.cs` |
| `Identifiers` | Merchant-specific identifiers for the item. | `MerchantItemId (merchantItemId): string?` | `Models/Identifiers.cs` |
| `Images` | — | `Type (type): Type6 !req` | `Models/Images.cs` |
| `Images2` | Brand images. | `Logo (logo): string?`, `Favicon (favicon): string?`, `OgImage (ogImage): string?` | `Models/Images2.cs` |
| `Images3` | — | `Url (url): string !req`, `Alt (alt): string?` | `Models/Images3.cs` |
| `Images4` | — | `Url (url): string !req`, `Alt (alt): string?` | `Models/Images4.cs` |
| `Images6` | — | `Title (title): string?`, `ImageUrl (imageUrl): string?`, `ImageWidth (imageWidth): int?`, `ImageHeight (imageHeight): int?`, `Url (url): string?`, `Position (position): int?` | `Models/Images6.cs` |
| `Interact402Error` | — | `Error (error): string?` | `Models/Interact402Error.cs` |
| `Interact402Error1` | — | `Error (error): string?` | `Models/Interact402Error1.cs` |
| `InteractExecute402Error` | — | `Error (error): string?` | `Models/InteractExecute402Error.cs` |
| `InteractExecute402Error1` | — | `Error (error): string?` | `Models/InteractExecute402Error1.cs` |
| `InteractExecuteRequest` | — | `Code (code): string !req`, `Language (language): Language? = Language.Node`, `Timeout (timeout): int?` | `Models/InteractExecuteRequest.cs` |
| `InteractExecuteResponse` | — | `Success (success): bool?`, `Stdout (stdout): string?`, `Result (result): string?`, `Stderr (stderr): string?`, `ExitCode (exitCode): int?`, `Killed (killed): bool?`, `Error (error): string?` | `Models/InteractExecuteResponse.cs` |
| `InteractRequest` | — | `Ttl (ttl): int? = 300`, `ActivityTtl (activityTtl): int?`, `StreamWebView (streamWebView): bool? = true`, `Profile (profile): Profile1?` | `Models/InteractRequest.cs` |
| `InteractResponse` | — | `Success (success): bool?`, `Id (id): string?`, `CdpUrl (cdpUrl): string?`, `LiveViewUrl (liveViewUrl): string?`, `InteractiveLiveViewUrl (interactiveLiveViewUrl): string?`, `ExpiresAt (expiresAt): DateTimeOffset?` | `Models/InteractResponse.cs` |
| `InteractResponse1` | — | `Success (success): bool?`, `Sessions (sessions): IReadOnlyList<Session>?` | `Models/InteractResponse1.cs` |
| `InteractResponse2` | — | `Success (success): bool?`, `SessionDurationMs (sessionDurationMs): int?`, `CreditsBilled (creditsBilled): double?` | `Models/InteractResponse2.cs` |
| `Item` | — | `Id (id): string?`, `Name (name): string !req`, `Description (description): string?`, `Images (images): IReadOnlyList<Images4>?`, `Price (price): Price1?`, `Availability (availability): Availability1?`, `Dietary (dietary): IReadOnlyList<string>?`, `Calories (calories): double?`, `OptionGroups (optionGroups): IReadOnlyList<object>?`, `Identifiers (identifiers): Identifiers?`, `Url (url): string?`, `SourceUrl (sourceUrl): string?` | `Models/Item.cs` |
| `JavascriptReturn` | — | `Type (type): string?`, `Value (value): object?` | `Models/JavascriptReturn.cs` |
| `Json` | — | `Type (type): Type8 !req`, `Schema (schema): object?`, `Prompt (prompt): string?` | `Models/Json.cs` |
| `LineHeights` | Line height values for different text types. | `Heading (heading): string?`, `Body (body): string?` | `Models/LineHeights.cs` |
| `Links` | — | `Type (type): Type5 !req` | `Models/Links.cs` |
| `Links2` | — | `Url (url): string !req`, `Title (title): string?`, `Description (description): string?` | `Models/Links2.cs` |
| `Location` | Location settings for the request. When specified, this will use an appropriate proxy if available and emulate the corresponding language and timezone settings. Defaults to 'US' if not specified. | `Country (country): string? = "US"`, `Languages (languages): IReadOnlyList<string>?` | `Models/Location.cs` |
| `Map402Error` | — | `Error (error): string?` | `Models/Map402Error.cs` |
| `Map402Error1` | — | `Error (error): string?` | `Models/Map402Error1.cs` |
| `Map429Error` | — | `Error (error): string?` | `Models/Map429Error.cs` |
| `Map429Error1` | — | `Error (error): string?` | `Models/Map429Error1.cs` |
| `Map500Error` | — | `Error (error): string?` | `Models/Map500Error.cs` |
| `Map500Error1` | — | `Error (error): string?` | `Models/Map500Error1.cs` |
| `MapRequest` | — | `Url (url): string !req`, `Search (search): string?`, `Sitemap (sitemap): Sitemap2? = Sitemap2.Include`, `IncludeSubdomains (includeSubdomains): bool? = true`, `IgnoreQueryParameters (ignoreQueryParameters): bool? = true`, `IgnoreCache (ignoreCache): bool? = false`, `Limit (limit): int? = 5000`, `Timeout (timeout): int?`, `Location (location): Location?`, `AuditMetadata (auditMetadata): AuditMetadata?`, `ThreatProtection (threatProtection): ThreatProtectionOverride?` | `Models/MapRequest.cs` |
| `MapResponse` | — | `Success (success): bool?`, `Links (links): IReadOnlyList<Links2>?` | `Models/MapResponse.cs` |
| `Markdown` | — | `Type (type): Type1 !req` | `Models/Markdown.cs` |
| `MeaningfulChange` | — | `Type (type): Type30?`, `Before (before): string?`, `After (after): string?`, `Reason (reason): string?` | `Models/MeaningfulChange.cs` |
| `Menu` | — | `Type (type): Type12 !req` | `Models/Menu.cs` |
| `Menu1` | Menu information extracted from the page if `menu` is in `formats`. Includes the merchant, currency, and a list of sections, where each section carries items with description, images, price, availability, dietary tags, calories, and option groups. | `IsMenu (isMenu): bool !req`, `Confidence (confidence): double?`, `Merchant (merchant): Merchant?`, `Currency (currency): string?`, `Sections (sections): IReadOnlyList<Section> !req`, `SourceUrl (sourceUrl): string?` | `Models/Menu1.cs` |
| `Merchant` | The merchant the menu belongs to. | `Name (name): string !req`, `Type (type): string?` | `Models/Merchant.cs` |
| `Metadata` | — | `Title (title): Title?` (union), `Description (description): Description?` (union), `Language (language): Language?`, `SourceUrl (sourceURL): string?`, `Url (url): string?`, `Keywords (keywords): Keywords?` (union), `OgLocaleAlternate (ogLocaleAlternate): IReadOnlyList<string>?`, `AnyOtherMetadata (<any other metadata>): AnyOtherMetadata?` (union), `StatusCode (statusCode): int?`, `NumPages (numPages): int?`, `TotalPages (totalPages): int?`, `ContentType (contentType): string?`, `Error (error): string?`, `ConcurrencyLimited (concurrencyLimited): bool?`, `ConcurrencyQueueDurationMs (concurrencyQueueDurationMs): double?` | `Models/Metadata.cs` |
| `Metadata1` | — | `Title (title): Title?` (union), `Description (description): Description?` (union), `Language (language): Language?`, `SourceUrl (sourceURL): string?`, `Url (url): string?`, `Keywords (keywords): Keywords?` (union), `OgLocaleAlternate (ogLocaleAlternate): IReadOnlyList<string>?`, `AnyOtherMetadata (<any other metadata>): string?`, `StatusCode (statusCode): int?`, `NumPages (numPages): int?`, `TotalPages (totalPages): int?`, `Error (error): string?`, `ConcurrencyLimited (concurrencyLimited): bool?`, `ConcurrencyQueueDurationMs (concurrencyQueueDurationMs): double?` | `Models/Metadata1.cs` |
| `Metadata3` | — | `Title (title): string?`, `Description (description): string?`, `SourceUrl (sourceURL): string?`, `Url (url): string?`, `StatusCode (statusCode): int?`, `NumPages (numPages): int?`, `TotalPages (totalPages): int?`, `Error (error): string?` | `Models/Metadata3.cs` |
| `MissingContent` | — | `Topic (topic): string !req`, `Description (description): string?` | `Models/MissingContent.cs` |
| `MonitorCheck` | — | `Id (id): Guid?`, `MonitorId (monitorId): Guid?`, `Status (status): Status2?`, `Trigger (trigger): Trigger?`, `ScheduledFor (scheduledFor): DateTimeOffset?`, `StartedAt (startedAt): DateTimeOffset?`, `FinishedAt (finishedAt): DateTimeOffset?`, `EstimatedCredits (estimatedCredits): int?`, `ReservedCredits (reservedCredits): int?`, `ActualCredits (actualCredits): int?`, `BillingStatus (billingStatus): string?`, `Summary (summary): MonitorSummary?`, `TargetResults (targetResults): string?`, `NotificationStatus (notificationStatus): object?`, `Error (error): string?`, `CreatedAt (createdAt): DateTimeOffset?`, `UpdatedAt (updatedAt): DateTimeOffset?` | `Models/MonitorCheck.cs` |
| `MonitorCheckDetailResponse` | — | `Success (success): bool?`, `Next (next): string?`, `Data (data): Data?` | `Models/MonitorCheckDetailResponse.cs` |
| `MonitorCheckListResponse` | — | `Success (success): bool?`, `Data (data): IReadOnlyList<MonitorCheck>?` | `Models/MonitorCheckListResponse.cs` |
| `MonitorCheckPage` | — | `Id (id): Guid?`, `TargetId (targetId): string?`, `Url (url): string?`, `Status (status): Status3?`, `PreviousScrapeId (previousScrapeId): Guid?`, `CurrentScrapeId (currentScrapeId): Guid?`, `StatusCode (statusCode): int?`, `Error (error): string?`, `Metadata (metadata): object?`, `Judgment (judgment): MonitorPageJudgment?`, `Diff (diff): Diff?`, `Snapshot (snapshot): Snapshot?`, `CreatedAt (createdAt): DateTimeOffset?` | `Models/MonitorCheckPage.cs` |
| `MonitorCreateRequest` | — | `Name (name): string !req`, `Schedule (schedule): MonitorSchedule !req`, `Webhook (webhook): MonitorWebhook?`, `Notification (notification): MonitorNotification?`, `Targets (targets): IReadOnlyList<MonitorTarget> !req` (union), `RetentionDays (retentionDays): int? = 30`, `Goal (goal): string?`, `JudgeEnabled (judgeEnabled): bool?` | `Models/MonitorCreateRequest.cs` |
| `MonitorListResponse` | — | `Success (success): bool?`, `Data (data): IReadOnlyList<MonitorModel>?` | `Models/MonitorListResponse.cs` |
| `MonitorModel` | — | `Id (id): Guid?`, `Name (name): string?`, `Status (status): Status1?`, `Schedule (schedule): Schedule?`, `NextRunAt (nextRunAt): DateTimeOffset?`, `LastRunAt (lastRunAt): DateTimeOffset?`, `CurrentCheckId (currentCheckId): Guid?`, `Targets (targets): IReadOnlyList<MonitorTarget>?` (union), `Webhook (webhook): MonitorWebhook?`, `Notification (notification): MonitorNotification?`, `RetentionDays (retentionDays): int?`, `EstimatedCreditsPerMonth (estimatedCreditsPerMonth): int?`, `LastCheckSummary (lastCheckSummary): MonitorSummary?`, `Goal (goal): string?`, `JudgeEnabled (judgeEnabled): bool?`, `CreatedAt (createdAt): DateTimeOffset?`, `UpdatedAt (updatedAt): DateTimeOffset?` | `Models/MonitorModel.cs` |
| `MonitorNotification` | — | `Email (email): Email?` | `Models/MonitorNotification.cs` |
| `MonitorPageJudgment` | — | `Meaningful (meaningful): bool?`, `Confidence (confidence): Confidence?`, `Reason (reason): string?`, `MeaningfulChanges (meaningfulChanges): IReadOnlyList<MeaningfulChange>?` | `Models/MonitorPageJudgment.cs` |
| `MonitorResponse` | — | `Success (success): bool?`, `Data (data): MonitorModel?` | `Models/MonitorResponse.cs` |
| `MonitorRunResponse` | — | `Success (success): bool?`, `Id (id): Guid?`, `Data (data): MonitorCheck?` | `Models/MonitorRunResponse.cs` |
| `MonitorSchedule` | Schedule for monitor checks. Provide either `cron` or `text`. | `Cron (cron): string?`, `Text (text): string?`, `Timezone (timezone): string? = "UTC"` | `Models/MonitorSchedule.cs` |
| `MonitorSummary` | — | `TotalPages (totalPages): int?`, `Same (same): int?`, `Changed (changed): int?`, `New (new): int?`, `Removed (removed): int?`, `Error (error): int?` | `Models/MonitorSummary.cs` |
| `MonitorUpdateRequest` | Partial monitor update payload. Include at least one field. | `Name (name): string?`, `Schedule (schedule): MonitorSchedule?`, `Webhook (webhook): MonitorWebhook?`, `Notification (notification): MonitorNotification?`, `Targets (targets): IReadOnlyList<MonitorTarget>?` (union), `RetentionDays (retentionDays): int?`, `Goal (goal): string?`, `JudgeEnabled (judgeEnabled): bool?`, `Status (status): Status?` | `Models/MonitorUpdateRequest.cs` |
| `MonitorWebhook` | Webhook destination for monitor page and check completion events. | `Url (url): string !req`, `Headers (headers): IReadOnlyDictionary<string, string>?`, `Metadata (metadata): object?`, `Events (events): IReadOnlyList<Event>?` | `Models/MonitorWebhook.cs` |
| `News` | — | `Type (type): Type42 !req` | `Models/News.cs` |
| `News1` | — | `Title (title): string?`, `Snippet (snippet): string?`, `Url (url): string?`, `Date (date): string?`, `ImageUrl (imageUrl): string?`, `Position (position): int?`, `Markdown (markdown): string?`, `Html (html): string?`, `RawHtml (rawHtml): string?`, `Links (links): IReadOnlyList<string>?`, `Screenshot (screenshot): string?`, `Audio (audio): string?`, `Video (video): string?`, `Metadata (metadata): Metadata3?` | `Models/News1.cs` |
| `Options` | The crawler options used for this crawl | `ScrapeOptions (scrapeOptions): ScrapeOptions?` | `Models/Options.cs` |
| `OriginalPrice` | The original (pre-discount) price of the variant. | `Amount (amount): double !req`, `Currency (currency): string?`, `Formatted (formatted): string?` | `Models/OriginalPrice.cs` |
| `Parse400Error` | — | `Success (success): bool?`, `Code (code): string?`, `Error (error): string?` | `Models/Parse400Error.cs` |
| `Parse400Error1` | — | `Success (success): bool?`, `Code (code): string?`, `Error (error): string?` | `Models/Parse400Error1.cs` |
| `Parse402Error` | — | `Error (error): string?` | `Models/Parse402Error.cs` |
| `Parse402Error1` | — | `Error (error): string?` | `Models/Parse402Error1.cs` |
| `Parse429Error` | — | `Error (error): string?` | `Models/Parse429Error.cs` |
| `Parse429Error1` | — | `Error (error): string?` | `Models/Parse429Error1.cs` |
| `Parse500Error` | — | `Success (success): bool?`, `Code (code): string?`, `Error (error): string?` | `Models/Parse500Error.cs` |
| `Parse500Error1` | — | `Success (success): bool?`, `Code (code): string?`, `Error (error): string?` | `Models/Parse500Error1.cs` |
| `ParseOptions` | Optional parse options sent as JSON in the multipart `options` field. | `Formats (formats): IReadOnlyList<ParseFormat>?` (union), `OnlyMainContent (onlyMainContent): bool? = true`, `IncludeTags (includeTags): IReadOnlyList<string>?`, `ExcludeTags (excludeTags): IReadOnlyList<string>?`, `Headers (headers): object?`, `Timeout (timeout): int? = 30000`, `Parsers (parsers): IReadOnlyList<Parser1>?`, `SkipTlsVerification (skipTlsVerification): bool? = true`, `RemoveBase64Images (removeBase64Images): bool? = true`, `BlockAds (blockAds): bool? = true`, `RedactPii (redactPII): RedactPii?` (union), `Proxy (proxy): Proxy1?`, `Origin (origin): string? = "api"`, `Integration (integration): string?`, `AuditMetadata (auditMetadata): AuditMetadata?`, `ZeroDataRetention (zeroDataRetention): bool? = false` | `Models/ParseOptions.cs` |
| `Parser` | — | `Type (type): Type17 !req`, `Mode (mode): Mode1? = Mode1.Auto`, `MaxPages (maxPages): int?` | `Models/Parser.cs` |
| `Parser1` | — | `Type (type): Type17 !req`, `Mode (mode): Mode4? = Mode4.Auto`, `MaxPages (maxPages): int?` | `Models/Parser1.cs` |
| `Passage` | — | `Text (text): string?` | `Models/Passage.cs` |
| `Pdf` | — | `Type (type): Type17 !req` | `Models/Pdf.cs` |
| `Period` | — | `StartDate (startDate): DateTimeOffset?`, `EndDate (endDate): DateTimeOffset?`, `ApiKey (apiKey): string?`, `TotalCredits (totalCredits): int?` | `Models/Period.cs` |
| `Period1` | — | `StartDate (startDate): DateTimeOffset?`, `EndDate (endDate): DateTimeOffset?`, `ApiKey (apiKey): string?`, `TotalTokens (totalTokens): int?` | `Models/Period1.cs` |
| `PressAKey` | Press a key on the page. See https://asawicki.info/nosense/doc/devices/keyboard/key_codes.html for key codes. | `Type (type): Type23 !req`, `Key (key): string !req` | `Models/PressAKey.cs` |
| `Price` | The current price of the variant. | `Amount (amount): double !req`, `Currency (currency): string?`, `Formatted (formatted): string?` | `Models/Price.cs` |
| `Price1` | The price of the item. | `Amount (amount): double !req`, `Currency (currency): string?`, `Formatted (formatted): string?` | `Models/Price1.cs` |
| `Product` | — | `Type (type): Type11 !req` | `Models/Product.cs` |
| `Product1` | Product information extracted from the page if `product` is in `formats`. Includes title, brand, category, description, and variants. Pricing, availability, and images live on each variant. | `Title (title): string !req`, `Brand (brand): string?`, `Category (category): string?`, `Url (url): string !req`, `Description (description): string?`, `Variants (variants): IReadOnlyList<Variant> !req` | `Models/Product1.cs` |
| `Profile` | Enable persistent browser storage across scrape and interact sessions. Pass a profile when scraping to preserve cookies, localStorage, and session data. Sessions with the same profile name share browser state. | `Name (name): string !req`, `SaveChanges (saveChanges): bool? = true` | `Models/Profile.cs` |
| `Profile1` | Enable persistent storage across interact sessions. Data saved in one session can be loaded in a later session using the same name. | `Name (name): string !req`, `SaveChanges (saveChanges): bool? = true` | `Models/Profile1.cs` |
| `Question` | Ask a natural-language question about the page. Returns the answer in the response `answer` field. | `Type (type): Type15 !req`, `QuestionValue (question): string !req` | `Models/Question.cs` |
| `RawHtml` | — | `Type (type): Type4 !req` | `Models/RawHtml.cs` |
| `RedactPiiOptions` | Tuning options for PII redaction. | `Mode (mode): Mode2? = Mode2.Accurate`, `Entities (entities): IReadOnlyList<RedactPiiEntity>?`, `ReplaceStyle (replaceStyle): ReplaceStyle? = ReplaceStyle.Tag` | `Models/RedactPiiOptions.cs` |
| `Repo` | — | `RepoValue (repo): string?`, `Indexed (indexed): bool?`, `Types (types): Types?` | `Models/Repo.cs` |
| `Research` | — | `Type (type): Type44 !req` | `Models/Research.cs` |
| `ResearchPaperMetadata` | — | `PaperId (paperId): string !req`, `Ids (ids): IReadOnlyDictionary<string, object>?`, `Title (title): string !req`, `Abstract (abstract): string !req`, `Authors (authors): string?`, `Categories (categories): IReadOnlyList<string>?`, `CreatedDate (createdDate): string?`, `UpdateDate (updateDate): string?` | `Models/ResearchPaperMetadata.cs` |
| `ResearchPaperMetadataResponse` | — | `Success (success): bool !req`, `Paper (paper): ResearchPaperMetadata !req` | `Models/ResearchPaperMetadataResponse.cs` |
| `ResearchPaperResult` | — | `PaperId (paperId): string !req`, `PrimaryId (primaryId): string !req`, `Ids (ids): IReadOnlyDictionary<string, object>?`, `Title (title): string !req`, `Abstract (abstract): string !req`, `Score (score): double !req`, `Signals (signals): ResearchPaperSignals?` | `Models/ResearchPaperResult.cs` |
| `ResearchPaperSignals` | — | `Structural (structural): double !req`, `Semantic (semantic): double !req`, `ArticleRank (articleRank): double !req`, `SeedOverlap (seedOverlap): int !req` | `Models/ResearchPaperSignals.cs` |
| `ResearchPassage` | — | `Text (text): string !req`, `Score (score): double !req` | `Models/ResearchPassage.cs` |
| `ResearchReadPaperResponse` | — | `Success (success): bool !req`, `Paper (paper): ResearchPaperMetadata !req`, `PaperId (paperId): string !req`, `Query (query): string !req`, `Passages (passages): IReadOnlyList<ResearchPassage> !req` | `Models/ResearchReadPaperResponse.cs` |
| `ResearchSearchPapersResponse` | — | `Success (success): bool !req`, `Results (results): IReadOnlyList<ResearchPaperResult> !req` | `Models/ResearchSearchPapersResponse.cs` |
| `ResearchSimilarPapersResponse` | — | `Success (success): bool !req`, `Results (results): IReadOnlyList<ResearchPaperResult> !req`, `PoolSize (poolSize): int !req`, `Truncated (truncated): bool !req`, `Note (note): string?` | `Models/ResearchSimilarPapersResponse.cs` |
| `Sale` | Sale/discount information for the variant, present when the variant is discounted. | `OriginalPrice (originalPrice): OriginalPrice !req` | `Models/Sale.cs` |
| `Schedule` | — | `Cron (cron): string?`, `Timezone (timezone): string?` | `Models/Schedule.cs` |
| `Scrape` | — | `Type (type): Type25 !req` | `Models/Scrape.cs` |
| `Scrape1` | — | `Url (url): string?`, `Html (html): string?` | `Models/Scrape1.cs` |
| `Scrape402Error` | — | `Error (error): string?` | `Models/Scrape402Error.cs` |
| `Scrape402Error1` | — | `Error (error): string?` | `Models/Scrape402Error1.cs` |
| `Scrape402Error2` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Scrape402Error2.cs` |
| `Scrape402Error21` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Scrape402Error21.cs` |
| `Scrape429Error` | — | `Error (error): string?` | `Models/Scrape429Error.cs` |
| `Scrape429Error1` | — | `Error (error): string?` | `Models/Scrape429Error1.cs` |
| `Scrape429Error2` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Scrape429Error2.cs` |
| `Scrape429Error21` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Scrape429Error21.cs` |
| `Scrape500Error` | — | `Success (success): bool?`, `Code (code): string?`, `Error (error): string?` | `Models/Scrape500Error.cs` |
| `Scrape500Error1` | — | `Success (success): bool?`, `Code (code): string?`, `Error (error): string?` | `Models/Scrape500Error1.cs` |
| `Scrape500Error2` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Scrape500Error2.cs` |
| `Scrape500Error21` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Scrape500Error21.cs` |
| `ScrapeInteract400Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract400Error.cs` |
| `ScrapeInteract400Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract400Error1.cs` |
| `ScrapeInteract402Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract402Error.cs` |
| `ScrapeInteract402Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract402Error1.cs` |
| `ScrapeInteract403Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract403Error.cs` |
| `ScrapeInteract403Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract403Error1.cs` |
| `ScrapeInteract404Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract404Error.cs` |
| `ScrapeInteract404Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract404Error1.cs` |
| `ScrapeInteract409Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract409Error.cs` |
| `ScrapeInteract409Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract409Error1.cs` |
| `ScrapeInteract410Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract410Error.cs` |
| `ScrapeInteract410Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract410Error1.cs` |
| `ScrapeInteract429Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract429Error.cs` |
| `ScrapeInteract429Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract429Error1.cs` |
| `ScrapeInteract502Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract502Error.cs` |
| `ScrapeInteract502Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/ScrapeInteract502Error1.cs` |
| `ScrapeInteractRequest` | — | `Code (code): string !req`, `Language (language): Language? = Language.Node`, `Timeout (timeout): int? = 30`, `Origin (origin): string?` | `Models/ScrapeInteractRequest.cs` |
| `ScrapeInteractResponse` | — | `Success (success): bool?`, `CdpUrl (cdpUrl): string?`, `LiveViewUrl (liveViewUrl): string?`, `InteractiveLiveViewUrl (interactiveLiveViewUrl): string?`, `Output (output): string?`, `Stdout (stdout): string?`, `Result (result): string?`, `Stderr (stderr): string?`, `ExitCode (exitCode): int?`, `Killed (killed): bool?`, `Error (error): string?` | `Models/ScrapeInteractResponse.cs` |
| `ScrapeOptions` | — | `Formats (formats): IReadOnlyList<Format>?`, `OnlyMainContent (onlyMainContent): bool? = true`, `OnlyCleanContent (onlyCleanContent): bool? = false`, `IncludeTags (includeTags): IReadOnlyList<string>?`, `ExcludeTags (excludeTags): IReadOnlyList<string>?`, `MaxAge (maxAge): int? = 172800000`, `MinAge (minAge): int?`, `Headers (headers): object?`, `WaitFor (waitFor): int? = 0`, `Mobile (mobile): bool? = false`, `SkipTlsVerification (skipTlsVerification): bool? = true`, `Timeout (timeout): int? = 60000`, `Parsers (parsers): IReadOnlyList<Parser>?`, `Actions (actions): IReadOnlyList<ActionModel>?` (union), `Location (location): Location?`, `RemoveBase64Images (removeBase64Images): bool? = true`, `BlockAds (blockAds): bool? = true`, `Proxy (proxy): Proxy? = Proxy.Auto`, `StoreInCache (storeInCache): bool? = true`, `Lockdown (lockdown): bool? = false`, `RedactPii (redactPII): RedactPii?` (union), `Profile (profile): Profile?`, `ThreatProtection (threatProtection): ThreatProtectionOverride?`, `AuditMetadata (auditMetadata): AuditMetadata?` | `Models/ScrapeOptions.cs` |
| `ScrapeRequest` | — | `Url (url): string !req`, `Formats (formats): IReadOnlyList<Format>?`, `OnlyMainContent (onlyMainContent): bool? = true`, `OnlyCleanContent (onlyCleanContent): bool? = false`, `IncludeTags (includeTags): IReadOnlyList<string>?`, `ExcludeTags (excludeTags): IReadOnlyList<string>?`, `MaxAge (maxAge): int? = 172800000`, `MinAge (minAge): int?`, `Headers (headers): object?`, `WaitFor (waitFor): int? = 0`, `Mobile (mobile): bool? = false`, `SkipTlsVerification (skipTlsVerification): bool? = true`, `Timeout (timeout): int? = 60000`, `Parsers (parsers): IReadOnlyList<Parser>?`, `Actions (actions): IReadOnlyList<ActionModel>?` (union), `Location (location): Location?`, `RemoveBase64Images (removeBase64Images): bool? = true`, `BlockAds (blockAds): bool? = true`, `Proxy (proxy): Proxy? = Proxy.Auto`, `StoreInCache (storeInCache): bool? = true`, `Lockdown (lockdown): bool? = false`, `RedactPii (redactPII): RedactPii?` (union), `Profile (profile): Profile?`, `ThreatProtection (threatProtection): ThreatProtectionOverride?`, `AuditMetadata (auditMetadata): AuditMetadata?`, `ZeroDataRetention (zeroDataRetention): bool? = false` | `Models/ScrapeRequest.cs` |
| `ScrapeResponse` | — | `Success (success): bool?`, `Data (data): Data1?` | `Models/ScrapeResponse.cs` |
| `ScrapeTarget` | — | `Id (id): Guid?`, `Type (type): TypeEnum !req`, `Urls (urls): IReadOnlyList<string> !req`, `ScrapeOptions (scrapeOptions): ScrapeOptions?` | `Models/ScrapeTarget.cs` |
| `Screenshot` | — | `Type (type): Type7 !req`, `FullPage (fullPage): bool? = false`, `Quality (quality): int?`, `Viewport (viewport): Viewport?` | `Models/Screenshot.cs` |
