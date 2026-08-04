# VideosVersions — operations

Accessor: `client.VideosVersions` · Source: `Api/VideosVersions.cs` · 13 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAudioTrack
- **HTTP**: `POST /videos/{video_id}/versions/{version_id}/audiotracks` (Default (api))
- **Notes**: This method creates a new audio track for a video version.
- **Signature**: `CreateAudioTrack(double versionId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateAudioTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateVideoVersion
- **HTTP**: `POST /videos/{video_id}/versions` (Default (api))
- **Notes**: This method adds a version to the specified video. The authenticated user must be the owner of the video.
- **Signature**: `CreateVideoVersion(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateVideoVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteAudioTrack
- **HTTP**: `DELETE /videos/{video_id}/versions/{version_id}/audiotracks/{audiotrack_id}` (Default (api))
- **Notes**: This method deletes an audio track from the specified video version.
- **Signature**: `DeleteAudioTrack(string audiotrackId, double versionId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteAudioTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideoVersion
- **HTTP**: `DELETE /videos/{video_id}/versions/{version_id}` (Default (api))
- **Notes**: This method deletes the specified version from a video. The authenticated user must be the owner of the video.
- **Signature**: `DeleteVideoVersion(double versionId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditAudioTrack
- **HTTP**: `PATCH /videos/{video_id}/versions/{version_id}/audiotracks/{audiotrack_id}` (Default (api))
- **Notes**: This method edits the metadata for the specified audio track.
- **Signature**: `EditAudioTrack(string audiotrackId, double versionId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditAudioTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditVideoVersion
- **HTTP**: `PATCH /videos/{video_id}/versions/{version_id}` (Default (api))
- **Notes**: This method edits the specified version of a video. The authenticated user must be the owner of the video.
- **Signature**: `EditVideoVersion(double versionId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditVideoVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAudioTrack
- **HTTP**: `GET /videos/{video_id}/versions/{version_id}/audiotracks/{audiotrack_id}` (Default (api))
- **Notes**: This method returns the specified audio track that is associated with a video version.
- **Signature**: `GetAudioTrack(string audiotrackId, double versionId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetAudioTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAudioTracks
- **HTTP**: `GET /videos/{video_id}/versions/{version_id}/audiotracks` (Default (api))
- **Notes**: This method returns all audio tracks that are associated with the specified video version.
- **Signature**: `GetAudioTracks(double versionId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetAudioTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAudiotrackDownloads
- **HTTP**: `GET /videos/{video_id}/versions/{version_id}/downloads` (Default (api))
- **Notes**: This method returns a list of downloadable file links for a version of a video that contains the specified alternate audio track.
- **Signature**: `GetAudiotrackDownloads(double versionId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetVersionThumbnail
- **HTTP**: `GET /videos/{video_id}/versions/{version_id}/picture` (Default (api))
- **Notes**: This method returns the thumbnail associated with the specified version of a video.
- **Signature**: `GetVersionThumbnail(double versionId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Picture`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetVideoVersion
- **HTTP**: `GET /videos/{video_id}/versions/{version_id}` (Default (api))
- **Notes**: This method returns a single version of the specified video. The authenticated user must be the owner of the video.
- **Signature**: `GetVideoVersion(double versionId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetVideoVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVideoVersions
- **HTTP**: `GET /videos/{video_id}/versions` (Default (api))
- **Notes**: This method returns every version of the specified video. The authenticated user must be the owner of the video.
- **Signature**: `GetVideoVersions(double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetVideoVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetVideoVersionsAlt1
- **HTTP**: `GET /channels/{channel_id}/videos/{video_id}/versions` (Default (api))
- **Notes**: This method returns every version of the specified video. The authenticated user must be the owner of the video.
- **Signature**: `GetVideoVersionsAlt1(double channelId, double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetVideoVersionsAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
