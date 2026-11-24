<!-- Generated file — do not edit; regenerated with the SDK. -->

# SubscriptionTags — operations

Accessor: `client.SubscriptionTags` · Source: `src/Beehiiv/Api/SubscriptionTags.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create10

- **Signature**: `Create10(Create10Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `SubscriptionId`, `Authorization`
- **Returns**: `SubscriptionTagsCreateResponse`
- **Error**: `ApiException<Create10Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Create10Request` | `src/Beehiiv/Requests/SubscriptionTags/Create10Request.cs` |
| `PublicationsSubscriptionsTagsRequest` | `src/Beehiiv/Models/PublicationsSubscriptionsTagsRequest.cs` |
| `SubscriptionTagsCreateResponse` | `src/Beehiiv/Models/SubscriptionTagsCreateResponse.cs` |
| `Create10Error` | `src/Beehiiv/Errors/Create10Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

