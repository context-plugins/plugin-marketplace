<!-- Generated file — do not edit; regenerated with the SDK. -->

# Creategroup — operations

Accessor: `client.creategroup` · Source: `aws_x_ray/apis/creategroup.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.creategroup.create_group

- **Route**: `POST /CreateGroup`
- **Auth**: `sigv4`
- **Signature**: `def create_group(*, body: CreateGroupRequest | CreateGroupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CreateGroupResult`
- **Returns (raw)**: `ApiResult[CreateGroupResult, CreateGroupErrorBody]`
- **Error**: `CreateGroupErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateGroupRequest` | `aws_x_ray/models/create_group_request.py` |
| `CreateGroupRequestDict` | `aws_x_ray/models/create_group_request.py` |
| `CreateGroupResult` | `aws_x_ray/models/create_group_result.py` |
| `CreateGroupErrorBody` | `aws_x_ray/errors/create_group_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

