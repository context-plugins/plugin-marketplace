<!-- Generated file — do not edit; regenerated with the SDK. -->

# Resolve — operations

Accessor: `client.Resolve` · Source: `src/PlinthUsGrantsData/Api/Resolve.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Search

- **Signature**: `GetApiV1Search(GetApiV1SearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Q`
- **Query params (wire ← C#)**: `q` ← `Q`, `jurisdiction` ← `Jurisdiction`, `state` ← `State`, `limit` ← `Limit`, `min` ← `Min`, `max` ← `Max`, `strict` ← `Strict`, `example` ← `Example`
- **Returns**: `ApiV1SearchResponse`
- **Error**: `ApiException<GetApiV1SearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1SearchRequest` | `src/PlinthUsGrantsData/Requests/Resolve/GetApiV1SearchRequest.cs` |
| `JurisdictionEnum` | `src/PlinthUsGrantsData/Models/Enums/JurisdictionEnum.cs` |
| `ApiV1SearchResponse` | `src/PlinthUsGrantsData/Models/ApiV1SearchResponse.cs` |
| `GetApiV1SearchError` | `src/PlinthUsGrantsData/Errors/GetApiV1SearchError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |

### SearchOrganizations

- **Signature**: `SearchOrganizations(SearchOrganizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Q`
- **Query params (wire ← C#)**: `q` ← `Q`, `state` ← `State`, `mode` ← `Mode`
- **Returns**: `ApiSearchResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SearchOrganizationsRequest` | `src/PlinthUsGrantsData/Requests/Resolve/SearchOrganizationsRequest.cs` |
| `ModeEnum` | `src/PlinthUsGrantsData/Models/Enums/ModeEnum.cs` |
| `ApiSearchResponse` | `src/PlinthUsGrantsData/Models/ApiSearchResponse.cs` |

