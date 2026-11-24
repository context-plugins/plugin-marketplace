<!-- Generated file — do not edit; regenerated with the SDK. -->

# Extract — operations

Accessor: `client.extract` · Source: `src/resources/extract.ts` · 1 operation · Request and error types: namespace `Extract`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `parallel`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### extractV1ExtractPost

- **Signature**: `extractV1ExtractPost(request: Extract.ExtractV1ExtractPostRequest, options?: RequestOptions): ApiPromise<V1ExtractResponse, Extract.ExtractV1ExtractPostError>`
- **Wire**: `POST /v1/extract`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1ExtractResponse`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Extract.ExtractV1ExtractPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Extract.ExtractV1ExtractPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1ExtractRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ExtractRequest` | `v1ExtractRequestSchema` | `src/models/v1-extract-request.ts` |
| `V1ExtractResponse` | `v1ExtractResponseSchema` | `src/models/v1-extract-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

