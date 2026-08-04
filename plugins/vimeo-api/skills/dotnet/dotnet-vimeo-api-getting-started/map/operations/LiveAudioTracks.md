# LiveAudioTracks — operations

Accessor: `client.LiveAudioTracks` · Source: `Api/LiveAudioTracks.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetEventAudioTracks
- **HTTP**: `GET /live_events/{live_event_id}/audio_tracks` (Default (api))
- **Notes**: This method returns audio tracks settings for the specified event.
- **Signature**: `GetEventAudioTracks(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EventAudioTracks`
- **Error**: `SdkException<GetEventAudioTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateEventAudioTracks
- **HTTP**: `PATCH /live_events/{live_event_id}/audio_tracks` (Default (api))
- **Notes**: This method updates audio tracks settings on the specified event.
- **Signature**: `UpdateEventAudioTracks(double liveEventId, LiveEventsAudioTracksRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EventAudioTracks`
- **Error**: `SdkException<UpdateEventAudioTracksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
