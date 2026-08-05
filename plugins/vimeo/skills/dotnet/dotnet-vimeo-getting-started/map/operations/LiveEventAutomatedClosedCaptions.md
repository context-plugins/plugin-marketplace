# LiveEventAutomatedClosedCaptions — operations

Accessor: `client.LiveEventAutomatedClosedCaptions` · Source: `Api/LiveEventAutomatedClosedCaptions.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### EditLiveEventAutoCc
- **HTTP**: `PATCH /users/{user_id}/live_events/{live_event_id}/auto_cc` (Default (api))
- **Notes**: This method edits the automated closed captions preference for the specified event.
- **Signature**: `EditLiveEventAutoCc(double liveEventId, double userId, UsersLiveEventsAutoCcRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EventAutomatedClosedCaptions`
- **Error**: `SdkException<EditLiveEventAutoCcError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditLiveEventAutoCcAlt1
- **HTTP**: `PATCH /live_events/{live_event_id}/auto_cc` (Default (api))
- **Notes**: This method edits the automated closed captions preference for the specified event.
- **Signature**: `EditLiveEventAutoCcAlt1(double liveEventId, LiveEventsAutoCcRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EventAutomatedClosedCaptions`
- **Error**: `SdkException<EditLiveEventAutoCcAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditLiveEventAutoCcAlt2
- **HTTP**: `PATCH /me/live_events/{live_event_id}/auto_cc` (Default (api))
- **Notes**: This method edits the automated closed captions preference for the specified event.
- **Signature**: `EditLiveEventAutoCcAlt2(double liveEventId, MeLiveEventsAutoCcRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EventAutomatedClosedCaptions`
- **Error**: `SdkException<EditLiveEventAutoCcAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
