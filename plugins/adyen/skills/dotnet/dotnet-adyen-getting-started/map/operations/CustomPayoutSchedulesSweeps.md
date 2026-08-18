<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomPayoutSchedulesSweeps — operations

Accessor: `client.CustomPayoutSchedulesSweeps` · Source: `Api/CustomPayoutSchedulesSweeps.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBalanceAccountsBalanceAccountIdSweepsSweepId
- **Server group**: `Default13`
- **Signature**: `DeleteBalanceAccountsBalanceAccountIdSweepsSweepId(string balanceAccountId, string sweepId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError` | `Errors/DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetBalanceAccountsBalanceAccountIdSweeps
- **Server group**: `Default13`
- **Signature**: `GetBalanceAccountsBalanceAccountIdSweeps(string balanceAccountId, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `BalanceSweepConfigurationsResponse`
- **Error**: `SdkException<GetBalanceAccountsBalanceAccountIdSweepsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BalanceSweepConfigurationsResponse` | `Models/BalanceSweepConfigurationsResponse.cs` |
| `GetBalanceAccountsBalanceAccountIdSweepsError` | `Errors/GetBalanceAccountsBalanceAccountIdSweepsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetBalanceAccountsBalanceAccountIdSweepsSweepId
- **Server group**: `Default13`
- **Signature**: `GetBalanceAccountsBalanceAccountIdSweepsSweepId(string balanceAccountId, string sweepId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SweepConfigurationV2`
- **Error**: `SdkException<GetBalanceAccountsBalanceAccountIdSweepsSweepIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SweepConfigurationV2` | `Models/SweepConfigurationV2.cs` |
| `GetBalanceAccountsBalanceAccountIdSweepsSweepIdError` | `Errors/GetBalanceAccountsBalanceAccountIdSweepsSweepIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchBalanceAccountsBalanceAccountIdSweepsSweepId
- **Server group**: `Default13`
- **Signature**: `PatchBalanceAccountsBalanceAccountIdSweepsSweepId(string balanceAccountId, string sweepId, UpdateSweepConfigurationV2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `SweepConfigurationV2`
- **Error**: `SdkException<PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSweepConfigurationV2` | `Models/UpdateSweepConfigurationV2.cs` |
| `SweepConfigurationV2` | `Models/SweepConfigurationV2.cs` |
| `PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError` | `Errors/PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostBalanceAccountsBalanceAccountIdSweeps
- **Server group**: `Default13`
- **Signature**: `PostBalanceAccountsBalanceAccountIdSweeps(string balanceAccountId, CreateSweepConfigurationV2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `SweepConfigurationV2`
- **Error**: `SdkException<PostBalanceAccountsBalanceAccountIdSweepsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSweepConfigurationV2` | `Models/CreateSweepConfigurationV2.cs` |
| `SweepConfigurationV2` | `Models/SweepConfigurationV2.cs` |
| `PostBalanceAccountsBalanceAccountIdSweepsError` | `Errors/PostBalanceAccountsBalanceAccountIdSweepsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

