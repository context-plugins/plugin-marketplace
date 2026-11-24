<!-- Generated file — do not edit; regenerated with the SDK. -->

# Flows — operations

Accessor: `client.flows` · Source: `src/resources/flows.ts` · 6 operations · Request and error types: namespace `Flows`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Flows

- **Signature**: `getApiV1Flows(request?: Flows.GetApiV1FlowsRequest, options?: RequestOptions): ApiPromise<ApiV1FlowsResponse1, ApiError>`
- **Wire**: `GET /api/v1/flows`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1FlowsResponse1`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Flows.GetApiV1FlowsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |
| `status` | `query` | `StatusDeliverdDevFlowsApi` | no |
| `externalId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusDeliverdDevFlowsApi` | `statusDeliverdDevFlowsApiSchema` | `src/models/status-deliverd-dev-flows-api.ts` |
| `ApiV1FlowsResponse1` | `apiV1FlowsResponse1Schema` | `src/models/api-v1-flows-response1.ts` |

### getApiV1FlowsById

- **Signature**: `getApiV1FlowsById(request: Flows.GetApiV1FlowsByIdRequest, options?: RequestOptions): ApiPromise<ApiV1FlowsResponse, Flows.GetApiV1FlowsByIdError>`
- **Wire**: `GET /api/v1/flows/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1FlowsResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Flows.GetApiV1FlowsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Flows.GetApiV1FlowsByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1FlowsResponse` | `apiV1FlowsResponseSchema` | `src/models/api-v1-flows-response.ts` |

### getApiV1FlowsByIdEvidence

- **Signature**: `getApiV1FlowsByIdEvidence(request: Flows.GetApiV1FlowsByIdEvidenceRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Flows.GetApiV1FlowsByIdEvidenceError>`
- **Wire**: `GET /api/v1/flows/{id}/evidence`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Flows.GetApiV1FlowsByIdEvidenceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Flows.GetApiV1FlowsByIdEvidenceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `format` | `query` | `Format` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |

### postApiV1Flows

- **Signature**: `postApiV1Flows(request?: Flows.PostApiV1FlowsRequest, options?: RequestOptions): ApiPromise<ApiV1FlowsResponse, ApiError>`
- **Wire**: `POST /api/v1/flows`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1FlowsResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Flows.PostApiV1FlowsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1FlowsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1FlowsRequest` | `apiV1FlowsRequestSchema` | `src/models/api-v1-flows-request.ts` |
| `ApiV1FlowsResponse` | `apiV1FlowsResponseSchema` | `src/models/api-v1-flows-response.ts` |

### postApiV1FlowsByIdCancel

- **Signature**: `postApiV1FlowsByIdCancel(request: Flows.PostApiV1FlowsByIdCancelRequest, options?: RequestOptions): ApiPromise<ApiV1FlowsCancelResponse, Flows.PostApiV1FlowsByIdCancelError>`
- **Wire**: `POST /api/v1/flows/{id}/cancel`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1FlowsCancelResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Flows.PostApiV1FlowsByIdCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Flows.PostApiV1FlowsByIdCancelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1FlowsCancelResponse` | `apiV1FlowsCancelResponseSchema` | `src/models/api-v1-flows-cancel-response.ts` |

### postApiV1FlowsByIdComplete

- **Signature**: `postApiV1FlowsByIdComplete(request: Flows.PostApiV1FlowsByIdCompleteRequest, options?: RequestOptions): ApiPromise<ApiV1FlowsCompleteResponse, Flows.PostApiV1FlowsByIdCompleteError>`
- **Wire**: `POST /api/v1/flows/{id}/complete`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1FlowsCompleteResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Flows.PostApiV1FlowsByIdCompleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Flows.PostApiV1FlowsByIdCompleteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1FlowsCompleteResponse` | `apiV1FlowsCompleteResponseSchema` | `src/models/api-v1-flows-complete-response.ts` |

