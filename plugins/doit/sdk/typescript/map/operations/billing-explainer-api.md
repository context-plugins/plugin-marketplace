<!-- Generated file — do not edit; regenerated with the SDK. -->

# BillingExplainerApi — operations

Accessor: `client.billingExplainerApi` · Source: `src/resources/billing-explainer-api.ts` · 2 operations · Request and error types: namespace `BillingExplainerApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBillingExplainerPerPayer

- **Signature**: `getBillingExplainerPerPayer(request: BillingExplainerApi.GetBillingExplainerPerPayerRequest, options?: RequestOptions): ApiPromise<BillingExplainerCustomer, BillingExplainerApi.GetBillingExplainerPerPayerError>`
- **Wire**: `GET /billing/v1/billing-explainers/{invoiceMonth}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BillingExplainerCustomer`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `BillingExplainerApi.GetBillingExplainerPerPayerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillingExplainerApi.GetBillingExplainerPerPayerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `invoiceMonth` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillingExplainerCustomer` | `billingExplainerCustomerSchema` | `src/models/billing-explainer-customer.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getEntityInvoiceExplainer

- **Signature**: `getEntityInvoiceExplainer(request: BillingExplainerApi.GetEntityInvoiceExplainerRequest, options?: RequestOptions): ApiPromise<EntityInvoiceExplainer, BillingExplainerApi.GetEntityInvoiceExplainerError>`
- **Wire**: `GET /billing/v1/billing-profiles/{billingProfileId}/billing-explainers/{invoiceNumber}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityInvoiceExplainer`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `BillingExplainerApi.GetEntityInvoiceExplainerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillingExplainerApi.GetEntityInvoiceExplainerRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `billingProfileId` | `path` | — | `string` | yes |
| `invoiceNumber` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityInvoiceExplainer` | `entityInvoiceExplainerSchema` | `src/models/entity-invoice-explainer.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

