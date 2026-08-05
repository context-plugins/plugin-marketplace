# MspsOrgs — operations

Accessor: `client.MspsOrgs` · Source: `Api/MspsOrgs.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateMspOrg
- **HTTP**: `POST /api/v1/msps/{msp_id}/orgs` (ApiHost (api))
- **Notes**: Create an Org under MSP
- **Signature**: `CreateMspOrg(Guid mspId, Org? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Org`
- **Error**: `SdkException<CreateMspOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteMspOrg
- **HTTP**: `DELETE /api/v1/msps/{msp_id}/orgs/{org_id}` (ApiHost (api))
- **Notes**: Delete MSP Org
- **Signature**: `DeleteMspOrg(Guid mspId, Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMspOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMspOrg
- **HTTP**: `GET /api/v1/msps/{msp_id}/orgs/{org_id}` (ApiHost (api))
- **Notes**: Get MSP Org Details
- **Signature**: `GetMspOrg(Guid mspId, Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Org`
- **Error**: `SdkException<GetMspOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListMspOrgStats
- **HTTP**: `GET /api/v1/msps/{msp_id}/stats/orgs` (ApiHost (api))
- **Notes**: Get List of MSP Orgs Stats
- **Signature**: `ListMspOrgStats(Guid mspId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<StatsOrg>`
- **Error**: `SdkException<ListMspOrgStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListMspOrgs
- **HTTP**: `GET /api/v1/msps/{msp_id}/orgs` (ApiHost (api))
- **Notes**: Get List of MSP Orgs
- **Signature**: `ListMspOrgs(Guid mspId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Org>`
- **Error**: `SdkException<ListMspOrgsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ManageMspOrgs
- **HTTP**: `PUT /api/v1/msps/{msp_id}/orgs` (ApiHost (api))
- **Notes**: Assign or Unassign Orgs to an MSP account
- **Signature**: `ManageMspOrgs(Guid mspId, MspOrgChange? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ManageMspOrgsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchMspOrgs
- **HTTP**: `GET /api/v1/msps/{msp_id}/orgs/search` (ApiHost (api))
- **Notes**: Search Org in MSP
- **Signature**: `SearchMspOrgs(Guid mspId, string? name, Guid? orgId, bool? subInsufficient, bool? trialEnabled, IReadOnlyList<string>? usageTypes, int? limit = 100, string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`name` … `usageTypes`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `org_id` ← `orgId`, `sub_insufficient` ← `subInsufficient`, `trial_enabled` ← `trialEnabled`, `usage_types` ← `usageTypes`, `limit` ← `limit`, `sort` ← `sort`
- **Returns**: `ResponseOrgSearch`
- **Error**: `SdkException<SearchMspOrgsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateMspOrg
- **HTTP**: `PUT /api/v1/msps/{msp_id}/orgs/{org_id}` (ApiHost (api))
- **Notes**: Update MSP Org
- **Signature**: `UpdateMspOrg(Guid mspId, Guid orgId, Org? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Org`
- **Error**: `SdkException<UpdateMspOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
