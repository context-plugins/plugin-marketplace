<!-- Generated file — do not edit; regenerated with the SDK. -->

# Charge — operations

Accessor: `client.charge` · Source: `upstox/apis/charge.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.charge.get_brokerage

- **Route**: `GET /v2/charges/brokerage`
- **Auth**: `oauth2`
- **Signature**: `def get_brokerage(instrument_token: str, quantity: int, product: str, transaction_type: str, price: float, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_token`, `quantity`, `product`, `transaction_type`, `price`
- **Params**: `instrument_token` — query · `quantity` — query · `product` — query · `transaction_type` — query · `price` — query
- **Returns (parsed)**: `GetBrokerageResponse`
- **Returns (raw)**: `ApiResult[GetBrokerageResponse, GetBrokerageErrorBody]`
- **Error**: `GetBrokerageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetBrokerageResponse` | `upstox/models/get_brokerage_response.py` |
| `GetBrokerageErrorBody` | `upstox/errors/get_brokerage_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.charge.post_margin

- **Route**: `POST /v2/charges/margin`
- **Auth**: `oauth2`
- **Signature**: `def post_margin(body: MarginRequest | MarginRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PostMarginResponse`
- **Returns (raw)**: `ApiResult[PostMarginResponse, PostMarginErrorBody]`
- **Error**: `PostMarginErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MarginRequest` | `upstox/models/margin_request.py` |
| `MarginRequestDict` | `upstox/models/margin_request.py` |
| `PostMarginResponse` | `upstox/models/post_margin_response.py` |
| `PostMarginErrorBody` | `upstox/errors/post_margin_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

