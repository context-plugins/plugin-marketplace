# Events — operations

Accessor: `client.Events` · Source: `Api/Events.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DisableEvents
- **HTTP**: `PUT /v2/events/disable` (Default (connect))
- **Notes**: Disables events to prevent them from being searchable. All events are disabled by default. You must enable events to make them searchable. Disabling events for a specific time period prevents them from being searchable, even if you re-enable them later.
- **Signature**: `DisableEvents(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DisableEventsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EnableEvents
- **HTTP**: `PUT /v2/events/enable` (Default (connect))
- **Notes**: Enables events to make them searchable. Only events that occur while in the enabled state are searchable.
- **Signature**: `EnableEvents(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EnableEventsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListEventTypes
- **HTTP**: `GET /v2/events/types` (Default (connect))
- **Notes**: Lists all event types that you can subscribe to as webhooks or query using the Events API.
- **Signature**: `ListEventTypes(string? apiVersion, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `apiVersion` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `api_version` ← `apiVersion`
- **Returns**: `ListEventTypesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchEvents
- **HTTP**: `POST /v2/events` (Default (connect))
- **Notes**: Search for Square API events that occur within a 28-day timeframe.
- **Signature**: `SearchEvents(SearchEventsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchEventsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
