# FilesRemote — operations

Accessor: `client.FilesRemote` · Source: `Api/FilesRemote.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

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
