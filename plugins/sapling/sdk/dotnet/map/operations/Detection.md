<!-- Generated file — do not edit; regenerated with the SDK. -->

# Detection — operations

Accessor: `client.Detection` · Source: `src/Sapling/Api/Detection.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SaplingAiDetect

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingAiDetect(SaplingAiDetectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1AidetectResponse`
- **Error**: `ApiException<SaplingAiDetectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingAiDetectRequest` | `src/Sapling/Requests/Detection/SaplingAiDetectRequest.cs` |
| `ApiV1AidetectRequest2` | `src/Sapling/Models/AnyOf/ApiV1AidetectRequest2.cs` |
| `ApiV1AidetectResponse` | `src/Sapling/Models/ApiV1AidetectResponse.cs` |
| `SaplingAiDetectError` | `src/Sapling/Errors/SaplingAiDetectError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingAiDetectUrl

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingAiDetectUrl(SaplingAiDetectUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1UrlAidetectResponse`
- **Error**: `ApiException<SaplingAiDetectUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 422, 500, 502, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingAiDetectUrlRequest` | `src/Sapling/Requests/Detection/SaplingAiDetectUrlRequest.cs` |
| `ApiV1UrlAidetectRequest` | `src/Sapling/Models/ApiV1UrlAidetectRequest.cs` |
| `ApiV1UrlAidetectResponse` | `src/Sapling/Models/ApiV1UrlAidetectResponse.cs` |
| `SaplingAiDetectUrlError` | `src/Sapling/Errors/SaplingAiDetectUrlError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingAidetectDocx

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingAidetectDocx(SaplingAidetectDocxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `File`
- **Query params (wire ← C#)**: `return_usage` ← `ReturnUsageQuery`, `key` ← `Key`
- **Returns**: `ApiV1DocxAidetectResponse`
- **Error**: `ApiException<SaplingAidetectDocxError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1DocxAidetect400Error1([NotNullWhen(true)] out ApiV1DocxAidetect400Error1? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetApiV1DocxAidetect413Error1([NotNullWhen(true)] out ApiV1DocxAidetect413Error1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingAidetectDocxRequest` | `src/Sapling/Requests/Detection/SaplingAidetectDocxRequest.cs` |
| `ApiV1DocxAidetectResponse` | `src/Sapling/Models/ApiV1DocxAidetectResponse.cs` |
| `SaplingAidetectDocxError` | `src/Sapling/Errors/SaplingAidetectDocxError.cs` |
| `ApiV1DocxAidetect400Error1` | `src/Sapling/Models/ApiV1DocxAidetect400Error1.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `ApiV1DocxAidetect413Error1` | `src/Sapling/Models/ApiV1DocxAidetect413Error1.cs` |

### SaplingAidetectFile

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingAidetectFile(SaplingAidetectFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `File`
- **Query params (wire ← C#)**: `return_usage` ← `ReturnUsageQuery`, `key` ← `Key`
- **Returns**: `ApiV1FileAidetectResponse`
- **Error**: `ApiException<SaplingAidetectFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1FileAidetect400Error1([NotNullWhen(true)] out ApiV1FileAidetect400Error1? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetApiV1FileAidetect413Error1([NotNullWhen(true)] out ApiV1FileAidetect413Error1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingAidetectFileRequest` | `src/Sapling/Requests/Detection/SaplingAidetectFileRequest.cs` |
| `ApiV1FileAidetectResponse` | `src/Sapling/Models/ApiV1FileAidetectResponse.cs` |
| `SaplingAidetectFileError` | `src/Sapling/Errors/SaplingAidetectFileError.cs` |
| `ApiV1FileAidetect400Error1` | `src/Sapling/Models/ApiV1FileAidetect400Error1.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `ApiV1FileAidetect413Error1` | `src/Sapling/Models/ApiV1FileAidetect413Error1.cs` |

### SaplingAidetectPdf

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingAidetectPdf(SaplingAidetectPdfRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `File`
- **Query params (wire ← C#)**: `return_usage` ← `ReturnUsageQuery`, `key` ← `Key`
- **Returns**: `ApiV1PdfAidetectResponse`
- **Error**: `ApiException<SaplingAidetectPdfError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PdfAidetect400Error1([NotNullWhen(true)] out ApiV1PdfAidetect400Error1? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetApiV1PdfAidetect413Error1([NotNullWhen(true)] out ApiV1PdfAidetect413Error1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingAidetectPdfRequest` | `src/Sapling/Requests/Detection/SaplingAidetectPdfRequest.cs` |
| `ApiV1PdfAidetectResponse` | `src/Sapling/Models/ApiV1PdfAidetectResponse.cs` |
| `SaplingAidetectPdfError` | `src/Sapling/Errors/SaplingAidetectPdfError.cs` |
| `ApiV1PdfAidetect400Error1` | `src/Sapling/Models/ApiV1PdfAidetect400Error1.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `ApiV1PdfAidetect413Error1` | `src/Sapling/Models/ApiV1PdfAidetect413Error1.cs` |

### SaplingDetectLanguage

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingDetectLanguage(SaplingDetectLanguageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1LangdetectResponse`
- **Error**: `ApiException<SaplingDetectLanguageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingDetectLanguageRequest` | `src/Sapling/Requests/Detection/SaplingDetectLanguageRequest.cs` |
| `ApiV1LangdetectRequest2` | `src/Sapling/Models/AnyOf/ApiV1LangdetectRequest2.cs` |
| `ApiV1LangdetectResponse` | `src/Sapling/Models/ApiV1LangdetectResponse.cs` |
| `SaplingDetectLanguageError` | `src/Sapling/Errors/SaplingDetectLanguageError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingDetectPii

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingDetectPii(SaplingDetectPiiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1PiiResponse`
- **Error**: `ApiException<SaplingDetectPiiError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 502, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingDetectPiiRequest` | `src/Sapling/Requests/Detection/SaplingDetectPiiRequest.cs` |
| `ApiV1PiiRequest` | `src/Sapling/Models/ApiV1PiiRequest.cs` |
| `ApiV1PiiResponse` | `src/Sapling/Models/ApiV1PiiResponse.cs` |
| `SaplingDetectPiiError` | `src/Sapling/Errors/SaplingDetectPiiError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingNer

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingNer(SaplingNerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1NerResponse`
- **Error**: `ApiException<SaplingNerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 502, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingNerRequest` | `src/Sapling/Requests/Detection/SaplingNerRequest.cs` |
| `ApiV1NerRequest2` | `src/Sapling/Models/AnyOf/ApiV1NerRequest2.cs` |
| `ApiV1NerResponse` | `src/Sapling/Models/ApiV1NerResponse.cs` |
| `SaplingNerError` | `src/Sapling/Errors/SaplingNerError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingProfanity

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingProfanity(SaplingProfanityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ProfanityResponse`
- **Error**: `ApiException<SaplingProfanityError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingProfanityRequest` | `src/Sapling/Requests/Detection/SaplingProfanityRequest.cs` |
| `ApiV1ProfanityRequest` | `src/Sapling/Models/ApiV1ProfanityRequest.cs` |
| `ApiV1ProfanityResponse` | `src/Sapling/Models/ApiV1ProfanityResponse.cs` |
| `SaplingProfanityError` | `src/Sapling/Errors/SaplingProfanityError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingSafety

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingSafety(SaplingSafetyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1SafetyResponse`
- **Error**: `ApiException<SaplingSafetyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingSafetyRequest` | `src/Sapling/Requests/Detection/SaplingSafetyRequest.cs` |
| `ApiV1SafetyRequest2` | `src/Sapling/Models/AnyOf/ApiV1SafetyRequest2.cs` |
| `ApiV1SafetyResponse` | `src/Sapling/Models/ApiV1SafetyResponse.cs` |
| `SaplingSafetyError` | `src/Sapling/Errors/SaplingSafetyError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

