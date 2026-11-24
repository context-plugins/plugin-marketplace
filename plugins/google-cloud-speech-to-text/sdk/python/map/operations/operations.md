<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `google_cloud_speech_to_text/apis/operations.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.operations.speech_operations_get

- **Route**: `GET /v1/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def speech_operations_get(operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `operations_id`
- **Params**: `operations_id` — path `operationsId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, SpeechOperationsGetErrorBody]`
- **Error**: `SpeechOperationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_speech_to_text/models/operation.py` |
| `SpeechOperationsGetErrorBody` | `google_cloud_speech_to_text/errors/speech_operations_get_error.py` |
| `GoogleRpcError` | `google_cloud_speech_to_text/models/google_rpc_error.py` |

### client.operations.speech_operations_list

- **Route**: `GET /v1/operations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def speech_operations_list(*, filter_: str | None = None, name: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `filter` · `name` — query · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `return_partial_success` — query `returnPartialSuccess`
- **Returns (parsed)**: `ListOperationsResponse`
- **Returns (raw)**: `ApiResult[ListOperationsResponse, SpeechOperationsListErrorBody]`
- **Error**: `SpeechOperationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListOperationsResponse` | `google_cloud_speech_to_text/models/list_operations_response.py` |
| `SpeechOperationsListErrorBody` | `google_cloud_speech_to_text/errors/speech_operations_list_error.py` |
| `GoogleRpcError` | `google_cloud_speech_to_text/models/google_rpc_error.py` |

