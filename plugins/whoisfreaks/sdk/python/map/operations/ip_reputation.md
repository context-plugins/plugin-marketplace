<!-- Generated file — do not edit; regenerated with the SDK. -->

# IpReputation — operations

Accessor: `client.ip_reputation` · Source: `whois_freaks/apis/ip_reputation.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ip_reputation.bulk_ip_reputation

- **Route**: `POST /v1.0/security`
- **Auth**: `api_key_auth`
- **Signature**: `def bulk_ip_reputation(body: V10SecurityRequest | V10SecurityRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[IpReputationResponse]`
- **Returns (raw)**: `ApiResult[list[IpReputationResponse], BulkIpReputationErrorBody]`
- **Error**: `BulkIpReputationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V10SecurityRequest` | `whois_freaks/models/v10_security_request.py` |
| `V10SecurityRequestDict` | `whois_freaks/models/v10_security_request.py` |
| `IpReputationResponse` | `whois_freaks/models/ip_reputation_response.py` |
| `BulkIpReputationErrorBody` | `whois_freaks/errors/bulk_ip_reputation_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

### client.ip_reputation.ip_reputation

- **Route**: `GET /v1.0/security`
- **Auth**: `api_key_auth`
- **Signature**: `def ip_reputation(ip: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ip`
- **Params**: `ip` — query
- **Returns (parsed)**: `IpReputationResponse`
- **Returns (raw)**: `ApiResult[IpReputationResponse, IpReputationErrorBody]`
- **Error**: `IpReputationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IpReputationResponse` | `whois_freaks/models/ip_reputation_response.py` |
| `IpReputationErrorBody` | `whois_freaks/errors/ip_reputation_error.py` |
| `ErrorResponse` | `whois_freaks/models/error_response.py` |

