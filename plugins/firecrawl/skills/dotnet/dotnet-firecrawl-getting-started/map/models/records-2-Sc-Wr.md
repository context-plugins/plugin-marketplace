# Records (`Screenshot1` … `WriteText`)

**Exact coverage: `Screenshot1` through `WriteText`**, alphabetical — these are the literal first and last record names on this page; a name outside that range is on a neighbouring page.

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
| `Screenshot1` | — | `Type (type): Type20 !req`, `FullPage (fullPage): bool? = false`, `Quality (quality): int?`, `Viewport (viewport): Viewport?` | `Models/Screenshot1.cs` |
| `Scroll` | — | `Type (type): Type24 !req`, `Direction (direction): Direction? = Direction.Down`, `Selector (selector): string?` | `Models/Scroll.cs` |
| `Search408Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Search408Error.cs` |
| `Search408Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/Search408Error1.cs` |
| `Search500Error` | — | `Success (success): bool?`, `Code (code): string?`, `Error (error): string?` | `Models/Search500Error.cs` |
| `Search500Error1` | — | `Success (success): bool?`, `Code (code): string?`, `Error (error): string?` | `Models/Search500Error1.cs` |
| `SearchDeveloperRequest` | — | `Query (query): string !req`, `K (k): int? = 10`, `Types (types): IReadOnlyList<Types1>?`, `Repos (repos): IReadOnlyList<string>?`, `Sources (sources): IReadOnlyList<string>?`, `Skills (skills): Skills1?`, `Passages (passages): int? = 1`, `Language (language): string?`, `Topic (topic): string?`, `License (license): string?`, `MinStars (min_stars): int?`, `MaxStars (max_stars): int?`, `Archived (archived): bool?`, `Fork (fork): bool?` | `Models/SearchDeveloperRequest.cs` |
| `SearchFeedbackRequest` | For 'good', include valuableSources. For 'partial', include valuableSources or missingContent. For 'bad', include missingContent or querySuggestions. | `Rating (rating): Rating !req`, `ValuableSources (valuableSources): IReadOnlyList<ValuableSource>?`, `MissingContent (missingContent): IReadOnlyList<MissingContent>?`, `QuerySuggestions (querySuggestions): string?`, `Origin (origin): string? = "api"`, `Integration (integration): string?` | `Models/SearchFeedbackRequest.cs` |
| `SearchRequest` | — | `Query (query): string !req`, `Limit (limit): int? = 10`, `Sources (sources): IReadOnlyList<Source1>?` (union), `Categories (categories): IReadOnlyList<Category>?` (union), `IncludeDomains (includeDomains): IReadOnlyList<string>?`, `ExcludeDomains (excludeDomains): IReadOnlyList<string>?`, `Tbs (tbs): string?`, `Location (location): string?`, `Country (country): string? = "US"`, `Safe (safe): bool?`, `Timeout (timeout): int? = 60000`, `IgnoreInvalidUrLs (ignoreInvalidURLs): bool? = false`, `Highlights (highlights): bool? = true`, `Enterprise (enterprise): IReadOnlyList<Enterprise>?`, `ScrapeOptions (scrapeOptions): ScrapeOptions?`, `ThreatProtection (threatProtection): ThreatProtectionOverride?` | `Models/SearchRequest.cs` |
| `SearchResponse` | — | `Success (success): bool?`, `Data (data): Data8?`, `Warning (warning): string?`, `Id (id): string?`, `CreditsUsed (creditsUsed): int?` | `Models/SearchResponse.cs` |
| `SearchTarget` | Runs web search queries on each check and alerts on new results that match the monitor's goal. Requires a non-empty top-level `goal` on the monitor unless `judgeEnabled` is `false`. | `Id (id): Guid?`, `Type (type): Type29 !req`, `Queries (queries): IReadOnlyList<string> !req`, `SearchWindow (searchWindow): SearchWindow? = SearchWindow._24H`, `MaxResults (maxResults): int? = 10`, `IncludeDomains (includeDomains): IReadOnlyList<string>?`, `ExcludeDomains (excludeDomains): IReadOnlyList<string>?` | `Models/SearchTarget.cs` |
| `Section` | — | `Id (id): string?`, `Name (name): string !req`, `Description (description): string?`, `Items (items): IReadOnlyList<Item> !req` | `Models/Section.cs` |
| `Session` | — | `Id (id): string?`, `Status (status): Status10?`, `CdpUrl (cdpUrl): string?`, `LiveViewUrl (liveViewUrl): string?`, `InteractiveLiveViewUrl (interactiveLiveViewUrl): string?`, `StreamWebView (streamWebView): bool?`, `CreatedAt (createdAt): DateTimeOffset?`, `LastActivity (lastActivity): DateTimeOffset?` | `Models/Session.cs` |
| `Snapshot` | Snapshot of the current JSON extraction at this run. Present on JSON-extraction and mixed-mode monitors; absent for markdown-only monitors. | `Json (json): object?` | `Models/Snapshot.cs` |
| `Source` | — | `SourceValue (source): string?`, `Indexed (indexed): bool?` | `Models/Source.cs` |
| `Spacing` | Spacing and layout information. | `BaseUnit (baseUnit): int?`, `BorderRadius (borderRadius): string?`, `Padding (padding): object?`, `Margins (margins): object?` | `Models/Spacing.cs` |
| `SuccessResponse` | — | `Success (success): bool?` | `Models/SuccessResponse.cs` |
| `Summary` | — | `Type (type): Type2 !req` | `Models/Summary.cs` |
| `SupportAskRequest` | — | `Question (question): string !req`, `Rationale (rationale): string?` | `Models/SupportAskRequest.cs` |
| `SupportAskResponse` | — | `Answer (answer): string?`, `Confidence (confidence): Confidence?`, `FixParameters (fixParameters): object?`, `Validation (validation): object?`, `Feedback (feedback): object?`, `DurationMs (durationMs): int?` | `Models/SupportAskResponse.cs` |
| `SupportDocsSearchRequest` | — | `Question (question): string !req` | `Models/SupportDocsSearchRequest.cs` |
| `SupportDocsSearchResponse` | — | `RequestId (requestId): string?`, `Answer (answer): string?`, `Evidence (evidence): IReadOnlyList<Evidence>?`, `Usage (usage): Usage?`, `DurationMs (durationMs): int?` | `Models/SupportDocsSearchResponse.cs` |
| `SupportProxyErrorResponse` | — | `Error (error): string?` | `Models/SupportProxyErrorResponse.cs` |
| `SupportProxyErrorResponseError` | — | `Error (error): string?` | `Models/SupportProxyErrorResponseError.cs` |
| `TeamActivityResponse` | — | `Success (success): bool?`, `Data (data): IReadOnlyList<Data7>?`, `Cursor (cursor): string?`, `HasMore (has_more): bool?` | `Models/TeamActivityResponse.cs` |
| `TeamCreditUsage404Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamCreditUsage404Error.cs` |
| `TeamCreditUsage404Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamCreditUsage404Error1.cs` |
| `TeamCreditUsage500Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamCreditUsage500Error.cs` |
| `TeamCreditUsage500Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamCreditUsage500Error1.cs` |
| `TeamCreditUsageHistorical500Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamCreditUsageHistorical500Error.cs` |
| `TeamCreditUsageHistorical500Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamCreditUsageHistorical500Error1.cs` |
| `TeamCreditUsageHistoricalResponse` | — | `Success (success): bool?`, `Periods (periods): IReadOnlyList<Period>?` | `Models/TeamCreditUsageHistoricalResponse.cs` |
| `TeamCreditUsageResponse` | — | `Success (success): bool?`, `Data (data): Data5?` | `Models/TeamCreditUsageResponse.cs` |
| `TeamQueueStatusResponse` | — | `Success (success): bool?`, `JobsInQueue (jobsInQueue): double?`, `ActiveJobsInQueue (activeJobsInQueue): double?`, `WaitingJobsInQueue (waitingJobsInQueue): double?`, `MaxConcurrency (maxConcurrency): double?`, `MostRecentSuccess (mostRecentSuccess): DateTimeOffset?` | `Models/TeamQueueStatusResponse.cs` |
| `TeamThreatProtectionRequest` | — | `Mode (mode): Mode6 !req`, `RiskScoreThreshold (riskScoreThreshold): int?`, `Blacklist (blacklist): IReadOnlyList<string>?`, `Whitelist (whitelist): IReadOnlyList<string>?`, `BlockedTlds (blockedTlds): IReadOnlyList<string>?`, `FailurePolicy (failurePolicy): FailurePolicy1?`, `AllowRequestOverrides (allowRequestOverrides): bool?` | `Models/TeamThreatProtectionRequest.cs` |
| `TeamThreatProtectionResponse` | — | `Success (success): bool?`, `Data (data): Data9?` | `Models/TeamThreatProtectionResponse.cs` |
| `TeamTokenUsage404Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamTokenUsage404Error.cs` |
| `TeamTokenUsage404Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamTokenUsage404Error1.cs` |
| `TeamTokenUsage500Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamTokenUsage500Error.cs` |
| `TeamTokenUsage500Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamTokenUsage500Error1.cs` |
| `TeamTokenUsageHistorical500Error` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamTokenUsageHistorical500Error.cs` |
| `TeamTokenUsageHistorical500Error1` | — | `Success (success): bool?`, `Error (error): string?` | `Models/TeamTokenUsageHistorical500Error1.cs` |
| `TeamTokenUsageHistoricalResponse` | — | `Success (success): bool?`, `Periods (periods): IReadOnlyList<Period1>?` | `Models/TeamTokenUsageHistoricalResponse.cs` |
| `TeamTokenUsageResponse` | — | `Success (success): bool?`, `Data (data): Data6?` | `Models/TeamTokenUsageResponse.cs` |
| `ThreatProtectionOverride` | Per-request Threat Protection override. Fields you provide replace the corresponding fields of your organization's policy for this request only; omitted fields keep their organization-level values. Requires Threat Protection to be enabled for your team (enterprise feature) — otherwise the request is rejected with a 403. If your organization has … | `Mode (mode): Mode3?`, `RiskScoreThreshold (riskScoreThreshold): int?`, `Blacklist (blacklist): IReadOnlyList<string>?`, `Whitelist (whitelist): IReadOnlyList<string>?`, `BlockedTlds (blockedTlds): IReadOnlyList<string>?`, `FailurePolicy (failurePolicy): FailurePolicy?` | `Models/ThreatProtectionOverride.cs` |
| `Types` | Which result types are indexed for this repository: `issue`, `pullRequest`, and `readme`. | `Issue (issue): bool?`, `PullRequest (pullRequest): bool?`, `Readme (readme): bool?` | `Models/Types.cs` |
| `Typography` | Detailed typography information. | `FontFamilies (fontFamilies): FontFamilies?`, `FontSizes (fontSizes): FontSizes?`, `FontWeights (fontWeights): FontWeights?`, `LineHeights (lineHeights): LineHeights?` | `Models/Typography.cs` |
| `Usage` | — | `InputTokens (inputTokens): int?`, `OutputTokens (outputTokens): int?`, `TotalTokens (totalTokens): int?` | `Models/Usage.cs` |
| `ValuableSource` | — | `Url (url): string !req`, `Reason (reason): string?` | `Models/ValuableSource.cs` |
| `Variant` | — | `Id (id): string?`, `Sku (sku): string?`, `Title (title): string?`, `Values (values): IReadOnlyDictionary<string, string>?`, `Price (price): Price?`, `Sale (sale): Sale?`, `Availability (availability): Availability !req`, `Images (images): IReadOnlyList<Images3>?` | `Models/Variant.cs` |
| `Video` | Extract best-quality video from supported video URLs, e.g. YouTube. Returns a signed GCS URL. | `Type (type): Type14 !req` | `Models/Video.cs` |
| `Viewport` | — | `Width (width): int !req`, `Height (height): int !req` | `Models/Viewport.cs` |
| `WaitByDuration` | — | `Type (type): Type18 !req`, `Milliseconds (milliseconds): int !req` | `Models/WaitByDuration.cs` |
| `WaitForElement` | — | `Type (type): Type19 !req`, `Selector (selector): string !req` | `Models/WaitForElement.cs` |
| `Web` | — | `Type (type): Type40 !req`, `Tbs (tbs): string?`, `Location (location): string?` | `Models/Web.cs` |
| `Web1` | — | `Title (title): string?`, `Description (description): string?`, `Url (url): string?`, `Markdown (markdown): string?`, `Html (html): string?`, `RawHtml (rawHtml): string?`, `Links (links): IReadOnlyList<string>?`, `Screenshot (screenshot): string?`, `Audio (audio): string?`, `Video (video): string?`, `Metadata (metadata): Metadata3?` | `Models/Web1.cs` |
| `Webhook` | A webhook specification object. | `Url (url): string !req`, `Headers (headers): IReadOnlyDictionary<string, string>?`, `Metadata (metadata): object?`, `Events (events): IReadOnlyList<Event1>?` | `Models/Webhook.cs` |
| `Webhook1` | A webhook specification object. | `Url (url): string !req`, `Headers (headers): IReadOnlyDictionary<string, string>?`, `Metadata (metadata): object?`, `Events (events): IReadOnlyList<Event1>?` | `Models/Webhook1.cs` |
| `WriteText` | — | `Type (type): Type22 !req`, `Text (text): string !req` | `Models/WriteText.cs` |
