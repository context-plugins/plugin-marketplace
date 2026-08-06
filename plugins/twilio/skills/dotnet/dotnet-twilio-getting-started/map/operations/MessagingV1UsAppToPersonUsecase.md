# MessagingV1UsAppToPersonUsecase — operations

Accessor: `client.MessagingV1UsAppToPersonUsecase` · Source: `Api/MessagingV1UsAppToPersonUsecase.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchUsAppToPersonUsecase
- **HTTP**: `GET /v1/Services/{MessagingServiceSid}/Compliance/Usa2p/Usecases` (Default1 (messaging))
- **Signature**: `FetchUsAppToPersonUsecase(string messagingServiceSid, string? brandRegistrationSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `brandRegistrationSid` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `BrandRegistrationSid` ← `brandRegistrationSid`
- **Returns**: `MessagingV1ServiceUsAppToPersonUsecase`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
