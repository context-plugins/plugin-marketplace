# OrgsNacRules — operations

Accessor: `client.OrgsNacRules` · Source: `Api/OrgsNacRules.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgNacRule
- **HTTP**: `POST /api/v1/orgs/{org_id}/nacrules` (ApiHost (api))
- **Notes**: Create Org NAC Rule
- **Signature**: `CreateOrgNacRule(Guid orgId, NacRule? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NacRule`
- **Error**: `SdkException<CreateOrgNacRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgNacRule
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/nacrules/{nacrule_id}` (ApiHost (api))
- **Notes**: Delete Org NAC Rule
- **Signature**: `DeleteOrgNacRule(Guid orgId, Guid nacruleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgNacRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgNacRule
- **HTTP**: `GET /api/v1/orgs/{org_id}/nacrules/{nacrule_id}` (ApiHost (api))
- **Notes**: Get Org NAC Rule
- **Signature**: `GetOrgNacRule(Guid orgId, Guid nacruleId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NacRule`
- **Error**: `SdkException<GetOrgNacRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgNacRules
- **HTTP**: `GET /api/v1/orgs/{org_id}/nacrules` (ApiHost (api))
- **Notes**: Get List of Org NAC Rules
- **Signature**: `ListOrgNacRules(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<NacRule>`
- **Error**: `SdkException<ListOrgNacRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgNacRule
- **HTTP**: `PUT /api/v1/orgs/{org_id}/nacrules/{nacrule_id}` (ApiHost (api))
- **Notes**: Update Org NAC Rule
- **Signature**: `UpdateOrgNacRule(Guid orgId, Guid nacruleId, NacRule? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NacRule`
- **Error**: `SdkException<UpdateOrgNacRuleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
