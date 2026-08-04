# FilesApi — operations

Accessor: `client.FilesApi` · Source: `Api/FilesApi.cs` · 18 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateFileAssociation
- **HTTP**: `POST /Files/{FileId}/Associations` (Default4 (api))
- **Notes**: By passing in the appropriate options, you can create a new folder
- **Signature**: `CreateFileAssociation(Guid fileId, string xeroTenantId, string? idempotencyKey, Association body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Association`
- **Error**: `SdkException<CreateFileAssociationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfFilesAssociationsResponse(out IReadOnlyList<FilesAssociationsResponse>)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateFolder
- **HTTP**: `POST /Folders` (Default4 (api))
- **Notes**: By passing in the appropriate properties, you can create a new folder
- **Signature**: `CreateFolder(string xeroTenantId, string? idempotencyKey, Folder body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Folder`
- **Error**: `SdkException<CreateFolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfFoldersResponse(out IReadOnlyList<FoldersResponse>)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteFile
- **HTTP**: `DELETE /Files/{FileId}` (Default4 (api))
- **Notes**: Delete a specific file
- **Signature**: `DeleteFile(Guid fileId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteFileAssociation
- **HTTP**: `DELETE /Files/{FileId}/Associations/{ObjectId}` (Default4 (api))
- **Notes**: By passing in the appropriate options, you can create a new folder
- **Signature**: `DeleteFileAssociation(Guid fileId, Guid objectId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteFolder
- **HTTP**: `DELETE /Folders/{FolderId}` (Default4 (api))
- **Notes**: By passing in the appropriate ID, you can delete a folder
- **Signature**: `DeleteFolder(Guid folderId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetAssociationsByObject
- **HTTP**: `GET /Associations/{ObjectId}` (Default4 (api))
- **Notes**: By passing in the appropriate options, you can retrieve an association
- **Signature**: `GetAssociationsByObject(Guid objectId, int? pagesize, int? page, Sort1? sort, Direction? direction, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pagesize` … `direction`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pagesize` ← `pagesize`, `page` ← `page`, `sort` ← `sort`, `direction` ← `direction`
- **Returns**: `IReadOnlyList<Association>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetAssociationsCount
- **HTTP**: `GET /Associations/Count` (Default4 (api))
- **Notes**: By passing in the appropriate options, you can retrieve the association count for objects
- **Signature**: `GetAssociationsCount(IReadOnlyList<Guid> objectIds, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ObjectIds` ← `objectIds`
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetFile
- **HTTP**: `GET /Files/{FileId}` (Default4 (api))
- **Signature**: `GetFile(Guid fileId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FileObject`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetFileAssociations
- **HTTP**: `GET /Files/{FileId}/Associations` (Default4 (api))
- **Notes**: By passing in the appropriate options,
- **Signature**: `GetFileAssociations(Guid fileId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Association>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetFileContent
- **HTTP**: `GET /Files/{FileId}/Content` (Default4 (api))
- **Notes**: By passing in the appropriate options, retrieve data for specific file
- **Signature**: `GetFileContent(Guid fileId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetFiles
- **HTTP**: `GET /Files` (Default4 (api))
- **Signature**: `GetFiles(int? pagesize, int? page, Sort? sort, Direction? direction, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pagesize` … `direction`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pagesize` ← `pagesize`, `page` ← `page`, `sort` ← `sort`, `direction` ← `direction`
- **Returns**: `Files`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetFolder
- **HTTP**: `GET /Folders/{FolderId}` (Default4 (api))
- **Notes**: By passing in the appropriate ID, you can search for specific folder
- **Signature**: `GetFolder(Guid folderId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Folder`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetFolders
- **HTTP**: `GET /Folders` (Default4 (api))
- **Notes**: By passing in the appropriate options, you can search for available folders
- **Signature**: `GetFolders(Sort? sort, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `sort` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `sort` ← `sort`
- **Returns**: `IReadOnlyList<Folder>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetInbox
- **HTTP**: `GET /Inbox` (Default4 (api))
- **Notes**: Search for the user inbox
- **Signature**: `GetInbox(string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Folder`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateFile
- **HTTP**: `PUT /Files/{FileId}` (Default4 (api))
- **Notes**: Updates file properties of a single file
- **Signature**: `UpdateFile(Guid fileId, string xeroTenantId, string? idempotencyKey, FileObject body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FileObject`
- **Error**: `SdkException<UpdateFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfFilesResponse(out IReadOnlyList<FilesResponse>)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateFolder
- **HTTP**: `PUT /Folders/{FolderId}` (Default4 (api))
- **Notes**: By passing in the appropriate ID and properties, you can update a folder
- **Signature**: `UpdateFolder(Guid folderId, string xeroTenantId, string? idempotencyKey, Folder body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Folder`
- **Error**: `SdkException<UpdateFolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfFoldersResponse(out IReadOnlyList<FoldersResponse>)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UploadFile
- **HTTP**: `POST /Files` (Default4 (api))
- **Signature**: `UploadFile(string xeroTenantId, string? idempotencyKey, string body, string name, string filename, string? mimeType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `mimeType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FileObject`
- **Error**: `SdkException<UploadFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfFilesResponse(out IReadOnlyList<FilesResponse>)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UploadFileToFolder
- **HTTP**: `POST /Files/{FolderId}` (Default4 (api))
- **Signature**: `UploadFileToFolder(Guid folderId, string xeroTenantId, string? idempotencyKey, string body, string name, string filename, string? mimeType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `mimeType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FileObject`
- **Error**: `SdkException<UploadFileToFolderError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfFilesResponse(out IReadOnlyList<FilesResponse>)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
