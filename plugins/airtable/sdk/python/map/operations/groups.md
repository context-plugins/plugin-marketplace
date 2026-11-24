<!-- Generated file — do not edit; regenerated with the SDK. -->

# Groups — operations

Accessor: `client.groups` · Source: `airtable/apis/groups.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.groups.create_scim_group

- **Route**: `POST /Groups`
- **Auth**: `bearer_auth`
- **Server**: `default_airtable_scim_groups_api`
- **Signature**: `def create_scim_group(body: ScimGroupCreateRequest | ScimGroupCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ScimGroup`
- **Returns (raw)**: `ApiResult[ScimGroup, CreateScimGroupErrorBody]`
- **Error**: `CreateScimGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [400, 401, 403, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimGroupCreateRequest` | `airtable/models/scim_group_create_request.py` |
| `ScimGroupCreateRequestDict` | `airtable/models/scim_group_create_request.py` |
| `ScimGroup` | `airtable/models/scim_group.py` |
| `CreateScimGroupErrorBody` | `airtable/errors/create_scim_group_error.py` |
| `ScimError` | `airtable/models/scim_error.py` |

### client.groups.delete_scim_group

- **Route**: `DELETE /Groups/{groupId}`
- **Auth**: `bearer_auth`
- **Server**: `default_airtable_scim_groups_api`
- **Signature**: `def delete_scim_group(group_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_id`
- **Params**: `group_id` — path `groupId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteScimGroupErrorBody]`
- **Error**: `DeleteScimGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteScimGroupErrorBody` | `airtable/errors/delete_scim_group_error.py` |
| `ScimError` | `airtable/models/scim_error.py` |

### client.groups.get_scim_group

- **Route**: `GET /Groups/{groupId}`
- **Auth**: `bearer_auth`
- **Server**: `default_airtable_scim_groups_api`
- **Signature**: `def get_scim_group(group_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_id`
- **Params**: `group_id` — path `groupId`
- **Returns (parsed)**: `ScimGroup`
- **Returns (raw)**: `ApiResult[ScimGroup, GetScimGroupErrorBody]`
- **Error**: `GetScimGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimGroup` | `airtable/models/scim_group.py` |
| `GetScimGroupErrorBody` | `airtable/errors/get_scim_group_error.py` |
| `ScimError` | `airtable/models/scim_error.py` |

### client.groups.list_scim_groups

- **Route**: `GET /Groups`
- **Auth**: `bearer_auth`
- **Server**: `default_airtable_scim_groups_api`
- **Signature**: `def list_scim_groups(*, filter_: str | None = None, start_index: int | None = 1, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `filter` · `start_index` — query `startIndex` · `count` — query
- **Returns (parsed)**: `ScimGroupListResponse`
- **Returns (raw)**: `ApiResult[ScimGroupListResponse, ListScimGroupsErrorBody]`
- **Error**: `ListScimGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [401, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimGroupListResponse` | `airtable/models/scim_group_list_response.py` |
| `ListScimGroupsErrorBody` | `airtable/errors/list_scim_groups_error.py` |
| `ScimError` | `airtable/models/scim_error.py` |

### client.groups.replace_scim_group

- **Route**: `PUT /Groups/{groupId}`
- **Auth**: `bearer_auth`
- **Server**: `default_airtable_scim_groups_api`
- **Signature**: `def replace_scim_group(group_id: str, body: ScimGroupCreateRequest | ScimGroupCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_id`, `body`
- **Params**: `group_id` — path `groupId` · `body` — JSON body
- **Returns (parsed)**: `ScimGroup`
- **Returns (raw)**: `ApiResult[ScimGroup, ReplaceScimGroupErrorBody]`
- **Error**: `ReplaceScimGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimGroupCreateRequest` | `airtable/models/scim_group_create_request.py` |
| `ScimGroupCreateRequestDict` | `airtable/models/scim_group_create_request.py` |
| `ScimGroup` | `airtable/models/scim_group.py` |
| `ReplaceScimGroupErrorBody` | `airtable/errors/replace_scim_group_error.py` |
| `ScimError` | `airtable/models/scim_error.py` |

### client.groups.update_scim_group

- **Route**: `PATCH /Groups/{groupId}`
- **Auth**: `bearer_auth`
- **Server**: `default_airtable_scim_groups_api`
- **Signature**: `def update_scim_group(group_id: str, body: ScimPatchRequest | ScimPatchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_id`, `body`
- **Params**: `group_id` — path `groupId` · `body` — JSON body
- **Returns (parsed)**: `ScimGroup`
- **Returns (raw)**: `ApiResult[ScimGroup, UpdateScimGroupErrorBody]`
- **Error**: `UpdateScimGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimPatchRequest` | `airtable/models/scim_patch_request.py` |
| `ScimPatchRequestDict` | `airtable/models/scim_patch_request.py` |
| `ScimGroup` | `airtable/models/scim_group.py` |
| `UpdateScimGroupErrorBody` | `airtable/errors/update_scim_group_error.py` |
| `ScimError` | `airtable/models/scim_error.py` |

