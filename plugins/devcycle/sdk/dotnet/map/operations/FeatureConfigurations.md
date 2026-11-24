<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeatureConfigurations — operations

Accessor: `client.FeatureConfigurations` · Source: `src/DevCycle/Api/FeatureConfigurations.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FeatureConfigsControllerFindAll

- **Signature**: `FeatureConfigsControllerFindAll(FeatureConfigsControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`
- **Query params (wire ← C#)**: `environment` ← `Environment`
- **Returns**: `IReadOnlyList<FeatureConfig>`
- **Error**: `ApiException<FeatureConfigsControllerFindAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeatureConfigsControllerFindAllRequest` | `src/DevCycle/Requests/FeatureConfigurations/FeatureConfigsControllerFindAllRequest.cs` |
| `FeatureConfig` | `src/DevCycle/Models/FeatureConfig.cs` |
| `FeatureConfigsControllerFindAllError` | `src/DevCycle/Errors/FeatureConfigsControllerFindAllError.cs` |

### FeatureConfigsControllerUpdate

- **Signature**: `FeatureConfigsControllerUpdate(FeatureConfigsControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`, `Environment`, `Body`
- **Query params (wire ← C#)**: `environment` ← `Environment`
- **Returns**: `FeatureConfig`
- **Error**: `ApiException<FeatureConfigsControllerUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FeatureConfigsControllerUpdateRequest` | `src/DevCycle/Requests/FeatureConfigurations/FeatureConfigsControllerUpdateRequest.cs` |
| `UpdateFeatureConfigDto` | `src/DevCycle/Models/UpdateFeatureConfigDto.cs` |
| `FeatureConfig` | `src/DevCycle/Models/FeatureConfig.cs` |
| `FeatureConfigsControllerUpdateError` | `src/DevCycle/Errors/FeatureConfigsControllerUpdateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

