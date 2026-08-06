# NumbersV2SupportingDocument — operations

Accessor: `client.NumbersV2SupportingDocument` · Source: `Api/NumbersV2SupportingDocument.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSupportingDocument
- **HTTP**: `POST /v2/RegulatoryCompliance/SupportingDocuments` (Default5 (numbers))
- **Notes**: Create a new Supporting Document.
- **Signature**: `CreateSupportingDocument(string friendlyName, string type, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `attributes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Type` ← `type`, `Attributes` ← `attributes`
- **Returns**: `NumbersV2RegulatoryComplianceSupportingDocument`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSupportingDocument
- **HTTP**: `DELETE /v2/RegulatoryCompliance/SupportingDocuments/{Sid}` (Default5 (numbers))
- **Notes**: Delete a specific Supporting Document.
- **Signature**: `DeleteSupportingDocument(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchSupportingDocument
- **HTTP**: `GET /v2/RegulatoryCompliance/SupportingDocuments/{Sid}` (Default5 (numbers))
- **Notes**: Fetch specific Supporting Document Instance.
- **Signature**: `FetchSupportingDocument(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV2RegulatoryComplianceSupportingDocument`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSupportingDocument
- **HTTP**: `GET /v2/RegulatoryCompliance/SupportingDocuments` (Default5 (numbers))
- **Notes**: Retrieve a list of all Supporting Document for an account.
- **Signature**: `ListSupportingDocument(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSupportingDocumentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSupportingDocument
- **HTTP**: `POST /v2/RegulatoryCompliance/SupportingDocuments/{Sid}` (Default5 (numbers))
- **Notes**: Update an existing Supporting Document.
- **Signature**: `UpdateSupportingDocument(string sid, string? friendlyName, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `attributes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Attributes` ← `attributes`
- **Returns**: `NumbersV2RegulatoryComplianceSupportingDocument`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
