<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sources — operations

Accessor: `client.sources` · Source: `src/resources/sources.ts` · 22 operations · Request and error types: namespace `Sources`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createInput

- **Signature**: `createInput(request: Sources.CreateInputRequest, options?: RequestOptions): ApiPromise<CountedInputResponse, Sources.CreateInputError>`
- **Wire**: `POST /system/inputs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedInputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.CreateInputError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error409"` [409] no body · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.CreateInputRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedInputResponse` | `countedInputResponseSchema` | `src/models/counted-input-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createInputHecTokenById

- **Signature**: `createInputHecTokenById(request: Sources.CreateInputHecTokenByIdRequest, options?: RequestOptions): ApiPromise<CountedInputSplunkHec, Sources.CreateInputHecTokenByIdError>`
- **Wire**: `POST /system/inputs/{id}/hectoken`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedInputSplunkHec`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.CreateInputHecTokenByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.CreateInputHecTokenByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `AddHecTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddHecTokenRequest` | `addHecTokenRequestSchema` | `src/models/add-hec-token-request.ts` |
| `CountedInputSplunkHec` | `countedInputSplunkHecSchema` | `src/models/counted-input-splunk-hec.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createInputSystemByPack

- **Signature**: `createInputSystemByPack(request: Sources.CreateInputSystemByPackRequest, options?: RequestOptions): ApiPromise<CountedInputResponse, Sources.CreateInputSystemByPackError>`
- **Wire**: `POST /p/{pack}/system/inputs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedInputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.CreateInputSystemByPackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error409"` [409] no body · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.CreateInputSystemByPackRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pack` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedInputResponse` | `countedInputResponseSchema` | `src/models/counted-input-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createInputSystemHecTokenByPackAndId

- **Signature**: `createInputSystemHecTokenByPackAndId(request: Sources.CreateInputSystemHecTokenByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedInputSplunkHec, Sources.CreateInputSystemHecTokenByPackAndIdError>`
- **Wire**: `POST /p/{pack}/system/inputs/{id}/hectoken`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedInputSplunkHec`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.CreateInputSystemHecTokenByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.CreateInputSystemHecTokenByPackAndIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |
| `body` | `body` | `AddHecTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddHecTokenRequest` | `addHecTokenRequestSchema` | `src/models/add-hec-token-request.ts` |
| `CountedInputSplunkHec` | `countedInputSplunkHecSchema` | `src/models/counted-input-splunk-hec.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteInputById

- **Signature**: `deleteInputById(request: Sources.DeleteInputByIdRequest, options?: RequestOptions): ApiPromise<CountedInputResponse, Sources.DeleteInputByIdError>`
- **Wire**: `DELETE /system/inputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedInputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.DeleteInputByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.DeleteInputByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedInputResponse` | `countedInputResponseSchema` | `src/models/counted-input-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteInputPqById

- **Signature**: `deleteInputPqById(request: Sources.DeleteInputPqByIdRequest, options?: RequestOptions): ApiPromise<CountedString, Sources.DeleteInputPqByIdError>`
- **Wire**: `DELETE /system/inputs/{id}/pq`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedString`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.DeleteInputPqByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.DeleteInputPqByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedString` | `countedStringSchema` | `src/models/counted-string.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteInputSystemByPackAndId

- **Signature**: `deleteInputSystemByPackAndId(request: Sources.DeleteInputSystemByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedInputResponse, Sources.DeleteInputSystemByPackAndIdError>`
- **Wire**: `DELETE /p/{pack}/system/inputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedInputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.DeleteInputSystemByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.DeleteInputSystemByPackAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedInputResponse` | `countedInputResponseSchema` | `src/models/counted-input-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteInputSystemPqByPackAndId

- **Signature**: `deleteInputSystemPqByPackAndId(request: Sources.DeleteInputSystemPqByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedString, Sources.DeleteInputSystemPqByPackAndIdError>`
- **Wire**: `DELETE /p/{pack}/system/inputs/{id}/pq`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedString`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.DeleteInputSystemPqByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.DeleteInputSystemPqByPackAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedString` | `countedStringSchema` | `src/models/counted-string.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getInput

- **Signature**: `getInput(request: Sources.GetInputRequest, options?: RequestOptions): ApiPromise<PaginatedInputResponse, Sources.GetInputError>`
- **Wire**: `GET /system/inputs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedInputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.GetInputError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.GetInputRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `string[]` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedInputResponse` | `paginatedInputResponseSchema` | `src/models/paginated-input-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getInputById

- **Signature**: `getInputById(request: Sources.GetInputByIdRequest, options?: RequestOptions): ApiPromise<CountedInputResponse, Sources.GetInputByIdError>`
- **Wire**: `GET /system/inputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedInputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.GetInputByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.GetInputByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedInputResponse` | `countedInputResponseSchema` | `src/models/counted-input-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getInputPqById

- **Signature**: `getInputPqById(request: Sources.GetInputPqByIdRequest, options?: RequestOptions): ApiPromise<CountedJobInfo, Sources.GetInputPqByIdError>`
- **Wire**: `GET /system/inputs/{id}/pq`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedJobInfo`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.GetInputPqByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.GetInputPqByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedJobInfo` | `countedJobInfoSchema` | `src/models/counted-job-info.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getInputStatus

- **Signature**: `getInputStatus(request: Sources.GetInputStatusRequest, options?: RequestOptions): ApiPromise<PaginatedInputStatus, Sources.GetInputStatusError>`
- **Wire**: `GET /system/status/inputs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedInputStatus`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.GetInputStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.GetInputStatusRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `metrics` | `query` | `boolean` | no |
| `type` | `query` | `boolean` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedInputStatus` | `paginatedInputStatusSchema` | `src/models/paginated-input-status.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getInputStatusById

- **Signature**: `getInputStatusById(request: Sources.GetInputStatusByIdRequest, options?: RequestOptions): ApiPromise<CountedInputStatus, Sources.GetInputStatusByIdError>`
- **Wire**: `GET /system/status/inputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedInputStatus`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.GetInputStatusByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.GetInputStatusByIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `metrics` | `query` | `boolean` | no |
| `type` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedInputStatus` | `countedInputStatusSchema` | `src/models/counted-input-status.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getInputStatusSystemInputsByPack

- **Signature**: `getInputStatusSystemInputsByPack(request: Sources.GetInputStatusSystemInputsByPackRequest, options?: RequestOptions): ApiPromise<PaginatedInputStatus, Sources.GetInputStatusSystemInputsByPackError>`
- **Wire**: `GET /p/{pack}/system/status/inputs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedInputStatus`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.GetInputStatusSystemInputsByPackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.GetInputStatusSystemInputsByPackRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pack` | `path` | `string` | yes |
| `metrics` | `query` | `boolean` | no |
| `type` | `query` | `boolean` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedInputStatus` | `paginatedInputStatusSchema` | `src/models/paginated-input-status.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getInputStatusSystemInputsByPackAndId

- **Signature**: `getInputStatusSystemInputsByPackAndId(request: Sources.GetInputStatusSystemInputsByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedInputStatus, Sources.GetInputStatusSystemInputsByPackAndIdError>`
- **Wire**: `GET /p/{pack}/system/status/inputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedInputStatus`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.GetInputStatusSystemInputsByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.GetInputStatusSystemInputsByPackAndIdRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |
| `metrics` | `query` | `boolean` | no |
| `type` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedInputStatus` | `countedInputStatusSchema` | `src/models/counted-input-status.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getInputSystemByPack

- **Signature**: `getInputSystemByPack(request: Sources.GetInputSystemByPackRequest, options?: RequestOptions): ApiPromise<PaginatedInputResponse, Sources.GetInputSystemByPackError>`
- **Wire**: `GET /p/{pack}/system/inputs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedInputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.GetInputSystemByPackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.GetInputSystemByPackRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pack` | `path` | `string` | yes |
| `type` | `query` | `string[]` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedInputResponse` | `paginatedInputResponseSchema` | `src/models/paginated-input-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getInputSystemByPackAndId

- **Signature**: `getInputSystemByPackAndId(request: Sources.GetInputSystemByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedInputResponse, Sources.GetInputSystemByPackAndIdError>`
- **Wire**: `GET /p/{pack}/system/inputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedInputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.GetInputSystemByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.GetInputSystemByPackAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedInputResponse` | `countedInputResponseSchema` | `src/models/counted-input-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getInputSystemPqByPackAndId

- **Signature**: `getInputSystemPqByPackAndId(request: Sources.GetInputSystemPqByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedJobInfo, Sources.GetInputSystemPqByPackAndIdError>`
- **Wire**: `GET /p/{pack}/system/inputs/{id}/pq`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedJobInfo`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.GetInputSystemPqByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.GetInputSystemPqByPackAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedJobInfo` | `countedJobInfoSchema` | `src/models/counted-job-info.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateInputById

- **Signature**: `updateInputById(request: Sources.UpdateInputByIdRequest, options?: RequestOptions): ApiPromise<CountedInputResponse, Sources.UpdateInputByIdError>`
- **Wire**: `PATCH /system/inputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedInputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.UpdateInputByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.UpdateInputByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `Input` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Input` | `inputSchema` | `src/models/unions/input.ts` |
| `CountedInputResponse` | `countedInputResponseSchema` | `src/models/counted-input-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateInputHecTokenByIdAndToken

- **Signature**: `updateInputHecTokenByIdAndToken(request: Sources.UpdateInputHecTokenByIdAndTokenRequest, options?: RequestOptions): ApiPromise<CountedInputSplunkHec, Sources.UpdateInputHecTokenByIdAndTokenError>`
- **Wire**: `PATCH /system/inputs/{id}/hectoken/{token}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedInputSplunkHec`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.UpdateInputHecTokenByIdAndTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.UpdateInputHecTokenByIdAndTokenRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `token` | `path` | `string` | yes |
| `body` | `body` | `UpdateHecTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateHecTokenRequest` | `updateHecTokenRequestSchema` | `src/models/update-hec-token-request.ts` |
| `CountedInputSplunkHec` | `countedInputSplunkHecSchema` | `src/models/counted-input-splunk-hec.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateInputSystemByPackAndId

- **Signature**: `updateInputSystemByPackAndId(request: Sources.UpdateInputSystemByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedInputResponse, Sources.UpdateInputSystemByPackAndIdError>`
- **Wire**: `PATCH /p/{pack}/system/inputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedInputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.UpdateInputSystemByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.UpdateInputSystemByPackAndIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |
| `body` | `body` | `Input` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Input` | `inputSchema` | `src/models/unions/input.ts` |
| `CountedInputResponse` | `countedInputResponseSchema` | `src/models/counted-input-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateInputSystemHecTokenByPackAndIdAndToken

- **Signature**: `updateInputSystemHecTokenByPackAndIdAndToken(request: Sources.UpdateInputSystemHecTokenByPackAndIdAndTokenRequest, options?: RequestOptions): ApiPromise<CountedInputSplunkHec, Sources.UpdateInputSystemHecTokenByPackAndIdAndTokenError>`
- **Wire**: `PATCH /p/{pack}/system/inputs/{id}/hectoken/{token}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedInputSplunkHec`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Sources.UpdateInputSystemHecTokenByPackAndIdAndTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sources.UpdateInputSystemHecTokenByPackAndIdAndTokenRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `token` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |
| `body` | `body` | `UpdateHecTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateHecTokenRequest` | `updateHecTokenRequestSchema` | `src/models/update-hec-token-request.ts` |
| `CountedInputSplunkHec` | `countedInputSplunkHecSchema` | `src/models/counted-input-splunk-hec.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

