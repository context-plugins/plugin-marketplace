# AccountsV1BulkContacts — operations

Accessor: `client.AccountsV1BulkContacts` · Source: `Api/AccountsV1BulkContacts.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBulkContacts
- **HTTP**: `POST /v1/Contacts/Bulk` (Default (accounts))
- **Signature**: `CreateBulkContacts(ContentType contentType, IReadOnlyList<string> items, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Items` ← `items`
- **Returns**: `BulkContacts`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
