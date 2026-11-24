<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `whois_freaks/apis/account.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account.account_usage

- **Route**: `GET /v1.0/whoisapi/usage`
- **Auth**: `api_key_auth`
- **Signature**: `def account_usage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `AccountUsageResponse`
- **Returns (raw)**: `ApiResult[AccountUsageResponse, AccountUsageErrorBody]`
- **Error**: `AccountUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccountUsageResponse` | `whois_freaks/models/account_usage_response.py` |
| `AccountUsageErrorBody` | `whois_freaks/errors/account_usage_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.account.database_file_status

- **Route**: `GET /v3.4/status`
- **Signature**: `def database_file_status(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `DatabaseFileStatus`
- **Returns (raw)**: `ApiResult[DatabaseFileStatus, DatabaseFileStatusErrorBody]`
- **Error**: `DatabaseFileStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatabaseFileStatus` | `whois_freaks/models/database_file_status.py` |
| `DatabaseFileStatusErrorBody` | `whois_freaks/errors/database_file_status_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.account.rotate_api_key

- **Route**: `GET /v1.0/api-key/rotate`
- **Auth**: `api_key_auth`
- **Signature**: `def rotate_api_key(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, RotateApiKeyErrorBody]`
- **Error**: `RotateApiKeyErrorBody` — **Case A (typed)**
- **Error arms**: `str` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RotateApiKeyErrorBody` | `whois_freaks/errors/rotate_api_key_error.py` |

