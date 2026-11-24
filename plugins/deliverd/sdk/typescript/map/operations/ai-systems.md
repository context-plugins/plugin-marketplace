<!-- Generated file — do not edit; regenerated with the SDK. -->

# AiSystems — operations

Accessor: `client.aiSystems` · Source: `src/resources/ai-systems.ts` · 7 operations · Request and error types: namespace `AiSystems`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1AiSystems

- **Signature**: `getApiV1AiSystems(request?: AiSystems.GetApiV1AiSystemsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/ai-systems`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AiSystems.GetApiV1AiSystemsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `status` | `query` | `StatusDeliverdDevAiSystemsApi` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusDeliverdDevAiSystemsApi` | `statusDeliverdDevAiSystemsApiSchema` | `src/models/status-deliverd-dev-ai-systems-api.ts` |

### getApiV1AiSystemsById

- **Signature**: `getApiV1AiSystemsById(request: AiSystems.GetApiV1AiSystemsByIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/ai-systems/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AiSystems.GetApiV1AiSystemsByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getApiV1AiSystemsByIdTransitions

- **Signature**: `getApiV1AiSystemsByIdTransitions(request: AiSystems.GetApiV1AiSystemsByIdTransitionsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/ai-systems/{id}/transitions`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AiSystems.GetApiV1AiSystemsByIdTransitionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### patchApiV1AiSystemsById

- **Signature**: `patchApiV1AiSystemsById(request: AiSystems.PatchApiV1AiSystemsByIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, AiSystems.PatchApiV1AiSystemsByIdError>`
- **Wire**: `PATCH /api/v1/ai-systems/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `AiSystems.PatchApiV1AiSystemsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiSystems.PatchApiV1AiSystemsByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1AiSystemsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AiSystemsRequest1` | `apiV1AiSystemsRequest1Schema` | `src/models/api-v1-ai-systems-request1.ts` |

### postApiV1AiSystems

- **Signature**: `postApiV1AiSystems(request?: AiSystems.PostApiV1AiSystemsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, AiSystems.PostApiV1AiSystemsError>`
- **Wire**: `POST /api/v1/ai-systems`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `AiSystems.PostApiV1AiSystemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiSystems.PostApiV1AiSystemsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1AiSystemsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AiSystemsRequest` | `apiV1AiSystemsRequestSchema` | `src/models/api-v1-ai-systems-request.ts` |

### postApiV1AiSystemsByIdModelChange

- **Signature**: `postApiV1AiSystemsByIdModelChange(request: AiSystems.PostApiV1AiSystemsByIdModelChangeRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, AiSystems.PostApiV1AiSystemsByIdModelChangeError>`
- **Wire**: `POST /api/v1/ai-systems/{id}/model-change`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `AiSystems.PostApiV1AiSystemsByIdModelChangeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiSystems.PostApiV1AiSystemsByIdModelChangeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1AiSystemsModelChangeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AiSystemsModelChangeRequest` | `apiV1AiSystemsModelChangeRequestSchema` | `src/models/api-v1-ai-systems-model-change-request.ts` |

### postApiV1AiSystemsByIdTransitions

- **Signature**: `postApiV1AiSystemsByIdTransitions(request: AiSystems.PostApiV1AiSystemsByIdTransitionsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, AiSystems.PostApiV1AiSystemsByIdTransitionsError>`
- **Wire**: `POST /api/v1/ai-systems/{id}/transitions`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `AiSystems.PostApiV1AiSystemsByIdTransitionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiSystems.PostApiV1AiSystemsByIdTransitionsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1AiSystemsTransitionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AiSystemsTransitionsRequest` | `apiV1AiSystemsTransitionsRequestSchema` | `src/models/api-v1-ai-systems-transitions-request.ts` |

