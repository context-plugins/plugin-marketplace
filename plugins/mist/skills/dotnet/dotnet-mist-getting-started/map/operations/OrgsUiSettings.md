# OrgsUiSettings — operations

Accessor: `client.OrgsUiSettings` · Source: `Api/OrgsUiSettings.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgUiSettings
- **HTTP**: `POST /api/v1/orgs/{org_id}/uisettings` (ApiHost (api))
- **Notes**: Create an Org UI settings/databoard
- **Signature**: `CreateOrgUiSettings(Guid orgId, OrgUiSettings? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `OrgUiSettings`
- **Error**: `SdkException<CreateOrgUiSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgUiSetting
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/uisettings/{uisetting_id}` (ApiHost (api))
- **Notes**: Delete an Org UI settings
- **Signature**: `DeleteOrgUiSetting(Guid orgId, Guid uisettingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgUiSettingError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgUiSetting
- **HTTP**: `GET /api/v1/orgs/{org_id}/uisettings/{uisetting_id}` (ApiHost (api))
- **Notes**: Get an Org UI settings/databoard
- **Signature**: `GetOrgUiSetting(Guid orgId, Guid uisettingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OrgUiSettings`
- **Error**: `SdkException<GetOrgUiSettingError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgUiSettings
- **HTTP**: `GET /api/v1/orgs/{org_id}/uisettings` (ApiHost (api))
- **Notes**: List the Orgs UI settings/databoard
- **Signature**: `ListOrgUiSettings(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<OrgUiSettings>`
- **Error**: `SdkException<ListOrgUiSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgUiSetting
- **HTTP**: `POST /api/v1/orgs/{org_id}/uisettings/{uisetting_id}` (ApiHost (api))
- **Notes**: Org UI settings/databoard
- **Signature**: `UpdateOrgUiSetting(Guid orgId, Guid uisettingId, OrgUiSettings? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `OrgUiSettings`
- **Error**: `SdkException<UpdateOrgUiSettingError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
