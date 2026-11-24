# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [OddsRelayClient](src/OddsRelay/OddsRelayClient.cs)

## AccountApi

> Source: [AccountApi](src/OddsRelay/Api/AccountApi.cs)

<details>
<summary><code>Task&lt;PriceTable&gt; GetPricing(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The price table every call is priced from, byte for byte. Free. `ETag` is its SHA-256 (`-gz` on the gzip copy); 304 on a match. Gzip unless refused.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AccountApi.GetPricing();
    // TODO: Handle 'response' of type PriceTable
}
catch (ApiException<GetPricingError> ex)
{
    if (ex.Error.TryGetError400(out var error))
    {
        // TODO: Handle 'error' of type Error400
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PriceTable](src/OddsRelay/Models/PriceTable.cs)</code>

**OnError**: <code>[ApiException](src/OddsRelay/Core/Exceptions/ApiException.cs)&lt;[GetPricingError](src/OddsRelay/Errors/GetPricingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Usage&gt; GetUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free, flood-capped, and answered for a SUSPENDED account too (it shows the reason). Plain JSON. `scope` and `scope_version` are your account's scope (both null when it has none); `key.products` is your key's products within it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AccountApi.GetUsage();
    // TODO: Handle 'response' of type Usage
}
catch (ApiException<GetUsageError> ex)
{
    if (ex.Error.TryGetError400(out var error))
    {
        // TODO: Handle 'error' of type Error400
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Usage](src/OddsRelay/Models/Usage.cs)</code>

**OnError**: <code>[ApiException](src/OddsRelay/Core/Exceptions/ApiException.cs)&lt;[GetUsageError](src/OddsRelay/Errors/GetUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Discovery

> Source: [Discovery](src/OddsRelay/Api/Discovery.cs)

<details>
<summary><code>Task&lt;V2BookmakersResponse1&gt; ListBookmakers(ListBookmakersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every bookmaker and exchange key the API serves, with its display name, regions and kind. Free. Takes no `region`: a `region` parameter is 400.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Discovery.ListBookmakers(new ListBookmakersRequest());
    // TODO: Handle 'response' of type V2BookmakersResponse1
}
catch (ApiException<ListBookmakersError> ex)
{
    if (ex.Error.TryGetError400OddsRelayDiscoveryApi(out var error))
    {
        // TODO: Handle 'error' of type Error400OddsRelayDiscoveryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBookmakersRequest](src/OddsRelay/Requests/Discovery/ListBookmakersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2BookmakersResponse1](src/OddsRelay/Models/AnyOf/V2BookmakersResponse1.cs)</code>

**OnError**: <code>[ApiException](src/OddsRelay/Core/Exceptions/ApiException.cs)&lt;[ListBookmakersError](src/OddsRelay/Errors/ListBookmakersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V2EventsResponse1&gt; ListEvents(ListEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The events on the matched boards under one sport key or prefix, with the boards carrying each. Free. Paged 250 at a time in (kick-off, id) order; a cursor resumes strictly after the last event it saw, so an event whose kick-off moves across the cursor during a walk can appear twice or be missed: dedupe by `id` and take a missed event on the next walk. A cursor expires 300 s after it was issued. `region` missing means `uk`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Discovery.ListEvents(new ListEventsRequest
    {
        Sport = "tennis",
        Region = "uk",
        CommenceTimeFrom = "2026-09-17T12:00:00Z",
        CommenceTimeTo = "2026-09-17T23:59:59Z",
    });
    // TODO: Handle 'response' of type V2EventsResponse1
}
catch (ApiException<ListEventsError> ex)
{
    if (ex.Error.TryGetError400OddsRelayDiscoveryApi(out var error))
    {
        // TODO: Handle 'error' of type Error400OddsRelayDiscoveryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEventsRequest](src/OddsRelay/Requests/Discovery/ListEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2EventsResponse1](src/OddsRelay/Models/AnyOf/V2EventsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/OddsRelay/Core/Exceptions/ApiException.cs)&lt;[ListEventsError](src/OddsRelay/Errors/ListEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Regions&gt; ListRegions(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The regions your key covers that have live bookmakers here, with each region's exchanges and coverage model. Free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Discovery.ListRegions();
    // TODO: Handle 'response' of type Regions
}
catch (ApiException<ListRegionsError> ex)
{
    if (ex.Error.TryGetError400OddsRelayDiscoveryApi(out var error))
    {
        // TODO: Handle 'error' of type Error400OddsRelayDiscoveryApi
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Regions](src/OddsRelay/Models/Regions.cs)</code>

**OnError**: <code>[ApiException](src/OddsRelay/Core/Exceptions/ApiException.cs)&lt;[ListRegionsError](src/OddsRelay/Errors/ListRegionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V2SportsResponse1&gt; ListSports(ListSportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every competition on the matched boards, grouped, with the market keys seen under each. Free. Paged 250 rows at a time in (group, key) order; a cursor expires 300 s after it was issued. `region` missing means `uk`; discovery is not scoped to your key's regions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Discovery.ListSports(new ListSportsRequest { Region = "uk" });
    // TODO: Handle 'response' of type V2SportsResponse1
}
catch (ApiException<ListSportsError> ex)
{
    if (ex.Error.TryGetError400OddsRelayDiscoveryApi(out var error))
    {
        // TODO: Handle 'error' of type Error400OddsRelayDiscoveryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSportsRequest](src/OddsRelay/Requests/Discovery/ListSportsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2SportsResponse1](src/OddsRelay/Models/AnyOf/V2SportsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/OddsRelay/Core/Exceptions/ApiException.cs)&lt;[ListSportsError](src/OddsRelay/Errors/ListSportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Odds

> Source: [Odds](src/OddsRelay/Api/Odds.cs)

<details>
<summary><code>Task&lt;V2OddsResponse&gt; GetMatchedBoard(GetMatchedBoardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The six matched boards: each event's bookmaker back prices beside the exchanges' lay prices (`dutching`: back legs that cover every outcome, grouped by `dutch_id`; `each-way` and `extra-place`: each-way terms against win and place lays).

**Checks, in this order** (each refusal is free): the per-address shield, the key, the account's flood cap, a suspended account, a browser key's website, the API version; then `type` (404 `unknown_type`), `region`, the region in the key (403 `region_not_in_scope`), the product in the key (403 `not_in_key_scope`), the product in the region (403 `product_not_in_region`: a region with no exchange serves only dutching and raw); then the parameters: each one this route reads, once; `format`, `oddsFormat` and `dateFormat` values; on `standard` and `dutching` decimal ISO only and gzip accepted (400 `add Accept-Encoding: gzip; with curl use --compressed`); then the filters (400 unknown values, 403 `bookmaker_not_in_region`, then your account's scope: 403 `sport_not_in_plan`, `market_not_in_plan`, `bookmaker_not_in_plan`, `exchange_not_in_plan`; and your plan's bookmaker list), then `quote=true`, the price (402), and the board (503 while it is not ready).

**Filters** cut the whole board's events in order: sport and kick-off, then markets, then back offers by bookmaker and lay offers by exchange; an outcome left with no back or no lay goes, then empty markets and events. `dutching` keeps a dutch only when every leg is a named venue. A filtered reply is priced on its filters (`/v2/pricing`); the kick-off window is never priced.

**Freshness**: `meta.processed_at` and `X-Processed-At` are the board time; `meta.last_seen` is each venue and sport's last read. The API drops no row for age; a venue not read within its own window (at most two minutes) is off the board until its next read.

**Conditional requests**: send the `ETag` back as `If-None-Match`; an unchanged body is a 304 with no body, free. A reply with no events is free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Odds.GetMatchedBoard(new GetMatchedBoardRequest
    {
        Type = Type1.Standard,
        Region = "uk",
        Quote = "true",
        Sports = "tennis",
        Bookmakers = "william_hill",
        Exchanges = "betfair_exchange",
        Markets = "h2h",
        CommenceTimeFrom = "2026-09-17T12:00:00Z",
        CommenceTimeTo = "2026-09-17T23:59:59Z",
        AcceptEncoding = "gzip",
    });
    // TODO: Handle 'response' of type V2OddsResponse
}
catch (ApiException<GetMatchedBoardError> ex)
{
    if (ex.Error.TryGetError400OddsRelayDiscoveryApi(out var error))
    {
        // TODO: Handle 'error' of type Error400OddsRelayDiscoveryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMatchedBoardRequest](src/OddsRelay/Requests/Odds/GetMatchedBoardRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2OddsResponse](src/OddsRelay/Models/AnyOf/V2OddsResponse.cs)</code>

**OnError**: <code>[ApiException](src/OddsRelay/Core/Exceptions/ApiException.cs)&lt;[GetMatchedBoardError](src/OddsRelay/Errors/GetMatchedBoardError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V2OddsRawResponse&gt; GetRawBoard(GetRawBoardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every venue's prices per event, one page at a time: bookmakers as `{name, price}`, exchanges quoting a lay side as `{name, back_price, lay_price, available}`. Served gzip only: a request refusing gzip is 400 `add Accept-Encoding: gzip; with curl use --compressed`.

**Checks, in this order**: the per-address shield, the key, the flood cap, a suspended account, a browser key's website, the API version; `region`, the region and `raw` in the key; the parameters (each one this route reads, once) and their values; the filters (400 unknown values, 403 `bookmaker_not_in_region`, 403 `bookmaker_not_in_plan`, then your account's scope: 403 `sport_not_in_plan`, `market_not_in_plan`, `bookmaker_not_in_plan`); `includeLinks` and `includeLiquidity`; `limit`; `cursor`; gzip; the raw board (503 `raw_not_enabled`); the page (503 while it cannot be cut); `quote=true`; the price (402).

**Paging**: pages are ordered by (kick-off, event id) and a cursor resumes strictly after the last event it saw, so an event that leaves the board between pages never restarts the walk. The accepted limit: an event whose kick-off moves across the cursor during a walk can appear twice or be missed. Dedupe by event `id`, and take a missed event on the next walk. A cursor expires 300 s after it was issued.

**Following changes**: walk with `updatedSince` set to the start of your previous walk; `last_update` is when a venue's market last moved (see the schema for what it is not).

**Price**: a page pays its share of the query's price (its prices over all the query's events' prices, at least 1; `eventIds` and `requireBookmakers` narrow the page, never the query), so a whole walk pays the query's price (narrowed by `eventIds` or `requireBookmakers`, only its kept events' share of it); a recent `updatedSince` pays a reduced share. `quote=true` prices this page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Odds.GetRawBoard(new GetRawBoardRequest
    {
        Region = "uk",
        Sports = "tennis",
        Bookmakers = "betfair_exchange",
        RequireBookmakers = "sky_bet,paddy_power,william_hill,ladbrokes,betfred,bet365",
        Markets = "h2h",
        CommenceTimeFrom = "2026-09-17T12:00:00Z",
        CommenceTimeTo = "2026-09-17T23:59:59Z",
        UpdatedSince = "2026-09-17T02:20:00Z",
        Quote = "true",
        AcceptEncoding = "gzip",
    });
    // TODO: Handle 'response' of type V2OddsRawResponse
}
catch (ApiException<GetRawBoardError> ex)
{
    if (ex.Error.TryGetError400OddsRelayDiscoveryApi(out var error))
    {
        // TODO: Handle 'error' of type Error400OddsRelayDiscoveryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRawBoardRequest](src/OddsRelay/Requests/Odds/GetRawBoardRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2OddsRawResponse](src/OddsRelay/Models/AnyOf/V2OddsRawResponse.cs)</code>

**OnError**: <code>[ApiException](src/OddsRelay/Core/Exceptions/ApiException.cs)&lt;[GetRawBoardError](src/OddsRelay/Errors/GetRawBoardError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V2OddsEventResponse&gt; GetRawEvent(GetRawEventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One raw event by id, every venue (a plan with a bookmaker list sees those venues and the region's exchanges; an account scope sees its raw venue list and markets only, no exchange added). Checks: the key and scope as raw, the parameters and their values, the raw board (503 `raw_not_enabled`), the id (404 `unknown_event`), the event's sport in your account's raw scope (403 `sport_not_in_plan`), `quote=true`, the price (402). The price is the whole event's, whatever the scope cuts. Priced by the event's share of the region's raw prices. Gzip unless refused (over 1 kB).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Odds.GetRawEvent(new GetRawEventRequest
    {
        Id = "or_evt_da71d5873e85",
        Region = "uk",
        Quote = "true",
    });
    // TODO: Handle 'response' of type V2OddsEventResponse
}
catch (ApiException<GetRawEventError> ex)
{
    if (ex.Error.TryGetError400OddsRelayDiscoveryApi(out var error))
    {
        // TODO: Handle 'error' of type Error400OddsRelayDiscoveryApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRawEventRequest](src/OddsRelay/Requests/Odds/GetRawEventRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2OddsEventResponse](src/OddsRelay/Models/AnyOf/V2OddsEventResponse.cs)</code>

**OnError**: <code>[ApiException](src/OddsRelay/Core/Exceptions/ApiException.cs)&lt;[GetRawEventError](src/OddsRelay/Errors/GetRawEventError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Service

> Source: [Service](src/OddsRelay/Api/Service.cs)

<details>
<summary><code>Task&lt;V2CoverageResponse&gt; GetCoverage(GetCoverageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One document per region, in two views. **Keyless** (no `Authorization` and no `x-api-key` header): per product, each (venue, sport) `live` or `interrupted_24h`, no counts and no times, then `markets`: per product, the market keys it carries, each one a value its `markets` filter takes now; the per-address shield only; `Cache-Control: public, max-age=60` and `Vary: Authorization, X-Api-Key, Accept-Encoding` on a 200; `Access-Control-Allow-Origin: *` on every reply, refusals and errors included. **Keyed** (either header present, even empty: an invalid key is 401): your key's products the region serves, venues with rows now, their `events` and `last_seen`; on an account with a scope, only its products and, per product, the venues and sports it admits (markets are not applied: the document has no market grain; a scope that cannot be applied is 503 `temporarily_unavailable`); free; the flood cap applies. Both: `region` missing means `uk`, gzip over 1 kB unless refused, 503 until the first document is built.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Service.GetCoverage(new GetCoverageRequest { Region = "uk" });
    // TODO: Handle 'response' of type V2CoverageResponse
}
catch (ApiException<GetCoverageError> ex)
{
    if (ex.Error.TryGetError400OddsRelayServiceApi(out var error))
    {
        // TODO: Handle 'error' of type Error400OddsRelayServiceApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCoverageRequest](src/OddsRelay/Requests/Service/GetCoverageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2CoverageResponse](src/OddsRelay/Models/AnyOf/V2CoverageResponse.cs)</code>

**OnError**: <code>[ApiException](src/OddsRelay/Core/Exceptions/ApiException.cs)&lt;[GetCoverageError](src/OddsRelay/Errors/GetCoverageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Health&gt; GetHealth(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Each board's `processed_at`, odds age (`age_s`) and event `count`, and a verdict: `degraded` when a board is past the age bound or cannot be served. Always HTTP 200 whatever the verdict. Free. Plain JSON.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Service.GetHealth();
    // TODO: Handle 'response' of type Health
}
catch (ApiException<GetHealthError> ex)
{
    if (ex.Error.TryGetError400OddsRelayServiceApi(out var error))
    {
        // TODO: Handle 'error' of type Error400OddsRelayServiceApi
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Health](src/OddsRelay/Models/Health.cs)</code>

**OnError**: <code>[ApiException](src/OddsRelay/Core/Exceptions/ApiException.cs)&lt;[GetHealthError](src/OddsRelay/Errors/GetHealthError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; GetLiveness(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Is the service up. KEYLESS and before every other check. `text/plain`, `Cache-Control: no-store`: the first line is `ok` (200) or `warming` (503), then how many boards can be served and any that cannot. Liveness only: board freshness is `/v2/health` and `/v2/status`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Service.GetLiveness();
    // TODO: Handle 'response' of type string
}
catch (ApiException<GetLivenessError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/OddsRelay/Core/Exceptions/ApiException.cs)&lt;[GetLivenessError](src/OddsRelay/Errors/GetLivenessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetOpenApi(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This OpenAPI document. KEYLESS: the per-address shield only, a key header is ignored, no token is spent. `ETag` is its SHA-256 (`-gz` on the gzip copy); 304 on a match; gzip unless refused; `Cache-Control: public, max-age=300`; `Access-Control-Allow-Origin: *` on every reply, refusals and errors included. Takes no parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Service.GetOpenApi();
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetOpenApiError> ex)
{
    if (ex.Error.TryGetError400OddsRelayServiceApi(out var error))
    {
        // TODO: Handle 'error' of type Error400OddsRelayServiceApi
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/OddsRelay/Core/Exceptions/ApiException.cs)&lt;[GetOpenApiError](src/OddsRelay/Errors/GetOpenApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StatusOddsRelayServiceApi&gt; GetStatus(GetStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Per product the region serves: `ok`, `slow` or `stale`, judged on each board's odds age (not servable or not held is `stale`). While boards warm every product reads `stale` in a 200. KEYLESS: the per-address shield only, a key header is ignored, no token is spent. `Cache-Control: public, max-age=10` on a 200; `Access-Control-Allow-Origin: *` on every reply, refusals and errors included. Plain JSON (never gzip).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Service.GetStatus(new GetStatusRequest { Region = "uk" });
    // TODO: Handle 'response' of type StatusOddsRelayServiceApi
}
catch (ApiException<GetStatusError> ex)
{
    if (ex.Error.TryGetError400OddsRelayServiceApi(out var error))
    {
        // TODO: Handle 'error' of type Error400OddsRelayServiceApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetStatusRequest](src/OddsRelay/Requests/Service/GetStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusOddsRelayServiceApi](src/OddsRelay/Models/StatusOddsRelayServiceApi.cs)</code>

**OnError**: <code>[ApiException](src/OddsRelay/Core/Exceptions/ApiException.cs)&lt;[GetStatusError](src/OddsRelay/Errors/GetStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

