<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentTerms — operations

Accessor: `client.paymentTerms` · Source: `src/resources/payment-terms.ts` · 1 operation · Request and error types: namespace `PaymentTerms`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listPaymentTerms

- **Signature**: `listPaymentTerms(request: PaymentTerms.ListPaymentTermsRequest, options?: RequestOptions): ApiPromise<CompaniesApiPaymentTermsResponse, PaymentTerms.ListPaymentTermsError>`
- **Wire**: `GET /companies({company_id})/paymentTerms`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiPaymentTermsResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `PaymentTerms.ListPaymentTermsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentTerms.ListPaymentTermsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiPaymentTermsResponse` | `companiesApiPaymentTermsResponseSchema` | `src/models/companies-api-payment-terms-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

