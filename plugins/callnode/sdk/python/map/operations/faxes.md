<!-- Generated file — do not edit; regenerated with the SDK. -->

# Faxes — operations

Accessor: `client.faxes` · Source: `call_node/apis/faxes.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.faxes.delete_fax

- **Route**: `DELETE /api/v1/faxes/{id}`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def delete_fax(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteFaxErrorBody]`
- **Error**: `DeleteFaxErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteFaxErrorBody` | `call_node/errors/delete_fax_error.py` |
| `Error` | `call_node/models/error.py` |

### client.faxes.download_fax

- **Route**: `GET /api/v1/faxes/{id}/download`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def download_fax(id_: str, *, format_: FormatOrStr | None = Format.PDF, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `format_` — query `format`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DownloadFaxErrorBody]`
- **Error**: `DownloadFaxErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `call_node/models/enums/format.py` |
| `DownloadFaxErrorBody` | `call_node/errors/download_fax_error.py` |
| `Error` | `call_node/models/error.py` |

### client.faxes.get_fax

- **Route**: `GET /api/v1/faxes/{id}`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def get_fax(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Fax`
- **Returns (raw)**: `ApiResult[Fax, GetFaxErrorBody]`
- **Error**: `GetFaxErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Fax` | `call_node/models/fax.py` |
| `GetFaxErrorBody` | `call_node/errors/get_fax_error.py` |
| `Error` | `call_node/models/error.py` |

### client.faxes.list_faxes

- **Route**: `GET /api/v1/faxes`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def list_faxes(*, direction: DirectionOrStr | None = None, status: StatusCallnodeIoFaxesApiOrStr | None = None, limit: int | None = 25, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `direction` — query · `status` — query · `limit` — query · `cursor` — query
- **Returns (parsed)**: `ApiV1FaxesResponse`
- **Returns (raw)**: `ApiResult[ApiV1FaxesResponse, ListFaxesErrorBody]`
- **Error**: `ListFaxesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DirectionOrStr` | `call_node/models/enums/direction.py` |
| `StatusCallnodeIoFaxesApiOrStr` | `call_node/models/enums/status_callnode_io_faxes_api.py` |
| `ApiV1FaxesResponse` | `call_node/models/api_v1_faxes_response.py` |
| `ListFaxesErrorBody` | `call_node/errors/list_faxes_error.py` |
| `Error` | `call_node/models/error.py` |

### client.faxes.send_fax

- **Route**: `POST /api/v1/faxes`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def send_fax(body: SendFaxRequest | SendFaxRequestDict, *, x_idempotency_key: UUID | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_idempotency_key` — header `X-Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `Fax`
- **Returns (raw)**: `ApiResult[Fax, SendFaxErrorBody]`
- **Error**: `SendFaxErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 403, 413, 415, 422, 429, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SendFaxRequest` | `call_node/models/send_fax_request.py` |
| `SendFaxRequestDict` | `call_node/models/send_fax_request.py` |
| `Fax` | `call_node/models/fax.py` |
| `SendFaxErrorBody` | `call_node/errors/send_fax_error.py` |
| `Error` | `call_node/models/error.py` |

