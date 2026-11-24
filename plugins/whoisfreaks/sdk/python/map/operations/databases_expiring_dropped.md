<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesExpiringDropped — operations

Accessor: `client.databases_expiring_dropped` · Source: `whois_freaks/apis/databases_expiring_dropped.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.databases_expiring_dropped.db_dropped

- **Route**: `GET /v3.1/download/domainer/dropped`
- **Auth**: `api_key_auth`
- **Signature**: `def db_dropped(whois: bool, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `whois`
- **Params**: `whois` — query · `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbDroppedErrorBody]`
- **Error**: `DbDroppedErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbDroppedErrorBody` | `whois_freaks/errors/db_dropped_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_expiring_dropped.db_dropped_backlinks

- **Route**: `GET /v3.3/download/domainer/dropped/backlinks`
- **Auth**: `api_key_auth`
- **Signature**: `def db_dropped_backlinks(*, whois: bool | None = None, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `whois` — query · `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbDroppedBacklinksErrorBody]`
- **Error**: `DbDroppedBacklinksErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbDroppedBacklinksErrorBody` | `whois_freaks/errors/db_dropped_backlinks_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_expiring_dropped.db_dropped_json

- **Route**: `GET /v3.1/domains/dropped`
- **Auth**: `api_key_auth`
- **Signature**: `def db_dropped_json(*, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query · `tlds` — query
- **Returns (parsed)**: `list[str]`
- **Returns (raw)**: `ApiResult[list[str], DbDroppedJsonErrorBody]`
- **Error**: `DbDroppedJsonErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbDroppedJsonErrorBody` | `whois_freaks/errors/db_dropped_json_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_expiring_dropped.db_expired

- **Route**: `GET /v3.1/download/domainer/expired`
- **Auth**: `api_key_auth`
- **Signature**: `def db_expired(whois: bool, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `whois`
- **Params**: `whois` — query · `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbExpiredErrorBody]`
- **Error**: `DbExpiredErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbExpiredErrorBody` | `whois_freaks/errors/db_expired_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_expiring_dropped.db_expired_cleaned

- **Route**: `GET /v3.1/download/domainer/expired/cleaned`
- **Auth**: `api_key_auth`
- **Signature**: `def db_expired_cleaned(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbExpiredCleanedErrorBody]`
- **Error**: `DbExpiredCleanedErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbExpiredCleanedErrorBody` | `whois_freaks/errors/db_expired_cleaned_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

