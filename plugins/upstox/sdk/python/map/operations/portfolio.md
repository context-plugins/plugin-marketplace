<!-- Generated file — do not edit; regenerated with the SDK. -->

# Portfolio — operations

Accessor: `client.portfolio` · Source: `upstox/apis/portfolio.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.portfolio.convert_positions

- **Route**: `PUT /v2/portfolio/convert-position`
- **Auth**: `oauth2`
- **Signature**: `def convert_positions(body: ConvertPositionRequest | ConvertPositionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ConvertPositionResponse`
- **Returns (raw)**: `ApiResult[ConvertPositionResponse, ConvertPositionsErrorBody]`
- **Error**: `ConvertPositionsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConvertPositionRequest` | `upstox/models/convert_position_request.py` |
| `ConvertPositionRequestDict` | `upstox/models/convert_position_request.py` |
| `ConvertPositionResponse` | `upstox/models/convert_position_response.py` |
| `ConvertPositionsErrorBody` | `upstox/errors/convert_positions_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.portfolio.get_holdings

- **Route**: `GET /v2/portfolio/long-term-holdings`
- **Auth**: `oauth2`
- **Signature**: `def get_holdings(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetHoldingsResponse`
- **Returns (raw)**: `ApiResult[GetHoldingsResponse, GetHoldingsErrorBody]`
- **Error**: `GetHoldingsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetHoldingsResponse` | `upstox/models/get_holdings_response.py` |
| `GetHoldingsErrorBody` | `upstox/errors/get_holdings_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.portfolio.get_mtf_positions

- **Route**: `GET /v3/portfolio/mtf-positions`
- **Auth**: `oauth2`
- **Signature**: `def get_mtf_positions(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetPositionResponse`
- **Returns (raw)**: `ApiResult[GetPositionResponse, GetMtfPositionsErrorBody]`
- **Error**: `GetMtfPositionsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetPositionResponse` | `upstox/models/get_position_response.py` |
| `GetMtfPositionsErrorBody` | `upstox/errors/get_mtf_positions_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.portfolio.get_positions

- **Route**: `GET /v2/portfolio/short-term-positions`
- **Auth**: `oauth2`
- **Signature**: `def get_positions(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetPositionResponse`
- **Returns (raw)**: `ApiResult[GetPositionResponse, GetPositionsErrorBody]`
- **Error**: `GetPositionsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetPositionResponse` | `upstox/models/get_position_response.py` |
| `GetPositionsErrorBody` | `upstox/errors/get_positions_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

