<!-- Generated file — do not edit; regenerated with the SDK. -->

# Extensions — operations

Accessor: `client.extensions` · Source: `dynamics_365_business_central/apis/extensions.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.extensions.install_extension

- **Route**: `POST /companies({company_id})/extensions({extension_id})/Microsoft.NAV.install`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def install_extension(company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `extension_id`
- **Params**: `company_id` — path · `extension_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, InstallExtensionErrorBody]`
- **Error**: `InstallExtensionErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InstallExtensionErrorBody` | `dynamics_365_business_central/errors/install_extension_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.extensions.list_extensions

- **Route**: `GET /companies({company_id})/extensions`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def list_extensions(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path
- **Returns (parsed)**: `CompaniesApiExtensionsResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiExtensionsResponse, ListExtensionsErrorBody]`
- **Error**: `ListExtensionsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiExtensionsResponse` | `dynamics_365_business_central/models/companies_api_extensions_response.py` |
| `ListExtensionsErrorBody` | `dynamics_365_business_central/errors/list_extensions_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.extensions.uninstall_and_delete_extension_data

- **Route**: `POST /companies({company_id})/extensions({extension_id})/Microsoft.NAV.uninstallAndDeleteExtensionData`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def uninstall_and_delete_extension_data(company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `extension_id`
- **Params**: `company_id` — path · `extension_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UninstallAndDeleteExtensionDataErrorBody]`
- **Error**: `UninstallAndDeleteExtensionDataErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UninstallAndDeleteExtensionDataErrorBody` | `dynamics_365_business_central/errors/uninstall_and_delete_extension_data_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.extensions.uninstall_extension

- **Route**: `POST /companies({company_id})/extensions({extension_id})/Microsoft.NAV.uninstall`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def uninstall_extension(company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `extension_id`
- **Params**: `company_id` — path · `extension_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UninstallExtensionErrorBody]`
- **Error**: `UninstallExtensionErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UninstallExtensionErrorBody` | `dynamics_365_business_central/errors/uninstall_extension_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.extensions.unpublish_extension

- **Route**: `POST /companies({company_id})/extensions({extension_id})/Microsoft.NAV.unpublish`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def unpublish_extension(company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `extension_id`
- **Params**: `company_id` — path · `extension_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UnpublishExtensionErrorBody]`
- **Error**: `UnpublishExtensionErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UnpublishExtensionErrorBody` | `dynamics_365_business_central/errors/unpublish_extension_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

