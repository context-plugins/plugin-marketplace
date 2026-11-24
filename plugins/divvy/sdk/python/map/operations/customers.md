<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.customers` · Source: `divvy/apis/customers.py` · 18 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.customers.archive_customer

- **Route**: `POST /v3/customers/{customerId}/archive`
- **Server**: `default`
- **Signature**: `def archive_customer(customer_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `CustomerResponseDto`
- **Returns (raw)**: `ApiResult[CustomerResponseDto, ArchiveCustomerErrorBody]`
- **Error**: `ArchiveCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerResponseDto` | `divvy/models/customer_response_dto.py` |
| `ArchiveCustomerErrorBody` | `divvy/errors/archive_customer_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.archive_customer_bank_account

- **Route**: `POST /v3/customers/{customerId}/bank-accounts/{bankAccountId}/archive`
- **Server**: `default`
- **Signature**: `def archive_customer_bank_account(customer_id: str, bank_account_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `bank_account_id`
- **Params**: `customer_id` — path `customerId` · `bank_account_id` — path `bankAccountId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `CustomerBankAccountResponseDto`
- **Returns (raw)**: `ApiResult[CustomerBankAccountResponseDto, ArchiveCustomerBankAccountErrorBody]`
- **Error**: `ArchiveCustomerBankAccountErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerBankAccountResponseDto` | `divvy/models/customer_bank_account_response_dto.py` |
| `ArchiveCustomerBankAccountErrorBody` | `divvy/errors/archive_customer_bank_account_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.archive_customer_contact

- **Route**: `POST /v3/customers/{customerId}/contacts/{contactId}/archive`
- **Server**: `default`
- **Signature**: `def archive_customer_contact(customer_id: str, contact_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `contact_id`
- **Params**: `customer_id` — path `customerId` · `contact_id` — path `contactId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `CustomerContactResponseDto`
- **Returns (raw)**: `ApiResult[CustomerContactResponseDto, ArchiveCustomerContactErrorBody]`
- **Error**: `ArchiveCustomerContactErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerContactResponseDto` | `divvy/models/customer_contact_response_dto.py` |
| `ArchiveCustomerContactErrorBody` | `divvy/errors/archive_customer_contact_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.authorize_to_charge_customer

- **Route**: `POST /v3/customers/{customerId}/charge-authorization`
- **Server**: `default`
- **Signature**: `def authorize_to_charge_customer(customer_id: str, body: ChargeAuthorizationRequestDto | ChargeAuthorizationRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `body`
- **Params**: `customer_id` — path `customerId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ChargeAuthorizationResponseDto`
- **Returns (raw)**: `ApiResult[ChargeAuthorizationResponseDto, AuthorizeToChargeCustomerErrorBody]`
- **Error**: `AuthorizeToChargeCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChargeAuthorizationRequestDto` | `divvy/models/charge_authorization_request_dto.py` |
| `ChargeAuthorizationRequestDtoDict` | `divvy/models/charge_authorization_request_dto.py` |
| `ChargeAuthorizationResponseDto` | `divvy/models/charge_authorization_response_dto.py` |
| `AuthorizeToChargeCustomerErrorBody` | `divvy/errors/authorize_to_charge_customer_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.create_customer

- **Route**: `POST /v3/customers`
- **Server**: `default`
- **Signature**: `def create_customer(body: CustomerCreateRequestDto | CustomerCreateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `CustomerResponseDto`
- **Returns (raw)**: `ApiResult[CustomerResponseDto, CreateCustomerErrorBody]`
- **Error**: `CreateCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerCreateRequestDto` | `divvy/models/customer_create_request_dto.py` |
| `CustomerCreateRequestDtoDict` | `divvy/models/customer_create_request_dto.py` |
| `CustomerResponseDto` | `divvy/models/customer_response_dto.py` |
| `CreateCustomerErrorBody` | `divvy/errors/create_customer_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.create_customer_bank_account

- **Route**: `POST /v3/customers/{customerId}/bank-accounts`
- **Server**: `default`
- **Signature**: `def create_customer_bank_account(customer_id: str, body: CreateCustomerBankAccountRequestDto | CreateCustomerBankAccountRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `body`
- **Params**: `customer_id` — path `customerId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `CustomerBankAccountResponseDto`
- **Returns (raw)**: `ApiResult[CustomerBankAccountResponseDto, CreateCustomerBankAccountErrorBody]`
- **Error**: `CreateCustomerBankAccountErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCustomerBankAccountRequestDto` | `divvy/models/create_customer_bank_account_request_dto.py` |
| `CreateCustomerBankAccountRequestDtoDict` | `divvy/models/create_customer_bank_account_request_dto.py` |
| `CustomerBankAccountResponseDto` | `divvy/models/customer_bank_account_response_dto.py` |
| `CreateCustomerBankAccountErrorBody` | `divvy/errors/create_customer_bank_account_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.create_customer_contact

- **Route**: `POST /v3/customers/{customerId}/contacts`
- **Server**: `default`
- **Signature**: `def create_customer_contact(customer_id: str, body: CreateCustomerContactRequestDto | CreateCustomerContactRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `body`
- **Params**: `customer_id` — path `customerId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `CustomerContactResponseDto`
- **Returns (raw)**: `ApiResult[CustomerContactResponseDto, CreateCustomerContactErrorBody]`
- **Error**: `CreateCustomerContactErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCustomerContactRequestDto` | `divvy/models/create_customer_contact_request_dto.py` |
| `CreateCustomerContactRequestDtoDict` | `divvy/models/create_customer_contact_request_dto.py` |
| `CustomerContactResponseDto` | `divvy/models/customer_contact_response_dto.py` |
| `CreateCustomerContactErrorBody` | `divvy/errors/create_customer_contact_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.get_customer

- **Route**: `GET /v3/customers/{customerId}`
- **Server**: `default`
- **Signature**: `def get_customer(customer_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `CustomerResponseDto`
- **Returns (raw)**: `ApiResult[CustomerResponseDto, GetCustomerErrorBody]`
- **Error**: `GetCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerResponseDto` | `divvy/models/customer_response_dto.py` |
| `GetCustomerErrorBody` | `divvy/errors/get_customer_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.get_customer_bank_account

- **Route**: `GET /v3/customers/{customerId}/bank-accounts/{bankAccountId}`
- **Server**: `default`
- **Signature**: `def get_customer_bank_account(customer_id: str, bank_account_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `bank_account_id`
- **Params**: `customer_id` — path `customerId` · `bank_account_id` — path `bankAccountId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `CustomerBankAccountResponseDto`
- **Returns (raw)**: `ApiResult[CustomerBankAccountResponseDto, GetCustomerBankAccountErrorBody]`
- **Error**: `GetCustomerBankAccountErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerBankAccountResponseDto` | `divvy/models/customer_bank_account_response_dto.py` |
| `GetCustomerBankAccountErrorBody` | `divvy/errors/get_customer_bank_account_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.get_customer_contact

- **Route**: `GET /v3/customers/{customerId}/contacts/{contactId}`
- **Server**: `default`
- **Signature**: `def get_customer_contact(customer_id: str, contact_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `contact_id`
- **Params**: `customer_id` — path `customerId` · `contact_id` — path `contactId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `CustomerContactResponseDto`
- **Returns (raw)**: `ApiResult[CustomerContactResponseDto, GetCustomerContactErrorBody]`
- **Error**: `GetCustomerContactErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerContactResponseDto` | `divvy/models/customer_contact_response_dto.py` |
| `GetCustomerContactErrorBody` | `divvy/errors/get_customer_contact_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.list_customer_bank_accounts

- **Route**: `GET /v3/customers/{customerId}/bank-accounts`
- **Server**: `default`
- **Signature**: `def list_customer_bank_accounts(customer_id: str, *, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerId` · `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoCustomerBankAccountResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoCustomerBankAccountResponseDto, ListCustomerBankAccountsErrorBody]`
- **Error**: `ListCustomerBankAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoCustomerBankAccountResponseDto` | `divvy/models/list_response_dto_customer_bank_account_response_dto.py` |
| `ListCustomerBankAccountsErrorBody` | `divvy/errors/list_customer_bank_accounts_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.list_customer_contacts

- **Route**: `GET /v3/customers/{customerId}/contacts`
- **Server**: `default`
- **Signature**: `def list_customer_contacts(customer_id: str, *, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerId` · `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoCustomerContactResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoCustomerContactResponseDto, ListCustomerContactsErrorBody]`
- **Error**: `ListCustomerContactsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoCustomerContactResponseDto` | `divvy/models/list_response_dto_customer_contact_response_dto.py` |
| `ListCustomerContactsErrorBody` | `divvy/errors/list_customer_contacts_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.list_customers

- **Route**: `GET /v3/customers`
- **Server**: `default`
- **Signature**: `def list_customers(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoCustomerResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoCustomerResponseDto, ListCustomersErrorBody]`
- **Error**: `ListCustomersErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoCustomerResponseDto` | `divvy/models/list_response_dto_customer_response_dto.py` |
| `ListCustomersErrorBody` | `divvy/errors/list_customers_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.restore_customer

- **Route**: `POST /v3/customers/{customerId}/restore`
- **Server**: `default`
- **Signature**: `def restore_customer(customer_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`
- **Params**: `customer_id` — path `customerId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `CustomerResponseDto`
- **Returns (raw)**: `ApiResult[CustomerResponseDto, RestoreCustomerErrorBody]`
- **Error**: `RestoreCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerResponseDto` | `divvy/models/customer_response_dto.py` |
| `RestoreCustomerErrorBody` | `divvy/errors/restore_customer_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.restore_customer_contact

- **Route**: `POST /v3/customers/{customerId}/contacts/{contactId}/restore`
- **Server**: `default`
- **Signature**: `def restore_customer_contact(customer_id: str, contact_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `contact_id`
- **Params**: `customer_id` — path `customerId` · `contact_id` — path `contactId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `CustomerContactResponseDto`
- **Returns (raw)**: `ApiResult[CustomerContactResponseDto, RestoreCustomerContactErrorBody]`
- **Error**: `RestoreCustomerContactErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerContactResponseDto` | `divvy/models/customer_contact_response_dto.py` |
| `RestoreCustomerContactErrorBody` | `divvy/errors/restore_customer_contact_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.update_customer

- **Route**: `PATCH /v3/customers/{customerId}`
- **Server**: `default`
- **Signature**: `def update_customer(customer_id: str, body: CustomerUpdateRequestDto | CustomerUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `body`
- **Params**: `customer_id` — path `customerId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `CustomerResponseDto`
- **Returns (raw)**: `ApiResult[CustomerResponseDto, UpdateCustomerErrorBody]`
- **Error**: `UpdateCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomerUpdateRequestDto` | `divvy/models/customer_update_request_dto.py` |
| `CustomerUpdateRequestDtoDict` | `divvy/models/customer_update_request_dto.py` |
| `CustomerResponseDto` | `divvy/models/customer_response_dto.py` |
| `UpdateCustomerErrorBody` | `divvy/errors/update_customer_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.update_customer_bank_account

- **Route**: `PATCH /v3/customers/{customerId}/bank-accounts/{bankAccountId}`
- **Server**: `default`
- **Signature**: `def update_customer_bank_account(customer_id: str, bank_account_id: str, body: UpdateCustomerBankAccountRequestDto | UpdateCustomerBankAccountRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `bank_account_id`, `body`
- **Params**: `customer_id` — path `customerId` · `bank_account_id` — path `bankAccountId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `CustomerBankAccountResponseDto`
- **Returns (raw)**: `ApiResult[CustomerBankAccountResponseDto, UpdateCustomerBankAccountErrorBody]`
- **Error**: `UpdateCustomerBankAccountErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCustomerBankAccountRequestDto` | `divvy/models/update_customer_bank_account_request_dto.py` |
| `UpdateCustomerBankAccountRequestDtoDict` | `divvy/models/update_customer_bank_account_request_dto.py` |
| `CustomerBankAccountResponseDto` | `divvy/models/customer_bank_account_response_dto.py` |
| `UpdateCustomerBankAccountErrorBody` | `divvy/errors/update_customer_bank_account_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.customers.update_customer_contact

- **Route**: `PATCH /v3/customers/{customerId}/contacts/{contactId}`
- **Server**: `default`
- **Signature**: `def update_customer_contact(customer_id: str, contact_id: str, body: UpdateCustomerContactRequestDto | UpdateCustomerContactRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `customer_id`, `contact_id`, `body`
- **Params**: `customer_id` — path `customerId` · `contact_id` — path `contactId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `CustomerContactResponseDto`
- **Returns (raw)**: `ApiResult[CustomerContactResponseDto, UpdateCustomerContactErrorBody]`
- **Error**: `UpdateCustomerContactErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCustomerContactRequestDto` | `divvy/models/update_customer_contact_request_dto.py` |
| `UpdateCustomerContactRequestDtoDict` | `divvy/models/update_customer_contact_request_dto.py` |
| `CustomerContactResponseDto` | `divvy/models/customer_contact_response_dto.py` |
| `UpdateCustomerContactErrorBody` | `divvy/errors/update_customer_contact_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

