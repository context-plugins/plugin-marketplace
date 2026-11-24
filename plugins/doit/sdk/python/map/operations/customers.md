<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.customers` · Source: `doi_t/apis/customers.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.customers.get_customer

- **Route**: `GET /customers/v1/customers/{customerId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_customer(customer_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerId`
- **Returns (parsed)**: `Customer`
- **Returns (raw)**: `ApiResult[Customer, GetCustomerErrorBody]`
- **Error**: `GetCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Customer` | `doi_t/models/customer.py` |
| `GetCustomerErrorBody` | `doi_t/errors/get_customer_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.customers.update_customer

- **Route**: `PATCH /customers/v1/customers/{customerId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_customer(customer_id: str, body: CustomerUpdate | CustomerUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `body`
- **Params**: `customer_id` — path `customerId` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateCustomerErrorBody]`
- **Error**: `UpdateCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 415, 422, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerUpdate` | `doi_t/models/customer_update.py` |
| `CustomerUpdateDict` | `doi_t/models/customer_update.py` |
| `UpdateCustomerErrorBody` | `doi_t/errors/update_customer_error.py` |
| `Error` | `doi_t/models/error.py` |

