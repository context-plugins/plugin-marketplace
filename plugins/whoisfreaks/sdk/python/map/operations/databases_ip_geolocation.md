<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesIpGeolocation — operations

Accessor: `client.databases_ip_geolocation` · Source: `whois_freaks/apis/databases_ip_geolocation.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.databases_ip_geolocation.db_ip_city

- **Route**: `GET /v3.3/download/snapshot/ip/city`
- **Auth**: `api_key_auth`
- **Signature**: `def db_ip_city(date: Date, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `date`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbIpCityErrorBody]`
- **Error**: `DbIpCityErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbIpCityErrorBody` | `whois_freaks/errors/db_ip_city_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_ip_geolocation.db_ip_city_status

- **Route**: `GET /v3.3/status/snapshot/ip/city`
- **Auth**: `api_key_auth`
- **Signature**: `def db_ip_city_status(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `SnapshotStatus`
- **Returns (raw)**: `ApiResult[SnapshotStatus, DbIpCityStatusErrorBody]`
- **Error**: `DbIpCityStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SnapshotStatus` | `whois_freaks/models/snapshot_status.py` |
| `DbIpCityStatusErrorBody` | `whois_freaks/errors/db_ip_city_status_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_ip_geolocation.db_ip_country

- **Route**: `GET /v3.3/download/snapshot/ip/country`
- **Auth**: `api_key_auth`
- **Signature**: `def db_ip_country(date: Date, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `date`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbIpCountryErrorBody]`
- **Error**: `DbIpCountryErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbIpCountryErrorBody` | `whois_freaks/errors/db_ip_country_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_ip_geolocation.db_ip_country_status

- **Route**: `GET /v3.3/status/snapshot/ip/country`
- **Auth**: `api_key_auth`
- **Signature**: `def db_ip_country_status(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `SnapshotStatus`
- **Returns (raw)**: `ApiResult[SnapshotStatus, DbIpCountryStatusErrorBody]`
- **Error**: `DbIpCountryStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SnapshotStatus` | `whois_freaks/models/snapshot_status.py` |
| `DbIpCountryStatusErrorBody` | `whois_freaks/errors/db_ip_country_status_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

