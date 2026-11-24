<!-- Generated file — do not edit; regenerated with the SDK. -->

# AsnWhois — operations

Accessor: `client.asn_whois` · Source: `whois_freaks/apis/asn_whois.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.asn_whois.asn_whois

- **Route**: `GET /v2.0/asn-whois`
- **Auth**: `api_key_auth`
- **Signature**: `def asn_whois(asn: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `asn`
- **Params**: `asn` — query · `format_` — query `format`
- **Returns (parsed)**: `AsnWhoisResponse`
- **Returns (raw)**: `ApiResult[AsnWhoisResponse, AsnWhoisErrorBody]`
- **Error**: `AsnWhoisErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `whois_freaks/models/enums/format.py` |
| `AsnWhoisResponse` | `whois_freaks/models/asn_whois_response.py` |
| `AsnWhoisErrorBody` | `whois_freaks/errors/asn_whois_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

