<!-- Generated file — do not edit; regenerated with the SDK. -->

# BalanceAdjustments — operations

Accessor: `client.BalanceAdjustments` · Source: `src/FinixApiReference/Api/BalanceAdjustments.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBalanceAdjustment

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateBalanceAdjustment(CreateBalanceAdjustmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BalanceAdjustment`
- **Error**: `ApiException<CreateBalanceAdjustmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBalanceAdjustmentRequest` | `src/FinixApiReference/Requests/BalanceAdjustments/CreateBalanceAdjustmentRequest.cs` |
| `CreateBalanceAdjustment` | `src/FinixApiReference/Models/CreateBalanceAdjustment.cs` |
| `BalanceAdjustment` | `src/FinixApiReference/Models/BalanceAdjustment.cs` |
| `CreateBalanceAdjustmentError` | `src/FinixApiReference/Errors/CreateBalanceAdjustmentError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListBalanceAdjustments

- **Auth**: `options.BasicAuth`
- **Signature**: `ListBalanceAdjustments(ListBalanceAdjustmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListBalanceAdjustments`
- **Error**: `ApiException<ListBalanceAdjustmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBalanceAdjustmentsRequest` | `src/FinixApiReference/Requests/BalanceAdjustments/ListBalanceAdjustmentsRequest.cs` |
| `ListBalanceAdjustments` | `src/FinixApiReference/Models/ListBalanceAdjustments.cs` |
| `ListBalanceAdjustmentsError` | `src/FinixApiReference/Errors/ListBalanceAdjustmentsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

