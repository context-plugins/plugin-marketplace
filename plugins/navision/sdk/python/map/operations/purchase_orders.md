<!-- Generated file — do not edit; regenerated with the SDK. -->

# PurchaseOrders — operations

Accessor: `client.purchase_orders` · Source: `microsoft_dynamics_nav/apis/purchase_orders.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.purchase_orders.create_purchase_order

- **Route**: `POST /companies({company_id})/purchaseOrders`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_purchase_order(company_id: UUID, body: PurchaseOrderCreate | PurchaseOrderCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `body`
- **Params**: `company_id` — path · `body` — JSON body
- **Returns (parsed)**: `PurchaseOrder`
- **Returns (raw)**: `ApiResult[PurchaseOrder, CreatePurchaseOrderErrorBody]`
- **Error**: `CreatePurchaseOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PurchaseOrderCreate` | `microsoft_dynamics_nav/models/purchase_order_create.py` |
| `PurchaseOrderCreateDict` | `microsoft_dynamics_nav/models/purchase_order_create.py` |
| `PurchaseOrder` | `microsoft_dynamics_nav/models/purchase_order.py` |
| `CreatePurchaseOrderErrorBody` | `microsoft_dynamics_nav/errors/create_purchase_order_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.purchase_orders.delete_purchase_order

- **Route**: `DELETE /companies({company_id})/purchaseOrders({purchaseOrder_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def delete_purchase_order(company_id: UUID, purchase_order_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `purchase_order_id`
- **Params**: `company_id` — path · `purchase_order_id` — path `purchaseOrder_id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeletePurchaseOrderErrorBody]`
- **Error**: `DeletePurchaseOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeletePurchaseOrderErrorBody` | `microsoft_dynamics_nav/errors/delete_purchase_order_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.purchase_orders.get_purchase_order

- **Route**: `GET /companies({company_id})/purchaseOrders({purchaseOrder_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_purchase_order(company_id: UUID, purchase_order_id: UUID, *, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `purchase_order_id`
- **Params**: `company_id` — path · `purchase_order_id` — path `purchaseOrder_id` · `select` — query `$select` · `expand` — query `$expand`
- **Returns (parsed)**: `PurchaseOrder`
- **Returns (raw)**: `ApiResult[PurchaseOrder, GetPurchaseOrderErrorBody]`
- **Error**: `GetPurchaseOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PurchaseOrder` | `microsoft_dynamics_nav/models/purchase_order.py` |
| `GetPurchaseOrderErrorBody` | `microsoft_dynamics_nav/errors/get_purchase_order_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.purchase_orders.list_purchase_order_lines

- **Route**: `GET /companies({company_id})/purchaseOrders({purchaseOrder_id})/purchaseOrderLines`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_purchase_order_lines(company_id: UUID, purchase_order_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `purchase_order_id`
- **Params**: `company_id` — path · `purchase_order_id` — path `purchaseOrder_id` · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `select` — query `$select`
- **Returns (parsed)**: `CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse, ListPurchaseOrderLinesErrorBody]`
- **Error**: `ListPurchaseOrderLinesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse` | `microsoft_dynamics_nav/models/companies_api_purchase_orders_api_purchase_order_lines_response.py` |
| `ListPurchaseOrderLinesErrorBody` | `microsoft_dynamics_nav/errors/list_purchase_order_lines_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.purchase_orders.list_purchase_orders

- **Route**: `GET /companies({company_id})/purchaseOrders`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_purchase_orders(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, orderby: str | None = None, select: str | None = None, expand: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `orderby` — query `$orderby` · `select` — query `$select` · `expand` — query `$expand`
- **Returns (parsed)**: `CompaniesApiPurchaseOrdersResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiPurchaseOrdersResponse, ListPurchaseOrdersErrorBody]`
- **Error**: `ListPurchaseOrdersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiPurchaseOrdersResponse` | `microsoft_dynamics_nav/models/companies_api_purchase_orders_response.py` |
| `ListPurchaseOrdersErrorBody` | `microsoft_dynamics_nav/errors/list_purchase_orders_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

### client.purchase_orders.update_purchase_order

- **Route**: `PATCH /companies({company_id})/purchaseOrders({purchaseOrder_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def update_purchase_order(company_id: UUID, purchase_order_id: UUID, if_match: str, body: PurchaseOrderUpdate | PurchaseOrderUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `purchase_order_id`, `if_match`, `body`
- **Params**: `company_id` — path · `purchase_order_id` — path `purchaseOrder_id` · `if_match` — header `If-Match` · `body` — JSON body
- **Returns (parsed)**: `PurchaseOrder`
- **Returns (raw)**: `ApiResult[PurchaseOrder, UpdatePurchaseOrderErrorBody]`
- **Error**: `UpdatePurchaseOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PurchaseOrderUpdate` | `microsoft_dynamics_nav/models/purchase_order_update.py` |
| `PurchaseOrderUpdateDict` | `microsoft_dynamics_nav/models/purchase_order_update.py` |
| `PurchaseOrder` | `microsoft_dynamics_nav/models/purchase_order.py` |
| `UpdatePurchaseOrderErrorBody` | `microsoft_dynamics_nav/errors/update_purchase_order_error.py` |
| `ErrorResponse` | `microsoft_dynamics_nav/models/error_response.py` |

