# OrgsSitegroups — operations

Accessor: `client.OrgsSitegroups` · Source: `Api/OrgsSitegroups.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgSiteGroup
- **HTTP**: `POST /api/v1/orgs/{org_id}/sitegroups` (ApiHost (api))
- **Notes**: Create Org Site Group
- **Signature**: `CreateOrgSiteGroup(Guid orgId, Sitegroup? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Sitegroup`
- **Error**: `SdkException<CreateOrgSiteGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgSiteGroup
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/sitegroups/{sitegroup_id}` (ApiHost (api))
- **Notes**: Delete Org Site Group
- **Signature**: `DeleteOrgSiteGroup(Guid orgId, Guid sitegroupId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgSiteGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgSiteGroup
- **HTTP**: `GET /api/v1/orgs/{org_id}/sitegroups/{sitegroup_id}` (ApiHost (api))
- **Notes**: Get Org Site Group
- **Signature**: `GetOrgSiteGroup(Guid orgId, Guid sitegroupId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Sitegroup`
- **Error**: `SdkException<GetOrgSiteGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgSiteGroups
- **HTTP**: `GET /api/v1/orgs/{org_id}/sitegroups` (ApiHost (api))
- **Notes**: Get List of Org Site Groups
- **Signature**: `ListOrgSiteGroups(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Sitegroup>`
- **Error**: `SdkException<ListOrgSiteGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgSiteGroup
- **HTTP**: `PUT /api/v1/orgs/{org_id}/sitegroups/{sitegroup_id}` (ApiHost (api))
- **Notes**: Update Org Site Group
- **Signature**: `UpdateOrgSiteGroup(Guid orgId, Guid sitegroupId, NameString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Sitegroup`
- **Error**: `SdkException<UpdateOrgSiteGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
