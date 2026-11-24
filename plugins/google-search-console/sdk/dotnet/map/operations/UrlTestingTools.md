<!-- Generated file — do not edit; regenerated with the SDK. -->

# UrlTestingTools — operations

Accessor: `client.UrlTestingTools` · Source: `src/GoogleSearchConsole/Api/UrlTestingTools.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchconsoleUrlTestingToolsMobileFriendlyTestRun

- **Auth**: `options.ApiKey`
- **Signature**: `SearchconsoleUrlTestingToolsMobileFriendlyTestRun(SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RunMobileFriendlyTestResponse`
- **Error**: `ApiException<SearchconsoleUrlTestingToolsMobileFriendlyTestRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest` | `src/GoogleSearchConsole/Requests/UrlTestingTools/SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest.cs` |
| `RunMobileFriendlyTestRequest` | `src/GoogleSearchConsole/Models/RunMobileFriendlyTestRequest.cs` |
| `RunMobileFriendlyTestResponse` | `src/GoogleSearchConsole/Models/RunMobileFriendlyTestResponse.cs` |
| `SearchconsoleUrlTestingToolsMobileFriendlyTestRunError` | `src/GoogleSearchConsole/Errors/SearchconsoleUrlTestingToolsMobileFriendlyTestRunError.cs` |
| `GoogleRpcError` | `src/GoogleSearchConsole/Models/GoogleRpcError.cs` |

