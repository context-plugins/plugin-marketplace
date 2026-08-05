# SitesApplications — operations

Accessor: `client.SitesApplications` · Source: `Api/SitesApplications.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListSiteApps
- **HTTP**: `GET /api/v1/sites/{site_id}/apps` (ApiHost (api))
- **Notes**: Get List of Site Applications
- **Signature**: `ListSiteApps(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SiteApp>`
- **Error**: `SdkException<ListSiteAppsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
