<!-- Generated file — do not edit; regenerated with the SDK. -->

# Attachments — operations

Accessor: `client.Attachments` · Source: `src/Bill/Api/Attachments.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomerAttachment

- **Signature**: `CreateCustomerAttachment(CreateCustomerAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Name`, `Body`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `AttachmentResponseDto`
- **Error**: `ApiException<CreateCustomerAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerAttachmentRequest` | `src/Bill/Requests/Attachments/CreateCustomerAttachmentRequest.cs` |
| `AttachmentResponseDto` | `src/Bill/Models/AttachmentResponseDto.cs` |
| `CreateCustomerAttachmentError` | `src/Bill/Errors/CreateCustomerAttachmentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateInvoiceAttachment

- **Signature**: `CreateInvoiceAttachment(CreateInvoiceAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`, `Name`, `Body`
- **Query params (wire ← C#)**: `name` ← `Name`, `replaceInvoicePdf` ← `ReplaceInvoicePdf`
- **Returns**: `AttachmentResponseDto`
- **Error**: `ApiException<CreateInvoiceAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateInvoiceAttachmentRequest` | `src/Bill/Requests/Attachments/CreateInvoiceAttachmentRequest.cs` |
| `AttachmentResponseDto` | `src/Bill/Models/AttachmentResponseDto.cs` |
| `CreateInvoiceAttachmentError` | `src/Bill/Errors/CreateInvoiceAttachmentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateVendorAttachment

- **Signature**: `CreateVendorAttachment(CreateVendorAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Name`, `Body`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `AttachmentResponseDto`
- **Error**: `ApiException<CreateVendorAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVendorAttachmentRequest` | `src/Bill/Requests/Attachments/CreateVendorAttachmentRequest.cs` |
| `AttachmentResponseDto` | `src/Bill/Models/AttachmentResponseDto.cs` |
| `CreateVendorAttachmentError` | `src/Bill/Errors/CreateVendorAttachmentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### DeleteAttachment

- **Signature**: `DeleteAttachment(DeleteAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AttachmentId`
- **Returns**: `StatusDto`
- **Error**: `ApiException<DeleteAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAttachmentRequest` | `src/Bill/Requests/Attachments/DeleteAttachmentRequest.cs` |
| `StatusDto` | `src/Bill/Models/StatusDto.cs` |
| `DeleteAttachmentError` | `src/Bill/Errors/DeleteAttachmentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetAttachment

- **Signature**: `GetAttachment(GetAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AttachmentId`
- **Returns**: `AttachmentResponseDto`
- **Error**: `ApiException<GetAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAttachmentRequest` | `src/Bill/Requests/Attachments/GetAttachmentRequest.cs` |
| `AttachmentResponseDto` | `src/Bill/Models/AttachmentResponseDto.cs` |
| `GetAttachmentError` | `src/Bill/Errors/GetAttachmentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListCustomerAttachments

- **Signature**: `ListCustomerAttachments(ListCustomerAttachmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Query params (wire ← C#)**: `max` ← `Max`, `page` ← `Page`
- **Returns**: `ListResponseDtoAttachmentResponseDto`
- **Error**: `ApiException<ListCustomerAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomerAttachmentsRequest` | `src/Bill/Requests/Attachments/ListCustomerAttachmentsRequest.cs` |
| `ListResponseDtoAttachmentResponseDto` | `src/Bill/Models/ListResponseDtoAttachmentResponseDto.cs` |
| `ListCustomerAttachmentsError` | `src/Bill/Errors/ListCustomerAttachmentsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListInvoiceAttachments

- **Signature**: `ListInvoiceAttachments(ListInvoiceAttachmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`
- **Query params (wire ← C#)**: `max` ← `Max`, `page` ← `Page`
- **Returns**: `ListResponseDtoAttachmentResponseDto`
- **Error**: `ApiException<ListInvoiceAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListInvoiceAttachmentsRequest` | `src/Bill/Requests/Attachments/ListInvoiceAttachmentsRequest.cs` |
| `ListResponseDtoAttachmentResponseDto` | `src/Bill/Models/ListResponseDtoAttachmentResponseDto.cs` |
| `ListInvoiceAttachmentsError` | `src/Bill/Errors/ListInvoiceAttachmentsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListVendorAttachments

- **Signature**: `ListVendorAttachments(ListVendorAttachmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Query params (wire ← C#)**: `max` ← `Max`, `page` ← `Page`
- **Returns**: `ListResponseDtoAttachmentResponseDto`
- **Error**: `ApiException<ListVendorAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVendorAttachmentsRequest` | `src/Bill/Requests/Attachments/ListVendorAttachmentsRequest.cs` |
| `ListResponseDtoAttachmentResponseDto` | `src/Bill/Models/ListResponseDtoAttachmentResponseDto.cs` |
| `ListVendorAttachmentsError` | `src/Bill/Errors/ListVendorAttachmentsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

