# SubscriptionGroups — operations

Accessor: `client.SubscriptionGroups` · Source: `Api/SubscriptionGroups.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddSubscriptionToGroup
- **HTTP**: `POST /subscriptions/{subscription_id}/group.json` (Production)
- **Notes**: Adds an existing subscription to a subscription group. For sites making use of the Relationship Billing and Customer Hierarchy features, it is possible to add existing subscriptions to subscription groups. Passing `group` parameters with a `target` containing a `type` and optional `id` is all that's needed. When the `target` parameter specifies a `"customer"` or `"subscription"` that is already part of a hierarchy, the subscription will become a member of the customer's subscription group. If the target customer or subscription is not part of a subscription group, a new group will be created and the subscription will become part of the group with the specified target customer set as the responsible payer for the group's subscriptions. Note: In order to add an existing subscription to a subscription group, it must belong to either the same customer record as the target, or be within the same customer hierarchy. Rather than specifying a customer, the `target` parameter could instead simply have a value of * `"self"` which indicates the subscription will be paid for not by some other customer, but by the subscribing customer, * `"parent"` which indicates the subscription will be paid for by the subscribing customer's parent within a customer hierarchy, or * `"eldest"` which indicates the subscription will be paid for by the root-level customer in the subscribing customer's hierarchy. To create a new subscription into a subscription group, reference the following: Create Subscription in a Subscription Group
- **Signature**: `AddSubscriptionToGroup(int subscriptionId, AddSubscriptionToAGroup? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionGroupResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateSubscriptionGroup
- **HTTP**: `POST /subscription_groups.json` (Production)
- **Notes**: Creates a subscription group with given members.
- **Signature**: `CreateSubscriptionGroup(CreateSubscriptionGroupRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionGroupResponse`
- **Error**: `SdkException<CreateSubscriptionGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionGroupCreateErrorResponse1(out SubscriptionGroupCreateErrorResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSubscriptionGroup
- **HTTP**: `DELETE /subscription_groups/{uid}.json` (Production)
- **Notes**: Deletes a subscription group. Only groups without members can be deleted.
- **Signature**: `DeleteSubscriptionGroup(string uid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteSubscriptionGroupResponse`
- **Error**: `SdkException<DeleteSubscriptionGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FindSubscriptionGroup
- **HTTP**: `GET /subscription_groups/lookup.json` (Production)
- **Notes**: Finds the subscription group associated with a subscription. If the subscription is not in a group, the endpoint will return a 404 code.
- **Signature**: `FindSubscriptionGroup(string subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `subscription_id` ← `subscriptionId`
- **Returns**: `FullSubscriptionGroupResponse`
- **Error**: `SdkException<FindSubscriptionGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSubscriptionGroups
- **HTTP**: `GET /subscription_groups.json` (Production)
- **Notes**: Lists subscription groups for the site. The response is paginated and will return a `meta` key with pagination information. Account Balance Information Account balance information for the subscription groups is not returned by default. If this information is desired, the `include[]=account_balances` parameter must be provided with the request.
- **Signature**: `ListSubscriptionGroups(IReadOnlyList<SubscriptionGroupsListInclude>? include, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `include` ← `include`
- **Returns**: `ListSubscriptionGroupsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadSubscriptionGroup
- **HTTP**: `GET /subscription_groups/{uid}.json` (Production)
- **Notes**: Returns subscription group details. Current Billing Amount in Cents Current billing amount for the subscription group is not returned by default. If this information is desired, the `include[]=current_billing_amount_in_cents` parameter must be provided with the request.
- **Signature**: `ReadSubscriptionGroup(string uid, IReadOnlyList<SubscriptionGroupInclude>? include, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `FullSubscriptionGroupResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RemoveSubscriptionFromGroup
- **HTTP**: `DELETE /subscriptions/{subscription_id}/group.json` (Production)
- **Notes**: Removes an existing subscription from a subscription group. For sites making use of the Relationship Billing and Customer Hierarchy features, it is possible to remove an existing subscription from a subscription group.
- **Signature**: `RemoveSubscriptionFromGroup(int subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveSubscriptionFromGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SignupWithSubscriptionGroup
- **HTTP**: `POST /subscription_groups/signup.json` (Production)
- **Notes**: Creates multiple subscriptions at once under the same customer and consolidates them into a subscription group. You must provide one and only one of the `payer_id`/`payer_reference`/`payer_attributes` for the customer attached to the group. You must provide one and only one of the `payment_profile_id`/`credit_card_attributes`/`bank_account_attributes` for the payment profile attached to the group. Only one of the `subscriptions` can have `"primary": true` attribute set. When passing a product to a subscription you can use either `product_id` or `product_handle` or `offer_id`. You can also use `custom_price` instead. The subscription request examples below will be split into two sections. The first section, "Subscription Customization", will focus on passing different information with a subscription, such as components, calendar billing, and custom fields. These examples will presume you are using a secure chargify_token generated by Maxio.js (formerly Chargify.js).
- **Signature**: `SignupWithSubscriptionGroup(SubscriptionGroupSignupRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionGroupSignupResponse`
- **Error**: `SdkException<SignupWithSubscriptionGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionGroupSignupErrorResponse1(out SubscriptionGroupSignupErrorResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSubscriptionGroupMembers
- **HTTP**: `PUT /subscription_groups/{uid}.json` (Production)
- **Notes**: Updates subscription group members. `"member_ids"` should contain an array of both subscription IDs to set as group members and subscription IDs already present in the groups. Not including them will result in removing them from the subscription group. To clean up members, just leave the array empty.
- **Signature**: `UpdateSubscriptionGroupMembers(string uid, UpdateSubscriptionGroupRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionGroupResponse`
- **Error**: `SdkException<UpdateSubscriptionGroupMembersError>` — **Case A (typed)**
- **Error accessors**: `TryGetSubscriptionGroupUpdateErrorResponse1(out SubscriptionGroupUpdateErrorResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
