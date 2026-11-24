<!-- Generated file — do not edit; regenerated with the SDK. -->

# Statutes — operations

Accessor: `client.Statutes` · Source: `src/CommonElements/Api/Statutes.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### StatutesByState

- **Auth**: `options.BearerAuth`
- **Signature**: `StatutesByState(StatutesByStateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `State`
- **Query params (wire ← C#)**: `state` ← `State`, `chapter` ← `Chapter`, `topic` ← `Topic`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ApiV1StatutesByStateResponse`
- **Error**: `ApiException<StatutesByStateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StatutesByStateRequest` | `src/CommonElements/Requests/Statutes/StatutesByStateRequest.cs` |
| `ApiV1StatutesByStateResponse` | `src/CommonElements/Models/ApiV1StatutesByStateResponse.cs` |
| `StatutesByStateError` | `src/CommonElements/Errors/StatutesByStateError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### StatutesSearch

- **Auth**: `options.BearerAuth`
- **Signature**: `StatutesSearch(StatutesSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Q`
- **Query params (wire ← C#)**: `q` ← `Q`, `state` ← `State`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ApiV1StatutesSearchResponse`
- **Error**: `ApiException<StatutesSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StatutesSearchRequest` | `src/CommonElements/Requests/Statutes/StatutesSearchRequest.cs` |
| `ApiV1StatutesSearchResponse` | `src/CommonElements/Models/ApiV1StatutesSearchResponse.cs` |
| `StatutesSearchError` | `src/CommonElements/Errors/StatutesSearchError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### StatutesSectionDetail

- **Auth**: `options.BearerAuth`
- **Signature**: `StatutesSectionDetail(StatutesSectionDetailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1StatutesSectionsResponse`
- **Error**: `ApiException<StatutesSectionDetailError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StatutesSectionDetailRequest` | `src/CommonElements/Requests/Statutes/StatutesSectionDetailRequest.cs` |
| `ApiV1StatutesSectionsResponse` | `src/CommonElements/Models/ApiV1StatutesSectionsResponse.cs` |
| `StatutesSectionDetailError` | `src/CommonElements/Errors/StatutesSectionDetailError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

