<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppEvents — operations

Accessor: `client.appEvents` · Source: `src/resources/app-events.ts` · 1 operation · Request and error types: namespace `AppEvents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `applike`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postAppEventBatch

- **Signature**: `postAppEventBatch(request: AppEvents.PostAppEventBatchRequest, options?: RequestOptions): ApiPromise<BatchErrorResponse[], AppEvents.PostAppEventBatchError>`
- **Wire**: `POST /appevents/v1`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchErrorResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ApplikeError` with `kind: "api"`, an instance of `AppEvents.PostAppEventBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppEvents.PostAppEventBatchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AppEventBatch[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppEventBatch` | `appEventBatchSchema` | `src/models/app-event-batch.ts` |
| `BatchErrorResponse` | `batchErrorResponseSchema` | `src/models/batch-error-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

