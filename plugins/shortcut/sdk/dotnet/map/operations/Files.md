<!-- Generated file — do not edit; regenerated with the SDK. -->

# Files — operations

Accessor: `client.Files` · Source: `src/Shortcut/Api/Files.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteFile

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteFile(DeleteFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FilePublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteFileRequest` | `src/Shortcut/Requests/Files/DeleteFileRequest.cs` |
| `DeleteFileError` | `src/Shortcut/Errors/DeleteFileError.cs` |

### GetFile

- **Auth**: `options.ApiToken`
- **Signature**: `GetFile(GetFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FilePublicId`
- **Returns**: `UploadedFile`
- **Error**: `ApiException<GetFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFileRequest` | `src/Shortcut/Requests/Files/GetFileRequest.cs` |
| `UploadedFile` | `src/Shortcut/Models/UploadedFile.cs` |
| `GetFileError` | `src/Shortcut/Errors/GetFileError.cs` |

### ListFiles

- **Auth**: `options.ApiToken`
- **Signature**: `ListFiles(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<UploadedFile>`
- **Error**: `ApiException<ListFilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadedFile` | `src/Shortcut/Models/UploadedFile.cs` |
| `ListFilesError` | `src/Shortcut/Errors/ListFilesError.cs` |

### UpdateFile

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateFile(UpdateFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FilePublicId`, `Body`
- **Returns**: `UploadedFile`
- **Error**: `ApiException<UpdateFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateFileRequest` | `src/Shortcut/Requests/Files/UpdateFileRequest.cs` |
| `UpdateFile` | `src/Shortcut/Models/UpdateFile.cs` |
| `UploadedFile` | `src/Shortcut/Models/UploadedFile.cs` |
| `UpdateFileError` | `src/Shortcut/Errors/UpdateFileError.cs` |

### UploadFiles

- **Auth**: `options.ApiToken`
- **Signature**: `UploadFiles(UploadFilesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `File0`
- **Returns**: `IReadOnlyList<UploadedFile>`
- **Error**: `ApiException<UploadFilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadFilesRequest` | `src/Shortcut/Requests/Files/UploadFilesRequest.cs` |
| `UploadedFile` | `src/Shortcut/Models/UploadedFile.cs` |
| `UploadFilesError` | `src/Shortcut/Errors/UploadFilesError.cs` |

