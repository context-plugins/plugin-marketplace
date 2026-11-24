<!-- Generated file — do not edit; regenerated with the SDK. -->

# VendorCredits — operations

Accessor: `client.vendorCredits` · Source: `src/resources/vendor-credits.ts` · 10 operations · Request and error types: namespace `VendorCredits`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `divvy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveVendorCredit

- **Signature**: `archiveVendorCredit(request: VendorCredits.ArchiveVendorCreditRequest, options?: RequestOptions): ApiPromise<VendorCreditResponseDto, VendorCredits.ArchiveVendorCreditError>`
- **Wire**: `POST /v3/vendor-credits/{vendorCreditId}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VendorCreditResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `VendorCredits.ArchiveVendorCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VendorCredits.ArchiveVendorCreditRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorCreditId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VendorCreditResponseDto` | `vendorCreditResponseDtoSchema` | `src/models/vendor-credit-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkArchiveVendorCredit

- **Signature**: `bulkArchiveVendorCredit(request: VendorCredits.BulkArchiveVendorCreditRequest, options?: RequestOptions): ApiPromise<VendorCreditBulkResponseDto, VendorCredits.BulkArchiveVendorCreditError>`
- **Wire**: `POST /v3/vendor-credits/bulk/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VendorCreditBulkResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `VendorCredits.BulkArchiveVendorCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VendorCredits.BulkArchiveVendorCreditRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VendorCreditBulkResponseDto` | `vendorCreditBulkResponseDtoSchema` | `src/models/vendor-credit-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkCreateVendorCredit

- **Signature**: `bulkCreateVendorCredit(request: VendorCredits.BulkCreateVendorCreditRequest, options?: RequestOptions): ApiPromise<VendorCreditBulkResponseDto, VendorCredits.BulkCreateVendorCreditError>`
- **Wire**: `POST /v3/vendor-credits/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VendorCreditBulkResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `VendorCredits.BulkCreateVendorCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VendorCredits.BulkCreateVendorCreditRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateVendorCreditRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateVendorCreditRequestDto` | `createVendorCreditRequestDtoSchema` | `src/models/create-vendor-credit-request-dto.ts` |
| `VendorCreditBulkResponseDto` | `vendorCreditBulkResponseDtoSchema` | `src/models/vendor-credit-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkReplaceVendorCredit

- **Signature**: `bulkReplaceVendorCredit(request: VendorCredits.BulkReplaceVendorCreditRequest, options?: RequestOptions): ApiPromise<VendorCreditBulkResponseDto, VendorCredits.BulkReplaceVendorCreditError>`
- **Wire**: `PUT /v3/vendor-credits/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VendorCreditBulkResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `VendorCredits.BulkReplaceVendorCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VendorCredits.BulkReplaceVendorCreditRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `ReplaceVendorCreditWithIdRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReplaceVendorCreditWithIdRequestDto` | `replaceVendorCreditWithIdRequestDtoSchema` | `src/models/replace-vendor-credit-with-id-request-dto.ts` |
| `VendorCreditBulkResponseDto` | `vendorCreditBulkResponseDtoSchema` | `src/models/vendor-credit-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkUpdateVendorCredit

- **Signature**: `bulkUpdateVendorCredit(request: VendorCredits.BulkUpdateVendorCreditRequest, options?: RequestOptions): ApiPromise<VendorCreditBulkResponseDto, VendorCredits.BulkUpdateVendorCreditError>`
- **Wire**: `PATCH /v3/vendor-credits/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VendorCreditBulkResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `VendorCredits.BulkUpdateVendorCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VendorCredits.BulkUpdateVendorCreditRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateVendorCreditWithIdRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateVendorCreditWithIdRequestDto` | `updateVendorCreditWithIdRequestDtoSchema` | `src/models/update-vendor-credit-with-id-request-dto.ts` |
| `VendorCreditBulkResponseDto` | `vendorCreditBulkResponseDtoSchema` | `src/models/vendor-credit-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createVendorCredit

- **Signature**: `createVendorCredit(request: VendorCredits.CreateVendorCreditRequest, options?: RequestOptions): ApiPromise<VendorCreditResponseDto, VendorCredits.CreateVendorCreditError>`
- **Wire**: `POST /v3/vendor-credits`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VendorCreditResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `VendorCredits.CreateVendorCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VendorCredits.CreateVendorCreditRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateVendorCreditRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateVendorCreditRequestDto` | `createVendorCreditRequestDtoSchema` | `src/models/create-vendor-credit-request-dto.ts` |
| `VendorCreditResponseDto` | `vendorCreditResponseDtoSchema` | `src/models/vendor-credit-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getVendorCredit

- **Signature**: `getVendorCredit(request: VendorCredits.GetVendorCreditRequest, options?: RequestOptions): ApiPromise<VendorCreditWithUsageResponseDto, VendorCredits.GetVendorCreditError>`
- **Wire**: `GET /v3/vendor-credits/{vendorCreditId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VendorCreditWithUsageResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `VendorCredits.GetVendorCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VendorCredits.GetVendorCreditRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorCreditId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VendorCreditWithUsageResponseDto` | `vendorCreditWithUsageResponseDtoSchema` | `src/models/vendor-credit-with-usage-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listVendorCredits

- **Signature**: `listVendorCredits(request?: VendorCredits.ListVendorCreditsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoVendorCreditWithUsageResponseDto, VendorCredits.ListVendorCreditsError>`
- **Wire**: `GET /v3/vendor-credits`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoVendorCreditWithUsageResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `VendorCredits.ListVendorCreditsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VendorCredits.ListVendorCreditsRequest` (6):

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
| `ListResponseDtoVendorCreditWithUsageResponseDto` | `listResponseDtoVendorCreditWithUsageResponseDtoSchema` | `src/models/list-response-dto-vendor-credit-with-usage-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### replaceVendorCredit

- **Signature**: `replaceVendorCredit(request: VendorCredits.ReplaceVendorCreditRequest, options?: RequestOptions): ApiPromise<VendorCreditResponseDto, VendorCredits.ReplaceVendorCreditError>`
- **Wire**: `PUT /v3/vendor-credits/{vendorCreditId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VendorCreditResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `VendorCredits.ReplaceVendorCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VendorCredits.ReplaceVendorCreditRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorCreditId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `ReplaceVendorCreditRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReplaceVendorCreditRequestDto` | `replaceVendorCreditRequestDtoSchema` | `src/models/replace-vendor-credit-request-dto.ts` |
| `VendorCreditResponseDto` | `vendorCreditResponseDtoSchema` | `src/models/vendor-credit-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateVendorCredit

- **Signature**: `updateVendorCredit(request: VendorCredits.UpdateVendorCreditRequest, options?: RequestOptions): ApiPromise<VendorCreditResponseDto, VendorCredits.UpdateVendorCreditError>`
- **Wire**: `PATCH /v3/vendor-credits/{vendorCreditId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VendorCreditResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `VendorCredits.UpdateVendorCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VendorCredits.UpdateVendorCreditRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorCreditId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateVendorCreditRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateVendorCreditRequestDto` | `updateVendorCreditRequestDtoSchema` | `src/models/update-vendor-credit-request-dto.ts` |
| `VendorCreditResponseDto` | `vendorCreditResponseDtoSchema` | `src/models/vendor-credit-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

