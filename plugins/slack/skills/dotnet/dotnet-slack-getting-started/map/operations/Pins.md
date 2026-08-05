# Pins — operations

Accessor: `client.Pins` · Source: `Api/Pins.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PinsAdd
- **HTTP**: `POST /pins.add` (Default (slack))
- **Notes**: Pins an item to a channel.
- **Signature**: `PinsAdd(string token, ContentType contentType, string channel, string? timestamp, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `timestamp` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `timestamp` ← `timestamp`
- **Returns**: `PinsAddschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PinsAdd1
- **HTTP**: `POST /pins.add` (Default (slack))
- **Notes**: Pins an item to a channel.
- **Signature**: `PinsAdd1(string token, ContentType contentType, string channel, string? timestamp, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `timestamp` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `timestamp` ← `timestamp`
- **Returns**: `PinsAddschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PinsList
- **HTTP**: `GET /pins.list` (Default (slack))
- **Notes**: Lists items pinned to a channel.
- **Signature**: `PinsList(string token, string channel, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `channel` ← `channel`
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PinsList1
- **HTTP**: `GET /pins.list` (Default (slack))
- **Notes**: Lists items pinned to a channel.
- **Signature**: `PinsList1(string token, string channel, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `channel` ← `channel`
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PinsRemove
- **HTTP**: `POST /pins.remove` (Default (slack))
- **Notes**: Un-pins an item from a channel.
- **Signature**: `PinsRemove(string token, ContentType contentType, string channel, string? timestamp, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `timestamp` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `timestamp` ← `timestamp`
- **Returns**: `PinsRemoveschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PinsRemove1
- **HTTP**: `POST /pins.remove` (Default (slack))
- **Notes**: Un-pins an item from a channel.
- **Signature**: `PinsRemove1(string token, ContentType contentType, string channel, string? timestamp, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `timestamp` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `timestamp` ← `timestamp`
- **Returns**: `PinsRemoveschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
