<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoogleServiceAccounts — operations

Accessor: `client.google_service_accounts` · Source: `google_cloud_storage_transfer_service/apis/google_service_accounts.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.google_service_accounts.storagetransfer_google_service_accounts_get

- **Route**: `GET /v1/googleServiceAccounts/{projectId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_google_service_accounts_get(project_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`
- **Params**: `project_id` — path `projectId`
- **Returns (parsed)**: `GoogleServiceAccount`
- **Returns (raw)**: `ApiResult[GoogleServiceAccount, StoragetransferGoogleServiceAccountsGetErrorBody]`
- **Error**: `StoragetransferGoogleServiceAccountsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleServiceAccount` | `google_cloud_storage_transfer_service/models/google_service_account.py` |
| `StoragetransferGoogleServiceAccountsGetErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_google_service_accounts_get_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

