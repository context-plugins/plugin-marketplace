<!-- Generated file — do not edit; regenerated with the SDK. -->

# SipTrunks — operations

Accessor: `client.sip_trunks` · Source: `call_node/apis/sip_trunks.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sip_trunks.create_sip_trunk

- **Route**: `POST /api/v1/trunks`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def create_sip_trunk(body: CreateTrunkRequest | CreateTrunkRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SipTrunk`
- **Returns (raw)**: `ApiResult[SipTrunk, CreateSipTrunkErrorBody]`
- **Error**: `CreateSipTrunkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 403, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateTrunkRequest` | `call_node/models/create_trunk_request.py` |
| `CreateTrunkRequestDict` | `call_node/models/create_trunk_request.py` |
| `SipTrunk` | `call_node/models/sip_trunk.py` |
| `CreateSipTrunkErrorBody` | `call_node/errors/create_sip_trunk_error.py` |
| `Error` | `call_node/models/error.py` |

### client.sip_trunks.delete_sip_trunk

- **Route**: `DELETE /api/v1/trunks/{id}`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def delete_sip_trunk(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1TrunksResponse1`
- **Returns (raw)**: `ApiResult[ApiV1TrunksResponse1, DeleteSipTrunkErrorBody]`
- **Error**: `DeleteSipTrunkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TrunksResponse1` | `call_node/models/api_v1_trunks_response1.py` |
| `DeleteSipTrunkErrorBody` | `call_node/errors/delete_sip_trunk_error.py` |
| `Error` | `call_node/models/error.py` |

### client.sip_trunks.get_sip_trunk

- **Route**: `GET /api/v1/trunks/{id}`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def get_sip_trunk(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `SipTrunk`
- **Returns (raw)**: `ApiResult[SipTrunk, GetSipTrunkErrorBody]`
- **Error**: `GetSipTrunkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SipTrunk` | `call_node/models/sip_trunk.py` |
| `GetSipTrunkErrorBody` | `call_node/errors/get_sip_trunk_error.py` |
| `Error` | `call_node/models/error.py` |

### client.sip_trunks.list_sip_trunks

- **Route**: `GET /api/v1/trunks`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def list_sip_trunks(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1TrunksResponse`
- **Returns (raw)**: `ApiResult[ApiV1TrunksResponse, ListSipTrunksErrorBody]`
- **Error**: `ListSipTrunksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TrunksResponse` | `call_node/models/api_v1_trunks_response.py` |
| `ListSipTrunksErrorBody` | `call_node/errors/list_sip_trunks_error.py` |
| `Error` | `call_node/models/error.py` |

### client.sip_trunks.rotate_sip_trunk_credentials

- **Route**: `POST /api/v1/trunks/{id}/rotate-credentials`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def rotate_sip_trunk_credentials(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `SipTrunk`
- **Returns (raw)**: `ApiResult[SipTrunk, RotateSipTrunkCredentialsErrorBody]`
- **Error**: `RotateSipTrunkCredentialsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `SipTrunk` | `call_node/models/sip_trunk.py` |
| `RotateSipTrunkCredentialsErrorBody` | `call_node/errors/rotate_sip_trunk_credentials_error.py` |
| `Error` | `call_node/models/error.py` |

### client.sip_trunks.update_sip_trunk

- **Route**: `PATCH /api/v1/trunks/{id}`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def update_sip_trunk(id_: str, body: UpdateTrunkRequest | UpdateTrunkRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `SipTrunk`
- **Returns (raw)**: `ApiResult[SipTrunk, UpdateSipTrunkErrorBody]`
- **Error**: `UpdateSipTrunkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateTrunkRequest` | `call_node/models/update_trunk_request.py` |
| `UpdateTrunkRequestDict` | `call_node/models/update_trunk_request.py` |
| `SipTrunk` | `call_node/models/sip_trunk.py` |
| `UpdateSipTrunkErrorBody` | `call_node/errors/update_sip_trunk_error.py` |
| `Error` | `call_node/models/error.py` |

