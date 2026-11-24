<!-- Generated file — do not edit; regenerated with the SDK. -->

# CreditMemos — operations

Accessor: `client.CreditMemos` · Source: `src/Divvy/Api/CreditMemos.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveCreditMemo

- **Signature**: `ArchiveCreditMemo(ArchiveCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CreditMemoId`
- **Returns**: `CreditMemoResponseDto`
- **Error**: `ApiException<ArchiveCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveCreditMemoRequest` | `src/Divvy/Requests/CreditMemos/ArchiveCreditMemoRequest.cs` |
| `CreditMemoResponseDto` | `src/Divvy/Models/CreditMemoResponseDto.cs` |
| `ArchiveCreditMemoError` | `src/Divvy/Errors/ArchiveCreditMemoError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkArchiveCreditMemo

- **Signature**: `BulkArchiveCreditMemo(BulkArchiveCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `CreditMemoBulkResponseDto`
- **Error**: `ApiException<BulkArchiveCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveCreditMemoRequest` | `src/Divvy/Requests/CreditMemos/BulkArchiveCreditMemoRequest.cs` |
| `CreditMemoBulkResponseDto` | `src/Divvy/Models/CreditMemoBulkResponseDto.cs` |
| `BulkArchiveCreditMemoError` | `src/Divvy/Errors/BulkArchiveCreditMemoError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkCreateCreditMemo

- **Signature**: `BulkCreateCreditMemo(BulkCreateCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CreditMemoBulkResponseDto`
- **Error**: `ApiException<BulkCreateCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateCreditMemoRequest` | `src/Divvy/Requests/CreditMemos/BulkCreateCreditMemoRequest.cs` |
| `CreateCreditMemoRequestDto` | `src/Divvy/Models/CreateCreditMemoRequestDto.cs` |
| `CreditMemoBulkResponseDto` | `src/Divvy/Models/CreditMemoBulkResponseDto.cs` |
| `BulkCreateCreditMemoError` | `src/Divvy/Errors/BulkCreateCreditMemoError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkReplaceCreditMemo

- **Signature**: `BulkReplaceCreditMemo(BulkReplaceCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CreditMemoBulkResponseDto`
- **Error**: `ApiException<BulkReplaceCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkReplaceCreditMemoRequest` | `src/Divvy/Requests/CreditMemos/BulkReplaceCreditMemoRequest.cs` |
| `ReplaceCreditMemoWithIdRequestDto` | `src/Divvy/Models/ReplaceCreditMemoWithIdRequestDto.cs` |
| `CreditMemoBulkResponseDto` | `src/Divvy/Models/CreditMemoBulkResponseDto.cs` |
| `BulkReplaceCreditMemoError` | `src/Divvy/Errors/BulkReplaceCreditMemoError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkRestoreCreditMemo

- **Signature**: `BulkRestoreCreditMemo(BulkRestoreCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `CreditMemoBulkResponseDto`
- **Error**: `ApiException<BulkRestoreCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreCreditMemoRequest` | `src/Divvy/Requests/CreditMemos/BulkRestoreCreditMemoRequest.cs` |
| `CreditMemoBulkResponseDto` | `src/Divvy/Models/CreditMemoBulkResponseDto.cs` |
| `BulkRestoreCreditMemoError` | `src/Divvy/Errors/BulkRestoreCreditMemoError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkUpdateCreditMemo

- **Signature**: `BulkUpdateCreditMemo(BulkUpdateCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CreditMemoBulkResponseDto`
- **Error**: `ApiException<BulkUpdateCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateCreditMemoRequest` | `src/Divvy/Requests/CreditMemos/BulkUpdateCreditMemoRequest.cs` |
| `UpdateCreditMemoWithIdRequestDto` | `src/Divvy/Models/UpdateCreditMemoWithIdRequestDto.cs` |
| `CreditMemoBulkResponseDto` | `src/Divvy/Models/CreditMemoBulkResponseDto.cs` |
| `BulkUpdateCreditMemoError` | `src/Divvy/Errors/BulkUpdateCreditMemoError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateCreditMemo

- **Signature**: `CreateCreditMemo(CreateCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CreditMemoResponseDto`
- **Error**: `ApiException<CreateCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCreditMemoRequest` | `src/Divvy/Requests/CreditMemos/CreateCreditMemoRequest.cs` |
| `CreateCreditMemoRequestDto` | `src/Divvy/Models/CreateCreditMemoRequestDto.cs` |
| `CreditMemoResponseDto` | `src/Divvy/Models/CreditMemoResponseDto.cs` |
| `CreateCreditMemoError` | `src/Divvy/Errors/CreateCreditMemoError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetCreditMemo

- **Signature**: `GetCreditMemo(GetCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CreditMemoId`
- **Returns**: `CreditMemoWithUsageResponseDto`
- **Error**: `ApiException<GetCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCreditMemoRequest` | `src/Divvy/Requests/CreditMemos/GetCreditMemoRequest.cs` |
| `CreditMemoWithUsageResponseDto` | `src/Divvy/Models/CreditMemoWithUsageResponseDto.cs` |
| `GetCreditMemoError` | `src/Divvy/Errors/GetCreditMemoError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListCreditMemos

- **Signature**: `ListCreditMemos(ListCreditMemosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoCreditMemoWithUsageResponseDto`
- **Error**: `ApiException<ListCreditMemosError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCreditMemosRequest` | `src/Divvy/Requests/CreditMemos/ListCreditMemosRequest.cs` |
| `ListResponseDtoCreditMemoWithUsageResponseDto` | `src/Divvy/Models/ListResponseDtoCreditMemoWithUsageResponseDto.cs` |
| `ListCreditMemosError` | `src/Divvy/Errors/ListCreditMemosError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ReplaceCreditMemo

- **Signature**: `ReplaceCreditMemo(ReplaceCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CreditMemoId`, `Body`
- **Returns**: `CreditMemoResponseDto`
- **Error**: `ApiException<ReplaceCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceCreditMemoRequest` | `src/Divvy/Requests/CreditMemos/ReplaceCreditMemoRequest.cs` |
| `ReplaceCreditMemoRequestDto` | `src/Divvy/Models/ReplaceCreditMemoRequestDto.cs` |
| `CreditMemoResponseDto` | `src/Divvy/Models/CreditMemoResponseDto.cs` |
| `ReplaceCreditMemoError` | `src/Divvy/Errors/ReplaceCreditMemoError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreCreditMemo

- **Signature**: `RestoreCreditMemo(RestoreCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CreditMemoId`
- **Returns**: `CreditMemoResponseDto`
- **Error**: `ApiException<RestoreCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreCreditMemoRequest` | `src/Divvy/Requests/CreditMemos/RestoreCreditMemoRequest.cs` |
| `CreditMemoResponseDto` | `src/Divvy/Models/CreditMemoResponseDto.cs` |
| `RestoreCreditMemoError` | `src/Divvy/Errors/RestoreCreditMemoError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateCreditMemo

- **Signature**: `UpdateCreditMemo(UpdateCreditMemoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CreditMemoId`, `Body`
- **Returns**: `CreditMemoResponseDto`
- **Error**: `ApiException<UpdateCreditMemoError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCreditMemoRequest` | `src/Divvy/Requests/CreditMemos/UpdateCreditMemoRequest.cs` |
| `UpdateCreditMemoRequestDto` | `src/Divvy/Models/UpdateCreditMemoRequestDto.cs` |
| `CreditMemoResponseDto` | `src/Divvy/Models/CreditMemoResponseDto.cs` |
| `UpdateCreditMemoError` | `src/Divvy/Errors/UpdateCreditMemoError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

