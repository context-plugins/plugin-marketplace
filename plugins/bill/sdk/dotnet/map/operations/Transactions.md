<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactions — operations

Accessor: `client.Transactions` · Source: `src/Bill/Api/Transactions.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddTransactionReceipt

- **Signature**: `AddTransactionReceipt(AddTransactionReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`, `Body`
- **Returns**: `IReadOnlyList<ReceiptImage>`
- **Error**: `ApiException<AddTransactionReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddTransactionReceiptRequest` | `src/Bill/Requests/Transactions/AddTransactionReceiptRequest.cs` |
| `TransactionReceiptRequestDto` | `src/Bill/Models/TransactionReceiptRequestDto.cs` |
| `ReceiptImage` | `src/Bill/Models/ReceiptImage.cs` |
| `AddTransactionReceiptError` | `src/Bill/Errors/AddTransactionReceiptError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateReceiptUploadUrl

- **Signature**: `CreateReceiptUploadUrl(CreateReceiptUploadUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ReimbursementImageUploadUrlResponseDto`
- **Error**: `ApiException<CreateReceiptUploadUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateReceiptUploadUrlRequest` | `src/Bill/Requests/Transactions/CreateReceiptUploadUrlRequest.cs` |
| `ReimbursementImageUploadUrlResponseDto` | `src/Bill/Models/ReimbursementImageUploadUrlResponseDto.cs` |
| `CreateReceiptUploadUrlError` | `src/Bill/Errors/CreateReceiptUploadUrlError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### DeleteTransactionReceipt

- **Signature**: `DeleteTransactionReceipt(DeleteTransactionReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`, `ReceiptId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteTransactionReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTransactionReceiptRequest` | `src/Bill/Requests/Transactions/DeleteTransactionReceiptRequest.cs` |
| `DeleteTransactionReceiptError` | `src/Bill/Errors/DeleteTransactionReceiptError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetTransaction

- **Signature**: `GetTransaction(GetTransactionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`
- **Query params (wire ← C#)**: `showCustomFieldIds` ← `ShowCustomFieldIds`
- **Returns**: `TransactionResponseDto`
- **Error**: `ApiException<GetTransactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTransactionRequest` | `src/Bill/Requests/Transactions/GetTransactionRequest.cs` |
| `TransactionResponseDto` | `src/Bill/Models/TransactionResponseDto.cs` |
| `GetTransactionError` | `src/Bill/Errors/GetTransactionError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListTransactionCustomFieldValues

- **Signature**: `ListTransactionCustomFieldValues(ListTransactionCustomFieldValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`, `CustomFieldId`
- **Query params (wire ← C#)**: `max` ← `Max`, `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`
- **Returns**: `PaginationResponseDtoCustomFieldValueDto`
- **Error**: `ApiException<ListTransactionCustomFieldValuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTransactionCustomFieldValuesRequest` | `src/Bill/Requests/Transactions/ListTransactionCustomFieldValuesRequest.cs` |
| `PaginationResponseDtoCustomFieldValueDto` | `src/Bill/Models/PaginationResponseDtoCustomFieldValueDto.cs` |
| `ListTransactionCustomFieldValuesError` | `src/Bill/Errors/ListTransactionCustomFieldValuesError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListTransactionCustomFields

- **Signature**: `ListTransactionCustomFields(ListTransactionCustomFieldsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`
- **Query params (wire ← C#)**: `filters` ← `Filters`
- **Returns**: `ListTransactionCustomFieldResponseDto`
- **Error**: `ApiException<ListTransactionCustomFieldsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTransactionCustomFieldsRequest` | `src/Bill/Requests/Transactions/ListTransactionCustomFieldsRequest.cs` |
| `ListTransactionCustomFieldResponseDto` | `src/Bill/Models/ListTransactionCustomFieldResponseDto.cs` |
| `ListTransactionCustomFieldsError` | `src/Bill/Errors/ListTransactionCustomFieldsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListTransactions

- **Signature**: `ListTransactions(ListTransactionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`, `sort` ← `Sort`, `filters` ← `Filters`, `showCustomFieldIds` ← `ShowCustomFieldIds`, `includeReceipts` ← `IncludeReceipts`
- **Returns**: `PaginationResponseDtoTransactionResponseDto`
- **Error**: `ApiException<ListTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTransactionsRequest` | `src/Bill/Requests/Transactions/ListTransactionsRequest.cs` |
| `PaginationResponseDtoTransactionResponseDto` | `src/Bill/Models/PaginationResponseDtoTransactionResponseDto.cs` |
| `ListTransactionsError` | `src/Bill/Errors/ListTransactionsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ThreeDsChallenge

- **Signature**: `ThreeDsChallenge(ThreeDsChallengeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AcsTransactionId`, `Body`
- **Returns**: `ThreeDsResponseDto`
- **Error**: `ApiException<ThreeDsChallengeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ThreeDsChallengeRequest` | `src/Bill/Requests/Transactions/ThreeDsChallengeRequest.cs` |
| `ThreeDsRequestDto` | `src/Bill/Models/ThreeDsRequestDto.cs` |
| `ThreeDsResponseDto` | `src/Bill/Models/ThreeDsResponseDto.cs` |
| `ThreeDsChallengeError` | `src/Bill/Errors/ThreeDsChallengeError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateTransaction

- **Signature**: `UpdateTransaction(UpdateTransactionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`, `Body`
- **Returns**: `TransactionResponseDto`
- **Error**: `ApiException<UpdateTransactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTransactionRequest` | `src/Bill/Requests/Transactions/UpdateTransactionRequest.cs` |
| `UpdateTxRequestDto` | `src/Bill/Models/UpdateTxRequestDto.cs` |
| `TransactionResponseDto` | `src/Bill/Models/TransactionResponseDto.cs` |
| `UpdateTransactionError` | `src/Bill/Errors/UpdateTransactionError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateTransactionCustomFields

- **Signature**: `UpdateTransactionCustomFields(UpdateTransactionCustomFieldsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`, `Body`
- **Returns**: `SpendStatusDto`
- **Error**: `ApiException<UpdateTransactionCustomFieldsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTransactionCustomFieldsRequest` | `src/Bill/Requests/Transactions/UpdateTransactionCustomFieldsRequest.cs` |
| `BulkUpdateTxCustomFieldRequestDto` | `src/Bill/Models/BulkUpdateTxCustomFieldRequestDto.cs` |
| `SpendStatusDto` | `src/Bill/Models/SpendStatusDto.cs` |
| `UpdateTransactionCustomFieldsError` | `src/Bill/Errors/UpdateTransactionCustomFieldsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

