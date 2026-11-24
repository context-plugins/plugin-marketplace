<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `google_translate/client.py` · 51 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.translate_projects_detect_language

- **Route**: `POST /v3/projects/{projectsId}:detectLanguage`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_detect_language(projects_id: str, body: DetectLanguageRequest | DetectLanguageRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `body` — JSON body
- **Returns (parsed)**: `DetectLanguageResponse`
- **Returns (raw)**: `ApiResult[DetectLanguageResponse, TranslateProjectsDetectLanguageErrorBody]`
- **Error**: `TranslateProjectsDetectLanguageErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DetectLanguageRequest` | `google_translate/models/detect_language_request.py` |
| `DetectLanguageRequestDict` | `google_translate/models/detect_language_request.py` |
| `DetectLanguageResponse` | `google_translate/models/detect_language_response.py` |
| `TranslateProjectsDetectLanguageErrorBody` | `google_translate/errors/translate_projects_detect_language_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_get_supported_languages

- **Route**: `GET /v3/projects/{projectsId}/supportedLanguages`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_get_supported_languages(projects_id: str, *, display_language_code: str | None = None, model: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`
- **Params**: `projects_id` — path `projectsId` · `display_language_code` — query `displayLanguageCode` · `model` — query
- **Returns (parsed)**: `SupportedLanguages`
- **Returns (raw)**: `ApiResult[SupportedLanguages, TranslateProjectsGetSupportedLanguagesErrorBody]`
- **Error**: `TranslateProjectsGetSupportedLanguagesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SupportedLanguages` | `google_translate/models/supported_languages.py` |
| `TranslateProjectsGetSupportedLanguagesErrorBody` | `google_translate/errors/translate_projects_get_supported_languages_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}/adaptiveMtSentences`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, adaptive_mt_files_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `adaptive_mt_datasets_id`, `adaptive_mt_files_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `adaptive_mt_datasets_id` — path `adaptiveMtDatasetsId` · `adaptive_mt_files_id` — path `adaptiveMtFilesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListAdaptiveMtSentencesResponse`
- **Returns (raw)**: `ApiResult[ListAdaptiveMtSentencesResponse, TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListErrorBody]`
- **Error**: `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListAdaptiveMtSentencesResponse` | `google_translate/models/list_adaptive_mt_sentences_response.py` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListErrorBody` | `google_translate/errors/translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_adaptive_mt_sentences_list_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete

- **Route**: `DELETE /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, adaptive_mt_files_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `adaptive_mt_datasets_id`, `adaptive_mt_files_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `adaptive_mt_datasets_id` — path `adaptiveMtDatasetsId` · `adaptive_mt_files_id` — path `adaptiveMtFilesId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteErrorBody]`
- **Error**: `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteErrorBody` | `google_translate/errors/translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_delete_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_get

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_get(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, adaptive_mt_files_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `adaptive_mt_datasets_id`, `adaptive_mt_files_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `adaptive_mt_datasets_id` — path `adaptiveMtDatasetsId` · `adaptive_mt_files_id` — path `adaptiveMtFilesId`
- **Returns (parsed)**: `AdaptiveMtFile`
- **Returns (raw)**: `ApiResult[AdaptiveMtFile, TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetErrorBody]`
- **Error**: `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdaptiveMtFile` | `google_translate/models/adaptive_mt_file.py` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetErrorBody` | `google_translate/errors/translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_get_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_list

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_list(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `adaptive_mt_datasets_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `adaptive_mt_datasets_id` — path `adaptiveMtDatasetsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListAdaptiveMtFilesResponse`
- **Returns (raw)**: `ApiResult[ListAdaptiveMtFilesResponse, TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListErrorBody]`
- **Error**: `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListAdaptiveMtFilesResponse` | `google_translate/models/list_adaptive_mt_files_response.py` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListErrorBody` | `google_translate/errors/translate_projects_locations_adaptive_mt_datasets_adaptive_mt_files_list_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtSentences`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `adaptive_mt_datasets_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `adaptive_mt_datasets_id` — path `adaptiveMtDatasetsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListAdaptiveMtSentencesResponse`
- **Returns (raw)**: `ApiResult[ListAdaptiveMtSentencesResponse, TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListErrorBody]`
- **Error**: `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListAdaptiveMtSentencesResponse` | `google_translate/models/list_adaptive_mt_sentences_response.py` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListErrorBody` | `google_translate/errors/translate_projects_locations_adaptive_mt_datasets_adaptive_mt_sentences_list_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_adaptive_mt_datasets_create

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_adaptive_mt_datasets_create(projects_id: str, locations_id: str, body: AdaptiveMtDataset | AdaptiveMtDatasetDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `AdaptiveMtDataset`
- **Returns (raw)**: `ApiResult[AdaptiveMtDataset, TranslateProjectsLocationsAdaptiveMtDatasetsCreateErrorBody]`
- **Error**: `TranslateProjectsLocationsAdaptiveMtDatasetsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdaptiveMtDataset` | `google_translate/models/adaptive_mt_dataset.py` |
| `AdaptiveMtDatasetDict` | `google_translate/models/adaptive_mt_dataset.py` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsCreateErrorBody` | `google_translate/errors/translate_projects_locations_adaptive_mt_datasets_create_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_adaptive_mt_datasets_delete

- **Route**: `DELETE /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_adaptive_mt_datasets_delete(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `adaptive_mt_datasets_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `adaptive_mt_datasets_id` — path `adaptiveMtDatasetsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, TranslateProjectsLocationsAdaptiveMtDatasetsDeleteErrorBody]`
- **Error**: `TranslateProjectsLocationsAdaptiveMtDatasetsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsAdaptiveMtDatasetsDeleteErrorBody` | `google_translate/errors/translate_projects_locations_adaptive_mt_datasets_delete_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_adaptive_mt_datasets_get

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_adaptive_mt_datasets_get(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `adaptive_mt_datasets_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `adaptive_mt_datasets_id` — path `adaptiveMtDatasetsId`
- **Returns (parsed)**: `AdaptiveMtDataset`
- **Returns (raw)**: `ApiResult[AdaptiveMtDataset, TranslateProjectsLocationsAdaptiveMtDatasetsGetErrorBody]`
- **Error**: `TranslateProjectsLocationsAdaptiveMtDatasetsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdaptiveMtDataset` | `google_translate/models/adaptive_mt_dataset.py` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsGetErrorBody` | `google_translate/errors/translate_projects_locations_adaptive_mt_datasets_get_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_adaptive_mt_datasets_import_adaptive_mt_file

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}:importAdaptiveMtFile`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_adaptive_mt_datasets_import_adaptive_mt_file(projects_id: str, locations_id: str, adaptive_mt_datasets_id: str, body: ImportAdaptiveMtFileRequest | ImportAdaptiveMtFileRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `adaptive_mt_datasets_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `adaptive_mt_datasets_id` — path `adaptiveMtDatasetsId` · `body` — JSON body
- **Returns (parsed)**: `ImportAdaptiveMtFileResponse`
- **Returns (raw)**: `ApiResult[ImportAdaptiveMtFileResponse, TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileErrorBody]`
- **Error**: `TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ImportAdaptiveMtFileRequest` | `google_translate/models/import_adaptive_mt_file_request.py` |
| `ImportAdaptiveMtFileRequestDict` | `google_translate/models/import_adaptive_mt_file_request.py` |
| `ImportAdaptiveMtFileResponse` | `google_translate/models/import_adaptive_mt_file_response.py` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileErrorBody` | `google_translate/errors/translate_projects_locations_adaptive_mt_datasets_import_adaptive_mt_file_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_adaptive_mt_datasets_list

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_adaptive_mt_datasets_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListAdaptiveMtDatasetsResponse`
- **Returns (raw)**: `ApiResult[ListAdaptiveMtDatasetsResponse, TranslateProjectsLocationsAdaptiveMtDatasetsListErrorBody]`
- **Error**: `TranslateProjectsLocationsAdaptiveMtDatasetsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListAdaptiveMtDatasetsResponse` | `google_translate/models/list_adaptive_mt_datasets_response.py` |
| `TranslateProjectsLocationsAdaptiveMtDatasetsListErrorBody` | `google_translate/errors/translate_projects_locations_adaptive_mt_datasets_list_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_adaptive_mt_translate

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}:adaptiveMtTranslate`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_adaptive_mt_translate(projects_id: str, locations_id: str, body: AdaptiveMtTranslateRequest | AdaptiveMtTranslateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `AdaptiveMtTranslateResponse`
- **Returns (raw)**: `ApiResult[AdaptiveMtTranslateResponse, TranslateProjectsLocationsAdaptiveMtTranslateErrorBody]`
- **Error**: `TranslateProjectsLocationsAdaptiveMtTranslateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdaptiveMtTranslateRequest` | `google_translate/models/adaptive_mt_translate_request.py` |
| `AdaptiveMtTranslateRequestDict` | `google_translate/models/adaptive_mt_translate_request.py` |
| `AdaptiveMtTranslateResponse` | `google_translate/models/adaptive_mt_translate_response.py` |
| `TranslateProjectsLocationsAdaptiveMtTranslateErrorBody` | `google_translate/errors/translate_projects_locations_adaptive_mt_translate_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_batch_translate_document

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}:batchTranslateDocument`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_batch_translate_document(projects_id: str, locations_id: str, body: BatchTranslateDocumentRequest | BatchTranslateDocumentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, TranslateProjectsLocationsBatchTranslateDocumentErrorBody]`
- **Error**: `TranslateProjectsLocationsBatchTranslateDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchTranslateDocumentRequest` | `google_translate/models/batch_translate_document_request.py` |
| `BatchTranslateDocumentRequestDict` | `google_translate/models/batch_translate_document_request.py` |
| `Operation` | `google_translate/models/operation.py` |
| `TranslateProjectsLocationsBatchTranslateDocumentErrorBody` | `google_translate/errors/translate_projects_locations_batch_translate_document_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_batch_translate_text

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}:batchTranslateText`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_batch_translate_text(projects_id: str, locations_id: str, body: BatchTranslateTextRequest | BatchTranslateTextRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, TranslateProjectsLocationsBatchTranslateTextErrorBody]`
- **Error**: `TranslateProjectsLocationsBatchTranslateTextErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchTranslateTextRequest` | `google_translate/models/batch_translate_text_request.py` |
| `BatchTranslateTextRequestDict` | `google_translate/models/batch_translate_text_request.py` |
| `Operation` | `google_translate/models/operation.py` |
| `TranslateProjectsLocationsBatchTranslateTextErrorBody` | `google_translate/errors/translate_projects_locations_batch_translate_text_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_datasets_create

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}/datasets`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_datasets_create(projects_id: str, locations_id: str, body: Dataset | DatasetDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, TranslateProjectsLocationsDatasetsCreateErrorBody]`
- **Error**: `TranslateProjectsLocationsDatasetsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Dataset` | `google_translate/models/dataset.py` |
| `DatasetDict` | `google_translate/models/dataset.py` |
| `Operation` | `google_translate/models/operation.py` |
| `TranslateProjectsLocationsDatasetsCreateErrorBody` | `google_translate/errors/translate_projects_locations_datasets_create_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_datasets_delete

- **Route**: `DELETE /v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_datasets_delete(projects_id: str, locations_id: str, datasets_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `datasets_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `datasets_id` — path `datasetsId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, TranslateProjectsLocationsDatasetsDeleteErrorBody]`
- **Error**: `TranslateProjectsLocationsDatasetsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_translate/models/operation.py` |
| `TranslateProjectsLocationsDatasetsDeleteErrorBody` | `google_translate/errors/translate_projects_locations_datasets_delete_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_datasets_examples_list

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/examples`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_datasets_examples_list(projects_id: str, locations_id: str, datasets_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `datasets_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `datasets_id` — path `datasetsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListExamplesResponse`
- **Returns (raw)**: `ApiResult[ListExamplesResponse, TranslateProjectsLocationsDatasetsExamplesListErrorBody]`
- **Error**: `TranslateProjectsLocationsDatasetsExamplesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListExamplesResponse` | `google_translate/models/list_examples_response.py` |
| `TranslateProjectsLocationsDatasetsExamplesListErrorBody` | `google_translate/errors/translate_projects_locations_datasets_examples_list_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_datasets_export_data

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:exportData`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_datasets_export_data(projects_id: str, locations_id: str, datasets_id: str, body: ExportDataRequest | ExportDataRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `datasets_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `datasets_id` — path `datasetsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, TranslateProjectsLocationsDatasetsExportDataErrorBody]`
- **Error**: `TranslateProjectsLocationsDatasetsExportDataErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExportDataRequest` | `google_translate/models/export_data_request.py` |
| `ExportDataRequestDict` | `google_translate/models/export_data_request.py` |
| `Operation` | `google_translate/models/operation.py` |
| `TranslateProjectsLocationsDatasetsExportDataErrorBody` | `google_translate/errors/translate_projects_locations_datasets_export_data_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_datasets_get

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_datasets_get(projects_id: str, locations_id: str, datasets_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `datasets_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `datasets_id` — path `datasetsId`
- **Returns (parsed)**: `Dataset`
- **Returns (raw)**: `ApiResult[Dataset, TranslateProjectsLocationsDatasetsGetErrorBody]`
- **Error**: `TranslateProjectsLocationsDatasetsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Dataset` | `google_translate/models/dataset.py` |
| `TranslateProjectsLocationsDatasetsGetErrorBody` | `google_translate/errors/translate_projects_locations_datasets_get_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_datasets_import_data

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:importData`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_datasets_import_data(projects_id: str, locations_id: str, datasets_id: str, body: ImportDataRequest | ImportDataRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `datasets_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `datasets_id` — path `datasetsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, TranslateProjectsLocationsDatasetsImportDataErrorBody]`
- **Error**: `TranslateProjectsLocationsDatasetsImportDataErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ImportDataRequest` | `google_translate/models/import_data_request.py` |
| `ImportDataRequestDict` | `google_translate/models/import_data_request.py` |
| `Operation` | `google_translate/models/operation.py` |
| `TranslateProjectsLocationsDatasetsImportDataErrorBody` | `google_translate/errors/translate_projects_locations_datasets_import_data_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_datasets_list

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/datasets`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_datasets_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListDatasetsResponse`
- **Returns (raw)**: `ApiResult[ListDatasetsResponse, TranslateProjectsLocationsDatasetsListErrorBody]`
- **Error**: `TranslateProjectsLocationsDatasetsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListDatasetsResponse` | `google_translate/models/list_datasets_response.py` |
| `TranslateProjectsLocationsDatasetsListErrorBody` | `google_translate/errors/translate_projects_locations_datasets_list_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_detect_language

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}:detectLanguage`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_detect_language(projects_id: str, locations_id: str, body: DetectLanguageRequest | DetectLanguageRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `DetectLanguageResponse`
- **Returns (raw)**: `ApiResult[DetectLanguageResponse, TranslateProjectsLocationsDetectLanguageErrorBody]`
- **Error**: `TranslateProjectsLocationsDetectLanguageErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DetectLanguageRequest` | `google_translate/models/detect_language_request.py` |
| `DetectLanguageRequestDict` | `google_translate/models/detect_language_request.py` |
| `DetectLanguageResponse` | `google_translate/models/detect_language_response.py` |
| `TranslateProjectsLocationsDetectLanguageErrorBody` | `google_translate/errors/translate_projects_locations_detect_language_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_get

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId`
- **Returns (parsed)**: `Location`
- **Returns (raw)**: `ApiResult[Location, TranslateProjectsLocationsGetErrorBody]`
- **Error**: `TranslateProjectsLocationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Location` | `google_translate/models/location.py` |
| `TranslateProjectsLocationsGetErrorBody` | `google_translate/errors/translate_projects_locations_get_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_get_supported_languages

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/supportedLanguages`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_get_supported_languages(projects_id: str, locations_id: str, *, display_language_code: str | None = None, model: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `display_language_code` — query `displayLanguageCode` · `model` — query
- **Returns (parsed)**: `SupportedLanguages`
- **Returns (raw)**: `ApiResult[SupportedLanguages, TranslateProjectsLocationsGetSupportedLanguagesErrorBody]`
- **Error**: `TranslateProjectsLocationsGetSupportedLanguagesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SupportedLanguages` | `google_translate/models/supported_languages.py` |
| `TranslateProjectsLocationsGetSupportedLanguagesErrorBody` | `google_translate/errors/translate_projects_locations_get_supported_languages_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_glossaries_create

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}/glossaries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_glossaries_create(projects_id: str, locations_id: str, body: Glossary | GlossaryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, TranslateProjectsLocationsGlossariesCreateErrorBody]`
- **Error**: `TranslateProjectsLocationsGlossariesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Glossary` | `google_translate/models/glossary.py` |
| `GlossaryDict` | `google_translate/models/glossary.py` |
| `Operation` | `google_translate/models/operation.py` |
| `TranslateProjectsLocationsGlossariesCreateErrorBody` | `google_translate/errors/translate_projects_locations_glossaries_create_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_glossaries_delete

- **Route**: `DELETE /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_glossaries_delete(projects_id: str, locations_id: str, glossaries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `glossaries_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `glossaries_id` — path `glossariesId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, TranslateProjectsLocationsGlossariesDeleteErrorBody]`
- **Error**: `TranslateProjectsLocationsGlossariesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_translate/models/operation.py` |
| `TranslateProjectsLocationsGlossariesDeleteErrorBody` | `google_translate/errors/translate_projects_locations_glossaries_delete_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_glossaries_get

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_glossaries_get(projects_id: str, locations_id: str, glossaries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `glossaries_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `glossaries_id` — path `glossariesId`
- **Returns (parsed)**: `Glossary`
- **Returns (raw)**: `ApiResult[Glossary, TranslateProjectsLocationsGlossariesGetErrorBody]`
- **Error**: `TranslateProjectsLocationsGlossariesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Glossary` | `google_translate/models/glossary.py` |
| `TranslateProjectsLocationsGlossariesGetErrorBody` | `google_translate/errors/translate_projects_locations_glossaries_get_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_glossaries_glossary_entries_create

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_glossaries_glossary_entries_create(projects_id: str, locations_id: str, glossaries_id: str, body: GlossaryEntry | GlossaryEntryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `glossaries_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `glossaries_id` — path `glossariesId` · `body` — JSON body
- **Returns (parsed)**: `GlossaryEntry`
- **Returns (raw)**: `ApiResult[GlossaryEntry, TranslateProjectsLocationsGlossariesGlossaryEntriesCreateErrorBody]`
- **Error**: `TranslateProjectsLocationsGlossariesGlossaryEntriesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GlossaryEntry` | `google_translate/models/glossary_entry.py` |
| `GlossaryEntryDict` | `google_translate/models/glossary_entry.py` |
| `TranslateProjectsLocationsGlossariesGlossaryEntriesCreateErrorBody` | `google_translate/errors/translate_projects_locations_glossaries_glossary_entries_create_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_glossaries_glossary_entries_delete

- **Route**: `DELETE /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_glossaries_glossary_entries_delete(projects_id: str, locations_id: str, glossaries_id: str, glossary_entries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `glossaries_id`, `glossary_entries_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `glossaries_id` — path `glossariesId` · `glossary_entries_id` — path `glossaryEntriesId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteErrorBody]`
- **Error**: `TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteErrorBody` | `google_translate/errors/translate_projects_locations_glossaries_glossary_entries_delete_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_glossaries_glossary_entries_get

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_glossaries_glossary_entries_get(projects_id: str, locations_id: str, glossaries_id: str, glossary_entries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `glossaries_id`, `glossary_entries_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `glossaries_id` — path `glossariesId` · `glossary_entries_id` — path `glossaryEntriesId`
- **Returns (parsed)**: `GlossaryEntry`
- **Returns (raw)**: `ApiResult[GlossaryEntry, TranslateProjectsLocationsGlossariesGlossaryEntriesGetErrorBody]`
- **Error**: `TranslateProjectsLocationsGlossariesGlossaryEntriesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GlossaryEntry` | `google_translate/models/glossary_entry.py` |
| `TranslateProjectsLocationsGlossariesGlossaryEntriesGetErrorBody` | `google_translate/errors/translate_projects_locations_glossaries_glossary_entries_get_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_glossaries_glossary_entries_list

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_glossaries_glossary_entries_list(projects_id: str, locations_id: str, glossaries_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `glossaries_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `glossaries_id` — path `glossariesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListGlossaryEntriesResponse`
- **Returns (raw)**: `ApiResult[ListGlossaryEntriesResponse, TranslateProjectsLocationsGlossariesGlossaryEntriesListErrorBody]`
- **Error**: `TranslateProjectsLocationsGlossariesGlossaryEntriesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListGlossaryEntriesResponse` | `google_translate/models/list_glossary_entries_response.py` |
| `TranslateProjectsLocationsGlossariesGlossaryEntriesListErrorBody` | `google_translate/errors/translate_projects_locations_glossaries_glossary_entries_list_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_glossaries_glossary_entries_patch

- **Route**: `PATCH /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_glossaries_glossary_entries_patch(projects_id: str, locations_id: str, glossaries_id: str, glossary_entries_id: str, body: GlossaryEntry | GlossaryEntryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `glossaries_id`, `glossary_entries_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `glossaries_id` — path `glossariesId` · `glossary_entries_id` — path `glossaryEntriesId` · `body` — JSON body
- **Returns (parsed)**: `GlossaryEntry`
- **Returns (raw)**: `ApiResult[GlossaryEntry, TranslateProjectsLocationsGlossariesGlossaryEntriesPatchErrorBody]`
- **Error**: `TranslateProjectsLocationsGlossariesGlossaryEntriesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GlossaryEntry` | `google_translate/models/glossary_entry.py` |
| `GlossaryEntryDict` | `google_translate/models/glossary_entry.py` |
| `TranslateProjectsLocationsGlossariesGlossaryEntriesPatchErrorBody` | `google_translate/errors/translate_projects_locations_glossaries_glossary_entries_patch_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_glossaries_list

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/glossaries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_glossaries_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListGlossariesResponse`
- **Returns (raw)**: `ApiResult[ListGlossariesResponse, TranslateProjectsLocationsGlossariesListErrorBody]`
- **Error**: `TranslateProjectsLocationsGlossariesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListGlossariesResponse` | `google_translate/models/list_glossaries_response.py` |
| `TranslateProjectsLocationsGlossariesListErrorBody` | `google_translate/errors/translate_projects_locations_glossaries_list_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_glossaries_patch

- **Route**: `PATCH /v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_glossaries_patch(projects_id: str, locations_id: str, glossaries_id: str, body: Glossary | GlossaryDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `glossaries_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `glossaries_id` — path `glossariesId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, TranslateProjectsLocationsGlossariesPatchErrorBody]`
- **Error**: `TranslateProjectsLocationsGlossariesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Glossary` | `google_translate/models/glossary.py` |
| `GlossaryDict` | `google_translate/models/glossary.py` |
| `Operation` | `google_translate/models/operation.py` |
| `TranslateProjectsLocationsGlossariesPatchErrorBody` | `google_translate/errors/translate_projects_locations_glossaries_patch_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_list

- **Route**: `GET /v3/projects/{projectsId}/locations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`
- **Params**: `projects_id` — path `projectsId` · `extra_location_types` — query `extraLocationTypes` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListLocationsResponse`
- **Returns (raw)**: `ApiResult[ListLocationsResponse, TranslateProjectsLocationsListErrorBody]`
- **Error**: `TranslateProjectsLocationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListLocationsResponse` | `google_translate/models/list_locations_response.py` |
| `TranslateProjectsLocationsListErrorBody` | `google_translate/errors/translate_projects_locations_list_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_models_create

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}/models`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_models_create(projects_id: str, locations_id: str, body: Model | ModelDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, TranslateProjectsLocationsModelsCreateErrorBody]`
- **Error**: `TranslateProjectsLocationsModelsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Model` | `google_translate/models/model.py` |
| `ModelDict` | `google_translate/models/model.py` |
| `Operation` | `google_translate/models/operation.py` |
| `TranslateProjectsLocationsModelsCreateErrorBody` | `google_translate/errors/translate_projects_locations_models_create_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_models_delete

- **Route**: `DELETE /v3/projects/{projectsId}/locations/{locationsId}/models/{modelsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_models_delete(projects_id: str, locations_id: str, models_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `models_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `models_id` — path `modelsId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, TranslateProjectsLocationsModelsDeleteErrorBody]`
- **Error**: `TranslateProjectsLocationsModelsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_translate/models/operation.py` |
| `TranslateProjectsLocationsModelsDeleteErrorBody` | `google_translate/errors/translate_projects_locations_models_delete_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_models_get

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/models/{modelsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_models_get(projects_id: str, locations_id: str, models_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `models_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `models_id` — path `modelsId`
- **Returns (parsed)**: `Model`
- **Returns (raw)**: `ApiResult[Model, TranslateProjectsLocationsModelsGetErrorBody]`
- **Error**: `TranslateProjectsLocationsModelsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Model` | `google_translate/models/model.py` |
| `TranslateProjectsLocationsModelsGetErrorBody` | `google_translate/errors/translate_projects_locations_models_get_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_models_list

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/models`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_models_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListModelsResponse`
- **Returns (raw)**: `ApiResult[ListModelsResponse, TranslateProjectsLocationsModelsListErrorBody]`
- **Error**: `TranslateProjectsLocationsModelsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListModelsResponse` | `google_translate/models/list_models_response.py` |
| `TranslateProjectsLocationsModelsListErrorBody` | `google_translate/errors/translate_projects_locations_models_list_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_operations_cancel

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_operations_cancel(projects_id: str, locations_id: str, operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, TranslateProjectsLocationsOperationsCancelErrorBody]`
- **Error**: `TranslateProjectsLocationsOperationsCancelErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsOperationsCancelErrorBody` | `google_translate/errors/translate_projects_locations_operations_cancel_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_operations_delete

- **Route**: `DELETE /v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_operations_delete(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, TranslateProjectsLocationsOperationsDeleteErrorBody]`
- **Error**: `TranslateProjectsLocationsOperationsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TranslateProjectsLocationsOperationsDeleteErrorBody` | `google_translate/errors/translate_projects_locations_operations_delete_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_operations_get

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, TranslateProjectsLocationsOperationsGetErrorBody]`
- **Error**: `TranslateProjectsLocationsOperationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_translate/models/operation.py` |
| `TranslateProjectsLocationsOperationsGetErrorBody` | `google_translate/errors/translate_projects_locations_operations_get_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_operations_list

- **Route**: `GET /v3/projects/{projectsId}/locations/{locationsId}/operations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_operations_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `return_partial_success` — query `returnPartialSuccess`
- **Returns (parsed)**: `ListOperationsResponse`
- **Returns (raw)**: `ApiResult[ListOperationsResponse, TranslateProjectsLocationsOperationsListErrorBody]`
- **Error**: `TranslateProjectsLocationsOperationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListOperationsResponse` | `google_translate/models/list_operations_response.py` |
| `TranslateProjectsLocationsOperationsListErrorBody` | `google_translate/errors/translate_projects_locations_operations_list_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_operations_wait

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:wait`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_operations_wait(projects_id: str, locations_id: str, operations_id: str, body: WaitOperationRequest | WaitOperationRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, TranslateProjectsLocationsOperationsWaitErrorBody]`
- **Error**: `TranslateProjectsLocationsOperationsWaitErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WaitOperationRequest` | `google_translate/models/wait_operation_request.py` |
| `WaitOperationRequestDict` | `google_translate/models/wait_operation_request.py` |
| `Operation` | `google_translate/models/operation.py` |
| `TranslateProjectsLocationsOperationsWaitErrorBody` | `google_translate/errors/translate_projects_locations_operations_wait_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_refine_text

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}:refineText`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_refine_text(projects_id: str, locations_id: str, body: RefineTextRequest | RefineTextRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `RefineTextResponse`
- **Returns (raw)**: `ApiResult[RefineTextResponse, TranslateProjectsLocationsRefineTextErrorBody]`
- **Error**: `TranslateProjectsLocationsRefineTextErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RefineTextRequest` | `google_translate/models/refine_text_request.py` |
| `RefineTextRequestDict` | `google_translate/models/refine_text_request.py` |
| `RefineTextResponse` | `google_translate/models/refine_text_response.py` |
| `TranslateProjectsLocationsRefineTextErrorBody` | `google_translate/errors/translate_projects_locations_refine_text_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_romanize_text

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}:romanizeText`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_romanize_text(projects_id: str, locations_id: str, body: RomanizeTextRequest | RomanizeTextRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `RomanizeTextResponse`
- **Returns (raw)**: `ApiResult[RomanizeTextResponse, TranslateProjectsLocationsRomanizeTextErrorBody]`
- **Error**: `TranslateProjectsLocationsRomanizeTextErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RomanizeTextRequest` | `google_translate/models/romanize_text_request.py` |
| `RomanizeTextRequestDict` | `google_translate/models/romanize_text_request.py` |
| `RomanizeTextResponse` | `google_translate/models/romanize_text_response.py` |
| `TranslateProjectsLocationsRomanizeTextErrorBody` | `google_translate/errors/translate_projects_locations_romanize_text_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_translate_document

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}:translateDocument`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_translate_document(projects_id: str, locations_id: str, body: TranslateDocumentRequest | TranslateDocumentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `TranslateDocumentResponse`
- **Returns (raw)**: `ApiResult[TranslateDocumentResponse, TranslateProjectsLocationsTranslateDocumentErrorBody]`
- **Error**: `TranslateProjectsLocationsTranslateDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TranslateDocumentRequest` | `google_translate/models/translate_document_request.py` |
| `TranslateDocumentRequestDict` | `google_translate/models/translate_document_request.py` |
| `TranslateDocumentResponse` | `google_translate/models/translate_document_response.py` |
| `TranslateProjectsLocationsTranslateDocumentErrorBody` | `google_translate/errors/translate_projects_locations_translate_document_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_locations_translate_text

- **Route**: `POST /v3/projects/{projectsId}/locations/{locationsId}:translateText`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_locations_translate_text(projects_id: str, locations_id: str, body: TranslateTextRequest | TranslateTextRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `TranslateTextResponse`
- **Returns (raw)**: `ApiResult[TranslateTextResponse, TranslateProjectsLocationsTranslateTextErrorBody]`
- **Error**: `TranslateProjectsLocationsTranslateTextErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TranslateTextRequest` | `google_translate/models/translate_text_request.py` |
| `TranslateTextRequestDict` | `google_translate/models/translate_text_request.py` |
| `TranslateTextResponse` | `google_translate/models/translate_text_response.py` |
| `TranslateProjectsLocationsTranslateTextErrorBody` | `google_translate/errors/translate_projects_locations_translate_text_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_romanize_text

- **Route**: `POST /v3/projects/{projectsId}:romanizeText`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_romanize_text(projects_id: str, body: RomanizeTextRequest | RomanizeTextRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `body` — JSON body
- **Returns (parsed)**: `RomanizeTextResponse`
- **Returns (raw)**: `ApiResult[RomanizeTextResponse, TranslateProjectsRomanizeTextErrorBody]`
- **Error**: `TranslateProjectsRomanizeTextErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RomanizeTextRequest` | `google_translate/models/romanize_text_request.py` |
| `RomanizeTextRequestDict` | `google_translate/models/romanize_text_request.py` |
| `RomanizeTextResponse` | `google_translate/models/romanize_text_response.py` |
| `TranslateProjectsRomanizeTextErrorBody` | `google_translate/errors/translate_projects_romanize_text_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

### client.translate_projects_translate_text

- **Route**: `POST /v3/projects/{projectsId}:translateText`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def translate_projects_translate_text(projects_id: str, body: TranslateTextRequest | TranslateTextRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `body` — JSON body
- **Returns (parsed)**: `TranslateTextResponse`
- **Returns (raw)**: `ApiResult[TranslateTextResponse, TranslateProjectsTranslateTextErrorBody]`
- **Error**: `TranslateProjectsTranslateTextErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TranslateTextRequest` | `google_translate/models/translate_text_request.py` |
| `TranslateTextRequestDict` | `google_translate/models/translate_text_request.py` |
| `TranslateTextResponse` | `google_translate/models/translate_text_response.py` |
| `TranslateProjectsTranslateTextErrorBody` | `google_translate/errors/translate_projects_translate_text_error.py` |
| `GoogleRpcError` | `google_translate/models/google_rpc_error.py` |

