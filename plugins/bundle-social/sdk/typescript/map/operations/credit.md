<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credit — operations

Accessor: `client.credit` · Source: `src/resources/credit.ts` · 2 operations · Request and error types: namespace `Credit`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bundle-social`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### creditGetCreditBalance

- **Signature**: `creditGetCreditBalance(options?: RequestOptions): ApiPromise<ApiV1BillingCreditsBalanceResponse, Credit.CreditGetCreditBalanceError>`
- **Wire**: `GET /api/v1/billing/credits/balance`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1BillingCreditsBalanceResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Credit.CreditGetCreditBalanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1BillingCreditsBalance400Error1"` [400] `ApiV1BillingCreditsBalance400Error1` · `"apiV1BillingCreditsBalance401Error1"` [401] `ApiV1BillingCreditsBalance401Error1` · `"apiV1BillingCreditsBalance403Error1"` [403] `ApiV1BillingCreditsBalance403Error1` · `"apiV1BillingCreditsBalance404Error1"` [404] `ApiV1BillingCreditsBalance404Error1` · `"apiV1BillingCreditsBalance429Error1"` [429] `ApiV1BillingCreditsBalance429Error1` · `"apiV1BillingCreditsBalance500Error1"` [500] `ApiV1BillingCreditsBalance500Error1` · `"apiV1BillingCreditsBalance502Error1"` [502] `ApiV1BillingCreditsBalance502Error1` · `"apiV1BillingCreditsBalance503Error1"` [503] `ApiV1BillingCreditsBalance503Error1` · `"apiV1BillingCreditsBalance504Error1"` [504] `ApiV1BillingCreditsBalance504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1BillingCreditsBalanceResponse` | `apiV1BillingCreditsBalanceResponseSchema` | `src/models/api-v1-billing-credits-balance-response.ts` |
| `ApiV1BillingCreditsBalance400Error1` | `apiV1BillingCreditsBalance400Error1Schema` | `src/models/api-v1-billing-credits-balance400-error1.ts` |
| `ApiV1BillingCreditsBalance401Error1` | `apiV1BillingCreditsBalance401Error1Schema` | `src/models/api-v1-billing-credits-balance401-error1.ts` |
| `ApiV1BillingCreditsBalance403Error1` | `apiV1BillingCreditsBalance403Error1Schema` | `src/models/api-v1-billing-credits-balance403-error1.ts` |
| `ApiV1BillingCreditsBalance404Error1` | `apiV1BillingCreditsBalance404Error1Schema` | `src/models/api-v1-billing-credits-balance404-error1.ts` |
| `ApiV1BillingCreditsBalance429Error1` | `apiV1BillingCreditsBalance429Error1Schema` | `src/models/api-v1-billing-credits-balance429-error1.ts` |
| `ApiV1BillingCreditsBalance500Error1` | `apiV1BillingCreditsBalance500Error1Schema` | `src/models/api-v1-billing-credits-balance500-error1.ts` |
| `ApiV1BillingCreditsBalance502Error1` | `apiV1BillingCreditsBalance502Error1Schema` | `src/models/api-v1-billing-credits-balance502-error1.ts` |
| `ApiV1BillingCreditsBalance503Error1` | `apiV1BillingCreditsBalance503Error1Schema` | `src/models/api-v1-billing-credits-balance503-error1.ts` |
| `ApiV1BillingCreditsBalance504Error1` | `apiV1BillingCreditsBalance504Error1Schema` | `src/models/api-v1-billing-credits-balance504-error1.ts` |

### creditQuoteBillableUsage

- **Signature**: `creditQuoteBillableUsage(request?: Credit.CreditQuoteBillableUsageRequest, options?: RequestOptions): ApiPromise<ApiV1BillingBillableUsageQuoteResponse, Credit.CreditQuoteBillableUsageError>`
- **Wire**: `POST /api/v1/billing/billable-usage/quote`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1BillingBillableUsageQuoteResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Credit.CreditQuoteBillableUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1BillingBillableUsageQuote400Error1"` [400] `ApiV1BillingBillableUsageQuote400Error1` · `"apiV1BillingBillableUsageQuote401Error1"` [401] `ApiV1BillingBillableUsageQuote401Error1` · `"apiV1BillingBillableUsageQuote403Error1"` [403] `ApiV1BillingBillableUsageQuote403Error1` · `"apiV1BillingBillableUsageQuote404Error1"` [404] `ApiV1BillingBillableUsageQuote404Error1` · `"apiV1BillingBillableUsageQuote429Error1"` [429] `ApiV1BillingBillableUsageQuote429Error1` · `"apiV1BillingBillableUsageQuote500Error1"` [500] `ApiV1BillingBillableUsageQuote500Error1` · `"apiV1BillingBillableUsageQuote502Error1"` [502] `ApiV1BillingBillableUsageQuote502Error1` · `"apiV1BillingBillableUsageQuote503Error1"` [503] `ApiV1BillingBillableUsageQuote503Error1` · `"apiV1BillingBillableUsageQuote504Error1"` [504] `ApiV1BillingBillableUsageQuote504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Credit.CreditQuoteBillableUsageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1BillingBillableUsageQuoteRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1BillingBillableUsageQuoteRequest` | `apiV1BillingBillableUsageQuoteRequestSchema` | `src/models/api-v1-billing-billable-usage-quote-request.ts` |
| `ApiV1BillingBillableUsageQuoteResponse` | `apiV1BillingBillableUsageQuoteResponseSchema` | `src/models/api-v1-billing-billable-usage-quote-response.ts` |
| `ApiV1BillingBillableUsageQuote400Error1` | `apiV1BillingBillableUsageQuote400Error1Schema` | `src/models/api-v1-billing-billable-usage-quote400-error1.ts` |
| `ApiV1BillingBillableUsageQuote401Error1` | `apiV1BillingBillableUsageQuote401Error1Schema` | `src/models/api-v1-billing-billable-usage-quote401-error1.ts` |
| `ApiV1BillingBillableUsageQuote403Error1` | `apiV1BillingBillableUsageQuote403Error1Schema` | `src/models/api-v1-billing-billable-usage-quote403-error1.ts` |
| `ApiV1BillingBillableUsageQuote404Error1` | `apiV1BillingBillableUsageQuote404Error1Schema` | `src/models/api-v1-billing-billable-usage-quote404-error1.ts` |
| `ApiV1BillingBillableUsageQuote429Error1` | `apiV1BillingBillableUsageQuote429Error1Schema` | `src/models/api-v1-billing-billable-usage-quote429-error1.ts` |
| `ApiV1BillingBillableUsageQuote500Error1` | `apiV1BillingBillableUsageQuote500Error1Schema` | `src/models/api-v1-billing-billable-usage-quote500-error1.ts` |
| `ApiV1BillingBillableUsageQuote502Error1` | `apiV1BillingBillableUsageQuote502Error1Schema` | `src/models/api-v1-billing-billable-usage-quote502-error1.ts` |
| `ApiV1BillingBillableUsageQuote503Error1` | `apiV1BillingBillableUsageQuote503Error1Schema` | `src/models/api-v1-billing-billable-usage-quote503-error1.ts` |
| `ApiV1BillingBillableUsageQuote504Error1` | `apiV1BillingBillableUsageQuote504Error1Schema` | `src/models/api-v1-billing-billable-usage-quote504-error1.ts` |

