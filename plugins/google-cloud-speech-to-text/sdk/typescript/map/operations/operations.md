<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `src/resources/operations.ts` · 2 operations · Request and error types: namespace `Operations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-cloud-speech-to-text`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### speechOperationsGet

- **Signature**: `speechOperationsGet(request: Operations.SpeechOperationsGetRequest, options?: RequestOptions): ApiPromise<Operation, Operations.SpeechOperationsGetError>`
- **Wire**: `GET /v1/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Operation`
- **Error**: `GoogleCloudSpeechToTextError` with `kind: "api"`, an instance of `Operations.SpeechOperationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.SpeechOperationsGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### speechOperationsList

- **Signature**: `speechOperationsList(request?: Operations.SpeechOperationsListRequest, options?: RequestOptions): ApiPromise<ListOperationsResponse, Operations.SpeechOperationsListError>`
- **Wire**: `GET /v1/operations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListOperationsResponse`
- **Error**: `GoogleCloudSpeechToTextError` with `kind: "api"`, an instance of `Operations.SpeechOperationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.SpeechOperationsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `filter` | `query` | `string` | no |
| `name` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `returnPartialSuccess` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListOperationsResponse` | `listOperationsResponseSchema` | `src/models/list-operations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

