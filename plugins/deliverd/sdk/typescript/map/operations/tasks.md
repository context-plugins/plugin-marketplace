<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.tasks` · Source: `src/resources/tasks.ts` · 24 operations · Request and error types: namespace `Tasks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Tasks

- **Signature**: `getApiV1Tasks(request?: Tasks.GetApiV1TasksRequest, options?: RequestOptions): ApiPromise<ApiV1TasksResponse2, ApiError>`
- **Wire**: `GET /api/v1/tasks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1TasksResponse2`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tasks.GetApiV1TasksRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |
| `status` | `query` | `Status2DeliverdDevTasksApi` | no |
| `externalId` | `query` | `string` | no |
| `q` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status2DeliverdDevTasksApi` | `status2DeliverdDevTasksApiSchema` | `src/models/status2-deliverd-dev-tasks-api.ts` |
| `ApiV1TasksResponse2` | `apiV1TasksResponse2Schema` | `src/models/api-v1-tasks-response2.ts` |

### getApiV1TasksById

- **Signature**: `getApiV1TasksById(request: Tasks.GetApiV1TasksByIdRequest, options?: RequestOptions): ApiPromise<ApiV1TasksResponse, Tasks.GetApiV1TasksByIdError>`
- **Wire**: `GET /api/v1/tasks/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1TasksResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.GetApiV1TasksByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetApiV1TasksByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksResponse` | `apiV1TasksResponseSchema` | `src/models/api-v1-tasks-response.ts` |

### getApiV1TasksByIdContext

- **Signature**: `getApiV1TasksByIdContext(request: Tasks.GetApiV1TasksByIdContextRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/tasks/{id}/context`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tasks.GetApiV1TasksByIdContextRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getApiV1TasksByIdContextGiven

- **Signature**: `getApiV1TasksByIdContextGiven(request: Tasks.GetApiV1TasksByIdContextGivenRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/tasks/{id}/context-given`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tasks.GetApiV1TasksByIdContextGivenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getApiV1TasksByIdGovernance

- **Signature**: `getApiV1TasksByIdGovernance(request: Tasks.GetApiV1TasksByIdGovernanceRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tasks.GetApiV1TasksByIdGovernanceError>`
- **Wire**: `GET /api/v1/tasks/{id}/governance`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.GetApiV1TasksByIdGovernanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetApiV1TasksByIdGovernanceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getApiV1TasksByIdGovernanceGate

- **Signature**: `getApiV1TasksByIdGovernanceGate(request: Tasks.GetApiV1TasksByIdGovernanceGateRequest, options?: RequestOptions): ApiPromise<ApiV1TasksGovernanceGateResponse, Tasks.GetApiV1TasksByIdGovernanceGateError>`
- **Wire**: `GET /api/v1/tasks/{id}/governance/gate`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1TasksGovernanceGateResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.GetApiV1TasksByIdGovernanceGateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetApiV1TasksByIdGovernanceGateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `action` | `query` | `ActionDeliverdDevGovernanceApi` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActionDeliverdDevGovernanceApi` | `actionDeliverdDevGovernanceApiSchema` | `src/models/action-deliverd-dev-governance-api.ts` |
| `ApiV1TasksGovernanceGateResponse` | `apiV1TasksGovernanceGateResponseSchema` | `src/models/api-v1-tasks-governance-gate-response.ts` |

### getApiV1TasksByIdGovernancePack

- **Signature**: `getApiV1TasksByIdGovernancePack(request: Tasks.GetApiV1TasksByIdGovernancePackRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/tasks/{id}/governance/pack`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tasks.GetApiV1TasksByIdGovernancePackRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getApiV1TasksByIdGraph

- **Signature**: `getApiV1TasksByIdGraph(request: Tasks.GetApiV1TasksByIdGraphRequest, options?: RequestOptions): ApiPromise<ApiV1TasksGraphResponse, ApiError>`
- **Wire**: `GET /api/v1/tasks/{id}/graph`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1TasksGraphResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tasks.GetApiV1TasksByIdGraphRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksGraphResponse` | `apiV1TasksGraphResponseSchema` | `src/models/api-v1-tasks-graph-response.ts` |

### patchApiV1TasksById

- **Signature**: `patchApiV1TasksById(request: Tasks.PatchApiV1TasksByIdRequest, options?: RequestOptions): ApiPromise<ApiV1TasksResponse, Tasks.PatchApiV1TasksByIdError>`
- **Wire**: `PATCH /api/v1/tasks/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1TasksResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.PatchApiV1TasksByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.PatchApiV1TasksByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1TasksRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksRequest1` | `apiV1TasksRequest1Schema` | `src/models/api-v1-tasks-request1.ts` |
| `ApiV1TasksResponse` | `apiV1TasksResponseSchema` | `src/models/api-v1-tasks-response.ts` |

### patchApiV1TasksByIdGovernance

- **Signature**: `patchApiV1TasksByIdGovernance(request: Tasks.PatchApiV1TasksByIdGovernanceRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tasks.PatchApiV1TasksByIdGovernanceError>`
- **Wire**: `PATCH /api/v1/tasks/{id}/governance`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.PatchApiV1TasksByIdGovernanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"error403"` [403] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.PatchApiV1TasksByIdGovernanceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1TasksGovernanceRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksGovernanceRequest1` | `apiV1TasksGovernanceRequest1Schema` | `src/models/api-v1-tasks-governance-request1.ts` |

### postApiV1Tasks

- **Signature**: `postApiV1Tasks(request?: Tasks.PostApiV1TasksRequest, options?: RequestOptions): ApiPromise<ApiV1TasksResponse, ApiError>`
- **Wire**: `POST /api/v1/tasks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1TasksResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tasks.PostApiV1TasksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1TasksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksRequest` | `apiV1TasksRequestSchema` | `src/models/api-v1-tasks-request.ts` |
| `ApiV1TasksResponse` | `apiV1TasksResponseSchema` | `src/models/api-v1-tasks-response.ts` |

### postApiV1TasksByIdApply

- **Signature**: `postApiV1TasksByIdApply(request: Tasks.PostApiV1TasksByIdApplyRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tasks.PostApiV1TasksByIdApplyError>`
- **Wire**: `POST /api/v1/tasks/{id}/apply`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.PostApiV1TasksByIdApplyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.PostApiV1TasksByIdApplyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1TasksApplyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksApplyRequest` | `apiV1TasksApplyRequestSchema` | `src/models/api-v1-tasks-apply-request.ts` |

### postApiV1TasksByIdCancel

- **Signature**: `postApiV1TasksByIdCancel(request: Tasks.PostApiV1TasksByIdCancelRequest, options?: RequestOptions): ApiPromise<ApiV1TasksCancelResponse, Tasks.PostApiV1TasksByIdCancelError>`
- **Wire**: `POST /api/v1/tasks/{id}/cancel`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1TasksCancelResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.PostApiV1TasksByIdCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.PostApiV1TasksByIdCancelRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1TasksCancelRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksCancelRequest` | `apiV1TasksCancelRequestSchema` | `src/models/api-v1-tasks-cancel-request.ts` |
| `ApiV1TasksCancelResponse` | `apiV1TasksCancelResponseSchema` | `src/models/api-v1-tasks-cancel-response.ts` |

### postApiV1TasksByIdComplete

- **Signature**: `postApiV1TasksByIdComplete(request: Tasks.PostApiV1TasksByIdCompleteRequest, options?: RequestOptions): ApiPromise<ApiV1TasksCompleteResponse, Tasks.PostApiV1TasksByIdCompleteError>`
- **Wire**: `POST /api/v1/tasks/{id}/complete`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1TasksCompleteResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.PostApiV1TasksByIdCompleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.PostApiV1TasksByIdCompleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1TasksCompleteRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksCompleteRequest` | `apiV1TasksCompleteRequestSchema` | `src/models/api-v1-tasks-complete-request.ts` |
| `ApiV1TasksCompleteResponse` | `apiV1TasksCompleteResponseSchema` | `src/models/api-v1-tasks-complete-response.ts` |

### postApiV1TasksByIdFindings

- **Signature**: `postApiV1TasksByIdFindings(request: Tasks.PostApiV1TasksByIdFindingsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /api/v1/tasks/{id}/findings`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tasks.PostApiV1TasksByIdFindingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1TasksFindingsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksFindingsRequest` | `apiV1TasksFindingsRequestSchema` | `src/models/api-v1-tasks-findings-request.ts` |

### postApiV1TasksByIdFindingsByFindingIdApproval

- **Signature**: `postApiV1TasksByIdFindingsByFindingIdApproval(request: Tasks.PostApiV1TasksByIdFindingsByFindingIdApprovalRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tasks.PostApiV1TasksByIdFindingsByFindingIdApprovalError>`
- **Wire**: `POST /api/v1/tasks/{id}/findings/{findingId}/approval`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.PostApiV1TasksByIdFindingsByFindingIdApprovalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.PostApiV1TasksByIdFindingsByFindingIdApprovalRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `findingId` | `path` | `string` | yes |
| `body` | `body` | `ApiV1TasksFindingsApprovalRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksFindingsApprovalRequest` | `apiV1TasksFindingsApprovalRequestSchema` | `src/models/api-v1-tasks-findings-approval-request.ts` |

### postApiV1TasksByIdFindingsByFindingIdKnowledge

- **Signature**: `postApiV1TasksByIdFindingsByFindingIdKnowledge(request: Tasks.PostApiV1TasksByIdFindingsByFindingIdKnowledgeRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tasks.PostApiV1TasksByIdFindingsByFindingIdKnowledgeError>`
- **Wire**: `POST /api/v1/tasks/{id}/findings/{findingId}/knowledge`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.PostApiV1TasksByIdFindingsByFindingIdKnowledgeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.PostApiV1TasksByIdFindingsByFindingIdKnowledgeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `findingId` | `path` | `string` | yes |
| `body` | `body` | `ApiV1TasksFindingsKnowledgeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksFindingsKnowledgeRequest` | `apiV1TasksFindingsKnowledgeRequestSchema` | `src/models/api-v1-tasks-findings-knowledge-request.ts` |

### postApiV1TasksByIdGovernance

- **Signature**: `postApiV1TasksByIdGovernance(request: Tasks.PostApiV1TasksByIdGovernanceRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tasks.PostApiV1TasksByIdGovernanceError>`
- **Wire**: `POST /api/v1/tasks/{id}/governance`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.PostApiV1TasksByIdGovernanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.PostApiV1TasksByIdGovernanceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1TasksGovernanceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksGovernanceRequest` | `apiV1TasksGovernanceRequestSchema` | `src/models/api-v1-tasks-governance-request.ts` |

### postApiV1TasksByIdGovernanceControlsByKeyApproval

- **Signature**: `postApiV1TasksByIdGovernanceControlsByKeyApproval(request: Tasks.PostApiV1TasksByIdGovernanceControlsByKeyApprovalRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tasks.PostApiV1TasksByIdGovernanceControlsByKeyApprovalError>`
- **Wire**: `POST /api/v1/tasks/{id}/governance/controls/{key}/approval`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.PostApiV1TasksByIdGovernanceControlsByKeyApprovalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.PostApiV1TasksByIdGovernanceControlsByKeyApprovalRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `key` | `path` | `string` | yes |
| `body` | `body` | `ApiV1TasksGovernanceControlsApprovalRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksGovernanceControlsApprovalRequest` | `apiV1TasksGovernanceControlsApprovalRequestSchema` | `src/models/api-v1-tasks-governance-controls-approval-request.ts` |

### postApiV1TasksByIdGovernanceEvidence

- **Signature**: `postApiV1TasksByIdGovernanceEvidence(request: Tasks.PostApiV1TasksByIdGovernanceEvidenceRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tasks.PostApiV1TasksByIdGovernanceEvidenceError>`
- **Wire**: `POST /api/v1/tasks/{id}/governance/evidence`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.PostApiV1TasksByIdGovernanceEvidenceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"error409"` [409] no body · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.PostApiV1TasksByIdGovernanceEvidenceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1TasksGovernanceEvidenceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksGovernanceEvidenceRequest` | `apiV1TasksGovernanceEvidenceRequestSchema` | `src/models/api-v1-tasks-governance-evidence-request.ts` |

### postApiV1TasksByIdGovernanceReassessments

- **Signature**: `postApiV1TasksByIdGovernanceReassessments(request: Tasks.PostApiV1TasksByIdGovernanceReassessmentsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tasks.PostApiV1TasksByIdGovernanceReassessmentsError>`
- **Wire**: `POST /api/v1/tasks/{id}/governance/reassessments`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.PostApiV1TasksByIdGovernanceReassessmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.PostApiV1TasksByIdGovernanceReassessmentsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1TasksGovernanceReassessmentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksGovernanceReassessmentsRequest` | `apiV1TasksGovernanceReassessmentsRequestSchema` | `src/models/api-v1-tasks-governance-reassessments-request.ts` |

### postApiV1TasksByIdLinks

- **Signature**: `postApiV1TasksByIdLinks(request: Tasks.PostApiV1TasksByIdLinksRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /api/v1/tasks/{id}/links`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tasks.PostApiV1TasksByIdLinksRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1TasksLinksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksLinksRequest` | `apiV1TasksLinksRequestSchema` | `src/models/api-v1-tasks-links-request.ts` |

### postApiV1TasksByIdReopen

- **Signature**: `postApiV1TasksByIdReopen(request: Tasks.PostApiV1TasksByIdReopenRequest, options?: RequestOptions): ApiPromise<ApiV1TasksReopenResponse, Tasks.PostApiV1TasksByIdReopenError>`
- **Wire**: `POST /api/v1/tasks/{id}/reopen`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1TasksReopenResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.PostApiV1TasksByIdReopenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.PostApiV1TasksByIdReopenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksReopenResponse` | `apiV1TasksReopenResponseSchema` | `src/models/api-v1-tasks-reopen-response.ts` |

### postApiV1TasksByIdSideTasks

- **Signature**: `postApiV1TasksByIdSideTasks(request: Tasks.PostApiV1TasksByIdSideTasksRequest, options?: RequestOptions): ApiPromise<ApiV1TasksSideTasksResponse, Tasks.PostApiV1TasksByIdSideTasksError>`
- **Wire**: `POST /api/v1/tasks/{id}/side-tasks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1TasksSideTasksResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Tasks.PostApiV1TasksByIdSideTasksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.PostApiV1TasksByIdSideTasksRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1TasksSideTasksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TasksSideTasksRequest` | `apiV1TasksSideTasksRequestSchema` | `src/models/api-v1-tasks-side-tasks-request.ts` |
| `ApiV1TasksSideTasksResponse` | `apiV1TasksSideTasksResponseSchema` | `src/models/api-v1-tasks-side-tasks-response.ts` |

