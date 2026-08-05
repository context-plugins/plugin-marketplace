# LlmconnectorTermsOfService — operations

Accessor: `client.LlmconnectorTermsOfService` · Source: `Api/LlmconnectorTermsOfService.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### LlmApiActionToTermsOfService
- **HTTP**: `POST /llm-connector/api/v1/terms-of-service/action` (Default)
- **Notes**: Record the current user's acceptance or rejection of the current version of the terms of service.
- **Signature**: `LlmApiActionToTermsOfService(TermsOfServiceActionSchema body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TermsOfServiceActionResponseSchema`
- **Error**: `SdkException<LlmApiActionToTermsOfServiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetJsonElement(out JsonElement)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LlmApiGetTermsOfService
- **HTTP**: `GET /llm-connector/api/v1/terms-of-service` (Default)
- **Notes**: Retrieve the latest terms of service content and version along with the current user's agreement status.
- **Signature**: `LlmApiGetTermsOfService(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TermsOfServiceResponseSchema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
