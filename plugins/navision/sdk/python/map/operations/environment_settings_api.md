<!-- Generated file — do not edit; regenerated with the SDK. -->

# EnvironmentSettingsApi — operations

Accessor: `client.environment_settings_api` · Source: `microsoft_dynamics_nav/apis/environment_settings_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.environment_settings_api.get_environment_settings

- **Route**: `GET /applications/{applicationFamily}/environments/{environmentName}/settings`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def get_environment_settings(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName`
- **Returns (parsed)**: `EnvironmentSettings`
- **Returns (raw)**: `ApiResult[EnvironmentSettings, GetEnvironmentSettingsErrorBody]`
- **Error**: `GetEnvironmentSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EnvironmentSettings` | `microsoft_dynamics_nav/models/environment_settings.py` |
| `GetEnvironmentSettingsErrorBody` | `microsoft_dynamics_nav/errors/get_environment_settings_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings` | `microsoft_dynamics_nav/models/error_response_business_central_administration_center_environment_settings.py` |

### client.environment_settings_api.set_app_insights_key

- **Route**: `POST /applications/{applicationFamily}/environments/{environmentName}/settings/appInsightsKey`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def set_app_insights_key(environment_name: str, body: ApplicationsEnvironmentsSettingsAppInsightsKeyRequest | ApplicationsEnvironmentsSettingsAppInsightsKeyRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`, `body`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SetAppInsightsKeyErrorBody]`
- **Error**: `SetAppInsightsKeyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApplicationsEnvironmentsSettingsAppInsightsKeyRequest` | `microsoft_dynamics_nav/models/applications_environments_settings_app_insights_key_request.py` |
| `ApplicationsEnvironmentsSettingsAppInsightsKeyRequestDict` | `microsoft_dynamics_nav/models/applications_environments_settings_app_insights_key_request.py` |
| `SetAppInsightsKeyErrorBody` | `microsoft_dynamics_nav/errors/set_app_insights_key_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings` | `microsoft_dynamics_nav/models/error_response_business_central_administration_center_environment_settings.py` |

