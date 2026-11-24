<!-- Generated file — do not edit; regenerated with the SDK. -->

# IpWhois — operations

Accessor: `client.ip_whois` · Source: `whois_freaks/apis/ip_whois.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ip_whois.ip_whois

- **Route**: `GET /v1.0/ip-whois`
- **Auth**: `api_key_auth`
- **Signature**: `def ip_whois(ip: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ip`
- **Params**: `ip` — query · `format_` — query `format`
- **Returns (parsed)**: `IpWhoisResponse`
- **Returns (raw)**: `ApiResult[IpWhoisResponse, IpWhoisErrorBody]`
- **Error**: `IpWhoisErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `whois_freaks/models/enums/format.py` |
| `IpWhoisResponse` | `whois_freaks/models/ip_whois_response.py` |
| `IpWhoisErrorBody` | `whois_freaks/errors/ip_whois_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

