<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesIpSecurity — operations

Accessor: `client.databases_ip_security` · Source: `whois_freaks/apis/databases_ip_security.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.databases_ip_security.db_ip_security

- **Route**: `GET /v3.3/download/snapshot/ip/security`
- **Auth**: `api_key_auth`
- **Signature**: `def db_ip_security(date: Date, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `date`
- **Params**: `date` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DbIpSecurityErrorBody]`
- **Error**: `DbIpSecurityErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DbIpSecurityErrorBody` | `whois_freaks/errors/db_ip_security_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.databases_ip_security.db_ip_security_status

- **Route**: `GET /v3.3/status/snapshot/ip/security`
- **Auth**: `api_key_auth`
- **Signature**: `def db_ip_security_status(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `SnapshotStatus`
- **Returns (raw)**: `ApiResult[SnapshotStatus, DbIpSecurityStatusErrorBody]`
- **Error**: `DbIpSecurityStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SnapshotStatus` | `whois_freaks/models/snapshot_status.py` |
| `DbIpSecurityStatusErrorBody` | `whois_freaks/errors/db_ip_security_status_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

