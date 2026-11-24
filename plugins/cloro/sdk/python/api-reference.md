# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [CloroClient](cloro/client.py)

## AsyncApi2

> Source: [AsyncApi2](cloro/apis/async_api2.py)

<details>
<summary><code>def clear_async_queue(*, request_options: RequestOptionsOrDict | None = None) -> ClearQueueResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes every task still in the `QUEUED` state for the authenticated organization, letting you drain a pending backlog in one call instead of opening a support request. Tasks that are already `PROCESSING` are in-flight on a worker and are left untouched, as are `COMPLETED` and `FAILED` tasks. Queued tasks have not been charged, so clearing them does not affect your credit balance. The call is safe to repeat — if the queue is already empty it simply returns `cleared: 0`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.async_api2.clear_async_queue()
    # TODO: Handle 'response' of type ClearQueueResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClearAsyncQueueErrorBody
```

**Async**

```python
try:
    response = await async_client.async_api2.clear_async_queue()
    # TODO: Handle 'response' of type ClearQueueResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClearAsyncQueueErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClearQueueResponse](cloro/models/clear_queue_response.py)</code> -- Queue cleared. Returns the number of queued tasks that were removed.

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[ClearAsyncQueueErrorBody](cloro/errors/clear_async_queue_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[AuthenticationError](cloro/models/authentication_error.py)</code> |
| 429 | <code>[RateLimitError](cloro/models/rate_limit_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_async_task(body: BatchTaskRequest | BatchTaskRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> AsyncTaskCreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit an asynchronous task for background processing. Returns a task ID that you can use to poll for results or receive via webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.async_api2.create_async_task(
        BatchTaskRequest(
            task_type=TaskType.CHATGPT,
            payload={},
            priority=5,
            idempotency_key="your-custom-identifier-123",
            webhook=Webhook(url="https://your-app.com/webhook-handler"),
        ),
    )
    # TODO: Handle 'response' of type AsyncTaskCreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAsyncTaskErrorBody
```

**Async**

```python
try:
    response = await async_client.async_api2.create_async_task(
        BatchTaskRequest(
            task_type=TaskType.CHATGPT,
            payload={},
            priority=5,
            idempotency_key="your-custom-identifier-123",
            webhook=Webhook(url="https://your-app.com/webhook-handler"),
        ),
    )
    # TODO: Handle 'response' of type AsyncTaskCreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAsyncTaskErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchTaskRequest](cloro/models/batch_task_request.py) \| [BatchTaskRequestDict](cloro/models/batch_task_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsyncTaskCreateResponse](cloro/models/async_task_create_response.py)</code> -- Task created successfully. Returns task ID and initial status.

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[CreateAsyncTaskErrorBody](cloro/errors/create_async_task_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationError](cloro/models/validation_error.py)</code> |
| 401 | <code>[AuthenticationError](cloro/models/authentication_error.py)</code> |
| 403 | <code>[ForbiddenError](cloro/models/forbidden_error.py)</code> |
| 409 | <code>[IdempotencyConflictError](cloro/models/idempotency_conflict_error.py)</code> |
| 429 | <code>[QueueLimitError](cloro/models/queue_limit_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_batch_async_tasks(body: list[BatchTaskRequest | BatchTaskRequestDict], *, request_options: RequestOptionsOrDict | None = None) -> BatchTaskResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit up to 500 async tasks in one request. Each task is validated independently, so one invalid task does not block the rest. Returns per-task results.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.async_api2.create_batch_async_tasks(
        [
            BatchTaskRequest(
                task_type=TaskType.CHATGPT,
                payload={},
                priority=5,
                idempotency_key="batch-chatgpt-001",
                webhook=Webhook(url="https://your-app.com/webhook-handler"),
            ),
            BatchTaskRequest(
                task_type=TaskType.PERPLEXITY, payload={}, priority=3, idempotency_key="batch-perplexity-001"
            ),
        ],
    )
    # TODO: Handle 'response' of type BatchTaskResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBatchAsyncTasksErrorBody
```

**Async**

```python
try:
    response = await async_client.async_api2.create_batch_async_tasks(
        [
            BatchTaskRequest(
                task_type=TaskType.CHATGPT,
                payload={},
                priority=5,
                idempotency_key="batch-chatgpt-001",
                webhook=Webhook(url="https://your-app.com/webhook-handler"),
            ),
            BatchTaskRequest(
                task_type=TaskType.PERPLEXITY, payload={}, priority=3, idempotency_key="batch-perplexity-001"
            ),
        ],
    )
    # TODO: Handle 'response' of type BatchTaskResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBatchAsyncTasksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[BatchTaskRequest](cloro/models/batch_task_request.py) \| [BatchTaskRequestDict](cloro/models/batch_task_request.py)&#93;</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchTaskResponse](cloro/models/batch_task_response.py)</code> -- Batch processed. Check the summary and individual results for per-task success or failure.

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[CreateBatchAsyncTasksErrorBody](cloro/errors/create_batch_async_tasks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationError](cloro/models/validation_error.py)</code> |
| 401 | <code>[AuthenticationError](cloro/models/authentication_error.py)</code> |
| 429 | <code>[QueueLimitError](cloro/models/queue_limit_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_async_status(*, request_options: RequestOptionsOrDict | None = None) -> AsyncStatusResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get organization-wide async queue metrics including queued and processing task counts, and concurrency usage.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.async_api2.get_async_status()
    # TODO: Handle 'response' of type AsyncStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAsyncStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.async_api2.get_async_status()
    # TODO: Handle 'response' of type AsyncStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAsyncStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsyncStatusResponse](cloro/models/async_status_response.py)</code> -- Successful response with queue metrics.

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[GetAsyncStatusErrorBody](cloro/errors/get_async_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[AuthenticationError](cloro/models/authentication_error.py)</code> |
| 429 | <code>[RateLimitError](cloro/models/rate_limit_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_task_status(task_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> TaskStatusResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Poll the status and result of an asynchronous task by ID. Returns the task state and, once complete, the full structured result payload.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.async_api2.get_task_status(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type TaskStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTaskStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.async_api2.get_task_status(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type TaskStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTaskStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>task_id</code> | <code>UUID</code> | The ID of the task to fetch. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskStatusResponse](cloro/models/task_status_response.py)</code> -- Successful response with the task status and result if completed.

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[GetTaskStatusErrorBody](cloro/errors/get_task_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[AuthenticationError](cloro/models/authentication_error.py)</code> |
| 404 | <code>[NotFoundError](cloro/models/not_found_error.py)</code> |
| 429 | <code>[RateLimitError](cloro/models/rate_limit_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Countries

> Source: [Countries](cloro/apis/countries.py)

<details>
<summary><code>def get_countries(*, model: ModelOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> list[str]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all supported ISO 3166-1 alpha-2 country codes. Can be filtered by model to get countries available for specific AI providers.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.countries.get_countries(model=Model.CHATGPT)
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCountriesErrorBody
```

**Async**

```python
try:
    response = await async_client.countries.get_countries(model=Model.CHATGPT)
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCountriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model</code> | <code>[ModelOrStr](cloro/models/enums/model.py) \| None</code> | Filter countries available for a specific model. Omit to return all supported countries.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;str&#93;</code> -- List of supported country codes

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[GetCountriesErrorBody](cloro/errors/get_countries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationErrorCloroDevCountriesApi](cloro/models/validation_error_cloro_dev_countries_api.py)</code> |
| 401 | <code>[AuthenticationErrorCloroDevCountriesApi](cloro/models/authentication_error_cloro_dev_countries_api.py)</code> |
| 404 | <code>[NotFoundErrorCloroDevCountriesApi](cloro/models/not_found_error_cloro_dev_countries_api.py)</code> |
| 429 | <code>[RateLimitErrorCloroDevCountriesApi](cloro/models/rate_limit_error_cloro_dev_countries_api.py)</code> |
| 500 | <code>[InternalErrorCloroDevCountriesApi](cloro/models/internal_error_cloro_dev_countries_api.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Credits

> Source: [Credits](cloro/apis/credits.py)

<details>
<summary><code>def get_credits(*, request_options: RequestOptionsOrDict | None = None) -> CreditsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read your organization's current credit balance and billing cycle. Lets you observe your balance programmatically — including from async-only workloads — without making a sync /v1/monitor/* request just to inspect the X-Credits-Remaining header. The balance is cached and can lag by up to 60 seconds. Queued async tasks are re-checked against your live balance when the scheduler picks them up.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credits.get_credits()
    # TODO: Handle 'response' of type CreditsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCreditsErrorBody
```

**Async**

```python
try:
    response = await async_client.credits.get_credits()
    # TODO: Handle 'response' of type CreditsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCreditsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditsResponse](cloro/models/credits_response.py)</code> -- Current credit balance and billing cycle.

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[GetCreditsErrorBody](cloro/errors/get_credits_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[AuthenticationErrorCloroDevCreditsApi](cloro/models/authentication_error_cloro_dev_credits_api.py)</code> |
| 429 | <code>[RateLimitErrorCloroDevCreditsApi](cloro/models/rate_limit_error_cloro_dev_credits_api.py)</code> |
| 500 | <code>[InternalErrorCloroDevCreditsApi](cloro/models/internal_error_cloro_dev_credits_api.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Monitor

> Source: [Monitor](cloro/apis/monitor.py)

<details>
<summary><code>def get_google_product(body: GoogleProductRequest | GoogleProductRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> GoogleProductResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the product panel that a Google Search shopping card or a Google AI Mode product opens: merchant offers, description, specifications, reviews, images and related products. Send the `productResultToken` from a Google Search `result.shoppingCards` card, or from a Google AI Mode `result.shoppingCards` or `result.inlineProducts` entry.

Costs 1 credit, plus the 2-credit sync surcharge, and only when the request succeeds. A token expires five minutes after the scrape that issued it. If you send the request async, set a high `priority`, so that the token does not expire in the queue.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.get_google_product(GoogleProductRequest(product_result_token="some example string"))
    # TODO: Handle 'response' of type GoogleProductResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGoogleProductErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.get_google_product(
        GoogleProductRequest(product_result_token="some example string")
    )
    # TODO: Handle 'response' of type GoogleProductResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetGoogleProductErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GoogleProductRequest](cloro/models/google_product_request.py) \| [GoogleProductRequestDict](cloro/models/google_product_request.py)</code> | The token from a Google Search shopping card |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleProductResponse](cloro/models/google_product_response.py)</code> -- The product panel for the token

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[GetGoogleProductErrorBody](cloro/errors/get_google_product_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationErrorCloroDevMonitorApi](cloro/models/validation_error_cloro_dev_monitor_api.py)</code> |
| 401 | <code>[AuthenticationErrorCloroDevMonitorApi](cloro/models/authentication_error_cloro_dev_monitor_api.py)</code> |
| 403 | <code>[ForbiddenErrorCloroDevMonitorApi](cloro/models/forbidden_error_cloro_dev_monitor_api.py)</code> |
| 404, 410 | <code>[NotFoundError](cloro/models/not_found_error.py)</code> |
| 429 | <code>[ConcurrentLimitError](cloro/models/concurrent_limit_error.py)</code> |
| 499 | <code>[CanceledError](cloro/models/canceled_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| 502 | <code>[ExternalServiceError](cloro/models/external_service_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def monitor_ai_mode(body: AiModeMonitorRequest2 | AiModeMonitorRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> AiModeMonitorResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from AI Mode about your brand, products, or any topic across various regions

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.monitor_ai_mode(AiModeMonitorRequest(country=CountryCode2.AD))
    # TODO: Handle 'response' of type AiModeMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorAiModeErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.monitor_ai_mode(AiModeMonitorRequest(country=CountryCode2.AD))
    # TODO: Handle 'response' of type AiModeMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorAiModeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AiModeMonitorRequest2](cloro/models/unions/ai_mode_monitor_request2.py) \| [AiModeMonitorRequest2Dict](cloro/models/unions/ai_mode_monitor_request2.py)</code> | Request parameters for monitoring AI Mode responses |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AiModeMonitorResponse](cloro/models/ai_mode_monitor_response.py)</code> -- successful AI Mode monitoring response

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[MonitorAiModeErrorBody](cloro/errors/monitor_ai_mode_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationErrorCloroDevMonitorApi](cloro/models/validation_error_cloro_dev_monitor_api.py)</code> |
| 401 | <code>[AuthenticationErrorCloroDevMonitorApi](cloro/models/authentication_error_cloro_dev_monitor_api.py)</code> |
| 403 | <code>[ForbiddenErrorCloroDevMonitorApi](cloro/models/forbidden_error_cloro_dev_monitor_api.py)</code> |
| 429 | <code>[ConcurrentLimitError](cloro/models/concurrent_limit_error.py)</code> |
| 499 | <code>[CanceledError](cloro/models/canceled_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def monitor_bing_ai_mode(body: BingAiModeMonitorRequest | BingAiModeMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BingAiModeMonitorResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract the answer, sources and citation pills from Bing AI Mode (bing.com/copilotsearch) for a prompt, in the country you select.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.monitor_bing_ai_mode(
        BingAiModeMonitorRequest(prompt="some example string", country=CountryCode13.AD)
    )
    # TODO: Handle 'response' of type BingAiModeMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorBingAiModeErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.monitor_bing_ai_mode(
        BingAiModeMonitorRequest(prompt="some example string", country=CountryCode13.AD)
    )
    # TODO: Handle 'response' of type BingAiModeMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorBingAiModeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BingAiModeMonitorRequest](cloro/models/bing_ai_mode_monitor_request.py) \| [BingAiModeMonitorRequestDict](cloro/models/bing_ai_mode_monitor_request.py)</code> | Request parameters for monitoring Bing AI Mode responses |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BingAiModeMonitorResponse](cloro/models/bing_ai_mode_monitor_response.py)</code> -- successful Bing AI Mode monitoring response

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[MonitorBingAiModeErrorBody](cloro/errors/monitor_bing_ai_mode_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationErrorCloroDevMonitorApi](cloro/models/validation_error_cloro_dev_monitor_api.py)</code> |
| 401 | <code>[AuthenticationErrorCloroDevMonitorApi](cloro/models/authentication_error_cloro_dev_monitor_api.py)</code> |
| 403 | <code>[ForbiddenErrorCloroDevMonitorApi](cloro/models/forbidden_error_cloro_dev_monitor_api.py)</code> |
| 429 | <code>[ConcurrentLimitError](cloro/models/concurrent_limit_error.py)</code> |
| 499 | <code>[CanceledError](cloro/models/canceled_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def monitor_chatgpt(body: ChatGptMonitorRequest | ChatGptMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ChatGptMonitorResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from ChatGPT — answer text, cited sources, shopping cards, brand entities, and ads — for any prompt across supported regions

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.monitor_chatgpt(
        ChatGptMonitorRequest(prompt="some example string", country=CountryCode2.AD)
    )
    # TODO: Handle 'response' of type ChatGptMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorChatgptErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.monitor_chatgpt(
        ChatGptMonitorRequest(prompt="some example string", country=CountryCode2.AD)
    )
    # TODO: Handle 'response' of type ChatGptMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorChatgptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ChatGptMonitorRequest](cloro/models/chat_gpt_monitor_request.py) \| [ChatGptMonitorRequestDict](cloro/models/chat_gpt_monitor_request.py)</code> | Request parameters for monitoring ChatGPT responses |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChatGptMonitorResponse](cloro/models/chat_gpt_monitor_response.py)</code> -- successful ChatGPT monitoring response

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[MonitorChatgptErrorBody](cloro/errors/monitor_chatgpt_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationErrorCloroDevMonitorApi](cloro/models/validation_error_cloro_dev_monitor_api.py)</code> |
| 401 | <code>[AuthenticationErrorCloroDevMonitorApi](cloro/models/authentication_error_cloro_dev_monitor_api.py)</code> |
| 403 | <code>[ForbiddenErrorCloroDevMonitorApi](cloro/models/forbidden_error_cloro_dev_monitor_api.py)</code> |
| 429 | <code>[ConcurrentLimitError](cloro/models/concurrent_limit_error.py)</code> |
| 499 | <code>[CanceledError](cloro/models/canceled_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def monitor_copilot(body: CopilotMonitorRequest | CopilotMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CopilotMonitorResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from Microsoft Copilot about your brand, products, or any topic across various regions

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.monitor_copilot(
        CopilotMonitorRequest(prompt="some example string", country=CountryCode2.AD)
    )
    # TODO: Handle 'response' of type CopilotMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorCopilotErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.monitor_copilot(
        CopilotMonitorRequest(prompt="some example string", country=CountryCode2.AD)
    )
    # TODO: Handle 'response' of type CopilotMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorCopilotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CopilotMonitorRequest](cloro/models/copilot_monitor_request.py) \| [CopilotMonitorRequestDict](cloro/models/copilot_monitor_request.py)</code> | Request parameters for monitoring Copilot responses |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CopilotMonitorResponse](cloro/models/copilot_monitor_response.py)</code> -- successful Copilot monitoring response

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[MonitorCopilotErrorBody](cloro/errors/monitor_copilot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationErrorCloroDevMonitorApi](cloro/models/validation_error_cloro_dev_monitor_api.py)</code> |
| 401 | <code>[AuthenticationErrorCloroDevMonitorApi](cloro/models/authentication_error_cloro_dev_monitor_api.py)</code> |
| 403 | <code>[ForbiddenErrorCloroDevMonitorApi](cloro/models/forbidden_error_cloro_dev_monitor_api.py)</code> |
| 429 | <code>[ConcurrentLimitError](cloro/models/concurrent_limit_error.py)</code> |
| 499 | <code>[CanceledError](cloro/models/canceled_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def monitor_gemini(body: GeminiMonitorRequest | GeminiMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> GeminiMonitorResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from Google Gemini — generated answer text and cited sources for any prompt, with Markdown and HTML export formats

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.monitor_gemini(
        GeminiMonitorRequest(prompt="some example string", country=CountryCode2.AD)
    )
    # TODO: Handle 'response' of type GeminiMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorGeminiErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.monitor_gemini(
        GeminiMonitorRequest(prompt="some example string", country=CountryCode2.AD)
    )
    # TODO: Handle 'response' of type GeminiMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorGeminiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GeminiMonitorRequest](cloro/models/gemini_monitor_request.py) \| [GeminiMonitorRequestDict](cloro/models/gemini_monitor_request.py)</code> | Request parameters for monitoring Gemini responses |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeminiMonitorResponse](cloro/models/gemini_monitor_response.py)</code> -- successful Gemini monitoring response

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[MonitorGeminiErrorBody](cloro/errors/monitor_gemini_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationErrorCloroDevMonitorApi](cloro/models/validation_error_cloro_dev_monitor_api.py)</code> |
| 401 | <code>[AuthenticationErrorCloroDevMonitorApi](cloro/models/authentication_error_cloro_dev_monitor_api.py)</code> |
| 403 | <code>[ForbiddenErrorCloroDevMonitorApi](cloro/models/forbidden_error_cloro_dev_monitor_api.py)</code> |
| 429 | <code>[ConcurrentLimitError](cloro/models/concurrent_limit_error.py)</code> |
| 499 | <code>[CanceledError](cloro/models/canceled_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def monitor_google(body: GoogleMonitorRequest3 | GoogleMonitorRequest3Dict, *, request_options: RequestOptionsOrDict | None = None) -> GoogleMonitorResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from Google Search including organic results, People Also Ask, related searches, and optional AI Overview

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.monitor_google(GoogleMonitorRequest(query="some example string", country=CountryCode8.AD))
    # TODO: Handle 'response' of type GoogleMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorGoogleErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.monitor_google(
        GoogleMonitorRequest(query="some example string", country=CountryCode8.AD)
    )
    # TODO: Handle 'response' of type GoogleMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorGoogleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GoogleMonitorRequest3](cloro/models/unions/google_monitor_request3.py) \| [GoogleMonitorRequest3Dict](cloro/models/unions/google_monitor_request3.py)</code> | Request parameters for monitoring Google search results |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleMonitorResponse](cloro/models/google_monitor_response.py)</code> -- successful Google monitoring response

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[MonitorGoogleErrorBody](cloro/errors/monitor_google_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationErrorCloroDevMonitorApi](cloro/models/validation_error_cloro_dev_monitor_api.py)</code> |
| 401 | <code>[AuthenticationErrorCloroDevMonitorApi](cloro/models/authentication_error_cloro_dev_monitor_api.py)</code> |
| 403 | <code>[ForbiddenErrorCloroDevMonitorApi](cloro/models/forbidden_error_cloro_dev_monitor_api.py)</code> |
| 429 | <code>[ConcurrentLimitError](cloro/models/concurrent_limit_error.py)</code> |
| 499 | <code>[CanceledError](cloro/models/canceled_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def monitor_google_news(body: GoogleNewsMonitorRequest2 | GoogleNewsMonitorRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> GoogleNewsMonitorResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured news articles from Google News including titles, links, snippets, sources, dates, and thumbnails

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.monitor_google_news(GoogleNewsMonitorRequest(country=CountryCode1.AD))
    # TODO: Handle 'response' of type GoogleNewsMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorGoogleNewsErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.monitor_google_news(GoogleNewsMonitorRequest(country=CountryCode1.AD))
    # TODO: Handle 'response' of type GoogleNewsMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorGoogleNewsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GoogleNewsMonitorRequest2](cloro/models/unions/google_news_monitor_request2.py) \| [GoogleNewsMonitorRequest2Dict](cloro/models/unions/google_news_monitor_request2.py)</code> | Request parameters for monitoring Google News results |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleNewsMonitorResponse](cloro/models/google_news_monitor_response.py)</code> -- successful Google News monitoring response

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[MonitorGoogleNewsErrorBody](cloro/errors/monitor_google_news_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationErrorCloroDevMonitorApi](cloro/models/validation_error_cloro_dev_monitor_api.py)</code> |
| 401 | <code>[AuthenticationErrorCloroDevMonitorApi](cloro/models/authentication_error_cloro_dev_monitor_api.py)</code> |
| 403 | <code>[ForbiddenErrorCloroDevMonitorApi](cloro/models/forbidden_error_cloro_dev_monitor_api.py)</code> |
| 429 | <code>[ConcurrentLimitError](cloro/models/concurrent_limit_error.py)</code> |
| 499 | <code>[CanceledError](cloro/models/canceled_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def monitor_grok(body: GrokMonitorRequest | GrokMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> GrokMonitorResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from Grok — answer text and cited sources, including X/Twitter references — for any prompt across supported regions

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.monitor_grok(GrokMonitorRequest(prompt="some example string", country=CountryCode2.AD))
    # TODO: Handle 'response' of type GrokMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorGrokErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.monitor_grok(
        GrokMonitorRequest(prompt="some example string", country=CountryCode2.AD)
    )
    # TODO: Handle 'response' of type GrokMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorGrokErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GrokMonitorRequest](cloro/models/grok_monitor_request.py) \| [GrokMonitorRequestDict](cloro/models/grok_monitor_request.py)</code> | Request parameters for monitoring Grok responses |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GrokMonitorResponse](cloro/models/grok_monitor_response.py)</code> -- successful Grok monitoring response

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[MonitorGrokErrorBody](cloro/errors/monitor_grok_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationErrorCloroDevMonitorApi](cloro/models/validation_error_cloro_dev_monitor_api.py)</code> |
| 401 | <code>[AuthenticationErrorCloroDevMonitorApi](cloro/models/authentication_error_cloro_dev_monitor_api.py)</code> |
| 403 | <code>[ForbiddenErrorCloroDevMonitorApi](cloro/models/forbidden_error_cloro_dev_monitor_api.py)</code> |
| 429 | <code>[ConcurrentLimitError](cloro/models/concurrent_limit_error.py)</code> |
| 499 | <code>[CanceledError](cloro/models/canceled_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def monitor_perplexity(body: PerplexityMonitorRequest | PerplexityMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PerplexityMonitorResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from Perplexity AI about your brand, products, or any topic across various regions

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.monitor_perplexity(
        PerplexityMonitorRequest(prompt="some example string", country=CountryCode2.AD)
    )
    # TODO: Handle 'response' of type PerplexityMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorPerplexityErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.monitor_perplexity(
        PerplexityMonitorRequest(prompt="some example string", country=CountryCode2.AD)
    )
    # TODO: Handle 'response' of type PerplexityMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MonitorPerplexityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PerplexityMonitorRequest](cloro/models/perplexity_monitor_request.py) \| [PerplexityMonitorRequestDict](cloro/models/perplexity_monitor_request.py)</code> | Request parameters for monitoring Perplexity responses |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PerplexityMonitorResponse](cloro/models/perplexity_monitor_response.py)</code> -- successful Perplexity monitoring response

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[MonitorPerplexityErrorBody](cloro/errors/monitor_perplexity_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationErrorCloroDevMonitorApi](cloro/models/validation_error_cloro_dev_monitor_api.py)</code> |
| 401 | <code>[AuthenticationErrorCloroDevMonitorApi](cloro/models/authentication_error_cloro_dev_monitor_api.py)</code> |
| 403 | <code>[ForbiddenErrorCloroDevMonitorApi](cloro/models/forbidden_error_cloro_dev_monitor_api.py)</code> |
| 429 | <code>[ConcurrentLimitError](cloro/models/concurrent_limit_error.py)</code> |
| 499 | <code>[CanceledError](cloro/models/canceled_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resolve_google_goto(body: GoogleGotoRequest | GoogleGotoRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> GoogleGotoResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve one Google redirect link to its destination URL. Send the `redirectLink` that ships beside every resolved link on a Google Search, Google News, or AI Mode response, and the response gives you the URL it points to.

Charges no credits, does not use a concurrency slot, and counts against the per-second rate limit like any other call. Each request resolves one link, and Google gets at most 10 seconds to answer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.resolve_google_goto(GoogleGotoRequest(url="https://example.com"))
    # TODO: Handle 'response' of type GoogleGotoResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResolveGoogleGotoErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.resolve_google_goto(GoogleGotoRequest(url="https://example.com"))
    # TODO: Handle 'response' of type GoogleGotoResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResolveGoogleGotoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GoogleGotoRequest](cloro/models/google_goto_request.py) \| [GoogleGotoRequestDict](cloro/models/google_goto_request.py)</code> | The Google redirect link to resolve |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleGotoResponse](cloro/models/google_goto_response.py)</code> -- The destination the redirect link points to

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[ResolveGoogleGotoErrorBody](cloro/errors/resolve_google_goto_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationErrorCloroDevMonitorApi](cloro/models/validation_error_cloro_dev_monitor_api.py)</code> |
| 401 | <code>[AuthenticationErrorCloroDevMonitorApi](cloro/models/authentication_error_cloro_dev_monitor_api.py)</code> |
| 429 | <code>[RateLimitError](cloro/models/rate_limit_error.py)</code> |
| 500 | <code>[InternalError](cloro/models/internal_error.py)</code> |
| 502 | <code>[ExternalServiceError](cloro/models/external_service_error.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## States

> Source: [States](cloro/apis/states.py)

<details>
<summary><code>def get_states(country: str, *, request_options: RequestOptionsOrDict | None = None) -> list[V1StatesResponse]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of US states supported for state-level geo-targeting. Only US is currently supported — other country values return an empty array.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.states.get_states("US")
    # TODO: Handle 'response' of type list[V1StatesResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetStatesErrorBody
```

**Async**

```python
try:
    response = await async_client.states.get_states("US")
    # TODO: Handle 'response' of type list[V1StatesResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetStatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | ISO 3166-1 alpha-2 country code. Only "US" returns results. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cloro/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[V1StatesResponse](cloro/models/v1_states_response.py)&#93;</code> -- List of supported states

**OnError**: <code>[ApiError](cloro/core/exceptions.py)&#91;[GetStatesErrorBody](cloro/errors/get_states_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationErrorCloroDevCountriesApi](cloro/models/validation_error_cloro_dev_countries_api.py)</code> |
| 401 | <code>[AuthenticationErrorCloroDevCountriesApi](cloro/models/authentication_error_cloro_dev_countries_api.py)</code> |
| 429 | <code>[RateLimitErrorCloroDevStatesApi](cloro/models/rate_limit_error_cloro_dev_states_api.py)</code> |
| 500 | <code>[InternalErrorCloroDevCountriesApi](cloro/models/internal_error_cloro_dev_countries_api.py)</code> |
| anything unmapped | <code>[RawError](cloro/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

