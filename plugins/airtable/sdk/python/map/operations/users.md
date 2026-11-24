<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `airtable/apis/users.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.users.create_scim_user

- **Route**: `POST /Users`
- **Auth**: `bearer_auth`
- **Server**: `default_airtable_scim_groups_api`
- **Signature**: `def create_scim_user(body: ScimUserCreateRequest | ScimUserCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ScimUser`
- **Returns (raw)**: `ApiResult[ScimUser, CreateScimUserErrorBody]`
- **Error**: `CreateScimUserErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [400, 401, 403, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimUserCreateRequest` | `airtable/models/scim_user_create_request.py` |
| `ScimUserCreateRequestDict` | `airtable/models/scim_user_create_request.py` |
| `ScimUser` | `airtable/models/scim_user.py` |
| `CreateScimUserErrorBody` | `airtable/errors/create_scim_user_error.py` |
| `ScimError` | `airtable/models/scim_error.py` |

### client.users.delete_scim_user

- **Route**: `DELETE /Users/{userId}`
- **Auth**: `bearer_auth`
- **Server**: `default_airtable_scim_groups_api`
- **Signature**: `def delete_scim_user(user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteScimUserErrorBody]`
- **Error**: `DeleteScimUserErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteScimUserErrorBody` | `airtable/errors/delete_scim_user_error.py` |
| `ScimError` | `airtable/models/scim_error.py` |

### client.users.get_scim_user

- **Route**: `GET /Users/{userId}`
- **Auth**: `bearer_auth`
- **Server**: `default_airtable_scim_groups_api`
- **Signature**: `def get_scim_user(user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId`
- **Returns (parsed)**: `ScimUser`
- **Returns (raw)**: `ApiResult[ScimUser, GetScimUserErrorBody]`
- **Error**: `GetScimUserErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimUser` | `airtable/models/scim_user.py` |
| `GetScimUserErrorBody` | `airtable/errors/get_scim_user_error.py` |
| `ScimError` | `airtable/models/scim_error.py` |

### client.users.list_scim_users

- **Route**: `GET /Users`
- **Auth**: `bearer_auth`
- **Server**: `default_airtable_scim_groups_api`
- **Signature**: `def list_scim_users(*, filter_: str | None = None, start_index: int | None = 1, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `filter` · `start_index` — query `startIndex` · `count` — query
- **Returns (parsed)**: `ScimUserListResponse`
- **Returns (raw)**: `ApiResult[ScimUserListResponse, ListScimUsersErrorBody]`
- **Error**: `ListScimUsersErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [401, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimUserListResponse` | `airtable/models/scim_user_list_response.py` |
| `ListScimUsersErrorBody` | `airtable/errors/list_scim_users_error.py` |
| `ScimError` | `airtable/models/scim_error.py` |

### client.users.replace_scim_user

- **Route**: `PUT /Users/{userId}`
- **Auth**: `bearer_auth`
- **Server**: `default_airtable_scim_groups_api`
- **Signature**: `def replace_scim_user(user_id: str, body: ScimUserCreateRequest | ScimUserCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `ScimUser`
- **Returns (raw)**: `ApiResult[ScimUser, ReplaceScimUserErrorBody]`
- **Error**: `ReplaceScimUserErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimUserCreateRequest` | `airtable/models/scim_user_create_request.py` |
| `ScimUserCreateRequestDict` | `airtable/models/scim_user_create_request.py` |
| `ScimUser` | `airtable/models/scim_user.py` |
| `ReplaceScimUserErrorBody` | `airtable/errors/replace_scim_user_error.py` |
| `ScimError` | `airtable/models/scim_error.py` |

### client.users.update_scim_user

- **Route**: `PATCH /Users/{userId}`
- **Auth**: `bearer_auth`
- **Server**: `default_airtable_scim_groups_api`
- **Signature**: `def update_scim_user(user_id: str, body: ScimPatchRequest | ScimPatchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `body`
- **Params**: `user_id` — path `userId` · `body` — JSON body
- **Returns (parsed)**: `ScimUser`
- **Returns (raw)**: `ApiResult[ScimUser, UpdateScimUserErrorBody]`
- **Error**: `UpdateScimUserErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimPatchRequest` | `airtable/models/scim_patch_request.py` |
| `ScimPatchRequestDict` | `airtable/models/scim_patch_request.py` |
| `ScimUser` | `airtable/models/scim_user.py` |
| `UpdateScimUserErrorBody` | `airtable/errors/update_scim_user_error.py` |
| `ScimError` | `airtable/models/scim_error.py` |

