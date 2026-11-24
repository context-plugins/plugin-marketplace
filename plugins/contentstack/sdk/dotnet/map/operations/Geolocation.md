<!-- Generated file — do not edit; regenerated with the SDK. -->

# Geolocation — operations

Accessor: `client.Geolocation` · Source: `src/Contentstack/Api/Geolocation.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetGeoCities

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetGeoCities(GetGeoCitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`
- **Returns**: `GeoList`
- **Error**: `ApiException<GetGeoCitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGeoCitiesRequest` | `src/Contentstack/Requests/Geolocation/GetGeoCitiesRequest.cs` |
| `GeoList` | `src/Contentstack/Models/GeoList.cs` |
| `GetGeoCitiesError` | `src/Contentstack/Errors/GetGeoCitiesError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### GetGeoCountries

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetGeoCountries(GetGeoCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`
- **Returns**: `GeoList`
- **Error**: `ApiException<GetGeoCountriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGeoCountriesRequest` | `src/Contentstack/Requests/Geolocation/GetGeoCountriesRequest.cs` |
| `GeoList` | `src/Contentstack/Models/GeoList.cs` |
| `GetGeoCountriesError` | `src/Contentstack/Errors/GetGeoCountriesError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

### GetGeoRegions

- **Server group**: `DefaultContentstackPersonalizeManagementAttributesApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetGeoRegions(GetGeoRegionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XProjectUid`
- **Returns**: `GeoList`
- **Error**: `ApiException<GetGeoRegionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorContentstackPersonalizeManagementAttributesApi([NotNullWhen(true)] out ErrorContentstackPersonalizeManagementAttributesApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGeoRegionsRequest` | `src/Contentstack/Requests/Geolocation/GetGeoRegionsRequest.cs` |
| `GeoList` | `src/Contentstack/Models/GeoList.cs` |
| `GetGeoRegionsError` | `src/Contentstack/Errors/GetGeoRegionsError.cs` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `src/Contentstack/Models/ErrorContentstackPersonalizeManagementAttributesApi.cs` |

