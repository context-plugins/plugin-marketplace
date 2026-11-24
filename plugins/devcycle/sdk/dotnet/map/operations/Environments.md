<!-- Generated file — do not edit; regenerated with the SDK. -->

# Environments — operations

Accessor: `client.Environments` · Source: `src/DevCycle/Api/Environments.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### EnvironmentsControllerCreate

- **Signature**: `EnvironmentsControllerCreate(EnvironmentsControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`, `Body`
- **Returns**: `EnvironmentModel`
- **Error**: `ApiException<EnvironmentsControllerCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnvironmentsControllerCreateRequest` | `src/DevCycle/Requests/Environments/EnvironmentsControllerCreateRequest.cs` |
| `CreateEnvironmentDto` | `src/DevCycle/Models/CreateEnvironmentDto.cs` |
| `EnvironmentModel` | `src/DevCycle/Models/EnvironmentModel.cs` |
| `EnvironmentsControllerCreateError` | `src/DevCycle/Errors/EnvironmentsControllerCreateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |

### EnvironmentsControllerFindAll

- **Signature**: `EnvironmentsControllerFindAll(EnvironmentsControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`
- **Query params (wire ← C#)**: `page` ← `Page`, `perPage` ← `PerPage`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `search` ← `Search`, `createdBy` ← `CreatedBy`
- **Returns**: `IReadOnlyList<EnvironmentModel>`
- **Error**: `ApiException<EnvironmentsControllerFindAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnvironmentsControllerFindAllRequest` | `src/DevCycle/Requests/Environments/EnvironmentsControllerFindAllRequest.cs` |
| `SortBy` | `src/DevCycle/Models/Enums/SortBy.cs` |
| `SortOrder` | `src/DevCycle/Models/Enums/SortOrder.cs` |
| `EnvironmentModel` | `src/DevCycle/Models/EnvironmentModel.cs` |
| `EnvironmentsControllerFindAllError` | `src/DevCycle/Errors/EnvironmentsControllerFindAllError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |

### EnvironmentsControllerFindOne

- **Signature**: `EnvironmentsControllerFindOne(EnvironmentsControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`
- **Returns**: `EnvironmentModel`
- **Error**: `ApiException<EnvironmentsControllerFindOneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnvironmentsControllerFindOneRequest` | `src/DevCycle/Requests/Environments/EnvironmentsControllerFindOneRequest.cs` |
| `EnvironmentModel` | `src/DevCycle/Models/EnvironmentModel.cs` |
| `EnvironmentsControllerFindOneError` | `src/DevCycle/Errors/EnvironmentsControllerFindOneError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### EnvironmentsControllerRemove

- **Signature**: `EnvironmentsControllerRemove(EnvironmentsControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`
- **Returns**: `void` (Task)
- **Error**: `ApiException<EnvironmentsControllerRemoveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetCannotDeleteLastItemErrorResponse([NotNullWhen(true)] out CannotDeleteLastItemErrorResponse? value)` [405] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnvironmentsControllerRemoveRequest` | `src/DevCycle/Requests/Environments/EnvironmentsControllerRemoveRequest.cs` |
| `EnvironmentsControllerRemoveError` | `src/DevCycle/Errors/EnvironmentsControllerRemoveError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `CannotDeleteLastItemErrorResponse` | `src/DevCycle/Models/CannotDeleteLastItemErrorResponse.cs` |

### EnvironmentsControllerUpdate

- **Signature**: `EnvironmentsControllerUpdate(EnvironmentsControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`, `Body`
- **Returns**: `EnvironmentModel`
- **Error**: `ApiException<EnvironmentsControllerUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EnvironmentsControllerUpdateRequest` | `src/DevCycle/Requests/Environments/EnvironmentsControllerUpdateRequest.cs` |
| `UpdateEnvironmentDto` | `src/DevCycle/Models/UpdateEnvironmentDto.cs` |
| `EnvironmentModel` | `src/DevCycle/Models/EnvironmentModel.cs` |
| `EnvironmentsControllerUpdateError` | `src/DevCycle/Errors/EnvironmentsControllerUpdateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |

### SdkKeysControllerGenerate

- **Signature**: `SdkKeysControllerGenerate(SdkKeysControllerGenerateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Environment`, `Project`, `Body`
- **Returns**: `EnvironmentModel`
- **Error**: `ApiException<SdkKeysControllerGenerateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SdkKeysControllerGenerateRequest` | `src/DevCycle/Requests/Environments/SdkKeysControllerGenerateRequest.cs` |
| `GenerateSdkTokensDto` | `src/DevCycle/Models/GenerateSdkTokensDto.cs` |
| `EnvironmentModel` | `src/DevCycle/Models/EnvironmentModel.cs` |
| `SdkKeysControllerGenerateError` | `src/DevCycle/Errors/SdkKeysControllerGenerateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### SdkKeysControllerInvalidate

- **Signature**: `SdkKeysControllerInvalidate(SdkKeysControllerInvalidateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Environment`, `Project`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SdkKeysControllerInvalidateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetCannotDeleteLastItemErrorResponse([NotNullWhen(true)] out CannotDeleteLastItemErrorResponse? value)` [405] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SdkKeysControllerInvalidateRequest` | `src/DevCycle/Requests/Environments/SdkKeysControllerInvalidateRequest.cs` |
| `SdkKeysControllerInvalidateError` | `src/DevCycle/Errors/SdkKeysControllerInvalidateError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `CannotDeleteLastItemErrorResponse` | `src/DevCycle/Models/CannotDeleteLastItemErrorResponse.cs` |

