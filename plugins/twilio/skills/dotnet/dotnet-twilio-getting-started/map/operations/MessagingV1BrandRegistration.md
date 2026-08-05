# MessagingV1BrandRegistration — operations

Accessor: `client.MessagingV1BrandRegistration` · Source: `Api/MessagingV1BrandRegistration.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBrandRegistrations
- **HTTP**: `POST /v1/a2p/BrandRegistrations` (Default6 (messaging))
- **Signature**: `CreateBrandRegistrations(string customerProfileBundleSid, string a2PprofileBundleSid, string? brandType, bool? mock, bool? skipAutomaticSecVet, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `brandType` — nullable, no default → **must pass explicitly**
  - `mock` — nullable, no default → **must pass explicitly**
  - `skipAutomaticSecVet` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `CustomerProfileBundleSid` ← `customerProfileBundleSid`, `A2PProfileBundleSid` ← `a2PprofileBundleSid`, `BrandType` ← `brandType`, `Mock` ← `mock`, `SkipAutomaticSecVet` ← `skipAutomaticSecVet`
- **Returns**: `MessagingV1BrandRegistrations`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchBrandRegistrations
- **HTTP**: `GET /v1/a2p/BrandRegistrations/{Sid}` (Default6 (messaging))
- **Signature**: `FetchBrandRegistrations(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1BrandRegistrations`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListBrandRegistrations
- **HTTP**: `GET /v1/a2p/BrandRegistrations` (Default6 (messaging))
- **Signature**: `ListBrandRegistrations(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListBrandRegistrationsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateBrandRegistrations
- **HTTP**: `POST /v1/a2p/BrandRegistrations/{Sid}` (Default6 (messaging))
- **Signature**: `UpdateBrandRegistrations(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1BrandRegistrations`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
