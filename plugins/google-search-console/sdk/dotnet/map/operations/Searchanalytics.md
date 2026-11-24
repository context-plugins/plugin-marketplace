<!-- Generated file — do not edit; regenerated with the SDK. -->

# Searchanalytics — operations

Accessor: `client.Searchanalytics` · Source: `src/GoogleSearchConsole/Api/Searchanalytics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### WebmastersSearchanalyticsQuery

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `WebmastersSearchanalyticsQuery(WebmastersSearchanalyticsQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SiteUrl`, `Body`
- **Returns**: `SearchAnalyticsQueryResponse`
- **Error**: `ApiException<WebmastersSearchanalyticsQueryError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebmastersSearchanalyticsQueryRequest` | `src/GoogleSearchConsole/Requests/Searchanalytics/WebmastersSearchanalyticsQueryRequest.cs` |
| `SearchAnalyticsQueryRequest` | `src/GoogleSearchConsole/Models/SearchAnalyticsQueryRequest.cs` |
| `SearchAnalyticsQueryResponse` | `src/GoogleSearchConsole/Models/SearchAnalyticsQueryResponse.cs` |
| `WebmastersSearchanalyticsQueryError` | `src/GoogleSearchConsole/Errors/WebmastersSearchanalyticsQueryError.cs` |
| `GoogleRpcError` | `src/GoogleSearchConsole/Models/GoogleRpcError.cs` |

