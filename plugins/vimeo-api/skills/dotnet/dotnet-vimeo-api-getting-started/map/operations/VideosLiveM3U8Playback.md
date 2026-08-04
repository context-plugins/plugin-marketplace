# VideosLiveM3U8Playback — operations

Accessor: `client.VideosLiveM3U8Playback` · Source: `Api/VideosLiveM3U8Playback.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetOneTimeEventM3U8Playback
- **HTTP**: `GET /users/{user_id}/videos/{video_id}/m3u8_playback` (Default (api))
- **Notes**: This method returns an M3U8 playback URL for the specified event stream. You should use this endpoint only in conjunction with our recommended procedure for playing events via HLS. For more information, see our HLS guide .
- **Signature**: `GetOneTimeEventM3U8Playback(double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetOneTimeEventM3U8PlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOneTimeEventM3U8PlaybackAlt1
- **HTTP**: `GET /me/videos/{video_id}/m3u8_playback` (Default (api))
- **Notes**: This method returns an M3U8 playback URL for the specified event stream. You should use this endpoint only in conjunction with our recommended procedure for playing events via HLS. For more information, see our HLS guide .
- **Signature**: `GetOneTimeEventM3U8PlaybackAlt1(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetOneTimeEventM3U8PlaybackAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
