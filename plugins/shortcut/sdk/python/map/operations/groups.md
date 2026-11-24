<!-- Generated file — do not edit; regenerated with the SDK. -->

# Groups — operations

Accessor: `client.groups` · Source: `shortcut/apis/groups.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.groups.create_group

- **Route**: `POST /api/v3/groups`
- **Auth**: `api_token`
- **Signature**: `def create_group(body: CreateGroup | CreateGroupDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Group`
- **Returns (raw)**: `ApiResult[Group, CreateGroupErrorBody]`
- **Error**: `CreateGroupErrorBody` — **Case A (typed)**
- **Error arms**: `UnusableEntitlementError` [403] · `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateGroup` | `shortcut/models/create_group.py` |
| `CreateGroupDict` | `shortcut/models/create_group.py` |
| `Group` | `shortcut/models/group.py` |
| `CreateGroupErrorBody` | `shortcut/errors/create_group_error.py` |
| `UnusableEntitlementError` | `shortcut/models/unusable_entitlement_error.py` |

### client.groups.get_group

- **Route**: `GET /api/v3/groups/{group-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_group(group_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_public_id`
- **Params**: `group_public_id` — path `group-public-id`
- **Returns (parsed)**: `Group`
- **Returns (raw)**: `ApiResult[Group, GetGroupErrorBody]`
- **Error**: `GetGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Group` | `shortcut/models/group.py` |
| `GetGroupErrorBody` | `shortcut/errors/get_group_error.py` |

### client.groups.list_group_stories

- **Route**: `GET /api/v3/groups/{group-public-id}/stories`
- **Auth**: `api_token`
- **Signature**: `def list_group_stories(group_public_id: UUID, *, limit: int | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_public_id`
- **Params**: `group_public_id` — path `group-public-id` · `limit` — query · `offset` — query
- **Returns (parsed)**: `list[StorySlim]`
- **Returns (raw)**: `ApiResult[list[StorySlim], ListGroupStoriesErrorBody]`
- **Error**: `ListGroupStoriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `StorySlim` | `shortcut/models/story_slim.py` |
| `ListGroupStoriesErrorBody` | `shortcut/errors/list_group_stories_error.py` |

### client.groups.list_groups

- **Route**: `GET /api/v3/groups`
- **Auth**: `api_token`
- **Signature**: `def list_groups(*, archived: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `archived` — query
- **Returns (parsed)**: `list[Group]`
- **Returns (raw)**: `ApiResult[list[Group], ListGroupsErrorBody]`
- **Error**: `ListGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Group` | `shortcut/models/group.py` |
| `ListGroupsErrorBody` | `shortcut/errors/list_groups_error.py` |

### client.groups.update_group

- **Route**: `PUT /api/v3/groups/{group-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_group(group_public_id: UUID, body: UpdateGroup | UpdateGroupDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_public_id`, `body`
- **Params**: `group_public_id` — path `group-public-id` · `body` — JSON body
- **Returns (parsed)**: `Group`
- **Returns (raw)**: `ApiResult[Group, UpdateGroupErrorBody]`
- **Error**: `UpdateGroupErrorBody` — **Case A (typed)**
- **Error arms**: `UnusableEntitlementError` [403] · `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateGroup` | `shortcut/models/update_group.py` |
| `UpdateGroupDict` | `shortcut/models/update_group.py` |
| `Group` | `shortcut/models/group.py` |
| `UpdateGroupErrorBody` | `shortcut/errors/update_group_error.py` |
| `UnusableEntitlementError` | `shortcut/models/unusable_entitlement_error.py` |

