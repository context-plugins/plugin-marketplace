<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentLinksApi — operations

Accessor: `client.paymentLinksApi` · Source: `src/resources/payment-links-api.ts` · 4 operations · Request and error types: namespace `PaymentLinksApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gr4vy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addPaymentLink

- **Signature**: `addPaymentLink(request: PaymentLinksApi.AddPaymentLinkRequest, options?: RequestOptions): ApiPromise<PaymentLink, PaymentLinksApi.AddPaymentLinkError>`
- **Wire**: `POST /payment-links`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentLink`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `PaymentLinksApi.AddPaymentLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinksApi.AddPaymentLinkRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |
| `body` | `body` | — | `PaymentLinkCreate1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `PaymentLinkCreate1` | `paymentLinkCreate1Schema` | `src/models/payment-link-create1.ts` |
| `PaymentLink` | `paymentLinkSchema` | `src/models/payment-link.ts` |
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

### expirePaymentLink

- **Signature**: `expirePaymentLink(request: PaymentLinksApi.ExpirePaymentLinkRequest, options?: RequestOptions): ApiPromise<undefined, PaymentLinksApi.ExpirePaymentLinkError>`
- **Wire**: `POST /payment-links/{payment_link_id}/expire`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `PaymentLinksApi.ExpirePaymentLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinksApi.ExpirePaymentLinkRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentLinkId` | `path` | `payment_link_id` | `string` | yes |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
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

### getPaymentLink

- **Signature**: `getPaymentLink(request: PaymentLinksApi.GetPaymentLinkRequest, options?: RequestOptions): ApiPromise<PaymentLink, PaymentLinksApi.GetPaymentLinkError>`
- **Wire**: `GET /payment-links/{payment_link_id}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentLink`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `PaymentLinksApi.GetPaymentLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinksApi.GetPaymentLinkRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentLinkId` | `path` | `payment_link_id` | `string` | yes |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `PaymentLink` | `paymentLinkSchema` | `src/models/payment-link.ts` |
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

### listPaymentLinks

- **Signature**: `listPaymentLinks(request: PaymentLinksApi.ListPaymentLinksRequest, options?: RequestOptions): ApiPromise<PaymentLinks, PaymentLinksApi.ListPaymentLinksError>`
- **Wire**: `GET /payment-links`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentLinks`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `PaymentLinksApi.ListPaymentLinksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinksApi.ListPaymentLinksRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cursor` | `query` | — | `Cursor` | no | — |
| `limit` | `query` | — | `number` | no | `20` |
| `createdAtLte` | `query` | `created_at_lte` | `CreatedAtLte3` | no | — |
| `createdAtGte` | `query` | `created_at_gte` | `CreatedAtGte3` | no | — |
| `updatedAtLte` | `query` | `updated_at_lte` | `UpdatedAtLte2` | no | — |
| `updatedAtGte` | `query` | `updated_at_gte` | `UpdatedAtGte2` | no | — |
| `currency` | `query` | — | `Currency17` | no | — |
| `amountEq` | `query` | `amount_eq` | `AmountEq1` | no | — |
| `amountGte` | `query` | `amount_gte` | `AmountGte1` | no | — |
| `amountLte` | `query` | `amount_lte` | `AmountLte1` | no | — |
| `status` | `query` | — | `Status6` | no | — |
| `buyerSearch` | `query` | `buyer_search` | `BuyerSearch` | no | — |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `CreatedAtLte3` | `createdAtLte3Schema` | `src/models/unions/created-at-lte3.ts` |
| `CreatedAtGte3` | `createdAtGte3Schema` | `src/models/unions/created-at-gte3.ts` |
| `UpdatedAtLte2` | `updatedAtLte2Schema` | `src/models/unions/updated-at-lte2.ts` |
| `UpdatedAtGte2` | `updatedAtGte2Schema` | `src/models/unions/updated-at-gte2.ts` |
| `Currency17` | `currency17Schema` | `src/models/unions/currency17.ts` |
| `AmountEq1` | `amountEq1Schema` | `src/models/unions/amount-eq1.ts` |
| `AmountGte1` | `amountGte1Schema` | `src/models/unions/amount-gte1.ts` |
| `AmountLte1` | `amountLte1Schema` | `src/models/unions/amount-lte1.ts` |
| `Status6` | `status6Schema` | `src/models/unions/status6.ts` |
| `BuyerSearch` | `buyerSearchSchema` | `src/models/unions/buyer-search.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `PaymentLinks` | `paymentLinksSchema` | `src/models/payment-links.ts` |
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

