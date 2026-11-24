<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tables — operations

Accessor: `client.Tables` · Source: `src/Airtable/Api/Tables.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTable

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateTable(CreateTableOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `Body`
- **Returns**: `TableSchema`
- **Error**: `ApiException<CreateTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 422, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTableOperationRequest` | `src/Airtable/Requests/Tables/CreateTableOperationRequest.cs` |
| `CreateTableRequest` | `src/Airtable/Models/CreateTableRequest.cs` |
| `TableSchema` | `src/Airtable/Models/TableSchema.cs` |
| `CreateTableError` | `src/Airtable/Errors/CreateTableError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### UpdateTable

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateTable(UpdateTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `TableId`, `Body`
- **Returns**: `TableSchema`
- **Error**: `ApiException<UpdateTableError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 422, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTableRequest` | `src/Airtable/Requests/Tables/UpdateTableRequest.cs` |
| `MetaBasesTablesRequest` | `src/Airtable/Models/MetaBasesTablesRequest.cs` |
| `TableSchema` | `src/Airtable/Models/TableSchema.cs` |
| `UpdateTableError` | `src/Airtable/Errors/UpdateTableError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

