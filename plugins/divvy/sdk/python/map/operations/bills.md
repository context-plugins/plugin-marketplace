<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bills — operations

Accessor: `client.bills` · Source: `divvy/apis/bills.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bills.archive_bill

- **Route**: `POST /v3/bills/{billId}/archive`
- **Server**: `default`
- **Signature**: `def archive_bill(bill_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bill_id`
- **Params**: `bill_id` — path `billId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `BillWithoutApproversResponseDto`
- **Returns (raw)**: `ApiResult[BillWithoutApproversResponseDto, ArchiveBillErrorBody]`
- **Error**: `ArchiveBillErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillWithoutApproversResponseDto` | `divvy/models/bill_without_approvers_response_dto.py` |
| `ArchiveBillErrorBody` | `divvy/errors/archive_bill_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.bills.create_bill

- **Route**: `POST /v3/bills`
- **Server**: `default`
- **Signature**: `def create_bill(body: BillCreateRequestDto | BillCreateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `BillResponseDto`
- **Returns (raw)**: `ApiResult[BillResponseDto, CreateBillErrorBody]`
- **Error**: `CreateBillErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillCreateRequestDto` | `divvy/models/bill_create_request_dto.py` |
| `BillCreateRequestDtoDict` | `divvy/models/bill_create_request_dto.py` |
| `BillResponseDto` | `divvy/models/bill_response_dto.py` |
| `CreateBillErrorBody` | `divvy/errors/create_bill_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.bills.create_bulk_bills

- **Route**: `POST /v3/bills/bulk`
- **Server**: `default`
- **Signature**: `def create_bulk_bills(body: list[BillCreateRequestDto | BillCreateRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `list[BillWithoutApproversResponseDto]`
- **Returns (raw)**: `ApiResult[list[BillWithoutApproversResponseDto], CreateBulkBillsErrorBody]`
- **Error**: `CreateBulkBillsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillCreateRequestDto` | `divvy/models/bill_create_request_dto.py` |
| `BillCreateRequestDtoDict` | `divvy/models/bill_create_request_dto.py` |
| `BillWithoutApproversResponseDto` | `divvy/models/bill_without_approvers_response_dto.py` |
| `CreateBulkBillsErrorBody` | `divvy/errors/create_bulk_bills_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.bills.get_bill

- **Route**: `GET /v3/bills/{billId}`
- **Server**: `default`
- **Signature**: `def get_bill(bill_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bill_id`
- **Params**: `bill_id` — path `billId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `BillReadResponseDto`
- **Returns (raw)**: `ApiResult[BillReadResponseDto, GetBillErrorBody]`
- **Error**: `GetBillErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillReadResponseDto` | `divvy/models/bill_read_response_dto.py` |
| `GetBillErrorBody` | `divvy/errors/get_bill_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.bills.list_bills

- **Route**: `GET /v3/bills`
- **Server**: `default`
- **Signature**: `def list_bills(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListBillResponseDto`
- **Returns (raw)**: `ApiResult[ListBillResponseDto, ListBillsErrorBody]`
- **Error**: `ListBillsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBillResponseDto` | `divvy/models/list_bill_response_dto.py` |
| `ListBillsErrorBody` | `divvy/errors/list_bills_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.bills.record_payment

- **Route**: `POST /v3/bills/record-payment`
- **Server**: `default`
- **Signature**: `def record_payment(body: RecordPaymentRequestDto | RecordPaymentRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `RecordPaymentResponseDto`
- **Returns (raw)**: `ApiResult[RecordPaymentResponseDto, RecordPaymentErrorBody]`
- **Error**: `RecordPaymentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecordPaymentRequestDto` | `divvy/models/record_payment_request_dto.py` |
| `RecordPaymentRequestDtoDict` | `divvy/models/record_payment_request_dto.py` |
| `RecordPaymentResponseDto` | `divvy/models/record_payment_response_dto.py` |
| `RecordPaymentErrorBody` | `divvy/errors/record_payment_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.bills.replace_bill

- **Route**: `PUT /v3/bills/{billId}`
- **Server**: `default`
- **Signature**: `def replace_bill(bill_id: str, body: BillReplaceRequestDto | BillReplaceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bill_id`, `body`
- **Params**: `bill_id` — path `billId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `BillResponseDto`
- **Returns (raw)**: `ApiResult[BillResponseDto, ReplaceBillErrorBody]`
- **Error**: `ReplaceBillErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillReplaceRequestDto` | `divvy/models/bill_replace_request_dto.py` |
| `BillReplaceRequestDtoDict` | `divvy/models/bill_replace_request_dto.py` |
| `BillResponseDto` | `divvy/models/bill_response_dto.py` |
| `ReplaceBillErrorBody` | `divvy/errors/replace_bill_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.bills.restore_bill

- **Route**: `POST /v3/bills/{billId}/restore`
- **Server**: `default`
- **Signature**: `def restore_bill(bill_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bill_id`
- **Params**: `bill_id` — path `billId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `BillWithoutApproversResponseDto`
- **Returns (raw)**: `ApiResult[BillWithoutApproversResponseDto, RestoreBillErrorBody]`
- **Error**: `RestoreBillErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillWithoutApproversResponseDto` | `divvy/models/bill_without_approvers_response_dto.py` |
| `RestoreBillErrorBody` | `divvy/errors/restore_bill_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.bills.update_bill

- **Route**: `PATCH /v3/bills/{billId}`
- **Server**: `default`
- **Signature**: `def update_bill(bill_id: str, body: BillUpdateRequestDto | BillUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bill_id`, `body`
- **Params**: `bill_id` — path `billId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `BillResponseDto`
- **Returns (raw)**: `ApiResult[BillResponseDto, UpdateBillErrorBody]`
- **Error**: `UpdateBillErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillUpdateRequestDto` | `divvy/models/bill_update_request_dto.py` |
| `BillUpdateRequestDtoDict` | `divvy/models/bill_update_request_dto.py` |
| `BillResponseDto` | `divvy/models/bill_response_dto.py` |
| `UpdateBillErrorBody` | `divvy/errors/update_bill_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

