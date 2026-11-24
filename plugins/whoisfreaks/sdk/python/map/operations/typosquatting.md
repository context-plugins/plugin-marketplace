<!-- Generated file — do not edit; regenerated with the SDK. -->

# Typosquatting — operations

Accessor: `client.typosquatting` · Source: `whois_freaks/apis/typosquatting.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.typosquatting.typosquatting

- **Route**: `GET /v3.0/domain/typos`
- **Auth**: `api_key_auth`
- **Signature**: `def typosquatting(*, keyword: str | None = None, pattern: str | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `keyword` — query · `pattern` — query · `page_token` — query `pageToken`
- **Returns (parsed)**: `TyposquattingResponse`
- **Returns (raw)**: `ApiResult[TyposquattingResponse, TyposquattingErrorBody]`
- **Error**: `TyposquattingErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TyposquattingResponse` | `whois_freaks/models/typosquatting_response.py` |
| `TyposquattingErrorBody` | `whois_freaks/errors/typosquatting_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

