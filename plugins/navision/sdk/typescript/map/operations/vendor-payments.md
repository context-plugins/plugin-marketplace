<!-- Generated file — do not edit; regenerated with the SDK. -->

# VendorPayments — operations

Accessor: `client.vendorPayments` · Source: `src/resources/vendor-payments.ts` · 1 operation · Request and error types: namespace `VendorPayments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listVendorPaymentJournals

- **Signature**: `listVendorPaymentJournals(request: VendorPayments.ListVendorPaymentJournalsRequest, options?: RequestOptions): ApiPromise<CompaniesApiVendorPaymentJournalsResponse, VendorPayments.ListVendorPaymentJournalsError>`
- **Wire**: `GET /companies({company_id})/vendorPaymentJournals`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiVendorPaymentJournalsResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `VendorPayments.ListVendorPaymentJournalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VendorPayments.ListVendorPaymentJournalsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiVendorPaymentJournalsResponse` | `companiesApiVendorPaymentJournalsResponseSchema` | `src/models/companies-api-vendor-payment-journals-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

