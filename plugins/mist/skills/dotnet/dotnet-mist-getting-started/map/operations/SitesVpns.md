# SitesVpns — operations

Accessor: `client.SitesVpns` · Source: `Api/SitesVpns.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListSiteVpnsDerived
- **HTTP**: `GET /api/v1/sites/{site_id}/vpns/derived` (ApiHost (api))
- **Notes**: Get the list of derived VPNs for a site
- **Signature**: `ListSiteVpnsDerived(Guid siteId, bool? resolve = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `resolve` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `resolve` ← `resolve`
- **Returns**: `IReadOnlyList<Vpn>`
- **Error**: `SdkException<ListSiteVpnsDerivedError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
