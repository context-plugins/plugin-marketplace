# Support — operations

Accessor: `client.Support` · Source: `Api/Support.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AskSupportAgent
- **HTTP**: `POST /support/ask` (Default (api))
- **Notes**: Diagnose Firecrawl job, account, and API usage issues with an AI support agent.
- **Signature**: `AskSupportAgent(SupportAskRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SupportAskResponse`
- **Error**: `SdkException<AskSupportAgentError>` — **Case A (typed)**
- **Error accessors**: `TryGetSupportProxyErrorResponse(out SupportProxyErrorResponse)` [400, 401, 503, 504] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSupportDocs
- **HTTP**: `POST /support/docs-search` (Default (api))
- **Notes**: Answer Firecrawl documentation questions using the public docs corpus.
- **Signature**: `SearchSupportDocs(SupportDocsSearchRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SupportDocsSearchResponse`
- **Error**: `SdkException<SearchSupportDocsError>` — **Case A (typed)**
- **Error accessors**: `TryGetSupportProxyErrorResponse(out SupportProxyErrorResponse)` [400, 401, 503, 504] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
