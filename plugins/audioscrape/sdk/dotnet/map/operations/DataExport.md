<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataExport — operations

Accessor: `client.DataExport` · Source: `src/Audioscrape/Api/DataExport.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWorkspaceExport

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateWorkspaceExport(CreateWorkspaceExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `CreateExportJobResponse`
- **Error**: `ApiException<CreateWorkspaceExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWorkspaceExportRequest` | `src/Audioscrape/Requests/DataExport/CreateWorkspaceExportRequest.cs` |
| `CreateExportJobResponse` | `src/Audioscrape/Models/CreateExportJobResponse.cs` |
| `CreateWorkspaceExportError` | `src/Audioscrape/Errors/CreateWorkspaceExportError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

### GetWorkspaceExport

- **Auth**: `options.BearerAuth`
- **Signature**: `GetWorkspaceExport(GetWorkspaceExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `JobId`
- **Returns**: `ExportJobStatus`
- **Error**: `ApiException<GetWorkspaceExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspaceExportRequest` | `src/Audioscrape/Requests/DataExport/GetWorkspaceExportRequest.cs` |
| `ExportJobStatus` | `src/Audioscrape/Models/ExportJobStatus.cs` |
| `GetWorkspaceExportError` | `src/Audioscrape/Errors/GetWorkspaceExportError.cs` |
| `ApiErrorBody` | `src/Audioscrape/Models/ApiErrorBody.cs` |

