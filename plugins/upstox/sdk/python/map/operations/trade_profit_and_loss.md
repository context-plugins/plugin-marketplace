<!-- Generated file — do not edit; regenerated with the SDK. -->

# TradeProfitAndLoss — operations

Accessor: `client.trade_profit_and_loss` · Source: `upstox/apis/trade_profit_and_loss.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.trade_profit_and_loss.get_profit_and_loss_charges

- **Route**: `GET /v2/trade/profit-loss/charges`
- **Auth**: `oauth2`
- **Signature**: `def get_profit_and_loss_charges(segment: str, financial_year: str, *, from_date: str | None = None, to_date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `segment`, `financial_year`
- **Params**: `segment` — query · `financial_year` — query · `from_date` — query · `to_date` — query
- **Returns (parsed)**: `GetProfitAndLossChargesResponse`
- **Returns (raw)**: `ApiResult[GetProfitAndLossChargesResponse, GetProfitAndLossChargesErrorBody]`
- **Error**: `GetProfitAndLossChargesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetProfitAndLossChargesResponse` | `upstox/models/get_profit_and_loss_charges_response.py` |
| `GetProfitAndLossChargesErrorBody` | `upstox/errors/get_profit_and_loss_charges_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.trade_profit_and_loss.get_trade_wise_profit_and_loss_data

- **Route**: `GET /v2/trade/profit-loss/data`
- **Auth**: `oauth2`
- **Signature**: `def get_trade_wise_profit_and_loss_data(segment: str, financial_year: str, page_number: int, page_size: int, *, from_date: str | None = None, to_date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `segment`, `financial_year`, `page_number`, `page_size`
- **Params**: `segment` — query · `financial_year` — query · `page_number` — query · `page_size` — query · `from_date` — query · `to_date` — query
- **Returns (parsed)**: `GetTradeWiseProfitAndLossDataResponse`
- **Returns (raw)**: `ApiResult[GetTradeWiseProfitAndLossDataResponse, GetTradeWiseProfitAndLossDataErrorBody]`
- **Error**: `GetTradeWiseProfitAndLossDataErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetTradeWiseProfitAndLossDataResponse` | `upstox/models/get_trade_wise_profit_and_loss_data_response.py` |
| `GetTradeWiseProfitAndLossDataErrorBody` | `upstox/errors/get_trade_wise_profit_and_loss_data_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.trade_profit_and_loss.get_trade_wise_profit_and_loss_meta_data

- **Route**: `GET /v2/trade/profit-loss/metadata`
- **Auth**: `oauth2`
- **Signature**: `def get_trade_wise_profit_and_loss_meta_data(segment: str, financial_year: str, *, from_date: str | None = None, to_date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `segment`, `financial_year`
- **Params**: `segment` — query · `financial_year` — query · `from_date` — query · `to_date` — query
- **Returns (parsed)**: `GetTradeWiseProfitAndLossMetaDataResponse`
- **Returns (raw)**: `ApiResult[GetTradeWiseProfitAndLossMetaDataResponse, GetTradeWiseProfitAndLossMetaDataErrorBody]`
- **Error**: `GetTradeWiseProfitAndLossMetaDataErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetTradeWiseProfitAndLossMetaDataResponse` | `upstox/models/get_trade_wise_profit_and_loss_meta_data_response.py` |
| `GetTradeWiseProfitAndLossMetaDataErrorBody` | `upstox/errors/get_trade_wise_profit_and_loss_meta_data_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

