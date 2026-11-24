<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesSubdomains — operations

Accessor: `client.databases_subdomains` · Source: `whois_freaks/apis/databases_subdomains.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.databases_subdomains.db_subdomains_daily

- **Route**: `GET /v3.2/download/dbupdate/daily/subdomains`
- **Auth**: `api_key_auth`
- **Signature**: `def db_subdomains_daily(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbSubdomainsDailyErrorBody]`
- **Error**: `DbSubdomainsDailyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbSubdomainsDailyErrorBody` | `whois_freaks/errors/db_subdomains_daily_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_subdomains.db_subdomains_monthly

- **Route**: `GET /v3.2/download/dbupdate/monthly/subdomains`
- **Auth**: `api_key_auth`
- **Signature**: `def db_subdomains_monthly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbSubdomainsMonthlyErrorBody]`
- **Error**: `DbSubdomainsMonthlyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbSubdomainsMonthlyErrorBody` | `whois_freaks/errors/db_subdomains_monthly_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_subdomains.db_subdomains_weekly

- **Route**: `GET /v3.2/download/dbupdate/weekly/subdomains`
- **Auth**: `api_key_auth`
- **Signature**: `def db_subdomains_weekly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbSubdomainsWeeklyErrorBody]`
- **Error**: `DbSubdomainsWeeklyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbSubdomainsWeeklyErrorBody` | `whois_freaks/errors/db_subdomains_weekly_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

