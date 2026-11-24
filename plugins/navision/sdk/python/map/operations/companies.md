<!-- Generated file — do not edit; regenerated with the SDK. -->

# Companies — operations

Accessor: `client.companies` · Source: `microsoft_dynamics_nav/apis/companies.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.companies.create_automation_company

- **Route**: `POST /companies({company_id})/automationCompanies`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def create_automation_company(company_id: UUID, body: AutomationCompanyCreate | AutomationCompanyCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `body`
- **Params**: `company_id` — path · `body` — JSON body
- **Returns (parsed)**: `AutomationCompany`
- **Returns (raw)**: `ApiResult[AutomationCompany, CreateAutomationCompanyErrorBody]`
- **Error**: `CreateAutomationCompanyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutomationCompanyCreate` | `microsoft_dynamics_nav/models/automation_company_create.py` |
| `AutomationCompanyCreateDict` | `microsoft_dynamics_nav/models/automation_company_create.py` |
| `AutomationCompany` | `microsoft_dynamics_nav/models/automation_company.py` |
| `CreateAutomationCompanyErrorBody` | `microsoft_dynamics_nav/errors/create_automation_company_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.companies.delete_automation_company

- **Route**: `DELETE /companies({company_id})/automationCompanies({automationCompany_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def delete_automation_company(company_id: UUID, automation_company_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `automation_company_id`
- **Params**: `company_id` — path · `automation_company_id` — path `automationCompany_id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAutomationCompanyErrorBody]`
- **Error**: `DeleteAutomationCompanyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAutomationCompanyErrorBody` | `microsoft_dynamics_nav/errors/delete_automation_company_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.companies.get_automation_company

- **Route**: `GET /companies({company_id})/automationCompanies({automationCompany_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def get_automation_company(company_id: UUID, automation_company_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `automation_company_id`
- **Params**: `company_id` — path · `automation_company_id` — path `automationCompany_id`
- **Returns (parsed)**: `AutomationCompany`
- **Returns (raw)**: `ApiResult[AutomationCompany, GetAutomationCompanyErrorBody]`
- **Error**: `GetAutomationCompanyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutomationCompany` | `microsoft_dynamics_nav/models/automation_company.py` |
| `GetAutomationCompanyErrorBody` | `microsoft_dynamics_nav/errors/get_automation_company_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.companies.list_automation_companies

- **Route**: `GET /companies({company_id})/automationCompanies`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def list_automation_companies(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path
- **Returns (parsed)**: `CompaniesApiAutomationCompaniesResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiAutomationCompaniesResponse, ListAutomationCompaniesErrorBody]`
- **Error**: `ListAutomationCompaniesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiAutomationCompaniesResponse` | `microsoft_dynamics_nav/models/companies_api_automation_companies_response.py` |
| `ListAutomationCompaniesErrorBody` | `microsoft_dynamics_nav/errors/list_automation_companies_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.companies.list_companies

- **Route**: `GET /companies`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def list_companies(*, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `$filter`
- **Returns (parsed)**: `CompaniesResponse`
- **Returns (raw)**: `ApiResult[CompaniesResponse, ListCompaniesErrorBody]`
- **Error**: `ListCompaniesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesResponse` | `microsoft_dynamics_nav/models/companies_response.py` |
| `ListCompaniesErrorBody` | `microsoft_dynamics_nav/errors/list_companies_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.companies.update_automation_company

- **Route**: `PATCH /companies({company_id})/automationCompanies({automationCompany_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def update_automation_company(company_id: UUID, automation_company_id: UUID, if_match: str, body: AutomationCompanyUpdate | AutomationCompanyUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `automation_company_id`, `if_match`, `body`
- **Params**: `company_id` — path · `automation_company_id` — path `automationCompany_id` · `if_match` — header `If-Match` · `body` — JSON body
- **Returns (parsed)**: `AutomationCompany`
- **Returns (raw)**: `ApiResult[AutomationCompany, UpdateAutomationCompanyErrorBody]`
- **Error**: `UpdateAutomationCompanyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutomationCompanyUpdate` | `microsoft_dynamics_nav/models/automation_company_update.py` |
| `AutomationCompanyUpdateDict` | `microsoft_dynamics_nav/models/automation_company_update.py` |
| `AutomationCompany` | `microsoft_dynamics_nav/models/automation_company.py` |
| `UpdateAutomationCompanyErrorBody` | `microsoft_dynamics_nav/errors/update_automation_company_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

