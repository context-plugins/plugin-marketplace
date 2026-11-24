<!-- Generated file — do not edit; regenerated with the SDK. -->

# NewsletterListSubscriptions — operations

Accessor: `client.NewsletterListSubscriptions` · Source: `src/Beehiiv/Api/NewsletterListSubscriptions.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create6

- **Signature**: `Create6(Create6Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `NewsletterListId`, `Authorization`
- **Returns**: `NewsletterListSubscriptionResponse`
- **Error**: `ApiException<Create6Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Create6Request` | `src/Beehiiv/Requests/NewsletterListSubscriptions/Create6Request.cs` |
| `PublicationsNewsletterListsSubscriptionsRequest` | `src/Beehiiv/Models/PublicationsNewsletterListsSubscriptionsRequest.cs` |
| `NewsletterListSubscriptionResponse` | `src/Beehiiv/Models/NewsletterListSubscriptionResponse.cs` |
| `Create6Error` | `src/Beehiiv/Errors/Create6Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Index13

- **Signature**: `Index13(Index13Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `NewsletterListId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `page` ← `Page`, `direction` ← `Direction`
- **Returns**: `NewsletterListSubscriptionIndexResponse`
- **Error**: `ApiException<Index13Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index13Request` | `src/Beehiiv/Requests/NewsletterListSubscriptions/Index13Request.cs` |
| `RequestDirection` | `src/Beehiiv/Models/Enums/RequestDirection.cs` |
| `NewsletterListSubscriptionIndexResponse` | `src/Beehiiv/Models/NewsletterListSubscriptionIndexResponse.cs` |
| `Index13Error` | `src/Beehiiv/Errors/Index13Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Show9

- **Signature**: `Show9(Show9Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `NewsletterListId`, `NewsletterListSubscriptionId`, `Authorization`
- **Returns**: `NewsletterListSubscriptionResponse`
- **Error**: `ApiException<Show9Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show9Request` | `src/Beehiiv/Requests/NewsletterListSubscriptions/Show9Request.cs` |
| `NewsletterListSubscriptionResponse` | `src/Beehiiv/Models/NewsletterListSubscriptionResponse.cs` |
| `Show9Error` | `src/Beehiiv/Errors/Show9Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Update

- **Signature**: `Update(UpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `NewsletterListId`, `NewsletterListSubscriptionId`, `Authorization`
- **Returns**: `NewsletterListSubscriptionResponse`
- **Error**: `ApiException<UpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateRequest` | `src/Beehiiv/Requests/NewsletterListSubscriptions/UpdateRequest.cs` |
| `PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest` | `src/Beehiiv/Models/PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest.cs` |
| `NewsletterListSubscriptionResponse` | `src/Beehiiv/Models/NewsletterListSubscriptionResponse.cs` |
| `UpdateError` | `src/Beehiiv/Errors/UpdateError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### UpdateBySubscriptionId

- **Signature**: `UpdateBySubscriptionId(UpdateBySubscriptionIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `NewsletterListId`, `SubscriptionId`, `Authorization`
- **Returns**: `NewsletterListSubscriptionResponse`
- **Error**: `ApiException<UpdateBySubscriptionIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBySubscriptionIdRequest` | `src/Beehiiv/Requests/NewsletterListSubscriptions/UpdateBySubscriptionIdRequest.cs` |
| `PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest` | `src/Beehiiv/Models/PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest.cs` |
| `NewsletterListSubscriptionResponse` | `src/Beehiiv/Models/NewsletterListSubscriptionResponse.cs` |
| `UpdateBySubscriptionIdError` | `src/Beehiiv/Errors/UpdateBySubscriptionIdError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

