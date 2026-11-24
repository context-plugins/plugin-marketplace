<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deleteresourcepolicy — operations

Accessor: `client.deleteresourcepolicy` · Source: `aws_x_ray/apis/deleteresourcepolicy.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.deleteresourcepolicy.delete_resource_policy

- **Route**: `POST /DeleteResourcePolicy`
- **Auth**: `sigv4`
- **Signature**: `def delete_resource_policy(*, body: DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteResourcePolicyErrorBody]`
- **Error**: `DeleteResourcePolicyErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidPolicyRevisionIdException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteResourcePolicyRequest` | `aws_x_ray/models/delete_resource_policy_request.py` |
| `DeleteResourcePolicyRequestDict` | `aws_x_ray/models/delete_resource_policy_request.py` |
| `DeleteResourcePolicyErrorBody` | `aws_x_ray/errors/delete_resource_policy_error.py` |
| `InvalidPolicyRevisionIdException` | `aws_x_ray/models/invalid_policy_revision_id_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

