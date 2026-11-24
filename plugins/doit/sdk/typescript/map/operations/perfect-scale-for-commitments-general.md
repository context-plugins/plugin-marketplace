<!-- Generated file — do not edit; regenerated with the SDK. -->

# PerfectScaleForCommitmentsGeneral — operations

Accessor: `client.perfectScaleForCommitmentsGeneral` · Source: `src/resources/perfect-scale-for-commitments-general.ts` · 2 operations · Request and error types: namespace `PerfectScaleForCommitmentsGeneral`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCommitmentPolicy

- **Signature**: `getCommitmentPolicy(request: PerfectScaleForCommitmentsGeneral.GetCommitmentPolicyRequest, options?: RequestOptions): ApiPromise<CommitmentPolicyDetail, PerfectScaleForCommitmentsGeneral.GetCommitmentPolicyError>`
- **Wire**: `GET /ps4commitments/v1/general/policies/{policyId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommitmentPolicyDetail`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsGeneral.GetCommitmentPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsGeneral.GetCommitmentPolicyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `policyId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommitmentPolicyDetail` | `commitmentPolicyDetailSchema` | `src/models/commitment-policy-detail.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listCommitmentPolicies

- **Signature**: `listCommitmentPolicies(request?: PerfectScaleForCommitmentsGeneral.ListCommitmentPoliciesRequest, options?: RequestOptions): ApiPromise<Ps4CommitmentsV1GeneralPoliciesResponse, PerfectScaleForCommitmentsGeneral.ListCommitmentPoliciesError>`
- **Wire**: `GET /ps4commitments/v1/general/policies`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ps4CommitmentsV1GeneralPoliciesResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsGeneral.ListCommitmentPoliciesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [500] `ProblemDetails` · `"problemDetails5"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsGeneral.ListCommitmentPoliciesRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageToken` | `query` | — | `string` | no | — |
| `maxResults` | `query` | — | `number` | no | `50` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Ps4CommitmentsV1GeneralPoliciesResponse` | `ps4CommitmentsV1GeneralPoliciesResponseSchema` | `src/models/ps4-commitments-v1-general-policies-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

