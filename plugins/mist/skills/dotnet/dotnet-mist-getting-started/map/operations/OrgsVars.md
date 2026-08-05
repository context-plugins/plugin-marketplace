# OrgsVars — operations

Accessor: `client.OrgsVars` · Source: `Api/OrgsVars.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SearchOrgVars
- **HTTP**: `GET /api/v1/orgs/{org_id}/vars/search` (ApiHost (api))
- **Notes**: Search vars Example: /api/v1/orgs/{org_id}/vars/search?vars=*
- **Signature**: `SearchOrgVars(Guid orgId, string? siteId, string? var, VarSource? src, int? limit = 100, int? page = 1, string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `siteId` — nullable, no default → **must pass explicitly**
  - `var` — nullable, no default → **must pass explicitly**
  - `src` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `page` = 1, `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `site_id` ← `siteId`, `var` ← `var`, `src` ← `src`, `limit` ← `limit`, `page` ← `page`, `sort` ← `sort`
- **Returns**: `ResponseSearchVar`
- **Error**: `SdkException<SearchOrgVarsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
