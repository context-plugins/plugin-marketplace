# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [StayingApiClient](staying_api/client.py)

## AccountApi

> Source: [AccountApi](staying_api/apis/account_api.py)

<details>
<summary><code>def account(*, request_options: RequestOptionsOrDict | None = None) -> AccountEnvelope</code></summary>

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

**Sync**

```python
try:
    response = client.account_api.account()
    # TODO: Handle 'response' of type AccountEnvelope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AccountErrorBody
```

**Async**

```python
try:
    response = await async_client.account_api.account()
    # TODO: Handle 'response' of type AccountEnvelope
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](staying_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountEnvelope](staying_api/models/account_envelope.py)</code> -- Success.

**OnError**: <code>[ApiError](staying_api/core/exceptions.py)&#91;[AccountErrorBody](staying_api/errors/account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[ErrorEnvelope](staying_api/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](staying_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DataApi

> Source: [DataApi](staying_api/apis/data_api.py)

<details>
<summary><code>def availability(platform: PlatformOrStr, start_date: str, end_date: str, *, listing_id: str | None = None, listing_ids: str | None = None, url: str | None = None, only_available: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> AvailabilityResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_api.availability(Platform.AIRBNB, "some example string", "some example string")
    # TODO: Handle 'response' of type AvailabilityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AvailabilityErrorBody
```

**Async**

```python
try:
    response = await async_client.data_api.availability(Platform.AIRBNB, "some example string", "some example string")
    # TODO: Handle 'response' of type AvailabilityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AvailabilityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>platform</code> | <code>[PlatformOrStr](staying_api/models/enums/platform.py)</code> | Target platform (must be enabled for availability). |
| <code>start_date</code> | <code>str</code> | YYYY-MM-DD (required). |
| <code>end_date</code> | <code>str</code> | YYYY-MM-DD (required). |
| <code>listing_id</code> | <code>str \| None</code> | Platform listing id (one identification form).<br>**Default**: <code>None</code> |
| <code>listing_ids</code> | <code>str \| None</code> | Comma-separated listing ids (one identification form).<br>**Default**: <code>None</code> |
| <code>url</code> | <code>str \| None</code> | Full listing URL for the platform (one identification form).<br>**Default**: <code>None</code> |
| <code>only_available</code> | <code>bool \| None</code> | Only return available dates.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](staying_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AvailabilityResponse](staying_api/models/availability_response.py)</code> -- Success.

**OnError**: <code>[ApiError](staying_api/core/exceptions.py)&#91;[AvailabilityErrorBody](staying_api/errors/availability_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429, 503 | <code>[ErrorEnvelope](staying_api/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](staying_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def listing(platform: PlatformOrStr, id_: str, *, country: str | None = None, check_in: str | None = None, check_out: str | None = None, currency: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListingResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.data_api.listing(Platform.AIRBNB, "some example string")
    # TODO: Handle 'response' of type ListingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListingErrorBody
```

**Async**

```python
try:
    response = await async_client.data_api.listing(Platform.AIRBNB, "some example string")
    # TODO: Handle 'response' of type ListingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>platform</code> | <code>[PlatformOrStr](staying_api/models/enums/platform.py)</code> | Value sent with the request. |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>country</code> | <code>str \| None</code> | ISO-3166 alpha-2 country hint (booking). Disambiguates a bare booking.com slug (slugs are not globally unique) without the %2F-encoded /hotel/{cc}/{slug} id — e.g. /v1/listing/booking/casa-de-alba?country=co. A bare booking slug with no country returns 400 needs_country.<br>**Default**: <code>None</code> |
| <code>check_in</code> | <code>str \| None</code> | YYYY-MM-DD.<br>**Default**: <code>None</code> |
| <code>check_out</code> | <code>str \| None</code> | YYYY-MM-DD.<br>**Default**: <code>None</code> |
| <code>currency</code> | <code>str \| None</code> | ISO-4217; default USD.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](staying_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListingResponse](staying_api/models/listing_response.py)</code> -- Success.

**OnError**: <code>[ApiError](staying_api/core/exceptions.py)&#91;[ListingErrorBody](staying_api/errors/listing_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429, 503 | <code>[ErrorEnvelope](staying_api/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](staying_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def price(platform: PlatformOrStr, listing_id: str, check_in: str, check_out: str, *, currency: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PriceResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.data_api.price(
        Platform.AIRBNB, "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PriceErrorBody
```

**Async**

```python
try:
    response = await async_client.data_api.price(
        Platform.AIRBNB, "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PriceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>platform</code> | <code>[PlatformOrStr](staying_api/models/enums/platform.py)</code> | Target platform (must be enabled for price). |
| <code>listing_id</code> | <code>str</code> | Platform listing id. |
| <code>check_in</code> | <code>str</code> | YYYY-MM-DD (required). |
| <code>check_out</code> | <code>str</code> | YYYY-MM-DD (required). |
| <code>currency</code> | <code>str \| None</code> | ISO-4217; default USD.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](staying_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PriceResponse](staying_api/models/price_response.py)</code> -- Success.

**OnError**: <code>[ApiError](staying_api/core/exceptions.py)&#91;[PriceErrorBody](staying_api/errors/price_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429, 503 | <code>[ErrorEnvelope](staying_api/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](staying_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def price_compare(check_in: str, check_out: str, *, listings: str | None = None, name: str | None = None, location: str | None = None, google_hotel_id: str | None = None, adults: int | None = None, children: int | None = None, currency: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PriceCompareResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_api.price_compare("some example string", "some example string")
    # TODO: Handle 'response' of type PriceCompareResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PriceCompareErrorBody
```

**Async**

```python
try:
    response = await async_client.data_api.price_compare("some example string", "some example string")
    # TODO: Handle 'response' of type PriceCompareResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PriceCompareErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>check_in</code> | <code>str</code> | YYYY-MM-DD (required). |
| <code>check_out</code> | <code>str</code> | YYYY-MM-DD (required). |
| <code>listings</code> | <code>str \| None</code> | DIRECT MODE. 2–6 comma-separated (or repeated) platform:listingId pairs for the same property, e.g. listings=airbnb:12345,booking:co/casa-de-alba,vrbo:987654. Split on the FIRST colon, so a full listing URL works as the id. Mutually exclusive with name/location/googleHotelId. An id containing a comma must be sent as a repeated param.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | GOOGLE MODE. Property name (one of name/location/googleHotelId).<br>**Default**: <code>None</code> |
| <code>location</code> | <code>str \| None</code> | GOOGLE MODE. Location hint (one of name/location/googleHotelId).<br>**Default**: <code>None</code> |
| <code>google_hotel_id</code> | <code>str \| None</code> | GOOGLE MODE. Google hotel id (mutually exclusive with name/location).<br>**Default**: <code>None</code> |
| <code>adults</code> | <code>int \| None</code> | Default 2.<br>**Default**: <code>None</code> |
| <code>children</code> | <code>int \| None</code> | Default 0.<br>**Default**: <code>None</code> |
| <code>currency</code> | <code>str \| None</code> | ISO-4217; default USD.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](staying_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PriceCompareResponse](staying_api/models/price_compare_response.py)</code> -- Success.

**OnError**: <code>[ApiError](staying_api/core/exceptions.py)&#91;[PriceCompareErrorBody](staying_api/errors/price_compare_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429, 503 | <code>[ErrorEnvelope](staying_api/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](staying_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reviews(platform: PlatformOrStr, *, listing_id: str | None = None, url: str | None = None, limit: int | None = None, cursor: str | None = None, language: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ReviewsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_api.reviews(Platform.AIRBNB)
    # TODO: Handle 'response' of type ReviewsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReviewsErrorBody
```

**Async**

```python
try:
    response = await async_client.data_api.reviews(Platform.AIRBNB)
    # TODO: Handle 'response' of type ReviewsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReviewsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>platform</code> | <code>[PlatformOrStr](staying_api/models/enums/platform.py)</code> | Target platform (must be enabled for reviews). |
| <code>listing_id</code> | <code>str \| None</code> | Platform-native id from /v1/search `platformListingId` (one identification form); a `stays_<platform>_<platformListingId>` id is accepted, normalized, and may supply platform when platform is omitted.<br>**Default**: <code>None</code> |
| <code>url</code> | <code>str \| None</code> | Full listing URL (one identification form).<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | 1–100; default 20.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor.<br>**Default**: <code>None</code> |
| <code>language</code> | <code>str \| None</code> | ISO-639-1 filter.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | recent \| rating_desc \| rating_asc.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](staying_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReviewsResponse](staying_api/models/reviews_response.py)</code> -- Success.

**OnError**: <code>[ApiError](staying_api/core/exceptions.py)&#91;[ReviewsErrorBody](staying_api/errors/reviews_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429, 503 | <code>[ErrorEnvelope](staying_api/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](staying_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_get(location: str, *, check_in: str | None = None, check_out: str | None = None, platforms: str | None = None, platform: str | None = None, adults: int | None = None, children: int | None = None, rooms: int | None = None, currency: str | None = None, limit: int | None = None, cursor: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.data_api.search_get("some example string")
    # TODO: Handle 'response' of type SearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchGetErrorBody
```

**Async**

```python
try:
    response = await async_client.data_api.search_get("some example string")
    # TODO: Handle 'response' of type SearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>location</code> | <code>str</code> | Destination (city, region, address). |
| <code>check_in</code> | <code>str \| None</code> | YYYY-MM-DD.<br>**Default**: <code>None</code> |
| <code>check_out</code> | <code>str \| None</code> | YYYY-MM-DD.<br>**Default**: <code>None</code> |
| <code>platforms</code> | <code>str \| None</code> | Comma-separated platforms; defaults to all enabled. `limit` applies per platform.<br>**Default**: <code>None</code> |
| <code>platform</code> | <code>str \| None</code> | Alias for `platforms=<value>` when requesting exactly one platform.<br>**Default**: <code>None</code> |
| <code>adults</code> | <code>int \| None</code> | Default 2.<br>**Default**: <code>None</code> |
| <code>children</code> | <code>int \| None</code> | Default 0; requires matching childAges.<br>**Default**: <code>None</code> |
| <code>rooms</code> | <code>int \| None</code> | Default 1.<br>**Default**: <code>None</code> |
| <code>currency</code> | <code>str \| None</code> | ISO-4217; default USD.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | 1–40; default 10. Applies per platform: a 3-platform search with limit=5 returns up to 15 results.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | recommended \| price_asc \| price_desc \| rating_desc.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](staying_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResponse](staying_api/models/search_response.py)</code> -- Success.

**OnError**: <code>[ApiError](staying_api/core/exceptions.py)&#91;[SearchGetErrorBody](staying_api/errors/search_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429, 503 | <code>[ErrorEnvelope](staying_api/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](staying_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_post(body: Any, *, request_options: RequestOptionsOrDict | None = None) -> SearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.data_api.search_post({})
    # TODO: Handle 'response' of type SearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchPostErrorBody
```

**Async**

```python
try:
    response = await async_client.data_api.search_post({})
    # TODO: Handle 'response' of type SearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](staying_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResponse](staying_api/models/search_response.py)</code> -- Success.

**OnError**: <code>[ApiError](staying_api/core/exceptions.py)&#91;[SearchPostErrorBody](staying_api/errors/search_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429, 503 | <code>[ErrorEnvelope](staying_api/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](staying_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](staying_api/apis/jobs.py)

<details>
<summary><code>def poll_job(job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> JobResponse</code></summary>

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

**Sync**

```python
try:
    response = client.jobs.poll_job("some example string")
    # TODO: Handle 'response' of type JobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PollJobErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.poll_job("some example string")
    # TODO: Handle 'response' of type JobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PollJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>str</code> | job_-prefixed id. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](staying_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobResponse](staying_api/models/unions/job_response.py)</code> -- Job status. pending/running carry a Retry-After header; completed carries the payload at data.result; FAILED is HTTP 200 with the failure nested at data.error (NOT a top-level error) and creditsCharged 0. Branch on data.status — see JobResponse.

**OnError**: <code>[ApiError](staying_api/core/exceptions.py)&#91;[PollJobErrorBody](staying_api/errors/poll_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorEnvelope](staying_api/models/error_envelope.py)</code> |
| anything unmapped | <code>[RawError](staying_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

