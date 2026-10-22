<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConnectorRegistry — operations

Accessor: `client.connectorRegistry` · Source: `src/resources/connector-registry.ts` · 4 operations · Request and error types: namespace `ConnectorRegistry`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getConnectorEgressIps

- **Signature**: `getConnectorEgressIps(options?: RequestOptions): ApiPromise<ConnectorsNetworkEgressIpsResponse, ConnectorRegistry.GetConnectorEgressIpsError>`
- **Wire**: `GET /connectors/network/egress-ips`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectorsNetworkEgressIpsResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorRegistry.GetConnectorEgressIpsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorsNetworkEgressIpsResponse` | `connectorsNetworkEgressIpsResponseSchema` | `src/models/connectors-network-egress-ips-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getConnectorRegistry

- **Signature**: `getConnectorRegistry(request: ConnectorRegistry.GetConnectorRegistryRequest, options?: RequestOptions): ApiPromise<ConnectorsRegistryResponse, ConnectorRegistry.GetConnectorRegistryError>`
- **Wire**: `GET /connectors/registry`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectorsRegistryResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorRegistry.GetConnectorRegistryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorRegistry.GetConnectorRegistryRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `scope` | `query` | `ConnectorScope` | no | `ConnectorScope.Team` |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |
| `search` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorScope` | `connectorScopeSchema` | `src/models/connector-scope.ts` |
| `ConnectorsRegistryResponse` | `connectorsRegistryResponseSchema` | `src/models/connectors-registry-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getConnectorSchema

- **Signature**: `getConnectorSchema(request: ConnectorRegistry.GetConnectorSchemaRequest, options?: RequestOptions): ApiPromise<ConnectorsRegistrySchemaResponse, ConnectorRegistry.GetConnectorSchemaError>`
- **Wire**: `GET /connectors/registry/{connectorType}/schema`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectorsRegistrySchemaResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorRegistry.GetConnectorSchemaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorRegistry.GetConnectorSchemaRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorType` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorsRegistrySchemaResponse` | `connectorsRegistrySchemaResponseSchema` | `src/models/connectors-registry-schema-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### testConnectorConnection

- **Signature**: `testConnectorConnection(request: ConnectorRegistry.TestConnectorConnectionRequest, options?: RequestOptions): ApiPromise<ConnectorsRegistryTestConnectionResponse, ConnectorRegistry.TestConnectorConnectionError>`
- **Wire**: `POST /connectors/registry/{connectorType}/test-connection`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectorsRegistryTestConnectionResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorRegistry.TestConnectorConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"errorResponse"` [503] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorRegistry.TestConnectorConnectionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorType` | `path` | `string` | yes |
| `body` | `body` | `ConnectorsRegistryTestConnectionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorsRegistryTestConnectionRequest` | `connectorsRegistryTestConnectionRequestSchema` | `src/models/connectors-registry-test-connection-request.ts` |
| `ConnectorsRegistryTestConnectionResponse` | `connectorsRegistryTestConnectionResponseSchema` | `src/models/connectors-registry-test-connection-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

