<!-- Generated file — do not edit; regenerated with the SDK. -->

# Countdown — operations

Accessor: `client.Countdown` · Source: `src/DynamicFeed/Api/Countdown.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CountdownEpCountdownGet

- **Signature**: `CountdownEpCountdownGet(CountdownEpCountdownGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `event` ← `Event`
- **Returns**: `object`
- **Error**: `ApiException<CountdownEpCountdownGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CountdownEpCountdownGetRequest` | `src/DynamicFeed/Requests/Countdown/CountdownEpCountdownGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `CountdownEpCountdownGetError` | `src/DynamicFeed/Errors/CountdownEpCountdownGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

