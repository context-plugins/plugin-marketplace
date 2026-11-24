<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analysis — operations

Accessor: `client.analysis` · Source: `sapling/apis/analysis.py` · 14 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.analysis.sapling_classify

- **Route**: `POST /api/v1/classify`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_classify(body: ApiV1ClassifyRequest2 | ApiV1ClassifyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ClassifyResponse`
- **Returns (raw)**: `ApiResult[ApiV1ClassifyResponse, SaplingClassifyErrorBody]`
- **Error**: `SaplingClassifyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 502, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ClassifyRequest2` | `sapling/models/unions/api_v1_classify_request2.py` |
| `ApiV1ClassifyRequest2Dict` | `sapling/models/unions/api_v1_classify_request2.py` |
| `ApiV1ClassifyResponse` | `sapling/models/api_v1_classify_response.py` |
| `SaplingClassifyErrorBody` | `sapling/errors/sapling_classify_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.analysis.sapling_delete_style_ruleset

- **Route**: `DELETE /api/v1/styleguide/rulesets`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_delete_style_ruleset(*, name: str | None = None, key: str | None = None, body: ApiV1StyleguideRulesetsRequest | ApiV1StyleguideRulesetsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `name` — query · `key` — query · `body` — JSON body
- **Returns (parsed)**: `ApiV1StyleguideRulesetsResponse`
- **Returns (raw)**: `ApiResult[ApiV1StyleguideRulesetsResponse, SaplingDeleteStyleRulesetErrorBody]`
- **Error**: `SaplingDeleteStyleRulesetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1StyleguideRulesetsRequest` | `sapling/models/api_v1_styleguide_rulesets_request.py` |
| `ApiV1StyleguideRulesetsRequestDict` | `sapling/models/api_v1_styleguide_rulesets_request.py` |
| `ApiV1StyleguideRulesetsResponse` | `sapling/models/api_v1_styleguide_rulesets_response.py` |
| `SaplingDeleteStyleRulesetErrorBody` | `sapling/errors/sapling_delete_style_ruleset_error.py` |
| `Error` | `sapling/models/error.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.analysis.sapling_extract

- **Route**: `POST /api/v1/extract`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_extract(body: ApiV1ExtractRequest2 | ApiV1ExtractRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ExtractResponse`
- **Returns (raw)**: `ApiResult[ApiV1ExtractResponse, SaplingExtractErrorBody]`
- **Error**: `SaplingExtractErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 502, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ExtractRequest2` | `sapling/models/unions/api_v1_extract_request2.py` |
| `ApiV1ExtractRequest2Dict` | `sapling/models/unions/api_v1_extract_request2.py` |
| `ApiV1ExtractResponse` | `sapling/models/api_v1_extract_response.py` |
| `SaplingExtractErrorBody` | `sapling/errors/sapling_extract_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.analysis.sapling_extract_file

- **Route**: `POST /api/v1/file-extract`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_extract_file(file: FileInput, json_params: FileInput, *, return_usage_query: bool | None = False, key: str | None = None, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file`, `json_params`
- **Params**: `return_usage_query` — query `return_usage` · `key` — query · `file` — multipart file · `json_params` — multipart file `jsonParams` · `return_usage` — multipart field
- **Returns (parsed)**: `ApiV1FileExtractResponse`
- **Returns (raw)**: `ApiResult[ApiV1FileExtractResponse, SaplingExtractFileErrorBody]`
- **Error**: `SaplingExtractFileErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1FileExtract400Error1` [400] · `Error` [401, 403, 500, 502] · `PaymentRequired1` [402] · `ApiV1FileExtract413Error1` [413] · `ApiV1FileExtract429Error1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1FileExtractResponse` | `sapling/models/api_v1_file_extract_response.py` |
| `SaplingExtractFileErrorBody` | `sapling/errors/sapling_extract_file_error.py` |
| `ApiV1FileExtract400Error1` | `sapling/models/api_v1_file_extract400_error1.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `ApiV1FileExtract413Error1` | `sapling/models/api_v1_file_extract413_error1.py` |
| `ApiV1FileExtract429Error1` | `sapling/models/api_v1_file_extract429_error1.py` |

### client.analysis.sapling_inclusive

- **Route**: `POST /api/v1/inclusive`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_inclusive(body: ApiV1InclusiveRequest2 | ApiV1InclusiveRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1InclusiveResponse`
- **Returns (raw)**: `ApiResult[ApiV1InclusiveResponse, SaplingInclusiveErrorBody]`
- **Error**: `SaplingInclusiveErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 502, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1InclusiveRequest2` | `sapling/models/unions/api_v1_inclusive_request2.py` |
| `ApiV1InclusiveRequest2Dict` | `sapling/models/unions/api_v1_inclusive_request2.py` |
| `ApiV1InclusiveResponse` | `sapling/models/api_v1_inclusive_response.py` |
| `SaplingInclusiveErrorBody` | `sapling/errors/sapling_inclusive_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.analysis.sapling_list_style_rulesets

- **Route**: `GET /api/v1/styleguide/rulesets`
- **Auth**: `bearer_auth` OR `api_key_query`
- **Signature**: `def sapling_list_style_rulesets(*, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `return_usage` — query
- **Returns (parsed)**: `ApiV1StyleguideRulesetsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1StyleguideRulesetsResponse1, SaplingListStyleRulesetsErrorBody]`
- **Error**: `SaplingListStyleRulesetsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 500] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1StyleguideRulesetsResponse1` | `sapling/models/api_v1_styleguide_rulesets_response1.py` |
| `SaplingListStyleRulesetsErrorBody` | `sapling/errors/sapling_list_style_rulesets_error.py` |
| `Error` | `sapling/models/error.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.analysis.sapling_quality

- **Route**: `POST /api/v1/quality`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_quality(body: ApiV1QualityRequest2 | ApiV1QualityRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1QualityResponse`
- **Returns (raw)**: `ApiResult[ApiV1QualityResponse, SaplingQualityErrorBody]`
- **Error**: `SaplingQualityErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 502, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1QualityRequest2` | `sapling/models/unions/api_v1_quality_request2.py` |
| `ApiV1QualityRequest2Dict` | `sapling/models/unions/api_v1_quality_request2.py` |
| `ApiV1QualityResponse` | `sapling/models/api_v1_quality_response.py` |
| `SaplingQualityErrorBody` | `sapling/errors/sapling_quality_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.analysis.sapling_readability_statistics

- **Route**: `POST /api/v1/statistics`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_readability_statistics(body: ApiV1StatisticsRequest | ApiV1StatisticsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1StatisticsResponse`
- **Returns (raw)**: `ApiResult[ApiV1StatisticsResponse, SaplingReadabilityStatisticsErrorBody]`
- **Error**: `SaplingReadabilityStatisticsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1StatisticsRequest` | `sapling/models/api_v1_statistics_request.py` |
| `ApiV1StatisticsRequestDict` | `sapling/models/api_v1_statistics_request.py` |
| `ApiV1StatisticsResponse` | `sapling/models/api_v1_statistics_response.py` |
| `SaplingReadabilityStatisticsErrorBody` | `sapling/errors/sapling_readability_statistics_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |

### client.analysis.sapling_save_style_ruleset

- **Route**: `POST /api/v1/styleguide/rulesets`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_save_style_ruleset(body: ApiV1StyleguideRulesetsRequest1 | ApiV1StyleguideRulesetsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1StyleguideRulesetsResponse2`
- **Returns (raw)**: `ApiResult[ApiV1StyleguideRulesetsResponse2, SaplingSaveStyleRulesetErrorBody]`
- **Error**: `SaplingSaveStyleRulesetErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1StyleguideRulesetsRequest1` | `sapling/models/api_v1_styleguide_rulesets_request1.py` |
| `ApiV1StyleguideRulesetsRequest1Dict` | `sapling/models/api_v1_styleguide_rulesets_request1.py` |
| `ApiV1StyleguideRulesetsResponse2` | `sapling/models/api_v1_styleguide_rulesets_response2.py` |
| `SaplingSaveStyleRulesetErrorBody` | `sapling/errors/sapling_save_style_ruleset_error.py` |
| `Error` | `sapling/models/error.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.analysis.sapling_sentiment

- **Route**: `POST /api/v1/sentiment`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_sentiment(body: ApiV1SentimentRequest | ApiV1SentimentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SentimentResponse`
- **Returns (raw)**: `ApiResult[ApiV1SentimentResponse, SaplingSentimentErrorBody]`
- **Error**: `SaplingSentimentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SentimentRequest` | `sapling/models/api_v1_sentiment_request.py` |
| `ApiV1SentimentRequestDict` | `sapling/models/api_v1_sentiment_request.py` |
| `ApiV1SentimentResponse` | `sapling/models/api_v1_sentiment_response.py` |
| `SaplingSentimentErrorBody` | `sapling/errors/sapling_sentiment_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.analysis.sapling_seo

- **Route**: `POST /api/v1/seo`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_seo(body: ApiV1SeoRequest | ApiV1SeoRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SeoResponse`
- **Returns (raw)**: `ApiResult[ApiV1SeoResponse, SaplingSeoErrorBody]`
- **Error**: `SaplingSeoErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 502, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SeoRequest` | `sapling/models/api_v1_seo_request.py` |
| `ApiV1SeoRequestDict` | `sapling/models/api_v1_seo_request.py` |
| `ApiV1SeoResponse` | `sapling/models/api_v1_seo_response.py` |
| `SaplingSeoErrorBody` | `sapling/errors/sapling_seo_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.analysis.sapling_similar_terms

- **Route**: `POST /api/v1/thesaurus`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_similar_terms(body: ApiV1ThesaurusRequest | ApiV1ThesaurusRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ThesaurusResponse`
- **Returns (raw)**: `ApiResult[ApiV1ThesaurusResponse, SaplingSimilarTermsErrorBody]`
- **Error**: `SaplingSimilarTermsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500, 502] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ThesaurusRequest` | `sapling/models/api_v1_thesaurus_request.py` |
| `ApiV1ThesaurusRequestDict` | `sapling/models/api_v1_thesaurus_request.py` |
| `ApiV1ThesaurusResponse` | `sapling/models/api_v1_thesaurus_response.py` |
| `SaplingSimilarTermsErrorBody` | `sapling/errors/sapling_similar_terms_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |

### client.analysis.sapling_styleguide

- **Route**: `POST /api/v1/styleguide`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_styleguide(body: ApiV1StyleguideRequest4 | ApiV1StyleguideRequest4Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1StyleguideResponse`
- **Returns (raw)**: `ApiResult[ApiV1StyleguideResponse, SaplingStyleguideErrorBody]`
- **Error**: `SaplingStyleguideErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 500, 502, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1StyleguideRequest4` | `sapling/models/unions/api_v1_styleguide_request4.py` |
| `ApiV1StyleguideRequest4Dict` | `sapling/models/unions/api_v1_styleguide_request4.py` |
| `ApiV1StyleguideResponse` | `sapling/models/api_v1_styleguide_response.py` |
| `SaplingStyleguideErrorBody` | `sapling/errors/sapling_styleguide_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.analysis.sapling_tone

- **Route**: `POST /api/v1/tone`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_tone(body: ApiV1ToneRequest | ApiV1ToneRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ToneResponse`
- **Returns (raw)**: `ApiResult[ApiV1ToneResponse, SaplingToneErrorBody]`
- **Error**: `SaplingToneErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ToneRequest` | `sapling/models/api_v1_tone_request.py` |
| `ApiV1ToneRequestDict` | `sapling/models/api_v1_tone_request.py` |
| `ApiV1ToneResponse` | `sapling/models/api_v1_tone_response.py` |
| `SaplingToneErrorBody` | `sapling/errors/sapling_tone_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

