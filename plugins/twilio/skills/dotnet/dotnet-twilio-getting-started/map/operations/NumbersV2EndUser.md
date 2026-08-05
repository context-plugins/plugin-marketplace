# NumbersV2EndUser — operations

Accessor: `client.NumbersV2EndUser` · Source: `Api/NumbersV2EndUser.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateEndUser
- **HTTP**: `POST /v2/RegulatoryCompliance/EndUsers` (Default7 (numbers))
- **Notes**: Create a new End User.
- **Signature**: `CreateEndUser(string friendlyName, EndUserEnumType type, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `attributes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Type` ← `type`, `Attributes` ← `attributes`
- **Returns**: `NumbersV2RegulatoryComplianceEndUser`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteEndUser
- **HTTP**: `DELETE /v2/RegulatoryCompliance/EndUsers/{Sid}` (Default7 (numbers))
- **Notes**: Delete a specific End User.
- **Signature**: `DeleteEndUser(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchEndUser
- **HTTP**: `GET /v2/RegulatoryCompliance/EndUsers/{Sid}` (Default7 (numbers))
- **Notes**: Fetch specific End User Instance.
- **Signature**: `FetchEndUser(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV2RegulatoryComplianceEndUser`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListEndUser
- **HTTP**: `GET /v2/RegulatoryCompliance/EndUsers` (Default7 (numbers))
- **Notes**: Retrieve a list of all End User for an account.
- **Signature**: `ListEndUser(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListEndUserResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateEndUser
- **HTTP**: `POST /v2/RegulatoryCompliance/EndUsers/{Sid}` (Default7 (numbers))
- **Notes**: Update an existing End User.
- **Signature**: `UpdateEndUser(string sid, string? friendlyName, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `attributes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Attributes` ← `attributes`
- **Returns**: `NumbersV2RegulatoryComplianceEndUser`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
