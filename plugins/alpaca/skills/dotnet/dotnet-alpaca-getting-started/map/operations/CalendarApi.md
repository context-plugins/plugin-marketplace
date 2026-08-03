# CalendarApi — operations

Accessor: `client.CalendarApi` · Source: `Api/CalendarApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCalendar
- **HTTP**: `GET /v2/calendar` (Default (paper-api))
- **Notes**: Returns the market calendar.
- **Signature**: `GetCalendar(DateTimeOffset? start, DateTimeOffset? end, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`
- **Returns**: `IReadOnlyList<Calendar>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
