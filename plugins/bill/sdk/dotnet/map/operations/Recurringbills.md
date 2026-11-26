<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recurringbills — operations

Accessor: `client.Recurringbills` · Source: `src/Bill/Api/Recurringbills.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveRecurringBill

- **Signature**: `ArchiveRecurringBill(ArchiveRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringBillId`
- **Returns**: `RecurringBillResponseDto`
- **Error**: `ApiException<ArchiveRecurringBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveRecurringBillRequest` | `src/Bill/Requests/Recurringbills/ArchiveRecurringBillRequest.cs` |
| `RecurringBillResponseDto` | `src/Bill/Models/RecurringBillResponseDto.cs` |
| `ArchiveRecurringBillError` | `src/Bill/Errors/ArchiveRecurringBillError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateRecurringBill

- **Signature**: `CreateRecurringBill(CreateRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RecurringBillResponseDto`
- **Error**: `ApiException<CreateRecurringBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRecurringBillRequest` | `src/Bill/Requests/Recurringbills/CreateRecurringBillRequest.cs` |
| `RecurringBillCreateRequestDto` | `src/Bill/Models/RecurringBillCreateRequestDto.cs` |
| `RecurringBillResponseDto` | `src/Bill/Models/RecurringBillResponseDto.cs` |
| `CreateRecurringBillError` | `src/Bill/Errors/CreateRecurringBillError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetRecurringBill

- **Signature**: `GetRecurringBill(GetRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringBillId`
- **Returns**: `RecurringBillReadResponseDto`
- **Error**: `ApiException<GetRecurringBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRecurringBillRequest` | `src/Bill/Requests/Recurringbills/GetRecurringBillRequest.cs` |
| `RecurringBillReadResponseDto` | `src/Bill/Models/RecurringBillReadResponseDto.cs` |
| `GetRecurringBillError` | `src/Bill/Errors/GetRecurringBillError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListRecurringBills

- **Signature**: `ListRecurringBills(ListRecurringBillsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListRecurringBillResponseDto`
- **Error**: `ApiException<ListRecurringBillsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRecurringBillsRequest` | `src/Bill/Requests/Recurringbills/ListRecurringBillsRequest.cs` |
| `ListRecurringBillResponseDto` | `src/Bill/Models/ListRecurringBillResponseDto.cs` |
| `ListRecurringBillsError` | `src/Bill/Errors/ListRecurringBillsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ReplaceRecurringBill

- **Signature**: `ReplaceRecurringBill(ReplaceRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringBillId`, `Body`
- **Returns**: `RecurringBillResponseDto`
- **Error**: `ApiException<ReplaceRecurringBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceRecurringBillRequest` | `src/Bill/Requests/Recurringbills/ReplaceRecurringBillRequest.cs` |
| `RecurringBillReplaceRequestDto` | `src/Bill/Models/RecurringBillReplaceRequestDto.cs` |
| `RecurringBillResponseDto` | `src/Bill/Models/RecurringBillResponseDto.cs` |
| `ReplaceRecurringBillError` | `src/Bill/Errors/ReplaceRecurringBillError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreRecurringBill

- **Signature**: `RestoreRecurringBill(RestoreRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringBillId`
- **Returns**: `RecurringBillResponseDto`
- **Error**: `ApiException<RestoreRecurringBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreRecurringBillRequest` | `src/Bill/Requests/Recurringbills/RestoreRecurringBillRequest.cs` |
| `RecurringBillResponseDto` | `src/Bill/Models/RecurringBillResponseDto.cs` |
| `RestoreRecurringBillError` | `src/Bill/Errors/RestoreRecurringBillError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateRecurringBill

- **Signature**: `UpdateRecurringBill(UpdateRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringBillId`, `Body`
- **Returns**: `RecurringBillResponseDto`
- **Error**: `ApiException<UpdateRecurringBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateRecurringBillRequest` | `src/Bill/Requests/Recurringbills/UpdateRecurringBillRequest.cs` |
| `RecurringBillUpdateRequestDto` | `src/Bill/Models/RecurringBillUpdateRequestDto.cs` |
| `RecurringBillResponseDto` | `src/Bill/Models/RecurringBillResponseDto.cs` |
| `UpdateRecurringBillError` | `src/Bill/Errors/UpdateRecurringBillError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

