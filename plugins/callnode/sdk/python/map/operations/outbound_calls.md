<!-- Generated file — do not edit; regenerated with the SDK. -->

# OutboundCalls — operations

Accessor: `client.outbound_calls` · Source: `call_node/apis/outbound_calls.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.outbound_calls.cancel_call

- **Route**: `DELETE /api/v1/outbound/calls/{callId}`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def cancel_call(call_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `call_id`
- **Params**: `call_id` — path `callId`
- **Returns (parsed)**: `ApiV1OutboundCallsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1OutboundCallsResponse1, CancelCallErrorBody]`
- **Error**: `CancelCallErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1OutboundCallsResponse1` | `call_node/models/api_v1_outbound_calls_response1.py` |
| `CancelCallErrorBody` | `call_node/errors/cancel_call_error.py` |
| `Error` | `call_node/models/error.py` |

### client.outbound_calls.get_call

- **Route**: `GET /api/v1/outbound/calls/{callId}`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def get_call(call_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `call_id`
- **Params**: `call_id` — path `callId`
- **Returns (parsed)**: `Call`
- **Returns (raw)**: `ApiResult[Call, GetCallErrorBody]`
- **Error**: `GetCallErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Call` | `call_node/models/call.py` |
| `GetCallErrorBody` | `call_node/errors/get_call_error.py` |
| `Error` | `call_node/models/error.py` |

### client.outbound_calls.list_calls

- **Route**: `GET /api/v1/outbound/calls`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def list_calls(*, status: CallStatusOrStr | None = None, limit: int | None = 50, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `status` — query · `limit` — query · `cursor` — query
- **Returns (parsed)**: `ApiV1OutboundCallsResponse`
- **Returns (raw)**: `ApiResult[ApiV1OutboundCallsResponse, ListCallsErrorBody]`
- **Error**: `ListCallsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CallStatusOrStr` | `call_node/models/enums/call_status.py` |
| `ApiV1OutboundCallsResponse` | `call_node/models/api_v1_outbound_calls_response.py` |
| `ListCallsErrorBody` | `call_node/errors/list_calls_error.py` |
| `Error` | `call_node/models/error.py` |

### client.outbound_calls.originate_call

- **Route**: `POST /api/v1/outbound/calls`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def originate_call(body: OriginateRequest | OriginateRequestDict, *, x_idempotency_key: UUID | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_idempotency_key` — header `X-Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `OriginateResponse`
- **Returns (raw)**: `ApiResult[OriginateResponse, OriginateCallErrorBody]`
- **Error**: `OriginateCallErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OriginateRequest` | `call_node/models/originate_request.py` |
| `OriginateRequestDict` | `call_node/models/originate_request.py` |
| `OriginateResponse` | `call_node/models/originate_response.py` |
| `OriginateCallErrorBody` | `call_node/errors/originate_call_error.py` |
| `Error` | `call_node/models/error.py` |

### client.outbound_calls.transfer_call

- **Route**: `POST /api/v1/calls/{callId}/transfer`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def transfer_call(call_id: str, body: ApiV1CallsTransferRequest | ApiV1CallsTransferRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `call_id`, `body`
- **Params**: `call_id` — path `callId` · `body` — JSON body
- **Returns (parsed)**: `ApiV1CallsTransferResponse`
- **Returns (raw)**: `ApiResult[ApiV1CallsTransferResponse, TransferCallErrorBody]`
- **Error**: `TransferCallErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [400, 403, 404, 409, 422, 502, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CallsTransferRequest` | `call_node/models/api_v1_calls_transfer_request.py` |
| `ApiV1CallsTransferRequestDict` | `call_node/models/api_v1_calls_transfer_request.py` |
| `ApiV1CallsTransferResponse` | `call_node/models/api_v1_calls_transfer_response.py` |
| `TransferCallErrorBody` | `call_node/errors/transfer_call_error.py` |
| `Error` | `call_node/models/error.py` |

