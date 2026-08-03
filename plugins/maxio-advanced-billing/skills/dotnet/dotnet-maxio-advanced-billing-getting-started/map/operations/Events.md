# Events — operations

Accessor: `client.Events` · Source: `Api/Events.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListEvents
- **HTTP**: `GET /events.json` (Production)
- **Notes**: Lists events for a site. Events Intro Advanced Billing Events include various activity that happens around a Site. This information is especially useful to track down issues that arise when subscriptions are not created due to errors. Within the Advanced Billing UI, "Events" are referred to as "Site Activity". See the Site Activity article in the product documentation for details on how to record view Events / Site Activty in the Advanced Billing UI. If you’re using the enhanced Catalog experience , you’ll see updated naming in webhook events and messages. Event name changes: subscription_product_change → subscription_plan_change component_allocation_change → allocation_change component_billing_date_change → product_billing_date_change Message updates: “Plan changed on Subscription from previous plan to new plan” “Successful payment for allocation changes to Product on Subscription” “Failed payment for allocation changes to Product on Subscription” List Events for a Site This method will retrieve a list of events for a site. Use query string filters to narrow down results. You may use the `key` filter as part of your query string to narrow down results. Legacy Filters The following keys are no longer supported. `payment_failure_recreated` `payment_success_recreated` `renewal_failure_recreated` `renewal_success_recreated` `zferral_revenue_post_failure` - (Specific to the deprecated Zferral integration) `zferral_revenue_post_success` - (Specific to the deprecated Zferral integration) Event Key The event type is identified by the key property. You can check supported keys here . Event Specific Data Different event types may include additional data in `event_specific_data` property. While some events share the same schema for `event_specific_data`, others may not include it at all. For precise mappings from key to event_specific_data, refer to Event . Here’s an example event for the `subscription_product_change` event: { "event": { "id": 351, "key": "subscription_product_change", "message": "Product changed on Mark Alan's subscription from 'Basic' to 'Pro'", "subscription_id": 205, "event_specific_data": { "new_product_id": 3, "previous_product_id": 2 }, "created_at": "2012-01-30T10:43:31-05:00" } } Here’s an example event for the `subscription_state_change` event: { "event": { "id": 353, "key": "subscription_state_change", "message": "State changed on Mark Alan's subscription to Pro from trialing to active", "subscription_id": 205, "event_specific_data": { "new_subscription_state": "active", "previous_subscription_state": "trialing" }, "created_at": "2012-01-30T10:43:33-05:00" } }
- **Signature**: `ListEvents(long? sinceId, long? maxId, Direction? direction, IReadOnlyList<EventKey>? filter, ListEventsDateField? dateField, string? startDate, string? endDate, string? startDatetime, string? endDatetime, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`sinceId` … `endDatetime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `since_id` ← `sinceId`, `max_id` ← `maxId`, `direction` ← `direction`, `filter` ← `filter`, `date_field` ← `dateField`, `start_date` ← `startDate`, `end_date` ← `endDate`, `start_datetime` ← `startDatetime`, `end_datetime` ← `endDatetime`
- **Returns**: `IReadOnlyList<EventResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ListSubscriptionEvents
- **HTTP**: `GET /subscriptions/{subscription_id}/events.json` (Production)
- **Notes**: Lists events for a subscription. Event Key The event type is identified by the key property. You can check supported keys here . If you’re using the enhanced Catalog experience , you’ll see updated naming in webhook events and messages. Event name changes: subscription_product_change → subscription_plan_change component_allocation_change → allocation_change component_billing_date_change → product_billing_date_change Message updates: “Successful payment for allocation changes to Product on Subscription” “Failed payment for allocation changes to Product on Subscription” “Plan changed on Subscription from previous plan to new plan” Event Specific Data Different event types may include additional data in `event_specific_data` property. While some events share the same schema for `event_specific_data`, others may not include it at all. For precise mappings from key to event_specific_data, refer to Event .
- **Signature**: `ListSubscriptionEvents(int subscriptionId, long? sinceId, long? maxId, Direction? direction, IReadOnlyList<EventKey>? filter, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`sinceId` … `filter`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `since_id` ← `sinceId`, `max_id` ← `maxId`, `direction` ← `direction`, `filter` ← `filter`
- **Returns**: `IReadOnlyList<EventResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadEventsCount
- **HTTP**: `GET /events/count.json` (Production)
- **Notes**: Returns the total count of events for a given site. If you’re using the enhanced Catalog experience , you’ll see updated naming in webhook events and messages. Event name changes: subscription_product_change → subscription_plan_change component_allocation_change → allocation_change component_billing_date_change → product_billing_date_change Message updates: “Successful payment for allocation changes to Product on Subscription” “Failed payment for allocation changes to Product on Subscription” “Plan changed on Subscription from previous plan to new plan”
- **Signature**: `ReadEventsCount(long? sinceId, long? maxId, Direction? direction, IReadOnlyList<EventKey>? filter, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`sinceId` … `filter`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `since_id` ← `sinceId`, `max_id` ← `maxId`, `direction` ← `direction`, `filter` ← `filter`
- **Returns**: `CountResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`
