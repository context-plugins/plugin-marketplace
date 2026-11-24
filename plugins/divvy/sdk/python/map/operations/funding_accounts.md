<!-- Generated file — do not edit; regenerated with the SDK. -->

# FundingAccounts — operations

Accessor: `client.funding_accounts` · Source: `divvy/apis/funding_accounts.py` · 15 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.funding_accounts.archive_bank_account

- **Route**: `POST /v3/funding-accounts/banks/{bankAccountId}/archive`
- **Server**: `default`
- **Signature**: `def archive_bank_account(bank_account_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bank_account_id`
- **Params**: `bank_account_id` — path `bankAccountId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `OrganizationBankAccountResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationBankAccountResponseDto, ArchiveBankAccountErrorBody]`
- **Error**: `ArchiveBankAccountErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationBankAccountResponseDto` | `divvy/models/organization_bank_account_response_dto.py` |
| `ArchiveBankAccountErrorBody` | `divvy/errors/archive_bank_account_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.funding_accounts.archive_bank_account_user

- **Route**: `POST /v3/funding-accounts/banks/users/{bankAccountUserId}/archive`
- **Server**: `default`
- **Signature**: `def archive_bank_account_user(bank_account_user_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bank_account_user_id`
- **Params**: `bank_account_user_id` — path `bankAccountUserId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `OrganizationBankAccountUserResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationBankAccountUserResponseDto, ArchiveBankAccountUserErrorBody]`
- **Error**: `ArchiveBankAccountUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationBankAccountUserResponseDto` | `divvy/models/organization_bank_account_user_response_dto.py` |
| `ArchiveBankAccountUserErrorBody` | `divvy/errors/archive_bank_account_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.funding_accounts.create_bank_account

- **Route**: `POST /v3/funding-accounts/banks`
- **Server**: `default`
- **Signature**: `def create_bank_account(body: OrganizationBankAccountCreateRequestDto | OrganizationBankAccountCreateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `OrganizationBankAccountResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationBankAccountResponseDto, CreateBankAccountErrorBody]`
- **Error**: `CreateBankAccountErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationBankAccountCreateRequestDto` | `divvy/models/organization_bank_account_create_request_dto.py` |
| `OrganizationBankAccountCreateRequestDtoDict` | `divvy/models/organization_bank_account_create_request_dto.py` |
| `OrganizationBankAccountResponseDto` | `divvy/models/organization_bank_account_response_dto.py` |
| `CreateBankAccountErrorBody` | `divvy/errors/create_bank_account_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.funding_accounts.get_bank_account

- **Route**: `GET /v3/funding-accounts/banks/{bankAccountId}`
- **Server**: `default`
- **Signature**: `def get_bank_account(bank_account_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bank_account_id`
- **Params**: `bank_account_id` — path `bankAccountId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `OrganizationBankAccountResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationBankAccountResponseDto, GetBankAccountErrorBody]`
- **Error**: `GetBankAccountErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationBankAccountResponseDto` | `divvy/models/organization_bank_account_response_dto.py` |
| `GetBankAccountErrorBody` | `divvy/errors/get_bank_account_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.funding_accounts.get_card_account

- **Route**: `GET /v3/funding-accounts/cards/{cardAccountId}`
- **Server**: `default`
- **Signature**: `def get_card_account(card_account_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `card_account_id`
- **Params**: `card_account_id` — path `cardAccountId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `CardAccountResponseDto`
- **Returns (raw)**: `ApiResult[CardAccountResponseDto, GetCardAccountErrorBody]`
- **Error**: `GetCardAccountErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CardAccountResponseDto` | `divvy/models/card_account_response_dto.py` |
| `GetCardAccountErrorBody` | `divvy/errors/get_card_account_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.funding_accounts.get_funding_account_permission

- **Route**: `GET /v3/funding-accounts/permissions`
- **Server**: `default`
- **Signature**: `def get_funding_account_permission(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `FundingAccountPermissionResponseDto`
- **Returns (raw)**: `ApiResult[FundingAccountPermissionResponseDto, GetFundingAccountPermissionErrorBody]`
- **Error**: `GetFundingAccountPermissionErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FundingAccountPermissionResponseDto` | `divvy/models/funding_account_permission_response_dto.py` |
| `GetFundingAccountPermissionErrorBody` | `divvy/errors/get_funding_account_permission_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.funding_accounts.list_bank_account_users

- **Route**: `GET /v3/funding-accounts/banks/users`
- **Server**: `default`
- **Signature**: `def list_bank_account_users(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, current_user: bool | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `current_user` — query `currentUser` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoOrganizationBankAccountUserResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoOrganizationBankAccountUserResponseDto, ListBankAccountUsersErrorBody]`
- **Error**: `ListBankAccountUsersErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoOrganizationBankAccountUserResponseDto` | `divvy/models/list_response_dto_organization_bank_account_user_response_dto.py` |
| `ListBankAccountUsersErrorBody` | `divvy/errors/list_bank_account_users_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.funding_accounts.list_bank_accounts

- **Route**: `GET /v3/funding-accounts/banks`
- **Server**: `default`
- **Signature**: `def list_bank_accounts(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoOrganizationBankAccountResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoOrganizationBankAccountResponseDto, ListBankAccountsErrorBody]`
- **Error**: `ListBankAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoOrganizationBankAccountResponseDto` | `divvy/models/list_response_dto_organization_bank_account_response_dto.py` |
| `ListBankAccountsErrorBody` | `divvy/errors/list_bank_accounts_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.funding_accounts.list_card_account_users

- **Route**: `GET /v3/funding-accounts/cards/users`
- **Server**: `default`
- **Signature**: `def list_card_account_users(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, current_user: bool | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `current_user` — query `currentUser` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoOrganizationCardAccountUserResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoOrganizationCardAccountUserResponseDto, ListCardAccountUsersErrorBody]`
- **Error**: `ListCardAccountUsersErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoOrganizationCardAccountUserResponseDto` | `divvy/models/list_response_dto_organization_card_account_user_response_dto.py` |
| `ListCardAccountUsersErrorBody` | `divvy/errors/list_card_account_users_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.funding_accounts.list_card_funding_purposes

- **Route**: `GET /v3/funding-accounts/cards/funding-purposes`
- **Server**: `default`
- **Signature**: `def list_card_funding_purposes(vendor_id: str, brand: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`, `brand`
- **Params**: `vendor_id` — query `vendorId` · `brand` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListCardFundingPurposesResponseDto`
- **Returns (raw)**: `ApiResult[ListCardFundingPurposesResponseDto, ListCardFundingPurposesErrorBody]`
- **Error**: `ListCardFundingPurposesErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListCardFundingPurposesResponseDto` | `divvy/models/list_card_funding_purposes_response_dto.py` |
| `ListCardFundingPurposesErrorBody` | `divvy/errors/list_card_funding_purposes_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.funding_accounts.list_payable_ap_cards

- **Route**: `GET /v3/funding-accounts/ap-cards`
- **Server**: `default`
- **Signature**: `def list_payable_ap_cards(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `list[ApCardResponseDto]`
- **Returns (raw)**: `ApiResult[list[ApCardResponseDto], ListPayableApCardsErrorBody]`
- **Error**: `ListPayableApCardsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApCardResponseDto` | `divvy/models/ap_card_response_dto.py` |
| `ListPayableApCardsErrorBody` | `divvy/errors/list_payable_ap_cards_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.funding_accounts.list_payable_card_accounts

- **Route**: `GET /v3/funding-accounts/cards`
- **Server**: `default`
- **Signature**: `def list_payable_card_accounts(card_user_status: CardUserStatusOrStr, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `card_user_status`
- **Params**: `card_user_status` — query `cardUserStatus` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListPayableCardAccountsResponseDto`
- **Returns (raw)**: `ApiResult[ListPayableCardAccountsResponseDto, ListPayableCardAccountsErrorBody]`
- **Error**: `ListPayableCardAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CardUserStatusOrStr` | `divvy/models/enums/card_user_status.py` |
| `ListPayableCardAccountsResponseDto` | `divvy/models/list_payable_card_accounts_response_dto.py` |
| `ListPayableCardAccountsErrorBody` | `divvy/errors/list_payable_card_accounts_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.funding_accounts.nominate_bank_account_user

- **Route**: `POST /v3/funding-accounts/banks/users/nominate`
- **Server**: `default`
- **Signature**: `def nominate_bank_account_user(body: NominateBankAccountUserRequestDto | NominateBankAccountUserRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `StatusDto`
- **Returns (raw)**: `ApiResult[StatusDto, NominateBankAccountUserErrorBody]`
- **Error**: `NominateBankAccountUserErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `NominateBankAccountUserRequestDto` | `divvy/models/nominate_bank_account_user_request_dto.py` |
| `NominateBankAccountUserRequestDtoDict` | `divvy/models/nominate_bank_account_user_request_dto.py` |
| `StatusDto` | `divvy/models/status_dto.py` |
| `NominateBankAccountUserErrorBody` | `divvy/errors/nominate_bank_account_user_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.funding_accounts.update_bank_account

- **Route**: `PATCH /v3/funding-accounts/banks/{bankAccountId}`
- **Server**: `default`
- **Signature**: `def update_bank_account(bank_account_id: str, body: OrganizationBankAccountUpdateRequestDto | OrganizationBankAccountUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bank_account_id`, `body`
- **Params**: `bank_account_id` — path `bankAccountId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `OrganizationBankAccountResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationBankAccountResponseDto, UpdateBankAccountErrorBody]`
- **Error**: `UpdateBankAccountErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationBankAccountUpdateRequestDto` | `divvy/models/organization_bank_account_update_request_dto.py` |
| `OrganizationBankAccountUpdateRequestDtoDict` | `divvy/models/organization_bank_account_update_request_dto.py` |
| `OrganizationBankAccountResponseDto` | `divvy/models/organization_bank_account_response_dto.py` |
| `UpdateBankAccountErrorBody` | `divvy/errors/update_bank_account_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.funding_accounts.verify_bank_account

- **Route**: `POST /v3/funding-accounts/banks/{bankAccountId}/verify`
- **Server**: `default`
- **Signature**: `def verify_bank_account(bank_account_id: str, body: BankAccountVerifyRequestDto | BankAccountVerifyRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bank_account_id`, `body`
- **Params**: `bank_account_id` — path `bankAccountId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `BankAccountVerifyResponseDto`
- **Returns (raw)**: `ApiResult[BankAccountVerifyResponseDto, VerifyBankAccountErrorBody]`
- **Error**: `VerifyBankAccountErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BankAccountVerifyRequestDto` | `divvy/models/bank_account_verify_request_dto.py` |
| `BankAccountVerifyRequestDtoDict` | `divvy/models/bank_account_verify_request_dto.py` |
| `BankAccountVerifyResponseDto` | `divvy/models/bank_account_verify_response_dto.py` |
| `VerifyBankAccountErrorBody` | `divvy/errors/verify_bank_account_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

