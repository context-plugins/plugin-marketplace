<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signals — operations

Accessor: `client.Signals` · Source: `src/DynamicFeed/Api/Signals.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SignalsSignalsGet

- **Signature**: `SignalsSignalsGet(SignalsSignalsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Symbol`
- **Query params (wire ← C#)**: `symbol` ← `Symbol`, `hours` ← `Hours`
- **Returns**: `object`
- **Error**: `ApiException<SignalsSignalsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SignalsSignalsGetRequest` | `src/DynamicFeed/Requests/Signals/SignalsSignalsGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `SignalsSignalsGetError` | `src/DynamicFeed/Errors/SignalsSignalsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

