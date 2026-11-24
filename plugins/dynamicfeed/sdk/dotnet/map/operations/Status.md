<!-- Generated file — do not edit; regenerated with the SDK. -->

# Status — operations

Accessor: `client.Status` · Source: `src/DynamicFeed/Api/Status.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### StatusStatusGet

- **Signature**: `StatusStatusGet(StatusStatusGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `category` ← `Category`, `only_issues` ← `OnlyIssues`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<StatusStatusGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StatusStatusGetRequest` | `src/DynamicFeed/Requests/Status/StatusStatusGetRequest.cs` |
| `Category` | `src/DynamicFeed/Models/AnyOf/Category.cs` |
| `OnlyIssues` | `src/DynamicFeed/Models/AnyOf/OnlyIssues.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `StatusStatusGetError` | `src/DynamicFeed/Errors/StatusStatusGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

