# Files — operations

Accessor: `client.Files` · Source: `Api/Files.cs` · 13 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FilesCommentsDelete
- **HTTP**: `POST /files.comments.delete` (Default (slack))
- **Notes**: Deletes an existing comment on a file.
- **Signature**: `FilesCommentsDelete(ContentType contentType, string? token, string? file, string? id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `file` — nullable, no default → **must pass explicitly**
  - `id` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `file` ← `file`, `id` ← `id`
- **Returns**: `FilesCommentsDeleteschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FilesDelete
- **HTTP**: `POST /files.delete` (Default (slack))
- **Notes**: Deletes a file.
- **Signature**: `FilesDelete(ContentType contentType, string? token, string? file, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `file` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `file` ← `file`
- **Returns**: `FilesDeleteschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FilesInfo
- **HTTP**: `GET /files.info` (Default (slack))
- **Notes**: Gets information about a file.
- **Signature**: `FilesInfo(string? token, string? file, string? count, string? page, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`token` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `file` ← `file`, `count` ← `count`, `page` ← `page`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `FilesInfoschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### FilesList
- **HTTP**: `GET /files.list` (Default (slack))
- **Notes**: List for a team, in a channel, or from a user with applied filters.
- **Signature**: `FilesList(string? token, string? user, string? channel, double? tsFrom, double? tsTo, string? types, string? count, string? page, bool? showFilesHiddenByLimit, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`token` … `showFilesHiddenByLimit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `user` ← `user`, `channel` ← `channel`, `ts_from` ← `tsFrom`, `ts_to` ← `tsTo`, `types` ← `types`, `count` ← `count`, `page` ← `page`, `show_files_hidden_by_limit` ← `showFilesHiddenByLimit`
- **Returns**: `FilesListschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### FilesRemoteAdd
- **HTTP**: `POST /files.remote.add` (Default (slack))
- **Notes**: Adds a file from a remote service
- **Signature**: `FilesRemoteAdd(ContentType contentType, string? token, string? externalId, string? title, string? filetype, string? externalUrl, string? previewImage, string? indexableFileContents, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`token` … `indexableFileContents`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `external_id` ← `externalId`, `title` ← `title`, `filetype` ← `filetype`, `external_url` ← `externalUrl`, `preview_image` ← `previewImage`, `indexable_file_contents` ← `indexableFileContents`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FilesRemoteInfo
- **HTTP**: `GET /files.remote.info` (Default (slack))
- **Notes**: Retrieve information about a remote file added to Slack
- **Signature**: `FilesRemoteInfo(string? token, string? file, string? externalId, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `file` — nullable, no default → **must pass explicitly**
  - `externalId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `file` ← `file`, `external_id` ← `externalId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FilesRemoteList
- **HTTP**: `GET /files.remote.list` (Default (slack))
- **Notes**: Retrieve information about a remote file added to Slack
- **Signature**: `FilesRemoteList(string? token, string? channel, double? tsFrom, double? tsTo, int? limit, string? cursor, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`token` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `channel` ← `channel`, `ts_from` ← `tsFrom`, `ts_to` ← `tsTo`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FilesRemoteRemove
- **HTTP**: `POST /files.remote.remove` (Default (slack))
- **Notes**: Remove a remote file.
- **Signature**: `FilesRemoteRemove(ContentType contentType, string? token, string? file, string? externalId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `file` — nullable, no default → **must pass explicitly**
  - `externalId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `file` ← `file`, `external_id` ← `externalId`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FilesRemoteShare
- **HTTP**: `GET /files.remote.share` (Default (slack))
- **Notes**: Share a remote file into a channel.
- **Signature**: `FilesRemoteShare(string? token, string? file, string? externalId, string? channels, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`token` … `channels`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `file` ← `file`, `external_id` ← `externalId`, `channels` ← `channels`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FilesRemoteUpdate
- **HTTP**: `POST /files.remote.update` (Default (slack))
- **Notes**: Updates an existing remote file.
- **Signature**: `FilesRemoteUpdate(ContentType contentType, string? token, string? file, string? externalId, string? title, string? filetype, string? externalUrl, string? previewImage, string? indexableFileContents, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`token` … `indexableFileContents`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `file` ← `file`, `external_id` ← `externalId`, `title` ← `title`, `filetype` ← `filetype`, `external_url` ← `externalUrl`, `preview_image` ← `previewImage`, `indexable_file_contents` ← `indexableFileContents`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FilesRevokePublicUrl
- **HTTP**: `POST /files.revokePublicURL` (Default (slack))
- **Notes**: Revokes public/external sharing access for a file
- **Signature**: `FilesRevokePublicUrl(ContentType contentType, string? token, string? file, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `file` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `file` ← `file`
- **Returns**: `FilesRevokePublicUrlschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FilesSharedPublicUrl
- **HTTP**: `POST /files.sharedPublicURL` (Default (slack))
- **Notes**: Enables a file for public/external sharing.
- **Signature**: `FilesSharedPublicUrl(ContentType contentType, string? token, string? file, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `file` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `file` ← `file`
- **Returns**: `FilesSharedPublicUrlschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FilesUpload
- **HTTP**: `POST /files.upload` (Default (slack))
- **Notes**: Uploads or creates a file.
- **Signature**: `FilesUpload(ContentType contentType, string? token, string? file, string? content, string? filetype, string? filename, string? title, string? initialComment, string? channels, double? threadTs, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`token` … `threadTs`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `file` ← `file`, `content` ← `content`, `filetype` ← `filetype`, `filename` ← `filename`, `title` ← `title`, `initial_comment` ← `initialComment`, `channels` ← `channels`, `thread_ts` ← `threadTs`
- **Returns**: `FilesUploadschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
