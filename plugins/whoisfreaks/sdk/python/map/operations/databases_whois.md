<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesWhois — operations

Accessor: `client.databases_whois` · Source: `whois_freaks/apis/databases_whois.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.databases_whois.db_whois_daily

- **Route**: `GET /v3.3/download/dbupdate/daily/domains/whois`
- **Auth**: `api_key_auth`
- **Signature**: `def db_whois_daily(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbWhoisDailyErrorBody]`
- **Error**: `DbWhoisDailyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbWhoisDailyErrorBody` | `whois_freaks/errors/db_whois_daily_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_whois.db_whois_monthly

- **Route**: `GET /v3.3/download/dbupdate/monthly/domains/whois`
- **Auth**: `api_key_auth`
- **Signature**: `def db_whois_monthly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbWhoisMonthlyErrorBody]`
- **Error**: `DbWhoisMonthlyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbWhoisMonthlyErrorBody` | `whois_freaks/errors/db_whois_monthly_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_whois.db_whois_weekly

- **Route**: `GET /v3.3/download/dbupdate/weekly/domains/whois`
- **Auth**: `api_key_auth`
- **Signature**: `def db_whois_weekly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbWhoisWeeklyErrorBody]`
- **Error**: `DbWhoisWeeklyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbWhoisWeeklyErrorBody` | `whois_freaks/errors/db_whois_weekly_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

