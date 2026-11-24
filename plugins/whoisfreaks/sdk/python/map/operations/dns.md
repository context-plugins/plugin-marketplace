<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dns — operations

Accessor: `client.dns` · Source: `whois_freaks/apis/dns.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.dns.dns_bulk

- **Route**: `POST /v2.0/dns/bulk/live`
- **Auth**: `api_key_auth`
- **Signature**: `def dns_bulk(body: V20DnsBulkLiveRequest | V20DnsBulkLiveRequestDict, *, type_: str = "all", format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `type_` — query `type` · `format_` — query `format` · `body` — JSON body
- **Returns (parsed)**: `BulkDnsResponse`
- **Returns (raw)**: `ApiResult[BulkDnsResponse, DnsBulkErrorBody]`
- **Error**: `DnsBulkErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V20DnsBulkLiveRequest` | `whois_freaks/models/v20_dns_bulk_live_request.py` |
| `V20DnsBulkLiveRequestDict` | `whois_freaks/models/v20_dns_bulk_live_request.py` |
| `FormatOrStr` | `whois_freaks/models/enums/format.py` |
| `BulkDnsResponse` | `whois_freaks/models/bulk_dns_response.py` |
| `DnsBulkErrorBody` | `whois_freaks/errors/dns_bulk_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.dns.dns_historical

- **Route**: `GET /v2.0/dns/historical`
- **Auth**: `api_key_auth`
- **Signature**: `def dns_historical(domain_name: str, *, type_: str = "all", page: int | None = 1, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain_name`
- **Params**: `domain_name` — query `domainName` · `type_` — query `type` · `page` — query · `format_` — query `format`
- **Returns (parsed)**: `HistoricalDnsResponse`
- **Returns (raw)**: `ApiResult[HistoricalDnsResponse, DnsHistoricalErrorBody]`
- **Error**: `DnsHistoricalErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `whois_freaks/models/enums/format.py` |
| `HistoricalDnsResponse` | `whois_freaks/models/historical_dns_response.py` |
| `DnsHistoricalErrorBody` | `whois_freaks/errors/dns_historical_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.dns.dns_live

- **Route**: `GET /v2.0/dns/live`
- **Auth**: `api_key_auth`
- **Signature**: `def dns_live(*, type_: str = "all", domain_name: str | None = None, ip_address: str | None = None, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `type_` — query `type` · `domain_name` — query `domainName` · `ip_address` — query `ipAddress` · `format_` — query `format`
- **Returns (parsed)**: `DnsResponse`
- **Returns (raw)**: `ApiResult[DnsResponse, DnsLiveErrorBody]`
- **Error**: `DnsLiveErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `whois_freaks/models/enums/format.py` |
| `DnsResponse` | `whois_freaks/models/dns_response.py` |
| `DnsLiveErrorBody` | `whois_freaks/errors/dns_live_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.dns.dns_reverse

- **Route**: `GET /v2.1/dns/reverse`
- **Auth**: `api_key_auth`
- **Signature**: `def dns_reverse(value: str, type_: TypeOrStr, *, exact: bool | None = True, page: int | None = 1, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `value`, `type_`
- **Params**: `value` — query · `type_` — query `type` · `exact` — query · `page` — query · `format_` — query `format`
- **Returns (parsed)**: `ReverseDnsResponse`
- **Returns (raw)**: `ApiResult[ReverseDnsResponse, DnsReverseErrorBody]`
- **Error**: `DnsReverseErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TypeOrStr` | `whois_freaks/models/enums/type.py` |
| `FormatOrStr` | `whois_freaks/models/enums/format.py` |
| `ReverseDnsResponse` | `whois_freaks/models/reverse_dns_response.py` |
| `DnsReverseErrorBody` | `whois_freaks/errors/dns_reverse_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

