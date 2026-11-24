<!-- Generated file — do not edit; regenerated with the SDK. -->

# VariablesApi — operations

Accessor: `client.VariablesApi` · Source: `src/DevCycle/Api/VariablesApi.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### VariablesControllerCreate

- **Signature**: `VariablesControllerCreate(VariablesControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`, `Body`
- **Returns**: `VariableDevCycleManagementVariablesApi`
- **Error**: `ApiException<VariablesControllerCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VariablesControllerCreateRequest` | `src/DevCycle/Requests/VariablesApi/VariablesControllerCreateRequest.cs` |
| `CreateVariableDtoDevCycleManagementVariablesApi` | `src/DevCycle/Models/CreateVariableDtoDevCycleManagementVariablesApi.cs` |
| `VariableDevCycleManagementVariablesApi` | `src/DevCycle/Models/VariableDevCycleManagementVariablesApi.cs` |
| `VariablesControllerCreateError` | `src/DevCycle/Errors/VariablesControllerCreateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |

### VariablesControllerFindAll

- **Signature**: `VariablesControllerFindAll(VariablesControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`
- **Query params (wire ← C#)**: `page` ← `Page`, `perPage` ← `PerPage`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `search` ← `Search`, `feature` ← `Feature`, `type` ← `Type`, `status` ← `Status`
- **Returns**: `IReadOnlyList<VariableDevCycleManagementVariablesApi>`
- **Error**: `ApiException<VariablesControllerFindAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VariablesControllerFindAllRequest` | `src/DevCycle/Requests/VariablesApi/VariablesControllerFindAllRequest.cs` |
| `SortBy` | `src/DevCycle/Models/Enums/SortBy.cs` |
| `SortOrder` | `src/DevCycle/Models/Enums/SortOrder.cs` |
| `Type3DevCycleManagementVariablesApi` | `src/DevCycle/Models/Enums/Type3DevCycleManagementVariablesApi.cs` |
| `Status2DevCycleManagementVariablesApi` | `src/DevCycle/Models/Enums/Status2DevCycleManagementVariablesApi.cs` |
| `VariableDevCycleManagementVariablesApi` | `src/DevCycle/Models/VariableDevCycleManagementVariablesApi.cs` |
| `VariablesControllerFindAllError` | `src/DevCycle/Errors/VariablesControllerFindAllError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |

### VariablesControllerFindOne

- **Signature**: `VariablesControllerFindOne(VariablesControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`
- **Returns**: `VariableDevCycleManagementVariablesApi`
- **Error**: `ApiException<VariablesControllerFindOneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VariablesControllerFindOneRequest` | `src/DevCycle/Requests/VariablesApi/VariablesControllerFindOneRequest.cs` |
| `VariableDevCycleManagementVariablesApi` | `src/DevCycle/Models/VariableDevCycleManagementVariablesApi.cs` |
| `VariablesControllerFindOneError` | `src/DevCycle/Errors/VariablesControllerFindOneError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### VariablesControllerRemove

- **Signature**: `VariablesControllerRemove(VariablesControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`
- **Returns**: `void` (Task)
- **Error**: `ApiException<VariablesControllerRemoveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VariablesControllerRemoveRequest` | `src/DevCycle/Requests/VariablesApi/VariablesControllerRemoveRequest.cs` |
| `VariablesControllerRemoveError` | `src/DevCycle/Errors/VariablesControllerRemoveError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

### VariablesControllerUpdate

- **Signature**: `VariablesControllerUpdate(VariablesControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`, `Body`
- **Returns**: `VariableDevCycleManagementVariablesApi`
- **Error**: `ApiException<VariablesControllerUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VariablesControllerUpdateRequest` | `src/DevCycle/Requests/VariablesApi/VariablesControllerUpdateRequest.cs` |
| `UpdateVariableDto` | `src/DevCycle/Models/UpdateVariableDto.cs` |
| `VariableDevCycleManagementVariablesApi` | `src/DevCycle/Models/VariableDevCycleManagementVariablesApi.cs` |
| `VariablesControllerUpdateError` | `src/DevCycle/Errors/VariablesControllerUpdateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |

### VariablesControllerUpdateStatus

- **Signature**: `VariablesControllerUpdateStatus(VariablesControllerUpdateStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`, `Body`
- **Returns**: `VariableDevCycleManagementVariablesApi`
- **Error**: `ApiException<VariablesControllerUpdateStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VariablesControllerUpdateStatusRequest` | `src/DevCycle/Requests/VariablesApi/VariablesControllerUpdateStatusRequest.cs` |
| `UpdateVariableStatusDto` | `src/DevCycle/Models/UpdateVariableStatusDto.cs` |
| `VariableDevCycleManagementVariablesApi` | `src/DevCycle/Models/VariableDevCycleManagementVariablesApi.cs` |
| `VariablesControllerUpdateStatusError` | `src/DevCycle/Errors/VariablesControllerUpdateStatusError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

