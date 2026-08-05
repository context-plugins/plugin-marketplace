# SubscriptionInvoiceAccount — operations

Accessor: `client.SubscriptionInvoiceAccount` · Source: `Api/SubscriptionInvoiceAccount.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreatePrepayment
- **HTTP**: `POST /subscriptions/{subscription_id}/prepayments.json` (Production)
- **Notes**: Creates a prepayment for a subscription. In order to specify a prepayment made against a subscription, specify the `amount, memo, details, method`. When the `method` specified is `"credit_card_on_file"`, the prepayment amount will be collected using the default credit card payment profile and applied to the prepayment account balance. This is especially useful for manual replenishment of prepaid subscriptions. Note that passing `amount_in_cents` is now allowed. 3D Secure (3DS) Authentication post-authentication flow When a payment requires 3DS Authentication to adhere to Strong Customer Authentication (SCA), the request enters a post-authentication flow where a 422 Unprocessable Entity status is returned with an action_link that will direct the customer through 3DS Authentication. See the 3D Secure Post-Authentication Flow article in the product documentation to learn how to manage the redirect flow.
- **Signature**: `CreatePrepayment(int subscriptionId, CreatePrepaymentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreatePrepaymentResponse`
- **Error**: `SdkException<CreatePrepaymentApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetCreatePrepaymentErrorResponse(out CreatePrepaymentErrorResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeductServiceCredit
- **HTTP**: `POST /subscriptions/{subscription_id}/service_credit_deductions.json` (Production)
- **Notes**: Deducts a service credit from the subscription in the specified amount. The credit amount being deducted must be equal to or less than the current credit balance.
- **Signature**: `DeductServiceCredit(int subscriptionId, DeductServiceCreditRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeductServiceCreditApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeductServiceCreditErrorResponse(out DeductServiceCreditErrorResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueServiceCredit
- **HTTP**: `POST /subscriptions/{subscription_id}/service_credits.json` (Production)
- **Notes**: Adds a service credit to the subscription in the specified amount. The credit is subsequently applied to the next generated invoice.
- **Signature**: `IssueServiceCredit(int subscriptionId, IssueServiceCreditRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ServiceCredit`
- **Error**: `SdkException<IssueServiceCreditApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetIssueServiceCreditErrorResponse(out IssueServiceCreditErrorResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListPrepayments
- **HTTP**: `GET /subscriptions/{subscription_id}/prepayments.json` (Production)
- **Notes**: Lists a subscription's prepayments.
- **Signature**: `ListPrepayments(int subscriptionId, ListPrepaymentsFilter? filter, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `filter` ← `filter`
- **Returns**: `PrepaymentsResponse`
- **Error**: `SdkException<ListPrepaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ListServiceCredits
- **HTTP**: `GET /subscriptions/{subscription_id}/service_credits/list.json` (Production)
- **Notes**: Lists a subscription's service credits.
- **Signature**: `ListServiceCredits(int subscriptionId, SortingDirection? direction, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `direction` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `direction` ← `direction`
- **Returns**: `ListServiceCreditsResponse`
- **Error**: `SdkException<ListServiceCreditsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadAccountBalances
- **HTTP**: `GET /subscriptions/{subscription_id}/account_balances.json` (Production)
- **Notes**: Returns the `balance_in_cents` of the Subscription's Pending Discount, Service Credit, and Prepayment accounts, as well as the sum of the Subscription's open, payable invoices.
- **Signature**: `ReadAccountBalances(int subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountBalances`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RefundPrepayment
- **HTTP**: `POST /subscriptions/{subscription_id}/prepayments/{prepayment_id}/refunds.json` (Production)
- **Notes**: Refunds a prepayment applied to a subscription, either fully or partially. The `prepayment_id` will be the account transaction ID of the original payment. The prepayment must have some amount remaining in order to be refunded. The amount may be passed either as a decimal, with `amount`, or an integer in cents, with `amount_in_cents`.
- **Signature**: `RefundPrepayment(int subscriptionId, long prepaymentId, RefundPrepaymentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PrepaymentResponse`
- **Error**: `SdkException<RefundPrepaymentApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetRefundPrepaymentBaseErrorsResponse1(out RefundPrepaymentBaseErrorsResponse1)` [400] · `TryGetString(out string)` [404] · `TryGetRefundPrepaymentErrorResponse(out RefundPrepaymentErrorResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
