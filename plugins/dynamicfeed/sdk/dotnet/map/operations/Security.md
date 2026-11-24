<!-- Generated file — do not edit; regenerated with the SDK. -->

# Security — operations

Accessor: `client.Security` · Source: `src/DynamicFeed/Api/Security.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PackageHealthEpPackageHealthGet

- **Signature**: `PackageHealthEpPackageHealthGet(PackageHealthEpPackageHealthGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Package`
- **Query params (wire ← C#)**: `package` ← `Package`, `ecosystem` ← `Ecosystem`, `version` ← `Version`
- **Returns**: `object`
- **Error**: `ApiException<PackageHealthEpPackageHealthGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PackageHealthEpPackageHealthGetRequest` | `src/DynamicFeed/Requests/Security/PackageHealthEpPackageHealthGetRequest.cs` |
| `VersionModel` | `src/DynamicFeed/Models/AnyOf/VersionModel.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `PackageHealthEpPackageHealthGetError` | `src/DynamicFeed/Errors/PackageHealthEpPackageHealthGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

