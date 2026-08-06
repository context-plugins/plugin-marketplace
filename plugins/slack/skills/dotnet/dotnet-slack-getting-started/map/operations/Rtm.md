# Rtm — operations

Accessor: `client.Rtm` · Source: `Api/Rtm.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### RtmConnect
- **HTTP**: `GET /rtm.connect` (Default (slack))
- **Notes**: Starts a Real Time Messaging session.
- **Signature**: `RtmConnect(string token, bool? batchPresenceAware, bool? presenceSub, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `batchPresenceAware` — nullable, no default → **must pass explicitly**
  - `presenceSub` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `batch_presence_aware` ← `batchPresenceAware`, `presence_sub` ← `presenceSub`
- **Returns**: `RtmConnectschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
