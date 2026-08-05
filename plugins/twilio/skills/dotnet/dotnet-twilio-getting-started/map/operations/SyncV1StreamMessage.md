# SyncV1StreamMessage — operations

Accessor: `client.SyncV1StreamMessage` · Source: `Api/SyncV1StreamMessage.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateStreamMessage
- **HTTP**: `POST /v1/Services/{ServiceSid}/Streams/{StreamSid}/Messages` (Default10 (sync))
- **Notes**: Create a new Stream Message.
- **Signature**: `CreateStreamMessage(string serviceSid, string streamSid, object data, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Data` ← `data`
- **Returns**: `SyncV1ServiceSyncStreamStreamMessage`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
