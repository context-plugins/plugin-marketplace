<!-- Generated file — do not edit; regenerated with the SDK. -->

# Cards — operations

Accessor: `client.Cards` · Source: `src/CompSniper/Api/Cards.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelCardBatch

- **Auth**: `options.BearerAuth`
- **Signature**: `CancelCardBatch(CancelCardBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CancelCardBatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelCardBatchRequest` | `src/CompSniper/Requests/Cards/CancelCardBatchRequest.cs` |
| `CancelCardBatchError` | `src/CompSniper/Errors/CancelCardBatchError.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

### GetCardBatch

- **Auth**: `options.BearerAuth`
- **Signature**: `GetCardBatch(GetCardBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `CardBatchJob`
- **Error**: `ApiException<GetCardBatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCardBatchRequest` | `src/CompSniper/Requests/Cards/GetCardBatchRequest.cs` |
| `CardBatchJob` | `src/CompSniper/Models/CardBatchJob.cs` |
| `GetCardBatchError` | `src/CompSniper/Errors/GetCardBatchError.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

### SubmitCardBatch

- **Auth**: `options.BearerAuth`
- **Signature**: `SubmitCardBatch(SubmitCardBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CardBatchAccepted`
- **Error**: `ApiException<SubmitCardBatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SubmitCardBatchRequest` | `src/CompSniper/Requests/Cards/SubmitCardBatchRequest.cs` |
| `XCreditSource` | `src/CompSniper/Models/Enums/XCreditSource.cs` |
| `CardBatchRequest` | `src/CompSniper/Models/CardBatchRequest.cs` |
| `CardBatchAccepted` | `src/CompSniper/Models/CardBatchAccepted.cs` |
| `SubmitCardBatchError` | `src/CompSniper/Errors/SubmitCardBatchError.cs` |
| `ApiErrorModel` | `src/CompSniper/Models/ApiErrorModel.cs` |

