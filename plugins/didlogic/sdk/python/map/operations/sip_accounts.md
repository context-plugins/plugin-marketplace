<!-- Generated file — do not edit; regenerated with the SDK. -->

# SipAccounts — operations

Accessor: `client.sip_accounts` · Source: `did_logic/apis/sip_accounts.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sip_accounts.sipaccounts_allowed_ips_create

- **Route**: `POST /api/v1/sipaccounts/{sipaccount_id}/allowed_ips`
- **Auth**: `bearer_auth`
- **Signature**: `def sipaccounts_allowed_ips_create(sipaccount_id: str, body: ApiV1SipaccountsAllowedIpsRequest | ApiV1SipaccountsAllowedIpsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sipaccount_id`, `body`
- **Params**: `sipaccount_id` — path · `body` — JSON body
- **Returns (parsed)**: `ApiV1SipaccountsAllowedIpsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1SipaccountsAllowedIpsResponse1, SipaccountsAllowedIpsCreateErrorBody]`
- **Error**: `SipaccountsAllowedIpsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SipaccountsAllowedIps403Error1` [403] · `Error` [404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SipaccountsAllowedIpsRequest` | `did_logic/models/api_v1_sipaccounts_allowed_ips_request.py` |
| `ApiV1SipaccountsAllowedIpsRequestDict` | `did_logic/models/api_v1_sipaccounts_allowed_ips_request.py` |
| `ApiV1SipaccountsAllowedIpsResponse1` | `did_logic/models/api_v1_sipaccounts_allowed_ips_response1.py` |
| `SipaccountsAllowedIpsCreateErrorBody` | `did_logic/errors/sipaccounts_allowed_ips_create_error.py` |
| `ApiV1SipaccountsAllowedIps403Error1` | `did_logic/models/api_v1_sipaccounts_allowed_ips403_error1.py` |
| `Error` | `did_logic/models/error.py` |

### client.sip_accounts.sipaccounts_allowed_ips_destroy

- **Route**: `DELETE /api/v1/sipaccounts/{sipaccount_id}/allowed_ips`
- **Auth**: `bearer_auth`
- **Signature**: `def sipaccounts_allowed_ips_destroy(sipaccount_id: str, ip: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sipaccount_id`, `ip`
- **Params**: `sipaccount_id` — path · `ip` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SipaccountsAllowedIpsDestroyErrorBody]`
- **Error**: `SipaccountsAllowedIpsDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SipaccountsAllowedIps403Error1` [403] · `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SipaccountsAllowedIpsDestroyErrorBody` | `did_logic/errors/sipaccounts_allowed_ips_destroy_error.py` |
| `ApiV1SipaccountsAllowedIps403Error1` | `did_logic/models/api_v1_sipaccounts_allowed_ips403_error1.py` |
| `Error` | `did_logic/models/error.py` |

### client.sip_accounts.sipaccounts_allowed_ips_index

- **Route**: `GET /api/v1/sipaccounts/{sipaccount_id}/allowed_ips`
- **Auth**: `bearer_auth`
- **Signature**: `def sipaccounts_allowed_ips_index(sipaccount_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sipaccount_id`
- **Params**: `sipaccount_id` — path
- **Returns (parsed)**: `ApiV1SipaccountsAllowedIpsResponse`
- **Returns (raw)**: `ApiResult[ApiV1SipaccountsAllowedIpsResponse, SipaccountsAllowedIpsIndexErrorBody]`
- **Error**: `SipaccountsAllowedIpsIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SipaccountsAllowedIps403Error1` [403] · `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SipaccountsAllowedIpsResponse` | `did_logic/models/api_v1_sipaccounts_allowed_ips_response.py` |
| `SipaccountsAllowedIpsIndexErrorBody` | `did_logic/errors/sipaccounts_allowed_ips_index_error.py` |
| `ApiV1SipaccountsAllowedIps403Error1` | `did_logic/models/api_v1_sipaccounts_allowed_ips403_error1.py` |
| `Error` | `did_logic/models/error.py` |

### client.sip_accounts.sipaccounts_create

- **Route**: `POST /api/v1/sipaccounts`
- **Auth**: `bearer_auth`
- **Signature**: `def sipaccounts_create(body: ApiV1SipaccountsRequest | ApiV1SipaccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SipaccountsResponse2`
- **Returns (raw)**: `ApiResult[ApiV1SipaccountsResponse2, SipaccountsCreateErrorBody]`
- **Error**: `SipaccountsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SipaccountsResponse11` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SipaccountsRequest` | `did_logic/models/api_v1_sipaccounts_request.py` |
| `ApiV1SipaccountsRequestDict` | `did_logic/models/api_v1_sipaccounts_request.py` |
| `ApiV1SipaccountsResponse2` | `did_logic/models/api_v1_sipaccounts_response2.py` |
| `SipaccountsCreateErrorBody` | `did_logic/errors/sipaccounts_create_error.py` |
| `ApiV1SipaccountsResponse11` | `did_logic/models/unions/api_v1_sipaccounts_response11.py` |

### client.sip_accounts.sipaccounts_destroy

- **Route**: `DELETE /api/v1/sipaccounts/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def sipaccounts_destroy(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SipaccountsDestroyErrorBody]`
- **Error**: `SipaccountsDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Sipaccounts403Error1` [403] · `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SipaccountsDestroyErrorBody` | `did_logic/errors/sipaccounts_destroy_error.py` |
| `ApiV1Sipaccounts403Error1` | `did_logic/models/api_v1_sipaccounts403_error1.py` |
| `Error` | `did_logic/models/error.py` |

### client.sip_accounts.sipaccounts_index

- **Route**: `GET /api/v1/sipaccounts`
- **Auth**: `bearer_auth`
- **Signature**: `def sipaccounts_index(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1SipaccountsResponse`
- **Returns (raw)**: `ApiResult[ApiV1SipaccountsResponse, SipaccountsIndexErrorBody]`
- **Error**: `SipaccountsIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1SipaccountsResponse11` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SipaccountsResponse` | `did_logic/models/api_v1_sipaccounts_response.py` |
| `SipaccountsIndexErrorBody` | `did_logic/errors/sipaccounts_index_error.py` |
| `ApiV1SipaccountsResponse11` | `did_logic/models/unions/api_v1_sipaccounts_response11.py` |

### client.sip_accounts.sipaccounts_show

- **Route**: `GET /api/v1/sipaccounts/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def sipaccounts_show(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1SipaccountsResponse4`
- **Returns (raw)**: `ApiResult[ApiV1SipaccountsResponse4, SipaccountsShowErrorBody]`
- **Error**: `SipaccountsShowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Sipaccounts403Error1` [403] · `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SipaccountsResponse4` | `did_logic/models/api_v1_sipaccounts_response4.py` |
| `SipaccountsShowErrorBody` | `did_logic/errors/sipaccounts_show_error.py` |
| `ApiV1Sipaccounts403Error1` | `did_logic/models/api_v1_sipaccounts403_error1.py` |
| `Error` | `did_logic/models/error.py` |

### client.sip_accounts.sipaccounts_update

- **Route**: `PATCH /api/v1/sipaccounts/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def sipaccounts_update(id_: str, body: ApiV1SipaccountsRequest1 | ApiV1SipaccountsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1SipaccountsResponse5`
- **Returns (raw)**: `ApiResult[ApiV1SipaccountsResponse5, SipaccountsUpdateErrorBody]`
- **Error**: `SipaccountsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Sipaccounts403Error1` [403] · `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SipaccountsRequest1` | `did_logic/models/api_v1_sipaccounts_request1.py` |
| `ApiV1SipaccountsRequest1Dict` | `did_logic/models/api_v1_sipaccounts_request1.py` |
| `ApiV1SipaccountsResponse5` | `did_logic/models/api_v1_sipaccounts_response5.py` |
| `SipaccountsUpdateErrorBody` | `did_logic/errors/sipaccounts_update_error.py` |
| `ApiV1Sipaccounts403Error1` | `did_logic/models/api_v1_sipaccounts403_error1.py` |
| `Error` | `did_logic/models/error.py` |

