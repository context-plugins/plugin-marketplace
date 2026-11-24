<!-- Generated file — do not edit; regenerated with the SDK. -->

# ResponsesApi — operations

Accessor: `client.responsesApi` · Source: `src/resources/responses-api.ts` · 1 operation · Request and error types: namespace `ResponsesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `parallel`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createResponseV1ResponsesPost

- **Signature**: `createResponseV1ResponsesPost(request: ResponsesApi.CreateResponseV1ResponsesPostRequest, options?: RequestOptions): ApiPromise<Response, ResponsesApi.CreateResponseV1ResponsesPostError>`
- **Wire**: `POST /v1/responses`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Response`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `ResponsesApi.CreateResponseV1ResponsesPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResponsesApi.CreateResponseV1ResponsesPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ResponseCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResponseCreateRequest` | `responseCreateRequestSchema` | `src/models/response-create-request.ts` |
| `Response` | `responseSchema` | `src/models/response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

