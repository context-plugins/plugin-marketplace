<!-- Generated file — do not edit; regenerated with the SDK. -->

# CreditMemos — operations

Accessor: `client.CreditMemos` · Source: `src/Bill/Api/CreditMemos.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveCreditMemo

- **Signature**: `ArchiveCreditMemo(ArchiveCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CreditMemoId`
- **Returns**: `CreditMemoResponseDto`
- **Error**: `ApiException<ArchiveCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveCreditMemoRequest` | `src/Bill/Requests/CreditMemos/ArchiveCreditMemoRequest.cs` |
| `CreditMemoResponseDto` | `src/Bill/Models/CreditMemoResponseDto.cs` |
| `ArchiveCreditMemoError` | `src/Bill/Errors/ArchiveCreditMemoError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkArchiveCreditMemo

- **Signature**: `BulkArchiveCreditMemo(BulkArchiveCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `CreditMemoBulkResponseDto`
- **Error**: `ApiException<BulkArchiveCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveCreditMemoRequest` | `src/Bill/Requests/CreditMemos/BulkArchiveCreditMemoRequest.cs` |
| `CreditMemoBulkResponseDto` | `src/Bill/Models/CreditMemoBulkResponseDto.cs` |
| `BulkArchiveCreditMemoError` | `src/Bill/Errors/BulkArchiveCreditMemoError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkCreateCreditMemo

- **Signature**: `BulkCreateCreditMemo(BulkCreateCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CreditMemoBulkResponseDto`
- **Error**: `ApiException<BulkCreateCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateCreditMemoRequest` | `src/Bill/Requests/CreditMemos/BulkCreateCreditMemoRequest.cs` |
| `CreateCreditMemoRequestDto` | `src/Bill/Models/CreateCreditMemoRequestDto.cs` |
| `CreditMemoBulkResponseDto` | `src/Bill/Models/CreditMemoBulkResponseDto.cs` |
| `BulkCreateCreditMemoError` | `src/Bill/Errors/BulkCreateCreditMemoError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkReplaceCreditMemo

- **Signature**: `BulkReplaceCreditMemo(BulkReplaceCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CreditMemoBulkResponseDto`
- **Error**: `ApiException<BulkReplaceCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkReplaceCreditMemoRequest` | `src/Bill/Requests/CreditMemos/BulkReplaceCreditMemoRequest.cs` |
| `ReplaceCreditMemoWithIdRequestDto` | `src/Bill/Models/ReplaceCreditMemoWithIdRequestDto.cs` |
| `CreditMemoBulkResponseDto` | `src/Bill/Models/CreditMemoBulkResponseDto.cs` |
| `BulkReplaceCreditMemoError` | `src/Bill/Errors/BulkReplaceCreditMemoError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkRestoreCreditMemo

- **Signature**: `BulkRestoreCreditMemo(BulkRestoreCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `CreditMemoBulkResponseDto`
- **Error**: `ApiException<BulkRestoreCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreCreditMemoRequest` | `src/Bill/Requests/CreditMemos/BulkRestoreCreditMemoRequest.cs` |
| `CreditMemoBulkResponseDto` | `src/Bill/Models/CreditMemoBulkResponseDto.cs` |
| `BulkRestoreCreditMemoError` | `src/Bill/Errors/BulkRestoreCreditMemoError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkUpdateCreditMemo

- **Signature**: `BulkUpdateCreditMemo(BulkUpdateCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CreditMemoBulkResponseDto`
- **Error**: `ApiException<BulkUpdateCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateCreditMemoRequest` | `src/Bill/Requests/CreditMemos/BulkUpdateCreditMemoRequest.cs` |
| `UpdateCreditMemoWithIdRequestDto` | `src/Bill/Models/UpdateCreditMemoWithIdRequestDto.cs` |
| `CreditMemoBulkResponseDto` | `src/Bill/Models/CreditMemoBulkResponseDto.cs` |
| `BulkUpdateCreditMemoError` | `src/Bill/Errors/BulkUpdateCreditMemoError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateCreditMemo

- **Signature**: `CreateCreditMemo(CreateCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CreditMemoResponseDto`
- **Error**: `ApiException<CreateCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCreditMemoRequest` | `src/Bill/Requests/CreditMemos/CreateCreditMemoRequest.cs` |
| `CreateCreditMemoRequestDto` | `src/Bill/Models/CreateCreditMemoRequestDto.cs` |
| `CreditMemoResponseDto` | `src/Bill/Models/CreditMemoResponseDto.cs` |
| `CreateCreditMemoError` | `src/Bill/Errors/CreateCreditMemoError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetCreditMemo

- **Signature**: `GetCreditMemo(GetCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CreditMemoId`
- **Returns**: `CreditMemoWithUsageResponseDto`
- **Error**: `ApiException<GetCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCreditMemoRequest` | `src/Bill/Requests/CreditMemos/GetCreditMemoRequest.cs` |
| `CreditMemoWithUsageResponseDto` | `src/Bill/Models/CreditMemoWithUsageResponseDto.cs` |
| `GetCreditMemoError` | `src/Bill/Errors/GetCreditMemoError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListCreditMemos

- **Signature**: `ListCreditMemos(ListCreditMemosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoCreditMemoWithUsageResponseDto`
- **Error**: `ApiException<ListCreditMemosError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCreditMemosRequest` | `src/Bill/Requests/CreditMemos/ListCreditMemosRequest.cs` |
| `ListResponseDtoCreditMemoWithUsageResponseDto` | `src/Bill/Models/ListResponseDtoCreditMemoWithUsageResponseDto.cs` |
| `ListCreditMemosError` | `src/Bill/Errors/ListCreditMemosError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ReplaceCreditMemo

- **Signature**: `ReplaceCreditMemo(ReplaceCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CreditMemoId`, `Body`
- **Returns**: `CreditMemoResponseDto`
- **Error**: `ApiException<ReplaceCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceCreditMemoRequest` | `src/Bill/Requests/CreditMemos/ReplaceCreditMemoRequest.cs` |
| `ReplaceCreditMemoRequestDto` | `src/Bill/Models/ReplaceCreditMemoRequestDto.cs` |
| `CreditMemoResponseDto` | `src/Bill/Models/CreditMemoResponseDto.cs` |
| `ReplaceCreditMemoError` | `src/Bill/Errors/ReplaceCreditMemoError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreCreditMemo

- **Signature**: `RestoreCreditMemo(RestoreCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CreditMemoId`
- **Returns**: `CreditMemoResponseDto`
- **Error**: `ApiException<RestoreCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreCreditMemoRequest` | `src/Bill/Requests/CreditMemos/RestoreCreditMemoRequest.cs` |
| `CreditMemoResponseDto` | `src/Bill/Models/CreditMemoResponseDto.cs` |
| `RestoreCreditMemoError` | `src/Bill/Errors/RestoreCreditMemoError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateCreditMemo

- **Signature**: `UpdateCreditMemo(UpdateCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CreditMemoId`, `Body`
- **Returns**: `CreditMemoResponseDto`
- **Error**: `ApiException<UpdateCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCreditMemoRequest` | `src/Bill/Requests/CreditMemos/UpdateCreditMemoRequest.cs` |
| `UpdateCreditMemoRequestDto` | `src/Bill/Models/UpdateCreditMemoRequestDto.cs` |
| `CreditMemoResponseDto` | `src/Bill/Models/CreditMemoResponseDto.cs` |
| `UpdateCreditMemoError` | `src/Bill/Errors/UpdateCreditMemoError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

