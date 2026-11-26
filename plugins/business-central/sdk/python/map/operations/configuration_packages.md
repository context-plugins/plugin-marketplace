<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConfigurationPackages — operations

Accessor: `client.configuration_packages` · Source: `dynamics_365_business_central/apis/configuration_packages.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.configuration_packages.apply_configuration_package

- **Route**: `POST /companies({company_id})/configurationPackages({package_id})/Microsoft.NAV.apply`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def apply_configuration_package(company_id: UUID, package_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `package_id`
- **Params**: `company_id` — path · `package_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ApplyConfigurationPackageErrorBody]`
- **Error**: `ApplyConfigurationPackageErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApplyConfigurationPackageErrorBody` | `dynamics_365_business_central/errors/apply_configuration_package_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.configuration_packages.create_configuration_package

- **Route**: `POST /companies({company_id})/configurationPackages`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def create_configuration_package(company_id: UUID, body: CompaniesApiConfigurationPackagesRequest | CompaniesApiConfigurationPackagesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `body`
- **Params**: `company_id` — path · `body` — JSON body
- **Returns (parsed)**: `ConfigurationPackage`
- **Returns (raw)**: `ApiResult[ConfigurationPackage, CreateConfigurationPackageErrorBody]`
- **Error**: `CreateConfigurationPackageErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiConfigurationPackagesRequest` | `dynamics_365_business_central/models/companies_api_configuration_packages_request.py` |
| `CompaniesApiConfigurationPackagesRequestDict` | `dynamics_365_business_central/models/companies_api_configuration_packages_request.py` |
| `ConfigurationPackage` | `dynamics_365_business_central/models/configuration_package.py` |
| `CreateConfigurationPackageErrorBody` | `dynamics_365_business_central/errors/create_configuration_package_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.configuration_packages.import_configuration_package

- **Route**: `POST /companies({company_id})/configurationPackages({package_id})/Microsoft.NAV.import`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def import_configuration_package(company_id: UUID, package_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `package_id`
- **Params**: `company_id` — path · `package_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ImportConfigurationPackageErrorBody]`
- **Error**: `ImportConfigurationPackageErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ImportConfigurationPackageErrorBody` | `dynamics_365_business_central/errors/import_configuration_package_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.configuration_packages.list_configuration_packages

- **Route**: `GET /companies({company_id})/configurationPackages`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def list_configuration_packages(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path
- **Returns (parsed)**: `CompaniesApiConfigurationPackagesResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiConfigurationPackagesResponse, ListConfigurationPackagesErrorBody]`
- **Error**: `ListConfigurationPackagesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiConfigurationPackagesResponse` | `dynamics_365_business_central/models/companies_api_configuration_packages_response.py` |
| `ListConfigurationPackagesErrorBody` | `dynamics_365_business_central/errors/list_configuration_packages_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.configuration_packages.upload_configuration_package_file

- **Route**: `PATCH /companies({company_id})/configurationPackages({package_id})/file('{code}')/content`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def upload_configuration_package_file(company_id: UUID, package_id: UUID, code: str, if_match: str, body: FileInput, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `package_id`, `code`, `if_match`, `body`
- **Params**: `company_id` — path · `package_id` — path · `code` — path · `if_match` — header `If-Match` · `body` — binary body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UploadConfigurationPackageFileErrorBody]`
- **Error**: `UploadConfigurationPackageFileErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UploadConfigurationPackageFileErrorBody` | `dynamics_365_business_central/errors/upload_configuration_package_file_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

