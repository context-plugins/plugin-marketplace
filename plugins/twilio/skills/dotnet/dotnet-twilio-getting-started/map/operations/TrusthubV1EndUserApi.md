# TrusthubV1EndUserApi — operations

Accessor: `client.TrusthubV1EndUserApi` · Source: `Api/TrusthubV1EndUserApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateEndUser2
- **HTTP**: `POST /v1/EndUsers` (Default9 (trusthub))
- **Notes**: Create a new End User.
- **Signature**: `CreateEndUser2(string friendlyName, string type, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `attributes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Type` ← `type`, `Attributes` ← `attributes`
- **Returns**: `TrusthubV1EndUser`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteEndUser2
- **HTTP**: `DELETE /v1/EndUsers/{Sid}` (Default9 (trusthub))
- **Notes**: Delete a specific End User.
- **Signature**: `DeleteEndUser2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchEndUser2
- **HTTP**: `GET /v1/EndUsers/{Sid}` (Default9 (trusthub))
- **Notes**: Fetch specific End User Instance.
- **Signature**: `FetchEndUser2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrusthubV1EndUser`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListEndUser2
- **HTTP**: `GET /v1/EndUsers` (Default9 (trusthub))
- **Notes**: Retrieve a list of all End User for an account.
- **Signature**: `ListEndUser2(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListEndUserResponse1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateEndUser2
- **HTTP**: `POST /v1/EndUsers/{Sid}` (Default9 (trusthub))
- **Notes**: Update an existing End User.
- **Signature**: `UpdateEndUser2(string sid, string? friendlyName, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `attributes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Attributes` ← `attributes`
- **Returns**: `TrusthubV1EndUser`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
