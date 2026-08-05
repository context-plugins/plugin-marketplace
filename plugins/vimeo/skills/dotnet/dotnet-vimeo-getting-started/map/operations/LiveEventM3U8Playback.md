# LiveEventM3U8Playback — operations

Accessor: `client.LiveEventM3U8Playback` · Source: `Api/LiveEventM3U8Playback.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetLiveEventM3U8Playback
- **HTTP**: `GET /users/{user_id}/live_events/{live_event_id}/m3u8_playback` (Default (api))
- **Notes**: This method returns an M3U8 playback URL for the specified event stream. You should use this endpoint only in conjunction with our recommended procedure for playing events via HLS. For more information, see our HLS guide .
- **Signature**: `GetLiveEventM3U8Playback(double liveEventId, double userId, double? dvr, double? maxFpsFhd, double? ttl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `dvr` — nullable, no default → **must pass explicitly**
  - `maxFpsFhd` — nullable, no default → **must pass explicitly**
  - `ttl` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dvr` ← `dvr`, `max_fps_fhd` ← `maxFpsFhd`, `ttl` ← `ttl`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventM3U8PlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403, 404, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventM3U8PlaybackAlt1
- **HTTP**: `GET /me/live_events/{live_event_id}/m3u8_playback` (Default (api))
- **Notes**: This method returns an M3U8 playback URL for the specified event stream. You should use this endpoint only in conjunction with our recommended procedure for playing events via HLS. For more information, see our HLS guide .
- **Signature**: `GetLiveEventM3U8PlaybackAlt1(double liveEventId, double? dvr, double? maxFpsFhd, double? ttl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `dvr` — nullable, no default → **must pass explicitly**
  - `maxFpsFhd` — nullable, no default → **must pass explicitly**
  - `ttl` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dvr` ← `dvr`, `max_fps_fhd` ← `maxFpsFhd`, `ttl` ← `ttl`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventM3U8PlaybackAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403, 404, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
