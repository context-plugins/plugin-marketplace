<!-- Generated file — do not edit; regenerated with the SDK. -->

# Takeouts — operations

Accessor: `client.takeouts` · Source: `src/resources/takeouts.ts` · 3 operations · Request and error types: namespace `Takeouts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### takeoutsCreate

- **Signature**: `takeoutsCreate(options?: RequestOptions): ApiPromise<CreateTakeoutResponse, ApiError>`
- **Wire**: `POST /api/v1/takeouts/create`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateTakeoutResponse`
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTakeoutResponse` | `createTakeoutResponseSchema` | `src/models/create-takeout-response.ts` |

### takeoutsGetByJobId

- **Signature**: `takeoutsGetByJobId(request: Takeouts.TakeoutsGetByJobIdRequest, options?: RequestOptions): ApiPromise<TakeoutStatusResponse, Takeouts.TakeoutsGetByJobIdError>`
- **Wire**: `GET /api/v1/takeouts/get/{job_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TakeoutStatusResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Takeouts.TakeoutsGetByJobIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Takeouts.TakeoutsGetByJobIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TakeoutStatusResponse` | `takeoutStatusResponseSchema` | `src/models/takeout-status-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### takeoutsGetFile

- **Signature**: `takeoutsGetFile(request: Takeouts.TakeoutsGetFileRequest, options?: RequestOptions): ApiPromise<undefined, Takeouts.TakeoutsGetFileError>`
- **Wire**: `GET /api/v1/takeouts/get/{job_id}/file/{file_name}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Takeouts.TakeoutsGetFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Takeouts.TakeoutsGetFileRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |
| `fileName` | `path` | `file_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

