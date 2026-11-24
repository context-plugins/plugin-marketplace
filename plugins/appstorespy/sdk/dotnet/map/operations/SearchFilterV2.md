<!-- Generated file — do not edit; regenerated with the SDK. -->

# SearchFilterV2 — operations

Accessor: `client.SearchFilterV2` · Source: `src/AppstoreSpy/Api/SearchFilterV2.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetFilterSearchIosAppsQueryPost2

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetFilterSearchIosAppsQueryPost2(GetFilterSearchIosAppsQueryPost2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IosAppListResponse`
- **Error**: `ApiException<GetFilterSearchIosAppsQueryPost2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetIosAppsQuery401Error1([NotNullWhen(true)] out IosAppsQuery401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFilterSearchIosAppsQueryPost2Request` | `src/AppstoreSpy/Requests/SearchFilterV2/GetFilterSearchIosAppsQueryPost2Request.cs` |
| `IosAppSearchBody` | `src/AppstoreSpy/Models/IosAppSearchBody.cs` |
| `IosAppListResponse` | `src/AppstoreSpy/Models/IosAppListResponse.cs` |
| `GetFilterSearchIosAppsQueryPost2Error` | `src/AppstoreSpy/Errors/GetFilterSearchIosAppsQueryPost2Error.cs` |
| `IosAppsQuery401Error1` | `src/AppstoreSpy/Models/IosAppsQuery401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

