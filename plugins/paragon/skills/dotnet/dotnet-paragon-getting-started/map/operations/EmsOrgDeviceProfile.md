# EmsOrgDeviceProfile — operations

Accessor: `client.EmsOrgDeviceProfile` · Source: `Api/EmsOrgDeviceProfile.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteDeviceProfilesOperationalState
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/devices/{device_mac}/profile/state` (Default)
- **Signature**: `DeleteDeviceProfilesOperationalState(string orgId, string deviceMac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetBulkDeviceProfilesSearch
- **HTTP**: `GET /api/v1/orgs/{org_id}/device/profiles/search` (Default)
- **Signature**: `GetBulkDeviceProfilesSearch(string orgId, string? mac, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `mac` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `mac` ← `mac`
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgDeviceProfiles
- **HTTP**: `GET /api/v1/orgs/{org_id}/deviceprofiles` (Default)
- **Signature**: `GetOrgDeviceProfiles(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateDeviceProfilesOperationalState
- **HTTP**: `PUT /api/v1/orgs/{org_id}/devices/{device_mac}/profile/state` (Default)
- **Signature**: `UpdateDeviceProfilesOperationalState(string orgId, string deviceMac, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
