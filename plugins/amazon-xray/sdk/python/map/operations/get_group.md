<!-- Generated file — do not edit; regenerated with the SDK. -->

# GetGroup — operations

Accessor: `client.get_group` · Source: `aws_x_ray/apis/get_group.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.get_group.get_group

- **Route**: `POST /GetGroup`
- **Auth**: `sigv4`
- **Signature**: `def get_group(*, body: GetGroupRequest | GetGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetGroupResult`
- **Returns (raw)**: `ApiResult[GetGroupResult, GetGroupErrorBody]`
- **Error**: `GetGroupErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetGroupRequest` | `aws_x_ray/models/get_group_request.py` |
| `GetGroupRequestDict` | `aws_x_ray/models/get_group_request.py` |
| `GetGroupResult` | `aws_x_ray/models/get_group_result.py` |
| `GetGroupErrorBody` | `aws_x_ray/errors/get_group_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

