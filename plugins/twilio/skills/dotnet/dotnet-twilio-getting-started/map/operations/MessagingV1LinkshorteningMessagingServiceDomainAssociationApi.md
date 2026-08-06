# MessagingV1LinkshorteningMessagingServiceDomainAssociationApi — operations

Accessor: `client.MessagingV1LinkshorteningMessagingServiceDomainAssociationApi` · Source: `Api/MessagingV1LinkshorteningMessagingServiceDomainAssociationApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchLinkshorteningMessagingServiceDomainAssociation
- **HTTP**: `GET /v1/LinkShortening/MessagingServices/{MessagingServiceSid}/Domain` (Default1 (messaging))
- **Signature**: `FetchLinkshorteningMessagingServiceDomainAssociation(string messagingServiceSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MessagingV1LinkshorteningMessagingServiceDomainAssociation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
