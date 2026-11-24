<!-- Generated file — do not edit; regenerated with the SDK. -->

# CompaniesApi — operations

Accessor: `client.CompaniesApi` · Source: `src/NordicFinancialNews/Api/CompaniesApi.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Companies

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Companies(GetApiV1CompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `fields` ← `Fields`, `q` ← `Q`, `mode` ← `Mode`, `company` ← `Company`, `ticker` ← `Ticker`, `country` ← `Country`, `market` ← `Market`, `domicile` ← `Domicile`, `exchange` ← `Exchange`, `sector` ← `Sector`, `listed` ← `Listed`, `watchlist` ← `Watchlist`, `is_active` ← `IsActive`
- **Returns**: `ApiV1CompaniesResponse`
- **Error**: `ApiException<GetApiV1CompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1CompaniesRequest` | `src/NordicFinancialNews/Requests/CompaniesApi/GetApiV1CompaniesRequest.cs` |
| `Mode` | `src/NordicFinancialNews/Models/Enums/Mode.cs` |
| `ApiV1CompaniesResponse` | `src/NordicFinancialNews/Models/ApiV1CompaniesResponse.cs` |
| `GetApiV1CompaniesError` | `src/NordicFinancialNews/Errors/GetApiV1CompaniesError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

### GetApiV1CompaniesByIdentifier

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1CompaniesByIdentifier(GetApiV1CompaniesByIdentifierRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Identifier`
- **Returns**: `ApiV1CompaniesResponse1`
- **Error**: `ApiException<GetApiV1CompaniesByIdentifierError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1CompaniesByIdentifierRequest` | `src/NordicFinancialNews/Requests/CompaniesApi/GetApiV1CompaniesByIdentifierRequest.cs` |
| `ApiV1CompaniesResponse1` | `src/NordicFinancialNews/Models/ApiV1CompaniesResponse1.cs` |
| `GetApiV1CompaniesByIdentifierError` | `src/NordicFinancialNews/Errors/GetApiV1CompaniesByIdentifierError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

### GetApiV1CompaniesByIdentifierArticles

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1CompaniesByIdentifierArticles(GetApiV1CompaniesByIdentifierArticlesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Identifier`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `fields` ← `Fields`, `updated_after` ← `UpdatedAfter`, `q` ← `Q`, `sort` ← `Sort`, `country` ← `Country`, `category` ← `Category`, `sources` ← `Sources`, `source_type` ← `SourceType`, `content_type` ← `ContentType`, `published_after` ← `PublishedAfter`, `published_before` ← `PublishedBefore`, `primary_only` ← `PrimaryOnly`, `include_peripheral` ← `IncludePeripheral`
- **Returns**: `ApiV1CompaniesArticlesResponse`
- **Error**: `ApiException<GetApiV1CompaniesByIdentifierArticlesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1CompaniesByIdentifierArticlesRequest` | `src/NordicFinancialNews/Requests/CompaniesApi/GetApiV1CompaniesByIdentifierArticlesRequest.cs` |
| `Sort` | `src/NordicFinancialNews/Models/Enums/Sort.cs` |
| `ApiV1CompaniesArticlesResponse` | `src/NordicFinancialNews/Models/ApiV1CompaniesArticlesResponse.cs` |
| `GetApiV1CompaniesByIdentifierArticlesError` | `src/NordicFinancialNews/Errors/GetApiV1CompaniesByIdentifierArticlesError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

### GetApiV1CompaniesByIdentifierCalendarEvents

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1CompaniesByIdentifierCalendarEvents(GetApiV1CompaniesByIdentifierCalendarEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Identifier`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `fields` ← `Fields`, `updated_after` ← `UpdatedAfter`, `status` ← `Status`, `event_type` ← `EventType`, `scheduled_after` ← `ScheduledAfter`, `scheduled_before` ← `ScheduledBefore`
- **Returns**: `ApiV1CompaniesCalendarEventsResponse`
- **Error**: `ApiException<GetApiV1CompaniesByIdentifierCalendarEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1CompaniesByIdentifierCalendarEventsRequest` | `src/NordicFinancialNews/Requests/CompaniesApi/GetApiV1CompaniesByIdentifierCalendarEventsRequest.cs` |
| `Status1` | `src/NordicFinancialNews/Models/Enums/Status1.cs` |
| `EventType1` | `src/NordicFinancialNews/Models/Enums/EventType1.cs` |
| `ApiV1CompaniesCalendarEventsResponse` | `src/NordicFinancialNews/Models/ApiV1CompaniesCalendarEventsResponse.cs` |
| `GetApiV1CompaniesByIdentifierCalendarEventsError` | `src/NordicFinancialNews/Errors/GetApiV1CompaniesByIdentifierCalendarEventsError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

### GetApiV1CompaniesByIdentifierEvents

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1CompaniesByIdentifierEvents(GetApiV1CompaniesByIdentifierEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Identifier`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `fields` ← `Fields`, `updated_after` ← `UpdatedAfter`, `q` ← `Q`, `event_type` ← `EventType`, `significance` ← `Significance`, `sort` ← `Sort`, `country` ← `Country`, `category` ← `Category`, `sources` ← `Sources`, `first_reported_after` ← `FirstReportedAfter`, `first_reported_before` ← `FirstReportedBefore`, `last_article_after` ← `LastArticleAfter`, `last_article_before` ← `LastArticleBefore`, `window` ← `Window`, `source_type` ← `SourceType`, `content_type` ← `ContentType`, `related_to` ← `RelatedTo`, `include_peripheral` ← `IncludePeripheral`
- **Returns**: `ApiV1CompaniesEventsResponse`
- **Error**: `ApiException<GetApiV1CompaniesByIdentifierEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1CompaniesByIdentifierEventsRequest` | `src/NordicFinancialNews/Requests/CompaniesApi/GetApiV1CompaniesByIdentifierEventsRequest.cs` |
| `ApiV1CompaniesEventsResponse` | `src/NordicFinancialNews/Models/ApiV1CompaniesEventsResponse.cs` |
| `GetApiV1CompaniesByIdentifierEventsError` | `src/NordicFinancialNews/Errors/GetApiV1CompaniesByIdentifierEventsError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

### GetApiV1CompaniesByIdentifierStories

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1CompaniesByIdentifierStories(GetApiV1CompaniesByIdentifierStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Identifier`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `updated_after` ← `UpdatedAfter`, `fields` ← `Fields`, `q` ← `Q`, `sort` ← `Sort`, `country` ← `Country`, `category` ← `Category`, `sources` ← `Sources`, `published_after` ← `PublishedAfter`, `published_before` ← `PublishedBefore`
- **Returns**: `ApiV1CompaniesStoriesResponse`
- **Error**: `ApiException<GetApiV1CompaniesByIdentifierStoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1CompaniesByIdentifierStoriesRequest` | `src/NordicFinancialNews/Requests/CompaniesApi/GetApiV1CompaniesByIdentifierStoriesRequest.cs` |
| `Sort` | `src/NordicFinancialNews/Models/Enums/Sort.cs` |
| `ApiV1CompaniesStoriesResponse` | `src/NordicFinancialNews/Models/ApiV1CompaniesStoriesResponse.cs` |
| `GetApiV1CompaniesByIdentifierStoriesError` | `src/NordicFinancialNews/Errors/GetApiV1CompaniesByIdentifierStoriesError.cs` |
| `ProblemDetails` | `src/NordicFinancialNews/Models/ProblemDetails.cs` |

