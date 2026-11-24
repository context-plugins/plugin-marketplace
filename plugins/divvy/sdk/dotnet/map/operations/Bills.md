<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bills — operations

Accessor: `client.Bills` · Source: `src/Divvy/Api/Bills.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveBill

- **Signature**: `ArchiveBill(ArchiveBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillId`
- **Returns**: `BillWithoutApproversResponseDto`
- **Error**: `ApiException<ArchiveBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveBillRequest` | `src/Divvy/Requests/Bills/ArchiveBillRequest.cs` |
| `BillWithoutApproversResponseDto` | `src/Divvy/Models/BillWithoutApproversResponseDto.cs` |
| `ArchiveBillError` | `src/Divvy/Errors/ArchiveBillError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateBill

- **Signature**: `CreateBill(CreateBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BillResponseDto`
- **Error**: `ApiException<CreateBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBillRequest` | `src/Divvy/Requests/Bills/CreateBillRequest.cs` |
| `BillCreateRequestDto` | `src/Divvy/Models/BillCreateRequestDto.cs` |
| `BillResponseDto` | `src/Divvy/Models/BillResponseDto.cs` |
| `CreateBillError` | `src/Divvy/Errors/CreateBillError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateBulkBills

- **Signature**: `CreateBulkBills(CreateBulkBillsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<BillWithoutApproversResponseDto>`
- **Error**: `ApiException<CreateBulkBillsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBulkBillsRequest` | `src/Divvy/Requests/Bills/CreateBulkBillsRequest.cs` |
| `BillCreateRequestDto` | `src/Divvy/Models/BillCreateRequestDto.cs` |
| `BillWithoutApproversResponseDto` | `src/Divvy/Models/BillWithoutApproversResponseDto.cs` |
| `CreateBulkBillsError` | `src/Divvy/Errors/CreateBulkBillsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetBill

- **Signature**: `GetBill(GetBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillId`
- **Returns**: `BillReadResponseDto`
- **Error**: `ApiException<GetBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBillRequest` | `src/Divvy/Requests/Bills/GetBillRequest.cs` |
| `BillReadResponseDto` | `src/Divvy/Models/BillReadResponseDto.cs` |
| `GetBillError` | `src/Divvy/Errors/GetBillError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListBills

- **Signature**: `ListBills(ListBillsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListBillResponseDto`
- **Error**: `ApiException<ListBillsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBillsRequest` | `src/Divvy/Requests/Bills/ListBillsRequest.cs` |
| `ListBillResponseDto` | `src/Divvy/Models/ListBillResponseDto.cs` |
| `ListBillsError` | `src/Divvy/Errors/ListBillsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RecordPayment

- **Signature**: `RecordPayment(RecordPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RecordPaymentResponseDto`
- **Error**: `ApiException<RecordPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecordPaymentRequest` | `src/Divvy/Requests/Bills/RecordPaymentRequest.cs` |
| `RecordPaymentRequestDto` | `src/Divvy/Models/RecordPaymentRequestDto.cs` |
| `RecordPaymentResponseDto` | `src/Divvy/Models/RecordPaymentResponseDto.cs` |
| `RecordPaymentError` | `src/Divvy/Errors/RecordPaymentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ReplaceBill

- **Signature**: `ReplaceBill(ReplaceBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillId`, `Body`
- **Returns**: `BillResponseDto`
- **Error**: `ApiException<ReplaceBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceBillRequest` | `src/Divvy/Requests/Bills/ReplaceBillRequest.cs` |
| `BillReplaceRequestDto` | `src/Divvy/Models/BillReplaceRequestDto.cs` |
| `BillResponseDto` | `src/Divvy/Models/BillResponseDto.cs` |
| `ReplaceBillError` | `src/Divvy/Errors/ReplaceBillError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreBill

- **Signature**: `RestoreBill(RestoreBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillId`
- **Returns**: `BillWithoutApproversResponseDto`
- **Error**: `ApiException<RestoreBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreBillRequest` | `src/Divvy/Requests/Bills/RestoreBillRequest.cs` |
| `BillWithoutApproversResponseDto` | `src/Divvy/Models/BillWithoutApproversResponseDto.cs` |
| `RestoreBillError` | `src/Divvy/Errors/RestoreBillError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateBill

- **Signature**: `UpdateBill(UpdateBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillId`, `Body`
- **Returns**: `BillResponseDto`
- **Error**: `ApiException<UpdateBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBillRequest` | `src/Divvy/Requests/Bills/UpdateBillRequest.cs` |
| `BillUpdateRequestDto` | `src/Divvy/Models/BillUpdateRequestDto.cs` |
| `BillResponseDto` | `src/Divvy/Models/BillResponseDto.cs` |
| `UpdateBillError` | `src/Divvy/Errors/UpdateBillError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

