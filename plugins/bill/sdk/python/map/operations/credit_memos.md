<!-- Generated file — do not edit; regenerated with the SDK. -->

# CreditMemos — operations

Accessor: `client.credit_memos` · Source: `bill/apis/credit_memos.py` · 12 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.credit_memos.archive_credit_memo

- **Route**: `POST /v3/credit-memos/{creditMemoId}/archive`
- **Server**: `default`
- **Signature**: `def archive_credit_memo(credit_memo_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `credit_memo_id`
- **Params**: `credit_memo_id` — path `creditMemoId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `CreditMemoResponseDto`
- **Returns (raw)**: `ApiResult[CreditMemoResponseDto, ArchiveCreditMemoErrorBody]`
- **Error**: `ArchiveCreditMemoErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreditMemoResponseDto` | `bill/models/credit_memo_response_dto.py` |
| `ArchiveCreditMemoErrorBody` | `bill/errors/archive_credit_memo_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.credit_memos.bulk_archive_credit_memo

- **Route**: `POST /v3/credit-memos/bulk/archive`
- **Server**: `default`
- **Signature**: `def bulk_archive_credit_memo(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `CreditMemoBulkResponseDto`
- **Returns (raw)**: `ApiResult[CreditMemoBulkResponseDto, BulkArchiveCreditMemoErrorBody]`
- **Error**: `BulkArchiveCreditMemoErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreditMemoBulkResponseDto` | `bill/models/credit_memo_bulk_response_dto.py` |
| `BulkArchiveCreditMemoErrorBody` | `bill/errors/bulk_archive_credit_memo_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.credit_memos.bulk_create_credit_memo

- **Route**: `POST /v3/credit-memos/bulk`
- **Server**: `default`
- **Signature**: `def bulk_create_credit_memo(body: list[CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `CreditMemoBulkResponseDto`
- **Returns (raw)**: `ApiResult[CreditMemoBulkResponseDto, BulkCreateCreditMemoErrorBody]`
- **Error**: `BulkCreateCreditMemoErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCreditMemoRequestDto` | `bill/models/create_credit_memo_request_dto.py` |
| `CreateCreditMemoRequestDtoDict` | `bill/models/create_credit_memo_request_dto.py` |
| `CreditMemoBulkResponseDto` | `bill/models/credit_memo_bulk_response_dto.py` |
| `BulkCreateCreditMemoErrorBody` | `bill/errors/bulk_create_credit_memo_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.credit_memos.bulk_replace_credit_memo

- **Route**: `PUT /v3/credit-memos/bulk`
- **Server**: `default`
- **Signature**: `def bulk_replace_credit_memo(body: list[ReplaceCreditMemoWithIdRequestDto | ReplaceCreditMemoWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `CreditMemoBulkResponseDto`
- **Returns (raw)**: `ApiResult[CreditMemoBulkResponseDto, BulkReplaceCreditMemoErrorBody]`
- **Error**: `BulkReplaceCreditMemoErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReplaceCreditMemoWithIdRequestDto` | `bill/models/replace_credit_memo_with_id_request_dto.py` |
| `ReplaceCreditMemoWithIdRequestDtoDict` | `bill/models/replace_credit_memo_with_id_request_dto.py` |
| `CreditMemoBulkResponseDto` | `bill/models/credit_memo_bulk_response_dto.py` |
| `BulkReplaceCreditMemoErrorBody` | `bill/errors/bulk_replace_credit_memo_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.credit_memos.bulk_restore_credit_memo

- **Route**: `POST /v3/credit-memos/bulk/restore`
- **Server**: `default`
- **Signature**: `def bulk_restore_credit_memo(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `CreditMemoBulkResponseDto`
- **Returns (raw)**: `ApiResult[CreditMemoBulkResponseDto, BulkRestoreCreditMemoErrorBody]`
- **Error**: `BulkRestoreCreditMemoErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreditMemoBulkResponseDto` | `bill/models/credit_memo_bulk_response_dto.py` |
| `BulkRestoreCreditMemoErrorBody` | `bill/errors/bulk_restore_credit_memo_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.credit_memos.bulk_update_credit_memo

- **Route**: `PATCH /v3/credit-memos/bulk`
- **Server**: `default`
- **Signature**: `def bulk_update_credit_memo(body: list[UpdateCreditMemoWithIdRequestDto | UpdateCreditMemoWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `CreditMemoBulkResponseDto`
- **Returns (raw)**: `ApiResult[CreditMemoBulkResponseDto, BulkUpdateCreditMemoErrorBody]`
- **Error**: `BulkUpdateCreditMemoErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCreditMemoWithIdRequestDto` | `bill/models/update_credit_memo_with_id_request_dto.py` |
| `UpdateCreditMemoWithIdRequestDtoDict` | `bill/models/update_credit_memo_with_id_request_dto.py` |
| `CreditMemoBulkResponseDto` | `bill/models/credit_memo_bulk_response_dto.py` |
| `BulkUpdateCreditMemoErrorBody` | `bill/errors/bulk_update_credit_memo_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.credit_memos.create_credit_memo

- **Route**: `POST /v3/credit-memos`
- **Server**: `default`
- **Signature**: `def create_credit_memo(body: CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `CreditMemoResponseDto`
- **Returns (raw)**: `ApiResult[CreditMemoResponseDto, CreateCreditMemoErrorBody]`
- **Error**: `CreateCreditMemoErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCreditMemoRequestDto` | `bill/models/create_credit_memo_request_dto.py` |
| `CreateCreditMemoRequestDtoDict` | `bill/models/create_credit_memo_request_dto.py` |
| `CreditMemoResponseDto` | `bill/models/credit_memo_response_dto.py` |
| `CreateCreditMemoErrorBody` | `bill/errors/create_credit_memo_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.credit_memos.get_credit_memo

- **Route**: `GET /v3/credit-memos/{creditMemoId}`
- **Server**: `default`
- **Signature**: `def get_credit_memo(credit_memo_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `credit_memo_id`
- **Params**: `credit_memo_id` — path `creditMemoId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `CreditMemoWithUsageResponseDto`
- **Returns (raw)**: `ApiResult[CreditMemoWithUsageResponseDto, GetCreditMemoErrorBody]`
- **Error**: `GetCreditMemoErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreditMemoWithUsageResponseDto` | `bill/models/credit_memo_with_usage_response_dto.py` |
| `GetCreditMemoErrorBody` | `bill/errors/get_credit_memo_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.credit_memos.list_credit_memos

- **Route**: `GET /v3/credit-memos`
- **Server**: `default`
- **Signature**: `def list_credit_memos(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoCreditMemoWithUsageResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoCreditMemoWithUsageResponseDto, ListCreditMemosErrorBody]`
- **Error**: `ListCreditMemosErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoCreditMemoWithUsageResponseDto` | `bill/models/list_response_dto_credit_memo_with_usage_response_dto.py` |
| `ListCreditMemosErrorBody` | `bill/errors/list_credit_memos_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.credit_memos.replace_credit_memo

- **Route**: `PUT /v3/credit-memos/{creditMemoId}`
- **Server**: `default`
- **Signature**: `def replace_credit_memo(credit_memo_id: str, body: ReplaceCreditMemoRequestDto | ReplaceCreditMemoRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `credit_memo_id`, `body`
- **Params**: `credit_memo_id` — path `creditMemoId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `CreditMemoResponseDto`
- **Returns (raw)**: `ApiResult[CreditMemoResponseDto, ReplaceCreditMemoErrorBody]`
- **Error**: `ReplaceCreditMemoErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReplaceCreditMemoRequestDto` | `bill/models/replace_credit_memo_request_dto.py` |
| `ReplaceCreditMemoRequestDtoDict` | `bill/models/replace_credit_memo_request_dto.py` |
| `CreditMemoResponseDto` | `bill/models/credit_memo_response_dto.py` |
| `ReplaceCreditMemoErrorBody` | `bill/errors/replace_credit_memo_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.credit_memos.restore_credit_memo

- **Route**: `POST /v3/credit-memos/{creditMemoId}/restore`
- **Server**: `default`
- **Signature**: `def restore_credit_memo(credit_memo_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `credit_memo_id`
- **Params**: `credit_memo_id` — path `creditMemoId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `CreditMemoResponseDto`
- **Returns (raw)**: `ApiResult[CreditMemoResponseDto, RestoreCreditMemoErrorBody]`
- **Error**: `RestoreCreditMemoErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreditMemoResponseDto` | `bill/models/credit_memo_response_dto.py` |
| `RestoreCreditMemoErrorBody` | `bill/errors/restore_credit_memo_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.credit_memos.update_credit_memo

- **Route**: `PATCH /v3/credit-memos/{creditMemoId}`
- **Server**: `default`
- **Signature**: `def update_credit_memo(credit_memo_id: str, body: UpdateCreditMemoRequestDto | UpdateCreditMemoRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `credit_memo_id`, `body`
- **Params**: `credit_memo_id` — path `creditMemoId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `CreditMemoResponseDto`
- **Returns (raw)**: `ApiResult[CreditMemoResponseDto, UpdateCreditMemoErrorBody]`
- **Error**: `UpdateCreditMemoErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCreditMemoRequestDto` | `bill/models/update_credit_memo_request_dto.py` |
| `UpdateCreditMemoRequestDtoDict` | `bill/models/update_credit_memo_request_dto.py` |
| `CreditMemoResponseDto` | `bill/models/credit_memo_response_dto.py` |
| `UpdateCreditMemoErrorBody` | `bill/errors/update_credit_memo_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

