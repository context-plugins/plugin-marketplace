# MediaApi — operations

Accessor: `client.MediaApi` · Source: `Api/MediaApi.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AppendMediaUpload
- **HTTP**: `POST /2/media/upload/{id}/append` (Default (api))
- **Signature**: `AppendMediaUpload(string id, Media1 media, int segmentIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AppendMediaUploadResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateMediaMetadata
- **HTTP**: `POST /2/media/metadata` (Default (api))
- **Notes**: Creates metadata for a Media file.
- **Signature**: `CreateMediaMetadata(CreateMediaMetadataRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateMediaMetadataResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateMediaSubtitles
- **HTTP**: `POST /2/media/subtitles` (Default (api))
- **Notes**: Creates subtitles for a specific Media file.
- **Signature**: `CreateMediaSubtitles(CreateMediaSubtitlesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateMediaSubtitlesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteMediaSubtitles
- **HTTP**: `DELETE /2/media/subtitles` (Default (api))
- **Notes**: Deletes subtitles for a specific Media file.
- **Signature**: `DeleteMediaSubtitles(DeleteMediaSubtitlesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteMediaSubtitlesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FinalizeMediaUpload
- **HTTP**: `POST /2/media/upload/{id}/finalize` (Default (api))
- **Notes**: Finalizes a Media upload request.
- **Signature**: `FinalizeMediaUpload(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FinalizeMediaUploadResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetMediaAnalytics
- **HTTP**: `GET /2/media/analytics` (Default (api))
- **Signature**: `GetMediaAnalytics(IReadOnlyList<string> mediaKeys, DateTimeOffset startTime, DateTimeOffset endTime, Granularity? granularity, IReadOnlyList<MediaAnalyticsField>? mediaAnalyticsFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `granularity` — nullable, no default → **must pass explicitly**
  - `mediaAnalyticsFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `media_keys` ← `mediaKeys`, `start_time` ← `startTime`, `end_time` ← `endTime`, `granularity` ← `granularity`, `media_analytics.fields` ← `mediaAnalyticsFields`
- **Returns**: `GetMediaAnalyticsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetMediaByMediaKey
- **HTTP**: `GET /2/media/{media_key}` (Default (api))
- **Signature**: `GetMediaByMediaKey(string mediaKey, IReadOnlyList<MediaField>? mediaFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `mediaFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `media.fields` ← `mediaFields`
- **Returns**: `GetMediaByMediaKeyResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetMediaByMediaKeys
- **HTTP**: `GET /2/media` (Default (api))
- **Signature**: `GetMediaByMediaKeys(IReadOnlyList<string> mediaKeys, IReadOnlyList<MediaField>? mediaFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `mediaFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `media_keys` ← `mediaKeys`, `media.fields` ← `mediaFields`
- **Returns**: `GetMediaByMediaKeysResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetMediaUploadStatus
- **HTTP**: `GET /2/media/upload` (Default (api))
- **Notes**: Retrieves the status of a Media upload by its ID.
- **Signature**: `GetMediaUploadStatus(string mediaId, Command? command, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `command` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `media_id` ← `mediaId`, `command` ← `command`
- **Returns**: `GetMediaUploadStatusResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InitializeMediaUpload
- **HTTP**: `POST /2/media/upload/initialize` (Default (api))
- **Notes**: Initializes a media upload.
- **Signature**: `InitializeMediaUpload(InitializeMediaUploadRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InitializeMediaUploadResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MediaUpload
- **HTTP**: `POST /2/media/upload` (Default (api))
- **Notes**: Uploads a media file for use in posts or other content.
- **Signature**: `MediaUpload(Media12 media, MediaCategory2 mediaCategory, string? additionalOwners, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `additionalOwners` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `MediaUploadResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
