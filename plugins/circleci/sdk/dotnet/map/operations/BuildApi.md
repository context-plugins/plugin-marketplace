<!-- Generated file — do not edit; regenerated with the SDK. -->

# BuildApi — operations

Accessor: `client.BuildApi` · Source: `src/CircleCi/Api/BuildApi.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelBuild

- **Auth**: `options.ApiToken`
- **Signature**: `CancelBuild(CancelBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VcsType`, `Username`, `Project`, `BuildNum`
- **Returns**: `BuildSummary`
- **Error**: `ApiException<CancelBuildError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelBuildRequest` | `src/CircleCi/Requests/BuildApi/CancelBuildRequest.cs` |
| `VcsType` | `src/CircleCi/Models/Enums/VcsType.cs` |
| `BuildSummary` | `src/CircleCi/Models/BuildSummary.cs` |
| `CancelBuildError` | `src/CircleCi/Errors/CancelBuildError.cs` |

### GetBuild

- **Auth**: `options.ApiToken`
- **Signature**: `GetBuild(GetBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VcsType`, `Username`, `Project`, `BuildNum`
- **Returns**: `BuildDetail`
- **Error**: `ApiException<GetBuildError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBuildRequest` | `src/CircleCi/Requests/BuildApi/GetBuildRequest.cs` |
| `VcsType` | `src/CircleCi/Models/Enums/VcsType.cs` |
| `BuildDetail` | `src/CircleCi/Models/BuildDetail.cs` |
| `GetBuildError` | `src/CircleCi/Errors/GetBuildError.cs` |

### ListProjectBuilds

- **Auth**: `options.ApiToken`
- **Signature**: `ListProjectBuilds(ListProjectBuildsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VcsType`, `Username`, `Project`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `IReadOnlyList<Build>`
- **Error**: `ApiException<ListProjectBuildsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListProjectBuildsRequest` | `src/CircleCi/Requests/BuildApi/ListProjectBuildsRequest.cs` |
| `VcsType` | `src/CircleCi/Models/Enums/VcsType.cs` |
| `FilterCircleCiRestApiV1BuildApi` | `src/CircleCi/Models/Enums/FilterCircleCiRestApiV1BuildApi.cs` |
| `Build` | `src/CircleCi/Models/Build.cs` |
| `ListProjectBuildsError` | `src/CircleCi/Errors/ListProjectBuildsError.cs` |

### ListRecentBuilds

- **Auth**: `options.ApiToken`
- **Signature**: `ListRecentBuilds(ListRecentBuildsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `IReadOnlyList<Build>`
- **Error**: `ApiException<ListRecentBuildsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRecentBuildsRequest` | `src/CircleCi/Requests/BuildApi/ListRecentBuildsRequest.cs` |
| `Build` | `src/CircleCi/Models/Build.cs` |
| `ListRecentBuildsError` | `src/CircleCi/Errors/ListRecentBuildsError.cs` |

### RetryBuild

- **Auth**: `options.ApiToken`
- **Signature**: `RetryBuild(RetryBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VcsType`, `Username`, `Project`, `BuildNum`
- **Returns**: `BuildSummary`
- **Error**: `ApiException<RetryBuildError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RetryBuildRequest` | `src/CircleCi/Requests/BuildApi/RetryBuildRequest.cs` |
| `VcsType` | `src/CircleCi/Models/Enums/VcsType.cs` |
| `BuildSummary` | `src/CircleCi/Models/BuildSummary.cs` |
| `RetryBuildError` | `src/CircleCi/Errors/RetryBuildError.cs` |

### TriggerBranchBuild

- **Auth**: `options.ApiToken`
- **Signature**: `TriggerBranchBuild(TriggerBranchBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VcsType`, `Username`, `Project`, `Branch`
- **Returns**: `BuildSummary`
- **Error**: `ApiException<TriggerBranchBuildError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerBranchBuildRequest` | `src/CircleCi/Requests/BuildApi/TriggerBranchBuildRequest.cs` |
| `VcsType` | `src/CircleCi/Models/Enums/VcsType.cs` |
| `ProjectProjectTreeBranchRequest` | `src/CircleCi/Models/ProjectProjectTreeBranchRequest.cs` |
| `BuildSummary` | `src/CircleCi/Models/BuildSummary.cs` |
| `TriggerBranchBuildError` | `src/CircleCi/Errors/TriggerBranchBuildError.cs` |

### TriggerBuild

- **Auth**: `options.ApiToken`
- **Signature**: `TriggerBuild(TriggerBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VcsType`, `Username`, `Project`
- **Returns**: `BuildSummary`
- **Error**: `ApiException<TriggerBuildError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerBuildRequest` | `src/CircleCi/Requests/BuildApi/TriggerBuildRequest.cs` |
| `VcsType` | `src/CircleCi/Models/Enums/VcsType.cs` |
| `ProjectProjectRequest` | `src/CircleCi/Models/ProjectProjectRequest.cs` |
| `BuildSummary` | `src/CircleCi/Models/BuildSummary.cs` |
| `TriggerBuildError` | `src/CircleCi/Errors/TriggerBuildError.cs` |

