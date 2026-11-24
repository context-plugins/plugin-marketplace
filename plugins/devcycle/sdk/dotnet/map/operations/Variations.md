<!-- Generated file — do not edit; regenerated with the SDK. -->

# Variations — operations

Accessor: `client.Variations` · Source: `src/DevCycle/Api/Variations.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### VariationsControllerCreate

- **Signature**: `VariationsControllerCreate(VariationsControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`, `Feature`, `Body`
- **Returns**: `FeatureDevCycleManagementMetricAssociationsApi`
- **Error**: `ApiException<VariationsControllerCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value)` [412] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VariationsControllerCreateRequest` | `src/DevCycle/Requests/Variations/VariationsControllerCreateRequest.cs` |
| `FeatureVariationDto` | `src/DevCycle/Models/FeatureVariationDto.cs` |
| `FeatureDevCycleManagementMetricAssociationsApi` | `src/DevCycle/Models/FeatureDevCycleManagementMetricAssociationsApi.cs` |
| `VariationsControllerCreateError` | `src/DevCycle/Errors/VariationsControllerCreateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |
| `PreconditionFailedErrorResponse` | `src/DevCycle/Models/PreconditionFailedErrorResponse.cs` |

### VariationsControllerFindAll

- **Signature**: `VariationsControllerFindAll(VariationsControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`
- **Returns**: `IReadOnlyList<Variation>`
- **Error**: `ApiException<VariationsControllerFindAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VariationsControllerFindAllRequest` | `src/DevCycle/Requests/Variations/VariationsControllerFindAllRequest.cs` |
| `Variation` | `src/DevCycle/Models/Variation.cs` |
| `VariationsControllerFindAllError` | `src/DevCycle/Errors/VariationsControllerFindAllError.cs` |

### VariationsControllerFindOne

- **Signature**: `VariationsControllerFindOne(VariationsControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Feature`, `Project`
- **Returns**: `Variation`
- **Error**: `ApiException<VariationsControllerFindOneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VariationsControllerFindOneRequest` | `src/DevCycle/Requests/Variations/VariationsControllerFindOneRequest.cs` |
| `Variation` | `src/DevCycle/Models/Variation.cs` |
| `VariationsControllerFindOneError` | `src/DevCycle/Errors/VariationsControllerFindOneError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### VariationsControllerUpdate

- **Signature**: `VariationsControllerUpdate(VariationsControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Feature`, `Project`, `Body`
- **Returns**: `FeatureDevCycleManagementMetricAssociationsApi`
- **Error**: `ApiException<VariationsControllerUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VariationsControllerUpdateRequest` | `src/DevCycle/Requests/Variations/VariationsControllerUpdateRequest.cs` |
| `UpdateFeatureVariationDto` | `src/DevCycle/Models/UpdateFeatureVariationDto.cs` |
| `FeatureDevCycleManagementMetricAssociationsApi` | `src/DevCycle/Models/FeatureDevCycleManagementMetricAssociationsApi.cs` |
| `VariationsControllerUpdateError` | `src/DevCycle/Errors/VariationsControllerUpdateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |

