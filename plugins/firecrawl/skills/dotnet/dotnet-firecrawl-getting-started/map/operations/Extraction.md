# Extraction — operations

Accessor: `client.Extraction` · Source: `Api/Extraction.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ExtractData
- **HTTP**: `POST /extract` (Default (api))
- **Signature**: `ExtractData(ExtractRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ExtractResponse`
- **Error**: `SdkException<ExtractDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetExtract400Error1(out Extract400Error1)` [400] · `TryGetExtract500Error1(out Extract500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetExtractStatus
- **HTTP**: `GET /extract/{id}` (Default (api))
- **Signature**: `GetExtractStatus(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ExtractStatusResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
