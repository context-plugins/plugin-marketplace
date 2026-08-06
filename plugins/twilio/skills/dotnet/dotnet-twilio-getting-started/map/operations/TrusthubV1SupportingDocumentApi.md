# TrusthubV1SupportingDocumentApi — operations

Accessor: `client.TrusthubV1SupportingDocumentApi` · Source: `Api/TrusthubV1SupportingDocumentApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSupportingDocument2
- **HTTP**: `POST /v1/SupportingDocuments` (Default9 (trusthub))
- **Notes**: Create a new Supporting Document.
- **Signature**: `CreateSupportingDocument2(string friendlyName, string type, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `attributes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Type` ← `type`, `Attributes` ← `attributes`
- **Returns**: `TrusthubV1SupportingDocument`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSupportingDocument2
- **HTTP**: `DELETE /v1/SupportingDocuments/{Sid}` (Default9 (trusthub))
- **Notes**: Delete a specific Supporting Document.
- **Signature**: `DeleteSupportingDocument2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchSupportingDocument2
- **HTTP**: `GET /v1/SupportingDocuments/{Sid}` (Default9 (trusthub))
- **Notes**: Fetch specific Supporting Document Instance.
- **Signature**: `FetchSupportingDocument2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrusthubV1SupportingDocument`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSupportingDocument2
- **HTTP**: `GET /v1/SupportingDocuments` (Default9 (trusthub))
- **Notes**: Retrieve a list of all Supporting Document for an account.
- **Signature**: `ListSupportingDocument2(long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSupportingDocumentResponse1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSupportingDocument2
- **HTTP**: `POST /v1/SupportingDocuments/{Sid}` (Default9 (trusthub))
- **Notes**: Update an existing Supporting Document.
- **Signature**: `UpdateSupportingDocument2(string sid, string? friendlyName, object? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `attributes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Attributes` ← `attributes`
- **Returns**: `TrusthubV1SupportingDocument`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
