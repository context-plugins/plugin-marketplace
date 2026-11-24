<!-- Generated file — do not edit; regenerated with the SDK. -->

# Batch — operations

Accessor: `client.batch` · Source: `src/resources/batch.ts` · 1 operation · Request and error types: namespace `Batch`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `rendex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postScreenshotBatch

- **Signature**: `postScreenshotBatch(request: Batch.PostScreenshotBatchRequest, options?: RequestOptions): ApiPromise<BatchResponse, Batch.PostScreenshotBatchError>`
- **Wire**: `POST /v1/screenshot/batch`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchResponse`
- **Error**: `RendexError` with `kind: "api"`, an instance of `Batch.PostScreenshotBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Batch.PostScreenshotBatchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRequest` | `batchRequestSchema` | `src/models/batch-request.ts` |
| `BatchResponse` | `batchResponseSchema` | `src/models/batch-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

