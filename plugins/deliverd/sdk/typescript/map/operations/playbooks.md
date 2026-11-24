<!-- Generated file — do not edit; regenerated with the SDK. -->

# Playbooks — operations

Accessor: `client.playbooks` · Source: `src/resources/playbooks.ts` · 8 operations · Request and error types: namespace `Playbooks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Playbooks

- **Signature**: `getApiV1Playbooks(request?: Playbooks.GetApiV1PlaybooksRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/playbooks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Playbooks.GetApiV1PlaybooksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `kind` | `query` | `KindDeliverdDevPlaybooksApi` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `KindDeliverdDevPlaybooksApi` | `kindDeliverdDevPlaybooksApiSchema` | `src/models/kind-deliverd-dev-playbooks-api.ts` |

### getApiV1PlaybooksById

- **Signature**: `getApiV1PlaybooksById(request: Playbooks.GetApiV1PlaybooksByIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Playbooks.GetApiV1PlaybooksByIdError>`
- **Wire**: `GET /api/v1/playbooks/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Playbooks.GetApiV1PlaybooksByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playbooks.GetApiV1PlaybooksByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### patchApiV1PlaybooksById

- **Signature**: `patchApiV1PlaybooksById(request: Playbooks.PatchApiV1PlaybooksByIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Playbooks.PatchApiV1PlaybooksByIdError>`
- **Wire**: `PATCH /api/v1/playbooks/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Playbooks.PatchApiV1PlaybooksByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playbooks.PatchApiV1PlaybooksByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1PlaybooksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PlaybooksRequest` | `apiV1PlaybooksRequestSchema` | `src/models/api-v1-playbooks-request.ts` |

### postApiV1Playbooks

- **Signature**: `postApiV1Playbooks(request?: Playbooks.PostApiV1PlaybooksRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Playbooks.PostApiV1PlaybooksError>`
- **Wire**: `POST /api/v1/playbooks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Playbooks.PostApiV1PlaybooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playbooks.PostApiV1PlaybooksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1PlaybooksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PlaybooksRequest` | `apiV1PlaybooksRequestSchema` | `src/models/api-v1-playbooks-request.ts` |

### postApiV1PlaybooksByIdApproval

- **Signature**: `postApiV1PlaybooksByIdApproval(request: Playbooks.PostApiV1PlaybooksByIdApprovalRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Playbooks.PostApiV1PlaybooksByIdApprovalError>`
- **Wire**: `POST /api/v1/playbooks/{id}/approval`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Playbooks.PostApiV1PlaybooksByIdApprovalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playbooks.PostApiV1PlaybooksByIdApprovalRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1PlaybooksApprovalRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PlaybooksApprovalRequest` | `apiV1PlaybooksApprovalRequestSchema` | `src/models/api-v1-playbooks-approval-request.ts` |

### postApiV1PlaybooksByIdStart

- **Signature**: `postApiV1PlaybooksByIdStart(request: Playbooks.PostApiV1PlaybooksByIdStartRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Playbooks.PostApiV1PlaybooksByIdStartError>`
- **Wire**: `POST /api/v1/playbooks/{id}/start`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Playbooks.PostApiV1PlaybooksByIdStartError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playbooks.PostApiV1PlaybooksByIdStartRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1PlaybooksStartRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PlaybooksStartRequest` | `apiV1PlaybooksStartRequestSchema` | `src/models/api-v1-playbooks-start-request.ts` |

### postApiV1PlaybooksByIdUse

- **Signature**: `postApiV1PlaybooksByIdUse(request: Playbooks.PostApiV1PlaybooksByIdUseRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Playbooks.PostApiV1PlaybooksByIdUseError>`
- **Wire**: `POST /api/v1/playbooks/{id}/use`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Playbooks.PostApiV1PlaybooksByIdUseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playbooks.PostApiV1PlaybooksByIdUseRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1PlaybooksUseRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PlaybooksUseRequest` | `apiV1PlaybooksUseRequestSchema` | `src/models/api-v1-playbooks-use-request.ts` |

### postApiV1PlaybooksByIdVersions

- **Signature**: `postApiV1PlaybooksByIdVersions(request: Playbooks.PostApiV1PlaybooksByIdVersionsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Playbooks.PostApiV1PlaybooksByIdVersionsError>`
- **Wire**: `POST /api/v1/playbooks/{id}/versions`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Playbooks.PostApiV1PlaybooksByIdVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Playbooks.PostApiV1PlaybooksByIdVersionsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1PlaybooksVersionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PlaybooksVersionsRequest` | `apiV1PlaybooksVersionsRequestSchema` | `src/models/api-v1-playbooks-versions-request.ts` |

