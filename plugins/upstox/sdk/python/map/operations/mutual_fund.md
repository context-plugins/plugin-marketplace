<!-- Generated file — do not edit; regenerated with the SDK. -->

# MutualFund — operations

Accessor: `client.mutual_fund` · Source: `upstox/apis/mutual_fund.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.mutual_fund.get_mutual_fund_holdings

- **Route**: `GET /v2/mf/holdings`
- **Auth**: `oauth2`
- **Signature**: `def get_mutual_fund_holdings(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetMutualFundHoldingsResponse`
- **Returns (raw)**: `ApiResult[GetMutualFundHoldingsResponse, GetMutualFundHoldingsErrorBody]`
- **Error**: `GetMutualFundHoldingsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetMutualFundHoldingsResponse` | `upstox/models/get_mutual_fund_holdings_response.py` |
| `GetMutualFundHoldingsErrorBody` | `upstox/errors/get_mutual_fund_holdings_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.mutual_fund.get_mutual_fund_order

- **Route**: `GET /v2/mf/orders/{order_id}`
- **Auth**: `oauth2`
- **Signature**: `def get_mutual_fund_order(order_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `order_id`
- **Params**: `order_id` — path
- **Returns (parsed)**: `GetMutualFundOrderDetailsResponse`
- **Returns (raw)**: `ApiResult[GetMutualFundOrderDetailsResponse, GetMutualFundOrderErrorBody]`
- **Error**: `GetMutualFundOrderErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetMutualFundOrderDetailsResponse` | `upstox/models/get_mutual_fund_order_details_response.py` |
| `GetMutualFundOrderErrorBody` | `upstox/errors/get_mutual_fund_order_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.mutual_fund.get_mutual_fund_orders

- **Route**: `GET /v2/mf/orders`
- **Auth**: `oauth2`
- **Signature**: `def get_mutual_fund_orders(*, status: str | None = "ALL", transaction_type: str | None = "ALL", page_number: int | None = 1, records: int | None = 10, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `status` — query · `transaction_type` — query · `page_number` — query · `records` — query
- **Returns (parsed)**: `GetMutualFundOrdersResponse`
- **Returns (raw)**: `ApiResult[GetMutualFundOrdersResponse, GetMutualFundOrdersErrorBody]`
- **Error**: `GetMutualFundOrdersErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetMutualFundOrdersResponse` | `upstox/models/get_mutual_fund_orders_response.py` |
| `GetMutualFundOrdersErrorBody` | `upstox/errors/get_mutual_fund_orders_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.mutual_fund.get_mutual_fund_sips

- **Route**: `GET /v2/mf/sips`
- **Auth**: `oauth2`
- **Signature**: `def get_mutual_fund_sips(*, page_number: int | None = 1, records: int | None = 10, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page_number` — query · `records` — query
- **Returns (parsed)**: `GetMutualFundSipsResponse`
- **Returns (raw)**: `ApiResult[GetMutualFundSipsResponse, GetMutualFundSipsErrorBody]`
- **Error**: `GetMutualFundSipsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetMutualFundSipsResponse` | `upstox/models/get_mutual_fund_sips_response.py` |
| `GetMutualFundSipsErrorBody` | `upstox/errors/get_mutual_fund_sips_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

