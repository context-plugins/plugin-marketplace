<!-- Generated file — do not edit; regenerated with the SDK. -->

# Receipts — operations

Accessor: `client.Receipts` · Source: `src/FinixApiReference/Api/Receipts.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateReceipt

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateReceipt(CreateReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Receipt`
- **Error**: `ApiException<CreateReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateReceiptRequest` | `src/FinixApiReference/Requests/Receipts/CreateReceiptRequest.cs` |
| `ReceiptsRequest` | `src/FinixApiReference/Models/AnyOf/ReceiptsRequest.cs` |
| `Receipt` | `src/FinixApiReference/Models/Receipt.cs` |
| `CreateReceiptError` | `src/FinixApiReference/Errors/CreateReceiptError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### CreateReceiptDeliveryAttempt

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateReceiptDeliveryAttempt(CreateReceiptDeliveryAttemptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReceiptId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateReceiptDeliveryAttemptError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateReceiptDeliveryAttemptRequest` | `src/FinixApiReference/Requests/Receipts/CreateReceiptDeliveryAttemptRequest.cs` |
| `CreateReceiptDeliveryAttempt` | `src/FinixApiReference/Models/CreateReceiptDeliveryAttempt.cs` |
| `CreateReceiptDeliveryAttemptError` | `src/FinixApiReference/Errors/CreateReceiptDeliveryAttemptError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetReceipt

- **Auth**: `options.BasicAuth`
- **Signature**: `GetReceipt(GetReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReceiptId`
- **Returns**: `Receipt`
- **Error**: `ApiException<GetReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetReceiptRequest` | `src/FinixApiReference/Requests/Receipts/GetReceiptRequest.cs` |
| `Receipt` | `src/FinixApiReference/Models/Receipt.cs` |
| `GetReceiptError` | `src/FinixApiReference/Errors/GetReceiptError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListReceiptDeliveryAttempts

- **Auth**: `options.BasicAuth`
- **Signature**: `ListReceiptDeliveryAttempts(ListReceiptDeliveryAttemptsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReceiptId`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `limit` ← `Limit`
- **Returns**: `ListReceiptDeliveryAttempts`
- **Error**: `ApiException<ListReceiptDeliveryAttemptsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListReceiptDeliveryAttemptsRequest` | `src/FinixApiReference/Requests/Receipts/ListReceiptDeliveryAttemptsRequest.cs` |
| `ListReceiptDeliveryAttempts` | `src/FinixApiReference/Models/ListReceiptDeliveryAttempts.cs` |
| `ListReceiptDeliveryAttemptsError` | `src/FinixApiReference/Errors/ListReceiptDeliveryAttemptsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

