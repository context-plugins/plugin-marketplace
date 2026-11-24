<!-- Generated file — do not edit; regenerated with the SDK. -->

# Batch — operations

Accessor: `client.batch` · Source: `src/resources/batch.ts` · 2 operations · Request and error types: namespace `Batch`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `plinth-us-grants-data`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batchLookup

- **Signature**: `batchLookup(request: Batch.BatchLookupRequest, options?: RequestOptions): ApiPromise<BatchResponse, Batch.BatchLookupError>`
- **Wire**: `POST /api/v1/batch`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchResponse`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Batch.BatchLookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [402] `ApiErrorModel` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Batch.BatchLookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRequest` | `batchRequestSchema` | `src/models/batch-request.ts` |
| `BatchResponse` | `batchResponseSchema` | `src/models/batch-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listBatchFields

- **Signature**: `listBatchFields(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/batch/fields`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

