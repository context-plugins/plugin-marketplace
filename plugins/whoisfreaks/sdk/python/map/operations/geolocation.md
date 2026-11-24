<!-- Generated file — do not edit; regenerated with the SDK. -->

# Geolocation — operations

Accessor: `client.geolocation` · Source: `whois_freaks/apis/geolocation.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.geolocation.bulk_geolocation

- **Route**: `POST /v1.0/geolocation`
- **Auth**: `api_key_auth`
- **Signature**: `def bulk_geolocation(body: V10GeolocationRequest | V10GeolocationRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[GeolocationResponse]`
- **Returns (raw)**: `ApiResult[list[GeolocationResponse], BulkGeolocationErrorBody]`
- **Error**: `BulkGeolocationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V10GeolocationRequest` | `whois_freaks/models/v10_geolocation_request.py` |
| `V10GeolocationRequestDict` | `whois_freaks/models/v10_geolocation_request.py` |
| `GeolocationResponse` | `whois_freaks/models/geolocation_response.py` |
| `BulkGeolocationErrorBody` | `whois_freaks/errors/bulk_geolocation_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.geolocation.geolocation

- **Route**: `GET /v1.0/geolocation`
- **Auth**: `api_key_auth`
- **Signature**: `def geolocation(ip: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ip`
- **Params**: `ip` — query
- **Returns (parsed)**: `GeolocationResponse`
- **Returns (raw)**: `ApiResult[GeolocationResponse, GeolocationErrorBody]`
- **Error**: `GeolocationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GeolocationResponse` | `whois_freaks/models/geolocation_response.py` |
| `GeolocationErrorBody` | `whois_freaks/errors/geolocation_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

