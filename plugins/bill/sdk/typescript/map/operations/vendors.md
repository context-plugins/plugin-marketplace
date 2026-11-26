<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vendors — operations

Accessor: `client.vendors` · Source: `src/resources/vendors.ts` · 12 operations · Request and error types: namespace `Vendors`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveVendor

- **Signature**: `archiveVendor(request: Vendors.ArchiveVendorRequest, options?: RequestOptions): ApiPromise<VendorResponseDto, Vendors.ArchiveVendorError>`
- **Wire**: `POST /v3/vendors/{vendorId}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VendorResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Vendors.ArchiveVendorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.ArchiveVendorRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VendorResponseDto` | `vendorResponseDtoSchema` | `src/models/vendor-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createBulkVendor

- **Signature**: `createBulkVendor(request: Vendors.CreateBulkVendorRequest, options?: RequestOptions): ApiPromise<BulkVendorResponseDto, Vendors.CreateBulkVendorError>`
- **Wire**: `POST /v3/vendors/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkVendorResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Vendors.CreateBulkVendorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.CreateBulkVendorRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `VendorRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VendorRequestDto` | `vendorRequestDtoSchema` | `src/models/vendor-request-dto.ts` |
| `BulkVendorResponseDto` | `bulkVendorResponseDtoSchema` | `src/models/bulk-vendor-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createVendor

- **Signature**: `createVendor(request: Vendors.CreateVendorRequest, options?: RequestOptions): ApiPromise<VendorResponseDto, Vendors.CreateVendorError>`
- **Wire**: `POST /v3/vendors`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VendorResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Vendors.CreateVendorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.CreateVendorRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `VendorRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VendorRequestDto` | `vendorRequestDtoSchema` | `src/models/vendor-request-dto.ts` |
| `VendorResponseDto` | `vendorResponseDtoSchema` | `src/models/vendor-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createVendorBankAccount

- **Signature**: `createVendorBankAccount(request: Vendors.CreateVendorBankAccountRequest, options?: RequestOptions): ApiPromise<VendorBankAccountResponseDto, Vendors.CreateVendorBankAccountError>`
- **Wire**: `POST /v3/vendors/{vendorId}/bank-account`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VendorBankAccountResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Vendors.CreateVendorBankAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.CreateVendorBankAccountRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `VendorBankAccountRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VendorBankAccountRequestDto` | `vendorBankAccountRequestDtoSchema` | `src/models/vendor-bank-account-request-dto.ts` |
| `VendorBankAccountResponseDto` | `vendorBankAccountResponseDtoSchema` | `src/models/vendor-bank-account-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### deleteVendorBankAccount

- **Signature**: `deleteVendorBankAccount(request: Vendors.DeleteVendorBankAccountRequest, options?: RequestOptions): ApiPromise<undefined, Vendors.DeleteVendorBankAccountError>`
- **Wire**: `DELETE /v3/vendors/{vendorId}/bank-account`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BillError` with `kind: "api"`, an instance of `Vendors.DeleteVendorBankAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.DeleteVendorBankAccountRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getConfigurationByVendorId

- **Signature**: `getConfigurationByVendorId(request: Vendors.GetConfigurationByVendorIdRequest, options?: RequestOptions): ApiPromise<VendorConfigurationResponseDto, Vendors.GetConfigurationByVendorIdError>`
- **Wire**: `GET /v3/vendors/{vendorId}/configuration`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VendorConfigurationResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Vendors.GetConfigurationByVendorIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.GetConfigurationByVendorIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VendorConfigurationResponseDto` | `vendorConfigurationResponseDtoSchema` | `src/models/vendor-configuration-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getIntlConfig

- **Signature**: `getIntlConfig(request: Vendors.GetIntlConfigRequest, options?: RequestOptions): ApiPromise<IntlPmtsConfigurationResponseDto, Vendors.GetIntlConfigError>`
- **Wire**: `GET /v3/vendors/configuration/international-payments`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IntlPmtsConfigurationResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Vendors.GetIntlConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.GetIntlConfigRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `CountryCode` | yes |
| `billCurrency` | `query` | `CurrencyCode` | yes |
| `accountType` | `query` | `AccountTypeRequest` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CountryCode` | `countryCodeSchema` | `src/models/country-code.ts` |
| `CurrencyCode` | `currencyCodeSchema` | `src/models/currency-code.ts` |
| `AccountTypeRequest` | `accountTypeRequestSchema` | `src/models/account-type-request.ts` |
| `IntlPmtsConfigurationResponseDto` | `intlPmtsConfigurationResponseDtoSchema` | `src/models/intl-pmts-configuration-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getVendor

- **Signature**: `getVendor(request: Vendors.GetVendorRequest, options?: RequestOptions): ApiPromise<VendorResponseDto, Vendors.GetVendorError>`
- **Wire**: `GET /v3/vendors/{vendorId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VendorResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Vendors.GetVendorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.GetVendorRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VendorResponseDto` | `vendorResponseDtoSchema` | `src/models/vendor-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getVendorBankAccount

- **Signature**: `getVendorBankAccount(request: Vendors.GetVendorBankAccountRequest, options?: RequestOptions): ApiPromise<VendorBankAccountResponseDto, Vendors.GetVendorBankAccountError>`
- **Wire**: `GET /v3/vendors/{vendorId}/bank-account`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VendorBankAccountResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Vendors.GetVendorBankAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.GetVendorBankAccountRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VendorBankAccountResponseDto` | `vendorBankAccountResponseDtoSchema` | `src/models/vendor-bank-account-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listVendors

- **Signature**: `listVendors(request?: Vendors.ListVendorsRequest, options?: RequestOptions): ApiPromise<ListVendorResponseDto, Vendors.ListVendorsError>`
- **Wire**: `GET /v3/vendors`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListVendorResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Vendors.ListVendorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.ListVendorsRequest` (6):

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
| `ListVendorResponseDto` | `listVendorResponseDtoSchema` | `src/models/list-vendor-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreVendor

- **Signature**: `restoreVendor(request: Vendors.RestoreVendorRequest, options?: RequestOptions): ApiPromise<VendorResponseDto, Vendors.RestoreVendorError>`
- **Wire**: `POST /v3/vendors/{vendorId}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VendorResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Vendors.RestoreVendorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.RestoreVendorRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VendorResponseDto` | `vendorResponseDtoSchema` | `src/models/vendor-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateVendor

- **Signature**: `updateVendor(request: Vendors.UpdateVendorRequest, options?: RequestOptions): ApiPromise<VendorResponseDto, Vendors.UpdateVendorError>`
- **Wire**: `PATCH /v3/vendors/{vendorId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VendorResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Vendors.UpdateVendorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.UpdateVendorRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `VendorUpdateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VendorUpdateRequestDto` | `vendorUpdateRequestDtoSchema` | `src/models/vendor-update-request-dto.ts` |
| `VendorResponseDto` | `vendorResponseDtoSchema` | `src/models/vendor-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

