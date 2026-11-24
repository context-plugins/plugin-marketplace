<!-- Generated file — do not edit; regenerated with the SDK. -->

# Files — operations

Accessor: `client.Files` · Source: `src/Sapling/Api/Files.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SaplingChunkHtml

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingChunkHtml(SaplingChunkHtmlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1IngestChunkHtmlResponse`
- **Error**: `ApiException<SaplingChunkHtmlError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingChunkHtmlRequest` | `src/Sapling/Requests/Files/SaplingChunkHtmlRequest.cs` |
| `ApiV1IngestChunkHtmlRequest` | `src/Sapling/Models/ApiV1IngestChunkHtmlRequest.cs` |
| `ApiV1IngestChunkHtmlResponse` | `src/Sapling/Models/ApiV1IngestChunkHtmlResponse.cs` |
| `SaplingChunkHtmlError` | `src/Sapling/Errors/SaplingChunkHtmlError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |

### SaplingChunkText

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingChunkText(SaplingChunkTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1IngestChunkTextResponse`
- **Error**: `ApiException<SaplingChunkTextError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingChunkTextRequest` | `src/Sapling/Requests/Files/SaplingChunkTextRequest.cs` |
| `ApiV1IngestChunkTextRequest` | `src/Sapling/Models/ApiV1IngestChunkTextRequest.cs` |
| `ApiV1IngestChunkTextResponse` | `src/Sapling/Models/ApiV1IngestChunkTextResponse.cs` |
| `SaplingChunkTextError` | `src/Sapling/Errors/SaplingChunkTextError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |

### SaplingDocxToText

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingDocxToText(SaplingDocxToTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `File`
- **Query params (wire ← C#)**: `return_usage` ← `ReturnUsageQuery`, `key` ← `Key`
- **Returns**: `ApiV1IngestDocxToTextResponse`
- **Error**: `ApiException<SaplingDocxToTextError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1IngestDocxToText400Error1([NotNullWhen(true)] out ApiV1IngestDocxToText400Error1? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetApiV1IngestDocxToText413Error1([NotNullWhen(true)] out ApiV1IngestDocxToText413Error1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingDocxToTextRequest` | `src/Sapling/Requests/Files/SaplingDocxToTextRequest.cs` |
| `ApiV1IngestDocxToTextResponse` | `src/Sapling/Models/ApiV1IngestDocxToTextResponse.cs` |
| `SaplingDocxToTextError` | `src/Sapling/Errors/SaplingDocxToTextError.cs` |
| `ApiV1IngestDocxToText400Error1` | `src/Sapling/Models/ApiV1IngestDocxToText400Error1.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `ApiV1IngestDocxToText413Error1` | `src/Sapling/Models/ApiV1IngestDocxToText413Error1.cs` |

### SaplingPdfToText

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingPdfToText(SaplingPdfToTextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `File`
- **Query params (wire ← C#)**: `return_usage` ← `ReturnUsageQuery`, `key` ← `Key`
- **Returns**: `ApiV1IngestPdfToTextResponse`
- **Error**: `ApiException<SaplingPdfToTextError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1IngestPdfToText400Error1([NotNullWhen(true)] out ApiV1IngestPdfToText400Error1? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetApiV1IngestPdfToText413Error1([NotNullWhen(true)] out ApiV1IngestPdfToText413Error1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingPdfToTextRequest` | `src/Sapling/Requests/Files/SaplingPdfToTextRequest.cs` |
| `ApiV1IngestPdfToTextResponse` | `src/Sapling/Models/ApiV1IngestPdfToTextResponse.cs` |
| `SaplingPdfToTextError` | `src/Sapling/Errors/SaplingPdfToTextError.cs` |
| `ApiV1IngestPdfToText400Error1` | `src/Sapling/Models/ApiV1IngestPdfToText400Error1.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `ApiV1IngestPdfToText413Error1` | `src/Sapling/Models/ApiV1IngestPdfToText413Error1.cs` |

