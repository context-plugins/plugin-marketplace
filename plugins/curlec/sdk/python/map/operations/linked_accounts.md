<!-- Generated file — do not edit; regenerated with the SDK. -->

# LinkedAccounts — operations

Accessor: `client.linked_accounts` · Source: `curlec/apis/linked_accounts.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.linked_accounts.create_linked_account

- **Route**: `POST /v2/accounts`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_linked_account(body: V2AccountsRequest | V2AccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `LinkedAccount`
- **Returns (raw)**: `ApiResult[LinkedAccount, CreateLinkedAccountErrorBody]`
- **Error**: `CreateLinkedAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2AccountsRequest` | `curlec/models/v2_accounts_request.py` |
| `V2AccountsRequestDict` | `curlec/models/v2_accounts_request.py` |
| `LinkedAccount` | `curlec/models/linked_account.py` |
| `CreateLinkedAccountErrorBody` | `curlec/errors/create_linked_account_error.py` |
| `Error` | `curlec/models/error.py` |

### client.linked_accounts.create_stakeholder

- **Route**: `POST /v2/accounts/{account_id}/stakeholders`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_stakeholder(account_id: str, body: V2AccountsStakeholdersRequest | V2AccountsStakeholdersRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `body`
- **Params**: `account_id` — path · `body` — JSON body
- **Returns (parsed)**: `Stakeholder`
- **Returns (raw)**: `ApiResult[Stakeholder, CreateStakeholderErrorBody]`
- **Error**: `CreateStakeholderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2AccountsStakeholdersRequest` | `curlec/models/v2_accounts_stakeholders_request.py` |
| `V2AccountsStakeholdersRequestDict` | `curlec/models/v2_accounts_stakeholders_request.py` |
| `Stakeholder` | `curlec/models/stakeholder.py` |
| `CreateStakeholderErrorBody` | `curlec/errors/create_stakeholder_error.py` |
| `Error` | `curlec/models/error.py` |

### client.linked_accounts.fetch_linked_account

- **Route**: `GET /v2/accounts/{account_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_linked_account(account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`
- **Params**: `account_id` — path
- **Returns (parsed)**: `LinkedAccount`
- **Returns (raw)**: `ApiResult[LinkedAccount, FetchLinkedAccountErrorBody]`
- **Error**: `FetchLinkedAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LinkedAccount` | `curlec/models/linked_account.py` |
| `FetchLinkedAccountErrorBody` | `curlec/errors/fetch_linked_account_error.py` |
| `Error` | `curlec/models/error.py` |

### client.linked_accounts.fetch_product_config

- **Route**: `GET /v2/accounts/{account_id}/products/{product_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_product_config(account_id: str, product_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `product_id`
- **Params**: `account_id` — path · `product_id` — path
- **Returns (parsed)**: `ProductConfiguration`
- **Returns (raw)**: `ApiResult[ProductConfiguration, FetchProductConfigErrorBody]`
- **Error**: `FetchProductConfigErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProductConfiguration` | `curlec/models/product_configuration.py` |
| `FetchProductConfigErrorBody` | `curlec/errors/fetch_product_config_error.py` |
| `Error` | `curlec/models/error.py` |

### client.linked_accounts.request_product_config

- **Route**: `POST /v2/accounts/{account_id}/products`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def request_product_config(account_id: str, body: V2AccountsProductsRequest | V2AccountsProductsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `body`
- **Params**: `account_id` — path · `body` — JSON body
- **Returns (parsed)**: `ProductConfiguration`
- **Returns (raw)**: `ApiResult[ProductConfiguration, RequestProductConfigErrorBody]`
- **Error**: `RequestProductConfigErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2AccountsProductsRequest` | `curlec/models/v2_accounts_products_request.py` |
| `V2AccountsProductsRequestDict` | `curlec/models/v2_accounts_products_request.py` |
| `ProductConfiguration` | `curlec/models/product_configuration.py` |
| `RequestProductConfigErrorBody` | `curlec/errors/request_product_config_error.py` |
| `Error` | `curlec/models/error.py` |

### client.linked_accounts.update_linked_account

- **Route**: `PATCH /v2/accounts/{account_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_linked_account(account_id: str, body: V2AccountsRequest1 | V2AccountsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `body`
- **Params**: `account_id` — path · `body` — JSON body
- **Returns (parsed)**: `LinkedAccount`
- **Returns (raw)**: `ApiResult[LinkedAccount, UpdateLinkedAccountErrorBody]`
- **Error**: `UpdateLinkedAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2AccountsRequest1` | `curlec/models/v2_accounts_request1.py` |
| `V2AccountsRequest1Dict` | `curlec/models/v2_accounts_request1.py` |
| `LinkedAccount` | `curlec/models/linked_account.py` |
| `UpdateLinkedAccountErrorBody` | `curlec/errors/update_linked_account_error.py` |
| `Error` | `curlec/models/error.py` |

### client.linked_accounts.update_product_config

- **Route**: `PATCH /v2/accounts/{account_id}/products/{product_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_product_config(account_id: str, product_id: str, body: V2AccountsProductsRequest1 | V2AccountsProductsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `product_id`, `body`
- **Params**: `account_id` — path · `product_id` — path · `body` — JSON body
- **Returns (parsed)**: `ProductConfiguration`
- **Returns (raw)**: `ApiResult[ProductConfiguration, UpdateProductConfigErrorBody]`
- **Error**: `UpdateProductConfigErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2AccountsProductsRequest1` | `curlec/models/v2_accounts_products_request1.py` |
| `V2AccountsProductsRequest1Dict` | `curlec/models/v2_accounts_products_request1.py` |
| `ProductConfiguration` | `curlec/models/product_configuration.py` |
| `UpdateProductConfigErrorBody` | `curlec/errors/update_product_config_error.py` |
| `Error` | `curlec/models/error.py` |

### client.linked_accounts.update_stakeholder

- **Route**: `PATCH /v2/accounts/{account_id}/stakeholders/{stakeholder_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_stakeholder(account_id: str, stakeholder_id: str, body: V2AccountsStakeholdersRequest1 | V2AccountsStakeholdersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `stakeholder_id`, `body`
- **Params**: `account_id` — path · `stakeholder_id` — path · `body` — JSON body
- **Returns (parsed)**: `Stakeholder`
- **Returns (raw)**: `ApiResult[Stakeholder, UpdateStakeholderErrorBody]`
- **Error**: `UpdateStakeholderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2AccountsStakeholdersRequest1` | `curlec/models/v2_accounts_stakeholders_request1.py` |
| `V2AccountsStakeholdersRequest1Dict` | `curlec/models/v2_accounts_stakeholders_request1.py` |
| `Stakeholder` | `curlec/models/stakeholder.py` |
| `UpdateStakeholderErrorBody` | `curlec/errors/update_stakeholder_error.py` |
| `Error` | `curlec/models/error.py` |

