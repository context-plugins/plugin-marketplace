# TrusthubV1TrustProducts — operations

Accessor: `client.TrusthubV1TrustProducts` · Source: `Api/TrusthubV1TrustProducts.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateTrustProduct
- **HTTP**: `POST /v1/TrustProducts` (Default12 (trusthub))
- **Notes**: Create a new Trust Product.
- **Signature**: `CreateTrustProduct(string friendlyName, string email, string policySid, string? statusCallback, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `statusCallback` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Email` ← `email`, `PolicySid` ← `policySid`, `StatusCallback` ← `statusCallback`
- **Returns**: `TrusthubV1TrustProduct`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTrustProduct
- **HTTP**: `DELETE /v1/TrustProducts/{Sid}` (Default12 (trusthub))
- **Notes**: Delete a specific Trust Product.
- **Signature**: `DeleteTrustProduct(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchTrustProduct
- **HTTP**: `GET /v1/TrustProducts/{Sid}` (Default12 (trusthub))
- **Notes**: Fetch a specific Trust Product instance.
- **Signature**: `FetchTrustProduct(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrusthubV1TrustProduct`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListTrustProduct
- **HTTP**: `GET /v1/TrustProducts` (Default12 (trusthub))
- **Notes**: Retrieve a list of all Trust Products for an account.
- **Signature**: `ListTrustProduct(TrustProductEnumStatus? status, string? friendlyName, string? policySid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `FriendlyName` ← `friendlyName`, `PolicySid` ← `policySid`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTrustProductResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateTrustProduct
- **HTTP**: `POST /v1/TrustProducts/{Sid}` (Default12 (trusthub))
- **Notes**: Updates a Trust Product in an account.
- **Signature**: `UpdateTrustProduct(string sid, TrustProductEnumStatus? status, string? statusCallback, string? friendlyName, string? email, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`status` … `email`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `StatusCallback` ← `statusCallback`, `FriendlyName` ← `friendlyName`, `Email` ← `email`
- **Returns**: `TrusthubV1TrustProduct`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
