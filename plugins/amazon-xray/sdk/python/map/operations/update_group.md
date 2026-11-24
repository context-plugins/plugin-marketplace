<!-- Generated file — do not edit; regenerated with the SDK. -->

# UpdateGroup — operations

Accessor: `client.update_group` · Source: `aws_x_ray/apis/update_group.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.update_group.update_group

- **Route**: `POST /UpdateGroup`
- **Auth**: `sigv4`
- **Signature**: `def update_group(*, body: UpdateGroupRequest | UpdateGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `UpdateGroupResult`
- **Returns (raw)**: `ApiResult[UpdateGroupResult, UpdateGroupErrorBody]`
- **Error**: `UpdateGroupErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateGroupRequest` | `aws_x_ray/models/update_group_request.py` |
| `UpdateGroupRequestDict` | `aws_x_ray/models/update_group_request.py` |
| `UpdateGroupResult` | `aws_x_ray/models/update_group_result.py` |
| `UpdateGroupErrorBody` | `aws_x_ray/errors/update_group_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

