# EmsOrgNetworkWideInventory — operations

Accessor: `client.EmsOrgNetworkWideInventory` · Source: `Api/EmsOrgNetworkWideInventory.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetOrgNetworkFeatures
- **HTTP**: `GET /api/v1/orgs/{org_id}/network/features` (Default)
- **Notes**: Retrieve network-wide feature inventory for the organization.
- **Signature**: `GetOrgNetworkFeatures(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgNetworkHardware
- **HTTP**: `GET /api/v1/orgs/{org_id}/network/hardware` (Default)
- **Notes**: Retrieve network-wide hardware inventory for the organization.
- **Signature**: `GetOrgNetworkHardware(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgNetworkLicenses
- **HTTP**: `GET /api/v1/orgs/{org_id}/network/licenses` (Default)
- **Notes**: Retrieve network-wide license inventory for the organization.
- **Signature**: `GetOrgNetworkLicenses(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
