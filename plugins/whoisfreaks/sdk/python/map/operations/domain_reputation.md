<!-- Generated file — do not edit; regenerated with the SDK. -->

# DomainReputation — operations

Accessor: `client.domain_reputation` · Source: `whois_freaks/apis/domain_reputation.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.domain_reputation.domain_reputation

- **Route**: `GET /v1/domain/security`
- **Auth**: `api_key_auth`
- **Signature**: `def domain_reputation(domain_name: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain_name`
- **Params**: `domain_name` — query `domainName` · `format_` — query `format`
- **Returns (parsed)**: `DomainReputationResponse`
- **Returns (raw)**: `ApiResult[DomainReputationResponse, DomainReputationErrorBody]`
- **Error**: `DomainReputationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `whois_freaks/models/enums/format.py` |
| `DomainReputationResponse` | `whois_freaks/models/domain_reputation_response.py` |
| `DomainReputationErrorBody` | `whois_freaks/errors/domain_reputation_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

