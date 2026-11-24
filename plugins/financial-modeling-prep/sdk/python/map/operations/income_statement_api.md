<!-- Generated file — do not edit; regenerated with the SDK. -->

# IncomeStatementApi — operations

Accessor: `client.income_statement_api` · Source: `financial_modeling_prep/apis/income_statement_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.income_statement_api.get_income_statement

- **Route**: `GET /income-statement/{symbol}`
- **Auth**: `api_key_query`
- **Signature**: `def get_income_statement(symbol: str, *, period: PeriodOrStr | None = Period.ANNUAL, limit: int | None = 40, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `symbol`
- **Params**: `symbol` — path · `period` — query · `limit` — query
- **Returns (parsed)**: `list[IncomeStatement]`
- **Returns (raw)**: `ApiResult[list[IncomeStatement], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PeriodOrStr` | `financial_modeling_prep/models/enums/period.py` |
| `IncomeStatement` | `financial_modeling_prep/models/income_statement.py` |

