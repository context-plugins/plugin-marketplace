# MessagingV1LinkshorteningMessagingServiceApi — operations

Accessor: `client.MessagingV1LinkshorteningMessagingServiceApi` · Source: `Api/MessagingV1LinkshorteningMessagingServiceApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateLinkshorteningMessagingService
- **HTTP**: `POST /v1/LinkShortening/Domains/{DomainSid}/MessagingServices/{MessagingServiceSid}` (Default1 (messaging))
- **Signature**: `CreateLinkshorteningMessagingService(string domainSid, string messagingServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1LinkshorteningMessagingService`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLinkshorteningMessagingService
- **HTTP**: `DELETE /v1/LinkShortening/Domains/{DomainSid}/MessagingServices/{MessagingServiceSid}` (Default1 (messaging))
- **Signature**: `DeleteLinkshorteningMessagingService(string domainSid, string messagingServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
