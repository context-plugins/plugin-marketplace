# Accounts — operations

Accessor: `client.Accounts` · Source: `Api/Accounts.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateBank
- **HTTP**: `POST /accounts/banks` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Create a new fiat bank account.
- **Signature**: `CreateBank(string authorization, CreateBankRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateBankResponse`
- **Error**: `SdkException<CreateBankError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateWallet
- **HTTP**: `POST /accounts/wallets` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Create a new stablecoin wallet account.
- **Signature**: `CreateWallet(string authorization, CreateWalletRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateWalletResponse`
- **Error**: `SdkException<CreateWalletError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FindAll
- **HTTP**: `GET /accounts` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Retrieve all accounts (both bank and wallet accounts) for your workspace.
- **Signature**: `FindAll(Type41? type, string? tenantId, string? counterpartyId, bool? includeSensitive, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`type` … `includeSensitive`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `tenant_id` ← `tenantId`, `counterparty_id` ← `counterpartyId`, `include_sensitive` ← `includeSensitive`
- **Returns**: `AccountListResponse`
- **Error**: `SdkException<FindAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FindOne2
- **HTTP**: `GET /accounts/{id}` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Retrieve a specific account (wallet or bank) by its unique identifier
- **Signature**: `FindOne2(string id, bool? includeSensitive, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeSensitive` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include_sensitive` ← `includeSensitive`
- **Returns**: `AccountResponse`
- **Error**: `SdkException<FindOne2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Update
- **HTTP**: `PATCH /accounts/{id}` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Update an existing account's information.
- **Signature**: `Update(string id, string authorization, UpdateAccountRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateAccountResponse`
- **Error**: `SdkException<UpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
