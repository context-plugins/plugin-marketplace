<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.customers` · Source: `microsoft_dynamics_nav/apis/customers.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.customers.create_customer

- **Route**: `POST /companies({company_id})/customers`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_customer(company_id: UUID, body: CustomerCreate | CustomerCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `body`
- **Params**: `company_id` — path · `body` — JSON body
- **Returns (parsed)**: `Customer`
- **Returns (raw)**: `ApiResult[Customer, CreateCustomerErrorBody]`
- **Error**: `CreateCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerCreate` | `microsoft_dynamics_nav/models/customer_create.py` |
| `CustomerCreateDict` | `microsoft_dynamics_nav/models/customer_create.py` |
| `Customer` | `microsoft_dynamics_nav/models/customer.py` |
| `CreateCustomerErrorBody` | `microsoft_dynamics_nav/errors/create_customer_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.customers.delete_customer

- **Route**: `DELETE /companies({company_id})/customers({customer_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def delete_customer(company_id: UUID, customer_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `customer_id`
- **Params**: `company_id` — path · `customer_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteCustomerErrorBody]`
- **Error**: `DeleteCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteCustomerErrorBody` | `microsoft_dynamics_nav/errors/delete_customer_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.customers.get_customer

- **Route**: `GET /companies({company_id})/customers({customer_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_customer(company_id: UUID, customer_id: UUID, *, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `customer_id`
- **Params**: `company_id` — path · `customer_id` — path · `select` — query `$select` · `expand` — query `$expand`
- **Returns (parsed)**: `Customer`
- **Returns (raw)**: `ApiResult[Customer, GetCustomerErrorBody]`
- **Error**: `GetCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Customer` | `microsoft_dynamics_nav/models/customer.py` |
| `GetCustomerErrorBody` | `microsoft_dynamics_nav/errors/get_customer_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.customers.list_customers

- **Route**: `GET /companies({company_id})/customers`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_customers(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `orderby` — query `$orderby` · `select` — query `$select` · `expand` — query `$expand`
- **Returns (parsed)**: `CompaniesApiCustomersResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiCustomersResponse, ListCustomersErrorBody]`
- **Error**: `ListCustomersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiCustomersResponse` | `microsoft_dynamics_nav/models/companies_api_customers_response.py` |
| `ListCustomersErrorBody` | `microsoft_dynamics_nav/errors/list_customers_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.customers.update_customer

- **Route**: `PATCH /companies({company_id})/customers({customer_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def update_customer(company_id: UUID, customer_id: UUID, if_match: str, body: CustomerUpdate | CustomerUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `customer_id`, `if_match`, `body`
- **Params**: `company_id` — path · `customer_id` — path · `if_match` — header `If-Match` · `body` — JSON body
- **Returns (parsed)**: `Customer`
- **Returns (raw)**: `ApiResult[Customer, UpdateCustomerErrorBody]`
- **Error**: `UpdateCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerUpdate` | `microsoft_dynamics_nav/models/customer_update.py` |
| `CustomerUpdateDict` | `microsoft_dynamics_nav/models/customer_update.py` |
| `Customer` | `microsoft_dynamics_nav/models/customer.py` |
| `UpdateCustomerErrorBody` | `microsoft_dynamics_nav/errors/update_customer_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

