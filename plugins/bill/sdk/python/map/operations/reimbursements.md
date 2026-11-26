<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reimbursements — operations

Accessor: `client.reimbursements` · Source: `bill/apis/reimbursements.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.reimbursements.add_reimbursement_receipt

- **Route**: `POST /v3/spend/reimbursements/{reimbursementId}/receipts`
- **Server**: `default`
- **Signature**: `def add_reimbursement_receipt(reimbursement_id: str, body: ReimbursementReceiptRequestDto | ReimbursementReceiptRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `reimbursement_id`, `body`
- **Params**: `reimbursement_id` — path `reimbursementId` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `list[ReceiptImage]`
- **Returns (raw)**: `ApiResult[list[ReceiptImage], AddReimbursementReceiptErrorBody]`
- **Error**: `AddReimbursementReceiptErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReimbursementReceiptRequestDto` | `bill/models/reimbursement_receipt_request_dto.py` |
| `ReimbursementReceiptRequestDtoDict` | `bill/models/reimbursement_receipt_request_dto.py` |
| `ReceiptImage` | `bill/models/receipt_image.py` |
| `AddReimbursementReceiptErrorBody` | `bill/errors/add_reimbursement_receipt_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.reimbursements.approve_or_deny_reimbursement

- **Route**: `POST /v3/spend/reimbursements/{reimbursementId}/action`
- **Server**: `default`
- **Signature**: `def approve_or_deny_reimbursement(reimbursement_id: str, body: ReimbursementActionRequestDto | ReimbursementActionRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `reimbursement_id`, `body`
- **Params**: `reimbursement_id` — path `reimbursementId` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `ReimbursementResponseDto`
- **Returns (raw)**: `ApiResult[ReimbursementResponseDto, ApproveOrDenyReimbursementErrorBody]`
- **Error**: `ApproveOrDenyReimbursementErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReimbursementActionRequestDto` | `bill/models/reimbursement_action_request_dto.py` |
| `ReimbursementActionRequestDtoDict` | `bill/models/reimbursement_action_request_dto.py` |
| `ReimbursementResponseDto` | `bill/models/reimbursement_response_dto.py` |
| `ApproveOrDenyReimbursementErrorBody` | `bill/errors/approve_or_deny_reimbursement_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.reimbursements.create_image_upload_url

- **Route**: `POST /v3/spend/reimbursements/image-upload-url`
- **Server**: `default`
- **Signature**: `def create_image_upload_url(*, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `api_token` — header `apiToken`
- **Returns (parsed)**: `ReimbursementImageUploadUrlResponseDto`
- **Returns (raw)**: `ApiResult[ReimbursementImageUploadUrlResponseDto, CreateImageUploadUrlErrorBody]`
- **Error**: `CreateImageUploadUrlErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReimbursementImageUploadUrlResponseDto` | `bill/models/reimbursement_image_upload_url_response_dto.py` |
| `CreateImageUploadUrlErrorBody` | `bill/errors/create_image_upload_url_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.reimbursements.create_reimbursement

- **Route**: `POST /v3/spend/reimbursements`
- **Server**: `default`
- **Signature**: `def create_reimbursement(body: CreateReimbursementRequestDto | CreateReimbursementRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `ReimbursementResponseDto`
- **Returns (raw)**: `ApiResult[ReimbursementResponseDto, CreateReimbursementErrorBody]`
- **Error**: `CreateReimbursementErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateReimbursementRequestDto` | `bill/models/create_reimbursement_request_dto.py` |
| `CreateReimbursementRequestDtoDict` | `bill/models/create_reimbursement_request_dto.py` |
| `ReimbursementResponseDto` | `bill/models/reimbursement_response_dto.py` |
| `CreateReimbursementErrorBody` | `bill/errors/create_reimbursement_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.reimbursements.delete_reimbursement

- **Route**: `DELETE /v3/spend/reimbursements/{reimbursementId}`
- **Server**: `default`
- **Signature**: `def delete_reimbursement(reimbursement_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `reimbursement_id`
- **Params**: `reimbursement_id` — path `reimbursementId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteReimbursementErrorBody]`
- **Error**: `DeleteReimbursementErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteReimbursementErrorBody` | `bill/errors/delete_reimbursement_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.reimbursements.delete_reimbursement_receipt

- **Route**: `DELETE /v3/spend/reimbursements/{reimbursementId}/receipts/{receiptId}`
- **Server**: `default`
- **Signature**: `def delete_reimbursement_receipt(reimbursement_id: str, receipt_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `reimbursement_id`, `receipt_id`
- **Params**: `reimbursement_id` — path `reimbursementId` · `receipt_id` — path `receiptId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteReimbursementReceiptErrorBody]`
- **Error**: `DeleteReimbursementReceiptErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteReimbursementReceiptErrorBody` | `bill/errors/delete_reimbursement_receipt_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.reimbursements.get_reimbursement

- **Route**: `GET /v3/spend/reimbursements/{reimbursementId}`
- **Server**: `default`
- **Signature**: `def get_reimbursement(reimbursement_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `reimbursement_id`
- **Params**: `reimbursement_id` — path `reimbursementId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `ReimbursementResponseDto`
- **Returns (raw)**: `ApiResult[ReimbursementResponseDto, GetReimbursementErrorBody]`
- **Error**: `GetReimbursementErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReimbursementResponseDto` | `bill/models/reimbursement_response_dto.py` |
| `GetReimbursementErrorBody` | `bill/errors/get_reimbursement_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.reimbursements.list_reimbursements

- **Route**: `GET /v3/spend/reimbursements`
- **Server**: `default`
- **Signature**: `def list_reimbursements(*, next_page: str | None = None, prev_page: str | None = None, max_: int | None = None, sort: str | None = None, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `next_page` — query `nextPage` · `prev_page` — query `prevPage` · `max_` — query `max` · `sort` — query · `filters` — query · `api_token` — header `apiToken`
- **Returns (parsed)**: `PaginationResponseDtoReimbursementResponseDto`
- **Returns (raw)**: `ApiResult[PaginationResponseDtoReimbursementResponseDto, ListReimbursementsErrorBody]`
- **Error**: `ListReimbursementsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginationResponseDtoReimbursementResponseDto` | `bill/models/pagination_response_dto_reimbursement_response_dto.py` |
| `ListReimbursementsErrorBody` | `bill/errors/list_reimbursements_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.reimbursements.update_reimbursement

- **Route**: `PATCH /v3/spend/reimbursements/{reimbursementId}`
- **Server**: `default`
- **Signature**: `def update_reimbursement(reimbursement_id: str, body: UpdateReimbursementRequestDto | UpdateReimbursementRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `reimbursement_id`, `body`
- **Params**: `reimbursement_id` — path `reimbursementId` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `ReimbursementResponseDto`
- **Returns (raw)**: `ApiResult[ReimbursementResponseDto, UpdateReimbursementErrorBody]`
- **Error**: `UpdateReimbursementErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateReimbursementRequestDto` | `bill/models/update_reimbursement_request_dto.py` |
| `UpdateReimbursementRequestDtoDict` | `bill/models/update_reimbursement_request_dto.py` |
| `ReimbursementResponseDto` | `bill/models/reimbursement_response_dto.py` |
| `UpdateReimbursementErrorBody` | `bill/errors/update_reimbursement_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

