<!-- Generated file — do not edit; regenerated with the SDK. -->

# Storage — operations

Accessor: `client.storage` · Source: `dynamics_365_business_central/apis/storage.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.storage.get_all_environments_storage

- **Route**: `GET /environments/usedstorage`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def get_all_environments_storage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `EnvironmentsUsedstorageResponse`
- **Returns (raw)**: `ApiResult[EnvironmentsUsedstorageResponse, GetAllEnvironmentsStorageErrorBody]`
- **Error**: `GetAllEnvironmentsStorageErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterStorageApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EnvironmentsUsedstorageResponse` | `dynamics_365_business_central/models/environments_usedstorage_response.py` |
| `GetAllEnvironmentsStorageErrorBody` | `dynamics_365_business_central/errors/get_all_environments_storage_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterStorageApi` | `dynamics_365_business_central/models/error_response_business_central_administration_center_storage_api.py` |

### client.storage.get_environment_storage

- **Route**: `GET /applications/{applicationFamily}/environments/{environmentName}/usedstorage`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def get_environment_storage(environment_name: str, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment_name`
- **Params**: `application_family` — path `applicationFamily` · `environment_name` — path `environmentName`
- **Returns (parsed)**: `UsedStorage`
- **Returns (raw)**: `ApiResult[UsedStorage, GetEnvironmentStorageErrorBody]`
- **Error**: `GetEnvironmentStorageErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterStorageApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsedStorage` | `dynamics_365_business_central/models/used_storage.py` |
| `GetEnvironmentStorageErrorBody` | `dynamics_365_business_central/errors/get_environment_storage_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterStorageApi` | `dynamics_365_business_central/models/error_response_business_central_administration_center_storage_api.py` |

### client.storage.get_quotas

- **Route**: `GET /environments/quotas`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_administration_center_app_management_api`
- **Signature**: `def get_quotas(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Quotas`
- **Returns (raw)**: `ApiResult[Quotas, GetQuotasErrorBody]`
- **Error**: `GetQuotasErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBusinessCentralAdministrationCenterStorageApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Quotas` | `dynamics_365_business_central/models/quotas.py` |
| `GetQuotasErrorBody` | `dynamics_365_business_central/errors/get_quotas_error.py` |
| `ErrorResponseBusinessCentralAdministrationCenterStorageApi` | `dynamics_365_business_central/models/error_response_business_central_administration_center_storage_api.py` |

