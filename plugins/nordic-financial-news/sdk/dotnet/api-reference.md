# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [NordicFinancialNewsClient](src/NordicFinancialNews/NordicFinancialNewsClient.cs)

## ArticlesApi

> Source: [ArticlesApi](src/NordicFinancialNews/Api/ArticlesApi.cs)

<details>
<summary><code>Task&lt;ApiV1ArticlesResponse1&gt; GetApiV1Articles(GetApiV1ArticlesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of live articles ordered by publication date (newest first). Each article includes an English headline, a short summary, and key points, with `article_url` linking to the full original-language article at the source.

## Filtering
Supports filtering by country, category, source, company ticker, and content type. Use `GET /api/v1/sources` to discover source IDs for the `sources` filter. Use `ids` for batch lookup of specific articles.

## Search
Use `q` for full-text search: relevance-ranked by default, newest-first with `sort=latest`, or matched by meaning with `mode=semantic`.

## Polling for updates
Use `updated_after` for incremental syncing.

## Pagination
Responses include cursor-based pagination and support field projection to minimize payload size.

## Caching
Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store` and no `ETag`. The `ETag` reflects the response as served, not only record timestamps: it changes when plan limits alter the visible set, so a changed `ETag` does not necessarily mean a record was updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ArticlesApi.GetApiV1Articles(new GetApiV1ArticlesRequest
    {
        Limit = 25,
        Fields = "id,title,published_at",
        UpdatedAfter = "2024-01-01T00:00:00Z",
        Q = "Volvo earnings",
        Sort = Sort.Latest,
        Mode = Mode.Semantic,
        Country = "SE",
        Category = "cat_earnings1",
        Sources = "abc123def456,ghi789jkl012",
        SourceType = "stock_exchange",
        Ticker = "VOLV-B",
        Company = "cmpny1234567",
        Exchange = "XSTO,XCSE",
        Market = "SE",
        Domicile = "SE",
        Index = "OMXS30",
        Sector = "Industrials",
        ContentType = "news,analysis",
        PublishedAfter = "2024-06-01T00:00:00Z",
        PublishedBefore = "2024-12-31T23:59:59Z",
        Listed = "true",
        Watchlist = "wl_8fk2a1b3c4d5",
        PrimaryOnly = true,
        IncludePeripheral = true,
        Ids = "k3n9x2m7p4q1,b8v5c2z6w1r3",
    });
    // TODO: Handle 'response' of type ApiV1ArticlesResponse1
}
catch (ApiException<GetApiV1ArticlesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ArticlesRequest](src/NordicFinancialNews/Requests/ArticlesApi/GetApiV1ArticlesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ArticlesResponse1](src/NordicFinancialNews/Models/ApiV1ArticlesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ArticlesError](src/NordicFinancialNews/Errors/GetApiV1ArticlesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ArticlesResponse&gt; GetApiV1ArticlesById(GetApiV1ArticlesByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a single article: an English headline, a short summary, key points, and associated companies, along with `article_url` pointing to the full original-language article at the source. Supports conditional requests via `If-None-Match` for efficient caching.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ArticlesApi.GetApiV1ArticlesById(new GetApiV1ArticlesByIdRequest
    {
        Id = "art_abc123def",
        IncludePeripheral = true,
    });
    // TODO: Handle 'response' of type ApiV1ArticlesResponse
}
catch (ApiException<GetApiV1ArticlesByIdError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ArticlesByIdRequest](src/NordicFinancialNews/Requests/ArticlesApi/GetApiV1ArticlesByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ArticlesResponse](src/NordicFinancialNews/Models/ApiV1ArticlesResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ArticlesByIdError](src/NordicFinancialNews/Errors/GetApiV1ArticlesByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CalendarEvents

> Source: [CalendarEvents](src/NordicFinancialNews/Api/CalendarEvents.cs)

<details>
<summary><code>Task&lt;ApiV1CalendarEventsResponse&gt; GetApiV1CalendarEvents(GetApiV1CalendarEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of scheduled Nordic financial calendar events: earnings reports (Q1 / H1 / FY etc.), earnings calls, trading updates, AGMs/EGMs, capital markets days, conference presentations, dividends, and M&A milestones (announcements, offer deadlines, completions).

Each event is tied to a single company and is sorted by `scheduled_at` ascending (soonest first). `scheduled_at` is always in UTC; for local-time display use the `local_time` field (`scheduled_at` rendered in the issuer's `timezone`, ISO 8601 with offset). Prefer `local_time` for the calendar date. A day-precision event is stored at local midnight, so its UTC `scheduled_at` falls on the previous day for ahead-of-UTC (Nordic) zones. `title` and `description` are always English regardless of the source-article language.

## Dividends
Each dividend row carries a nested `dividend` object with `ex_date`, `record_date`, `payment_date`, `declaration_date`, and `kind`. `scheduled_at` follows the priority **ex-date > record-date > payment-date**, whichever is explicitly stated, in that order. `dividend` is `null` for non-dividend events.

## Default window
By default only upcoming events are returned, from today onward by the issuer's local date (so events scheduled for today stay listed throughout the day). Pass `scheduled_after` or `scheduled_before` to query a specific window. This also surfaces past events, which carry `status: published` (events flip from `scheduled` to `published` ~2 days after their date). An `updated_after` sync walk also lifts this floor, since sync must cover past events too.

## Status
List endpoints return `scheduled` + `published` events and **exclude `cancelled`** by default. Pass the `status` parameter to filter (`status=cancelled` to retrieve cancellations, or `scheduled`/`published` to narrow). Discarded events are never returned. Note: a `scheduled → cancelled` transition is *not* surfaced by default `updated_after` polling. To track cancellations, poll with `status=cancelled` or subscribe to cancellation alerts.

## Filtering
Compose `ticker`, `country`, `market`, `domicile`, `exchange`, `index`, `sector`, and `event_type` to narrow the result set. All filters are intersected.

## Polling for updates
Use `updated_after` with the timestamp of your last completed sync to fetch only events that have changed since. Results are then ordered by `updated_at` ascending and cursor-paginated: follow `pagination.next_cursor`, resending the same `updated_after`, until it is null. Advance your stored timestamp only once every page is drained. Incremental sync is not available on plans with a capped calendar. `updated_after` returns 403 there, because the capped window is recomputed per request and a change feed over it cannot be drained. The walk covers the full served dataset, including past events, so a first sync from an old watermark returns history rather than only upcoming events. Updates to past events that occurred before your currently stored watermark are not replayed; reset the watermark (or start a fresh sync) to backfill them.

## Pagination
List responses include `pagination.next_cursor` when more pages are available. Pass it back as the `cursor` parameter on the next request. Cursors are opaque. Do not parse them.

## Caching
Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store` and no `ETag`. Otherwise the `ETag` reflects the response as served, not only record timestamps: it changes when plan limits alter the visible set, so a changed `ETag` does not necessarily mean a record was updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CalendarEvents.GetApiV1CalendarEvents(new GetApiV1CalendarEventsRequest
    {
        Limit = 25,
        Fields = "title,event_type,scheduled_at,company_id,dividend",
        UpdatedAfter = "2026-03-01T00:00:00Z",
        Ticker = "VOLV-B",
        Company = "cmpny1234567",
        Country = "SE",
        Market = "SE",
        Domicile = "SE",
        Exchange = "XSTO",
        Index = "OMXS30",
        Sector = "Industrials",
        Status = Status1.Cancelled,
        ScheduledAfter = "2026-10-01",
        ScheduledBefore = "2026-10-31",
        Watchlist = "wl_8fk2a1b3c4d5",
    });
    // TODO: Handle 'response' of type ApiV1CalendarEventsResponse
}
catch (ApiException<GetApiV1CalendarEventsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1CalendarEventsRequest](src/NordicFinancialNews/Requests/CalendarEvents/GetApiV1CalendarEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CalendarEventsResponse](src/NordicFinancialNews/Models/ApiV1CalendarEventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1CalendarEventsError](src/NordicFinancialNews/Errors/GetApiV1CalendarEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CalendarEventsResponse1&gt; GetApiV1CalendarEventsById(GetApiV1CalendarEventsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a single scheduled calendar event by ID. Cancelled or discarded events return 404.

On plans with a capped calendar, only events inside your plan's window are readable; anything outside it returns 403.

Responses are cached with `ETag` and `Last-Modified` headers and a `private, max-age=300` `Cache-Control`; clients can send `If-None-Match` or `If-Modified-Since` to receive a `304 Not Modified`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CalendarEvents.GetApiV1CalendarEventsById(new GetApiV1CalendarEventsByIdRequest
    {
        Id = "cale_q3volvo1",
    });
    // TODO: Handle 'response' of type ApiV1CalendarEventsResponse1
}
catch (ApiException<GetApiV1CalendarEventsByIdError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1CalendarEventsByIdRequest](src/NordicFinancialNews/Requests/CalendarEvents/GetApiV1CalendarEventsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CalendarEventsResponse1](src/NordicFinancialNews/Models/ApiV1CalendarEventsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1CalendarEventsByIdError](src/NordicFinancialNews/Errors/GetApiV1CalendarEventsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Categories

> Source: [Categories](src/NordicFinancialNews/Api/Categories.cs)

<details>
<summary><code>Task&lt;ApiV1CategoriesResponse&gt; GetApiV1Categories(GetApiV1CategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all enabled article categories, ordered alphabetically by name. Categories are used to classify articles and stories (e.g. Earnings, M&A, IPO). Use category IDs to filter articles and stories by topic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Categories.GetApiV1Categories(new GetApiV1CategoriesRequest
    {
        Limit = 25,
        Fields = "id,name",
    });
    // TODO: Handle 'response' of type ApiV1CategoriesResponse
}
catch (ApiException<GetApiV1CategoriesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1CategoriesRequest](src/NordicFinancialNews/Requests/Categories/GetApiV1CategoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CategoriesResponse](src/NordicFinancialNews/Models/ApiV1CategoriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1CategoriesError](src/NordicFinancialNews/Errors/GetApiV1CategoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CompaniesApi

> Source: [CompaniesApi](src/NordicFinancialNews/Api/CompaniesApi.cs)

<details>
<summary><code>Task&lt;ApiV1CompaniesResponse&gt; GetApiV1Companies(GetApiV1CompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of companies covered in Nordic financial news, ordered alphabetically by name. Use `q` for full-text search across company names, ranked by relevance, or add `mode=semantic` to match `q` by meaning instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CompaniesApi.GetApiV1Companies(new GetApiV1CompaniesRequest
    {
        Limit = 25,
        Fields = "id,name,ticker",
        Q = "Volvo",
        Mode = Mode.Semantic,
        Company = "cmpny1234567,cmpny7654321",
        Ticker = "VOLV-B,ERIC-B",
        Country = "SE",
        Market = "SE",
        Domicile = "SE",
        Exchange = "XSTO",
        Sector = "Financials",
        Listed = "true",
        Watchlist = "true",
        IsActive = "true",
    });
    // TODO: Handle 'response' of type ApiV1CompaniesResponse
}
catch (ApiException<GetApiV1CompaniesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1CompaniesRequest](src/NordicFinancialNews/Requests/CompaniesApi/GetApiV1CompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CompaniesResponse](src/NordicFinancialNews/Models/ApiV1CompaniesResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1CompaniesError](src/NordicFinancialNews/Errors/GetApiV1CompaniesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CompaniesResponse1&gt; GetApiV1CompaniesByIdentifier(GetApiV1CompaniesByIdentifierRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about a single company, including description, sector, relationships, and stock listings. Look up by company ID (e.g. `comp_apple123`) or ticker symbol (e.g. `AAPL`, `VOLV-B`). Lookup also accepts the full ticker including exchange suffix (e.g. `VOLV-B.ST`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CompaniesApi.GetApiV1CompaniesByIdentifier(new GetApiV1CompaniesByIdentifierRequest
    {
        Identifier = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1CompaniesResponse1
}
catch (ApiException<GetApiV1CompaniesByIdentifierError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1CompaniesByIdentifierRequest](src/NordicFinancialNews/Requests/CompaniesApi/GetApiV1CompaniesByIdentifierRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CompaniesResponse1](src/NordicFinancialNews/Models/ApiV1CompaniesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1CompaniesByIdentifierError](src/NordicFinancialNews/Errors/GetApiV1CompaniesByIdentifierError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CompaniesArticlesResponse&gt; GetApiV1CompaniesByIdentifierArticles(GetApiV1CompaniesByIdentifierArticlesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns articles where the company is a principal association (subject, partner, investor,
or competitor), ordered by publication date (newest first). An article where this company
is only the source, an advisor, or a passing mention is excluded.

## Parameters
Accepts the same `q`, `sort`, `fields`, `updated_after`, `country`, `category`, `sources`, `source_type`, `content_type`, `published_after` and `published_before` parameters as `GET /api/v1/articles`, with identical semantics, scoped to this company. `primary_only=true` narrows further within that principal set, to only articles where this company is the primary subject.

## Rejected parameters
`ticker`, `company`, `watchlist`, `listed`, `exchange`, `market`, `domicile`, `index` and `sector` are rejected (400). The path already fixes the company; use `GET /api/v1/articles` to filter the full collection by them (`watchlist=false` and `listed` with any value other than `true` are ignored, as on the flat resource).

## Caching
Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store` and no `ETag`. The `ETag` reflects the response as served, not only record timestamps: it changes when plan limits alter the visible set, so a changed `ETag` does not necessarily mean a record was updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CompaniesApi.GetApiV1CompaniesByIdentifierArticles(
        new GetApiV1CompaniesByIdentifierArticlesRequest
        {
            Identifier = "some example string",
            Limit = 25,
            Fields = "id,title,published_at",
            UpdatedAfter = "2024-01-01T00:00:00Z",
            Q = "Volvo earnings",
            Sort = Sort.Latest,
            Country = "SE",
            Category = "cat_earnings1",
            Sources = "abc123def456,ghi789jkl012",
            SourceType = "stock_exchange",
            ContentType = "news,analysis",
            PublishedAfter = "2024-06-01T00:00:00Z",
            PublishedBefore = "2024-12-31T23:59:59Z",
        });
    // TODO: Handle 'response' of type ApiV1CompaniesArticlesResponse
}
catch (ApiException<GetApiV1CompaniesByIdentifierArticlesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1CompaniesByIdentifierArticlesRequest](src/NordicFinancialNews/Requests/CompaniesApi/GetApiV1CompaniesByIdentifierArticlesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CompaniesArticlesResponse](src/NordicFinancialNews/Models/ApiV1CompaniesArticlesResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1CompaniesByIdentifierArticlesError](src/NordicFinancialNews/Errors/GetApiV1CompaniesByIdentifierArticlesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CompaniesCalendarEventsResponse&gt; GetApiV1CompaniesByIdentifierCalendarEvents(GetApiV1CompaniesByIdentifierCalendarEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns upcoming scheduled calendar events for a single company (earnings reports, AGMs/EGMs, dividends, and more), ordered by `scheduled_at` ascending. This is the same contract as `GET /api/v1/calendar_events`, scoped to a single company by the path.

## Default window
By default only upcoming events are returned; `scheduled_after`/`scheduled_before` or `updated_after` lift that floor, the same way they do on the flat resource.

## Plan availability
Not available on plans with a capped calendar. Use `GET /api/v1/calendar_events` for the upcoming-events preview instead.

## Caching
Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store` and no `ETag`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CompaniesApi.GetApiV1CompaniesByIdentifierCalendarEvents(
        new GetApiV1CompaniesByIdentifierCalendarEventsRequest
        {
            Identifier = "some example string",
            Limit = 25,
            Fields = "title,event_type,scheduled_at,dividend",
            UpdatedAfter = "2026-03-01T00:00:00Z",
            Status = Status1.Cancelled,
            ScheduledAfter = "2026-10-01",
            ScheduledBefore = "2026-10-31",
        });
    // TODO: Handle 'response' of type ApiV1CompaniesCalendarEventsResponse
}
catch (ApiException<GetApiV1CompaniesByIdentifierCalendarEventsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1CompaniesByIdentifierCalendarEventsRequest](src/NordicFinancialNews/Requests/CompaniesApi/GetApiV1CompaniesByIdentifierCalendarEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CompaniesCalendarEventsResponse](src/NordicFinancialNews/Models/ApiV1CompaniesCalendarEventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1CompaniesByIdentifierCalendarEventsError](src/NordicFinancialNews/Errors/GetApiV1CompaniesByIdentifierCalendarEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CompaniesEventsResponse&gt; GetApiV1CompaniesByIdentifierEvents(GetApiV1CompaniesByIdentifierEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Events this company participates in, newest first. This is the same contract as `GET /api/v1/events`, scoped to a single company by the path. Plan gating, ordering, `updated_after` sync (including merge/removal tombstones for this company), and cursor semantics all match the flat resource; see its documentation for the full detail.

A tombstone respects the same event-grain filters as the flat resource, including `last_article_after`/`before`. A merged event's `last_article_at` freezes at merge time, so those filter a tombstone against that frozen value rather than against when the merge happened. `window` cannot be used for sync polling (mutually exclusive with `updated_after`).

Parameters that name or describe a different company or listing are rejected here with `400 invalid-parameter`: `company`, `ticker`, `watchlist`, `listed`, `exchange`, `market`, `domicile`, `index` and `sector`. The path already fixes the company; use `GET /api/v1/events` to filter the full collection by any of them. `watchlist=false` and `listed` with any value other than `true` remain inert. `mode` is rejected with `400 invalid-parameter`; use `GET /api/v1/events?company={company_id}&q={query}&mode=semantic` to search one company's events by meaning.

Responses carry an `ETag` and `Cache-Control: private, max-age=0, must-revalidate`; send the ETag back as `If-None-Match` to receive a `304 Not Modified`. There is no `Last-Modified`, so `If-Modified-Since` alone never revalidates. This is the same contract, and the same reason, as `GET /api/v1/events`. Requests carrying `q` or `updated_after` are not cached and return `Cache-Control: no-cache, no-store`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CompaniesApi.GetApiV1CompaniesByIdentifierEvents(
        new GetApiV1CompaniesByIdentifierEventsRequest
        {
            Identifier = "some example string",
            Limit = 25,
            Fields = "title,status,article_count",
            UpdatedAfter = "2026-03-01T00:00:00Z",
            Q = "earnings",
            EventType = "earnings-report",
            Significance = "notable",
            Sort = "significance",
            Country = "SE",
            Category = "cat_earnings1",
            Sources = "src123456789",
            FirstReportedAfter = "2026-01-01T00:00:00Z",
            FirstReportedBefore = "2026-12-31T23:59:59Z",
            LastArticleAfter = "2026-03-01T00:00:00Z",
            LastArticleBefore = "2026-03-02T00:00:00Z",
            Window = "24h",
            SourceType = "stock_exchange",
            ContentType = "press_release",
            RelatedTo = "evtcorswg01",
        });
    // TODO: Handle 'response' of type ApiV1CompaniesEventsResponse
}
catch (ApiException<GetApiV1CompaniesByIdentifierEventsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1CompaniesByIdentifierEventsRequest](src/NordicFinancialNews/Requests/CompaniesApi/GetApiV1CompaniesByIdentifierEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CompaniesEventsResponse](src/NordicFinancialNews/Models/ApiV1CompaniesEventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1CompaniesByIdentifierEventsError](src/NordicFinancialNews/Errors/GetApiV1CompaniesByIdentifierEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CompaniesStoriesResponse&gt; GetApiV1CompaniesByIdentifierStories(GetApiV1CompaniesByIdentifierStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns stories that mention a specific company, ordered by publication date (newest first).

## Parameters
Accepts the same `q`, `sort`, `fields`, `updated_after`, `country`, `category`, `sources`, `published_after` and `published_before` parameters as `GET /api/v1/stories`, with identical semantics, scoped to this company.

## Rejected parameters
`ticker`, `company`, `watchlist`, `listed`, `exchange`, `market`, `domicile`, `index` and `sector` are rejected (400). The path already fixes the company; use `GET /api/v1/stories` to filter the full collection by them (`watchlist=false` and `listed` with any value other than `true` are ignored, as on the flat resource).

## Caching
Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store` and no `ETag`. The `ETag` reflects the response as served, not only record timestamps: it changes when plan limits alter the visible set, and when a story's visible article set changes, so a changed `ETag` does not necessarily mean a record was updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CompaniesApi.GetApiV1CompaniesByIdentifierStories(
        new GetApiV1CompaniesByIdentifierStoriesRequest
        {
            Identifier = "some example string",
            Limit = 25,
            UpdatedAfter = "2024-01-01T00:00:00Z",
            Fields = "id,title,summary,published_at",
            Q = "Volvo earnings",
            Sort = Sort.Latest,
            Country = "SE",
            Category = "cat_earnings1",
            Sources = "abc123def456,ghi789jkl012",
            PublishedAfter = "2024-06-01T00:00:00Z",
            PublishedBefore = "2024-12-31T23:59:59Z",
        });
    // TODO: Handle 'response' of type ApiV1CompaniesStoriesResponse
}
catch (ApiException<GetApiV1CompaniesByIdentifierStoriesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1CompaniesByIdentifierStoriesRequest](src/NordicFinancialNews/Requests/CompaniesApi/GetApiV1CompaniesByIdentifierStoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CompaniesStoriesResponse](src/NordicFinancialNews/Models/ApiV1CompaniesStoriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1CompaniesByIdentifierStoriesError](src/NordicFinancialNews/Errors/GetApiV1CompaniesByIdentifierStoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CountriesApi

> Source: [CountriesApi](src/NordicFinancialNews/Api/CountriesApi.cs)

<details>
<summary><code>Task&lt;ApiV1CountriesResponse&gt; GetApiV1Countries(GetApiV1CountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Nordic countries covered by the API, ordered alphabetically. Use the country `id` or `iso2_code` to filter articles, stories, and companies by country.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CountriesApi.GetApiV1Countries(new GetApiV1CountriesRequest
    {
        Limit = 25,
        Fields = "id,name,iso2_code",
    });
    // TODO: Handle 'response' of type ApiV1CountriesResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1CountriesRequest](src/NordicFinancialNews/Requests/CountriesApi/GetApiV1CountriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CountriesResponse](src/NordicFinancialNews/Models/ApiV1CountriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[RawError](src/NordicFinancialNews/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CountriesResponse1&gt; GetApiV1CountriesByIdentifier(GetApiV1CountriesByIdentifierRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for a single country, including its stock exchanges. Look up by country ID or ISO 3166-1 alpha-2 code (e.g. `SE`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CountriesApi.GetApiV1CountriesByIdentifier(new GetApiV1CountriesByIdentifierRequest
    {
        Identifier = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1CountriesResponse1
}
catch (ApiException<GetApiV1CountriesByIdentifierError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1CountriesByIdentifierRequest](src/NordicFinancialNews/Requests/CountriesApi/GetApiV1CountriesByIdentifierRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CountriesResponse1](src/NordicFinancialNews/Models/ApiV1CountriesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1CountriesByIdentifierError](src/NordicFinancialNews/Errors/GetApiV1CountriesByIdentifierError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EventTypes

> Source: [EventTypes](src/NordicFinancialNews/Api/EventTypes.cs)

<details>
<summary><code>Task&lt;ApiV1EventTypesResponse&gt; GetApiV1EventTypes(GetApiV1EventTypesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all active event types, grouped by category (in the categories' defined order) and ordered by slug within each. Event type slugs are the values for the `event_type` filter on `GET /api/v1/events`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventTypes.GetApiV1EventTypes(new GetApiV1EventTypesRequest
    {
        Fields = "id,slug,label",
    });
    // TODO: Handle 'response' of type ApiV1EventTypesResponse
}
catch (ApiException<GetApiV1EventTypesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1EventTypesRequest](src/NordicFinancialNews/Requests/EventTypes/GetApiV1EventTypesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1EventTypesResponse](src/NordicFinancialNews/Models/ApiV1EventTypesResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1EventTypesError](src/NordicFinancialNews/Errors/GetApiV1EventTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/NordicFinancialNews/Api/Events.cs)

<details>
<summary><code>Task&lt;ApiV1EventsResponse&gt; GetApiV1Events(GetApiV1EventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of Events. An event groups the articles reporting a single real-world development (an earnings report, an M&A announcement, a dividend, an executive change, and so on). Sorted by when the event was first reported, most recent first. An event is only returned if at least one of its live member articles survives your plan's age and source restrictions. This is the same visibility rule the event feed on the website uses. If none survive, the event does not appear at all. `GET /api/v1/events/:id` distinguishes that case from an event your plan can see but whose full coverage it cannot (see below). ## Merges and removals
Events sometimes merge (two events turn out to describe the same development) or are removed (no live articles remain, or the event was found to be incorrect). Both are terminal. The event never reappears in a normal list, and `GET /api/v1/events/:id` on one returns a **minimal tombstone**: `id`, `status`, `merged_into` (the surviving event's `id`, when merged), and `updated_at` only. A tombstone carries no title, summary, counts or id arrays. Poll with `updated_after` to learn about merges and removals. Tombstones for events that changed since your watermark are included in that sync walk (uncapped, on every plan), which is otherwise the only way to learn that an event you previously fetched is gone. They are never returned by the default list. A tombstone still respects your event-grain filters: `company`, `ticker`, `exchange`, `index`, `sector`, `listed`, `event_type`, `significance`, `watchlist`, `first_reported_after`/`before`, and `last_article_after`/`before`. A merged event that involved the company you filtered by still surfaces its tombstone. Those filters are checked against the tombstone's companies as they are now. With `listed`, a tombstone whose only listed company was delisted or stopped appearing in the API's company data before the merge or removal no longer matches, so it is not returned. Poll without `listed` for full-fidelity tombstone coverage. On `exchange`, `market`, `domicile`, `index`, `sector` and `listed`, a merged or removed commentary event's tombstone is returned when any matching company is on it, in any role, so a filtered sync can include a tombstone for an event it never returned. A filtered sync returns events that match the filters now: an event that stops matching (for example, when its articles are no longer about a matching company) is not returned by it. Poll without those filters to see every change. A tombstone does not respect `country`, `category`, `sources`, `source_type` or `content_type`, which are article-grain filters. It has no live articles left to filter by, so poll without them for full-fidelity tombstone coverage. A merged event's `last_article_at` freezes at merge time, so `last_article_after`/`before` filter a tombstone against that frozen value rather than against when the merge happened. `window` cannot be used for sync polling at all (see below). ## Polling for updates
Use `updated_after` with the timestamp of your last completed sync to fetch only events that have changed since. Results are then ordered by `updated_at` ascending and cursor-paginated: follow `pagination.next_cursor`, resending the same `updated_after`, until it is null. Advance your stored timestamp only once every page is drained. A merge takes the earlier of the two `first_reported_at` values, so it only ever moves the surviving event earlier in the default sort. Under the default (non-sync) ordering a cursor walk can therefore re-emit a row you have already seen, but it can never skip one. Treat the walk as at-least-once and dedupe by `id`. `company_ids`/`story_ids` membership can drift out from under `updated_after` without bumping `updated_at`: a company merge, a company leaving or rejoining the API's company data, or a story being withdrawn from an event you already hold. A change to a story itself is tracked, and bumps the parent event.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.GetApiV1Events(new GetApiV1EventsRequest
    {
        Limit = 25,
        Fields = "title,status,article_count",
        UpdatedAfter = "2026-03-01T00:00:00Z",
        Q = "Volvo earnings",
        Mode = Mode.Semantic,
        EventType = "earnings-report",
        Significance = "notable,routine",
        Ticker = "VOLV-B",
        Company = "cmpny1234567",
        Country = "SE",
        Category = "cat_earnings1",
        Sources = "src123456789",
        SourceType = "stock_exchange",
        ContentType = "press_release",
        Exchange = "XSTO",
        Market = "SE",
        Domicile = "SE",
        Index = "OMXS30",
        Sector = "Industrials",
        Listed = "true",
        Watchlist = "wl_8fk2a1b3c4d5",
        FirstReportedAfter = "2026-01-01T00:00:00Z",
        FirstReportedBefore = "2026-12-31T23:59:59Z",
        LastArticleAfter = "2026-03-01T00:00:00Z",
        LastArticleBefore = "2026-03-02T00:00:00Z",
        Window = "24h",
        Sort = "significance",
        RelatedTo = "evtrswagsh01",
    });
    // TODO: Handle 'response' of type ApiV1EventsResponse
}
catch (ApiException<GetApiV1EventsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1EventsRequest](src/NordicFinancialNews/Requests/Events/GetApiV1EventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1EventsResponse](src/NordicFinancialNews/Models/ApiV1EventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1EventsError](src/NordicFinancialNews/Errors/GetApiV1EventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1EventsResponse1&gt; GetApiV1EventsById(GetApiV1EventsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a single event by ID.

A merged or removed event returns 200 with the minimal tombstone shape (see the list endpoint's description) rather than 404. The id still resolves; it carries no content. An event with no live member articles at all returns 404. An event whose live members exist but are all outside your plan's age/source restrictions returns 403 with an upgrade problem, distinct from the plain 404.

Responses are cached with `ETag` and `Cache-Control: private, max-age=300`; send `If-None-Match` to receive a `304 Not Modified`. There is no `Last-Modified` here, for the same reason as `GET /api/v1/events`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.GetApiV1EventsById(new GetApiV1EventsByIdRequest { Id = "evt_volvoq3ma1" });
    // TODO: Handle 'response' of type ApiV1EventsResponse1
}
catch (ApiException<GetApiV1EventsByIdError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1EventsByIdRequest](src/NordicFinancialNews/Requests/Events/GetApiV1EventsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1EventsResponse1](src/NordicFinancialNews/Models/ApiV1EventsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1EventsByIdError](src/NordicFinancialNews/Errors/GetApiV1EventsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ExchangesApi

> Source: [ExchangesApi](src/NordicFinancialNews/Api/ExchangesApi.cs)

<details>
<summary><code>Task&lt;ApiV1ExchangesResponse&gt; GetApiV1Exchanges(GetApiV1ExchangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns active Nordic stock exchanges, ordered alphabetically. Supports filtering by country.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ExchangesApi.GetApiV1Exchanges(new GetApiV1ExchangesRequest
    {
        Limit = 25,
        Country = "SE",
        Fields = "id,name,mic_code",
    });
    // TODO: Handle 'response' of type ApiV1ExchangesResponse
}
catch (ApiException<GetApiV1ExchangesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ExchangesRequest](src/NordicFinancialNews/Requests/ExchangesApi/GetApiV1ExchangesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ExchangesResponse](src/NordicFinancialNews/Models/ApiV1ExchangesResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ExchangesError](src/NordicFinancialNews/Errors/GetApiV1ExchangesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ExchangesResponse1&gt; GetApiV1ExchangesByIdentifier(GetApiV1ExchangesByIdentifierRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about a stock exchange, including currency, timezone, and location. Look up by exchange ID (e.g. `exch_nasdaq1`) or MIC code (e.g. `XSTO`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ExchangesApi.GetApiV1ExchangesByIdentifier(new GetApiV1ExchangesByIdentifierRequest
    {
        Identifier = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ExchangesResponse1
}
catch (ApiException<GetApiV1ExchangesByIdentifierError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ExchangesByIdentifierRequest](src/NordicFinancialNews/Requests/ExchangesApi/GetApiV1ExchangesByIdentifierRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ExchangesResponse1](src/NordicFinancialNews/Models/ApiV1ExchangesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ExchangesByIdentifierError](src/NordicFinancialNews/Errors/GetApiV1ExchangesByIdentifierError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ExchangesCompaniesResponse&gt; GetApiV1ExchangesByIdentifierCompanies(GetApiV1ExchangesByIdentifierCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns companies listed on a specific exchange, ordered alphabetically. The `ticker` and `exchange` shown for each company reflect its primary listing, which may be on a different exchange if the company is listed on multiple exchanges.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ExchangesApi.GetApiV1ExchangesByIdentifierCompanies(
        new GetApiV1ExchangesByIdentifierCompaniesRequest { Identifier = "some example string", Limit = 25 });
    // TODO: Handle 'response' of type ApiV1ExchangesCompaniesResponse
}
catch (ApiException<GetApiV1ExchangesByIdentifierCompaniesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ExchangesByIdentifierCompaniesRequest](src/NordicFinancialNews/Requests/ExchangesApi/GetApiV1ExchangesByIdentifierCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ExchangesCompaniesResponse](src/NordicFinancialNews/Models/ApiV1ExchangesCompaniesResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ExchangesByIdentifierCompaniesError](src/NordicFinancialNews/Errors/GetApiV1ExchangesByIdentifierCompaniesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](src/NordicFinancialNews/Api/Health.cs)

<details>
<summary><code>Task&lt;ApiV1HealthResponse&gt; GetApiV1Health(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the health status of the API

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Health.GetApiV1Health();
    // TODO: Handle 'response' of type ApiV1HealthResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1HealthResponse](src/NordicFinancialNews/Models/ApiV1HealthResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[RawError](src/NordicFinancialNews/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IndicesApi

> Source: [IndicesApi](src/NordicFinancialNews/Api/IndicesApi.cs)

<details>
<summary><code>Task&lt;ApiV1IndicesResponse&gt; GetApiV1Indices(GetApiV1IndicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns stock indices, ordered alphabetically by name. Use `exchange` to filter by a specific exchange.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IndicesApi.GetApiV1Indices(new GetApiV1IndicesRequest
    {
        Limit = 25,
        Exchange = "XSTO",
        Fields = "id,name,symbol",
    });
    // TODO: Handle 'response' of type ApiV1IndicesResponse
}
catch (ApiException<GetApiV1IndicesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1IndicesRequest](src/NordicFinancialNews/Requests/IndicesApi/GetApiV1IndicesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1IndicesResponse](src/NordicFinancialNews/Models/ApiV1IndicesResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1IndicesError](src/NordicFinancialNews/Errors/GetApiV1IndicesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1IndicesResponse1&gt; GetApiV1IndicesByIdentifier(GetApiV1IndicesByIdentifierRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for a single index, including description and company count. Look up by index ID or symbol (case-insensitive, e.g. `OMXS30`). Note: `companies_count` reflects the number of distinct companies in the index, which may be less than the number of index constituents when a company has multiple share classes listed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IndicesApi.GetApiV1IndicesByIdentifier(new GetApiV1IndicesByIdentifierRequest
    {
        Identifier = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1IndicesResponse1
}
catch (ApiException<GetApiV1IndicesByIdentifierError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1IndicesByIdentifierRequest](src/NordicFinancialNews/Requests/IndicesApi/GetApiV1IndicesByIdentifierRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1IndicesResponse1](src/NordicFinancialNews/Models/ApiV1IndicesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1IndicesByIdentifierError](src/NordicFinancialNews/Errors/GetApiV1IndicesByIdentifierError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1IndicesCompaniesResponse&gt; GetApiV1IndicesByIdentifierCompanies(GetApiV1IndicesByIdentifierCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns companies that are members of a specific index, ordered alphabetically. The `ticker` and `exchange` shown for each company reflect its primary listing, which may differ from the listing used in this index (e.g. a company listed on multiple exchanges).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IndicesApi.GetApiV1IndicesByIdentifierCompanies(
        new GetApiV1IndicesByIdentifierCompaniesRequest { Identifier = "some example string", Limit = 25 });
    // TODO: Handle 'response' of type ApiV1IndicesCompaniesResponse
}
catch (ApiException<GetApiV1IndicesByIdentifierCompaniesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1IndicesByIdentifierCompaniesRequest](src/NordicFinancialNews/Requests/IndicesApi/GetApiV1IndicesByIdentifierCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1IndicesCompaniesResponse](src/NordicFinancialNews/Models/ApiV1IndicesCompaniesResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1IndicesByIdentifierCompaniesError](src/NordicFinancialNews/Errors/GetApiV1IndicesByIdentifierCompaniesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Meta

> Source: [Meta](src/NordicFinancialNews/Api/Meta.cs)

<details>
<summary><code>Task&lt;ApiV1MetaResponse&gt; GetApiV1Meta(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns API metadata including version, capabilities, supported fields, content types, and rate limit policy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Meta.GetApiV1Meta();
    // TODO: Handle 'response' of type ApiV1MetaResponse
}
catch (ApiException<GetApiV1MetaError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MetaResponse](src/NordicFinancialNews/Models/ApiV1MetaResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1MetaError](src/NordicFinancialNews/Errors/GetApiV1MetaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SearchApi

> Source: [SearchApi](src/NordicFinancialNews/Api/SearchApi.cs)

<details>
<summary><code>Task&lt;SearchResult&gt; GetApiV1Search(GetApiV1SearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search across articles, stories, companies, countries, exchanges, and indices. Results are grouped by resource type and ranked by relevance. Use `type` to limit which resource types are searched.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SearchApi.GetApiV1Search(new GetApiV1SearchRequest
    {
        Q = "Volvo",
        Type = "articles,companies",
        Limit = 5,
    });
    // TODO: Handle 'response' of type SearchResult
}
catch (ApiException<GetApiV1SearchError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1SearchRequest](src/NordicFinancialNews/Requests/SearchApi/GetApiV1SearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResult](src/NordicFinancialNews/Models/SearchResult.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1SearchError](src/NordicFinancialNews/Errors/GetApiV1SearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sources

> Source: [Sources](src/NordicFinancialNews/Api/Sources.cs)

<details>
<summary><code>Task&lt;ApiV1SourcesResponse&gt; GetApiV1Sources(GetApiV1SourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of enabled news sources, ordered alphabetically by name. Use source IDs to filter articles and stories via the `sources` parameter on the articles and stories list endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sources.GetApiV1Sources(new GetApiV1SourcesRequest
    {
        Limit = 25,
        Fields = "id,name,domain",
    });
    // TODO: Handle 'response' of type ApiV1SourcesResponse
}
catch (ApiException<GetApiV1SourcesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1SourcesRequest](src/NordicFinancialNews/Requests/Sources/GetApiV1SourcesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SourcesResponse](src/NordicFinancialNews/Models/ApiV1SourcesResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1SourcesError](src/NordicFinancialNews/Errors/GetApiV1SourcesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## StoriesApi

> Source: [StoriesApi](src/NordicFinancialNews/Api/StoriesApi.cs)

<details>
<summary><code>Task&lt;ApiV1StoriesResponse&gt; GetApiV1Stories(GetApiV1StoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of published stories ordered by publication date (newest first). Each story synthesizes coverage of a single developing event from multiple source articles into one narrative.

## Filtering
Supports filtering by country, category, source, and company ticker. Use `GET /api/v1/sources` to discover source IDs for the `sources` filter.

## Search
Use `q` for full-text search: relevance-ranked by default, newest-first with `sort=latest`, or matched by meaning with `mode=semantic`.

## Polling for updates
Use `updated_after` for incremental syncing.

## Caching
Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store` and no `ETag`. The `ETag` reflects the response as served, not only record timestamps: it changes when plan limits alter the visible set, and when a story's visible article set changes, so a changed `ETag` does not necessarily mean a record was updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.StoriesApi.GetApiV1Stories(new GetApiV1StoriesRequest
    {
        Limit = 25,
        UpdatedAfter = "2024-01-01T00:00:00Z",
        Q = "Volvo earnings",
        Sort = Sort.Latest,
        Mode = Mode.Semantic,
        Country = "SE",
        Category = "cat_earnings1",
        Sources = "abc123def456,ghi789jkl012",
        Ticker = "VOLV-B",
        Company = "cmpny1234567",
        Exchange = "XSTO,XCSE",
        Market = "SE",
        Domicile = "SE",
        Index = "OMXS30",
        Sector = "Industrials",
        Listed = "true",
        Watchlist = "wl_8fk2a1b3c4d5",
        PublishedAfter = "2024-06-01T00:00:00Z",
        PublishedBefore = "2024-12-31T23:59:59Z",
        Fields = "id,title,summary,published_at",
    });
    // TODO: Handle 'response' of type ApiV1StoriesResponse
}
catch (ApiException<GetApiV1StoriesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1StoriesRequest](src/NordicFinancialNews/Requests/StoriesApi/GetApiV1StoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1StoriesResponse](src/NordicFinancialNews/Models/ApiV1StoriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1StoriesError](src/NordicFinancialNews/Errors/GetApiV1StoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1StoriesResponse1&gt; GetApiV1StoriesById(GetApiV1StoriesByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full details of a single story, including content in Markdown format, associated articles, and companies. Supports conditional requests via `If-None-Match` for efficient caching.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.StoriesApi.GetApiV1StoriesById(new GetApiV1StoriesByIdRequest { Id = "sty_abc123def" });
    // TODO: Handle 'response' of type ApiV1StoriesResponse1
}
catch (ApiException<GetApiV1StoriesByIdError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1StoriesByIdRequest](src/NordicFinancialNews/Requests/StoriesApi/GetApiV1StoriesByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1StoriesResponse1](src/NordicFinancialNews/Models/ApiV1StoriesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1StoriesByIdError](src/NordicFinancialNews/Errors/GetApiV1StoriesByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Watchlists

> Source: [Watchlists](src/NordicFinancialNews/Api/Watchlists.cs)

<details>
<summary><code>Task&lt;ApiV1WatchlistsResponse&gt; GetApiV1Watchlists(GetApiV1WatchlistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all watchlists belonging to the authenticated user, ordered by position (ascending) then creation date. Each watchlist includes a company count but not the full company list. Use the Get Watchlist Details endpoint to retrieve companies. Requires the `read:watchlist` scope.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Watchlists.GetApiV1Watchlists(new GetApiV1WatchlistsRequest());
    // TODO: Handle 'response' of type ApiV1WatchlistsResponse
}
catch (ApiException<GetApiV1WatchlistsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1WatchlistsRequest](src/NordicFinancialNews/Requests/Watchlists/GetApiV1WatchlistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WatchlistsResponse](src/NordicFinancialNews/Models/ApiV1WatchlistsResponse.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1WatchlistsError](src/NordicFinancialNews/Errors/GetApiV1WatchlistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1WatchlistsResponse1&gt; GetApiV1WatchlistsById(GetApiV1WatchlistsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns watchlist details along with a paginated list of its companies, ordered alphabetically by company name. Hidden and unverified companies are excluded. Requires the `read:watchlist` scope.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Watchlists.GetApiV1WatchlistsById(new GetApiV1WatchlistsByIdRequest
    {
        Id = "a1b2c3d4e5f6",
        Limit = 25,
    });
    // TODO: Handle 'response' of type ApiV1WatchlistsResponse1
}
catch (ApiException<GetApiV1WatchlistsByIdError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1WatchlistsByIdRequest](src/NordicFinancialNews/Requests/Watchlists/GetApiV1WatchlistsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1WatchlistsResponse1](src/NordicFinancialNews/Models/ApiV1WatchlistsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/NordicFinancialNews/Core/Exceptions/ApiException.cs)&lt;[GetApiV1WatchlistsByIdError](src/NordicFinancialNews/Errors/GetApiV1WatchlistsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

