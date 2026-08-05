# SitesNetworkTemplates — operations

Accessor: `client.SitesNetworkTemplates` · Source: `Api/SitesNetworkTemplates.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListSiteNetworkTemplatesDerived
- **HTTP**: `GET /api/v1/sites/{site_id}/networktemplates/derived` (ApiHost (api))
- **Notes**: Get the list of derived Network Templates a Site
- **Signature**: `ListSiteNetworkTemplatesDerived(Guid siteId, bool? resolve, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `resolve` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `resolve` ← `resolve`
- **Returns**: `NetworkTemplate`
- **Error**: `SdkException<ListSiteNetworkTemplatesDerivedError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
