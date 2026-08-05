# SitesWxRules — operations

Accessor: `client.SitesWxRules` · Source: `Api/SitesWxRules.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListSiteWxRulesDerived
- **HTTP**: `GET /api/v1/sites/{site_id}/wxrules/derived` (ApiHost (api))
- **Notes**: Get the list of derived WxLan Rule for a site
- **Signature**: `ListSiteWxRulesDerived(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<WxlanRule>`
- **Error**: `SdkException<ListSiteWxRulesDerivedError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSiteWxRule
- **HTTP**: `POST /api/v1/sites/{site_id}/wxrules` (ApiHost (api))
- **Notes**: Create Site WxLan Rule
- **Signature**: `CreateSiteWxRule(Guid siteId, WxlanRule? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WxlanRule`
- **Error**: `SdkException<CreateSiteWxRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteWxRule
- **HTTP**: `DELETE /api/v1/sites/{site_id}/wxrules/{wxrule_id}` (ApiHost (api))
- **Notes**: Delete Site WxLan Rule
- **Signature**: `DeleteSiteWxRule(Guid siteId, Guid wxruleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteWxRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteWxRule
- **HTTP**: `GET /api/v1/sites/{site_id}/wxrules/{wxrule_id}` (ApiHost (api))
- **Notes**: Get Site WxLan Rule Details
- **Signature**: `GetSiteWxRule(Guid siteId, Guid wxruleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WxlanRule`
- **Error**: `SdkException<GetSiteWxRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteWxRules
- **HTTP**: `GET /api/v1/sites/{site_id}/wxrules` (ApiHost (api))
- **Notes**: Get List of Site WxLan Rules
- **Signature**: `ListSiteWxRules(Guid siteId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<WxlanRule>`
- **Error**: `SdkException<ListSiteWxRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSiteWxRule
- **HTTP**: `PUT /api/v1/sites/{site_id}/wxrules/{wxrule_id}` (ApiHost (api))
- **Notes**: Update Site WxLan Rule
- **Signature**: `UpdateSiteWxRule(Guid siteId, Guid wxruleId, WxlanRule? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WxlanRule`
- **Error**: `SdkException<UpdateSiteWxRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
