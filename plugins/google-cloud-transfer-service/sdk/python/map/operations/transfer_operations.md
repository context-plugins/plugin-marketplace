<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferOperations — operations

Accessor: `client.transfer_operations` · Source: `google_cloud_storage_transfer_service/apis/transfer_operations.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.transfer_operations.storagetransfer_transfer_operations_cancel

- **Route**: `POST /v1/transferOperations/{transferOperationsId}:cancel`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_transfer_operations_cancel(transfer_operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transfer_operations_id`, `body`
- **Params**: `transfer_operations_id` — path `transferOperationsId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, StoragetransferTransferOperationsCancelErrorBody]`
- **Error**: `StoragetransferTransferOperationsCancelErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StoragetransferTransferOperationsCancelErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_transfer_operations_cancel_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

### client.transfer_operations.storagetransfer_transfer_operations_get

- **Route**: `GET /v1/transferOperations/{transferOperationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_transfer_operations_get(transfer_operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transfer_operations_id`
- **Params**: `transfer_operations_id` — path `transferOperationsId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, StoragetransferTransferOperationsGetErrorBody]`
- **Error**: `StoragetransferTransferOperationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_storage_transfer_service/models/operation.py` |
| `StoragetransferTransferOperationsGetErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_transfer_operations_get_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

### client.transfer_operations.storagetransfer_transfer_operations_list

- **Route**: `GET /v1/transferOperations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_transfer_operations_list(filter_: str, *, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `filter_`
- **Params**: `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `return_partial_success` — query `returnPartialSuccess`
- **Returns (parsed)**: `ListOperationsResponse`
- **Returns (raw)**: `ApiResult[ListOperationsResponse, StoragetransferTransferOperationsListErrorBody]`
- **Error**: `StoragetransferTransferOperationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListOperationsResponse` | `google_cloud_storage_transfer_service/models/list_operations_response.py` |
| `StoragetransferTransferOperationsListErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_transfer_operations_list_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

### client.transfer_operations.storagetransfer_transfer_operations_pause

- **Route**: `POST /v1/transferOperations/{transferOperationsId}:pause`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_transfer_operations_pause(transfer_operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transfer_operations_id`, `body`
- **Params**: `transfer_operations_id` — path `transferOperationsId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, StoragetransferTransferOperationsPauseErrorBody]`
- **Error**: `StoragetransferTransferOperationsPauseErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StoragetransferTransferOperationsPauseErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_transfer_operations_pause_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

### client.transfer_operations.storagetransfer_transfer_operations_resume

- **Route**: `POST /v1/transferOperations/{transferOperationsId}:resume`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_transfer_operations_resume(transfer_operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transfer_operations_id`, `body`
- **Params**: `transfer_operations_id` — path `transferOperationsId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, StoragetransferTransferOperationsResumeErrorBody]`
- **Error**: `StoragetransferTransferOperationsResumeErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StoragetransferTransferOperationsResumeErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_transfer_operations_resume_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

