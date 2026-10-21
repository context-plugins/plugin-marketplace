<!-- Generated file — do not edit; regenerated with the SDK. -->

# BuyersPaymentMethods — operations

Accessor: `client.buyersPaymentMethods` · Source: `src/resources/buyers-payment-methods.ts` · 1 operation · Request and error types: namespace `BuyersPaymentMethods`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gr4vy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listBuyerPaymentMethods

- **Signature**: `listBuyerPaymentMethods(request: BuyersPaymentMethods.ListBuyerPaymentMethodsRequest, options?: RequestOptions): ApiPromise<PaymentMethodSummaries, BuyersPaymentMethods.ListBuyerPaymentMethodsError>`
- **Wire**: `GET /buyers/payment-methods`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentMethodSummaries`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `BuyersPaymentMethods.ListBuyerPaymentMethodsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BuyersPaymentMethods.ListBuyerPaymentMethodsRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `buyerId` | `query` | `buyer_id` | `BuyerId23` | no | — |
| `buyerExternalIdentifier` | `query` | `buyer_external_identifier` | `BuyerExternalIdentifier20` | no | — |
| `sortBy` | `query` | `sort_by` | `SortBy4` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy` | no | `OrderBy.Desc` |
| `country` | `query` | — | `Country13` | no | — |
| `currency` | `query` | — | `Currency14` | no | — |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuyerId23` | `buyerId23Schema` | `src/models/unions/buyer-id23.ts` |
| `BuyerExternalIdentifier20` | `buyerExternalIdentifier20Schema` | `src/models/unions/buyer-external-identifier20.ts` |
| `SortBy4` | `sortBy4Schema` | `src/models/unions/sort-by4.ts` |
| `OrderBy` | `orderBySchema` | `src/models/order-by.ts` |
| `Country13` | `country13Schema` | `src/models/unions/country13.ts` |
| `Currency14` | `currency14Schema` | `src/models/unions/currency14.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `PaymentMethodSummaries` | `paymentMethodSummariesSchema` | `src/models/payment-method-summaries.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

