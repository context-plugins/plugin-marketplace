# SubscriptionComponents — operations

Accessor: `client.SubscriptionComponents` · Source: `Api/SubscriptionComponents.cs` · 17 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ActivateEventBasedComponent
- **HTTP**: `POST /event_based_billing/subscriptions/{subscription_id}/components/{component_id}/activate.json` (Production)
- **Notes**: Activates an event-based component for a single subscription. In order to bill your subscribers on your Events data under the Events-Based Billing feature, the components must be activated for the subscriber. Learn more about the role of activation in the Events-Based Billing docs . Use this endpoint to activate an event-based component for a single subscription. Activating an event-based component causes Advanced Billing to bill for events when the subscription is renewed. *Note: it is possible to stream events for a subscription at any time, regardless of component activation status. The activation status only determines if the subscription should be billed for event-based component usage at renewal.*
- **Signature**: `ActivateEventBasedComponent(int subscriptionId, int componentId, ActivateEventBasedComponent? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AllocateComponent
- **HTTP**: `POST /subscriptions/{subscription_id}/components/{component_id}/allocations.json` (Production)
- **Notes**: Creates an allocation, sets the current allocated quantity for the component, and records a memo. Allocations can only be updated for Quantity, On/Off, and Prepaid Components. When creating an allocation via the API, you can pass the `upgrade_charge`, `downgrade_credit`, and `accrue_charge` to be applied. &gt; Note: These proration and accrual fields are ignored for Prepaid Components since this component type always generates charges immediately without proration. For information on prorated components and upgrade/downgrade schemes, see Setting Component Allocations. Order of Resolution for upgrade_charge and downgrade_credit Per allocation in API call (within a single allocation of the `allocations` array) Component-level default value Allocation API call top level (outside of the `allocations` array) Site-level default value Order of Resolution for accrue charge Allocation API call top level (outside of the `allocations` array) Site-level default value &gt; Note: Proration uses the current price of the component as well as the current tax rates. Changes to either may cause the prorated charge/credit to be wrong. For more information, see the Component Allocations product Documentation.
- **Signature**: `AllocateComponent(int subscriptionId, int componentId, CreateAllocationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AllocationResponse`
- **Error**: `SdkException<AllocateComponentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AllocateComponents
- **HTTP**: `POST /subscriptions/{subscription_id}/allocations.json` (Production)
- **Notes**: Creates multiple allocations, sets the current allocated quantity for each of the components, and records a memo. A `component_id` is required for each allocation. The charges and/or credits that are created will be rolled up into a single total which is used to determine whether this is an upgrade or a downgrade. Order of Resolution for upgrade_charge and downgrade_credit Per allocation in API call (within a single allocation of the `allocations` array) Component-level default value Allocation API call top level (outside of the `allocations` array) Site-level default value Order of Resolution for accrue charge Allocation API call top level (outside of the `allocations` array) Site-level default value &gt; Note: Proration uses the current price of the component as well as the current tax rates. Changes to either may cause the prorated charge/credit to be wrong. For more information, see the Component Allocations product documentation.
- **Signature**: `AllocateComponents(int subscriptionId, AllocateComponents? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<AllocationResponse>`
- **Error**: `SdkException<AllocateComponentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### BulkRecordEvents
- **HTTP**: `POST /events/{api_handle}/bulk.json` (Ebb (events))
- **Notes**: Records a collection of events. *Note: this endpoint differs from the standard Chargify API endpoints in that the subdomain will be `events` and your site subdomain will be included in the URL path.* A maximum of 1000 events can be published in a single request. A 422 will be returned if this limit is exceeded.
- **Signature**: `BulkRecordEvents(string apiHandle, string? storeUid, IReadOnlyList<EbbEvent>? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `storeUid` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `store_uid` ← `storeUid`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BulkResetSubscriptionComponentsPricePoints
- **HTTP**: `POST /subscriptions/{subscription_id}/price_points/reset.json` (Production)
- **Notes**: Resets all of a subscription's components to use the current default. Note : this will update the price point for all of the subscription's components, even ones that have not been allocated yet.
- **Signature**: `BulkResetSubscriptionComponentsPricePoints(int subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BulkUpdateSubscriptionComponentsPricePoints
- **HTTP**: `POST /subscriptions/{subscription_id}/price_points.json` (Production)
- **Notes**: Updates the price points on one or more of a subscription's components. The `price_point` key can take either a: 1. Price point id (integer) 2. Price point handle (string) 3. `"_default"` string, which will reset the price point to the component's current default price point.
- **Signature**: `BulkUpdateSubscriptionComponentsPricePoints(int subscriptionId, BulkComponentsPricePointAssignment? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BulkComponentsPricePointAssignment`
- **Error**: `SdkException<BulkUpdateSubscriptionComponentsPricePointsError>` — **Case A (typed)**
- **Error accessors**: `TryGetComponentPricePointError1(out ComponentPricePointError1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateUsage
- **HTTP**: `POST /subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json` (Production)
- **Notes**: Records an instance of metered or prepaid usage for a subscription. You can report metered or prepaid usage to Advanced Billing as often as you wish. You can report usage as it happens or periodically, such as each night or once per billing period. Full documentation on how to create Components in the Advanced Billing UI can be located here . Additionally, for information on how to record component usage against a subscription, see the following resources: It is not possible to record metered usage for more than one component at a time. Usage should be reported as one API call per component on a single subscription. For example, to record that a subscriber has sent both an SMS Message and an Email, send an API call for each. See the following product documentation articles for more information: Create and Manage Components Recording Metered Component Usage Reporting Prepaid Component Status The `quantity` from usage for each component is accumulated to the `unit_balance` on the Component Line Item for the subscription. Price Point ID usage If you are using price points, for metered and prepaid usage components Advanced Billing gives you the option to specify a price point in your request. You do not need to specify a price point ID. If a price point is not included, the default price point for the component will be used when the usage is recorded. Deducting Usage If you need to reverse a previous usage report or otherwise deduct from the current usage balance, you can provide a negative quantity. Example: Previously recorded quantity was 5000: { "usage": { "quantity": 5000, "memo": "Recording 5000 units" } } To reduce the quantity to `0`, POST the following payload: { "usage": { "quantity": -5000, "memo": "Deducting 5000 units" } } The `unit_balance` has a floor of `0`; negative unit balances are never allowed. For example, if the usage balance is 100 and you deduct 200 units, the unit balance would then be `0`, not `-100`.
- **Signature**: `CreateUsage(SubscriptionIdOrReference subscriptionIdOrReference, ComponentIdModel componentId, CreateUsageRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UsageResponse`
- **Error**: `SdkException<CreateUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeactivateEventBasedComponent
- **HTTP**: `POST /event_based_billing/subscriptions/{subscription_id}/components/{component_id}/deactivate.json` (Production)
- **Notes**: Deactivates an event-based component for a single subscription. Deactivating the event-based component causes Advanced Billing to ignore related events at subscription renewal.
- **Signature**: `DeactivateEventBasedComponent(int subscriptionId, int componentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeletePrepaidUsageAllocation
- **HTTP**: `DELETE /subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id}.json` (Production)
- **Notes**: Deletes a prepaid usage allocation. Prepaid Usage components are unique in that their allocations are always additive. In order to reduce a subscription's allocated quantity for a prepaid usage component, each allocation must be destroyed individually via this endpoint. Credit Scheme By default, destroying an allocation will generate a service credit on the subscription. This behavior can be modified with the optional `credit_scheme` parameter on this endpoint. The accepted values are: `none`: The allocation will be destroyed and the balances will be updated but no service credit or refund will be created. `credit`: The allocation will be destroyed and the balances will be updated and a service credit will be generated. This is also the default behavior if the `credit_scheme` param is not passed. `refund`: The allocation will be destroyed and the balances will be updated and a refund will be issued along with a Credit Note.
- **Signature**: `DeletePrepaidUsageAllocation(int subscriptionId, int componentId, int allocationId, CreditSchemeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeletePrepaidUsageAllocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetSubscriptionComponentAllocationError1(out SubscriptionComponentAllocationError1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAllocations
- **HTTP**: `GET /subscriptions/{subscription_id}/components/{component_id}/allocations.json` (Production)
- **Notes**: Lists the 50 most recent Allocations, ordered by most recent first. On/Off Components When a subscription's on/off component has been toggled to on (`1`) or off (`0`), usage will be logged in this response.
- **Signature**: `ListAllocations(int subscriptionId, int componentId, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `IReadOnlyList<AllocationResponse>`
- **Error**: `SdkException<ListAllocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListSubscriptionComponents
- **HTTP**: `GET /subscriptions/{subscription_id}/components.json` (Production)
- **Notes**: Lists a subscription's applied components. Archived Components When requesting to list components for a given subscription, if the subscription contains archived components they will be listed in the server response.
- **Signature**: `ListSubscriptionComponents(int subscriptionId, SubscriptionListDateField? dateField, SortingDirection? direction, ListSubscriptionComponentsFilter? filter, string? endDate, string? endDatetime, IncludeNotNull? pricePointIds, IReadOnlyList<int>? productFamilyIds, ListSubscriptionComponentsSort? sort, string? startDate, string? startDatetime, IReadOnlyList<ListSubscriptionComponentsInclude>? include, bool? inUse, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`dateField` … `inUse`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `date_field` ← `dateField`, `direction` ← `direction`, `filter` ← `filter`, `end_date` ← `endDate`, `end_datetime` ← `endDatetime`, `price_point_ids` ← `pricePointIds`, `product_family_ids` ← `productFamilyIds`, `sort` ← `sort`, `start_date` ← `startDate`, `start_datetime` ← `startDatetime`, `include` ← `include`, `in_use` ← `inUse`
- **Returns**: `IReadOnlyList<SubscriptionComponentResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSubscriptionComponentsForSite
- **HTTP**: `GET /subscriptions_components.json` (Production)
- **Notes**: Lists components applied to each subscription.
- **Signature**: `ListSubscriptionComponentsForSite(ListSubscriptionComponentsSort? sort, SortingDirection? direction, ListSubscriptionComponentsForSiteFilter? filter, SubscriptionListDateField? dateField, string? startDate, string? startDatetime, string? endDate, string? endDatetime, IReadOnlyList<int>? subscriptionIds, IncludeNotNull? pricePointIds, IReadOnlyList<int>? productFamilyIds, ListSubscriptionComponentsInclude? include, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`sort` … `include`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`, `direction` ← `direction`, `filter` ← `filter`, `date_field` ← `dateField`, `start_date` ← `startDate`, `start_datetime` ← `startDatetime`, `end_date` ← `endDate`, `end_datetime` ← `endDatetime`, `subscription_ids` ← `subscriptionIds`, `price_point_ids` ← `pricePointIds`, `product_family_ids` ← `productFamilyIds`, `include` ← `include`
- **Returns**: `ListSubscriptionComponentsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ListUsages
- **HTTP**: `GET /subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json` (Production)
- **Notes**: Lists usages associated with a subscription for a particular metered component. This will display the previously recorded components for a subscription. This endpoint is not compatible with quantity-based components. Since Date and Until Date Usage Note: The `since_date` and `until_date` attributes each default to midnight on the date specified. For example, in order to list usages for January 20th, you would need to append the following to the URL. ?since_date=2016-01-20&amp;until_date=2016-01-21 Read Usage by Handle Use this endpoint to read the previously recorded components for a subscription. You can now specify either the component id (integer) or the component handle prefixed by "handle:" to specify the unique identifier for the component you are working with.
- **Signature**: `ListUsages(SubscriptionIdOrReference subscriptionIdOrReference, ComponentIdModel componentId, long? sinceId, long? maxId, DateTimeOffset? sinceDate, DateTimeOffset? untilDate, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`sinceId` … `untilDate`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `since_id` ← `sinceId`, `max_id` ← `maxId`, `since_date` ← `sinceDate`, `until_date` ← `untilDate`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `IReadOnlyList<UsageResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### PreviewAllocations
- **HTTP**: `POST /subscriptions/{subscription_id}/allocations/preview.json` (Production)
- **Notes**: Previews a potential subscription's quantity-based or on/off component allocation in the middle of the current billing period. This is useful if you want users to be able to see the effect of a component operation before actually doing it. Fine-grained Component Control: Use with multiple `upgrade_charge`s or `downgrade_credits` When the allocation uses multiple different types of `upgrade_charge`s or `downgrade_credit`s, the Allocation is viewed as an Allocation which uses "Fine-Grained Component Control". As a result, the response will not include `direction` and `proration` within the `allocation_preview`, but at the `line_items` and `allocations` level respectfully. See example below for Fine-Grained Component Control response.
- **Signature**: `PreviewAllocations(int subscriptionId, PreviewAllocationsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AllocationPreviewResponse`
- **Error**: `SdkException<PreviewAllocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetComponentAllocationError1(out ComponentAllocationError1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReadSubscriptionComponent
- **HTTP**: `GET /subscriptions/{subscription_id}/components/{component_id}.json` (Production)
- **Notes**: Returns information for a specific component on a subscription.
- **Signature**: `ReadSubscriptionComponent(int subscriptionId, int componentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionComponentResponse`
- **Error**: `SdkException<ReadSubscriptionComponentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RecordEvent
- **HTTP**: `POST /events/{api_handle}.json` (Ebb (events))
- **Notes**: Records a single event for Events-Based Billing. Documentation Events-Based Billing is an evolved form of metered billing that is based on data-rich events streamed in real-time from your system to Advanced Billing. These events can then be transformed, enriched, or analyzed to form the computed totals of usage charges billed to your customers. This API allows you to stream events into the Advanced Billing data ingestion engine. Learn more about the feature in general in the Events-Based Billing help docs . Record Event Use this endpoint to record a single event. *Note: this endpoint differs from the standard Chargify API endpoints in that the URL subdomain will be `events` and your site subdomain will be included in the URL path. For example:* https://events.chargify.com/my-site-subdomain/events/my-stream-api-handle
- **Signature**: `RecordEvent(string apiHandle, string? storeUid, EbbEvent? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `storeUid` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `store_uid` ← `storeUid`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePrepaidUsageAllocationExpirationDate
- **HTTP**: `PUT /subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id}.json` (Production)
- **Notes**: Updates the expiration date for a prepaid usage allocation. This expiration date can be changed after the fact to allow for extending or shortening the allocation's active window. In order to change a prepaid usage allocation's expiration date, a PUT call must be made to the allocation's endpoint with a new expiration date. Limitations A few limitations exist when changing an allocation's expiration date: An expiration date can only be changed for an allocation that belongs to a price point with expiration interval options explicitly set. An expiration date can be changed towards the future with no limitations. An expiration date can be changed towards the past (essentially expiring it) up to the subscription's current period beginning date.
- **Signature**: `UpdatePrepaidUsageAllocationExpirationDate(int subscriptionId, int componentId, int allocationId, UpdateAllocationExpirationDate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdatePrepaidUsageAllocationExpirationDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetSubscriptionComponentAllocationError1(out SubscriptionComponentAllocationError1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
