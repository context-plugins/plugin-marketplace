# CustomPayoutSchedulesSweeps — operations

Accessor: `client.CustomPayoutSchedulesSweeps` · Source: `Api/CustomPayoutSchedulesSweeps.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteBalanceAccountsBalanceAccountIdSweepsSweepId
- **HTTP**: `DELETE /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}` (Default13 (balanceplatform-api-test))
- **Notes**: Deletes a sweep for a balance account.
- **Signature**: `DeleteBalanceAccountsBalanceAccountIdSweepsSweepId(string balanceAccountId, string sweepId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalanceAccountsBalanceAccountIdSweeps
- **HTTP**: `GET /balanceAccounts/{balanceAccountId}/sweeps` (Default13 (balanceplatform-api-test))
- **Notes**: Returns a list of the sweeps configured for a balance account. To fetch multiple pages, use the query parameters. For example, to limit the page to 5 sweeps and to skip the first 10, use `/balanceAccounts/{balanceAccountId}/sweeps?limit=5&amp;offset=10`.
- **Signature**: `GetBalanceAccountsBalanceAccountIdSweeps(string balanceAccountId, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `BalanceSweepConfigurationsResponse`
- **Error**: `SdkException<GetBalanceAccountsBalanceAccountIdSweepsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalanceAccountsBalanceAccountIdSweepsSweepId
- **HTTP**: `GET /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}` (Default13 (balanceplatform-api-test))
- **Notes**: Returns a sweep.
- **Signature**: `GetBalanceAccountsBalanceAccountIdSweepsSweepId(string balanceAccountId, string sweepId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SweepConfigurationV2`
- **Error**: `SdkException<GetBalanceAccountsBalanceAccountIdSweepsSweepIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchBalanceAccountsBalanceAccountIdSweepsSweepId
- **HTTP**: `PATCH /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}` (Default13 (balanceplatform-api-test))
- **Notes**: Updates a sweep. When updating a sweep resource, note that if a request parameter is not provided, the parameter is left unchanged.
- **Signature**: `PatchBalanceAccountsBalanceAccountIdSweepsSweepId(string balanceAccountId, string sweepId, UpdateSweepConfigurationV2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SweepConfigurationV2`
- **Error**: `SdkException<PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostBalanceAccountsBalanceAccountIdSweeps
- **HTTP**: `POST /balanceAccounts/{balanceAccountId}/sweeps` (Default13 (balanceplatform-api-test))
- **Notes**: Creates a sweep that results in moving funds from or to a balance account. A sweep pulls in or pushes out funds based on a defined schedule, amount, currency, and a source or a destination.
- **Signature**: `PostBalanceAccountsBalanceAccountIdSweeps(string balanceAccountId, CreateSweepConfigurationV2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SweepConfigurationV2`
- **Error**: `SdkException<PostBalanceAccountsBalanceAccountIdSweepsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
