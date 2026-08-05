# Contentv1ApprovalCreate — operations

Accessor: `client.Contentv1ApprovalCreate` · Source: `Api/Contentv1ApprovalCreate.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateApprovalCreate
- **HTTP**: `POST /v1/Content/{ContentSid}/ApprovalRequests/whatsapp` (Default1 (content))
- **Notes**: Create a ContentApprovalRequest for a content item
- **Signature**: `CreateApprovalCreate(string contentSid, ContentApprovalRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ContentV1ContentApprovalCreate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
