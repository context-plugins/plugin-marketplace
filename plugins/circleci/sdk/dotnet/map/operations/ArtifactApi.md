<!-- Generated file — do not edit; regenerated with the SDK. -->

# ArtifactApi — operations

Accessor: `client.ArtifactApi` · Source: `src/CircleCi/Api/ArtifactApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListBuildArtifacts

- **Auth**: `options.ApiToken`
- **Signature**: `ListBuildArtifacts(ListBuildArtifactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VcsType`, `Username`, `Project`, `BuildNum`
- **Returns**: `IReadOnlyList<Artifact>`
- **Error**: `ApiException<ListBuildArtifactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBuildArtifactsRequest` | `src/CircleCi/Requests/ArtifactApi/ListBuildArtifactsRequest.cs` |
| `VcsType` | `src/CircleCi/Models/Enums/VcsType.cs` |
| `Artifact` | `src/CircleCi/Models/Artifact.cs` |
| `ListBuildArtifactsError` | `src/CircleCi/Errors/ListBuildArtifactsError.cs` |

### ListLatestArtifacts

- **Auth**: `options.ApiToken`
- **Signature**: `ListLatestArtifacts(ListLatestArtifactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VcsType`, `Username`, `Project`
- **Query params (wire ← C#)**: `branch` ← `Branch`, `filter` ← `Filter`
- **Returns**: `IReadOnlyList<Artifact>`
- **Error**: `ApiException<ListLatestArtifactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListLatestArtifactsRequest` | `src/CircleCi/Requests/ArtifactApi/ListLatestArtifactsRequest.cs` |
| `VcsType` | `src/CircleCi/Models/Enums/VcsType.cs` |
| `Filter` | `src/CircleCi/Models/Enums/Filter.cs` |
| `Artifact` | `src/CircleCi/Models/Artifact.cs` |
| `ListLatestArtifactsError` | `src/CircleCi/Errors/ListLatestArtifactsError.cs` |

