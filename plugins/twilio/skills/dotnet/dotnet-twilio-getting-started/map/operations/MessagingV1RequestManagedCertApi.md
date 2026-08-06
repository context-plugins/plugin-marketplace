# MessagingV1RequestManagedCertApi — operations

Accessor: `client.MessagingV1RequestManagedCertApi` · Source: `Api/MessagingV1RequestManagedCertApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### UpdateRequestManagedCert
- **HTTP**: `POST /v1/LinkShortening/Domains/{DomainSid}/RequestManagedCert` (Default1 (messaging))
- **Signature**: `UpdateRequestManagedCert(string domainSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1RequestManagedCert`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
