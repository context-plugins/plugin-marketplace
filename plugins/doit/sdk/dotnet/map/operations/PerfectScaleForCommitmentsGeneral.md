<!-- Generated file — do not edit; regenerated with the SDK. -->

# PerfectScaleForCommitmentsGeneral — operations

Accessor: `client.PerfectScaleForCommitmentsGeneral` · Source: `src/DoiT/Api/PerfectScaleForCommitmentsGeneral.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCommitmentPolicy

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCommitmentPolicy(GetCommitmentPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyId`
- **Returns**: `CommitmentPolicyDetail`
- **Error**: `ApiException<GetCommitmentPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCommitmentPolicyRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsGeneral/GetCommitmentPolicyRequest.cs` |
| `CommitmentPolicyDetail` | `src/DoiT/Models/CommitmentPolicyDetail.cs` |
| `GetCommitmentPolicyError` | `src/DoiT/Errors/GetCommitmentPolicyError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListCommitmentPolicies

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListCommitmentPolicies(ListCommitmentPoliciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `pageToken` ← `PageToken`, `maxResults` ← `MaxResults`
- **Returns**: `Ps4CommitmentsV1GeneralPoliciesResponse`
- **Error**: `ApiException<ListCommitmentPoliciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCommitmentPoliciesRequest` | `src/DoiT/Requests/PerfectScaleForCommitmentsGeneral/ListCommitmentPoliciesRequest.cs` |
| `Ps4CommitmentsV1GeneralPoliciesResponse` | `src/DoiT/Models/Ps4CommitmentsV1GeneralPoliciesResponse.cs` |
| `ListCommitmentPoliciesError` | `src/DoiT/Errors/ListCommitmentPoliciesError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

