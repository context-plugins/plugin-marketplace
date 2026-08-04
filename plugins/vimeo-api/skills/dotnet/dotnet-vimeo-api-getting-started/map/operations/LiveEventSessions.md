# LiveEventSessions — operations

Accessor: `client.LiveEventSessions` · Source: `Api/LiveEventSessions.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetLiveClipIngestStatus
- **HTTP**: `GET /live_events/{live_event_id}/session_status` (Default (api))
- **Notes**: This method returns the ingest status of the specified event and associated video.
- **Signature**: `GetLiveClipIngestStatus(string liveEventId, double? clipId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `clipId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `clip_id` ← `clipId`
- **Returns**: `EventSessionStatus`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveIngestStatus
- **HTTP**: `GET /videos/{video_id}/sessions/status` (Default (api))
- **Notes**: This method returns the ingest status of the specified event.
- **Signature**: `GetLiveIngestStatus(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EventSessionStatus`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
