<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdCreatives — operations

Accessor: `client.AdCreatives` · Source: `src/FacebookBusinessManager/Api/AdCreatives.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAdCreative

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateAdCreative(CreateAdCreativeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdAccountId`, `Body`
- **Returns**: `CreateResponse`
- **Error**: `ApiException<CreateAdCreativeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAdCreativeRequest` | `src/FacebookBusinessManager/Requests/AdCreatives/CreateAdCreativeRequest.cs` |
| `AdCreativeCreate` | `src/FacebookBusinessManager/Models/AdCreativeCreate.cs` |
| `CreateResponse` | `src/FacebookBusinessManager/Models/CreateResponse.cs` |
| `CreateAdCreativeError` | `src/FacebookBusinessManager/Errors/CreateAdCreativeError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### ListAdCreatives

- **Auth**: `options.BearerAuth`
- **Signature**: `ListAdCreatives(ListAdCreativesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdAccountId`
- **Query params (wire ← C#)**: `fields` ← `Fields`, `limit` ← `Limit`, `after` ← `After`
- **Returns**: `AdCreativeList`
- **Error**: `ApiException<ListAdCreativesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAdCreativesRequest` | `src/FacebookBusinessManager/Requests/AdCreatives/ListAdCreativesRequest.cs` |
| `AdCreativeList` | `src/FacebookBusinessManager/Models/AdCreativeList.cs` |
| `ListAdCreativesError` | `src/FacebookBusinessManager/Errors/ListAdCreativesError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

