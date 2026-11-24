<!-- Generated file — do not edit; regenerated with the SDK. -->

# Approvals — operations

Accessor: `client.approvals` · Source: `src/resources/approvals.ts` · 6 operations · Request and error types: namespace `Approvals`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Approvals

- **Signature**: `getApiV1Approvals(request?: Approvals.GetApiV1ApprovalsRequest, options?: RequestOptions): ApiPromise<ApiV1ApprovalsResponse1, ApiError>`
- **Wire**: `GET /api/v1/approvals`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ApprovalsResponse1`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Approvals.GetApiV1ApprovalsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |
| `status` | `query` | `Status1` | no |
| `externalId` | `query` | `string` | no |
| `approver` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status1` | `status1Schema` | `src/models/status1.ts` |
| `ApiV1ApprovalsResponse1` | `apiV1ApprovalsResponse1Schema` | `src/models/api-v1-approvals-response1.ts` |

### getApiV1ApprovalsById

- **Signature**: `getApiV1ApprovalsById(request: Approvals.GetApiV1ApprovalsByIdRequest, options?: RequestOptions): ApiPromise<ApiV1ApprovalsResponse, Approvals.GetApiV1ApprovalsByIdError>`
- **Wire**: `GET /api/v1/approvals/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ApprovalsResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Approvals.GetApiV1ApprovalsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.GetApiV1ApprovalsByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ApprovalsResponse` | `apiV1ApprovalsResponseSchema` | `src/models/api-v1-approvals-response.ts` |

### postApiV1Approvals

- **Signature**: `postApiV1Approvals(request?: Approvals.PostApiV1ApprovalsRequest, options?: RequestOptions): ApiPromise<ApiV1ApprovalsResponse, Approvals.PostApiV1ApprovalsError>`
- **Wire**: `POST /api/v1/approvals`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ApprovalsResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Approvals.PostApiV1ApprovalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.PostApiV1ApprovalsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ApprovalsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ApprovalsRequest` | `apiV1ApprovalsRequestSchema` | `src/models/api-v1-approvals-request.ts` |
| `ApiV1ApprovalsResponse` | `apiV1ApprovalsResponseSchema` | `src/models/api-v1-approvals-response.ts` |

### postApiV1ApprovalsByIdAnswers

- **Signature**: `postApiV1ApprovalsByIdAnswers(request: Approvals.PostApiV1ApprovalsByIdAnswersRequest, options?: RequestOptions): ApiPromise<ApiV1ApprovalsAnswersResponse, Approvals.PostApiV1ApprovalsByIdAnswersError>`
- **Wire**: `POST /api/v1/approvals/{id}/answers`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ApprovalsAnswersResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Approvals.PostApiV1ApprovalsByIdAnswersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.PostApiV1ApprovalsByIdAnswersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ApprovalsAnswersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ApprovalsAnswersRequest` | `apiV1ApprovalsAnswersRequestSchema` | `src/models/api-v1-approvals-answers-request.ts` |
| `ApiV1ApprovalsAnswersResponse` | `apiV1ApprovalsAnswersResponseSchema` | `src/models/api-v1-approvals-answers-response.ts` |

### postApiV1ApprovalsByIdCancel

- **Signature**: `postApiV1ApprovalsByIdCancel(request: Approvals.PostApiV1ApprovalsByIdCancelRequest, options?: RequestOptions): ApiPromise<ApiV1ApprovalsCancelResponse, Approvals.PostApiV1ApprovalsByIdCancelError>`
- **Wire**: `POST /api/v1/approvals/{id}/cancel`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ApprovalsCancelResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Approvals.PostApiV1ApprovalsByIdCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.PostApiV1ApprovalsByIdCancelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ApprovalsCancelResponse` | `apiV1ApprovalsCancelResponseSchema` | `src/models/api-v1-approvals-cancel-response.ts` |

### postApiV1ApprovalsByIdSessions

- **Signature**: `postApiV1ApprovalsByIdSessions(request: Approvals.PostApiV1ApprovalsByIdSessionsRequest, options?: RequestOptions): ApiPromise<ApiV1ApprovalsSessionsResponse, Approvals.PostApiV1ApprovalsByIdSessionsError>`
- **Wire**: `POST /api/v1/approvals/{id}/sessions`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ApprovalsSessionsResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Approvals.PostApiV1ApprovalsByIdSessionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Approvals.PostApiV1ApprovalsByIdSessionsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ApprovalsSessionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ApprovalsSessionsRequest` | `apiV1ApprovalsSessionsRequestSchema` | `src/models/api-v1-approvals-sessions-request.ts` |
| `ApiV1ApprovalsSessionsResponse` | `apiV1ApprovalsSessionsResponseSchema` | `src/models/api-v1-approvals-sessions-response.ts` |

