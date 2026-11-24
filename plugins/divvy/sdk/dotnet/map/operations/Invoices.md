<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.Invoices` · Source: `src/Divvy/Api/Invoices.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveInvoice

- **Signature**: `ArchiveInvoice(ArchiveInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`
- **Returns**: `InvoiceResponseDto`
- **Error**: `ApiException<ArchiveInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveInvoiceRequest` | `src/Divvy/Requests/Invoices/ArchiveInvoiceRequest.cs` |
| `InvoiceResponseDto` | `src/Divvy/Models/InvoiceResponseDto.cs` |
| `ArchiveInvoiceError` | `src/Divvy/Errors/ArchiveInvoiceError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateInvoice

- **Signature**: `CreateInvoice(CreateInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `InvoiceResponseDto`
- **Error**: `ApiException<CreateInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateInvoiceRequest` | `src/Divvy/Requests/Invoices/CreateInvoiceRequest.cs` |
| `InvoiceCreateRequestDto` | `src/Divvy/Models/InvoiceCreateRequestDto.cs` |
| `InvoiceResponseDto` | `src/Divvy/Models/InvoiceResponseDto.cs` |
| `CreateInvoiceError` | `src/Divvy/Errors/CreateInvoiceError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetInvoice

- **Signature**: `GetInvoice(GetInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`
- **Returns**: `InvoiceResponseDto`
- **Error**: `ApiException<GetInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInvoiceRequest` | `src/Divvy/Requests/Invoices/GetInvoiceRequest.cs` |
| `InvoiceResponseDto` | `src/Divvy/Models/InvoiceResponseDto.cs` |
| `GetInvoiceError` | `src/Divvy/Errors/GetInvoiceError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetPaymentLink

- **Signature**: `GetPaymentLink(GetPaymentLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`, `Body`
- **Returns**: `InvoicePaymentLinkResponseDto`
- **Error**: `ApiException<GetPaymentLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPaymentLinkRequest` | `src/Divvy/Requests/Invoices/GetPaymentLinkRequest.cs` |
| `InvoicePaymentLinkRequestDto` | `src/Divvy/Models/InvoicePaymentLinkRequestDto.cs` |
| `InvoicePaymentLinkResponseDto` | `src/Divvy/Models/InvoicePaymentLinkResponseDto.cs` |
| `GetPaymentLinkError` | `src/Divvy/Errors/GetPaymentLinkError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListInvoices

- **Signature**: `ListInvoices(ListInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListInvoiceResponseDto`
- **Error**: `ApiException<ListInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListInvoicesRequest` | `src/Divvy/Requests/Invoices/ListInvoicesRequest.cs` |
| `ListInvoiceResponseDto` | `src/Divvy/Models/ListInvoiceResponseDto.cs` |
| `ListInvoicesError` | `src/Divvy/Errors/ListInvoicesError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RecordInvoice

- **Signature**: `RecordInvoice(RecordInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RecordInvoiceResponseDto`
- **Error**: `ApiException<RecordInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecordInvoiceRequest` | `src/Divvy/Requests/Invoices/RecordInvoiceRequest.cs` |
| `RecordInvoiceRequestDto` | `src/Divvy/Models/RecordInvoiceRequestDto.cs` |
| `RecordInvoiceResponseDto` | `src/Divvy/Models/RecordInvoiceResponseDto.cs` |
| `RecordInvoiceError` | `src/Divvy/Errors/RecordInvoiceError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ReplaceInvoice

- **Signature**: `ReplaceInvoice(ReplaceInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`, `Body`
- **Returns**: `InvoiceResponseDto`
- **Error**: `ApiException<ReplaceInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReplaceInvoiceRequest` | `src/Divvy/Requests/Invoices/ReplaceInvoiceRequest.cs` |
| `InvoiceReplaceRequestDto` | `src/Divvy/Models/InvoiceReplaceRequestDto.cs` |
| `InvoiceResponseDto` | `src/Divvy/Models/InvoiceResponseDto.cs` |
| `ReplaceInvoiceError` | `src/Divvy/Errors/ReplaceInvoiceError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreInvoice

- **Signature**: `RestoreInvoice(RestoreInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`
- **Returns**: `InvoiceResponseDto`
- **Error**: `ApiException<RestoreInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreInvoiceRequest` | `src/Divvy/Requests/Invoices/RestoreInvoiceRequest.cs` |
| `InvoiceResponseDto` | `src/Divvy/Models/InvoiceResponseDto.cs` |
| `RestoreInvoiceError` | `src/Divvy/Errors/RestoreInvoiceError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### SendInvoice

- **Signature**: `SendInvoice(SendInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SendInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SendInvoiceRequest` | `src/Divvy/Requests/Invoices/SendInvoiceRequest.cs` |
| `SendInvoiceRequestDto` | `src/Divvy/Models/SendInvoiceRequestDto.cs` |
| `SendInvoiceError` | `src/Divvy/Errors/SendInvoiceError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateInvoice

- **Signature**: `UpdateInvoice(UpdateInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`, `Body`
- **Returns**: `InvoiceResponseDto`
- **Error**: `ApiException<UpdateInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateInvoiceRequest` | `src/Divvy/Requests/Invoices/UpdateInvoiceRequest.cs` |
| `InvoiceUpdateRequestDto` | `src/Divvy/Models/InvoiceUpdateRequestDto.cs` |
| `InvoiceResponseDto` | `src/Divvy/Models/InvoiceResponseDto.cs` |
| `UpdateInvoiceError` | `src/Divvy/Errors/UpdateInvoiceError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

