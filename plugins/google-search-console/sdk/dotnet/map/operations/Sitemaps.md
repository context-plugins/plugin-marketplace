<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sitemaps — operations

Accessor: `client.Sitemaps` · Source: `src/GoogleSearchConsole/Api/Sitemaps.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### WebmastersSitemapsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `WebmastersSitemapsDelete(WebmastersSitemapsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SiteUrl`, `Feedpath`
- **Returns**: `void` (Task)
- **Error**: `ApiException<WebmastersSitemapsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebmastersSitemapsDeleteRequest` | `src/GoogleSearchConsole/Requests/Sitemaps/WebmastersSitemapsDeleteRequest.cs` |
| `WebmastersSitemapsDeleteError` | `src/GoogleSearchConsole/Errors/WebmastersSitemapsDeleteError.cs` |
| `GoogleRpcError` | `src/GoogleSearchConsole/Models/GoogleRpcError.cs` |

### WebmastersSitemapsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `WebmastersSitemapsGet(WebmastersSitemapsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SiteUrl`, `Feedpath`
- **Returns**: `WmxSitemap`
- **Error**: `ApiException<WebmastersSitemapsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebmastersSitemapsGetRequest` | `src/GoogleSearchConsole/Requests/Sitemaps/WebmastersSitemapsGetRequest.cs` |
| `WmxSitemap` | `src/GoogleSearchConsole/Models/WmxSitemap.cs` |
| `WebmastersSitemapsGetError` | `src/GoogleSearchConsole/Errors/WebmastersSitemapsGetError.cs` |
| `GoogleRpcError` | `src/GoogleSearchConsole/Models/GoogleRpcError.cs` |

### WebmastersSitemapsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `WebmastersSitemapsList(WebmastersSitemapsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SiteUrl`
- **Query params (wire ← C#)**: `sitemapIndex` ← `SitemapIndex`
- **Returns**: `SitemapsListResponse`
- **Error**: `ApiException<WebmastersSitemapsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebmastersSitemapsListRequest` | `src/GoogleSearchConsole/Requests/Sitemaps/WebmastersSitemapsListRequest.cs` |
| `SitemapsListResponse` | `src/GoogleSearchConsole/Models/SitemapsListResponse.cs` |
| `WebmastersSitemapsListError` | `src/GoogleSearchConsole/Errors/WebmastersSitemapsListError.cs` |
| `GoogleRpcError` | `src/GoogleSearchConsole/Models/GoogleRpcError.cs` |

### WebmastersSitemapsSubmit

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `WebmastersSitemapsSubmit(WebmastersSitemapsSubmitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SiteUrl`, `Feedpath`
- **Returns**: `void` (Task)
- **Error**: `ApiException<WebmastersSitemapsSubmitError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebmastersSitemapsSubmitRequest` | `src/GoogleSearchConsole/Requests/Sitemaps/WebmastersSitemapsSubmitRequest.cs` |
| `WebmastersSitemapsSubmitError` | `src/GoogleSearchConsole/Errors/WebmastersSitemapsSubmitError.cs` |
| `GoogleRpcError` | `src/GoogleSearchConsole/Models/GoogleRpcError.cs` |

