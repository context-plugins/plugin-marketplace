<!-- Generated file — do not edit; regenerated with the SDK. -->

# PackageDependencies — operations

Accessor: `client.PackageDependencies` · Source: `src/AtlassianCompass/Api/PackageDependencies.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteLockFile

- **Auth**: `options.BasicAuth`
- **Signature**: `DeleteLockFile(DeleteLockFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ComponentId`, `SourceId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteLockFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteLockFileRequest` | `src/AtlassianCompass/Requests/PackageDependencies/DeleteLockFileRequest.cs` |
| `DeleteLockFileError` | `src/AtlassianCompass/Errors/DeleteLockFileError.cs` |

### UploadLockFile

- **Auth**: `options.BasicAuth`
- **Signature**: `UploadLockFile(UploadLockFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SourceId`, `BaseSourceUrl`, `ComponentId`, `File`
- **Query params (wire ← C#)**: `sourceId` ← `SourceId`, `baseSourceUrl` ← `BaseSourceUrl`, `componentId` ← `ComponentId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UploadLockFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadLockFileRequest` | `src/AtlassianCompass/Requests/PackageDependencies/UploadLockFileRequest.cs` |
| `UploadLockFileError` | `src/AtlassianCompass/Errors/UploadLockFileError.cs` |

