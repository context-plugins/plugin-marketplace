# ManagedPayoutSchedules — operations

Accessor: `client.ManagedPayoutSchedules` · Source: `Api/ManagedPayoutSchedules.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesId
- **HTTP**: `DELETE /balanceAccounts/{balanceAccountId}/payoutSchedules/{id}` (Default (balanceplatform-api-test))
- **Notes**: Delete a payout schedule applied to a balance account.
- **Signature**: `DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesId(string balanceAccountId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsPayoutSchedules401Error1(out BalanceAccountsPayoutSchedules401Error1)` [401] · `TryGetBalanceAccountsPayoutSchedules403Error1(out BalanceAccountsPayoutSchedules403Error1)` [403] · `TryGetBalanceAccountsPayoutSchedules404Error1(out BalanceAccountsPayoutSchedules404Error1)` [404] · `TryGetBalanceAccountsPayoutSchedules422Error1(out BalanceAccountsPayoutSchedules422Error1)` [422] · `TryGetBalanceAccountsPayoutSchedules500Error1(out BalanceAccountsPayoutSchedules500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalanceAccountsBalanceAccountIdPayoutSchedules
- **HTTP**: `GET /balanceAccounts/{balanceAccountId}/payoutSchedules` (Default (balanceplatform-api-test))
- **Notes**: Returns a list of all managed payout schedules that are configured on a balance account. You can use query parameters to filter the elements that are returned in the list.
- **Signature**: `GetBalanceAccountsBalanceAccountIdPayoutSchedules(string balanceAccountId, string? currency, string? cursor, int? limit = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `currency` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `currency` ← `currency`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `BalanceAccountConfigurations`
- **Error**: `SdkException<GetBalanceAccountsBalanceAccountIdPayoutSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsPayoutSchedules401Error1(out BalanceAccountsPayoutSchedules401Error1)` [401] · `TryGetBalanceAccountsPayoutSchedules403Error1(out BalanceAccountsPayoutSchedules403Error1)` [403] · `TryGetBalanceAccountsPayoutSchedules404Error1(out BalanceAccountsPayoutSchedules404Error1)` [404] · `TryGetBalanceAccountsPayoutSchedules422Error1(out BalanceAccountsPayoutSchedules422Error1)` [422] · `TryGetBalanceAccountsPayoutSchedules500Error1(out BalanceAccountsPayoutSchedules500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalanceAccountsBalanceAccountIdPayoutSchedulesId
- **HTTP**: `GET /balanceAccounts/{balanceAccountId}/payoutSchedules/{id}` (Default (balanceplatform-api-test))
- **Notes**: Returns the specified payout schedule.
- **Signature**: `GetBalanceAccountsBalanceAccountIdPayoutSchedulesId(string balanceAccountId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BalanceAccountConfiguration`
- **Error**: `SdkException<GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsPayoutSchedules401Error1(out BalanceAccountsPayoutSchedules401Error1)` [401] · `TryGetBalanceAccountsPayoutSchedules403Error1(out BalanceAccountsPayoutSchedules403Error1)` [403] · `TryGetBalanceAccountsPayoutSchedules404Error1(out BalanceAccountsPayoutSchedules404Error1)` [404] · `TryGetBalanceAccountsPayoutSchedules422Error1(out BalanceAccountsPayoutSchedules422Error1)` [422] · `TryGetBalanceAccountsPayoutSchedules500Error1(out BalanceAccountsPayoutSchedules500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions
- **HTTP**: `GET /balanceAccounts/{balanceAccountId}/payoutSchedules/{id}/executions` (Default (balanceplatform-api-test))
- **Notes**: View information about the executions of a managed payout schedule on the specified balance account. An execution is an attempt to make a payout according to the payout schedule.
- **Signature**: `GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions(string balanceAccountId, string id, int offset, IReadOnlyList<ExecutionResult>? results, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `results` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `results` ← `results`, `limit` ← `limit`
- **Returns**: `PayoutScheduleExecutions`
- **Error**: `SdkException<GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsPayoutSchedulesExecutions401Error1(out BalanceAccountsPayoutSchedulesExecutions401Error1)` [401] · `TryGetBalanceAccountsPayoutSchedulesExecutions403Error1(out BalanceAccountsPayoutSchedulesExecutions403Error1)` [403] · `TryGetBalanceAccountsPayoutSchedulesExecutions404Error1(out BalanceAccountsPayoutSchedulesExecutions404Error1)` [404] · `TryGetBalanceAccountsPayoutSchedulesExecutions422Error1(out BalanceAccountsPayoutSchedulesExecutions422Error1)` [422] · `TryGetBalanceAccountsPayoutSchedulesExecutions500Error1(out BalanceAccountsPayoutSchedulesExecutions500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalancePlatformsBalancePlatformIdPayoutSchedules
- **HTTP**: `GET /balancePlatforms/{balancePlatformId}/payoutSchedules` (Default (balanceplatform-api-test))
- **Notes**: Returns a list of all the payout schedules that are configured for your balance platform. You can use query parameters to filter the elements that are returned in the list.
- **Signature**: `GetBalancePlatformsBalancePlatformIdPayoutSchedules(string balancePlatformId, string? countryCode, string? currency, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `countryCode` — nullable, no default → **must pass explicitly**
  - `currency` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `countryCode` ← `countryCode`, `currency` ← `currency`
- **Returns**: `BalancePlatformConfigurations`
- **Error**: `SdkException<GetBalancePlatformsBalancePlatformIdPayoutSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalancePlatformsPayoutSchedules401Error1(out BalancePlatformsPayoutSchedules401Error1)` [401] · `TryGetBalancePlatformsPayoutSchedules403Error1(out BalancePlatformsPayoutSchedules403Error1)` [403] · `TryGetBalancePlatformsPayoutSchedules404Error1(out BalancePlatformsPayoutSchedules404Error1)` [404] · `TryGetBalancePlatformsPayoutSchedules422Error1(out BalancePlatformsPayoutSchedules422Error1)` [422] · `TryGetBalancePlatformsPayoutSchedules500Error1(out BalancePlatformsPayoutSchedules500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalancePlatformsBalancePlatformIdPayoutSchedulesId
- **HTTP**: `GET /balancePlatforms/{balancePlatformId}/payoutSchedules/{id}` (Default (balanceplatform-api-test))
- **Notes**: Returns the specified managed payout schedule configured on your balance platform.
- **Signature**: `GetBalancePlatformsBalancePlatformIdPayoutSchedulesId(string balancePlatformId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BalancePlatformConfiguration`
- **Error**: `SdkException<GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalancePlatformsPayoutSchedules401Error1(out BalancePlatformsPayoutSchedules401Error1)` [401] · `TryGetBalancePlatformsPayoutSchedules403Error1(out BalancePlatformsPayoutSchedules403Error1)` [403] · `TryGetBalancePlatformsPayoutSchedules404Error1(out BalancePlatformsPayoutSchedules404Error1)` [404] · `TryGetBalancePlatformsPayoutSchedules422Error1(out BalancePlatformsPayoutSchedules422Error1)` [422] · `TryGetBalancePlatformsPayoutSchedules500Error1(out BalancePlatformsPayoutSchedules500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchBalanceAccountsBalanceAccountIdPayoutSchedulesId
- **HTTP**: `PATCH /balanceAccounts/{balanceAccountId}/payoutSchedules/{id}` (Default (balanceplatform-api-test))
- **Notes**: Update a managed payout schedule applied to a balance account. If an optional parameter is not included in the request, it remains unchanged.
- **Signature**: `PatchBalanceAccountsBalanceAccountIdPayoutSchedulesId(string balanceAccountId, string id, BalanceAccountConfigurationUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BalanceAccountConfiguration`
- **Error**: `SdkException<PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsPayoutSchedules401Error1(out BalanceAccountsPayoutSchedules401Error1)` [401] · `TryGetBalanceAccountsPayoutSchedules403Error1(out BalanceAccountsPayoutSchedules403Error1)` [403] · `TryGetBalanceAccountsPayoutSchedules404Error1(out BalanceAccountsPayoutSchedules404Error1)` [404] · `TryGetBalanceAccountsPayoutSchedules422Error1(out BalanceAccountsPayoutSchedules422Error1)` [422] · `TryGetBalanceAccountsPayoutSchedules500Error1(out BalanceAccountsPayoutSchedules500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostBalanceAccountsBalanceAccountIdPayoutSchedules
- **HTTP**: `POST /balanceAccounts/{balanceAccountId}/payoutSchedules` (Default (balanceplatform-api-test))
- **Notes**: Apply a managed payout schedule to a balance account. This payout schedule is based on an existing payout schedule in your balance platform.
- **Signature**: `PostBalanceAccountsBalanceAccountIdPayoutSchedules(string balanceAccountId, BalanceAccountConfigurationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BalanceAccountConfiguration`
- **Error**: `SdkException<PostBalanceAccountsBalanceAccountIdPayoutSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetBalanceAccountsPayoutSchedules401Error1(out BalanceAccountsPayoutSchedules401Error1)` [401] · `TryGetBalanceAccountsPayoutSchedules403Error1(out BalanceAccountsPayoutSchedules403Error1)` [403] · `TryGetBalanceAccountsPayoutSchedules404Error1(out BalanceAccountsPayoutSchedules404Error1)` [404] · `TryGetBalanceAccountsPayoutSchedules422Error1(out BalanceAccountsPayoutSchedules422Error1)` [422] · `TryGetBalanceAccountsPayoutSchedules500Error1(out BalanceAccountsPayoutSchedules500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
