<!-- Generated file — do not edit; regenerated with the SDK. -->

# Experiences — operations

Accessor: `client.experiences` · Source: `contentstack/apis/experiences.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.experiences.create_experience

- **Route**: `POST /experiences`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def create_experience(x_project_uid: str, body: CreateExperienceRequest | CreateExperienceRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`, `body`
- **Params**: `x_project_uid` — header `x-project-uid` · `body` — JSON body
- **Returns (parsed)**: `Experience`
- **Returns (raw)**: `ApiResult[Experience, CreateExperienceErrorBody]`
- **Error**: `CreateExperienceErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateExperienceRequest` | `contentstack/models/create_experience_request.py` |
| `CreateExperienceRequestDict` | `contentstack/models/create_experience_request.py` |
| `Experience` | `contentstack/models/experience.py` |
| `CreateExperienceErrorBody` | `contentstack/errors/create_experience_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.experiences.delete_experience

- **Route**: `DELETE /experiences/{id}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def delete_experience(id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `x_project_uid`
- **Params**: `id_` — path `id` · `x_project_uid` — header `x-project-uid`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteExperienceErrorBody]`
- **Error**: `DeleteExperienceErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteExperienceErrorBody` | `contentstack/errors/delete_experience_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.experiences.get_all_experiences

- **Route**: `GET /experiences`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def get_all_experiences(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`
- **Params**: `x_project_uid` — header `x-project-uid`
- **Returns (parsed)**: `ExperienceList`
- **Returns (raw)**: `ApiResult[ExperienceList, GetAllExperiencesErrorBody]`
- **Error**: `GetAllExperiencesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExperienceList` | `contentstack/models/experience_list.py` |
| `GetAllExperiencesErrorBody` | `contentstack/errors/get_all_experiences_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.experiences.get_experience

- **Route**: `GET /experiences/{id}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def get_experience(id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `x_project_uid`
- **Params**: `id_` — path `id` · `x_project_uid` — header `x-project-uid`
- **Returns (parsed)**: `Experience`
- **Returns (raw)**: `ApiResult[Experience, GetExperienceErrorBody]`
- **Error**: `GetExperienceErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Experience` | `contentstack/models/experience.py` |
| `GetExperienceErrorBody` | `contentstack/errors/get_experience_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.experiences.get_experience_priority

- **Route**: `GET /experiences/priority`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def get_experience_priority(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`
- **Params**: `x_project_uid` — header `x-project-uid`
- **Returns (parsed)**: `ExperiencePriority`
- **Returns (raw)**: `ApiResult[ExperiencePriority, GetExperiencePriorityErrorBody]`
- **Error**: `GetExperiencePriorityErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExperiencePriority` | `contentstack/models/experience_priority.py` |
| `GetExperiencePriorityErrorBody` | `contentstack/errors/get_experience_priority_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.experiences.update_experience

- **Route**: `PUT /experiences/{id}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def update_experience(id_: str, x_project_uid: str, body: CreateExperienceRequest | CreateExperienceRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `x_project_uid`, `body`
- **Params**: `id_` — path `id` · `x_project_uid` — header `x-project-uid` · `body` — JSON body
- **Returns (parsed)**: `Experience`
- **Returns (raw)**: `ApiResult[Experience, UpdateExperienceErrorBody]`
- **Error**: `UpdateExperienceErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateExperienceRequest` | `contentstack/models/create_experience_request.py` |
| `CreateExperienceRequestDict` | `contentstack/models/create_experience_request.py` |
| `Experience` | `contentstack/models/experience.py` |
| `UpdateExperienceErrorBody` | `contentstack/errors/update_experience_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.experiences.update_experience_priority

- **Route**: `PUT /experiences/priority`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def update_experience_priority(x_project_uid: str, body: ExperiencePriority | ExperiencePriorityDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`, `body`
- **Params**: `x_project_uid` — header `x-project-uid` · `body` — JSON body
- **Returns (parsed)**: `ExperiencePriority`
- **Returns (raw)**: `ApiResult[ExperiencePriority, UpdateExperiencePriorityErrorBody]`
- **Error**: `UpdateExperiencePriorityErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExperiencePriority` | `contentstack/models/experience_priority.py` |
| `ExperiencePriorityDict` | `contentstack/models/experience_priority.py` |
| `UpdateExperiencePriorityErrorBody` | `contentstack/errors/update_experience_priority_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

