<!-- Generated file — do not edit; regenerated with the SDK. -->

# SupportSettingsApi — operations

Accessor: `client.support_settings_api` · Source: `microsoft_dynamics_nav/apis/support_settings_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.support_settings_api.get_support_settings

- **Route**: `GET /applications/{applicationFamily}/environments/{environmentName}/supportSettings`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def get_support_settings(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName`
- **Returns (parsed)**: `SupportSettings`
- **Returns (raw)**: `ApiResult[SupportSettings, GetSupportSettingsErrorBody]`
- **Error**: `GetSupportSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SupportSettings` | `microsoft_dynamics_nav/models/support_settings.py` |
| `GetSupportSettingsErrorBody` | `microsoft_dynamics_nav/errors/get_support_settings_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi` | `microsoft_dynamics_nav/models/error_response_business_central_administration_center_support_settings_api.py` |

