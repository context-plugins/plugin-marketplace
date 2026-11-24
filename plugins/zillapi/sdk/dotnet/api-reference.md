# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [ZillapiClient](src/Zillapi/ZillapiClient.cs)

## Account

> Source: [Account](src/Zillapi/Api/Account.cs)

<details>
<summary><code>Task&lt;V1MeResponse&gt; GetMe(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the authenticated account, plan summary, and credit balance. Control-plane endpoint — free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.GetMe();
    // TODO: Handle 'response' of type V1MeResponse
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

**OnSuccess**: <code>[V1MeResponse](src/Zillapi/Models/V1MeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UsageResponse&gt; GetUsage(GetUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return recent metered usage rows (endpoint, actor, units, status code). Control-plane endpoint — free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.GetUsage(new GetUsageRequest());
    // TODO: Handle 'response' of type V1UsageResponse
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

<code>[GetUsageRequest](src/Zillapi/Requests/Account/GetUsageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UsageResponse](src/Zillapi/Models/V1UsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Buildings

> Source: [Buildings](src/Zillapi/Api/Buildings.cs)

<details>
<summary><code>Task&lt;V1BuildingsByUrlResponse&gt; GetBuildingByUrl(GetBuildingByUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract all unit listings from a Zillow building, apartments, or community URL (/b/, /apartments/, or /community/). Runs synchronously by default; set sync=false for large buildings to receive a job_id. Billed at 1 credit per unit returned; failed calls are free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Buildings.GetBuildingByUrl(new GetBuildingByUrlRequest { Url = "some example string" });
    // TODO: Handle 'response' of type V1BuildingsByUrlResponse
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

<code>[GetBuildingByUrlRequest](src/Zillapi/Requests/Buildings/GetBuildingByUrlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BuildingsByUrlResponse](src/Zillapi/Models/V1BuildingsByUrlResponse.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/Zillapi/Api/Jobs.cs)

<details>
<summary><code>Task&lt;V1JobsResponse1&gt; GetJob(GetJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a single job row including status, result_count, chain_stage, and timestamps. For chained_search_detail jobs, status: succeeded means both stages finished. Control-plane endpoint — free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.GetJob(new GetJobRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type V1JobsResponse1
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

<code>[GetJobRequest](src/Zillapi/Requests/Jobs/GetJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JobsResponse1](src/Zillapi/Models/V1JobsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1JobsResultsResponse&gt; GetJobResults(GetJobResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch paginated results for a succeeded job in JSON, CSV, or NDJSON. Returns 409 job_not_ready until the job status is succeeded. Free — billing happens once when the job completes, not on result reads.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.GetJobResults(new GetJobResultsRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type V1JobsResultsResponse
}
catch (ApiException<GetJobResultsError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetJobResultsRequest](src/Zillapi/Requests/Jobs/GetJobResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JobsResultsResponse](src/Zillapi/Models/V1JobsResultsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[GetJobResultsError](src/Zillapi/Errors/GetJobResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1JobsResponse&gt; ListJobs(ListJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List your async jobs filtered by status, type, and creation time. Control-plane endpoint — free, does not consume credits.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.ListJobs(new ListJobsRequest());
    // TODO: Handle 'response' of type V1JobsResponse
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

<code>[ListJobsRequest](src/Zillapi/Requests/Jobs/ListJobsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JobsResponse](src/Zillapi/Models/V1JobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Listings

> Source: [Listings](src/Zillapi/Api/Listings.cs)

<details>
<summary><code>Task&lt;SearchResultsOk&gt; ListingsBbox(ListingsBboxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

REST GET wrapper over /v1/search for one-line curl or agent-toolchain use. A `bbox` (west,south,east,north) is REQUIRED — free-text location is not supported. Returns up to `max_items` rows synchronously (default 50, hard cap 50); for more, use POST /v1/search with async. Billed at 1 credit **per listing returned** — this cost is per-result, not per-call, so a full-page search costs up to 50 credits; set `max_items` lower to cap it. Failed calls are free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Listings.ListingsBbox(new ListingsBboxRequest { Bbox = "some example string" });
    // TODO: Handle 'response' of type SearchResultsOk
}
catch (ApiException<ListingsBboxError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListingsBboxRequest](src/Zillapi/Requests/Listings/ListingsBboxRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResultsOk](src/Zillapi/Models/SearchResultsOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[ListingsBboxError](src/Zillapi/Errors/ListingsBboxError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchResultsOk&gt; ListingsForRent(ListingsForRentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for-rent listings within a bounding box (status forced to for_rent). Same body as POST /v1/search; a `bbox` or `searchUrls` is required. Billed at 1 credit per listing returned; failed calls are free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Listings.ListingsForRent(new ListingsForRentRequest
    {
        Body = new SearchRequest { SearchUrls = [new SearchUrl { Url = "https://example.com" }] },
    });
    // TODO: Handle 'response' of type SearchResultsOk
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

<code>[ListingsForRentRequest](src/Zillapi/Requests/Listings/ListingsForRentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResultsOk](src/Zillapi/Models/SearchResultsOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchResultsOk&gt; ListingsForSale(ListingsForSaleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for-sale listings within a bounding box (status forced to for_sale). Same body as POST /v1/search; a `bbox` or `searchUrls` is required. Billed at 1 credit per listing returned; failed calls are free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Listings.ListingsForSale(new ListingsForSaleRequest
    {
        Body = new SearchRequest { SearchUrls = [new SearchUrl { Url = "https://example.com" }] },
    });
    // TODO: Handle 'response' of type SearchResultsOk
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

<code>[ListingsForSaleRequest](src/Zillapi/Requests/Listings/ListingsForSaleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResultsOk](src/Zillapi/Models/SearchResultsOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchResultsOk&gt; ListingsSold(ListingsSoldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search recently-sold listings within a bounding box (status forced to sold). Same body as POST /v1/search; a `bbox` or `searchUrls` is required. Billed at 1 credit per listing returned; failed calls are free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Listings.ListingsSold(new ListingsSoldRequest
    {
        Body = new SearchRequest { SearchUrls = [new SearchUrl { Url = "https://example.com" }] },
    });
    // TODO: Handle 'response' of type SearchResultsOk
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

<code>[ListingsSoldRequest](src/Zillapi/Requests/Listings/ListingsSoldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResultsOk](src/Zillapi/Models/SearchResultsOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Properties

> Source: [Properties](src/Zillapi/Api/Properties.cs)

<details>
<summary><code>Task&lt;JobAccepted&gt; CreateBatchPropertyJob(CreateBatchPropertyJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Queue an async job that resolves up to 500 URLs and/or addresses to full property records. Always async: returns a job_id — poll GET /v1/jobs/{id} or use a webhook. Billed at 1 credit per record returned, settled when the job completes; failed calls are free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.CreateBatchPropertyJob(new CreateBatchPropertyJobRequest
    {
        Body = new BatchPropertyRequest(),
    });
    // TODO: Handle 'response' of type JobAccepted
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

<code>[CreateBatchPropertyJobRequest](src/Zillapi/Requests/Properties/CreateBatchPropertyJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobAccepted](src/Zillapi/Models/JobAccepted.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AgentOk&gt; GetPropertyAgent(GetPropertyAgentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the listing agent and broker contact details plus attribution info. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.GetPropertyAgent(new GetPropertyAgentRequest
    {
        Zpid = "some example string",
    });
    // TODO: Handle 'response' of type AgentOk
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

<code>[GetPropertyAgentRequest](src/Zillapi/Requests/Properties/GetPropertyAgentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentOk](src/Zillapi/Models/AgentOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PropertyOk&gt; GetPropertyByAddress(GetPropertyByAddressRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a full street address (street, city, state, ZIP) to a property record via upstream geocoding. Costs 3 credits per successful call because the address is resolved upstream; failed calls are free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.GetPropertyByAddress(new GetPropertyByAddressRequest
    {
        Address = "some example string",
    });
    // TODO: Handle 'response' of type PropertyOk
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

<code>[GetPropertyByAddressRequest](src/Zillapi/Requests/Properties/GetPropertyByAddressRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PropertyOk](src/Zillapi/Models/PropertyOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PropertyOk&gt; GetPropertyByUrl(GetPropertyByUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch the full property record for a Zillow URL (homedetails, /b/, /community/, or /apartments/). When `extract_units` is not `disabled` and the URL is a multi-unit building, `data` is returned as an array of unit records. Costs 1 credit per record returned; failed calls are free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.GetPropertyByUrl(new GetPropertyByUrlRequest
    {
        Url = "https://example.com",
    });
    // TODO: Handle 'response' of type PropertyOk
}
catch (ApiException<GetPropertyByUrlError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPropertyByUrlRequest](src/Zillapi/Requests/Properties/GetPropertyByUrlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PropertyOk](src/Zillapi/Models/PropertyOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[GetPropertyByUrlError](src/Zillapi/Errors/GetPropertyByUrlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PropertyCachedOk&gt; GetPropertyByZpid(GetPropertyByZpidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cache-first lookup (24h TTL) of the full property record by Zillow zpid. Costs 1 credit per successful lookup; caching is a transparent optimization (faster responses, same price). Failed calls are free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.GetPropertyByZpid(new GetPropertyByZpidRequest
    {
        Zpid = "some example string",
    });
    // TODO: Handle 'response' of type PropertyCachedOk
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

<code>[GetPropertyByZpidRequest](src/Zillapi/Requests/Properties/GetPropertyByZpidRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PropertyCachedOk](src/Zillapi/Models/PropertyCachedOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FactsOk&gt; GetPropertyFacts(GetPropertyFactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the full `resoFacts` MLS attribute set (appliances, flooring, parking, view, and hundreds of other fields). Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.GetPropertyFacts(new GetPropertyFactsRequest
    {
        Zpid = "some example string",
    });
    // TODO: Handle 'response' of type FactsOk
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

<code>[GetPropertyFactsRequest](src/Zillapi/Requests/Properties/GetPropertyFactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FactsOk](src/Zillapi/Models/FactsOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NearbyOk&gt; GetPropertyNearby(GetPropertyNearbyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return comparable nearby homes (top ~12 from upstream) as search-style rows. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.GetPropertyNearby(new GetPropertyNearbyRequest
    {
        Zpid = "some example string",
    });
    // TODO: Handle 'response' of type NearbyOk
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

<code>[GetPropertyNearbyRequest](src/Zillapi/Requests/Properties/GetPropertyNearbyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NearbyOk](src/Zillapi/Models/NearbyOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OpenHousesOk&gt; GetPropertyOpenHouses(GetPropertyOpenHousesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the property's open-house schedule and tour eligibility. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.GetPropertyOpenHouses(new GetPropertyOpenHousesRequest
    {
        Zpid = "some example string",
    });
    // TODO: Handle 'response' of type OpenHousesOk
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

<code>[GetPropertyOpenHousesRequest](src/Zillapi/Requests/Properties/GetPropertyOpenHousesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OpenHousesOk](src/Zillapi/Models/OpenHousesOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PhotosOk&gt; GetPropertyPhotos(GetPropertyPhotosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the property's photo array with multi-width JPEG/WebP sources plus counts and 3D/video flags. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.GetPropertyPhotos(new GetPropertyPhotosRequest
    {
        Zpid = "some example string",
    });
    // TODO: Handle 'response' of type PhotosOk
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

<code>[GetPropertyPhotosRequest](src/Zillapi/Requests/Properties/GetPropertyPhotosRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PhotosOk](src/Zillapi/Models/PhotosOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PriceHistoryOk&gt; GetPropertyPriceHistory(GetPropertyPriceHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the property's price-history events (listed, sold, and price changes). Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.GetPropertyPriceHistory(new GetPropertyPriceHistoryRequest
    {
        Zpid = "some example string",
    });
    // TODO: Handle 'response' of type PriceHistoryOk
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

<code>[GetPropertyPriceHistoryRequest](src/Zillapi/Requests/Properties/GetPropertyPriceHistoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PriceHistoryOk](src/Zillapi/Models/PriceHistoryOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SchoolsOk&gt; GetPropertySchools(GetPropertySchoolsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return schools associated with the property, including GreatSchools rating, distance, type, and level. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.GetPropertySchools(new GetPropertySchoolsRequest
    {
        Zpid = "some example string",
    });
    // TODO: Handle 'response' of type SchoolsOk
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

<code>[GetPropertySchoolsRequest](src/Zillapi/Requests/Properties/GetPropertySchoolsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SchoolsOk](src/Zillapi/Models/SchoolsOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaxHistoryOk&gt; GetPropertyTaxHistory(GetPropertyTaxHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the property's tax-history rows (tax paid and assessed value per year). Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.GetPropertyTaxHistory(new GetPropertyTaxHistoryRequest
    {
        Zpid = "some example string",
    });
    // TODO: Handle 'response' of type TaxHistoryOk
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

<code>[GetPropertyTaxHistoryRequest](src/Zillapi/Requests/Properties/GetPropertyTaxHistoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaxHistoryOk](src/Zillapi/Models/TaxHistoryOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ZestimateOk&gt; GetPropertyZestimate(GetPropertyZestimateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the property's Zestimate, rent Zestimate, tax-assessed value, and last sold price. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.GetPropertyZestimate(new GetPropertyZestimateRequest
    {
        Zpid = "some example string",
    });
    // TODO: Handle 'response' of type ZestimateOk
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

<code>[GetPropertyZestimateRequest](src/Zillapi/Requests/Properties/GetPropertyZestimateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ZestimateOk](src/Zillapi/Models/ZestimateOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/Zillapi/Api/Search.cs)

<details>
<summary><code>Task&lt;SearchResultsOk&gt; SearchInvoke(SearchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Structured listing search using normalized filters (option A) or a pre-built Zillow searchQueryState URL (option B). A `bbox` or `searchUrls` is REQUIRED — a free-text location alone is rejected with 400 invalid_filters and never hits upstream. Sync when maxItems ≤ 50, async (202/job) otherwise. Billed at 1 credit per result returned; failed calls are free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchInvoke(new SearchOperationRequest
    {
        Body = new SearchRequest { SearchUrls = [new SearchUrl { Url = "https://example.com" }] },
    });
    // TODO: Handle 'response' of type SearchResultsOk
}
catch (ApiException<SearchError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchOperationRequest](src/Zillapi/Requests/Search/SearchOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResultsOk](src/Zillapi/Models/SearchResultsOk.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[SearchError](src/Zillapi/Errors/SearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobAcceptedZillapiZillowPropertyDataListingsApi&gt; SearchWithDetails(SearchWithDetailsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run a search and enrich every matched zpid with the full property-detail record in one chained async job. Always async; the results returned by GET /v1/jobs/{id}/results are detail rows (Property shape), not search rows. Billed per stage: 1 credit per search result plus 1 credit per detail record. Failed calls are free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchWithDetails(new SearchWithDetailsOperationRequest
    {
        Body = new SearchWithDetailsRequest
        {
            Filters = new SearchFilters1 { Bbox = new Bbox { West = 1.5d, South = 1.5d, East = 1.5d, North = 1.5d } },
            SearchUrls = [new SearchUrl { Url = "https://example.com" }],
        },
    });
    // TODO: Handle 'response' of type JobAcceptedZillapiZillowPropertyDataListingsApi
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

<code>[SearchWithDetailsOperationRequest](src/Zillapi/Requests/Search/SearchWithDetailsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobAcceptedZillapiZillowPropertyDataListingsApi](src/Zillapi/Models/JobAcceptedZillapiZillowPropertyDataListingsApi.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/Zillapi/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;V1WebhooksResponse1&gt; CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Register an outbound webhook URL for terminal job events. The signing secret is returned once in the 201 response and never again. If `events` is omitted you receive all four. Control-plane endpoint — free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.CreateWebhook(new CreateWebhookRequest
    {
        Body = new WebhookCreate { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type V1WebhooksResponse1
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

<code>[CreateWebhookRequest](src/Zillapi/Requests/WebhooksApi/CreateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebhooksResponse1](src/Zillapi/Models/V1WebhooksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WebhooksDeliveriesResponse&gt; ListWebhookDeliveries(ListWebhookDeliveriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the per-attempt delivery log for a webhook (status code, delivered flag, response preview) for debugging failed deliveries. Control-plane endpoint — free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.ListWebhookDeliveries(new ListWebhookDeliveriesRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type V1WebhooksDeliveriesResponse
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

<code>[ListWebhookDeliveriesRequest](src/Zillapi/Requests/WebhooksApi/ListWebhookDeliveriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebhooksDeliveriesResponse](src/Zillapi/Models/V1WebhooksDeliveriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WebhooksResponse&gt; ListWebhooks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List registered outbound webhooks. Secrets are never returned on read — only once at creation. Control-plane endpoint — free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.ListWebhooks();
    // TODO: Handle 'response' of type V1WebhooksResponse
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

**OnSuccess**: <code>[V1WebhooksResponse](src/Zillapi/Models/V1WebhooksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RevokeWebhook(RevokeWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft-revoke a webhook; delivery stops immediately. Returns 204 No Content. Control-plane endpoint — free.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.WebhooksApi.RevokeWebhook(new RevokeWebhookRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
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

<code>[RevokeWebhookRequest](src/Zillapi/Requests/WebhooksApi/RevokeWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Zillapi/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Zillapi/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

