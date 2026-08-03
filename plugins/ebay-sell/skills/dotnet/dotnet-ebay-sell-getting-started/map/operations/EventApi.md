# EventApi — operations

Accessor: `client.EventApi` · Source: `Api/EventApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetEvent
- **HTTP**: `GET /event/{event_id}` (Default (api))
- **Signature**: `GetEvent(string eventId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Event`
- **Error**: `SdkException<GetEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetEvents
- **HTTP**: `GET /event` (Default (api))
- **Signature**: `GetEvents(string? limit, string? offset, string xEbayCMarketplaceId, string? xEbayCEnduserctx, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `EventSearchResponse`
- **Error**: `SdkException<GetEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
