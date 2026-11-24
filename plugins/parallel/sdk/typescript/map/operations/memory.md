<!-- Generated file — do not edit; regenerated with the SDK. -->

# Memory — operations

Accessor: `client.memory` · Source: `src/resources/memory.ts` · 3 operations · Request and error types: namespace `Memory`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `parallel`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### clearMemoryV1BetaMemoryClearPost

- **Signature**: `clearMemoryV1BetaMemoryClearPost(request: Memory.ClearMemoryV1BetaMemoryClearPostRequest, options?: RequestOptions): ApiPromise<undefined, Memory.ClearMemoryV1BetaMemoryClearPostError>`
- **Wire**: `POST /v1beta/memory/clear`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Memory.ClearMemoryV1BetaMemoryClearPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Memory.ClearMemoryV1BetaMemoryClearPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MemoryClearRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MemoryClearRequest` | `memoryClearRequestSchema` | `src/models/memory-clear-request.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### evictMemorySourceV1BetaMemoryEvictPost

- **Signature**: `evictMemorySourceV1BetaMemoryEvictPost(request: Memory.EvictMemorySourceV1BetaMemoryEvictPostRequest, options?: RequestOptions): ApiPromise<undefined, Memory.EvictMemorySourceV1BetaMemoryEvictPostError>`
- **Wire**: `POST /v1beta/memory/evict`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Memory.EvictMemorySourceV1BetaMemoryEvictPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Memory.EvictMemorySourceV1BetaMemoryEvictPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MemoryEvictRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MemoryEvictRequest` | `memoryEvictRequestSchema` | `src/models/memory-evict-request.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### retrieveMemoryV1BetaMemoryRetrievePost

- **Signature**: `retrieveMemoryV1BetaMemoryRetrievePost(request: Memory.RetrieveMemoryV1BetaMemoryRetrievePostRequest, options?: RequestOptions): ApiPromise<MemoryRetrieveResponse, Memory.RetrieveMemoryV1BetaMemoryRetrievePostError>`
- **Wire**: `POST /v1beta/memory/retrieve`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MemoryRetrieveResponse`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Memory.RetrieveMemoryV1BetaMemoryRetrievePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Memory.RetrieveMemoryV1BetaMemoryRetrievePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MemoryRetrieveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MemoryRetrieveRequest` | `memoryRetrieveRequestSchema` | `src/models/memory-retrieve-request.ts` |
| `MemoryRetrieveResponse` | `memoryRetrieveResponseSchema` | `src/models/memory-retrieve-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

