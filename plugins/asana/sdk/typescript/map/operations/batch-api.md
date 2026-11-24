<!-- Generated file — do not edit; regenerated with the SDK. -->

# BatchApi — operations

Accessor: `client.batchApi` · Source: `src/resources/batch-api.ts` · 1 operation · Request and error types: namespace `BatchApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBatchRequest

- **Signature**: `createBatchRequest(request: BatchApi.CreateBatchRequestRequest, options?: RequestOptions): ApiPromise<BatchResponse1, BatchApi.CreateBatchRequestError>`
- **Wire**: `POST /batch`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `BatchApi.CreateBatchRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BatchApi.CreateBatchRequestRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `BatchRequest1` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRequest1` | `batchRequest1Schema` | `src/models/batch-request1.ts` |
| `BatchResponse1` | `batchResponse1Schema` | `src/models/batch-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

