<!-- Generated file — do not edit; regenerated with the SDK. -->

# Audiences — operations

Accessor: `client.audiences` · Source: `contentstack/apis/audiences.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.audiences.create_audience

- **Route**: `POST /audiences`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def create_audience(x_project_uid: str, body: CreateAudienceRequest | CreateAudienceRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`, `body`
- **Params**: `x_project_uid` — header `x-project-uid` · `body` — JSON body
- **Returns (parsed)**: `Audience`
- **Returns (raw)**: `ApiResult[Audience, CreateAudienceErrorBody]`
- **Error**: `CreateAudienceErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateAudienceRequest` | `contentstack/models/create_audience_request.py` |
| `CreateAudienceRequestDict` | `contentstack/models/create_audience_request.py` |
| `Audience` | `contentstack/models/audience.py` |
| `CreateAudienceErrorBody` | `contentstack/errors/create_audience_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.audiences.delete_audience

- **Route**: `DELETE /audiences/{id}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def delete_audience(id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `x_project_uid`
- **Params**: `id_` — path `id` · `x_project_uid` — header `x-project-uid`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAudienceErrorBody]`
- **Error**: `DeleteAudienceErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAudienceErrorBody` | `contentstack/errors/delete_audience_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.audiences.get_all_audiences

- **Route**: `GET /audiences`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def get_all_audiences(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_project_uid`
- **Params**: `x_project_uid` — header `x-project-uid`
- **Returns (parsed)**: `AudienceList`
- **Returns (raw)**: `ApiResult[AudienceList, GetAllAudiencesErrorBody]`
- **Error**: `GetAllAudiencesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AudienceList` | `contentstack/models/audience_list.py` |
| `GetAllAudiencesErrorBody` | `contentstack/errors/get_all_audiences_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

### client.audiences.update_audience

- **Route**: `PUT /audiences/{id}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_personalize_management_attributes_api`
- **Signature**: `def update_audience(id_: str, x_project_uid: str, body: CreateAudienceRequest | CreateAudienceRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `x_project_uid`, `body`
- **Params**: `id_` — path `id` · `x_project_uid` — header `x-project-uid` · `body` — JSON body
- **Returns (parsed)**: `Audience`
- **Returns (raw)**: `ApiResult[Audience, UpdateAudienceErrorBody]`
- **Error**: `UpdateAudienceErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorContentstackPersonalizeManagementAttributesApi` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateAudienceRequest` | `contentstack/models/create_audience_request.py` |
| `CreateAudienceRequestDict` | `contentstack/models/create_audience_request.py` |
| `Audience` | `contentstack/models/audience.py` |
| `UpdateAudienceErrorBody` | `contentstack/errors/update_audience_error.py` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `contentstack/models/error_contentstack_personalize_management_attributes_api.py` |

