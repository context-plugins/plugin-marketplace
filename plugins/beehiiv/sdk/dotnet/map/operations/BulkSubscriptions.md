<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkSubscriptions — operations

Accessor: `client.BulkSubscriptions` · Source: `src/Beehiiv/Api/BulkSubscriptions.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create3

- **Signature**: `Create3(Create3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Returns**: `BulkSubscriptionCreateResponse`
- **Error**: `ApiException<Create3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Create3Request` | `src/Beehiiv/Requests/BulkSubscriptions/Create3Request.cs` |
| `PublicationsBulkSubscriptionsRequest` | `src/Beehiiv/Models/PublicationsBulkSubscriptionsRequest.cs` |
| `BulkSubscriptionCreateResponse` | `src/Beehiiv/Models/BulkSubscriptionCreateResponse.cs` |
| `Create3Error` | `src/Beehiiv/Errors/Create3Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

