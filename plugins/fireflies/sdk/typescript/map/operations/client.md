<!-- Generated file — do not edit; regenerated with the SDK. -->

# FirefliesAiClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 1 operation · Request and error types: namespace `FirefliesAiClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `FirefliesAiClient.GraphqlOperationRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fireflies-ai`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### graphqlOperation

- **Signature**: `graphqlOperation(request: FirefliesAiClient.GraphqlOperationRequest, options?: RequestOptions): ApiPromise<GraphQlResponse, FirefliesAiClient.GraphqlOperationError>`
- **Wire**: `POST /`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GraphQlResponse`
- **Error**: `FirefliesAiError` with `kind: "api"`, an instance of `FirefliesAiClient.GraphqlOperationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"graphQlErrorResponse"` [401] `GraphQlErrorResponse` · `"error429"` [429] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FirefliesAiClient.GraphqlOperationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GraphQlRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GraphQlRequest` | `graphQlRequestSchema` | `src/models/graph-ql-request.ts` |
| `GraphQlResponse` | `graphQlResponseSchema` | `src/models/graph-ql-response.ts` |
| `GraphQlErrorResponse` | `graphQlErrorResponseSchema` | `src/models/graph-ql-error-response.ts` |

