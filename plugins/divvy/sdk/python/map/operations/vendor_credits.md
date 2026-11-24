<!-- Generated file — do not edit; regenerated with the SDK. -->

# VendorCredits — operations

Accessor: `client.vendor_credits` · Source: `divvy/apis/vendor_credits.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.vendor_credits.archive_vendor_credit

- **Route**: `POST /v3/vendor-credits/{vendorCreditId}/archive`
- **Server**: `default`
- **Signature**: `def archive_vendor_credit(vendor_credit_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_credit_id`
- **Params**: `vendor_credit_id` — path `vendorCreditId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `VendorCreditResponseDto`
- **Returns (raw)**: `ApiResult[VendorCreditResponseDto, ArchiveVendorCreditErrorBody]`
- **Error**: `ArchiveVendorCreditErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VendorCreditResponseDto` | `divvy/models/vendor_credit_response_dto.py` |
| `ArchiveVendorCreditErrorBody` | `divvy/errors/archive_vendor_credit_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.vendor_credits.bulk_archive_vendor_credit

- **Route**: `POST /v3/vendor-credits/bulk/archive`
- **Server**: `default`
- **Signature**: `def bulk_archive_vendor_credit(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `VendorCreditBulkResponseDto`
- **Returns (raw)**: `ApiResult[VendorCreditBulkResponseDto, BulkArchiveVendorCreditErrorBody]`
- **Error**: `BulkArchiveVendorCreditErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VendorCreditBulkResponseDto` | `divvy/models/vendor_credit_bulk_response_dto.py` |
| `BulkArchiveVendorCreditErrorBody` | `divvy/errors/bulk_archive_vendor_credit_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.vendor_credits.bulk_create_vendor_credit

- **Route**: `POST /v3/vendor-credits/bulk`
- **Server**: `default`
- **Signature**: `def bulk_create_vendor_credit(body: list[CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `VendorCreditBulkResponseDto`
- **Returns (raw)**: `ApiResult[VendorCreditBulkResponseDto, BulkCreateVendorCreditErrorBody]`
- **Error**: `BulkCreateVendorCreditErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateVendorCreditRequestDto` | `divvy/models/create_vendor_credit_request_dto.py` |
| `CreateVendorCreditRequestDtoDict` | `divvy/models/create_vendor_credit_request_dto.py` |
| `VendorCreditBulkResponseDto` | `divvy/models/vendor_credit_bulk_response_dto.py` |
| `BulkCreateVendorCreditErrorBody` | `divvy/errors/bulk_create_vendor_credit_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.vendor_credits.bulk_replace_vendor_credit

- **Route**: `PUT /v3/vendor-credits/bulk`
- **Server**: `default`
- **Signature**: `def bulk_replace_vendor_credit(body: list[ReplaceVendorCreditWithIdRequestDto | ReplaceVendorCreditWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `VendorCreditBulkResponseDto`
- **Returns (raw)**: `ApiResult[VendorCreditBulkResponseDto, BulkReplaceVendorCreditErrorBody]`
- **Error**: `BulkReplaceVendorCreditErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReplaceVendorCreditWithIdRequestDto` | `divvy/models/replace_vendor_credit_with_id_request_dto.py` |
| `ReplaceVendorCreditWithIdRequestDtoDict` | `divvy/models/replace_vendor_credit_with_id_request_dto.py` |
| `VendorCreditBulkResponseDto` | `divvy/models/vendor_credit_bulk_response_dto.py` |
| `BulkReplaceVendorCreditErrorBody` | `divvy/errors/bulk_replace_vendor_credit_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.vendor_credits.bulk_update_vendor_credit

- **Route**: `PATCH /v3/vendor-credits/bulk`
- **Server**: `default`
- **Signature**: `def bulk_update_vendor_credit(body: list[UpdateVendorCreditWithIdRequestDto | UpdateVendorCreditWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `VendorCreditBulkResponseDto`
- **Returns (raw)**: `ApiResult[VendorCreditBulkResponseDto, BulkUpdateVendorCreditErrorBody]`
- **Error**: `BulkUpdateVendorCreditErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateVendorCreditWithIdRequestDto` | `divvy/models/update_vendor_credit_with_id_request_dto.py` |
| `UpdateVendorCreditWithIdRequestDtoDict` | `divvy/models/update_vendor_credit_with_id_request_dto.py` |
| `VendorCreditBulkResponseDto` | `divvy/models/vendor_credit_bulk_response_dto.py` |
| `BulkUpdateVendorCreditErrorBody` | `divvy/errors/bulk_update_vendor_credit_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.vendor_credits.create_vendor_credit

- **Route**: `POST /v3/vendor-credits`
- **Server**: `default`
- **Signature**: `def create_vendor_credit(body: CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `VendorCreditResponseDto`
- **Returns (raw)**: `ApiResult[VendorCreditResponseDto, CreateVendorCreditErrorBody]`
- **Error**: `CreateVendorCreditErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateVendorCreditRequestDto` | `divvy/models/create_vendor_credit_request_dto.py` |
| `CreateVendorCreditRequestDtoDict` | `divvy/models/create_vendor_credit_request_dto.py` |
| `VendorCreditResponseDto` | `divvy/models/vendor_credit_response_dto.py` |
| `CreateVendorCreditErrorBody` | `divvy/errors/create_vendor_credit_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.vendor_credits.get_vendor_credit

- **Route**: `GET /v3/vendor-credits/{vendorCreditId}`
- **Server**: `default`
- **Signature**: `def get_vendor_credit(vendor_credit_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_credit_id`
- **Params**: `vendor_credit_id` — path `vendorCreditId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `VendorCreditWithUsageResponseDto`
- **Returns (raw)**: `ApiResult[VendorCreditWithUsageResponseDto, GetVendorCreditErrorBody]`
- **Error**: `GetVendorCreditErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VendorCreditWithUsageResponseDto` | `divvy/models/vendor_credit_with_usage_response_dto.py` |
| `GetVendorCreditErrorBody` | `divvy/errors/get_vendor_credit_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.vendor_credits.list_vendor_credits

- **Route**: `GET /v3/vendor-credits`
- **Server**: `default`
- **Signature**: `def list_vendor_credits(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoVendorCreditWithUsageResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoVendorCreditWithUsageResponseDto, ListVendorCreditsErrorBody]`
- **Error**: `ListVendorCreditsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoVendorCreditWithUsageResponseDto` | `divvy/models/list_response_dto_vendor_credit_with_usage_response_dto.py` |
| `ListVendorCreditsErrorBody` | `divvy/errors/list_vendor_credits_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.vendor_credits.replace_vendor_credit

- **Route**: `PUT /v3/vendor-credits/{vendorCreditId}`
- **Server**: `default`
- **Signature**: `def replace_vendor_credit(vendor_credit_id: str, body: ReplaceVendorCreditRequestDto | ReplaceVendorCreditRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_credit_id`, `body`
- **Params**: `vendor_credit_id` — path `vendorCreditId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `VendorCreditResponseDto`
- **Returns (raw)**: `ApiResult[VendorCreditResponseDto, ReplaceVendorCreditErrorBody]`
- **Error**: `ReplaceVendorCreditErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReplaceVendorCreditRequestDto` | `divvy/models/replace_vendor_credit_request_dto.py` |
| `ReplaceVendorCreditRequestDtoDict` | `divvy/models/replace_vendor_credit_request_dto.py` |
| `VendorCreditResponseDto` | `divvy/models/vendor_credit_response_dto.py` |
| `ReplaceVendorCreditErrorBody` | `divvy/errors/replace_vendor_credit_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.vendor_credits.update_vendor_credit

- **Route**: `PATCH /v3/vendor-credits/{vendorCreditId}`
- **Server**: `default`
- **Signature**: `def update_vendor_credit(vendor_credit_id: str, body: UpdateVendorCreditRequestDto | UpdateVendorCreditRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_credit_id`, `body`
- **Params**: `vendor_credit_id` — path `vendorCreditId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `VendorCreditResponseDto`
- **Returns (raw)**: `ApiResult[VendorCreditResponseDto, UpdateVendorCreditErrorBody]`
- **Error**: `UpdateVendorCreditErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateVendorCreditRequestDto` | `divvy/models/update_vendor_credit_request_dto.py` |
| `UpdateVendorCreditRequestDtoDict` | `divvy/models/update_vendor_credit_request_dto.py` |
| `VendorCreditResponseDto` | `divvy/models/vendor_credit_response_dto.py` |
| `UpdateVendorCreditErrorBody` | `divvy/errors/update_vendor_credit_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

