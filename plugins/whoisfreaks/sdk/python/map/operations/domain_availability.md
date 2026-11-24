<!-- Generated file — do not edit; regenerated with the SDK. -->

# DomainAvailability — operations

Accessor: `client.domain_availability` · Source: `whois_freaks/apis/domain_availability.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.domain_availability.bulk_domain_availability_v2

- **Route**: `POST /v2.0/domain/availability`
- **Auth**: `api_key_auth`
- **Signature**: `def bulk_domain_availability_v2(body: BulkDomainAvailabilityRequest | BulkDomainAvailabilityRequestDict, *, domain: str | None = None, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `domain` — query · `format_` — query `format` · `body` — JSON body
- **Returns (parsed)**: `BulkDomainAvailabilityResponse`
- **Returns (raw)**: `ApiResult[BulkDomainAvailabilityResponse, BulkDomainAvailabilityV2ErrorBody]`
- **Error**: `BulkDomainAvailabilityV2ErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkDomainAvailabilityRequest` | `whois_freaks/models/bulk_domain_availability_request.py` |
| `BulkDomainAvailabilityRequestDict` | `whois_freaks/models/bulk_domain_availability_request.py` |
| `FormatOrStr` | `whois_freaks/models/enums/format.py` |
| `BulkDomainAvailabilityResponse` | `whois_freaks/models/bulk_domain_availability_response.py` |
| `BulkDomainAvailabilityV2ErrorBody` | `whois_freaks/errors/bulk_domain_availability_v2_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.domain_availability.domain_availability_v2

- **Route**: `GET /v2.0/domain/availability`
- **Auth**: `api_key_auth`
- **Signature**: `def domain_availability_v2(domain: str, *, sug: bool | None = False, count: int | None = 5, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain`
- **Params**: `domain` — query · `sug` — query · `count` — query · `format_` — query `format`
- **Returns (parsed)**: `DomainAvailabilityResponse`
- **Returns (raw)**: `ApiResult[DomainAvailabilityResponse, DomainAvailabilityV2ErrorBody]`
- **Error**: `DomainAvailabilityV2ErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `whois_freaks/models/enums/format.py` |
| `DomainAvailabilityResponse` | `whois_freaks/models/domain_availability_response.py` |
| `DomainAvailabilityV2ErrorBody` | `whois_freaks/errors/domain_availability_v2_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

