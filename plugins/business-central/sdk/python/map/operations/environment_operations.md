<!-- Generated file — do not edit; regenerated with the SDK. -->

# EnvironmentOperations — operations

Accessor: `client.environment_operations` · Source: `dynamics_365_business_central/apis/environment_operations.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.environment_operations.list_all_environment_operations

- **Route**: `GET /applications/{applicationFamily}/environments/operations`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def list_all_environment_operations(*, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
- **Params**: `application_family` — path `applicationFamily`
- **Returns (parsed)**: `ApplicationsEnvironmentsOperationsResponse`
- **Returns (raw)**: `ApiResult[ApplicationsEnvironmentsOperationsResponse, ListAllEnvironmentOperationsErrorBody]`
- **Error**: `ListAllEnvironmentOperationsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterEnvironment` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApplicationsEnvironmentsOperationsResponse` | `dynamics_365_business_central/models/applications_environments_operations_response.py` |
| `ListAllEnvironmentOperationsErrorBody` | `dynamics_365_business_central/errors/list_all_environment_operations_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironment` | `dynamics_365_business_central/models/error_response_business_central_administration_center_environment.py` |

### client.environment_operations.list_environment_operations

- **Route**: `GET /environments/{environmentName}/operations`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def list_environment_operations(environment_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`
- **Params**: `environment_name` — path `environmentName`
- **Returns (parsed)**: `EnvironmentsOperationsResponse`
- **Returns (raw)**: `ApiResult[EnvironmentsOperationsResponse, ListEnvironmentOperationsErrorBody]`
- **Error**: `ListEnvironmentOperationsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterEnvironment` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EnvironmentsOperationsResponse` | `dynamics_365_business_central/models/environments_operations_response.py` |
| `ListEnvironmentOperationsErrorBody` | `dynamics_365_business_central/errors/list_environment_operations_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterEnvironment` | `dynamics_365_business_central/models/error_response_business_central_administration_center_environment.py` |

