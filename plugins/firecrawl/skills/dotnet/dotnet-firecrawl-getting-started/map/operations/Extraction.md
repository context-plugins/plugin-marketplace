<!-- Generated file — do not edit; regenerated with the SDK. -->

# Extraction — operations

Accessor: `client.Extraction` · Source: `Api/Extraction.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ExtractData

- **Signature**: `ExtractData(ExtractRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ExtractResponse`
- **Error**: `SdkException<ExtractDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetExtract400Error1(out Extract400Error1)` [400] · `TryGetExtract500Error1(out Extract500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ExtractRequest` | `Models/ExtractRequest.cs` |
| `ExtractResponse` | `Models/ExtractResponse.cs` |
| `ExtractDataError` | `Errors/ExtractDataError.cs` |
| `Extract400Error1` | `Models/Extract400Error1.cs` |
| `Extract500Error1` | `Models/Extract500Error1.cs` |

### GetExtractStatus

- **Signature**: `GetExtractStatus(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ExtractStatusResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ExtractStatusResponse` | `Models/ExtractStatusResponse.cs` |

