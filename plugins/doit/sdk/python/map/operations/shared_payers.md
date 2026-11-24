<!-- Generated file — do not edit; regenerated with the SDK. -->

# SharedPayers — operations

Accessor: `client.shared_payers` · Source: `doi_t/apis/shared_payers.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.shared_payers.list_shared_payer_account_mappings

- **Route**: `GET /customers/v1/customers/{customerId}/shared-payer-accounts`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_shared_payer_account_mappings(customer_id: str, *, management_account: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerId` · `management_account` — query `managementAccount`
- **Returns (parsed)**: `SharedPayerAccountMappingList`
- **Returns (raw)**: `ApiResult[SharedPayerAccountMappingList, ListSharedPayerAccountMappingsErrorBody]`
- **Error**: `ListSharedPayerAccountMappingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SharedPayerAccountMappingList` | `doi_t/models/shared_payer_account_mapping_list.py` |
| `ListSharedPayerAccountMappingsErrorBody` | `doi_t/errors/list_shared_payer_account_mappings_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.shared_payers.list_shared_payer_management_accounts

- **Route**: `GET /customers/v1/customers/{customerId}/shared-payer-accounts/management-accounts`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_shared_payer_management_accounts(customer_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerId`
- **Returns (parsed)**: `SharedPayerManagementAccountList`
- **Returns (raw)**: `ApiResult[SharedPayerManagementAccountList, ListSharedPayerManagementAccountsErrorBody]`
- **Error**: `ListSharedPayerManagementAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SharedPayerManagementAccountList` | `doi_t/models/shared_payer_management_account_list.py` |
| `ListSharedPayerManagementAccountsErrorBody` | `doi_t/errors/list_shared_payer_management_accounts_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.shared_payers.list_shared_payers

- **Route**: `GET /customers/v1/customers/{customerId}/shared-payer-accounts/payers`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_shared_payers(customer_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerId`
- **Returns (parsed)**: `SharedPayerList`
- **Returns (raw)**: `ApiResult[SharedPayerList, ListSharedPayersErrorBody]`
- **Error**: `ListSharedPayersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SharedPayerList` | `doi_t/models/shared_payer_list.py` |
| `ListSharedPayersErrorBody` | `doi_t/errors/list_shared_payers_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.shared_payers.reassign_shared_payer_account

- **Route**: `PATCH /customers/v1/customers/{customerId}/shared-payer-accounts/{assetId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def reassign_shared_payer_account(customer_id: str, asset_id: str, body: SharedPayerAccountReassignRequest | SharedPayerAccountReassignRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `asset_id`, `body`
- **Params**: `customer_id` — path `customerId` · `asset_id` — path `assetId` · `body` — JSON body
- **Returns (parsed)**: `SharedPayerAccountReassignResult`
- **Returns (raw)**: `ApiResult[SharedPayerAccountReassignResult, ReassignSharedPayerAccountErrorBody]`
- **Error**: `ReassignSharedPayerAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SharedPayerAccountReassignRequest` | `doi_t/models/shared_payer_account_reassign_request.py` |
| `SharedPayerAccountReassignRequestDict` | `doi_t/models/shared_payer_account_reassign_request.py` |
| `SharedPayerAccountReassignResult` | `doi_t/models/shared_payer_account_reassign_result.py` |
| `ReassignSharedPayerAccountErrorBody` | `doi_t/errors/reassign_shared_payer_account_error.py` |
| `Error` | `doi_t/models/error.py` |

