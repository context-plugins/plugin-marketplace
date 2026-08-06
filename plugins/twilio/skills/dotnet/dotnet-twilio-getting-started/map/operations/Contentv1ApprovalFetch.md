# Contentv1ApprovalFetch — operations

Accessor: `client.Contentv1ApprovalFetch` · Source: `Api/Contentv1ApprovalFetch.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchApprovalFetch
- **HTTP**: `GET /v1/Content/{Sid}/ApprovalRequests` (Default2 (content))
- **Notes**: Fetch a Content resource's approval status by its unique Content Sid
- **Signature**: `FetchApprovalFetch(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ContentV1ContentApprovalFetch`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
