<!-- Generated file — do not edit; regenerated with the SDK. -->

# Knowledge — operations

Accessor: `client.knowledge` · Source: `src/resources/knowledge.ts` · 7 operations · Request and error types: namespace `Knowledge`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Knowledge

- **Signature**: `getApiV1Knowledge(request?: Knowledge.GetApiV1KnowledgeRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/knowledge`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Knowledge.GetApiV1KnowledgeRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | no |
| `kind` | `query` | `KindDeliverdDevKnowledgeApi` | no |
| `status` | `query` | `StatusDeliverdDevKnowledgeApi` | no |
| `workspaceId` | `query` | `string` | no |
| `flowId` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `KindDeliverdDevKnowledgeApi` | `kindDeliverdDevKnowledgeApiSchema` | `src/models/kind-deliverd-dev-knowledge-api.ts` |
| `StatusDeliverdDevKnowledgeApi` | `statusDeliverdDevKnowledgeApiSchema` | `src/models/status-deliverd-dev-knowledge-api.ts` |

### getApiV1KnowledgeAgentsMd

- **Signature**: `getApiV1KnowledgeAgentsMd(request?: Knowledge.GetApiV1KnowledgeAgentsMdRequest, options?: RequestOptions): ApiPromise<string, ApiError>`
- **Wire**: `GET /api/v1/knowledge/agents-md`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Knowledge.GetApiV1KnowledgeAgentsMdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `workspaceId` | `query` | `string` | no |

### getApiV1KnowledgeById

- **Signature**: `getApiV1KnowledgeById(request: Knowledge.GetApiV1KnowledgeByIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Knowledge.GetApiV1KnowledgeByIdError>`
- **Wire**: `GET /api/v1/knowledge/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Knowledge.GetApiV1KnowledgeByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Knowledge.GetApiV1KnowledgeByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getApiV1KnowledgeExport

- **Signature**: `getApiV1KnowledgeExport(request?: Knowledge.GetApiV1KnowledgeExportRequest, options?: RequestOptions): ApiPromise<string, ApiError>`
- **Wire**: `GET /api/v1/knowledge/export`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Knowledge.GetApiV1KnowledgeExportRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `format` | `query` | `FormatDeliverdDevKnowledgeApi` | no |
| `status` | `query` | `StatusDeliverdDevKnowledgeApi` | no |
| `workspaceId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FormatDeliverdDevKnowledgeApi` | `formatDeliverdDevKnowledgeApiSchema` | `src/models/format-deliverd-dev-knowledge-api.ts` |
| `StatusDeliverdDevKnowledgeApi` | `statusDeliverdDevKnowledgeApiSchema` | `src/models/status-deliverd-dev-knowledge-api.ts` |

### patchApiV1KnowledgeById

- **Signature**: `patchApiV1KnowledgeById(request: Knowledge.PatchApiV1KnowledgeByIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Knowledge.PatchApiV1KnowledgeByIdError>`
- **Wire**: `PATCH /api/v1/knowledge/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Knowledge.PatchApiV1KnowledgeByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Knowledge.PatchApiV1KnowledgeByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1KnowledgeRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1KnowledgeRequest1` | `apiV1KnowledgeRequest1Schema` | `src/models/api-v1-knowledge-request1.ts` |

### postApiV1Knowledge

- **Signature**: `postApiV1Knowledge(request?: Knowledge.PostApiV1KnowledgeRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Knowledge.PostApiV1KnowledgeError>`
- **Wire**: `POST /api/v1/knowledge`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Knowledge.PostApiV1KnowledgeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Knowledge.PostApiV1KnowledgeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1KnowledgeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1KnowledgeRequest` | `apiV1KnowledgeRequestSchema` | `src/models/api-v1-knowledge-request.ts` |

### postApiV1KnowledgeImport

- **Signature**: `postApiV1KnowledgeImport(request?: Knowledge.PostApiV1KnowledgeImportRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Knowledge.PostApiV1KnowledgeImportError>`
- **Wire**: `POST /api/v1/knowledge/import`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Knowledge.PostApiV1KnowledgeImportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Knowledge.PostApiV1KnowledgeImportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1KnowledgeImportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1KnowledgeImportRequest` | `apiV1KnowledgeImportRequestSchema` | `src/models/api-v1-knowledge-import-request.ts` |

