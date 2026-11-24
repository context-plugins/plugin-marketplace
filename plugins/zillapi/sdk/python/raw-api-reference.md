# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [ZillapiClient](zillapi/client.py)

## Account

> Source: [Account](zillapi/apis/account.py)

<details>
<summary><code>def get_me(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MeResponse, RawError]</code></summary>

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

**Sync**

```python
result = client.account.with_raw_response.get_me()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.account.with_raw_response.get_me()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[V1MeResponse](zillapi/models/v1_me_response.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MeResponse](zillapi/models/v1_me_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_usage(*, since: RFC3339DateTime | None = None, limit: int | None = 100, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UsageResponse, RawError]</code></summary>

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

**Sync**

```python
result = client.account.with_raw_response.get_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.account.with_raw_response.get_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>since</code> | <code>RFC3339DateTime \| None</code> | Return rows with created_at >= this ISO timestamp.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Page size (max 1000).<br>**Default**: <code>100</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[V1UsageResponse](zillapi/models/v1_usage_response.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UsageResponse](zillapi/models/v1_usage_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Buildings

> Source: [Buildings](zillapi/apis/buildings.py)

<details>
<summary><code>def get_building_by_url(url: str, *, include_units: IncludeUnitsOrStr | None = IncludeUnits.ALL, sync: bool | None = True, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BuildingsByUrlResponse, RawError]</code></summary>

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

**Sync**

```python
result = client.buildings.with_raw_response.get_building_by_url("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BuildingsByUrlResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.buildings.with_raw_response.get_building_by_url("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BuildingsByUrlResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>url</code> | <code>str</code> | Building/apartments/community URL (must be /b/, /apartments/, or /community/). |
| <code>include_units</code> | <code>[IncludeUnitsOrStr](zillapi/models/enums/include_units.py) \| None</code> | Which units to include.<br>**Default**: <code>IncludeUnits.ALL</code> |
| <code>sync</code> | <code>bool \| None</code> | When true (default) returns units synchronously. Set false for large buildings to run async and return a job_id.<br>**Default**: <code>True</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[V1BuildingsByUrlResponse](zillapi/models/v1_buildings_by_url_response.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BuildingsByUrlResponse](zillapi/models/v1_buildings_by_url_response.py)</code> -- Building units returned synchronously

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](zillapi/apis/jobs.py)

<details>
<summary><code>def get_job(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1JobsResponse1, RawError]</code></summary>

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

**Sync**

```python
result = client.jobs.with_raw_response.get_job(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JobsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.jobs.with_raw_response.get_job(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JobsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Job UUID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[V1JobsResponse1](zillapi/models/v1_jobs_response1.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1JobsResponse1](zillapi/models/v1_jobs_response1.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_job_results(id_: UUID, *, limit: int | None = 100, offset: int | None = 0, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1JobsResultsResponse, GetJobResultsErrorBody]</code></summary>

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

**Sync**

```python
result = client.jobs.with_raw_response.get_job_results(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JobsResultsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobResultsErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.get_job_results(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JobsResultsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Job UUID. |
| <code>limit</code> | <code>int \| None</code> | Page size (max 1000).<br>**Default**: <code>100</code> |
| <code>offset</code> | <code>int \| None</code> | Pagination offset (unbounded).<br>**Default**: <code>0</code> |
| <code>format_</code> | <code>[FormatOrStr](zillapi/models/enums/format.py) \| None</code> | Response format.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[V1JobsResultsResponse](zillapi/models/v1_jobs_results_response.py), [GetJobResultsErrorBody](zillapi/errors/get_job_results_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1JobsResultsResponse](zillapi/models/v1_jobs_results_response.py)</code> -- Job results

**On `Failure`**: `error` is <code>[GetJobResultsErrorBody](zillapi/errors/get_job_results_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 409 | <code>[ApiErrorModel](zillapi/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](zillapi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_jobs(*, status: StatusZillapiZillowPropertyDataJobsApiOrStr | None = None, type_: TypeOrStr | None = None, since: RFC3339DateTime | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1JobsResponse, RawError]</code></summary>

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

**Sync**

```python
result = client.jobs.with_raw_response.list_jobs()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.jobs.with_raw_response.list_jobs()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status</code> | <code>[StatusZillapiZillowPropertyDataJobsApiOrStr](zillapi/models/enums/status_zillapi_zillow_property_data_jobs_api.py) \| None</code> | Filter by job status.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>[TypeOrStr](zillapi/models/enums/type.py) \| None</code> | Filter by job type.<br>**Default**: <code>None</code> |
| <code>since</code> | <code>RFC3339DateTime \| None</code> | Return jobs with created_at >= this ISO timestamp.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Page size (max 500).<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Pagination offset.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[V1JobsResponse](zillapi/models/v1_jobs_response.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1JobsResponse](zillapi/models/v1_jobs_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Listings

> Source: [Listings](zillapi/apis/listings.py)

<details>
<summary><code>def listings_bbox(bbox: str, *, status: Status1OrStr | None = Status1.FOR_SALE, price_min: int | None = None, price_max: int | None = None, beds_min: int | None = None, beds_max: int | None = None, baths_min: int | None = None, baths_max: int | None = None, sqft_min: int | None = None, sqft_max: int | None = None, year_built_min: int | None = None, year_built_max: int | None = None, home_types: str | None = None, days_on_zillow: DaysOnZillow1OrStr | None = None, max_items: int | None = 50, format_: FormatOrStr | None = Format.JSON, location: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchResultsOk, ListingsBboxErrorBody]</code></summary>

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

**Sync**

```python
result = client.listings.with_raw_response.listings_bbox("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResultsOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListingsBboxErrorBody
```

**Async**

```python
result = await async_client.listings.with_raw_response.listings_bbox("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResultsOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListingsBboxErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bbox</code> | <code>str</code> | REQUIRED bounding box as `west,south,east,north` (decimal degrees, comma-separated). A free-text location alone is not accepted and returns 400 missing_input; the search engine needs a real bounding box. |
| <code>status</code> | <code>[Status1OrStr](zillapi/models/enums/status1.py) \| None</code> | Listing status preset.<br>**Default**: <code>Status1.FOR_SALE</code> |
| <code>price_min</code> | <code>int \| None</code> | Minimum price in dollars.<br>**Default**: <code>None</code> |
| <code>price_max</code> | <code>int \| None</code> | Maximum price in dollars.<br>**Default**: <code>None</code> |
| <code>beds_min</code> | <code>int \| None</code> | Minimum bedrooms.<br>**Default**: <code>None</code> |
| <code>beds_max</code> | <code>int \| None</code> | Maximum bedrooms.<br>**Default**: <code>None</code> |
| <code>baths_min</code> | <code>int \| None</code> | Minimum bathrooms.<br>**Default**: <code>None</code> |
| <code>baths_max</code> | <code>int \| None</code> | Maximum bathrooms.<br>**Default**: <code>None</code> |
| <code>sqft_min</code> | <code>int \| None</code> | Minimum living area in square feet.<br>**Default**: <code>None</code> |
| <code>sqft_max</code> | <code>int \| None</code> | Maximum living area in square feet.<br>**Default**: <code>None</code> |
| <code>year_built_min</code> | <code>int \| None</code> | Minimum year built.<br>**Default**: <code>None</code> |
| <code>year_built_max</code> | <code>int \| None</code> | Maximum year built.<br>**Default**: <code>None</code> |
| <code>home_types</code> | <code>str \| None</code> | Comma-separated home types: house,condo,townhouse,multi_family,manufactured,lot,apartment.<br>**Default**: <code>None</code> |
| <code>days_on_zillow</code> | <code>[DaysOnZillow1OrStr](zillapi/models/enums/days_on_zillow1.py) \| None</code> | Max age of the listing on Zillow.<br>**Default**: <code>None</code> |
| <code>max_items</code> | <code>int \| None</code> | Maximum rows to return in sync mode (default 50, hard cap 50). Billing is 1 credit per row returned, so this is your cost cap — e.g. max_items=5 costs at most 5 credits. For more than 50 results, switch to POST /v1/search with async: true.<br>**Default**: <code>50</code> |
| <code>format_</code> | <code>[FormatOrStr](zillapi/models/enums/format.py) \| None</code> | Response format.<br>**Default**: <code>Format.JSON</code> |
| <code>location</code> | <code>str \| None</code> | Optional free-text place label (city/ZIP/neighborhood) — a hint only. A `bbox` is REQUIRED; `location` alone returns 400 (missing_input).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[SearchResultsOk](zillapi/models/search_results_ok.py), [ListingsBboxErrorBody](zillapi/errors/listings_bbox_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchResultsOk](zillapi/models/search_results_ok.py)</code> -- Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as the detail Property shape returned by the property endpoints.

**On `Failure`**: `error` is <code>[ListingsBboxErrorBody](zillapi/errors/listings_bbox_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiErrorModel](zillapi/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](zillapi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def listings_for_rent(body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchResultsOk, RawError]</code></summary>

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

**Sync**

```python
result = client.listings.with_raw_response.listings_for_rent(
    SearchRequest(search_urls=[SearchUrl(url="https://example.com")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResultsOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.listings.with_raw_response.listings_for_rent(
    SearchRequest(search_urls=[SearchUrl(url="https://example.com")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResultsOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchRequest2](zillapi/models/unions/search_request2.py) \| [SearchRequest2Dict](zillapi/models/unions/search_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[SearchResultsOk](zillapi/models/search_results_ok.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchResultsOk](zillapi/models/search_results_ok.py)</code> -- Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as the detail Property shape returned by the property endpoints.

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def listings_for_sale(body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchResultsOk, RawError]</code></summary>

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

**Sync**

```python
result = client.listings.with_raw_response.listings_for_sale(
    SearchRequest(search_urls=[SearchUrl(url="https://example.com")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResultsOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.listings.with_raw_response.listings_for_sale(
    SearchRequest(search_urls=[SearchUrl(url="https://example.com")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResultsOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchRequest2](zillapi/models/unions/search_request2.py) \| [SearchRequest2Dict](zillapi/models/unions/search_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[SearchResultsOk](zillapi/models/search_results_ok.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchResultsOk](zillapi/models/search_results_ok.py)</code> -- Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as the detail Property shape returned by the property endpoints.

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def listings_sold(body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchResultsOk, RawError]</code></summary>

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

**Sync**

```python
result = client.listings.with_raw_response.listings_sold(
    SearchRequest(search_urls=[SearchUrl(url="https://example.com")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResultsOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.listings.with_raw_response.listings_sold(
    SearchRequest(search_urls=[SearchUrl(url="https://example.com")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResultsOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchRequest2](zillapi/models/unions/search_request2.py) \| [SearchRequest2Dict](zillapi/models/unions/search_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[SearchResultsOk](zillapi/models/search_results_ok.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchResultsOk](zillapi/models/search_results_ok.py)</code> -- Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as the detail Property shape returned by the property endpoints.

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Properties

> Source: [Properties](zillapi/apis/properties.py)

<details>
<summary><code>def create_batch_property_job(body: BatchPropertyRequest | BatchPropertyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobAccepted, RawError]</code></summary>

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

**Sync**

```python
result = client.properties.with_raw_response.create_batch_property_job(BatchPropertyRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.properties.with_raw_response.create_batch_property_job(BatchPropertyRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchPropertyRequest](zillapi/models/batch_property_request.py) \| [BatchPropertyRequestDict](zillapi/models/batch_property_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[JobAccepted](zillapi/models/job_accepted.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobAccepted](zillapi/models/job_accepted.py)</code> -- Async job accepted

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_property_agent(zpid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AgentOk, RawError]</code></summary>

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

**Sync**

```python
result = client.properties.with_raw_response.get_property_agent("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AgentOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.properties.with_raw_response.get_property_agent("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AgentOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>str</code> | Zillow property id (numeric string). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[AgentOk](zillapi/models/agent_ok.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[AgentOk](zillapi/models/agent_ok.py)</code> -- Listing agent + broker contact

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_property_by_address(address: str, *, status: StatusZillapiZillowPropertyDataPropertiesApiOrStr | None = StatusZillapiZillowPropertyDataPropertiesApi.FOR_SALE, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PropertyOk, RawError]</code></summary>

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

**Sync**

```python
result = client.properties.with_raw_response.get_property_by_address("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PropertyOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.properties.with_raw_response.get_property_by_address("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PropertyOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>address</code> | <code>str</code> | Full street address including city, state, and ZIP; geocoded upstream. |
| <code>status</code> | <code>[StatusZillapiZillowPropertyDataPropertiesApiOrStr](zillapi/models/enums/status_zillapi_zillow_property_data_properties_api.py) \| None</code> | Listing status to resolve.<br>**Default**: <code>StatusZillapiZillowPropertyDataPropertiesApi.FOR_SALE</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated dotted-path field projection.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[PropertyOk](zillapi/models/property_ok.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[PropertyOk](zillapi/models/property_ok.py)</code> -- Single property (an array of Property when extract_units is set and the URL is a multi-unit building)

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_property_by_url(url: str, *, status: StatusZillapiZillowPropertyDataPropertiesApiOrStr | None = StatusZillapiZillowPropertyDataPropertiesApi.FOR_SALE, extract_units: ExtractUnitsOrStr | None = ExtractUnits.DISABLED, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PropertyOk, GetPropertyByUrlErrorBody]</code></summary>

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

**Sync**

```python
result = client.properties.with_raw_response.get_property_by_url("https://example.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PropertyOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPropertyByUrlErrorBody
```

**Async**

```python
result = await async_client.properties.with_raw_response.get_property_by_url("https://example.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PropertyOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPropertyByUrlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>url</code> | <code>str</code> | Full Zillow URL: homedetails, /b/, /community/, or /apartments/. |
| <code>status</code> | <code>[StatusZillapiZillowPropertyDataPropertiesApiOrStr](zillapi/models/enums/status_zillapi_zillow_property_data_properties_api.py) \| None</code> | Listing status to resolve.<br>**Default**: <code>StatusZillapiZillowPropertyDataPropertiesApi.FOR_SALE</code> |
| <code>extract_units</code> | <code>[ExtractUnitsOrStr](zillapi/models/enums/extract_units.py) \| None</code> | For building URLs, which units to extract. `disabled` returns the parent record only; any other value returns an array of unit records.<br>**Default**: <code>ExtractUnits.DISABLED</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated dotted-path field projection, e.g. `zpid,address.streetAddress,priceHistory[0].price`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[PropertyOk](zillapi/models/property_ok.py), [GetPropertyByUrlErrorBody](zillapi/errors/get_property_by_url_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PropertyOk](zillapi/models/property_ok.py)</code> -- Single property (an array of Property when extract_units is set and the URL is a multi-unit building)

**On `Failure`**: `error` is <code>[GetPropertyByUrlErrorBody](zillapi/errors/get_property_by_url_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 502, 504 | <code>[ApiErrorModel](zillapi/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](zillapi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_property_by_zpid(zpid: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PropertyCachedOk, RawError]</code></summary>

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

**Sync**

```python
result = client.properties.with_raw_response.get_property_by_zpid("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PropertyCachedOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.properties.with_raw_response.get_property_by_zpid("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PropertyCachedOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>str</code> | Zillow property id (numeric string). |
| <code>fields</code> | <code>str \| None</code> | Comma-separated dotted-path field projection.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[PropertyCachedOk](zillapi/models/property_cached_ok.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[PropertyCachedOk](zillapi/models/property_cached_ok.py)</code> -- Single property with cache info

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_property_facts(zpid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FactsOk, RawError]</code></summary>

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

**Sync**

```python
result = client.properties.with_raw_response.get_property_facts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FactsOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.properties.with_raw_response.get_property_facts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FactsOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>str</code> | Zillow property id (numeric string). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[FactsOk](zillapi/models/facts_ok.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[FactsOk](zillapi/models/facts_ok.py)</code> -- Full resoFacts MLS attribute set

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_property_nearby(zpid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[NearbyOk, RawError]</code></summary>

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

**Sync**

```python
result = client.properties.with_raw_response.get_property_nearby("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NearbyOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.properties.with_raw_response.get_property_nearby("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NearbyOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>str</code> | Zillow property id (numeric string). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[NearbyOk](zillapi/models/nearby_ok.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[NearbyOk](zillapi/models/nearby_ok.py)</code> -- Comparable nearby listings (search-row shape)

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_property_open_houses(zpid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OpenHousesOk, RawError]</code></summary>

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

**Sync**

```python
result = client.properties.with_raw_response.get_property_open_houses("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OpenHousesOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.properties.with_raw_response.get_property_open_houses("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OpenHousesOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>str</code> | Zillow property id (numeric string). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[OpenHousesOk](zillapi/models/open_houses_ok.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[OpenHousesOk](zillapi/models/open_houses_ok.py)</code> -- Open-house schedule and tour eligibility

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_property_photos(zpid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PhotosOk, RawError]</code></summary>

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

**Sync**

```python
result = client.properties.with_raw_response.get_property_photos("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PhotosOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.properties.with_raw_response.get_property_photos("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PhotosOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>str</code> | Zillow property id (numeric string). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[PhotosOk](zillapi/models/photos_ok.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[PhotosOk](zillapi/models/photos_ok.py)</code> -- Property photos with multi-width sources and counts

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_property_price_history(zpid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PriceHistoryOk, RawError]</code></summary>

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

**Sync**

```python
result = client.properties.with_raw_response.get_property_price_history("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PriceHistoryOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.properties.with_raw_response.get_property_price_history("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PriceHistoryOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>str</code> | Zillow property id (numeric string). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[PriceHistoryOk](zillapi/models/price_history_ok.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[PriceHistoryOk](zillapi/models/price_history_ok.py)</code> -- Property price-history events

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_property_schools(zpid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SchoolsOk, RawError]</code></summary>

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

**Sync**

```python
result = client.properties.with_raw_response.get_property_schools("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SchoolsOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.properties.with_raw_response.get_property_schools("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SchoolsOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>str</code> | Zillow property id (numeric string). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[SchoolsOk](zillapi/models/schools_ok.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[SchoolsOk](zillapi/models/schools_ok.py)</code> -- Schools associated with the property

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_property_tax_history(zpid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TaxHistoryOk, RawError]</code></summary>

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

**Sync**

```python
result = client.properties.with_raw_response.get_property_tax_history("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaxHistoryOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.properties.with_raw_response.get_property_tax_history("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaxHistoryOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>str</code> | Zillow property id (numeric string). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[TaxHistoryOk](zillapi/models/tax_history_ok.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[TaxHistoryOk](zillapi/models/tax_history_ok.py)</code> -- Property tax-history rows

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_property_zestimate(zpid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ZestimateOk, RawError]</code></summary>

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

**Sync**

```python
result = client.properties.with_raw_response.get_property_zestimate("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ZestimateOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.properties.with_raw_response.get_property_zestimate("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ZestimateOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zpid</code> | <code>str</code> | Zillow property id (numeric string). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[ZestimateOk](zillapi/models/zestimate_ok.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ZestimateOk](zillapi/models/zestimate_ok.py)</code> -- Zestimate / rent zestimate

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](zillapi/apis/search.py)

<details>
<summary><code>def search(body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchResultsOk, SearchErrorBody]</code></summary>

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

**Sync**

```python
result = client.search.with_raw_response.search(SearchRequest(search_urls=[SearchUrl(url="https://example.com")]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResultsOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchErrorBody
```

**Async**

```python
result = await async_client.search.with_raw_response.search(
    SearchRequest(search_urls=[SearchUrl(url="https://example.com")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResultsOk
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchRequest2](zillapi/models/unions/search_request2.py) \| [SearchRequest2Dict](zillapi/models/unions/search_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[SearchResultsOk](zillapi/models/search_results_ok.py), [SearchErrorBody](zillapi/errors/search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchResultsOk](zillapi/models/search_results_ok.py)</code> -- Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as the detail Property shape returned by the property endpoints.

**On `Failure`**: `error` is <code>[SearchErrorBody](zillapi/errors/search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiErrorModel](zillapi/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](zillapi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_with_details(body: SearchWithDetailsRequest | SearchWithDetailsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobAcceptedZillapiZillowPropertyDataListingsApi, RawError]</code></summary>

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

**Sync**

```python
result = client.search.with_raw_response.search_with_details(
    SearchWithDetailsRequest(
        filters=SearchFilters1(bbox=Bbox(west=1.5, south=1.5, east=1.5, north=1.5)),
        search_urls=[SearchUrl(url="https://example.com")],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobAcceptedZillapiZillowPropertyDataListingsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.search.with_raw_response.search_with_details(
    SearchWithDetailsRequest(
        filters=SearchFilters1(bbox=Bbox(west=1.5, south=1.5, east=1.5, north=1.5)),
        search_urls=[SearchUrl(url="https://example.com")],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobAcceptedZillapiZillowPropertyDataListingsApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchWithDetailsRequest](zillapi/models/search_with_details_request.py) \| [SearchWithDetailsRequestDict](zillapi/models/search_with_details_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[JobAcceptedZillapiZillowPropertyDataListingsApi](zillapi/models/job_accepted_zillapi_zillow_property_data_listings_api.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobAcceptedZillapiZillowPropertyDataListingsApi](zillapi/models/job_accepted_zillapi_zillow_property_data_listings_api.py)</code> -- Async job accepted

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](zillapi/apis/webhooks_api.py)

<details>
<summary><code>def create_webhook(body: WebhookCreate | WebhookCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WebhooksResponse1, RawError]</code></summary>

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

**Sync**

```python
result = client.webhooks_api.with_raw_response.create_webhook(WebhookCreate(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebhooksResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.create_webhook(WebhookCreate(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebhooksResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WebhookCreate](zillapi/models/webhook_create.py) \| [WebhookCreateDict](zillapi/models/webhook_create.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[V1WebhooksResponse1](zillapi/models/v1_webhooks_response1.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WebhooksResponse1](zillapi/models/v1_webhooks_response1.py)</code> -- Created (secret returned once)

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_webhook_deliveries(id_: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WebhooksDeliveriesResponse, RawError]</code></summary>

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

**Sync**

```python
result = client.webhooks_api.with_raw_response.list_webhook_deliveries(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebhooksDeliveriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.list_webhook_deliveries(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebhooksDeliveriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Webhook UUID. |
| <code>limit</code> | <code>int \| None</code> | Page size (max 200).<br>**Default**: <code>50</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[V1WebhooksDeliveriesResponse](zillapi/models/v1_webhooks_deliveries_response.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WebhooksDeliveriesResponse](zillapi/models/v1_webhooks_deliveries_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_webhooks(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WebhooksResponse, RawError]</code></summary>

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

**Sync**

```python
result = client.webhooks_api.with_raw_response.list_webhooks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.list_webhooks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;[V1WebhooksResponse](zillapi/models/v1_webhooks_response.py), [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WebhooksResponse](zillapi/models/v1_webhooks_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def revoke_webhook(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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

**Sync**

```python
result = client.webhooks_api.with_raw_response.revoke_webhook(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.revoke_webhook(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Webhook UUID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](zillapi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](zillapi/core/results.py)&#91;None, [RawError](zillapi/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](zillapi/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

