<!-- Generated file — do not edit; regenerated with the SDK. -->

# Whois — operations

Accessor: `client.whois` · Source: `whois_freaks/apis/whois.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.whois.bulk_whois

- **Route**: `POST /v2.0/bulkwhois/live`
- **Auth**: `api_key_auth`
- **Signature**: `def bulk_whois(body: V20BulkwhoisLiveRequest | V20BulkwhoisLiveRequestDict, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `format_` — query `format` · `body` — JSON body
- **Returns (parsed)**: `BulkWhoisResponse`
- **Returns (raw)**: `ApiResult[BulkWhoisResponse, BulkWhoisErrorBody]`
- **Error**: `BulkWhoisErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V20BulkwhoisLiveRequest` | `whois_freaks/models/v20_bulkwhois_live_request.py` |
| `V20BulkwhoisLiveRequestDict` | `whois_freaks/models/v20_bulkwhois_live_request.py` |
| `FormatOrStr` | `whois_freaks/models/enums/format.py` |
| `BulkWhoisResponse` | `whois_freaks/models/bulk_whois_response.py` |
| `BulkWhoisErrorBody` | `whois_freaks/errors/bulk_whois_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.whois.whois_history

- **Route**: `GET /v2.0/whois/history`
- **Auth**: `api_key_auth`
- **Signature**: `def whois_history(domain_name: str, *, page: int | None = None, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain_name`
- **Params**: `domain_name` — query `domainName` · `page` — query · `format_` — query `format`
- **Returns (parsed)**: `WhoisHistoricalResponse`
- **Returns (raw)**: `ApiResult[WhoisHistoricalResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `FormatOrStr` | `whois_freaks/models/enums/format.py` |
| `WhoisHistoricalResponse` | `whois_freaks/models/whois_historical_response.py` |

### client.whois.whois_live

- **Route**: `GET /v2.0/whois/live`
- **Auth**: `api_key_auth`
- **Signature**: `def whois_live(domain_name: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain_name`
- **Params**: `domain_name` — query `domainName` · `format_` — query `format`
- **Returns (parsed)**: `WhoisResponse`
- **Returns (raw)**: `ApiResult[WhoisResponse, WhoisLiveErrorBody]`
- **Error**: `WhoisLiveErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `whois_freaks/models/enums/format.py` |
| `WhoisResponse` | `whois_freaks/models/whois_response.py` |
| `WhoisLiveErrorBody` | `whois_freaks/errors/whois_live_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.whois.whois_reverse

- **Route**: `GET /v2.0/whois/reverse`
- **Auth**: `api_key_auth`
- **Signature**: `def whois_reverse(keyword: str, *, page: int | None = None, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `keyword`
- **Params**: `keyword` — query · `page` — query · `format_` — query `format`
- **Returns (parsed)**: `ReverseWhoisResponse`
- **Returns (raw)**: `ApiResult[ReverseWhoisResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `FormatOrStr` | `whois_freaks/models/enums/format.py` |
| `ReverseWhoisResponse` | `whois_freaks/models/reverse_whois_response.py` |

