<!-- Generated file — do not edit; regenerated with the SDK. -->

# BillingTransfer — operations

Accessor: `client.billing_transfer` · Source: `doi_t/apis/billing_transfer.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.billing_transfer.create_billing_transfer_end_customer_mappings

- **Route**: `POST /billingtransfer/v1/end-customer-mappings`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_billing_transfer_end_customer_mappings(body: EndCustomerMappingBatchCreate | EndCustomerMappingBatchCreateDict, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_tenant_id` — header `X-Tenant-Id` · `body` — JSON body
- **Returns (parsed)**: `EndCustomerMappingBatchResult`
- **Returns (raw)**: `ApiResult[EndCustomerMappingBatchResult, CreateBillingTransferEndCustomerMappingsErrorBody]`
- **Error**: `CreateBillingTransferEndCustomerMappingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500] · `BillingTransferProblemDetails` [403, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EndCustomerMappingBatchCreate` | `doi_t/models/end_customer_mapping_batch_create.py` |
| `EndCustomerMappingBatchCreateDict` | `doi_t/models/end_customer_mapping_batch_create.py` |
| `EndCustomerMappingBatchResult` | `doi_t/models/end_customer_mapping_batch_result.py` |
| `CreateBillingTransferEndCustomerMappingsErrorBody` | `doi_t/errors/create_billing_transfer_end_customer_mappings_error.py` |
| `Error` | `doi_t/models/error.py` |
| `BillingTransferProblemDetails` | `doi_t/models/billing_transfer_problem_details.py` |

### client.billing_transfer.create_billing_transfer_reseller_handshakes

- **Route**: `POST /billingtransfer/v1/resellerhandshakes`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_billing_transfer_reseller_handshakes(idempotency_key: str, body: ResellerHandshakeBatchCreate | ResellerHandshakeBatchCreateDict, *, dry_run: bool | None = False, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `idempotency_key`, `body`
- **Params**: `dry_run` — query `dryRun` · `idempotency_key` — header `Idempotency-Key` · `x_tenant_id` — header `X-Tenant-Id` · `body` — JSON body
- **Returns (parsed)**: `ResellerHandshakeBatchResult`
- **Returns (raw)**: `ApiResult[ResellerHandshakeBatchResult, CreateBillingTransferResellerHandshakesErrorBody]`
- **Error**: `CreateBillingTransferResellerHandshakesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500] · `BillingTransferProblemDetails` [403, 422, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResellerHandshakeBatchCreate` | `doi_t/models/reseller_handshake_batch_create.py` |
| `ResellerHandshakeBatchCreateDict` | `doi_t/models/reseller_handshake_batch_create.py` |
| `ResellerHandshakeBatchResult` | `doi_t/models/reseller_handshake_batch_result.py` |
| `CreateBillingTransferResellerHandshakesErrorBody` | `doi_t/errors/create_billing_transfer_reseller_handshakes_error.py` |
| `Error` | `doi_t/models/error.py` |
| `BillingTransferProblemDetails` | `doi_t/models/billing_transfer_problem_details.py` |

### client.billing_transfer.get_billing_transfer_program_management_accounts_status

- **Route**: `GET /billingtransfer/v1/programmanagementaccounts/status`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_billing_transfer_program_management_accounts_status(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `ProgramManagementAccountsStatusResponse`
- **Returns (raw)**: `ApiResult[ProgramManagementAccountsStatusResponse, GetBillingTransferProgramManagementAccountsStatusErrorBody]`
- **Error**: `GetBillingTransferProgramManagementAccountsStatusErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProgramManagementAccountsStatusResponse` | `doi_t/models/program_management_accounts_status_response.py` |
| `GetBillingTransferProgramManagementAccountsStatusErrorBody` | `doi_t/errors/get_billing_transfer_program_management_accounts_status_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.billing_transfer.list_billing_transfer_end_customers

- **Route**: `GET /billingtransfer/v1/end-customers`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_billing_transfer_end_customers(dpma_id: str, reseller_pma_account_id: str, *, include_revoked: bool | None = False, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `dpma_id`, `reseller_pma_account_id`
- **Params**: `dpma_id` — query `dpmaId` · `reseller_pma_account_id` — query `resellerPmaAccountId` · `include_revoked` — query `includeRevoked` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `ListEndCustomersResponse`
- **Returns (raw)**: `ApiResult[ListEndCustomersResponse, ListBillingTransferEndCustomersErrorBody]`
- **Error**: `ListBillingTransferEndCustomersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500] · `BillingTransferProblemDetails` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListEndCustomersResponse` | `doi_t/models/list_end_customers_response.py` |
| `ListBillingTransferEndCustomersErrorBody` | `doi_t/errors/list_billing_transfer_end_customers_error.py` |
| `Error` | `doi_t/models/error.py` |
| `BillingTransferProblemDetails` | `doi_t/models/billing_transfer_problem_details.py` |

### client.billing_transfer.list_billing_transfer_end_customers_by_reseller

- **Route**: `GET /billingtransfer/v1/resellers/{resellerPmaAccountId}/end-customers`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_billing_transfer_end_customers_by_reseller(reseller_pma_account_id: str, *, include_revoked: bool | None = False, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `reseller_pma_account_id`
- **Params**: `reseller_pma_account_id` — path `resellerPmaAccountId` · `include_revoked` — query `includeRevoked` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `ListEndCustomersResponse`
- **Returns (raw)**: `ApiResult[ListEndCustomersResponse, ListBillingTransferEndCustomersByResellerErrorBody]`
- **Error**: `ListBillingTransferEndCustomersByResellerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500] · `BillingTransferProblemDetails` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListEndCustomersResponse` | `doi_t/models/list_end_customers_response.py` |
| `ListBillingTransferEndCustomersByResellerErrorBody` | `doi_t/errors/list_billing_transfer_end_customers_by_reseller_error.py` |
| `Error` | `doi_t/models/error.py` |
| `BillingTransferProblemDetails` | `doi_t/models/billing_transfer_problem_details.py` |

### client.billing_transfer.list_billing_transfer_program_management_accounts

- **Route**: `GET /billingtransfer/v1/programmanagementaccounts`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_billing_transfer_program_management_accounts(*, max_results: int | None = 50, page_token: str | None = None, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `ProgramManagementAccountList`
- **Returns (raw)**: `ApiResult[ProgramManagementAccountList, ListBillingTransferProgramManagementAccountsErrorBody]`
- **Error**: `ListBillingTransferProgramManagementAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProgramManagementAccountList` | `doi_t/models/program_management_account_list.py` |
| `ListBillingTransferProgramManagementAccountsErrorBody` | `doi_t/errors/list_billing_transfer_program_management_accounts_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.billing_transfer.list_billing_transfer_reseller_accounts

- **Route**: `GET /billingtransfer/v1/reseller-accounts`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_billing_transfer_reseller_accounts(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `ListResellerAccountsResponse`
- **Returns (raw)**: `ApiResult[ListResellerAccountsResponse, ListBillingTransferResellerAccountsErrorBody]`
- **Error**: `ListBillingTransferResellerAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500] · `BillingTransferProblemDetails` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResellerAccountsResponse` | `doi_t/models/list_reseller_accounts_response.py` |
| `ListBillingTransferResellerAccountsErrorBody` | `doi_t/errors/list_billing_transfer_reseller_accounts_error.py` |
| `Error` | `doi_t/models/error.py` |
| `BillingTransferProblemDetails` | `doi_t/models/billing_transfer_problem_details.py` |

### client.billing_transfer.list_billing_transfer_reseller_accounts_with_tenants

- **Route**: `GET /billingtransfer/v1/reseller-accounts/end-customers`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_billing_transfer_reseller_accounts_with_tenants(*, include_revoked: bool | None = False, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `include_revoked` — query `includeRevoked` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `ListResellerAccountsWithTenantsResponse`
- **Returns (raw)**: `ApiResult[ListResellerAccountsWithTenantsResponse, ListBillingTransferResellerAccountsWithTenantsErrorBody]`
- **Error**: `ListBillingTransferResellerAccountsWithTenantsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500] · `BillingTransferProblemDetails` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResellerAccountsWithTenantsResponse` | `doi_t/models/list_reseller_accounts_with_tenants_response.py` |
| `ListBillingTransferResellerAccountsWithTenantsErrorBody` | `doi_t/errors/list_billing_transfer_reseller_accounts_with_tenants_error.py` |
| `Error` | `doi_t/models/error.py` |
| `BillingTransferProblemDetails` | `doi_t/models/billing_transfer_problem_details.py` |

