<!-- Generated file — do not edit; regenerated with the SDK. -->

# RecurringInvoices — operations

Accessor: `client.RecurringInvoices` · Source: `src/Divvy/Api/RecurringInvoices.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveRecurringInvoice

- **Signature**: `ArchiveRecurringInvoice(ArchiveRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringInvoiceId`
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `ApiException<ArchiveRecurringInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveRecurringInvoiceRequest` | `src/Divvy/Requests/RecurringInvoices/ArchiveRecurringInvoiceRequest.cs` |
| `RecurringInvoiceResponseDto` | `src/Divvy/Models/RecurringInvoiceResponseDto.cs` |
| `ArchiveRecurringInvoiceError` | `src/Divvy/Errors/ArchiveRecurringInvoiceError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateRecurringInvoice

- **Signature**: `CreateRecurringInvoice(CreateRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `ApiException<CreateRecurringInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRecurringInvoiceRequest` | `src/Divvy/Requests/RecurringInvoices/CreateRecurringInvoiceRequest.cs` |
| `CreateRecurringInvoiceRequestDto` | `src/Divvy/Models/CreateRecurringInvoiceRequestDto.cs` |
| `RecurringInvoiceResponseDto` | `src/Divvy/Models/RecurringInvoiceResponseDto.cs` |
| `CreateRecurringInvoiceError` | `src/Divvy/Errors/CreateRecurringInvoiceError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetRecurringInvoice

- **Signature**: `GetRecurringInvoice(GetRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringInvoiceId`
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `ApiException<GetRecurringInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRecurringInvoiceRequest` | `src/Divvy/Requests/RecurringInvoices/GetRecurringInvoiceRequest.cs` |
| `RecurringInvoiceResponseDto` | `src/Divvy/Models/RecurringInvoiceResponseDto.cs` |
| `GetRecurringInvoiceError` | `src/Divvy/Errors/GetRecurringInvoiceError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListRecurringInvoices

- **Signature**: `ListRecurringInvoices(ListRecurringInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoRecurringInvoiceResponseDto`
- **Error**: `ApiException<ListRecurringInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRecurringInvoicesRequest` | `src/Divvy/Requests/RecurringInvoices/ListRecurringInvoicesRequest.cs` |
| `ListResponseDtoRecurringInvoiceResponseDto` | `src/Divvy/Models/ListResponseDtoRecurringInvoiceResponseDto.cs` |
| `ListRecurringInvoicesError` | `src/Divvy/Errors/ListRecurringInvoicesError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ReplaceRecurringInvoice

- **Signature**: `ReplaceRecurringInvoice(ReplaceRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringInvoiceId`, `Body`
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `ApiException<ReplaceRecurringInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceRecurringInvoiceRequest` | `src/Divvy/Requests/RecurringInvoices/ReplaceRecurringInvoiceRequest.cs` |
| `RecurringInvoiceReplaceRequestDto` | `src/Divvy/Models/RecurringInvoiceReplaceRequestDto.cs` |
| `RecurringInvoiceResponseDto` | `src/Divvy/Models/RecurringInvoiceResponseDto.cs` |
| `ReplaceRecurringInvoiceError` | `src/Divvy/Errors/ReplaceRecurringInvoiceError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreRecurringInvoice

- **Signature**: `RestoreRecurringInvoice(RestoreRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringInvoiceId`
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `ApiException<RestoreRecurringInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreRecurringInvoiceRequest` | `src/Divvy/Requests/RecurringInvoices/RestoreRecurringInvoiceRequest.cs` |
| `RecurringInvoiceResponseDto` | `src/Divvy/Models/RecurringInvoiceResponseDto.cs` |
| `RestoreRecurringInvoiceError` | `src/Divvy/Errors/RestoreRecurringInvoiceError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateRecurringInvoice

- **Signature**: `UpdateRecurringInvoice(UpdateRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringInvoiceId`, `Body`
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `ApiException<UpdateRecurringInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateRecurringInvoiceRequest` | `src/Divvy/Requests/RecurringInvoices/UpdateRecurringInvoiceRequest.cs` |
| `UpdateRecurringInvoiceRequestDto` | `src/Divvy/Models/UpdateRecurringInvoiceRequestDto.cs` |
| `RecurringInvoiceResponseDto` | `src/Divvy/Models/RecurringInvoiceResponseDto.cs` |
| `UpdateRecurringInvoiceError` | `src/Divvy/Errors/UpdateRecurringInvoiceError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

