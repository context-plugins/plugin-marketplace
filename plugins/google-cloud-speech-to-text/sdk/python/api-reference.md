# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [GoogleCloudSpeechToTextClient](google_cloud_speech_to_text/client.py)

## Operations

> Source: [Operations](google_cloud_speech_to_text/apis/operations.py)

<details>
<summary><code>def speech_operations_get(operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.operations.speech_operations_get("some example string")
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechOperationsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.speech_operations_get("some example string")
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechOperationsGetErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_speech_to_text/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_speech_to_text/core/exceptions.py)&#91;[SpeechOperationsGetErrorBody](google_cloud_speech_to_text/errors/speech_operations_get_error.py)&#93;</code>

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
<summary><code>def speech_operations_list(*, filter_: str | None = None, name: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ListOperationsResponse</code></summary>

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
try:
    response = client.operations.speech_operations_list()
    # TODO: Handle 'response' of type ListOperationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechOperationsListErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.speech_operations_list()
    # TODO: Handle 'response' of type ListOperationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechOperationsListErrorBody
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

**OnSuccess**: <code>[ListOperationsResponse](google_cloud_speech_to_text/models/list_operations_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_speech_to_text/core/exceptions.py)&#91;[SpeechOperationsListErrorBody](google_cloud_speech_to_text/errors/speech_operations_list_error.py)&#93;</code>

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
<summary><code>def speech_projects_locations_custom_classes_create(projects_id: str, locations_id: str, body: CreateCustomClassRequest | CreateCustomClassRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CustomClass</code></summary>

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
try:
    response = client.projects.speech_projects_locations_custom_classes_create(
        "some example string", "some example string", CreateCustomClassRequest()
    )
    # TODO: Handle 'response' of type CustomClass
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsCustomClassesCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.speech_projects_locations_custom_classes_create(
        "some example string", "some example string", CreateCustomClassRequest()
    )
    # TODO: Handle 'response' of type CustomClass
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsCustomClassesCreateErrorBody
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

**OnSuccess**: <code>[CustomClass](google_cloud_speech_to_text/models/custom_class.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_speech_to_text/core/exceptions.py)&#91;[SpeechProjectsLocationsCustomClassesCreateErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_create_error.py)&#93;</code>

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
<summary><code>def speech_projects_locations_custom_classes_delete(projects_id: str, locations_id: str, custom_classes_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.projects.speech_projects_locations_custom_classes_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsCustomClassesDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.speech_projects_locations_custom_classes_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsCustomClassesDeleteErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_speech_to_text/core/exceptions.py)&#91;[SpeechProjectsLocationsCustomClassesDeleteErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_delete_error.py)&#93;</code>

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
<summary><code>def speech_projects_locations_custom_classes_get(projects_id: str, locations_id: str, custom_classes_id: str, *, request_options: RequestOptionsOrDict | None = None) -> CustomClass</code></summary>

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
try:
    response = client.projects.speech_projects_locations_custom_classes_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomClass
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsCustomClassesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.speech_projects_locations_custom_classes_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CustomClass
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsCustomClassesGetErrorBody
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

**OnSuccess**: <code>[CustomClass](google_cloud_speech_to_text/models/custom_class.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_speech_to_text/core/exceptions.py)&#91;[SpeechProjectsLocationsCustomClassesGetErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_get_error.py)&#93;</code>

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
<summary><code>def speech_projects_locations_custom_classes_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListCustomClassesResponse</code></summary>

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
try:
    response = client.projects.speech_projects_locations_custom_classes_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListCustomClassesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsCustomClassesListErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.speech_projects_locations_custom_classes_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListCustomClassesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsCustomClassesListErrorBody
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

**OnSuccess**: <code>[ListCustomClassesResponse](google_cloud_speech_to_text/models/list_custom_classes_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_speech_to_text/core/exceptions.py)&#91;[SpeechProjectsLocationsCustomClassesListErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_list_error.py)&#93;</code>

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
<summary><code>def speech_projects_locations_custom_classes_patch(projects_id: str, locations_id: str, custom_classes_id: str, body: CustomClass | CustomClassDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomClass</code></summary>

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
try:
    response = client.projects.speech_projects_locations_custom_classes_patch(
        "some example string", "some example string", "some example string", CustomClass()
    )
    # TODO: Handle 'response' of type CustomClass
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsCustomClassesPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.speech_projects_locations_custom_classes_patch(
        "some example string", "some example string", "some example string", CustomClass()
    )
    # TODO: Handle 'response' of type CustomClass
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsCustomClassesPatchErrorBody
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

**OnSuccess**: <code>[CustomClass](google_cloud_speech_to_text/models/custom_class.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_speech_to_text/core/exceptions.py)&#91;[SpeechProjectsLocationsCustomClassesPatchErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_patch_error.py)&#93;</code>

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
<summary><code>def speech_projects_locations_phrase_sets_create(projects_id: str, locations_id: str, body: CreatePhraseSetRequest | CreatePhraseSetRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PhraseSet</code></summary>

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
try:
    response = client.projects.speech_projects_locations_phrase_sets_create(
        "some example string", "some example string", CreatePhraseSetRequest()
    )
    # TODO: Handle 'response' of type PhraseSet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsPhraseSetsCreateErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.speech_projects_locations_phrase_sets_create(
        "some example string", "some example string", CreatePhraseSetRequest()
    )
    # TODO: Handle 'response' of type PhraseSet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsPhraseSetsCreateErrorBody
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

**OnSuccess**: <code>[PhraseSet](google_cloud_speech_to_text/models/phrase_set.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_speech_to_text/core/exceptions.py)&#91;[SpeechProjectsLocationsPhraseSetsCreateErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_create_error.py)&#93;</code>

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
<summary><code>def speech_projects_locations_phrase_sets_delete(projects_id: str, locations_id: str, phrase_sets_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.projects.speech_projects_locations_phrase_sets_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsPhraseSetsDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.speech_projects_locations_phrase_sets_delete(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsPhraseSetsDeleteErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_speech_to_text/core/exceptions.py)&#91;[SpeechProjectsLocationsPhraseSetsDeleteErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_delete_error.py)&#93;</code>

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
<summary><code>def speech_projects_locations_phrase_sets_get(projects_id: str, locations_id: str, phrase_sets_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PhraseSet</code></summary>

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
try:
    response = client.projects.speech_projects_locations_phrase_sets_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PhraseSet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsPhraseSetsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.speech_projects_locations_phrase_sets_get(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PhraseSet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsPhraseSetsGetErrorBody
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

**OnSuccess**: <code>[PhraseSet](google_cloud_speech_to_text/models/phrase_set.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_speech_to_text/core/exceptions.py)&#91;[SpeechProjectsLocationsPhraseSetsGetErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_get_error.py)&#93;</code>

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
<summary><code>def speech_projects_locations_phrase_sets_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListPhraseSetResponse</code></summary>

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
try:
    response = client.projects.speech_projects_locations_phrase_sets_list("some example string", "some example string")
    # TODO: Handle 'response' of type ListPhraseSetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsPhraseSetsListErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.speech_projects_locations_phrase_sets_list(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListPhraseSetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsPhraseSetsListErrorBody
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

**OnSuccess**: <code>[ListPhraseSetResponse](google_cloud_speech_to_text/models/list_phrase_set_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_speech_to_text/core/exceptions.py)&#91;[SpeechProjectsLocationsPhraseSetsListErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_list_error.py)&#93;</code>

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
<summary><code>def speech_projects_locations_phrase_sets_patch(projects_id: str, locations_id: str, phrase_sets_id: str, body: PhraseSet | PhraseSetDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PhraseSet</code></summary>

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
try:
    response = client.projects.speech_projects_locations_phrase_sets_patch(
        "some example string", "some example string", "some example string", PhraseSet()
    )
    # TODO: Handle 'response' of type PhraseSet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsPhraseSetsPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.speech_projects_locations_phrase_sets_patch(
        "some example string", "some example string", "some example string", PhraseSet()
    )
    # TODO: Handle 'response' of type PhraseSet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechProjectsLocationsPhraseSetsPatchErrorBody
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

**OnSuccess**: <code>[PhraseSet](google_cloud_speech_to_text/models/phrase_set.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_speech_to_text/core/exceptions.py)&#91;[SpeechProjectsLocationsPhraseSetsPatchErrorBody](google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_patch_error.py)&#93;</code>

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
<summary><code>def speech_speech_longrunningrecognize(body: LongRunningRecognizeRequest | LongRunningRecognizeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Operation</code></summary>

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
try:
    response = client.speech.speech_speech_longrunningrecognize(LongRunningRecognizeRequest())
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechSpeechLongrunningrecognizeErrorBody
```

**Async**

```python
try:
    response = await async_client.speech.speech_speech_longrunningrecognize(LongRunningRecognizeRequest())
    # TODO: Handle 'response' of type Operation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechSpeechLongrunningrecognizeErrorBody
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

**OnSuccess**: <code>[Operation](google_cloud_speech_to_text/models/operation.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_speech_to_text/core/exceptions.py)&#91;[SpeechSpeechLongrunningrecognizeErrorBody](google_cloud_speech_to_text/errors/speech_speech_longrunningrecognize_error.py)&#93;</code>

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
<summary><code>def speech_speech_recognize(body: RecognizeRequest | RecognizeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> RecognizeResponse</code></summary>

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
try:
    response = client.speech.speech_speech_recognize(RecognizeRequest())
    # TODO: Handle 'response' of type RecognizeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechSpeechRecognizeErrorBody
```

**Async**

```python
try:
    response = await async_client.speech.speech_speech_recognize(RecognizeRequest())
    # TODO: Handle 'response' of type RecognizeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpeechSpeechRecognizeErrorBody
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

**OnSuccess**: <code>[RecognizeResponse](google_cloud_speech_to_text/models/recognize_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_cloud_speech_to_text/core/exceptions.py)&#91;[SpeechSpeechRecognizeErrorBody](google_cloud_speech_to_text/errors/speech_speech_recognize_error.py)&#93;</code>

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

