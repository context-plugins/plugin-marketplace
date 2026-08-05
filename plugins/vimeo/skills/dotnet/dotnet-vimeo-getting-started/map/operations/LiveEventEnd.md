# LiveEventEnd — operations

Accessor: `client.LiveEventEnd` · Source: `Api/LiveEventEnd.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### EndLiveEvent
- **HTTP**: `POST /users/{user_id}/live_events/{live_event_id}/end` (Default (api))
- **Notes**: This method ends the specified event. The authenticated user must be the owner of the event.
- **Signature**: `EndLiveEvent(double liveEventId, string userId, double? clipId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `clipId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `clip_id` ← `clipId`
- **Returns**: `Video`
- **Error**: `SdkException<EndLiveEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EndLiveEventAlt1
- **HTTP**: `POST /live_events/{live_event_id}/end` (Default (api))
- **Notes**: This method ends the specified event. The authenticated user must be the owner of the event.
- **Signature**: `EndLiveEventAlt1(double liveEventId, double? clipId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `clipId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `clip_id` ← `clipId`
- **Returns**: `Video`
- **Error**: `SdkException<EndLiveEventAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EndLiveEventAlt2
- **HTTP**: `POST /me/live_events/{live_event_id}/end` (Default (api))
- **Notes**: This method ends the specified event. The authenticated user must be the owner of the event.
- **Signature**: `EndLiveEventAlt2(double liveEventId, double? clipId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `clipId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `clip_id` ← `clipId`
- **Returns**: `Video`
- **Error**: `SdkException<EndLiveEventAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
