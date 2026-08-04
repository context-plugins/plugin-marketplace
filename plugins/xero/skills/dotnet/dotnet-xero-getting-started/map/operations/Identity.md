# Identity — operations

Accessor: `client.Identity` · Source: `Api/Identity.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteConnection
- **HTTP**: `DELETE /Connections/{id}` (Default6 (api))
- **Notes**: Override the base server url that include version
- **Signature**: `DeleteConnection(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetConnections
- **HTTP**: `GET /Connections` (Default6 (api))
- **Notes**: Override the base server url that include version
- **Signature**: `GetConnections(Guid? authEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authEventId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `authEventId` ← `authEventId`
- **Returns**: `IReadOnlyList<Connection>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
