<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.invoices` · Source: `bill/apis/invoices.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.invoices.archive_invoice

- **Route**: `POST /v3/invoices/{invoiceId}/archive`
- **Server**: `default`
- **Signature**: `def archive_invoice(invoice_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `invoice_id`
- **Params**: `invoice_id` — path `invoiceId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `InvoiceResponseDto`
- **Returns (raw)**: `ApiResult[InvoiceResponseDto, ArchiveInvoiceErrorBody]`
- **Error**: `ArchiveInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InvoiceResponseDto` | `bill/models/invoice_response_dto.py` |
| `ArchiveInvoiceErrorBody` | `bill/errors/archive_invoice_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.invoices.create_invoice

- **Route**: `POST /v3/invoices`
- **Server**: `default`
- **Signature**: `def create_invoice(body: InvoiceCreateRequestDto | InvoiceCreateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `InvoiceResponseDto`
- **Returns (raw)**: `ApiResult[InvoiceResponseDto, CreateInvoiceErrorBody]`
- **Error**: `CreateInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InvoiceCreateRequestDto` | `bill/models/invoice_create_request_dto.py` |
| `InvoiceCreateRequestDtoDict` | `bill/models/invoice_create_request_dto.py` |
| `InvoiceResponseDto` | `bill/models/invoice_response_dto.py` |
| `CreateInvoiceErrorBody` | `bill/errors/create_invoice_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.invoices.get_invoice

- **Route**: `GET /v3/invoices/{invoiceId}`
- **Server**: `default`
- **Signature**: `def get_invoice(invoice_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `invoice_id`
- **Params**: `invoice_id` — path `invoiceId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `InvoiceResponseDto`
- **Returns (raw)**: `ApiResult[InvoiceResponseDto, GetInvoiceErrorBody]`
- **Error**: `GetInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InvoiceResponseDto` | `bill/models/invoice_response_dto.py` |
| `GetInvoiceErrorBody` | `bill/errors/get_invoice_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.invoices.get_payment_link

- **Route**: `POST /v3/invoices/{invoiceId}/payment-link`
- **Server**: `default`
- **Signature**: `def get_payment_link(invoice_id: str, body: InvoicePaymentLinkRequestDto | InvoicePaymentLinkRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `invoice_id`, `body`
- **Params**: `invoice_id` — path `invoiceId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `InvoicePaymentLinkResponseDto`
- **Returns (raw)**: `ApiResult[InvoicePaymentLinkResponseDto, GetPaymentLinkErrorBody]`
- **Error**: `GetPaymentLinkErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InvoicePaymentLinkRequestDto` | `bill/models/invoice_payment_link_request_dto.py` |
| `InvoicePaymentLinkRequestDtoDict` | `bill/models/invoice_payment_link_request_dto.py` |
| `InvoicePaymentLinkResponseDto` | `bill/models/invoice_payment_link_response_dto.py` |
| `GetPaymentLinkErrorBody` | `bill/errors/get_payment_link_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.invoices.list_invoices

- **Route**: `GET /v3/invoices`
- **Server**: `default`
- **Signature**: `def list_invoices(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListInvoiceResponseDto`
- **Returns (raw)**: `ApiResult[ListInvoiceResponseDto, ListInvoicesErrorBody]`
- **Error**: `ListInvoicesErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListInvoiceResponseDto` | `bill/models/list_invoice_response_dto.py` |
| `ListInvoicesErrorBody` | `bill/errors/list_invoices_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.invoices.record_invoice

- **Route**: `POST /v3/invoices/record-payment`
- **Server**: `default`
- **Signature**: `def record_invoice(body: RecordInvoiceRequestDto | RecordInvoiceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `RecordInvoiceResponseDto`
- **Returns (raw)**: `ApiResult[RecordInvoiceResponseDto, RecordInvoiceErrorBody]`
- **Error**: `RecordInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecordInvoiceRequestDto` | `bill/models/record_invoice_request_dto.py` |
| `RecordInvoiceRequestDtoDict` | `bill/models/record_invoice_request_dto.py` |
| `RecordInvoiceResponseDto` | `bill/models/record_invoice_response_dto.py` |
| `RecordInvoiceErrorBody` | `bill/errors/record_invoice_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.invoices.replace_invoice

- **Route**: `PUT /v3/invoices/{invoiceId}`
- **Server**: `default`
- **Signature**: `def replace_invoice(invoice_id: str, body: InvoiceReplaceRequestDto | InvoiceReplaceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `invoice_id`, `body`
- **Params**: `invoice_id` — path `invoiceId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `InvoiceResponseDto`
- **Returns (raw)**: `ApiResult[InvoiceResponseDto, ReplaceInvoiceErrorBody]`
- **Error**: `ReplaceInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InvoiceReplaceRequestDto` | `bill/models/invoice_replace_request_dto.py` |
| `InvoiceReplaceRequestDtoDict` | `bill/models/invoice_replace_request_dto.py` |
| `InvoiceResponseDto` | `bill/models/invoice_response_dto.py` |
| `ReplaceInvoiceErrorBody` | `bill/errors/replace_invoice_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.invoices.restore_invoice

- **Route**: `POST /v3/invoices/{invoiceId}/restore`
- **Server**: `default`
- **Signature**: `def restore_invoice(invoice_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `invoice_id`
- **Params**: `invoice_id` — path `invoiceId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `InvoiceResponseDto`
- **Returns (raw)**: `ApiResult[InvoiceResponseDto, RestoreInvoiceErrorBody]`
- **Error**: `RestoreInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InvoiceResponseDto` | `bill/models/invoice_response_dto.py` |
| `RestoreInvoiceErrorBody` | `bill/errors/restore_invoice_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.invoices.send_invoice

- **Route**: `POST /v3/invoices/{invoiceId}/email`
- **Server**: `default`
- **Signature**: `def send_invoice(invoice_id: str, body: SendInvoiceRequestDto | SendInvoiceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `invoice_id`, `body`
- **Params**: `invoice_id` — path `invoiceId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SendInvoiceErrorBody]`
- **Error**: `SendInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SendInvoiceRequestDto` | `bill/models/send_invoice_request_dto.py` |
| `SendInvoiceRequestDtoDict` | `bill/models/send_invoice_request_dto.py` |
| `SendInvoiceErrorBody` | `bill/errors/send_invoice_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.invoices.update_invoice

- **Route**: `PATCH /v3/invoices/{invoiceId}`
- **Server**: `default`
- **Signature**: `def update_invoice(invoice_id: str, body: InvoiceUpdateRequestDto | InvoiceUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `invoice_id`, `body`
- **Params**: `invoice_id` — path `invoiceId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `InvoiceResponseDto`
- **Returns (raw)**: `ApiResult[InvoiceResponseDto, UpdateInvoiceErrorBody]`
- **Error**: `UpdateInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InvoiceUpdateRequestDto` | `bill/models/invoice_update_request_dto.py` |
| `InvoiceUpdateRequestDtoDict` | `bill/models/invoice_update_request_dto.py` |
| `InvoiceResponseDto` | `bill/models/invoice_response_dto.py` |
| `UpdateInvoiceErrorBody` | `bill/errors/update_invoice_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

