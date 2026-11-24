<!-- Generated file — do not edit; regenerated with the SDK. -->

# Persons — operations

Accessor: `client.Persons` · Source: `src/Compabase/Api/Persons.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPersonsByPersonIdConnections

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetPersonsByPersonIdConnections(GetPersonsByPersonIdConnectionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PersonId`
- **Returns**: `PersonConnectionsResponse`
- **Error**: `ApiException<GetPersonsByPersonIdConnectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPersonsByPersonIdConnectionsRequest` | `src/Compabase/Requests/Persons/GetPersonsByPersonIdConnectionsRequest.cs` |
| `PersonConnectionsResponse` | `src/Compabase/Models/PersonConnectionsResponse.cs` |
| `GetPersonsByPersonIdConnectionsError` | `src/Compabase/Errors/GetPersonsByPersonIdConnectionsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetPersonsSearch

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetPersonsSearch(GetPersonsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Q`
- **Query params (wire ← C#)**: `q` ← `Q`, `limit` ← `Limit`
- **Returns**: `PersonsSearchResponse`
- **Error**: `ApiException<GetPersonsSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPersonsSearchRequest` | `src/Compabase/Requests/Persons/GetPersonsSearchRequest.cs` |
| `PersonsSearchResponse` | `src/Compabase/Models/PersonsSearchResponse.cs` |
| `GetPersonsSearchError` | `src/Compabase/Errors/GetPersonsSearchError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

