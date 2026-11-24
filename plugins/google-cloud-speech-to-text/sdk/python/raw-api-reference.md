# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [GoogleCloudSpeechToTextClient](google_cloud_speech_to_text/client.py)

## Operations

> Source: [Operations](google_cloud_speech_to_text/apis/operations.py)

<details>
<summary><code>def speech_operations_get(operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, SpeechOperationsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.speech_operations_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechOperationsGetErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.speech_operations_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechOperationsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>operations_id</code> | <code>str</code> | Resource name segment (operationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_speech_to_text/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_speech_to_text/core/results.py)&#91;[Operation](google_cloud_speech_to_text/models/operation.py), [SpeechOperationsGetErrorBody](google_cloud_speech_to_text/errors/speech_operations_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_speech_to_text/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SpeechOperationsGetErrorBody](google_cloud_speech_to_text/errors/speech_operations_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_speech_to_text/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_speech_to_text/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def speech_operations_list(*, filter_: str | None = None, name: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListOperationsResponse, SpeechOperationsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.speech_operations_list()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechOperationsListErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.speech_operations_list()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechOperationsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | The standard list filter.<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | The name of the operation's parent resource.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The standard list page size.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | The standard list page token.<br>**Default**: <code>None</code> |
| <code>return_partial_success</code> | <code>bool \| None</code> | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_speech_to_text/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_speech_to_text/core/results.py)&#91;[ListOperationsResponse](google_cloud_speech_to_text/models/list_operations_response.py), [SpeechOperationsListErrorBody](google_cloud_speech_to_text/errors/speech_operations_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListOperationsResponse](google_cloud_speech_to_text/models/list_operations_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SpeechOperationsListErrorBody](google_cloud_speech_to_text/errors/speech_operations_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_speech_to_text/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_speech_to_text/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](google_cloud_speech_to_text/apis/projects.py)

<details>
<summary><code>def speech_projects_locations_custom_classes_create(projects_id: str, locations_id: str, body: CreateCustomClassRequest | CreateCustomClassRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomClass, SpeechProjectsLocationsCustomClassesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a custom class.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.speech_projects_locations_custom_classes_create(
    "some example string", "some example string", CreateCustomClassRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomClass
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsCustomClassesCreateErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.speech_projects_locations_custom_classes_create(
    "some example string", "some example string", CreateCustomClassRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomClass
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsCustomClassesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[CreateCustomClassRequest](google_cloud_speech_to_text/models/create_custom_class_request.py) \| [CreateCustomClassRequestDict](google_cloud_speech_to_text/models/create_custom_class_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_speech_to_text/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_speech_to_text/core/results.py)&#91;[CustomClass](google_cloud_speech_to_text/models/custom_class.py), [SpeechProjectsLocationsCustomClassesCreateErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomClass](google_cloud_speech_to_text/models/custom_class.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SpeechProjectsLocationsCustomClassesCreateErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_speech_to_text/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_speech_to_text/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def speech_projects_locations_custom_classes_delete(projects_id: str, locations_id: str, custom_classes_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, SpeechProjectsLocationsCustomClassesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a custom class.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.speech_projects_locations_custom_classes_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsCustomClassesDeleteErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.speech_projects_locations_custom_classes_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsCustomClassesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>custom_classes_id</code> | <code>str</code> | Resource name segment (customClassesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_speech_to_text/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_speech_to_text/core/results.py)&#91;Any, [SpeechProjectsLocationsCustomClassesDeleteErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[SpeechProjectsLocationsCustomClassesDeleteErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_speech_to_text/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_speech_to_text/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def speech_projects_locations_custom_classes_get(projects_id: str, locations_id: str, custom_classes_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomClass, SpeechProjectsLocationsCustomClassesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a custom class.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.speech_projects_locations_custom_classes_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomClass
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsCustomClassesGetErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.speech_projects_locations_custom_classes_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomClass
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsCustomClassesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>custom_classes_id</code> | <code>str</code> | Resource name segment (customClassesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_speech_to_text/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_speech_to_text/core/results.py)&#91;[CustomClass](google_cloud_speech_to_text/models/custom_class.py), [SpeechProjectsLocationsCustomClassesGetErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomClass](google_cloud_speech_to_text/models/custom_class.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SpeechProjectsLocationsCustomClassesGetErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_speech_to_text/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_speech_to_text/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def speech_projects_locations_custom_classes_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListCustomClassesResponse, SpeechProjectsLocationsCustomClassesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List custom classes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.speech_projects_locations_custom_classes_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListCustomClassesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsCustomClassesListErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.speech_projects_locations_custom_classes_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListCustomClassesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsCustomClassesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>page_size</code> | <code>int \| None</code> | The maximum number of custom classes to return. The service may return fewer than this value. If unspecified, at most 50 custom classes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | A page token, received from a previous `ListCustomClass` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomClass` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_speech_to_text/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_speech_to_text/core/results.py)&#91;[ListCustomClassesResponse](google_cloud_speech_to_text/models/list_custom_classes_response.py), [SpeechProjectsLocationsCustomClassesListErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListCustomClassesResponse](google_cloud_speech_to_text/models/list_custom_classes_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SpeechProjectsLocationsCustomClassesListErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_speech_to_text/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_speech_to_text/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def speech_projects_locations_custom_classes_patch(projects_id: str, locations_id: str, custom_classes_id: str, body: CustomClass | CustomClassDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomClass, SpeechProjectsLocationsCustomClassesPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a custom class.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.speech_projects_locations_custom_classes_patch(
    "some example string", "some example string", "some example string", CustomClass()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomClass
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsCustomClassesPatchErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.speech_projects_locations_custom_classes_patch(
    "some example string", "some example string", "some example string", CustomClass()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomClass
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsCustomClassesPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>custom_classes_id</code> | <code>str</code> | Resource name segment (customClassesId). |
| <code>body</code> | <code>[CustomClass](google_cloud_speech_to_text/models/custom_class.py) \| [CustomClassDict](google_cloud_speech_to_text/models/custom_class.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | The list of fields to be updated.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_speech_to_text/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_speech_to_text/core/results.py)&#91;[CustomClass](google_cloud_speech_to_text/models/custom_class.py), [SpeechProjectsLocationsCustomClassesPatchErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomClass](google_cloud_speech_to_text/models/custom_class.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SpeechProjectsLocationsCustomClassesPatchErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_speech_to_text/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_speech_to_text/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def speech_projects_locations_phrase_sets_create(projects_id: str, locations_id: str, body: CreatePhraseSetRequest | CreatePhraseSetRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PhraseSet, SpeechProjectsLocationsPhraseSetsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.speech_projects_locations_phrase_sets_create(
    "some example string", "some example string", CreatePhraseSetRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PhraseSet
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsPhraseSetsCreateErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.speech_projects_locations_phrase_sets_create(
    "some example string", "some example string", CreatePhraseSetRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PhraseSet
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsPhraseSetsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[CreatePhraseSetRequest](google_cloud_speech_to_text/models/create_phrase_set_request.py) \| [CreatePhraseSetRequestDict](google_cloud_speech_to_text/models/create_phrase_set_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_speech_to_text/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_speech_to_text/core/results.py)&#91;[PhraseSet](google_cloud_speech_to_text/models/phrase_set.py), [SpeechProjectsLocationsPhraseSetsCreateErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PhraseSet](google_cloud_speech_to_text/models/phrase_set.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SpeechProjectsLocationsPhraseSetsCreateErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_speech_to_text/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_speech_to_text/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def speech_projects_locations_phrase_sets_delete(projects_id: str, locations_id: str, phrase_sets_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, SpeechProjectsLocationsPhraseSetsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a phrase set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.speech_projects_locations_phrase_sets_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsPhraseSetsDeleteErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.speech_projects_locations_phrase_sets_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsPhraseSetsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>phrase_sets_id</code> | <code>str</code> | Resource name segment (phraseSetsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_speech_to_text/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_speech_to_text/core/results.py)&#91;Any, [SpeechProjectsLocationsPhraseSetsDeleteErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[SpeechProjectsLocationsPhraseSetsDeleteErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_speech_to_text/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_speech_to_text/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def speech_projects_locations_phrase_sets_get(projects_id: str, locations_id: str, phrase_sets_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PhraseSet, SpeechProjectsLocationsPhraseSetsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a phrase set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.speech_projects_locations_phrase_sets_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PhraseSet
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsPhraseSetsGetErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.speech_projects_locations_phrase_sets_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PhraseSet
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsPhraseSetsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>phrase_sets_id</code> | <code>str</code> | Resource name segment (phraseSetsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_speech_to_text/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_speech_to_text/core/results.py)&#91;[PhraseSet](google_cloud_speech_to_text/models/phrase_set.py), [SpeechProjectsLocationsPhraseSetsGetErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PhraseSet](google_cloud_speech_to_text/models/phrase_set.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SpeechProjectsLocationsPhraseSetsGetErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_speech_to_text/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_speech_to_text/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def speech_projects_locations_phrase_sets_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListPhraseSetResponse, SpeechProjectsLocationsPhraseSetsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List phrase sets.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.speech_projects_locations_phrase_sets_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListPhraseSetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsPhraseSetsListErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.speech_projects_locations_phrase_sets_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListPhraseSetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsPhraseSetsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>page_size</code> | <code>int \| None</code> | The maximum number of phrase sets to return. The service may return fewer than this value. If unspecified, at most 50 phrase sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | A page token, received from a previous `ListPhraseSet` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPhraseSet` must match the call that provided the page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_speech_to_text/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_speech_to_text/core/results.py)&#91;[ListPhraseSetResponse](google_cloud_speech_to_text/models/list_phrase_set_response.py), [SpeechProjectsLocationsPhraseSetsListErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListPhraseSetResponse](google_cloud_speech_to_text/models/list_phrase_set_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SpeechProjectsLocationsPhraseSetsListErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_speech_to_text/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_speech_to_text/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def speech_projects_locations_phrase_sets_patch(projects_id: str, locations_id: str, phrase_sets_id: str, body: PhraseSet | PhraseSetDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PhraseSet, SpeechProjectsLocationsPhraseSetsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a phrase set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.speech_projects_locations_phrase_sets_patch(
    "some example string", "some example string", "some example string", PhraseSet()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PhraseSet
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsPhraseSetsPatchErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.speech_projects_locations_phrase_sets_patch(
    "some example string", "some example string", "some example string", PhraseSet()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PhraseSet
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechProjectsLocationsPhraseSetsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>locations_id</code> | <code>str</code> | Resource name segment (locationsId). |
| <code>phrase_sets_id</code> | <code>str</code> | Resource name segment (phraseSetsId). |
| <code>body</code> | <code>[PhraseSet](google_cloud_speech_to_text/models/phrase_set.py) \| [PhraseSetDict](google_cloud_speech_to_text/models/phrase_set.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | The list of fields to be updated.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_speech_to_text/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_speech_to_text/core/results.py)&#91;[PhraseSet](google_cloud_speech_to_text/models/phrase_set.py), [SpeechProjectsLocationsPhraseSetsPatchErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PhraseSet](google_cloud_speech_to_text/models/phrase_set.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SpeechProjectsLocationsPhraseSetsPatchErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_speech_to_text/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_speech_to_text/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Speech

> Source: [Speech](google_cloud_speech_to_text/apis/speech.py)

<details>
<summary><code>def speech_speech_longrunningrecognize(body: LongRunningRecognizeRequest | LongRunningRecognizeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, SpeechSpeechLongrunningrecognizeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the how-to.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.speech.with_raw_response.speech_speech_longrunningrecognize(LongRunningRecognizeRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechSpeechLongrunningrecognizeErrorBody
```

**Async**

```python
result = await async_client.speech.with_raw_response.speech_speech_longrunningrecognize(LongRunningRecognizeRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechSpeechLongrunningrecognizeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LongRunningRecognizeRequest](google_cloud_speech_to_text/models/long_running_recognize_request.py) \| [LongRunningRecognizeRequestDict](google_cloud_speech_to_text/models/long_running_recognize_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_speech_to_text/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_speech_to_text/core/results.py)&#91;[Operation](google_cloud_speech_to_text/models/operation.py), [SpeechSpeechLongrunningrecognizeErrorBody](google_cloud_speech_to_text/errors/speech_speech_longrunningrecognize_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_speech_to_text/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SpeechSpeechLongrunningrecognizeErrorBody](google_cloud_speech_to_text/errors/speech_speech_longrunningrecognize_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_speech_to_text/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_speech_to_text/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def speech_speech_recognize(body: RecognizeRequest | RecognizeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RecognizeResponse, SpeechSpeechRecognizeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Performs synchronous speech recognition: receive results after all audio has been sent and processed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.speech.with_raw_response.speech_speech_recognize(RecognizeRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecognizeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechSpeechRecognizeErrorBody
```

**Async**

```python
result = await async_client.speech.with_raw_response.speech_speech_recognize(RecognizeRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecognizeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpeechSpeechRecognizeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RecognizeRequest](google_cloud_speech_to_text/models/recognize_request.py) \| [RecognizeRequestDict](google_cloud_speech_to_text/models/recognize_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_speech_to_text/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_speech_to_text/core/results.py)&#91;[RecognizeResponse](google_cloud_speech_to_text/models/recognize_response.py), [SpeechSpeechRecognizeErrorBody](google_cloud_speech_to_text/errors/speech_speech_recognize_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RecognizeResponse](google_cloud_speech_to_text/models/recognize_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SpeechSpeechRecognizeErrorBody](google_cloud_speech_to_text/errors/speech_speech_recognize_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_speech_to_text/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_speech_to_text/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

