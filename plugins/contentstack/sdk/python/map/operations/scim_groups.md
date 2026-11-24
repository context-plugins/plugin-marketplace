<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScimGroups — operations

Accessor: `client.scim_groups` · Source: `contentstack/apis/scim_groups.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.scim_groups.create_scim_group

- **Route**: `POST /scim/v2.0/organizations/{organization_uid}/Groups`
- **Auth**: `bearer_auth`
- **Server**: `default_contentstack_scim_scim_groups_api`
- **Signature**: `def create_scim_group(organization_uid: str, body: ScimGroup | ScimGroupDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `body`
- **Params**: `organization_uid` — path · `body` — JSON body
- **Returns (parsed)**: `ScimGroup`
- **Returns (raw)**: `ApiResult[ScimGroup, CreateScimGroupErrorBody]`
- **Error**: `CreateScimGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimGroup` | `contentstack/models/scim_group.py` |
| `ScimGroupDict` | `contentstack/models/scim_group.py` |
| `CreateScimGroupErrorBody` | `contentstack/errors/create_scim_group_error.py` |
| `ScimError` | `contentstack/models/scim_error.py` |

### client.scim_groups.delete_scim_group

- **Route**: `DELETE /scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`
- **Auth**: `bearer_auth`
- **Server**: `default_contentstack_scim_scim_groups_api`
- **Signature**: `def delete_scim_group(organization_uid: str, group_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `group_id`
- **Params**: `organization_uid` — path · `group_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteScimGroupErrorBody]`
- **Error**: `DeleteScimGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteScimGroupErrorBody` | `contentstack/errors/delete_scim_group_error.py` |
| `ScimError` | `contentstack/models/scim_error.py` |

### client.scim_groups.get_scim_group

- **Route**: `GET /scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`
- **Auth**: `bearer_auth`
- **Server**: `default_contentstack_scim_scim_groups_api`
- **Signature**: `def get_scim_group(organization_uid: str, group_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `group_id`
- **Params**: `organization_uid` — path · `group_id` — path
- **Returns (parsed)**: `ScimGroup`
- **Returns (raw)**: `ApiResult[ScimGroup, GetScimGroupErrorBody]`
- **Error**: `GetScimGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimGroup` | `contentstack/models/scim_group.py` |
| `GetScimGroupErrorBody` | `contentstack/errors/get_scim_group_error.py` |
| `ScimError` | `contentstack/models/scim_error.py` |

### client.scim_groups.list_scim_groups

- **Route**: `GET /scim/v2.0/organizations/{organization_uid}/Groups`
- **Auth**: `bearer_auth`
- **Server**: `default_contentstack_scim_scim_groups_api`
- **Signature**: `def list_scim_groups(organization_uid: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`
- **Params**: `organization_uid` — path · `filter_` — query `filter`
- **Returns (parsed)**: `ScimListResponse`
- **Returns (raw)**: `ApiResult[ScimListResponse, ListScimGroupsErrorBody]`
- **Error**: `ListScimGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimListResponse` | `contentstack/models/scim_list_response.py` |
| `ListScimGroupsErrorBody` | `contentstack/errors/list_scim_groups_error.py` |
| `ScimError` | `contentstack/models/scim_error.py` |

### client.scim_groups.replace_scim_group

- **Route**: `PUT /scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`
- **Auth**: `bearer_auth`
- **Server**: `default_contentstack_scim_scim_groups_api`
- **Signature**: `def replace_scim_group(organization_uid: str, group_id: str, body: ScimGroup | ScimGroupDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `group_id`, `body`
- **Params**: `organization_uid` — path · `group_id` — path · `body` — JSON body
- **Returns (parsed)**: `ScimGroup`
- **Returns (raw)**: `ApiResult[ScimGroup, ReplaceScimGroupErrorBody]`
- **Error**: `ReplaceScimGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimGroup` | `contentstack/models/scim_group.py` |
| `ScimGroupDict` | `contentstack/models/scim_group.py` |
| `ReplaceScimGroupErrorBody` | `contentstack/errors/replace_scim_group_error.py` |
| `ScimError` | `contentstack/models/scim_error.py` |

### client.scim_groups.update_scim_group

- **Route**: `PATCH /scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`
- **Auth**: `bearer_auth`
- **Server**: `default_contentstack_scim_scim_groups_api`
- **Signature**: `def update_scim_group(organization_uid: str, group_id: str, body: ScimPatchRequest | ScimPatchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `group_id`, `body`
- **Params**: `organization_uid` — path · `group_id` — path · `body` — JSON body
- **Returns (parsed)**: `ScimGroup`
- **Returns (raw)**: `ApiResult[ScimGroup, UpdateScimGroupErrorBody]`
- **Error**: `UpdateScimGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ScimError` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScimPatchRequest` | `contentstack/models/scim_patch_request.py` |
| `ScimPatchRequestDict` | `contentstack/models/scim_patch_request.py` |
| `ScimGroup` | `contentstack/models/scim_group.py` |
| `UpdateScimGroupErrorBody` | `contentstack/errors/update_scim_group_error.py` |
| `ScimError` | `contentstack/models/scim_error.py` |

