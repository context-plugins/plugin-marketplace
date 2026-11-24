<!-- Generated file — do not edit; regenerated with the SDK. -->

# Connections — operations

Accessor: `client.connections` · Source: `src/resources/connections.ts` · 4 operations · Request and error types: namespace `Connections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `prisma-reviews`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createConnectLink

- **Signature**: `createConnectLink(request?: Connections.CreateConnectLinkRequest, options?: RequestOptions): ApiPromise<ConnectLink, Connections.CreateConnectLinkError>`
- **Wire**: `POST /v1/connect_links`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectLink`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `Connections.CreateConnectLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [422] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connections.CreateConnectLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1ConnectLinksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ConnectLinksRequest` | `v1ConnectLinksRequestSchema` | `src/models/v1-connect-links-request.ts` |
| `ConnectLink` | `connectLinkSchema` | `src/models/connect-link.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createConnection

- **Signature**: `createConnection(request: Connections.CreateConnectionRequest, options?: RequestOptions): ApiPromise<ConnectionCreated, Connections.CreateConnectionError>`
- **Wire**: `POST /v1/connections`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectionCreated`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `Connections.CreateConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [422] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"error6"` [501] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connections.CreateConnectionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ConnectionInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectionInput` | `connectionInputSchema` | `src/models/connection-input.ts` |
| `ConnectionCreated` | `connectionCreatedSchema` | `src/models/connection-created.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteConnection

- **Signature**: `deleteConnection(request: Connections.DeleteConnectionRequest, options?: RequestOptions): ApiPromise<ConnectionDeleted, Connections.DeleteConnectionError>`
- **Wire**: `DELETE /v1/connections/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectionDeleted`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `Connections.DeleteConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connections.DeleteConnectionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectionDeleted` | `connectionDeletedSchema` | `src/models/connection-deleted.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listConnections

- **Signature**: `listConnections(options?: RequestOptions): ApiPromise<ConnectionList, Connections.ListConnectionsError>`
- **Wire**: `GET /v1/connections`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectionList`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `Connections.ListConnectionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectionList` | `connectionListSchema` | `src/models/connection-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

