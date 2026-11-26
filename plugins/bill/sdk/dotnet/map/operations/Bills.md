<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bills — operations

Accessor: `client.Bills` · Source: `src/Bill/Api/Bills.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveBill

- **Signature**: `ArchiveBill(ArchiveBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillId`
- **Returns**: `BillWithoutApproversResponseDto`
- **Error**: `ApiException<ArchiveBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveBillRequest` | `src/Bill/Requests/Bills/ArchiveBillRequest.cs` |
| `BillWithoutApproversResponseDto` | `src/Bill/Models/BillWithoutApproversResponseDto.cs` |
| `ArchiveBillError` | `src/Bill/Errors/ArchiveBillError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateBill

- **Signature**: `CreateBill(CreateBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BillResponseDto`
- **Error**: `ApiException<CreateBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBillRequest` | `src/Bill/Requests/Bills/CreateBillRequest.cs` |
| `BillCreateRequestDto` | `src/Bill/Models/BillCreateRequestDto.cs` |
| `BillResponseDto` | `src/Bill/Models/BillResponseDto.cs` |
| `CreateBillError` | `src/Bill/Errors/CreateBillError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateBulkBills

- **Signature**: `CreateBulkBills(CreateBulkBillsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<BillWithoutApproversResponseDto>`
- **Error**: `ApiException<CreateBulkBillsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBulkBillsRequest` | `src/Bill/Requests/Bills/CreateBulkBillsRequest.cs` |
| `BillCreateRequestDto` | `src/Bill/Models/BillCreateRequestDto.cs` |
| `BillWithoutApproversResponseDto` | `src/Bill/Models/BillWithoutApproversResponseDto.cs` |
| `CreateBulkBillsError` | `src/Bill/Errors/CreateBulkBillsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetBill

- **Signature**: `GetBill(GetBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillId`
- **Returns**: `BillReadResponseDto`
- **Error**: `ApiException<GetBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBillRequest` | `src/Bill/Requests/Bills/GetBillRequest.cs` |
| `BillReadResponseDto` | `src/Bill/Models/BillReadResponseDto.cs` |
| `GetBillError` | `src/Bill/Errors/GetBillError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListBills

- **Signature**: `ListBills(ListBillsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListBillResponseDto`
- **Error**: `ApiException<ListBillsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBillsRequest` | `src/Bill/Requests/Bills/ListBillsRequest.cs` |
| `ListBillResponseDto` | `src/Bill/Models/ListBillResponseDto.cs` |
| `ListBillsError` | `src/Bill/Errors/ListBillsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RecordPayment

- **Signature**: `RecordPayment(RecordPaymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RecordPaymentResponseDto`
- **Error**: `ApiException<RecordPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecordPaymentRequest` | `src/Bill/Requests/Bills/RecordPaymentRequest.cs` |
| `RecordPaymentRequestDto` | `src/Bill/Models/RecordPaymentRequestDto.cs` |
| `RecordPaymentResponseDto` | `src/Bill/Models/RecordPaymentResponseDto.cs` |
| `RecordPaymentError` | `src/Bill/Errors/RecordPaymentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ReplaceBill

- **Signature**: `ReplaceBill(ReplaceBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillId`, `Body`
- **Returns**: `BillResponseDto`
- **Error**: `ApiException<ReplaceBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceBillRequest` | `src/Bill/Requests/Bills/ReplaceBillRequest.cs` |
| `BillReplaceRequestDto` | `src/Bill/Models/BillReplaceRequestDto.cs` |
| `BillResponseDto` | `src/Bill/Models/BillResponseDto.cs` |
| `ReplaceBillError` | `src/Bill/Errors/ReplaceBillError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreBill

- **Signature**: `RestoreBill(RestoreBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillId`
- **Returns**: `BillWithoutApproversResponseDto`
- **Error**: `ApiException<RestoreBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreBillRequest` | `src/Bill/Requests/Bills/RestoreBillRequest.cs` |
| `BillWithoutApproversResponseDto` | `src/Bill/Models/BillWithoutApproversResponseDto.cs` |
| `RestoreBillError` | `src/Bill/Errors/RestoreBillError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateBill

- **Signature**: `UpdateBill(UpdateBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillId`, `Body`
- **Returns**: `BillResponseDto`
- **Error**: `ApiException<UpdateBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBillRequest` | `src/Bill/Requests/Bills/UpdateBillRequest.cs` |
| `BillUpdateRequestDto` | `src/Bill/Models/BillUpdateRequestDto.cs` |
| `BillResponseDto` | `src/Bill/Models/BillResponseDto.cs` |
| `UpdateBillError` | `src/Bill/Errors/UpdateBillError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

