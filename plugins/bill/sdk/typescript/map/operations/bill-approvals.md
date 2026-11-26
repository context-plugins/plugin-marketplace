<!-- Generated file — do not edit; regenerated with the SDK. -->

# BillApprovals — operations

Accessor: `client.billApprovals` · Source: `src/resources/bill-approvals.ts` · 6 operations · Request and error types: namespace `BillApprovals`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### billApproveDenyActions

- **Signature**: `billApproveDenyActions(request: BillApprovals.BillApproveDenyActionsRequest, options?: RequestOptions): ApiPromise<StatusDto, BillApprovals.BillApproveDenyActionsError>`
- **Wire**: `POST /v3/bill-approvals/actions`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatusDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `BillApprovals.BillApproveDenyActionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillApprovals.BillApproveDenyActionsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `BillApproveDenyActionRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillApproveDenyActionRequestDto` | `billApproveDenyActionRequestDtoSchema` | `src/models/bill-approve-deny-action-request-dto.ts` |
| `StatusDto` | `statusDtoSchema` | `src/models/status-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createBillApprovalPolicy

- **Signature**: `createBillApprovalPolicy(request: BillApprovals.CreateBillApprovalPolicyRequest, options?: RequestOptions): ApiPromise<BillApprovalPolicyResponseDto, BillApprovals.CreateBillApprovalPolicyError>`
- **Wire**: `POST /v3/bill-approvals/policies`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BillApprovalPolicyResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `BillApprovals.CreateBillApprovalPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillApprovals.CreateBillApprovalPolicyRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `BillApprovalPolicyRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillApprovalPolicyRequestDto` | `billApprovalPolicyRequestDtoSchema` | `src/models/bill-approval-policy-request-dto.ts` |
| `BillApprovalPolicyResponseDto` | `billApprovalPolicyResponseDtoSchema` | `src/models/bill-approval-policy-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### deletePolicy

- **Signature**: `deletePolicy(request: BillApprovals.DeletePolicyRequest, options?: RequestOptions): ApiPromise<StatusDto, BillApprovals.DeletePolicyError>`
- **Wire**: `DELETE /v3/bill-approvals/policies/{policyId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatusDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `BillApprovals.DeletePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillApprovals.DeletePolicyRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `policyId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusDto` | `statusDtoSchema` | `src/models/status-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listBillApprovalPolicies

- **Signature**: `listBillApprovalPolicies(request?: BillApprovals.ListBillApprovalPoliciesRequest, options?: RequestOptions): ApiPromise<BillApprovalPolicyResponseDto[], BillApprovals.ListBillApprovalPoliciesError>`
- **Wire**: `GET /v3/bill-approvals/policies`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BillApprovalPolicyResponseDto[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BillError` with `kind: "api"`, an instance of `BillApprovals.ListBillApprovalPoliciesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillApprovals.ListBillApprovalPoliciesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillApprovalPolicyResponseDto` | `billApprovalPolicyResponseDtoSchema` | `src/models/bill-approval-policy-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listBillUserApprovals

- **Signature**: `listBillUserApprovals(request?: BillApprovals.ListBillUserApprovalsRequest, options?: RequestOptions): ApiPromise<ListBillUserApprovalsResponseDto, BillApprovals.ListBillUserApprovalsError>`
- **Wire**: `GET /v3/bill-approvals/pending-user-approvals`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListBillUserApprovalsResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `BillApprovals.ListBillUserApprovalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillApprovals.ListBillUserApprovalsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBillUserApprovalsResponseDto` | `listBillUserApprovalsResponseDtoSchema` | `src/models/list-bill-user-approvals-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateBillApprovalPolicy

- **Signature**: `updateBillApprovalPolicy(request: BillApprovals.UpdateBillApprovalPolicyRequest, options?: RequestOptions): ApiPromise<BillApprovalPolicyResponseDto, BillApprovals.UpdateBillApprovalPolicyError>`
- **Wire**: `PUT /v3/bill-approvals/policies/{policyId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BillApprovalPolicyResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `BillApprovals.UpdateBillApprovalPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillApprovals.UpdateBillApprovalPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `policyId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `BillApprovalPolicyRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillApprovalPolicyRequestDto` | `billApprovalPolicyRequestDtoSchema` | `src/models/bill-approval-policy-request-dto.ts` |
| `BillApprovalPolicyResponseDto` | `billApprovalPolicyResponseDtoSchema` | `src/models/bill-approval-policy-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

