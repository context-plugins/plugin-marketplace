<!-- Generated file — do not edit; regenerated with the SDK. -->

# Blob — operations

Accessor: `client.blob` · Source: `src/resources/blob.ts` · 1 operation · Request types: namespace `Blob`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `celestia`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postRoot

- **Signature**: `postRoot(request: Blob.PostRootRequest, options?: RequestOptions): ApiPromise<JsonRpcResponse, ApiError>`
- **Wire**: `POST /`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JsonRpcResponse`
- **Error**: `CelestiaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Blob.PostRootRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JsonRpcRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JsonRpcRequest` | `jsonRpcRequestSchema` | `src/models/json-rpc-request.ts` |
| `JsonRpcResponse` | `jsonRpcResponseSchema` | `src/models/json-rpc-response.ts` |

