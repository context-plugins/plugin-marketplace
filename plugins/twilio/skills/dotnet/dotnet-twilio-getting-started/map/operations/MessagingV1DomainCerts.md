# MessagingV1DomainCerts — operations

Accessor: `client.MessagingV1DomainCerts` · Source: `Api/MessagingV1DomainCerts.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteDomainCertV4
- **HTTP**: `DELETE /v1/LinkShortening/Domains/{DomainSid}/Certificate` (Default1 (messaging))
- **Signature**: `DeleteDomainCertV4(string domainSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchDomainCertV4
- **HTTP**: `GET /v1/LinkShortening/Domains/{DomainSid}/Certificate` (Default1 (messaging))
- **Signature**: `FetchDomainCertV4(string domainSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1DomainCertV4`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateDomainCertV4
- **HTTP**: `POST /v1/LinkShortening/Domains/{DomainSid}/Certificate` (Default1 (messaging))
- **Signature**: `UpdateDomainCertV4(string domainSid, string tlsCert, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `TlsCert` ← `tlsCert`
- **Returns**: `MessagingV1DomainCertV4`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
