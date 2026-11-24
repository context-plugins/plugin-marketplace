<!-- Generated file — do not edit; regenerated with the SDK. -->

# FileManager — operations

Accessor: `client.FileManager` · Source: `src/Archbee/Api/FileManager.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteAFileManagerFile

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteAFileManagerFile(DeleteAFileManagerFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAFileManagerFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetFileManagerFile400Error1([NotNullWhen(true)] out FileManagerFile400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAFileManagerFileRequest` | `src/Archbee/Requests/FileManager/DeleteAFileManagerFileRequest.cs` |
| `FileManagerFileRequest` | `src/Archbee/Models/FileManagerFileRequest.cs` |
| `DeleteAFileManagerFileError` | `src/Archbee/Errors/DeleteAFileManagerFileError.cs` |
| `FileManagerFile400Error1` | `src/Archbee/Models/FileManagerFile400Error1.cs` |

### ListFileManagerFiles

- **Auth**: `options.BearerAuth`
- **Signature**: `ListFileManagerFiles(ListFileManagerFilesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `parentId` ← `ParentId`, `itemType` ← `ItemType`, `searchQuery` ← `SearchQuery`, `pageIndex` ← `PageIndex`, `pageSize` ← `PageSize`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListFileManagerFilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetFileManagerFiles400Error1([NotNullWhen(true)] out FileManagerFiles400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFileManagerFilesRequest` | `src/Archbee/Requests/FileManager/ListFileManagerFilesRequest.cs` |
| `ItemType` | `src/Archbee/Models/Enums/ItemType.cs` |
| `ListFileManagerFilesError` | `src/Archbee/Errors/ListFileManagerFilesError.cs` |
| `FileManagerFiles400Error1` | `src/Archbee/Models/FileManagerFiles400Error1.cs` |

### MoveAFileManagerFile

- **Auth**: `options.BearerAuth`
- **Signature**: `MoveAFileManagerFile(MoveAFileManagerFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<MoveAFileManagerFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetFileManagerMove400Error1([NotNullWhen(true)] out FileManagerMove400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MoveAFileManagerFileRequest` | `src/Archbee/Requests/FileManager/MoveAFileManagerFileRequest.cs` |
| `FileManagerMoveRequest` | `src/Archbee/Models/FileManagerMoveRequest.cs` |
| `MoveAFileManagerFileError` | `src/Archbee/Errors/MoveAFileManagerFileError.cs` |
| `FileManagerMove400Error1` | `src/Archbee/Models/FileManagerMove400Error1.cs` |

### OverwriteAFileManagerFile

- **Auth**: `options.BearerAuth`
- **Signature**: `OverwriteAFileManagerFile(OverwriteAFileManagerFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FileId`, `File`
- **Returns**: `void` (Task)
- **Error**: `ApiException<OverwriteAFileManagerFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetFileManagerReplace400Error1([NotNullWhen(true)] out FileManagerReplace400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OverwriteAFileManagerFileRequest` | `src/Archbee/Requests/FileManager/OverwriteAFileManagerFileRequest.cs` |
| `OverwriteAFileManagerFileError` | `src/Archbee/Errors/OverwriteAFileManagerFileError.cs` |
| `FileManagerReplace400Error1` | `src/Archbee/Models/FileManagerReplace400Error1.cs` |

### UploadSingleFile

- **Auth**: `options.BearerAuth`
- **Signature**: `UploadSingleFile(UploadSingleFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `File`
- **Returns**: `UploadFileResponse`
- **Error**: `ApiException<UploadSingleFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetUploadFile400Error1([NotNullWhen(true)] out UploadFile400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadSingleFileRequest` | `src/Archbee/Requests/FileManager/UploadSingleFileRequest.cs` |
| `IsPublic` | `src/Archbee/Models/Enums/IsPublic.cs` |
| `UploadFileResponse` | `src/Archbee/Models/UploadFileResponse.cs` |
| `UploadSingleFileError` | `src/Archbee/Errors/UploadSingleFileError.cs` |
| `UploadFile400Error1` | `src/Archbee/Models/UploadFile400Error1.cs` |

