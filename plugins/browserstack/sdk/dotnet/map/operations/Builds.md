<!-- Generated file — do not edit; regenerated with the SDK. -->

# Builds — operations

Accessor: `client.Builds` · Source: `src/BrowserStack/Api/Builds.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBuild

- **Auth**: `options.BasicAuth`
- **Signature**: `DeleteBuild(DeleteBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BuildId`
- **Returns**: `StatusMessage`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteBuildRequest` | `src/BrowserStack/Requests/Builds/DeleteBuildRequest.cs` |
| `StatusMessage` | `src/BrowserStack/Models/StatusMessage.cs` |

### ListBuilds

- **Auth**: `options.BasicAuth`
- **Signature**: `ListBuilds(ListBuildsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `status` ← `Status`
- **Returns**: `IReadOnlyList<Build>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListBuildsRequest` | `src/BrowserStack/Requests/Builds/ListBuildsRequest.cs` |
| `Status` | `src/BrowserStack/Models/Enums/Status.cs` |
| `Build` | `src/BrowserStack/Models/Build.cs` |

### UpdateBuild

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateBuild(UpdateBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BuildId`, `Body`
- **Returns**: `Build`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateBuildRequest` | `src/BrowserStack/Requests/Builds/UpdateBuildRequest.cs` |
| `AutomateBuildsJsonRequest` | `src/BrowserStack/Models/AutomateBuildsJsonRequest.cs` |
| `Build` | `src/BrowserStack/Models/Build.cs` |

