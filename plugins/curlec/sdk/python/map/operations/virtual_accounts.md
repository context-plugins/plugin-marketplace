<!-- Generated file — do not edit; regenerated with the SDK. -->

# VirtualAccounts — operations

Accessor: `client.virtual_accounts` · Source: `curlec/apis/virtual_accounts.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.virtual_accounts.add_allowed_payer

- **Route**: `POST /virtual_accounts/{va_id}/allowed_payers`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def add_allowed_payer(va_id: str, body: VirtualAccountsAllowedPayersRequest | VirtualAccountsAllowedPayersRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `va_id`, `body`
- **Params**: `va_id` — path · `body` — JSON body
- **Returns (parsed)**: `VirtualAccount`
- **Returns (raw)**: `ApiResult[VirtualAccount, AddAllowedPayerErrorBody]`
- **Error**: `AddAllowedPayerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VirtualAccountsAllowedPayersRequest` | `curlec/models/virtual_accounts_allowed_payers_request.py` |
| `VirtualAccountsAllowedPayersRequestDict` | `curlec/models/virtual_accounts_allowed_payers_request.py` |
| `VirtualAccount` | `curlec/models/virtual_account.py` |
| `AddAllowedPayerErrorBody` | `curlec/errors/add_allowed_payer_error.py` |
| `Error` | `curlec/models/error.py` |

### client.virtual_accounts.add_vpa_receiver

- **Route**: `POST /virtual_accounts/{id}/receivers`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def add_vpa_receiver(id_: str, body: VirtualAccountsReceiversRequest | VirtualAccountsReceiversRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `VirtualAccount`
- **Returns (raw)**: `ApiResult[VirtualAccount, AddVpaReceiverErrorBody]`
- **Error**: `AddVpaReceiverErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VirtualAccountsReceiversRequest` | `curlec/models/virtual_accounts_receivers_request.py` |
| `VirtualAccountsReceiversRequestDict` | `curlec/models/virtual_accounts_receivers_request.py` |
| `VirtualAccount` | `curlec/models/virtual_account.py` |
| `AddVpaReceiverErrorBody` | `curlec/errors/add_vpa_receiver_error.py` |
| `Error` | `curlec/models/error.py` |

### client.virtual_accounts.close_virtual_account

- **Route**: `POST /virtual_accounts/{id}/close`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def close_virtual_account(id_: str, body: VirtualAccountsCloseRequest | VirtualAccountsCloseRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `VirtualAccount`
- **Returns (raw)**: `ApiResult[VirtualAccount, CloseVirtualAccountErrorBody]`
- **Error**: `CloseVirtualAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VirtualAccountsCloseRequest` | `curlec/models/virtual_accounts_close_request.py` |
| `VirtualAccountsCloseRequestDict` | `curlec/models/virtual_accounts_close_request.py` |
| `VirtualAccount` | `curlec/models/virtual_account.py` |
| `CloseVirtualAccountErrorBody` | `curlec/errors/close_virtual_account_error.py` |
| `Error` | `curlec/models/error.py` |

### client.virtual_accounts.create_virtual_account

- **Route**: `POST /virtual_accounts`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_virtual_account(body: VirtualAccountsRequest | VirtualAccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `VirtualAccount`
- **Returns (raw)**: `ApiResult[VirtualAccount, CreateVirtualAccountErrorBody]`
- **Error**: `CreateVirtualAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VirtualAccountsRequest` | `curlec/models/virtual_accounts_request.py` |
| `VirtualAccountsRequestDict` | `curlec/models/virtual_accounts_request.py` |
| `VirtualAccount` | `curlec/models/virtual_account.py` |
| `CreateVirtualAccountErrorBody` | `curlec/errors/create_virtual_account_error.py` |
| `Error` | `curlec/models/error.py` |

### client.virtual_accounts.delete_allowed_payer

- **Route**: `DELETE /virtual_accounts/{va_id}/allowed_payers/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def delete_allowed_payer(va_id: str, id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `va_id`, `id_`
- **Params**: `va_id` — path · `id_` — path `id`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteAllowedPayerErrorBody]`
- **Error**: `DeleteAllowedPayerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAllowedPayerErrorBody` | `curlec/errors/delete_allowed_payer_error.py` |
| `Error` | `curlec/models/error.py` |

### client.virtual_accounts.fetch_bank_transfer

- **Route**: `GET /payments/{id}/bank_transfer`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_bank_transfer(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `BankTransfer`
- **Returns (raw)**: `ApiResult[BankTransfer, FetchBankTransferErrorBody]`
- **Error**: `FetchBankTransferErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BankTransfer` | `curlec/models/bank_transfer.py` |
| `FetchBankTransferErrorBody` | `curlec/errors/fetch_bank_transfer_error.py` |
| `Error` | `curlec/models/error.py` |

### client.virtual_accounts.fetch_virtual_account

- **Route**: `GET /virtual_accounts/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_virtual_account(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `VirtualAccount`
- **Returns (raw)**: `ApiResult[VirtualAccount, FetchVirtualAccountErrorBody]`
- **Error**: `FetchVirtualAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VirtualAccount` | `curlec/models/virtual_account.py` |
| `FetchVirtualAccountErrorBody` | `curlec/errors/fetch_virtual_account_error.py` |
| `Error` | `curlec/models/error.py` |

### client.virtual_accounts.fetch_virtual_account_payments

- **Route**: `GET /virtual_accounts/{id}/payments`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_virtual_account_payments(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `VirtualAccountsPaymentsResponse`
- **Returns (raw)**: `ApiResult[VirtualAccountsPaymentsResponse, FetchVirtualAccountPaymentsErrorBody]`
- **Error**: `FetchVirtualAccountPaymentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VirtualAccountsPaymentsResponse` | `curlec/models/virtual_accounts_payments_response.py` |
| `FetchVirtualAccountPaymentsErrorBody` | `curlec/errors/fetch_virtual_account_payments_error.py` |
| `Error` | `curlec/models/error.py` |

### client.virtual_accounts.list_virtual_accounts

- **Route**: `GET /virtual_accounts`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def list_virtual_accounts(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `from_` — query `from` · `to` — query · `count` — query · `skip` — query
- **Returns (parsed)**: `VirtualAccountsResponse`
- **Returns (raw)**: `ApiResult[VirtualAccountsResponse, ListVirtualAccountsErrorBody]`
- **Error**: `ListVirtualAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VirtualAccountsResponse` | `curlec/models/virtual_accounts_response.py` |
| `ListVirtualAccountsErrorBody` | `curlec/errors/list_virtual_accounts_error.py` |
| `Error` | `curlec/models/error.py` |

### client.virtual_accounts.update_virtual_account

- **Route**: `PATCH /virtual_accounts/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_virtual_account(id_: str, body: VirtualAccountsRequest1 | VirtualAccountsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `VirtualAccount`
- **Returns (raw)**: `ApiResult[VirtualAccount, UpdateVirtualAccountErrorBody]`
- **Error**: `UpdateVirtualAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VirtualAccountsRequest1` | `curlec/models/virtual_accounts_request1.py` |
| `VirtualAccountsRequest1Dict` | `curlec/models/virtual_accounts_request1.py` |
| `VirtualAccount` | `curlec/models/virtual_account.py` |
| `UpdateVirtualAccountErrorBody` | `curlec/errors/update_virtual_account_error.py` |
| `Error` | `curlec/models/error.py` |

