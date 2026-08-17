<!-- Generated file — do not edit; regenerated with the SDK. -->

# LlMsTxt — operations

Accessor: `client.LlMsTxt` · Source: `Api/LlMsTxt.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GenerateLlMsTxt

- **Signature**: `GenerateLlMsTxt(LlmstxtRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `LlmstxtResponse`
- **Error**: `SdkException<GenerateLlMsTxtError>` — **Case A (typed)**
- **Error accessors**: `TryGetLlmstxt400Error1(out Llmstxt400Error1)` [400] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `LlmstxtRequest` | `Models/LlmstxtRequest.cs` |
| `LlmstxtResponse` | `Models/LlmstxtResponse.cs` |
| `GenerateLlMsTxtError` | `Errors/GenerateLlMsTxtError.cs` |
| `Llmstxt400Error1` | `Models/Llmstxt400Error1.cs` |

### GetLlMsTxtStatus

- **Signature**: `GetLlMsTxtStatus(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `LlmstxtResponse1`
- **Error**: `SdkException<GetLlMsTxtStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetLlmstxt404Error1(out Llmstxt404Error1)` [404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `LlmstxtResponse1` | `Models/LlmstxtResponse1.cs` |
| `GetLlMsTxtStatusError` | `Errors/GetLlMsTxtStatusError.cs` |
| `Llmstxt404Error1` | `Models/Llmstxt404Error1.cs` |

