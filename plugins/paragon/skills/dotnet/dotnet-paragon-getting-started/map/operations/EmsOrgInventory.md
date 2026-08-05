# EmsOrgInventory — operations

Accessor: `client.EmsOrgInventory` · Source: `Api/EmsOrgInventory.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ManageOrganizationInventory
- **HTTP**: `PUT /api/v1/orgs/{org_id}/inventory` (Default)
- **Notes**: Perform various inventory actions like assigning to a site, unassigning from a site, or deleting from the organization using the `op` field.
- **Signature**: `ManageOrganizationInventory(string orgId, string xCsrftoken, ApiV1OrgsInventoryRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgInventory
- **HTTP**: `GET /api/v1/orgs/{org_id}/inventory` (Default)
- **Signature**: `GetOrgInventory(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
