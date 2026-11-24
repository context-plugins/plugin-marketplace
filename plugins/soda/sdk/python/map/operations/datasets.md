<!-- Generated file — do not edit; regenerated with the SDK. -->

# Datasets — operations

Accessor: `client.datasets` · Source: `soda/apis/datasets.py` · 24 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.datasets.delete_api_v1_datasets_roles_role_id

- **Route**: `DELETE /api/v1/datasets/roles/{roleId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def delete_api_v1_datasets_roles_role_id(role_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `role_id`
- **Params**: `role_id` — path `roleId`
- **Returns (parsed)**: `PublicApiDeleteDatasetResponse`
- **Returns (raw)**: `ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsRolesRoleIdErrorBody]`
- **Error**: `DeleteApiV1DatasetsRolesRoleIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDeleteDatasetResponse` | `soda/models/public_api_delete_dataset_response.py` |
| `DeleteApiV1DatasetsRolesRoleIdErrorBody` | `soda/errors/delete_api_v1_datasets_roles_role_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.delete_api_v1_datasets_dataset_id

- **Route**: `DELETE /api/v1/datasets/{datasetId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def delete_api_v1_datasets_dataset_id(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`
- **Params**: `dataset_id` — path `datasetId`
- **Returns (parsed)**: `PublicApiDeleteDatasetResponse`
- **Returns (raw)**: `ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsDatasetIdErrorBody]`
- **Error**: `DeleteApiV1DatasetsDatasetIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDeleteDatasetResponse` | `soda/models/public_api_delete_dataset_response.py` |
| `DeleteApiV1DatasetsDatasetIdErrorBody` | `soda/errors/delete_api_v1_datasets_dataset_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id

- **Route**: `DELETE /api/v1/datasets/{datasetId}/columnMetricMonitors/{monitorId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(dataset_id: str, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`, `monitor_id`
- **Params**: `dataset_id` — path `datasetId` · `monitor_id` — path `monitorId`
- **Returns (parsed)**: `PublicApiDeleteDatasetResponse`
- **Returns (raw)**: `ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody]`
- **Error**: `DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDeleteDatasetResponse` | `soda/models/public_api_delete_dataset_response.py` |
| `DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody` | `soda/errors/delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id

- **Route**: `DELETE /api/v1/datasets/{datasetId}/customSqlMonitors/{monitorId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(dataset_id: str, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`, `monitor_id`
- **Params**: `dataset_id` — path `datasetId` · `monitor_id` — path `monitorId`
- **Returns (parsed)**: `PublicApiDeleteDatasetResponse`
- **Returns (raw)**: `ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody]`
- **Error**: `DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDeleteDatasetResponse` | `soda/models/public_api_delete_dataset_response.py` |
| `DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody` | `soda/errors/delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.get_api_v1_datasets

- **Route**: `GET /api/v1/datasets`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasets(*, datasource_name: str | None = None, from_: RFC3339DateTime | None = None, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `datasource_name` — query `datasourceName` · `from_` — query `from` · `page` — query · `search` — query · `size` — query
- **Returns (parsed)**: `PublicApiDatasetsResponse`
- **Returns (raw)**: `ApiResult[PublicApiDatasetsResponse, GetApiV1DatasetsErrorBody]`
- **Error**: `GetApiV1DatasetsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDatasetsResponse` | `soda/models/public_api_datasets_response.py` |
| `GetApiV1DatasetsErrorBody` | `soda/errors/get_api_v1_datasets_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name

- **Route**: `GET /api/v1/datasets/byDatasetQualifiedName/{datasetQualifiedName}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name(dataset_qualified_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_qualified_name`
- **Params**: `dataset_qualified_name` — path `datasetQualifiedName`
- **Returns (parsed)**: `DatasetsContentDto`
- **Returns (raw)**: `ApiResult[DatasetsContentDto, GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameErrorBody]`
- **Error**: `GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatasetsContentDto` | `soda/models/datasets_content_dto.py` |
| `GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameErrorBody` | `soda/errors/get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.get_api_v1_datasets_roles

- **Route**: `GET /api/v1/datasets/roles`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasets_roles(*, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `size` — query
- **Returns (parsed)**: `PublicApiDatasetRolesResponse`
- **Returns (raw)**: `ApiResult[PublicApiDatasetRolesResponse, GetApiV1DatasetsRolesErrorBody]`
- **Error**: `GetApiV1DatasetsRolesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDatasetRolesResponse` | `soda/models/public_api_dataset_roles_response.py` |
| `GetApiV1DatasetsRolesErrorBody` | `soda/errors/get_api_v1_datasets_roles_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.get_api_v1_datasets_dataset_id

- **Route**: `GET /api/v1/datasets/{datasetId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasets_dataset_id(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`
- **Params**: `dataset_id` — path `datasetId`
- **Returns (parsed)**: `DatasetsContentDto`
- **Returns (raw)**: `ApiResult[DatasetsContentDto, GetApiV1DatasetsDatasetIdErrorBody]`
- **Error**: `GetApiV1DatasetsDatasetIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatasetsContentDto` | `soda/models/datasets_content_dto.py` |
| `GetApiV1DatasetsDatasetIdErrorBody` | `soda/errors/get_api_v1_datasets_dataset_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.get_api_v1_datasets_dataset_id_columns

- **Route**: `GET /api/v1/datasets/{datasetId}/columns`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasets_dataset_id_columns(dataset_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`
- **Params**: `dataset_id` — path `datasetId` · `page` — query · `size` — query
- **Returns (parsed)**: `PublicApiListDatasetColumnsResponse`
- **Returns (raw)**: `ApiResult[PublicApiListDatasetColumnsResponse, GetApiV1DatasetsDatasetIdColumnsErrorBody]`
- **Error**: `GetApiV1DatasetsDatasetIdColumnsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiListDatasetColumnsResponse` | `soda/models/public_api_list_dataset_columns_response.py` |
| `GetApiV1DatasetsDatasetIdColumnsErrorBody` | `soda/errors/get_api_v1_datasets_dataset_id_columns_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.get_api_v1_datasets_dataset_id_compute_warehouse

- **Route**: `GET /api/v1/datasets/{datasetId}/computeWarehouse`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasets_dataset_id_compute_warehouse(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`
- **Params**: `dataset_id` — path `datasetId`
- **Returns (parsed)**: `DatasetComputeWarehouseConfigurationDto`
- **Returns (raw)**: `ApiResult[DatasetComputeWarehouseConfigurationDto, GetApiV1DatasetsDatasetIdComputeWarehouseErrorBody]`
- **Error**: `GetApiV1DatasetsDatasetIdComputeWarehouseErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatasetComputeWarehouseConfigurationDto` | `soda/models/dataset_compute_warehouse_configuration_dto.py` |
| `GetApiV1DatasetsDatasetIdComputeWarehouseErrorBody` | `soda/errors/get_api_v1_datasets_dataset_id_compute_warehouse_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.get_api_v1_datasets_dataset_id_diagnostics_warehouse

- **Route**: `GET /api/v1/datasets/{datasetId}/diagnosticsWarehouse`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasets_dataset_id_diagnostics_warehouse(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`
- **Params**: `dataset_id` — path `datasetId`
- **Returns (parsed)**: `PublicApiDatasetDiagnosticsWarehouseResponse`
- **Returns (raw)**: `ApiResult[PublicApiDatasetDiagnosticsWarehouseResponse, GetApiV1DatasetsDatasetIdDiagnosticsWarehouseErrorBody]`
- **Error**: `GetApiV1DatasetsDatasetIdDiagnosticsWarehouseErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDatasetDiagnosticsWarehouseResponse` | `soda/models/public_api_dataset_diagnostics_warehouse_response.py` |
| `GetApiV1DatasetsDatasetIdDiagnosticsWarehouseErrorBody` | `soda/errors/get_api_v1_datasets_dataset_id_diagnostics_warehouse_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.get_api_v1_datasets_dataset_id_metric_monitoring

- **Route**: `GET /api/v1/datasets/{datasetId}/metricMonitoring`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasets_dataset_id_metric_monitoring(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`
- **Params**: `dataset_id` — path `datasetId`
- **Returns (parsed)**: `PublicApiDatasetMetricMonitoringResponse`
- **Returns (raw)**: `ApiResult[PublicApiDatasetMetricMonitoringResponse, GetApiV1DatasetsDatasetIdMetricMonitoringErrorBody]`
- **Error**: `GetApiV1DatasetsDatasetIdMetricMonitoringErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDatasetMetricMonitoringResponse` | `soda/models/public_api_dataset_metric_monitoring_response.py` |
| `GetApiV1DatasetsDatasetIdMetricMonitoringErrorBody` | `soda/errors/get_api_v1_datasets_dataset_id_metric_monitoring_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.get_api_v1_datasets_dataset_id_profiling

- **Route**: `GET /api/v1/datasets/{datasetId}/profiling`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasets_dataset_id_profiling(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`
- **Params**: `dataset_id` — path `datasetId`
- **Returns (parsed)**: `PublicApiDatasetProfilingResponse`
- **Returns (raw)**: `ApiResult[PublicApiDatasetProfilingResponse, GetApiV1DatasetsDatasetIdProfilingErrorBody]`
- **Error**: `GetApiV1DatasetsDatasetIdProfilingErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDatasetProfilingResponse` | `soda/models/public_api_dataset_profiling_response.py` |
| `GetApiV1DatasetsDatasetIdProfilingErrorBody` | `soda/errors/get_api_v1_datasets_dataset_id_profiling_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.get_api_v1_datasets_dataset_id_responsibilities

- **Route**: `GET /api/v1/datasets/{datasetId}/responsibilities`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_datasets_dataset_id_responsibilities(dataset_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`
- **Params**: `dataset_id` — path `datasetId` · `page` — query · `size` — query
- **Returns (parsed)**: `PublicApiDatasetResponsibilitiesResponse`
- **Returns (raw)**: `ApiResult[PublicApiDatasetResponsibilitiesResponse, GetApiV1DatasetsDatasetIdResponsibilitiesErrorBody]`
- **Error**: `GetApiV1DatasetsDatasetIdResponsibilitiesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDatasetResponsibilitiesResponse` | `soda/models/public_api_dataset_responsibilities_response.py` |
| `GetApiV1DatasetsDatasetIdResponsibilitiesErrorBody` | `soda/errors/get_api_v1_datasets_dataset_id_responsibilities_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.post_api_v1_datasets_roles

- **Route**: `POST /api/v1/datasets/roles`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasets_roles(body: PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PublicApiUpdateDatasetRoleResponse`
- **Returns (raw)**: `ApiResult[PublicApiUpdateDatasetRoleResponse, PostApiV1DatasetsRolesErrorBody]`
- **Error**: `PostApiV1DatasetsRolesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDatasetRoleRequestDto` | `soda/models/public_api_dataset_role_request_dto.py` |
| `PublicApiDatasetRoleRequestDtoDict` | `soda/models/public_api_dataset_role_request_dto.py` |
| `PublicApiUpdateDatasetRoleResponse` | `soda/models/public_api_update_dataset_role_response.py` |
| `PostApiV1DatasetsRolesErrorBody` | `soda/errors/post_api_v1_datasets_roles_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.post_api_v1_datasets_roles_role_id

- **Route**: `POST /api/v1/datasets/roles/{roleId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasets_roles_role_id(role_id: str, body: PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `role_id`, `body`
- **Params**: `role_id` — path `roleId` · `body` — JSON body
- **Returns (parsed)**: `PublicApiUpdateDatasetRoleResponse`
- **Returns (raw)**: `ApiResult[PublicApiUpdateDatasetRoleResponse, PostApiV1DatasetsRolesRoleIdErrorBody]`
- **Error**: `PostApiV1DatasetsRolesRoleIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDatasetRoleRequestDto` | `soda/models/public_api_dataset_role_request_dto.py` |
| `PublicApiDatasetRoleRequestDtoDict` | `soda/models/public_api_dataset_role_request_dto.py` |
| `PublicApiUpdateDatasetRoleResponse` | `soda/models/public_api_update_dataset_role_response.py` |
| `PostApiV1DatasetsRolesRoleIdErrorBody` | `soda/errors/post_api_v1_datasets_roles_role_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.post_api_v1_datasets_dataset_id

- **Route**: `POST /api/v1/datasets/{datasetId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasets_dataset_id(dataset_id: str, body: PublicApiUpdateDatasetDto | PublicApiUpdateDatasetDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`, `body`
- **Params**: `dataset_id` — path `datasetId` · `body` — JSON body
- **Returns (parsed)**: `DatasetsContentDto`
- **Returns (raw)**: `ApiResult[DatasetsContentDto, PostApiV1DatasetsDatasetIdErrorBody]`
- **Error**: `PostApiV1DatasetsDatasetIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiUpdateDatasetDto` | `soda/models/public_api_update_dataset_dto.py` |
| `PublicApiUpdateDatasetDtoDict` | `soda/models/public_api_update_dataset_dto.py` |
| `DatasetsContentDto` | `soda/models/datasets_content_dto.py` |
| `PostApiV1DatasetsDatasetIdErrorBody` | `soda/errors/post_api_v1_datasets_dataset_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.post_api_v1_datasets_dataset_id_column_attributes

- **Route**: `POST /api/v1/datasets/{datasetId}/columnAttributes`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasets_dataset_id_column_attributes(dataset_id: str, body: PublicApiSetColumnAttributesRequestDto | PublicApiSetColumnAttributesRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`, `body`
- **Params**: `dataset_id` — path `datasetId` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostApiV1DatasetsDatasetIdColumnAttributesErrorBody]`
- **Error**: `PostApiV1DatasetsDatasetIdColumnAttributesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiSetColumnAttributesRequestDto` | `soda/models/public_api_set_column_attributes_request_dto.py` |
| `PublicApiSetColumnAttributesRequestDtoDict` | `soda/models/public_api_set_column_attributes_request_dto.py` |
| `PostApiV1DatasetsDatasetIdColumnAttributesErrorBody` | `soda/errors/post_api_v1_datasets_dataset_id_column_attributes_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.post_api_v1_datasets_dataset_id_column_metric_monitors

- **Route**: `POST /api/v1/datasets/{datasetId}/columnMetricMonitors`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasets_dataset_id_column_metric_monitors(dataset_id: str, body: PublicApiCreateColumnMetricMonitorRequestDto | PublicApiCreateColumnMetricMonitorRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`, `body`
- **Params**: `dataset_id` — path `datasetId` · `body` — JSON body
- **Returns (parsed)**: `PublicApiUpdateColumnMetricMonitorResponse`
- **Returns (raw)**: `ApiResult[PublicApiUpdateColumnMetricMonitorResponse, PostApiV1DatasetsDatasetIdColumnMetricMonitorsErrorBody]`
- **Error**: `PostApiV1DatasetsDatasetIdColumnMetricMonitorsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiCreateColumnMetricMonitorRequestDto` | `soda/models/public_api_create_column_metric_monitor_request_dto.py` |
| `PublicApiCreateColumnMetricMonitorRequestDtoDict` | `soda/models/public_api_create_column_metric_monitor_request_dto.py` |
| `PublicApiUpdateColumnMetricMonitorResponse` | `soda/models/public_api_update_column_metric_monitor_response.py` |
| `PostApiV1DatasetsDatasetIdColumnMetricMonitorsErrorBody` | `soda/errors/post_api_v1_datasets_dataset_id_column_metric_monitors_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id

- **Route**: `POST /api/v1/datasets/{datasetId}/columnMetricMonitors/{monitorId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(dataset_id: str, monitor_id: str, body: PublicApiUpdateColumnMetricMonitorRequestDto | PublicApiUpdateColumnMetricMonitorRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`, `monitor_id`, `body`
- **Params**: `dataset_id` — path `datasetId` · `monitor_id` — path `monitorId` · `body` — JSON body
- **Returns (parsed)**: `PublicApiUpdateColumnMetricMonitorResponse`
- **Returns (raw)**: `ApiResult[PublicApiUpdateColumnMetricMonitorResponse, PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody]`
- **Error**: `PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiUpdateColumnMetricMonitorRequestDto` | `soda/models/public_api_update_column_metric_monitor_request_dto.py` |
| `PublicApiUpdateColumnMetricMonitorRequestDtoDict` | `soda/models/public_api_update_column_metric_monitor_request_dto.py` |
| `PublicApiUpdateColumnMetricMonitorResponse` | `soda/models/public_api_update_column_metric_monitor_response.py` |
| `PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody` | `soda/errors/post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.post_api_v1_datasets_dataset_id_custom_sql_monitors

- **Route**: `POST /api/v1/datasets/{datasetId}/customSqlMonitors`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasets_dataset_id_custom_sql_monitors(dataset_id: str, body: PublicApiCreateCustomSqlMonitorRequestDto | PublicApiCreateCustomSqlMonitorRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`, `body`
- **Params**: `dataset_id` — path `datasetId` · `body` — JSON body
- **Returns (parsed)**: `PublicApiCreateCustomSqlMonitorResponse`
- **Returns (raw)**: `ApiResult[PublicApiCreateCustomSqlMonitorResponse, PostApiV1DatasetsDatasetIdCustomSqlMonitorsErrorBody]`
- **Error**: `PostApiV1DatasetsDatasetIdCustomSqlMonitorsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiCreateCustomSqlMonitorRequestDto` | `soda/models/public_api_create_custom_sql_monitor_request_dto.py` |
| `PublicApiCreateCustomSqlMonitorRequestDtoDict` | `soda/models/public_api_create_custom_sql_monitor_request_dto.py` |
| `PublicApiCreateCustomSqlMonitorResponse` | `soda/models/public_api_create_custom_sql_monitor_response.py` |
| `PostApiV1DatasetsDatasetIdCustomSqlMonitorsErrorBody` | `soda/errors/post_api_v1_datasets_dataset_id_custom_sql_monitors_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id

- **Route**: `POST /api/v1/datasets/{datasetId}/customSqlMonitors/{monitorId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(dataset_id: str, monitor_id: str, body: PublicApiUpdateCustomSqlMonitorRequestDto | PublicApiUpdateCustomSqlMonitorRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`, `monitor_id`, `body`
- **Params**: `dataset_id` — path `datasetId` · `monitor_id` — path `monitorId` · `body` — JSON body
- **Returns (parsed)**: `PublicApiUpdateCustomSqlMonitorResponse`
- **Returns (raw)**: `ApiResult[PublicApiUpdateCustomSqlMonitorResponse, PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody]`
- **Error**: `PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiUpdateCustomSqlMonitorRequestDto` | `soda/models/public_api_update_custom_sql_monitor_request_dto.py` |
| `PublicApiUpdateCustomSqlMonitorRequestDtoDict` | `soda/models/public_api_update_custom_sql_monitor_request_dto.py` |
| `PublicApiUpdateCustomSqlMonitorResponse` | `soda/models/public_api_update_custom_sql_monitor_response.py` |
| `PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody` | `soda/errors/post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection

- **Route**: `POST /api/v1/datasets/{datasetId}/metricMonitoring/historicalMetricCollection`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`
- **Params**: `dataset_id` — path `datasetId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody]`
- **Error**: `PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody` | `soda/errors/post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.datasets.post_api_v1_datasets_dataset_id_responsibilities

- **Route**: `POST /api/v1/datasets/{datasetId}/responsibilities`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_datasets_dataset_id_responsibilities(dataset_id: str, body: PublicApiUpdateDatasetResponsibilitiesRequestDto | PublicApiUpdateDatasetResponsibilitiesRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dataset_id`, `body`
- **Params**: `dataset_id` — path `datasetId` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostApiV1DatasetsDatasetIdResponsibilitiesErrorBody]`
- **Error**: `PostApiV1DatasetsDatasetIdResponsibilitiesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiUpdateDatasetResponsibilitiesRequestDto` | `soda/models/public_api_update_dataset_responsibilities_request_dto.py` |
| `PublicApiUpdateDatasetResponsibilitiesRequestDtoDict` | `soda/models/public_api_update_dataset_responsibilities_request_dto.py` |
| `PostApiV1DatasetsDatasetIdResponsibilitiesErrorBody` | `soda/errors/post_api_v1_datasets_dataset_id_responsibilities_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

