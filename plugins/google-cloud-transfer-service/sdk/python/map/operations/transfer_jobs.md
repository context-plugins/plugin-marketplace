<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferJobs — operations

Accessor: `client.transfer_jobs` · Source: `google_cloud_storage_transfer_service/apis/transfer_jobs.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.transfer_jobs.storagetransfer_transfer_jobs_create

- **Route**: `POST /v1/transferJobs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_transfer_jobs_create(body: TransferJob | TransferJobDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TransferJob`
- **Returns (raw)**: `ApiResult[TransferJob, StoragetransferTransferJobsCreateErrorBody]`
- **Error**: `StoragetransferTransferJobsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransferJob` | `google_cloud_storage_transfer_service/models/transfer_job.py` |
| `TransferJobDict` | `google_cloud_storage_transfer_service/models/transfer_job.py` |
| `StoragetransferTransferJobsCreateErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_transfer_jobs_create_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

### client.transfer_jobs.storagetransfer_transfer_jobs_delete

- **Route**: `DELETE /v1/transferJobs/{transferJobsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_transfer_jobs_delete(transfer_jobs_id: str, project_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transfer_jobs_id`, `project_id`
- **Params**: `transfer_jobs_id` — path `transferJobsId` · `project_id` — query `projectId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, StoragetransferTransferJobsDeleteErrorBody]`
- **Error**: `StoragetransferTransferJobsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StoragetransferTransferJobsDeleteErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_transfer_jobs_delete_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

### client.transfer_jobs.storagetransfer_transfer_jobs_get

- **Route**: `GET /v1/transferJobs/{transferJobsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_transfer_jobs_get(transfer_jobs_id: str, project_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transfer_jobs_id`, `project_id`
- **Params**: `transfer_jobs_id` — path `transferJobsId` · `project_id` — query `projectId`
- **Returns (parsed)**: `TransferJob`
- **Returns (raw)**: `ApiResult[TransferJob, StoragetransferTransferJobsGetErrorBody]`
- **Error**: `StoragetransferTransferJobsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransferJob` | `google_cloud_storage_transfer_service/models/transfer_job.py` |
| `StoragetransferTransferJobsGetErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_transfer_jobs_get_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

### client.transfer_jobs.storagetransfer_transfer_jobs_list

- **Route**: `GET /v1/transferJobs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_transfer_jobs_list(filter_: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `filter_`
- **Params**: `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListTransferJobsResponse`
- **Returns (raw)**: `ApiResult[ListTransferJobsResponse, StoragetransferTransferJobsListErrorBody]`
- **Error**: `StoragetransferTransferJobsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListTransferJobsResponse` | `google_cloud_storage_transfer_service/models/list_transfer_jobs_response.py` |
| `StoragetransferTransferJobsListErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_transfer_jobs_list_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

### client.transfer_jobs.storagetransfer_transfer_jobs_patch

- **Route**: `PATCH /v1/transferJobs/{transferJobsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_transfer_jobs_patch(transfer_jobs_id: str, body: UpdateTransferJobRequest | UpdateTransferJobRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transfer_jobs_id`, `body`
- **Params**: `transfer_jobs_id` — path `transferJobsId` · `body` — JSON body
- **Returns (parsed)**: `TransferJob`
- **Returns (raw)**: `ApiResult[TransferJob, StoragetransferTransferJobsPatchErrorBody]`
- **Error**: `StoragetransferTransferJobsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateTransferJobRequest` | `google_cloud_storage_transfer_service/models/update_transfer_job_request.py` |
| `UpdateTransferJobRequestDict` | `google_cloud_storage_transfer_service/models/update_transfer_job_request.py` |
| `TransferJob` | `google_cloud_storage_transfer_service/models/transfer_job.py` |
| `StoragetransferTransferJobsPatchErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_transfer_jobs_patch_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

### client.transfer_jobs.storagetransfer_transfer_jobs_run

- **Route**: `POST /v1/transferJobs/{transferJobsId}:run`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_transfer_jobs_run(transfer_jobs_id: str, body: RunTransferJobRequest | RunTransferJobRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transfer_jobs_id`, `body`
- **Params**: `transfer_jobs_id` — path `transferJobsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, StoragetransferTransferJobsRunErrorBody]`
- **Error**: `StoragetransferTransferJobsRunErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RunTransferJobRequest` | `google_cloud_storage_transfer_service/models/run_transfer_job_request.py` |
| `RunTransferJobRequestDict` | `google_cloud_storage_transfer_service/models/run_transfer_job_request.py` |
| `Operation` | `google_cloud_storage_transfer_service/models/operation.py` |
| `StoragetransferTransferJobsRunErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_transfer_jobs_run_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

