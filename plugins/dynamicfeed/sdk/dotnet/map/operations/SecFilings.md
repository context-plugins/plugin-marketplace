<!-- Generated file — do not edit; regenerated with the SDK. -->

# SecFilings — operations

Accessor: `client.SecFilings` · Source: `src/DynamicFeed/Api/SecFilings.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SecFilingsSecFilingsGet

- **Signature**: `SecFilingsSecFilingsGet(SecFilingsSecFilingsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `ticker` ← `Ticker`, `form` ← `Form`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<SecFilingsSecFilingsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SecFilingsSecFilingsGetRequest` | `src/DynamicFeed/Requests/SecFilings/SecFilingsSecFilingsGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `SecFilingsSecFilingsGetError` | `src/DynamicFeed/Errors/SecFilingsSecFilingsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

