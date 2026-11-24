<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analysis — operations

Accessor: `client.Analysis` · Source: `src/Sapling/Api/Analysis.cs` · 14 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SaplingClassify

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingClassify(SaplingClassifyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ClassifyResponse`
- **Error**: `ApiException<SaplingClassifyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 502, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingClassifyRequest` | `src/Sapling/Requests/Analysis/SaplingClassifyRequest.cs` |
| `ApiV1ClassifyRequest2` | `src/Sapling/Models/AnyOf/ApiV1ClassifyRequest2.cs` |
| `ApiV1ClassifyResponse` | `src/Sapling/Models/ApiV1ClassifyResponse.cs` |
| `SaplingClassifyError` | `src/Sapling/Errors/SaplingClassifyError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingDeleteStyleRuleset

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingDeleteStyleRuleset(SaplingDeleteStyleRulesetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `name` ← `Name`, `key` ← `Key`
- **Returns**: `ApiV1StyleguideRulesetsResponse`
- **Error**: `ApiException<SaplingDeleteStyleRulesetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingDeleteStyleRulesetRequest` | `src/Sapling/Requests/Analysis/SaplingDeleteStyleRulesetRequest.cs` |
| `ApiV1StyleguideRulesetsRequest` | `src/Sapling/Models/ApiV1StyleguideRulesetsRequest.cs` |
| `ApiV1StyleguideRulesetsResponse` | `src/Sapling/Models/ApiV1StyleguideRulesetsResponse.cs` |
| `SaplingDeleteStyleRulesetError` | `src/Sapling/Errors/SaplingDeleteStyleRulesetError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingExtract

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingExtract(SaplingExtractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ExtractResponse`
- **Error**: `ApiException<SaplingExtractError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 502, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingExtractRequest` | `src/Sapling/Requests/Analysis/SaplingExtractRequest.cs` |
| `ApiV1ExtractRequest2` | `src/Sapling/Models/AnyOf/ApiV1ExtractRequest2.cs` |
| `ApiV1ExtractResponse` | `src/Sapling/Models/ApiV1ExtractResponse.cs` |
| `SaplingExtractError` | `src/Sapling/Errors/SaplingExtractError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingExtractFile

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingExtractFile(SaplingExtractFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `File`, `JsonParams`
- **Query params (wire ← C#)**: `return_usage` ← `ReturnUsageQuery`, `key` ← `Key`
- **Returns**: `ApiV1FileExtractResponse`
- **Error**: `ApiException<SaplingExtractFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1FileExtract400Error1([NotNullWhen(true)] out ApiV1FileExtract400Error1? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500, 502] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetApiV1FileExtract413Error1([NotNullWhen(true)] out ApiV1FileExtract413Error1? value)` [413] · `TryGetApiV1FileExtract429Error1([NotNullWhen(true)] out ApiV1FileExtract429Error1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingExtractFileRequest` | `src/Sapling/Requests/Analysis/SaplingExtractFileRequest.cs` |
| `ApiV1FileExtractResponse` | `src/Sapling/Models/ApiV1FileExtractResponse.cs` |
| `SaplingExtractFileError` | `src/Sapling/Errors/SaplingExtractFileError.cs` |
| `ApiV1FileExtract400Error1` | `src/Sapling/Models/ApiV1FileExtract400Error1.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `ApiV1FileExtract413Error1` | `src/Sapling/Models/ApiV1FileExtract413Error1.cs` |
| `ApiV1FileExtract429Error1` | `src/Sapling/Models/ApiV1FileExtract429Error1.cs` |

### SaplingInclusive

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingInclusive(SaplingInclusiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1InclusiveResponse`
- **Error**: `ApiException<SaplingInclusiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 502, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingInclusiveRequest` | `src/Sapling/Requests/Analysis/SaplingInclusiveRequest.cs` |
| `ApiV1InclusiveRequest2` | `src/Sapling/Models/AnyOf/ApiV1InclusiveRequest2.cs` |
| `ApiV1InclusiveResponse` | `src/Sapling/Models/ApiV1InclusiveResponse.cs` |
| `SaplingInclusiveError` | `src/Sapling/Errors/SaplingInclusiveError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingListStyleRulesets

- **Auth**: `options.BearerAuth` OR `options.ApiKeyQuery`
- **Signature**: `SaplingListStyleRulesets(SaplingListStyleRulesetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `return_usage` ← `ReturnUsage`
- **Returns**: `ApiV1StyleguideRulesetsResponse1`
- **Error**: `ApiException<SaplingListStyleRulesetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingListStyleRulesetsRequest` | `src/Sapling/Requests/Analysis/SaplingListStyleRulesetsRequest.cs` |
| `ApiV1StyleguideRulesetsResponse1` | `src/Sapling/Models/ApiV1StyleguideRulesetsResponse1.cs` |
| `SaplingListStyleRulesetsError` | `src/Sapling/Errors/SaplingListStyleRulesetsError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingQuality

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingQuality(SaplingQualityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1QualityResponse`
- **Error**: `ApiException<SaplingQualityError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 502, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingQualityRequest` | `src/Sapling/Requests/Analysis/SaplingQualityRequest.cs` |
| `ApiV1QualityRequest2` | `src/Sapling/Models/AnyOf/ApiV1QualityRequest2.cs` |
| `ApiV1QualityResponse` | `src/Sapling/Models/ApiV1QualityResponse.cs` |
| `SaplingQualityError` | `src/Sapling/Errors/SaplingQualityError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingReadabilityStatistics

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingReadabilityStatistics(SaplingReadabilityStatisticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1StatisticsResponse`
- **Error**: `ApiException<SaplingReadabilityStatisticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingReadabilityStatisticsRequest` | `src/Sapling/Requests/Analysis/SaplingReadabilityStatisticsRequest.cs` |
| `ApiV1StatisticsRequest` | `src/Sapling/Models/ApiV1StatisticsRequest.cs` |
| `ApiV1StatisticsResponse` | `src/Sapling/Models/ApiV1StatisticsResponse.cs` |
| `SaplingReadabilityStatisticsError` | `src/Sapling/Errors/SaplingReadabilityStatisticsError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |

### SaplingSaveStyleRuleset

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingSaveStyleRuleset(SaplingSaveStyleRulesetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1StyleguideRulesetsResponse2`
- **Error**: `ApiException<SaplingSaveStyleRulesetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingSaveStyleRulesetRequest` | `src/Sapling/Requests/Analysis/SaplingSaveStyleRulesetRequest.cs` |
| `ApiV1StyleguideRulesetsRequest1` | `src/Sapling/Models/ApiV1StyleguideRulesetsRequest1.cs` |
| `ApiV1StyleguideRulesetsResponse2` | `src/Sapling/Models/ApiV1StyleguideRulesetsResponse2.cs` |
| `SaplingSaveStyleRulesetError` | `src/Sapling/Errors/SaplingSaveStyleRulesetError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingSentiment

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingSentiment(SaplingSentimentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1SentimentResponse1`
- **Error**: `ApiException<SaplingSentimentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingSentimentRequest` | `src/Sapling/Requests/Analysis/SaplingSentimentRequest.cs` |
| `ApiV1SentimentRequest` | `src/Sapling/Models/ApiV1SentimentRequest.cs` |
| `ApiV1SentimentResponse1` | `src/Sapling/Models/AnyOf/ApiV1SentimentResponse1.cs` |
| `SaplingSentimentError` | `src/Sapling/Errors/SaplingSentimentError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingSeo

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingSeo(SaplingSeoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1SeoResponse`
- **Error**: `ApiException<SaplingSeoError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 502, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingSeoRequest` | `src/Sapling/Requests/Analysis/SaplingSeoRequest.cs` |
| `ApiV1SeoRequest` | `src/Sapling/Models/ApiV1SeoRequest.cs` |
| `ApiV1SeoResponse` | `src/Sapling/Models/ApiV1SeoResponse.cs` |
| `SaplingSeoError` | `src/Sapling/Errors/SaplingSeoError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingSimilarTerms

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingSimilarTerms(SaplingSimilarTermsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ThesaurusResponse`
- **Error**: `ApiException<SaplingSimilarTermsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500, 502] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingSimilarTermsRequest` | `src/Sapling/Requests/Analysis/SaplingSimilarTermsRequest.cs` |
| `ApiV1ThesaurusRequest` | `src/Sapling/Models/ApiV1ThesaurusRequest.cs` |
| `ApiV1ThesaurusResponse` | `src/Sapling/Models/ApiV1ThesaurusResponse.cs` |
| `SaplingSimilarTermsError` | `src/Sapling/Errors/SaplingSimilarTermsError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |

### SaplingStyleguide

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingStyleguide(SaplingStyleguideRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1StyleguideResponse`
- **Error**: `ApiException<SaplingStyleguideError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 500, 502, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingStyleguideRequest` | `src/Sapling/Requests/Analysis/SaplingStyleguideRequest.cs` |
| `ApiV1StyleguideRequest4` | `src/Sapling/Models/AnyOf/ApiV1StyleguideRequest4.cs` |
| `ApiV1StyleguideResponse` | `src/Sapling/Models/ApiV1StyleguideResponse.cs` |
| `SaplingStyleguideError` | `src/Sapling/Errors/SaplingStyleguideError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingTone

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingTone(SaplingToneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ToneResponse1`
- **Error**: `ApiException<SaplingToneError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingToneRequest` | `src/Sapling/Requests/Analysis/SaplingToneRequest.cs` |
| `ApiV1ToneRequest` | `src/Sapling/Models/ApiV1ToneRequest.cs` |
| `ApiV1ToneResponse1` | `src/Sapling/Models/AnyOf/ApiV1ToneResponse1.cs` |
| `SaplingToneError` | `src/Sapling/Errors/SaplingToneError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

