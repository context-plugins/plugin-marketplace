<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subdomains — operations

Accessor: `client.subdomains` · Source: `whois_freaks/apis/subdomains.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.subdomains.subdomains

- **Route**: `GET /v1.0/subdomains`
- **Auth**: `api_key_auth`
- **Signature**: `def subdomains(domain: str, *, after: Date | None = None, before: Date | None = None, status: StatusOrStr | None = None, page: int | None = 1, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query · `after` — query · `before` — query · `status` — query · `page` — query · `format_` — query `format`
- **Returns (parsed)**: `SubdomainsResponse`
- **Returns (raw)**: `ApiResult[SubdomainsResponse, SubdomainsErrorBody]`
- **Error**: `SubdomainsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusOrStr` | `whois_freaks/models/enums/status.py` |
| `FormatOrStr` | `whois_freaks/models/enums/format.py` |
| `SubdomainsResponse` | `whois_freaks/models/subdomains_response.py` |
| `SubdomainsErrorBody` | `whois_freaks/errors/subdomains_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

