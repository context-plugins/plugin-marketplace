# TopologyFacilities — operations

Accessor: `client.TopologyFacilities` · Source: `Api/TopologyFacilities.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TopologyFacilitiesBulkDelete2
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/facilities/bulk` (Default)
- **Notes**: Delete multiple facilities.
- **Signature**: `TopologyFacilitiesBulkDelete2(Guid orgId, int topologyId, IReadOnlyList<FacilitiesFacility>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyFacilitiesGet2
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/facilities` (Default)
- **Notes**: Returns a list of facilities up to 1000 records with pagination info in the headers.
- **Signature**: `TopologyFacilitiesGet2(Guid orgId, int topologyId, int? page, int? perPage, string? q, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - `q` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `q` ← `q`
- **Returns**: `IReadOnlyList<FacilitiesFacility>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### TopologyFacilitiesPost
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/{topology_id}/facilities` (Default)
- **Notes**: Create a new facility.
- **Signature**: `TopologyFacilitiesPost(Guid orgId, int topologyId, FacilitiesCreateFacility? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FacilitiesFacility`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyFacilityDelete2
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/{topology_id}/facilities/{facilityIndex}` (Default)
- **Notes**: Delete facility by index.
- **Signature**: `TopologyFacilityDelete2(Guid orgId, int topologyId, int facilityIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyFacilityGet2
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/facilities/{facilityIndex}` (Default)
- **Notes**: Gets a Facility.
- **Signature**: `TopologyFacilityGet2(Guid orgId, int topologyId, int facilityIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FacilitiesFacility`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyFacilityUpdate2
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/facilities/{facilityIndex}` (Default)
- **Notes**: Update facility details by index.
- **Signature**: `TopologyFacilityUpdate2(Guid orgId, int topologyId, int facilityIndex, FacilitiesFacility? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
