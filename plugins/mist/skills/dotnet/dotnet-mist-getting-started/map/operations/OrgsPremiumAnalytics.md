# OrgsPremiumAnalytics — operations

Accessor: `client.OrgsPremiumAnalytics` · Source: `Api/OrgsPremiumAnalytics.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListOrgPmaDashboards
- **HTTP**: `GET /api/v1/orgs/{org_id}/pma/dashboards` (ApiHost (api))
- **Notes**: Get List of premium analytics dashboards for this Org
- **Signature**: `ListOrgPmaDashboards(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<PmaDashboard>`
- **Error**: `SdkException<ListOrgPmaDashboardsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
