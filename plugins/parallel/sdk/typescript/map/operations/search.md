<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 1 operation · Request and error types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `parallel`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### v1SearchV1SearchPost

- **Signature**: `v1SearchV1SearchPost(request: Search.V1SearchV1SearchPostRequest, options?: RequestOptions): ApiPromise<V1SearchResponse, Search.V1SearchV1SearchPostError>`
- **Wire**: `POST /v1/search`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1SearchResponse`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Search.V1SearchV1SearchPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.V1SearchV1SearchPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1SearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SearchRequest` | `v1SearchRequestSchema` | `src/models/v1-search-request.ts` |
| `V1SearchResponse` | `v1SearchResponseSchema` | `src/models/v1-search-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

