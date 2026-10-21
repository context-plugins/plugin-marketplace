<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConnectorConfiguration — operations

Accessor: `client.connectorConfiguration` · Source: `src/resources/connector-configuration.ts` · 4 operations · Request and error types: namespace `ConnectorConfiguration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getConnectorConfig

- **Signature**: `getConnectorConfig(request: ConnectorConfiguration.GetConnectorConfigRequest, options?: RequestOptions): ApiPromise<ConnectorsConfigResponse, ConnectorConfiguration.GetConnectorConfigError>`
- **Wire**: `GET /connectors/{connectorId}/config`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectorsConfigResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorConfiguration.GetConnectorConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorConfiguration.GetConnectorConfigRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorsConfigResponse` | `connectorsConfigResponseSchema` | `src/models/connectors-config-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateConnectorAuthConfig

- **Signature**: `updateConnectorAuthConfig(request: ConnectorConfiguration.UpdateConnectorAuthConfigRequest, options?: RequestOptions): ApiPromise<ConnectorsConfigAuthResponse, ConnectorConfiguration.UpdateConnectorAuthConfigError>`
- **Wire**: `PUT /connectors/{connectorId}/config/auth`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectorsConfigAuthResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorConfiguration.UpdateConnectorAuthConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorConfiguration.UpdateConnectorAuthConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorId` | `path` | `string` | yes |
| `body` | `body` | `UpdateConnectorAuthRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateConnectorAuthRequest` | `updateConnectorAuthRequestSchema` | `src/models/update-connector-auth-request.ts` |
| `ConnectorsConfigAuthResponse` | `connectorsConfigAuthResponseSchema` | `src/models/connectors-config-auth-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateConnectorConfig

- **Signature**: `updateConnectorConfig(request: ConnectorConfiguration.UpdateConnectorConfigRequestParams, options?: RequestOptions): ApiPromise<ConnectorsConfigResponse1, ConnectorConfiguration.UpdateConnectorConfigError>`
- **Wire**: `PUT /connectors/{connectorId}/config`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectorsConfigResponse1`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorConfiguration.UpdateConnectorConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorConfiguration.UpdateConnectorConfigRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorId` | `path` | `string` | yes |
| `body` | `body` | `UpdateConnectorConfigRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateConnectorConfigRequest` | `updateConnectorConfigRequestSchema` | `src/models/update-connector-config-request.ts` |
| `ConnectorsConfigResponse1` | `connectorsConfigResponse1Schema` | `src/models/connectors-config-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateConnectorFiltersSyncConfig

- **Signature**: `updateConnectorFiltersSyncConfig(request: ConnectorConfiguration.UpdateConnectorFiltersSyncConfigRequest, options?: RequestOptions): ApiPromise<ConnectorsConfigFiltersSyncResponse, ConnectorConfiguration.UpdateConnectorFiltersSyncConfigError>`
- **Wire**: `PUT /connectors/{connectorId}/config/filters-sync`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectorsConfigFiltersSyncResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorConfiguration.UpdateConnectorFiltersSyncConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorConfiguration.UpdateConnectorFiltersSyncConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorId` | `path` | `string` | yes |
| `body` | `body` | `UpdateConnectorFiltersSyncRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateConnectorFiltersSyncRequest` | `updateConnectorFiltersSyncRequestSchema` | `src/models/update-connector-filters-sync-request.ts` |
| `ConnectorsConfigFiltersSyncResponse` | `connectorsConfigFiltersSyncResponseSchema` | `src/models/connectors-config-filters-sync-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

