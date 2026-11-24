<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesNewlyRegistered — operations

Accessor: `client.databases_newly_registered` · Source: `whois_freaks/apis/databases_newly_registered.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.databases_newly_registered.db_newly_cctld

- **Route**: `GET /v3.1/download/domainer/cctld`
- **Auth**: `api_key_auth`
- **Signature**: `def db_newly_cctld(whois: bool, *, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `whois`
- **Params**: `whois` — query · `date` — query · `tlds` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbNewlyCctldErrorBody]`
- **Error**: `DbNewlyCctldErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbNewlyCctldErrorBody` | `whois_freaks/errors/db_newly_cctld_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_newly_registered.db_newly_cctld_cleaned

- **Route**: `GET /v3.1/download/domainer/cctld/cleaned`
- **Auth**: `api_key_auth`
- **Signature**: `def db_newly_cctld_cleaned(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbNewlyCctldCleanedErrorBody]`
- **Error**: `DbNewlyCctldCleanedErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbNewlyCctldCleanedErrorBody` | `whois_freaks/errors/db_newly_cctld_cleaned_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_newly_registered.db_newly_cctld_json

- **Route**: `GET /v3.1/domains/newly/cctld`
- **Auth**: `api_key_auth`
- **Signature**: `def db_newly_cctld_json(*, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query · `tlds` — query
- **Returns (parsed)**: `list[str]`
- **Returns (raw)**: `ApiResult[list[str], DbNewlyCctldJsonErrorBody]`
- **Error**: `DbNewlyCctldJsonErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbNewlyCctldJsonErrorBody` | `whois_freaks/errors/db_newly_cctld_json_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_newly_registered.db_newly_dns

- **Route**: `GET /v3.1/download/domainer/newly/dns`
- **Auth**: `api_key_auth`
- **Signature**: `def db_newly_dns(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbNewlyDnsErrorBody]`
- **Error**: `DbNewlyDnsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbNewlyDnsErrorBody` | `whois_freaks/errors/db_newly_dns_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_newly_registered.db_newly_gtld

- **Route**: `GET /v3.1/download/domainer/gtld`
- **Auth**: `api_key_auth`
- **Signature**: `def db_newly_gtld(whois: bool, *, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `whois`
- **Params**: `whois` — query · `date` — query · `tlds` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbNewlyGtldErrorBody]`
- **Error**: `DbNewlyGtldErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbNewlyGtldErrorBody` | `whois_freaks/errors/db_newly_gtld_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_newly_registered.db_newly_gtld_cleaned

- **Route**: `GET /v3.1/download/domainer/gtld/cleaned`
- **Auth**: `api_key_auth`
- **Signature**: `def db_newly_gtld_cleaned(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbNewlyGtldCleanedErrorBody]`
- **Error**: `DbNewlyGtldCleanedErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbNewlyGtldCleanedErrorBody` | `whois_freaks/errors/db_newly_gtld_cleaned_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_newly_registered.db_newly_gtld_json

- **Route**: `GET /v3.1/domains/newly/gtld`
- **Auth**: `api_key_auth`
- **Signature**: `def db_newly_gtld_json(*, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query · `tlds` — query
- **Returns (parsed)**: `list[str]`
- **Returns (raw)**: `ApiResult[list[str], DbNewlyGtldJsonErrorBody]`
- **Error**: `DbNewlyGtldJsonErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbNewlyGtldJsonErrorBody` | `whois_freaks/errors/db_newly_gtld_json_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

