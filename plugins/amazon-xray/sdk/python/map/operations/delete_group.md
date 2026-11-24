<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeleteGroup — operations

Accessor: `client.delete_group` · Source: `aws_x_ray/apis/delete_group.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.delete_group.delete_group

- **Route**: `POST /DeleteGroup`
- **Auth**: `sigv4`
- **Signature**: `def delete_group(*, body: DeleteGroupRequest | DeleteGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteGroupErrorBody]`
- **Error**: `DeleteGroupErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteGroupRequest` | `aws_x_ray/models/delete_group_request.py` |
| `DeleteGroupRequestDict` | `aws_x_ray/models/delete_group_request.py` |
| `DeleteGroupErrorBody` | `aws_x_ray/errors/delete_group_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

