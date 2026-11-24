<!-- Generated file — do not edit; regenerated with the SDK. -->

# CompaniesTables — operations

Accessor: `client.CompaniesTables` · Source: `src/Lusha/Api/CompaniesTables.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddCompaniesTableEntities

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AddCompaniesTableEntities(AddCompaniesTableEntitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`, `Body`
- **Returns**: `EntitiesAddResponse`
- **Error**: `ApiException<AddCompaniesTableEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddCompaniesTableEntitiesRequest` | `src/Lusha/Requests/CompaniesTables/AddCompaniesTableEntitiesRequest.cs` |
| `EntitiesAddRequest` | `src/Lusha/Models/EntitiesAddRequest.cs` |
| `EntitiesAddResponse` | `src/Lusha/Models/EntitiesAddResponse.cs` |
| `AddCompaniesTableEntitiesError` | `src/Lusha/Errors/AddCompaniesTableEntitiesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### CreateCompaniesTable

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreateCompaniesTable(CreateCompaniesTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TableResponse`
- **Error**: `ApiException<CreateCompaniesTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCompaniesTableRequest` | `src/Lusha/Requests/CompaniesTables/CreateCompaniesTableRequest.cs` |
| `TableCreateRequest` | `src/Lusha/Models/TableCreateRequest.cs` |
| `TableResponse` | `src/Lusha/Models/TableResponse.cs` |
| `CreateCompaniesTableError` | `src/Lusha/Errors/CreateCompaniesTableError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### DeleteCompaniesTable

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DeleteCompaniesTable(DeleteCompaniesTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`
- **Query params (wire ← C#)**: `email` ← `Email`
- **Returns**: `V3CompaniesTablesResponse`
- **Error**: `ApiException<DeleteCompaniesTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCompaniesTableRequest` | `src/Lusha/Requests/CompaniesTables/DeleteCompaniesTableRequest.cs` |
| `V3CompaniesTablesResponse` | `src/Lusha/Models/V3CompaniesTablesResponse.cs` |
| `DeleteCompaniesTableError` | `src/Lusha/Errors/DeleteCompaniesTableError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetCompaniesTable

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompaniesTable(GetCompaniesTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`
- **Query params (wire ← C#)**: `email` ← `Email`
- **Returns**: `TableResponse`
- **Error**: `ApiException<GetCompaniesTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesTableRequest` | `src/Lusha/Requests/CompaniesTables/GetCompaniesTableRequest.cs` |
| `TableResponse` | `src/Lusha/Models/TableResponse.cs` |
| `GetCompaniesTableError` | `src/Lusha/Errors/GetCompaniesTableError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetCompaniesTableEntities

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompaniesTableEntities(GetCompaniesTableEntitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`
- **Query params (wire ← C#)**: `email` ← `Email`, `page` ← `Page`, `size` ← `Size`
- **Returns**: `EntitiesGetResponse`
- **Error**: `ApiException<GetCompaniesTableEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesTableEntitiesRequest` | `src/Lusha/Requests/CompaniesTables/GetCompaniesTableEntitiesRequest.cs` |
| `EntitiesGetResponse` | `src/Lusha/Models/EntitiesGetResponse.cs` |
| `GetCompaniesTableEntitiesError` | `src/Lusha/Errors/GetCompaniesTableEntitiesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### ListCompaniesTableColumns

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListCompaniesTableColumns(ListCompaniesTableColumnsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`
- **Query params (wire ← C#)**: `email` ← `Email`
- **Returns**: `ColumnsListResponse`
- **Error**: `ApiException<ListCompaniesTableColumnsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCompaniesTableColumnsRequest` | `src/Lusha/Requests/CompaniesTables/ListCompaniesTableColumnsRequest.cs` |
| `ColumnsListResponse` | `src/Lusha/Models/ColumnsListResponse.cs` |
| `ListCompaniesTableColumnsError` | `src/Lusha/Errors/ListCompaniesTableColumnsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### ListCompaniesTables

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListCompaniesTables(ListCompaniesTablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TableListResponse`
- **Error**: `ApiException<ListCompaniesTablesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCompaniesTablesRequest` | `src/Lusha/Requests/CompaniesTables/ListCompaniesTablesRequest.cs` |
| `TableListRequest` | `src/Lusha/Models/TableListRequest.cs` |
| `TableListResponse` | `src/Lusha/Models/TableListResponse.cs` |
| `ListCompaniesTablesError` | `src/Lusha/Errors/ListCompaniesTablesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### RemoveCompaniesTableColumn

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `RemoveCompaniesTableColumn(RemoveCompaniesTableColumnRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`, `ColumnId`
- **Query params (wire ← C#)**: `email` ← `Email`
- **Returns**: `V3CompaniesTablesColumnsResponse`
- **Error**: `ApiException<RemoveCompaniesTableColumnError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveCompaniesTableColumnRequest` | `src/Lusha/Requests/CompaniesTables/RemoveCompaniesTableColumnRequest.cs` |
| `V3CompaniesTablesColumnsResponse` | `src/Lusha/Models/V3CompaniesTablesColumnsResponse.cs` |
| `RemoveCompaniesTableColumnError` | `src/Lusha/Errors/RemoveCompaniesTableColumnError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### RemoveCompaniesTableEntities

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `RemoveCompaniesTableEntities(RemoveCompaniesTableEntitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`, `Body`
- **Returns**: `EntitiesRemoveResponse`
- **Error**: `ApiException<RemoveCompaniesTableEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveCompaniesTableEntitiesRequest` | `src/Lusha/Requests/CompaniesTables/RemoveCompaniesTableEntitiesRequest.cs` |
| `EntitiesRemoveRequest` | `src/Lusha/Models/EntitiesRemoveRequest.cs` |
| `EntitiesRemoveResponse` | `src/Lusha/Models/EntitiesRemoveResponse.cs` |
| `RemoveCompaniesTableEntitiesError` | `src/Lusha/Errors/RemoveCompaniesTableEntitiesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### RunCompaniesTableColumn

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `RunCompaniesTableColumn(RunCompaniesTableColumnRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`, `ColumnId`, `Body`
- **Returns**: `ColumnsRunResponse`
- **Error**: `ApiException<RunCompaniesTableColumnError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RunCompaniesTableColumnRequest` | `src/Lusha/Requests/CompaniesTables/RunCompaniesTableColumnRequest.cs` |
| `ColumnsRunRequest` | `src/Lusha/Models/ColumnsRunRequest.cs` |
| `ColumnsRunResponse` | `src/Lusha/Models/ColumnsRunResponse.cs` |
| `RunCompaniesTableColumnError` | `src/Lusha/Errors/RunCompaniesTableColumnError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### UpdateCompaniesTable

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UpdateCompaniesTable(UpdateCompaniesTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`, `Body`
- **Returns**: `TableResponse`
- **Error**: `ApiException<UpdateCompaniesTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCompaniesTableRequest` | `src/Lusha/Requests/CompaniesTables/UpdateCompaniesTableRequest.cs` |
| `TableUpdateRequest` | `src/Lusha/Models/TableUpdateRequest.cs` |
| `TableResponse` | `src/Lusha/Models/TableResponse.cs` |
| `UpdateCompaniesTableError` | `src/Lusha/Errors/UpdateCompaniesTableError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

