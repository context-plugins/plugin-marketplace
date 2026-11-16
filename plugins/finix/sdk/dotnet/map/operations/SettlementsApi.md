<!-- Generated file — do not edit; regenerated with the SDK. -->

# SettlementsApi — operations

Accessor: `client.SettlementsApi` · Source: `src/FinixApiReference/Api/SettlementsApi.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Closesettlements

- **Auth**: `options.BasicAuth`
- **Signature**: `Closesettlements(ClosesettlementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SettlementId`, `Body`
- **Returns**: `Settlement`
- **Error**: `ApiException<ClosesettlementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ClosesettlementsRequest` | `src/FinixApiReference/Requests/SettlementsApi/ClosesettlementsRequest.cs` |
| `CloseSettlement` | `src/FinixApiReference/Models/CloseSettlement.cs` |
| `Settlement` | `src/FinixApiReference/Models/Settlement.cs` |
| `ClosesettlementsError` | `src/FinixApiReference/Errors/ClosesettlementsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### CreateSettlementFundingTransferAttempt

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateSettlementFundingTransferAttempt(CreateSettlementFundingTransferAttemptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SettlementId`, `Body`
- **Returns**: `SettlementFundingTransferAttempt`
- **Error**: `ApiException<CreateSettlementFundingTransferAttemptError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSettlementFundingTransferAttemptRequest` | `src/FinixApiReference/Requests/SettlementsApi/CreateSettlementFundingTransferAttemptRequest.cs` |
| `CreateSettlementFundingTransferAttempt` | `src/FinixApiReference/Models/CreateSettlementFundingTransferAttempt.cs` |
| `SettlementFundingTransferAttempt` | `src/FinixApiReference/Models/SettlementFundingTransferAttempt.cs` |
| `CreateSettlementFundingTransferAttemptError` | `src/FinixApiReference/Errors/CreateSettlementFundingTransferAttemptError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetSettlement

- **Auth**: `options.BasicAuth`
- **Signature**: `GetSettlement(GetSettlementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SettlementId`
- **Returns**: `Settlement`
- **Error**: `ApiException<GetSettlementError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSettlementRequest` | `src/FinixApiReference/Requests/SettlementsApi/GetSettlementRequest.cs` |
| `Settlement` | `src/FinixApiReference/Models/Settlement.cs` |
| `GetSettlementError` | `src/FinixApiReference/Errors/GetSettlementError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListSettlementFees

- **Auth**: `options.BasicAuth`
- **Signature**: `ListSettlementFees(ListSettlementFeesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SettlementId`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListFees`
- **Error**: `ApiException<ListSettlementFeesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSettlementFeesRequest` | `src/FinixApiReference/Requests/SettlementsApi/ListSettlementFeesRequest.cs` |
| `ListFees` | `src/FinixApiReference/Models/ListFees.cs` |
| `ListSettlementFeesError` | `src/FinixApiReference/Errors/ListSettlementFeesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListSettlementFundingTransferAttempts

- **Auth**: `options.BasicAuth`
- **Signature**: `ListSettlementFundingTransferAttempts(ListSettlementFundingTransferAttemptsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SettlementId`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListSettlementFundingTransferAttempts`
- **Error**: `ApiException<ListSettlementFundingTransferAttemptsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSettlementFundingTransferAttemptsRequest` | `src/FinixApiReference/Requests/SettlementsApi/ListSettlementFundingTransferAttemptsRequest.cs` |
| `ListSettlementFundingTransferAttempts` | `src/FinixApiReference/Models/ListSettlementFundingTransferAttempts.cs` |
| `ListSettlementFundingTransferAttemptsError` | `src/FinixApiReference/Errors/ListSettlementFundingTransferAttemptsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListSettlementFundingTransfers

- **Auth**: `options.BasicAuth`
- **Signature**: `ListSettlementFundingTransfers(ListSettlementFundingTransfersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SettlementId`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListSettlementFundingTransfers`
- **Error**: `ApiException<ListSettlementFundingTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSettlementFundingTransfersRequest` | `src/FinixApiReference/Requests/SettlementsApi/ListSettlementFundingTransfersRequest.cs` |
| `ListSettlementFundingTransfers` | `src/FinixApiReference/Models/ListSettlementFundingTransfers.cs` |
| `ListSettlementFundingTransfersError` | `src/FinixApiReference/Errors/ListSettlementFundingTransfersError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListSettlementTransfers

- **Auth**: `options.BasicAuth`
- **Signature**: `ListSettlementTransfers(ListSettlementTransfersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SettlementId`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListSettlementTransfers`
- **Error**: `ApiException<ListSettlementTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSettlementTransfersRequest` | `src/FinixApiReference/Requests/SettlementsApi/ListSettlementTransfersRequest.cs` |
| `ListSettlementTransfers` | `src/FinixApiReference/Models/ListSettlementTransfers.cs` |
| `ListSettlementTransfersError` | `src/FinixApiReference/Errors/ListSettlementTransfersError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListSettlements

- **Auth**: `options.BasicAuth`
- **Signature**: `ListSettlements(ListSettlementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `application_id` ← `ApplicationId`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `funding_transfer_id` ← `FundingTransferId`, `id` ← `Id`, `is_exception` ← `IsException`, `limit` ← `Limit`, `merchant_id` ← `MerchantId`, `status` ← `Status`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `total_amount` ← `TotalAmount`, `total_amount.lte` ← `TotalAmountLte`, `total_amount.lt` ← `TotalAmountLt`, `total_amount.gte` ← `TotalAmountGte`, `total_amount.gt` ← `TotalAmountGt`, `transfer_id` ← `TransferId`, `split_transfer_id` ← `SplitTransferId`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListSettlements`
- **Error**: `ApiException<ListSettlementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSettlementsRequest` | `src/FinixApiReference/Requests/SettlementsApi/ListSettlementsRequest.cs` |
| `Status3` | `src/FinixApiReference/Models/Enums/Status3.cs` |
| `ListSettlements` | `src/FinixApiReference/Models/ListSettlements.cs` |
| `ListSettlementsError` | `src/FinixApiReference/Errors/ListSettlementsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### Listsettlemententries

- **Auth**: `options.BasicAuth`
- **Signature**: `Listsettlemententries(ListsettlemententriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SettlementId`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListSettlementEntries`
- **Error**: `ApiException<ListsettlemententriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListsettlemententriesRequest` | `src/FinixApiReference/Requests/SettlementsApi/ListsettlemententriesRequest.cs` |
| `ListSettlementEntries` | `src/FinixApiReference/Models/ListSettlementEntries.cs` |
| `ListsettlemententriesError` | `src/FinixApiReference/Errors/ListsettlemententriesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### RemoveSettlementEntries

- **Auth**: `options.BasicAuth`
- **Signature**: `RemoveSettlementEntries(RemoveSettlementEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SettlementId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RemoveSettlementEntriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveSettlementEntriesRequest` | `src/FinixApiReference/Requests/SettlementsApi/RemoveSettlementEntriesRequest.cs` |
| `RemoveSettlementEntries` | `src/FinixApiReference/Models/RemoveSettlementEntries.cs` |
| `RemoveSettlementEntriesError` | `src/FinixApiReference/Errors/RemoveSettlementEntriesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### RemoveSettlementTransfers

- **Auth**: `options.BasicAuth`
- **Signature**: `RemoveSettlementTransfers(RemoveSettlementTransfersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SettlementId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RemoveSettlementTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveSettlementTransfersRequest` | `src/FinixApiReference/Requests/SettlementsApi/RemoveSettlementTransfersRequest.cs` |
| `DeleteSettlementTransfers` | `src/FinixApiReference/Models/DeleteSettlementTransfers.cs` |
| `RemoveSettlementTransfersError` | `src/FinixApiReference/Errors/RemoveSettlementTransfersError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

