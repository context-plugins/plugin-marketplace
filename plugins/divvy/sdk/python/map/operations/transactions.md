<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactions — operations

Accessor: `client.transactions` · Source: `divvy/apis/transactions.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.transactions.add_transaction_receipt

- **Route**: `POST /v3/spend/transactions/{transactionId}/receipts`
- **Server**: `default`
- **Signature**: `def add_transaction_receipt(transaction_id: str, body: TransactionReceiptRequestDto | TransactionReceiptRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transaction_id`, `body`
- **Params**: `transaction_id` — path `transactionId` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `list[ReceiptImage]`
- **Returns (raw)**: `ApiResult[list[ReceiptImage], AddTransactionReceiptErrorBody]`
- **Error**: `AddTransactionReceiptErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransactionReceiptRequestDto` | `divvy/models/transaction_receipt_request_dto.py` |
| `TransactionReceiptRequestDtoDict` | `divvy/models/transaction_receipt_request_dto.py` |
| `ReceiptImage` | `divvy/models/receipt_image.py` |
| `AddTransactionReceiptErrorBody` | `divvy/errors/add_transaction_receipt_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.transactions.create_receipt_upload_url

- **Route**: `POST /v3/spend/transactions/receipt-upload-url`
- **Server**: `default`
- **Signature**: `def create_receipt_upload_url(*, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `api_token` — header `apiToken`
- **Returns (parsed)**: `ReimbursementImageUploadUrlResponseDto`
- **Returns (raw)**: `ApiResult[ReimbursementImageUploadUrlResponseDto, CreateReceiptUploadUrlErrorBody]`
- **Error**: `CreateReceiptUploadUrlErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReimbursementImageUploadUrlResponseDto` | `divvy/models/reimbursement_image_upload_url_response_dto.py` |
| `CreateReceiptUploadUrlErrorBody` | `divvy/errors/create_receipt_upload_url_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.transactions.delete_transaction_receipt

- **Route**: `DELETE /v3/spend/transactions/{transactionId}/receipts/{receiptId}`
- **Server**: `default`
- **Signature**: `def delete_transaction_receipt(transaction_id: str, receipt_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transaction_id`, `receipt_id`
- **Params**: `transaction_id` — path `transactionId` · `receipt_id` — path `receiptId` · `api_token` — header `apiToken`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteTransactionReceiptErrorBody]`
- **Error**: `DeleteTransactionReceiptErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteTransactionReceiptErrorBody` | `divvy/errors/delete_transaction_receipt_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.transactions.get_transaction

- **Route**: `GET /v3/spend/transactions/{transactionId}`
- **Server**: `default`
- **Signature**: `def get_transaction(transaction_id: str, *, show_custom_field_ids: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transaction_id`
- **Params**: `transaction_id` — path `transactionId` · `show_custom_field_ids` — query `showCustomFieldIds` · `api_token` — header `apiToken`
- **Returns (parsed)**: `TransactionResponseDto`
- **Returns (raw)**: `ApiResult[TransactionResponseDto, GetTransactionErrorBody]`
- **Error**: `GetTransactionErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransactionResponseDto` | `divvy/models/transaction_response_dto.py` |
| `GetTransactionErrorBody` | `divvy/errors/get_transaction_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.transactions.list_transaction_custom_field_values

- **Route**: `GET /v3/spend/transactions/{transactionId}/custom-fields/{customFieldId}/values`
- **Server**: `default`
- **Signature**: `def list_transaction_custom_field_values(transaction_id: str, custom_field_id: str, *, max_: int | None = None, next_page: str | None = None, prev_page: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transaction_id`, `custom_field_id`
- **Params**: `transaction_id` — path `transactionId` · `custom_field_id` — path `customFieldId` · `max_` — query `max` · `next_page` — query `nextPage` · `prev_page` — query `prevPage` · `api_token` — header `apiToken`
- **Returns (parsed)**: `PaginationResponseDtoCustomFieldValueDto`
- **Returns (raw)**: `ApiResult[PaginationResponseDtoCustomFieldValueDto, ListTransactionCustomFieldValuesErrorBody]`
- **Error**: `ListTransactionCustomFieldValuesErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginationResponseDtoCustomFieldValueDto` | `divvy/models/pagination_response_dto_custom_field_value_dto.py` |
| `ListTransactionCustomFieldValuesErrorBody` | `divvy/errors/list_transaction_custom_field_values_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.transactions.list_transaction_custom_fields

- **Route**: `GET /v3/spend/transactions/{transactionId}/custom-fields`
- **Server**: `default`
- **Signature**: `def list_transaction_custom_fields(transaction_id: str, *, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transaction_id`
- **Params**: `transaction_id` — path `transactionId` · `filters` — query · `api_token` — header `apiToken`
- **Returns (parsed)**: `ListTransactionCustomFieldResponseDto`
- **Returns (raw)**: `ApiResult[ListTransactionCustomFieldResponseDto, ListTransactionCustomFieldsErrorBody]`
- **Error**: `ListTransactionCustomFieldsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListTransactionCustomFieldResponseDto` | `divvy/models/list_transaction_custom_field_response_dto.py` |
| `ListTransactionCustomFieldsErrorBody` | `divvy/errors/list_transaction_custom_fields_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.transactions.list_transactions

- **Route**: `GET /v3/spend/transactions`
- **Server**: `default`
- **Signature**: `def list_transactions(*, max_: int | None = None, next_page: str | None = None, prev_page: str | None = None, sort: str | None = None, filters: str | None = None, show_custom_field_ids: str | None = None, include_receipts: bool | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `next_page` — query `nextPage` · `prev_page` — query `prevPage` · `sort` — query · `filters` — query · `show_custom_field_ids` — query `showCustomFieldIds` · `include_receipts` — query `includeReceipts` · `api_token` — header `apiToken`
- **Returns (parsed)**: `PaginationResponseDtoTransactionResponseDto`
- **Returns (raw)**: `ApiResult[PaginationResponseDtoTransactionResponseDto, ListTransactionsErrorBody]`
- **Error**: `ListTransactionsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginationResponseDtoTransactionResponseDto` | `divvy/models/pagination_response_dto_transaction_response_dto.py` |
| `ListTransactionsErrorBody` | `divvy/errors/list_transactions_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.transactions.three_ds_challenge

- **Route**: `POST /v3/spend/transactions/{acsTransactionId}/3ds-challenge`
- **Server**: `default`
- **Signature**: `def three_ds_challenge(acs_transaction_id: str, body: ThreeDsRequestDto | ThreeDsRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `acs_transaction_id`, `body`
- **Params**: `acs_transaction_id` — path `acsTransactionId` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `ThreeDsResponseDto`
- **Returns (raw)**: `ApiResult[ThreeDsResponseDto, ThreeDsChallengeErrorBody]`
- **Error**: `ThreeDsChallengeErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ThreeDsRequestDto` | `divvy/models/three_ds_request_dto.py` |
| `ThreeDsRequestDtoDict` | `divvy/models/three_ds_request_dto.py` |
| `ThreeDsResponseDto` | `divvy/models/three_ds_response_dto.py` |
| `ThreeDsChallengeErrorBody` | `divvy/errors/three_ds_challenge_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.transactions.update_transaction

- **Route**: `PUT /v3/spend/transactions/{transactionId}`
- **Server**: `default`
- **Signature**: `def update_transaction(transaction_id: str, body: UpdateTxRequestDto | UpdateTxRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transaction_id`, `body`
- **Params**: `transaction_id` — path `transactionId` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `TransactionResponseDto`
- **Returns (raw)**: `ApiResult[TransactionResponseDto, UpdateTransactionErrorBody]`
- **Error**: `UpdateTransactionErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateTxRequestDto` | `divvy/models/update_tx_request_dto.py` |
| `UpdateTxRequestDtoDict` | `divvy/models/update_tx_request_dto.py` |
| `TransactionResponseDto` | `divvy/models/transaction_response_dto.py` |
| `UpdateTransactionErrorBody` | `divvy/errors/update_transaction_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.transactions.update_transaction_custom_fields

- **Route**: `PUT /v3/spend/transactions/{transactionId}/custom-fields`
- **Server**: `default`
- **Signature**: `def update_transaction_custom_fields(transaction_id: str, body: BulkUpdateTxCustomFieldRequestDto | BulkUpdateTxCustomFieldRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transaction_id`, `body`
- **Params**: `transaction_id` — path `transactionId` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `SpendStatusDto`
- **Returns (raw)**: `ApiResult[SpendStatusDto, UpdateTransactionCustomFieldsErrorBody]`
- **Error**: `UpdateTransactionCustomFieldsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkUpdateTxCustomFieldRequestDto` | `divvy/models/bulk_update_tx_custom_field_request_dto.py` |
| `BulkUpdateTxCustomFieldRequestDtoDict` | `divvy/models/bulk_update_tx_custom_field_request_dto.py` |
| `SpendStatusDto` | `divvy/models/spend_status_dto.py` |
| `UpdateTransactionCustomFieldsErrorBody` | `divvy/errors/update_transaction_custom_fields_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

