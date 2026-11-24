<!-- Generated file — do not edit; regenerated with the SDK. -->

# SpaceWeather — operations

Accessor: `client.SpaceWeather` · Source: `src/DynamicFeed/Api/SpaceWeather.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SpaceWeatherSpaceWeatherGet

- **Signature**: `SpaceWeatherSpaceWeatherGet(SpaceWeatherSpaceWeatherGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<SpaceWeatherSpaceWeatherGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpaceWeatherSpaceWeatherGetRequest` | `src/DynamicFeed/Requests/SpaceWeather/SpaceWeatherSpaceWeatherGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `SpaceWeatherSpaceWeatherGetError` | `src/DynamicFeed/Errors/SpaceWeatherSpaceWeatherGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

