<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceAccounts — operations

Accessor: `client.service_accounts` · Source: `doi_t/apis/service_accounts.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.service_accounts.create_service_account

- **Route**: `POST /iam/v1/service-accounts`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_service_account(idempotency_key: str, body: CreateServiceAccountRequest | CreateServiceAccountRequestDict, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `idempotency_key`, `body`
- **Params**: `dry_run` — query `dryRun` · `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `ServiceAccount`
- **Returns (raw)**: `ApiResult[ServiceAccount, CreateServiceAccountErrorBody]`
- **Error**: `CreateServiceAccountErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 409, 422, 500] · `Error` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateServiceAccountRequest` | `doi_t/models/create_service_account_request.py` |
| `CreateServiceAccountRequestDict` | `doi_t/models/create_service_account_request.py` |
| `ServiceAccount` | `doi_t/models/service_account.py` |
| `CreateServiceAccountErrorBody` | `doi_t/errors/create_service_account_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |
| `Error` | `doi_t/models/error.py` |

### client.service_accounts.create_service_account_token

- **Route**: `POST /iam/v1/service-accounts/{serviceAccountId}/api-tokens`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_service_account_token(service_account_id: str, idempotency_key: str, body: CreateServiceAccountTokenRequest | CreateServiceAccountTokenRequestDict, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `service_account_id`, `idempotency_key`, `body`
- **Params**: `service_account_id` — path `serviceAccountId` · `dry_run` — query `dryRun` · `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `CreateServiceAccountTokenResponse`
- **Returns (raw)**: `ApiResult[CreateServiceAccountTokenResponse, CreateServiceAccountTokenErrorBody]`
- **Error**: `CreateServiceAccountTokenErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 404, 409, 422, 500] · `Error` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateServiceAccountTokenRequest` | `doi_t/models/create_service_account_token_request.py` |
| `CreateServiceAccountTokenRequestDict` | `doi_t/models/create_service_account_token_request.py` |
| `CreateServiceAccountTokenResponse` | `doi_t/models/create_service_account_token_response.py` |
| `CreateServiceAccountTokenErrorBody` | `doi_t/errors/create_service_account_token_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |
| `Error` | `doi_t/models/error.py` |

### client.service_accounts.delete_service_account

- **Route**: `DELETE /iam/v1/service-accounts/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_service_account(id_: str, if_match: str, idempotency_key: str, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `if_match`, `idempotency_key`
- **Params**: `id_` — path `id` · `dry_run` — query `dryRun` · `if_match` — header `If-Match` · `idempotency_key` — header `Idempotency-Key`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteServiceAccountErrorBody]`
- **Error**: `DeleteServiceAccountErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 404, 412, 428, 500] · `Error` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteServiceAccountErrorBody` | `doi_t/errors/delete_service_account_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |
| `Error` | `doi_t/models/error.py` |

### client.service_accounts.delete_service_account_token

- **Route**: `DELETE /iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_service_account_token(service_account_id: str, id_: str, idempotency_key: str, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `service_account_id`, `id_`, `idempotency_key`
- **Params**: `service_account_id` — path `serviceAccountId` · `id_` — path `id` · `dry_run` — query `dryRun` · `idempotency_key` — header `Idempotency-Key`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteServiceAccountTokenErrorBody]`
- **Error**: `DeleteServiceAccountTokenErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 404, 500] · `Error` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteServiceAccountTokenErrorBody` | `doi_t/errors/delete_service_account_token_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |
| `Error` | `doi_t/models/error.py` |

### client.service_accounts.get_service_account

- **Route**: `GET /iam/v1/service-accounts/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_service_account(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ServiceAccount`
- **Returns (raw)**: `ApiResult[ServiceAccount, GetServiceAccountErrorBody]`
- **Error**: `GetServiceAccountErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 404, 500] · `Error` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ServiceAccount` | `doi_t/models/service_account.py` |
| `GetServiceAccountErrorBody` | `doi_t/errors/get_service_account_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |
| `Error` | `doi_t/models/error.py` |

### client.service_accounts.get_service_account_token

- **Route**: `GET /iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_service_account_token(service_account_id: str, id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `service_account_id`, `id_`
- **Params**: `service_account_id` — path `serviceAccountId` · `id_` — path `id`
- **Returns (parsed)**: `ServiceAccountToken`
- **Returns (raw)**: `ApiResult[ServiceAccountToken, GetServiceAccountTokenErrorBody]`
- **Error**: `GetServiceAccountTokenErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403] · `ProblemDetails` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ServiceAccountToken` | `doi_t/models/service_account_token.py` |
| `GetServiceAccountTokenErrorBody` | `doi_t/errors/get_service_account_token_error.py` |
| `Error` | `doi_t/models/error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.service_accounts.list_service_account_tokens

- **Route**: `GET /iam/v1/service-accounts/{serviceAccountId}/api-tokens`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_service_account_tokens(service_account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `service_account_id`
- **Params**: `service_account_id` — path `serviceAccountId`
- **Returns (parsed)**: `ServiceAccountTokensResponse`
- **Returns (raw)**: `ApiResult[ServiceAccountTokensResponse, ListServiceAccountTokensErrorBody]`
- **Error**: `ListServiceAccountTokensErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403] · `ProblemDetails` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ServiceAccountTokensResponse` | `doi_t/models/service_account_tokens_response.py` |
| `ListServiceAccountTokensErrorBody` | `doi_t/errors/list_service_account_tokens_error.py` |
| `Error` | `doi_t/models/error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.service_accounts.list_service_accounts

- **Route**: `GET /iam/v1/service-accounts`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_service_accounts(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ServiceAccountsResponse`
- **Returns (raw)**: `ApiResult[ServiceAccountsResponse, ListServiceAccountsErrorBody]`
- **Error**: `ListServiceAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403] · `ProblemDetails` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ServiceAccountsResponse` | `doi_t/models/service_accounts_response.py` |
| `ListServiceAccountsErrorBody` | `doi_t/errors/list_service_accounts_error.py` |
| `Error` | `doi_t/models/error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.service_accounts.update_service_account

- **Route**: `PATCH /iam/v1/service-accounts/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_service_account(id_: str, if_match: str, idempotency_key: str, body: UpdateServiceAccountRequest | UpdateServiceAccountRequestDict, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `if_match`, `idempotency_key`, `body`
- **Params**: `id_` — path `id` · `dry_run` — query `dryRun` · `if_match` — header `If-Match` · `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `ServiceAccount`
- **Returns (raw)**: `ApiResult[ServiceAccount, UpdateServiceAccountErrorBody]`
- **Error**: `UpdateServiceAccountErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 404, 409, 412, 415, 422, 428, 500] · `Error` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateServiceAccountRequest` | `doi_t/models/update_service_account_request.py` |
| `UpdateServiceAccountRequestDict` | `doi_t/models/update_service_account_request.py` |
| `ServiceAccount` | `doi_t/models/service_account.py` |
| `UpdateServiceAccountErrorBody` | `doi_t/errors/update_service_account_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |
| `Error` | `doi_t/models/error.py` |

### client.service_accounts.update_service_account_token

- **Route**: `PATCH /iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_service_account_token(service_account_id: str, id_: str, idempotency_key: str, body: UpdateServiceAccountTokenRequest | UpdateServiceAccountTokenRequestDict, *, dry_run: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `service_account_id`, `id_`, `idempotency_key`, `body`
- **Params**: `service_account_id` — path `serviceAccountId` · `id_` — path `id` · `dry_run` — query `dryRun` · `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `ServiceAccountToken`
- **Returns (raw)**: `ApiResult[ServiceAccountToken, UpdateServiceAccountTokenErrorBody]`
- **Error**: `UpdateServiceAccountTokenErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 404, 422, 500] · `Error` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateServiceAccountTokenRequest` | `doi_t/models/update_service_account_token_request.py` |
| `UpdateServiceAccountTokenRequestDict` | `doi_t/models/update_service_account_token_request.py` |
| `ServiceAccountToken` | `doi_t/models/service_account_token.py` |
| `UpdateServiceAccountTokenErrorBody` | `doi_t/errors/update_service_account_token_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |
| `Error` | `doi_t/models/error.py` |

