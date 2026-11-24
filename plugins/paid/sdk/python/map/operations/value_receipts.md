<!-- Generated file — do not edit; regenerated with the SDK. -->

# ValueReceipts — operations

Accessor: `client.value_receipts` · Source: `paid/apis/value_receipts.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.value_receipts.archive_value_receipt

- **Route**: `POST /value-receipts/{id}/archive`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def archive_value_receipt(id_: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `SuccessResponse`
- **Returns (raw)**: `ApiResult[SuccessResponse, ArchiveValueReceiptErrorBody]`
- **Error**: `ArchiveValueReceiptErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuccessResponse` | `paid/models/success_response.py` |
| `ArchiveValueReceiptErrorBody` | `paid/errors/archive_value_receipt_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.value_receipts.get_value_receipt_by_id

- **Route**: `GET /value-receipts/{id}`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def get_value_receipt_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `ValueReceiptDetail`
- **Returns (raw)**: `ApiResult[ValueReceiptDetail, GetValueReceiptByIdErrorBody]`
- **Error**: `GetValueReceiptByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ValueReceiptDetail` | `paid/models/value_receipt_detail.py` |
| `GetValueReceiptByIdErrorBody` | `paid/errors/get_value_receipt_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.value_receipts.list_value_receipts

- **Route**: `GET /value-receipts/`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def list_value_receipts(authorization: str, *, limit: int | None = 50, offset: int | None = 0, customer_id: str | None = None, external_customer_id: str | None = None, order_id: str | None = None, product_id: str | None = None, archived: ValueReceiptsGetParametersArchivedOrStr | None = ValueReceiptsGetParametersArchived.FALSE, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `limit` — query · `offset` — query · `customer_id` — query `customerId` · `external_customer_id` — query `externalCustomerId` · `order_id` — query `orderId` · `product_id` — query `productId` · `archived` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `ValueReceiptListResponse`
- **Returns (raw)**: `ApiResult[ValueReceiptListResponse, ListValueReceiptsErrorBody]`
- **Error**: `ListValueReceiptsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ValueReceiptsGetParametersArchivedOrStr` | `paid/models/enums/value_receipts_get_parameters_archived.py` |
| `ValueReceiptListResponse` | `paid/models/value_receipt_list_response.py` |
| `ListValueReceiptsErrorBody` | `paid/errors/list_value_receipts_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.value_receipts.publish_value_receipt

- **Route**: `POST /value-receipts/{id}/publish`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def publish_value_receipt(id_: str, authorization: str, *, body: PublishValueReceiptBody | PublishValueReceiptBodyDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `ValueReceiptDetail`
- **Returns (raw)**: `ApiResult[ValueReceiptDetail, PublishValueReceiptErrorBody]`
- **Error**: `PublishValueReceiptErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublishValueReceiptBody` | `paid/models/publish_value_receipt_body.py` |
| `PublishValueReceiptBodyDict` | `paid/models/publish_value_receipt_body.py` |
| `ValueReceiptDetail` | `paid/models/value_receipt_detail.py` |
| `PublishValueReceiptErrorBody` | `paid/errors/publish_value_receipt_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.value_receipts.refresh_value_receipt

- **Route**: `POST /value-receipts/{id}/refresh`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def refresh_value_receipt(id_: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `ValueReceiptSyncResponse`
- **Returns (raw)**: `ApiResult[ValueReceiptSyncResponse, RefreshValueReceiptErrorBody]`
- **Error**: `RefreshValueReceiptErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ValueReceiptSyncResponse` | `paid/models/value_receipt_sync_response.py` |
| `RefreshValueReceiptErrorBody` | `paid/errors/refresh_value_receipt_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.value_receipts.seal_value_receipt

- **Route**: `POST /value-receipts/{id}/seal`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def seal_value_receipt(id_: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `SuccessResponse`
- **Returns (raw)**: `ApiResult[SuccessResponse, SealValueReceiptErrorBody]`
- **Error**: `SealValueReceiptErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 409, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuccessResponse` | `paid/models/success_response.py` |
| `SealValueReceiptErrorBody` | `paid/errors/seal_value_receipt_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.value_receipts.sync_value_receipt

- **Route**: `POST /value-receipts/sync`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def sync_value_receipt(authorization: str, *, body: SyncValueReceiptRequest | SyncValueReceiptRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `ValueReceiptSyncResponse`
- **Returns (raw)**: `ApiResult[ValueReceiptSyncResponse, SyncValueReceiptErrorBody]`
- **Error**: `SyncValueReceiptErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SyncValueReceiptRequest` | `paid/models/sync_value_receipt_request.py` |
| `SyncValueReceiptRequestDict` | `paid/models/sync_value_receipt_request.py` |
| `ValueReceiptSyncResponse` | `paid/models/value_receipt_sync_response.py` |
| `SyncValueReceiptErrorBody` | `paid/errors/sync_value_receipt_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.value_receipts.unarchive_value_receipt

- **Route**: `POST /value-receipts/{id}/unarchive`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def unarchive_value_receipt(id_: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `SuccessResponse`
- **Returns (raw)**: `ApiResult[SuccessResponse, UnarchiveValueReceiptErrorBody]`
- **Error**: `UnarchiveValueReceiptErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuccessResponse` | `paid/models/success_response.py` |
| `UnarchiveValueReceiptErrorBody` | `paid/errors/unarchive_value_receipt_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.value_receipts.unpublish_value_receipt

- **Route**: `POST /value-receipts/{id}/unpublish`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def unpublish_value_receipt(id_: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `ValueReceiptDetail`
- **Returns (raw)**: `ApiResult[ValueReceiptDetail, UnpublishValueReceiptErrorBody]`
- **Error**: `UnpublishValueReceiptErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ValueReceiptDetail` | `paid/models/value_receipt_detail.py` |
| `UnpublishValueReceiptErrorBody` | `paid/errors/unpublish_value_receipt_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

