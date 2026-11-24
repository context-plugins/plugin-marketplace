<!-- Generated file — do not edit; regenerated with the SDK. -->

# Builds — operations

Accessor: `client.Builds` · Source: `src/Buildkite/Api/Builds.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelBuild

- **Auth**: `options.BearerAuth`
- **Signature**: `CancelBuild(CancelBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `Pipeline`, `Number`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CancelBuildRequest` | `src/Buildkite/Requests/Builds/CancelBuildRequest.cs` |

### CreateBuild

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateBuild(CreateBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `Pipeline`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateBuildRequest` | `src/Buildkite/Requests/Builds/CreateBuildRequest.cs` |

### GetBuild

- **Auth**: `options.BearerAuth`
- **Signature**: `GetBuild(GetBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `Pipeline`, `Number`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetBuildRequest` | `src/Buildkite/Requests/Builds/GetBuildRequest.cs` |

### ListBuilds

- **Auth**: `options.BearerAuth`
- **Signature**: `ListBuilds(ListBuildsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `Pipeline`
- **Returns**: `IReadOnlyList<Build>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListBuildsRequest` | `src/Buildkite/Requests/Builds/ListBuildsRequest.cs` |
| `Build` | `src/Buildkite/Models/Build.cs` |

### RebuildBuild

- **Auth**: `options.BearerAuth`
- **Signature**: `RebuildBuild(RebuildBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `Pipeline`, `Number`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RebuildBuildRequest` | `src/Buildkite/Requests/Builds/RebuildBuildRequest.cs` |

