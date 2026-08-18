<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManagedPayoutSchedules — operations

Accessor: `client.ManagedPayoutSchedules` · Source: `Api/ManagedPayoutSchedules.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesId
- **Server group**: `Default13`
- **Signature**: `DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesId(string balanceAccountId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError` | `Errors/DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetBalanceAccountsBalanceAccountIdPayoutSchedules
- **Server group**: `Default13`
- **Signature**: `GetBalanceAccountsBalanceAccountIdPayoutSchedules(string balanceAccountId, string? currency, string? cursor, int? limit = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `currency` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = `10`
- **Query params (wire ← C#)**: `currency` ← `currency`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `BalanceAccountConfigurations`
- **Error**: `SdkException<GetBalanceAccountsBalanceAccountIdPayoutSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BalanceAccountConfigurations` | `Models/BalanceAccountConfigurations.cs` |
| `GetBalanceAccountsBalanceAccountIdPayoutSchedulesError` | `Errors/GetBalanceAccountsBalanceAccountIdPayoutSchedulesError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetBalanceAccountsBalanceAccountIdPayoutSchedulesId
- **Server group**: `Default13`
- **Signature**: `GetBalanceAccountsBalanceAccountIdPayoutSchedulesId(string balanceAccountId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `BalanceAccountConfiguration`
- **Error**: `SdkException<GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BalanceAccountConfiguration` | `Models/BalanceAccountConfiguration.cs` |
| `GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError` | `Errors/GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions
- **Server group**: `Default13`
- **Signature**: `GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions(string balanceAccountId, string id, int offset, IReadOnlyList<ExecutionResult>? results, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `results` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `offset` ← `offset`, `results` ← `results`, `limit` ← `limit`
- **Returns**: `PayoutScheduleExecutions`
- **Error**: `SdkException<GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ExecutionResult` | `Models/Enums/ExecutionResult.cs` |
| `PayoutScheduleExecutions` | `Models/PayoutScheduleExecutions.cs` |
| `GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError` | `Errors/GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetBalancePlatformsBalancePlatformIdPayoutSchedules
- **Server group**: `Default13`
- **Signature**: `GetBalancePlatformsBalancePlatformIdPayoutSchedules(string balancePlatformId, string? countryCode, string? currency, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `countryCode` — nullable, no default → **must pass explicitly**
  - `currency` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `countryCode` ← `countryCode`, `currency` ← `currency`
- **Returns**: `BalancePlatformConfigurations`
- **Error**: `SdkException<GetBalancePlatformsBalancePlatformIdPayoutSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BalancePlatformConfigurations` | `Models/BalancePlatformConfigurations.cs` |
| `GetBalancePlatformsBalancePlatformIdPayoutSchedulesError` | `Errors/GetBalancePlatformsBalancePlatformIdPayoutSchedulesError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetBalancePlatformsBalancePlatformIdPayoutSchedulesId
- **Server group**: `Default13`
- **Signature**: `GetBalancePlatformsBalancePlatformIdPayoutSchedulesId(string balancePlatformId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `BalancePlatformConfiguration`
- **Error**: `SdkException<GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BalancePlatformConfiguration` | `Models/BalancePlatformConfiguration.cs` |
| `GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError` | `Errors/GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PatchBalanceAccountsBalanceAccountIdPayoutSchedulesId
- **Server group**: `Default13`
- **Signature**: `PatchBalanceAccountsBalanceAccountIdPayoutSchedulesId(string balanceAccountId, string id, BalanceAccountConfigurationUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `BalanceAccountConfiguration`
- **Error**: `SdkException<PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BalanceAccountConfigurationUpdate` | `Models/BalanceAccountConfigurationUpdate.cs` |
| `BalanceAccountConfiguration` | `Models/BalanceAccountConfiguration.cs` |
| `PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError` | `Errors/PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostBalanceAccountsBalanceAccountIdPayoutSchedules
- **Server group**: `Default13`
- **Signature**: `PostBalanceAccountsBalanceAccountIdPayoutSchedules(string balanceAccountId, BalanceAccountConfigurationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `BalanceAccountConfiguration`
- **Error**: `SdkException<PostBalanceAccountsBalanceAccountIdPayoutSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BalanceAccountConfigurationRequest` | `Models/BalanceAccountConfigurationRequest.cs` |
| `BalanceAccountConfiguration` | `Models/BalanceAccountConfiguration.cs` |
| `PostBalanceAccountsBalanceAccountIdPayoutSchedulesError` | `Errors/PostBalanceAccountsBalanceAccountIdPayoutSchedulesError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

