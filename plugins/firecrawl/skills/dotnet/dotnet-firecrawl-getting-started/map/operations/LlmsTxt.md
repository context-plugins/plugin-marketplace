# LlmsTxt — operations

Accessor: `client.LlmsTxt` · Source: `Api/LlmsTxt.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GenerateLlmsTxt
- **HTTP**: `POST /llmstxt` (Default (api))
- **Signature**: `GenerateLlmsTxt(LlmstxtRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LlmstxtResponse`
- **Error**: `SdkException<GenerateLlmsTxtError>` — **Case A (typed)**
- **Error accessors**: `TryGetLlmstxt400Error1(out Llmstxt400Error1)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLlmsTxtStatus
- **HTTP**: `GET /llmstxt/{id}` (Default (api))
- **Signature**: `GetLlmsTxtStatus(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LlmstxtResponse1`
- **Error**: `SdkException<GetLlmsTxtStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetLlmstxt404Error1(out Llmstxt404Error1)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
