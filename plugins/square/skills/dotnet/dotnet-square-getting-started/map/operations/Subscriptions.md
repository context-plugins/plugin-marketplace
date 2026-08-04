# Subscriptions — operations

Accessor: `client.Subscriptions` · Source: `Api/Subscriptions.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BulkSwapPlan
- **HTTP**: `POST /v2/subscriptions/bulk-swap-plan` (Default (connect))
- **Notes**: Schedules a plan variation change for all active subscriptions under a given plan variation. For more information, see Swap Subscription Plan Variations .
- **Signature**: `BulkSwapPlan(BulkSwapPlanRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkSwapPlanResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CancelSubscription
- **HTTP**: `POST /v2/subscriptions/{subscription_id}/cancel` (Default (connect))
- **Notes**: Schedules a `CANCEL` action to cancel an active subscription. This sets the `canceled_date` field to the end of the active billing period. After this date, the subscription status changes from ACTIVE to CANCELED.
- **Signature**: `CancelSubscription(string subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CancelSubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChangeBillingAnchorDate
- **HTTP**: `POST /v2/subscriptions/{subscription_id}/billing-anchor` (Default (connect))
- **Notes**: Changes the billing anchor date for a subscription.
- **Signature**: `ChangeBillingAnchorDate(string subscriptionId, ChangeBillingAnchorDateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChangeBillingAnchorDateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateSubscription
- **HTTP**: `POST /v2/subscriptions` (Default (connect))
- **Notes**: Enrolls a customer in a subscription. If you provide a card on file in the request, Square charges the card for the subscription. Otherwise, Square sends an invoice to the customer's email address. The subscription starts immediately, unless the request includes the optional `start_date`. Each individual subscription is associated with a particular location. For more information, see Create a subscription .
- **Signature**: `CreateSubscription(CreateSubscriptionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateSubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSubscriptionAction
- **HTTP**: `DELETE /v2/subscriptions/{subscription_id}/actions/{action_id}` (Default (connect))
- **Notes**: Deletes a scheduled action for a subscription.
- **Signature**: `DeleteSubscriptionAction(string subscriptionId, string actionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteSubscriptionActionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSubscriptionEvents
- **HTTP**: `GET /v2/subscriptions/{subscription_id}/events` (Default (connect))
- **Notes**: Lists all events for a specific subscription.
- **Signature**: `ListSubscriptionEvents(string subscriptionId, string? cursor, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `ListSubscriptionEventsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PauseSubscription
- **HTTP**: `POST /v2/subscriptions/{subscription_id}/pause` (Default (connect))
- **Notes**: Schedules a `PAUSE` action to pause an active subscription.
- **Signature**: `PauseSubscription(string subscriptionId, PauseSubscriptionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PauseSubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ResumeSubscription
- **HTTP**: `POST /v2/subscriptions/{subscription_id}/resume` (Default (connect))
- **Notes**: Schedules a `RESUME` action to resume a paused or a deactivated subscription.
- **Signature**: `ResumeSubscription(string subscriptionId, ResumeSubscriptionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResumeSubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveSubscription
- **HTTP**: `GET /v2/subscriptions/{subscription_id}` (Default (connect))
- **Notes**: Retrieves a specific subscription.
- **Signature**: `RetrieveSubscription(string subscriptionId, string? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `RetrieveSubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchSubscriptions
- **HTTP**: `POST /v2/subscriptions/search` (Default (connect))
- **Notes**: Searches for subscriptions. Results are ordered chronologically by subscription creation date. If the request specifies more than one location ID, the endpoint orders the result by location ID, and then by creation date within each location. If no locations are given in the query, all locations are searched. You can also optionally specify `customer_ids` to search by customer. If left unset, all customers associated with the specified locations are returned. If the request specifies customer IDs, the endpoint orders results first by location, within location by customer ID, and within customer by subscription creation date.
- **Signature**: `SearchSubscriptions(SearchSubscriptionsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchSubscriptionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SwapPlan
- **HTTP**: `POST /v2/subscriptions/{subscription_id}/swap-plan` (Default (connect))
- **Notes**: Schedules a `SWAP_PLAN` action to swap a subscription plan variation in an existing subscription. For more information, see Swap Subscription Plan Variations .
- **Signature**: `SwapPlan(string subscriptionId, SwapPlanRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SwapPlanResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSubscription
- **HTTP**: `PUT /v2/subscriptions/{subscription_id}` (Default (connect))
- **Notes**: Updates a subscription by modifying or clearing `subscription` field values. To clear a field, set its value to `null`.
- **Signature**: `UpdateSubscription(string subscriptionId, UpdateSubscriptionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateSubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
