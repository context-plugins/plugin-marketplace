<!-- Generated file — do not edit; regenerated with the SDK. -->

# Cite — operations

Accessor: `client.Cite` · Source: `src/DynamicFeed/Api/Cite.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CiteEpCiteGet

- **Signature**: `CiteEpCiteGet(CiteEpCiteGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `subject` ← `Subject`
- **Returns**: `object`
- **Error**: `ApiException<CiteEpCiteGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CiteEpCiteGetRequest` | `src/DynamicFeed/Requests/Cite/CiteEpCiteGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `CiteEpCiteGetError` | `src/DynamicFeed/Errors/CiteEpCiteGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

