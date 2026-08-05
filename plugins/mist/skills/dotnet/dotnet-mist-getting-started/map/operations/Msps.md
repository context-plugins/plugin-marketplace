# Msps — operations

Accessor: `client.Msps` · Source: `Api/Msps.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateMsp
- **HTTP**: `POST /api/v1/msps` (ApiHost (api))
- **Notes**: Create MSP account
- **Signature**: `CreateMsp(Msp? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Msp`
- **Error**: `SdkException<CreateMspError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteMsp
- **HTTP**: `DELETE /api/v1/msps/{msp_id}` (ApiHost (api))
- **Notes**: Deleting MSP removes the MSP and OrgGroup under the MSP as well as all privileges associated with them. It does not remove any Org or Admins
- **Signature**: `DeleteMsp(Guid mspId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMspError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMspDetails
- **HTTP**: `GET /api/v1/msps/{msp_id}` (ApiHost (api))
- **Notes**: Get MSP Detail
- **Signature**: `GetMspDetails(Guid mspId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Msp`
- **Error**: `SdkException<GetMspDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchMspOrgGroup
- **HTTP**: `GET /api/v1/msps/{msp_id}/search` (ApiHost (api))
- **Notes**: Search in MSP Orgs
- **Signature**: `SearchMspOrgGroup(Guid mspId, MspSearchType type, string? q, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `q` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `q` ← `q`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseSearch`
- **Error**: `SdkException<SearchMspOrgGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateMsp
- **HTTP**: `PUT /api/v1/msps/{msp_id}` (ApiHost (api))
- **Notes**: Update MSP
- **Signature**: `UpdateMsp(Guid mspId, Msp? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Msp`
- **Error**: `SdkException<UpdateMspError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
