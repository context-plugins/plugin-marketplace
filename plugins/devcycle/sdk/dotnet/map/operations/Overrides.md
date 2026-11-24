<!-- Generated file — do not edit; regenerated with the SDK. -->

# Overrides — operations

Accessor: `client.Overrides` · Source: `src/DevCycle/Api/Overrides.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### OverridesControllerDeleteOverridesForFeature

- **Signature**: `OverridesControllerDeleteOverridesForFeature(OverridesControllerDeleteOverridesForFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`, `Environment`
- **Query params (wire ← C#)**: `environment` ← `Environment`
- **Returns**: `void` (Task)
- **Error**: `ApiException<OverridesControllerDeleteOverridesForFeatureError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OverridesControllerDeleteOverridesForFeatureRequest` | `src/DevCycle/Requests/Overrides/OverridesControllerDeleteOverridesForFeatureRequest.cs` |
| `OverridesControllerDeleteOverridesForFeatureError` | `src/DevCycle/Errors/OverridesControllerDeleteOverridesForFeatureError.cs` |

### OverridesControllerDeleteOverridesForProject

- **Signature**: `OverridesControllerDeleteOverridesForProject(OverridesControllerDeleteOverridesForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`
- **Returns**: `void` (Task)
- **Error**: `ApiException<OverridesControllerDeleteOverridesForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OverridesControllerDeleteOverridesForProjectRequest` | `src/DevCycle/Requests/Overrides/OverridesControllerDeleteOverridesForProjectRequest.cs` |
| `OverridesControllerDeleteOverridesForProjectError` | `src/DevCycle/Errors/OverridesControllerDeleteOverridesForProjectError.cs` |

### OverridesControllerFindOne

- **Signature**: `OverridesControllerFindOne(OverridesControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`
- **Returns**: `OverrideResponse`
- **Error**: `ApiException<OverridesControllerFindOneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OverridesControllerFindOneRequest` | `src/DevCycle/Requests/Overrides/OverridesControllerFindOneRequest.cs` |
| `OverrideResponse` | `src/DevCycle/Models/OverrideResponse.cs` |
| `OverridesControllerFindOneError` | `src/DevCycle/Errors/OverridesControllerFindOneError.cs` |

### OverridesControllerFindOverridesForFeature

- **Signature**: `OverridesControllerFindOverridesForFeature(OverridesControllerFindOverridesForFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`
- **Query params (wire ← C#)**: `addMetadata` ← `AddMetadata`, `environment` ← `Environment`
- **Returns**: `FeatureOverrides`
- **Error**: `ApiException<OverridesControllerFindOverridesForFeatureError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OverridesControllerFindOverridesForFeatureRequest` | `src/DevCycle/Requests/Overrides/OverridesControllerFindOverridesForFeatureRequest.cs` |
| `FeatureOverrides` | `src/DevCycle/Models/FeatureOverrides.cs` |
| `OverridesControllerFindOverridesForFeatureError` | `src/DevCycle/Errors/OverridesControllerFindOverridesForFeatureError.cs` |

### OverridesControllerFindOverridesForProject

- **Signature**: `OverridesControllerFindOverridesForProject(OverridesControllerFindOverridesForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`
- **Returns**: `IReadOnlyList<UserOverride>`
- **Error**: `ApiException<OverridesControllerFindOverridesForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OverridesControllerFindOverridesForProjectRequest` | `src/DevCycle/Requests/Overrides/OverridesControllerFindOverridesForProjectRequest.cs` |
| `UserOverride` | `src/DevCycle/Models/UserOverride.cs` |
| `OverridesControllerFindOverridesForProjectError` | `src/DevCycle/Errors/OverridesControllerFindOverridesForProjectError.cs` |

### OverridesControllerUpdateFeatureOverride

- **Signature**: `OverridesControllerUpdateFeatureOverride(OverridesControllerUpdateFeatureOverrideRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`, `Body`
- **Returns**: `Override`
- **Error**: `ApiException<OverridesControllerUpdateFeatureOverrideError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OverridesControllerUpdateFeatureOverrideRequest` | `src/DevCycle/Requests/Overrides/OverridesControllerUpdateFeatureOverrideRequest.cs` |
| `UpdateOverrideDto` | `src/DevCycle/Models/UpdateOverrideDto.cs` |
| `Override` | `src/DevCycle/Models/Override.cs` |
| `OverridesControllerUpdateFeatureOverrideError` | `src/DevCycle/Errors/OverridesControllerUpdateFeatureOverrideError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |

