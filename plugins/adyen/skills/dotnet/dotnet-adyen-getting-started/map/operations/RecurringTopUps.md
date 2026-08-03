# RecurringTopUps — operations

Accessor: `client.RecurringTopUps` · Source: `Api/RecurringTopUps.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId
- **HTTP**: `DELETE /balanceAccounts/{balanceAccountId}/recurringTopUps/{topUpId}` (Default (balanceplatform-api-test))
- **Notes**: Delete a recurring top up configuration by `topUpId`. For more information, refer to Manage recurring top-ups .
- **Signature**: `DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(string balanceAccountId, string topUpId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsRecurringTopUps400Error1(out BalanceAccountsRecurringTopUps400Error1)` [400] · `TryGetBalanceAccountsRecurringTopUps401Error1(out BalanceAccountsRecurringTopUps401Error1)` [401] · `TryGetBalanceAccountsRecurringTopUps403Error1(out BalanceAccountsRecurringTopUps403Error1)` [403] · `TryGetBalanceAccountsRecurringTopUps404Error1(out BalanceAccountsRecurringTopUps404Error1)` [404] · `TryGetBalanceAccountsRecurringTopUps422Error1(out BalanceAccountsRecurringTopUps422Error1)` [422] · `TryGetBalanceAccountsRecurringTopUps500Error1(out BalanceAccountsRecurringTopUps500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalanceAccountsBalanceAccountIdRecurringTopUps
- **HTTP**: `GET /balanceAccounts/{balanceAccountId}/recurringTopUps` (Default (balanceplatform-api-test))
- **Notes**: View all recurring top ups configured for a specific `balanceAccountId`. For more information, refer to Manage recurring top-ups .
- **Signature**: `GetBalanceAccountsBalanceAccountIdRecurringTopUps(string balanceAccountId, string? cursor, int? limit = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `RecurringTopUpsResult`
- **Error**: `SdkException<GetBalanceAccountsBalanceAccountIdRecurringTopUpsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsRecurringTopUps401Error1(out BalanceAccountsRecurringTopUps401Error1)` [401] · `TryGetBalanceAccountsRecurringTopUps403Error1(out BalanceAccountsRecurringTopUps403Error1)` [403] · `TryGetBalanceAccountsRecurringTopUps404Error1(out BalanceAccountsRecurringTopUps404Error1)` [404] · `TryGetBalanceAccountsRecurringTopUps500Error1(out BalanceAccountsRecurringTopUps500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId
- **HTTP**: `PATCH /balanceAccounts/{balanceAccountId}/recurringTopUps/{topUpId}` (Default (balanceplatform-api-test))
- **Notes**: Update the configuration of an existing recurring top up. For more information, refer to Manage recurring top-ups .
- **Signature**: `PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(string balanceAccountId, string topUpId, PatchableCreateRecurringTopUp body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RecurringTopUp`
- **Error**: `SdkException<PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsRecurringTopUps400Error1(out BalanceAccountsRecurringTopUps400Error1)` [400] · `TryGetBalanceAccountsRecurringTopUps401Error1(out BalanceAccountsRecurringTopUps401Error1)` [401] · `TryGetBalanceAccountsRecurringTopUps403Error1(out BalanceAccountsRecurringTopUps403Error1)` [403] · `TryGetBalanceAccountsRecurringTopUps422Error1(out BalanceAccountsRecurringTopUps422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostBalanceAccountsBalanceAccountIdRecurringTopUps
- **HTTP**: `POST /balanceAccounts/{balanceAccountId}/recurringTopUps` (Default (balanceplatform-api-test))
- **Notes**: Create a recurring top up configuration. For more information, refer to Create recurring top-ups .
- **Signature**: `PostBalanceAccountsBalanceAccountIdRecurringTopUps(string balanceAccountId, CreateRecurringTopUp body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RecurringTopUp`
- **Error**: `SdkException<PostBalanceAccountsBalanceAccountIdRecurringTopUpsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsRecurringTopUps400Error1(out BalanceAccountsRecurringTopUps400Error1)` [400] · `TryGetBalanceAccountsRecurringTopUps401Error1(out BalanceAccountsRecurringTopUps401Error1)` [401] · `TryGetBalanceAccountsRecurringTopUps403Error1(out BalanceAccountsRecurringTopUps403Error1)` [403] · `TryGetBalanceAccountsRecurringTopUps422Error1(out BalanceAccountsRecurringTopUps422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
