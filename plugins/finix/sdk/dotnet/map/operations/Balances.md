<!-- Generated file — do not edit; regenerated with the SDK. -->

# Balances — operations

Accessor: `client.Balances` · Source: `src/FinixApiReference/Api/Balances.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBalance

- **Auth**: `options.BasicAuth`
- **Signature**: `GetBalance(GetBalanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BalanceId`
- **Returns**: `Balance`
- **Error**: `ApiException<GetBalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBalanceRequest` | `src/FinixApiReference/Requests/Balances/GetBalanceRequest.cs` |
| `Balance` | `src/FinixApiReference/Models/Balance.cs` |
| `GetBalanceError` | `src/FinixApiReference/Errors/GetBalanceError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetBalanceEntry

- **Auth**: `options.BasicAuth`
- **Signature**: `GetBalanceEntry(GetBalanceEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BalanceEntryId`
- **Returns**: `BalanceEntry`
- **Error**: `ApiException<GetBalanceEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBalanceEntryRequest` | `src/FinixApiReference/Requests/Balances/GetBalanceEntryRequest.cs` |
| `BalanceEntry` | `src/FinixApiReference/Models/BalanceEntry.cs` |
| `GetBalanceEntryError` | `src/FinixApiReference/Errors/GetBalanceEntryError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListBalanceEntries

- **Auth**: `options.BasicAuth`
- **Signature**: `ListBalanceEntries(ListBalanceEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BalanceId`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `amount` ← `Amount`, `amount.gt` ← `AmountGt`, `amount.gte` ← `AmountGte`, `amount.lt` ← `AmountLt`, `amount.lte` ← `AmountLte`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `entity_id` ← `EntityId`, `entity_type` ← `EntityType`, `id` ← `Id`, `limit` ← `Limit`, `parent_balance_entry_id` ← `ParentBalanceEntryId`, `posted_at.gte` ← `PostedAtGte`, `posted_at.lte` ← `PostedAtLte`, `state` ← `State`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `type` ← `Type`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListBalances`
- **Error**: `ApiException<ListBalanceEntriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBalanceEntriesRequest` | `src/FinixApiReference/Requests/Balances/ListBalanceEntriesRequest.cs` |
| `EntityType8` | `src/FinixApiReference/Models/Enums/EntityType8.cs` |
| `State22` | `src/FinixApiReference/Models/Enums/State22.cs` |
| `Type50` | `src/FinixApiReference/Models/Enums/Type50.cs` |
| `ListBalances` | `src/FinixApiReference/Models/ListBalances.cs` |
| `ListBalanceEntriesError` | `src/FinixApiReference/Errors/ListBalanceEntriesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListBalances

- **Auth**: `options.BasicAuth`
- **Signature**: `ListBalances(ListBalancesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListBalances`
- **Error**: `ApiException<ListBalancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBalancesRequest` | `src/FinixApiReference/Requests/Balances/ListBalancesRequest.cs` |
| `ListBalances` | `src/FinixApiReference/Models/ListBalances.cs` |
| `ListBalancesError` | `src/FinixApiReference/Errors/ListBalancesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

