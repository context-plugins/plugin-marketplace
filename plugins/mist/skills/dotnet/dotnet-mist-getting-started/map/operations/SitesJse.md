# SitesJse — operations

Accessor: `client.SitesJse` · Source: `Api/SitesJse.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteJseInfo
- **HTTP**: `GET /api/v1/sites/{site_id}/setting/jse/info` (ApiHost (api))
- **Notes**: Retrieves the list of JSE orgs associated with the account
- **Signature**: `GetSiteJseInfo(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountJseInfo`
- **Error**: `SdkException<GetSiteJseInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
