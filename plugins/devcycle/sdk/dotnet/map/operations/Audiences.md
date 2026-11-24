<!-- Generated file — do not edit; regenerated with the SDK. -->

# Audiences — operations

Accessor: `client.Audiences` · Source: `src/DevCycle/Api/Audiences.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AudiencesControllerCreate

- **Signature**: `AudiencesControllerCreate(AudiencesControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`, `Body`
- **Returns**: `Audience`
- **Error**: `ApiException<AudiencesControllerCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AudiencesControllerCreateRequest` | `src/DevCycle/Requests/Audiences/AudiencesControllerCreateRequest.cs` |
| `CreateAudienceDto` | `src/DevCycle/Models/CreateAudienceDto.cs` |
| `Audience` | `src/DevCycle/Models/Audience.cs` |
| `AudiencesControllerCreateError` | `src/DevCycle/Errors/AudiencesControllerCreateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |

### AudiencesControllerFindAll

- **Signature**: `AudiencesControllerFindAll(AudiencesControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`
- **Query params (wire ← C#)**: `page` ← `Page`, `perPage` ← `PerPage`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `search` ← `Search`, `createdBy` ← `CreatedBy`, `includeUsage` ← `IncludeUsage`
- **Returns**: `IReadOnlyList<Audience>`
- **Error**: `ApiException<AudiencesControllerFindAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AudiencesControllerFindAllRequest` | `src/DevCycle/Requests/Audiences/AudiencesControllerFindAllRequest.cs` |
| `SortBy` | `src/DevCycle/Models/Enums/SortBy.cs` |
| `SortOrder` | `src/DevCycle/Models/Enums/SortOrder.cs` |
| `Audience` | `src/DevCycle/Models/Audience.cs` |
| `AudiencesControllerFindAllError` | `src/DevCycle/Errors/AudiencesControllerFindAllError.cs` |

### AudiencesControllerFindOne

- **Signature**: `AudiencesControllerFindOne(AudiencesControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`
- **Returns**: `Audience`
- **Error**: `ApiException<AudiencesControllerFindOneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AudiencesControllerFindOneRequest` | `src/DevCycle/Requests/Audiences/AudiencesControllerFindOneRequest.cs` |
| `Audience` | `src/DevCycle/Models/Audience.cs` |
| `AudiencesControllerFindOneError` | `src/DevCycle/Errors/AudiencesControllerFindOneError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### AudiencesControllerFindUsages

- **Signature**: `AudiencesControllerFindUsages(AudiencesControllerFindUsagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`
- **Returns**: `AudienceUsage`
- **Error**: `ApiException<AudiencesControllerFindUsagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AudiencesControllerFindUsagesRequest` | `src/DevCycle/Requests/Audiences/AudiencesControllerFindUsagesRequest.cs` |
| `AudienceUsage` | `src/DevCycle/Models/AudienceUsage.cs` |
| `AudiencesControllerFindUsagesError` | `src/DevCycle/Errors/AudiencesControllerFindUsagesError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### AudiencesControllerRemove

- **Signature**: `AudiencesControllerRemove(AudiencesControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AudiencesControllerRemoveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 412] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AudiencesControllerRemoveRequest` | `src/DevCycle/Requests/Audiences/AudiencesControllerRemoveRequest.cs` |
| `AudiencesControllerRemoveError` | `src/DevCycle/Errors/AudiencesControllerRemoveError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### AudiencesControllerUpdate

- **Signature**: `AudiencesControllerUpdate(AudiencesControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`, `Body`
- **Returns**: `Audience`
- **Error**: `ApiException<AudiencesControllerUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AudiencesControllerUpdateRequest` | `src/DevCycle/Requests/Audiences/AudiencesControllerUpdateRequest.cs` |
| `UpdateAudienceDto` | `src/DevCycle/Models/UpdateAudienceDto.cs` |
| `Audience` | `src/DevCycle/Models/Audience.cs` |
| `AudiencesControllerUpdateError` | `src/DevCycle/Errors/AudiencesControllerUpdateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |

