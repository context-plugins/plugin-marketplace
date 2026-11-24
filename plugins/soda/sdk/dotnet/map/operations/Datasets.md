<!-- Generated file — do not edit; regenerated with the SDK. -->

# Datasets — operations

Accessor: `client.Datasets` · Source: `src/Soda/Api/Datasets.cs` · 24 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteApiV1DatasetsDatasetId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `DeleteApiV1DatasetsDatasetId(DeleteApiV1DatasetsDatasetIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`
- **Returns**: `PublicApiDeleteDatasetResponse`
- **Error**: `ApiException<DeleteApiV1DatasetsDatasetIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1DatasetsDatasetIdRequest` | `src/Soda/Requests/Datasets/DeleteApiV1DatasetsDatasetIdRequest.cs` |
| `PublicApiDeleteDatasetResponse` | `src/Soda/Models/PublicApiDeleteDatasetResponse.cs` |
| `DeleteApiV1DatasetsDatasetIdError` | `src/Soda/Errors/DeleteApiV1DatasetsDatasetIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`, `MonitorId`
- **Returns**: `PublicApiDeleteDatasetResponse`
- **Error**: `ApiException<DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest` | `src/Soda/Requests/Datasets/DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest.cs` |
| `PublicApiDeleteDatasetResponse` | `src/Soda/Models/PublicApiDeleteDatasetResponse.cs` |
| `DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError` | `src/Soda/Errors/DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`, `MonitorId`
- **Returns**: `PublicApiDeleteDatasetResponse`
- **Error**: `ApiException<DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest` | `src/Soda/Requests/Datasets/DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest.cs` |
| `PublicApiDeleteDatasetResponse` | `src/Soda/Models/PublicApiDeleteDatasetResponse.cs` |
| `DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError` | `src/Soda/Errors/DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### DeleteApiV1DatasetsRolesRoleId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `DeleteApiV1DatasetsRolesRoleId(DeleteApiV1DatasetsRolesRoleIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RoleId`
- **Returns**: `PublicApiDeleteDatasetResponse`
- **Error**: `ApiException<DeleteApiV1DatasetsRolesRoleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1DatasetsRolesRoleIdRequest` | `src/Soda/Requests/Datasets/DeleteApiV1DatasetsRolesRoleIdRequest.cs` |
| `PublicApiDeleteDatasetResponse` | `src/Soda/Models/PublicApiDeleteDatasetResponse.cs` |
| `DeleteApiV1DatasetsRolesRoleIdError` | `src/Soda/Errors/DeleteApiV1DatasetsRolesRoleIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1Datasets

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1Datasets(GetApiV1DatasetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `datasourceName` ← `DatasourceName`, `from` ← `From`, `page` ← `Page`, `search` ← `Search`, `size` ← `Size`
- **Returns**: `PublicApiDatasetsResponse`
- **Error**: `ApiException<GetApiV1DatasetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasetsRequest` | `src/Soda/Requests/Datasets/GetApiV1DatasetsRequest.cs` |
| `PublicApiDatasetsResponse` | `src/Soda/Models/PublicApiDatasetsResponse.cs` |
| `GetApiV1DatasetsError` | `src/Soda/Errors/GetApiV1DatasetsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedName

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedName(GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetQualifiedName`
- **Returns**: `DatasetsContentDto`
- **Error**: `ApiException<GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameRequest` | `src/Soda/Requests/Datasets/GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameRequest.cs` |
| `DatasetsContentDto` | `src/Soda/Models/DatasetsContentDto.cs` |
| `GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError` | `src/Soda/Errors/GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DatasetsDatasetId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DatasetsDatasetId(GetApiV1DatasetsDatasetIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`
- **Returns**: `DatasetsContentDto`
- **Error**: `ApiException<GetApiV1DatasetsDatasetIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasetsDatasetIdRequest` | `src/Soda/Requests/Datasets/GetApiV1DatasetsDatasetIdRequest.cs` |
| `DatasetsContentDto` | `src/Soda/Models/DatasetsContentDto.cs` |
| `GetApiV1DatasetsDatasetIdError` | `src/Soda/Errors/GetApiV1DatasetsDatasetIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DatasetsDatasetIdColumns

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DatasetsDatasetIdColumns(GetApiV1DatasetsDatasetIdColumnsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`
- **Query params (wire ← C#)**: `page` ← `Page`, `size` ← `Size`
- **Returns**: `PublicApiListDatasetColumnsResponse`
- **Error**: `ApiException<GetApiV1DatasetsDatasetIdColumnsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasetsDatasetIdColumnsRequest` | `src/Soda/Requests/Datasets/GetApiV1DatasetsDatasetIdColumnsRequest.cs` |
| `PublicApiListDatasetColumnsResponse` | `src/Soda/Models/PublicApiListDatasetColumnsResponse.cs` |
| `GetApiV1DatasetsDatasetIdColumnsError` | `src/Soda/Errors/GetApiV1DatasetsDatasetIdColumnsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DatasetsDatasetIdComputeWarehouse

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DatasetsDatasetIdComputeWarehouse(GetApiV1DatasetsDatasetIdComputeWarehouseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`
- **Returns**: `DatasetComputeWarehouseConfigurationDto`
- **Error**: `ApiException<GetApiV1DatasetsDatasetIdComputeWarehouseError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasetsDatasetIdComputeWarehouseRequest` | `src/Soda/Requests/Datasets/GetApiV1DatasetsDatasetIdComputeWarehouseRequest.cs` |
| `DatasetComputeWarehouseConfigurationDto` | `src/Soda/Models/DatasetComputeWarehouseConfigurationDto.cs` |
| `GetApiV1DatasetsDatasetIdComputeWarehouseError` | `src/Soda/Errors/GetApiV1DatasetsDatasetIdComputeWarehouseError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DatasetsDatasetIdDiagnosticsWarehouse

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DatasetsDatasetIdDiagnosticsWarehouse(GetApiV1DatasetsDatasetIdDiagnosticsWarehouseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`
- **Returns**: `PublicApiDatasetDiagnosticsWarehouseResponse`
- **Error**: `ApiException<GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasetsDatasetIdDiagnosticsWarehouseRequest` | `src/Soda/Requests/Datasets/GetApiV1DatasetsDatasetIdDiagnosticsWarehouseRequest.cs` |
| `PublicApiDatasetDiagnosticsWarehouseResponse` | `src/Soda/Models/PublicApiDatasetDiagnosticsWarehouseResponse.cs` |
| `GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError` | `src/Soda/Errors/GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DatasetsDatasetIdMetricMonitoring

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DatasetsDatasetIdMetricMonitoring(GetApiV1DatasetsDatasetIdMetricMonitoringRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`
- **Returns**: `PublicApiDatasetMetricMonitoringResponse`
- **Error**: `ApiException<GetApiV1DatasetsDatasetIdMetricMonitoringError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasetsDatasetIdMetricMonitoringRequest` | `src/Soda/Requests/Datasets/GetApiV1DatasetsDatasetIdMetricMonitoringRequest.cs` |
| `PublicApiDatasetMetricMonitoringResponse` | `src/Soda/Models/PublicApiDatasetMetricMonitoringResponse.cs` |
| `GetApiV1DatasetsDatasetIdMetricMonitoringError` | `src/Soda/Errors/GetApiV1DatasetsDatasetIdMetricMonitoringError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DatasetsDatasetIdProfiling

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DatasetsDatasetIdProfiling(GetApiV1DatasetsDatasetIdProfilingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`
- **Returns**: `PublicApiDatasetProfilingResponse`
- **Error**: `ApiException<GetApiV1DatasetsDatasetIdProfilingError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasetsDatasetIdProfilingRequest` | `src/Soda/Requests/Datasets/GetApiV1DatasetsDatasetIdProfilingRequest.cs` |
| `PublicApiDatasetProfilingResponse` | `src/Soda/Models/PublicApiDatasetProfilingResponse.cs` |
| `GetApiV1DatasetsDatasetIdProfilingError` | `src/Soda/Errors/GetApiV1DatasetsDatasetIdProfilingError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DatasetsDatasetIdResponsibilities

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DatasetsDatasetIdResponsibilities(GetApiV1DatasetsDatasetIdResponsibilitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`
- **Query params (wire ← C#)**: `page` ← `Page`, `size` ← `Size`
- **Returns**: `PublicApiDatasetResponsibilitiesResponse`
- **Error**: `ApiException<GetApiV1DatasetsDatasetIdResponsibilitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasetsDatasetIdResponsibilitiesRequest` | `src/Soda/Requests/Datasets/GetApiV1DatasetsDatasetIdResponsibilitiesRequest.cs` |
| `PublicApiDatasetResponsibilitiesResponse` | `src/Soda/Models/PublicApiDatasetResponsibilitiesResponse.cs` |
| `GetApiV1DatasetsDatasetIdResponsibilitiesError` | `src/Soda/Errors/GetApiV1DatasetsDatasetIdResponsibilitiesError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DatasetsRoles

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DatasetsRoles(GetApiV1DatasetsRolesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `size` ← `Size`
- **Returns**: `PublicApiDatasetRolesResponse`
- **Error**: `ApiException<GetApiV1DatasetsRolesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasetsRolesRequest` | `src/Soda/Requests/Datasets/GetApiV1DatasetsRolesRequest.cs` |
| `PublicApiDatasetRolesResponse` | `src/Soda/Models/PublicApiDatasetRolesResponse.cs` |
| `GetApiV1DatasetsRolesError` | `src/Soda/Errors/GetApiV1DatasetsRolesError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasetsDatasetId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasetsDatasetId(PostApiV1DatasetsDatasetIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`, `Body`
- **Returns**: `DatasetsContentDto`
- **Error**: `ApiException<PostApiV1DatasetsDatasetIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasetsDatasetIdRequest` | `src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdRequest.cs` |
| `PublicApiUpdateDatasetDto` | `src/Soda/Models/PublicApiUpdateDatasetDto.cs` |
| `DatasetsContentDto` | `src/Soda/Models/DatasetsContentDto.cs` |
| `PostApiV1DatasetsDatasetIdError` | `src/Soda/Errors/PostApiV1DatasetsDatasetIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasetsDatasetIdColumnAttributes

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasetsDatasetIdColumnAttributes(PostApiV1DatasetsDatasetIdColumnAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostApiV1DatasetsDatasetIdColumnAttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasetsDatasetIdColumnAttributesRequest` | `src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdColumnAttributesRequest.cs` |
| `PublicApiSetColumnAttributesRequestDto` | `src/Soda/Models/PublicApiSetColumnAttributesRequestDto.cs` |
| `PostApiV1DatasetsDatasetIdColumnAttributesError` | `src/Soda/Errors/PostApiV1DatasetsDatasetIdColumnAttributesError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasetsDatasetIdColumnMetricMonitors

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasetsDatasetIdColumnMetricMonitors(PostApiV1DatasetsDatasetIdColumnMetricMonitorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`, `Body`
- **Returns**: `PublicApiUpdateColumnMetricMonitorResponse`
- **Error**: `ApiException<PostApiV1DatasetsDatasetIdColumnMetricMonitorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasetsDatasetIdColumnMetricMonitorsRequest` | `src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdColumnMetricMonitorsRequest.cs` |
| `PublicApiCreateColumnMetricMonitorRequestDto` | `src/Soda/Models/PublicApiCreateColumnMetricMonitorRequestDto.cs` |
| `PublicApiUpdateColumnMetricMonitorResponse` | `src/Soda/Models/PublicApiUpdateColumnMetricMonitorResponse.cs` |
| `PostApiV1DatasetsDatasetIdColumnMetricMonitorsError` | `src/Soda/Errors/PostApiV1DatasetsDatasetIdColumnMetricMonitorsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`, `MonitorId`, `Body`
- **Returns**: `PublicApiUpdateColumnMetricMonitorResponse`
- **Error**: `ApiException<PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest` | `src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest.cs` |
| `PublicApiUpdateColumnMetricMonitorRequestDto` | `src/Soda/Models/PublicApiUpdateColumnMetricMonitorRequestDto.cs` |
| `PublicApiUpdateColumnMetricMonitorResponse` | `src/Soda/Models/PublicApiUpdateColumnMetricMonitorResponse.cs` |
| `PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError` | `src/Soda/Errors/PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasetsDatasetIdCustomSqlMonitors

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasetsDatasetIdCustomSqlMonitors(PostApiV1DatasetsDatasetIdCustomSqlMonitorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`, `Body`
- **Returns**: `PublicApiCreateCustomSqlMonitorResponse`
- **Error**: `ApiException<PostApiV1DatasetsDatasetIdCustomSqlMonitorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasetsDatasetIdCustomSqlMonitorsRequest` | `src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdCustomSqlMonitorsRequest.cs` |
| `PublicApiCreateCustomSqlMonitorRequestDto` | `src/Soda/Models/PublicApiCreateCustomSqlMonitorRequestDto.cs` |
| `PublicApiCreateCustomSqlMonitorResponse` | `src/Soda/Models/PublicApiCreateCustomSqlMonitorResponse.cs` |
| `PostApiV1DatasetsDatasetIdCustomSqlMonitorsError` | `src/Soda/Errors/PostApiV1DatasetsDatasetIdCustomSqlMonitorsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`, `MonitorId`, `Body`
- **Returns**: `PublicApiUpdateCustomSqlMonitorResponse`
- **Error**: `ApiException<PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest` | `src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest.cs` |
| `PublicApiUpdateCustomSqlMonitorRequestDto` | `src/Soda/Models/PublicApiUpdateCustomSqlMonitorRequestDto.cs` |
| `PublicApiUpdateCustomSqlMonitorResponse` | `src/Soda/Models/PublicApiUpdateCustomSqlMonitorResponse.cs` |
| `PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError` | `src/Soda/Errors/PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollection

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollection(PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionRequest` | `src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionRequest.cs` |
| `PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError` | `src/Soda/Errors/PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasetsDatasetIdResponsibilities

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasetsDatasetIdResponsibilities(PostApiV1DatasetsDatasetIdResponsibilitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasetId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostApiV1DatasetsDatasetIdResponsibilitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasetsDatasetIdResponsibilitiesRequest` | `src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdResponsibilitiesRequest.cs` |
| `PublicApiUpdateDatasetResponsibilitiesRequestDto` | `src/Soda/Models/PublicApiUpdateDatasetResponsibilitiesRequestDto.cs` |
| `PostApiV1DatasetsDatasetIdResponsibilitiesError` | `src/Soda/Errors/PostApiV1DatasetsDatasetIdResponsibilitiesError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasetsRoles

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasetsRoles(PostApiV1DatasetsRolesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PublicApiUpdateDatasetRoleResponse`
- **Error**: `ApiException<PostApiV1DatasetsRolesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasetsRolesRequest` | `src/Soda/Requests/Datasets/PostApiV1DatasetsRolesRequest.cs` |
| `PublicApiDatasetRoleRequestDto` | `src/Soda/Models/PublicApiDatasetRoleRequestDto.cs` |
| `PublicApiUpdateDatasetRoleResponse` | `src/Soda/Models/PublicApiUpdateDatasetRoleResponse.cs` |
| `PostApiV1DatasetsRolesError` | `src/Soda/Errors/PostApiV1DatasetsRolesError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasetsRolesRoleId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasetsRolesRoleId(PostApiV1DatasetsRolesRoleIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RoleId`, `Body`
- **Returns**: `PublicApiUpdateDatasetRoleResponse`
- **Error**: `ApiException<PostApiV1DatasetsRolesRoleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasetsRolesRoleIdRequest` | `src/Soda/Requests/Datasets/PostApiV1DatasetsRolesRoleIdRequest.cs` |
| `PublicApiDatasetRoleRequestDto` | `src/Soda/Models/PublicApiDatasetRoleRequestDto.cs` |
| `PublicApiUpdateDatasetRoleResponse` | `src/Soda/Models/PublicApiUpdateDatasetRoleResponse.cs` |
| `PostApiV1DatasetsRolesRoleIdError` | `src/Soda/Errors/PostApiV1DatasetsRolesRoleIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

