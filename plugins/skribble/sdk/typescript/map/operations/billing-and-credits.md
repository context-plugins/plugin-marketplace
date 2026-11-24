<!-- Generated file — do not edit; regenerated with the SDK. -->

# BillingAndCredits — operations

Accessor: `client.billingAndCredits` · Source: `src/resources/billing-and-credits.ts` · 3 operations · Request and error types: namespace `BillingAndCredits`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBillingCreditsInfos

- **Server**: `defaultSkribbleAdditionalInformationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBillingCreditsInfos(options?: RequestOptions): ApiPromise<BillingCreditInfos, BillingAndCredits.GetBillingCreditsInfosError>`
- **Wire**: `GET /billing/credits/infos`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BillingCreditInfos`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `BillingAndCredits.GetBillingCreditsInfosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemSkribbleAdditionalInformationApi"` [400] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi2"` [404] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi3"` [429] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi4"` [500] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi5"` [503] `ProblemSkribbleAdditionalInformationApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `BillingCreditInfos` | `billingCreditInfosSchema` | `src/models/billing-credit-infos.ts` |
| `ProblemSkribbleAdditionalInformationApi` | `problemSkribbleAdditionalInformationApiSchema` | `src/models/problem-skribble-additional-information-api.ts` |

### getBillingCreditsInvoiced

- **Server**: `defaultSkribbleAdditionalInformationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBillingCreditsInvoiced(request?: BillingAndCredits.GetBillingCreditsInvoicedRequest, options?: RequestOptions): ApiPromise<BillingCreditUsage, BillingAndCredits.GetBillingCreditsInvoicedError>`
- **Wire**: `GET /billing/credits/invoiced`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BillingCreditUsage`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `BillingAndCredits.GetBillingCreditsInvoicedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemSkribbleAdditionalInformationApi"` [400] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi2"` [401] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi3"` [403] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi4"` [404] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi5"` [429] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi6"` [500] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi7"` [503] `ProblemSkribbleAdditionalInformationApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BillingAndCredits.GetBillingCreditsInvoicedRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `period` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillingCreditUsage` | `billingCreditUsageSchema` | `src/models/billing-credit-usage.ts` |
| `ProblemSkribbleAdditionalInformationApi` | `problemSkribbleAdditionalInformationApiSchema` | `src/models/problem-skribble-additional-information-api.ts` |

### getBillingCreditsUsage

- **Server**: `defaultSkribbleAdditionalInformationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBillingCreditsUsage(options?: RequestOptions): ApiPromise<BillingCreditUsage, BillingAndCredits.GetBillingCreditsUsageError>`
- **Wire**: `GET /billing/credits/usage`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BillingCreditUsage`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `BillingAndCredits.GetBillingCreditsUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemSkribbleAdditionalInformationApi"` [400] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi2"` [401] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi3"` [403] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi4"` [404] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi5"` [429] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi6"` [500] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi7"` [503] `ProblemSkribbleAdditionalInformationApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `BillingCreditUsage` | `billingCreditUsageSchema` | `src/models/billing-credit-usage.ts` |
| `ProblemSkribbleAdditionalInformationApi` | `problemSkribbleAdditionalInformationApiSchema` | `src/models/problem-skribble-additional-information-api.ts` |

