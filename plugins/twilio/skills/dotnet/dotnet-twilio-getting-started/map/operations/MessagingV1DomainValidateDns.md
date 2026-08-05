# MessagingV1DomainValidateDns — operations

Accessor: `client.MessagingV1DomainValidateDns` · Source: `Api/MessagingV1DomainValidateDns.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchDomainDnsValidation
- **HTTP**: `GET /v1/LinkShortening/Domains/{DomainSid}/ValidateDns` (Default6 (messaging))
- **Signature**: `FetchDomainDnsValidation(string domainSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1DomainDnsValidation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
