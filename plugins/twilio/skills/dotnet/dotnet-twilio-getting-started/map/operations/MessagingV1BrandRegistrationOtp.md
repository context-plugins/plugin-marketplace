# MessagingV1BrandRegistrationOtp — operations

Accessor: `client.MessagingV1BrandRegistrationOtp` · Source: `Api/MessagingV1BrandRegistrationOtp.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBrandRegistrationOtp
- **HTTP**: `POST /v1/a2p/BrandRegistrations/{BrandRegistrationSid}/SmsOtp` (Default1 (messaging))
- **Signature**: `CreateBrandRegistrationOtp(string brandRegistrationSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1BrandRegistrationsBrandRegistrationOtp`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
