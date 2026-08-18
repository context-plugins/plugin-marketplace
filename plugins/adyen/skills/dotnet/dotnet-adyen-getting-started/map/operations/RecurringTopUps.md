<!-- Generated file — do not edit; regenerated with the SDK. -->

# RecurringTopUps — operations

Accessor: `client.RecurringTopUps` · Source: `Api/RecurringTopUps.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId
- **Server group**: `Default13`
- **Signature**: `DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(string balanceAccountId, string topUpId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `JsonElement`
- **Error**: `SdkException<DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError` | `Errors/DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetBalanceAccountsBalanceAccountIdRecurringTopUps
- **Server group**: `Default13`
- **Signature**: `GetBalanceAccountsBalanceAccountIdRecurringTopUps(string balanceAccountId, string? cursor, int? limit = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = `10`
- **Query params (wire ← C#)**: `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `RecurringTopUpsResult`
- **Error**: `SdkException<GetBalanceAccountsBalanceAccountIdRecurringTopUpsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RecurringTopUpsResult` | `Models/RecurringTopUpsResult.cs` |
| `GetBalanceAccountsBalanceAccountIdRecurringTopUpsError` | `Errors/GetBalanceAccountsBalanceAccountIdRecurringTopUpsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId
- **Server group**: `Default13`
- **Signature**: `PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(string balanceAccountId, string topUpId, PatchableCreateRecurringTopUp body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `RecurringTopUp`
- **Error**: `SdkException<PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PatchableCreateRecurringTopUp` | `Models/PatchableCreateRecurringTopUp.cs` |
| `RecurringTopUp` | `Models/RecurringTopUp.cs` |
| `PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError` | `Errors/PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostBalanceAccountsBalanceAccountIdRecurringTopUps
- **Server group**: `Default13`
- **Signature**: `PostBalanceAccountsBalanceAccountIdRecurringTopUps(string balanceAccountId, CreateRecurringTopUp body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `RecurringTopUp`
- **Error**: `SdkException<PostBalanceAccountsBalanceAccountIdRecurringTopUpsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRecurringTopUp` | `Models/CreateRecurringTopUp.cs` |
| `RecurringTopUp` | `Models/RecurringTopUp.cs` |
| `PostBalanceAccountsBalanceAccountIdRecurringTopUpsError` | `Errors/PostBalanceAccountsBalanceAccountIdRecurringTopUpsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

