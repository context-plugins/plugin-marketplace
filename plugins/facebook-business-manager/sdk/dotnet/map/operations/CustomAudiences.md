<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomAudiences — operations

Accessor: `client.CustomAudiences` · Source: `src/FacebookBusinessManager/Api/CustomAudiences.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomAudience

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateCustomAudience(CreateCustomAudienceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdAccountId`, `Body`
- **Returns**: `CreateResponse`
- **Error**: `ApiException<CreateCustomAudienceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomAudienceRequest` | `src/FacebookBusinessManager/Requests/CustomAudiences/CreateCustomAudienceRequest.cs` |
| `CustomAudienceCreate` | `src/FacebookBusinessManager/Models/CustomAudienceCreate.cs` |
| `CreateResponse` | `src/FacebookBusinessManager/Models/CreateResponse.cs` |
| `CreateCustomAudienceError` | `src/FacebookBusinessManager/Errors/CreateCustomAudienceError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### ListCustomAudiences

- **Auth**: `options.BearerAuth`
- **Signature**: `ListCustomAudiences(ListCustomAudiencesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AdAccountId`
- **Query params (wire ← C#)**: `fields` ← `Fields`, `limit` ← `Limit`, `after` ← `After`
- **Returns**: `CustomAudienceList`
- **Error**: `ApiException<ListCustomAudiencesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomAudiencesRequest` | `src/FacebookBusinessManager/Requests/CustomAudiences/ListCustomAudiencesRequest.cs` |
| `CustomAudienceList` | `src/FacebookBusinessManager/Models/CustomAudienceList.cs` |
| `ListCustomAudiencesError` | `src/FacebookBusinessManager/Errors/ListCustomAudiencesError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

