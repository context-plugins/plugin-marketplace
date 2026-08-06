# MessagingV1BrandVetting — operations

Accessor: `client.MessagingV1BrandVetting` · Source: `Api/MessagingV1BrandVetting.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBrandVetting
- **HTTP**: `POST /v1/a2p/BrandRegistrations/{BrandSid}/Vettings` (Default1 (messaging))
- **Signature**: `CreateBrandVetting(string brandSid, BrandVettingEnumVettingProvider vettingProvider, string? vettingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `vettingId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `VettingProvider` ← `vettingProvider`, `VettingId` ← `vettingId`
- **Returns**: `MessagingV1BrandRegistrationsBrandVetting`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchBrandVetting
- **HTTP**: `GET /v1/a2p/BrandRegistrations/{BrandSid}/Vettings/{BrandVettingSid}` (Default1 (messaging))
- **Signature**: `FetchBrandVetting(string brandSid, string brandVettingSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1BrandRegistrationsBrandVetting`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListBrandVetting
- **HTTP**: `GET /v1/a2p/BrandRegistrations/{BrandSid}/Vettings` (Default1 (messaging))
- **Signature**: `ListBrandVetting(string brandSid, BrandVettingEnumVettingProvider? vettingProvider, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `vettingProvider` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `VettingProvider` ← `vettingProvider`
- **Returns**: `ListBrandVettingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
