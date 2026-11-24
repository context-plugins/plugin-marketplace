# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [StayingApiClient](src/StayingApi/StayingApiClient.cs)

## AccountApi

> Source: [AccountApi](src/StayingApi/Api/AccountApi.cs)

<details>
<summary><code>Task&lt;AccountEnvelope&gt; Account(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Programmatic introspection of the authenticated key: credit balance, plan (code/name/status), key env (live | sandbox) and the per-plan rate limit (requests/minute). Works for live and sandbox keys; free and never billed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AccountApi.Account();
    // TODO: Handle 'response' of type AccountEnvelope
}
catch (ApiException<AccountError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountEnvelope](src/StayingApi/Models/AccountEnvelope.cs)</code>

**OnError**: <code>[ApiException](src/StayingApi/Core/Exceptions/ApiException.cs)&lt;[AccountError](src/StayingApi/Errors/AccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DataApi

> Source: [DataApi](src/StayingApi/Api/DataApi.cs)

<details>
<summary><code>Task&lt;AvailabilityResponse&gt; Availability(AvailabilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provide EXACTLY ONE identification form: listingId, listingIds, or url. None → missing_parameter; conflicting forms → mutually_exclusive_params; a url that is not a well-formed listing URL for the platform → invalid_listing_url.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataApi.Availability(new AvailabilityRequest
    {
        Platform = Platform.Airbnb,
        StartDate = "some example string",
        EndDate = "some example string",
    });
    // TODO: Handle 'response' of type AvailabilityResponse
}
catch (ApiException<AvailabilityError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AvailabilityRequest](src/StayingApi/Requests/DataApi/AvailabilityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AvailabilityResponse](src/StayingApi/Models/AvailabilityResponse.cs)</code>

**OnError**: <code>[ApiException](src/StayingApi/Core/Exceptions/ApiException.cs)&lt;[AvailabilityError](src/StayingApi/Errors/AvailabilityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListingResponse&gt; Listing(ListingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataApi.Listing(new ListingRequest
    {
        Platform = Platform.Airbnb,
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ListingResponse
}
catch (ApiException<ListingError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListingRequest](src/StayingApi/Requests/DataApi/ListingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListingResponse](src/StayingApi/Models/ListingResponse.cs)</code>

**OnError**: <code>[ApiException](src/StayingApi/Core/Exceptions/ApiException.cs)&lt;[ListingError](src/StayingApi/Errors/ListingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PriceResponse&gt; Price(PriceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataApi.Price(new PriceRequest
    {
        Platform = Platform.Airbnb,
        ListingId = "some example string",
        CheckIn = "some example string",
        CheckOut = "some example string",
    });
    // TODO: Handle 'response' of type PriceResponse
}
catch (ApiException<PriceError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PriceRequest](src/StayingApi/Requests/DataApi/PriceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PriceResponse](src/StayingApi/Models/PriceResponse.cs)</code>

**OnError**: <code>[ApiException](src/StayingApi/Core/Exceptions/ApiException.cs)&lt;[PriceError](src/StayingApi/Errors/PriceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PriceCompareResponse&gt; PriceCompare(PriceCompareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

TWO modes, one response type.

**Google-aggregator mode** (`name` / `location` / `googleHotelId`): we resolve the property on Google Hotels and report the offers it surfaces. You need no ids. Flat 30 credits.

**Direct fan-out mode** (`listings=`): you supply 2–6 `platform:listingId` pairs for the SAME property and we run one real price call per listing, in parallel, then normalize the comparison ourselves. Each offer carries `platform`, `listingId`, `nightlyPrice`, `nights` and a best-effort `fees` breakdown, and the response is marked `source: 'direct_fanout'`. Billed as the SUM of the per-platform price legs; a leg that fails or returns nothing is charged 0 and is reported in `meta.platformResults` with `meta.partial: true`.

FEE COVERAGE IS UNEVEN and this is deliberate rather than a gap we hide: Airbnb reports cleaning, service and taxes; Booking.com reports taxes only; Vrbo and Google report none. Compare on `totalPrice`, which is present and comparable everywhere. A null fee means we could not read it, NOT that the platform does not charge it.

`min` and `median` cover only the offers quoted in the response `currency`; offers in another currency are still returned but excluded from the summary.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataApi.PriceCompare(new PriceCompareRequest
    {
        CheckIn = "some example string",
        CheckOut = "some example string",
    });
    // TODO: Handle 'response' of type PriceCompareResponse
}
catch (ApiException<PriceCompareError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PriceCompareRequest](src/StayingApi/Requests/DataApi/PriceCompareRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PriceCompareResponse](src/StayingApi/Models/PriceCompareResponse.cs)</code>

**OnError**: <code>[ApiException](src/StayingApi/Core/Exceptions/ApiException.cs)&lt;[PriceCompareError](src/StayingApi/Errors/PriceCompareError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReviewsResponse&gt; Reviews(ReviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provide EXACTLY ONE of listingId or url. None → missing_parameter; both → mutually_exclusive_params; a bad url → invalid_listing_url. Required params are platform plus either listingId or url. listingId should be the platform-native id from /v1/search `platformListingId`; a `stays__` object id is accepted, normalized, and may supply platform when platform is omitted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataApi.Reviews(new ReviewsRequest { Platform = Platform.Airbnb });
    // TODO: Handle 'response' of type ReviewsResponse
}
catch (ApiException<ReviewsError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReviewsRequest](src/StayingApi/Requests/DataApi/ReviewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReviewsResponse](src/StayingApi/Models/ReviewsResponse.cs)</code>

**OnError**: <code>[ApiException](src/StayingApi/Core/Exceptions/ApiException.cs)&lt;[ReviewsError](src/StayingApi/Errors/ReviewsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchResponse&gt; SearchGet(SearchGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataApi.SearchGet(new SearchGetRequest { Location = "some example string" });
    // TODO: Handle 'response' of type SearchResponse
}
catch (ApiException<SearchGetError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchGetRequest](src/StayingApi/Requests/DataApi/SearchGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResponse](src/StayingApi/Models/SearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/StayingApi/Core/Exceptions/ApiException.cs)&lt;[SearchGetError](src/StayingApi/Errors/SearchGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchResponse&gt; SearchPost(SearchPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataApi.SearchPost(new SearchPostRequest { Body = body });
    // TODO: Handle 'response' of type SearchResponse
}
catch (ApiException<SearchPostError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchPostRequest](src/StayingApi/Requests/DataApi/SearchPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResponse](src/StayingApi/Models/SearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/StayingApi/Core/Exceptions/ApiException.cs)&lt;[SearchPostError](src/StayingApi/Errors/SearchPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/StayingApi/Api/Jobs.cs)

<details>
<summary><code>Task&lt;JobResponse&gt; PollJob(PollJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Poll until status is terminal (completed | failed). While pending/running the response carries a Retry-After header. Enforces jobs.user_id == caller; unknown/not-owned/expired → job_not_found (404).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.PollJob(new PollJobRequest { JobId = "some example string" });
    // TODO: Handle 'response' of type JobResponse
}
catch (ApiException<PollJobError> ex)
{
    if (ex.Error.TryGetErrorEnvelope(out var error))
    {
        // TODO: Handle 'error' of type ErrorEnvelope
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PollJobRequest](src/StayingApi/Requests/Jobs/PollJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobResponse](src/StayingApi/Models/AnyOf/JobResponse.cs)</code>

**OnError**: <code>[ApiException](src/StayingApi/Core/Exceptions/ApiException.cs)&lt;[PollJobError](src/StayingApi/Errors/PollJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

