# CashDrawers — operations

Accessor: `client.CashDrawers` · Source: `Api/CashDrawers.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListCashDrawerShiftEvents
- **HTTP**: `GET /v2/cash-drawers/shifts/{shift_id}/events` (Default (connect))
- **Notes**: Provides a paginated list of events for a single cash drawer shift.
- **Signature**: `ListCashDrawerShiftEvents(string shiftId, string locationId, int? limit, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `location_id` ← `locationId`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ListCashDrawerShiftEventsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCashDrawerShifts
- **HTTP**: `GET /v2/cash-drawers/shifts` (Default (connect))
- **Notes**: Provides the details for all of the cash drawer shifts for a location in a date range.
- **Signature**: `ListCashDrawerShifts(string locationId, SortOrder? sortOrder, string? beginTime, string? endTime, int? limit, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`sortOrder` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `location_id` ← `locationId`, `sort_order` ← `sortOrder`, `begin_time` ← `beginTime`, `end_time` ← `endTime`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ListCashDrawerShiftsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveCashDrawerShift
- **HTTP**: `GET /v2/cash-drawers/shifts/{shift_id}` (Default (connect))
- **Notes**: Provides the summary details for a single cash drawer shift. See ListCashDrawerShiftEvents for a list of cash drawer shift events.
- **Signature**: `RetrieveCashDrawerShift(string shiftId, string locationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `location_id` ← `locationId`
- **Returns**: `RetrieveCashDrawerShiftResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
