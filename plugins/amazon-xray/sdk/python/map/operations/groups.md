<!-- Generated file — do not edit; regenerated with the SDK. -->

# Groups — operations

Accessor: `client.groups` · Source: `aws_x_ray/apis/groups.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.groups.get_groups

- **Route**: `POST /Groups`
- **Auth**: `sigv4`
- **Signature**: `def get_groups(*, body: GroupsRequest | GroupsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetGroupsResult`
- **Returns (raw)**: `ApiResult[GetGroupsResult, GetGroupsErrorBody]`
- **Error**: `GetGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GroupsRequest` | `aws_x_ray/models/groups_request.py` |
| `GroupsRequestDict` | `aws_x_ray/models/groups_request.py` |
| `GetGroupsResult` | `aws_x_ray/models/get_groups_result.py` |
| `GetGroupsErrorBody` | `aws_x_ray/errors/get_groups_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

