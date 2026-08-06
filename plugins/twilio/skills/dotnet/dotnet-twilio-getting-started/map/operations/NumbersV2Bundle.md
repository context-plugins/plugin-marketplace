# NumbersV2Bundle — operations

Accessor: `client.NumbersV2Bundle` · Source: `Api/NumbersV2Bundle.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBundle
- **HTTP**: `POST /v2/RegulatoryCompliance/Bundles` (Default5 (numbers))
- **Notes**: Create a new Bundle.
- **Signature**: `CreateBundle(string friendlyName, string email, string? statusCallback, string? regulationSid, string? isoCountry, BundleEnumEndUserType? endUserType, string? numberType, bool? isTest, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`statusCallback` … `isTest`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Email` ← `email`, `StatusCallback` ← `statusCallback`, `RegulationSid` ← `regulationSid`, `IsoCountry` ← `isoCountry`, `EndUserType` ← `endUserType`, `NumberType` ← `numberType`, `IsTest` ← `isTest`
- **Returns**: `NumbersV2RegulatoryComplianceBundle`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteBundle
- **HTTP**: `DELETE /v2/RegulatoryCompliance/Bundles/{Sid}` (Default5 (numbers))
- **Notes**: Delete a specific Bundle.
- **Signature**: `DeleteBundle(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchBundle
- **HTTP**: `GET /v2/RegulatoryCompliance/Bundles/{Sid}` (Default5 (numbers))
- **Notes**: Fetch a specific Bundle instance.
- **Signature**: `FetchBundle(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV2RegulatoryComplianceBundle`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListBundle
- **HTTP**: `GET /v2/RegulatoryCompliance/Bundles` (Default5 (numbers))
- **Notes**: Retrieve a list of all Bundles for an account.
- **Signature**: `ListBundle(BundleEnumStatus? status, string? bundleSids, string? friendlyName, string? regulationSid, string? isoCountry, string? numberType, BundleEnumEndUserType? endUserType, bool? hasValidUntilDate, BundleEnumSortBy? sortBy, BundleEnumSortDirection? sortDirection, DateTimeOffset? validUntilDate, DateTimeOffset? validUntilDateQuery, DateTimeOffset? validUntilDateQueryQuery, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `BundleSids` ← `bundleSids`, `FriendlyName` ← `friendlyName`, `RegulationSid` ← `regulationSid`, `IsoCountry` ← `isoCountry`, `NumberType` ← `numberType`, `EndUserType` ← `endUserType`, `HasValidUntilDate` ← `hasValidUntilDate`, `SortBy` ← `sortBy`, `SortDirection` ← `sortDirection`, `ValidUntilDate` ← `validUntilDate`, `ValidUntilDate<` ← `validUntilDateQuery`, `ValidUntilDate>` ← `validUntilDateQueryQuery`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListBundleResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateBundle
- **HTTP**: `POST /v2/RegulatoryCompliance/Bundles/{Sid}` (Default5 (numbers))
- **Notes**: Updates a Bundle in an account.
- **Signature**: `UpdateBundle(string sid, BundleEnumStatus? status, string? statusCallback, string? friendlyName, string? email, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`status` … `email`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `StatusCallback` ← `statusCallback`, `FriendlyName` ← `friendlyName`, `Email` ← `email`
- **Returns**: `NumbersV2RegulatoryComplianceBundle`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
