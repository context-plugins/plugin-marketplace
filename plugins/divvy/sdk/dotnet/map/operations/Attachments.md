<!-- Generated file — do not edit; regenerated with the SDK. -->

# Attachments — operations

Accessor: `client.Attachments` · Source: `src/Divvy/Api/Attachments.cs` · 8 operations

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
| `CreateCustomerAttachmentRequest` | `src/Divvy/Requests/Attachments/CreateCustomerAttachmentRequest.cs` |
| `AttachmentResponseDto` | `src/Divvy/Models/AttachmentResponseDto.cs` |
| `CreateCustomerAttachmentError` | `src/Divvy/Errors/CreateCustomerAttachmentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateInvoiceAttachment

- **Signature**: `CreateInvoiceAttachment(CreateInvoiceAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`, `Name`, `Body`
- **Query params (wire ← C#)**: `name` ← `Name`, `replaceInvoicePdf` ← `ReplaceInvoicePdf`
- **Returns**: `AttachmentResponseDto`
- **Error**: `ApiException<CreateInvoiceAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateInvoiceAttachmentRequest` | `src/Divvy/Requests/Attachments/CreateInvoiceAttachmentRequest.cs` |
| `AttachmentResponseDto` | `src/Divvy/Models/AttachmentResponseDto.cs` |
| `CreateInvoiceAttachmentError` | `src/Divvy/Errors/CreateInvoiceAttachmentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateVendorAttachment

- **Signature**: `CreateVendorAttachment(CreateVendorAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`, `Name`, `Body`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `AttachmentResponseDto`
- **Error**: `ApiException<CreateVendorAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVendorAttachmentRequest` | `src/Divvy/Requests/Attachments/CreateVendorAttachmentRequest.cs` |
| `AttachmentResponseDto` | `src/Divvy/Models/AttachmentResponseDto.cs` |
| `CreateVendorAttachmentError` | `src/Divvy/Errors/CreateVendorAttachmentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### DeleteAttachment

- **Signature**: `DeleteAttachment(DeleteAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AttachmentId`
- **Returns**: `StatusDto`
- **Error**: `ApiException<DeleteAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAttachmentRequest` | `src/Divvy/Requests/Attachments/DeleteAttachmentRequest.cs` |
| `StatusDto` | `src/Divvy/Models/StatusDto.cs` |
| `DeleteAttachmentError` | `src/Divvy/Errors/DeleteAttachmentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetAttachment

- **Signature**: `GetAttachment(GetAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AttachmentId`
- **Returns**: `AttachmentResponseDto`
- **Error**: `ApiException<GetAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAttachmentRequest` | `src/Divvy/Requests/Attachments/GetAttachmentRequest.cs` |
| `AttachmentResponseDto` | `src/Divvy/Models/AttachmentResponseDto.cs` |
| `GetAttachmentError` | `src/Divvy/Errors/GetAttachmentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListCustomerAttachments

- **Signature**: `ListCustomerAttachments(ListCustomerAttachmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Query params (wire ← C#)**: `max` ← `Max`, `page` ← `Page`
- **Returns**: `ListResponseDtoAttachmentResponseDto`
- **Error**: `ApiException<ListCustomerAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomerAttachmentsRequest` | `src/Divvy/Requests/Attachments/ListCustomerAttachmentsRequest.cs` |
| `ListResponseDtoAttachmentResponseDto` | `src/Divvy/Models/ListResponseDtoAttachmentResponseDto.cs` |
| `ListCustomerAttachmentsError` | `src/Divvy/Errors/ListCustomerAttachmentsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListInvoiceAttachments

- **Signature**: `ListInvoiceAttachments(ListInvoiceAttachmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceId`
- **Query params (wire ← C#)**: `max` ← `Max`, `page` ← `Page`
- **Returns**: `ListResponseDtoAttachmentResponseDto`
- **Error**: `ApiException<ListInvoiceAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListInvoiceAttachmentsRequest` | `src/Divvy/Requests/Attachments/ListInvoiceAttachmentsRequest.cs` |
| `ListResponseDtoAttachmentResponseDto` | `src/Divvy/Models/ListResponseDtoAttachmentResponseDto.cs` |
| `ListInvoiceAttachmentsError` | `src/Divvy/Errors/ListInvoiceAttachmentsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListVendorAttachments

- **Signature**: `ListVendorAttachments(ListVendorAttachmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Query params (wire ← C#)**: `max` ← `Max`, `page` ← `Page`
- **Returns**: `ListResponseDtoAttachmentResponseDto`
- **Error**: `ApiException<ListVendorAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVendorAttachmentsRequest` | `src/Divvy/Requests/Attachments/ListVendorAttachmentsRequest.cs` |
| `ListResponseDtoAttachmentResponseDto` | `src/Divvy/Models/ListResponseDtoAttachmentResponseDto.cs` |
| `ListVendorAttachmentsError` | `src/Divvy/Errors/ListVendorAttachmentsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

