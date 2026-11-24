<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recurringbills — operations

Accessor: `client.Recurringbills` · Source: `src/Divvy/Api/Recurringbills.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveRecurringBill

- **Signature**: `ArchiveRecurringBill(ArchiveRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringBillId`
- **Returns**: `RecurringBillResponseDto`
- **Error**: `ApiException<ArchiveRecurringBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveRecurringBillRequest` | `src/Divvy/Requests/Recurringbills/ArchiveRecurringBillRequest.cs` |
| `RecurringBillResponseDto` | `src/Divvy/Models/RecurringBillResponseDto.cs` |
| `ArchiveRecurringBillError` | `src/Divvy/Errors/ArchiveRecurringBillError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateRecurringBill

- **Signature**: `CreateRecurringBill(CreateRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RecurringBillResponseDto`
- **Error**: `ApiException<CreateRecurringBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRecurringBillRequest` | `src/Divvy/Requests/Recurringbills/CreateRecurringBillRequest.cs` |
| `RecurringBillCreateRequestDto` | `src/Divvy/Models/RecurringBillCreateRequestDto.cs` |
| `RecurringBillResponseDto` | `src/Divvy/Models/RecurringBillResponseDto.cs` |
| `CreateRecurringBillError` | `src/Divvy/Errors/CreateRecurringBillError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetRecurringBill

- **Signature**: `GetRecurringBill(GetRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringBillId`
- **Returns**: `RecurringBillReadResponseDto`
- **Error**: `ApiException<GetRecurringBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRecurringBillRequest` | `src/Divvy/Requests/Recurringbills/GetRecurringBillRequest.cs` |
| `RecurringBillReadResponseDto` | `src/Divvy/Models/RecurringBillReadResponseDto.cs` |
| `GetRecurringBillError` | `src/Divvy/Errors/GetRecurringBillError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListRecurringBills

- **Signature**: `ListRecurringBills(ListRecurringBillsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListRecurringBillResponseDto`
- **Error**: `ApiException<ListRecurringBillsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRecurringBillsRequest` | `src/Divvy/Requests/Recurringbills/ListRecurringBillsRequest.cs` |
| `ListRecurringBillResponseDto` | `src/Divvy/Models/ListRecurringBillResponseDto.cs` |
| `ListRecurringBillsError` | `src/Divvy/Errors/ListRecurringBillsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ReplaceRecurringBill

- **Signature**: `ReplaceRecurringBill(ReplaceRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringBillId`, `Body`
- **Returns**: `RecurringBillResponseDto`
- **Error**: `ApiException<ReplaceRecurringBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceRecurringBillRequest` | `src/Divvy/Requests/Recurringbills/ReplaceRecurringBillRequest.cs` |
| `RecurringBillReplaceRequestDto` | `src/Divvy/Models/RecurringBillReplaceRequestDto.cs` |
| `RecurringBillResponseDto` | `src/Divvy/Models/RecurringBillResponseDto.cs` |
| `ReplaceRecurringBillError` | `src/Divvy/Errors/ReplaceRecurringBillError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreRecurringBill

- **Signature**: `RestoreRecurringBill(RestoreRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringBillId`
- **Returns**: `RecurringBillResponseDto`
- **Error**: `ApiException<RestoreRecurringBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreRecurringBillRequest` | `src/Divvy/Requests/Recurringbills/RestoreRecurringBillRequest.cs` |
| `RecurringBillResponseDto` | `src/Divvy/Models/RecurringBillResponseDto.cs` |
| `RestoreRecurringBillError` | `src/Divvy/Errors/RestoreRecurringBillError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateRecurringBill

- **Signature**: `UpdateRecurringBill(UpdateRecurringBillRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringBillId`, `Body`
- **Returns**: `RecurringBillResponseDto`
- **Error**: `ApiException<UpdateRecurringBillError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateRecurringBillRequest` | `src/Divvy/Requests/Recurringbills/UpdateRecurringBillRequest.cs` |
| `RecurringBillUpdateRequestDto` | `src/Divvy/Models/RecurringBillUpdateRequestDto.cs` |
| `RecurringBillResponseDto` | `src/Divvy/Models/RecurringBillResponseDto.cs` |
| `UpdateRecurringBillError` | `src/Divvy/Errors/UpdateRecurringBillError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

