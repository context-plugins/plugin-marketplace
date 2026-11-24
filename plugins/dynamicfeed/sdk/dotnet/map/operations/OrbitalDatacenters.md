<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrbitalDatacenters — operations

Accessor: `client.OrbitalDatacenters` · Source: `src/DynamicFeed/Api/OrbitalDatacenters.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### OrbitalDatacentersOrbitalDatacentersGet

- **Signature**: `OrbitalDatacentersOrbitalDatacentersGet(OrbitalDatacentersOrbitalDatacentersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<OrbitalDatacentersOrbitalDatacentersGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OrbitalDatacentersOrbitalDatacentersGetRequest` | `src/DynamicFeed/Requests/OrbitalDatacenters/OrbitalDatacentersOrbitalDatacentersGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `OrbitalDatacentersOrbitalDatacentersGetError` | `src/DynamicFeed/Errors/OrbitalDatacentersOrbitalDatacentersGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

