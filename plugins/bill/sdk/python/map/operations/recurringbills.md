<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recurringbills — operations

Accessor: `client.recurringbills` · Source: `bill/apis/recurringbills.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.recurringbills.archive_recurring_bill

- **Route**: `POST /v3/recurringbills/{recurringBillId}/archive`
- **Server**: `default`
- **Signature**: `def archive_recurring_bill(recurring_bill_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recurring_bill_id`
- **Params**: `recurring_bill_id` — path `recurringBillId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `RecurringBillResponseDto`
- **Returns (raw)**: `ApiResult[RecurringBillResponseDto, ArchiveRecurringBillErrorBody]`
- **Error**: `ArchiveRecurringBillErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecurringBillResponseDto` | `bill/models/recurring_bill_response_dto.py` |
| `ArchiveRecurringBillErrorBody` | `bill/errors/archive_recurring_bill_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.recurringbills.create_recurring_bill

- **Route**: `POST /v3/recurringbills`
- **Server**: `default`
- **Signature**: `def create_recurring_bill(body: RecurringBillCreateRequestDto | RecurringBillCreateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `RecurringBillResponseDto`
- **Returns (raw)**: `ApiResult[RecurringBillResponseDto, CreateRecurringBillErrorBody]`
- **Error**: `CreateRecurringBillErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecurringBillCreateRequestDto` | `bill/models/recurring_bill_create_request_dto.py` |
| `RecurringBillCreateRequestDtoDict` | `bill/models/recurring_bill_create_request_dto.py` |
| `RecurringBillResponseDto` | `bill/models/recurring_bill_response_dto.py` |
| `CreateRecurringBillErrorBody` | `bill/errors/create_recurring_bill_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.recurringbills.get_recurring_bill

- **Route**: `GET /v3/recurringbills/{recurringBillId}`
- **Server**: `default`
- **Signature**: `def get_recurring_bill(recurring_bill_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recurring_bill_id`
- **Params**: `recurring_bill_id` — path `recurringBillId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `RecurringBillReadResponseDto`
- **Returns (raw)**: `ApiResult[RecurringBillReadResponseDto, GetRecurringBillErrorBody]`
- **Error**: `GetRecurringBillErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecurringBillReadResponseDto` | `bill/models/recurring_bill_read_response_dto.py` |
| `GetRecurringBillErrorBody` | `bill/errors/get_recurring_bill_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.recurringbills.list_recurring_bills

- **Route**: `GET /v3/recurringbills`
- **Server**: `default`
- **Signature**: `def list_recurring_bills(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListRecurringBillResponseDto`
- **Returns (raw)**: `ApiResult[ListRecurringBillResponseDto, ListRecurringBillsErrorBody]`
- **Error**: `ListRecurringBillsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListRecurringBillResponseDto` | `bill/models/list_recurring_bill_response_dto.py` |
| `ListRecurringBillsErrorBody` | `bill/errors/list_recurring_bills_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.recurringbills.replace_recurring_bill

- **Route**: `PUT /v3/recurringbills/{recurringBillId}`
- **Server**: `default`
- **Signature**: `def replace_recurring_bill(recurring_bill_id: str, body: RecurringBillReplaceRequestDto | RecurringBillReplaceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recurring_bill_id`, `body`
- **Params**: `recurring_bill_id` — path `recurringBillId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `RecurringBillResponseDto`
- **Returns (raw)**: `ApiResult[RecurringBillResponseDto, ReplaceRecurringBillErrorBody]`
- **Error**: `ReplaceRecurringBillErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecurringBillReplaceRequestDto` | `bill/models/recurring_bill_replace_request_dto.py` |
| `RecurringBillReplaceRequestDtoDict` | `bill/models/recurring_bill_replace_request_dto.py` |
| `RecurringBillResponseDto` | `bill/models/recurring_bill_response_dto.py` |
| `ReplaceRecurringBillErrorBody` | `bill/errors/replace_recurring_bill_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.recurringbills.restore_recurring_bill

- **Route**: `POST /v3/recurringbills/{recurringBillId}/restore`
- **Server**: `default`
- **Signature**: `def restore_recurring_bill(recurring_bill_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recurring_bill_id`
- **Params**: `recurring_bill_id` — path `recurringBillId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `RecurringBillResponseDto`
- **Returns (raw)**: `ApiResult[RecurringBillResponseDto, RestoreRecurringBillErrorBody]`
- **Error**: `RestoreRecurringBillErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecurringBillResponseDto` | `bill/models/recurring_bill_response_dto.py` |
| `RestoreRecurringBillErrorBody` | `bill/errors/restore_recurring_bill_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.recurringbills.update_recurring_bill

- **Route**: `PATCH /v3/recurringbills/{recurringBillId}`
- **Server**: `default`
- **Signature**: `def update_recurring_bill(recurring_bill_id: str, body: RecurringBillUpdateRequestDto | RecurringBillUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `recurring_bill_id`, `body`
- **Params**: `recurring_bill_id` — path `recurringBillId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `RecurringBillResponseDto`
- **Returns (raw)**: `ApiResult[RecurringBillResponseDto, UpdateRecurringBillErrorBody]`
- **Error**: `UpdateRecurringBillErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecurringBillUpdateRequestDto` | `bill/models/recurring_bill_update_request_dto.py` |
| `RecurringBillUpdateRequestDtoDict` | `bill/models/recurring_bill_update_request_dto.py` |
| `RecurringBillResponseDto` | `bill/models/recurring_bill_response_dto.py` |
| `UpdateRecurringBillErrorBody` | `bill/errors/update_recurring_bill_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

