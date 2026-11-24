<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataSources — operations

Accessor: `client.dataSources` · Source: `src/resources/data-sources.ts` · 18 operations · Request and error types: namespace `DataSources`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `soda`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApiV1DatasourcesRolesRoleId

- **Signature**: `deleteApiV1DatasourcesRolesRoleId(request: DataSources.DeleteApiV1DatasourcesRolesRoleIdRequest, options?: RequestOptions): ApiPromise<PublicApiDeleteDatasourceRoleResponse, DataSources.DeleteApiV1DatasourcesRolesRoleIdError>`
- **Wire**: `DELETE /api/v1/datasources/roles/{roleId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiDeleteDatasourceRoleResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.DeleteApiV1DatasourcesRolesRoleIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.DeleteApiV1DatasourcesRolesRoleIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `roleId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDeleteDatasourceRoleResponse` | `publicApiDeleteDatasourceRoleResponseSchema` | `src/models/public-api-delete-datasource-role-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteApiV1DatasourcesDatasourceId

- **Signature**: `deleteApiV1DatasourcesDatasourceId(request: DataSources.DeleteApiV1DatasourcesDatasourceIdRequest, options?: RequestOptions): ApiPromise<PublicApiDeleteDatasourceResponse, DataSources.DeleteApiV1DatasourcesDatasourceIdError>`
- **Wire**: `DELETE /api/v1/datasources/{datasourceId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiDeleteDatasourceResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.DeleteApiV1DatasourcesDatasourceIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.DeleteApiV1DatasourcesDatasourceIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasourceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDeleteDatasourceResponse` | `publicApiDeleteDatasourceResponseSchema` | `src/models/public-api-delete-datasource-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1Datasources

- **Signature**: `getApiV1Datasources(request?: DataSources.GetApiV1DatasourcesRequest, options?: RequestOptions): ApiPromise<PublicApiListDatasourcesResponse, DataSources.GetApiV1DatasourcesError>`
- **Wire**: `GET /api/v1/datasources`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiListDatasourcesResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.GetApiV1DatasourcesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.GetApiV1DatasourcesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `page` | `query` | `number` | no |
| `search` | `query` | `string` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiListDatasourcesResponse` | `publicApiListDatasourcesResponseSchema` | `src/models/public-api-list-datasources-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DatasourcesActionsTestConnectionOperationId

- **Signature**: `getApiV1DatasourcesActionsTestConnectionOperationId(request: DataSources.GetApiV1DatasourcesActionsTestConnectionOperationIdRequest, options?: RequestOptions): ApiPromise<PublicApiTestConnectionStatusResponse, DataSources.GetApiV1DatasourcesActionsTestConnectionOperationIdError>`
- **Wire**: `GET /api/v1/datasources/actions/testConnection/{operationId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiTestConnectionStatusResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.GetApiV1DatasourcesActionsTestConnectionOperationIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.GetApiV1DatasourcesActionsTestConnectionOperationIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `operationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiTestConnectionStatusResponse` | `publicApiTestConnectionStatusResponseSchema` | `src/models/public-api-test-connection-status-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DatasourcesRoles

- **Signature**: `getApiV1DatasourcesRoles(request?: DataSources.GetApiV1DatasourcesRolesRequest, options?: RequestOptions): ApiPromise<PublicApiDatasourceRolesResponse, DataSources.GetApiV1DatasourcesRolesError>`
- **Wire**: `GET /api/v1/datasources/roles`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiDatasourceRolesResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.GetApiV1DatasourcesRolesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.GetApiV1DatasourcesRolesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDatasourceRolesResponse` | `publicApiDatasourceRolesResponseSchema` | `src/models/public-api-datasource-roles-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DatasourcesDatasourceId

- **Signature**: `getApiV1DatasourcesDatasourceId(request: DataSources.GetApiV1DatasourcesDatasourceIdRequest, options?: RequestOptions): ApiPromise<PublicApiGetDatasourceResponse, DataSources.GetApiV1DatasourcesDatasourceIdError>`
- **Wire**: `GET /api/v1/datasources/{datasourceId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiGetDatasourceResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.GetApiV1DatasourcesDatasourceIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.GetApiV1DatasourcesDatasourceIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasourceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiGetDatasourceResponse` | `publicApiGetDatasourceResponseSchema` | `src/models/public-api-get-datasource-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DatasourcesDatasourceIdDiagnosticsWarehouse

- **Signature**: `getApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(request: DataSources.GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest, options?: RequestOptions): ApiPromise<PublicApiDatasourceDiagnosticsWarehouseResponse, DataSources.GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError>`
- **Wire**: `GET /api/v1/datasources/{datasourceId}/diagnosticsWarehouse`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiDatasourceDiagnosticsWarehouseResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasourceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDatasourceDiagnosticsWarehouseResponse` | `publicApiDatasourceDiagnosticsWarehouseResponseSchema` | `src/models/public-api-datasource-diagnostics-warehouse-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DatasourcesDatasourceIdOnboardDatasetsOperationId

- **Signature**: `getApiV1DatasourcesDatasourceIdOnboardDatasetsOperationId(request: DataSources.GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdRequest, options?: RequestOptions): ApiPromise<PublicApiOnboardDatasetsStatusResponse, DataSources.GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError>`
- **Wire**: `GET /api/v1/datasources/{datasourceId}/onboardDatasets/{operationId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiOnboardDatasetsStatusResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasourceId` | `path` | `string` | yes |
| `operationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiOnboardDatasetsStatusResponse` | `publicApiOnboardDatasetsStatusResponseSchema` | `src/models/public-api-onboard-datasets-status-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DatasourcesDatasourceIdResponsibilities

- **Signature**: `getApiV1DatasourcesDatasourceIdResponsibilities(request: DataSources.GetApiV1DatasourcesDatasourceIdResponsibilitiesRequest, options?: RequestOptions): ApiPromise<PublicApiDatasourceResponsibilitiesResponse, DataSources.GetApiV1DatasourcesDatasourceIdResponsibilitiesError>`
- **Wire**: `GET /api/v1/datasources/{datasourceId}/responsibilities`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiDatasourceResponsibilitiesResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.GetApiV1DatasourcesDatasourceIdResponsibilitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.GetApiV1DatasourcesDatasourceIdResponsibilitiesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasourceId` | `path` | `string` | yes |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDatasourceResponsibilitiesResponse` | `publicApiDatasourceResponsibilitiesResponseSchema` | `src/models/public-api-datasource-responsibilities-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1Datasources

- **Signature**: `postApiV1Datasources(request: DataSources.PostApiV1DatasourcesRequest, options?: RequestOptions): ApiPromise<PublicApiCreateDatasourceResponse, DataSources.PostApiV1DatasourcesError>`
- **Wire**: `POST /api/v1/datasources`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiCreateDatasourceResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.PostApiV1DatasourcesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.PostApiV1DatasourcesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiCreateDatasourceRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiCreateDatasourceRequestDto` | `publicApiCreateDatasourceRequestDtoSchema` | `src/models/public-api-create-datasource-request-dto.ts` |
| `PublicApiCreateDatasourceResponse` | `publicApiCreateDatasourceResponseSchema` | `src/models/public-api-create-datasource-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasourcesActionsTestConnection

- **Signature**: `postApiV1DatasourcesActionsTestConnection(request: DataSources.PostApiV1DatasourcesActionsTestConnectionRequest, options?: RequestOptions): ApiPromise<undefined, DataSources.PostApiV1DatasourcesActionsTestConnectionError>`
- **Wire**: `POST /api/v1/datasources/actions/testConnection`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.PostApiV1DatasourcesActionsTestConnectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.PostApiV1DatasourcesActionsTestConnectionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiTestConnectionRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiTestConnectionRequestDto` | `publicApiTestConnectionRequestDtoSchema` | `src/models/public-api-test-connection-request-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasourcesRoles

- **Signature**: `postApiV1DatasourcesRoles(request: DataSources.PostApiV1DatasourcesRolesRequest, options?: RequestOptions): ApiPromise<PublicApiCreateDatasourceRoleResponse, DataSources.PostApiV1DatasourcesRolesError>`
- **Wire**: `POST /api/v1/datasources/roles`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiCreateDatasourceRoleResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.PostApiV1DatasourcesRolesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.PostApiV1DatasourcesRolesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiDatasourceRoleRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDatasourceRoleRequestDto` | `publicApiDatasourceRoleRequestDtoSchema` | `src/models/public-api-datasource-role-request-dto.ts` |
| `PublicApiCreateDatasourceRoleResponse` | `publicApiCreateDatasourceRoleResponseSchema` | `src/models/public-api-create-datasource-role-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasourcesRolesRoleId

- **Signature**: `postApiV1DatasourcesRolesRoleId(request: DataSources.PostApiV1DatasourcesRolesRoleIdRequest, options?: RequestOptions): ApiPromise<PublicApiUpdateDatasourceRoleResponse, DataSources.PostApiV1DatasourcesRolesRoleIdError>`
- **Wire**: `POST /api/v1/datasources/roles/{roleId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiUpdateDatasourceRoleResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.PostApiV1DatasourcesRolesRoleIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.PostApiV1DatasourcesRolesRoleIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `roleId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiDatasourceRoleRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDatasourceRoleRequestDto` | `publicApiDatasourceRoleRequestDtoSchema` | `src/models/public-api-datasource-role-request-dto.ts` |
| `PublicApiUpdateDatasourceRoleResponse` | `publicApiUpdateDatasourceRoleResponseSchema` | `src/models/public-api-update-datasource-role-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasourcesDatasourceId

- **Signature**: `postApiV1DatasourcesDatasourceId(request: DataSources.PostApiV1DatasourcesDatasourceIdRequest, options?: RequestOptions): ApiPromise<PublicApiUpdateDatasourceResponse, DataSources.PostApiV1DatasourcesDatasourceIdError>`
- **Wire**: `POST /api/v1/datasources/{datasourceId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiUpdateDatasourceResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.PostApiV1DatasourcesDatasourceIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.PostApiV1DatasourcesDatasourceIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasourceId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiUpdateDatasourceRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiUpdateDatasourceRequestDto` | `publicApiUpdateDatasourceRequestDtoSchema` | `src/models/public-api-update-datasource-request-dto.ts` |
| `PublicApiUpdateDatasourceResponse` | `publicApiUpdateDatasourceResponseSchema` | `src/models/public-api-update-datasource-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasourcesDatasourceIdDiagnosticsWarehouse

- **Signature**: `postApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(request: DataSources.PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest, options?: RequestOptions): ApiPromise<PublicApiDatasourceDiagnosticsWarehouseResponse, DataSources.PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError>`
- **Wire**: `POST /api/v1/datasources/{datasourceId}/diagnosticsWarehouse`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiDatasourceDiagnosticsWarehouseResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasourceId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto` | `publicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoSchema` | `src/models/public-api-update-datasource-diagnostics-warehouse-request-dto.ts` |
| `PublicApiDatasourceDiagnosticsWarehouseResponse` | `publicApiDatasourceDiagnosticsWarehouseResponseSchema` | `src/models/public-api-datasource-diagnostics-warehouse-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasourcesDatasourceIdDiscover

- **Signature**: `postApiV1DatasourcesDatasourceIdDiscover(request: DataSources.PostApiV1DatasourcesDatasourceIdDiscoverRequest, options?: RequestOptions): ApiPromise<undefined, DataSources.PostApiV1DatasourcesDatasourceIdDiscoverError>`
- **Wire**: `POST /api/v1/datasources/{datasourceId}/discover`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.PostApiV1DatasourcesDatasourceIdDiscoverError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.PostApiV1DatasourcesDatasourceIdDiscoverRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasourceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasourcesDatasourceIdOnboardDatasets

- **Signature**: `postApiV1DatasourcesDatasourceIdOnboardDatasets(request: DataSources.PostApiV1DatasourcesDatasourceIdOnboardDatasetsRequest, options?: RequestOptions): ApiPromise<undefined, DataSources.PostApiV1DatasourcesDatasourceIdOnboardDatasetsError>`
- **Wire**: `POST /api/v1/datasources/{datasourceId}/onboardDatasets`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.PostApiV1DatasourcesDatasourceIdOnboardDatasetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.PostApiV1DatasourcesDatasourceIdOnboardDatasetsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasourceId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiOnboardDatasetsRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiOnboardDatasetsRequestDto` | `publicApiOnboardDatasetsRequestDtoSchema` | `src/models/public-api-onboard-datasets-request-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DatasourcesDatasourceIdResponsibilities

- **Signature**: `postApiV1DatasourcesDatasourceIdResponsibilities(request: DataSources.PostApiV1DatasourcesDatasourceIdResponsibilitiesRequest, options?: RequestOptions): ApiPromise<undefined, DataSources.PostApiV1DatasourcesDatasourceIdResponsibilitiesError>`
- **Wire**: `POST /api/v1/datasources/{datasourceId}/responsibilities`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataSources.PostApiV1DatasourcesDatasourceIdResponsibilitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataSources.PostApiV1DatasourcesDatasourceIdResponsibilitiesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasourceId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiUpdateDatasourceResponsibilitiesRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiUpdateDatasourceResponsibilitiesRequestDto` | `publicApiUpdateDatasourceResponsibilitiesRequestDtoSchema` | `src/models/public-api-update-datasource-responsibilities-request-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

