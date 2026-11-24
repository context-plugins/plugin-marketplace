<!-- Generated file — do not edit; regenerated with the SDK. -->

# FundingAccounts — operations

Accessor: `client.fundingAccounts` · Source: `src/resources/funding-accounts.ts` · 15 operations · Request and error types: namespace `FundingAccounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `divvy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveBankAccount

- **Signature**: `archiveBankAccount(request: FundingAccounts.ArchiveBankAccountRequest, options?: RequestOptions): ApiPromise<OrganizationBankAccountResponseDto, FundingAccounts.ArchiveBankAccountError>`
- **Wire**: `POST /v3/funding-accounts/banks/{bankAccountId}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationBankAccountResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `FundingAccounts.ArchiveBankAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingAccounts.ArchiveBankAccountRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `bankAccountId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationBankAccountResponseDto` | `organizationBankAccountResponseDtoSchema` | `src/models/organization-bank-account-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### archiveBankAccountUser

- **Signature**: `archiveBankAccountUser(request: FundingAccounts.ArchiveBankAccountUserRequest, options?: RequestOptions): ApiPromise<OrganizationBankAccountUserResponseDto, FundingAccounts.ArchiveBankAccountUserError>`
- **Wire**: `POST /v3/funding-accounts/banks/users/{bankAccountUserId}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationBankAccountUserResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `FundingAccounts.ArchiveBankAccountUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingAccounts.ArchiveBankAccountUserRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `bankAccountUserId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationBankAccountUserResponseDto` | `organizationBankAccountUserResponseDtoSchema` | `src/models/organization-bank-account-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createBankAccount

- **Signature**: `createBankAccount(request: FundingAccounts.CreateBankAccountRequest, options?: RequestOptions): ApiPromise<OrganizationBankAccountResponseDto, FundingAccounts.CreateBankAccountError>`
- **Wire**: `POST /v3/funding-accounts/banks`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationBankAccountResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `FundingAccounts.CreateBankAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingAccounts.CreateBankAccountRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `OrganizationBankAccountCreateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationBankAccountCreateRequestDto` | `organizationBankAccountCreateRequestDtoSchema` | `src/models/organization-bank-account-create-request-dto.ts` |
| `OrganizationBankAccountResponseDto` | `organizationBankAccountResponseDtoSchema` | `src/models/organization-bank-account-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getBankAccount

- **Signature**: `getBankAccount(request: FundingAccounts.GetBankAccountRequest, options?: RequestOptions): ApiPromise<OrganizationBankAccountResponseDto, FundingAccounts.GetBankAccountError>`
- **Wire**: `GET /v3/funding-accounts/banks/{bankAccountId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrganizationBankAccountResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `FundingAccounts.GetBankAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingAccounts.GetBankAccountRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `bankAccountId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationBankAccountResponseDto` | `organizationBankAccountResponseDtoSchema` | `src/models/organization-bank-account-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getCardAccount

- **Signature**: `getCardAccount(request: FundingAccounts.GetCardAccountRequest, options?: RequestOptions): ApiPromise<CardAccountResponseDto, FundingAccounts.GetCardAccountError>`
- **Wire**: `GET /v3/funding-accounts/cards/{cardAccountId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CardAccountResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `FundingAccounts.GetCardAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingAccounts.GetCardAccountRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cardAccountId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CardAccountResponseDto` | `cardAccountResponseDtoSchema` | `src/models/card-account-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getFundingAccountPermission

- **Signature**: `getFundingAccountPermission(request?: FundingAccounts.GetFundingAccountPermissionRequest, options?: RequestOptions): ApiPromise<FundingAccountPermissionResponseDto, FundingAccounts.GetFundingAccountPermissionError>`
- **Wire**: `GET /v3/funding-accounts/permissions`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FundingAccountPermissionResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `FundingAccounts.GetFundingAccountPermissionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingAccounts.GetFundingAccountPermissionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FundingAccountPermissionResponseDto` | `fundingAccountPermissionResponseDtoSchema` | `src/models/funding-account-permission-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listBankAccountUsers

- **Signature**: `listBankAccountUsers(request?: FundingAccounts.ListBankAccountUsersRequest, options?: RequestOptions): ApiPromise<ListResponseDtoOrganizationBankAccountUserResponseDto, FundingAccounts.ListBankAccountUsersError>`
- **Wire**: `GET /v3/funding-accounts/banks/users`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoOrganizationBankAccountUserResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `FundingAccounts.ListBankAccountUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingAccounts.ListBankAccountUsersRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `currentUser` | `query` | `boolean` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoOrganizationBankAccountUserResponseDto` | `listResponseDtoOrganizationBankAccountUserResponseDtoSchema` | `src/models/list-response-dto-organization-bank-account-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listBankAccounts

- **Signature**: `listBankAccounts(request?: FundingAccounts.ListBankAccountsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoOrganizationBankAccountResponseDto, FundingAccounts.ListBankAccountsError>`
- **Wire**: `GET /v3/funding-accounts/banks`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoOrganizationBankAccountResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `FundingAccounts.ListBankAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingAccounts.ListBankAccountsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoOrganizationBankAccountResponseDto` | `listResponseDtoOrganizationBankAccountResponseDtoSchema` | `src/models/list-response-dto-organization-bank-account-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listCardAccountUsers

- **Signature**: `listCardAccountUsers(request?: FundingAccounts.ListCardAccountUsersRequest, options?: RequestOptions): ApiPromise<ListResponseDtoOrganizationCardAccountUserResponseDto, FundingAccounts.ListCardAccountUsersError>`
- **Wire**: `GET /v3/funding-accounts/cards/users`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoOrganizationCardAccountUserResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `FundingAccounts.ListCardAccountUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingAccounts.ListCardAccountUsersRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `currentUser` | `query` | `boolean` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoOrganizationCardAccountUserResponseDto` | `listResponseDtoOrganizationCardAccountUserResponseDtoSchema` | `src/models/list-response-dto-organization-card-account-user-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listCardFundingPurposes

- **Signature**: `listCardFundingPurposes(request: FundingAccounts.ListCardFundingPurposesRequest, options?: RequestOptions): ApiPromise<ListCardFundingPurposesResponseDto, FundingAccounts.ListCardFundingPurposesError>`
- **Wire**: `GET /v3/funding-accounts/cards/funding-purposes`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCardFundingPurposesResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `FundingAccounts.ListCardFundingPurposesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingAccounts.ListCardFundingPurposesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `query` | `string` | yes |
| `brand` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCardFundingPurposesResponseDto` | `listCardFundingPurposesResponseDtoSchema` | `src/models/list-card-funding-purposes-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listPayableApCards

- **Signature**: `listPayableApCards(request?: FundingAccounts.ListPayableApCardsRequest, options?: RequestOptions): ApiPromise<ApCardResponseDto[], FundingAccounts.ListPayableApCardsError>`
- **Wire**: `GET /v3/funding-accounts/ap-cards`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApCardResponseDto[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DivvyError` with `kind: "api"`, an instance of `FundingAccounts.ListPayableApCardsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingAccounts.ListPayableApCardsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApCardResponseDto` | `apCardResponseDtoSchema` | `src/models/ap-card-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listPayableCardAccounts

- **Signature**: `listPayableCardAccounts(request: FundingAccounts.ListPayableCardAccountsRequest, options?: RequestOptions): ApiPromise<ListPayableCardAccountsResponseDto, FundingAccounts.ListPayableCardAccountsError>`
- **Wire**: `GET /v3/funding-accounts/cards`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPayableCardAccountsResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `FundingAccounts.ListPayableCardAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingAccounts.ListPayableCardAccountsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cardUserStatus` | `query` | `CardUserStatus` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CardUserStatus` | `cardUserStatusSchema` | `src/models/card-user-status.ts` |
| `ListPayableCardAccountsResponseDto` | `listPayableCardAccountsResponseDtoSchema` | `src/models/list-payable-card-accounts-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### nominateBankAccountUser

- **Signature**: `nominateBankAccountUser(request: FundingAccounts.NominateBankAccountUserRequest, options?: RequestOptions): ApiPromise<StatusDto, FundingAccounts.NominateBankAccountUserError>`
- **Wire**: `POST /v3/funding-accounts/banks/users/nominate`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatusDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `FundingAccounts.NominateBankAccountUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingAccounts.NominateBankAccountUserRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `NominateBankAccountUserRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NominateBankAccountUserRequestDto` | `nominateBankAccountUserRequestDtoSchema` | `src/models/nominate-bank-account-user-request-dto.ts` |
| `StatusDto` | `statusDtoSchema` | `src/models/status-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateBankAccount

- **Signature**: `updateBankAccount(request: FundingAccounts.UpdateBankAccountRequest, options?: RequestOptions): ApiPromise<OrganizationBankAccountResponseDto, FundingAccounts.UpdateBankAccountError>`
- **Wire**: `PATCH /v3/funding-accounts/banks/{bankAccountId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationBankAccountResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `FundingAccounts.UpdateBankAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingAccounts.UpdateBankAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `bankAccountId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `OrganizationBankAccountUpdateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationBankAccountUpdateRequestDto` | `organizationBankAccountUpdateRequestDtoSchema` | `src/models/organization-bank-account-update-request-dto.ts` |
| `OrganizationBankAccountResponseDto` | `organizationBankAccountResponseDtoSchema` | `src/models/organization-bank-account-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### verifyBankAccount

- **Signature**: `verifyBankAccount(request: FundingAccounts.VerifyBankAccountRequest, options?: RequestOptions): ApiPromise<BankAccountVerifyResponseDto, FundingAccounts.VerifyBankAccountError>`
- **Wire**: `POST /v3/funding-accounts/banks/{bankAccountId}/verify`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BankAccountVerifyResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `FundingAccounts.VerifyBankAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingAccounts.VerifyBankAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `bankAccountId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `BankAccountVerifyRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BankAccountVerifyRequestDto` | `bankAccountVerifyRequestDtoSchema` | `src/models/bank-account-verify-request-dto.ts` |
| `BankAccountVerifyResponseDto` | `bankAccountVerifyResponseDtoSchema` | `src/models/bank-account-verify-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

