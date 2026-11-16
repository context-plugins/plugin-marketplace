<!-- Generated file — do not edit; regenerated with the SDK. -->

# FilesApi — operations

Accessor: `client.FilesApi` · Source: `src/FinixApiReference/Api/FilesApi.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateExternalLink

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateExternalLink(CreateExternalLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FileId`, `Body`
- **Returns**: `ExternalLink`
- **Error**: `ApiException<CreateExternalLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateExternalLinkRequest` | `src/FinixApiReference/Requests/FilesApi/CreateExternalLinkRequest.cs` |
| `FilesExternalLinksRequest` | `src/FinixApiReference/Models/AnyOf/FilesExternalLinksRequest.cs` |
| `ExternalLink` | `src/FinixApiReference/Models/ExternalLink.cs` |
| `CreateExternalLinkError` | `src/FinixApiReference/Errors/CreateExternalLinkError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### CreateFile

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateFile(CreateFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `File`
- **Error**: `ApiException<CreateFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateFileRequest` | `src/FinixApiReference/Requests/FilesApi/CreateFileRequest.cs` |
| `CreateFile` | `src/FinixApiReference/Models/CreateFile.cs` |
| `File` | `src/FinixApiReference/Models/File.cs` |
| `CreateFileError` | `src/FinixApiReference/Errors/CreateFileError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### DownloadFileFileThatWasUploadedToAFileResource

- **Auth**: `options.BasicAuth`
- **Signature**: `DownloadFileFileThatWasUploadedToAFileResource(DownloadFileFileThatWasUploadedToAFileResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FileId`
- **Query params (wire ← C#)**: `stream` ← `Stream`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DownloadFileFileThatWasUploadedToAFileResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DownloadFileFileThatWasUploadedToAFileResourceRequest` | `src/FinixApiReference/Requests/FilesApi/DownloadFileFileThatWasUploadedToAFileResourceRequest.cs` |
| `DownloadFileFileThatWasUploadedToAFileResourceError` | `src/FinixApiReference/Errors/DownloadFileFileThatWasUploadedToAFileResourceError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetExternalLink

- **Auth**: `options.BasicAuth`
- **Signature**: `GetExternalLink(GetExternalLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FileId`, `ExternalLinkId`
- **Returns**: `ExternalLink`
- **Error**: `ApiException<GetExternalLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExternalLinkRequest` | `src/FinixApiReference/Requests/FilesApi/GetExternalLinkRequest.cs` |
| `ExternalLink` | `src/FinixApiReference/Models/ExternalLink.cs` |
| `GetExternalLinkError` | `src/FinixApiReference/Errors/GetExternalLinkError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetFile

- **Auth**: `options.BasicAuth`
- **Signature**: `GetFile(GetFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FileId`
- **Returns**: `File`
- **Error**: `ApiException<GetFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFileRequest` | `src/FinixApiReference/Requests/FilesApi/GetFileRequest.cs` |
| `File` | `src/FinixApiReference/Models/File.cs` |
| `GetFileError` | `src/FinixApiReference/Errors/GetFileError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListExternalLinks

- **Auth**: `options.BasicAuth`
- **Signature**: `ListExternalLinks(ListExternalLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FileId`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `id` ← `Id`, `limit` ← `Limit`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListExternalLinks`
- **Error**: `ApiException<ListExternalLinksError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListExternalLinksRequest` | `src/FinixApiReference/Requests/FilesApi/ListExternalLinksRequest.cs` |
| `ListExternalLinks` | `src/FinixApiReference/Models/ListExternalLinks.cs` |
| `ListExternalLinksError` | `src/FinixApiReference/Errors/ListExternalLinksError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListFiles

- **Auth**: `options.BasicAuth`
- **Signature**: `ListFiles(ListFilesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListFiles`
- **Error**: `ApiException<ListFilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFilesRequest` | `src/FinixApiReference/Requests/FilesApi/ListFilesRequest.cs` |
| `ListFiles` | `src/FinixApiReference/Models/ListFiles.cs` |
| `ListFilesError` | `src/FinixApiReference/Errors/ListFilesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UploadFile

- **Auth**: `options.BasicAuth`
- **Signature**: `UploadFile(UploadFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FileId`, `File`
- **Returns**: `File`
- **Error**: `ApiException<UploadFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadFileRequest` | `src/FinixApiReference/Requests/FilesApi/UploadFileRequest.cs` |
| `File` | `src/FinixApiReference/Models/File.cs` |
| `UploadFileError` | `src/FinixApiReference/Errors/UploadFileError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

