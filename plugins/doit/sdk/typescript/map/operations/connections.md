<!-- Generated file — do not edit; regenerated with the SDK. -->

# Connections — operations

Accessor: `client.connections` · Source: `src/resources/connections.ts` · 5 operations · Request and error types: namespace `Connections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCloudflowConnection

- **Signature**: `createCloudflowConnection(request: Connections.CreateCloudflowConnectionRequest, options?: RequestOptions): ApiPromise<CloudflowConnection, Connections.CreateCloudflowConnectionError>`
- **Wire**: `POST /cloudflow/v1/connections`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CloudflowConnection`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Connections.CreateCloudflowConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connections.CreateCloudflowConnectionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CloudflowV1ConnectionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowV1ConnectionsRequest` | `cloudflowV1ConnectionsRequestSchema` | `src/models/cloudflow-v1-connections-request.ts` |
| `CloudflowConnection` | `cloudflowConnectionSchema` | `src/models/cloudflow-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteCloudflowConnection

- **Signature**: `deleteCloudflowConnection(request: Connections.DeleteCloudflowConnectionRequest, options?: RequestOptions): ApiPromise<undefined, Connections.DeleteCloudflowConnectionError>`
- **Wire**: `DELETE /cloudflow/v1/connections/{connectionId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Connections.DeleteCloudflowConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"cloudflowV1Connections409Error1"` [409] `CloudflowV1Connections409Error1` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connections.DeleteCloudflowConnectionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `CloudflowV1Connections409Error1` | `cloudflowV1Connections409Error1Schema` | `src/models/cloudflow-v1-connections409-error1.ts` |

### getCloudflowConnection

- **Signature**: `getCloudflowConnection(request: Connections.GetCloudflowConnectionRequest, options?: RequestOptions): ApiPromise<CloudflowConnection, Connections.GetCloudflowConnectionError>`
- **Wire**: `GET /cloudflow/v1/connections/{connectionId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudflowConnection`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Connections.GetCloudflowConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connections.GetCloudflowConnectionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowConnection` | `cloudflowConnectionSchema` | `src/models/cloudflow-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listCloudflowConnections

- **Signature**: `listCloudflowConnections(request?: Connections.ListCloudflowConnectionsRequest, options?: RequestOptions): ApiPromise<CloudflowConnectionListResponse, Connections.ListCloudflowConnectionsError>`
- **Wire**: `GET /cloudflow/v1/connections`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudflowConnectionListResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Connections.ListCloudflowConnectionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connections.ListCloudflowConnectionsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowConnectionListResponse` | `cloudflowConnectionListResponseSchema` | `src/models/cloudflow-connection-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateCloudflowConnection

- **Signature**: `updateCloudflowConnection(request: Connections.UpdateCloudflowConnectionRequest, options?: RequestOptions): ApiPromise<CloudflowConnection, Connections.UpdateCloudflowConnectionError>`
- **Wire**: `PATCH /cloudflow/v1/connections/{connectionId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CloudflowConnection`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Connections.UpdateCloudflowConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connections.UpdateCloudflowConnectionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectionId` | `path` | `string` | yes |
| `body` | `body` | `CloudflowV1ConnectionsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudflowV1ConnectionsRequest1` | `cloudflowV1ConnectionsRequest1Schema` | `src/models/cloudflow-v1-connections-request1.ts` |
| `CloudflowConnection` | `cloudflowConnectionSchema` | `src/models/cloudflow-connection.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

