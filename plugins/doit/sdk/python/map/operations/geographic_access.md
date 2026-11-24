<!-- Generated file — do not edit; regenerated with the SDK. -->

# GeographicAccess — operations

Accessor: `client.geographic_access` · Source: `doi_t/apis/geographic_access.py` · 12 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.geographic_access.create_geographic_access_custom_region

- **Route**: `POST /rbac/v1/custom-regions`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_geographic_access_custom_region(body: CreateGeographicAccessCustomRegionRequest | CreateGeographicAccessCustomRegionRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_tenant_id` — header `X-Tenant-Id` · `body` — JSON body
- **Returns (parsed)**: `GeographicAccessCustomRegion`
- **Returns (raw)**: `ApiResult[GeographicAccessCustomRegion, CreateGeographicAccessCustomRegionErrorBody]`
- **Error**: `CreateGeographicAccessCustomRegionErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 409, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateGeographicAccessCustomRegionRequest` | `doi_t/models/create_geographic_access_custom_region_request.py` |
| `CreateGeographicAccessCustomRegionRequestDict` | `doi_t/models/create_geographic_access_custom_region_request.py` |
| `GeographicAccessCustomRegion` | `doi_t/models/geographic_access_custom_region.py` |
| `CreateGeographicAccessCustomRegionErrorBody` | `doi_t/errors/create_geographic_access_custom_region_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.geographic_access.delete_customer_geographic_access_scope

- **Route**: `DELETE /rbac/v1/customers/{targetCustomerId}/geographic-scope`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_customer_geographic_access_scope(target_customer_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `target_customer_id`
- **Params**: `target_customer_id` — path `targetCustomerId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteCustomerGeographicAccessScopeErrorBody]`
- **Error**: `DeleteCustomerGeographicAccessScopeErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 409, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteCustomerGeographicAccessScopeErrorBody` | `doi_t/errors/delete_customer_geographic_access_scope_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.geographic_access.delete_geographic_access_custom_region

- **Route**: `DELETE /rbac/v1/custom-regions/{customRegionId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_geographic_access_custom_region(custom_region_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_region_id`
- **Params**: `custom_region_id` — path `customRegionId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteGeographicAccessCustomRegionErrorBody]`
- **Error**: `DeleteGeographicAccessCustomRegionErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 409, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteGeographicAccessCustomRegionErrorBody` | `doi_t/errors/delete_geographic_access_custom_region_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.geographic_access.delete_user_geographic_access_scope

- **Route**: `DELETE /rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_user_geographic_access_scope(target_customer_id: str, user_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `target_customer_id`, `user_id`
- **Params**: `target_customer_id` — path `targetCustomerId` · `user_id` — path `userId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteUserGeographicAccessScopeErrorBody]`
- **Error**: `DeleteUserGeographicAccessScopeErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 409, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteUserGeographicAccessScopeErrorBody` | `doi_t/errors/delete_user_geographic_access_scope_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.geographic_access.get_customer_geographic_access_scope

- **Route**: `GET /rbac/v1/customers/{targetCustomerId}/geographic-scope`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_customer_geographic_access_scope(target_customer_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `target_customer_id`
- **Params**: `target_customer_id` — path `targetCustomerId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `GeographicAccessScope`
- **Returns (raw)**: `ApiResult[GeographicAccessScope, GetCustomerGeographicAccessScopeErrorBody]`
- **Error**: `GetCustomerGeographicAccessScopeErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 409, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GeographicAccessScope` | `doi_t/models/unions/geographic_access_scope.py` |
| `GetCustomerGeographicAccessScopeErrorBody` | `doi_t/errors/get_customer_geographic_access_scope_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.geographic_access.get_geographic_access_custom_region

- **Route**: `GET /rbac/v1/custom-regions/{customRegionId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_geographic_access_custom_region(custom_region_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_region_id`
- **Params**: `custom_region_id` — path `customRegionId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `GeographicAccessCustomRegion`
- **Returns (raw)**: `ApiResult[GeographicAccessCustomRegion, GetGeographicAccessCustomRegionErrorBody]`
- **Error**: `GetGeographicAccessCustomRegionErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GeographicAccessCustomRegion` | `doi_t/models/geographic_access_custom_region.py` |
| `GetGeographicAccessCustomRegionErrorBody` | `doi_t/errors/get_geographic_access_custom_region_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.geographic_access.get_user_geographic_access_scope

- **Route**: `GET /rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_user_geographic_access_scope(target_customer_id: str, user_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `target_customer_id`, `user_id`
- **Params**: `target_customer_id` — path `targetCustomerId` · `user_id` — path `userId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `GeographicAccessScope`
- **Returns (raw)**: `ApiResult[GeographicAccessScope, GetUserGeographicAccessScopeErrorBody]`
- **Error**: `GetUserGeographicAccessScopeErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 409, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GeographicAccessScope` | `doi_t/models/unions/geographic_access_scope.py` |
| `GetUserGeographicAccessScopeErrorBody` | `doi_t/errors/get_user_geographic_access_scope_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.geographic_access.list_geographic_access_countries

- **Route**: `GET /rbac/v1/countries`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_geographic_access_countries(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `GeographicAccessCountriesResponse`
- **Returns (raw)**: `ApiResult[GeographicAccessCountriesResponse, ListGeographicAccessCountriesErrorBody]`
- **Error**: `ListGeographicAccessCountriesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GeographicAccessCountriesResponse` | `doi_t/models/geographic_access_countries_response.py` |
| `ListGeographicAccessCountriesErrorBody` | `doi_t/errors/list_geographic_access_countries_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.geographic_access.list_geographic_access_custom_regions

- **Route**: `GET /rbac/v1/custom-regions`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_geographic_access_custom_regions(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `GeographicAccessCustomRegionsResponse`
- **Returns (raw)**: `ApiResult[GeographicAccessCustomRegionsResponse, ListGeographicAccessCustomRegionsErrorBody]`
- **Error**: `ListGeographicAccessCustomRegionsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GeographicAccessCustomRegionsResponse` | `doi_t/models/geographic_access_custom_regions_response.py` |
| `ListGeographicAccessCustomRegionsErrorBody` | `doi_t/errors/list_geographic_access_custom_regions_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.geographic_access.update_customer_geographic_access_scope

- **Route**: `PUT /rbac/v1/customers/{targetCustomerId}/geographic-scope`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_customer_geographic_access_scope(target_customer_id: str, body: UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `target_customer_id`, `body`
- **Params**: `target_customer_id` — path `targetCustomerId` · `x_tenant_id` — header `X-Tenant-Id` · `body` — JSON body
- **Returns (parsed)**: `GeographicAccessScope`
- **Returns (raw)**: `ApiResult[GeographicAccessScope, UpdateCustomerGeographicAccessScopeErrorBody]`
- **Error**: `UpdateCustomerGeographicAccessScopeErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 409, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateGeographicAccessScopeRequest` | `doi_t/models/unions/update_geographic_access_scope_request.py` |
| `UpdateGeographicAccessScopeRequestDict` | `doi_t/models/unions/update_geographic_access_scope_request.py` |
| `GeographicAccessScope` | `doi_t/models/unions/geographic_access_scope.py` |
| `UpdateCustomerGeographicAccessScopeErrorBody` | `doi_t/errors/update_customer_geographic_access_scope_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.geographic_access.update_geographic_access_custom_region

- **Route**: `PATCH /rbac/v1/custom-regions/{customRegionId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_geographic_access_custom_region(custom_region_id: str, body: UpdateGeographicAccessCustomRegionRequest | UpdateGeographicAccessCustomRegionRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `custom_region_id`, `body`
- **Params**: `custom_region_id` — path `customRegionId` · `x_tenant_id` — header `X-Tenant-Id` · `body` — JSON body
- **Returns (parsed)**: `GeographicAccessCustomRegion`
- **Returns (raw)**: `ApiResult[GeographicAccessCustomRegion, UpdateGeographicAccessCustomRegionErrorBody]`
- **Error**: `UpdateGeographicAccessCustomRegionErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 409, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateGeographicAccessCustomRegionRequest` | `doi_t/models/update_geographic_access_custom_region_request.py` |
| `UpdateGeographicAccessCustomRegionRequestDict` | `doi_t/models/update_geographic_access_custom_region_request.py` |
| `GeographicAccessCustomRegion` | `doi_t/models/geographic_access_custom_region.py` |
| `UpdateGeographicAccessCustomRegionErrorBody` | `doi_t/errors/update_geographic_access_custom_region_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.geographic_access.update_user_geographic_access_scope

- **Route**: `PUT /rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_user_geographic_access_scope(target_customer_id: str, user_id: str, body: UpdateGeographicAccessScopeRequest | UpdateGeographicAccessScopeRequestDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `target_customer_id`, `user_id`, `body`
- **Params**: `target_customer_id` — path `targetCustomerId` · `user_id` — path `userId` · `x_tenant_id` — header `X-Tenant-Id` · `body` — JSON body
- **Returns (parsed)**: `GeographicAccessScope`
- **Returns (raw)**: `ApiResult[GeographicAccessScope, UpdateUserGeographicAccessScopeErrorBody]`
- **Error**: `UpdateUserGeographicAccessScopeErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401, 403, 404, 409, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateGeographicAccessScopeRequest` | `doi_t/models/unions/update_geographic_access_scope_request.py` |
| `UpdateGeographicAccessScopeRequestDict` | `doi_t/models/unions/update_geographic_access_scope_request.py` |
| `GeographicAccessScope` | `doi_t/models/unions/geographic_access_scope.py` |
| `UpdateUserGeographicAccessScopeErrorBody` | `doi_t/errors/update_user_geographic_access_scope_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

