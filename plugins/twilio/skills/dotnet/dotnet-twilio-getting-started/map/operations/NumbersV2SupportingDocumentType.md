# NumbersV2SupportingDocumentType — operations

Accessor: `client.NumbersV2SupportingDocumentType` · Source: `Api/NumbersV2SupportingDocumentType.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchSupportingDocumentType
- **HTTP**: `GET /v2/RegulatoryCompliance/SupportingDocumentTypes/{Sid}` (Default5 (numbers))
- **Notes**: Fetch a specific Supporting Document Type Instance.
- **Signature**: `FetchSupportingDocumentType(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV2RegulatoryComplianceSupportingDocumentType`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSupportingDocumentType
- **HTTP**: `GET /v2/RegulatoryCompliance/SupportingDocumentTypes` (Default5 (numbers))
- **Notes**: Retrieve a list of all Supporting Document Types.
- **Signature**: `ListSupportingDocumentType(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSupportingDocumentTypeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
