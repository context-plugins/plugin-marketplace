<!-- Generated file — do not edit; regenerated with the SDK. -->

# Financials — operations

Accessor: `client.financials` · Source: `compabase/apis/financials.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.financials.get_companies_krs_by_krs_financial_documents

- **Route**: `GET /companies/krs/{krs}/financial-documents`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_financial_documents(krs: str, *, limit: int | None = 25, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path · `limit` — query · `offset` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCompaniesKrsByKrsFinancialDocumentsErrorBody]`
- **Error**: `GetCompaniesKrsByKrsFinancialDocumentsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsFinancialDocumentsErrorBody` | `compabase/errors/get_companies_krs_by_krs_financial_documents_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.financials.get_companies_krs_by_krs_financial_statements

- **Route**: `GET /companies/krs/{krs}/financial-statements`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_financial_statements(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCompaniesKrsByKrsFinancialStatementsErrorBody]`
- **Error**: `GetCompaniesKrsByKrsFinancialStatementsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsFinancialStatementsErrorBody` | `compabase/errors/get_companies_krs_by_krs_financial_statements_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.financials.get_companies_krs_by_krs_statistics

- **Route**: `GET /companies/krs/{krs}/statistics`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_statistics(krs: str, *, locale: str | None = "en", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path · `locale` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCompaniesKrsByKrsStatisticsErrorBody]`
- **Error**: `GetCompaniesKrsByKrsStatisticsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsStatisticsErrorBody` | `compabase/errors/get_companies_krs_by_krs_statistics_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

