<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExtensionDeploymentStatusApi — operations

Accessor: `client.extension_deployment_status_api` · Source: `microsoft_dynamics_nav/apis/extension_deployment_status_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.extension_deployment_status_api.list_extension_deployment_statuses

- **Route**: `GET /companies({company_id})/extensionDeploymentStatus`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def list_extension_deployment_statuses(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path
- **Returns (parsed)**: `CompaniesApiExtensionDeploymentStatusResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiExtensionDeploymentStatusResponse, ListExtensionDeploymentStatusesErrorBody]`
- **Error**: `ListExtensionDeploymentStatusesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiExtensionDeploymentStatusResponse` | `microsoft_dynamics_nav/models/companies_api_extension_deployment_status_response.py` |
| `ListExtensionDeploymentStatusesErrorBody` | `microsoft_dynamics_nav/errors/list_extension_deployment_statuses_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

