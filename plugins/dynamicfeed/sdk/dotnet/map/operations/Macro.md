<!-- Generated file — do not edit; regenerated with the SDK. -->

# Macro — operations

Accessor: `client.Macro` · Source: `src/DynamicFeed/Api/Macro.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GlobalMacroMacroGet

- **Signature**: `GlobalMacroMacroGet(GlobalMacroMacroGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `country` ← `Country`, `indicator` ← `Indicator`
- **Returns**: `object`
- **Error**: `ApiException<GlobalMacroMacroGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GlobalMacroMacroGetRequest` | `src/DynamicFeed/Requests/Macro/GlobalMacroMacroGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `GlobalMacroMacroGetError` | `src/DynamicFeed/Errors/GlobalMacroMacroGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

