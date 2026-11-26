<!-- Generated file — do not edit; regenerated with the SDK. -->

# RecurringInvoices — operations

Accessor: `client.recurring_invoices` · Source: `bill/apis/recurring_invoices.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.recurring_invoices.archive_recurring_invoice

- **Route**: `POST /v3/recurring-invoices/{recurringInvoiceId}/archive`
- **Server**: `default`
- **Signature**: `def archive_recurring_invoice(recurring_invoice_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recurring_invoice_id`
- **Params**: `recurring_invoice_id` — path `recurringInvoiceId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `RecurringInvoiceResponseDto`
- **Returns (raw)**: `ApiResult[RecurringInvoiceResponseDto, ArchiveRecurringInvoiceErrorBody]`
- **Error**: `ArchiveRecurringInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecurringInvoiceResponseDto` | `bill/models/recurring_invoice_response_dto.py` |
| `ArchiveRecurringInvoiceErrorBody` | `bill/errors/archive_recurring_invoice_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.recurring_invoices.create_recurring_invoice

- **Route**: `POST /v3/recurring-invoices`
- **Server**: `default`
- **Signature**: `def create_recurring_invoice(body: CreateRecurringInvoiceRequestDto | CreateRecurringInvoiceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `RecurringInvoiceResponseDto`
- **Returns (raw)**: `ApiResult[RecurringInvoiceResponseDto, CreateRecurringInvoiceErrorBody]`
- **Error**: `CreateRecurringInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateRecurringInvoiceRequestDto` | `bill/models/create_recurring_invoice_request_dto.py` |
| `CreateRecurringInvoiceRequestDtoDict` | `bill/models/create_recurring_invoice_request_dto.py` |
| `RecurringInvoiceResponseDto` | `bill/models/recurring_invoice_response_dto.py` |
| `CreateRecurringInvoiceErrorBody` | `bill/errors/create_recurring_invoice_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.recurring_invoices.get_recurring_invoice

- **Route**: `GET /v3/recurring-invoices/{recurringInvoiceId}`
- **Server**: `default`
- **Signature**: `def get_recurring_invoice(recurring_invoice_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recurring_invoice_id`
- **Params**: `recurring_invoice_id` — path `recurringInvoiceId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `RecurringInvoiceResponseDto`
- **Returns (raw)**: `ApiResult[RecurringInvoiceResponseDto, GetRecurringInvoiceErrorBody]`
- **Error**: `GetRecurringInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecurringInvoiceResponseDto` | `bill/models/recurring_invoice_response_dto.py` |
| `GetRecurringInvoiceErrorBody` | `bill/errors/get_recurring_invoice_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.recurring_invoices.list_recurring_invoices

- **Route**: `GET /v3/recurring-invoices`
- **Server**: `default`
- **Signature**: `def list_recurring_invoices(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoRecurringInvoiceResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoRecurringInvoiceResponseDto, ListRecurringInvoicesErrorBody]`
- **Error**: `ListRecurringInvoicesErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoRecurringInvoiceResponseDto` | `bill/models/list_response_dto_recurring_invoice_response_dto.py` |
| `ListRecurringInvoicesErrorBody` | `bill/errors/list_recurring_invoices_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.recurring_invoices.replace_recurring_invoice

- **Route**: `PUT /v3/recurring-invoices/{recurringInvoiceId}`
- **Server**: `default`
- **Signature**: `def replace_recurring_invoice(recurring_invoice_id: str, body: RecurringInvoiceReplaceRequestDto | RecurringInvoiceReplaceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recurring_invoice_id`, `body`
- **Params**: `recurring_invoice_id` — path `recurringInvoiceId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `RecurringInvoiceResponseDto`
- **Returns (raw)**: `ApiResult[RecurringInvoiceResponseDto, ReplaceRecurringInvoiceErrorBody]`
- **Error**: `ReplaceRecurringInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecurringInvoiceReplaceRequestDto` | `bill/models/recurring_invoice_replace_request_dto.py` |
| `RecurringInvoiceReplaceRequestDtoDict` | `bill/models/recurring_invoice_replace_request_dto.py` |
| `RecurringInvoiceResponseDto` | `bill/models/recurring_invoice_response_dto.py` |
| `ReplaceRecurringInvoiceErrorBody` | `bill/errors/replace_recurring_invoice_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.recurring_invoices.restore_recurring_invoice

- **Route**: `POST /v3/recurring-invoices/{recurringInvoiceId}/restore`
- **Server**: `default`
- **Signature**: `def restore_recurring_invoice(recurring_invoice_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recurring_invoice_id`
- **Params**: `recurring_invoice_id` — path `recurringInvoiceId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `RecurringInvoiceResponseDto`
- **Returns (raw)**: `ApiResult[RecurringInvoiceResponseDto, RestoreRecurringInvoiceErrorBody]`
- **Error**: `RestoreRecurringInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecurringInvoiceResponseDto` | `bill/models/recurring_invoice_response_dto.py` |
| `RestoreRecurringInvoiceErrorBody` | `bill/errors/restore_recurring_invoice_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.recurring_invoices.update_recurring_invoice

- **Route**: `PATCH /v3/recurring-invoices/{recurringInvoiceId}`
- **Server**: `default`
- **Signature**: `def update_recurring_invoice(recurring_invoice_id: str, body: UpdateRecurringInvoiceRequestDto | UpdateRecurringInvoiceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recurring_invoice_id`, `body`
- **Params**: `recurring_invoice_id` — path `recurringInvoiceId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `RecurringInvoiceResponseDto`
- **Returns (raw)**: `ApiResult[RecurringInvoiceResponseDto, UpdateRecurringInvoiceErrorBody]`
- **Error**: `UpdateRecurringInvoiceErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateRecurringInvoiceRequestDto` | `bill/models/update_recurring_invoice_request_dto.py` |
| `UpdateRecurringInvoiceRequestDtoDict` | `bill/models/update_recurring_invoice_request_dto.py` |
| `RecurringInvoiceResponseDto` | `bill/models/recurring_invoice_response_dto.py` |
| `UpdateRecurringInvoiceErrorBody` | `bill/errors/update_recurring_invoice_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

