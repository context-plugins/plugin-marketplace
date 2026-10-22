<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactions — operations

Accessor: `client.transactions` · Source: `src/resources/transactions.ts` · 10 operations · Request and error types: namespace `Transactions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gr4vy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelTransaction

- **Signature**: `cancelTransaction(request: Transactions.CancelTransactionRequest, options?: RequestOptions): ApiPromise<TransactionCancel, Transactions.CancelTransactionError>`
- **Wire**: `POST /transactions/{transaction_id}/cancel`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionCancel`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `Transactions.CancelTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.CancelTransactionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `TransactionCancel` | `transactionCancelSchema` | `src/models/transaction-cancel.ts` |
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

### captureTransaction

- **Signature**: `captureTransaction(request: Transactions.CaptureTransactionRequest, options?: RequestOptions): ApiPromise<Response200CaptureTransaction, Transactions.CaptureTransactionError>`
- **Wire**: `POST /transactions/{transaction_id}/capture`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field
- **Returns**: `Response200CaptureTransaction`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `Transactions.CaptureTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.CaptureTransactionRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes |
| `prefer` | `header` | — | `Prefer` | no |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `IdempotencyKey2` | no |
| `body` | `body` | — | `TransactionCaptureCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Prefer` | `preferSchema` | `src/models/unions/prefer.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `IdempotencyKey2` | `idempotencyKey2Schema` | `src/models/unions/idempotency-key2.ts` |
| `TransactionCaptureCreate` | `transactionCaptureCreateSchema` | `src/models/transaction-capture-create.ts` |
| `Response200CaptureTransaction` | `response200CaptureTransactionSchema` | `src/models/unions/response200-capture-transaction.ts` |
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

### createTransaction

- **Signature**: `createTransaction(request: Transactions.CreateTransactionRequest, options?: RequestOptions): ApiPromise<Transaction, Transactions.CreateTransactionError>`
- **Wire**: `POST /transactions`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field
- **Returns**: `Transaction`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `Transactions.CreateTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.CreateTransactionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `IdempotencyKey2` | no |
| `body` | `body` | — | `TransactionCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `IdempotencyKey2` | `idempotencyKey2Schema` | `src/models/unions/idempotency-key2.ts` |
| `TransactionCreate` | `transactionCreateSchema` | `src/models/transaction-create.ts` |
| `Transaction` | `transactionSchema` | `src/models/transaction.ts` |
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

### getTransaction

- **Signature**: `getTransaction(request: Transactions.GetTransactionRequest, options?: RequestOptions): ApiPromise<Transaction, Transactions.GetTransactionError>`
- **Wire**: `GET /transactions/{transaction_id}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Transaction`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `Transactions.GetTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.GetTransactionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `Transaction` | `transactionSchema` | `src/models/transaction.ts` |
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

### incrementTransactionAuthorization

- **Signature**: `incrementTransactionAuthorization(request: Transactions.IncrementTransactionAuthorizationRequest, options?: RequestOptions): ApiPromise<TransactionAuthorizationIncrement, Transactions.IncrementTransactionAuthorizationError>`
- **Wire**: `POST /transactions/{transaction_id}/authorization/increment`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field
- **Returns**: `TransactionAuthorizationIncrement`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `Transactions.IncrementTransactionAuthorizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.IncrementTransactionAuthorizationRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `IdempotencyKey2` | no |
| `body` | `body` | — | `TransactionAuthorizationIncrementCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `IdempotencyKey2` | `idempotencyKey2Schema` | `src/models/unions/idempotency-key2.ts` |
| `TransactionAuthorizationIncrementCreate` | `transactionAuthorizationIncrementCreateSchema` | `src/models/transaction-authorization-increment-create.ts` |
| `TransactionAuthorizationIncrement` | `transactionAuthorizationIncrementSchema` | `src/models/transaction-authorization-increment.ts` |
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

### listTransactionEvents

- **Signature**: `listTransactionEvents(request: Transactions.ListTransactionEventsRequest, options?: RequestOptions): ApiPromise<TransactionEvents, Transactions.ListTransactionEventsError>`
- **Wire**: `GET /transactions/{transaction_id}/events`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionEvents`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `Transactions.ListTransactionEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.ListTransactionEventsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes | — |
| `cursor` | `query` | — | `Cursor` | no | — |
| `limit` | `query` | — | `number` | no | `100` |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `TransactionEvents` | `transactionEventsSchema` | `src/models/transaction-events.ts` |
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

### listTransactions

- **Signature**: `listTransactions(request: Transactions.ListTransactionsRequest, options?: RequestOptions): ApiPromise<TransactionSummaries, Transactions.ListTransactionsError>`
- **Wire**: `GET /transactions`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionSummaries`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `Transactions.ListTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.ListTransactionsRequest` (47):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cursor` | `query` | — | `Cursor` | no | — |
| `limit` | `query` | — | `number` | no | `20` |
| `createdAtLte` | `query` | `created_at_lte` | `CreatedAtLte` | no | — |
| `createdAtGte` | `query` | `created_at_gte` | `CreatedAtGte` | no | — |
| `updatedAtLte` | `query` | `updated_at_lte` | `UpdatedAtLte` | no | — |
| `updatedAtGte` | `query` | `updated_at_gte` | `UpdatedAtGte` | no | — |
| `search` | `query` | — | `Search1` | no | — |
| `buyerExternalIdentifier` | `query` | `buyer_external_identifier` | `BuyerExternalIdentifier24` | no | — |
| `buyerId` | `query` | `buyer_id` | `BuyerId27` | no | — |
| `buyerEmailAddress` | `query` | `buyer_email_address` | `BuyerEmailAddress` | no | — |
| `ipAddress` | `query` | `ip_address` | `IpAddress` | no | — |
| `status` | `query` | — | `Status3` | no | — |
| `id` | `query` | — | `Id11` | no | — |
| `paymentServiceTransactionId` | `query` | `payment_service_transaction_id` | `PaymentServiceTransactionId2` | no | — |
| `externalIdentifier` | `query` | `external_identifier` | `ExternalIdentifier42` | no | — |
| `metadata` | `query` | — | `Metadata12` | no | — |
| `amountEq` | `query` | `amount_eq` | `AmountEq` | no | — |
| `amountLte` | `query` | `amount_lte` | `AmountLte` | no | — |
| `amountGte` | `query` | `amount_gte` | `AmountGte` | no | — |
| `currency` | `query` | — | `Currency15` | no | — |
| `country` | `query` | — | `Country14` | no | — |
| `paymentServiceId` | `query` | `payment_service_id` | `PaymentServiceId9` | no | — |
| `paymentMethodId` | `query` | `payment_method_id` | `PaymentMethodId` | no | — |
| `paymentMethodLabel` | `query` | `payment_method_label` | `PaymentMethodLabel` | no | — |
| `paymentMethodScheme` | `query` | `payment_method_scheme` | `PaymentMethodScheme3` | no | — |
| `paymentMethodCountry` | `query` | `payment_method_country` | `PaymentMethodCountry1` | no | — |
| `paymentMethodFingerprint` | `query` | `payment_method_fingerprint` | `PaymentMethodFingerprint` | no | — |
| `method` | `query` | — | `Method11` | no | — |
| `errorCode` | `query` | `error_code` | `ErrorCode6` | no | — |
| `hasRefunds` | `query` | `has_refunds` | `HasRefunds` | no | — |
| `pendingReview` | `query` | `pending_review` | `PendingReview` | no | — |
| `checkoutSessionId` | `query` | `checkout_session_id` | `CheckoutSessionId2` | no | — |
| `paymentLinkId` | `query` | `payment_link_id` | `PaymentLinkId` | no | — |
| `reconciliationId` | `query` | `reconciliation_id` | `ReconciliationId1` | no | — |
| `hasGiftCardRedemptions` | `query` | `has_gift_card_redemptions` | `HasGiftCardRedemptions` | no | — |
| `giftCardId` | `query` | `gift_card_id` | `GiftCardId` | no | — |
| `giftCardLast4` | `query` | `gift_card_last4` | `GiftCardLast4` | no | — |
| `hasSettlements` | `query` | `has_settlements` | `HasSettlements` | no | — |
| `paymentMethodBin` | `query` | `payment_method_bin` | `PaymentMethodBin3` | no | — |
| `paymentSource` | `query` | `payment_source` | `PaymentSource1` | no | — |
| `isSubsequentPayment` | `query` | `is_subsequent_payment` | `IsSubsequentPayment2` | no | — |
| `merchantInitiated` | `query` | `merchant_initiated` | `MerchantInitiated2` | no | — |
| `used3Ds` | `query` | `used_3ds` | `Used3Ds` | no | — |
| `disputed` | `query` | — | `Disputed` | no | — |
| `reauthorizedFromTransactionId` | `query` | `reauthorized_from_transaction_id` | `ReauthorizedFromTransactionId2` | no | — |
| `buyerSearch` | `query` | `buyer_search` | `BuyerSearch` | no | — |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `CreatedAtLte` | `createdAtLteSchema` | `src/models/unions/created-at-lte.ts` |
| `CreatedAtGte` | `createdAtGteSchema` | `src/models/unions/created-at-gte.ts` |
| `UpdatedAtLte` | `updatedAtLteSchema` | `src/models/unions/updated-at-lte.ts` |
| `UpdatedAtGte` | `updatedAtGteSchema` | `src/models/unions/updated-at-gte.ts` |
| `Search1` | `search1Schema` | `src/models/unions/search1.ts` |
| `BuyerExternalIdentifier24` | `buyerExternalIdentifier24Schema` | `src/models/unions/buyer-external-identifier24.ts` |
| `BuyerId27` | `buyerId27Schema` | `src/models/unions/buyer-id27.ts` |
| `BuyerEmailAddress` | `buyerEmailAddressSchema` | `src/models/unions/buyer-email-address.ts` |
| `IpAddress` | `ipAddressSchema` | `src/models/unions/ip-address.ts` |
| `Status3` | `status3Schema` | `src/models/unions/status3.ts` |
| `Id11` | `id11Schema` | `src/models/unions/id11.ts` |
| `PaymentServiceTransactionId2` | `paymentServiceTransactionId2Schema` | `src/models/unions/payment-service-transaction-id2.ts` |
| `ExternalIdentifier42` | `externalIdentifier42Schema` | `src/models/unions/external-identifier42.ts` |
| `Metadata12` | `metadata12Schema` | `src/models/unions/metadata12.ts` |
| `AmountEq` | `amountEqSchema` | `src/models/unions/amount-eq.ts` |
| `AmountLte` | `amountLteSchema` | `src/models/unions/amount-lte.ts` |
| `AmountGte` | `amountGteSchema` | `src/models/unions/amount-gte.ts` |
| `Currency15` | `currency15Schema` | `src/models/unions/currency15.ts` |
| `Country14` | `country14Schema` | `src/models/unions/country14.ts` |
| `PaymentServiceId9` | `paymentServiceId9Schema` | `src/models/unions/payment-service-id9.ts` |
| `PaymentMethodId` | `paymentMethodIdSchema` | `src/models/unions/payment-method-id.ts` |
| `PaymentMethodLabel` | `paymentMethodLabelSchema` | `src/models/unions/payment-method-label.ts` |
| `PaymentMethodScheme3` | `paymentMethodScheme3Schema` | `src/models/unions/payment-method-scheme3.ts` |
| `PaymentMethodCountry1` | `paymentMethodCountry1Schema` | `src/models/unions/payment-method-country1.ts` |
| `PaymentMethodFingerprint` | `paymentMethodFingerprintSchema` | `src/models/unions/payment-method-fingerprint.ts` |
| `Method11` | `method11Schema` | `src/models/unions/method11.ts` |
| `ErrorCode6` | `errorCode6Schema` | `src/models/unions/error-code6.ts` |
| `HasRefunds` | `hasRefundsSchema` | `src/models/unions/has-refunds.ts` |
| `PendingReview` | `pendingReviewSchema` | `src/models/unions/pending-review.ts` |
| `CheckoutSessionId2` | `checkoutSessionId2Schema` | `src/models/unions/checkout-session-id2.ts` |
| `PaymentLinkId` | `paymentLinkIdSchema` | `src/models/unions/payment-link-id.ts` |
| `ReconciliationId1` | `reconciliationId1Schema` | `src/models/unions/reconciliation-id1.ts` |
| `HasGiftCardRedemptions` | `hasGiftCardRedemptionsSchema` | `src/models/unions/has-gift-card-redemptions.ts` |
| `GiftCardId` | `giftCardIdSchema` | `src/models/unions/gift-card-id.ts` |
| `GiftCardLast4` | `giftCardLast4Schema` | `src/models/unions/gift-card-last4.ts` |
| `HasSettlements` | `hasSettlementsSchema` | `src/models/unions/has-settlements.ts` |
| `PaymentMethodBin3` | `paymentMethodBin3Schema` | `src/models/unions/payment-method-bin3.ts` |
| `PaymentSource1` | `paymentSource1Schema` | `src/models/unions/payment-source1.ts` |
| `IsSubsequentPayment2` | `isSubsequentPayment2Schema` | `src/models/unions/is-subsequent-payment2.ts` |
| `MerchantInitiated2` | `merchantInitiated2Schema` | `src/models/unions/merchant-initiated2.ts` |
| `Used3Ds` | `used3DsSchema` | `src/models/unions/used3-ds.ts` |
| `Disputed` | `disputedSchema` | `src/models/unions/disputed.ts` |
| `ReauthorizedFromTransactionId2` | `reauthorizedFromTransactionId2Schema` | `src/models/unions/reauthorized-from-transaction-id2.ts` |
| `BuyerSearch` | `buyerSearchSchema` | `src/models/unions/buyer-search.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `TransactionSummaries` | `transactionSummariesSchema` | `src/models/transaction-summaries.ts` |
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

### syncTransaction

- **Signature**: `syncTransaction(request: Transactions.SyncTransactionRequest, options?: RequestOptions): ApiPromise<Transaction, Transactions.SyncTransactionError>`
- **Wire**: `POST /transactions/{transaction_id}/sync`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Transaction`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `Transactions.SyncTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.SyncTransactionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `Transaction` | `transactionSchema` | `src/models/transaction.ts` |
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

### updateTransaction

- **Signature**: `updateTransaction(request: Transactions.UpdateTransactionRequest, options?: RequestOptions): ApiPromise<Transaction, Transactions.UpdateTransactionError>`
- **Wire**: `PUT /transactions/{transaction_id}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Transaction`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `Transactions.UpdateTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.UpdateTransactionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |
| `body` | `body` | — | `TransactionUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `TransactionUpdate` | `transactionUpdateSchema` | `src/models/transaction-update.ts` |
| `Transaction` | `transactionSchema` | `src/models/transaction.ts` |
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

### voidTransaction

- **Signature**: `voidTransaction(request: Transactions.VoidTransactionRequest, options?: RequestOptions): ApiPromise<Response200VoidTransaction, Transactions.VoidTransactionError>`
- **Wire**: `POST /transactions/{transaction_id}/void`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Response200VoidTransaction`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `Transactions.VoidTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.VoidTransactionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes |
| `prefer` | `header` | — | `Prefer` | no |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `IdempotencyKey2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Prefer` | `preferSchema` | `src/models/unions/prefer.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `IdempotencyKey2` | `idempotencyKey2Schema` | `src/models/unions/idempotency-key2.ts` |
| `Response200VoidTransaction` | `response200VoidTransactionSchema` | `src/models/unions/response200-void-transaction.ts` |
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

