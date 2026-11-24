<!-- Generated file — do not edit; regenerated with the SDK. -->

# CarbonIntensity — operations

Accessor: `client.CarbonIntensity` · Source: `src/DynamicFeed/Api/CarbonIntensity.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CarbonIntensityCarbonIntensityGet

- **Signature**: `CarbonIntensityCarbonIntensityGet(CarbonIntensityCarbonIntensityGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<CarbonIntensityCarbonIntensityGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CarbonIntensityCarbonIntensityGetRequest` | `src/DynamicFeed/Requests/CarbonIntensity/CarbonIntensityCarbonIntensityGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `CarbonIntensityCarbonIntensityGetError` | `src/DynamicFeed/Errors/CarbonIntensityCarbonIntensityGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

