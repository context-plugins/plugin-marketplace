<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectPolicyApi — operations

Accessor: `client.project_policy_api` · Source: `amazon_rekognition/apis/project_policy_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.project_policy_api.delete_project_policy

- **Route**: `POST /#DeleteProjectPolicy`
- **Auth**: `sigv4`
- **Signature**: `def delete_project_policy(x_amz_target: XAmzTargetAmazonRekognitionProjectPolicyApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteProjectPolicyErrorBody]`
- **Error**: `DeleteProjectPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionProjectPolicyApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_project_policy_api.py` |
| `DeleteProjectPolicyErrorBody` | `amazon_rekognition/errors/delete_project_policy_error.py` |

### client.project_policy_api.list_project_policies

- **Route**: `POST /#ListProjectPolicies`
- **Auth**: `sigv4`
- **Signature**: `def list_project_policies(x_amz_target: XAmzTarget1AmazonRekognitionProjectPolicyApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListProjectPoliciesErrorBody]`
- **Error**: `ListProjectPoliciesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionProjectPolicyApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_project_policy_api.py` |
| `ListProjectPoliciesErrorBody` | `amazon_rekognition/errors/list_project_policies_error.py` |

### client.project_policy_api.put_project_policy

- **Route**: `POST /#PutProjectPolicy`
- **Auth**: `sigv4`
- **Signature**: `def put_project_policy(x_amz_target: XAmzTarget2AmazonRekognitionProjectPolicyApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PutProjectPolicyErrorBody]`
- **Error**: `PutProjectPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonRekognitionProjectPolicyApiOrStr` | `amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_project_policy_api.py` |
| `PutProjectPolicyErrorBody` | `amazon_rekognition/errors/put_project_policy_error.py` |

