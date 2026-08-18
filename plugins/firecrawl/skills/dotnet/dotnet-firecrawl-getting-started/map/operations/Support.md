<!-- Generated file — do not edit; regenerated with the SDK. -->

# Support — operations

Accessor: `client.Support` · Source: `Api/Support.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AskSupportAgent

- **Signature**: `AskSupportAgent(SupportAskRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SupportAskResponse`
- **Error**: `SdkException<AskSupportAgentError>` — **Case A (typed)**
- **Error accessors**: `TryGetSupportProxyErrorResponse(out SupportProxyErrorResponse)` [400, 401, 503, 504] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SupportAskRequest` | `Models/SupportAskRequest.cs` |
| `SupportAskResponse` | `Models/SupportAskResponse.cs` |
| `AskSupportAgentError` | `Errors/AskSupportAgentError.cs` |
| `SupportProxyErrorResponse` | `Models/SupportProxyErrorResponse.cs` |

### SearchSupportDocs

- **Signature**: `SearchSupportDocs(SupportDocsSearchRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SupportDocsSearchResponse`
- **Error**: `SdkException<SearchSupportDocsError>` — **Case A (typed)**
- **Error accessors**: `TryGetSupportProxyErrorResponse(out SupportProxyErrorResponse)` [400, 401, 503, 504] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SupportDocsSearchRequest` | `Models/SupportDocsSearchRequest.cs` |
| `SupportDocsSearchResponse` | `Models/SupportDocsSearchResponse.cs` |
| `SearchSupportDocsError` | `Errors/SearchSupportDocsError.cs` |
| `SupportProxyErrorResponse` | `Models/SupportProxyErrorResponse.cs` |

