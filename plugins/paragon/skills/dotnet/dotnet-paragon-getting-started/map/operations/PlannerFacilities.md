# PlannerFacilities — operations

Accessor: `client.PlannerFacilities` · Source: `Api/PlannerFacilities.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TopologyFacilitiesBulkDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/facilities/bulk` (Default)
- **Notes**: Deletes multiple facilities from the specified offline network plan using the provided request schema.
- **Signature**: `TopologyFacilitiesBulkDelete(Guid orgId, Guid topologyId, IReadOnlyList<FacilitiesFacility>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyFacilitiesGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/facilities` (Default)
- **Notes**: Returns a list of facilities for the specified offline network plan.
- **Signature**: `TopologyFacilitiesGet(Guid orgId, Guid topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<FacilitiesFacility>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyFacilityCreate
- **HTTP**: `POST /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/facilities` (Default)
- **Notes**: Creates a single facility in the specified offline network plan.
- **Signature**: `TopologyFacilityCreate(Guid orgId, Guid topologyId, FacilitiesFacility? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FacilitiesFacility`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyFacilityDelete
- **HTTP**: `DELETE /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/facilities/{facilityIndex}` (Default)
- **Notes**: Deletes a single facility from the specified offline network plan by facility index.
- **Signature**: `TopologyFacilityDelete(Guid orgId, Guid topologyId, int facilityIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyFacilityGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/facilities/{facilityIndex}` (Default)
- **Notes**: Returns details for a single facility in the specified offline network plan.
- **Signature**: `TopologyFacilityGet(Guid orgId, Guid topologyId, int facilityIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FacilitiesFacility`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopologyFacilityUpdate
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/planning/networkplan/{topology_id}/facilities/{facilityIndex}` (Default)
- **Notes**: Updates a single facility in the specified offline network plan by facility index.
- **Signature**: `TopologyFacilityUpdate(Guid orgId, Guid topologyId, int facilityIndex, FacilitiesFacility? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FacilitiesFacility`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
