<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactions — operations

Accessor: `client.Transactions` · Source: `src/Divvy/Api/Transactions.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddTransactionReceipt

- **Signature**: `AddTransactionReceipt(AddTransactionReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`, `Body`
- **Returns**: `IReadOnlyList<ReceiptImage>`
- **Error**: `ApiException<AddTransactionReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddTransactionReceiptRequest` | `src/Divvy/Requests/Transactions/AddTransactionReceiptRequest.cs` |
| `TransactionReceiptRequestDto` | `src/Divvy/Models/TransactionReceiptRequestDto.cs` |
| `ReceiptImage` | `src/Divvy/Models/ReceiptImage.cs` |
| `AddTransactionReceiptError` | `src/Divvy/Errors/AddTransactionReceiptError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateReceiptUploadUrl

- **Signature**: `CreateReceiptUploadUrl(CreateReceiptUploadUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ReimbursementImageUploadUrlResponseDto`
- **Error**: `ApiException<CreateReceiptUploadUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateReceiptUploadUrlRequest` | `src/Divvy/Requests/Transactions/CreateReceiptUploadUrlRequest.cs` |
| `ReimbursementImageUploadUrlResponseDto` | `src/Divvy/Models/ReimbursementImageUploadUrlResponseDto.cs` |
| `CreateReceiptUploadUrlError` | `src/Divvy/Errors/CreateReceiptUploadUrlError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### DeleteTransactionReceipt

- **Signature**: `DeleteTransactionReceipt(DeleteTransactionReceiptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`, `ReceiptId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteTransactionReceiptError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTransactionReceiptRequest` | `src/Divvy/Requests/Transactions/DeleteTransactionReceiptRequest.cs` |
| `DeleteTransactionReceiptError` | `src/Divvy/Errors/DeleteTransactionReceiptError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetTransaction

- **Signature**: `GetTransaction(GetTransactionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`
- **Query params (wire ← C#)**: `showCustomFieldIds` ← `ShowCustomFieldIds`
- **Returns**: `TransactionResponseDto`
- **Error**: `ApiException<GetTransactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTransactionRequest` | `src/Divvy/Requests/Transactions/GetTransactionRequest.cs` |
| `TransactionResponseDto` | `src/Divvy/Models/TransactionResponseDto.cs` |
| `GetTransactionError` | `src/Divvy/Errors/GetTransactionError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListTransactionCustomFieldValues

- **Signature**: `ListTransactionCustomFieldValues(ListTransactionCustomFieldValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`, `CustomFieldId`
- **Query params (wire ← C#)**: `max` ← `Max`, `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`
- **Returns**: `PaginationResponseDtoCustomFieldValueDto`
- **Error**: `ApiException<ListTransactionCustomFieldValuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTransactionCustomFieldValuesRequest` | `src/Divvy/Requests/Transactions/ListTransactionCustomFieldValuesRequest.cs` |
| `PaginationResponseDtoCustomFieldValueDto` | `src/Divvy/Models/PaginationResponseDtoCustomFieldValueDto.cs` |
| `ListTransactionCustomFieldValuesError` | `src/Divvy/Errors/ListTransactionCustomFieldValuesError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListTransactionCustomFields

- **Signature**: `ListTransactionCustomFields(ListTransactionCustomFieldsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`
- **Query params (wire ← C#)**: `filters` ← `Filters`
- **Returns**: `ListTransactionCustomFieldResponseDto`
- **Error**: `ApiException<ListTransactionCustomFieldsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTransactionCustomFieldsRequest` | `src/Divvy/Requests/Transactions/ListTransactionCustomFieldsRequest.cs` |
| `ListTransactionCustomFieldResponseDto` | `src/Divvy/Models/ListTransactionCustomFieldResponseDto.cs` |
| `ListTransactionCustomFieldsError` | `src/Divvy/Errors/ListTransactionCustomFieldsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListTransactions

- **Signature**: `ListTransactions(ListTransactionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`, `sort` ← `Sort`, `filters` ← `Filters`, `showCustomFieldIds` ← `ShowCustomFieldIds`, `includeReceipts` ← `IncludeReceipts`
- **Returns**: `PaginationResponseDtoTransactionResponseDto`
- **Error**: `ApiException<ListTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTransactionsRequest` | `src/Divvy/Requests/Transactions/ListTransactionsRequest.cs` |
| `PaginationResponseDtoTransactionResponseDto` | `src/Divvy/Models/PaginationResponseDtoTransactionResponseDto.cs` |
| `ListTransactionsError` | `src/Divvy/Errors/ListTransactionsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ThreeDsChallenge

- **Signature**: `ThreeDsChallenge(ThreeDsChallengeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AcsTransactionId`, `Body`
- **Returns**: `ThreeDsResponseDto`
- **Error**: `ApiException<ThreeDsChallengeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ThreeDsChallengeRequest` | `src/Divvy/Requests/Transactions/ThreeDsChallengeRequest.cs` |
| `ThreeDsRequestDto` | `src/Divvy/Models/ThreeDsRequestDto.cs` |
| `ThreeDsResponseDto` | `src/Divvy/Models/ThreeDsResponseDto.cs` |
| `ThreeDsChallengeError` | `src/Divvy/Errors/ThreeDsChallengeError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateTransaction

- **Signature**: `UpdateTransaction(UpdateTransactionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`, `Body`
- **Returns**: `TransactionResponseDto`
- **Error**: `ApiException<UpdateTransactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTransactionRequest` | `src/Divvy/Requests/Transactions/UpdateTransactionRequest.cs` |
| `UpdateTxRequestDto` | `src/Divvy/Models/UpdateTxRequestDto.cs` |
| `TransactionResponseDto` | `src/Divvy/Models/TransactionResponseDto.cs` |
| `UpdateTransactionError` | `src/Divvy/Errors/UpdateTransactionError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateTransactionCustomFields

- **Signature**: `UpdateTransactionCustomFields(UpdateTransactionCustomFieldsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TransactionId`, `Body`
- **Returns**: `SpendStatusDto`
- **Error**: `ApiException<UpdateTransactionCustomFieldsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTransactionCustomFieldsRequest` | `src/Divvy/Requests/Transactions/UpdateTransactionCustomFieldsRequest.cs` |
| `BulkUpdateTxCustomFieldRequestDto` | `src/Divvy/Models/BulkUpdateTxCustomFieldRequestDto.cs` |
| `SpendStatusDto` | `src/Divvy/Models/SpendStatusDto.cs` |
| `UpdateTransactionCustomFieldsError` | `src/Divvy/Errors/UpdateTransactionCustomFieldsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

