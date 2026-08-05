# SubscriptionGroupInvoiceAccount — operations

Accessor: `client.SubscriptionGroupInvoiceAccount` · Source: `Api/SubscriptionGroupInvoiceAccount.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSubscriptionGroupPrepayment
- **HTTP**: `POST /subscription_groups/{uid}/prepayments.json` (Production)
- **Notes**: Adds a prepayment for a subscription group. This endpoint requires an `amount`, `details`, `method`, and `memo`. On success, the prepayment will be added to the group's prepayment balance.
- **Signature**: `CreateSubscriptionGroupPrepayment(string uid, SubscriptionGroupPrepaymentRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionGroupPrepaymentResponse`
- **Error**: `SdkException<CreateSubscriptionGroupPrepaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeductSubscriptionGroupServiceCredit
- **HTTP**: `POST /subscription_groups/{uid}/service_credit_deductions.json` (Production)
- **Notes**: Deducts service credit for a subscription group. Credit will be deducted from the group in the amount specified in the request body.
- **Signature**: `DeductSubscriptionGroupServiceCredit(string uid, DeductServiceCreditRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ServiceCredit`
- **Error**: `SdkException<DeductSubscriptionGroupServiceCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueSubscriptionGroupServiceCredit
- **HTTP**: `POST /subscription_groups/{uid}/service_credits.json` (Production)
- **Notes**: Issues service credit for a subscription group. Credit will be added to the group in the amount specified in the request body. The credit will be applied to group member invoices as they are generated.
- **Signature**: `IssueSubscriptionGroupServiceCredit(string uid, IssueServiceCreditRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ServiceCreditResponse`
- **Error**: `SdkException<IssueSubscriptionGroupServiceCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListPrepaymentsForSubscriptionGroup
- **HTTP**: `GET /subscription_groups/{uid}/prepayments.json` (Production)
- **Notes**: Lists a subscription group's prepayments.
- **Signature**: `ListPrepaymentsForSubscriptionGroup(string uid, ListPrepaymentsFilter? filter, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `filter` ← `filter`
- **Returns**: `ListSubscriptionGroupPrepaymentResponse`
- **Error**: `SdkException<ListPrepaymentsForSubscriptionGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
