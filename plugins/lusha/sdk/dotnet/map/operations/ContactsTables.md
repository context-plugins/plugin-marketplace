<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactsTables — operations

Accessor: `client.ContactsTables` · Source: `src/Lusha/Api/ContactsTables.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddContactsTableEntities

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AddContactsTableEntities(AddContactsTableEntitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`, `Body`
- **Returns**: `EntitiesAddResponse`
- **Error**: `ApiException<AddContactsTableEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddContactsTableEntitiesRequest` | `src/Lusha/Requests/ContactsTables/AddContactsTableEntitiesRequest.cs` |
| `EntitiesAddRequest` | `src/Lusha/Models/EntitiesAddRequest.cs` |
| `EntitiesAddResponse` | `src/Lusha/Models/EntitiesAddResponse.cs` |
| `AddContactsTableEntitiesError` | `src/Lusha/Errors/AddContactsTableEntitiesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### CreateContactsTable

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreateContactsTable(CreateContactsTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TableResponse`
- **Error**: `ApiException<CreateContactsTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateContactsTableRequest` | `src/Lusha/Requests/ContactsTables/CreateContactsTableRequest.cs` |
| `TableCreateRequest` | `src/Lusha/Models/TableCreateRequest.cs` |
| `TableResponse` | `src/Lusha/Models/TableResponse.cs` |
| `CreateContactsTableError` | `src/Lusha/Errors/CreateContactsTableError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### DeleteContactsTable

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DeleteContactsTable(DeleteContactsTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`
- **Query params (wire ← C#)**: `email` ← `Email`
- **Returns**: `V3ContactsTablesResponse`
- **Error**: `ApiException<DeleteContactsTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteContactsTableRequest` | `src/Lusha/Requests/ContactsTables/DeleteContactsTableRequest.cs` |
| `V3ContactsTablesResponse` | `src/Lusha/Models/V3ContactsTablesResponse.cs` |
| `DeleteContactsTableError` | `src/Lusha/Errors/DeleteContactsTableError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetContactsTable

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetContactsTable(GetContactsTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`
- **Query params (wire ← C#)**: `email` ← `Email`
- **Returns**: `TableResponse`
- **Error**: `ApiException<GetContactsTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContactsTableRequest` | `src/Lusha/Requests/ContactsTables/GetContactsTableRequest.cs` |
| `TableResponse` | `src/Lusha/Models/TableResponse.cs` |
| `GetContactsTableError` | `src/Lusha/Errors/GetContactsTableError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetContactsTableEntities

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetContactsTableEntities(GetContactsTableEntitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`
- **Query params (wire ← C#)**: `email` ← `Email`, `page` ← `Page`, `size` ← `Size`
- **Returns**: `EntitiesGetResponse`
- **Error**: `ApiException<GetContactsTableEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContactsTableEntitiesRequest` | `src/Lusha/Requests/ContactsTables/GetContactsTableEntitiesRequest.cs` |
| `EntitiesGetResponse` | `src/Lusha/Models/EntitiesGetResponse.cs` |
| `GetContactsTableEntitiesError` | `src/Lusha/Errors/GetContactsTableEntitiesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### ListContactsTableColumns

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListContactsTableColumns(ListContactsTableColumnsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`
- **Query params (wire ← C#)**: `email` ← `Email`
- **Returns**: `ColumnsListResponse`
- **Error**: `ApiException<ListContactsTableColumnsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListContactsTableColumnsRequest` | `src/Lusha/Requests/ContactsTables/ListContactsTableColumnsRequest.cs` |
| `ColumnsListResponse` | `src/Lusha/Models/ColumnsListResponse.cs` |
| `ListContactsTableColumnsError` | `src/Lusha/Errors/ListContactsTableColumnsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### ListContactsTables

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListContactsTables(ListContactsTablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TableListResponse`
- **Error**: `ApiException<ListContactsTablesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListContactsTablesRequest` | `src/Lusha/Requests/ContactsTables/ListContactsTablesRequest.cs` |
| `TableListRequest` | `src/Lusha/Models/TableListRequest.cs` |
| `TableListResponse` | `src/Lusha/Models/TableListResponse.cs` |
| `ListContactsTablesError` | `src/Lusha/Errors/ListContactsTablesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### RemoveContactsTableColumn

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `RemoveContactsTableColumn(RemoveContactsTableColumnRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`, `ColumnId`
- **Query params (wire ← C#)**: `email` ← `Email`
- **Returns**: `V3ContactsTablesColumnsResponse`
- **Error**: `ApiException<RemoveContactsTableColumnError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveContactsTableColumnRequest` | `src/Lusha/Requests/ContactsTables/RemoveContactsTableColumnRequest.cs` |
| `V3ContactsTablesColumnsResponse` | `src/Lusha/Models/V3ContactsTablesColumnsResponse.cs` |
| `RemoveContactsTableColumnError` | `src/Lusha/Errors/RemoveContactsTableColumnError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### RemoveContactsTableEntities

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `RemoveContactsTableEntities(RemoveContactsTableEntitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`, `Body`
- **Returns**: `EntitiesRemoveResponse`
- **Error**: `ApiException<RemoveContactsTableEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveContactsTableEntitiesRequest` | `src/Lusha/Requests/ContactsTables/RemoveContactsTableEntitiesRequest.cs` |
| `EntitiesRemoveRequest` | `src/Lusha/Models/EntitiesRemoveRequest.cs` |
| `EntitiesRemoveResponse` | `src/Lusha/Models/EntitiesRemoveResponse.cs` |
| `RemoveContactsTableEntitiesError` | `src/Lusha/Errors/RemoveContactsTableEntitiesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### RunContactsTableColumn

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `RunContactsTableColumn(RunContactsTableColumnRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`, `ColumnId`, `Body`
- **Returns**: `ColumnsRunResponse`
- **Error**: `ApiException<RunContactsTableColumnError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RunContactsTableColumnRequest` | `src/Lusha/Requests/ContactsTables/RunContactsTableColumnRequest.cs` |
| `ColumnsRunRequest` | `src/Lusha/Models/ColumnsRunRequest.cs` |
| `ColumnsRunResponse` | `src/Lusha/Models/ColumnsRunResponse.cs` |
| `RunContactsTableColumnError` | `src/Lusha/Errors/RunContactsTableColumnError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### UpdateContactsTable

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UpdateContactsTable(UpdateContactsTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TableId`, `Body`
- **Returns**: `TableResponse`
- **Error**: `ApiException<UpdateContactsTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateContactsTableRequest` | `src/Lusha/Requests/ContactsTables/UpdateContactsTableRequest.cs` |
| `TableUpdateRequest` | `src/Lusha/Models/TableUpdateRequest.cs` |
| `TableResponse` | `src/Lusha/Models/TableResponse.cs` |
| `UpdateContactsTableError` | `src/Lusha/Errors/UpdateContactsTableError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

