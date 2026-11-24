<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ssl — operations

Accessor: `client.ssl` · Source: `whois_freaks/apis/ssl.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ssl.ssl_lookup

- **Route**: `GET /v1.0/ssl/live`
- **Auth**: `api_key_auth`
- **Signature**: `def ssl_lookup(domain_name: str, *, chain: bool | None = False, ssl_raw: bool | None = False, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain_name`
- **Params**: `domain_name` — query `domainName` · `chain` — query · `ssl_raw` — query `sslRaw` · `format_` — query `format`
- **Returns (parsed)**: `SslResponse`
- **Returns (raw)**: `ApiResult[SslResponse, SslLookupErrorBody]`
- **Error**: `SslLookupErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `whois_freaks/models/enums/format.py` |
| `SslResponse` | `whois_freaks/models/ssl_response.py` |
| `SslLookupErrorBody` | `whois_freaks/errors/ssl_lookup_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

