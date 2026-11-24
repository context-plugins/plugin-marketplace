<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaxInvoice — operations

Accessor: `client.tax_invoice` · Source: `flow_account/apis/tax_invoice.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.tax_invoice.tax_invoice_change_status_by_key

- **Route**: `POST /{culture}/tax-invoices/{documentId}/status-key/{statusKey}`
- **Auth**: `bearer`
- **Signature**: `def tax_invoice_change_status_by_key(document_id: int, status_key: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `document_id`, `status_key`, `culture`
- **Params**: `document_id` — path `documentId` · `status_key` — path `statusKey` · `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.tax_invoice.tax_invoice_create

- **Route**: `POST /{culture}/tax-invoices/simple-document`
- **Auth**: `bearer`
- **Signature**: `def tax_invoice_create(culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`, `body`
- **Params**: `culture` — path · `body` — JSON body
- **Returns (parsed)**: `MessageSent`
- **Returns (raw)**: `ApiResult[MessageSent, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SimpleDocument` | `flow_account/models/simple_document.py` |
| `SimpleDocumentDict` | `flow_account/models/simple_document.py` |
| `MessageSent` | `flow_account/models/message_sent.py` |

### client.tax_invoice.tax_invoice_create2

- **Route**: `POST /{culture}/tax-invoices/inline-document`
- **Auth**: `bearer`
- **Signature**: `def tax_invoice_create2(culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`, `body`
- **Params**: `culture` — path · `body` — JSON body
- **Returns (parsed)**: `MessageSent`
- **Returns (raw)**: `ApiResult[MessageSent, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `InlineDocument` | `flow_account/models/inline_document.py` |
| `InlineDocumentDict` | `flow_account/models/inline_document.py` |
| `MessageSent` | `flow_account/models/message_sent.py` |

### client.tax_invoice.tax_invoice_delete

- **Route**: `DELETE /{culture}/tax-invoices/{id}`
- **Auth**: `bearer`
- **Signature**: `def tax_invoice_delete(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`
- **Params**: `id_` — path `id` · `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.tax_invoice.tax_invoice_details

- **Route**: `GET /{culture}/tax-invoices/{id}`
- **Auth**: `bearer`
- **Signature**: `def tax_invoice_details(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`
- **Params**: `id_` — path `id` · `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.tax_invoice.tax_invoice_edit

- **Route**: `PUT /{culture}/tax-invoices/simple-document/{id}`
- **Auth**: `bearer`
- **Signature**: `def tax_invoice_edit(id_: int, culture: str, body: SimpleDocument | SimpleDocumentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`, `body`
- **Params**: `id_` — path `id` · `culture` — path · `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SimpleDocument` | `flow_account/models/simple_document.py` |
| `SimpleDocumentDict` | `flow_account/models/simple_document.py` |

### client.tax_invoice.tax_invoice_edit2

- **Route**: `PUT /{culture}/tax-invoices/inline-document/{id}`
- **Auth**: `bearer`
- **Signature**: `def tax_invoice_edit2(id_: int, culture: str, body: InlineDocument | InlineDocumentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`, `body`
- **Params**: `id_` — path `id` · `culture` — path · `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `InlineDocument` | `flow_account/models/inline_document.py` |
| `InlineDocumentDict` | `flow_account/models/inline_document.py` |

### client.tax_invoice.tax_invoice_get_cumulative_document_reference_list

- **Route**: `GET /{culture}/tax-invoices/cumulative-references`
- **Auth**: `bearer`
- **Signature**: `def tax_invoice_get_cumulative_document_reference_list(culture: str, *, ids: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`
- **Params**: `culture` — path · `ids` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.tax_invoice.tax_invoice_index

- **Route**: `GET /{culture}/tax-invoices`
- **Auth**: `bearer`
- **Signature**: `def tax_invoice_index(culture: str, *, sort_by: str | None = None, current_page: str | None = None, page_size: str | None = None, filter_: str | None = None, search_string: str | None = None, custom_document_models: str | None = None, range_: str | None = None, month: str | None = None, year: str | None = None, start_date: str | None = None, end_date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`
- **Params**: `culture` — path · `sort_by` — query `SortBy` · `current_page` — query `CurrentPage` · `page_size` — query `PageSize` · `filter_` — query `Filter` · `search_string` — query `SearchString` · `custom_document_models` — query `CustomDocumentModels` · `range_` — query `Range` · `month` — query `Month` · `year` — query `Year` · `start_date` — query `StartDate` · `end_date` — query `EndDate`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.tax_invoice.tax_invoice_receive_payment

- **Route**: `POST /{culture}/tax-invoices/{id}/payments`
- **Auth**: `bearer`
- **Signature**: `def tax_invoice_receive_payment(id_: int, culture: str, body: PaymentModel | PaymentModelDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`, `body`
- **Params**: `id_` — path `id` · `culture` — path · `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaymentModel` | `flow_account/models/payment_model.py` |
| `PaymentModelDict` | `flow_account/models/payment_model.py` |

