# LiveEventLowLatency — operations

Accessor: `client.LiveEventLowLatency` · Source: `Api/LiveEventLowLatency.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ToggleRleLowLatency
- **HTTP**: `PATCH /users/{user_id}/live_events/{live_event_id}/low_latency` (Default (api))
- **Notes**: This method toggles the low-latency option of the specified event.
- **Signature**: `ToggleRleLowLatency(double liveEventId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ToggleRleLowLatencyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ToggleRleLowLatencyAlt1
- **HTTP**: `PATCH /live_events/{live_event_id}/low_latency` (Default (api))
- **Notes**: This method toggles the low-latency option of the specified event.
- **Signature**: `ToggleRleLowLatencyAlt1(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ToggleRleLowLatencyAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ToggleRleLowLatencyAlt2
- **HTTP**: `PATCH /me/live_events/{live_event_id}/low_latency` (Default (api))
- **Notes**: This method toggles the low-latency option of the specified event.
- **Signature**: `ToggleRleLowLatencyAlt2(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ToggleRleLowLatencyAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
