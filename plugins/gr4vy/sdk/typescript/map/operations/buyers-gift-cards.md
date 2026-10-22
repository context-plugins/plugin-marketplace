<!-- Generated file — do not edit; regenerated with the SDK. -->

# BuyersGiftCards — operations

Accessor: `client.buyersGiftCards` · Source: `src/resources/buyers-gift-cards.ts` · 2 operations · Request and error types: namespace `BuyersGiftCards`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gr4vy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteGiftCard

- **Signature**: `deleteGiftCard(request: BuyersGiftCards.DeleteGiftCardRequest, options?: RequestOptions): ApiPromise<undefined, BuyersGiftCards.DeleteGiftCardError>`
- **Wire**: `DELETE /gift-cards/{gift_card_id}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `BuyersGiftCards.DeleteGiftCardError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BuyersGiftCards.DeleteGiftCardRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `giftCardId` | `path` | `gift_card_id` | `string` | yes |
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

### listBuyerGiftCards

- **Signature**: `listBuyerGiftCards(request: BuyersGiftCards.ListBuyerGiftCardsRequest, options?: RequestOptions): ApiPromise<GiftCardSummaries, BuyersGiftCards.ListBuyerGiftCardsError>`
- **Wire**: `GET /buyers/gift-cards`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GiftCardSummaries`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `BuyersGiftCards.ListBuyerGiftCardsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BuyersGiftCards.ListBuyerGiftCardsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `buyerExternalIdentifier` | `query` | `buyer_external_identifier` | `BuyerExternalIdentifier22` | no | — |
| `buyerId` | `query` | `buyer_id` | `BuyerId25` | no | — |
| `sortBy` | `query` | `sort_by` | `SortBy41` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy1` | no | `OrderBy1.Desc` |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuyerExternalIdentifier22` | `buyerExternalIdentifier22Schema` | `src/models/unions/buyer-external-identifier22.ts` |
| `BuyerId25` | `buyerId25Schema` | `src/models/unions/buyer-id25.ts` |
| `SortBy41` | `sortBy41Schema` | `src/models/unions/sort-by41.ts` |
| `OrderBy1` | `orderBy1Schema` | `src/models/order-by1.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `GiftCardSummaries` | `giftCardSummariesSchema` | `src/models/gift-card-summaries.ts` |
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

