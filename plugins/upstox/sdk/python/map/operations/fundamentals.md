<!-- Generated file — do not edit; regenerated with the SDK. -->

# Fundamentals — operations

Accessor: `client.fundamentals` · Source: `upstox/apis/fundamentals.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.fundamentals.get_balance_sheet

- **Route**: `GET /v2/fundamentals/{isin}/balance-sheet`
- **Auth**: `oauth2`
- **Signature**: `def get_balance_sheet(isin: str, *, type_: str | None = "consolidated", fs: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `isin`
- **Params**: `isin` — path · `type_` — query `type` · `fs` — query
- **Returns (parsed)**: `BalanceSheetResponse`
- **Returns (raw)**: `ApiResult[BalanceSheetResponse, GetBalanceSheetErrorBody]`
- **Error**: `GetBalanceSheetErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BalanceSheetResponse` | `upstox/models/balance_sheet_response.py` |
| `GetBalanceSheetErrorBody` | `upstox/errors/get_balance_sheet_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.fundamentals.get_cash_flow

- **Route**: `GET /v2/fundamentals/{isin}/cash-flow`
- **Auth**: `oauth2`
- **Signature**: `def get_cash_flow(isin: str, *, type_: str | None = "consolidated", fs: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `isin`
- **Params**: `isin` — path · `type_` — query `type` · `fs` — query
- **Returns (parsed)**: `CashFlowResponse`
- **Returns (raw)**: `ApiResult[CashFlowResponse, GetCashFlowErrorBody]`
- **Error**: `GetCashFlowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CashFlowResponse` | `upstox/models/cash_flow_response.py` |
| `GetCashFlowErrorBody` | `upstox/errors/get_cash_flow_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.fundamentals.get_company_profile

- **Route**: `GET /v2/fundamentals/{isin}/profile`
- **Auth**: `oauth2`
- **Signature**: `def get_company_profile(isin: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `isin`
- **Params**: `isin` — path
- **Returns (parsed)**: `CompanyProfileResponse`
- **Returns (raw)**: `ApiResult[CompanyProfileResponse, GetCompanyProfileErrorBody]`
- **Error**: `GetCompanyProfileErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompanyProfileResponse` | `upstox/models/company_profile_response.py` |
| `GetCompanyProfileErrorBody` | `upstox/errors/get_company_profile_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.fundamentals.get_competitors

- **Route**: `GET /v2/fundamentals/{instrument_key}/competitors`
- **Auth**: `oauth2`
- **Signature**: `def get_competitors(instrument_key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `instrument_key`
- **Params**: `instrument_key` — path
- **Returns (parsed)**: `CompetitorsResponse`
- **Returns (raw)**: `ApiResult[CompetitorsResponse, GetCompetitorsErrorBody]`
- **Error**: `GetCompetitorsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompetitorsResponse` | `upstox/models/competitors_response.py` |
| `GetCompetitorsErrorBody` | `upstox/errors/get_competitors_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.fundamentals.get_corporate_actions

- **Route**: `GET /v2/fundamentals/{isin}/corporate-actions`
- **Auth**: `oauth2`
- **Signature**: `def get_corporate_actions(isin: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `isin`
- **Params**: `isin` — path
- **Returns (parsed)**: `CorporateActionsResponse`
- **Returns (raw)**: `ApiResult[CorporateActionsResponse, GetCorporateActionsErrorBody]`
- **Error**: `GetCorporateActionsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CorporateActionsResponse` | `upstox/models/corporate_actions_response.py` |
| `GetCorporateActionsErrorBody` | `upstox/errors/get_corporate_actions_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.fundamentals.get_income_statement

- **Route**: `GET /v2/fundamentals/{isin}/income-statement`
- **Auth**: `oauth2`
- **Signature**: `def get_income_statement(isin: str, *, type_: str | None = "consolidated", time_period: str | None = "yearly", fs: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `isin`
- **Params**: `isin` — path · `type_` — query `type` · `time_period` — query · `fs` — query
- **Returns (parsed)**: `IncomeStatementResponse`
- **Returns (raw)**: `ApiResult[IncomeStatementResponse, GetIncomeStatementErrorBody]`
- **Error**: `GetIncomeStatementErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IncomeStatementResponse` | `upstox/models/income_statement_response.py` |
| `GetIncomeStatementErrorBody` | `upstox/errors/get_income_statement_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.fundamentals.get_key_ratios

- **Route**: `GET /v2/fundamentals/{isin}/key-ratios`
- **Auth**: `oauth2`
- **Signature**: `def get_key_ratios(isin: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `isin`
- **Params**: `isin` — path
- **Returns (parsed)**: `KeyRatiosResponse`
- **Returns (raw)**: `ApiResult[KeyRatiosResponse, GetKeyRatiosErrorBody]`
- **Error**: `GetKeyRatiosErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `KeyRatiosResponse` | `upstox/models/key_ratios_response.py` |
| `GetKeyRatiosErrorBody` | `upstox/errors/get_key_ratios_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.fundamentals.get_share_holdings

- **Route**: `GET /v2/fundamentals/{isin}/share-holdings`
- **Auth**: `oauth2`
- **Signature**: `def get_share_holdings(isin: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `isin`
- **Params**: `isin` — path
- **Returns (parsed)**: `ShareHoldingsResponse`
- **Returns (raw)**: `ApiResult[ShareHoldingsResponse, GetShareHoldingsErrorBody]`
- **Error**: `GetShareHoldingsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ShareHoldingsResponse` | `upstox/models/share_holdings_response.py` |
| `GetShareHoldingsErrorBody` | `upstox/errors/get_share_holdings_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

