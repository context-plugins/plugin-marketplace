# Subscriptions — operations

Accessor: `client.Subscriptions` · Source: `Api/Subscriptions.cs` · 19 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ActivateBillingPlan
- **HTTP**: `POST /v1/billing/plans/{id}/activate` (Default (api-m))
- **Notes**: Activates a plan, by ID.
- **Signature**: `ActivateBillingPlan(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ActivateBillingPlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ActivateSubscription
- **HTTP**: `POST /v1/billing/subscriptions/{id}/activate` (Default (api-m))
- **Notes**: Activates the subscription.
- **Signature**: `ActivateSubscription(string id, ActivateSubscriptionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ActivateSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CancelSubscription
- **HTTP**: `POST /v1/billing/subscriptions/{id}/cancel` (Default (api-m))
- **Notes**: Cancels the subscription.
- **Signature**: `CancelSubscription(string id, CancelSubscriptionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CancelSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CaptureSubscription
- **HTTP**: `POST /v1/billing/subscriptions/{id}/capture` (Default (api-m))
- **Notes**: Captures an authorized payment from the subscriber on the subscription.
- **Signature**: `CaptureSubscription(string id, string? payPalRequestId, CaptureSubscriptionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalRequestId` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionTransactionDetails`
- **Error**: `SdkException<CaptureSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CaptureSubscription1
- **HTTP**: `POST /v1/billing/subscriptions/{id}/capture` (Default (api-m))
- **Notes**: Captures an authorized payment from the subscriber on the subscription.
- **Signature**: `CaptureSubscription1(string id, string? payPalRequestId, CaptureSubscriptionRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalRequestId` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionTransactionDetails`
- **Error**: `SdkException<CaptureSubscription1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateBillingPlan
- **HTTP**: `POST /v1/billing/plans` (Default (api-m))
- **Notes**: Creates a plan that defines pricing and billing cycle details for subscriptions.
- **Signature**: `CreateBillingPlan(string? payPalRequestId, PlanRequest? body, string? prefer = "return=minimal", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalRequestId` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `prefer` = "return=minimal", `requestOptions` = null
- **Returns**: `BillingPlan`
- **Error**: `SdkException<CreateBillingPlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSubscription
- **HTTP**: `POST /v1/billing/subscriptions` (Default (api-m))
- **Notes**: Creates a subscription.
- **Signature**: `CreateSubscription(string? payPalRequestId, string? payPalClientMetadataId, CreateSubscriptionRequest? body, string? prefer = "return=minimal", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `payPalRequestId` — nullable, no default → **must pass explicitly**
  - `payPalClientMetadataId` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `prefer` = "return=minimal", `requestOptions` = null
- **Returns**: `Subscription`
- **Error**: `SdkException<CreateSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeactivateBillingPlan
- **HTTP**: `POST /v1/billing/plans/{id}/deactivate` (Default (api-m))
- **Notes**: Deactivates a plan, by ID.
- **Signature**: `DeactivateBillingPlan(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeactivateBillingPlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBillingPlan
- **HTTP**: `GET /v1/billing/plans/{id}` (Default (api-m))
- **Notes**: Shows details for a plan, by ID.
- **Signature**: `GetBillingPlan(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BillingPlan`
- **Error**: `SdkException<GetBillingPlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSubscription
- **HTTP**: `GET /v1/billing/subscriptions/{id}` (Default (api-m))
- **Notes**: Shows details for a subscription, by ID.
- **Signature**: `GetSubscription(string id, string? fields, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fields` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `fields` ← `fields`
- **Returns**: `Subscription`
- **Error**: `SdkException<GetSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListBillingPlans
- **HTTP**: `GET /v1/billing/plans` (Default (api-m))
- **Notes**: Lists billing plans.
- **Signature**: `ListBillingPlans(string? productId, int? pageSize = 10, int? page = 1, bool? totalRequired = false, string? prefer = "return=minimal", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `productId` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = 10, `page` = 1, `totalRequired` = false, `prefer` = "return=minimal", `requestOptions` = null
- **Query params (wire ← C#)**: `product_id` ← `productId`, `page_size` ← `pageSize`, `page` ← `page`, `total_required` ← `totalRequired`
- **Returns**: `PlanCollection`
- **Error**: `SdkException<ListBillingPlansError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListSubscriptionTransactions
- **HTTP**: `GET /v1/billing/subscriptions/{id}/transactions` (Default (api-m))
- **Notes**: Lists transactions for a subscription.
- **Signature**: `ListSubscriptionTransactions(string id, string startTime, string endTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `start_time` ← `startTime`, `end_time` ← `endTime`
- **Returns**: `TransactionsList`
- **Error**: `SdkException<ListSubscriptionTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [400, 401, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSubscriptions
- **HTTP**: `GET /v1/billing/subscriptions` (Default (api-m))
- **Notes**: List all subscriptions for merchant account.
- **Signature**: `ListSubscriptions(string? planIds, string? statuses, string? createdAfter, string? createdBefore, string? statusUpdatedBefore, string? statusUpdatedAfter, string? filter, IReadOnlyList<string>? customerIds, int? pageSize = 10, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`planIds` … `customerIds`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `pageSize` = 10, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `plan_ids` ← `planIds`, `statuses` ← `statuses`, `created_after` ← `createdAfter`, `created_before` ← `createdBefore`, `status_updated_before` ← `statusUpdatedBefore`, `status_updated_after` ← `statusUpdatedAfter`, `filter` ← `filter`, `page_size` ← `pageSize`, `page` ← `page`, `customer_ids` ← `customerIds`
- **Returns**: `SubscriptionCollection`
- **Error**: `SdkException<ListSubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### PatchBillingPlan
- **HTTP**: `PATCH /v1/billing/plans/{id}` (Default (api-m))
- **Notes**: Updates a plan with the `CREATED` or `ACTIVE` status. For an `INACTIVE` plan, you can make only status updates. You can patch these attributes and objects: Attribute or object Operations description replace payment_preferences.auto_bill_outstanding replace taxes.percentage replace payment_preferences.payment_failure_threshold replace payment_preferences.setup_fee replace payment_preferences.setup_fee_failure_action replace name replace
- **Signature**: `PatchBillingPlan(string id, IReadOnlyList<Patch>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PatchBillingPlanError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchSubscription
- **HTTP**: `PATCH /v1/billing/subscriptions/{id}` (Default (api-m))
- **Notes**: Updates a subscription which could be in ACTIVE or SUSPENDED status. You can override plan level default attributes by providing customised values for plan path in the patch request. You cannot update attributes that have already completed (Example - trial cycles can’t be updated if completed). Once overridden, changes to plan resource will not impact subscription. Any price update will not impact billing cycles within next 10 days (Applicable only for subscriptions funded by PayPal account). Following are the fields eligible for patch. Attribute or object Operations billing_info.outstanding_balance replace custom_id add,replace plan.billing_cycles[@sequence==n]. pricing_scheme.fixed_price add,replace plan.billing_cycles[@sequence==n]. pricing_scheme.tiers replace plan.billing_cycles[@sequence==n]. total_cycles replace plan.payment_preferences. auto_bill_outstanding replace plan.payment_preferences. payment_failure_threshold replace plan.taxes.inclusive add,replace plan.taxes.percentage add,replace shipping_amount add,replace start_time replace subscriber.shipping_address add,replace subscriber.payment_source (for subscriptions funded by card payments) replace
- **Signature**: `PatchSubscription(string id, IReadOnlyList<Patch>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PatchSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReviseSubscription
- **HTTP**: `POST /v1/billing/subscriptions/{id}/revise` (Default (api-m))
- **Notes**: Updates the quantity of the product or service in a subscription. You can also use this method to switch the plan and update the `shipping_amount`, `shipping_address` values for the subscription. This type of update requires the buyer's consent.
- **Signature**: `ReviseSubscription(string id, ModifySubscriptionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ModifySubscriptionResponse`
- **Error**: `SdkException<ReviseSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SuspendSubscription
- **HTTP**: `POST /v1/billing/subscriptions/{id}/suspend` (Default (api-m))
- **Notes**: Suspends the subscription.
- **Signature**: `SuspendSubscription(string id, SuspendSubscription? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SuspendSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SuspendSubscription1
- **HTTP**: `POST /v1/billing/subscriptions/{id}/suspend` (Default (api-m))
- **Notes**: Suspends the subscription.
- **Signature**: `SuspendSubscription1(string id, CancelSubscriptionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SuspendSubscription1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateBillingPlanPricingSchemes
- **HTTP**: `POST /v1/billing/plans/{id}/update-pricing-schemes` (Default (api-m))
- **Notes**: Updates pricing for a plan. For example, you can update a regular billing cycle from $5 per month to $7 per month.
- **Signature**: `UpdateBillingPlanPricingSchemes(string id, UpdatePricingSchemesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateBillingPlanPricingSchemesError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionError(out SubscriptionError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
