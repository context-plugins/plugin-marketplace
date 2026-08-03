# Accounts — operations

Accessor: `client.Accounts` · Source: `Api/Accounts.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostCloseAccount
- **HTTP**: `POST /closeAccount` (Default (balanceplatform-api-test))
- **Notes**: Closes an account. If an account is closed, you cannot process transactions, pay out its funds, or reopen it. If payments are made to a closed account, the payments are sent to your liable account.
- **Signature**: `PostCloseAccount(CloseAccountRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CloseAccountResponse`
- **Error**: `SdkException<PostCloseAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCreateAccount
- **HTTP**: `POST /createAccount` (Default (balanceplatform-api-test))
- **Notes**: Creates an account under an account holder. An account holder can have multiple accounts .
- **Signature**: `PostCreateAccount(CreateAccountRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateAccountResponse`
- **Error**: `SdkException<PostCreateAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostUpdateAccount
- **HTTP**: `POST /updateAccount` (Default (balanceplatform-api-test))
- **Notes**: Updates the description or payout schedule of an account.
- **Signature**: `PostUpdateAccount(UpdateAccountRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UpdateAccountResponse`
- **Error**: `SdkException<PostUpdateAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
