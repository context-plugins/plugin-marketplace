# UpdateTriggers — operations

Accessor: `client.UpdateTriggers` · Source: `Api/UpdateTriggers.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### UpdateAllAvailableTriggers
- **HTTP**: `PUT /m2m/v2/triggers` (HyperPreciseCredentials (thingspace))
- **Notes**: Updates the promotional triggers for pseudo-MDN.
- **Signature**: `UpdateAllAvailableTriggers(RequestTrigger? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Success`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
