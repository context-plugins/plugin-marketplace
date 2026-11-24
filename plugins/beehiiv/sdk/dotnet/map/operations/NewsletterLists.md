<!-- Generated file — do not edit; regenerated with the SDK. -->

# NewsletterLists — operations

Accessor: `client.NewsletterLists` · Source: `src/Beehiiv/Api/NewsletterLists.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create7

- **Signature**: `Create7(Create7Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `NewsletterListResponse`
- **Error**: `ApiException<Create7Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Create7Request` | `src/Beehiiv/Requests/NewsletterLists/Create7Request.cs` |
| `PublicationsNewsletterListsRequest` | `src/Beehiiv/Models/PublicationsNewsletterListsRequest.cs` |
| `NewsletterListResponse` | `src/Beehiiv/Models/NewsletterListResponse.cs` |
| `Create7Error` | `src/Beehiiv/Errors/Create7Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Delete2

- **Signature**: `Delete2(Delete2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `NewsletterListId`, `Authorization`
- **Returns**: `void` (Task)
- **Error**: `ApiException<Delete2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Delete2Request` | `src/Beehiiv/Requests/NewsletterLists/Delete2Request.cs` |
| `Delete2Error` | `src/Beehiiv/Errors/Delete2Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Index14

- **Signature**: `Index14(Index14Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `page` ← `Page`, `direction` ← `Direction`
- **Returns**: `NewsletterListIndexResponse`
- **Error**: `ApiException<Index14Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index14Request` | `src/Beehiiv/Requests/NewsletterLists/Index14Request.cs` |
| `RequestDirection` | `src/Beehiiv/Models/Enums/RequestDirection.cs` |
| `NewsletterListIndexResponse` | `src/Beehiiv/Models/NewsletterListIndexResponse.cs` |
| `Index14Error` | `src/Beehiiv/Errors/Index14Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Show10

- **Signature**: `Show10(Show10Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `NewsletterListId`, `Authorization`
- **Returns**: `NewsletterListResponse`
- **Error**: `ApiException<Show10Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show10Request` | `src/Beehiiv/Requests/NewsletterLists/Show10Request.cs` |
| `NewsletterListResponse` | `src/Beehiiv/Models/NewsletterListResponse.cs` |
| `Show10Error` | `src/Beehiiv/Errors/Show10Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Update2

- **Signature**: `Update2(Update2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `NewsletterListId`, `Authorization`
- **Returns**: `NewsletterListResponse`
- **Error**: `ApiException<Update2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Update2Request` | `src/Beehiiv/Requests/NewsletterLists/Update2Request.cs` |
| `PublicationsNewsletterListsRequest1` | `src/Beehiiv/Models/PublicationsNewsletterListsRequest1.cs` |
| `NewsletterListResponse` | `src/Beehiiv/Models/NewsletterListResponse.cs` |
| `Update2Error` | `src/Beehiiv/Errors/Update2Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

