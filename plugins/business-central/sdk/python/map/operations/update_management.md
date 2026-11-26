<!-- Generated file — do not edit; regenerated with the SDK. -->

# UpdateManagement — operations

Accessor: `client.update_management` · Source: `dynamics_365_business_central/apis/update_management.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.update_management.get_scheduled_upgrade

- **Route**: `GET /applications/{applicationFamily}/environments/{environmentName}/scheduledUpgrade`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def get_scheduled_upgrade(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName`
- **Returns (parsed)**: `ScheduledUpgrade`
- **Returns (raw)**: `ApiResult[ScheduledUpgrade, GetScheduledUpgradeErrorBody]`
- **Error**: `GetScheduledUpgradeErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScheduledUpgrade` | `dynamics_365_business_central/models/scheduled_upgrade.py` |
| `GetScheduledUpgradeErrorBody` | `dynamics_365_business_central/errors/get_scheduled_upgrade_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi` | `dynamics_365_business_central/models/error_response_business_central_administration_center_update_management_api.py` |

### client.update_management.set_update_settings

- **Route**: `PUT /applications/{applicationFamily}/environments/{environmentName}/settings/upgrade`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def set_update_settings(environment_name: str, body: UpdateSettings | UpdateSettingsDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`, `body`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SetUpdateSettingsErrorBody]`
- **Error**: `SetUpdateSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateSettings` | `dynamics_365_business_central/models/update_settings.py` |
| `UpdateSettingsDict` | `dynamics_365_business_central/models/update_settings.py` |
| `SetUpdateSettingsErrorBody` | `dynamics_365_business_central/errors/set_update_settings_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi` | `dynamics_365_business_central/models/error_response_business_central_administration_center_update_management_api.py` |

