<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConnectorFilters — operations

Accessor: `client.connectorFilters` · Source: `src/resources/connector-filters.ts` · 3 operations · Request and error types: namespace `ConnectorFilters`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getConnectorFilters

- **Signature**: `getConnectorFilters(request: ConnectorFilters.GetConnectorFiltersRequest, options?: RequestOptions): ApiPromise<ConnectorsFiltersResponse, ConnectorFilters.GetConnectorFiltersError>`
- **Wire**: `GET /connectors/{connectorId}/filters`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectorsFiltersResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorFilters.GetConnectorFiltersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorFilters.GetConnectorFiltersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorsFiltersResponse` | `connectorsFiltersResponseSchema` | `src/models/connectors-filters-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getFilterFieldOptions

- **Signature**: `getFilterFieldOptions(request: ConnectorFilters.GetFilterFieldOptionsRequest, options?: RequestOptions): ApiPromise<ConnectorsFiltersOptionsResponse, ConnectorFilters.GetFilterFieldOptionsError>`
- **Wire**: `GET /connectors/{connectorId}/filters/{filterKey}/options`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectorsFiltersOptionsResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorFilters.GetFilterFieldOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorFilters.GetFilterFieldOptionsRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `connectorId` | `path` | `string` | yes | — |
| `filterKey` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |
| `search` | `query` | `string` | no | — |
| `cursor` | `query` | `string` | no | — |
| `contextGroupPath` | `query` | `string[]` | no | — |
| `excludeContextGroupPath` | `query` | `string[]` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorsFiltersOptionsResponse` | `connectorsFiltersOptionsResponseSchema` | `src/models/connectors-filters-options-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### saveConnectorFilters

- **Signature**: `saveConnectorFilters(request: ConnectorFilters.SaveConnectorFiltersRequestParams, options?: RequestOptions): ApiPromise<ConnectorsFiltersResponse1, ConnectorFilters.SaveConnectorFiltersError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /connectors/{connectorId}/filters`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConnectorsFiltersResponse1`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `ConnectorFilters.SaveConnectorFiltersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectorFilters.SaveConnectorFiltersRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorId` | `path` | `string` | yes |
| `body` | `body` | `SaveConnectorFiltersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SaveConnectorFiltersRequest` | `saveConnectorFiltersRequestSchema` | `src/models/save-connector-filters-request.ts` |
| `ConnectorsFiltersResponse1` | `connectorsFiltersResponse1Schema` | `src/models/connectors-filters-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

