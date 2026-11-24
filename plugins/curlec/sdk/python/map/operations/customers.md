<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.customers` · Source: `curlec/apis/customers.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.customers.create_customer

- **Route**: `POST /customers`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_customer(body: CustomersRequest | CustomersRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CustomerRazorpayCustomersApi`
- **Returns (raw)**: `ApiResult[CustomerRazorpayCustomersApi, CreateCustomerErrorBody]`
- **Error**: `CreateCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomersRequest` | `curlec/models/customers_request.py` |
| `CustomersRequestDict` | `curlec/models/customers_request.py` |
| `CustomerRazorpayCustomersApi` | `curlec/models/customer_razorpay_customers_api.py` |
| `CreateCustomerErrorBody` | `curlec/errors/create_customer_error.py` |
| `Error` | `curlec/models/error.py` |

### client.customers.fetch_all_customers

- **Route**: `GET /customers`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_all_customers(*, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `count` — query · `skip` — query
- **Returns (parsed)**: `CustomersResponse`
- **Returns (raw)**: `ApiResult[CustomersResponse, FetchAllCustomersErrorBody]`
- **Error**: `FetchAllCustomersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomersResponse` | `curlec/models/customers_response.py` |
| `FetchAllCustomersErrorBody` | `curlec/errors/fetch_all_customers_error.py` |
| `Error` | `curlec/models/error.py` |

### client.customers.fetch_customer

- **Route**: `GET /customers/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_customer(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `CustomerRazorpayCustomersApi`
- **Returns (raw)**: `ApiResult[CustomerRazorpayCustomersApi, FetchCustomerErrorBody]`
- **Error**: `FetchCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerRazorpayCustomersApi` | `curlec/models/customer_razorpay_customers_api.py` |
| `FetchCustomerErrorBody` | `curlec/errors/fetch_customer_error.py` |
| `Error` | `curlec/models/error.py` |

### client.customers.update_customer

- **Route**: `PUT /customers/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_customer(id_: str, body: CustomersRequest1 | CustomersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `CustomerRazorpayCustomersApi`
- **Returns (raw)**: `ApiResult[CustomerRazorpayCustomersApi, UpdateCustomerErrorBody]`
- **Error**: `UpdateCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomersRequest1` | `curlec/models/customers_request1.py` |
| `CustomersRequest1Dict` | `curlec/models/customers_request1.py` |
| `CustomerRazorpayCustomersApi` | `curlec/models/customer_razorpay_customers_api.py` |
| `UpdateCustomerErrorBody` | `curlec/errors/update_customer_error.py` |
| `Error` | `curlec/models/error.py` |

