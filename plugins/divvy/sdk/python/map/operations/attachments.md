<!-- Generated file — do not edit; regenerated with the SDK. -->

# Attachments — operations

Accessor: `client.attachments` · Source: `divvy/apis/attachments.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.attachments.create_customer_attachment

- **Route**: `POST /v3/attachments/customers/{customerId}`
- **Server**: `default`
- **Signature**: `def create_customer_attachment(customer_id: str, name: str, body: list[str], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `name`, `body`
- **Params**: `customer_id` — path `customerId` · `name` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `AttachmentResponseDto`
- **Returns (raw)**: `ApiResult[AttachmentResponseDto, CreateCustomerAttachmentErrorBody]`
- **Error**: `CreateCustomerAttachmentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AttachmentResponseDto` | `divvy/models/attachment_response_dto.py` |
| `CreateCustomerAttachmentErrorBody` | `divvy/errors/create_customer_attachment_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.attachments.create_invoice_attachment

- **Route**: `POST /v3/attachments/invoices/{invoiceId}`
- **Server**: `default`
- **Signature**: `def create_invoice_attachment(invoice_id: str, name: str, body: list[str], *, replace_invoice_pdf: bool | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `invoice_id`, `name`, `body`
- **Params**: `invoice_id` — path `invoiceId` · `name` — query · `replace_invoice_pdf` — query `replaceInvoicePdf` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `AttachmentResponseDto`
- **Returns (raw)**: `ApiResult[AttachmentResponseDto, CreateInvoiceAttachmentErrorBody]`
- **Error**: `CreateInvoiceAttachmentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AttachmentResponseDto` | `divvy/models/attachment_response_dto.py` |
| `CreateInvoiceAttachmentErrorBody` | `divvy/errors/create_invoice_attachment_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.attachments.create_vendor_attachment

- **Route**: `POST /v3/attachments/vendors/{vendorId}`
- **Server**: `default`
- **Signature**: `def create_vendor_attachment(vendor_id: str, name: str, body: list[str], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`, `name`, `body`
- **Params**: `vendor_id` — path `vendorId` · `name` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `AttachmentResponseDto`
- **Returns (raw)**: `ApiResult[AttachmentResponseDto, CreateVendorAttachmentErrorBody]`
- **Error**: `CreateVendorAttachmentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AttachmentResponseDto` | `divvy/models/attachment_response_dto.py` |
| `CreateVendorAttachmentErrorBody` | `divvy/errors/create_vendor_attachment_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.attachments.delete_attachment

- **Route**: `DELETE /v3/attachments/{attachmentId}`
- **Server**: `default`
- **Signature**: `def delete_attachment(attachment_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `attachment_id`
- **Params**: `attachment_id` — path `attachmentId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `StatusDto`
- **Returns (raw)**: `ApiResult[StatusDto, DeleteAttachmentErrorBody]`
- **Error**: `DeleteAttachmentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusDto` | `divvy/models/status_dto.py` |
| `DeleteAttachmentErrorBody` | `divvy/errors/delete_attachment_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.attachments.get_attachment

- **Route**: `GET /v3/attachments/{attachmentId}`
- **Server**: `default`
- **Signature**: `def get_attachment(attachment_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `attachment_id`
- **Params**: `attachment_id` — path `attachmentId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `AttachmentResponseDto`
- **Returns (raw)**: `ApiResult[AttachmentResponseDto, GetAttachmentErrorBody]`
- **Error**: `GetAttachmentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AttachmentResponseDto` | `divvy/models/attachment_response_dto.py` |
| `GetAttachmentErrorBody` | `divvy/errors/get_attachment_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.attachments.list_customer_attachments

- **Route**: `GET /v3/attachments/customers/{customerId}`
- **Server**: `default`
- **Signature**: `def list_customer_attachments(customer_id: str, *, max_: int | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerId` · `max_` — query `max` · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoAttachmentResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoAttachmentResponseDto, ListCustomerAttachmentsErrorBody]`
- **Error**: `ListCustomerAttachmentsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoAttachmentResponseDto` | `divvy/models/list_response_dto_attachment_response_dto.py` |
| `ListCustomerAttachmentsErrorBody` | `divvy/errors/list_customer_attachments_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.attachments.list_invoice_attachments

- **Route**: `GET /v3/attachments/invoices/{invoiceId}`
- **Server**: `default`
- **Signature**: `def list_invoice_attachments(invoice_id: str, *, max_: int | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `invoice_id`
- **Params**: `invoice_id` — path `invoiceId` · `max_` — query `max` · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoAttachmentResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoAttachmentResponseDto, ListInvoiceAttachmentsErrorBody]`
- **Error**: `ListInvoiceAttachmentsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoAttachmentResponseDto` | `divvy/models/list_response_dto_attachment_response_dto.py` |
| `ListInvoiceAttachmentsErrorBody` | `divvy/errors/list_invoice_attachments_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.attachments.list_vendor_attachments

- **Route**: `GET /v3/attachments/vendors/{vendorId}`
- **Server**: `default`
- **Signature**: `def list_vendor_attachments(vendor_id: str, *, max_: int | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`
- **Params**: `vendor_id` — path `vendorId` · `max_` — query `max` · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoAttachmentResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoAttachmentResponseDto, ListVendorAttachmentsErrorBody]`
- **Error**: `ListVendorAttachmentsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoAttachmentResponseDto` | `divvy/models/list_response_dto_attachment_response_dto.py` |
| `ListVendorAttachmentsErrorBody` | `divvy/errors/list_vendor_attachments_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

