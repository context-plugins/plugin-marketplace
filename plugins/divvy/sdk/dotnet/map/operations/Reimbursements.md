<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reimbursements — operations

Accessor: `client.Reimbursements` · Source: `src/Divvy/Api/Reimbursements.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddReimbursementReceipt

- **Signature**: `AddReimbursementReceipt(AddReimbursementReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReimbursementId`, `Body`
- **Returns**: `IReadOnlyList<ReceiptImage>`
- **Error**: `ApiException<AddReimbursementReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddReimbursementReceiptRequest` | `src/Divvy/Requests/Reimbursements/AddReimbursementReceiptRequest.cs` |
| `ReimbursementReceiptRequestDto` | `src/Divvy/Models/ReimbursementReceiptRequestDto.cs` |
| `ReceiptImage` | `src/Divvy/Models/ReceiptImage.cs` |
| `AddReimbursementReceiptError` | `src/Divvy/Errors/AddReimbursementReceiptError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ApproveOrDenyReimbursement

- **Signature**: `ApproveOrDenyReimbursement(ApproveOrDenyReimbursementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReimbursementId`, `Body`
- **Returns**: `ReimbursementResponseDto`
- **Error**: `ApiException<ApproveOrDenyReimbursementError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApproveOrDenyReimbursementRequest` | `src/Divvy/Requests/Reimbursements/ApproveOrDenyReimbursementRequest.cs` |
| `ReimbursementActionRequestDto` | `src/Divvy/Models/ReimbursementActionRequestDto.cs` |
| `ReimbursementResponseDto` | `src/Divvy/Models/ReimbursementResponseDto.cs` |
| `ApproveOrDenyReimbursementError` | `src/Divvy/Errors/ApproveOrDenyReimbursementError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateImageUploadUrl

- **Signature**: `CreateImageUploadUrl(CreateImageUploadUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ReimbursementImageUploadUrlResponseDto`
- **Error**: `ApiException<CreateImageUploadUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateImageUploadUrlRequest` | `src/Divvy/Requests/Reimbursements/CreateImageUploadUrlRequest.cs` |
| `ReimbursementImageUploadUrlResponseDto` | `src/Divvy/Models/ReimbursementImageUploadUrlResponseDto.cs` |
| `CreateImageUploadUrlError` | `src/Divvy/Errors/CreateImageUploadUrlError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateReimbursement

- **Signature**: `CreateReimbursement(CreateReimbursementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ReimbursementResponseDto`
- **Error**: `ApiException<CreateReimbursementError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateReimbursementRequest` | `src/Divvy/Requests/Reimbursements/CreateReimbursementRequest.cs` |
| `CreateReimbursementRequestDto` | `src/Divvy/Models/CreateReimbursementRequestDto.cs` |
| `ReimbursementResponseDto` | `src/Divvy/Models/ReimbursementResponseDto.cs` |
| `CreateReimbursementError` | `src/Divvy/Errors/CreateReimbursementError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### DeleteReimbursement

- **Signature**: `DeleteReimbursement(DeleteReimbursementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReimbursementId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteReimbursementError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteReimbursementRequest` | `src/Divvy/Requests/Reimbursements/DeleteReimbursementRequest.cs` |
| `DeleteReimbursementError` | `src/Divvy/Errors/DeleteReimbursementError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### DeleteReimbursementReceipt

- **Signature**: `DeleteReimbursementReceipt(DeleteReimbursementReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReimbursementId`, `ReceiptId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteReimbursementReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteReimbursementReceiptRequest` | `src/Divvy/Requests/Reimbursements/DeleteReimbursementReceiptRequest.cs` |
| `DeleteReimbursementReceiptError` | `src/Divvy/Errors/DeleteReimbursementReceiptError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetReimbursement

- **Signature**: `GetReimbursement(GetReimbursementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReimbursementId`
- **Returns**: `ReimbursementResponseDto`
- **Error**: `ApiException<GetReimbursementError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetReimbursementRequest` | `src/Divvy/Requests/Reimbursements/GetReimbursementRequest.cs` |
| `ReimbursementResponseDto` | `src/Divvy/Models/ReimbursementResponseDto.cs` |
| `GetReimbursementError` | `src/Divvy/Errors/GetReimbursementError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListReimbursements

- **Signature**: `ListReimbursements(ListReimbursementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`, `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`
- **Returns**: `PaginationResponseDtoReimbursementResponseDto`
- **Error**: `ApiException<ListReimbursementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListReimbursementsRequest` | `src/Divvy/Requests/Reimbursements/ListReimbursementsRequest.cs` |
| `PaginationResponseDtoReimbursementResponseDto` | `src/Divvy/Models/PaginationResponseDtoReimbursementResponseDto.cs` |
| `ListReimbursementsError` | `src/Divvy/Errors/ListReimbursementsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateReimbursement

- **Signature**: `UpdateReimbursement(UpdateReimbursementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReimbursementId`, `Body`
- **Returns**: `ReimbursementResponseDto`
- **Error**: `ApiException<UpdateReimbursementError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateReimbursementRequest` | `src/Divvy/Requests/Reimbursements/UpdateReimbursementRequest.cs` |
| `UpdateReimbursementRequestDto` | `src/Divvy/Models/UpdateReimbursementRequestDto.cs` |
| `ReimbursementResponseDto` | `src/Divvy/Models/ReimbursementResponseDto.cs` |
| `UpdateReimbursementError` | `src/Divvy/Errors/UpdateReimbursementError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

