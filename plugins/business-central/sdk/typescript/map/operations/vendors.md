<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vendors — operations

Accessor: `client.vendors` · Source: `src/resources/vendors.ts` · 5 operations · Request and error types: namespace `Vendors`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createVendor

- **Signature**: `createVendor(request: Vendors.CreateVendorRequest, options?: RequestOptions): ApiPromise<Vendor, Vendors.CreateVendorError>`
- **Wire**: `POST /companies({company_id})/vendors`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Vendor`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Vendors.CreateVendorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.CreateVendorRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `body` | `body` | — | `VendorCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VendorCreate` | `vendorCreateSchema` | `src/models/vendor-create.ts` |
| `Vendor` | `vendorSchema` | `src/models/vendor.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteVendor

- **Signature**: `deleteVendor(request: Vendors.DeleteVendorRequest, options?: RequestOptions): ApiPromise<undefined, Vendors.DeleteVendorError>`
- **Wire**: `DELETE /companies({company_id})/vendors({vendor_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Vendors.DeleteVendorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.DeleteVendorRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `vendorId` | `path` | `vendor_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getVendor

- **Signature**: `getVendor(request: Vendors.GetVendorRequest, options?: RequestOptions): ApiPromise<Vendor, Vendors.GetVendorError>`
- **Wire**: `GET /companies({company_id})/vendors({vendor_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Vendor`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Vendors.GetVendorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.GetVendorRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `vendorId` | `path` | `vendor_id` | `string` | yes |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Vendor` | `vendorSchema` | `src/models/vendor.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listVendors

- **Signature**: `listVendors(request: Vendors.ListVendorsRequest, options?: RequestOptions): ApiPromise<CompaniesApiVendorsResponse, Vendors.ListVendorsError>`
- **Wire**: `GET /companies({company_id})/vendors`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiVendorsResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Vendors.ListVendorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.ListVendorsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `orderby` | `query` | `$orderby` | `string` | no |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiVendorsResponse` | `companiesApiVendorsResponseSchema` | `src/models/companies-api-vendors-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateVendor

- **Signature**: `updateVendor(request: Vendors.UpdateVendorRequest, options?: RequestOptions): ApiPromise<Vendor, Vendors.UpdateVendorError>`
- **Wire**: `PATCH /companies({company_id})/vendors({vendor_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Vendor`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Vendors.UpdateVendorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vendors.UpdateVendorRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `vendorId` | `path` | `vendor_id` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | yes |
| `body` | `body` | — | `VendorUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VendorUpdate` | `vendorUpdateSchema` | `src/models/vendor-update.ts` |
| `Vendor` | `vendorSchema` | `src/models/vendor.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

