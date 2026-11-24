<!-- Generated file — do not edit; regenerated with the SDK. -->

# Fields — operations

Accessor: `client.Fields` · Source: `src/Airtable/Api/Fields.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateField

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateField(CreateFieldOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `TableId`, `Body`
- **Returns**: `FieldSchema`
- **Error**: `ApiException<CreateFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 422, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateFieldOperationRequest` | `src/Airtable/Requests/Fields/CreateFieldOperationRequest.cs` |
| `CreateFieldRequest` | `src/Airtable/Models/CreateFieldRequest.cs` |
| `FieldSchema` | `src/Airtable/Models/FieldSchema.cs` |
| `CreateFieldError` | `src/Airtable/Errors/CreateFieldError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

### UpdateField

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateField(UpdateFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BaseId`, `TableId`, `FieldId`, `Body`
- **Returns**: `FieldSchema`
- **Error**: `ApiException<UpdateFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 422, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateFieldRequest` | `src/Airtable/Requests/Fields/UpdateFieldRequest.cs` |
| `MetaBasesTablesFieldsFieldIdRequest` | `src/Airtable/Models/MetaBasesTablesFieldsFieldIdRequest.cs` |
| `FieldSchema` | `src/Airtable/Models/FieldSchema.cs` |
| `UpdateFieldError` | `src/Airtable/Errors/UpdateFieldError.cs` |
| `Error` | `src/Airtable/Models/Error.cs` |

