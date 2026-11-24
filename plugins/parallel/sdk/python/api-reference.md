# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [ParallelClient](parallel/client.py)

## ChatApiBeta

> Source: [ChatApiBeta](parallel/apis/chat_api_beta.py)

<details>
<summary><code>def chat_completions_v1beta_chat_completions_post(body: ChatCompletionRequest | ChatCompletionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ChatCompletion</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Chat completions.

This endpoint can be used to get realtime chat completions. It can also be used
with the Task API processors to get structured, research outputs via a chat
interface.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.chat_api_beta.chat_completions_v1beta_chat_completions_post(
        ChatCompletionRequest(
            model="some example string", messages=[ChatMessage(role=Role1.SYSTEM, content="some example string")]
        ),
    )
    # TODO: Handle 'response' of type ChatCompletion
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChatCompletionsV1BetaChatCompletionsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.chat_api_beta.chat_completions_v1beta_chat_completions_post(
        ChatCompletionRequest(
            model="some example string", messages=[ChatMessage(role=Role1.SYSTEM, content="some example string")]
        ),
    )
    # TODO: Handle 'response' of type ChatCompletion
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChatCompletionsV1BetaChatCompletionsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ChatCompletionRequest](parallel/models/chat_completion_request.py) \| [ChatCompletionRequestDict](parallel/models/chat_completion_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChatCompletion](parallel/models/chat_completion.py)</code> -- Returns a ChatCompletion object for non-streaming requests (application/json), or a stream of ChatCompletionResponseChunk objects for streaming requests (text/event-stream) when `stream=true` is set in the request.

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[ChatCompletionsV1BetaChatCompletionsPostErrorBody](parallel/errors/chat_completions_v1_beta_chat_completions_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Extract

> Source: [Extract](parallel/apis/extract.py)

<details>
<summary><code>def extract_v1_extract_post(body: V1ExtractRequest | V1ExtractRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1ExtractResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extracts relevant content from specific web URLs.

The legacy Extract API reference (`/v1beta/extract` endpoint) is available
here, and
migration guide is here.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.extract.extract_v1_extract_post(V1ExtractRequest(urls=["some example string"]))
    # TODO: Handle 'response' of type V1ExtractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExtractV1ExtractPostErrorBody
```

**Async**

```python
try:
    response = await async_client.extract.extract_v1_extract_post(V1ExtractRequest(urls=["some example string"]))
    # TODO: Handle 'response' of type V1ExtractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExtractV1ExtractPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ExtractRequest](parallel/models/v1_extract_request.py) \| [V1ExtractRequestDict](parallel/models/v1_extract_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ExtractResponse](parallel/models/v1_extract_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[ExtractV1ExtractPostErrorBody](parallel/errors/extract_v1_extract_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FindAll

> Source: [FindAll](parallel/apis/find_all.py)

<details>
<summary><code>def cancel_findall_run_v1beta_findall_runs_findall_id_cancel_post(findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a FindAll run.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.find_all.cancel_findall_run_v1beta_findall_runs_findall_id_cancel_post("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody
```

**Async**

```python
try:
    await async_client.find_all.cancel_findall_run_v1beta_findall_runs_findall_id_cancel_post("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>findall_id</code> | <code>str</code> | Value sent with the request. |
| <code>parallel_beta</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody](parallel/errors/cancel_findall_run_v1_beta_findall_runs_findall_id_cancel_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 409 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def enrich_findall_run_v1beta_findall_runs_findall_id_enrich_post(findall_id: str, body: FindAllEnrichInput | FindAllEnrichInputDict, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FindAllSchema</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an enrichment to a FindAll run.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.find_all.enrich_findall_run_v1beta_findall_runs_findall_id_enrich_post(
        "some example string", FindAllEnrichInput(output_schema=JsonSchema2(json_schema={}))
    )
    # TODO: Handle 'response' of type FindAllSchema
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody
```

**Async**

```python
try:
    response = await async_client.find_all.enrich_findall_run_v1beta_findall_runs_findall_id_enrich_post(
        "some example string", FindAllEnrichInput(output_schema=JsonSchema2(json_schema={}))
    )
    # TODO: Handle 'response' of type FindAllSchema
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>findall_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[FindAllEnrichInput](parallel/models/find_all_enrich_input.py) \| [FindAllEnrichInputDict](parallel/models/find_all_enrich_input.py)</code> | The request body. |
| <code>parallel_beta</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllSchema](parallel/models/find_all_schema.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody](parallel/errors/enrich_findall_run_v1_beta_findall_runs_findall_id_enrich_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 422 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def extend_findall_run_v1beta_findall_runs_findall_id_extend_post(findall_id: str, body: FindAllExtendInput | FindAllExtendInputDict, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FindAllSchema</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extend a FindAll run by adding additional matches to the current match limit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.find_all.extend_findall_run_v1beta_findall_runs_findall_id_extend_post(
        "some example string", FindAllExtendInput(additional_match_limit=1)
    )
    # TODO: Handle 'response' of type FindAllSchema
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody
```

**Async**

```python
try:
    response = await async_client.find_all.extend_findall_run_v1beta_findall_runs_findall_id_extend_post(
        "some example string", FindAllExtendInput(additional_match_limit=1)
    )
    # TODO: Handle 'response' of type FindAllSchema
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>findall_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[FindAllExtendInput](parallel/models/find_all_extend_input.py) \| [FindAllExtendInputDict](parallel/models/find_all_extend_input.py)</code> | The request body. |
| <code>parallel_beta</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllSchema](parallel/models/find_all_schema.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody](parallel/errors/extend_findall_run_v1_beta_findall_runs_findall_id_extend_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 422 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def findall_entity_search_v1beta_findall_entity_search_post(body: FindAllEntitySearchRequest | FindAllEntitySearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> FindAllEntitySearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return ranked entities matching a natural language objective.

This endpoint performs a best-effort search optimized for low latency. To keep
responses fast, it returns a fixed set of attributes and supports queries of
limited complexity.

For comprehensive match evaluation and enrichment, use the
FindAll API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.find_all.findall_entity_search_v1beta_findall_entity_search_post(
        FindAllEntitySearchRequest(entity_type=EntityType.PEOPLE, objective="some example string")
    )
    # TODO: Handle 'response' of type FindAllEntitySearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody
```

**Async**

```python
try:
    response = await async_client.find_all.findall_entity_search_v1beta_findall_entity_search_post(
        FindAllEntitySearchRequest(entity_type=EntityType.PEOPLE, objective="some example string")
    )
    # TODO: Handle 'response' of type FindAllEntitySearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FindAllEntitySearchRequest](parallel/models/find_all_entity_search_request.py) \| [FindAllEntitySearchRequestDict](parallel/models/find_all_entity_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllEntitySearchResponse](parallel/models/find_all_entity_search_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody](parallel/errors/findall_entity_search_v1_beta_findall_entity_search_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def findall_runs_v1_get_v1beta_findall_runs_findall_id_get(findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FindAllRun</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a FindAll run.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.find_all.findall_runs_v1_get_v1beta_findall_runs_findall_id_get("some example string")
    # TODO: Handle 'response' of type FindAllRun
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.find_all.findall_runs_v1_get_v1beta_findall_runs_findall_id_get("some example string")
    # TODO: Handle 'response' of type FindAllRun
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>findall_id</code> | <code>str</code> | Value sent with the request. |
| <code>parallel_beta</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllRun](parallel/models/find_all_run.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody](parallel/errors/findall_runs_v1_get_v1_beta_findall_runs_findall_id_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def findall_runs_v1_v1beta_findall_runs_post(body: FindAllRunInput | FindAllRunInputDict, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FindAllRun</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a FindAll run.

This endpoint immediately returns a FindAll run object with status set to 'queued'.
You can get the run result snapshot using the GET /v1beta/findall/runs/{findall_id}/result endpoint.
You can track the progress of the run by:
- Polling the status using the GET /v1beta/findall/runs/{findall_id} endpoint,
- Subscribing to real-time updates via the /v1beta/findall/runs/{findall_id}/events
endpoint,
- Or specifying a webhook with relevant event types during run creation to receive
notifications.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.find_all.findall_runs_v1_v1beta_findall_runs_post(
        FindAllRunInput(
            objective="some example string",
            entity_type="some example string",
            match_conditions=[MatchCondition(name="some example string", description="some example string")],
            generator=Generator2.BASE,
            match_limit=1,
        ),
    )
    # TODO: Handle 'response' of type FindAllRun
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FindallRunsV1V1BetaFindallRunsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.find_all.findall_runs_v1_v1beta_findall_runs_post(
        FindAllRunInput(
            objective="some example string",
            entity_type="some example string",
            match_conditions=[MatchCondition(name="some example string", description="some example string")],
            generator=Generator2.BASE,
            match_limit=1,
        ),
    )
    # TODO: Handle 'response' of type FindAllRun
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FindallRunsV1V1BetaFindallRunsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FindAllRunInput](parallel/models/find_all_run_input.py) \| [FindAllRunInputDict](parallel/models/find_all_run_input.py)</code> | The request body. |
| <code>parallel_beta</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllRun](parallel/models/find_all_run.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[FindallRunsV1V1BetaFindallRunsPostErrorBody](parallel/errors/findall_runs_v1_v1_beta_findall_runs_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402, 422, 429 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_findall_events_v1beta_findall_runs_findall_id_events_get(findall_id: str, *, last_event_id: str | None = None, timeout: float | None = None, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> EventStream[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stream events from a FindAll run.

Args:
request: The Shapi request
findall_id: The FindAll run ID
last_event_id: Optional event ID to resume from.
timeout: Optional timeout in seconds. If None, keep connection alive
as long as the run is going. If set, stop after specified duration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.find_all.get_findall_events_v1beta_findall_runs_findall_id_events_get("some example string")
    # TODO: Handle 'response' of type EventStream[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.find_all.get_findall_events_v1beta_findall_runs_findall_id_events_get(
        "some example string"
    )
    # TODO: Handle 'response' of type AsyncEventStream[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>findall_id</code> | <code>str</code> | Value sent with the request. |
| <code>last_event_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>timeout</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>parallel_beta</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>EventStream&#91;[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet](parallel/models/unions/response200_get_findall_events_v1_beta_findall_runs_findall_id_events_get.py)&#93;</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody](parallel/errors/get_findall_events_v1_beta_findall_runs_findall_id_events_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_findall_result_v1beta_findall_runs_findall_id_result_get(findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FindAllRunResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the FindAll run result at the time of the request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.find_all.get_findall_result_v1beta_findall_runs_findall_id_result_get("some example string")
    # TODO: Handle 'response' of type FindAllRunResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody
```

**Async**

```python
try:
    response = await async_client.find_all.get_findall_result_v1beta_findall_runs_findall_id_result_get(
        "some example string"
    )
    # TODO: Handle 'response' of type FindAllRunResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>findall_id</code> | <code>str</code> | Value sent with the request. |
| <code>parallel_beta</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllRunResult](parallel/models/find_all_run_result.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody](parallel/errors/get_findall_result_v1_beta_findall_runs_findall_id_result_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_findall_schema_v1beta_findall_runs_findall_id_schema_get(findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FindAllSchema</code></summary>

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
    response = client.find_all.get_findall_schema_v1beta_findall_runs_findall_id_schema_get("some example string")
    # TODO: Handle 'response' of type FindAllSchema
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody
```

**Async**

```python
try:
    response = await async_client.find_all.get_findall_schema_v1beta_findall_runs_findall_id_schema_get(
        "some example string"
    )
    # TODO: Handle 'response' of type FindAllSchema
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>findall_id</code> | <code>str</code> | Value sent with the request. |
| <code>parallel_beta</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllSchema](parallel/models/find_all_schema.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody](parallel/errors/get_findall_schema_v1_beta_findall_runs_findall_id_schema_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ingest_findall_run_v1beta_findall_ingest_post(body: IngestInput | IngestInputDict, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FindAllSchema</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transforms a natural language search objective into a structured FindAll spec.

The generated specification serves as a suggested starting point and can be further
customized by the user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.find_all.ingest_findall_run_v1beta_findall_ingest_post(
        IngestInput(objective="some example string")
    )
    # TODO: Handle 'response' of type FindAllSchema
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IngestFindallRunV1BetaFindallIngestPostErrorBody
```

**Async**

```python
try:
    response = await async_client.find_all.ingest_findall_run_v1beta_findall_ingest_post(
        IngestInput(objective="some example string")
    )
    # TODO: Handle 'response' of type FindAllSchema
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IngestFindallRunV1BetaFindallIngestPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IngestInput](parallel/models/ingest_input.py) \| [IngestInputDict](parallel/models/ingest_input.py)</code> | The request body. |
| <code>parallel_beta</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllSchema](parallel/models/find_all_schema.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[IngestFindallRunV1BetaFindallIngestPostErrorBody](parallel/errors/ingest_findall_run_v1_beta_findall_ingest_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Memory

> Source: [Memory](parallel/apis/memory.py)

<details>
<summary><code>def clear_memory_v1beta_memory_clear_post(body: MemoryClearRequest | MemoryClearRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clears all entries from the selected memory without deleting the underlying tasks, monitors, or FindAll runs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.memory.clear_memory_v1beta_memory_clear_post(MemoryClearRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClearMemoryV1BetaMemoryClearPostErrorBody
```

**Async**

```python
try:
    await async_client.memory.clear_memory_v1beta_memory_clear_post(MemoryClearRequest())
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClearMemoryV1BetaMemoryClearPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MemoryClearRequest](parallel/models/memory_clear_request.py) \| [MemoryClearRequestDict](parallel/models/memory_clear_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[ClearMemoryV1BetaMemoryClearPostErrorBody](parallel/errors/clear_memory_v1_beta_memory_clear_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def evict_memory_source_v1beta_memory_evict_post(body: MemoryEvictRequest | MemoryEvictRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a task run, monitor, or FindAll run from the selected memory without deleting the original resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.memory.evict_memory_source_v1beta_memory_evict_post(
        MemoryEvictRequest(kind=Kind3.TASK, id="some example string")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EvictMemorySourceV1BetaMemoryEvictPostErrorBody
```

**Async**

```python
try:
    await async_client.memory.evict_memory_source_v1beta_memory_evict_post(
        MemoryEvictRequest(kind=Kind3.TASK, id="some example string")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EvictMemorySourceV1BetaMemoryEvictPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MemoryEvictRequest](parallel/models/memory_evict_request.py) \| [MemoryEvictRequestDict](parallel/models/memory_evict_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[EvictMemorySourceV1BetaMemoryEvictPostErrorBody](parallel/errors/evict_memory_source_v1_beta_memory_evict_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def retrieve_memory_v1beta_memory_retrieve_post(body: MemoryRetrieveRequest | MemoryRetrieveRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> MemoryRetrieveResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves relevant or recent runs from the selected memory. Provide a query to rank results by relevance; leave it empty to return the most recent runs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.memory.retrieve_memory_v1beta_memory_retrieve_post(MemoryRetrieveRequest())
    # TODO: Handle 'response' of type MemoryRetrieveResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveMemoryV1BetaMemoryRetrievePostErrorBody
```

**Async**

```python
try:
    response = await async_client.memory.retrieve_memory_v1beta_memory_retrieve_post(MemoryRetrieveRequest())
    # TODO: Handle 'response' of type MemoryRetrieveResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveMemoryV1BetaMemoryRetrievePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MemoryRetrieveRequest](parallel/models/memory_retrieve_request.py) \| [MemoryRetrieveRequestDict](parallel/models/memory_retrieve_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MemoryRetrieveResponse](parallel/models/memory_retrieve_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[RetrieveMemoryV1BetaMemoryRetrievePostErrorBody](parallel/errors/retrieve_memory_v1_beta_memory_retrieve_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Monitor

> Source: [Monitor](parallel/apis/monitor.py)

<details>
<summary><code>def cancel_monitor_v1_monitors_monitor_id_cancel_post(monitor_id: str, *, request_options: RequestOptionsOrDict | None = None) -> MonitorResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a monitor.

Permanently stops the monitor from running. Cancellation is irreversible —
create a new monitor to resume monitoring. Cancelling an already-cancelled
monitor is a no-op.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.cancel_monitor_v1_monitors_monitor_id_cancel_post("some example string")
    # TODO: Handle 'response' of type MonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.cancel_monitor_v1_monitors_monitor_id_cancel_post("some example string")
    # TODO: Handle 'response' of type MonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>monitor_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResponse](parallel/models/monitor_response.py)</code> -- Monitor cancelled successfully.

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody](parallel/errors/cancel_monitor_v1_monitors_monitor_id_cancel_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_monitor_v1_monitors_post(body: CreateMonitorRequest | CreateMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> MonitorResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a monitor.

Monitors run on a fixed frequency to detect material changes in web content.
Set `type=event_stream` to monitor a search query, or `type=snapshot` to
monitor a specific task run's output. The monitor runs once immediately at
creation, then continues on the configured schedule.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.create_monitor_v1_monitors_post(
        CreateMonitorRequest(
            type_=Type2ParallelAiMonitorApi.EVENT_STREAM,
            frequency="some example string",
            settings=MonitorEventStreamSettings(query="some example string"),
        ),
    )
    # TODO: Handle 'response' of type MonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateMonitorV1MonitorsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.create_monitor_v1_monitors_post(
        CreateMonitorRequest(
            type_=Type2ParallelAiMonitorApi.EVENT_STREAM,
            frequency="some example string",
            settings=MonitorEventStreamSettings(query="some example string"),
        ),
    )
    # TODO: Handle 'response' of type MonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateMonitorV1MonitorsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateMonitorRequest](parallel/models/create_monitor_request.py) \| [CreateMonitorRequestDict](parallel/models/create_monitor_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResponse](parallel/models/monitor_response.py)</code> -- Monitor created successfully.

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[CreateMonitorV1MonitorsPostErrorBody](parallel/errors/create_monitor_v1_monitors_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 422 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_monitor_events_v1_monitors_monitor_id_events_get(monitor_id: str, *, event_group_id: str | None = None, cursor: str | None = None, limit: int | None = None, include_completions: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> PaginatedMonitorEvents</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List events for a monitor, newest first.

Pass `event_group_id` to narrow results to a single execution. Otherwise
returns all executions newest-first; use `next_cursor` to paginate.
Set `include_completions=true` to also include no-change executions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.list_monitor_events_v1_monitors_monitor_id_events_get("some example string")
    # TODO: Handle 'response' of type PaginatedMonitorEvents
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.list_monitor_events_v1_monitors_monitor_id_events_get("some example string")
    # TODO: Handle 'response' of type PaginatedMonitorEvents
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>monitor_id</code> | <code>str</code> | Value sent with the request. |
| <code>event_group_id</code> | <code>str \| None</code> | Filter to a single execution. Values come from `event_group_id` in webhook events and listed events. Pagination params are ignored when set.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Pass `next_cursor` from a previous response to retrieve more events.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of events to return. Defaults to 20. Between 1 and 100.<br>**Default**: <code>None</code> |
| <code>include_completions</code> | <code>bool \| None</code> | When true, include completion events for executions that ran but detected no material changes. Useful for auditing execution history.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedMonitorEvents](parallel/models/paginated_monitor_events.py)</code> -- Monitor events retrieved successfully.

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody](parallel/errors/list_monitor_events_v1_monitors_monitor_id_events_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_monitors_v1_monitors_get(*, cursor: str | None = None, limit: int | None = None, type_: list[Type4OrStr] | None = None, status: list[Status1OrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedMonitorResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List monitors ordered by creation time, newest first.

Monitors are sorted by `created_at` descending. `limit` defaults to 100.
Use `next_cursor` from the response and pass it as `cursor` to fetch the
next page. Pagination ends when `next_cursor` is absent.

By default only `active` monitors are returned. Pass `status=cancelled`
or both values to include cancelled monitors.

The legacy Monitor API (`/v1alpha/monitors` endpoints) is documented under
the `Monitor (Alpha)` tag.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.list_monitors_v1_monitors_get()
    # TODO: Handle 'response' of type PaginatedMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMonitorsV1MonitorsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.list_monitors_v1_monitors_get()
    # TODO: Handle 'response' of type PaginatedMonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMonitorsV1MonitorsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor</code> | <code>str \| None</code> | Pagination token from `next_cursor` in a previous response. Omit to start from the most recently created monitor.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of monitors to return. Defaults to 100. Between 1 and 10000.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>list&#91;[Type4OrStr](parallel/models/enums/type4.py)&#93; \| None</code> | Filter by monitor type. Pass multiple times to filter by multiple values. Omit to return all types.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>list&#91;[Status1OrStr](parallel/models/enums/status1.py)&#93; \| None</code> | Filter by monitor status. Pass multiple times to filter by multiple values. Defaults to `active` only.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedMonitorResponse](parallel/models/paginated_monitor_response.py)</code> -- Paginated list of monitors.

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[ListMonitorsV1MonitorsGetErrorBody](parallel/errors/list_monitors_v1_monitors_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def retrieve_monitor_v1_monitors_monitor_id_get(monitor_id: str, *, request_options: RequestOptionsOrDict | None = None) -> MonitorResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a monitor.

Retrieves a specific monitor by `monitor_id`. Returns the monitor
configuration including status, frequency, query, and webhook settings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.retrieve_monitor_v1_monitors_monitor_id_get("some example string")
    # TODO: Handle 'response' of type MonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveMonitorV1MonitorsMonitorIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.retrieve_monitor_v1_monitors_monitor_id_get("some example string")
    # TODO: Handle 'response' of type MonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveMonitorV1MonitorsMonitorIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>monitor_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResponse](parallel/models/monitor_response.py)</code> -- Monitor retrieved successfully.

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[RetrieveMonitorV1MonitorsMonitorIdGetErrorBody](parallel/errors/retrieve_monitor_v1_monitors_monitor_id_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trigger_monitor_run_v1_monitors_monitor_id_trigger_post(monitor_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an immediate monitor run.

Enqueues a one-off execution of the monitor outside its normal schedule.
The monitor's regular schedule is not affected. An event is only emitted
if the execution detects a material change. Cancelled monitors cannot be
triggered.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.monitor.trigger_monitor_run_v1_monitors_monitor_id_trigger_post("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody
```

**Async**

```python
try:
    await async_client.monitor.trigger_monitor_run_v1_monitors_monitor_id_trigger_post("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>monitor_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody](parallel/errors/trigger_monitor_run_v1_monitors_monitor_id_trigger_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_monitor_v1_monitors_monitor_id_update_post(monitor_id: str, body: UpdateMonitorRequest | UpdateMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> MonitorResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a monitor.

Only fields explicitly included in the request body are changed. Pass
`null` for `webhook` or `metadata` to clear those fields. Pass `type` and
`settings` to update type-specific settings on an `event_stream` monitor.
At least one field must be provided. Cancelled monitors cannot be updated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.monitor.update_monitor_v1_monitors_monitor_id_update_post(
        "some example string", UpdateMonitorRequest()
    )
    # TODO: Handle 'response' of type MonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody
```

**Async**

```python
try:
    response = await async_client.monitor.update_monitor_v1_monitors_monitor_id_update_post(
        "some example string", UpdateMonitorRequest()
    )
    # TODO: Handle 'response' of type MonitorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>monitor_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateMonitorRequest](parallel/models/update_monitor_request.py) \| [UpdateMonitorRequestDict](parallel/models/update_monitor_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResponse](parallel/models/monitor_response.py)</code> -- Monitor updated successfully.

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody](parallel/errors/update_monitor_v1_monitors_monitor_id_update_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ResponsesApi

> Source: [ResponsesApi](parallel/apis/responses_api.py)

<details>
<summary><code>def create_response_v1_responses_post(body: ResponseCreateRequest | ResponseCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Response</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a response.

Generates an answer to the given input, grounded in live web research and
annotated with URL citations. Set `model` to `parallel`; `reasoning.effort`
(`low`/`medium`/`high`) controls how much research is performed, trading
response time for answer quality. Returns an OpenAI-format `Response` as
`application/json`, or a `text/event-stream` of OpenAI Responses SSE
events when `stream=true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.responses_api.create_response_v1_responses_post(
        ResponseCreateRequest(model="some example string", input="some example string")
    )
    # TODO: Handle 'response' of type Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateResponseV1ResponsesPostErrorBody
```

**Async**

```python
try:
    response = await async_client.responses_api.create_response_v1_responses_post(
        ResponseCreateRequest(model="some example string", input="some example string")
    )
    # TODO: Handle 'response' of type Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateResponseV1ResponsesPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ResponseCreateRequest](parallel/models/response_create_request.py) \| [ResponseCreateRequestDict](parallel/models/response_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Response](parallel/models/response.py)</code> -- Returns a Response object for non-streaming requests (application/json), or a stream of OpenAI Responses streaming events (text/event-stream) when `stream=true` is set in the request.

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[CreateResponseV1ResponsesPostErrorBody](parallel/errors/create_response_v1_responses_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](parallel/apis/search.py)

<details>
<summary><code>def v1_search_v1_search_post(body: V1SearchRequest | V1SearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1SearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches the web.

The legacy Search API reference (`/v1beta/search` endpoint) is available
here, and
migration guide is here.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.search.v1_search_v1_search_post(V1SearchRequest(search_queries=["some example string"]))
    # TODO: Handle 'response' of type V1SearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1SearchV1SearchPostErrorBody
```

**Async**

```python
try:
    response = await async_client.search.v1_search_v1_search_post(
        V1SearchRequest(search_queries=["some example string"])
    )
    # TODO: Handle 'response' of type V1SearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type V1SearchV1SearchPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1SearchRequest](parallel/models/v1_search_request.py) \| [V1SearchRequestDict](parallel/models/v1_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SearchResponse](parallel/models/v1_search_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[V1SearchV1SearchPostErrorBody](parallel/errors/v1_search_v1_search_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](parallel/apis/tasks.py)

<details>
<summary><code>def tasks_runs_events_get_v1_tasks_runs_run_id_events_get(run_id: str, *, request_options: RequestOptionsOrDict | None = None) -> EventStream[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Streams events for a task run.

Returns a stream of events showing progress updates and state changes for the task
run.

For task runs that did not have enable_events set to true during creation, the
frequency of events will be reduced.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.tasks_runs_events_get_v1_tasks_runs_run_id_events_get("some example string")
    # TODO: Handle 'response' of type EventStream[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.tasks_runs_events_get_v1_tasks_runs_run_id_events_get("some example string")
    # TODO: Handle 'response' of type AsyncEventStream[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>run_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>EventStream&#91;[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet](parallel/models/unions/response200_tasks_runs_events_get_v1_tasks_runs_run_id_events_get.py)&#93;</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody](parallel/errors/tasks_runs_events_get_v1_tasks_runs_run_id_events_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tasks_runs_events_get_v1beta_tasks_runs_run_id_events_get(run_id: str, *, request_options: RequestOptionsOrDict | None = None) -> EventStream[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Streams events for a task run.

Returns a stream of events showing progress updates and state changes for the task
run.

For task runs that did not have enable_events set to true during creation, the
frequency of events will be reduced.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.tasks_runs_events_get_v1beta_tasks_runs_run_id_events_get("some example string")
    # TODO: Handle 'response' of type EventStream[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.tasks_runs_events_get_v1beta_tasks_runs_run_id_events_get("some example string")
    # TODO: Handle 'response' of type AsyncEventStream[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>run_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>EventStream&#91;[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet](parallel/models/unions/response200_tasks_runs_events_get_v1_beta_tasks_runs_run_id_events_get.py)&#93;</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetErrorBody](parallel/errors/tasks_runs_events_get_v1_beta_tasks_runs_run_id_events_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tasks_runs_get_v1_tasks_runs_run_id_get(run_id: str, *, request_options: RequestOptionsOrDict | None = None) -> TaskRun</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves run status by run_id.

The run result is available from the `/result` endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.tasks_runs_get_v1_tasks_runs_run_id_get("some example string")
    # TODO: Handle 'response' of type TaskRun
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksRunsGetV1TasksRunsRunIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.tasks_runs_get_v1_tasks_runs_run_id_get("some example string")
    # TODO: Handle 'response' of type TaskRun
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksRunsGetV1TasksRunsRunIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>run_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskRun](parallel/models/task_run.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[TasksRunsGetV1TasksRunsRunIdGetErrorBody](parallel/errors/tasks_runs_get_v1_tasks_runs_run_id_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tasks_runs_input_get_v1_tasks_runs_run_id_input_get(run_id: str, *, request_options: RequestOptionsOrDict | None = None) -> TaskRunInput</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the input of a run by run_id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.tasks_runs_input_get_v1_tasks_runs_run_id_input_get("some example string")
    # TODO: Handle 'response' of type TaskRunInput
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.tasks_runs_input_get_v1_tasks_runs_run_id_input_get("some example string")
    # TODO: Handle 'response' of type TaskRunInput
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>run_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskRunInput](parallel/models/task_run_input.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody](parallel/errors/tasks_runs_input_get_v1_tasks_runs_run_id_input_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tasks_runs_post_v1_tasks_runs_post(body: TaskRunInput | TaskRunInputDict, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TaskRun</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a task run.

Returns immediately with a run object in status 'queued'.

Beta features can be enabled by setting the 'parallel-beta' header.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.tasks_runs_post_v1_tasks_runs_post(
        TaskRunInput(processor="some example string", input="some example string")
    )
    # TODO: Handle 'response' of type TaskRun
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksRunsPostV1TasksRunsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.tasks_runs_post_v1_tasks_runs_post(
        TaskRunInput(processor="some example string", input="some example string")
    )
    # TODO: Handle 'response' of type TaskRun
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksRunsPostV1TasksRunsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TaskRunInput](parallel/models/task_run_input.py) \| [TaskRunInputDict](parallel/models/task_run_input.py)</code> | The request body. |
| <code>parallel_beta</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskRun](parallel/models/task_run.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[TasksRunsPostV1TasksRunsPostErrorBody](parallel/errors/tasks_runs_post_v1_tasks_runs_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 403, 422, 429 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tasks_runs_result_get_v1_tasks_runs_run_id_result_get(run_id: str, *, timeout: int | None = 600, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TaskRunResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a run result by run_id, blocking until the run is completed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.tasks_runs_result_get_v1_tasks_runs_run_id_result_get("some example string")
    # TODO: Handle 'response' of type TaskRunResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.tasks_runs_result_get_v1_tasks_runs_run_id_result_get("some example string")
    # TODO: Handle 'response' of type TaskRunResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>run_id</code> | <code>str</code> | Value sent with the request. |
| <code>timeout</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>600</code> |
| <code>parallel_beta</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskRunResult](parallel/models/task_run_result.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody](parallel/errors/tasks_runs_result_get_v1_tasks_runs_run_id_result_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 408, 422 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get(taskgroup_id: str, *, last_event_id: str | None = None, timeout: float | None = None, request_options: RequestOptionsOrDict | None = None) -> EventStream[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Streams events from a TaskGroup: status updates and run completions.

The connection will remain open for up to an hour as long as at least one run in the
group is still active.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get("some example string")
    # TODO: Handle 'response' of type EventStream[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get(
        "some example string"
    )
    # TODO: Handle 'response' of type
    # AsyncEventStream[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskgroup_id</code> | <code>str</code> | Value sent with the request. |
| <code>last_event_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>timeout</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>EventStream&#91;[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet](parallel/models/unions/response200_tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get.py)&#93;</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody](parallel/errors/tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get(taskgroup_id: str, *, request_options: RequestOptionsOrDict | None = None) -> TaskGroupResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves aggregated status across runs in a TaskGroup.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get("some example string")
    # TODO: Handle 'response' of type TaskGroupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get("some example string")
    # TODO: Handle 'response' of type TaskGroupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskgroup_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskGroupResponse](parallel/models/task_group_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody](parallel/errors/tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tasks_taskgroups_post_v1_tasks_groups_post(body: CreateTaskGroupRequest | CreateTaskGroupRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TaskGroupResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a TaskGroup to group and track multiple runs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.tasks_taskgroups_post_v1_tasks_groups_post(CreateTaskGroupRequest())
    # TODO: Handle 'response' of type TaskGroupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksTaskgroupsPostV1TasksGroupsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.tasks_taskgroups_post_v1_tasks_groups_post(CreateTaskGroupRequest())
    # TODO: Handle 'response' of type TaskGroupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksTaskgroupsPostV1TasksGroupsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateTaskGroupRequest](parallel/models/create_task_group_request.py) \| [CreateTaskGroupRequestDict](parallel/models/create_task_group_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskGroupResponse](parallel/models/task_group_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[TasksTaskgroupsPostV1TasksGroupsPostErrorBody](parallel/errors/tasks_taskgroups_post_v1_tasks_groups_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get(taskgroup_id: str, *, last_event_id: str | None = None, status: Status1ParallelAiTasksApiOrStr | None = None, include_input: bool | None = False, include_output: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> EventStream[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves task runs in a TaskGroup and optionally their inputs and outputs.

All runs within a TaskGroup are returned as a stream. To get the inputs and/or
outputs back in the stream, set the corresponding `include_input` and
`include_output` parameters to `true`.

The stream is resumable using the `event_id` as the cursor. To resume a stream,
specify the `last_event_id` parameter with the `event_id` of the last event in the
stream. The stream will resume from the next event after the `last_event_id`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get("some example string")
    # TODO: Handle 'response' of type EventStream[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get(
        "some example string"
    )
    # TODO: Handle 'response' of type AsyncEventStream[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskgroup_id</code> | <code>str</code> | Value sent with the request. |
| <code>last_event_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status1ParallelAiTasksApiOrStr](parallel/models/enums/status1_parallel_ai_tasks_api.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>include_input</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>include_output</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>EventStream&#91;[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet](parallel/models/unions/response200_tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get.py)&#93;</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody](parallel/errors/tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get(taskgroup_id: str, run_id: str, *, request_options: RequestOptionsOrDict | None = None) -> TaskRun</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves run status by run_id.

This endpoint is equivalent to fetching run status directly using the
`retrieve()` method or the `tasks/runs` GET endpoint.

The run result is available from the `/result` endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type TaskRun
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type TaskRun
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskgroup_id</code> | <code>str</code> | Value sent with the request. |
| <code>run_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskRun](parallel/models/task_run.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody](parallel/errors/tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 422 | <code>[ErrorResponse](parallel/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post(taskgroup_id: str, body: TaskGroupRunRequest | TaskGroupRunRequestDict, *, refresh_status: bool | None = True, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TaskGroupRunResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates multiple task runs within a TaskGroup.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tasks.tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post(
        "some example string",
        TaskGroupRunRequest(inputs=[TaskRunInput(processor="some example string", input="some example string")]),
    )
    # TODO: Handle 'response' of type TaskGroupRunResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post(
        "some example string",
        TaskGroupRunRequest(inputs=[TaskRunInput(processor="some example string", input="some example string")]),
    )
    # TODO: Handle 'response' of type TaskGroupRunResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskgroup_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[TaskGroupRunRequest](parallel/models/task_group_run_request.py) \| [TaskGroupRunRequestDict](parallel/models/task_group_run_request.py)</code> | The request body. |
| <code>refresh_status</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>True</code> |
| <code>parallel_beta</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](parallel/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskGroupRunResponse](parallel/models/task_group_run_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](parallel/core/exceptions.py)&#91;[TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody](parallel/errors/tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](parallel/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](parallel/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

