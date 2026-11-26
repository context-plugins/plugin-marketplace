<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.customers` · Source: `src/resources/customers.ts` · 18 operations · Request and error types: namespace `Customers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveCustomer

- **Signature**: `archiveCustomer(request: Customers.ArchiveCustomerRequest, options?: RequestOptions): ApiPromise<CustomerResponseDto, Customers.ArchiveCustomerError>`
- **Wire**: `POST /v3/customers/{customerId}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.ArchiveCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.ArchiveCustomerRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerResponseDto` | `customerResponseDtoSchema` | `src/models/customer-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### archiveCustomerBankAccount

- **Signature**: `archiveCustomerBankAccount(request: Customers.ArchiveCustomerBankAccountRequest, options?: RequestOptions): ApiPromise<CustomerBankAccountResponseDto, Customers.ArchiveCustomerBankAccountError>`
- **Wire**: `POST /v3/customers/{customerId}/bank-accounts/{bankAccountId}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerBankAccountResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.ArchiveCustomerBankAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.ArchiveCustomerBankAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `bankAccountId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerBankAccountResponseDto` | `customerBankAccountResponseDtoSchema` | `src/models/customer-bank-account-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### archiveCustomerContact

- **Signature**: `archiveCustomerContact(request: Customers.ArchiveCustomerContactRequest, options?: RequestOptions): ApiPromise<CustomerContactResponseDto, Customers.ArchiveCustomerContactError>`
- **Wire**: `POST /v3/customers/{customerId}/contacts/{contactId}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerContactResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.ArchiveCustomerContactError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.ArchiveCustomerContactRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `contactId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerContactResponseDto` | `customerContactResponseDtoSchema` | `src/models/customer-contact-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### authorizeToChargeCustomer

- **Signature**: `authorizeToChargeCustomer(request: Customers.AuthorizeToChargeCustomerRequest, options?: RequestOptions): ApiPromise<ChargeAuthorizationResponseDto, Customers.AuthorizeToChargeCustomerError>`
- **Wire**: `POST /v3/customers/{customerId}/charge-authorization`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChargeAuthorizationResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.AuthorizeToChargeCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.AuthorizeToChargeCustomerRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `ChargeAuthorizationRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChargeAuthorizationRequestDto` | `chargeAuthorizationRequestDtoSchema` | `src/models/charge-authorization-request-dto.ts` |
| `ChargeAuthorizationResponseDto` | `chargeAuthorizationResponseDtoSchema` | `src/models/charge-authorization-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createCustomer

- **Signature**: `createCustomer(request: Customers.CreateCustomerRequest, options?: RequestOptions): ApiPromise<CustomerResponseDto, Customers.CreateCustomerError>`
- **Wire**: `POST /v3/customers`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.CreateCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.CreateCustomerRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CustomerCreateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerCreateRequestDto` | `customerCreateRequestDtoSchema` | `src/models/customer-create-request-dto.ts` |
| `CustomerResponseDto` | `customerResponseDtoSchema` | `src/models/customer-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createCustomerBankAccount

- **Signature**: `createCustomerBankAccount(request: Customers.CreateCustomerBankAccountRequest, options?: RequestOptions): ApiPromise<CustomerBankAccountResponseDto, Customers.CreateCustomerBankAccountError>`
- **Wire**: `POST /v3/customers/{customerId}/bank-accounts`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerBankAccountResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.CreateCustomerBankAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.CreateCustomerBankAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateCustomerBankAccountRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomerBankAccountRequestDto` | `createCustomerBankAccountRequestDtoSchema` | `src/models/create-customer-bank-account-request-dto.ts` |
| `CustomerBankAccountResponseDto` | `customerBankAccountResponseDtoSchema` | `src/models/customer-bank-account-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createCustomerContact

- **Signature**: `createCustomerContact(request: Customers.CreateCustomerContactRequest, options?: RequestOptions): ApiPromise<CustomerContactResponseDto, Customers.CreateCustomerContactError>`
- **Wire**: `POST /v3/customers/{customerId}/contacts`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerContactResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.CreateCustomerContactError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.CreateCustomerContactRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateCustomerContactRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomerContactRequestDto` | `createCustomerContactRequestDtoSchema` | `src/models/create-customer-contact-request-dto.ts` |
| `CustomerContactResponseDto` | `customerContactResponseDtoSchema` | `src/models/customer-contact-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getCustomer

- **Signature**: `getCustomer(request: Customers.GetCustomerRequest, options?: RequestOptions): ApiPromise<CustomerResponseDto, Customers.GetCustomerError>`
- **Wire**: `GET /v3/customers/{customerId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.GetCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetCustomerRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerResponseDto` | `customerResponseDtoSchema` | `src/models/customer-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getCustomerBankAccount

- **Signature**: `getCustomerBankAccount(request: Customers.GetCustomerBankAccountRequest, options?: RequestOptions): ApiPromise<CustomerBankAccountResponseDto, Customers.GetCustomerBankAccountError>`
- **Wire**: `GET /v3/customers/{customerId}/bank-accounts/{bankAccountId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerBankAccountResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.GetCustomerBankAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetCustomerBankAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `bankAccountId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerBankAccountResponseDto` | `customerBankAccountResponseDtoSchema` | `src/models/customer-bank-account-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getCustomerContact

- **Signature**: `getCustomerContact(request: Customers.GetCustomerContactRequest, options?: RequestOptions): ApiPromise<CustomerContactResponseDto, Customers.GetCustomerContactError>`
- **Wire**: `GET /v3/customers/{customerId}/contacts/{contactId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerContactResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.GetCustomerContactError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetCustomerContactRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `contactId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerContactResponseDto` | `customerContactResponseDtoSchema` | `src/models/customer-contact-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listCustomerBankAccounts

- **Signature**: `listCustomerBankAccounts(request: Customers.ListCustomerBankAccountsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoCustomerBankAccountResponseDto, Customers.ListCustomerBankAccountsError>`
- **Wire**: `GET /v3/customers/{customerId}/bank-accounts`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoCustomerBankAccountResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.ListCustomerBankAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.ListCustomerBankAccountsRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoCustomerBankAccountResponseDto` | `listResponseDtoCustomerBankAccountResponseDtoSchema` | `src/models/list-response-dto-customer-bank-account-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listCustomerContacts

- **Signature**: `listCustomerContacts(request: Customers.ListCustomerContactsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoCustomerContactResponseDto, Customers.ListCustomerContactsError>`
- **Wire**: `GET /v3/customers/{customerId}/contacts`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoCustomerContactResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.ListCustomerContactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.ListCustomerContactsRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoCustomerContactResponseDto` | `listResponseDtoCustomerContactResponseDtoSchema` | `src/models/list-response-dto-customer-contact-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listCustomers

- **Signature**: `listCustomers(request?: Customers.ListCustomersRequest, options?: RequestOptions): ApiPromise<ListResponseDtoCustomerResponseDto, Customers.ListCustomersError>`
- **Wire**: `GET /v3/customers`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoCustomerResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.ListCustomersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.ListCustomersRequest` (6):

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
| `ListResponseDtoCustomerResponseDto` | `listResponseDtoCustomerResponseDtoSchema` | `src/models/list-response-dto-customer-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreCustomer

- **Signature**: `restoreCustomer(request: Customers.RestoreCustomerRequest, options?: RequestOptions): ApiPromise<CustomerResponseDto, Customers.RestoreCustomerError>`
- **Wire**: `POST /v3/customers/{customerId}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.RestoreCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.RestoreCustomerRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerResponseDto` | `customerResponseDtoSchema` | `src/models/customer-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreCustomerContact

- **Signature**: `restoreCustomerContact(request: Customers.RestoreCustomerContactRequest, options?: RequestOptions): ApiPromise<CustomerContactResponseDto, Customers.RestoreCustomerContactError>`
- **Wire**: `POST /v3/customers/{customerId}/contacts/{contactId}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerContactResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.RestoreCustomerContactError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.RestoreCustomerContactRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `contactId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerContactResponseDto` | `customerContactResponseDtoSchema` | `src/models/customer-contact-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateCustomer

- **Signature**: `updateCustomer(request: Customers.UpdateCustomerRequest, options?: RequestOptions): ApiPromise<CustomerResponseDto, Customers.UpdateCustomerError>`
- **Wire**: `PATCH /v3/customers/{customerId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.UpdateCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.UpdateCustomerRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CustomerUpdateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerUpdateRequestDto` | `customerUpdateRequestDtoSchema` | `src/models/customer-update-request-dto.ts` |
| `CustomerResponseDto` | `customerResponseDtoSchema` | `src/models/customer-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateCustomerBankAccount

- **Signature**: `updateCustomerBankAccount(request: Customers.UpdateCustomerBankAccountRequest, options?: RequestOptions): ApiPromise<CustomerBankAccountResponseDto, Customers.UpdateCustomerBankAccountError>`
- **Wire**: `PATCH /v3/customers/{customerId}/bank-accounts/{bankAccountId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerBankAccountResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.UpdateCustomerBankAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.UpdateCustomerBankAccountRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `bankAccountId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateCustomerBankAccountRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomerBankAccountRequestDto` | `updateCustomerBankAccountRequestDtoSchema` | `src/models/update-customer-bank-account-request-dto.ts` |
| `CustomerBankAccountResponseDto` | `customerBankAccountResponseDtoSchema` | `src/models/customer-bank-account-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateCustomerContact

- **Signature**: `updateCustomerContact(request: Customers.UpdateCustomerContactRequest, options?: RequestOptions): ApiPromise<CustomerContactResponseDto, Customers.UpdateCustomerContactError>`
- **Wire**: `PATCH /v3/customers/{customerId}/contacts/{contactId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerContactResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Customers.UpdateCustomerContactError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.UpdateCustomerContactRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `contactId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateCustomerContactRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomerContactRequestDto` | `updateCustomerContactRequestDtoSchema` | `src/models/update-customer-contact-request-dto.ts` |
| `CustomerContactResponseDto` | `customerContactResponseDtoSchema` | `src/models/customer-contact-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

