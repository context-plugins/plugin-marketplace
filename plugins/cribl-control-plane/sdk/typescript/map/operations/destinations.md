<!-- Generated file — do not edit; regenerated with the SDK. -->

# Destinations — operations

Accessor: `client.destinations` · Source: `src/resources/destinations.ts` · 22 operations · Request and error types: namespace `Destinations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createOutput

- **Signature**: `createOutput(request: Destinations.CreateOutputRequest, options?: RequestOptions): ApiPromise<CountedOutputResponse, Destinations.CreateOutputError>`
- **Wire**: `POST /system/outputs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedOutputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.CreateOutputError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error409"` [409] no body · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.CreateOutputRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedOutputResponse` | `countedOutputResponseSchema` | `src/models/counted-output-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createOutputSystemByPack

- **Signature**: `createOutputSystemByPack(request: Destinations.CreateOutputSystemByPackRequest, options?: RequestOptions): ApiPromise<CountedOutputResponse, Destinations.CreateOutputSystemByPackError>`
- **Wire**: `POST /p/{pack}/system/outputs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedOutputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.CreateOutputSystemByPackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error409"` [409] no body · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.CreateOutputSystemByPackRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pack` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedOutputResponse` | `countedOutputResponseSchema` | `src/models/counted-output-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createOutputSystemTestByPackAndId

- **Signature**: `createOutputSystemTestByPackAndId(request: Destinations.CreateOutputSystemTestByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedOutputTestResponse, Destinations.CreateOutputSystemTestByPackAndIdError>`
- **Wire**: `POST /p/{pack}/system/outputs/{id}/test`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedOutputTestResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.CreateOutputSystemTestByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.CreateOutputSystemTestByPackAndIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |
| `body` | `body` | `OutputTestRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OutputTestRequest` | `outputTestRequestSchema` | `src/models/output-test-request.ts` |
| `CountedOutputTestResponse` | `countedOutputTestResponseSchema` | `src/models/counted-output-test-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createOutputTestById

- **Signature**: `createOutputTestById(request: Destinations.CreateOutputTestByIdRequest, options?: RequestOptions): ApiPromise<CountedOutputTestResponse, Destinations.CreateOutputTestByIdError>`
- **Wire**: `POST /system/outputs/{id}/test`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedOutputTestResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.CreateOutputTestByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.CreateOutputTestByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `OutputTestRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OutputTestRequest` | `outputTestRequestSchema` | `src/models/output-test-request.ts` |
| `CountedOutputTestResponse` | `countedOutputTestResponseSchema` | `src/models/counted-output-test-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteOutputById

- **Signature**: `deleteOutputById(request: Destinations.DeleteOutputByIdRequest, options?: RequestOptions): ApiPromise<CountedOutputResponse, Destinations.DeleteOutputByIdError>`
- **Wire**: `DELETE /system/outputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedOutputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.DeleteOutputByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error404"` [404] no body · `"error409"` [409] no body · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.DeleteOutputByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedOutputResponse` | `countedOutputResponseSchema` | `src/models/counted-output-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteOutputPqById

- **Signature**: `deleteOutputPqById(request: Destinations.DeleteOutputPqByIdRequest, options?: RequestOptions): ApiPromise<CountedString, Destinations.DeleteOutputPqByIdError>`
- **Wire**: `DELETE /system/outputs/{id}/pq`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedString`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.DeleteOutputPqByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.DeleteOutputPqByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedString` | `countedStringSchema` | `src/models/counted-string.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteOutputSystemByPackAndId

- **Signature**: `deleteOutputSystemByPackAndId(request: Destinations.DeleteOutputSystemByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedOutputResponse, Destinations.DeleteOutputSystemByPackAndIdError>`
- **Wire**: `DELETE /p/{pack}/system/outputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedOutputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.DeleteOutputSystemByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error404"` [404] no body · `"error409"` [409] no body · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.DeleteOutputSystemByPackAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedOutputResponse` | `countedOutputResponseSchema` | `src/models/counted-output-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteOutputSystemPqByPackAndId

- **Signature**: `deleteOutputSystemPqByPackAndId(request: Destinations.DeleteOutputSystemPqByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedString, Destinations.DeleteOutputSystemPqByPackAndIdError>`
- **Wire**: `DELETE /p/{pack}/system/outputs/{id}/pq`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedString`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.DeleteOutputSystemPqByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.DeleteOutputSystemPqByPackAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedString` | `countedStringSchema` | `src/models/counted-string.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOutput

- **Signature**: `getOutput(request: Destinations.GetOutputRequest, options?: RequestOptions): ApiPromise<PaginatedOutputResponse, Destinations.GetOutputError>`
- **Wire**: `GET /system/outputs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedOutputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.GetOutputError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.GetOutputRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `DestinationType` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DestinationType` | `destinationTypeSchema` | `src/models/destination-type.ts` |
| `PaginatedOutputResponse` | `paginatedOutputResponseSchema` | `src/models/paginated-output-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOutputById

- **Signature**: `getOutputById(request: Destinations.GetOutputByIdRequest, options?: RequestOptions): ApiPromise<CountedOutputResponse, Destinations.GetOutputByIdError>`
- **Wire**: `GET /system/outputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedOutputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.GetOutputByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.GetOutputByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedOutputResponse` | `countedOutputResponseSchema` | `src/models/counted-output-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOutputPqById

- **Signature**: `getOutputPqById(request: Destinations.GetOutputPqByIdRequest, options?: RequestOptions): ApiPromise<CountedJobInfo, Destinations.GetOutputPqByIdError>`
- **Wire**: `GET /system/outputs/{id}/pq`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedJobInfo`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.GetOutputPqByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.GetOutputPqByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedJobInfo` | `countedJobInfoSchema` | `src/models/counted-job-info.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOutputSamplesById

- **Signature**: `getOutputSamplesById(request: Destinations.GetOutputSamplesByIdRequest, options?: RequestOptions): ApiPromise<CountedOutputSamplesResponse, Destinations.GetOutputSamplesByIdError>`
- **Wire**: `GET /system/outputs/{id}/samples`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedOutputSamplesResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.GetOutputSamplesByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.GetOutputSamplesByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedOutputSamplesResponse` | `countedOutputSamplesResponseSchema` | `src/models/counted-output-samples-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOutputStatus

- **Signature**: `getOutputStatus(request: Destinations.GetOutputStatusRequest, options?: RequestOptions): ApiPromise<PaginatedOutputStatus, Destinations.GetOutputStatusError>`
- **Wire**: `GET /system/status/outputs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedOutputStatus`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.GetOutputStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.GetOutputStatusRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `metrics` | `query` | `boolean` | no |
| `type` | `query` | `boolean` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedOutputStatus` | `paginatedOutputStatusSchema` | `src/models/paginated-output-status.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOutputStatusById

- **Signature**: `getOutputStatusById(request: Destinations.GetOutputStatusByIdRequest, options?: RequestOptions): ApiPromise<CountedOutputStatus, Destinations.GetOutputStatusByIdError>`
- **Wire**: `GET /system/status/outputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedOutputStatus`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.GetOutputStatusByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.GetOutputStatusByIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `metrics` | `query` | `boolean` | no |
| `type` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedOutputStatus` | `countedOutputStatusSchema` | `src/models/counted-output-status.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOutputStatusSystemOutputsByPack

- **Signature**: `getOutputStatusSystemOutputsByPack(request: Destinations.GetOutputStatusSystemOutputsByPackRequest, options?: RequestOptions): ApiPromise<PaginatedOutputStatus, Destinations.GetOutputStatusSystemOutputsByPackError>`
- **Wire**: `GET /p/{pack}/system/status/outputs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedOutputStatus`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.GetOutputStatusSystemOutputsByPackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.GetOutputStatusSystemOutputsByPackRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pack` | `path` | `string` | yes |
| `metrics` | `query` | `boolean` | no |
| `type` | `query` | `boolean` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedOutputStatus` | `paginatedOutputStatusSchema` | `src/models/paginated-output-status.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOutputStatusSystemOutputsByPackAndId

- **Signature**: `getOutputStatusSystemOutputsByPackAndId(request: Destinations.GetOutputStatusSystemOutputsByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedOutputStatus, Destinations.GetOutputStatusSystemOutputsByPackAndIdError>`
- **Wire**: `GET /p/{pack}/system/status/outputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedOutputStatus`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.GetOutputStatusSystemOutputsByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.GetOutputStatusSystemOutputsByPackAndIdRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |
| `metrics` | `query` | `boolean` | no |
| `type` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedOutputStatus` | `countedOutputStatusSchema` | `src/models/counted-output-status.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOutputSystemByPack

- **Signature**: `getOutputSystemByPack(request: Destinations.GetOutputSystemByPackRequest, options?: RequestOptions): ApiPromise<PaginatedOutputResponse, Destinations.GetOutputSystemByPackError>`
- **Wire**: `GET /p/{pack}/system/outputs`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedOutputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.GetOutputSystemByPackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.GetOutputSystemByPackRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pack` | `path` | `string` | yes |
| `type` | `query` | `DestinationType` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DestinationType` | `destinationTypeSchema` | `src/models/destination-type.ts` |
| `PaginatedOutputResponse` | `paginatedOutputResponseSchema` | `src/models/paginated-output-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOutputSystemByPackAndId

- **Signature**: `getOutputSystemByPackAndId(request: Destinations.GetOutputSystemByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedOutputResponse, Destinations.GetOutputSystemByPackAndIdError>`
- **Wire**: `GET /p/{pack}/system/outputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedOutputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.GetOutputSystemByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error404"` [404] no body · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.GetOutputSystemByPackAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedOutputResponse` | `countedOutputResponseSchema` | `src/models/counted-output-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOutputSystemPqByPackAndId

- **Signature**: `getOutputSystemPqByPackAndId(request: Destinations.GetOutputSystemPqByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedJobInfo, Destinations.GetOutputSystemPqByPackAndIdError>`
- **Wire**: `GET /p/{pack}/system/outputs/{id}/pq`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedJobInfo`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.GetOutputSystemPqByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.GetOutputSystemPqByPackAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedJobInfo` | `countedJobInfoSchema` | `src/models/counted-job-info.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOutputSystemSamplesByPackAndId

- **Signature**: `getOutputSystemSamplesByPackAndId(request: Destinations.GetOutputSystemSamplesByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedOutputSamplesResponse, Destinations.GetOutputSystemSamplesByPackAndIdError>`
- **Wire**: `GET /p/{pack}/system/outputs/{id}/samples`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountedOutputSamplesResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.GetOutputSystemSamplesByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.GetOutputSystemSamplesByPackAndIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountedOutputSamplesResponse` | `countedOutputSamplesResponseSchema` | `src/models/counted-output-samples-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateOutputById

- **Signature**: `updateOutputById(request: Destinations.UpdateOutputByIdRequest, options?: RequestOptions): ApiPromise<CountedOutputResponse, Destinations.UpdateOutputByIdError>`
- **Wire**: `PATCH /system/outputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedOutputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.UpdateOutputByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error404"` [404] no body · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.UpdateOutputByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `Output` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Output` | `outputSchema` | `src/models/unions/output.ts` |
| `CountedOutputResponse` | `countedOutputResponseSchema` | `src/models/counted-output-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateOutputSystemByPackAndId

- **Signature**: `updateOutputSystemByPackAndId(request: Destinations.UpdateOutputSystemByPackAndIdRequest, options?: RequestOptions): ApiPromise<CountedOutputResponse, Destinations.UpdateOutputSystemByPackAndIdError>`
- **Wire**: `PATCH /p/{pack}/system/outputs/{id}`
- **Auth**: any of `bearerAuth`, `clientOauth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CountedOutputResponse`
- **Error**: `CriblApiReferenceError` with `kind: "api"`, an instance of `Destinations.UpdateOutputSystemByPackAndIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error404"` [404] no body · `"error423"` [423] no body · `"error2"` [500] `Error` · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.UpdateOutputSystemByPackAndIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pack` | `path` | `string` | yes |
| `body` | `body` | `Output` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Output` | `outputSchema` | `src/models/unions/output.ts` |
| `CountedOutputResponse` | `countedOutputResponseSchema` | `src/models/counted-output-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

