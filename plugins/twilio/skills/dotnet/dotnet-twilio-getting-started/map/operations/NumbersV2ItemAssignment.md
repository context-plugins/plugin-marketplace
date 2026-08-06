# NumbersV2ItemAssignment — operations

Accessor: `client.NumbersV2ItemAssignment` · Source: `Api/NumbersV2ItemAssignment.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateItemAssignment
- **HTTP**: `POST /v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments` (Default5 (numbers))
- **Notes**: Create a new Assigned Item.
- **Signature**: `CreateItemAssignment(string bundleSid, string objectSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ObjectSid` ← `objectSid`
- **Returns**: `NumbersV2RegulatoryComplianceBundleItemAssignment`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteItemAssignment
- **HTTP**: `DELETE /v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}` (Default5 (numbers))
- **Notes**: Remove an Assignment Item Instance.
- **Signature**: `DeleteItemAssignment(string bundleSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchItemAssignment
- **HTTP**: `GET /v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}` (Default5 (numbers))
- **Notes**: Fetch specific Assigned Item Instance.
- **Signature**: `FetchItemAssignment(string bundleSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV2RegulatoryComplianceBundleItemAssignment`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListItemAssignment
- **HTTP**: `GET /v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments` (Default5 (numbers))
- **Notes**: Retrieve a list of all Assigned Items for an account.
- **Signature**: `ListItemAssignment(string bundleSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListItemAssignmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
