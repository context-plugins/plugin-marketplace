<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConnectorInstances — operations

Accessor: `client.connectorInstances` · Source: `src/resources/connector-instances.ts` · 7 operations · Request and error types: namespace `ConnectorInstances`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createConnectorInstance

- **Signature**: `createConnectorInstance(request: ConnectorInstances.CreateConnectorInstanceRequest, options?: RequestOptions): ApiPromise<ConnectorsResponse1, ConnectorInstances.CreateConnectorInstanceError>`
- **Wire**: `POST /connectors`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectorsResponse1`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorInstances.CreateConnectorInstanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorInstances.CreateConnectorInstanceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateConnectorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateConnectorRequest` | `createConnectorRequestSchema` | `src/models/create-connector-request.ts` |
| `ConnectorsResponse1` | `connectorsResponse1Schema` | `src/models/connectors-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteConnectorInstance

- **Signature**: `deleteConnectorInstance(request: ConnectorInstances.DeleteConnectorInstanceRequest, options?: RequestOptions): ApiPromise<ConnectorsResponse3, ConnectorInstances.DeleteConnectorInstanceError>`
- **Wire**: `DELETE /connectors/{connectorId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectorsResponse3`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorInstances.DeleteConnectorInstanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [409] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorInstances.DeleteConnectorInstanceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorsResponse3` | `connectorsResponse3Schema` | `src/models/connectors-response3.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getConnectorInstance

- **Signature**: `getConnectorInstance(request: ConnectorInstances.GetConnectorInstanceRequest, options?: RequestOptions): ApiPromise<ConnectorsResponse2, ConnectorInstances.GetConnectorInstanceError>`
- **Wire**: `GET /connectors/{connectorId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectorsResponse2`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorInstances.GetConnectorInstanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorInstances.GetConnectorInstanceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorsResponse2` | `connectorsResponse2Schema` | `src/models/connectors-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getConnectorStats

- **Signature**: `getConnectorStats(request: ConnectorInstances.GetConnectorStatsRequest, options?: RequestOptions): ApiPromise<ConnectorStats, ConnectorInstances.GetConnectorStatsError>`
- **Wire**: `GET /connectors/{connectorId}/stats`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectorStats`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorInstances.GetConnectorStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorInstances.GetConnectorStatsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorStats` | `connectorStatsSchema` | `src/models/connector-stats.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listConnectorInstances

- **Signature**: `listConnectorInstances(request: ConnectorInstances.ListConnectorInstancesRequest, options?: RequestOptions): ApiPromise<ConnectorsResponse, ConnectorInstances.ListConnectorInstancesError>`
- **Wire**: `GET /connectors`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectorsResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorInstances.ListConnectorInstancesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorInstances.ListConnectorInstancesRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `scope` | `query` | `ConnectorScope` | no | `ConnectorScope.Team` |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |
| `search` | `query` | `string` | no | — |
| `isAuthenticated` | `query` | `boolean` | no | — |
| `isActive` | `query` | `boolean` | no | — |
| `connectorType` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorScope` | `connectorScopeSchema` | `src/models/connector-scope.ts` |
| `ConnectorsResponse` | `connectorsResponseSchema` | `src/models/connectors-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### resyncConnector

- **Signature**: `resyncConnector(request: ConnectorInstances.ResyncConnectorRequest, options?: RequestOptions): ApiPromise<ConnectorsResyncResponse, ConnectorInstances.ResyncConnectorError>`
- **Wire**: `POST /connectors/{connectorId}/resync`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectorsResyncResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorInstances.ResyncConnectorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"connectorsResyncResponse1"` [409] `ConnectorsResyncResponse1` · `"errorResponse4"` [500] `ErrorResponse` · `"errorResponse5"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorInstances.ResyncConnectorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorId` | `path` | `string` | yes |
| `body` | `body` | `ResyncConnectorRequestBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResyncConnectorRequestBody` | `resyncConnectorRequestBodySchema` | `src/models/resync-connector-request-body.ts` |
| `ConnectorsResyncResponse` | `connectorsResyncResponseSchema` | `src/models/connectors-resync-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `ConnectorsResyncResponse1` | `connectorsResyncResponse1Schema` | `src/models/unions/connectors-resync-response1.ts` |

### stopConnectorSync

- **Signature**: `stopConnectorSync(request: ConnectorInstances.StopConnectorSyncRequest, options?: RequestOptions): ApiPromise<ConnectorsSyncStopResponse, ConnectorInstances.StopConnectorSyncError>`
- **Wire**: `POST /connectors/{connectorId}/sync/stop`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectorsSyncStopResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorInstances.StopConnectorSyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorInstances.StopConnectorSyncRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorsSyncStopResponse` | `connectorsSyncStopResponseSchema` | `src/models/connectors-sync-stop-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

