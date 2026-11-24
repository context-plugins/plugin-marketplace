<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recalls — operations

Accessor: `client.Recalls` · Source: `src/DynamicFeed/Api/Recalls.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### RecallsRecallsGet

- **Signature**: `RecallsRecallsGet(RecallsRecallsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `query` ← `Query`, `category` ← `Category`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<RecallsRecallsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecallsRecallsGetRequest` | `src/DynamicFeed/Requests/Recalls/RecallsRecallsGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `RecallsRecallsGetError` | `src/DynamicFeed/Errors/RecallsRecallsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

