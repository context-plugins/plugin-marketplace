<!-- Generated file — do not edit; regenerated with the SDK. -->

# Putresourcepolicy — operations

Accessor: `client.putresourcepolicy` · Source: `aws_x_ray/apis/putresourcepolicy.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.putresourcepolicy.put_resource_policy

- **Route**: `POST /PutResourcePolicy`
- **Auth**: `sigv4`
- **Signature**: `def put_resource_policy(*, body: PutResourcePolicyRequest | PutResourcePolicyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PutResourcePolicyResult`
- **Returns (raw)**: `ApiResult[PutResourcePolicyResult, PutResourcePolicyErrorBody]`
- **Error**: `PutResourcePolicyErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidPolicyRevisionIdException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PutResourcePolicyRequest` | `aws_x_ray/models/put_resource_policy_request.py` |
| `PutResourcePolicyRequestDict` | `aws_x_ray/models/put_resource_policy_request.py` |
| `PutResourcePolicyResult` | `aws_x_ray/models/put_resource_policy_result.py` |
| `PutResourcePolicyErrorBody` | `aws_x_ray/errors/put_resource_policy_error.py` |
| `InvalidPolicyRevisionIdException` | `aws_x_ray/models/invalid_policy_revision_id_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

