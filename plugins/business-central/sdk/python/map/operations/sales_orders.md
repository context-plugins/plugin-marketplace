<!-- Generated file — do not edit; regenerated with the SDK. -->

# SalesOrders — operations

Accessor: `client.sales_orders` · Source: `dynamics_365_business_central/apis/sales_orders.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sales_orders.create_sales_order

- **Route**: `POST /companies({company_id})/salesOrders`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_sales_order(company_id: UUID, body: SalesOrderCreate | SalesOrderCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `body`
- **Params**: `company_id` — path · `body` — JSON body
- **Returns (parsed)**: `SalesOrder`
- **Returns (raw)**: `ApiResult[SalesOrder, CreateSalesOrderErrorBody]`
- **Error**: `CreateSalesOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SalesOrderCreate` | `dynamics_365_business_central/models/sales_order_create.py` |
| `SalesOrderCreateDict` | `dynamics_365_business_central/models/sales_order_create.py` |
| `SalesOrder` | `dynamics_365_business_central/models/sales_order.py` |
| `CreateSalesOrderErrorBody` | `dynamics_365_business_central/errors/create_sales_order_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.sales_orders.delete_sales_order

- **Route**: `DELETE /companies({company_id})/salesOrders({salesOrder_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def delete_sales_order(company_id: UUID, sales_order_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `sales_order_id`
- **Params**: `company_id` — path · `sales_order_id` — path `salesOrder_id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSalesOrderErrorBody]`
- **Error**: `DeleteSalesOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSalesOrderErrorBody` | `dynamics_365_business_central/errors/delete_sales_order_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.sales_orders.get_sales_order

- **Route**: `GET /companies({company_id})/salesOrders({salesOrder_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_sales_order(company_id: UUID, sales_order_id: UUID, *, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `sales_order_id`
- **Params**: `company_id` — path · `sales_order_id` — path `salesOrder_id` · `select` — query `$select` · `expand` — query `$expand`
- **Returns (parsed)**: `SalesOrder`
- **Returns (raw)**: `ApiResult[SalesOrder, GetSalesOrderErrorBody]`
- **Error**: `GetSalesOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SalesOrder` | `dynamics_365_business_central/models/sales_order.py` |
| `GetSalesOrderErrorBody` | `dynamics_365_business_central/errors/get_sales_order_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.sales_orders.list_sales_order_lines

- **Route**: `GET /companies({company_id})/salesOrders({salesOrder_id})/salesOrderLines`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_sales_order_lines(company_id: UUID, sales_order_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `sales_order_id`
- **Params**: `company_id` — path · `sales_order_id` — path `salesOrder_id` · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `select` — query `$select`
- **Returns (parsed)**: `CompaniesApiSalesOrdersApiSalesOrderLinesResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiSalesOrdersApiSalesOrderLinesResponse, ListSalesOrderLinesErrorBody]`
- **Error**: `ListSalesOrderLinesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiSalesOrdersApiSalesOrderLinesResponse` | `dynamics_365_business_central/models/companies_api_sales_orders_api_sales_order_lines_response.py` |
| `ListSalesOrderLinesErrorBody` | `dynamics_365_business_central/errors/list_sales_order_lines_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.sales_orders.list_sales_orders

- **Route**: `GET /companies({company_id})/salesOrders`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_sales_orders(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `orderby` — query `$orderby` · `select` — query `$select` · `expand` — query `$expand`
- **Returns (parsed)**: `CompaniesApiSalesOrdersResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiSalesOrdersResponse, ListSalesOrdersErrorBody]`
- **Error**: `ListSalesOrdersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiSalesOrdersResponse` | `dynamics_365_business_central/models/companies_api_sales_orders_response.py` |
| `ListSalesOrdersErrorBody` | `dynamics_365_business_central/errors/list_sales_orders_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.sales_orders.update_sales_order

- **Route**: `PATCH /companies({company_id})/salesOrders({salesOrder_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def update_sales_order(company_id: UUID, sales_order_id: UUID, if_match: str, body: SalesOrderUpdate | SalesOrderUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `sales_order_id`, `if_match`, `body`
- **Params**: `company_id` — path · `sales_order_id` — path `salesOrder_id` · `if_match` — header `If-Match` · `body` — JSON body
- **Returns (parsed)**: `SalesOrder`
- **Returns (raw)**: `ApiResult[SalesOrder, UpdateSalesOrderErrorBody]`
- **Error**: `UpdateSalesOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SalesOrderUpdate` | `dynamics_365_business_central/models/sales_order_update.py` |
| `SalesOrderUpdateDict` | `dynamics_365_business_central/models/sales_order_update.py` |
| `SalesOrder` | `dynamics_365_business_central/models/sales_order.py` |
| `UpdateSalesOrderErrorBody` | `dynamics_365_business_central/errors/update_sales_order_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

