<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ipo — operations

Accessor: `client.ipo` · Source: `upstox/apis/ipo.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ipo.apply_for_ipo

- **Route**: `POST /v2/ipos/orders`
- **Auth**: `oauth2`
- **Signature**: `def apply_for_ipo(body: IpoApplyRequest | IpoApplyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `IpoApplyResponse`
- **Returns (raw)**: `ApiResult[IpoApplyResponse, ApplyForIpoErrorBody]`
- **Error**: `ApplyForIpoErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 404, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IpoApplyRequest` | `upstox/models/ipo_apply_request.py` |
| `IpoApplyRequestDict` | `upstox/models/ipo_apply_request.py` |
| `IpoApplyResponse` | `upstox/models/ipo_apply_response.py` |
| `ApplyForIpoErrorBody` | `upstox/errors/apply_for_ipo_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.ipo.cancel_ipo_order

- **Route**: `DELETE /v2/ipos/orders/{order_id}`
- **Auth**: `oauth2`
- **Signature**: `def cancel_ipo_order(order_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`
- **Params**: `order_id` — path
- **Returns (parsed)**: `IpoCancelResponse`
- **Returns (raw)**: `ApiResult[IpoCancelResponse, CancelIpoOrderErrorBody]`
- **Error**: `CancelIpoOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 404, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IpoCancelResponse` | `upstox/models/ipo_cancel_response.py` |
| `CancelIpoOrderErrorBody` | `upstox/errors/cancel_ipo_order_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.ipo.get_ipo_details

- **Route**: `GET /v2/ipos/{id}`
- **Auth**: `oauth2`
- **Signature**: `def get_ipo_details(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `IpoDetailsResponse`
- **Returns (raw)**: `ApiResult[IpoDetailsResponse, GetIpoDetailsErrorBody]`
- **Error**: `GetIpoDetailsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IpoDetailsResponse` | `upstox/models/ipo_details_response.py` |
| `GetIpoDetailsErrorBody` | `upstox/errors/get_ipo_details_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.ipo.get_ipo_listing

- **Route**: `GET /v2/ipos`
- **Auth**: `oauth2`
- **Signature**: `def get_ipo_listing(*, status: Status9OrStr | None = None, issue_type: IssueType3OrStr | None = None, page_number: str | None = None, records: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `status` — query · `issue_type` — query · `page_number` — query · `records` — query
- **Returns (parsed)**: `IpoListingResponse`
- **Returns (raw)**: `ApiResult[IpoListingResponse, GetIpoListingErrorBody]`
- **Error**: `GetIpoListingErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Status9OrStr` | `upstox/models/enums/status9.py` |
| `IssueType3OrStr` | `upstox/models/enums/issue_type3.py` |
| `IpoListingResponse` | `upstox/models/ipo_listing_response.py` |
| `GetIpoListingErrorBody` | `upstox/errors/get_ipo_listing_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.ipo.get_ipo_order_by_id

- **Route**: `GET /v2/ipos/orders/{order_id}`
- **Auth**: `oauth2`
- **Signature**: `def get_ipo_order_by_id(order_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`
- **Params**: `order_id` — path
- **Returns (parsed)**: `IpoOrderDetailResponse`
- **Returns (raw)**: `ApiResult[IpoOrderDetailResponse, GetIpoOrderByIdErrorBody]`
- **Error**: `GetIpoOrderByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 404, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IpoOrderDetailResponse` | `upstox/models/ipo_order_detail_response.py` |
| `GetIpoOrderByIdErrorBody` | `upstox/errors/get_ipo_order_by_id_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.ipo.get_ipo_orders

- **Route**: `GET /v2/ipos/orders`
- **Auth**: `oauth2`
- **Signature**: `def get_ipo_orders(*, page_number: str | None = None, records: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page_number` — query · `records` — query
- **Returns (parsed)**: `IpoOrderResponse`
- **Returns (raw)**: `ApiResult[IpoOrderResponse, GetIpoOrdersErrorBody]`
- **Error**: `GetIpoOrdersErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IpoOrderResponse` | `upstox/models/ipo_order_response.py` |
| `GetIpoOrdersErrorBody` | `upstox/errors/get_ipo_orders_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

