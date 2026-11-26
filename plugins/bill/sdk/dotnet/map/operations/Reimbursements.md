<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reimbursements — operations

Accessor: `client.Reimbursements` · Source: `src/Bill/Api/Reimbursements.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddReimbursementReceipt

- **Signature**: `AddReimbursementReceipt(AddReimbursementReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReimbursementId`, `Body`
- **Returns**: `IReadOnlyList<ReceiptImage>`
- **Error**: `ApiException<AddReimbursementReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddReimbursementReceiptRequest` | `src/Bill/Requests/Reimbursements/AddReimbursementReceiptRequest.cs` |
| `ReimbursementReceiptRequestDto` | `src/Bill/Models/ReimbursementReceiptRequestDto.cs` |
| `ReceiptImage` | `src/Bill/Models/ReceiptImage.cs` |
| `AddReimbursementReceiptError` | `src/Bill/Errors/AddReimbursementReceiptError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ApproveOrDenyReimbursement

- **Signature**: `ApproveOrDenyReimbursement(ApproveOrDenyReimbursementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReimbursementId`, `Body`
- **Returns**: `ReimbursementResponseDto`
- **Error**: `ApiException<ApproveOrDenyReimbursementError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApproveOrDenyReimbursementRequest` | `src/Bill/Requests/Reimbursements/ApproveOrDenyReimbursementRequest.cs` |
| `ReimbursementActionRequestDto` | `src/Bill/Models/ReimbursementActionRequestDto.cs` |
| `ReimbursementResponseDto` | `src/Bill/Models/ReimbursementResponseDto.cs` |
| `ApproveOrDenyReimbursementError` | `src/Bill/Errors/ApproveOrDenyReimbursementError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateImageUploadUrl

- **Signature**: `CreateImageUploadUrl(CreateImageUploadUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ReimbursementImageUploadUrlResponseDto`
- **Error**: `ApiException<CreateImageUploadUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateImageUploadUrlRequest` | `src/Bill/Requests/Reimbursements/CreateImageUploadUrlRequest.cs` |
| `ReimbursementImageUploadUrlResponseDto` | `src/Bill/Models/ReimbursementImageUploadUrlResponseDto.cs` |
| `CreateImageUploadUrlError` | `src/Bill/Errors/CreateImageUploadUrlError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateReimbursement

- **Signature**: `CreateReimbursement(CreateReimbursementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ReimbursementResponseDto`
- **Error**: `ApiException<CreateReimbursementError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateReimbursementRequest` | `src/Bill/Requests/Reimbursements/CreateReimbursementRequest.cs` |
| `CreateReimbursementRequestDto` | `src/Bill/Models/CreateReimbursementRequestDto.cs` |
| `ReimbursementResponseDto` | `src/Bill/Models/ReimbursementResponseDto.cs` |
| `CreateReimbursementError` | `src/Bill/Errors/CreateReimbursementError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### DeleteReimbursement

- **Signature**: `DeleteReimbursement(DeleteReimbursementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReimbursementId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteReimbursementError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteReimbursementRequest` | `src/Bill/Requests/Reimbursements/DeleteReimbursementRequest.cs` |
| `DeleteReimbursementError` | `src/Bill/Errors/DeleteReimbursementError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### DeleteReimbursementReceipt

- **Signature**: `DeleteReimbursementReceipt(DeleteReimbursementReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReimbursementId`, `ReceiptId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteReimbursementReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteReimbursementReceiptRequest` | `src/Bill/Requests/Reimbursements/DeleteReimbursementReceiptRequest.cs` |
| `DeleteReimbursementReceiptError` | `src/Bill/Errors/DeleteReimbursementReceiptError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetReimbursement

- **Signature**: `GetReimbursement(GetReimbursementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReimbursementId`
- **Returns**: `ReimbursementResponseDto`
- **Error**: `ApiException<GetReimbursementError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetReimbursementRequest` | `src/Bill/Requests/Reimbursements/GetReimbursementRequest.cs` |
| `ReimbursementResponseDto` | `src/Bill/Models/ReimbursementResponseDto.cs` |
| `GetReimbursementError` | `src/Bill/Errors/GetReimbursementError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListReimbursements

- **Signature**: `ListReimbursements(ListReimbursementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`, `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`
- **Returns**: `PaginationResponseDtoReimbursementResponseDto`
- **Error**: `ApiException<ListReimbursementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListReimbursementsRequest` | `src/Bill/Requests/Reimbursements/ListReimbursementsRequest.cs` |
| `PaginationResponseDtoReimbursementResponseDto` | `src/Bill/Models/PaginationResponseDtoReimbursementResponseDto.cs` |
| `ListReimbursementsError` | `src/Bill/Errors/ListReimbursementsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateReimbursement

- **Signature**: `UpdateReimbursement(UpdateReimbursementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReimbursementId`, `Body`
- **Returns**: `ReimbursementResponseDto`
- **Error**: `ApiException<UpdateReimbursementError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateReimbursementRequest` | `src/Bill/Requests/Reimbursements/UpdateReimbursementRequest.cs` |
| `UpdateReimbursementRequestDto` | `src/Bill/Models/UpdateReimbursementRequestDto.cs` |
| `ReimbursementResponseDto` | `src/Bill/Models/ReimbursementResponseDto.cs` |
| `UpdateReimbursementError` | `src/Bill/Errors/UpdateReimbursementError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

