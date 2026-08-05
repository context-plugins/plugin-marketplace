# MspsOrgGroups — operations

Accessor: `client.MspsOrgGroups` · Source: `Api/MspsOrgGroups.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateMspOrgGroup
- **HTTP**: `POST /api/v1/msps/{msp_id}/orggroups` (ApiHost (api))
- **Notes**: Create MSP Org Group
- **Signature**: `CreateMspOrgGroup(Guid mspId, Orggroup? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Orggroup`
- **Error**: `SdkException<CreateMspOrgGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteMspOrgGroup
- **HTTP**: `DELETE /api/v1/msps/{msp_id}/orggroups/{orggroup_id}` (ApiHost (api))
- **Notes**: Delete MSP Org Group
- **Signature**: `DeleteMspOrgGroup(Guid mspId, Guid orggroupId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMspOrgGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMspOrgGroup
- **HTTP**: `GET /api/v1/msps/{msp_id}/orggroups/{orggroup_id}` (ApiHost (api))
- **Notes**: Get MSP Org Group Details
- **Signature**: `GetMspOrgGroup(Guid mspId, Guid orggroupId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Orggroup`
- **Error**: `SdkException<GetMspOrgGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListMspOrgGroups
- **HTTP**: `GET /api/v1/msps/{msp_id}/orggroups` (ApiHost (api))
- **Notes**: Get List of MSP Org Groups
- **Signature**: `ListMspOrgGroups(Guid mspId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Orggroup>`
- **Error**: `SdkException<ListMspOrgGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateMspOrgGroup
- **HTTP**: `PUT /api/v1/msps/{msp_id}/orggroups/{orggroup_id}` (ApiHost (api))
- **Notes**: Update MSP Org Group
- **Signature**: `UpdateMspOrgGroup(Guid mspId, Guid orggroupId, Orggroup? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Orggroup`
- **Error**: `SdkException<UpdateMspOrgGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
