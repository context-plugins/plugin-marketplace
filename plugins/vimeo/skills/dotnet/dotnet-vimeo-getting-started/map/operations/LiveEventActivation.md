# LiveEventActivation — operations

Accessor: `client.LiveEventActivation` · Source: `Api/LiveEventActivation.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ActivateLiveEvent
- **HTTP**: `POST /users/{user_id}/live_events/{live_event_id}/activate` (Default (api))
- **Notes**: This method creates the necessary RTMP links for the specified event. Begin streaming to these links to trigger the event on Vimeo. The authenticated user must be the owner of the event.
- **Signature**: `ActivateLiveEvent(double liveEventId, double userId, UsersLiveEventsActivateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<ActivateLiveEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403, 404, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ActivateLiveEventAlt1
- **HTTP**: `POST /live_events/{live_event_id}/activate` (Default (api))
- **Notes**: This method creates the necessary RTMP links for the specified event. Begin streaming to these links to trigger the event on Vimeo. The authenticated user must be the owner of the event.
- **Signature**: `ActivateLiveEventAlt1(double liveEventId, LiveEventsActivateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<ActivateLiveEventAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403, 404, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ActivateLiveEventAlt2
- **HTTP**: `POST /me/live_events/{live_event_id}/activate` (Default (api))
- **Notes**: This method creates the necessary RTMP links for the specified event. Begin streaming to these links to trigger the event on Vimeo. The authenticated user must be the owner of the event.
- **Signature**: `ActivateLiveEventAlt2(double liveEventId, MeLiveEventsActivateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<ActivateLiveEventAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403, 404, 500, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
