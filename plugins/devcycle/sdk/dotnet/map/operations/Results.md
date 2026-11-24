<!-- Generated file — do not edit; regenerated with the SDK. -->

# Results — operations

Accessor: `client.Results` · Source: `src/DevCycle/Api/Results.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ResultsControllerGetEvaluationsPerHourByProject

- **Signature**: `ResultsControllerGetEvaluationsPerHourByProject(ResultsControllerGetEvaluationsPerHourByProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`
- **Query params (wire ← C#)**: `startDate` ← `StartDate`, `endDate` ← `EndDate`, `environment` ← `Environment`, `period` ← `Period`, `sdkType` ← `SdkType`
- **Returns**: `ResultProjectEvaluationsByHourDto`
- **Error**: `ApiException<ResultsControllerGetEvaluationsPerHourByProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResultsControllerGetEvaluationsPerHourByProjectRequest` | `src/DevCycle/Requests/Results/ResultsControllerGetEvaluationsPerHourByProjectRequest.cs` |
| `Period` | `src/DevCycle/Models/Enums/Period.cs` |
| `SdkTypeDevCycleManagementResultsApi` | `src/DevCycle/Models/Enums/SdkTypeDevCycleManagementResultsApi.cs` |
| `ResultProjectEvaluationsByHourDto` | `src/DevCycle/Models/ResultProjectEvaluationsByHourDto.cs` |
| `ResultsControllerGetEvaluationsPerHourByProjectError` | `src/DevCycle/Errors/ResultsControllerGetEvaluationsPerHourByProjectError.cs` |

### ResultsControllerGetTotalEvaluationsPerHourByFeature

- **Signature**: `ResultsControllerGetTotalEvaluationsPerHourByFeature(ResultsControllerGetTotalEvaluationsPerHourByFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`
- **Query params (wire ← C#)**: `startDate` ← `StartDate`, `endDate` ← `EndDate`, `platform` ← `Platform`, `variable` ← `Variable`, `environment` ← `Environment`, `period` ← `Period`, `sdkType` ← `SdkType`
- **Returns**: `ResultEvaluationsByHourDto`
- **Error**: `ApiException<ResultsControllerGetTotalEvaluationsPerHourByFeatureError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResultsControllerGetTotalEvaluationsPerHourByFeatureRequest` | `src/DevCycle/Requests/Results/ResultsControllerGetTotalEvaluationsPerHourByFeatureRequest.cs` |
| `Period` | `src/DevCycle/Models/Enums/Period.cs` |
| `SdkTypeDevCycleManagementResultsApi` | `src/DevCycle/Models/Enums/SdkTypeDevCycleManagementResultsApi.cs` |
| `ResultEvaluationsByHourDto` | `src/DevCycle/Models/ResultEvaluationsByHourDto.cs` |
| `ResultsControllerGetTotalEvaluationsPerHourByFeatureError` | `src/DevCycle/Errors/ResultsControllerGetTotalEvaluationsPerHourByFeatureError.cs` |

### ResultsControllerGetTotalEvaluationsPerHourByProject

- **Signature**: `ResultsControllerGetTotalEvaluationsPerHourByProject(ResultsControllerGetTotalEvaluationsPerHourByProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`
- **Query params (wire ← C#)**: `startDate` ← `StartDate`, `endDate` ← `EndDate`, `environment` ← `Environment`, `period` ← `Period`, `sdkType` ← `SdkType`
- **Returns**: `ResultProjectEvaluationsByHourDto`
- **Error**: `ApiException<ResultsControllerGetTotalEvaluationsPerHourByProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResultsControllerGetTotalEvaluationsPerHourByProjectRequest` | `src/DevCycle/Requests/Results/ResultsControllerGetTotalEvaluationsPerHourByProjectRequest.cs` |
| `Period` | `src/DevCycle/Models/Enums/Period.cs` |
| `SdkTypeDevCycleManagementResultsApi` | `src/DevCycle/Models/Enums/SdkTypeDevCycleManagementResultsApi.cs` |
| `ResultProjectEvaluationsByHourDto` | `src/DevCycle/Models/ResultProjectEvaluationsByHourDto.cs` |
| `ResultsControllerGetTotalEvaluationsPerHourByProjectError` | `src/DevCycle/Errors/ResultsControllerGetTotalEvaluationsPerHourByProjectError.cs` |

