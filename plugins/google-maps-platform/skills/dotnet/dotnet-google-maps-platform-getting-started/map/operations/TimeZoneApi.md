# TimeZoneApi — operations

Accessor: `client.TimeZoneApi` · Source: `Api/TimeZoneApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Timezone
- **HTTP**: `GET /maps/api/timezone/json` (Default (www))
- **Notes**: The Time Zone API provides a simple interface to request the time zone for locations on the surface of the earth, as well as the time offset from UTC for each of those locations. You request the time zone information for a specific latitude/longitude pair and date. The API returns the name of that time zone, the time offset from UTC, and the daylight savings offset.
- **Signature**: `Timezone(string location, double timestamp, Language1? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `location` ← `location`, `timestamp` ← `timestamp`, `language` ← `language`
- **Returns**: `TimeZoneResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
