# SitesLicenses — operations

Accessor: `client.SitesLicenses` · Source: `Api/SitesLicenses.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteLicenseUsage
- **HTTP**: `GET /api/v1/sites/{site_id}/licenses/usages` (ApiHost (api))
- **Notes**: This shows license usage (i.e. needed) based on the features enabled for the site.
- **Signature**: `GetSiteLicenseUsage(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LicenseUsageSite`
- **Error**: `SdkException<GetSiteLicenseUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
