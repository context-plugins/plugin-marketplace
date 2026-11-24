<!-- Generated file — do not edit; regenerated with the SDK. -->

# Versions — operations

Accessor: `client.Versions` · Source: `src/DynamicFeed/Api/Versions.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### VersionsVersionsGet

- **Signature**: `VersionsVersionsGet(VersionsVersionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `product` ← `Product`, `q` ← `Q`, `category` ← `Category`, `only_supported` ← `OnlySupported`, `only_lts` ← `OnlyLts`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<VersionsVersionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VersionsVersionsGetRequest` | `src/DynamicFeed/Requests/Versions/VersionsVersionsGetRequest.cs` |
| `Product` | `src/DynamicFeed/Models/AnyOf/Product.cs` |
| `Q` | `src/DynamicFeed/Models/AnyOf/Q.cs` |
| `Category` | `src/DynamicFeed/Models/AnyOf/Category.cs` |
| `OnlySupported` | `src/DynamicFeed/Models/AnyOf/OnlySupported.cs` |
| `OnlyLts` | `src/DynamicFeed/Models/AnyOf/OnlyLts.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `VersionsVersionsGetError` | `src/DynamicFeed/Errors/VersionsVersionsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

