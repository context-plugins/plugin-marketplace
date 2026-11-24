<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataSources — operations

Accessor: `client.data_sources` · Source: `soda/apis/data_sources.py` · 18 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.data_sources.delete_api_v1_datasources_roles_role_id

- **Route**: `DELETE /api/v1/datasources/roles/{roleId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def delete_api_v1_datasources_roles_role_id(role_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `role_id`
- **Params**: `role_id` — path `roleId`
- **Returns (parsed)**: `PublicApiDeleteDatasourceRoleResponse`
- **Returns (raw)**: `ApiResult[PublicApiDeleteDatasourceRoleResponse, DeleteApiV1DatasourcesRolesRoleIdErrorBody]`
- **Error**: `DeleteApiV1DatasourcesRolesRoleIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDeleteDatasourceRoleResponse` | `soda/models/public_api_delete_datasource_role_response.py` |
| `DeleteApiV1DatasourcesRolesRoleIdErrorBody` | `soda/errors/delete_api_v1_datasources_roles_role_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.delete_api_v1_datasources_datasource_id

- **Route**: `DELETE /api/v1/datasources/{datasourceId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def delete_api_v1_datasources_datasource_id(datasource_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `datasource_id`
- **Params**: `datasource_id` — path `datasourceId`
- **Returns (parsed)**: `PublicApiDeleteDatasourceResponse`
- **Returns (raw)**: `ApiResult[PublicApiDeleteDatasourceResponse, DeleteApiV1DatasourcesDatasourceIdErrorBody]`
- **Error**: `DeleteApiV1DatasourcesDatasourceIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDeleteDatasourceResponse` | `soda/models/public_api_delete_datasource_response.py` |
| `DeleteApiV1DatasourcesDatasourceIdErrorBody` | `soda/errors/delete_api_v1_datasources_datasource_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.get_api_v1_datasources

- **Route**: `GET /api/v1/datasources`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasources(*, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `search` — query · `size` — query
- **Returns (parsed)**: `PublicApiListDatasourcesResponse`
- **Returns (raw)**: `ApiResult[PublicApiListDatasourcesResponse, GetApiV1DatasourcesErrorBody]`
- **Error**: `GetApiV1DatasourcesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiListDatasourcesResponse` | `soda/models/public_api_list_datasources_response.py` |
| `GetApiV1DatasourcesErrorBody` | `soda/errors/get_api_v1_datasources_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.get_api_v1_datasources_actions_test_connection_operation_id

- **Route**: `GET /api/v1/datasources/actions/testConnection/{operationId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasources_actions_test_connection_operation_id(operation_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `operation_id`
- **Params**: `operation_id` — path `operationId`
- **Returns (parsed)**: `PublicApiTestConnectionStatusResponse`
- **Returns (raw)**: `ApiResult[PublicApiTestConnectionStatusResponse, GetApiV1DatasourcesActionsTestConnectionOperationIdErrorBody]`
- **Error**: `GetApiV1DatasourcesActionsTestConnectionOperationIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiTestConnectionStatusResponse` | `soda/models/public_api_test_connection_status_response.py` |
| `GetApiV1DatasourcesActionsTestConnectionOperationIdErrorBody` | `soda/errors/get_api_v1_datasources_actions_test_connection_operation_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.get_api_v1_datasources_roles

- **Route**: `GET /api/v1/datasources/roles`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasources_roles(*, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `size` — query
- **Returns (parsed)**: `PublicApiDatasourceRolesResponse`
- **Returns (raw)**: `ApiResult[PublicApiDatasourceRolesResponse, GetApiV1DatasourcesRolesErrorBody]`
- **Error**: `GetApiV1DatasourcesRolesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDatasourceRolesResponse` | `soda/models/public_api_datasource_roles_response.py` |
| `GetApiV1DatasourcesRolesErrorBody` | `soda/errors/get_api_v1_datasources_roles_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.get_api_v1_datasources_datasource_id

- **Route**: `GET /api/v1/datasources/{datasourceId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasources_datasource_id(datasource_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `datasource_id`
- **Params**: `datasource_id` — path `datasourceId`
- **Returns (parsed)**: `PublicApiGetDatasourceResponse`
- **Returns (raw)**: `ApiResult[PublicApiGetDatasourceResponse, GetApiV1DatasourcesDatasourceIdErrorBody]`
- **Error**: `GetApiV1DatasourcesDatasourceIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiGetDatasourceResponse` | `soda/models/public_api_get_datasource_response.py` |
| `GetApiV1DatasourcesDatasourceIdErrorBody` | `soda/errors/get_api_v1_datasources_datasource_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.get_api_v1_datasources_datasource_id_diagnostics_warehouse

- **Route**: `GET /api/v1/datasources/{datasourceId}/diagnosticsWarehouse`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasources_datasource_id_diagnostics_warehouse(datasource_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `datasource_id`
- **Params**: `datasource_id` — path `datasourceId`
- **Returns (parsed)**: `PublicApiDatasourceDiagnosticsWarehouseResponse`
- **Returns (raw)**: `ApiResult[PublicApiDatasourceDiagnosticsWarehouseResponse, GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody]`
- **Error**: `GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDatasourceDiagnosticsWarehouseResponse` | `soda/models/public_api_datasource_diagnostics_warehouse_response.py` |
| `GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody` | `soda/errors/get_api_v1_datasources_datasource_id_diagnostics_warehouse_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.get_api_v1_datasources_datasource_id_onboard_datasets_operation_id

- **Route**: `GET /api/v1/datasources/{datasourceId}/onboardDatasets/{operationId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasources_datasource_id_onboard_datasets_operation_id(datasource_id: str, operation_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `datasource_id`, `operation_id`
- **Params**: `datasource_id` — path `datasourceId` · `operation_id` — path `operationId`
- **Returns (parsed)**: `PublicApiOnboardDatasetsStatusResponse`
- **Returns (raw)**: `ApiResult[PublicApiOnboardDatasetsStatusResponse, GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdErrorBody]`
- **Error**: `GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiOnboardDatasetsStatusResponse` | `soda/models/public_api_onboard_datasets_status_response.py` |
| `GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdErrorBody` | `soda/errors/get_api_v1_datasources_datasource_id_onboard_datasets_operation_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.get_api_v1_datasources_datasource_id_responsibilities

- **Route**: `GET /api/v1/datasources/{datasourceId}/responsibilities`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasources_datasource_id_responsibilities(datasource_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `datasource_id`
- **Params**: `datasource_id` — path `datasourceId` · `page` — query · `size` — query
- **Returns (parsed)**: `PublicApiDatasourceResponsibilitiesResponse`
- **Returns (raw)**: `ApiResult[PublicApiDatasourceResponsibilitiesResponse, GetApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody]`
- **Error**: `GetApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDatasourceResponsibilitiesResponse` | `soda/models/public_api_datasource_responsibilities_response.py` |
| `GetApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody` | `soda/errors/get_api_v1_datasources_datasource_id_responsibilities_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.post_api_v1_datasources

- **Route**: `POST /api/v1/datasources`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasources(body: PublicApiCreateDatasourceRequestDto | PublicApiCreateDatasourceRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PublicApiCreateDatasourceResponse`
- **Returns (raw)**: `ApiResult[PublicApiCreateDatasourceResponse, PostApiV1DatasourcesErrorBody]`
- **Error**: `PostApiV1DatasourcesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiCreateDatasourceRequestDto` | `soda/models/public_api_create_datasource_request_dto.py` |
| `PublicApiCreateDatasourceRequestDtoDict` | `soda/models/public_api_create_datasource_request_dto.py` |
| `PublicApiCreateDatasourceResponse` | `soda/models/public_api_create_datasource_response.py` |
| `PostApiV1DatasourcesErrorBody` | `soda/errors/post_api_v1_datasources_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.post_api_v1_datasources_actions_test_connection

- **Route**: `POST /api/v1/datasources/actions/testConnection`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasources_actions_test_connection(body: PublicApiTestConnectionRequestDto | PublicApiTestConnectionRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostApiV1DatasourcesActionsTestConnectionErrorBody]`
- **Error**: `PostApiV1DatasourcesActionsTestConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiTestConnectionRequestDto` | `soda/models/public_api_test_connection_request_dto.py` |
| `PublicApiTestConnectionRequestDtoDict` | `soda/models/public_api_test_connection_request_dto.py` |
| `PostApiV1DatasourcesActionsTestConnectionErrorBody` | `soda/errors/post_api_v1_datasources_actions_test_connection_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.post_api_v1_datasources_roles

- **Route**: `POST /api/v1/datasources/roles`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasources_roles(body: PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PublicApiCreateDatasourceRoleResponse`
- **Returns (raw)**: `ApiResult[PublicApiCreateDatasourceRoleResponse, PostApiV1DatasourcesRolesErrorBody]`
- **Error**: `PostApiV1DatasourcesRolesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDatasourceRoleRequestDto` | `soda/models/public_api_datasource_role_request_dto.py` |
| `PublicApiDatasourceRoleRequestDtoDict` | `soda/models/public_api_datasource_role_request_dto.py` |
| `PublicApiCreateDatasourceRoleResponse` | `soda/models/public_api_create_datasource_role_response.py` |
| `PostApiV1DatasourcesRolesErrorBody` | `soda/errors/post_api_v1_datasources_roles_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.post_api_v1_datasources_roles_role_id

- **Route**: `POST /api/v1/datasources/roles/{roleId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasources_roles_role_id(role_id: str, body: PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `role_id`, `body`
- **Params**: `role_id` — path `roleId` · `body` — JSON body
- **Returns (parsed)**: `PublicApiUpdateDatasourceRoleResponse`
- **Returns (raw)**: `ApiResult[PublicApiUpdateDatasourceRoleResponse, PostApiV1DatasourcesRolesRoleIdErrorBody]`
- **Error**: `PostApiV1DatasourcesRolesRoleIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDatasourceRoleRequestDto` | `soda/models/public_api_datasource_role_request_dto.py` |
| `PublicApiDatasourceRoleRequestDtoDict` | `soda/models/public_api_datasource_role_request_dto.py` |
| `PublicApiUpdateDatasourceRoleResponse` | `soda/models/public_api_update_datasource_role_response.py` |
| `PostApiV1DatasourcesRolesRoleIdErrorBody` | `soda/errors/post_api_v1_datasources_roles_role_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.post_api_v1_datasources_datasource_id

- **Route**: `POST /api/v1/datasources/{datasourceId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasources_datasource_id(datasource_id: str, body: PublicApiUpdateDatasourceRequestDto | PublicApiUpdateDatasourceRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `datasource_id`, `body`
- **Params**: `datasource_id` — path `datasourceId` · `body` — JSON body
- **Returns (parsed)**: `PublicApiUpdateDatasourceResponse`
- **Returns (raw)**: `ApiResult[PublicApiUpdateDatasourceResponse, PostApiV1DatasourcesDatasourceIdErrorBody]`
- **Error**: `PostApiV1DatasourcesDatasourceIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiUpdateDatasourceRequestDto` | `soda/models/public_api_update_datasource_request_dto.py` |
| `PublicApiUpdateDatasourceRequestDtoDict` | `soda/models/public_api_update_datasource_request_dto.py` |
| `PublicApiUpdateDatasourceResponse` | `soda/models/public_api_update_datasource_response.py` |
| `PostApiV1DatasourcesDatasourceIdErrorBody` | `soda/errors/post_api_v1_datasources_datasource_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.post_api_v1_datasources_datasource_id_diagnostics_warehouse

- **Route**: `POST /api/v1/datasources/{datasourceId}/diagnosticsWarehouse`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasources_datasource_id_diagnostics_warehouse(datasource_id: str, body: PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto | PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `datasource_id`, `body`
- **Params**: `datasource_id` — path `datasourceId` · `body` — JSON body
- **Returns (parsed)**: `PublicApiDatasourceDiagnosticsWarehouseResponse`
- **Returns (raw)**: `ApiResult[PublicApiDatasourceDiagnosticsWarehouseResponse, PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody]`
- **Error**: `PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto` | `soda/models/public_api_update_datasource_diagnostics_warehouse_request_dto.py` |
| `PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoDict` | `soda/models/public_api_update_datasource_diagnostics_warehouse_request_dto.py` |
| `PublicApiDatasourceDiagnosticsWarehouseResponse` | `soda/models/public_api_datasource_diagnostics_warehouse_response.py` |
| `PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody` | `soda/errors/post_api_v1_datasources_datasource_id_diagnostics_warehouse_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.post_api_v1_datasources_datasource_id_discover

- **Route**: `POST /api/v1/datasources/{datasourceId}/discover`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasources_datasource_id_discover(datasource_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `datasource_id`
- **Params**: `datasource_id` — path `datasourceId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostApiV1DatasourcesDatasourceIdDiscoverErrorBody]`
- **Error**: `PostApiV1DatasourcesDatasourceIdDiscoverErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostApiV1DatasourcesDatasourceIdDiscoverErrorBody` | `soda/errors/post_api_v1_datasources_datasource_id_discover_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.post_api_v1_datasources_datasource_id_onboard_datasets

- **Route**: `POST /api/v1/datasources/{datasourceId}/onboardDatasets`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasources_datasource_id_onboard_datasets(datasource_id: str, body: PublicApiOnboardDatasetsRequestDto | PublicApiOnboardDatasetsRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `datasource_id`, `body`
- **Params**: `datasource_id` — path `datasourceId` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostApiV1DatasourcesDatasourceIdOnboardDatasetsErrorBody]`
- **Error**: `PostApiV1DatasourcesDatasourceIdOnboardDatasetsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiOnboardDatasetsRequestDto` | `soda/models/public_api_onboard_datasets_request_dto.py` |
| `PublicApiOnboardDatasetsRequestDtoDict` | `soda/models/public_api_onboard_datasets_request_dto.py` |
| `PostApiV1DatasourcesDatasourceIdOnboardDatasetsErrorBody` | `soda/errors/post_api_v1_datasources_datasource_id_onboard_datasets_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.data_sources.post_api_v1_datasources_datasource_id_responsibilities

- **Route**: `POST /api/v1/datasources/{datasourceId}/responsibilities`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasources_datasource_id_responsibilities(datasource_id: str, body: PublicApiUpdateDatasourceResponsibilitiesRequestDto | PublicApiUpdateDatasourceResponsibilitiesRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `datasource_id`, `body`
- **Params**: `datasource_id` — path `datasourceId` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody]`
- **Error**: `PostApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiUpdateDatasourceResponsibilitiesRequestDto` | `soda/models/public_api_update_datasource_responsibilities_request_dto.py` |
| `PublicApiUpdateDatasourceResponsibilitiesRequestDtoDict` | `soda/models/public_api_update_datasource_responsibilities_request_dto.py` |
| `PostApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody` | `soda/errors/post_api_v1_datasources_datasource_id_responsibilities_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

