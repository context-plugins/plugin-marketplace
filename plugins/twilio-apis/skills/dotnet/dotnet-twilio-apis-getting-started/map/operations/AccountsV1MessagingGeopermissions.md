# AccountsV1MessagingGeopermissions — operations

Accessor: `client.AccountsV1MessagingGeopermissions` · Source: `Api/AccountsV1MessagingGeopermissions.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchMessagingGeopermissions
- **HTTP**: `GET /v1/Messaging/GeoPermissions` (Default (accounts))
- **Notes**: Manage Geo Permissions for each country.
- **Signature**: `FetchMessagingGeopermissions(string? countryCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `countryCode` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `CountryCode` ← `countryCode`
- **Returns**: `MsgGeopermissions`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateMessagingGeopermissions
- **HTTP**: `PATCH /v1/Messaging/GeoPermissions` (Default (accounts))
- **Notes**: Manage Geo Permissions for each country.
- **Signature**: `UpdateMessagingGeopermissions(ContentType contentType, IReadOnlyList<string> permissions, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Permissions` ← `permissions`
- **Returns**: `MsgGeopermissions`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
