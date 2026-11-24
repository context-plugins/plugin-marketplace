<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.Subscriptions` · Source: `src/Curlec/Api/Subscriptions.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelSubscription

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CancelSubscription(CancelSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Subscription`
- **Error**: `ApiException<CancelSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelSubscriptionRequest` | `src/Curlec/Requests/Subscriptions/CancelSubscriptionRequest.cs` |
| `SubscriptionsCancelRequest` | `src/Curlec/Models/SubscriptionsCancelRequest.cs` |
| `Subscription` | `src/Curlec/Models/Subscription.cs` |
| `CancelSubscriptionError` | `src/Curlec/Errors/CancelSubscriptionError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### CancelSubscriptionScheduledChanges

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CancelSubscriptionScheduledChanges(CancelSubscriptionScheduledChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Subscription`
- **Error**: `ApiException<CancelSubscriptionScheduledChangesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelSubscriptionScheduledChangesRequest` | `src/Curlec/Requests/Subscriptions/CancelSubscriptionScheduledChangesRequest.cs` |
| `Subscription` | `src/Curlec/Models/Subscription.cs` |
| `CancelSubscriptionScheduledChangesError` | `src/Curlec/Errors/CancelSubscriptionScheduledChangesError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### CreateSubscription

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateSubscription(CreateSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Subscription`
- **Error**: `ApiException<CreateSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSubscriptionRequest` | `src/Curlec/Requests/Subscriptions/CreateSubscriptionRequest.cs` |
| `SubscriptionsRequest` | `src/Curlec/Models/SubscriptionsRequest.cs` |
| `Subscription` | `src/Curlec/Models/Subscription.cs` |
| `CreateSubscriptionError` | `src/Curlec/Errors/CreateSubscriptionError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### DeleteSubscriptionOffer

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `DeleteSubscriptionOffer(DeleteSubscriptionOfferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubId`, `OfferId`
- **Returns**: `object`
- **Error**: `ApiException<DeleteSubscriptionOfferError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSubscriptionOfferRequest` | `src/Curlec/Requests/Subscriptions/DeleteSubscriptionOfferRequest.cs` |
| `DeleteSubscriptionOfferError` | `src/Curlec/Errors/DeleteSubscriptionOfferError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchSubscription

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchSubscription(FetchSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Subscription`
- **Error**: `ApiException<FetchSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchSubscriptionRequest` | `src/Curlec/Requests/Subscriptions/FetchSubscriptionRequest.cs` |
| `Subscription` | `src/Curlec/Models/Subscription.cs` |
| `FetchSubscriptionError` | `src/Curlec/Errors/FetchSubscriptionError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchSubscriptionScheduledChanges

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchSubscriptionScheduledChanges(FetchSubscriptionScheduledChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `SubscriptionsRetrieveScheduledChangesResponse`
- **Error**: `ApiException<FetchSubscriptionScheduledChangesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchSubscriptionScheduledChangesRequest` | `src/Curlec/Requests/Subscriptions/FetchSubscriptionScheduledChangesRequest.cs` |
| `SubscriptionsRetrieveScheduledChangesResponse` | `src/Curlec/Models/SubscriptionsRetrieveScheduledChangesResponse.cs` |
| `FetchSubscriptionScheduledChangesError` | `src/Curlec/Errors/FetchSubscriptionScheduledChangesError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ListSubscriptions

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ListSubscriptions(ListSubscriptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `plan_id` ← `PlanId`, `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `SubscriptionsResponse`
- **Error**: `ApiException<ListSubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSubscriptionsRequest` | `src/Curlec/Requests/Subscriptions/ListSubscriptionsRequest.cs` |
| `SubscriptionsResponse` | `src/Curlec/Models/SubscriptionsResponse.cs` |
| `ListSubscriptionsError` | `src/Curlec/Errors/ListSubscriptionsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### PauseSubscription

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `PauseSubscription(PauseSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Subscription`
- **Error**: `ApiException<PauseSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PauseSubscriptionRequest` | `src/Curlec/Requests/Subscriptions/PauseSubscriptionRequest.cs` |
| `SubscriptionsPauseRequest` | `src/Curlec/Models/SubscriptionsPauseRequest.cs` |
| `Subscription` | `src/Curlec/Models/Subscription.cs` |
| `PauseSubscriptionError` | `src/Curlec/Errors/PauseSubscriptionError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ResumeSubscription

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ResumeSubscription(ResumeSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Subscription`
- **Error**: `ApiException<ResumeSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResumeSubscriptionRequest` | `src/Curlec/Requests/Subscriptions/ResumeSubscriptionRequest.cs` |
| `SubscriptionsResumeRequest` | `src/Curlec/Models/SubscriptionsResumeRequest.cs` |
| `Subscription` | `src/Curlec/Models/Subscription.cs` |
| `ResumeSubscriptionError` | `src/Curlec/Errors/ResumeSubscriptionError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdateSubscription

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdateSubscription(UpdateSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Subscription`
- **Error**: `ApiException<UpdateSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSubscriptionRequest` | `src/Curlec/Requests/Subscriptions/UpdateSubscriptionRequest.cs` |
| `SubscriptionsRequest1` | `src/Curlec/Models/SubscriptionsRequest1.cs` |
| `Subscription` | `src/Curlec/Models/Subscription.cs` |
| `UpdateSubscriptionError` | `src/Curlec/Errors/UpdateSubscriptionError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

