<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesDns — operations

Accessor: `client.databases_dns` · Source: `whois_freaks/apis/databases_dns.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.databases_dns.db_dns_daily

- **Route**: `GET /v3.2/download/dbupdate/daily/dns`
- **Auth**: `api_key_auth`
- **Signature**: `def db_dns_daily(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbDnsDailyErrorBody]`
- **Error**: `DbDnsDailyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbDnsDailyErrorBody` | `whois_freaks/errors/db_dns_daily_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_dns.db_dns_monthly

- **Route**: `GET /v3.2/download/dbupdate/monthly/dns`
- **Auth**: `api_key_auth`
- **Signature**: `def db_dns_monthly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbDnsMonthlyErrorBody]`
- **Error**: `DbDnsMonthlyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbDnsMonthlyErrorBody` | `whois_freaks/errors/db_dns_monthly_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_dns.db_dns_weekly

- **Route**: `GET /v3.2/download/dbupdate/weekly/dns`
- **Auth**: `api_key_auth`
- **Signature**: `def db_dns_weekly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbDnsWeeklyErrorBody]`
- **Error**: `DbDnsWeeklyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbDnsWeeklyErrorBody` | `whois_freaks/errors/db_dns_weekly_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

