<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.Subscriptions` · Source: `src/FinixApiReference/Api/Subscriptions.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSubscription

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateSubscription(CreateSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Subscription`
- **Error**: `ApiException<CreateSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSubscriptionRequest` | `src/FinixApiReference/Requests/Subscriptions/CreateSubscriptionRequest.cs` |
| `SubscriptionsRequest` | `src/FinixApiReference/Models/AnyOf/SubscriptionsRequest.cs` |
| `Subscription` | `src/FinixApiReference/Models/Subscription.cs` |
| `CreateSubscriptionError` | `src/FinixApiReference/Errors/CreateSubscriptionError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### CreateSubscriptionBalanceEntry

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateSubscriptionBalanceEntry(CreateSubscriptionBalanceEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`, `Body`
- **Returns**: `SubscriptionBalanceEntry`
- **Error**: `ApiException<CreateSubscriptionBalanceEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSubscriptionBalanceEntryRequest` | `src/FinixApiReference/Requests/Subscriptions/CreateSubscriptionBalanceEntryRequest.cs` |
| `SubscriptionBalanceEntry1` | `src/FinixApiReference/Models/SubscriptionBalanceEntry1.cs` |
| `SubscriptionBalanceEntry` | `src/FinixApiReference/Models/SubscriptionBalanceEntry.cs` |
| `CreateSubscriptionBalanceEntryError` | `src/FinixApiReference/Errors/CreateSubscriptionBalanceEntryError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetSubscription

- **Auth**: `options.BasicAuth`
- **Signature**: `GetSubscription(GetSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`
- **Returns**: `Subscription`
- **Error**: `ApiException<GetSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSubscriptionRequest` | `src/FinixApiReference/Requests/Subscriptions/GetSubscriptionRequest.cs` |
| `Subscription` | `src/FinixApiReference/Models/Subscription.cs` |
| `GetSubscriptionError` | `src/FinixApiReference/Errors/GetSubscriptionError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListSubscriptionBalanceEntries

- **Auth**: `options.BasicAuth`
- **Signature**: `ListSubscriptionBalanceEntries(ListSubscriptionBalanceEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `amount` ← `Amount`, `amount.gt` ← `AmountGt`, `amount.gte` ← `AmountGte`, `amount.lt` ← `AmountLt`, `amount.lte` ← `AmountLte`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `sort` ← `Sort`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListSubscriptionBalanceEntries`
- **Error**: `ApiException<ListSubscriptionBalanceEntriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSubscriptionBalanceEntriesRequest` | `src/FinixApiReference/Requests/Subscriptions/ListSubscriptionBalanceEntriesRequest.cs` |
| `ListSubscriptionBalanceEntries` | `src/FinixApiReference/Models/ListSubscriptionBalanceEntries.cs` |
| `ListSubscriptionBalanceEntriesError` | `src/FinixApiReference/Errors/ListSubscriptionBalanceEntriesError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListSubscriptions

- **Auth**: `options.BasicAuth`
- **Signature**: `ListSubscriptions(ListSubscriptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `after_cursor` ← `AfterCursor`, `amount.gt` ← `AmountGt`, `amount.gte` ← `AmountGte`, `amount.lt` ← `AmountLt`, `amount.lte` ← `AmountLte`, `amount` ← `Amount`, `application_id` ← `ApplicationId`, `before_cursor` ← `BeforeCursor`, `billing_interval` ← `BillingInterval`, `buyer_identity_id` ← `BuyerIdentityId`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `id` ← `Id`, `limit` ← `Limit`, `linked_to` ← `LinkedTo`, `nickname` ← `Nickname`, `nickname.like` ← `NicknameLike`, `state` ← `State`, `subscription_link_id` ← `SubscriptionLinkId`, `subscription_plan_id` ← `SubscriptionPlanId`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListSubscriptions`
- **Error**: `ApiException<ListSubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSubscriptionsRequest` | `src/FinixApiReference/Requests/Subscriptions/ListSubscriptionsRequest.cs` |
| `BillingInterval1` | `src/FinixApiReference/Models/Enums/BillingInterval1.cs` |
| `ListSubscriptions` | `src/FinixApiReference/Models/ListSubscriptions.cs` |
| `ListSubscriptionsError` | `src/FinixApiReference/Errors/ListSubscriptionsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### RemoveSubscription

- **Auth**: `options.BasicAuth`
- **Signature**: `RemoveSubscription(RemoveSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RemoveSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveSubscriptionRequest` | `src/FinixApiReference/Requests/Subscriptions/RemoveSubscriptionRequest.cs` |
| `RemoveSubscriptionError` | `src/FinixApiReference/Errors/RemoveSubscriptionError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdateSubscription

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateSubscription(UpdateSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`, `Body`
- **Returns**: `Subscription`
- **Error**: `ApiException<UpdateSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSubscriptionRequest` | `src/FinixApiReference/Requests/Subscriptions/UpdateSubscriptionRequest.cs` |
| `SubscriptionsRequest1` | `src/FinixApiReference/Models/AnyOf/SubscriptionsRequest1.cs` |
| `Subscription` | `src/FinixApiReference/Models/Subscription.cs` |
| `UpdateSubscriptionError` | `src/FinixApiReference/Errors/UpdateSubscriptionError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdateSubscriptionBalanceEntry

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateSubscriptionBalanceEntry(UpdateSubscriptionBalanceEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubscriptionId`, `SubscriptionBalanceEntryId`, `Body`
- **Returns**: `SubscriptionBalanceEntry`
- **Error**: `ApiException<UpdateSubscriptionBalanceEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSubscriptionBalanceEntryRequest` | `src/FinixApiReference/Requests/Subscriptions/UpdateSubscriptionBalanceEntryRequest.cs` |
| `UpdateSubscriptionBalanceEntry` | `src/FinixApiReference/Models/UpdateSubscriptionBalanceEntry.cs` |
| `SubscriptionBalanceEntry` | `src/FinixApiReference/Models/SubscriptionBalanceEntry.cs` |
| `UpdateSubscriptionBalanceEntryError` | `src/FinixApiReference/Errors/UpdateSubscriptionBalanceEntryError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

