# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [ParallelClient](parallel/client.py)

## ChatApiBeta

> Source: [ChatApiBeta](parallel/apis/chat_api_beta.py)

<details>
<summary><code>def chat_completions_v1beta_chat_completions_post(body: ChatCompletionRequest | ChatCompletionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ChatCompletion, ChatCompletionsV1BetaChatCompletionsPostErrorBody]</code></summary>

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
result = client.chat_api_beta.with_raw_response.chat_completions_v1beta_chat_completions_post(
    ChatCompletionRequest(
        model="some example string", messages=[ChatMessage(role=Role1.SYSTEM, content="some example string")]
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ChatCompletion
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ChatCompletionsV1BetaChatCompletionsPostErrorBody
```

**Async**

```python
result = await async_client.chat_api_beta.with_raw_response.chat_completions_v1beta_chat_completions_post(
    ChatCompletionRequest(
        model="some example string", messages=[ChatMessage(role=Role1.SYSTEM, content="some example string")]
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ChatCompletion
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ChatCompletionsV1BetaChatCompletionsPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[ChatCompletion](parallel/models/chat_completion.py), [ChatCompletionsV1BetaChatCompletionsPostErrorBody](parallel/errors/chat_completions_v1_beta_chat_completions_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ChatCompletion](parallel/models/chat_completion.py)</code> -- Returns a ChatCompletion object for non-streaming requests (application/json), or a stream of ChatCompletionResponseChunk objects for streaming requests (text/event-stream) when `stream=true` is set in the request.

**On `Failure`**: `error` is <code>[ChatCompletionsV1BetaChatCompletionsPostErrorBody](parallel/errors/chat_completions_v1_beta_chat_completions_post_error.py)</code>

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
<summary><code>def extract_v1_extract_post(body: V1ExtractRequest | V1ExtractRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ExtractResponse, ExtractV1ExtractPostErrorBody]</code></summary>

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
result = client.extract.with_raw_response.extract_v1_extract_post(V1ExtractRequest(urls=["some example string"]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ExtractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExtractV1ExtractPostErrorBody
```

**Async**

```python
result = await async_client.extract.with_raw_response.extract_v1_extract_post(
    V1ExtractRequest(urls=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ExtractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExtractV1ExtractPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[V1ExtractResponse](parallel/models/v1_extract_response.py), [ExtractV1ExtractPostErrorBody](parallel/errors/extract_v1_extract_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ExtractResponse](parallel/models/v1_extract_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ExtractV1ExtractPostErrorBody](parallel/errors/extract_v1_extract_post_error.py)</code>

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
<summary><code>def cancel_findall_run_v1beta_findall_runs_findall_id_cancel_post(findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody]</code></summary>

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
result = client.find_all.with_raw_response.cancel_findall_run_v1beta_findall_runs_findall_id_cancel_post(
    "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody
```

**Async**

```python
result = await async_client.find_all.with_raw_response.cancel_findall_run_v1beta_findall_runs_findall_id_cancel_post(
    "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;None, [CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody](parallel/errors/cancel_findall_run_v1_beta_findall_runs_findall_id_cancel_post_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CancelFindallRunV1BetaFindallRunsFindallIdCancelPostErrorBody](parallel/errors/cancel_findall_run_v1_beta_findall_runs_findall_id_cancel_post_error.py)</code>

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
<summary><code>def enrich_findall_run_v1beta_findall_runs_findall_id_enrich_post(findall_id: str, body: FindAllEnrichInput | FindAllEnrichInputDict, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FindAllSchema, EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody]</code></summary>

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
result = client.find_all.with_raw_response.enrich_findall_run_v1beta_findall_runs_findall_id_enrich_post(
    "some example string", FindAllEnrichInput(output_schema=JsonSchema2(json_schema={}))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody
```

**Async**

```python
result = await async_client.find_all.with_raw_response.enrich_findall_run_v1beta_findall_runs_findall_id_enrich_post(
    "some example string", FindAllEnrichInput(output_schema=JsonSchema2(json_schema={}))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[FindAllSchema](parallel/models/find_all_schema.py), [EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody](parallel/errors/enrich_findall_run_v1_beta_findall_runs_findall_id_enrich_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FindAllSchema](parallel/models/find_all_schema.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostErrorBody](parallel/errors/enrich_findall_run_v1_beta_findall_runs_findall_id_enrich_post_error.py)</code>

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
<summary><code>def extend_findall_run_v1beta_findall_runs_findall_id_extend_post(findall_id: str, body: FindAllExtendInput | FindAllExtendInputDict, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FindAllSchema, ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody]</code></summary>

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
result = client.find_all.with_raw_response.extend_findall_run_v1beta_findall_runs_findall_id_extend_post(
    "some example string", FindAllExtendInput(additional_match_limit=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody
```

**Async**

```python
result = await async_client.find_all.with_raw_response.extend_findall_run_v1beta_findall_runs_findall_id_extend_post(
    "some example string", FindAllExtendInput(additional_match_limit=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[FindAllSchema](parallel/models/find_all_schema.py), [ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody](parallel/errors/extend_findall_run_v1_beta_findall_runs_findall_id_extend_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FindAllSchema](parallel/models/find_all_schema.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostErrorBody](parallel/errors/extend_findall_run_v1_beta_findall_runs_findall_id_extend_post_error.py)</code>

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
<summary><code>def findall_entity_search_v1beta_findall_entity_search_post(body: FindAllEntitySearchRequest | FindAllEntitySearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FindAllEntitySearchResponse, FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody]</code></summary>

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
result = client.find_all.with_raw_response.findall_entity_search_v1beta_findall_entity_search_post(
    FindAllEntitySearchRequest(entity_type=EntityType.PEOPLE, objective="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllEntitySearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody
```

**Async**

```python
result = await async_client.find_all.with_raw_response.findall_entity_search_v1beta_findall_entity_search_post(
    FindAllEntitySearchRequest(entity_type=EntityType.PEOPLE, objective="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllEntitySearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[FindAllEntitySearchResponse](parallel/models/find_all_entity_search_response.py), [FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody](parallel/errors/findall_entity_search_v1_beta_findall_entity_search_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FindAllEntitySearchResponse](parallel/models/find_all_entity_search_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody](parallel/errors/findall_entity_search_v1_beta_findall_entity_search_post_error.py)</code>

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
<summary><code>def findall_runs_v1_get_v1beta_findall_runs_findall_id_get(findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FindAllRun, FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody]</code></summary>

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
result = client.find_all.with_raw_response.findall_runs_v1_get_v1beta_findall_runs_findall_id_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllRun
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody
```

**Async**

```python
result = await async_client.find_all.with_raw_response.findall_runs_v1_get_v1beta_findall_runs_findall_id_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllRun
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[FindAllRun](parallel/models/find_all_run.py), [FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody](parallel/errors/findall_runs_v1_get_v1_beta_findall_runs_findall_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FindAllRun](parallel/models/find_all_run.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[FindallRunsV1GetV1BetaFindallRunsFindallIdGetErrorBody](parallel/errors/findall_runs_v1_get_v1_beta_findall_runs_findall_id_get_error.py)</code>

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
<summary><code>def findall_runs_v1_v1beta_findall_runs_post(body: FindAllRunInput | FindAllRunInputDict, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FindAllRun, FindallRunsV1V1BetaFindallRunsPostErrorBody]</code></summary>

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
result = client.find_all.with_raw_response.findall_runs_v1_v1beta_findall_runs_post(
    FindAllRunInput(
        objective="some example string",
        entity_type="some example string",
        match_conditions=[MatchCondition(name="some example string", description="some example string")],
        generator=Generator2.BASE,
        match_limit=1,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllRun
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FindallRunsV1V1BetaFindallRunsPostErrorBody
```

**Async**

```python
result = await async_client.find_all.with_raw_response.findall_runs_v1_v1beta_findall_runs_post(
    FindAllRunInput(
        objective="some example string",
        entity_type="some example string",
        match_conditions=[MatchCondition(name="some example string", description="some example string")],
        generator=Generator2.BASE,
        match_limit=1,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllRun
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FindallRunsV1V1BetaFindallRunsPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[FindAllRun](parallel/models/find_all_run.py), [FindallRunsV1V1BetaFindallRunsPostErrorBody](parallel/errors/findall_runs_v1_v1_beta_findall_runs_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FindAllRun](parallel/models/find_all_run.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[FindallRunsV1V1BetaFindallRunsPostErrorBody](parallel/errors/findall_runs_v1_v1_beta_findall_runs_post_error.py)</code>

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
<summary><code>def get_findall_events_v1beta_findall_runs_findall_id_events_get(findall_id: str, *, last_event_id: str | None = None, timeout: float | None = None, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventStream[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet], GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody]</code></summary>

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
result = client.find_all.with_raw_response.get_findall_events_v1beta_findall_runs_findall_id_events_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        # TODO: Handle 'payload' of type EventStream[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet]
        ...
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody
```

**Async**

```python
result = await async_client.find_all.with_raw_response.get_findall_events_v1beta_findall_runs_findall_id_events_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        # TODO: Handle 'payload' of type
        # AsyncEventStream[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet]
        ...
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;EventStream&#91;[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet](parallel/models/unions/response200_get_findall_events_v1_beta_findall_runs_findall_id_events_get.py)&#93;, [GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody](parallel/errors/get_findall_events_v1_beta_findall_runs_findall_id_events_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>EventStream&#91;[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet](parallel/models/unions/response200_get_findall_events_v1_beta_findall_runs_findall_id_events_get.py)&#93;</code>, its body not yet read -- Successful Response

**On `Failure`**: `error` is <code>[GetFindallEventsV1BetaFindallRunsFindallIdEventsGetErrorBody](parallel/errors/get_findall_events_v1_beta_findall_runs_findall_id_events_get_error.py)</code>

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
<summary><code>def get_findall_result_v1beta_findall_runs_findall_id_result_get(findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FindAllRunResult, GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody]</code></summary>

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
result = client.find_all.with_raw_response.get_findall_result_v1beta_findall_runs_findall_id_result_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllRunResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody
```

**Async**

```python
result = await async_client.find_all.with_raw_response.get_findall_result_v1beta_findall_runs_findall_id_result_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllRunResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[FindAllRunResult](parallel/models/find_all_run_result.py), [GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody](parallel/errors/get_findall_result_v1_beta_findall_runs_findall_id_result_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FindAllRunResult](parallel/models/find_all_run_result.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetFindallResultV1BetaFindallRunsFindallIdResultGetErrorBody](parallel/errors/get_findall_result_v1_beta_findall_runs_findall_id_result_get_error.py)</code>

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
<summary><code>def get_findall_schema_v1beta_findall_runs_findall_id_schema_get(findall_id: str, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FindAllSchema, GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody]</code></summary>

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
result = client.find_all.with_raw_response.get_findall_schema_v1beta_findall_runs_findall_id_schema_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody
```

**Async**

```python
result = await async_client.find_all.with_raw_response.get_findall_schema_v1beta_findall_runs_findall_id_schema_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[FindAllSchema](parallel/models/find_all_schema.py), [GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody](parallel/errors/get_findall_schema_v1_beta_findall_runs_findall_id_schema_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FindAllSchema](parallel/models/find_all_schema.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody](parallel/errors/get_findall_schema_v1_beta_findall_runs_findall_id_schema_get_error.py)</code>

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
<summary><code>def ingest_findall_run_v1beta_findall_ingest_post(body: IngestInput | IngestInputDict, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FindAllSchema, IngestFindallRunV1BetaFindallIngestPostErrorBody]</code></summary>

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
result = client.find_all.with_raw_response.ingest_findall_run_v1beta_findall_ingest_post(
    IngestInput(objective="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IngestFindallRunV1BetaFindallIngestPostErrorBody
```

**Async**

```python
result = await async_client.find_all.with_raw_response.ingest_findall_run_v1beta_findall_ingest_post(
    IngestInput(objective="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FindAllSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IngestFindallRunV1BetaFindallIngestPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[FindAllSchema](parallel/models/find_all_schema.py), [IngestFindallRunV1BetaFindallIngestPostErrorBody](parallel/errors/ingest_findall_run_v1_beta_findall_ingest_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FindAllSchema](parallel/models/find_all_schema.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[IngestFindallRunV1BetaFindallIngestPostErrorBody](parallel/errors/ingest_findall_run_v1_beta_findall_ingest_post_error.py)</code>

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
<summary><code>def clear_memory_v1beta_memory_clear_post(body: MemoryClearRequest | MemoryClearRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ClearMemoryV1BetaMemoryClearPostErrorBody]</code></summary>

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
result = client.memory.with_raw_response.clear_memory_v1beta_memory_clear_post(MemoryClearRequest())
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClearMemoryV1BetaMemoryClearPostErrorBody
```

**Async**

```python
result = await async_client.memory.with_raw_response.clear_memory_v1beta_memory_clear_post(MemoryClearRequest())
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClearMemoryV1BetaMemoryClearPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;None, [ClearMemoryV1BetaMemoryClearPostErrorBody](parallel/errors/clear_memory_v1_beta_memory_clear_post_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ClearMemoryV1BetaMemoryClearPostErrorBody](parallel/errors/clear_memory_v1_beta_memory_clear_post_error.py)</code>

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
<summary><code>def evict_memory_source_v1beta_memory_evict_post(body: MemoryEvictRequest | MemoryEvictRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, EvictMemorySourceV1BetaMemoryEvictPostErrorBody]</code></summary>

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
result = client.memory.with_raw_response.evict_memory_source_v1beta_memory_evict_post(
    MemoryEvictRequest(kind=Kind3.TASK, id="some example string")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EvictMemorySourceV1BetaMemoryEvictPostErrorBody
```

**Async**

```python
result = await async_client.memory.with_raw_response.evict_memory_source_v1beta_memory_evict_post(
    MemoryEvictRequest(kind=Kind3.TASK, id="some example string")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EvictMemorySourceV1BetaMemoryEvictPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;None, [EvictMemorySourceV1BetaMemoryEvictPostErrorBody](parallel/errors/evict_memory_source_v1_beta_memory_evict_post_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[EvictMemorySourceV1BetaMemoryEvictPostErrorBody](parallel/errors/evict_memory_source_v1_beta_memory_evict_post_error.py)</code>

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
<summary><code>def retrieve_memory_v1beta_memory_retrieve_post(body: MemoryRetrieveRequest | MemoryRetrieveRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MemoryRetrieveResponse, RetrieveMemoryV1BetaMemoryRetrievePostErrorBody]</code></summary>

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
result = client.memory.with_raw_response.retrieve_memory_v1beta_memory_retrieve_post(MemoryRetrieveRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MemoryRetrieveResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetrieveMemoryV1BetaMemoryRetrievePostErrorBody
```

**Async**

```python
result = await async_client.memory.with_raw_response.retrieve_memory_v1beta_memory_retrieve_post(
    MemoryRetrieveRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MemoryRetrieveResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetrieveMemoryV1BetaMemoryRetrievePostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[MemoryRetrieveResponse](parallel/models/memory_retrieve_response.py), [RetrieveMemoryV1BetaMemoryRetrievePostErrorBody](parallel/errors/retrieve_memory_v1_beta_memory_retrieve_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MemoryRetrieveResponse](parallel/models/memory_retrieve_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RetrieveMemoryV1BetaMemoryRetrievePostErrorBody](parallel/errors/retrieve_memory_v1_beta_memory_retrieve_post_error.py)</code>

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
<summary><code>def cancel_monitor_v1_monitors_monitor_id_cancel_post(monitor_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MonitorResponse, CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody]</code></summary>

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
result = client.monitor.with_raw_response.cancel_monitor_v1_monitors_monitor_id_cancel_post("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody
```

**Async**

```python
result = await async_client.monitor.with_raw_response.cancel_monitor_v1_monitors_monitor_id_cancel_post(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[MonitorResponse](parallel/models/monitor_response.py), [CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody](parallel/errors/cancel_monitor_v1_monitors_monitor_id_cancel_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MonitorResponse](parallel/models/monitor_response.py)</code> -- Monitor cancelled successfully.

**On `Failure`**: `error` is <code>[CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody](parallel/errors/cancel_monitor_v1_monitors_monitor_id_cancel_post_error.py)</code>

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
<summary><code>def create_monitor_v1_monitors_post(body: CreateMonitorRequest | CreateMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MonitorResponse, CreateMonitorV1MonitorsPostErrorBody]</code></summary>

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
result = client.monitor.with_raw_response.create_monitor_v1_monitors_post(
    CreateMonitorRequest(
        type_=Type2ParallelAiMonitorApi.EVENT_STREAM,
        frequency="some example string",
        settings=MonitorEventStreamSettings(query="some example string"),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateMonitorV1MonitorsPostErrorBody
```

**Async**

```python
result = await async_client.monitor.with_raw_response.create_monitor_v1_monitors_post(
    CreateMonitorRequest(
        type_=Type2ParallelAiMonitorApi.EVENT_STREAM,
        frequency="some example string",
        settings=MonitorEventStreamSettings(query="some example string"),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateMonitorV1MonitorsPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[MonitorResponse](parallel/models/monitor_response.py), [CreateMonitorV1MonitorsPostErrorBody](parallel/errors/create_monitor_v1_monitors_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MonitorResponse](parallel/models/monitor_response.py)</code> -- Monitor created successfully.

**On `Failure`**: `error` is <code>[CreateMonitorV1MonitorsPostErrorBody](parallel/errors/create_monitor_v1_monitors_post_error.py)</code>

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
<summary><code>def list_monitor_events_v1_monitors_monitor_id_events_get(monitor_id: str, *, event_group_id: str | None = None, cursor: str | None = None, limit: int | None = None, include_completions: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaginatedMonitorEvents, ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody]</code></summary>

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
result = client.monitor.with_raw_response.list_monitor_events_v1_monitors_monitor_id_events_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedMonitorEvents
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody
```

**Async**

```python
result = await async_client.monitor.with_raw_response.list_monitor_events_v1_monitors_monitor_id_events_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedMonitorEvents
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[PaginatedMonitorEvents](parallel/models/paginated_monitor_events.py), [ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody](parallel/errors/list_monitor_events_v1_monitors_monitor_id_events_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaginatedMonitorEvents](parallel/models/paginated_monitor_events.py)</code> -- Monitor events retrieved successfully.

**On `Failure`**: `error` is <code>[ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody](parallel/errors/list_monitor_events_v1_monitors_monitor_id_events_get_error.py)</code>

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
<summary><code>def list_monitors_v1_monitors_get(*, cursor: str | None = None, limit: int | None = None, type_: list[Type4OrStr] | None = None, status: list[Status1OrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaginatedMonitorResponse, ListMonitorsV1MonitorsGetErrorBody]</code></summary>

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
result = client.monitor.with_raw_response.list_monitors_v1_monitors_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedMonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMonitorsV1MonitorsGetErrorBody
```

**Async**

```python
result = await async_client.monitor.with_raw_response.list_monitors_v1_monitors_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedMonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMonitorsV1MonitorsGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[PaginatedMonitorResponse](parallel/models/paginated_monitor_response.py), [ListMonitorsV1MonitorsGetErrorBody](parallel/errors/list_monitors_v1_monitors_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaginatedMonitorResponse](parallel/models/paginated_monitor_response.py)</code> -- Paginated list of monitors.

**On `Failure`**: `error` is <code>[ListMonitorsV1MonitorsGetErrorBody](parallel/errors/list_monitors_v1_monitors_get_error.py)</code>

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
<summary><code>def retrieve_monitor_v1_monitors_monitor_id_get(monitor_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MonitorResponse, RetrieveMonitorV1MonitorsMonitorIdGetErrorBody]</code></summary>

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
result = client.monitor.with_raw_response.retrieve_monitor_v1_monitors_monitor_id_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetrieveMonitorV1MonitorsMonitorIdGetErrorBody
```

**Async**

```python
result = await async_client.monitor.with_raw_response.retrieve_monitor_v1_monitors_monitor_id_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetrieveMonitorV1MonitorsMonitorIdGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[MonitorResponse](parallel/models/monitor_response.py), [RetrieveMonitorV1MonitorsMonitorIdGetErrorBody](parallel/errors/retrieve_monitor_v1_monitors_monitor_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MonitorResponse](parallel/models/monitor_response.py)</code> -- Monitor retrieved successfully.

**On `Failure`**: `error` is <code>[RetrieveMonitorV1MonitorsMonitorIdGetErrorBody](parallel/errors/retrieve_monitor_v1_monitors_monitor_id_get_error.py)</code>

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
<summary><code>def trigger_monitor_run_v1_monitors_monitor_id_trigger_post(monitor_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody]</code></summary>

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
result = client.monitor.with_raw_response.trigger_monitor_run_v1_monitors_monitor_id_trigger_post("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody
```

**Async**

```python
result = await async_client.monitor.with_raw_response.trigger_monitor_run_v1_monitors_monitor_id_trigger_post(
    "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;None, [TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody](parallel/errors/trigger_monitor_run_v1_monitors_monitor_id_trigger_post_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody](parallel/errors/trigger_monitor_run_v1_monitors_monitor_id_trigger_post_error.py)</code>

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
<summary><code>def update_monitor_v1_monitors_monitor_id_update_post(monitor_id: str, body: UpdateMonitorRequest | UpdateMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MonitorResponse, UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody]</code></summary>

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
result = client.monitor.with_raw_response.update_monitor_v1_monitors_monitor_id_update_post(
    "some example string", UpdateMonitorRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody
```

**Async**

```python
result = await async_client.monitor.with_raw_response.update_monitor_v1_monitors_monitor_id_update_post(
    "some example string", UpdateMonitorRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[MonitorResponse](parallel/models/monitor_response.py), [UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody](parallel/errors/update_monitor_v1_monitors_monitor_id_update_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MonitorResponse](parallel/models/monitor_response.py)</code> -- Monitor updated successfully.

**On `Failure`**: `error` is <code>[UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody](parallel/errors/update_monitor_v1_monitors_monitor_id_update_post_error.py)</code>

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
<summary><code>def create_response_v1_responses_post(body: ResponseCreateRequest | ResponseCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Response, CreateResponseV1ResponsesPostErrorBody]</code></summary>

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
result = client.responses_api.with_raw_response.create_response_v1_responses_post(
    ResponseCreateRequest(model="some example string", input="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Response
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateResponseV1ResponsesPostErrorBody
```

**Async**

```python
result = await async_client.responses_api.with_raw_response.create_response_v1_responses_post(
    ResponseCreateRequest(model="some example string", input="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Response
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateResponseV1ResponsesPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[Response](parallel/models/response.py), [CreateResponseV1ResponsesPostErrorBody](parallel/errors/create_response_v1_responses_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Response](parallel/models/response.py)</code> -- Returns a Response object for non-streaming requests (application/json), or a stream of OpenAI Responses streaming events (text/event-stream) when `stream=true` is set in the request.

**On `Failure`**: `error` is <code>[CreateResponseV1ResponsesPostErrorBody](parallel/errors/create_response_v1_responses_post_error.py)</code>

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
<summary><code>def v1_search_v1_search_post(body: V1SearchRequest | V1SearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SearchResponse, V1SearchV1SearchPostErrorBody]</code></summary>

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
result = client.search.with_raw_response.v1_search_v1_search_post(
    V1SearchRequest(search_queries=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type V1SearchV1SearchPostErrorBody
```

**Async**

```python
result = await async_client.search.with_raw_response.v1_search_v1_search_post(
    V1SearchRequest(search_queries=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type V1SearchV1SearchPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[V1SearchResponse](parallel/models/v1_search_response.py), [V1SearchV1SearchPostErrorBody](parallel/errors/v1_search_v1_search_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SearchResponse](parallel/models/v1_search_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[V1SearchV1SearchPostErrorBody](parallel/errors/v1_search_v1_search_post_error.py)</code>

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
<summary><code>def tasks_runs_events_get_v1_tasks_runs_run_id_events_get(run_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventStream[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet], TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody]</code></summary>

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
result = client.tasks.with_raw_response.tasks_runs_events_get_v1_tasks_runs_run_id_events_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventStream[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.tasks_runs_events_get_v1_tasks_runs_run_id_events_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncEventStream[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;EventStream&#91;[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet](parallel/models/unions/response200_tasks_runs_events_get_v1_tasks_runs_run_id_events_get.py)&#93;, [TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody](parallel/errors/tasks_runs_events_get_v1_tasks_runs_run_id_events_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>EventStream&#91;[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet](parallel/models/unions/response200_tasks_runs_events_get_v1_tasks_runs_run_id_events_get.py)&#93;</code>, its body not yet read -- Successful Response

**On `Failure`**: `error` is <code>[TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody](parallel/errors/tasks_runs_events_get_v1_tasks_runs_run_id_events_get_error.py)</code>

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
<summary><code>def tasks_runs_events_get_v1beta_tasks_runs_run_id_events_get(run_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventStream[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet], TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetErrorBody]</code></summary>

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
result = client.tasks.with_raw_response.tasks_runs_events_get_v1beta_tasks_runs_run_id_events_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventStream[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.tasks_runs_events_get_v1beta_tasks_runs_run_id_events_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        # TODO: Handle 'payload' of type AsyncEventStream[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet]
        ...
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;EventStream&#91;[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet](parallel/models/unions/response200_tasks_runs_events_get_v1_beta_tasks_runs_run_id_events_get.py)&#93;, [TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetErrorBody](parallel/errors/tasks_runs_events_get_v1_beta_tasks_runs_run_id_events_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>EventStream&#91;[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet](parallel/models/unions/response200_tasks_runs_events_get_v1_beta_tasks_runs_run_id_events_get.py)&#93;</code>, its body not yet read -- Successful Response

**On `Failure`**: `error` is <code>[TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetErrorBody](parallel/errors/tasks_runs_events_get_v1_beta_tasks_runs_run_id_events_get_error.py)</code>

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
<summary><code>def tasks_runs_get_v1_tasks_runs_run_id_get(run_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TaskRun, TasksRunsGetV1TasksRunsRunIdGetErrorBody]</code></summary>

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
result = client.tasks.with_raw_response.tasks_runs_get_v1_tasks_runs_run_id_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskRun
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksRunsGetV1TasksRunsRunIdGetErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.tasks_runs_get_v1_tasks_runs_run_id_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskRun
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksRunsGetV1TasksRunsRunIdGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[TaskRun](parallel/models/task_run.py), [TasksRunsGetV1TasksRunsRunIdGetErrorBody](parallel/errors/tasks_runs_get_v1_tasks_runs_run_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TaskRun](parallel/models/task_run.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TasksRunsGetV1TasksRunsRunIdGetErrorBody](parallel/errors/tasks_runs_get_v1_tasks_runs_run_id_get_error.py)</code>

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
<summary><code>def tasks_runs_input_get_v1_tasks_runs_run_id_input_get(run_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TaskRunInput, TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody]</code></summary>

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
result = client.tasks.with_raw_response.tasks_runs_input_get_v1_tasks_runs_run_id_input_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskRunInput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.tasks_runs_input_get_v1_tasks_runs_run_id_input_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskRunInput
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[TaskRunInput](parallel/models/task_run_input.py), [TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody](parallel/errors/tasks_runs_input_get_v1_tasks_runs_run_id_input_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TaskRunInput](parallel/models/task_run_input.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody](parallel/errors/tasks_runs_input_get_v1_tasks_runs_run_id_input_get_error.py)</code>

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
<summary><code>def tasks_runs_post_v1_tasks_runs_post(body: TaskRunInput | TaskRunInputDict, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TaskRun, TasksRunsPostV1TasksRunsPostErrorBody]</code></summary>

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
result = client.tasks.with_raw_response.tasks_runs_post_v1_tasks_runs_post(
    TaskRunInput(processor="some example string", input="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskRun
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksRunsPostV1TasksRunsPostErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.tasks_runs_post_v1_tasks_runs_post(
    TaskRunInput(processor="some example string", input="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskRun
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksRunsPostV1TasksRunsPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[TaskRun](parallel/models/task_run.py), [TasksRunsPostV1TasksRunsPostErrorBody](parallel/errors/tasks_runs_post_v1_tasks_runs_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TaskRun](parallel/models/task_run.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TasksRunsPostV1TasksRunsPostErrorBody](parallel/errors/tasks_runs_post_v1_tasks_runs_post_error.py)</code>

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
<summary><code>def tasks_runs_result_get_v1_tasks_runs_run_id_result_get(run_id: str, *, timeout: int | None = 600, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TaskRunResult, TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody]</code></summary>

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
result = client.tasks.with_raw_response.tasks_runs_result_get_v1_tasks_runs_run_id_result_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskRunResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.tasks_runs_result_get_v1_tasks_runs_run_id_result_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskRunResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[TaskRunResult](parallel/models/task_run_result.py), [TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody](parallel/errors/tasks_runs_result_get_v1_tasks_runs_run_id_result_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TaskRunResult](parallel/models/task_run_result.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody](parallel/errors/tasks_runs_result_get_v1_tasks_runs_run_id_result_get_error.py)</code>

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
<summary><code>def tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get(taskgroup_id: str, *, last_event_id: str | None = None, timeout: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventStream[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet], TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody]</code></summary>

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
result = client.tasks.with_raw_response.tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        # TODO: Handle 'payload' of type EventStream[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet]
        ...
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        # TODO: Handle 'payload' of type
        # AsyncEventStream[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet]
        ...
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;EventStream&#91;[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet](parallel/models/unions/response200_tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get.py)&#93;, [TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody](parallel/errors/tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>EventStream&#91;[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet](parallel/models/unions/response200_tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get.py)&#93;</code>, its body not yet read -- Successful Response

**On `Failure`**: `error` is <code>[TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody](parallel/errors/tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get_error.py)</code>

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
<summary><code>def tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get(taskgroup_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TaskGroupResponse, TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody]</code></summary>

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
result = client.tasks.with_raw_response.tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskGroupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskGroupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[TaskGroupResponse](parallel/models/task_group_response.py), [TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody](parallel/errors/tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TaskGroupResponse](parallel/models/task_group_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody](parallel/errors/tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get_error.py)</code>

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
<summary><code>def tasks_taskgroups_post_v1_tasks_groups_post(body: CreateTaskGroupRequest | CreateTaskGroupRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TaskGroupResponse, TasksTaskgroupsPostV1TasksGroupsPostErrorBody]</code></summary>

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
result = client.tasks.with_raw_response.tasks_taskgroups_post_v1_tasks_groups_post(CreateTaskGroupRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskGroupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksTaskgroupsPostV1TasksGroupsPostErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.tasks_taskgroups_post_v1_tasks_groups_post(CreateTaskGroupRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskGroupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksTaskgroupsPostV1TasksGroupsPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[TaskGroupResponse](parallel/models/task_group_response.py), [TasksTaskgroupsPostV1TasksGroupsPostErrorBody](parallel/errors/tasks_taskgroups_post_v1_tasks_groups_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TaskGroupResponse](parallel/models/task_group_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TasksTaskgroupsPostV1TasksGroupsPostErrorBody](parallel/errors/tasks_taskgroups_post_v1_tasks_groups_post_error.py)</code>

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
<summary><code>def tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get(taskgroup_id: str, *, last_event_id: str | None = None, status: Status1ParallelAiTasksApiOrStr | None = None, include_input: bool | None = False, include_output: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventStream[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet], TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody]</code></summary>

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
result = client.tasks.with_raw_response.tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        # TODO: Handle 'payload' of type EventStream[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet]
        ...
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        # TODO: Handle 'payload' of type
        # AsyncEventStream[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet]
        ...
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;EventStream&#91;[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet](parallel/models/unions/response200_tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get.py)&#93;, [TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody](parallel/errors/tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>EventStream&#91;[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet](parallel/models/unions/response200_tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get.py)&#93;</code>, its body not yet read -- Successful Response

**On `Failure`**: `error` is <code>[TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody](parallel/errors/tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get_error.py)</code>

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
<summary><code>def tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get(taskgroup_id: str, run_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TaskRun, TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody]</code></summary>

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
result = client.tasks.with_raw_response.tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskRun
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskRun
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[TaskRun](parallel/models/task_run.py), [TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody](parallel/errors/tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TaskRun](parallel/models/task_run.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody](parallel/errors/tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get_error.py)</code>

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
<summary><code>def tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post(taskgroup_id: str, body: TaskGroupRunRequest | TaskGroupRunRequestDict, *, refresh_status: bool | None = True, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TaskGroupRunResponse, TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody]</code></summary>

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
result = client.tasks.with_raw_response.tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post(
    "some example string",
    TaskGroupRunRequest(inputs=[TaskRunInput(processor="some example string", input="some example string")]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskGroupRunResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post(
    "some example string",
    TaskGroupRunRequest(inputs=[TaskRunInput(processor="some example string", input="some example string")]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskGroupRunResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody
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

**Returns**: <code>[ApiResult](parallel/core/results.py)&#91;[TaskGroupRunResponse](parallel/models/task_group_run_response.py), [TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody](parallel/errors/tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TaskGroupRunResponse](parallel/models/task_group_run_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody](parallel/errors/tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post_error.py)</code>

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

