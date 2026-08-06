# NumbersV2BundleCopy — operations

Accessor: `client.NumbersV2BundleCopy` · Source: `Api/NumbersV2BundleCopy.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBundleCopy
- **HTTP**: `POST /v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies` (Default5 (numbers))
- **Notes**: Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle
- **Signature**: `CreateBundleCopy(string bundleSid, string? friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`
- **Returns**: `NumbersV2RegulatoryComplianceBundleBundleCopy`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListBundleCopy
- **HTTP**: `GET /v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies` (Default5 (numbers))
- **Notes**: Retrieve a list of all Bundles Copies for a Bundle.
- **Signature**: `ListBundleCopy(string bundleSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListBundleCopyResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
