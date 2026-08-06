# MessagingV2DomainCerts — operations

Accessor: `client.MessagingV2DomainCerts` · Source: `Api/MessagingV2DomainCerts.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchDomainCertV42
- **HTTP**: `GET /v2/LinkShortening/Domains/{DomainSid}/Certificate` (Default1 (messaging))
- **Signature**: `FetchDomainCertV42(string domainSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV2DomainCertV4`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
