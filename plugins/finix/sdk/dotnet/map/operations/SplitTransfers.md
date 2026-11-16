<!-- Generated file — do not edit; regenerated with the SDK. -->

# SplitTransfers — operations

Accessor: `client.SplitTransfers` · Source: `src/FinixApiReference/Api/SplitTransfers.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSplitTransfer

- **Auth**: `options.BasicAuth`
- **Signature**: `GetSplitTransfer(GetSplitTransferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SplitTransferId`
- **Returns**: `SplitTransfer`
- **Error**: `ApiException<GetSplitTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSplitTransferRequest` | `src/FinixApiReference/Requests/SplitTransfers/GetSplitTransferRequest.cs` |
| `SplitTransfer` | `src/FinixApiReference/Models/SplitTransfer.cs` |
| `GetSplitTransferError` | `src/FinixApiReference/Errors/GetSplitTransferError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListFees

- **Auth**: `options.BasicAuth`
- **Signature**: `ListFees(ListFeesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `linked_to` ← `LinkedTo`, `merchant_id` ← `MerchantId`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListFees`
- **Error**: `ApiException<ListFeesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFeesRequest` | `src/FinixApiReference/Requests/FeesApi/ListFeesRequest.cs` |
| `ListFees` | `src/FinixApiReference/Models/ListFees.cs` |
| `ListFeesError` | `src/FinixApiReference/Errors/ListFeesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListSplitTransfers

- **Auth**: `options.BasicAuth`
- **Signature**: `ListSplitTransfers(ListSplitTransfersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListSplitTransfers`
- **Error**: `ApiException<ListSplitTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSplitTransfersRequest` | `src/FinixApiReference/Requests/SplitTransfers/ListSplitTransfersRequest.cs` |
| `ListSplitTransfers` | `src/FinixApiReference/Models/ListSplitTransfers.cs` |
| `ListSplitTransfersError` | `src/FinixApiReference/Errors/ListSplitTransfersError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

