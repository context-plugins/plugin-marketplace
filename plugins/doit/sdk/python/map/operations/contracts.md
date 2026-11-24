<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contracts — operations

Accessor: `client.contracts` · Source: `doi_t/apis/contracts.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.contracts.activate_contract

- **Route**: `POST /customers/{customerID}/contracts/{contractID}/activate`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def activate_contract(customer_id: str, contract_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `contract_id`
- **Params**: `customer_id` — path `customerID` · `contract_id` — path `contractID`
- **Returns (parsed)**: `ContractLifecycleResponse`
- **Returns (raw)**: `ApiResult[ContractLifecycleResponse, ActivateContractErrorBody]`
- **Error**: `ActivateContractErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [409, anything unmapped]

| Type | Source |
| --- | --- |
| `ContractLifecycleResponse` | `doi_t/models/contract_lifecycle_response.py` |
| `ActivateContractErrorBody` | `doi_t/errors/activate_contract_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.contracts.cancel_contract

- **Route**: `POST /customers/{customerID}/contracts/{contractID}/cancel`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def cancel_contract(customer_id: str, contract_id: str, *, body: CustomersContractsCancelRequest | CustomersContractsCancelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `contract_id`
- **Params**: `customer_id` — path `customerID` · `contract_id` — path `contractID` · `body` — JSON body
- **Returns (parsed)**: `ContractLifecycleResponse`
- **Returns (raw)**: `ApiResult[ContractLifecycleResponse, CancelContractErrorBody]`
- **Error**: `CancelContractErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomersContractsCancelRequest` | `doi_t/models/customers_contracts_cancel_request.py` |
| `CustomersContractsCancelRequestDict` | `doi_t/models/customers_contracts_cancel_request.py` |
| `ContractLifecycleResponse` | `doi_t/models/contract_lifecycle_response.py` |
| `CancelContractErrorBody` | `doi_t/errors/cancel_contract_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.contracts.create_contract

- **Route**: `POST /customers/{customerID}/contracts`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_contract(customer_id: str, body: MtsContractCreateInput | MtsContractCreateInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `body`
- **Params**: `customer_id` — path `customerID` · `body` — JSON body
- **Returns (parsed)**: `CreateContractResponse`
- **Returns (raw)**: `ApiResult[CreateContractResponse, CreateContractErrorBody]`
- **Error**: `CreateContractErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MtsContractCreateInput` | `doi_t/models/mts_contract_create_input.py` |
| `MtsContractCreateInputDict` | `doi_t/models/mts_contract_create_input.py` |
| `CreateContractResponse` | `doi_t/models/create_contract_response.py` |
| `CreateContractErrorBody` | `doi_t/errors/create_contract_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.contracts.get_contract

- **Route**: `GET /customers/{customerID}/contracts/{contractID}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_contract(customer_id: str, contract_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `contract_id`
- **Params**: `customer_id` — path `customerID` · `contract_id` — path `contractID`
- **Returns (parsed)**: `MtsContractDetailResponse`
- **Returns (raw)**: `ApiResult[MtsContractDetailResponse, GetContractErrorBody]`
- **Error**: `GetContractErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MtsContractDetailResponse` | `doi_t/models/mts_contract_detail_response.py` |
| `GetContractErrorBody` | `doi_t/errors/get_contract_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.contracts.list_contracts

- **Route**: `GET /customers/{customerID}/contracts`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_contracts(customer_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerID`
- **Returns (parsed)**: `list[MtsContractResponse]`
- **Returns (raw)**: `ApiResult[list[MtsContractResponse], ListContractsErrorBody]`
- **Error**: `ListContractsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MtsContractResponse` | `doi_t/models/mts_contract_response.py` |
| `ListContractsErrorBody` | `doi_t/errors/list_contracts_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.contracts.update_contract

- **Route**: `POST /customers/{customerID}/contracts/{contractID}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_contract(customer_id: str, contract_id: str, body: MtsContractInput | MtsContractInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `contract_id`, `body`
- **Params**: `customer_id` — path `customerID` · `contract_id` — path `contractID` · `body` — JSON body
- **Returns (parsed)**: `CreateContractResponse`
- **Returns (raw)**: `ApiResult[CreateContractResponse, UpdateContractErrorBody]`
- **Error**: `UpdateContractErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MtsContractInput` | `doi_t/models/mts_contract_input.py` |
| `MtsContractInputDict` | `doi_t/models/mts_contract_input.py` |
| `CreateContractResponse` | `doi_t/models/create_contract_response.py` |
| `UpdateContractErrorBody` | `doi_t/errors/update_contract_error.py` |
| `Error` | `doi_t/models/error.py` |

