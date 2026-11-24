<!-- Generated file — do not edit; regenerated with the SDK. -->

# Environments — operations

Accessor: `client.environments` · Source: `microsoft_dynamics_nav/apis/environments.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.environments.copy_environment

- **Route**: `POST /applications/{applicationFamily}/environments/{environmentName}/copy`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def copy_environment(environment_name: str, body: CopyEnvironmentRequest | CopyEnvironmentRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`, `body`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName` · `body` — JSON body
- **Returns (parsed)**: `EnvironmentModel`
- **Returns (raw)**: `ApiResult[EnvironmentModel, CopyEnvironmentErrorBody]`
- **Error**: `CopyEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CopyEnvironmentRequest` | `microsoft_dynamics_nav/models/copy_environment_request.py` |
| `CopyEnvironmentRequestDict` | `microsoft_dynamics_nav/models/copy_environment_request.py` |
| `EnvironmentModel` | `microsoft_dynamics_nav/models/environment_model.py` |
| `CopyEnvironmentErrorBody` | `microsoft_dynamics_nav/errors/copy_environment_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py` |

### client.environments.create_environment

- **Route**: `PUT /applications/{applicationFamily}/environments/{environmentName}`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def create_environment(environment_name: str, body: CreateEnvironmentRequest | CreateEnvironmentRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`, `body`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName` · `body` — JSON body
- **Returns (parsed)**: `EnvironmentModel`
- **Returns (raw)**: `ApiResult[EnvironmentModel, CreateEnvironmentErrorBody]`
- **Error**: `CreateEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` [400, 401, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateEnvironmentRequest` | `microsoft_dynamics_nav/models/create_environment_request.py` |
| `CreateEnvironmentRequestDict` | `microsoft_dynamics_nav/models/create_environment_request.py` |
| `EnvironmentModel` | `microsoft_dynamics_nav/models/environment_model.py` |
| `CreateEnvironmentErrorBody` | `microsoft_dynamics_nav/errors/create_environment_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py` |

### client.environments.delete_environment

- **Route**: `DELETE /applications/{applicationFamily}/environments/{environmentName}`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def delete_environment(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName`
- **Returns (parsed)**: `EnvironmentOperation`
- **Returns (raw)**: `ApiResult[EnvironmentOperation, DeleteEnvironmentErrorBody]`
- **Error**: `DeleteEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EnvironmentOperation` | `microsoft_dynamics_nav/models/environment_operation.py` |
| `DeleteEnvironmentErrorBody` | `microsoft_dynamics_nav/errors/delete_environment_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py` |

### client.environments.get_available_restore_periods

- **Route**: `GET /applications/{applicationFamily}/environments/{environmentName}/availableRestorePeriods`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def get_available_restore_periods(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName`
- **Returns (parsed)**: `ApplicationsEnvironmentsAvailableRestorePeriodsResponse`
- **Returns (raw)**: `ApiResult[ApplicationsEnvironmentsAvailableRestorePeriodsResponse, GetAvailableRestorePeriodsErrorBody]`
- **Error**: `GetAvailableRestorePeriodsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApplicationsEnvironmentsAvailableRestorePeriodsResponse` | `microsoft_dynamics_nav/models/applications_environments_available_restore_periods_response.py` |
| `GetAvailableRestorePeriodsErrorBody` | `microsoft_dynamics_nav/errors/get_available_restore_periods_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py` |

### client.environments.get_environment

- **Route**: `GET /applications/{applicationFamily}/environments/{environmentName}`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def get_environment(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName`
- **Returns (parsed)**: `EnvironmentModel`
- **Returns (raw)**: `ApiResult[EnvironmentModel, GetEnvironmentErrorBody]`
- **Error**: `GetEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EnvironmentModel` | `microsoft_dynamics_nav/models/environment_model.py` |
| `GetEnvironmentErrorBody` | `microsoft_dynamics_nav/errors/get_environment_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py` |

### client.environments.list_all_environments

- **Route**: `GET /applications/environments`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def list_all_environments(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApplicationsEnvironmentsResponse`
- **Returns (raw)**: `ApiResult[ApplicationsEnvironmentsResponse, ListAllEnvironmentsErrorBody]`
- **Error**: `ListAllEnvironmentsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApplicationsEnvironmentsResponse` | `microsoft_dynamics_nav/models/applications_environments_response.py` |
| `ListAllEnvironmentsErrorBody` | `microsoft_dynamics_nav/errors/list_all_environments_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py` |

### client.environments.list_environments

- **Route**: `GET /applications/{applicationFamily}/environments`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def list_environments(*, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
- **Params**: `application_family` — path `applicationFamily`
- **Returns (parsed)**: `ApplicationsEnvironmentsResponse`
- **Returns (raw)**: `ApiResult[ApplicationsEnvironmentsResponse, ListEnvironmentsErrorBody]`
- **Error**: `ListEnvironmentsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApplicationsEnvironmentsResponse` | `microsoft_dynamics_nav/models/applications_environments_response.py` |
| `ListEnvironmentsErrorBody` | `microsoft_dynamics_nav/errors/list_environments_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py` |

### client.environments.recover_environment

- **Route**: `POST /applications/{applicationFamily}/environments/{environmentName}/recover`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def recover_environment(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName`
- **Returns (parsed)**: `EnvironmentOperation`
- **Returns (raw)**: `ApiResult[EnvironmentOperation, RecoverEnvironmentErrorBody]`
- **Error**: `RecoverEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EnvironmentOperation` | `microsoft_dynamics_nav/models/environment_operation.py` |
| `RecoverEnvironmentErrorBody` | `microsoft_dynamics_nav/errors/recover_environment_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py` |

### client.environments.rename_environment

- **Route**: `POST /applications/{applicationFamily}/environments/{environmentName}/rename`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def rename_environment(environment_name: str, body: ApplicationsEnvironmentsRenameRequest | ApplicationsEnvironmentsRenameRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`, `body`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName` · `body` — JSON body
- **Returns (parsed)**: `EnvironmentOperation`
- **Returns (raw)**: `ApiResult[EnvironmentOperation, RenameEnvironmentErrorBody]`
- **Error**: `RenameEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApplicationsEnvironmentsRenameRequest` | `microsoft_dynamics_nav/models/applications_environments_rename_request.py` |
| `ApplicationsEnvironmentsRenameRequestDict` | `microsoft_dynamics_nav/models/applications_environments_rename_request.py` |
| `EnvironmentOperation` | `microsoft_dynamics_nav/models/environment_operation.py` |
| `RenameEnvironmentErrorBody` | `microsoft_dynamics_nav/errors/rename_environment_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py` |

### client.environments.restore_environment

- **Route**: `POST /applications/{applicationFamily}/environments/{environmentName}/restore`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def restore_environment(environment_name: str, body: RestoreEnvironmentRequest | RestoreEnvironmentRequestDict, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`, `body`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName` · `body` — JSON body
- **Returns (parsed)**: `EnvironmentOperation`
- **Returns (raw)**: `ApiResult[EnvironmentOperation, RestoreEnvironmentErrorBody]`
- **Error**: `RestoreEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RestoreEnvironmentRequest` | `microsoft_dynamics_nav/models/restore_environment_request.py` |
| `RestoreEnvironmentRequestDict` | `microsoft_dynamics_nav/models/restore_environment_request.py` |
| `EnvironmentOperation` | `microsoft_dynamics_nav/models/environment_operation.py` |
| `RestoreEnvironmentErrorBody` | `microsoft_dynamics_nav/errors/restore_environment_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi` | `microsoft_dynamics_nav/models/error_response_business_central_administration_center_environments_api.py` |

