<!-- Generated file — do not edit; regenerated with the SDK. -->

# LocationsApi — operations

Accessor: `client.LocationsApi` · Source: `src/PrismaReviews/Api/LocationsApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetLocation

- **Auth**: `options.ApiKey`
- **Signature**: `GetLocation(GetLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Location`
- **Error**: `ApiException<GetLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLocationRequest` | `src/PrismaReviews/Requests/LocationsApi/GetLocationRequest.cs` |
| `Location` | `src/PrismaReviews/Models/Location.cs` |
| `GetLocationError` | `src/PrismaReviews/Errors/GetLocationError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

### ListLocations

- **Auth**: `options.ApiKey`
- **Signature**: `ListLocations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `LocationList`
- **Error**: `ApiException<ListLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LocationList` | `src/PrismaReviews/Models/LocationList.cs` |
| `ListLocationsError` | `src/PrismaReviews/Errors/ListLocationsError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

### RefreshLocation

- **Auth**: `options.ApiKey`
- **Signature**: `RefreshLocation(RefreshLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `LocationRefresh`
- **Error**: `ApiException<RefreshLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 409, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RefreshLocationRequest` | `src/PrismaReviews/Requests/LocationsApi/RefreshLocationRequest.cs` |
| `LocationRefresh` | `src/PrismaReviews/Models/LocationRefresh.cs` |
| `RefreshLocationError` | `src/PrismaReviews/Errors/RefreshLocationError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

