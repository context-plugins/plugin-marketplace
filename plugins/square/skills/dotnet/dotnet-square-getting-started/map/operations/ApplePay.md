# ApplePay — operations

Accessor: `client.ApplePay` · Source: `Api/ApplePay.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### RegisterDomain
- **HTTP**: `POST /v2/apple-pay/domains` (Default (connect))
- **Notes**: Activates a domain for use with Apple Pay on the Web and Square. A validation is performed on this domain by Apple to ensure that it is properly set up as an Apple Pay enabled domain. This endpoint provides an easy way for platform developers to bulk activate Apple Pay on the Web with Square for merchants using their platform. Note: You will need to host a valid domain verification file on your domain to support Apple Pay. The current version of this file is always available at https://app.squareup.com/digital-wallets/apple-pay/apple-developer-merchantid-domain-association, and should be hosted at `.well_known/apple-developer-merchantid-domain-association` on your domain. This file is subject to change; we strongly recommend checking for updates regularly and avoiding long-lived caches that might not keep in sync with the correct file version. To learn more about the Web Payments SDK and how to add Apple Pay, see Take an Apple Pay Payment .
- **Signature**: `RegisterDomain(RegisterDomainRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RegisterDomainResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
