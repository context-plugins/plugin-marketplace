# TransferLimitsBalanceAccountLevel — operations

Accessor: `client.TransferLimitsBalanceAccountLevel` · Source: `Api/TransferLimitsBalanceAccountLevel.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteBalanceAccountsIdTransferLimitsTransferLimitId
- **HTTP**: `DELETE /balanceAccounts/{id}/transferLimits/{transferLimitId}` (Default (balanceplatform-api-test))
- **Notes**: Delete a scheduled or pending transfer limit using its unique `transferLimitId`. You cannot delete an active limit.
- **Signature**: `DeleteBalanceAccountsIdTransferLimitsTransferLimitId(string id, string transferLimitId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteBalanceAccountsIdTransferLimitsTransferLimitIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsTransferLimits404Error1(out BalanceAccountsTransferLimits404Error1)` [404] · `TryGetBalanceAccountsTransferLimits422Error1(out BalanceAccountsTransferLimits422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalanceAccountsIdTransferLimits
- **HTTP**: `GET /balanceAccounts/{id}/transferLimits` (Default (balanceplatform-api-test))
- **Notes**: Filter and view the transfer limits configured for a balance account using the balance account's unique `id` and the available query parameters.
- **Signature**: `GetBalanceAccountsIdTransferLimits(string id, Scope? scope, TransferType? transferType, LimitStatus? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `scope` — nullable, no default → **must pass explicitly**
  - `transferType` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `scope` ← `scope`, `transferType` ← `transferType`, `status` ← `status`
- **Returns**: `TransferLimitListResponse`
- **Error**: `SdkException<GetBalanceAccountsIdTransferLimitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsTransferLimits404Error1(out BalanceAccountsTransferLimits404Error1)` [404] · `TryGetBalanceAccountsTransferLimits422Error1(out BalanceAccountsTransferLimits422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalanceAccountsIdTransferLimitsCurrent
- **HTTP**: `GET /balanceAccounts/{id}/transferLimits/current` (Default (balanceplatform-api-test))
- **Notes**: Get all transfer limits that currently apply to a balance account using the unique `id` of the balance account.
- **Signature**: `GetBalanceAccountsIdTransferLimitsCurrent(string id, Scope? scope, TransferType? transferType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `scope` — nullable, no default → **must pass explicitly**
  - `transferType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `scope` ← `scope`, `transferType` ← `transferType`
- **Returns**: `TransferLimitListResponse`
- **Error**: `SdkException<GetBalanceAccountsIdTransferLimitsCurrentError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsTransferLimitsCurrent404Error1(out BalanceAccountsTransferLimitsCurrent404Error1)` [404] · `TryGetBalanceAccountsTransferLimitsCurrent422Error1(out BalanceAccountsTransferLimitsCurrent422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalanceAccountsIdTransferLimitsTransferLimitId
- **HTTP**: `GET /balanceAccounts/{id}/transferLimits/{transferLimitId}` (Default (balanceplatform-api-test))
- **Notes**: Get the details of a transfer limit using its unique `transferLimitId`.
- **Signature**: `GetBalanceAccountsIdTransferLimitsTransferLimitId(string id, string transferLimitId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BalanceAccountsTransferLimitsResponse1`
- **Error**: `SdkException<GetBalanceAccountsIdTransferLimitsTransferLimitIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsTransferLimits404Error1(out BalanceAccountsTransferLimits404Error1)` [404] · `TryGetBalanceAccountsTransferLimits422Error1(out BalanceAccountsTransferLimits422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostBalanceAccountsIdTransferLimits
- **HTTP**: `POST /balanceAccounts/{id}/transferLimits` (Default (balanceplatform-api-test))
- **Notes**: Create a transfer limit for your balance account using the unique `id` of your balance account.
- **Signature**: `PostBalanceAccountsIdTransferLimits(string id, string? wwwAuthenticate, CreateTransferLimitRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `wwwAuthenticate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BalanceAccountsTransferLimitsResponse1`
- **Error**: `SdkException<PostBalanceAccountsIdTransferLimitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsTransferLimits400Error1(out BalanceAccountsTransferLimits400Error1)` [400] · `TryGetBalanceAccountsTransferLimits401Error1(out BalanceAccountsTransferLimits401Error1)` [401] · `TryGetBalanceAccountsTransferLimits422Error1(out BalanceAccountsTransferLimits422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostBalanceAccountsIdTransferLimitsApprove
- **HTTP**: `POST /balanceAccounts/{id}/transferLimits/approve` (Default (balanceplatform-api-test))
- **Notes**: Approve transfer limits that are pending SCA authentication.
- **Signature**: `PostBalanceAccountsIdTransferLimitsApprove(string id, string? wwwAuthenticate, ApproveTransferLimitRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `wwwAuthenticate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostBalanceAccountsIdTransferLimitsApproveError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsTransferLimitsApprove401Error1(out BalanceAccountsTransferLimitsApprove401Error1)` [401] · `TryGetBalanceAccountsTransferLimitsApprove404Error1(out BalanceAccountsTransferLimitsApprove404Error1)` [404] · `TryGetBalanceAccountsTransferLimitsApprove422Error1(out BalanceAccountsTransferLimitsApprove422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
