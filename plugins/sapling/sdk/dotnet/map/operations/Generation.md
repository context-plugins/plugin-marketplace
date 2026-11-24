<!-- Generated file — do not edit; regenerated with the SDK. -->

# Generation — operations

Accessor: `client.Generation` · Source: `src/Sapling/Api/Generation.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SaplingAcceptCompletion

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingAcceptCompletion(SaplingAcceptCompletionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompletionHash`, `Body`
- **Returns**: `ApiV1CompleteAcceptResponse`
- **Error**: `ApiException<SaplingAcceptCompletionError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1CompleteAcceptResponse11([NotNullWhen(true)] out ApiV1CompleteAcceptResponse11? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingAcceptCompletionRequest` | `src/Sapling/Requests/Generation/SaplingAcceptCompletionRequest.cs` |
| `ApiV1CompleteAcceptRequest` | `src/Sapling/Models/ApiV1CompleteAcceptRequest.cs` |
| `ApiV1CompleteAcceptResponse` | `src/Sapling/Models/ApiV1CompleteAcceptResponse.cs` |
| `SaplingAcceptCompletionError` | `src/Sapling/Errors/SaplingAcceptCompletionError.cs` |
| `ApiV1CompleteAcceptResponse11` | `src/Sapling/Models/AnyOf/ApiV1CompleteAcceptResponse11.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |

### SaplingAutocomplete

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingAutocomplete(SaplingAutocompleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1CompleteResponse1`
- **Error**: `ApiException<SaplingAutocompleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingAutocompleteRequest` | `src/Sapling/Requests/Generation/SaplingAutocompleteRequest.cs` |
| `ApiV1CompleteRequest` | `src/Sapling/Models/ApiV1CompleteRequest.cs` |
| `ApiV1CompleteResponse1` | `src/Sapling/Models/AnyOf/ApiV1CompleteResponse1.cs` |
| `SaplingAutocompleteError` | `src/Sapling/Errors/SaplingAutocompleteError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingParaphrase

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingParaphrase(SaplingParaphraseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ParaphraseResponse`
- **Error**: `ApiException<SaplingParaphraseError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetApiV1Paraphrase429Error1([NotNullWhen(true)] out ApiV1Paraphrase429Error1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingParaphraseRequest` | `src/Sapling/Requests/Generation/SaplingParaphraseRequest.cs` |
| `ApiV1ParaphraseRequest` | `src/Sapling/Models/ApiV1ParaphraseRequest.cs` |
| `ApiV1ParaphraseResponse` | `src/Sapling/Models/ApiV1ParaphraseResponse.cs` |
| `SaplingParaphraseError` | `src/Sapling/Errors/SaplingParaphraseError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `ApiV1Paraphrase429Error1` | `src/Sapling/Models/ApiV1Paraphrase429Error1.cs` |

### SaplingRephrase

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingRephrase(SaplingRephraseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1RephraseResponse`
- **Error**: `ApiException<SaplingRephraseError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetApiV1Rephrase429Error1([NotNullWhen(true)] out ApiV1Rephrase429Error1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingRephraseRequest` | `src/Sapling/Requests/Generation/SaplingRephraseRequest.cs` |
| `ApiV1RephraseRequest` | `src/Sapling/Models/ApiV1RephraseRequest.cs` |
| `ApiV1RephraseResponse` | `src/Sapling/Models/ApiV1RephraseResponse.cs` |
| `SaplingRephraseError` | `src/Sapling/Errors/SaplingRephraseError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `ApiV1Rephrase429Error1` | `src/Sapling/Models/ApiV1Rephrase429Error1.cs` |

### SaplingSentenceSplit

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingSentenceSplit(SaplingSentenceSplitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1SentenceSplitResponse`
- **Error**: `ApiException<SaplingSentenceSplitError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetApiV1SentenceSplit429Error1([NotNullWhen(true)] out ApiV1SentenceSplit429Error1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingSentenceSplitRequest` | `src/Sapling/Requests/Generation/SaplingSentenceSplitRequest.cs` |
| `ApiV1SentenceSplitRequest` | `src/Sapling/Models/ApiV1SentenceSplitRequest.cs` |
| `ApiV1SentenceSplitResponse` | `src/Sapling/Models/ApiV1SentenceSplitResponse.cs` |
| `SaplingSentenceSplitError` | `src/Sapling/Errors/SaplingSentenceSplitError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `ApiV1SentenceSplit429Error1` | `src/Sapling/Models/ApiV1SentenceSplit429Error1.cs` |

### SaplingSimplify

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingSimplify(SaplingSimplifyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1SimplifyResponse`
- **Error**: `ApiException<SaplingSimplifyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 502, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingSimplifyRequest` | `src/Sapling/Requests/Generation/SaplingSimplifyRequest.cs` |
| `ApiV1SimplifyRequest2` | `src/Sapling/Models/AnyOf/ApiV1SimplifyRequest2.cs` |
| `ApiV1SimplifyResponse` | `src/Sapling/Models/ApiV1SimplifyResponse.cs` |
| `SaplingSimplifyError` | `src/Sapling/Errors/SaplingSimplifyError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingSummarize

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingSummarize(SaplingSummarizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1SummarizeResponse`
- **Error**: `ApiException<SaplingSummarizeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 502, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetApiV1Summarize429Error1([NotNullWhen(true)] out ApiV1Summarize429Error1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingSummarizeRequest` | `src/Sapling/Requests/Generation/SaplingSummarizeRequest.cs` |
| `ApiV1SummarizeRequest2` | `src/Sapling/Models/AnyOf/ApiV1SummarizeRequest2.cs` |
| `ApiV1SummarizeResponse` | `src/Sapling/Models/ApiV1SummarizeResponse.cs` |
| `SaplingSummarizeError` | `src/Sapling/Errors/SaplingSummarizeError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `ApiV1Summarize429Error1` | `src/Sapling/Models/ApiV1Summarize429Error1.cs` |

### SaplingSummarizeFile

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingSummarizeFile(SaplingSummarizeFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `File`
- **Query params (wire ← C#)**: `return_usage` ← `ReturnUsageQuery`, `key` ← `Key`
- **Returns**: `ApiV1FileSummarizeResponse`
- **Error**: `ApiException<SaplingSummarizeFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1FileSummarize400Error1([NotNullWhen(true)] out ApiV1FileSummarize400Error1? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500, 502] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetApiV1FileSummarize413Error1([NotNullWhen(true)] out ApiV1FileSummarize413Error1? value)` [413] · `TryGetApiV1FileSummarize429Error1([NotNullWhen(true)] out ApiV1FileSummarize429Error1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingSummarizeFileRequest` | `src/Sapling/Requests/Generation/SaplingSummarizeFileRequest.cs` |
| `ApiV1FileSummarizeResponse` | `src/Sapling/Models/ApiV1FileSummarizeResponse.cs` |
| `SaplingSummarizeFileError` | `src/Sapling/Errors/SaplingSummarizeFileError.cs` |
| `ApiV1FileSummarize400Error1` | `src/Sapling/Models/ApiV1FileSummarize400Error1.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `ApiV1FileSummarize413Error1` | `src/Sapling/Models/ApiV1FileSummarize413Error1.cs` |
| `ApiV1FileSummarize429Error1` | `src/Sapling/Models/ApiV1FileSummarize429Error1.cs` |

### SaplingTranslate

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingTranslate(SaplingTranslateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1TranslateResponse`
- **Error**: `ApiException<SaplingTranslateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 502, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingTranslateRequest` | `src/Sapling/Requests/Generation/SaplingTranslateRequest.cs` |
| `ApiV1TranslateRequest2` | `src/Sapling/Models/AnyOf/ApiV1TranslateRequest2.cs` |
| `ApiV1TranslateResponse` | `src/Sapling/Models/ApiV1TranslateResponse.cs` |
| `SaplingTranslateError` | `src/Sapling/Errors/SaplingTranslateError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

