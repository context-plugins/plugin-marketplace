<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sites — operations

Accessor: `client.Sites` · Source: `src/GoogleSearchConsole/Api/Sites.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### WebmastersSitesAdd

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `WebmastersSitesAdd(WebmastersSitesAddRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SiteUrl`
- **Returns**: `void` (Task)
- **Error**: `ApiException<WebmastersSitesAddError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebmastersSitesAddRequest` | `src/GoogleSearchConsole/Requests/Sites/WebmastersSitesAddRequest.cs` |
| `WebmastersSitesAddError` | `src/GoogleSearchConsole/Errors/WebmastersSitesAddError.cs` |
| `GoogleRpcError` | `src/GoogleSearchConsole/Models/GoogleRpcError.cs` |

### WebmastersSitesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `WebmastersSitesDelete(WebmastersSitesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SiteUrl`
- **Returns**: `void` (Task)
- **Error**: `ApiException<WebmastersSitesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebmastersSitesDeleteRequest` | `src/GoogleSearchConsole/Requests/Sites/WebmastersSitesDeleteRequest.cs` |
| `WebmastersSitesDeleteError` | `src/GoogleSearchConsole/Errors/WebmastersSitesDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleSearchConsole/Models/GoogleRpcError.cs` |

### WebmastersSitesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `WebmastersSitesGet(WebmastersSitesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SiteUrl`
- **Returns**: `WmxSite`
- **Error**: `ApiException<WebmastersSitesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebmastersSitesGetRequest` | `src/GoogleSearchConsole/Requests/Sites/WebmastersSitesGetRequest.cs` |
| `WmxSite` | `src/GoogleSearchConsole/Models/WmxSite.cs` |
| `WebmastersSitesGetError` | `src/GoogleSearchConsole/Errors/WebmastersSitesGetError.cs` |
| `GoogleRpcError` | `src/GoogleSearchConsole/Models/GoogleRpcError.cs` |

### WebmastersSitesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `WebmastersSitesList(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SitesListResponse`
- **Error**: `ApiException<WebmastersSitesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SitesListResponse` | `src/GoogleSearchConsole/Models/SitesListResponse.cs` |
| `WebmastersSitesListError` | `src/GoogleSearchConsole/Errors/WebmastersSitesListError.cs` |
| `GoogleRpcError` | `src/GoogleSearchConsole/Models/GoogleRpcError.cs` |

