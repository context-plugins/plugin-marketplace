<!-- Generated file — do not edit; regenerated with the SDK. -->

# Connections — operations

Accessor: `client.connections` · Source: `src/resources/connections.ts` · 6 operations · Request and error types: namespace `Connections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteConnection

- **Signature**: `deleteConnection(request: Connections.DeleteConnectionRequest, options?: RequestOptions): ApiPromise<undefined, Connections.DeleteConnectionError>`
- **Wire**: `DELETE /users/{userId}/connections/{connectionId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Connections.DeleteConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersConnections400Error1"` [400] `UsersConnections400Error1` · `"usersConnections403Error1"` [403] `UsersConnections403Error1` · `"usersConnections404Error1"` [404] `UsersConnections404Error1` · `"usersConnections500Error1"` [500] `UsersConnections500Error1` · `"usersConnections503Error1"` [503] `UsersConnections503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connections.DeleteConnectionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `connectionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersConnections400Error1` | `usersConnections400Error1Schema` | `src/models/users-connections400-error1.ts` |
| `UsersConnections403Error1` | `usersConnections403Error1Schema` | `src/models/users-connections403-error1.ts` |
| `UsersConnections404Error1` | `usersConnections404Error1Schema` | `src/models/users-connections404-error1.ts` |
| `UsersConnections500Error1` | `usersConnections500Error1Schema` | `src/models/users-connections500-error1.ts` |
| `UsersConnections503Error1` | `usersConnections503Error1Schema` | `src/models/users-connections503-error1.ts` |

### getConnection

- **Signature**: `getConnection(request: Connections.GetConnectionRequest, options?: RequestOptions): ApiPromise<ConnectionGetResponseResource, Connections.GetConnectionError>`
- **Wire**: `GET /users/{userId}/connections/{connectionId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectionGetResponseResource`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Connections.GetConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersConnections400Error1"` [400] `UsersConnections400Error1` · `"usersConnections401Error1"` [401] `UsersConnections401Error1` · `"usersConnections403Error1"` [403] `UsersConnections403Error1` · `"usersConnections404Error1"` [404] `UsersConnections404Error1` · `"usersConnections500Error1"` [500] `UsersConnections500Error1` · `"usersConnections503Error1"` [503] `UsersConnections503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connections.GetConnectionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `connectionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectionGetResponseResource` | `connectionGetResponseResourceSchema` | `src/models/connection-get-response-resource.ts` |
| `UsersConnections400Error1` | `usersConnections400Error1Schema` | `src/models/users-connections400-error1.ts` |
| `UsersConnections401Error1` | `usersConnections401Error1Schema` | `src/models/users-connections401-error1.ts` |
| `UsersConnections403Error1` | `usersConnections403Error1Schema` | `src/models/users-connections403-error1.ts` |
| `UsersConnections404Error1` | `usersConnections404Error1Schema` | `src/models/users-connections404-error1.ts` |
| `UsersConnections500Error1` | `usersConnections500Error1Schema` | `src/models/users-connections500-error1.ts` |
| `UsersConnections503Error1` | `usersConnections503Error1Schema` | `src/models/users-connections503-error1.ts` |

### getConnections

- **Signature**: `getConnections(request: Connections.GetConnectionsRequest, options?: RequestOptions): ApiPromise<ConnectionsGetResponseResource, Connections.GetConnectionsError>`
- **Wire**: `GET /users/{userId}/connections`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectionsGetResponseResource`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Connections.GetConnectionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersConnections400Error1"` [400] `UsersConnections400Error1` · `"usersConnections403Error1"` [403] `UsersConnections403Error1` · `"usersConnections404Error1"` [404] `UsersConnections404Error1` · `"usersConnections500Error1"` [500] `UsersConnections500Error1` · `"usersConnections503Error1"` [503] `UsersConnections503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connections.GetConnectionsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectionsGetResponseResource` | `connectionsGetResponseResourceSchema` | `src/models/connections-get-response-resource.ts` |
| `UsersConnections400Error1` | `usersConnections400Error1Schema` | `src/models/users-connections400-error1.ts` |
| `UsersConnections403Error1` | `usersConnections403Error1Schema` | `src/models/users-connections403-error1.ts` |
| `UsersConnections404Error1` | `usersConnections404Error1Schema` | `src/models/users-connections404-error1.ts` |
| `UsersConnections500Error1` | `usersConnections500Error1Schema` | `src/models/users-connections500-error1.ts` |
| `UsersConnections503Error1` | `usersConnections503Error1Schema` | `src/models/users-connections503-error1.ts` |

### purgeConnectionData

- **Signature**: `purgeConnectionData(request: Connections.PurgeConnectionDataRequest, options?: RequestOptions): ApiPromise<undefined, Connections.PurgeConnectionDataError>`
- **Wire**: `POST /users/{userId}/connections/{connectionId}/purge`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Connections.PurgeConnectionDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersConnectionsPurge400Error1"` [400] `UsersConnectionsPurge400Error1` · `"usersConnectionsPurge403Error1"` [403] `UsersConnectionsPurge403Error1` · `"usersConnectionsPurge404Error1"` [404] `UsersConnectionsPurge404Error1` · `"usersConnectionsPurge500Error1"` [500] `UsersConnectionsPurge500Error1` · `"usersConnectionsPurge503Error1"` [503] `UsersConnectionsPurge503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connections.PurgeConnectionDataRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `connectionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersConnectionsPurge400Error1` | `usersConnectionsPurge400Error1Schema` | `src/models/users-connections-purge400-error1.ts` |
| `UsersConnectionsPurge403Error1` | `usersConnectionsPurge403Error1Schema` | `src/models/users-connections-purge403-error1.ts` |
| `UsersConnectionsPurge404Error1` | `usersConnectionsPurge404Error1Schema` | `src/models/users-connections-purge404-error1.ts` |
| `UsersConnectionsPurge500Error1` | `usersConnectionsPurge500Error1Schema` | `src/models/users-connections-purge500-error1.ts` |
| `UsersConnectionsPurge503Error1` | `usersConnectionsPurge503Error1Schema` | `src/models/users-connections-purge503-error1.ts` |

### refreshConnection

- **Signature**: `refreshConnection(request: Connections.RefreshConnectionRequest, options?: RequestOptions): ApiPromise<ConnectionResponseResource, Connections.RefreshConnectionError>`
- **Wire**: `POST /users/{userId}/connections/{connectionId}/refresh`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectionResponseResource`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Connections.RefreshConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersConnectionsRefresh400Error1"` [400] `UsersConnectionsRefresh400Error1` · `"usersConnectionsRefresh403Error1"` [403] `UsersConnectionsRefresh403Error1` · `"usersConnectionsRefresh404Error1"` [404] `UsersConnectionsRefresh404Error1` · `"usersConnectionsRefresh500Error1"` [500] `UsersConnectionsRefresh500Error1` · `"usersConnectionsRefresh503Error1"` [503] `UsersConnectionsRefresh503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connections.RefreshConnectionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |
| `connectionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectionResponseResource` | `connectionResponseResourceSchema` | `src/models/connection-response-resource.ts` |
| `UsersConnectionsRefresh400Error1` | `usersConnectionsRefresh400Error1Schema` | `src/models/users-connections-refresh400-error1.ts` |
| `UsersConnectionsRefresh403Error1` | `usersConnectionsRefresh403Error1Schema` | `src/models/users-connections-refresh403-error1.ts` |
| `UsersConnectionsRefresh404Error1` | `usersConnectionsRefresh404Error1Schema` | `src/models/users-connections-refresh404-error1.ts` |
| `UsersConnectionsRefresh500Error1` | `usersConnectionsRefresh500Error1Schema` | `src/models/users-connections-refresh500-error1.ts` |
| `UsersConnectionsRefresh503Error1` | `usersConnectionsRefresh503Error1Schema` | `src/models/users-connections-refresh503-error1.ts` |

### refreshConnections

- **Signature**: `refreshConnections(request: Connections.RefreshConnectionsRequest, options?: RequestOptions): ApiPromise<ConnectionsRefreshResource, Connections.RefreshConnectionsError>`
- **Wire**: `POST /users/{userId}/connections/refresh`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectionsRefreshResource`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Connections.RefreshConnectionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersConnectionsRefresh400Error1"` [400] `UsersConnectionsRefresh400Error1` · `"usersConnectionsRefresh403Error1"` [403] `UsersConnectionsRefresh403Error1` · `"usersConnectionsRefresh404Error1"` [404] `UsersConnectionsRefresh404Error1` · `"usersConnectionsRefresh500Error1"` [500] `UsersConnectionsRefresh500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connections.RefreshConnectionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `userId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectionsRefreshResource` | `connectionsRefreshResourceSchema` | `src/models/connections-refresh-resource.ts` |
| `UsersConnectionsRefresh400Error1` | `usersConnectionsRefresh400Error1Schema` | `src/models/users-connections-refresh400-error1.ts` |
| `UsersConnectionsRefresh403Error1` | `usersConnectionsRefresh403Error1Schema` | `src/models/users-connections-refresh403-error1.ts` |
| `UsersConnectionsRefresh404Error1` | `usersConnectionsRefresh404Error1Schema` | `src/models/users-connections-refresh404-error1.ts` |
| `UsersConnectionsRefresh500Error1` | `usersConnectionsRefresh500Error1Schema` | `src/models/users-connections-refresh500-error1.ts` |

