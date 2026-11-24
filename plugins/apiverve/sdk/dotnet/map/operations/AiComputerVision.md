<!-- Generated file — do not edit; regenerated with the SDK. -->

# AiComputerVision — operations

Accessor: `client.AiComputerVision` · Source: `src/ApiVerve/Api/AiComputerVision.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Articleideas

- **Auth**: `options.ApiKey`
- **Signature**: `Articleideas(ArticleideasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Topic`
- **Query params (wire ← C#)**: `topic` ← `Topic`
- **Returns**: `V1ArticleideasResponse`
- **Error**: `ApiException<ArticleideasError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArticleideasRequest` | `src/ApiVerve/Requests/AiComputerVision/ArticleideasRequest.cs` |
| `V1ArticleideasResponse` | `src/ApiVerve/Models/V1ArticleideasResponse.cs` |
| `ArticleideasError` | `src/ApiVerve/Errors/ArticleideasError.cs` |

### Codedetector

- **Auth**: `options.ApiKey`
- **Signature**: `Codedetector(CodedetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1CodedetectorResponse`
- **Error**: `ApiException<CodedetectorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CodedetectorRequest` | `src/ApiVerve/Requests/AiComputerVision/CodedetectorRequest.cs` |
| `V1CodedetectorRequest` | `src/ApiVerve/Models/V1CodedetectorRequest.cs` |
| `V1CodedetectorResponse` | `src/ApiVerve/Models/V1CodedetectorResponse.cs` |
| `CodedetectorError` | `src/ApiVerve/Errors/CodedetectorError.cs` |

### Imagecaption

- **Auth**: `options.ApiKey`
- **Signature**: `Imagecaption(ImagecaptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Image`
- **Returns**: `V1ImagecaptionResponse`
- **Error**: `ApiException<ImagecaptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ImagecaptionRequest` | `src/ApiVerve/Requests/AiComputerVision/ImagecaptionRequest.cs` |
| `V1ImagecaptionResponse` | `src/ApiVerve/Models/V1ImagecaptionResponse.cs` |
| `ImagecaptionError` | `src/ApiVerve/Errors/ImagecaptionError.cs` |

### Imagetotext

- **Auth**: `options.ApiKey`
- **Signature**: `Imagetotext(ImagetotextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Image`
- **Returns**: `V1ImagetotextResponse`
- **Error**: `ApiException<ImagetotextError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ImagetotextRequest` | `src/ApiVerve/Requests/AiComputerVision/ImagetotextRequest.cs` |
| `V1ImagetotextResponse` | `src/ApiVerve/Models/V1ImagetotextResponse.cs` |
| `ImagetotextError` | `src/ApiVerve/Errors/ImagetotextError.cs` |

### Languagedetector

- **Auth**: `options.ApiKey`
- **Signature**: `Languagedetector(LanguagedetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1LanguagedetectorResponse`
- **Error**: `ApiException<LanguagedetectorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LanguagedetectorRequest` | `src/ApiVerve/Requests/AiComputerVision/LanguagedetectorRequest.cs` |
| `V1LanguagedetectorRequest` | `src/ApiVerve/Models/V1LanguagedetectorRequest.cs` |
| `V1LanguagedetectorResponse` | `src/ApiVerve/Models/V1LanguagedetectorResponse.cs` |
| `LanguagedetectorError` | `src/ApiVerve/Errors/LanguagedetectorError.cs` |

### Sentimentanalysis

- **Auth**: `options.ApiKey`
- **Signature**: `Sentimentanalysis(SentimentanalysisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1SentimentanalysisResponse`
- **Error**: `ApiException<SentimentanalysisError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SentimentanalysisRequest` | `src/ApiVerve/Requests/AiComputerVision/SentimentanalysisRequest.cs` |
| `V1SentimentanalysisRequest` | `src/ApiVerve/Models/V1SentimentanalysisRequest.cs` |
| `V1SentimentanalysisResponse` | `src/ApiVerve/Models/V1SentimentanalysisResponse.cs` |
| `SentimentanalysisError` | `src/ApiVerve/Errors/SentimentanalysisError.cs` |

