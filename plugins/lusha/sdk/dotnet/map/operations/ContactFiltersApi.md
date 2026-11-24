<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactFiltersApi — operations

Accessor: `client.ContactFiltersApi` · Source: `src/Lusha/Api/ContactFiltersApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetContactCountries

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetContactCountries(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<CountryFilter>`
- **Error**: `ApiException<GetContactCountriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountryFilter` | `src/Lusha/Models/CountryFilter.cs` |
| `GetContactCountriesError` | `src/Lusha/Errors/GetContactCountriesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetContactDataPoints

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetContactDataPoints(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<string>`
- **Error**: `ApiException<GetContactDataPointsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContactDataPointsError` | `src/Lusha/Errors/GetContactDataPointsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetContactDepartments

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetContactDepartments(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<string>`
- **Error**: `ApiException<GetContactDepartmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContactDepartmentsError` | `src/Lusha/Errors/GetContactDepartmentsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetContactSeniority

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetContactSeniority(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<string>`
- **Error**: `ApiException<GetContactSeniorityError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContactSeniorityError` | `src/Lusha/Errors/GetContactSeniorityError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### SearchContactLocations

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchContactLocations(SearchContactLocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<LocationFilter>`
- **Error**: `ApiException<SearchContactLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchContactLocationsRequest` | `src/Lusha/Requests/ContactFiltersApi/SearchContactLocationsRequest.cs` |
| `LocationSearchRequest` | `src/Lusha/Models/LocationSearchRequest.cs` |
| `LocationFilter` | `src/Lusha/Models/LocationFilter.cs` |
| `SearchContactLocationsError` | `src/Lusha/Errors/SearchContactLocationsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

