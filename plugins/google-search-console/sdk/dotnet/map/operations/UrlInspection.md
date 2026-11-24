<!-- Generated file — do not edit; regenerated with the SDK. -->

# UrlInspection — operations

Accessor: `client.UrlInspection` · Source: `src/GoogleSearchConsole/Api/UrlInspection.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchconsoleUrlInspectionIndexInspect

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `SearchconsoleUrlInspectionIndexInspect(SearchconsoleUrlInspectionIndexInspectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `InspectUrlIndexResponse`
- **Error**: `ApiException<SearchconsoleUrlInspectionIndexInspectError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchconsoleUrlInspectionIndexInspectRequest` | `src/GoogleSearchConsole/Requests/UrlInspection/SearchconsoleUrlInspectionIndexInspectRequest.cs` |
| `InspectUrlIndexRequest` | `src/GoogleSearchConsole/Models/InspectUrlIndexRequest.cs` |
| `InspectUrlIndexResponse` | `src/GoogleSearchConsole/Models/InspectUrlIndexResponse.cs` |
| `SearchconsoleUrlInspectionIndexInspectError` | `src/GoogleSearchConsole/Errors/SearchconsoleUrlInspectionIndexInspectError.cs` |
| `GoogleRpcError` | `src/GoogleSearchConsole/Models/GoogleRpcError.cs` |

