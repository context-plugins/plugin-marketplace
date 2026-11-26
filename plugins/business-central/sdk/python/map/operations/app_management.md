<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppManagement — operations

Accessor: `client.app_management` · Source: `dynamics_365_business_central/apis/app_management.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.app_management.install_app

- **Route**: `POST /applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/install`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def install_app(environment_name: str, app_id: UUID, body: AppInstallRequest | AppInstallRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`, `app_id`, `body`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName` · `app_id` — path `appId` · `body` — JSON body
- **Returns (parsed)**: `EnvironmentOperation`
- **Returns (raw)**: `ApiResult[EnvironmentOperation, InstallAppErrorBody]`
- **Error**: `InstallAppErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppInstallRequest` | `dynamics_365_business_central/models/app_install_request.py` |
| `AppInstallRequestDict` | `dynamics_365_business_central/models/app_install_request.py` |
| `EnvironmentOperation` | `dynamics_365_business_central/models/environment_operation.py` |
| `InstallAppErrorBody` | `dynamics_365_business_central/errors/install_app_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `dynamics_365_business_central/models/error_response_business_central_administration_center_app_management_api.py` |

### client.app_management.list_installed_apps

- **Route**: `GET /applications/{applicationFamily}/environments/{environmentName}/apps`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def list_installed_apps(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName`
- **Returns (parsed)**: `ApplicationsEnvironmentsAppsResponse`
- **Returns (raw)**: `ApiResult[ApplicationsEnvironmentsAppsResponse, ListInstalledAppsErrorBody]`
- **Error**: `ListInstalledAppsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApplicationsEnvironmentsAppsResponse` | `dynamics_365_business_central/models/applications_environments_apps_response.py` |
| `ListInstalledAppsErrorBody` | `dynamics_365_business_central/errors/list_installed_apps_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `dynamics_365_business_central/models/error_response_business_central_administration_center_app_management_api.py` |

### client.app_management.uninstall_app

- **Route**: `POST /applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/uninstall`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def uninstall_app(environment_name: str, app_id: UUID, *, application_family: str = "BusinessCentral", body: ApplicationsEnvironmentsAppsAppIdUninstallRequest | ApplicationsEnvironmentsAppsAppIdUninstallRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`, `app_id`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName` · `app_id` — path `appId` · `body` — JSON body
- **Returns (parsed)**: `EnvironmentOperation`
- **Returns (raw)**: `ApiResult[EnvironmentOperation, UninstallAppErrorBody]`
- **Error**: `UninstallAppErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApplicationsEnvironmentsAppsAppIdUninstallRequest` | `dynamics_365_business_central/models/applications_environments_apps_app_id_uninstall_request.py` |
| `ApplicationsEnvironmentsAppsAppIdUninstallRequestDict` | `dynamics_365_business_central/models/applications_environments_apps_app_id_uninstall_request.py` |
| `EnvironmentOperation` | `dynamics_365_business_central/models/environment_operation.py` |
| `UninstallAppErrorBody` | `dynamics_365_business_central/errors/uninstall_app_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `dynamics_365_business_central/models/error_response_business_central_administration_center_app_management_api.py` |

### client.app_management.update_app

- **Route**: `POST /applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/update`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def update_app(environment_name: str, app_id: UUID, body: AppUpdateRequest | AppUpdateRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`, `app_id`, `body`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName` · `app_id` — path `appId` · `body` — JSON body
- **Returns (parsed)**: `EnvironmentOperation`
- **Returns (raw)**: `ApiResult[EnvironmentOperation, UpdateAppErrorBody]`
- **Error**: `UpdateAppErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppUpdateRequest` | `dynamics_365_business_central/models/app_update_request.py` |
| `AppUpdateRequestDict` | `dynamics_365_business_central/models/app_update_request.py` |
| `EnvironmentOperation` | `dynamics_365_business_central/models/environment_operation.py` |
| `UpdateAppErrorBody` | `dynamics_365_business_central/errors/update_app_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterAppManagementApi` | `dynamics_365_business_central/models/error_response_business_central_administration_center_app_management_api.py` |

