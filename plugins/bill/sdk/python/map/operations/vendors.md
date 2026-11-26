<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vendors — operations

Accessor: `client.vendors` · Source: `bill/apis/vendors.py` · 12 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.vendors.archive_vendor

- **Route**: `POST /v3/vendors/{vendorId}/archive`
- **Server**: `default`
- **Signature**: `def archive_vendor(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`
- **Params**: `vendor_id` — path `vendorId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `VendorResponseDto`
- **Returns (raw)**: `ApiResult[VendorResponseDto, ArchiveVendorErrorBody]`
- **Error**: `ArchiveVendorErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VendorResponseDto` | `bill/models/vendor_response_dto.py` |
| `ArchiveVendorErrorBody` | `bill/errors/archive_vendor_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.vendors.create_bulk_vendor

- **Route**: `POST /v3/vendors/bulk`
- **Server**: `default`
- **Signature**: `def create_bulk_vendor(body: list[VendorRequestDto | VendorRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `BulkVendorResponseDto`
- **Returns (raw)**: `ApiResult[BulkVendorResponseDto, CreateBulkVendorErrorBody]`
- **Error**: `CreateBulkVendorErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VendorRequestDto` | `bill/models/vendor_request_dto.py` |
| `VendorRequestDtoDict` | `bill/models/vendor_request_dto.py` |
| `BulkVendorResponseDto` | `bill/models/bulk_vendor_response_dto.py` |
| `CreateBulkVendorErrorBody` | `bill/errors/create_bulk_vendor_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.vendors.create_vendor

- **Route**: `POST /v3/vendors`
- **Server**: `default`
- **Signature**: `def create_vendor(body: VendorRequestDto | VendorRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `VendorResponseDto`
- **Returns (raw)**: `ApiResult[VendorResponseDto, CreateVendorErrorBody]`
- **Error**: `CreateVendorErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VendorRequestDto` | `bill/models/vendor_request_dto.py` |
| `VendorRequestDtoDict` | `bill/models/vendor_request_dto.py` |
| `VendorResponseDto` | `bill/models/vendor_response_dto.py` |
| `CreateVendorErrorBody` | `bill/errors/create_vendor_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.vendors.create_vendor_bank_account

- **Route**: `POST /v3/vendors/{vendorId}/bank-account`
- **Server**: `default`
- **Signature**: `def create_vendor_bank_account(vendor_id: str, body: VendorBankAccountRequestDto | VendorBankAccountRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`, `body`
- **Params**: `vendor_id` — path `vendorId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `VendorBankAccountResponseDto`
- **Returns (raw)**: `ApiResult[VendorBankAccountResponseDto, CreateVendorBankAccountErrorBody]`
- **Error**: `CreateVendorBankAccountErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VendorBankAccountRequestDto` | `bill/models/vendor_bank_account_request_dto.py` |
| `VendorBankAccountRequestDtoDict` | `bill/models/vendor_bank_account_request_dto.py` |
| `VendorBankAccountResponseDto` | `bill/models/vendor_bank_account_response_dto.py` |
| `CreateVendorBankAccountErrorBody` | `bill/errors/create_vendor_bank_account_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.vendors.delete_vendor_bank_account

- **Route**: `DELETE /v3/vendors/{vendorId}/bank-account`
- **Server**: `default`
- **Signature**: `def delete_vendor_bank_account(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`
- **Params**: `vendor_id` — path `vendorId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteVendorBankAccountErrorBody]`
- **Error**: `DeleteVendorBankAccountErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteVendorBankAccountErrorBody` | `bill/errors/delete_vendor_bank_account_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.vendors.get_configuration_by_vendor_id

- **Route**: `GET /v3/vendors/{vendorId}/configuration`
- **Server**: `default`
- **Signature**: `def get_configuration_by_vendor_id(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`
- **Params**: `vendor_id` — path `vendorId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `VendorConfigurationResponseDto`
- **Returns (raw)**: `ApiResult[VendorConfigurationResponseDto, GetConfigurationByVendorIdErrorBody]`
- **Error**: `GetConfigurationByVendorIdErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VendorConfigurationResponseDto` | `bill/models/vendor_configuration_response_dto.py` |
| `GetConfigurationByVendorIdErrorBody` | `bill/errors/get_configuration_by_vendor_id_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.vendors.get_intl_config

- **Route**: `GET /v3/vendors/configuration/international-payments`
- **Server**: `default`
- **Signature**: `def get_intl_config(country: CountryCodeOrStr, bill_currency: CurrencyCodeOrStr, account_type: AccountTypeRequestOrStr, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`, `bill_currency`, `account_type`
- **Params**: `country` — query · `bill_currency` — query `billCurrency` · `account_type` — query `accountType` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `IntlPmtsConfigurationResponseDto`
- **Returns (raw)**: `ApiResult[IntlPmtsConfigurationResponseDto, GetIntlConfigErrorBody]`
- **Error**: `GetIntlConfigErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CountryCodeOrStr` | `bill/models/enums/country_code.py` |
| `CurrencyCodeOrStr` | `bill/models/enums/currency_code.py` |
| `AccountTypeRequestOrStr` | `bill/models/enums/account_type_request.py` |
| `IntlPmtsConfigurationResponseDto` | `bill/models/intl_pmts_configuration_response_dto.py` |
| `GetIntlConfigErrorBody` | `bill/errors/get_intl_config_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.vendors.get_vendor

- **Route**: `GET /v3/vendors/{vendorId}`
- **Server**: `default`
- **Signature**: `def get_vendor(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`
- **Params**: `vendor_id` — path `vendorId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `VendorResponseDto`
- **Returns (raw)**: `ApiResult[VendorResponseDto, GetVendorErrorBody]`
- **Error**: `GetVendorErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VendorResponseDto` | `bill/models/vendor_response_dto.py` |
| `GetVendorErrorBody` | `bill/errors/get_vendor_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.vendors.get_vendor_bank_account

- **Route**: `GET /v3/vendors/{vendorId}/bank-account`
- **Server**: `default`
- **Signature**: `def get_vendor_bank_account(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`
- **Params**: `vendor_id` — path `vendorId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `VendorBankAccountResponseDto`
- **Returns (raw)**: `ApiResult[VendorBankAccountResponseDto, GetVendorBankAccountErrorBody]`
- **Error**: `GetVendorBankAccountErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VendorBankAccountResponseDto` | `bill/models/vendor_bank_account_response_dto.py` |
| `GetVendorBankAccountErrorBody` | `bill/errors/get_vendor_bank_account_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.vendors.list_vendors

- **Route**: `GET /v3/vendors`
- **Server**: `default`
- **Signature**: `def list_vendors(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListVendorResponseDto`
- **Returns (raw)**: `ApiResult[ListVendorResponseDto, ListVendorsErrorBody]`
- **Error**: `ListVendorsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListVendorResponseDto` | `bill/models/list_vendor_response_dto.py` |
| `ListVendorsErrorBody` | `bill/errors/list_vendors_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.vendors.restore_vendor

- **Route**: `POST /v3/vendors/{vendorId}/restore`
- **Server**: `default`
- **Signature**: `def restore_vendor(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`
- **Params**: `vendor_id` — path `vendorId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `VendorResponseDto`
- **Returns (raw)**: `ApiResult[VendorResponseDto, RestoreVendorErrorBody]`
- **Error**: `RestoreVendorErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VendorResponseDto` | `bill/models/vendor_response_dto.py` |
| `RestoreVendorErrorBody` | `bill/errors/restore_vendor_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.vendors.update_vendor

- **Route**: `PATCH /v3/vendors/{vendorId}`
- **Server**: `default`
- **Signature**: `def update_vendor(vendor_id: str, body: VendorUpdateRequestDto | VendorUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`, `body`
- **Params**: `vendor_id` — path `vendorId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `VendorResponseDto`
- **Returns (raw)**: `ApiResult[VendorResponseDto, UpdateVendorErrorBody]`
- **Error**: `UpdateVendorErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VendorUpdateRequestDto` | `bill/models/vendor_update_request_dto.py` |
| `VendorUpdateRequestDtoDict` | `bill/models/vendor_update_request_dto.py` |
| `VendorResponseDto` | `bill/models/vendor_response_dto.py` |
| `UpdateVendorErrorBody` | `bill/errors/update_vendor_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

