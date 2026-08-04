# Activity — operations

Accessor: `client.Activity` · Source: `Api/Activity.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateActivitySubscription
- **HTTP**: `POST /2/activity/subscriptions` (Default (api))
- **Notes**: Creates a subscription for an X activity event. OAuth2 user-context tokens must hold the scope matching the requested event_type: dm.read for chat.* and dm.* events, like.read for like.* events, mute.read for mute.* events, block.read for block.* events, and tweet.read for all other event types. Mute and block subscriptions are actor-only: filter.user_id must identify the authenticated user and direction is not supported.
- **Signature**: `CreateActivitySubscription(CreateActivitySubscriptionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateActivitySubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteActivitySubscription
- **HTTP**: `DELETE /2/activity/subscriptions/{subscription_id}` (Default (api))
- **Notes**: Deletes a subscription for an X activity event
- **Signature**: `DeleteActivitySubscription(string subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteActivitySubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteActivitySubscriptionsByIds
- **HTTP**: `DELETE /2/activity/subscriptions` (Default (api))
- **Notes**: Deletes multiple subscriptions for X activity events by their IDs
- **Signature**: `DeleteActivitySubscriptionsByIds(IReadOnlyList<string> ids, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ids` ← `ids`
- **Returns**: `DeleteActivitySubscriptionsByIdsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetActivitySubscriptions
- **HTTP**: `GET /2/activity/subscriptions` (Default (api))
- **Notes**: Get a list of active subscriptions for XAA
- **Signature**: `GetActivitySubscriptions(int? maxResults, string? paginationToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `maxResults` — nullable, no default → **must pass explicitly**
  - `paginationToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `pagination_token` ← `paginationToken`
- **Returns**: `GetActivitySubscriptionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateActivitySubscription
- **HTTP**: `PUT /2/activity/subscriptions/{subscription_id}` (Default (api))
- **Notes**: Updates a subscription for an X activity event
- **Signature**: `UpdateActivitySubscription(string subscriptionId, UpdateActivitySubscriptionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateActivitySubscriptionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
