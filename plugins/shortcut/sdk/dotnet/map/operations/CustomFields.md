<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomFields — operations

Accessor: `client.CustomFields` · Source: `src/Shortcut/Api/CustomFields.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteCustomField

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteCustomField(DeleteCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomFieldPublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCustomFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomFieldRequest` | `src/Shortcut/Requests/CustomFields/DeleteCustomFieldRequest.cs` |
| `DeleteCustomFieldError` | `src/Shortcut/Errors/DeleteCustomFieldError.cs` |

### GetCustomField

- **Auth**: `options.ApiToken`
- **Signature**: `GetCustomField(GetCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomFieldPublicId`
- **Returns**: `CustomField`
- **Error**: `ApiException<GetCustomFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomFieldRequest` | `src/Shortcut/Requests/CustomFields/GetCustomFieldRequest.cs` |
| `CustomField` | `src/Shortcut/Models/CustomField.cs` |
| `GetCustomFieldError` | `src/Shortcut/Errors/GetCustomFieldError.cs` |

### ListCustomFields

- **Auth**: `options.ApiToken`
- **Signature**: `ListCustomFields(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<CustomField>`
- **Error**: `ApiException<ListCustomFieldsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CustomField` | `src/Shortcut/Models/CustomField.cs` |
| `ListCustomFieldsError` | `src/Shortcut/Errors/ListCustomFieldsError.cs` |

### UpdateCustomField

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateCustomField(UpdateCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomFieldPublicId`, `Body`
- **Returns**: `CustomField`
- **Error**: `ApiException<UpdateCustomFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetDataConflictError([NotNullWhen(true)] out DataConflictError? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomFieldRequest` | `src/Shortcut/Requests/CustomFields/UpdateCustomFieldRequest.cs` |
| `UpdateCustomField` | `src/Shortcut/Models/UpdateCustomField.cs` |
| `CustomField` | `src/Shortcut/Models/CustomField.cs` |
| `UpdateCustomFieldError` | `src/Shortcut/Errors/UpdateCustomFieldError.cs` |
| `DataConflictError` | `src/Shortcut/Models/DataConflictError.cs` |

