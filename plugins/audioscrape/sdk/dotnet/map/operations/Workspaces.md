<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.Workspaces` · Source: `src/Audioscrape/Api/Workspaces.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetWorkspace

- **Auth**: `options.BearerAuth`
- **Signature**: `GetWorkspace(GetWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `WorkspaceDetail`
- **Error**: `ApiException<GetWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspaceRequest` | `src/Audioscrape/Requests/Workspaces/GetWorkspaceRequest.cs` |
| `WorkspaceDetail` | `src/Audioscrape/Models/WorkspaceDetail.cs` |
| `GetWorkspaceError` | `src/Audioscrape/Errors/GetWorkspaceError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### ListWorkspaceDatasets

- **Auth**: `options.BearerAuth`
- **Signature**: `ListWorkspaceDatasets(ListWorkspaceDatasetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `DatasetList`
- **Error**: `ApiException<ListWorkspaceDatasetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWorkspaceDatasetsRequest` | `src/Audioscrape/Requests/Workspaces/ListWorkspaceDatasetsRequest.cs` |
| `DatasetList` | `src/Audioscrape/Models/DatasetList.cs` |
| `ListWorkspaceDatasetsError` | `src/Audioscrape/Errors/ListWorkspaceDatasetsError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### ListWorkspaces

- **Auth**: `options.BearerAuth`
- **Signature**: `ListWorkspaces(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `WorkspaceList`
- **Error**: `ApiException<ListWorkspacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WorkspaceList` | `src/Audioscrape/Models/WorkspaceList.cs` |
| `ListWorkspacesError` | `src/Audioscrape/Errors/ListWorkspacesError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

