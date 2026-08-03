# BalanceAccounts — operations

Accessor: `client.BalanceAccounts` · Source: `Api/BalanceAccounts.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetBalanceAccountsId
- **HTTP**: `GET /balanceAccounts/{id}` (Default (balanceplatform-api-test))
- **Notes**: Returns a balance account and its balances for the default currency and other currencies with a non-zero balance.
- **Signature**: `GetBalanceAccountsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BalanceAccount`
- **Error**: `SdkException<GetBalanceAccountsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalanceAccountsIdPaymentInstruments
- **HTTP**: `GET /balanceAccounts/{id}/paymentInstruments` (Default (balanceplatform-api-test))
- **Notes**: Returns a paginated list of the payment instruments associated with a balance account. To fetch multiple pages, use the query parameters.For example, to limit the page to 3 payment instruments which are in active status and to skip the first 6, use `/balanceAccounts/{id}/paymentInstruments?limit=3&amp;offset=6&amp;status=active`.
- **Signature**: `GetBalanceAccountsIdPaymentInstruments(string id, int? offset, int? limit, string? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`, `status` ← `status`
- **Returns**: `PaginatedPaymentInstrumentsResponse`
- **Error**: `SdkException<GetBalanceAccountsIdPaymentInstrumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalanceAccountsIdTransactionRules
- **HTTP**: `GET /balanceAccounts/{id}/transactionRules` (Default (balanceplatform-api-test))
- **Notes**: Returns a list of transaction rules associated with a balance account.
- **Signature**: `GetBalanceAccountsIdTransactionRules(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TransactionRulesResponse`
- **Error**: `SdkException<GetBalanceAccountsIdTransactionRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchBalanceAccountsId
- **HTTP**: `PATCH /balanceAccounts/{id}` (Default (balanceplatform-api-test))
- **Notes**: Updates a balance account.
- **Signature**: `PatchBalanceAccountsId(string id, BalanceAccountUpdateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BalanceAccount`
- **Error**: `SdkException<PatchBalanceAccountsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostBalanceAccounts
- **HTTP**: `POST /balanceAccounts` (Default (balanceplatform-api-test))
- **Notes**: Creates a balance account that holds the funds of the associated account holder.
- **Signature**: `PostBalanceAccounts(BalanceAccountInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BalanceAccount`
- **Error**: `SdkException<PostBalanceAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
