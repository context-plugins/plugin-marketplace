# ActiveassuranceEvents — operations

Accessor: `client.ActiveassuranceEvents` · Source: `Api/ActiveassuranceEvents.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### EventServiceBatchCountEvents
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/events:batchCount` (Default)
- **Signature**: `EventServiceBatchCountEvents(string orgId, BatchCountEventsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchCountEventsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EventServiceCountEvents
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/events:count` (Default)
- **Signature**: `EventServiceCountEvents(string orgId, DateTimeOffset startTime, DateTimeOffset endTime, string granularity, string? filter, string? reference, bool? allowFilterOnTimeFields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - `reference` — nullable, no default → **must pass explicitly**
  - `allowFilterOnTimeFields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `start_time` ← `startTime`, `end_time` ← `endTime`, `granularity` ← `granularity`, `filter` ← `filter`, `reference` ← `reference`, `allow_filter_on_time_fields` ← `allowFilterOnTimeFields`
- **Returns**: `CountEventsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EventServiceGetEvent
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/events/{event_id}` (Default)
- **Signature**: `EventServiceGetEvent(string orgId, string eventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Event`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EventServiceListEvents
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/events` (Default)
- **Signature**: `EventServiceListEvents(string orgId, int? page, int? limit, string? filter, string? orderBy, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`page` … `orderBy`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`, `order_by` ← `orderBy`
- **Returns**: `ListEventsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
