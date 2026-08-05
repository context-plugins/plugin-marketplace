# TrusthubV1CustomerProfiles — operations

Accessor: `client.TrusthubV1CustomerProfiles` · Source: `Api/TrusthubV1CustomerProfiles.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCustomerProfile
- **HTTP**: `POST /v1/CustomerProfiles` (Default12 (trusthub))
- **Notes**: Create a new Customer-Profile.
- **Signature**: `CreateCustomerProfile(string friendlyName, string email, string policySid, string? statusCallback, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `statusCallback` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Email` ← `email`, `PolicySid` ← `policySid`, `StatusCallback` ← `statusCallback`
- **Returns**: `TrusthubV1CustomerProfile`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCustomerProfile
- **HTTP**: `DELETE /v1/CustomerProfiles/{Sid}` (Default12 (trusthub))
- **Notes**: Delete a specific Customer-Profile.
- **Signature**: `DeleteCustomerProfile(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchCustomerProfile
- **HTTP**: `GET /v1/CustomerProfiles/{Sid}` (Default12 (trusthub))
- **Notes**: Fetch a specific Customer-Profile instance.
- **Signature**: `FetchCustomerProfile(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrusthubV1CustomerProfile`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCustomerProfile
- **HTTP**: `GET /v1/CustomerProfiles` (Default12 (trusthub))
- **Notes**: Retrieve a list of all Customer-Profiles for an account.
- **Signature**: `ListCustomerProfile(CustomerProfileEnumStatus? status, string? friendlyName, string? policySid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `FriendlyName` ← `friendlyName`, `PolicySid` ← `policySid`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCustomerProfileResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateCustomerProfile
- **HTTP**: `POST /v1/CustomerProfiles/{Sid}` (Default12 (trusthub))
- **Notes**: Updates a Customer-Profile in an account.
- **Signature**: `UpdateCustomerProfile(string sid, CustomerProfileEnumStatus? status, string? statusCallback, string? friendlyName, string? email, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`status` … `email`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `StatusCallback` ← `statusCallback`, `FriendlyName` ← `friendlyName`, `Email` ← `email`
- **Returns**: `TrusthubV1CustomerProfile`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
