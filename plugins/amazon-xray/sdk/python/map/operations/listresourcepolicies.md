<!-- Generated file — do not edit; regenerated with the SDK. -->

# Listresourcepolicies — operations

Accessor: `client.listresourcepolicies` · Source: `aws_x_ray/apis/listresourcepolicies.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.listresourcepolicies.list_resource_policies

- **Route**: `POST /ListResourcePolicies`
- **Auth**: `sigv4`
- **Signature**: `def list_resource_policies(*, body: ListResourcePoliciesRequest | ListResourcePoliciesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListResourcePoliciesResult`
- **Returns (raw)**: `ApiResult[ListResourcePoliciesResult, ListResourcePoliciesErrorBody]`
- **Error**: `ListResourcePoliciesErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResourcePoliciesRequest` | `aws_x_ray/models/list_resource_policies_request.py` |
| `ListResourcePoliciesRequestDict` | `aws_x_ray/models/list_resource_policies_request.py` |
| `ListResourcePoliciesResult` | `aws_x_ray/models/list_resource_policies_result.py` |
| `ListResourcePoliciesErrorBody` | `aws_x_ray/errors/list_resource_policies_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

