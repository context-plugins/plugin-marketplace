<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataSources — operations

Accessor: `client.DataSources` · Source: `src/Soda/Api/DataSources.cs` · 18 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteApiV1DatasourcesDatasourceId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `DeleteApiV1DatasourcesDatasourceId(DeleteApiV1DatasourcesDatasourceIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasourceId`
- **Returns**: `PublicApiDeleteDatasourceResponse`
- **Error**: `ApiException<DeleteApiV1DatasourcesDatasourceIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1DatasourcesDatasourceIdRequest` | `src/Soda/Requests/DataSources/DeleteApiV1DatasourcesDatasourceIdRequest.cs` |
| `PublicApiDeleteDatasourceResponse` | `src/Soda/Models/PublicApiDeleteDatasourceResponse.cs` |
| `DeleteApiV1DatasourcesDatasourceIdError` | `src/Soda/Errors/DeleteApiV1DatasourcesDatasourceIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### DeleteApiV1DatasourcesRolesRoleId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `DeleteApiV1DatasourcesRolesRoleId(DeleteApiV1DatasourcesRolesRoleIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RoleId`
- **Returns**: `PublicApiDeleteDatasourceRoleResponse`
- **Error**: `ApiException<DeleteApiV1DatasourcesRolesRoleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1DatasourcesRolesRoleIdRequest` | `src/Soda/Requests/DataSources/DeleteApiV1DatasourcesRolesRoleIdRequest.cs` |
| `PublicApiDeleteDatasourceRoleResponse` | `src/Soda/Models/PublicApiDeleteDatasourceRoleResponse.cs` |
| `DeleteApiV1DatasourcesRolesRoleIdError` | `src/Soda/Errors/DeleteApiV1DatasourcesRolesRoleIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1Datasources

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1Datasources(GetApiV1DatasourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `search` ← `Search`, `size` ← `Size`
- **Returns**: `PublicApiListDatasourcesResponse`
- **Error**: `ApiException<GetApiV1DatasourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasourcesRequest` | `src/Soda/Requests/DataSources/GetApiV1DatasourcesRequest.cs` |
| `PublicApiListDatasourcesResponse` | `src/Soda/Models/PublicApiListDatasourcesResponse.cs` |
| `GetApiV1DatasourcesError` | `src/Soda/Errors/GetApiV1DatasourcesError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DatasourcesActionsTestConnectionOperationId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DatasourcesActionsTestConnectionOperationId(GetApiV1DatasourcesActionsTestConnectionOperationIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OperationId`
- **Returns**: `PublicApiTestConnectionStatusResponse`
- **Error**: `ApiException<GetApiV1DatasourcesActionsTestConnectionOperationIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasourcesActionsTestConnectionOperationIdRequest` | `src/Soda/Requests/DataSources/GetApiV1DatasourcesActionsTestConnectionOperationIdRequest.cs` |
| `PublicApiTestConnectionStatusResponse` | `src/Soda/Models/PublicApiTestConnectionStatusResponse.cs` |
| `GetApiV1DatasourcesActionsTestConnectionOperationIdError` | `src/Soda/Errors/GetApiV1DatasourcesActionsTestConnectionOperationIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DatasourcesDatasourceId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DatasourcesDatasourceId(GetApiV1DatasourcesDatasourceIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasourceId`
- **Returns**: `PublicApiGetDatasourceResponse`
- **Error**: `ApiException<GetApiV1DatasourcesDatasourceIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasourcesDatasourceIdRequest` | `src/Soda/Requests/DataSources/GetApiV1DatasourcesDatasourceIdRequest.cs` |
| `PublicApiGetDatasourceResponse` | `src/Soda/Models/PublicApiGetDatasourceResponse.cs` |
| `GetApiV1DatasourcesDatasourceIdError` | `src/Soda/Errors/GetApiV1DatasourcesDatasourceIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouse

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasourceId`
- **Returns**: `PublicApiDatasourceDiagnosticsWarehouseResponse`
- **Error**: `ApiException<GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest` | `src/Soda/Requests/DataSources/GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest.cs` |
| `PublicApiDatasourceDiagnosticsWarehouseResponse` | `src/Soda/Models/PublicApiDatasourceDiagnosticsWarehouseResponse.cs` |
| `GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError` | `src/Soda/Errors/GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationId(GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasourceId`, `OperationId`
- **Returns**: `PublicApiOnboardDatasetsStatusResponse`
- **Error**: `ApiException<GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdRequest` | `src/Soda/Requests/DataSources/GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdRequest.cs` |
| `PublicApiOnboardDatasetsStatusResponse` | `src/Soda/Models/PublicApiOnboardDatasetsStatusResponse.cs` |
| `GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError` | `src/Soda/Errors/GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DatasourcesDatasourceIdResponsibilities

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DatasourcesDatasourceIdResponsibilities(GetApiV1DatasourcesDatasourceIdResponsibilitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasourceId`
- **Query params (wire ← C#)**: `page` ← `Page`, `size` ← `Size`
- **Returns**: `PublicApiDatasourceResponsibilitiesResponse`
- **Error**: `ApiException<GetApiV1DatasourcesDatasourceIdResponsibilitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasourcesDatasourceIdResponsibilitiesRequest` | `src/Soda/Requests/DataSources/GetApiV1DatasourcesDatasourceIdResponsibilitiesRequest.cs` |
| `PublicApiDatasourceResponsibilitiesResponse` | `src/Soda/Models/PublicApiDatasourceResponsibilitiesResponse.cs` |
| `GetApiV1DatasourcesDatasourceIdResponsibilitiesError` | `src/Soda/Errors/GetApiV1DatasourcesDatasourceIdResponsibilitiesError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DatasourcesRoles

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DatasourcesRoles(GetApiV1DatasourcesRolesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `size` ← `Size`
- **Returns**: `PublicApiDatasourceRolesResponse`
- **Error**: `ApiException<GetApiV1DatasourcesRolesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DatasourcesRolesRequest` | `src/Soda/Requests/DataSources/GetApiV1DatasourcesRolesRequest.cs` |
| `PublicApiDatasourceRolesResponse` | `src/Soda/Models/PublicApiDatasourceRolesResponse.cs` |
| `GetApiV1DatasourcesRolesError` | `src/Soda/Errors/GetApiV1DatasourcesRolesError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1Datasources

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1Datasources(PostApiV1DatasourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PublicApiCreateDatasourceResponse`
- **Error**: `ApiException<PostApiV1DatasourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasourcesRequest` | `src/Soda/Requests/DataSources/PostApiV1DatasourcesRequest.cs` |
| `PublicApiCreateDatasourceRequestDto` | `src/Soda/Models/PublicApiCreateDatasourceRequestDto.cs` |
| `PublicApiCreateDatasourceResponse` | `src/Soda/Models/PublicApiCreateDatasourceResponse.cs` |
| `PostApiV1DatasourcesError` | `src/Soda/Errors/PostApiV1DatasourcesError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasourcesActionsTestConnection

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasourcesActionsTestConnection(PostApiV1DatasourcesActionsTestConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostApiV1DatasourcesActionsTestConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasourcesActionsTestConnectionRequest` | `src/Soda/Requests/DataSources/PostApiV1DatasourcesActionsTestConnectionRequest.cs` |
| `PublicApiTestConnectionRequestDto` | `src/Soda/Models/PublicApiTestConnectionRequestDto.cs` |
| `PostApiV1DatasourcesActionsTestConnectionError` | `src/Soda/Errors/PostApiV1DatasourcesActionsTestConnectionError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasourcesDatasourceId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasourcesDatasourceId(PostApiV1DatasourcesDatasourceIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasourceId`, `Body`
- **Returns**: `PublicApiUpdateDatasourceResponse`
- **Error**: `ApiException<PostApiV1DatasourcesDatasourceIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasourcesDatasourceIdRequest` | `src/Soda/Requests/DataSources/PostApiV1DatasourcesDatasourceIdRequest.cs` |
| `PublicApiUpdateDatasourceRequestDto` | `src/Soda/Models/PublicApiUpdateDatasourceRequestDto.cs` |
| `PublicApiUpdateDatasourceResponse` | `src/Soda/Models/PublicApiUpdateDatasourceResponse.cs` |
| `PostApiV1DatasourcesDatasourceIdError` | `src/Soda/Errors/PostApiV1DatasourcesDatasourceIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouse

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasourceId`, `Body`
- **Returns**: `PublicApiDatasourceDiagnosticsWarehouseResponse`
- **Error**: `ApiException<PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest` | `src/Soda/Requests/DataSources/PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest.cs` |
| `PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto` | `src/Soda/Models/PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto.cs` |
| `PublicApiDatasourceDiagnosticsWarehouseResponse` | `src/Soda/Models/PublicApiDatasourceDiagnosticsWarehouseResponse.cs` |
| `PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError` | `src/Soda/Errors/PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasourcesDatasourceIdDiscover

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasourcesDatasourceIdDiscover(PostApiV1DatasourcesDatasourceIdDiscoverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasourceId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostApiV1DatasourcesDatasourceIdDiscoverError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasourcesDatasourceIdDiscoverRequest` | `src/Soda/Requests/DataSources/PostApiV1DatasourcesDatasourceIdDiscoverRequest.cs` |
| `PostApiV1DatasourcesDatasourceIdDiscoverError` | `src/Soda/Errors/PostApiV1DatasourcesDatasourceIdDiscoverError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasourcesDatasourceIdOnboardDatasets

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasourcesDatasourceIdOnboardDatasets(PostApiV1DatasourcesDatasourceIdOnboardDatasetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasourceId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostApiV1DatasourcesDatasourceIdOnboardDatasetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasourcesDatasourceIdOnboardDatasetsRequest` | `src/Soda/Requests/DataSources/PostApiV1DatasourcesDatasourceIdOnboardDatasetsRequest.cs` |
| `PublicApiOnboardDatasetsRequestDto` | `src/Soda/Models/PublicApiOnboardDatasetsRequestDto.cs` |
| `PostApiV1DatasourcesDatasourceIdOnboardDatasetsError` | `src/Soda/Errors/PostApiV1DatasourcesDatasourceIdOnboardDatasetsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasourcesDatasourceIdResponsibilities

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasourcesDatasourceIdResponsibilities(PostApiV1DatasourcesDatasourceIdResponsibilitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DatasourceId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostApiV1DatasourcesDatasourceIdResponsibilitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasourcesDatasourceIdResponsibilitiesRequest` | `src/Soda/Requests/DataSources/PostApiV1DatasourcesDatasourceIdResponsibilitiesRequest.cs` |
| `PublicApiUpdateDatasourceResponsibilitiesRequestDto` | `src/Soda/Models/PublicApiUpdateDatasourceResponsibilitiesRequestDto.cs` |
| `PostApiV1DatasourcesDatasourceIdResponsibilitiesError` | `src/Soda/Errors/PostApiV1DatasourcesDatasourceIdResponsibilitiesError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasourcesRoles

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasourcesRoles(PostApiV1DatasourcesRolesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PublicApiCreateDatasourceRoleResponse`
- **Error**: `ApiException<PostApiV1DatasourcesRolesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasourcesRolesRequest` | `src/Soda/Requests/DataSources/PostApiV1DatasourcesRolesRequest.cs` |
| `PublicApiDatasourceRoleRequestDto` | `src/Soda/Models/PublicApiDatasourceRoleRequestDto.cs` |
| `PublicApiCreateDatasourceRoleResponse` | `src/Soda/Models/PublicApiCreateDatasourceRoleResponse.cs` |
| `PostApiV1DatasourcesRolesError` | `src/Soda/Errors/PostApiV1DatasourcesRolesError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DatasourcesRolesRoleId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DatasourcesRolesRoleId(PostApiV1DatasourcesRolesRoleIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RoleId`, `Body`
- **Returns**: `PublicApiUpdateDatasourceRoleResponse`
- **Error**: `ApiException<PostApiV1DatasourcesRolesRoleIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DatasourcesRolesRoleIdRequest` | `src/Soda/Requests/DataSources/PostApiV1DatasourcesRolesRoleIdRequest.cs` |
| `PublicApiDatasourceRoleRequestDto` | `src/Soda/Models/PublicApiDatasourceRoleRequestDto.cs` |
| `PublicApiUpdateDatasourceRoleResponse` | `src/Soda/Models/PublicApiUpdateDatasourceRoleResponse.cs` |
| `PostApiV1DatasourcesRolesRoleIdError` | `src/Soda/Errors/PostApiV1DatasourcesRolesRoleIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

