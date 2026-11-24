<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.Subscriptions` · Source: `src/Beehiiv/Api/Subscriptions.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create11

- **Signature**: `Create11(Create11Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `SubscriptionResponse`
- **Error**: `ApiException<Create11Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Create11Request` | `src/Beehiiv/Requests/Subscriptions/Create11Request.cs` |
| `SubscriptionRequest` | `src/Beehiiv/Models/SubscriptionRequest.cs` |
| `SubscriptionResponse` | `src/Beehiiv/Models/SubscriptionResponse.cs` |
| `Create11Error` | `src/Beehiiv/Errors/Create11Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Delete5

- **Signature**: `Delete5(Delete5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `SubscriptionId`, `Authorization`
- **Returns**: `SubscriptionDeleteResponse`
- **Error**: `ApiException<Delete5Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Delete5Request` | `src/Beehiiv/Requests/Subscriptions/Delete5Request.cs` |
| `SubscriptionDeleteResponse` | `src/Beehiiv/Models/SubscriptionDeleteResponse.cs` |
| `Delete5Error` | `src/Beehiiv/Errors/Delete5Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### GetByEmail

- **Signature**: `GetByEmail(GetByEmailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Email`, `Authorization`
- **Query params (wire ← C#)**: `expand[]` ← `Expand`
- **Returns**: `SubscriptionResponse`
- **Error**: `ApiException<GetByEmailError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetByEmailRequest` | `src/Beehiiv/Requests/Subscriptions/GetByEmailRequest.cs` |
| `SubscriptionsGetRequestExpandItem` | `src/Beehiiv/Models/Enums/SubscriptionsGetRequestExpandItem.cs` |
| `SubscriptionResponse` | `src/Beehiiv/Models/SubscriptionResponse.cs` |
| `GetByEmailError` | `src/Beehiiv/Errors/GetByEmailError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### GetById

- **Signature**: `GetById(GetByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `SubscriptionId`, `Authorization`
- **Query params (wire ← C#)**: `expand[]` ← `Expand`
- **Returns**: `SubscriptionResponse`
- **Error**: `ApiException<GetByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetByIdRequest` | `src/Beehiiv/Requests/Subscriptions/GetByIdRequest.cs` |
| `SubscriptionsGetRequestExpandItem` | `src/Beehiiv/Models/Enums/SubscriptionsGetRequestExpandItem.cs` |
| `SubscriptionResponse` | `src/Beehiiv/Models/SubscriptionResponse.cs` |
| `GetByIdError` | `src/Beehiiv/Errors/GetByIdError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Index20

- **Signature**: `Index20(Index20Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `expand[]` ← `Expand`, `status` ← `Status`, `tier` ← `Tier`, `premium_tiers[]` ← `PremiumTiers`, `premium_tier_ids[]` ← `PremiumTierIds`, `limit` ← `Limit`, `cursor` ← `Cursor`, `page` ← `Page`, `email` ← `Email`, `order_by` ← `OrderBy`, `direction` ← `Direction`, `creation_date` ← `CreationDate`
- **Returns**: `SubscriptionsListResponse`
- **Error**: `ApiException<Index20Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index20Request` | `src/Beehiiv/Requests/Subscriptions/Index20Request.cs` |
| `SubscriptionsListRequestExpandItem` | `src/Beehiiv/Models/Enums/SubscriptionsListRequestExpandItem.cs` |
| `SubscriptionsListRequestStatus` | `src/Beehiiv/Models/Enums/SubscriptionsListRequestStatus.cs` |
| `SubscriptionsListRequestTier` | `src/Beehiiv/Models/Enums/SubscriptionsListRequestTier.cs` |
| `SubscriptionsListRequestOrderBy` | `src/Beehiiv/Models/Enums/SubscriptionsListRequestOrderBy.cs` |
| `RequestDirection` | `src/Beehiiv/Models/Enums/RequestDirection.cs` |
| `SubscriptionsListResponse` | `src/Beehiiv/Models/SubscriptionsListResponse.cs` |
| `Index20Error` | `src/Beehiiv/Errors/Index20Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Patch3

- **Signature**: `Patch3(Patch3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `SubscriptionId`, `Authorization`
- **Returns**: `SubscriptionResponse`
- **Error**: `ApiException<Patch3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Patch3Request` | `src/Beehiiv/Requests/Subscriptions/Patch3Request.cs` |
| `PublicationsSubscriptionsRequest1` | `src/Beehiiv/Models/PublicationsSubscriptionsRequest1.cs` |
| `SubscriptionResponse` | `src/Beehiiv/Models/SubscriptionResponse.cs` |
| `Patch3Error` | `src/Beehiiv/Errors/Patch3Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Put3

- **Signature**: `Put3(Put3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `SubscriptionId`, `Authorization`
- **Returns**: `SubscriptionResponse`
- **Error**: `ApiException<Put3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Put3Request` | `src/Beehiiv/Requests/Subscriptions/Put3Request.cs` |
| `PublicationsSubscriptionsRequestReferenceSubscriptionsApi` | `src/Beehiiv/Models/PublicationsSubscriptionsRequestReferenceSubscriptionsApi.cs` |
| `SubscriptionResponse` | `src/Beehiiv/Models/SubscriptionResponse.cs` |
| `Put3Error` | `src/Beehiiv/Errors/Put3Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### UpdateByEmail

- **Signature**: `UpdateByEmail(UpdateByEmailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Email`, `Authorization`
- **Returns**: `SubscriptionResponse`
- **Error**: `ApiException<UpdateByEmailError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateByEmailRequest` | `src/Beehiiv/Requests/Subscriptions/UpdateByEmailRequest.cs` |
| `PublicationsSubscriptionsByEmailRequest` | `src/Beehiiv/Models/PublicationsSubscriptionsByEmailRequest.cs` |
| `SubscriptionResponse` | `src/Beehiiv/Models/SubscriptionResponse.cs` |
| `UpdateByEmailError` | `src/Beehiiv/Errors/UpdateByEmailError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

