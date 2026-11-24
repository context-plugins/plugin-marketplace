<!-- Generated file — do not edit; regenerated with the SDK. -->

# Settings — operations

Accessor: `client.settings` · Source: `doi_t/apis/settings.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.settings.create_custom_theme

- **Route**: `POST /analytics/v1/settings/themes`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_custom_theme(body: CreateCustomThemeRequest | CreateCustomThemeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CustomTheme`
- **Returns (raw)**: `ApiResult[CustomTheme, CreateCustomThemeErrorBody]`
- **Error**: `CreateCustomThemeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCustomThemeRequest` | `doi_t/models/create_custom_theme_request.py` |
| `CreateCustomThemeRequestDict` | `doi_t/models/create_custom_theme_request.py` |
| `CustomTheme` | `doi_t/models/custom_theme.py` |
| `CreateCustomThemeErrorBody` | `doi_t/errors/create_custom_theme_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.settings.delete_custom_theme

- **Route**: `DELETE /analytics/v1/settings/themes/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_custom_theme(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteCustomThemeErrorBody]`
- **Error**: `DeleteCustomThemeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteCustomThemeErrorBody` | `doi_t/errors/delete_custom_theme_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.settings.get_active_theme

- **Route**: `GET /analytics/v1/settings/active-theme`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_active_theme(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ActiveTheme`
- **Returns (raw)**: `ApiResult[ActiveTheme, GetActiveThemeErrorBody]`
- **Error**: `GetActiveThemeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ActiveTheme` | `doi_t/models/active_theme.py` |
| `GetActiveThemeErrorBody` | `doi_t/errors/get_active_theme_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.settings.get_custom_theme

- **Route**: `GET /analytics/v1/settings/themes/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_custom_theme(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `CustomTheme`
- **Returns (raw)**: `ApiResult[CustomTheme, GetCustomThemeErrorBody]`
- **Error**: `GetCustomThemeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomTheme` | `doi_t/models/custom_theme.py` |
| `GetCustomThemeErrorBody` | `doi_t/errors/get_custom_theme_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.settings.list_custom_themes

- **Route**: `GET /analytics/v1/settings/themes`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_custom_themes(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `AnalyticsV1SettingsThemesResponse`
- **Returns (raw)**: `ApiResult[AnalyticsV1SettingsThemesResponse, ListCustomThemesErrorBody]`
- **Error**: `ListCustomThemesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsV1SettingsThemesResponse` | `doi_t/models/analytics_v1_settings_themes_response.py` |
| `ListCustomThemesErrorBody` | `doi_t/errors/list_custom_themes_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.settings.set_active_theme

- **Route**: `PUT /analytics/v1/settings/active-theme`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def set_active_theme(body: SetActiveThemeRequest | SetActiveThemeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ActiveTheme`
- **Returns (raw)**: `ApiResult[ActiveTheme, SetActiveThemeErrorBody]`
- **Error**: `SetActiveThemeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetActiveThemeRequest` | `doi_t/models/set_active_theme_request.py` |
| `SetActiveThemeRequestDict` | `doi_t/models/set_active_theme_request.py` |
| `ActiveTheme` | `doi_t/models/active_theme.py` |
| `SetActiveThemeErrorBody` | `doi_t/errors/set_active_theme_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.settings.update_custom_theme

- **Route**: `PATCH /analytics/v1/settings/themes/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_custom_theme(id_: str, body: UpdateCustomThemeRequest | UpdateCustomThemeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `CustomTheme`
- **Returns (raw)**: `ApiResult[CustomTheme, UpdateCustomThemeErrorBody]`
- **Error**: `UpdateCustomThemeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCustomThemeRequest` | `doi_t/models/update_custom_theme_request.py` |
| `UpdateCustomThemeRequestDict` | `doi_t/models/update_custom_theme_request.py` |
| `CustomTheme` | `doi_t/models/custom_theme.py` |
| `UpdateCustomThemeErrorBody` | `doi_t/errors/update_custom_theme_error.py` |
| `Error` | `doi_t/models/error.py` |

