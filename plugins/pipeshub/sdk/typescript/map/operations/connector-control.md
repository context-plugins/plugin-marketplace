<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConnectorControl — operations

Accessor: `client.connectorControl` · Source: `src/resources/connector-control.ts` · 1 operation · Request and error types: namespace `ConnectorControl`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### toggleConnector

- **Signature**: `toggleConnector(request: ConnectorControl.ToggleConnectorRequest, options?: RequestOptions): ApiPromise<ConnectorsToggleResponse, ConnectorControl.ToggleConnectorError>`
- **Wire**: `POST /connectors/{connectorId}/toggle`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectorsToggleResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorControl.ToggleConnectorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"connectorsToggleResponse1"` [409] `ConnectorsToggleResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorControl.ToggleConnectorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorId` | `path` | `string` | yes |
| `body` | `body` | `ConnectorToggleRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorToggleRequest` | `connectorToggleRequestSchema` | `src/models/connector-toggle-request.ts` |
| `ConnectorsToggleResponse` | `connectorsToggleResponseSchema` | `src/models/connectors-toggle-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `ConnectorsToggleResponse1` | `connectorsToggleResponse1Schema` | `src/models/unions/connectors-toggle-response1.ts` |

