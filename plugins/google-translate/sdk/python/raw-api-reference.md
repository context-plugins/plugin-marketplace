# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [GoogleTranslateClient](google_translate/client.py)

<details>
<summary><code>def translate_projects_detect_language(projects_id: str, body: DetectLanguageRequest | DetectLanguageRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DetectLanguageResponse, TranslateProjectsDetectLanguageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects the language of text within a request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_detect_language("some example string", DetectLanguageRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DetectLanguageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsDetectLanguageErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_detect_language(
    "some example string", DetectLanguageRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DetectLanguageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsDetectLanguageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>body</code> | <code>[DetectLanguageRequest](google_translate/models/detect_language_request.py) \| [DetectLanguageRequestDict](google_translate/models/detect_language_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[DetectLanguageResponse](google_translate/models/detect_language_response.py), [TranslateProjectsDetectLanguageErrorBody](google_translate/errors/translate_projects_detect_language_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DetectLanguageResponse](google_translate/models/detect_language_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsDetectLanguageErrorBody](google_translate/errors/translate_projects_detect_language_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_get_supported_languages(projects_id: str, *, display_language_code: str | None = None, model: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SupportedLanguages, TranslateProjectsGetSupportedLanguagesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of supported languages for translation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_get_supported_languages("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportedLanguages
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsGetSupportedLanguagesErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_get_supported_languages("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportedLanguages
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsGetSupportedLanguagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>display_language_code</code> | <code>str \| None</code> | Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.<br>**Default**: <code>None</code> |
| <code>model</code> | <code>str \| None</code> | Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[SupportedLanguages](google_translate/models/supported_languages.py), [TranslateProjectsGetSupportedLanguagesErrorBody](google_translate/errors/translate_projects_get_supported_languages_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SupportedLanguages](google_translate/models/supported_languages.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsGetSupportedLanguagesErrorBody](google_translate/errors/translate_projects_get_supported_languages_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, adaptive_mt_files_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListAdaptiveMtSentencesResponse, TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all AdaptiveMtSentences under a given file/dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAdaptiveMtSentencesResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type
        # TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListErrorBody
        ...
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAdaptiveMtSentencesResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type
        # TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListErrorBody
        ...
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
| <code>adaptive_mt_datasets_id</code> | <code>str</code> | Resource name segment (adaptiveMtDatasetsId). |
| <code>adaptive_mt_files_id</code> | <code>str</code> | Resource name segment (adaptiveMtFilesId). |
| <code>page_size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to `ListTranslationMemories` method. The first page is returned if `page_token` is empty or missing.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[ListAdaptiveMtSentencesResponse](google_translate/models/list_adaptive_mt_sentences_response.py), [TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListAdaptiveMtSentencesResponse](google_translate/models/list_adaptive_mt_sentences_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, adaptive_mt_files_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an AdaptiveMtFile along with its sentences.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteErrorBody
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
| <code>adaptive_mt_datasets_id</code> | <code>str</code> | Resource name segment (adaptiveMtDatasetsId). |
| <code>adaptive_mt_files_id</code> | <code>str</code> | Resource name segment (adaptiveMtFilesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;Any, [TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_get(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, adaptive_mt_files_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AdaptiveMtFile, TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets and AdaptiveMtFile

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdaptiveMtFile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdaptiveMtFile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetErrorBody
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
| <code>adaptive_mt_datasets_id</code> | <code>str</code> | Resource name segment (adaptiveMtDatasetsId). |
| <code>adaptive_mt_files_id</code> | <code>str</code> | Resource name segment (adaptiveMtFilesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[AdaptiveMtFile](google_translate/models/adaptive_mt_file.py), [TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AdaptiveMtFile](google_translate/models/adaptive_mt_file.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_list(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListAdaptiveMtFilesResponse, TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAdaptiveMtFilesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAdaptiveMtFilesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListErrorBody
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
| <code>adaptive_mt_datasets_id</code> | <code>str</code> | Resource name segment (adaptiveMtDatasetsId). |
| <code>page_size</code> | <code>int \| None</code> | Optional.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtFilesResponse.next_page_token returned from the previous call to `ListAdaptiveMtFiles` method. The first page is returned if `page_token`is empty or missing.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[ListAdaptiveMtFilesResponse](google_translate/models/list_adaptive_mt_files_response.py), [TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListAdaptiveMtFilesResponse](google_translate/models/list_adaptive_mt_files_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListAdaptiveMtSentencesResponse, TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all AdaptiveMtSentences under a given file/dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAdaptiveMtSentencesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAdaptiveMtSentencesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListErrorBody
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
| <code>adaptive_mt_datasets_id</code> | <code>str</code> | Resource name segment (adaptiveMtDatasetsId). |
| <code>page_size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to `ListTranslationMemories` method. The first page is returned if `page_token` is empty or missing.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[ListAdaptiveMtSentencesResponse](google_translate/models/list_adaptive_mt_sentences_response.py), [TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListAdaptiveMtSentencesResponse](google_translate/models/list_adaptive_mt_sentences_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_adaptive_mt_datasets_create(projects_id: str, locations_id: str, body: AdaptiveMtDataset | AdaptiveMtDatasetDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AdaptiveMtDataset, TranslateProjectsLocationsAdaptiveMtDatasetsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Adaptive MT dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_create(
    "some example string", "some example string", AdaptiveMtDataset()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdaptiveMtDataset
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_create(
    "some example string", "some example string", AdaptiveMtDataset()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdaptiveMtDataset
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsCreateErrorBody
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
| <code>body</code> | <code>[AdaptiveMtDataset](google_translate/models/adaptive_mt_dataset.py) \| [AdaptiveMtDatasetDict](google_translate/models/adaptive_mt_dataset.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[AdaptiveMtDataset](google_translate/models/adaptive_mt_dataset.py), [TranslateProjectsLocationsAdaptiveMtDatasetsCreateErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AdaptiveMtDataset](google_translate/models/adaptive_mt_dataset.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsAdaptiveMtDatasetsCreateErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_adaptive_mt_datasets_delete(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, TranslateProjectsLocationsAdaptiveMtDatasetsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Adaptive MT dataset, including all its entries and associated metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsDeleteErrorBody
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
| <code>adaptive_mt_datasets_id</code> | <code>str</code> | Resource name segment (adaptiveMtDatasetsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;Any, [TranslateProjectsLocationsAdaptiveMtDatasetsDeleteErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsAdaptiveMtDatasetsDeleteErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_adaptive_mt_datasets_get(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AdaptiveMtDataset, TranslateProjectsLocationsAdaptiveMtDatasetsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the Adaptive MT dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdaptiveMtDataset
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdaptiveMtDataset
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsGetErrorBody
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
| <code>adaptive_mt_datasets_id</code> | <code>str</code> | Resource name segment (adaptiveMtDatasetsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[AdaptiveMtDataset](google_translate/models/adaptive_mt_dataset.py), [TranslateProjectsLocationsAdaptiveMtDatasetsGetErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AdaptiveMtDataset](google_translate/models/adaptive_mt_dataset.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsAdaptiveMtDatasetsGetErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_adaptive_mt_datasets_import_adaptive_mt_file(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, body: ImportAdaptiveMtFileRequest | ImportAdaptiveMtFileRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ImportAdaptiveMtFileResponse, TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_import_adaptive_mt_file(
    "some example string", "some example string", "some example string", ImportAdaptiveMtFileRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportAdaptiveMtFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_import_adaptive_mt_file(
    "some example string", "some example string", "some example string", ImportAdaptiveMtFileRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportAdaptiveMtFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileErrorBody
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
| <code>adaptive_mt_datasets_id</code> | <code>str</code> | Resource name segment (adaptiveMtDatasetsId). |
| <code>body</code> | <code>[ImportAdaptiveMtFileRequest](google_translate/models/import_adaptive_mt_file_request.py) \| [ImportAdaptiveMtFileRequestDict](google_translate/models/import_adaptive_mt_file_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[ImportAdaptiveMtFileResponse](google_translate/models/import_adaptive_mt_file_response.py), [TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_import_adaptive_mt_file_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ImportAdaptiveMtFileResponse](google_translate/models/import_adaptive_mt_file_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_import_adaptive_mt_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_adaptive_mt_datasets_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListAdaptiveMtDatasetsResponse, TranslateProjectsLocationsAdaptiveMtDatasetsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all Adaptive MT datasets for which the caller has read permission.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAdaptiveMtDatasetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_adaptive_mt_datasets_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListAdaptiveMtDatasetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtDatasetsListErrorBody
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
| <code>filter_</code> | <code>str \| None</code> | Optional. An expression for filtering the results of the request. Filter is not supported yet.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Requested page size. The server may return fewer results than requested. If unspecified, the server picks an appropriate default.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtDatasetsResponse.next_page_token returned from the previous call to `ListAdaptiveMtDatasets` method. The first page is returned if `page_token`is empty or missing.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[ListAdaptiveMtDatasetsResponse](google_translate/models/list_adaptive_mt_datasets_response.py), [TranslateProjectsLocationsAdaptiveMtDatasetsListErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListAdaptiveMtDatasetsResponse](google_translate/models/list_adaptive_mt_datasets_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsAdaptiveMtDatasetsListErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_datasets_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_adaptive_mt_translate(projects_id: str, locations_id: str, body: AdaptiveMtTranslateRequest | AdaptiveMtTranslateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AdaptiveMtTranslateResponse, TranslateProjectsLocationsAdaptiveMtTranslateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translate text using Adaptive MT.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_adaptive_mt_translate(
    "some example string", "some example string", AdaptiveMtTranslateRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdaptiveMtTranslateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtTranslateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_adaptive_mt_translate(
    "some example string", "some example string", AdaptiveMtTranslateRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AdaptiveMtTranslateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsAdaptiveMtTranslateErrorBody
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
| <code>body</code> | <code>[AdaptiveMtTranslateRequest](google_translate/models/adaptive_mt_translate_request.py) \| [AdaptiveMtTranslateRequestDict](google_translate/models/adaptive_mt_translate_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[AdaptiveMtTranslateResponse](google_translate/models/adaptive_mt_translate_response.py), [TranslateProjectsLocationsAdaptiveMtTranslateErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_translate_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AdaptiveMtTranslateResponse](google_translate/models/adaptive_mt_translate_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsAdaptiveMtTranslateErrorBody](google_translate/errors/translate_projects_locations_adaptive_mt_translate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_batch_translate_document(projects_id: str, locations_id: str, body: BatchTranslateDocumentRequest | BatchTranslateDocumentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, TranslateProjectsLocationsBatchTranslateDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_batch_translate_document(
    "some example string", "some example string", BatchTranslateDocumentRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsBatchTranslateDocumentErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_batch_translate_document(
    "some example string", "some example string", BatchTranslateDocumentRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsBatchTranslateDocumentErrorBody
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
| <code>body</code> | <code>[BatchTranslateDocumentRequest](google_translate/models/batch_translate_document_request.py) \| [BatchTranslateDocumentRequestDict](google_translate/models/batch_translate_document_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Operation](google_translate/models/operation.py), [TranslateProjectsLocationsBatchTranslateDocumentErrorBody](google_translate/errors/translate_projects_locations_batch_translate_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_translate/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsBatchTranslateDocumentErrorBody](google_translate/errors/translate_projects_locations_batch_translate_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_batch_translate_text(projects_id: str, locations_id: str, body: BatchTranslateTextRequest | BatchTranslateTextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, TranslateProjectsLocationsBatchTranslateTextErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_batch_translate_text(
    "some example string", "some example string", BatchTranslateTextRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsBatchTranslateTextErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_batch_translate_text(
    "some example string", "some example string", BatchTranslateTextRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsBatchTranslateTextErrorBody
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
| <code>body</code> | <code>[BatchTranslateTextRequest](google_translate/models/batch_translate_text_request.py) \| [BatchTranslateTextRequestDict](google_translate/models/batch_translate_text_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Operation](google_translate/models/operation.py), [TranslateProjectsLocationsBatchTranslateTextErrorBody](google_translate/errors/translate_projects_locations_batch_translate_text_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_translate/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsBatchTranslateTextErrorBody](google_translate/errors/translate_projects_locations_batch_translate_text_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_datasets_create(projects_id: str, locations_id: str, body: Dataset | DatasetDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, TranslateProjectsLocationsDatasetsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_datasets_create(
    "some example string", "some example string", Dataset()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDatasetsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_datasets_create(
    "some example string", "some example string", Dataset()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDatasetsCreateErrorBody
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
| <code>body</code> | <code>[Dataset](google_translate/models/dataset.py) \| [DatasetDict](google_translate/models/dataset.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Operation](google_translate/models/operation.py), [TranslateProjectsLocationsDatasetsCreateErrorBody](google_translate/errors/translate_projects_locations_datasets_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_translate/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsDatasetsCreateErrorBody](google_translate/errors/translate_projects_locations_datasets_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_datasets_delete(projects_id: str, locations_id: str, datasets_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, TranslateProjectsLocationsDatasetsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a dataset and all of its contents.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_datasets_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDatasetsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_datasets_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDatasetsDeleteErrorBody
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
| <code>datasets_id</code> | <code>str</code> | Resource name segment (datasetsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Operation](google_translate/models/operation.py), [TranslateProjectsLocationsDatasetsDeleteErrorBody](google_translate/errors/translate_projects_locations_datasets_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_translate/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsDatasetsDeleteErrorBody](google_translate/errors/translate_projects_locations_datasets_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_datasets_examples_list(projects_id: str, locations_id: str, datasets_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListExamplesResponse, TranslateProjectsLocationsDatasetsExamplesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists sentence pairs in the dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_datasets_examples_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListExamplesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDatasetsExamplesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_datasets_examples_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListExamplesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDatasetsExamplesListErrorBody
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
| <code>datasets_id</code> | <code>str</code> | Resource name segment (datasetsId). |
| <code>filter_</code> | <code>str \| None</code> | Optional. An expression for filtering the examples that will be returned. Example filter: * `usage=TRAIN`<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Requested page size. The server can return fewer results than requested.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListExamples call.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[ListExamplesResponse](google_translate/models/list_examples_response.py), [TranslateProjectsLocationsDatasetsExamplesListErrorBody](google_translate/errors/translate_projects_locations_datasets_examples_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListExamplesResponse](google_translate/models/list_examples_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsDatasetsExamplesListErrorBody](google_translate/errors/translate_projects_locations_datasets_examples_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_datasets_export_data(projects_id: str, locations_id: str, datasets_id: str, body: ExportDataRequest | ExportDataRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, TranslateProjectsLocationsDatasetsExportDataErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports dataset's data to the provided output location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_datasets_export_data(
    "some example string", "some example string", "some example string", ExportDataRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDatasetsExportDataErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_datasets_export_data(
    "some example string", "some example string", "some example string", ExportDataRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDatasetsExportDataErrorBody
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
| <code>datasets_id</code> | <code>str</code> | Resource name segment (datasetsId). |
| <code>body</code> | <code>[ExportDataRequest](google_translate/models/export_data_request.py) \| [ExportDataRequestDict](google_translate/models/export_data_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Operation](google_translate/models/operation.py), [TranslateProjectsLocationsDatasetsExportDataErrorBody](google_translate/errors/translate_projects_locations_datasets_export_data_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_translate/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsDatasetsExportDataErrorBody](google_translate/errors/translate_projects_locations_datasets_export_data_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_datasets_get(projects_id: str, locations_id: str, datasets_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Dataset, TranslateProjectsLocationsDatasetsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a Dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_datasets_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Dataset
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDatasetsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_datasets_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Dataset
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDatasetsGetErrorBody
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
| <code>datasets_id</code> | <code>str</code> | Resource name segment (datasetsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Dataset](google_translate/models/dataset.py), [TranslateProjectsLocationsDatasetsGetErrorBody](google_translate/errors/translate_projects_locations_datasets_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Dataset](google_translate/models/dataset.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsDatasetsGetErrorBody](google_translate/errors/translate_projects_locations_datasets_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_datasets_import_data(projects_id: str, locations_id: str, datasets_id: str, body: ImportDataRequest | ImportDataRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, TranslateProjectsLocationsDatasetsImportDataErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Import sentence pairs into translation Dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_datasets_import_data(
    "some example string", "some example string", "some example string", ImportDataRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDatasetsImportDataErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_datasets_import_data(
    "some example string", "some example string", "some example string", ImportDataRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDatasetsImportDataErrorBody
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
| <code>datasets_id</code> | <code>str</code> | Resource name segment (datasetsId). |
| <code>body</code> | <code>[ImportDataRequest](google_translate/models/import_data_request.py) \| [ImportDataRequestDict](google_translate/models/import_data_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Operation](google_translate/models/operation.py), [TranslateProjectsLocationsDatasetsImportDataErrorBody](google_translate/errors/translate_projects_locations_datasets_import_data_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_translate/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsDatasetsImportDataErrorBody](google_translate/errors/translate_projects_locations_datasets_import_data_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_datasets_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListDatasetsResponse, TranslateProjectsLocationsDatasetsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists datasets.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_datasets_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListDatasetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDatasetsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_datasets_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListDatasetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDatasetsListErrorBody
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
| <code>page_size</code> | <code>int \| None</code> | Optional. Requested page size. The server can return fewer results than requested.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListDatasets call.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[ListDatasetsResponse](google_translate/models/list_datasets_response.py), [TranslateProjectsLocationsDatasetsListErrorBody](google_translate/errors/translate_projects_locations_datasets_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListDatasetsResponse](google_translate/models/list_datasets_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsDatasetsListErrorBody](google_translate/errors/translate_projects_locations_datasets_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_detect_language(projects_id: str, locations_id: str, body: DetectLanguageRequest | DetectLanguageRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DetectLanguageResponse, TranslateProjectsLocationsDetectLanguageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects the language of text within a request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_detect_language(
    "some example string", "some example string", DetectLanguageRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DetectLanguageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDetectLanguageErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_detect_language(
    "some example string", "some example string", DetectLanguageRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DetectLanguageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsDetectLanguageErrorBody
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
| <code>body</code> | <code>[DetectLanguageRequest](google_translate/models/detect_language_request.py) \| [DetectLanguageRequestDict](google_translate/models/detect_language_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[DetectLanguageResponse](google_translate/models/detect_language_response.py), [TranslateProjectsLocationsDetectLanguageErrorBody](google_translate/errors/translate_projects_locations_detect_language_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DetectLanguageResponse](google_translate/models/detect_language_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsDetectLanguageErrorBody](google_translate/errors/translate_projects_locations_detect_language_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Location, TranslateProjectsLocationsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_get("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Location
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Location
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGetErrorBody
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Location](google_translate/models/location.py), [TranslateProjectsLocationsGetErrorBody](google_translate/errors/translate_projects_locations_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Location](google_translate/models/location.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsGetErrorBody](google_translate/errors/translate_projects_locations_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_get_supported_languages(projects_id: str, locations_id: str, *, display_language_code: str | None = None, model: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SupportedLanguages, TranslateProjectsLocationsGetSupportedLanguagesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of supported languages for translation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_get_supported_languages(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportedLanguages
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGetSupportedLanguagesErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_get_supported_languages(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SupportedLanguages
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGetSupportedLanguagesErrorBody
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
| <code>display_language_code</code> | <code>str \| None</code> | Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.<br>**Default**: <code>None</code> |
| <code>model</code> | <code>str \| None</code> | Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[SupportedLanguages](google_translate/models/supported_languages.py), [TranslateProjectsLocationsGetSupportedLanguagesErrorBody](google_translate/errors/translate_projects_locations_get_supported_languages_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SupportedLanguages](google_translate/models/supported_languages.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsGetSupportedLanguagesErrorBody](google_translate/errors/translate_projects_locations_get_supported_languages_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_glossaries_create(projects_id: str, locations_id: str, body: Glossary | GlossaryDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, TranslateProjectsLocationsGlossariesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_glossaries_create(
    "some example string", "some example string", Glossary()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_glossaries_create(
    "some example string", "some example string", Glossary()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesCreateErrorBody
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
| <code>body</code> | <code>[Glossary](google_translate/models/glossary.py) \| [GlossaryDict](google_translate/models/glossary.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Operation](google_translate/models/operation.py), [TranslateProjectsLocationsGlossariesCreateErrorBody](google_translate/errors/translate_projects_locations_glossaries_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_translate/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsGlossariesCreateErrorBody](google_translate/errors/translate_projects_locations_glossaries_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_glossaries_delete(projects_id: str, locations_id: str, glossaries_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, TranslateProjectsLocationsGlossariesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT_FOUND, if the glossary doesn't exist.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_glossaries_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_glossaries_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesDeleteErrorBody
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
| <code>glossaries_id</code> | <code>str</code> | Resource name segment (glossariesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Operation](google_translate/models/operation.py), [TranslateProjectsLocationsGlossariesDeleteErrorBody](google_translate/errors/translate_projects_locations_glossaries_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_translate/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsGlossariesDeleteErrorBody](google_translate/errors/translate_projects_locations_glossaries_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_glossaries_get(projects_id: str, locations_id: str, glossaries_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Glossary, TranslateProjectsLocationsGlossariesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_glossaries_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Glossary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_glossaries_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Glossary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesGetErrorBody
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
| <code>glossaries_id</code> | <code>str</code> | Resource name segment (glossariesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Glossary](google_translate/models/glossary.py), [TranslateProjectsLocationsGlossariesGetErrorBody](google_translate/errors/translate_projects_locations_glossaries_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Glossary](google_translate/models/glossary.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsGlossariesGetErrorBody](google_translate/errors/translate_projects_locations_glossaries_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_glossaries_glossary_entries_create(projects_id: str, locations_id: str, glossaries_id: str, body: GlossaryEntry | GlossaryEntryDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GlossaryEntry, TranslateProjectsLocationsGlossariesGlossaryEntriesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a glossary entry.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_glossaries_glossary_entries_create(
    "some example string", "some example string", "some example string", GlossaryEntry()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GlossaryEntry
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesGlossaryEntriesCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_glossaries_glossary_entries_create(
    "some example string", "some example string", "some example string", GlossaryEntry()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GlossaryEntry
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesGlossaryEntriesCreateErrorBody
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
| <code>glossaries_id</code> | <code>str</code> | Resource name segment (glossariesId). |
| <code>body</code> | <code>[GlossaryEntry](google_translate/models/glossary_entry.py) \| [GlossaryEntryDict](google_translate/models/glossary_entry.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[GlossaryEntry](google_translate/models/glossary_entry.py), [TranslateProjectsLocationsGlossariesGlossaryEntriesCreateErrorBody](google_translate/errors/translate_projects_locations_glossaries_glossary_entries_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GlossaryEntry](google_translate/models/glossary_entry.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsGlossariesGlossaryEntriesCreateErrorBody](google_translate/errors/translate_projects_locations_glossaries_glossary_entries_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_glossaries_glossary_entries_delete(projects_id: str, locations_id: str, glossaries_id: str, glossary_entries_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single entry from the glossary

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_glossaries_glossary_entries_delete(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_glossaries_glossary_entries_delete(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteErrorBody
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
| <code>glossaries_id</code> | <code>str</code> | Resource name segment (glossariesId). |
| <code>glossary_entries_id</code> | <code>str</code> | Resource name segment (glossaryEntriesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;Any, [TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteErrorBody](google_translate/errors/translate_projects_locations_glossaries_glossary_entries_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteErrorBody](google_translate/errors/translate_projects_locations_glossaries_glossary_entries_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_glossaries_glossary_entries_get(projects_id: str, locations_id: str, glossaries_id: str, glossary_entries_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GlossaryEntry, TranslateProjectsLocationsGlossariesGlossaryEntriesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a single glossary entry by the given id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_glossaries_glossary_entries_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GlossaryEntry
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesGlossaryEntriesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_glossaries_glossary_entries_get(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GlossaryEntry
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesGlossaryEntriesGetErrorBody
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
| <code>glossaries_id</code> | <code>str</code> | Resource name segment (glossariesId). |
| <code>glossary_entries_id</code> | <code>str</code> | Resource name segment (glossaryEntriesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[GlossaryEntry](google_translate/models/glossary_entry.py), [TranslateProjectsLocationsGlossariesGlossaryEntriesGetErrorBody](google_translate/errors/translate_projects_locations_glossaries_glossary_entries_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GlossaryEntry](google_translate/models/glossary_entry.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsGlossariesGlossaryEntriesGetErrorBody](google_translate/errors/translate_projects_locations_glossaries_glossary_entries_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_glossaries_glossary_entries_list(projects_id: str, locations_id: str, glossaries_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListGlossaryEntriesResponse, TranslateProjectsLocationsGlossariesGlossaryEntriesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the entries for the glossary.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_glossaries_glossary_entries_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListGlossaryEntriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesGlossaryEntriesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_glossaries_glossary_entries_list(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListGlossaryEntriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesGlossaryEntriesListErrorBody
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
| <code>glossaries_id</code> | <code>str</code> | Resource name segment (glossariesId). |
| <code>page_size</code> | <code>int \| None</code> | Optional. Requested page size. The server may return fewer glossary entries than requested. If unspecified, the server picks an appropriate default.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossaryEntriesResponse.next_page_token] returned from the previous call. The first page is returned if `page_token`is empty or missing.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[ListGlossaryEntriesResponse](google_translate/models/list_glossary_entries_response.py), [TranslateProjectsLocationsGlossariesGlossaryEntriesListErrorBody](google_translate/errors/translate_projects_locations_glossaries_glossary_entries_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListGlossaryEntriesResponse](google_translate/models/list_glossary_entries_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsGlossariesGlossaryEntriesListErrorBody](google_translate/errors/translate_projects_locations_glossaries_glossary_entries_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_glossaries_glossary_entries_patch(projects_id: str, locations_id: str, glossaries_id: str, glossary_entries_id: str, body: GlossaryEntry | GlossaryEntryDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GlossaryEntry, TranslateProjectsLocationsGlossariesGlossaryEntriesPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a glossary entry.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_glossaries_glossary_entries_patch(
    "some example string", "some example string", "some example string", "some example string", GlossaryEntry()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GlossaryEntry
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesGlossaryEntriesPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_glossaries_glossary_entries_patch(
    "some example string", "some example string", "some example string", "some example string", GlossaryEntry()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GlossaryEntry
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesGlossaryEntriesPatchErrorBody
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
| <code>glossaries_id</code> | <code>str</code> | Resource name segment (glossariesId). |
| <code>glossary_entries_id</code> | <code>str</code> | Resource name segment (glossaryEntriesId). |
| <code>body</code> | <code>[GlossaryEntry](google_translate/models/glossary_entry.py) \| [GlossaryEntryDict](google_translate/models/glossary_entry.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[GlossaryEntry](google_translate/models/glossary_entry.py), [TranslateProjectsLocationsGlossariesGlossaryEntriesPatchErrorBody](google_translate/errors/translate_projects_locations_glossaries_glossary_entries_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GlossaryEntry](google_translate/models/glossary_entry.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsGlossariesGlossaryEntriesPatchErrorBody](google_translate/errors/translate_projects_locations_glossaries_glossary_entries_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_glossaries_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListGlossariesResponse, TranslateProjectsLocationsGlossariesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_glossaries_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListGlossariesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_glossaries_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListGlossariesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesListErrorBody
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
| <code>filter_</code> | <code>str \| None</code> | Optional. Filter specifying constraints of a list operation. Specify the constraint by the format of "key=value", where key must be "src" or "tgt", and the value must be a valid language code. For multiple restrictions, concatenate them by "AND" (uppercase only), such as: "src=en-US AND tgt=zh-CN". Notice that the exact match is used here, which means using 'en-US' and 'en' can lead to different results, which depends on the language code you used when you create the glossary. For the unidirectional glossaries, the "src" and "tgt" add restrictions on the source and target language code separately. For the equivalent term set glossaries, the "src" and/or "tgt" add restrictions on the term set. For example: "src=en-US AND tgt=zh-CN" will only pick the unidirectional glossaries which exactly match the source language code as "en-US" and the target language code "zh-CN", but all equivalent term set glossaries which contain "en-US" and "zh-CN" in their language set will be picked. If missing, no filtering is performed.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Requested page size. The server may return fewer glossaries than requested. If unspecified, the server picks an appropriate default.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossariesResponse.next_page_token] returned from the previous call to `ListGlossaries` method. The first page is returned if `page_token`is empty or missing.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[ListGlossariesResponse](google_translate/models/list_glossaries_response.py), [TranslateProjectsLocationsGlossariesListErrorBody](google_translate/errors/translate_projects_locations_glossaries_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListGlossariesResponse](google_translate/models/list_glossaries_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsGlossariesListErrorBody](google_translate/errors/translate_projects_locations_glossaries_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_glossaries_patch(projects_id: str, locations_id: str, glossaries_id: str, body: Glossary | GlossaryDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, TranslateProjectsLocationsGlossariesPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a glossary. A LRO is used since the update can be async if the glossary's entry file is updated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_glossaries_patch(
    "some example string", "some example string", "some example string", Glossary()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_glossaries_patch(
    "some example string", "some example string", "some example string", Glossary()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsGlossariesPatchErrorBody
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
| <code>glossaries_id</code> | <code>str</code> | Resource name segment (glossariesId). |
| <code>body</code> | <code>[Glossary](google_translate/models/glossary.py) \| [GlossaryDict](google_translate/models/glossary.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | The list of fields to be updated. Currently, only `display_name` and `input_config` are supported.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Operation](google_translate/models/operation.py), [TranslateProjectsLocationsGlossariesPatchErrorBody](google_translate/errors/translate_projects_locations_glossaries_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_translate/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsGlossariesPatchErrorBody](google_translate/errors/translate_projects_locations_glossaries_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListLocationsResponse, TranslateProjectsLocationsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListLocationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListLocationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>extra_location_types</code> | <code>list&#91;str&#93; \| None</code> | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage.<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>str \| None</code> | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The maximum number of results to return. If not set, the service selects a default.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[ListLocationsResponse](google_translate/models/list_locations_response.py), [TranslateProjectsLocationsListErrorBody](google_translate/errors/translate_projects_locations_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListLocationsResponse](google_translate/models/list_locations_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsListErrorBody](google_translate/errors/translate_projects_locations_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_models_create(projects_id: str, locations_id: str, body: Model | ModelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, TranslateProjectsLocationsModelsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Model.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_models_create(
    "some example string", "some example string", Model()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsModelsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_models_create(
    "some example string", "some example string", Model()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsModelsCreateErrorBody
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
| <code>body</code> | <code>[Model](google_translate/models/model.py) \| [ModelDict](google_translate/models/model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Operation](google_translate/models/operation.py), [TranslateProjectsLocationsModelsCreateErrorBody](google_translate/errors/translate_projects_locations_models_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_translate/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsModelsCreateErrorBody](google_translate/errors/translate_projects_locations_models_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_models_delete(projects_id: str, locations_id: str, models_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, TranslateProjectsLocationsModelsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a model.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_models_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsModelsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_models_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsModelsDeleteErrorBody
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
| <code>models_id</code> | <code>str</code> | Resource name segment (modelsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Operation](google_translate/models/operation.py), [TranslateProjectsLocationsModelsDeleteErrorBody](google_translate/errors/translate_projects_locations_models_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_translate/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsModelsDeleteErrorBody](google_translate/errors/translate_projects_locations_models_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_models_get(projects_id: str, locations_id: str, models_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Model, TranslateProjectsLocationsModelsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a model.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_models_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Model
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsModelsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_models_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Model
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsModelsGetErrorBody
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
| <code>models_id</code> | <code>str</code> | Resource name segment (modelsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Model](google_translate/models/model.py), [TranslateProjectsLocationsModelsGetErrorBody](google_translate/errors/translate_projects_locations_models_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Model](google_translate/models/model.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsModelsGetErrorBody](google_translate/errors/translate_projects_locations_models_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_models_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListModelsResponse, TranslateProjectsLocationsModelsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists models.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_models_list("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListModelsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsModelsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_models_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListModelsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsModelsListErrorBody
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
| <code>filter_</code> | <code>str \| None</code> | Optional. An expression for filtering the models that will be returned. Supported filter: `dataset_id=${dataset_id}`<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Optional. Requested page size. The server can return fewer results than requested.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListModels call.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[ListModelsResponse](google_translate/models/list_models_response.py), [TranslateProjectsLocationsModelsListErrorBody](google_translate/errors/translate_projects_locations_models_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListModelsResponse](google_translate/models/list_models_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsModelsListErrorBody](google_translate/errors/translate_projects_locations_models_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_operations_cancel(projects_id: str, locations_id: str, operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, TranslateProjectsLocationsOperationsCancelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_operations_cancel(
    "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsOperationsCancelErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_operations_cancel(
    "some example string", "some example string", "some example string", {}
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsOperationsCancelErrorBody
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
| <code>operations_id</code> | <code>str</code> | Resource name segment (operationsId). |
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;Any, [TranslateProjectsLocationsOperationsCancelErrorBody](google_translate/errors/translate_projects_locations_operations_cancel_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsOperationsCancelErrorBody](google_translate/errors/translate_projects_locations_operations_cancel_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_operations_delete(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, TranslateProjectsLocationsOperationsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_operations_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsOperationsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_operations_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsOperationsDeleteErrorBody
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
| <code>operations_id</code> | <code>str</code> | Resource name segment (operationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;Any, [TranslateProjectsLocationsOperationsDeleteErrorBody](google_translate/errors/translate_projects_locations_operations_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsOperationsDeleteErrorBody](google_translate/errors/translate_projects_locations_operations_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, TranslateProjectsLocationsOperationsGetErrorBody]</code></summary>

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
result = client.with_raw_response.translate_projects_locations_operations_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsOperationsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_operations_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsOperationsGetErrorBody
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
| <code>operations_id</code> | <code>str</code> | Resource name segment (operationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Operation](google_translate/models/operation.py), [TranslateProjectsLocationsOperationsGetErrorBody](google_translate/errors/translate_projects_locations_operations_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_translate/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsOperationsGetErrorBody](google_translate/errors/translate_projects_locations_operations_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_operations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListOperationsResponse, TranslateProjectsLocationsOperationsListErrorBody]</code></summary>

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
result = client.with_raw_response.translate_projects_locations_operations_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsOperationsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_operations_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListOperationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsOperationsListErrorBody
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
| <code>filter_</code> | <code>str \| None</code> | The standard list filter.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The standard list page size.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | The standard list page token.<br>**Default**: <code>None</code> |
| <code>return_partial_success</code> | <code>bool \| None</code> | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[ListOperationsResponse](google_translate/models/list_operations_response.py), [TranslateProjectsLocationsOperationsListErrorBody](google_translate/errors/translate_projects_locations_operations_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListOperationsResponse](google_translate/models/list_operations_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsOperationsListErrorBody](google_translate/errors/translate_projects_locations_operations_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_operations_wait(projects_id: str, locations_id: str, operations_id: str, body: WaitOperationRequest | WaitOperationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, TranslateProjectsLocationsOperationsWaitErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_operations_wait(
    "some example string", "some example string", "some example string", WaitOperationRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsOperationsWaitErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_operations_wait(
    "some example string", "some example string", "some example string", WaitOperationRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsOperationsWaitErrorBody
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
| <code>operations_id</code> | <code>str</code> | Resource name segment (operationsId). |
| <code>body</code> | <code>[WaitOperationRequest](google_translate/models/wait_operation_request.py) \| [WaitOperationRequestDict](google_translate/models/wait_operation_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[Operation](google_translate/models/operation.py), [TranslateProjectsLocationsOperationsWaitErrorBody](google_translate/errors/translate_projects_locations_operations_wait_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_translate/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsOperationsWaitErrorBody](google_translate/errors/translate_projects_locations_operations_wait_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_refine_text(projects_id: str, locations_id: str, body: RefineTextRequest | RefineTextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RefineTextResponse, TranslateProjectsLocationsRefineTextErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refines the input translated text to improve the quality.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_refine_text(
    "some example string", "some example string", RefineTextRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RefineTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsRefineTextErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_refine_text(
    "some example string", "some example string", RefineTextRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RefineTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsRefineTextErrorBody
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
| <code>body</code> | <code>[RefineTextRequest](google_translate/models/refine_text_request.py) \| [RefineTextRequestDict](google_translate/models/refine_text_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[RefineTextResponse](google_translate/models/refine_text_response.py), [TranslateProjectsLocationsRefineTextErrorBody](google_translate/errors/translate_projects_locations_refine_text_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RefineTextResponse](google_translate/models/refine_text_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsRefineTextErrorBody](google_translate/errors/translate_projects_locations_refine_text_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_romanize_text(projects_id: str, locations_id: str, body: RomanizeTextRequest | RomanizeTextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RomanizeTextResponse, TranslateProjectsLocationsRomanizeTextErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Romanize input text written in non-Latin scripts to Latin text.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_romanize_text(
    "some example string", "some example string", RomanizeTextRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RomanizeTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsRomanizeTextErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_romanize_text(
    "some example string", "some example string", RomanizeTextRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RomanizeTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsRomanizeTextErrorBody
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
| <code>body</code> | <code>[RomanizeTextRequest](google_translate/models/romanize_text_request.py) \| [RomanizeTextRequestDict](google_translate/models/romanize_text_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[RomanizeTextResponse](google_translate/models/romanize_text_response.py), [TranslateProjectsLocationsRomanizeTextErrorBody](google_translate/errors/translate_projects_locations_romanize_text_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RomanizeTextResponse](google_translate/models/romanize_text_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsRomanizeTextErrorBody](google_translate/errors/translate_projects_locations_romanize_text_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_translate_document(projects_id: str, locations_id: str, body: TranslateDocumentRequest | TranslateDocumentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TranslateDocumentResponse, TranslateProjectsLocationsTranslateDocumentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates documents in synchronous mode.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_translate_document(
    "some example string", "some example string", TranslateDocumentRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TranslateDocumentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsTranslateDocumentErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_translate_document(
    "some example string", "some example string", TranslateDocumentRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TranslateDocumentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsTranslateDocumentErrorBody
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
| <code>body</code> | <code>[TranslateDocumentRequest](google_translate/models/translate_document_request.py) \| [TranslateDocumentRequestDict](google_translate/models/translate_document_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[TranslateDocumentResponse](google_translate/models/translate_document_response.py), [TranslateProjectsLocationsTranslateDocumentErrorBody](google_translate/errors/translate_projects_locations_translate_document_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TranslateDocumentResponse](google_translate/models/translate_document_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsTranslateDocumentErrorBody](google_translate/errors/translate_projects_locations_translate_document_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_locations_translate_text(projects_id: str, locations_id: str, body: TranslateTextRequest | TranslateTextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TranslateTextResponse, TranslateProjectsLocationsTranslateTextErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates input text and returns translated text.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_locations_translate_text(
    "some example string", "some example string", TranslateTextRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TranslateTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsTranslateTextErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_locations_translate_text(
    "some example string", "some example string", TranslateTextRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TranslateTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsLocationsTranslateTextErrorBody
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
| <code>body</code> | <code>[TranslateTextRequest](google_translate/models/translate_text_request.py) \| [TranslateTextRequestDict](google_translate/models/translate_text_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[TranslateTextResponse](google_translate/models/translate_text_response.py), [TranslateProjectsLocationsTranslateTextErrorBody](google_translate/errors/translate_projects_locations_translate_text_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TranslateTextResponse](google_translate/models/translate_text_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsLocationsTranslateTextErrorBody](google_translate/errors/translate_projects_locations_translate_text_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_romanize_text(projects_id: str, body: RomanizeTextRequest | RomanizeTextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RomanizeTextResponse, TranslateProjectsRomanizeTextErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Romanize input text written in non-Latin scripts to Latin text.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_romanize_text("some example string", RomanizeTextRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RomanizeTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsRomanizeTextErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_romanize_text(
    "some example string", RomanizeTextRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RomanizeTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsRomanizeTextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>body</code> | <code>[RomanizeTextRequest](google_translate/models/romanize_text_request.py) \| [RomanizeTextRequestDict](google_translate/models/romanize_text_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[RomanizeTextResponse](google_translate/models/romanize_text_response.py), [TranslateProjectsRomanizeTextErrorBody](google_translate/errors/translate_projects_romanize_text_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RomanizeTextResponse](google_translate/models/romanize_text_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsRomanizeTextErrorBody](google_translate/errors/translate_projects_romanize_text_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translate_projects_translate_text(projects_id: str, body: TranslateTextRequest | TranslateTextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TranslateTextResponse, TranslateProjectsTranslateTextErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates input text and returns translated text.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.translate_projects_translate_text("some example string", TranslateTextRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TranslateTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsTranslateTextErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.translate_projects_translate_text(
    "some example string", TranslateTextRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TranslateTextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslateProjectsTranslateTextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>body</code> | <code>[TranslateTextRequest](google_translate/models/translate_text_request.py) \| [TranslateTextRequestDict](google_translate/models/translate_text_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_translate/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_translate/core/results.py)&#91;[TranslateTextResponse](google_translate/models/translate_text_response.py), [TranslateProjectsTranslateTextErrorBody](google_translate/errors/translate_projects_translate_text_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TranslateTextResponse](google_translate/models/translate_text_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TranslateProjectsTranslateTextErrorBody](google_translate/errors/translate_projects_translate_text_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_translate/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_translate/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

