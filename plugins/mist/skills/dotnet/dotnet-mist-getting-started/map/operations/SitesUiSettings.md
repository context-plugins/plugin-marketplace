# SitesUiSettings — operations

Accessor: `client.SitesUiSettings` · Source: `Api/SitesUiSettings.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSiteUiSettings
- **HTTP**: `POST /api/v1/sites/{site_id}/uisettings` (ApiHost (api))
- **Notes**: Create a Site UI settings/databoard
- **Signature**: `CreateSiteUiSettings(Guid siteId, UiSettings? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UiSettings`
- **Error**: `SdkException<CreateSiteUiSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteUiSetting
- **HTTP**: `DELETE /api/v1/sites/{site_id}/uisettings/{uisetting_id}` (ApiHost (api))
- **Notes**: Site UI settings
- **Signature**: `DeleteSiteUiSetting(Guid siteId, Guid uisettingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteUiSettingError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteUiSetting
- **HTTP**: `GET /api/v1/sites/{site_id}/uisettings/{uisetting_id}` (ApiHost (api))
- **Notes**: Site UI settings
- **Signature**: `GetSiteUiSetting(Guid siteId, Guid uisettingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UiSettings`
- **Error**: `SdkException<GetSiteUiSettingError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteUiSettingDerived
- **HTTP**: `GET /api/v1/sites/{site_id}/uisettings/derived` (ApiHost (api))
- **Notes**: Get both site UI settings(for_site=true) and org UI settings (for_site=false)
- **Signature**: `ListSiteUiSettingDerived(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UiSettings`
- **Error**: `SdkException<ListSiteUiSettingDerivedError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteUiSettings
- **HTTP**: `GET /api/v1/sites/{site_id}/uisettings` (ApiHost (api))
- **Notes**: List the Site UI settings/databoard
- **Signature**: `ListSiteUiSettings(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<UiSettings>`
- **Error**: `SdkException<ListSiteUiSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSiteUiSetting
- **HTTP**: `POST /api/v1/sites/{site_id}/uisettings/{uisetting_id}` (ApiHost (api))
- **Notes**: Site UI settings
- **Signature**: `UpdateSiteUiSetting(Guid siteId, Guid uisettingId, UiSettings? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UiSettings`
- **Error**: `SdkException<UpdateSiteUiSettingError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
