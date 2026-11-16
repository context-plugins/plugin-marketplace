<!-- Generated file — do not edit; regenerated with the SDK. -->

# SettlementQueueEntries — operations

Accessor: `client.SettlementQueueEntries` · Source: `src/FinixApiReference/Api/SettlementQueueEntries.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSettlementQueueEntry

- **Auth**: `options.BasicAuth`
- **Signature**: `GetSettlementQueueEntry(GetSettlementQueueEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SettlementQueueEntryId`
- **Returns**: `SettlementQueueEntry`
- **Error**: `ApiException<GetSettlementQueueEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSettlementQueueEntryRequest` | `src/FinixApiReference/Requests/SettlementQueueEntries/GetSettlementQueueEntryRequest.cs` |
| `SettlementQueueEntry` | `src/FinixApiReference/Models/SettlementQueueEntry.cs` |
| `GetSettlementQueueEntryError` | `src/FinixApiReference/Errors/GetSettlementQueueEntryError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListSettlementQueueEntries

- **Auth**: `options.BasicAuth`
- **Signature**: `ListSettlementQueueEntries(ListSettlementQueueEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `application_id` ← `ApplicationId`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `entity_id` ← `EntityId`, `entity_type` ← `EntityType`, `limit` ← `Limit`, `merchant_id` ← `MerchantId`, `ready_to_settle_after.gte` ← `ReadyToSettleAfterGte`, `ready_to_settle_after.lte` ← `ReadyToSettleAfterLte`, `state` ← `State`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListSettlementQueueEntries`
- **Error**: `ApiException<ListSettlementQueueEntriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSettlementQueueEntriesRequest` | `src/FinixApiReference/Requests/SettlementQueueEntries/ListSettlementQueueEntriesRequest.cs` |
| `EntityType9` | `src/FinixApiReference/Models/Enums/EntityType9.cs` |
| `State23` | `src/FinixApiReference/Models/Enums/State23.cs` |
| `ListSettlementQueueEntries` | `src/FinixApiReference/Models/ListSettlementQueueEntries.cs` |
| `ListSettlementQueueEntriesError` | `src/FinixApiReference/Errors/ListSettlementQueueEntriesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdateSettlementQueueEntries

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateSettlementQueueEntries(UpdateSettlementQueueEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateSettlementQueueEntriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSettlementQueueEntriesRequest` | `src/FinixApiReference/Requests/SettlementQueueEntries/UpdateSettlementQueueEntriesRequest.cs` |
| `ReleaseSettlementQueueEntries` | `src/FinixApiReference/Models/ReleaseSettlementQueueEntries.cs` |
| `UpdateSettlementQueueEntriesError` | `src/FinixApiReference/Errors/UpdateSettlementQueueEntriesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

