<!-- Generated file — do not edit; regenerated with the SDK. -->

# CashFlowStatement — operations

Accessor: `client.cash_flow_statement` · Source: `financial_modeling_prep/apis/cash_flow_statement.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.cash_flow_statement.get_cash_flow_statement

- **Route**: `GET /cash-flow-statement/{symbol}`
- **Auth**: `api_key_query`
- **Signature**: `def get_cash_flow_statement(symbol: str, *, period: PeriodOrStr | None = Period.ANNUAL, limit: int | None = 40, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `symbol`
- **Params**: `symbol` — path · `period` — query · `limit` — query
- **Returns (parsed)**: `list[Any]`
- **Returns (raw)**: `ApiResult[list[Any], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PeriodOrStr` | `financial_modeling_prep/models/enums/period.py` |

