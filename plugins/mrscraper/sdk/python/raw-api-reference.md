# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [MrScraperClient](mr_scraper/client.py)

## Analytic

> Source: [Analytic](mr_scraper/apis/analytic.py)

<details>
<summary><code>def get_api_v1_analytic_statuses(*, api_token_name: str | None = None, domain: str | None = None, end_date: str | None = None, start_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

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
result = client.analytic.with_raw_response.get_api_v1_analytic_statuses()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.analytic.with_raw_response.get_api_v1_analytic_statuses()
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
| <code>api_token_name</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>domain</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;None, [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuthApi

> Source: [AuthApi](mr_scraper/apis/auth_api.py)

<details>
<summary><code>def get_subscription_accounts(*, x_backoffice_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SubscriptionAccountsResponse, RawError]</code></summary>

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
result = client.auth_api.with_raw_response.get_subscription_accounts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubscriptionAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.auth_api.with_raw_response.get_subscription_accounts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubscriptionAccountsResponse
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
| <code>x_backoffice_token</code> | <code>str \| None</code> | Backoffice token to include database connection string<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;[SubscriptionAccountsResponse](mr_scraper/models/subscription_accounts_response.py), [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[SubscriptionAccountsResponse](mr_scraper/models/subscription_accounts_response.py)</code> -- Account information; user.databaseConnectionString is empty without a valid backoffice token

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Gateway

> Source: [Gateway](mr_scraper/apis/gateway.py)

<details>
<summary><code>def get_root(url: str, *, token: str | None = None, async_: bool | None = None, beta: bool | None = None, detected_json: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.gateway.with_raw_response.get_root("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.gateway.with_raw_response.get_root("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>url</code> | <code>str</code> | Target URL to forward to (URL encoded) |
| <code>token</code> | <code>str \| None</code> | atk_example_not_a_real_token<br>**Default**: <code>None</code> |
| <code>async_</code> | <code>bool \| None</code> | Queue the scrape and return a task ID immediately<br>**Default**: <code>None</code> |
| <code>beta</code> | <code>bool \| None</code> | Use the sync scraper upstream via the beta flag (async, callbacks and stream are not supported yet)<br>**Default**: <code>None</code> |
| <code>detected_json</code> | <code>bool \| None</code> | Extract JSON from <script> tags and metadata from <meta> tags in HTML response<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;Any, [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- OK

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_root(body: GatewayRequestBody | GatewayRequestBodyDict, *, async_: bool | None = None, beta: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]</code></summary>

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
result = client.gateway.with_raw_response.post_root(GatewayRequestBody())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.gateway.with_raw_response.post_root(GatewayRequestBody())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
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
| <code>body</code> | <code>[GatewayRequestBody](mr_scraper/models/gateway_request_body.py) \| [GatewayRequestBodyDict](mr_scraper/models/gateway_request_body.py)</code> | Request body with domain, action, and task details |
| <code>async_</code> | <code>bool \| None</code> | Queue the scrape and return a task ID immediately<br>**Default**: <code>None</code> |
| <code>beta</code> | <code>bool \| None</code> | Use the sync scraper upstream via the beta flag; alternatively set beta: true in the JSON body<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;Any, [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- OK

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](mr_scraper/apis/jobs.py)

<details>
<summary><code>def get_jobs(*, page_size: int | None = None, page: int | None = None, sort_field: str | None = None, sort_order: str | None = None, search: str | None = None, start_at: str | None = None, end_at: str | None = None, date_range_column: str | None = None, name: str | None = None, status: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobsResponse, RawError]</code></summary>

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
result = client.jobs.with_raw_response.get_jobs()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.jobs.with_raw_response.get_jobs()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobsResponse
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
| <code>page_size</code> | <code>int \| None</code> | Page size<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Page number<br>**Default**: <code>None</code> |
| <code>sort_field</code> | <code>str \| None</code> | Sort field<br>**Default**: <code>None</code> |
| <code>sort_order</code> | <code>str \| None</code> | Sort order (ASC/DESC)<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | Search term<br>**Default**: <code>None</code> |
| <code>start_at</code> | <code>str \| None</code> | Start date for created_at filter<br>**Default**: <code>None</code> |
| <code>end_at</code> | <code>str \| None</code> | End date for created_at filter<br>**Default**: <code>None</code> |
| <code>date_range_column</code> | <code>str \| None</code> | Custom date range column<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | Filter by name<br>**Default**: <code>None</code> |
| <code>status</code> | <code>str \| None</code> | Filter by status<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;[JobsResponse](mr_scraper/models/jobs_response.py), [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobsResponse](mr_scraper/models/jobs_response.py)</code> -- Paginated jobs

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_jobs_by_id(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobsResponse1, RawError]</code></summary>

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
result = client.jobs.with_raw_response.get_jobs_by_id(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.jobs.with_raw_response.get_jobs_by_id(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobsResponse1
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
| <code>id_</code> | <code>int</code> | Job ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;[JobsResponse1](mr_scraper/models/jobs_response1.py), [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobsResponse1](mr_scraper/models/jobs_response1.py)</code> -- Job retrieved

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_jobs(body: JobJob | JobJobDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobsResponse1, RawError]</code></summary>

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
result = client.jobs.with_raw_response.post_jobs(JobJob())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.jobs.with_raw_response.post_jobs(JobJob())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobsResponse1
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
| <code>body</code> | <code>[JobJob](mr_scraper/models/job_job.py) \| [JobJobDict](mr_scraper/models/job_job.py)</code> | Job object (ID will be auto-generated, do not include) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;[JobsResponse1](mr_scraper/models/jobs_response1.py), [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobsResponse1](mr_scraper/models/jobs_response1.py)</code> -- Job created

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_jobs_by_id(id_: int, body: JobJob | JobJobDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobsResponse1, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.put_jobs_by_id(1, JobJob())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.jobs.with_raw_response.put_jobs_by_id(1, JobJob())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobsResponse1
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
| <code>id_</code> | <code>int</code> | Job ID |
| <code>body</code> | <code>[JobJob](mr_scraper/models/job_job.py) \| [JobJobDict](mr_scraper/models/job_job.py)</code> | Job object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;[JobsResponse1](mr_scraper/models/jobs_response1.py), [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobsResponse1](mr_scraper/models/jobs_response1.py)</code> -- Job updated

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Proxies

> Source: [Proxies](mr_scraper/apis/proxies.py)

<details>
<summary><code>def get_api_v1_proxies_user_requests_bandwidth(*, end_date: str | None = None, start_date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetApiV1ProxiesUserRequestsBandwidthResponse, RawError]</code></summary>

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
result = client.proxies.with_raw_response.get_api_v1_proxies_user_requests_bandwidth()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetApiV1ProxiesUserRequestsBandwidthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.proxies.with_raw_response.get_api_v1_proxies_user_requests_bandwidth()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetApiV1ProxiesUserRequestsBandwidthResponse
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
| <code>end_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start_date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;[GetApiV1ProxiesUserRequestsBandwidthResponse](mr_scraper/models/get_api_v1_proxies_user_requests_bandwidth_response.py), [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetApiV1ProxiesUserRequestsBandwidthResponse](mr_scraper/models/get_api_v1_proxies_user_requests_bandwidth_response.py)</code> -- Success (shape read from the example response on the page)

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Results

> Source: [Results](mr_scraper/apis/results.py)

<details>
<summary><code>def get_api_v1_results_result_id(result_id: str, *, include_html: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetApiV1ResultsResultidResponse, RawError]</code></summary>

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
result = client.results.with_raw_response.get_api_v1_results_result_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetApiV1ResultsResultidResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.results.with_raw_response.get_api_v1_results_result_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetApiV1ResultsResultidResponse
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
| <code>result_id</code> | <code>str</code> | Value sent with the request. |
| <code>include_html</code> | <code>bool \| None</code> | Includes stored HTML.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;[GetApiV1ResultsResultidResponse](mr_scraper/models/get_api_v1_results_resultid_response.py), [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetApiV1ResultsResultidResponse](mr_scraper/models/get_api_v1_results_resultid_response.py)</code> -- Success (status as documented)

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Storage

> Source: [Storage](mr_scraper/apis/storage.py)

<details>
<summary><code>def get_storage_by_key(key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetStorageByKeyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the stored body directly with application/json content type, without a message/data envelope. The key may contain multiple path segments and must belong to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.storage.with_raw_response.get_storage_by_key("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStorageByKeyErrorBody
```

**Async**

```python
result = await async_client.storage.with_raw_response.get_storage_by_key("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStorageByKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | Full storage key, for example results/<user-scope>/<uuid>.json |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;None, [GetStorageByKeyErrorBody](mr_scraper/errors/get_storage_by_key_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetStorageByKeyErrorBody](mr_scraper/errors/get_storage_by_key_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Storage400Error1](mr_scraper/models/storage400_error1.py)</code> |
| 401 | <code>Any</code> |
| 403 | <code>[Storage403Error1](mr_scraper/models/storage403_error1.py)</code> |
| 404 | <code>[Storage404Error1](mr_scraper/models/storage404_error1.py)</code> |
| 503 | <code>[Storage503Error1](mr_scraper/models/storage503_error1.py)</code> |
| anything unmapped | <code>[RawError](mr_scraper/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](mr_scraper/apis/tasks.py)

<details>
<summary><code>def get_tasks(start_at: str, end_at: str, *, page_size: int | None = None, page: int | None = None, sort_field: str | None = None, sort_order: str | None = None, search: str | None = None, date_range_column: str | None = None, domain: str | None = None, action: str | None = None, status: str | None = None, job_id: int | None = None, is_parent: bool | None = None, count_only: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TasksResponse, RawError]</code></summary>

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
result = client.tasks.with_raw_response.get_tasks("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tasks.with_raw_response.get_tasks("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksResponse
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
| <code>start_at</code> | <code>str</code> | Start date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range 7 days) |
| <code>end_at</code> | <code>str</code> | End date for created_at filter (RFC3339, YYYY-MM-DD HH:mm:ss, or YYYY-MM-DD; maximum range 7 days) |
| <code>page_size</code> | <code>int \| None</code> | Page size<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Page number<br>**Default**: <code>None</code> |
| <code>sort_field</code> | <code>str \| None</code> | Sort field<br>**Default**: <code>None</code> |
| <code>sort_order</code> | <code>str \| None</code> | Sort order (ASC/DESC)<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | Search term<br>**Default**: <code>None</code> |
| <code>date_range_column</code> | <code>str \| None</code> | Custom date range column<br>**Default**: <code>None</code> |
| <code>domain</code> | <code>str \| None</code> | Filter by domain<br>**Default**: <code>None</code> |
| <code>action</code> | <code>str \| None</code> | Filter by action<br>**Default**: <code>None</code> |
| <code>status</code> | <code>str \| None</code> | Filter by status<br>**Default**: <code>None</code> |
| <code>job_id</code> | <code>int \| None</code> | Filter by jobId<br>**Default**: <code>None</code> |
| <code>is_parent</code> | <code>bool \| None</code> | Filter tokenUsage batch parent tasks<br>**Default**: <code>None</code> |
| <code>count_only</code> | <code>bool \| None</code> | Return only total count without loading task data<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;[TasksResponse](mr_scraper/models/tasks_response.py), [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[TasksResponse](mr_scraper/models/tasks_response.py)</code> -- Paginated tasks; countOnly=true returns an empty data array

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_tasks_by_id(id_: int, *, result: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TasksResponse3, RawError]</code></summary>

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
result = client.tasks.with_raw_response.get_tasks_by_id(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksResponse3
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tasks.with_raw_response.get_tasks_by_id(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksResponse3
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
| <code>id_</code> | <code>int</code> | Task ID |
| <code>result</code> | <code>str \| None</code> | Use json to decode the result body and include available callbackStatus/callbackError fields<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;[TasksResponse3](mr_scraper/models/tasks_response3.py), [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[TasksResponse3](mr_scraper/models/tasks_response3.py)</code> -- Task envelope; data has Task fields, with result decoded as JSON when result=json

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_tasks(body: TaskTaskSwagger | TaskTaskSwaggerDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TasksResponse1, RawError]</code></summary>

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
result = client.tasks.with_raw_response.post_tasks(TaskTaskSwagger())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tasks.with_raw_response.post_tasks(TaskTaskSwagger())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksResponse1
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
| <code>body</code> | <code>[TaskTaskSwagger](mr_scraper/models/task_task_swagger.py) \| [TaskTaskSwaggerDict](mr_scraper/models/task_task_swagger.py)</code> | Task object (ID will be auto-generated, do not include) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;[TasksResponse1](mr_scraper/models/tasks_response1.py), [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[TasksResponse1](mr_scraper/models/tasks_response1.py)</code> -- Task created

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_tasks_bulk(body: TaskBatchCreateRequest | TaskBatchCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TasksBulkResponse1, RawError]</code></summary>

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
result = client.tasks.with_raw_response.post_tasks_bulk(TaskBatchCreateRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksBulkResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tasks.with_raw_response.post_tasks_bulk(TaskBatchCreateRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksBulkResponse1
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
| <code>body</code> | <code>[TaskBatchCreateRequest](mr_scraper/models/task_batch_create_request.py) \| [TaskBatchCreateRequestDict](mr_scraper/models/task_batch_create_request.py)</code> | Array of tasks to create |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;[TasksBulkResponse1](mr_scraper/models/tasks_bulk_response1.py), [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[TasksBulkResponse1](mr_scraper/models/tasks_bulk_response1.py)</code> -- Tasks created

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_tasks_bulk(body: TaskBatchUpdateRequest | TaskBatchUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TasksBulkResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasks.with_raw_response.put_tasks_bulk(TaskBatchUpdateRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksBulkResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tasks.with_raw_response.put_tasks_bulk(TaskBatchUpdateRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksBulkResponse
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
| <code>body</code> | <code>[TaskBatchUpdateRequest](mr_scraper/models/task_batch_update_request.py) \| [TaskBatchUpdateRequestDict](mr_scraper/models/task_batch_update_request.py)</code> | Array of tasks to update; each task must include its ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;[TasksBulkResponse](mr_scraper/models/tasks_bulk_response.py), [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[TasksBulkResponse](mr_scraper/models/tasks_bulk_response.py)</code> -- Updated tasks; originalTaskId appears only on tasks cloned from a locked period

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_tasks_by_id(id_: int, body: TaskTaskSwagger | TaskTaskSwaggerDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TasksResponse1, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasks.with_raw_response.put_tasks_by_id(1, TaskTaskSwagger())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tasks.with_raw_response.put_tasks_by_id(1, TaskTaskSwagger())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksResponse1
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
| <code>id_</code> | <code>int</code> | Task ID |
| <code>body</code> | <code>[TaskTaskSwagger](mr_scraper/models/task_task_swagger.py) \| [TaskTaskSwaggerDict](mr_scraper/models/task_task_swagger.py)</code> | Task object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;[TasksResponse1](mr_scraper/models/tasks_response1.py), [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[TasksResponse1](mr_scraper/models/tasks_response1.py)</code> -- Task updated

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_tasks_by_id_status(id_: int, body: TaskUpdateTaskStatusRequest | TaskUpdateTaskStatusRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TasksStatusResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasks.with_raw_response.put_tasks_by_id_status(1, TaskUpdateTaskStatusRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.tasks.with_raw_response.put_tasks_by_id_status(1, TaskUpdateTaskStatusRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksStatusResponse
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
| <code>id_</code> | <code>int</code> | Task ID |
| <code>body</code> | <code>[TaskUpdateTaskStatusRequest](mr_scraper/models/task_update_task_status_request.py) \| [TaskUpdateTaskStatusRequestDict](mr_scraper/models/task_update_task_status_request.py)</code> | Task status update object |
| <code>request_options</code> | <code>[RequestOptionsOrDict](mr_scraper/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](mr_scraper/core/results.py)&#91;[TasksStatusResponse](mr_scraper/models/tasks_status_response.py), [RawError](mr_scraper/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[TasksStatusResponse](mr_scraper/models/tasks_status_response.py)</code> -- Task status updated

**On `Failure`**: `error` is <code>[RawError](mr_scraper/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

