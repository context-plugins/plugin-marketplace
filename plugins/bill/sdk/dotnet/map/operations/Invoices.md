<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.Invoices` · Source: `src/Bill/Api/Invoices.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveInvoice

- **Signature**: `ArchiveInvoice(ArchiveInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`
- **Returns**: `InvoiceResponseDto`
- **Error**: `ApiException<ArchiveInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveInvoiceRequest` | `src/Bill/Requests/Invoices/ArchiveInvoiceRequest.cs` |
| `InvoiceResponseDto` | `src/Bill/Models/InvoiceResponseDto.cs` |
| `ArchiveInvoiceError` | `src/Bill/Errors/ArchiveInvoiceError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateInvoice

- **Signature**: `CreateInvoice(CreateInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `InvoiceResponseDto`
- **Error**: `ApiException<CreateInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateInvoiceRequest` | `src/Bill/Requests/Invoices/CreateInvoiceRequest.cs` |
| `InvoiceCreateRequestDto` | `src/Bill/Models/InvoiceCreateRequestDto.cs` |
| `InvoiceResponseDto` | `src/Bill/Models/InvoiceResponseDto.cs` |
| `CreateInvoiceError` | `src/Bill/Errors/CreateInvoiceError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetInvoice

- **Signature**: `GetInvoice(GetInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`
- **Returns**: `InvoiceResponseDto`
- **Error**: `ApiException<GetInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInvoiceRequest` | `src/Bill/Requests/Invoices/GetInvoiceRequest.cs` |
| `InvoiceResponseDto` | `src/Bill/Models/InvoiceResponseDto.cs` |
| `GetInvoiceError` | `src/Bill/Errors/GetInvoiceError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetPaymentLink

- **Signature**: `GetPaymentLink(GetPaymentLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`, `Body`
- **Returns**: `InvoicePaymentLinkResponseDto`
- **Error**: `ApiException<GetPaymentLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPaymentLinkRequest` | `src/Bill/Requests/Invoices/GetPaymentLinkRequest.cs` |
| `InvoicePaymentLinkRequestDto` | `src/Bill/Models/InvoicePaymentLinkRequestDto.cs` |
| `InvoicePaymentLinkResponseDto` | `src/Bill/Models/InvoicePaymentLinkResponseDto.cs` |
| `GetPaymentLinkError` | `src/Bill/Errors/GetPaymentLinkError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListInvoices

- **Signature**: `ListInvoices(ListInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListInvoiceResponseDto`
- **Error**: `ApiException<ListInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListInvoicesRequest` | `src/Bill/Requests/Invoices/ListInvoicesRequest.cs` |
| `ListInvoiceResponseDto` | `src/Bill/Models/ListInvoiceResponseDto.cs` |
| `ListInvoicesError` | `src/Bill/Errors/ListInvoicesError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RecordInvoice

- **Signature**: `RecordInvoice(RecordInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RecordInvoiceResponseDto`
- **Error**: `ApiException<RecordInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecordInvoiceRequest` | `src/Bill/Requests/Invoices/RecordInvoiceRequest.cs` |
| `RecordInvoiceRequestDto` | `src/Bill/Models/RecordInvoiceRequestDto.cs` |
| `RecordInvoiceResponseDto` | `src/Bill/Models/RecordInvoiceResponseDto.cs` |
| `RecordInvoiceError` | `src/Bill/Errors/RecordInvoiceError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ReplaceInvoice

- **Signature**: `ReplaceInvoice(ReplaceInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`, `Body`
- **Returns**: `InvoiceResponseDto`
- **Error**: `ApiException<ReplaceInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceInvoiceRequest` | `src/Bill/Requests/Invoices/ReplaceInvoiceRequest.cs` |
| `InvoiceReplaceRequestDto` | `src/Bill/Models/InvoiceReplaceRequestDto.cs` |
| `InvoiceResponseDto` | `src/Bill/Models/InvoiceResponseDto.cs` |
| `ReplaceInvoiceError` | `src/Bill/Errors/ReplaceInvoiceError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreInvoice

- **Signature**: `RestoreInvoice(RestoreInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`
- **Returns**: `InvoiceResponseDto`
- **Error**: `ApiException<RestoreInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreInvoiceRequest` | `src/Bill/Requests/Invoices/RestoreInvoiceRequest.cs` |
| `InvoiceResponseDto` | `src/Bill/Models/InvoiceResponseDto.cs` |
| `RestoreInvoiceError` | `src/Bill/Errors/RestoreInvoiceError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### SendInvoice

- **Signature**: `SendInvoice(SendInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SendInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SendInvoiceRequest` | `src/Bill/Requests/Invoices/SendInvoiceRequest.cs` |
| `SendInvoiceRequestDto` | `src/Bill/Models/SendInvoiceRequestDto.cs` |
| `SendInvoiceError` | `src/Bill/Errors/SendInvoiceError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateInvoice

- **Signature**: `UpdateInvoice(UpdateInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`, `Body`
- **Returns**: `InvoiceResponseDto`
- **Error**: `ApiException<UpdateInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateInvoiceRequest` | `src/Bill/Requests/Invoices/UpdateInvoiceRequest.cs` |
| `InvoiceUpdateRequestDto` | `src/Bill/Models/InvoiceUpdateRequestDto.cs` |
| `InvoiceResponseDto` | `src/Bill/Models/InvoiceResponseDto.cs` |
| `UpdateInvoiceError` | `src/Bill/Errors/UpdateInvoiceError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

