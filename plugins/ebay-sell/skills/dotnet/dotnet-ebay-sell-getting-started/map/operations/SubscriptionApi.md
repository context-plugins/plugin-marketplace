# SubscriptionApi — operations

Accessor: `client.SubscriptionApi` · Source: `Api/SubscriptionApi.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSubscription
- **HTTP**: `POST /subscription` (Default (api))
- **Signature**: `CreateSubscription(CreateSubscriptionRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<CreateSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSubscriptionFilter
- **HTTP**: `POST /subscription/{subscription_id}/filter` (Default (api))
- **Signature**: `CreateSubscriptionFilter(string subscriptionId, CreateSubscriptionFilterRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<CreateSubscriptionFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSubscription
- **HTTP**: `DELETE /subscription/{subscription_id}` (Default (api))
- **Signature**: `DeleteSubscription(string subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Error`
- **Error**: `SdkException<DeleteSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSubscriptionFilter
- **HTTP**: `DELETE /subscription/{subscription_id}/filter/{filter_id}` (Default (api))
- **Signature**: `DeleteSubscriptionFilter(string filterId, string subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Error`
- **Error**: `SdkException<DeleteSubscriptionFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DisableSubscription
- **HTTP**: `POST /subscription/{subscription_id}/disable` (Default (api))
- **Signature**: `DisableSubscription(string subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Error`
- **Error**: `SdkException<DisableSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EnableSubscription
- **HTTP**: `POST /subscription/{subscription_id}/enable` (Default (api))
- **Signature**: `EnableSubscription(string subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Error`
- **Error**: `SdkException<EnableSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSubscription
- **HTTP**: `GET /subscription/{subscription_id}` (Default (api))
- **Signature**: `GetSubscription(string subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Subscription`
- **Error**: `SdkException<GetSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSubscriptionFilter
- **HTTP**: `GET /subscription/{subscription_id}/filter/{filter_id}` (Default (api))
- **Signature**: `GetSubscriptionFilter(string filterId, string subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SubscriptionFilter`
- **Error**: `SdkException<GetSubscriptionFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSubscriptions
- **HTTP**: `GET /subscription` (Default (api))
- **Signature**: `GetSubscriptions(string? continuationToken, string? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `continuationToken` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `continuation_token` ← `continuationToken`, `limit` ← `limit`
- **Returns**: `SubscriptionSearchResponse`
- **Error**: `SdkException<GetSubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TestSubscription
- **HTTP**: `POST /subscription/{subscription_id}/test` (Default (api))
- **Signature**: `TestSubscription(string subscriptionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Error`
- **Error**: `SdkException<TestSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSubscription
- **HTTP**: `PUT /subscription/{subscription_id}` (Default (api))
- **Signature**: `UpdateSubscription(string subscriptionId, UpdateSubscriptionRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Error`
- **Error**: `SdkException<UpdateSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
