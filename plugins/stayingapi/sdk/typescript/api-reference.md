# Reference

> Source: [StayingApiClient](src/client.ts)

## AccountApi

> Source: [AccountApi](src/resources/account-api.ts)

<details>
<summary><code>account(options?: RequestOptions): ApiPromise&lt;AccountEnvelope, AccountApi.AccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Programmatic introspection of the authenticated key: credit balance, plan (code/name/status), key env (live | sandbox) and the per-plan rate limit (requests/minute). Works for live and sandbox keys; free and never billed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountApi.account();
  // TODO: Handle 'response' of type AccountEnvelope
} catch (err) {
  // TODO: Handle 'err' of type AccountApi.AccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountApi.account().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountEnvelope
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountApi.account()`

- **OnSuccess**: <code>[AccountEnvelope](src/models/account-envelope.ts)</code>
- **OnError**: throws <code>[AccountApi.AccountError](src/resources/account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountApi.account().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountEnvelope, AccountApi.AccountError&gt;</code>, with `result.value` of type <code>[AccountEnvelope](src/models/account-envelope.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StayingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataApi

> Source: [DataApi](src/resources/data-api.ts)

<details>
<summary><code>availability(request: DataApi.AvailabilityRequest, options?: RequestOptions): ApiPromise&lt;AvailabilityResponse, DataApi.AvailabilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provide EXACTLY ONE identification form: listingId, listingIds, or url. None → missing_parameter; conflicting forms → mutually_exclusive_params; a url that is not a well-formed listing URL for the platform → invalid_listing_url.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataApi.availability({
    platform: Platform.Airbnb,
    startDate: "some example string",
    endDate: "some example string",
  });
  // TODO: Handle 'response' of type AvailabilityResponse
} catch (err) {
  // TODO: Handle 'err' of type DataApi.AvailabilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataApi
  .availability({
    platform: Platform.Airbnb,
    startDate: "some example string",
    endDate: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AvailabilityResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>platform</code> | <code>[Platform](src/models/platform.ts)</code> | Target platform (must be enabled for availability). |
| <code>startDate</code> | <code>string</code> | YYYY-MM-DD (required). |
| <code>endDate</code> | <code>string</code> | YYYY-MM-DD (required). |
| <code>listingId?</code> | <code>string</code> | Platform listing id (one identification form). |
| <code>listingIds?</code> | <code>string</code> | Comma-separated listing ids (one identification form). |
| <code>url?</code> | <code>string</code> | Full listing URL for the platform (one identification form). |
| <code>onlyAvailable?</code> | <code>boolean</code> | Only return available dates. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataApi.availability(request)`

- **OnSuccess**: <code>[AvailabilityResponse](src/models/availability-response.ts)</code>
- **OnError**: throws <code>[DataApi.AvailabilityError](src/resources/data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataApi.availability(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AvailabilityResponse, DataApi.AvailabilityError&gt;</code>, with `result.value` of type <code>[AvailabilityResponse](src/models/availability-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StayingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listing(request: DataApi.ListingRequest, options?: RequestOptions): ApiPromise&lt;ListingResponse, DataApi.ListingError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataApi.listing({ platform: Platform.Airbnb, id: "some example string" });
  // TODO: Handle 'response' of type ListingResponse
} catch (err) {
  // TODO: Handle 'err' of type DataApi.ListingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataApi
  .listing({ platform: Platform.Airbnb, id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListingResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>platform</code> | <code>[Platform](src/models/platform.ts)</code> | - |
| <code>id</code> | <code>string</code> | - |
| <code>country?</code> | <code>string</code> | ISO-3166 alpha-2 country hint (booking). Disambiguates a bare booking.com slug (slugs are not globally unique) without the %2F-encoded /hotel/{cc}/{slug} id — e.g. /v1/listing/booking/casa-de-alba?country=co. A bare booking slug with no country returns 400 needs_country. |
| <code>checkIn?</code> | <code>string</code> | YYYY-MM-DD. |
| <code>checkOut?</code> | <code>string</code> | YYYY-MM-DD. |
| <code>currency?</code> | <code>string</code> | ISO-4217; default USD. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataApi.listing(request)`

- **OnSuccess**: <code>[ListingResponse](src/models/listing-response.ts)</code>
- **OnError**: throws <code>[DataApi.ListingError](src/resources/data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataApi.listing(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListingResponse, DataApi.ListingError&gt;</code>, with `result.value` of type <code>[ListingResponse](src/models/listing-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StayingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>price(request: DataApi.PriceRequest, options?: RequestOptions): ApiPromise&lt;PriceResponse, DataApi.PriceError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataApi.price({
    platform: Platform.Airbnb,
    listingId: "some example string",
    checkIn: "some example string",
    checkOut: "some example string",
  });
  // TODO: Handle 'response' of type PriceResponse
} catch (err) {
  // TODO: Handle 'err' of type DataApi.PriceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataApi
  .price({
    platform: Platform.Airbnb,
    listingId: "some example string",
    checkIn: "some example string",
    checkOut: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PriceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>platform</code> | <code>[Platform](src/models/platform.ts)</code> | Target platform (must be enabled for price). |
| <code>listingId</code> | <code>string</code> | Platform listing id. |
| <code>checkIn</code> | <code>string</code> | YYYY-MM-DD (required). |
| <code>checkOut</code> | <code>string</code> | YYYY-MM-DD (required). |
| <code>currency?</code> | <code>string</code> | ISO-4217; default USD. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataApi.price(request)`

- **OnSuccess**: <code>[PriceResponse](src/models/price-response.ts)</code>
- **OnError**: throws <code>[DataApi.PriceError](src/resources/data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataApi.price(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PriceResponse, DataApi.PriceError&gt;</code>, with `result.value` of type <code>[PriceResponse](src/models/price-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StayingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>priceCompare(request: DataApi.PriceCompareRequest, options?: RequestOptions): ApiPromise&lt;PriceCompareResponse, DataApi.PriceCompareError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataApi.priceCompare({
    checkIn: "some example string",
    checkOut: "some example string",
  });
  // TODO: Handle 'response' of type PriceCompareResponse
} catch (err) {
  // TODO: Handle 'err' of type DataApi.PriceCompareError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataApi
  .priceCompare({ checkIn: "some example string", checkOut: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PriceCompareResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>checkIn</code> | <code>string</code> | YYYY-MM-DD (required). |
| <code>checkOut</code> | <code>string</code> | YYYY-MM-DD (required). |
| <code>listings?</code> | <code>string</code> | DIRECT MODE. 2–6 comma-separated (or repeated) platform:listingId pairs for the same property, e.g. listings=airbnb:12345,booking:co/casa-de-alba,vrbo:987654. Split on the FIRST colon, so a full listing URL works as the id. Mutually exclusive with name/location/googleHotelId. An id containing a comma must be sent as a repeated param. |
| <code>name?</code> | <code>string</code> | GOOGLE MODE. Property name (one of name/location/googleHotelId). |
| <code>location?</code> | <code>string</code> | GOOGLE MODE. Location hint (one of name/location/googleHotelId). |
| <code>googleHotelId?</code> | <code>string</code> | GOOGLE MODE. Google hotel id (mutually exclusive with name/location). |
| <code>adults?</code> | <code>number</code> | Default 2. |
| <code>children?</code> | <code>number</code> | Default 0. |
| <code>currency?</code> | <code>string</code> | ISO-4217; default USD. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataApi.priceCompare(request)`

- **OnSuccess**: <code>[PriceCompareResponse](src/models/price-compare-response.ts)</code>
- **OnError**: throws <code>[DataApi.PriceCompareError](src/resources/data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataApi.priceCompare(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PriceCompareResponse, DataApi.PriceCompareError&gt;</code>, with `result.value` of type <code>[PriceCompareResponse](src/models/price-compare-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StayingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reviews(request: DataApi.ReviewsRequest, options?: RequestOptions): ApiPromise&lt;ReviewsResponse, DataApi.ReviewsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provide EXACTLY ONE of listingId or url. None → missing_parameter; both → mutually_exclusive_params; a bad url → invalid_listing_url. Required params are platform plus either listingId or url. listingId should be the platform-native id from /v1/search `platformListingId`; a `stays__` object id is accepted, normalized, and may supply platform when platform is omitted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataApi.reviews({ platform: Platform.Airbnb });
  // TODO: Handle 'response' of type ReviewsResponse
} catch (err) {
  // TODO: Handle 'err' of type DataApi.ReviewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataApi.reviews({ platform: Platform.Airbnb }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReviewsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>platform</code> | <code>[Platform](src/models/platform.ts)</code> | Target platform (must be enabled for reviews). |
| <code>listingId?</code> | <code>string</code> | Platform-native id from /v1/search `platformListingId` (one identification form); a `stays_<platform>_<platformListingId>` id is accepted, normalized, and may supply platform when platform is omitted. |
| <code>url?</code> | <code>string</code> | Full listing URL (one identification form). |
| <code>limit?</code> | <code>number</code> | 1–100; default 20. |
| <code>cursor?</code> | <code>string</code> | Opaque pagination cursor. |
| <code>language?</code> | <code>string</code> | ISO-639-1 filter. |
| <code>sort?</code> | <code>string</code> | recent \| rating_desc \| rating_asc. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataApi.reviews(request)`

- **OnSuccess**: <code>[ReviewsResponse](src/models/reviews-response.ts)</code>
- **OnError**: throws <code>[DataApi.ReviewsError](src/resources/data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataApi.reviews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReviewsResponse, DataApi.ReviewsError&gt;</code>, with `result.value` of type <code>[ReviewsResponse](src/models/reviews-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StayingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchGet(request: DataApi.SearchGetRequest, options?: RequestOptions): ApiPromise&lt;SearchResponse, DataApi.SearchGetError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataApi.searchGet({ location: "some example string" });
  // TODO: Handle 'response' of type SearchResponse
} catch (err) {
  // TODO: Handle 'err' of type DataApi.SearchGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataApi.searchGet({ location: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>location</code> | <code>string</code> | Destination (city, region, address). |
| <code>checkIn?</code> | <code>string</code> | YYYY-MM-DD. |
| <code>checkOut?</code> | <code>string</code> | YYYY-MM-DD. |
| <code>platforms?</code> | <code>string</code> | Comma-separated platforms; defaults to all enabled. `limit` applies per platform. |
| <code>platform?</code> | <code>string</code> | Alias for `platforms=<value>` when requesting exactly one platform. |
| <code>adults?</code> | <code>number</code> | Default 2. |
| <code>children?</code> | <code>number</code> | Default 0; requires matching childAges. |
| <code>rooms?</code> | <code>number</code> | Default 1. |
| <code>currency?</code> | <code>string</code> | ISO-4217; default USD. |
| <code>limit?</code> | <code>number</code> | 1–40; default 10. Applies per platform: a 3-platform search with limit=5 returns up to 15 results. |
| <code>cursor?</code> | <code>string</code> | Opaque pagination cursor. |
| <code>sort?</code> | <code>string</code> | recommended \| price_asc \| price_desc \| rating_desc. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataApi.searchGet(request)`

- **OnSuccess**: <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: throws <code>[DataApi.SearchGetError](src/resources/data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataApi.searchGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResponse, DataApi.SearchGetError&gt;</code>, with `result.value` of type <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StayingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchPost(request: DataApi.SearchPostRequest, options?: RequestOptions): ApiPromise&lt;SearchResponse, DataApi.SearchPostError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataApi.searchPost({ body: {} });
  // TODO: Handle 'response' of type SearchResponse
} catch (err) {
  // TODO: Handle 'err' of type DataApi.SearchPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataApi.searchPost({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataApi.searchPost(request)`

- **OnSuccess**: <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: throws <code>[DataApi.SearchPostError](src/resources/data-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataApi.searchPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResponse, DataApi.SearchPostError&gt;</code>, with `result.value` of type <code>[SearchResponse](src/models/search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StayingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/resources/jobs.ts)

<details>
<summary><code>pollJob(request: Jobs.PollJobRequest, options?: RequestOptions): ApiPromise&lt;JobResponse, Jobs.PollJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Poll until status is terminal (completed | failed). While pending/running the response carries a Retry-After header. Enforces jobs.user_id == caller; unknown/not-owned/expired → job_not_found (404).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.pollJob({ jobId: "some example string" });
  // TODO: Handle 'response' of type JobResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.PollJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs.pollJob({ jobId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | job_-prefixed id. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.pollJob(request)`

- **OnSuccess**: <code>[JobResponse](src/models/unions/job-response.ts)</code>
- **OnError**: throws <code>[Jobs.PollJobError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.pollJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobResponse, Jobs.PollJobError&gt;</code>, with `result.value` of type <code>[JobResponse](src/models/unions/job-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[StayingApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

