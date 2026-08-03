# ClockApi — operations

Accessor: `client.ClockApi` · Source: `Api/ClockApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetClock
- **HTTP**: `GET /v2/clock` (Default (paper-api))
- **Notes**: The clock API serves the current market timestamp, whether or not the market is currently open, as well as the times of the next market open and close. Returns the market clock.
- **Signature**: `GetClock(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Clock`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
