<!-- Generated file — do not edit; regenerated with the SDK. -->

# ValueReceipts — operations

Accessor: `client.ValueReceipts` · Source: `src/Paid/Api/ValueReceipts.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveValueReceipt

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `ArchiveValueReceipt(ArchiveValueReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `SuccessResponse`
- **Error**: `ApiException<ArchiveValueReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveValueReceiptRequest` | `src/Paid/Requests/ValueReceipts/ArchiveValueReceiptRequest.cs` |
| `SuccessResponse` | `src/Paid/Models/SuccessResponse.cs` |
| `ArchiveValueReceiptError` | `src/Paid/Errors/ArchiveValueReceiptError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetValueReceiptById

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `GetValueReceiptById(GetValueReceiptByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `ValueReceiptDetail`
- **Error**: `ApiException<GetValueReceiptByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetValueReceiptByIdRequest` | `src/Paid/Requests/ValueReceipts/GetValueReceiptByIdRequest.cs` |
| `ValueReceiptDetail` | `src/Paid/Models/ValueReceiptDetail.cs` |
| `GetValueReceiptByIdError` | `src/Paid/Errors/GetValueReceiptByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### ListValueReceipts

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `ListValueReceipts(ListValueReceiptsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `customerId` ← `CustomerId`, `externalCustomerId` ← `ExternalCustomerId`, `orderId` ← `OrderId`, `productId` ← `ProductId`, `archived` ← `Archived`
- **Returns**: `ValueReceiptListResponse`
- **Error**: `ApiException<ListValueReceiptsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListValueReceiptsRequest` | `src/Paid/Requests/ValueReceipts/ListValueReceiptsRequest.cs` |
| `ValueReceiptsGetParametersArchived` | `src/Paid/Models/Enums/ValueReceiptsGetParametersArchived.cs` |
| `ValueReceiptListResponse` | `src/Paid/Models/ValueReceiptListResponse.cs` |
| `ListValueReceiptsError` | `src/Paid/Errors/ListValueReceiptsError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### PublishValueReceipt

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `PublishValueReceipt(PublishValueReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `ValueReceiptDetail`
- **Error**: `ApiException<PublishValueReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PublishValueReceiptRequest` | `src/Paid/Requests/ValueReceipts/PublishValueReceiptRequest.cs` |
| `PublishValueReceiptBody` | `src/Paid/Models/PublishValueReceiptBody.cs` |
| `ValueReceiptDetail` | `src/Paid/Models/ValueReceiptDetail.cs` |
| `PublishValueReceiptError` | `src/Paid/Errors/PublishValueReceiptError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### RefreshValueReceipt

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `RefreshValueReceipt(RefreshValueReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `ValueReceiptSyncResponse`
- **Error**: `ApiException<RefreshValueReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RefreshValueReceiptRequest` | `src/Paid/Requests/ValueReceipts/RefreshValueReceiptRequest.cs` |
| `ValueReceiptSyncResponse` | `src/Paid/Models/ValueReceiptSyncResponse.cs` |
| `RefreshValueReceiptError` | `src/Paid/Errors/RefreshValueReceiptError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### SealValueReceipt

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `SealValueReceipt(SealValueReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `SuccessResponse`
- **Error**: `ApiException<SealValueReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SealValueReceiptRequest` | `src/Paid/Requests/ValueReceipts/SealValueReceiptRequest.cs` |
| `SuccessResponse` | `src/Paid/Models/SuccessResponse.cs` |
| `SealValueReceiptError` | `src/Paid/Errors/SealValueReceiptError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### SyncValueReceipt

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `SyncValueReceipt(SyncValueReceiptOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `ValueReceiptSyncResponse`
- **Error**: `ApiException<SyncValueReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SyncValueReceiptOperationRequest` | `src/Paid/Requests/ValueReceipts/SyncValueReceiptOperationRequest.cs` |
| `SyncValueReceiptRequest` | `src/Paid/Models/SyncValueReceiptRequest.cs` |
| `ValueReceiptSyncResponse` | `src/Paid/Models/ValueReceiptSyncResponse.cs` |
| `SyncValueReceiptError` | `src/Paid/Errors/SyncValueReceiptError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UnarchiveValueReceipt

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `UnarchiveValueReceipt(UnarchiveValueReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `SuccessResponse`
- **Error**: `ApiException<UnarchiveValueReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnarchiveValueReceiptRequest` | `src/Paid/Requests/ValueReceipts/UnarchiveValueReceiptRequest.cs` |
| `SuccessResponse` | `src/Paid/Models/SuccessResponse.cs` |
| `UnarchiveValueReceiptError` | `src/Paid/Errors/UnarchiveValueReceiptError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UnpublishValueReceipt

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `UnpublishValueReceipt(UnpublishValueReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `ValueReceiptDetail`
- **Error**: `ApiException<UnpublishValueReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnpublishValueReceiptRequest` | `src/Paid/Requests/ValueReceipts/UnpublishValueReceiptRequest.cs` |
| `ValueReceiptDetail` | `src/Paid/Models/ValueReceiptDetail.cs` |
| `UnpublishValueReceiptError` | `src/Paid/Errors/UnpublishValueReceiptError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

