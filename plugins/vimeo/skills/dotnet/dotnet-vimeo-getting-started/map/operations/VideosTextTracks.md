# VideosTextTracks — operations

Accessor: `client.VideosTextTracks` · Source: `Api/VideosTextTracks.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateTextTrack
- **HTTP**: `POST /videos/{video_id}/texttracks` (Default (api))
- **Notes**: This method adds a text track to the specified video. For more information, see Working with Text Track Uploads .
- **Signature**: `CreateTextTrack(double videoId, VideosTexttracksRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TextTrack`
- **Error**: `SdkException<CreateTextTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateTextTrackAlt1
- **HTTP**: `POST /channels/{channel_id}/videos/{video_id}/texttracks` (Default (api))
- **Notes**: This method adds a text track to the specified video. For more information, see Working with Text Track Uploads .
- **Signature**: `CreateTextTrackAlt1(double channelId, double videoId, ChannelsVideosTexttracksRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TextTrack`
- **Error**: `SdkException<CreateTextTrackAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTextTrack
- **HTTP**: `DELETE /videos/{video_id}/texttracks/{texttrack_id}` (Default (api))
- **Notes**: This method deletes the specified text track from a video. The authenticated user must be the owner of the video.
- **Signature**: `DeleteTextTrack(double texttrackId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteTextTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403] · `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditTextTrack
- **HTTP**: `PATCH /videos/{video_id}/texttracks/{texttrack_id}` (Default (api))
- **Notes**: This method edits the specified text track of a video. The authenticated user must be the owner of the video.
- **Signature**: `EditTextTrack(double texttrackId, double videoId, VideosTexttracksRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TextTrack`
- **Error**: `SdkException<EditTextTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTextTrack
- **HTTP**: `GET /videos/{video_id}/texttracks/{texttrack_id}` (Default (api))
- **Notes**: This method returns a single text track of the specified video. The authenticated user must be the owner of the video.
- **Signature**: `GetTextTrack(double texttrackId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TextTrack`
- **Error**: `SdkException<GetTextTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403] · `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTextTracks
- **HTTP**: `GET /videos/{video_id}/texttracks` (Default (api))
- **Notes**: This method returns every text track of the specified video. The authenticated user must be the owner of the video.
- **Signature**: `GetTextTracks(double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `TextTrackConnection`
- **Error**: `SdkException<GetTextTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetTextTracksAlt1
- **HTTP**: `GET /videos/{video_id}/versions/{version_id}/texttracks` (Default (api))
- **Notes**: This method returns every text track of the specified video. The authenticated user must be the owner of the video.
- **Signature**: `GetTextTracksAlt1(double videoId, string versionId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `TextTrackConnection`
- **Error**: `SdkException<GetTextTracksAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetTextTracksAlt2
- **HTTP**: `GET /channels/{channel_id}/videos/{video_id}/texttracks` (Default (api))
- **Notes**: This method returns every text track of the specified video. The authenticated user must be the owner of the video.
- **Signature**: `GetTextTracksAlt2(double channelId, double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `TextTrackConnection`
- **Error**: `SdkException<GetTextTracksAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetTextTracksAlt3
- **HTTP**: `GET /albums/{album_id}/videos/{video_id}/texttracks` (Default (api))
- **Notes**: This method returns every text track of the specified video. The authenticated user must be the owner of the video.
- **Signature**: `GetTextTracksAlt3(double albumId, double videoId, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `TextTrackConnection`
- **Error**: `SdkException<GetTextTracksAlt3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
