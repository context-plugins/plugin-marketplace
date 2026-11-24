# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [StayingApiClient](staying_api/client.py)

## AccountApi

> Source: [AccountApi](staying_api/apis/account_api.py)

<details>
<summary><code>def account(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccountEnvelope, AccountErrorBody]</code></summary>

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
result = client.account_api.with_raw_response.account()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AccountErrorBody
```

**Async**

```python
result = await async_client.account_api.with_raw_response.account()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountEnvelope
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AccountErrorBody
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

**Returns**: <code>[ApiResult](staying_api/core/results.py)&#91;[AccountEnvelope](staying_api/models/account_envelope.py), [AccountErrorBody](staying_api/errors/account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccountEnvelope](staying_api/models/account_envelope.py)</code> -- Success.

**On `Failure`**: `error` is <code>[AccountErrorBody](staying_api/errors/account_error.py)</code>

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
<summary><code>def availability(platform: PlatformOrStr, start_date: str, end_date: str, *, listing_id: str | None = None, listing_ids: str | None = None, url: str | None = None, only_available: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AvailabilityResponse, AvailabilityErrorBody]</code></summary>

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
result = client.data_api.with_raw_response.availability(Platform.AIRBNB, "some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AvailabilityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AvailabilityErrorBody
```

**Async**

```python
result = await async_client.data_api.with_raw_response.availability(
    Platform.AIRBNB, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AvailabilityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AvailabilityErrorBody
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

**Returns**: <code>[ApiResult](staying_api/core/results.py)&#91;[AvailabilityResponse](staying_api/models/availability_response.py), [AvailabilityErrorBody](staying_api/errors/availability_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AvailabilityResponse](staying_api/models/availability_response.py)</code> -- Success.

**On `Failure`**: `error` is <code>[AvailabilityErrorBody](staying_api/errors/availability_error.py)</code>

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
<summary><code>def listing(platform: PlatformOrStr, id_: str, *, country: str | None = None, check_in: str | None = None, check_out: str | None = None, currency: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListingResponse, ListingErrorBody]</code></summary>

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
result = client.data_api.with_raw_response.listing(Platform.AIRBNB, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListingErrorBody
```

**Async**

```python
result = await async_client.data_api.with_raw_response.listing(Platform.AIRBNB, "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListingErrorBody
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

**Returns**: <code>[ApiResult](staying_api/core/results.py)&#91;[ListingResponse](staying_api/models/listing_response.py), [ListingErrorBody](staying_api/errors/listing_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListingResponse](staying_api/models/listing_response.py)</code> -- Success.

**On `Failure`**: `error` is <code>[ListingErrorBody](staying_api/errors/listing_error.py)</code>

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
<summary><code>def price(platform: PlatformOrStr, listing_id: str, check_in: str, check_out: str, *, currency: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PriceResponse, PriceErrorBody]</code></summary>

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
result = client.data_api.with_raw_response.price(
    Platform.AIRBNB, "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PriceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PriceErrorBody
```

**Async**

```python
result = await async_client.data_api.with_raw_response.price(
    Platform.AIRBNB, "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PriceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PriceErrorBody
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

**Returns**: <code>[ApiResult](staying_api/core/results.py)&#91;[PriceResponse](staying_api/models/price_response.py), [PriceErrorBody](staying_api/errors/price_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PriceResponse](staying_api/models/price_response.py)</code> -- Success.

**On `Failure`**: `error` is <code>[PriceErrorBody](staying_api/errors/price_error.py)</code>

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
<summary><code>def price_compare(check_in: str, check_out: str, *, listings: str | None = None, name: str | None = None, location: str | None = None, google_hotel_id: str | None = None, adults: int | None = None, children: int | None = None, currency: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PriceCompareResponse, PriceCompareErrorBody]</code></summary>

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
result = client.data_api.with_raw_response.price_compare("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PriceCompareResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PriceCompareErrorBody
```

**Async**

```python
result = await async_client.data_api.with_raw_response.price_compare("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PriceCompareResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PriceCompareErrorBody
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

**Returns**: <code>[ApiResult](staying_api/core/results.py)&#91;[PriceCompareResponse](staying_api/models/price_compare_response.py), [PriceCompareErrorBody](staying_api/errors/price_compare_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PriceCompareResponse](staying_api/models/price_compare_response.py)</code> -- Success.

**On `Failure`**: `error` is <code>[PriceCompareErrorBody](staying_api/errors/price_compare_error.py)</code>

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
<summary><code>def reviews(platform: PlatformOrStr, *, listing_id: str | None = None, url: str | None = None, limit: int | None = None, cursor: str | None = None, language: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ReviewsResponse, ReviewsErrorBody]</code></summary>

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
result = client.data_api.with_raw_response.reviews(Platform.AIRBNB)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReviewsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReviewsErrorBody
```

**Async**

```python
result = await async_client.data_api.with_raw_response.reviews(Platform.AIRBNB)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ReviewsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReviewsErrorBody
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

**Returns**: <code>[ApiResult](staying_api/core/results.py)&#91;[ReviewsResponse](staying_api/models/reviews_response.py), [ReviewsErrorBody](staying_api/errors/reviews_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ReviewsResponse](staying_api/models/reviews_response.py)</code> -- Success.

**On `Failure`**: `error` is <code>[ReviewsErrorBody](staying_api/errors/reviews_error.py)</code>

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
<summary><code>def search_get(location: str, *, check_in: str | None = None, check_out: str | None = None, platforms: str | None = None, platform: str | None = None, adults: int | None = None, children: int | None = None, rooms: int | None = None, currency: str | None = None, limit: int | None = None, cursor: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchResponse, SearchGetErrorBody]</code></summary>

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
result = client.data_api.with_raw_response.search_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchGetErrorBody
```

**Async**

```python
result = await async_client.data_api.with_raw_response.search_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchGetErrorBody
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

**Returns**: <code>[ApiResult](staying_api/core/results.py)&#91;[SearchResponse](staying_api/models/search_response.py), [SearchGetErrorBody](staying_api/errors/search_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchResponse](staying_api/models/search_response.py)</code> -- Success.

**On `Failure`**: `error` is <code>[SearchGetErrorBody](staying_api/errors/search_get_error.py)</code>

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
<summary><code>def search_post(body: Any, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchResponse, SearchPostErrorBody]</code></summary>

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
result = client.data_api.with_raw_response.search_post({})
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchPostErrorBody
```

**Async**

```python
result = await async_client.data_api.with_raw_response.search_post({})
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchPostErrorBody
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

**Returns**: <code>[ApiResult](staying_api/core/results.py)&#91;[SearchResponse](staying_api/models/search_response.py), [SearchPostErrorBody](staying_api/errors/search_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchResponse](staying_api/models/search_response.py)</code> -- Success.

**On `Failure`**: `error` is <code>[SearchPostErrorBody](staying_api/errors/search_post_error.py)</code>

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
<summary><code>def poll_job(job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobResponse, PollJobErrorBody]</code></summary>

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
result = client.jobs.with_raw_response.poll_job("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PollJobErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.poll_job("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PollJobErrorBody
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

**Returns**: <code>[ApiResult](staying_api/core/results.py)&#91;[JobResponse](staying_api/models/unions/job_response.py), [PollJobErrorBody](staying_api/errors/poll_job_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobResponse](staying_api/models/unions/job_response.py)</code> -- Job status. pending/running carry a Retry-After header; completed carries the payload at data.result; FAILED is HTTP 200 with the failure nested at data.error (NOT a top-level error) and creditsCharged 0. Branch on data.status — see JobResponse.

**On `Failure`**: `error` is <code>[PollJobErrorBody](staying_api/errors/poll_job_error.py)</code>

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

