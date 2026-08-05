# Sites — operations

Accessor: `client.Sites` · Source: `Api/Sites.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteSite
- **HTTP**: `DELETE /api/v1/sites/{site_id}` (ApiHost (api))
- **Notes**: Delete Site
- **Signature**: `DeleteSite(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteInfo
- **HTTP**: `GET /api/v1/sites/{site_id}` (ApiHost (api))
- **Notes**: Provides information about the site, including its name, address, timezone, and associated templates. This endpoint is useful for retrieving the current configuration and details of a specific site.
- **Signature**: `GetSiteInfo(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Site`
- **Error**: `SdkException<GetSiteInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSiteInfo
- **HTTP**: `PUT /api/v1/sites/{site_id}` (ApiHost (api))
- **Notes**: Updates the configuration and metadata for an existing site. This endpoint allows modification of site properties including location details (address, coordinates, timezone), template associations (alarm, network, RF, security policy templates), site group memberships, and general information (name, notes). All fields are optional and only provided fields will be updated.
- **Signature**: `UpdateSiteInfo(Guid siteId, Site? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Site`
- **Error**: `SdkException<UpdateSiteInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
