<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomProperties — operations

Accessor: `client.CustomProperties` · Source: `src/DevCycle/Api/CustomProperties.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CustomPropertiesControllerCreate

- **Signature**: `CustomPropertiesControllerCreate(CustomPropertiesControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`, `Body`
- **Returns**: `CustomProperty`
- **Error**: `ApiException<CustomPropertiesControllerCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CustomPropertiesControllerCreateRequest` | `src/DevCycle/Requests/CustomProperties/CustomPropertiesControllerCreateRequest.cs` |
| `CreateCustomPropertyDto` | `src/DevCycle/Models/CreateCustomPropertyDto.cs` |
| `CustomProperty` | `src/DevCycle/Models/CustomProperty.cs` |
| `CustomPropertiesControllerCreateError` | `src/DevCycle/Errors/CustomPropertiesControllerCreateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |

### CustomPropertiesControllerFindAll

- **Signature**: `CustomPropertiesControllerFindAll(CustomPropertiesControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`
- **Query params (wire ← C#)**: `page` ← `Page`, `perPage` ← `PerPage`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `search` ← `Search`, `type` ← `Type`, `includeUsage` ← `IncludeUsage`
- **Returns**: `IReadOnlyList<CustomProperty>`
- **Error**: `ApiException<CustomPropertiesControllerFindAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CustomPropertiesControllerFindAllRequest` | `src/DevCycle/Requests/CustomProperties/CustomPropertiesControllerFindAllRequest.cs` |
| `SortBy` | `src/DevCycle/Models/Enums/SortBy.cs` |
| `SortOrder` | `src/DevCycle/Models/Enums/SortOrder.cs` |
| `Type3` | `src/DevCycle/Models/Enums/Type3.cs` |
| `CustomProperty` | `src/DevCycle/Models/CustomProperty.cs` |
| `CustomPropertiesControllerFindAllError` | `src/DevCycle/Errors/CustomPropertiesControllerFindAllError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |

### CustomPropertiesControllerFindOne

- **Signature**: `CustomPropertiesControllerFindOne(CustomPropertiesControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`
- **Returns**: `CustomProperty`
- **Error**: `ApiException<CustomPropertiesControllerFindOneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CustomPropertiesControllerFindOneRequest` | `src/DevCycle/Requests/CustomProperties/CustomPropertiesControllerFindOneRequest.cs` |
| `CustomProperty` | `src/DevCycle/Models/CustomProperty.cs` |
| `CustomPropertiesControllerFindOneError` | `src/DevCycle/Errors/CustomPropertiesControllerFindOneError.cs` |

### CustomPropertiesControllerRemove

- **Signature**: `CustomPropertiesControllerRemove(CustomPropertiesControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CustomPropertiesControllerRemoveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CustomPropertiesControllerRemoveRequest` | `src/DevCycle/Requests/CustomProperties/CustomPropertiesControllerRemoveRequest.cs` |
| `CustomPropertiesControllerRemoveError` | `src/DevCycle/Errors/CustomPropertiesControllerRemoveError.cs` |

### CustomPropertiesControllerUpdate

- **Signature**: `CustomPropertiesControllerUpdate(CustomPropertiesControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`, `Body`
- **Returns**: `CustomProperty`
- **Error**: `ApiException<CustomPropertiesControllerUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CustomPropertiesControllerUpdateRequest` | `src/DevCycle/Requests/CustomProperties/CustomPropertiesControllerUpdateRequest.cs` |
| `UpdateCustomPropertyDto` | `src/DevCycle/Models/UpdateCustomPropertyDto.cs` |
| `CustomProperty` | `src/DevCycle/Models/CustomProperty.cs` |
| `CustomPropertiesControllerUpdateError` | `src/DevCycle/Errors/CustomPropertiesControllerUpdateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |

