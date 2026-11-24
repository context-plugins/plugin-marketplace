<!-- Generated file — do not edit; regenerated with the SDK. -->

# Policies — operations

Accessor: `client.policies` · Source: `dope_security/apis/policies.py` · 16 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.policies.create_policy

- **Route**: `POST /policies/{policy_name}`
- **Auth**: `bearer_auth`
- **Signature**: `def create_policy(policy_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_name`
- **Params**: `policy_name` — path
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, CreatePolicyErrorBody]`
- **Error**: `CreatePolicyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `CreatePolicyErrorBody` | `dope_security/errors/create_policy_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.policies.delete_custom_application_bypass

- **Route**: `DELETE /policies/{policy_name}/bypass/applications`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_custom_application_bypass(policy_name: str, body: PoliciesBypassApplicationsRequest1 | PoliciesBypassApplicationsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_name`, `body`
- **Params**: `policy_name` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, DeleteCustomApplicationBypassErrorBody]`
- **Error**: `DeleteCustomApplicationBypassErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PoliciesBypassApplicationsRequest1` | `dope_security/models/policies_bypass_applications_request1.py` |
| `PoliciesBypassApplicationsRequest1Dict` | `dope_security/models/policies_bypass_applications_request1.py` |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `DeleteCustomApplicationBypassErrorBody` | `dope_security/errors/delete_custom_application_bypass_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.policies.delete_custom_url_bypass

- **Route**: `DELETE /policies/{policy_name}/bypass/urls`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_custom_url_bypass(policy_name: str, body: PoliciesBypassUrlsRequest1 | PoliciesBypassUrlsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_name`, `body`
- **Params**: `policy_name` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, DeleteCustomUrlBypassErrorBody]`
- **Error**: `DeleteCustomUrlBypassErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PoliciesBypassUrlsRequest1` | `dope_security/models/policies_bypass_urls_request1.py` |
| `PoliciesBypassUrlsRequest1Dict` | `dope_security/models/policies_bypass_urls_request1.py` |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `DeleteCustomUrlBypassErrorBody` | `dope_security/errors/delete_custom_url_bypass_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.policies.delete_policy

- **Route**: `DELETE /policies/{policy_name}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_policy(policy_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_name`
- **Params**: `policy_name` — path
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, DeletePolicyErrorBody]`
- **Error**: `DeletePolicyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `DeletePolicyErrorBody` | `dope_security/errors/delete_policy_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.policies.get_application_bypass

- **Route**: `GET /policies/{policy_name}/bypass/applications`
- **Auth**: `bearer_auth`
- **Signature**: `def get_application_bypass(policy_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_name`
- **Params**: `policy_name` — path
- **Returns (parsed)**: `PoliciesBypassApplicationsResponse`
- **Returns (raw)**: `ApiResult[PoliciesBypassApplicationsResponse, GetApplicationBypassErrorBody]`
- **Error**: `GetApplicationBypassErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PoliciesBypassApplicationsResponse` | `dope_security/models/policies_bypass_applications_response.py` |
| `GetApplicationBypassErrorBody` | `dope_security/errors/get_application_bypass_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.policies.get_policy_assignments

- **Route**: `GET /policies/{policy_name}/assignments`
- **Auth**: `bearer_auth`
- **Signature**: `def get_policy_assignments(policy_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_name`
- **Params**: `policy_name` — path
- **Returns (parsed)**: `PoliciesAssignmentsResponse`
- **Returns (raw)**: `ApiResult[PoliciesAssignmentsResponse, GetPolicyAssignmentsErrorBody]`
- **Error**: `GetPolicyAssignmentsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PoliciesAssignmentsResponse` | `dope_security/models/policies_assignments_response.py` |
| `GetPolicyAssignmentsErrorBody` | `dope_security/errors/get_policy_assignments_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.policies.get_policy_content

- **Route**: `GET /policies/{policy_name}/content`
- **Auth**: `bearer_auth`
- **Signature**: `def get_policy_content(policy_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_name`
- **Params**: `policy_name` — path
- **Returns (parsed)**: `PolicyContentResponse`
- **Returns (raw)**: `ApiResult[PolicyContentResponse, GetPolicyContentErrorBody]`
- **Error**: `GetPolicyContentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PolicyContentResponse` | `dope_security/models/policy_content_response.py` |
| `GetPolicyContentErrorBody` | `dope_security/errors/get_policy_content_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.policies.get_ssl_inspection

- **Route**: `GET /policies/{policy_name}/ssl-inspection`
- **Auth**: `bearer_auth`
- **Signature**: `def get_ssl_inspection(policy_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_name`
- **Params**: `policy_name` — path
- **Returns (parsed)**: `PoliciesSslInspectionResponse`
- **Returns (raw)**: `ApiResult[PoliciesSslInspectionResponse, GetSslInspectionErrorBody]`
- **Error**: `GetSslInspectionErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PoliciesSslInspectionResponse` | `dope_security/models/policies_ssl_inspection_response.py` |
| `GetSslInspectionErrorBody` | `dope_security/errors/get_ssl_inspection_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.policies.get_url_bypass

- **Route**: `GET /policies/{policy_name}/bypass/urls`
- **Auth**: `bearer_auth`
- **Signature**: `def get_url_bypass(policy_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_name`
- **Params**: `policy_name` — path
- **Returns (parsed)**: `PoliciesBypassUrlsResponse`
- **Returns (raw)**: `ApiResult[PoliciesBypassUrlsResponse, GetUrlBypassErrorBody]`
- **Error**: `GetUrlBypassErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PoliciesBypassUrlsResponse` | `dope_security/models/policies_bypass_urls_response.py` |
| `GetUrlBypassErrorBody` | `dope_security/errors/get_url_bypass_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.policies.list_policies

- **Route**: `GET /policies`
- **Auth**: `bearer_auth`
- **Signature**: `def list_policies(*, first: int | None = 50, after: str | None = None, order: OrderOrStr | None = Order.ASC, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `first` — query · `after` — query · `order` — query
- **Returns (parsed)**: `PoliciesResponse`
- **Returns (raw)**: `ApiResult[PoliciesResponse, ListPoliciesErrorBody]`
- **Error**: `ListPoliciesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrderOrStr` | `dope_security/models/enums/order.py` |
| `PoliciesResponse` | `dope_security/models/policies_response.py` |
| `ListPoliciesErrorBody` | `dope_security/errors/list_policies_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.policies.update_policy_assignments

- **Route**: `PUT /policies/{policy_name}/assignments`
- **Auth**: `bearer_auth`
- **Signature**: `def update_policy_assignments(policy_name: str, body: PoliciesAssignmentsRequest | PoliciesAssignmentsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_name`, `body`
- **Params**: `policy_name` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, UpdatePolicyAssignmentsErrorBody]`
- **Error**: `UpdatePolicyAssignmentsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PoliciesAssignmentsRequest` | `dope_security/models/policies_assignments_request.py` |
| `PoliciesAssignmentsRequestDict` | `dope_security/models/policies_assignments_request.py` |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `UpdatePolicyAssignmentsErrorBody` | `dope_security/errors/update_policy_assignments_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.policies.update_policy_exceptions

- **Route**: `PUT /policies/{policy_name}/content/exceptions`
- **Auth**: `bearer_auth`
- **Signature**: `def update_policy_exceptions(policy_name: str, body: PolicyContentExceptionsRequest | PolicyContentExceptionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_name`, `body`
- **Params**: `policy_name` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, UpdatePolicyExceptionsErrorBody]`
- **Error**: `UpdatePolicyExceptionsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PolicyContentExceptionsRequest` | `dope_security/models/policy_content_exceptions_request.py` |
| `PolicyContentExceptionsRequestDict` | `dope_security/models/policy_content_exceptions_request.py` |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `UpdatePolicyExceptionsErrorBody` | `dope_security/errors/update_policy_exceptions_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.policies.update_policy_restrictions

- **Route**: `PUT /policies/{policy_name}/content/restrictions`
- **Auth**: `bearer_auth`
- **Signature**: `def update_policy_restrictions(policy_name: str, body: PolicyContentRestrictionsRequest | PolicyContentRestrictionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_name`, `body`
- **Params**: `policy_name` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, UpdatePolicyRestrictionsErrorBody]`
- **Error**: `UpdatePolicyRestrictionsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PolicyContentRestrictionsRequest` | `dope_security/models/policy_content_restrictions_request.py` |
| `PolicyContentRestrictionsRequestDict` | `dope_security/models/policy_content_restrictions_request.py` |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `UpdatePolicyRestrictionsErrorBody` | `dope_security/errors/update_policy_restrictions_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.policies.update_ssl_inspection

- **Route**: `PUT /policies/{policy_name}/ssl-inspection`
- **Auth**: `bearer_auth`
- **Signature**: `def update_ssl_inspection(policy_name: str, body: PoliciesSslInspectionRequest | PoliciesSslInspectionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_name`, `body`
- **Params**: `policy_name` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, UpdateSslInspectionErrorBody]`
- **Error**: `UpdateSslInspectionErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PoliciesSslInspectionRequest` | `dope_security/models/policies_ssl_inspection_request.py` |
| `PoliciesSslInspectionRequestDict` | `dope_security/models/policies_ssl_inspection_request.py` |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `UpdateSslInspectionErrorBody` | `dope_security/errors/update_ssl_inspection_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.policies.upsert_application_bypass

- **Route**: `PUT /policies/{policy_name}/bypass/applications`
- **Auth**: `bearer_auth`
- **Signature**: `def upsert_application_bypass(policy_name: str, body: PoliciesBypassApplicationsRequest | PoliciesBypassApplicationsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_name`, `body`
- **Params**: `policy_name` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, UpsertApplicationBypassErrorBody]`
- **Error**: `UpsertApplicationBypassErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 401, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PoliciesBypassApplicationsRequest` | `dope_security/models/policies_bypass_applications_request.py` |
| `PoliciesBypassApplicationsRequestDict` | `dope_security/models/policies_bypass_applications_request.py` |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `UpsertApplicationBypassErrorBody` | `dope_security/errors/upsert_application_bypass_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

### client.policies.upsert_url_bypass

- **Route**: `PUT /policies/{policy_name}/bypass/urls`
- **Auth**: `bearer_auth`
- **Signature**: `def upsert_url_bypass(policy_name: str, body: PoliciesBypassUrlsRequest | PoliciesBypassUrlsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_name`, `body`
- **Params**: `policy_name` — path · `body` — JSON body
- **Returns (parsed)**: `SuccessMessage`
- **Returns (raw)**: `ApiResult[SuccessMessage, UpsertUrlBypassErrorBody]`
- **Error**: `UpsertUrlBypassErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorsModel` [400, 401, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PoliciesBypassUrlsRequest` | `dope_security/models/policies_bypass_urls_request.py` |
| `PoliciesBypassUrlsRequestDict` | `dope_security/models/policies_bypass_urls_request.py` |
| `SuccessMessage` | `dope_security/models/success_message.py` |
| `UpsertUrlBypassErrorBody` | `dope_security/errors/upsert_url_bypass_error.py` |
| `ErrorsModel` | `dope_security/models/errors_model.py` |

