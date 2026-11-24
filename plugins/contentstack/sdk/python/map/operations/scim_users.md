<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScimUsers — operations

Accessor: `client.scim_users` · Source: `contentstack/apis/scim_users.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.scim_users.create_scim_user

- **Route**: `POST /scim/v2.0/organizations/{organization_uid}/Users`
- **Auth**: `bearer_auth`
- **Server**: `default_contentstack_scim_scim_groups_api`
- **Signature**: `def create_scim_user(organization_uid: str, body: ScimUser | ScimUserDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `body`
- **Params**: `organization_uid` — path · `body` — JSON body
- **Returns (parsed)**: `ScimUser`
- **Returns (raw)**: `ApiResult[ScimUser, CreateScimUserErrorBody]`
- **Error**: `CreateScimUserErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [400, 401, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimUser` | `contentstack/models/scim_user.py` |
| `ScimUserDict` | `contentstack/models/scim_user.py` |
| `CreateScimUserErrorBody` | `contentstack/errors/create_scim_user_error.py` |
| `ScimError` | `contentstack/models/scim_error.py` |

### client.scim_users.get_scim_user

- **Route**: `GET /scim/v2.0/organizations/{organization_uid}/Users/{user_id}`
- **Auth**: `bearer_auth`
- **Server**: `default_contentstack_scim_scim_groups_api`
- **Signature**: `def get_scim_user(organization_uid: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `user_id`
- **Params**: `organization_uid` — path · `user_id` — path
- **Returns (parsed)**: `ScimUser`
- **Returns (raw)**: `ApiResult[ScimUser, GetScimUserErrorBody]`
- **Error**: `GetScimUserErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimUser` | `contentstack/models/scim_user.py` |
| `GetScimUserErrorBody` | `contentstack/errors/get_scim_user_error.py` |
| `ScimError` | `contentstack/models/scim_error.py` |

### client.scim_users.list_scim_users

- **Route**: `GET /scim/v2.0/organizations/{organization_uid}/Users`
- **Auth**: `bearer_auth`
- **Server**: `default_contentstack_scim_scim_groups_api`
- **Signature**: `def list_scim_users(organization_uid: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`
- **Params**: `organization_uid` — path · `filter_` — query `filter`
- **Returns (parsed)**: `ScimListResponse`
- **Returns (raw)**: `ApiResult[ScimListResponse, ListScimUsersErrorBody]`
- **Error**: `ListScimUsersErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimListResponse` | `contentstack/models/scim_list_response.py` |
| `ListScimUsersErrorBody` | `contentstack/errors/list_scim_users_error.py` |
| `ScimError` | `contentstack/models/scim_error.py` |

### client.scim_users.replace_scim_user

- **Route**: `PUT /scim/v2.0/organizations/{organization_uid}/Users/{user_id}`
- **Auth**: `bearer_auth`
- **Server**: `default_contentstack_scim_scim_groups_api`
- **Signature**: `def replace_scim_user(organization_uid: str, user_id: str, body: ScimUser | ScimUserDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `user_id`, `body`
- **Params**: `organization_uid` — path · `user_id` — path · `body` — JSON body
- **Returns (parsed)**: `ScimUser`
- **Returns (raw)**: `ApiResult[ScimUser, ReplaceScimUserErrorBody]`
- **Error**: `ReplaceScimUserErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimUser` | `contentstack/models/scim_user.py` |
| `ScimUserDict` | `contentstack/models/scim_user.py` |
| `ReplaceScimUserErrorBody` | `contentstack/errors/replace_scim_user_error.py` |
| `ScimError` | `contentstack/models/scim_error.py` |

### client.scim_users.update_scim_user

- **Route**: `PATCH /scim/v2.0/organizations/{organization_uid}/Users/{user_id}`
- **Auth**: `bearer_auth`
- **Server**: `default_contentstack_scim_scim_groups_api`
- **Signature**: `def update_scim_user(organization_uid: str, user_id: str, body: ScimPatchRequest | ScimPatchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `user_id`, `body`
- **Params**: `organization_uid` — path · `user_id` — path · `body` — JSON body
- **Returns (parsed)**: `ScimUser`
- **Returns (raw)**: `ApiResult[ScimUser, UpdateScimUserErrorBody]`
- **Error**: `UpdateScimUserErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimPatchRequest` | `contentstack/models/scim_patch_request.py` |
| `ScimPatchRequestDict` | `contentstack/models/scim_patch_request.py` |
| `ScimUser` | `contentstack/models/scim_user.py` |
| `UpdateScimUserErrorBody` | `contentstack/errors/update_scim_user_error.py` |
| `ScimError` | `contentstack/models/scim_error.py` |

