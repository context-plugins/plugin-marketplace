# SubscriptionStatus — operations

Accessor: `client.SubscriptionStatus` · Source: `Api/SubscriptionStatus.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelDelayedCancellation
- **HTTP**: `DELETE /subscriptions/{subscription_id}/delayed_cancel.json` (Production)
- **Notes**: Removes the delayed cancellation from a subscription, ensuring it is not canceled at the end of the current period. The request will reset the `cancel_at_end_of_period` flag to `false`. This endpoint is idempotent. If the subscription was not set to cancel in the future, removing the delayed cancellation has no effect and the call will be successful.
- **Signature**: `CancelDelayedCancellation(int subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DelayedCancellationResponse`
- **Error**: `SdkException<CancelDelayedCancellationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CancelDunning
- **HTTP**: `POST /subscriptions/{subscription_id}/cancel_dunning.json` (Production)
- **Notes**: Cancels the active dunning process for a subscription and sets it to active.
- **Signature**: `CancelDunning(int subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionResponse`
- **Error**: `SdkException<CancelDunningError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CancelSubscription
- **HTTP**: `DELETE /subscriptions/{subscription_id}.json` (Production)
- **Notes**: Cancels the Subscription. The Delete method sets the Subscription state to `canceled`. To cancel the subscription immediately, omit any schedule parameters from the request. To use the schedule options, the Schedule Subscription Cancellation feature must be enabled on your site.
- **Signature**: `CancelSubscription(int subscriptionId, CancellationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionResponse`
- **Error**: `SdkException<CancelSubscriptionApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetCancelSubscriptionErrorResponse(out CancelSubscriptionErrorResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InitiateDelayedCancellation
- **HTTP**: `POST /subscriptions/{subscription_id}/delayed_cancel.json` (Production)
- **Notes**: Cancels a subscription at the end of the current billing period based on the subscription's current product. You cannot set `cancel_at_end_of_period` at subscription creation, or if the subscription is past due.
- **Signature**: `InitiateDelayedCancellation(int subscriptionId, CancellationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DelayedCancellationResponse`
- **Error**: `SdkException<InitiateDelayedCancellationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PauseSubscription
- **HTTP**: `POST /subscriptions/{subscription_id}/hold.json` (Production)
- **Notes**: Places the subscription on hold, preventing it from renewing. Limitations You may not place a subscription on hold if the `next_billing_at` date is within 24 hours.
- **Signature**: `PauseSubscription(int subscriptionId, PauseRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionResponse`
- **Error**: `SdkException<PauseSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PreviewRenewal
- **HTTP**: `POST /subscriptions/{subscription_id}/renewals/preview.json` (Production)
- **Notes**: Previews a subscription’s next renewal assessment. Renewal Preview is an object representing a subscription’s next assessment. You can retrieve it to see a snapshot of how much your customer will be charged on their next renewal. The "Next Billing" amount and "Next Billing" date are already represented in the UI on each Subscriber's Summary. For more information, see our documentation here . Optional Component Fields This endpoint is particularly useful due to the fact that it will return the computed billing amount for the base product and the components which are in use by a subscriber. By default, the preview will include billing details for all components _at their current quantities_. This means: Current `allocated_quantity` for quantity-based components Current enabled/disabled status for on/off components Current metered usage `unit_balance` for metered components Current metric quantity value for events recorded thus far for events-based components In the above statements, "current" means the quantity or value as of the call to the renewal preview endpoint. We do not predict end-of-period values for components, so metered or events-based usage may be less than it will eventually be at the end of the period. Optionally, you may provide your own custom quantities for any component to see a billing preview for non-current quantities. This is accomplished by sending a request body with data under the `components` key. See the request body documentation below. Subscription Side Effects You can request a `POST` to obtain this data from the endpoint without any side effects. This method allows you to preview data, but does not log any changes against a subscription.
- **Signature**: `PreviewRenewal(int subscriptionId, RenewalPreviewRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RenewalPreviewResponse`
- **Error**: `SdkException<PreviewRenewalError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReactivateSubscription
- **HTTP**: `PUT /subscriptions/{subscription_id}/reactivate.json` (Production)
- **Notes**: Reactivates a previously canceled subscription. For details on how the reactivation works, and how to reactivate subscriptions through the application, see reactivation . Note: The term "resume" is used also during another process in Advanced Billing. This occurs when an on-hold subscription is "resumed". This returns the subscription to an active state. The response returns the subscription object in the `active` or `trialing` state. The `canceled_at` and `cancellation_message` fields do not have values. The method works for "Canceled" or "Trial Ended" subscriptions. It will not work for items not marked as "Canceled", "Unpaid", or "Trial Ended". Resume the current billing period for a subscription A subscription is considered "resumable" if you are attempting to reactivate within the billing period the subscription was canceled in. A resumed subscription's billing date remains the same as before it was canceled. In other words, it does not start a new billing period. Payment may or may not be collected for a resumed subscription, depending on whether or not the subscription had a balance when it was canceled (for example, if it was canceled because of dunning). Consider a subscription which was created on June 1st, and would renew on July 1st. The subscription is then canceled on June 15. If a reactivation with `resume: true` were attempted _before_ what would have been the next billing date of July 1st, then Advanced Billing would resume the subscription. If a reactivation with `resume: true` were attempted _after_ what would have been the next billing date of July 1st, then Advanced Billing would not resume the subscription, and instead it would be reactivated with a new billing period. If a reactivation with `resume: false`, or where 'resume' is omitted were attempted, then Advanced Billing would reactivate the subscription with a new billing period regardless of whether or not resuming the previous billing period was possible. | Canceled | Reactivation | Resumable? | |---|---|---| | Jun 15 | June 28 | Yes | | Jun 15 | July 2 | No | Reactivation Scenarios Reactivating Canceled Subscription While Preserving Balance Given you have a product that costs $20 Given you have a canceled subscription to the $20 product 1 charge should exist for $20 1 payment should exist for $20 When the subscription has canceled due to dunning, it retained a negative balance of $20 Results The resulting charges upon reactivation will be: + 1 charge for $20 for the new product + 1 charge for $20 for the balance due + Total charges = $40 The subscription will transition to active The subscription balance will be zero Reactivating a Canceled Subscription With Coupon Given you have a canceled subscription It has no current period defined You have a coupon code "EARLYBIRD" The coupon is set to recur for 6 periods PUT request sent to: `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?coupon_code=EARLYBIRD` Results The subscription will transition to active The subscription should have applied a coupon with code "EARLYBIRD" Reactivating Canceled Subscription With a Trial, Without the include_trial Flag Given you have a canceled subscription The product associated with the subscription has a trial + PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json` Results + The subscription will transition to active Reactivating Canceled Subscription With Trial, With the include_trial Flag Given you have a canceled subscription The product associated with the subscription has a trial Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?include_trial=1` Results The subscription will transition to trialing Reactivating Trial Ended Subscription Given you have a trial_ended subscription Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json` Results The subscription will transition to active Resuming a Canceled Subscription Given you have a `canceled` subscription and it is resumable Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?resume=true` Results The subscription will transition to active The next billing date should not have changed Attempting to resume a subscription which is not resumable Given you have a `canceled` subscription, and it is not resumable Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?resume=true` Results The subscription will transition to active, with a new billing period. Attempting to resume but not reactivate a subscription which is not resumable + Given you have a `canceled` subscription, and it is not resumable + Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?resume[require_resume]=true` + The response status should be "422 UNPROCESSABLE ENTITY" + The subscription should be canceled with the following response { "errors": ["Request was 'resume only', but this subscription cannot be resumed."] } Results The subscription should remain `canceled` The next billing date should not have changed Resuming Subscription Which Was Trialing Given you have a `trial_ended` subscription, and it is resumable And the subscription was canceled in the middle of a trial And there is still time left on the trial Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?resume=true` Results The subscription will transition to trialing The next billing date should not have changed Resuming Subscription Which Was trial_ended Given you have a `trial_ended` subscription, and it is resumable Send a PUT request to `https://acme.chargify.com/subscriptions/{subscription_id}/reactivate.json?resume=true` Results The subscription will transition to active The next billing date should not have changed Any product-related charges should have been collected 3D Secure (3DS) Authentication post-authentication flow When a payment requires 3DS Authentication to adhere to Strong Customer Authentication (SCA), the request enters a post-authentication flow where a 422 Unprocessable Entity status is returned with an action_link that will direct the customer through 3DS Authentication. See the 3D Secure Post-Authentication Flow article in the product documentation to learn how to manage the redirect flow.
- **Signature**: `ReactivateSubscription(int subscriptionId, ReactivateSubscriptionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionResponse`
- **Error**: `SdkException<ReactivateSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ResumeSubscription
- **HTTP**: `POST /subscriptions/{subscription_id}/resume.json` (Production)
- **Notes**: Resumes a paused (on-hold) subscription. If the normal next renewal date has not passed, the subscription will return to active and will renew on that date. Otherwise, it will behave like a reactivation, setting the billing date to 'now' and charging the subscriber.
- **Signature**: `ResumeSubscription(int subscriptionId, ResumptionCharge? calendarBillingResumptionCharge, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `calendarBillingResumptionCharge` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `calendar_billing['resumption_charge']` ← `calendarBillingResumptionCharge`
- **Returns**: `SubscriptionResponse`
- **Error**: `SdkException<ResumeSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrySubscription
- **HTTP**: `PUT /subscriptions/{subscription_id}/retry.json` (Production)
- **Notes**: Retries collecting the balance due on a past-due subscription without waiting for the next scheduled attempt. 3D Secure (3DS) Authentication post-authentication flow When a payment requires 3DS Authentication to adhere to Strong Customer Authentication (SCA), the request enters a post-authentication flow where a 422 Unprocessable Entity status is returned with an action_link that will direct the customer through 3DS Authentication. See the 3D Secure Post-Authentication Flow article in the product documentation to learn how to manage the redirect flow.
- **Signature**: `RetrySubscription(int subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionResponse`
- **Error**: `SdkException<RetrySubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateAutomaticSubscriptionResumption
- **HTTP**: `PUT /subscriptions/{subscription_id}/hold.json` (Production)
- **Notes**: Updates the date on which a paused subscription will automatically resume. To update a subscription's resume date, use this method to change or update the `automatically_resume_at` date. Remove the resume date Alternatively, you can change the `automatically_resume_at` to `null` if you would like the subscription to not have a resume date.
- **Signature**: `UpdateAutomaticSubscriptionResumption(int subscriptionId, PauseRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionResponse`
- **Error**: `SdkException<UpdateAutomaticSubscriptionResumptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
