# SitesSetting — operations

Accessor: `client.SitesSetting` · Source: `Api/SitesSetting.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSiteWatchedStations
- **HTTP**: `POST /api/v1/sites/{site_id}/setting/watched_station` (ApiHost (api))
- **Notes**: This endpoint is to provide list of client macs for annotation as watched station. Retrieve the current clients list from `watched_station_url` under Site:Setting
- **Signature**: `CreateSiteWatchedStations(Guid siteId, MacAddresses? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `MacAddresses`
- **Error**: `SdkException<CreateSiteWatchedStationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSiteWirelessClientsAllowlist
- **HTTP**: `POST /api/v1/sites/{site_id}/setting/whitelist` (ApiHost (api))
- **Notes**: This endpoint is to provide list of client macs for annotation as whitelist. Retrieve the current clients list from `whitelist_url` under Site:Setting
- **Signature**: `CreateSiteWirelessClientsAllowlist(Guid siteId, MacAddresses? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `MacAddresses`
- **Error**: `SdkException<CreateSiteWirelessClientsAllowlistError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSiteWirelessClientsBlocklist
- **HTTP**: `POST /api/v1/sites/{site_id}/setting/blacklist` (ApiHost (api))
- **Notes**: This endpoint is to provide list of client macs for annotation blacklist. Retrieve the current clients list `blacklist_url` under Site:Setting
- **Signature**: `CreateSiteWirelessClientsBlocklist(Guid siteId, MacAddresses? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `MacAddresses`
- **Error**: `SdkException<CreateSiteWirelessClientsBlocklistError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteWatchedStations
- **HTTP**: `DELETE /api/v1/sites/{site_id}/setting/watched_station` (ApiHost (api))
- **Notes**: Delete Site Watched Station Clients
- **Signature**: `DeleteSiteWatchedStations(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteWatchedStationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteWirelessClientsAllowlist
- **HTTP**: `DELETE /api/v1/sites/{site_id}/setting/whitelist` (ApiHost (api))
- **Notes**: Delete Site Whitelist Station Clients
- **Signature**: `DeleteSiteWirelessClientsAllowlist(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteWirelessClientsAllowlistError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteWirelessClientsBlocklist
- **HTTP**: `DELETE /api/v1/sites/{site_id}/setting/blacklist` (ApiHost (api))
- **Notes**: Delete Site Blacklist Station Clients
- **Signature**: `DeleteSiteWirelessClientsBlocklist(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteWirelessClientsBlocklistError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteSetting
- **HTTP**: `GET /api/v1/sites/{site_id}/setting` (ApiHost (api))
- **Notes**: Get the Site Settings
- **Signature**: `GetSiteSetting(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SiteSetting`
- **Error**: `SdkException<GetSiteSettingError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteSettingDerived
- **HTTP**: `GET /api/v1/sites/{site_id}/setting/derived` (ApiHost (api))
- **Notes**: Get the Derived Site Settings, generated by merging the Org level templates (network templates, gateway templates) and the Site level configuration. If the same parameter is defined in both scopes, the Site level one is used. In addition, the Zoom and Teams accounts are also merged into the derived settings.
- **Signature**: `GetSiteSettingDerived(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SiteSettingDerived`
- **Error**: `SdkException<GetSiteSettingDerivedError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSiteSettings
- **HTTP**: `PUT /api/v1/sites/{site_id}/setting` (ApiHost (api))
- **Notes**: Update Site Settings
- **Signature**: `UpdateSiteSettings(Guid siteId, SiteSetting? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SiteSetting`
- **Error**: `SdkException<UpdateSiteSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
