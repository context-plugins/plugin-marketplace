<!-- Generated file — do not edit; regenerated with the SDK. -->

# CardDetails — operations

Accessor: `client.cardDetails` · Source: `src/resources/card-details.ts` · 1 operation · Request and error types: namespace `CardDetails`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gr4vy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCardDetails

- **Signature**: `getCardDetails(request: CardDetails.GetCardDetailsRequest, options?: RequestOptions): ApiPromise<CardDetail, CardDetails.GetCardDetailsError>`
- **Wire**: `GET /card-details`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CardDetail`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `CardDetails.GetCardDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CardDetails.GetCardDetailsRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `currency` | `query` | — | `string` | yes |
| `bin` | `query` | — | `Bin2` | no |
| `paymentMethodId` | `query` | `payment_method_id` | `PaymentMethodId1` | no |
| `country` | `query` | — | `Country15` | no |
| `amount` | `query` | — | `Amount12` | no |
| `intent` | `query` | — | `Intent11` | no |
| `isSubsequentPayment` | `query` | `is_subsequent_payment` | `IsSubsequentPayment3` | no |
| `merchantInitiated` | `query` | `merchant_initiated` | `MerchantInitiated3` | no |
| `metadata` | `query` | — | `Metadata13` | no |
| `paymentSource` | `query` | `payment_source` | `PaymentSource2` | no |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Bin2` | `bin2Schema` | `src/models/unions/bin2.ts` |
| `PaymentMethodId1` | `paymentMethodId1Schema` | `src/models/unions/payment-method-id1.ts` |
| `Country15` | `country15Schema` | `src/models/unions/country15.ts` |
| `Amount12` | `amount12Schema` | `src/models/unions/amount12.ts` |
| `Intent11` | `intent11Schema` | `src/models/unions/intent11.ts` |
| `IsSubsequentPayment3` | `isSubsequentPayment3Schema` | `src/models/unions/is-subsequent-payment3.ts` |
| `MerchantInitiated3` | `merchantInitiated3Schema` | `src/models/unions/merchant-initiated3.ts` |
| `Metadata13` | `metadata13Schema` | `src/models/unions/metadata13.ts` |
| `PaymentSource2` | `paymentSource2Schema` | `src/models/unions/payment-source2.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `CardDetail` | `cardDetailSchema` | `src/models/card-detail.ts` |
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

