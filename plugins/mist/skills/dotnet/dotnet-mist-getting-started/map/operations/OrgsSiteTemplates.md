# OrgsSiteTemplates — operations

Accessor: `client.OrgsSiteTemplates` · Source: `Api/OrgsSiteTemplates.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgSiteTemplate
- **HTTP**: `POST /api/v1/orgs/{org_id}/sitetemplates` (ApiHost (api))
- **Notes**: Create Org Site Template
- **Signature**: `CreateOrgSiteTemplate(Guid orgId, SiteTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SiteTemplate`
- **Error**: `SdkException<CreateOrgSiteTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgSiteTemplate
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/sitetemplates/{sitetemplate_id}` (ApiHost (api))
- **Notes**: Delete Org Site Template
- **Signature**: `DeleteOrgSiteTemplate(Guid orgId, Guid sitetemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgSiteTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgSiteTemplate
- **HTTP**: `GET /api/v1/orgs/{org_id}/sitetemplates/{sitetemplate_id}` (ApiHost (api))
- **Notes**: Get Org Site Template
- **Signature**: `GetOrgSiteTemplate(Guid orgId, Guid sitetemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SiteTemplate`
- **Error**: `SdkException<GetOrgSiteTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgSiteTemplates
- **HTTP**: `GET /api/v1/orgs/{org_id}/sitetemplates` (ApiHost (api))
- **Notes**: Get List of Org Site Templates
- **Signature**: `ListOrgSiteTemplates(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<SiteTemplate>`
- **Error**: `SdkException<ListOrgSiteTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgSiteTemplate
- **HTTP**: `PUT /api/v1/orgs/{org_id}/sitetemplates/{sitetemplate_id}` (ApiHost (api))
- **Notes**: Update Org Site Template
- **Signature**: `UpdateOrgSiteTemplate(Guid orgId, Guid sitetemplateId, SiteTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SiteTemplate`
- **Error**: `SdkException<UpdateOrgSiteTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
