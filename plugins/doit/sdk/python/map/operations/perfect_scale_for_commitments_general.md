<!-- Generated file — do not edit; regenerated with the SDK. -->

# PerfectScaleForCommitmentsGeneral — operations

Accessor: `client.perfect_scale_for_commitments_general` · Source: `doi_t/apis/perfect_scale_for_commitments_general.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.perfect_scale_for_commitments_general.get_commitment_policy

- **Route**: `GET /ps4commitments/v1/general/policies/{policyId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_commitment_policy(policy_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_id`
- **Params**: `policy_id` — path `policyId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `CommitmentPolicyDetail`
- **Returns (raw)**: `ApiResult[CommitmentPolicyDetail, GetCommitmentPolicyErrorBody]`
- **Error**: `GetCommitmentPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CommitmentPolicyDetail` | `doi_t/models/commitment_policy_detail.py` |
| `GetCommitmentPolicyErrorBody` | `doi_t/errors/get_commitment_policy_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.perfect_scale_for_commitments_general.list_commitment_policies

- **Route**: `GET /ps4commitments/v1/general/policies`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_commitment_policies(*, page_token: str | None = None, max_results: int | None = 50, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page_token` — query `pageToken` · `max_results` — query `maxResults` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `Ps4CommitmentsV1GeneralPoliciesResponse`
- **Returns (raw)**: `ApiResult[Ps4CommitmentsV1GeneralPoliciesResponse, ListCommitmentPoliciesErrorBody]`
- **Error**: `ListCommitmentPoliciesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Ps4CommitmentsV1GeneralPoliciesResponse` | `doi_t/models/ps4_commitments_v1_general_policies_response.py` |
| `ListCommitmentPoliciesErrorBody` | `doi_t/errors/list_commitment_policies_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

