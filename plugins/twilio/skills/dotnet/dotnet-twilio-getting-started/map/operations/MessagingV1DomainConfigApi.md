# MessagingV1DomainConfigApi — operations

Accessor: `client.MessagingV1DomainConfigApi` · Source: `Api/MessagingV1DomainConfigApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchDomainConfig
- **HTTP**: `GET /v1/LinkShortening/Domains/{DomainSid}/Config` (Default6 (messaging))
- **Signature**: `FetchDomainConfig(string domainSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1DomainConfig`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateDomainConfig
- **HTTP**: `POST /v1/LinkShortening/Domains/{DomainSid}/Config` (Default6 (messaging))
- **Signature**: `UpdateDomainConfig(string domainSid, string? fallbackUrl, string? callbackUrl, bool? continueOnFailure, bool? disableHttps, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`fallbackUrl` … `disableHttps`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FallbackUrl` ← `fallbackUrl`, `CallbackUrl` ← `callbackUrl`, `ContinueOnFailure` ← `continueOnFailure`, `DisableHttps` ← `disableHttps`
- **Returns**: `MessagingV1DomainConfig`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
