# OrgsWxRules — operations

Accessor: `client.OrgsWxRules` · Source: `Api/OrgsWxRules.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgWxRule
- **HTTP**: `POST /api/v1/orgs/{org_id}/wxrules` (ApiHost (api))
- **Notes**: Create Org WxRule
- **Signature**: `CreateOrgWxRule(Guid orgId, WxlanRule? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WxlanRule`
- **Error**: `SdkException<CreateOrgWxRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgWxRule
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/wxrules/{wxrule_id}` (ApiHost (api))
- **Notes**: Delete Org WxRule
- **Signature**: `DeleteOrgWxRule(Guid orgId, Guid wxruleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgWxRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgWxRule
- **HTTP**: `GET /api/v1/orgs/{org_id}/wxrules/{wxrule_id}` (ApiHost (api))
- **Notes**: Get Org WxRule Details
- **Signature**: `GetOrgWxRule(Guid orgId, Guid wxruleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WxlanRule`
- **Error**: `SdkException<GetOrgWxRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgWxRules
- **HTTP**: `GET /api/v1/orgs/{org_id}/wxrules` (ApiHost (api))
- **Notes**: Get List of Org WxRules
- **Signature**: `ListOrgWxRules(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<WxlanRule>`
- **Error**: `SdkException<ListOrgWxRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgWxRule
- **HTTP**: `PUT /api/v1/orgs/{org_id}/wxrules/{wxrule_id}` (ApiHost (api))
- **Notes**: Update Org WxRule
- **Signature**: `UpdateOrgWxRule(Guid orgId, Guid wxruleId, WxlanRule? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WxlanRule`
- **Error**: `SdkException<UpdateOrgWxRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
