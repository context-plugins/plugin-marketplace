# AccountsV1BulkConsents — operations

Accessor: `client.AccountsV1BulkConsents` · Source: `Api/AccountsV1BulkConsents.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBulkConsents
- **HTTP**: `POST /v1/Consents/Bulk` (Default (accounts))
- **Signature**: `CreateBulkConsents(ContentType contentType, IReadOnlyList<string> items, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Items` ← `items`
- **Returns**: `BulkConsents`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
