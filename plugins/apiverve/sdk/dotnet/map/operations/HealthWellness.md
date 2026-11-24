<!-- Generated file — do not edit; regenerated with the SDK. -->

# HealthWellness — operations

Accessor: `client.HealthWellness` · Source: `src/ApiVerve/Api/HealthWellness.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Bmicalculator

- **Auth**: `options.ApiKey`
- **Signature**: `Bmicalculator(BmicalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Weight`, `Height`, `Unit`
- **Query params (wire ← C#)**: `weight` ← `Weight`, `height` ← `Height`, `unit` ← `Unit`, `age` ← `Age`, `gender` ← `Gender`, `activityLevel` ← `ActivityLevel`
- **Returns**: `V1BmicalculatorResponse`
- **Error**: `ApiException<BmicalculatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BmicalculatorRequest` | `src/ApiVerve/Requests/HealthWellness/BmicalculatorRequest.cs` |
| `V1BmicalculatorResponse` | `src/ApiVerve/Models/V1BmicalculatorResponse.cs` |
| `BmicalculatorError` | `src/ApiVerve/Errors/BmicalculatorError.cs` |

### Exercises

- **Auth**: `options.ApiKey`
- **Signature**: `Exercises(ExercisesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Muscle`
- **Query params (wire ← C#)**: `muscle` ← `Muscle`, `name` ← `Name`, `equipment` ← `Equipment`
- **Returns**: `V1ExercisesResponse`
- **Error**: `ApiException<ExercisesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExercisesRequest` | `src/ApiVerve/Requests/HealthWellness/ExercisesRequest.cs` |
| `V1ExercisesResponse` | `src/ApiVerve/Models/V1ExercisesResponse.cs` |
| `ExercisesError` | `src/ApiVerve/Errors/ExercisesError.cs` |

