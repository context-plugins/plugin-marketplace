# Reference

> Source: [ZillapiClient](src/client.ts)

## Account

> Source: [Account](src/resources/account.ts)

<details>
<summary><code>getMe(options?: RequestOptions): ApiPromise&lt;V1MeResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the authenticated account, plan summary, and credit balance. Control-plane endpoint — free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.getMe();
  // TODO: Handle 'response' of type V1MeResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.getMe().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MeResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.getMe()`

- **OnSuccess**: <code>[V1MeResponse](src/models/v1-me-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.account.getMe().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MeResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1MeResponse](src/models/v1-me-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUsage(request?: Account.GetUsageRequest, options?: RequestOptions): ApiPromise&lt;V1UsageResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return recent metered usage rows (endpoint, actor, units, status code). Control-plane endpoint — free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.getUsage();
  // TODO: Handle 'response' of type V1UsageResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.getUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UsageResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>since?</code> | <code>Date</code> (date-time) | Return rows with created_at >= this ISO timestamp. |
| <code>limit?</code> | <code>number</code> | Page size (max 1000).<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.getUsage(request)`

- **OnSuccess**: <code>[V1UsageResponse](src/models/v1-usage-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.account.getUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UsageResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1UsageResponse](src/models/v1-usage-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Buildings

> Source: [Buildings](src/resources/buildings.ts)

<details>
<summary><code>getBuildingByUrl(request: Buildings.GetBuildingByUrlRequest, options?: RequestOptions): ApiPromise&lt;V1BuildingsByUrlResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract all unit listings from a Zillow building, apartments, or community URL (/b/, /apartments/, or /community/). Runs synchronously by default; set sync=false for large buildings to receive a job_id. Billed at 1 credit per unit returned; failed calls are free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buildings.getBuildingByUrl({ url: "some example string" });
  // TODO: Handle 'response' of type V1BuildingsByUrlResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buildings.getBuildingByUrl({ url: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BuildingsByUrlResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>url</code> | <code>string</code> | Building/apartments/community URL (must be /b/, /apartments/, or /community/). |
| <code>includeUnits?</code> | <code>[IncludeUnits](src/models/include-units.ts)</code> | Which units to include.<br>**Default**: "all" |
| <code>sync?</code> | <code>boolean</code> | When true (default) returns units synchronously. Set false for large buildings to run async and return a job_id.<br>**Default**: true |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buildings.getBuildingByUrl(request)`

- **OnSuccess**: <code>[V1BuildingsByUrlResponse](src/models/v1-buildings-by-url-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.buildings.getBuildingByUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BuildingsByUrlResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1BuildingsByUrlResponse](src/models/v1-buildings-by-url-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/resources/jobs.ts)

<details>
<summary><code>getJob(request: Jobs.GetJobRequest, options?: RequestOptions): ApiPromise&lt;V1JobsResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a single job row including status, result_count, chain_stage, and timestamps. For chained_search_detail jobs, status: succeeded means both stages finished. Control-plane endpoint — free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getJob({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type V1JobsResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs.getJob({ id: "00000000-0000-0000-0000-000000000000" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1JobsResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Job UUID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getJob(request)`

- **OnSuccess**: <code>[V1JobsResponse1](src/models/v1-jobs-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.jobs.getJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1JobsResponse1, ApiError&gt;</code>, with `result.value` of type <code>[V1JobsResponse1](src/models/v1-jobs-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getJobResults(request: Jobs.GetJobResultsRequest, options?: RequestOptions): ApiPromise&lt;V1JobsResultsResponse, Jobs.GetJobResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch paginated results for a succeeded job in JSON, CSV, or NDJSON. Returns 409 job_not_ready until the job status is succeeded. Free — billing happens once when the job completes, not on result reads.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getJobResults({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type V1JobsResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.GetJobResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs.getJobResults({ id: "00000000-0000-0000-0000-000000000000" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1JobsResultsResponse
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
| <code>id</code> | <code>string</code> | Job UUID. |
| <code>limit?</code> | <code>number</code> | Page size (max 1000).<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | Pagination offset (unbounded).<br>**Default**: 0 |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | Response format.<br>**Default**: "json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getJobResults(request)`

- **OnSuccess**: <code>[V1JobsResultsResponse](src/models/v1-jobs-results-response.ts)</code>
- **OnError**: throws <code>[Jobs.GetJobResultsError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.getJobResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1JobsResultsResponse, Jobs.GetJobResultsError&gt;</code>, with `result.value` of type <code>[V1JobsResultsResponse](src/models/v1-jobs-results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listJobs(request?: Jobs.ListJobsRequest, options?: RequestOptions): ApiPromise&lt;V1JobsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List your async jobs filtered by status, type, and creation time. Control-plane endpoint — free, does not consume credits.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.listJobs();
  // TODO: Handle 'response' of type V1JobsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs.listJobs().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1JobsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status?</code> | <code>[StatusZillapiZillowPropertyDataJobsApi](src/models/status-zillapi-zillow-property-data-jobs-api.ts)</code> | Filter by job status. |
| <code>type?</code> | <code>[Type](src/models/type.ts)</code> | Filter by job type. |
| <code>since?</code> | <code>Date</code> (date-time) | Return jobs with created_at >= this ISO timestamp. |
| <code>limit?</code> | <code>number</code> | Page size (max 500).<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | Pagination offset.<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.listJobs(request)`

- **OnSuccess**: <code>[V1JobsResponse](src/models/v1-jobs-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.jobs.listJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1JobsResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1JobsResponse](src/models/v1-jobs-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Listings

> Source: [Listings](src/resources/listings.ts)

<details>
<summary><code>listingsBbox(request: Listings.ListingsBboxRequest, options?: RequestOptions): ApiPromise&lt;SearchResultsOk, Listings.ListingsBboxError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

REST GET wrapper over /v1/search for one-line curl or agent-toolchain use. A `bbox` (west,south,east,north) is REQUIRED — free-text location is not supported. Returns up to `max_items` rows synchronously (default 50, hard cap 50); for more, use POST /v1/search with async. Billed at 1 credit **per listing returned** — this cost is per-result, not per-call, so a full-page search costs up to 50 credits; set `max_items` lower to cap it. Failed calls are free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listings.listingsBbox({ bbox: "some example string" });
  // TODO: Handle 'response' of type SearchResultsOk
} catch (err) {
  // TODO: Handle 'err' of type Listings.ListingsBboxError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listings.listingsBbox({ bbox: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResultsOk
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
| <code>bbox</code> | <code>string</code> | REQUIRED bounding box as `west,south,east,north` (decimal degrees, comma-separated). A free-text location alone is not accepted and returns 400 missing_input; the search engine needs a real bounding box. |
| <code>status?</code> | <code>[Status1](src/models/status1.ts)</code> | Listing status preset.<br>**Default**: "for_sale" |
| <code>priceMin?</code> | <code>number</code> | Minimum price in dollars. |
| <code>priceMax?</code> | <code>number</code> | Maximum price in dollars. |
| <code>bedsMin?</code> | <code>number</code> | Minimum bedrooms. |
| <code>bedsMax?</code> | <code>number</code> | Maximum bedrooms. |
| <code>bathsMin?</code> | <code>number</code> | Minimum bathrooms. |
| <code>bathsMax?</code> | <code>number</code> | Maximum bathrooms. |
| <code>sqftMin?</code> | <code>number</code> | Minimum living area in square feet. |
| <code>sqftMax?</code> | <code>number</code> | Maximum living area in square feet. |
| <code>yearBuiltMin?</code> | <code>number</code> | Minimum year built. |
| <code>yearBuiltMax?</code> | <code>number</code> | Maximum year built. |
| <code>homeTypes?</code> | <code>string</code> | Comma-separated home types: house,condo,townhouse,multi_family,manufactured,lot,apartment. |
| <code>daysOnZillow?</code> | <code>[DaysOnZillow1](src/models/days-on-zillow1.ts)</code> | Max age of the listing on Zillow. |
| <code>maxItems?</code> | <code>number</code> | Maximum rows to return in sync mode (default 50, hard cap 50). Billing is 1 credit per row returned, so this is your cost cap — e.g. max_items=5 costs at most 5 credits. For more than 50 results, switch to POST /v1/search with async: true.<br>**Default**: 50 |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | Response format.<br>**Default**: "json" |
| <code>location?</code> | <code>string</code> | Optional free-text place label (city/ZIP/neighborhood) — a hint only. A `bbox` is REQUIRED; `location` alone returns 400 (missing_input). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listings.listingsBbox(request)`

- **OnSuccess**: <code>[SearchResultsOk](src/models/search-results-ok.ts)</code>
- **OnError**: throws <code>[Listings.ListingsBboxError](src/resources/listings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listings.listingsBbox(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResultsOk, Listings.ListingsBboxError&gt;</code>, with `result.value` of type <code>[SearchResultsOk](src/models/search-results-ok.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listingsForRent(request: Listings.ListingsForRentRequest, options?: RequestOptions): ApiPromise&lt;SearchResultsOk, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for-rent listings within a bounding box (status forced to for_rent). Same body as POST /v1/search; a `bbox` or `searchUrls` is required. Billed at 1 credit per listing returned; failed calls are free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listings.listingsForRent({
    body: { searchUrls: [{ url: "https://example.com" }] },
  });
  // TODO: Handle 'response' of type SearchResultsOk
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listings
  .listingsForRent({ body: { searchUrls: [{ url: "https://example.com" }] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResultsOk
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchRequest2](src/models/unions/search-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listings.listingsForRent(request)`

- **OnSuccess**: <code>[SearchResultsOk](src/models/search-results-ok.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.listings.listingsForRent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResultsOk, ApiError&gt;</code>, with `result.value` of type <code>[SearchResultsOk](src/models/search-results-ok.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listingsForSale(request: Listings.ListingsForSaleRequest, options?: RequestOptions): ApiPromise&lt;SearchResultsOk, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for-sale listings within a bounding box (status forced to for_sale). Same body as POST /v1/search; a `bbox` or `searchUrls` is required. Billed at 1 credit per listing returned; failed calls are free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listings.listingsForSale({
    body: { searchUrls: [{ url: "https://example.com" }] },
  });
  // TODO: Handle 'response' of type SearchResultsOk
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listings
  .listingsForSale({ body: { searchUrls: [{ url: "https://example.com" }] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResultsOk
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchRequest2](src/models/unions/search-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listings.listingsForSale(request)`

- **OnSuccess**: <code>[SearchResultsOk](src/models/search-results-ok.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.listings.listingsForSale(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResultsOk, ApiError&gt;</code>, with `result.value` of type <code>[SearchResultsOk](src/models/search-results-ok.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listingsSold(request: Listings.ListingsSoldRequest, options?: RequestOptions): ApiPromise&lt;SearchResultsOk, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search recently-sold listings within a bounding box (status forced to sold). Same body as POST /v1/search; a `bbox` or `searchUrls` is required. Billed at 1 credit per listing returned; failed calls are free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listings.listingsSold({
    body: { searchUrls: [{ url: "https://example.com" }] },
  });
  // TODO: Handle 'response' of type SearchResultsOk
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listings
  .listingsSold({ body: { searchUrls: [{ url: "https://example.com" }] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResultsOk
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchRequest2](src/models/unions/search-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listings.listingsSold(request)`

- **OnSuccess**: <code>[SearchResultsOk](src/models/search-results-ok.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.listings.listingsSold(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResultsOk, ApiError&gt;</code>, with `result.value` of type <code>[SearchResultsOk](src/models/search-results-ok.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Properties

> Source: [Properties](src/resources/properties.ts)

<details>
<summary><code>createBatchPropertyJob(request: Properties.CreateBatchPropertyJobRequest, options?: RequestOptions): ApiPromise&lt;JobAccepted, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Queue an async job that resolves up to 500 URLs and/or addresses to full property records. Always async: returns a job_id — poll GET /v1/jobs/{id} or use a webhook. Billed at 1 credit per record returned, settled when the job completes; failed calls are free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.createBatchPropertyJob({ body: {} });
  // TODO: Handle 'response' of type JobAccepted
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties.createBatchPropertyJob({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobAccepted
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchPropertyRequest](src/models/batch-property-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.createBatchPropertyJob(request)`

- **OnSuccess**: <code>[JobAccepted](src/models/job-accepted.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.properties.createBatchPropertyJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobAccepted, ApiError&gt;</code>, with `result.value` of type <code>[JobAccepted](src/models/job-accepted.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPropertyAgent(request: Properties.GetPropertyAgentRequest, options?: RequestOptions): ApiPromise&lt;AgentOk, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the listing agent and broker contact details plus attribution info. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.getPropertyAgent({ zpid: "some example string" });
  // TODO: Handle 'response' of type AgentOk
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties.getPropertyAgent({ zpid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AgentOk
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>string</code> | Zillow property id (numeric string). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.getPropertyAgent(request)`

- **OnSuccess**: <code>[AgentOk](src/models/agent-ok.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.properties.getPropertyAgent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AgentOk, ApiError&gt;</code>, with `result.value` of type <code>[AgentOk](src/models/agent-ok.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPropertyByAddress(request: Properties.GetPropertyByAddressRequest, options?: RequestOptions): ApiPromise&lt;PropertyOk, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a full street address (street, city, state, ZIP) to a property record via upstream geocoding. Costs 3 credits per successful call because the address is resolved upstream; failed calls are free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.getPropertyByAddress({ address: "some example string" });
  // TODO: Handle 'response' of type PropertyOk
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties.getPropertyByAddress({ address: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PropertyOk
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>address</code> | <code>string</code> | Full street address including city, state, and ZIP; geocoded upstream. |
| <code>status?</code> | <code>[StatusZillapiZillowPropertyDataPropertiesApi](src/models/status-zillapi-zillow-property-data-properties-api.ts)</code> | Listing status to resolve.<br>**Default**: "FOR_SALE" |
| <code>fields?</code> | <code>string</code> | Comma-separated dotted-path field projection. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.getPropertyByAddress(request)`

- **OnSuccess**: <code>[PropertyOk](src/models/property-ok.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.properties.getPropertyByAddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PropertyOk, ApiError&gt;</code>, with `result.value` of type <code>[PropertyOk](src/models/property-ok.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPropertyByUrl(request: Properties.GetPropertyByUrlRequest, options?: RequestOptions): ApiPromise&lt;PropertyOk, Properties.GetPropertyByUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch the full property record for a Zillow URL (homedetails, /b/, /community/, or /apartments/). When `extract_units` is not `disabled` and the URL is a multi-unit building, `data` is returned as an array of unit records. Costs 1 credit per record returned; failed calls are free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.getPropertyByUrl({ url: "https://example.com" });
  // TODO: Handle 'response' of type PropertyOk
} catch (err) {
  // TODO: Handle 'err' of type Properties.GetPropertyByUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties.getPropertyByUrl({ url: "https://example.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PropertyOk
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
| <code>url</code> | <code>string</code> | Full Zillow URL: homedetails, /b/, /community/, or /apartments/. |
| <code>status?</code> | <code>[StatusZillapiZillowPropertyDataPropertiesApi](src/models/status-zillapi-zillow-property-data-properties-api.ts)</code> | Listing status to resolve.<br>**Default**: "FOR_SALE" |
| <code>extractUnits?</code> | <code>[ExtractUnits](src/models/extract-units.ts)</code> | For building URLs, which units to extract. `disabled` returns the parent record only; any other value returns an array of unit records.<br>**Default**: "disabled" |
| <code>fields?</code> | <code>string</code> | Comma-separated dotted-path field projection, e.g. `zpid,address.streetAddress,priceHistory[0].price`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.getPropertyByUrl(request)`

- **OnSuccess**: <code>[PropertyOk](src/models/property-ok.ts)</code>
- **OnError**: throws <code>[Properties.GetPropertyByUrlError](src/resources/properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.properties.getPropertyByUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PropertyOk, Properties.GetPropertyByUrlError&gt;</code>, with `result.value` of type <code>[PropertyOk](src/models/property-ok.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPropertyByZpid(request: Properties.GetPropertyByZpidRequest, options?: RequestOptions): ApiPromise&lt;PropertyCachedOk, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cache-first lookup (24h TTL) of the full property record by Zillow zpid. Costs 1 credit per successful lookup; caching is a transparent optimization (faster responses, same price). Failed calls are free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.getPropertyByZpid({ zpid: "some example string" });
  // TODO: Handle 'response' of type PropertyCachedOk
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties.getPropertyByZpid({ zpid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PropertyCachedOk
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>string</code> | Zillow property id (numeric string). |
| <code>fields?</code> | <code>string</code> | Comma-separated dotted-path field projection. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.getPropertyByZpid(request)`

- **OnSuccess**: <code>[PropertyCachedOk](src/models/property-cached-ok.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.properties.getPropertyByZpid(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PropertyCachedOk, ApiError&gt;</code>, with `result.value` of type <code>[PropertyCachedOk](src/models/property-cached-ok.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPropertyFacts(request: Properties.GetPropertyFactsRequest, options?: RequestOptions): ApiPromise&lt;FactsOk, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the full `resoFacts` MLS attribute set (appliances, flooring, parking, view, and hundreds of other fields). Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.getPropertyFacts({ zpid: "some example string" });
  // TODO: Handle 'response' of type FactsOk
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties.getPropertyFacts({ zpid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FactsOk
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>string</code> | Zillow property id (numeric string). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.getPropertyFacts(request)`

- **OnSuccess**: <code>[FactsOk](src/models/facts-ok.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.properties.getPropertyFacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FactsOk, ApiError&gt;</code>, with `result.value` of type <code>[FactsOk](src/models/facts-ok.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPropertyNearby(request: Properties.GetPropertyNearbyRequest, options?: RequestOptions): ApiPromise&lt;NearbyOk, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return comparable nearby homes (top ~12 from upstream) as search-style rows. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.getPropertyNearby({ zpid: "some example string" });
  // TODO: Handle 'response' of type NearbyOk
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties.getPropertyNearby({ zpid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NearbyOk
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>string</code> | Zillow property id (numeric string). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.getPropertyNearby(request)`

- **OnSuccess**: <code>[NearbyOk](src/models/nearby-ok.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.properties.getPropertyNearby(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NearbyOk, ApiError&gt;</code>, with `result.value` of type <code>[NearbyOk](src/models/nearby-ok.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPropertyOpenHouses(request: Properties.GetPropertyOpenHousesRequest, options?: RequestOptions): ApiPromise&lt;OpenHousesOk, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the property's open-house schedule and tour eligibility. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.getPropertyOpenHouses({ zpid: "some example string" });
  // TODO: Handle 'response' of type OpenHousesOk
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties.getPropertyOpenHouses({ zpid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OpenHousesOk
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>string</code> | Zillow property id (numeric string). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.getPropertyOpenHouses(request)`

- **OnSuccess**: <code>[OpenHousesOk](src/models/open-houses-ok.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.properties.getPropertyOpenHouses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OpenHousesOk, ApiError&gt;</code>, with `result.value` of type <code>[OpenHousesOk](src/models/open-houses-ok.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPropertyPhotos(request: Properties.GetPropertyPhotosRequest, options?: RequestOptions): ApiPromise&lt;PhotosOk, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the property's photo array with multi-width JPEG/WebP sources plus counts and 3D/video flags. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.getPropertyPhotos({ zpid: "some example string" });
  // TODO: Handle 'response' of type PhotosOk
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties.getPropertyPhotos({ zpid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PhotosOk
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>string</code> | Zillow property id (numeric string). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.getPropertyPhotos(request)`

- **OnSuccess**: <code>[PhotosOk](src/models/photos-ok.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.properties.getPropertyPhotos(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PhotosOk, ApiError&gt;</code>, with `result.value` of type <code>[PhotosOk](src/models/photos-ok.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPropertyPriceHistory(request: Properties.GetPropertyPriceHistoryRequest, options?: RequestOptions): ApiPromise&lt;PriceHistoryOk, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the property's price-history events (listed, sold, and price changes). Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.getPropertyPriceHistory({ zpid: "some example string" });
  // TODO: Handle 'response' of type PriceHistoryOk
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties.getPropertyPriceHistory({ zpid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PriceHistoryOk
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>string</code> | Zillow property id (numeric string). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.getPropertyPriceHistory(request)`

- **OnSuccess**: <code>[PriceHistoryOk](src/models/price-history-ok.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.properties.getPropertyPriceHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PriceHistoryOk, ApiError&gt;</code>, with `result.value` of type <code>[PriceHistoryOk](src/models/price-history-ok.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPropertySchools(request: Properties.GetPropertySchoolsRequest, options?: RequestOptions): ApiPromise&lt;SchoolsOk, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return schools associated with the property, including GreatSchools rating, distance, type, and level. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.getPropertySchools({ zpid: "some example string" });
  // TODO: Handle 'response' of type SchoolsOk
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties.getPropertySchools({ zpid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SchoolsOk
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>string</code> | Zillow property id (numeric string). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.getPropertySchools(request)`

- **OnSuccess**: <code>[SchoolsOk](src/models/schools-ok.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.properties.getPropertySchools(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SchoolsOk, ApiError&gt;</code>, with `result.value` of type <code>[SchoolsOk](src/models/schools-ok.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPropertyTaxHistory(request: Properties.GetPropertyTaxHistoryRequest, options?: RequestOptions): ApiPromise&lt;TaxHistoryOk, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the property's tax-history rows (tax paid and assessed value per year). Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.getPropertyTaxHistory({ zpid: "some example string" });
  // TODO: Handle 'response' of type TaxHistoryOk
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties.getPropertyTaxHistory({ zpid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TaxHistoryOk
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>string</code> | Zillow property id (numeric string). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.getPropertyTaxHistory(request)`

- **OnSuccess**: <code>[TaxHistoryOk](src/models/tax-history-ok.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.properties.getPropertyTaxHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TaxHistoryOk, ApiError&gt;</code>, with `result.value` of type <code>[TaxHistoryOk](src/models/tax-history-ok.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPropertyZestimate(request: Properties.GetPropertyZestimateRequest, options?: RequestOptions): ApiPromise&lt;ZestimateOk, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the property's Zestimate, rent Zestimate, tax-assessed value, and last sold price. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.properties.getPropertyZestimate({ zpid: "some example string" });
  // TODO: Handle 'response' of type ZestimateOk
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.properties.getPropertyZestimate({ zpid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ZestimateOk
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>string</code> | Zillow property id (numeric string). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.properties.getPropertyZestimate(request)`

- **OnSuccess**: <code>[ZestimateOk](src/models/zestimate-ok.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.properties.getPropertyZestimate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ZestimateOk, ApiError&gt;</code>, with `result.value` of type <code>[ZestimateOk](src/models/zestimate-ok.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>search(request: Search.SearchRequestParams, options?: RequestOptions): ApiPromise&lt;SearchResultsOk, Search.SearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Structured listing search using normalized filters (option A) or a pre-built Zillow searchQueryState URL (option B). A `bbox` or `searchUrls` is REQUIRED — a free-text location alone is rejected with 400 invalid_filters and never hits upstream. Sync when maxItems ≤ 50, async (202/job) otherwise. Billed at 1 credit per result returned; failed calls are free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.search({ body: { searchUrls: [{ url: "https://example.com" }] } });
  // TODO: Handle 'response' of type SearchResultsOk
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search
  .search({ body: { searchUrls: [{ url: "https://example.com" }] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResultsOk
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
| <code>body</code> | <code>[SearchRequest2](src/models/unions/search-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.search(request)`

- **OnSuccess**: <code>[SearchResultsOk](src/models/search-results-ok.ts)</code>
- **OnError**: throws <code>[Search.SearchError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.search(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResultsOk, Search.SearchError&gt;</code>, with `result.value` of type <code>[SearchResultsOk](src/models/search-results-ok.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchWithDetails(request: Search.SearchWithDetailsRequestParams, options?: RequestOptions): ApiPromise&lt;JobAcceptedZillapiZillowPropertyDataListingsApi, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run a search and enrich every matched zpid with the full property-detail record in one chained async job. Always async; the results returned by GET /v1/jobs/{id}/results are detail rows (Property shape), not search rows. Billed per stage: 1 credit per search result plus 1 credit per detail record. Failed calls are free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchWithDetails({
    body: {
      filters: { bbox: { west: 1.5, south: 1.5, east: 1.5, north: 1.5 } },
      searchUrls: [{ url: "https://example.com" }],
    },
  });
  // TODO: Handle 'response' of type JobAcceptedZillapiZillowPropertyDataListingsApi
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search
  .searchWithDetails({
    body: {
      filters: { bbox: { west: 1.5, south: 1.5, east: 1.5, north: 1.5 } },
      searchUrls: [{ url: "https://example.com" }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobAcceptedZillapiZillowPropertyDataListingsApi
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchWithDetailsRequest](src/models/search-with-details-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchWithDetails(request)`

- **OnSuccess**: <code>[JobAcceptedZillapiZillowPropertyDataListingsApi](src/models/job-accepted-zillapi-zillow-property-data-listings-api.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.search.searchWithDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobAcceptedZillapiZillowPropertyDataListingsApi, ApiError&gt;</code>, with `result.value` of type <code>[JobAcceptedZillapiZillowPropertyDataListingsApi](src/models/job-accepted-zillapi-zillow-property-data-listings-api.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>createWebhook(request: Webhooks.CreateWebhookRequest, options?: RequestOptions): ApiPromise&lt;V1WebhooksResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Register an outbound webhook URL for terminal job events. The signing secret is returned once in the 201 response and never again. If `events` is omitted you receive all four. Control-plane endpoint — free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.createWebhook({ body: { url: "https://example.com" } });
  // TODO: Handle 'response' of type V1WebhooksResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.createWebhook({ body: { url: "https://example.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WebhooksResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WebhookCreate](src/models/webhook-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.createWebhook(request)`

- **OnSuccess**: <code>[V1WebhooksResponse1](src/models/v1-webhooks-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.createWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WebhooksResponse1, ApiError&gt;</code>, with `result.value` of type <code>[V1WebhooksResponse1](src/models/v1-webhooks-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhookDeliveries(request: Webhooks.ListWebhookDeliveriesRequest, options?: RequestOptions): ApiPromise&lt;V1WebhooksDeliveriesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the per-attempt delivery log for a webhook (status code, delivered flag, response preview) for debugging failed deliveries. Control-plane endpoint — free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.listWebhookDeliveries({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type V1WebhooksDeliveriesResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .listWebhookDeliveries({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WebhooksDeliveriesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Webhook UUID. |
| <code>limit?</code> | <code>number</code> | Page size (max 200).<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.listWebhookDeliveries(request)`

- **OnSuccess**: <code>[V1WebhooksDeliveriesResponse](src/models/v1-webhooks-deliveries-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.listWebhookDeliveries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WebhooksDeliveriesResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1WebhooksDeliveriesResponse](src/models/v1-webhooks-deliveries-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhooks(options?: RequestOptions): ApiPromise&lt;V1WebhooksResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List registered outbound webhooks. Secrets are never returned on read — only once at creation. Control-plane endpoint — free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.listWebhooks();
  // TODO: Handle 'response' of type V1WebhooksResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.listWebhooks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WebhooksResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.listWebhooks()`

- **OnSuccess**: <code>[V1WebhooksResponse](src/models/v1-webhooks-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.listWebhooks().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WebhooksResponse, ApiError&gt;</code>, with `result.value` of type <code>[V1WebhooksResponse](src/models/v1-webhooks-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revokeWebhook(request: Webhooks.RevokeWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft-revoke a webhook; delivery stops immediately. Returns 204 No Content. Control-plane endpoint — free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhooks.revokeWebhook({ id: "00000000-0000-0000-0000-000000000000" });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .revokeWebhook({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Webhook UUID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.revokeWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.revokeWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ZillapiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

