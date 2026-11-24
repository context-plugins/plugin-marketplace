<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `google_cloud_speech_to_text/apis/projects.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.projects.speech_projects_locations_custom_classes_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/customClasses`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def speech_projects_locations_custom_classes_create(projects_id: str, locations_id: str, body: CreateCustomClassRequest | CreateCustomClassRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `CustomClass`
- **Returns (raw)**: `ApiResult[CustomClass, SpeechProjectsLocationsCustomClassesCreateErrorBody]`
- **Error**: `SpeechProjectsLocationsCustomClassesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCustomClassRequest` | `google_cloud_speech_to_text/models/create_custom_class_request.py` |
| `CreateCustomClassRequestDict` | `google_cloud_speech_to_text/models/create_custom_class_request.py` |
| `CustomClass` | `google_cloud_speech_to_text/models/custom_class.py` |
| `SpeechProjectsLocationsCustomClassesCreateErrorBody` | `google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_create_error.py` |
| `GoogleRpcError` | `google_cloud_speech_to_text/models/google_rpc_error.py` |

### client.projects.speech_projects_locations_custom_classes_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def speech_projects_locations_custom_classes_delete(projects_id: str, locations_id: str, custom_classes_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `custom_classes_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `custom_classes_id` — path `customClassesId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, SpeechProjectsLocationsCustomClassesDeleteErrorBody]`
- **Error**: `SpeechProjectsLocationsCustomClassesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SpeechProjectsLocationsCustomClassesDeleteErrorBody` | `google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_delete_error.py` |
| `GoogleRpcError` | `google_cloud_speech_to_text/models/google_rpc_error.py` |

### client.projects.speech_projects_locations_custom_classes_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def speech_projects_locations_custom_classes_get(projects_id: str, locations_id: str, custom_classes_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `custom_classes_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `custom_classes_id` — path `customClassesId`
- **Returns (parsed)**: `CustomClass`
- **Returns (raw)**: `ApiResult[CustomClass, SpeechProjectsLocationsCustomClassesGetErrorBody]`
- **Error**: `SpeechProjectsLocationsCustomClassesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomClass` | `google_cloud_speech_to_text/models/custom_class.py` |
| `SpeechProjectsLocationsCustomClassesGetErrorBody` | `google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_get_error.py` |
| `GoogleRpcError` | `google_cloud_speech_to_text/models/google_rpc_error.py` |

### client.projects.speech_projects_locations_custom_classes_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/customClasses`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def speech_projects_locations_custom_classes_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListCustomClassesResponse`
- **Returns (raw)**: `ApiResult[ListCustomClassesResponse, SpeechProjectsLocationsCustomClassesListErrorBody]`
- **Error**: `SpeechProjectsLocationsCustomClassesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListCustomClassesResponse` | `google_cloud_speech_to_text/models/list_custom_classes_response.py` |
| `SpeechProjectsLocationsCustomClassesListErrorBody` | `google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_list_error.py` |
| `GoogleRpcError` | `google_cloud_speech_to_text/models/google_rpc_error.py` |

### client.projects.speech_projects_locations_custom_classes_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def speech_projects_locations_custom_classes_patch(projects_id: str, locations_id: str, custom_classes_id: str, body: CustomClass | CustomClassDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `custom_classes_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `custom_classes_id` — path `customClassesId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `CustomClass`
- **Returns (raw)**: `ApiResult[CustomClass, SpeechProjectsLocationsCustomClassesPatchErrorBody]`
- **Error**: `SpeechProjectsLocationsCustomClassesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomClass` | `google_cloud_speech_to_text/models/custom_class.py` |
| `CustomClassDict` | `google_cloud_speech_to_text/models/custom_class.py` |
| `SpeechProjectsLocationsCustomClassesPatchErrorBody` | `google_cloud_speech_to_text/errors/speech_projects_locations_custom_classes_patch_error.py` |
| `GoogleRpcError` | `google_cloud_speech_to_text/models/google_rpc_error.py` |

### client.projects.speech_projects_locations_phrase_sets_create

- **Route**: `POST /v1/projects/{projectsId}/locations/{locationsId}/phraseSets`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def speech_projects_locations_phrase_sets_create(projects_id: str, locations_id: str, body: CreatePhraseSetRequest | CreatePhraseSetRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `PhraseSet`
- **Returns (raw)**: `ApiResult[PhraseSet, SpeechProjectsLocationsPhraseSetsCreateErrorBody]`
- **Error**: `SpeechProjectsLocationsPhraseSetsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreatePhraseSetRequest` | `google_cloud_speech_to_text/models/create_phrase_set_request.py` |
| `CreatePhraseSetRequestDict` | `google_cloud_speech_to_text/models/create_phrase_set_request.py` |
| `PhraseSet` | `google_cloud_speech_to_text/models/phrase_set.py` |
| `SpeechProjectsLocationsPhraseSetsCreateErrorBody` | `google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_create_error.py` |
| `GoogleRpcError` | `google_cloud_speech_to_text/models/google_rpc_error.py` |

### client.projects.speech_projects_locations_phrase_sets_delete

- **Route**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def speech_projects_locations_phrase_sets_delete(projects_id: str, locations_id: str, phrase_sets_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `phrase_sets_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `phrase_sets_id` — path `phraseSetsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, SpeechProjectsLocationsPhraseSetsDeleteErrorBody]`
- **Error**: `SpeechProjectsLocationsPhraseSetsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SpeechProjectsLocationsPhraseSetsDeleteErrorBody` | `google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_delete_error.py` |
| `GoogleRpcError` | `google_cloud_speech_to_text/models/google_rpc_error.py` |

### client.projects.speech_projects_locations_phrase_sets_get

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def speech_projects_locations_phrase_sets_get(projects_id: str, locations_id: str, phrase_sets_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `phrase_sets_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `phrase_sets_id` — path `phraseSetsId`
- **Returns (parsed)**: `PhraseSet`
- **Returns (raw)**: `ApiResult[PhraseSet, SpeechProjectsLocationsPhraseSetsGetErrorBody]`
- **Error**: `SpeechProjectsLocationsPhraseSetsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PhraseSet` | `google_cloud_speech_to_text/models/phrase_set.py` |
| `SpeechProjectsLocationsPhraseSetsGetErrorBody` | `google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_get_error.py` |
| `GoogleRpcError` | `google_cloud_speech_to_text/models/google_rpc_error.py` |

### client.projects.speech_projects_locations_phrase_sets_list

- **Route**: `GET /v1/projects/{projectsId}/locations/{locationsId}/phraseSets`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def speech_projects_locations_phrase_sets_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListPhraseSetResponse`
- **Returns (raw)**: `ApiResult[ListPhraseSetResponse, SpeechProjectsLocationsPhraseSetsListErrorBody]`
- **Error**: `SpeechProjectsLocationsPhraseSetsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListPhraseSetResponse` | `google_cloud_speech_to_text/models/list_phrase_set_response.py` |
| `SpeechProjectsLocationsPhraseSetsListErrorBody` | `google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_list_error.py` |
| `GoogleRpcError` | `google_cloud_speech_to_text/models/google_rpc_error.py` |

### client.projects.speech_projects_locations_phrase_sets_patch

- **Route**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def speech_projects_locations_phrase_sets_patch(projects_id: str, locations_id: str, phrase_sets_id: str, body: PhraseSet | PhraseSetDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `phrase_sets_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `phrase_sets_id` — path `phraseSetsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `PhraseSet`
- **Returns (raw)**: `ApiResult[PhraseSet, SpeechProjectsLocationsPhraseSetsPatchErrorBody]`
- **Error**: `SpeechProjectsLocationsPhraseSetsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PhraseSet` | `google_cloud_speech_to_text/models/phrase_set.py` |
| `PhraseSetDict` | `google_cloud_speech_to_text/models/phrase_set.py` |
| `SpeechProjectsLocationsPhraseSetsPatchErrorBody` | `google_cloud_speech_to_text/errors/speech_projects_locations_phrase_sets_patch_error.py` |
| `GoogleRpcError` | `google_cloud_speech_to_text/models/google_rpc_error.py` |

