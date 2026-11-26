<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerPayments — operations

Accessor: `client.customerPayments` · Source: `src/resources/customer-payments.ts` · 1 operation · Request and error types: namespace `CustomerPayments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listCustomerPaymentJournals

- **Signature**: `listCustomerPaymentJournals(request: CustomerPayments.ListCustomerPaymentJournalsRequest, options?: RequestOptions): ApiPromise<CompaniesApiCustomerPaymentJournalsResponse, CustomerPayments.ListCustomerPaymentJournalsError>`
- **Wire**: `GET /companies({company_id})/customerPaymentJournals`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiCustomerPaymentJournalsResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `CustomerPayments.ListCustomerPaymentJournalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomerPayments.ListCustomerPaymentJournalsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiCustomerPaymentJournalsResponse` | `companiesApiCustomerPaymentJournalsResponseSchema` | `src/models/companies-api-customer-payment-journals-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

