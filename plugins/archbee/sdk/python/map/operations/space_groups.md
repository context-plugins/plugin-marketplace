<!-- Generated file — do not edit; regenerated with the SDK. -->

# SpaceGroups — operations

Accessor: `client.space_groups` · Source: `archbee/apis/space_groups.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.space_groups.create_space_group

- **Route**: `POST /space-group/create`
- **Auth**: `bearer_auth`
- **Signature**: `def create_space_group(body: SpaceGroupCreateRequest | SpaceGroupCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SpaceGroupCreateResponse`
- **Returns (raw)**: `ApiResult[SpaceGroupCreateResponse, CreateSpaceGroupErrorBody]`
- **Error**: `CreateSpaceGroupErrorBody` — **Case A (typed)**
- **Error arms**: `SpaceGroupCreate400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SpaceGroupCreateRequest` | `archbee/models/space_group_create_request.py` |
| `SpaceGroupCreateRequestDict` | `archbee/models/space_group_create_request.py` |
| `SpaceGroupCreateResponse` | `archbee/models/space_group_create_response.py` |
| `CreateSpaceGroupErrorBody` | `archbee/errors/create_space_group_error.py` |
| `SpaceGroupCreate400Error1` | `archbee/models/space_group_create400_error1.py` |

### client.space_groups.delete_space_group

- **Route**: `DELETE /space-group/delete`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_space_group(body: SpaceGroupDeleteRequest | SpaceGroupDeleteRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SpaceGroupDeleteResponse`
- **Returns (raw)**: `ApiResult[SpaceGroupDeleteResponse, DeleteSpaceGroupErrorBody]`
- **Error**: `DeleteSpaceGroupErrorBody` — **Case A (typed)**
- **Error arms**: `SpaceGroupDelete400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SpaceGroupDeleteRequest` | `archbee/models/space_group_delete_request.py` |
| `SpaceGroupDeleteRequestDict` | `archbee/models/space_group_delete_request.py` |
| `SpaceGroupDeleteResponse` | `archbee/models/space_group_delete_response.py` |
| `DeleteSpaceGroupErrorBody` | `archbee/errors/delete_space_group_error.py` |
| `SpaceGroupDelete400Error1` | `archbee/models/space_group_delete400_error1.py` |

