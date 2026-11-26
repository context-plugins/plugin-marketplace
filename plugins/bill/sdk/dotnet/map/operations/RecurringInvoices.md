<!-- Generated file — do not edit; regenerated with the SDK. -->

# RecurringInvoices — operations

Accessor: `client.RecurringInvoices` · Source: `src/Bill/Api/RecurringInvoices.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveRecurringInvoice

- **Signature**: `ArchiveRecurringInvoice(ArchiveRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringInvoiceId`
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `ApiException<ArchiveRecurringInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveRecurringInvoiceRequest` | `src/Bill/Requests/RecurringInvoices/ArchiveRecurringInvoiceRequest.cs` |
| `RecurringInvoiceResponseDto` | `src/Bill/Models/RecurringInvoiceResponseDto.cs` |
| `ArchiveRecurringInvoiceError` | `src/Bill/Errors/ArchiveRecurringInvoiceError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateRecurringInvoice

- **Signature**: `CreateRecurringInvoice(CreateRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `ApiException<CreateRecurringInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRecurringInvoiceRequest` | `src/Bill/Requests/RecurringInvoices/CreateRecurringInvoiceRequest.cs` |
| `CreateRecurringInvoiceRequestDto` | `src/Bill/Models/CreateRecurringInvoiceRequestDto.cs` |
| `RecurringInvoiceResponseDto` | `src/Bill/Models/RecurringInvoiceResponseDto.cs` |
| `CreateRecurringInvoiceError` | `src/Bill/Errors/CreateRecurringInvoiceError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetRecurringInvoice

- **Signature**: `GetRecurringInvoice(GetRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringInvoiceId`
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `ApiException<GetRecurringInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRecurringInvoiceRequest` | `src/Bill/Requests/RecurringInvoices/GetRecurringInvoiceRequest.cs` |
| `RecurringInvoiceResponseDto` | `src/Bill/Models/RecurringInvoiceResponseDto.cs` |
| `GetRecurringInvoiceError` | `src/Bill/Errors/GetRecurringInvoiceError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListRecurringInvoices

- **Signature**: `ListRecurringInvoices(ListRecurringInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoRecurringInvoiceResponseDto`
- **Error**: `ApiException<ListRecurringInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListRecurringInvoicesRequest` | `src/Bill/Requests/RecurringInvoices/ListRecurringInvoicesRequest.cs` |
| `ListResponseDtoRecurringInvoiceResponseDto` | `src/Bill/Models/ListResponseDtoRecurringInvoiceResponseDto.cs` |
| `ListRecurringInvoicesError` | `src/Bill/Errors/ListRecurringInvoicesError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ReplaceRecurringInvoice

- **Signature**: `ReplaceRecurringInvoice(ReplaceRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringInvoiceId`, `Body`
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `ApiException<ReplaceRecurringInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceRecurringInvoiceRequest` | `src/Bill/Requests/RecurringInvoices/ReplaceRecurringInvoiceRequest.cs` |
| `RecurringInvoiceReplaceRequestDto` | `src/Bill/Models/RecurringInvoiceReplaceRequestDto.cs` |
| `RecurringInvoiceResponseDto` | `src/Bill/Models/RecurringInvoiceResponseDto.cs` |
| `ReplaceRecurringInvoiceError` | `src/Bill/Errors/ReplaceRecurringInvoiceError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreRecurringInvoice

- **Signature**: `RestoreRecurringInvoice(RestoreRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringInvoiceId`
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `ApiException<RestoreRecurringInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreRecurringInvoiceRequest` | `src/Bill/Requests/RecurringInvoices/RestoreRecurringInvoiceRequest.cs` |
| `RecurringInvoiceResponseDto` | `src/Bill/Models/RecurringInvoiceResponseDto.cs` |
| `RestoreRecurringInvoiceError` | `src/Bill/Errors/RestoreRecurringInvoiceError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateRecurringInvoice

- **Signature**: `UpdateRecurringInvoice(UpdateRecurringInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RecurringInvoiceId`, `Body`
- **Returns**: `RecurringInvoiceResponseDto`
- **Error**: `ApiException<UpdateRecurringInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateRecurringInvoiceRequest` | `src/Bill/Requests/RecurringInvoices/UpdateRecurringInvoiceRequest.cs` |
| `UpdateRecurringInvoiceRequestDto` | `src/Bill/Models/UpdateRecurringInvoiceRequestDto.cs` |
| `RecurringInvoiceResponseDto` | `src/Bill/Models/RecurringInvoiceResponseDto.cs` |
| `UpdateRecurringInvoiceError` | `src/Bill/Errors/UpdateRecurringInvoiceError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

