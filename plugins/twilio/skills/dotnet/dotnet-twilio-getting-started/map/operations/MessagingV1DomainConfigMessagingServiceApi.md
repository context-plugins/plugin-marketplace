# MessagingV1DomainConfigMessagingServiceApi — operations

Accessor: `client.MessagingV1DomainConfigMessagingServiceApi` · Source: `Api/MessagingV1DomainConfigMessagingServiceApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchDomainConfigMessagingService
- **HTTP**: `GET /v1/LinkShortening/MessagingService/{MessagingServiceSid}/DomainConfig` (Default1 (messaging))
- **Signature**: `FetchDomainConfigMessagingService(string messagingServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1DomainConfigMessagingService`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
