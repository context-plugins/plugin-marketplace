<!-- Generated file — do not edit; regenerated with the SDK. -->

# Drought — operations

Accessor: `client.Drought` · Source: `src/DynamicFeed/Api/Drought.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DroughtDroughtGet

- **Signature**: `DroughtDroughtGet(DroughtDroughtGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `area` ← `Area`, `weeks` ← `Weeks`
- **Returns**: `object`
- **Error**: `ApiException<DroughtDroughtGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DroughtDroughtGetRequest` | `src/DynamicFeed/Requests/Drought/DroughtDroughtGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `DroughtDroughtGetError` | `src/DynamicFeed/Errors/DroughtDroughtGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

