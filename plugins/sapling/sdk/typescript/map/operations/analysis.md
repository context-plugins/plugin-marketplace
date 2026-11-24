<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analysis — operations

Accessor: `client.analysis` · Source: `src/resources/analysis.ts` · 14 operations · Request and error types: namespace `Analysis`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sapling`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### saplingClassify

- **Signature**: `saplingClassify(request: Analysis.SaplingClassifyRequest, options?: RequestOptions): ApiPromise<ApiV1ClassifyResponse, Analysis.SaplingClassifyError>`
- **Wire**: `POST /api/v1/classify`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ClassifyResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Analysis.SaplingClassifyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [502] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.SaplingClassifyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ClassifyRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ClassifyRequest2` | `apiV1ClassifyRequest2Schema` | `src/models/unions/api-v1-classify-request2.ts` |
| `ApiV1ClassifyResponse` | `apiV1ClassifyResponseSchema` | `src/models/api-v1-classify-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingDeleteStyleRuleset

- **Signature**: `saplingDeleteStyleRuleset(request?: Analysis.SaplingDeleteStyleRulesetRequest, options?: RequestOptions): ApiPromise<ApiV1StyleguideRulesetsResponse, Analysis.SaplingDeleteStyleRulesetError>`
- **Wire**: `DELETE /api/v1/styleguide/rulesets`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1StyleguideRulesetsResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Analysis.SaplingDeleteStyleRulesetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"rateLimited1"` [429] `RateLimited1` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.SaplingDeleteStyleRulesetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `query` | `string` | no |
| `key` | `query` | `string` | no |
| `body` | `body` | `ApiV1StyleguideRulesetsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1StyleguideRulesetsRequest` | `apiV1StyleguideRulesetsRequestSchema` | `src/models/api-v1-styleguide-rulesets-request.ts` |
| `ApiV1StyleguideRulesetsResponse` | `apiV1StyleguideRulesetsResponseSchema` | `src/models/api-v1-styleguide-rulesets-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingExtract

- **Signature**: `saplingExtract(request: Analysis.SaplingExtractRequest, options?: RequestOptions): ApiPromise<ApiV1ExtractResponse, Analysis.SaplingExtractError>`
- **Wire**: `POST /api/v1/extract`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ExtractResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Analysis.SaplingExtractError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [502] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.SaplingExtractRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ExtractRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ExtractRequest2` | `apiV1ExtractRequest2Schema` | `src/models/unions/api-v1-extract-request2.ts` |
| `ApiV1ExtractResponse` | `apiV1ExtractResponseSchema` | `src/models/api-v1-extract-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingExtractFile

- **Signature**: `saplingExtractFile(request: Analysis.SaplingExtractFileRequest, options?: RequestOptions): ApiPromise<ApiV1FileExtractResponse, Analysis.SaplingExtractFileError>`
- **Wire**: `POST /api/v1/file-extract`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `multipart/form-data` — every field marked `form`. `file` and `jsonParams` are file parts, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1FileExtractResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Analysis.SaplingExtractFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1FileExtract400Error1"` [400] `ApiV1FileExtract400Error1` · `"error"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error2"` [403] `Error` · `"apiV1FileExtract413Error1"` [413] `ApiV1FileExtract413Error1` · `"apiV1FileExtract429Error1"` [429] `ApiV1FileExtract429Error1` · `"error3"` [500] `Error` · `"error4"` [502] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.SaplingExtractFileRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `returnUsageQuery` | `query` | `return_usage` | `boolean` | no | `false` |
| `key` | `query` | — | `string` | no | — |
| `file` | `form` | — | `FileInput` | yes | — |
| `jsonParams` | `form` | — | `FileInput` | yes | — |
| `returnUsage` | `form` | `return_usage` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1FileExtractResponse` | `apiV1FileExtractResponseSchema` | `src/models/api-v1-file-extract-response.ts` |
| `ApiV1FileExtract400Error1` | `apiV1FileExtract400Error1Schema` | `src/models/api-v1-file-extract400-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `ApiV1FileExtract413Error1` | `apiV1FileExtract413Error1Schema` | `src/models/api-v1-file-extract413-error1.ts` |
| `ApiV1FileExtract429Error1` | `apiV1FileExtract429Error1Schema` | `src/models/api-v1-file-extract429-error1.ts` |

### saplingInclusive

- **Signature**: `saplingInclusive(request: Analysis.SaplingInclusiveRequest, options?: RequestOptions): ApiPromise<ApiV1InclusiveResponse, Analysis.SaplingInclusiveError>`
- **Wire**: `POST /api/v1/inclusive`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1InclusiveResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Analysis.SaplingInclusiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [502] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.SaplingInclusiveRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1InclusiveRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1InclusiveRequest2` | `apiV1InclusiveRequest2Schema` | `src/models/unions/api-v1-inclusive-request2.ts` |
| `ApiV1InclusiveResponse` | `apiV1InclusiveResponseSchema` | `src/models/api-v1-inclusive-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingListStyleRulesets

- **Signature**: `saplingListStyleRulesets(request?: Analysis.SaplingListStyleRulesetsRequest, options?: RequestOptions): ApiPromise<ApiV1StyleguideRulesetsResponse1, Analysis.SaplingListStyleRulesetsError>`
- **Wire**: `GET /api/v1/styleguide/rulesets`
- **Auth**: any of `bearerAuth`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1StyleguideRulesetsResponse1`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Analysis.SaplingListStyleRulesetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.SaplingListStyleRulesetsRequest` (1):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `returnUsage` | `query` | `return_usage` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1StyleguideRulesetsResponse1` | `apiV1StyleguideRulesetsResponse1Schema` | `src/models/api-v1-styleguide-rulesets-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingQuality

- **Signature**: `saplingQuality(request: Analysis.SaplingQualityRequest, options?: RequestOptions): ApiPromise<ApiV1QualityResponse, Analysis.SaplingQualityError>`
- **Wire**: `POST /api/v1/quality`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1QualityResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Analysis.SaplingQualityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [502] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.SaplingQualityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1QualityRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1QualityRequest2` | `apiV1QualityRequest2Schema` | `src/models/unions/api-v1-quality-request2.ts` |
| `ApiV1QualityResponse` | `apiV1QualityResponseSchema` | `src/models/api-v1-quality-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingReadabilityStatistics

- **Signature**: `saplingReadabilityStatistics(request: Analysis.SaplingReadabilityStatisticsRequest, options?: RequestOptions): ApiPromise<ApiV1StatisticsResponse, Analysis.SaplingReadabilityStatisticsError>`
- **Wire**: `POST /api/v1/statistics`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1StatisticsResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Analysis.SaplingReadabilityStatisticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.SaplingReadabilityStatisticsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1StatisticsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1StatisticsRequest` | `apiV1StatisticsRequestSchema` | `src/models/api-v1-statistics-request.ts` |
| `ApiV1StatisticsResponse` | `apiV1StatisticsResponseSchema` | `src/models/api-v1-statistics-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |

### saplingSaveStyleRuleset

- **Signature**: `saplingSaveStyleRuleset(request: Analysis.SaplingSaveStyleRulesetRequest, options?: RequestOptions): ApiPromise<ApiV1StyleguideRulesetsResponse2, Analysis.SaplingSaveStyleRulesetError>`
- **Wire**: `POST /api/v1/styleguide/rulesets`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1StyleguideRulesetsResponse2`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Analysis.SaplingSaveStyleRulesetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.SaplingSaveStyleRulesetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1StyleguideRulesetsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1StyleguideRulesetsRequest1` | `apiV1StyleguideRulesetsRequest1Schema` | `src/models/api-v1-styleguide-rulesets-request1.ts` |
| `ApiV1StyleguideRulesetsResponse2` | `apiV1StyleguideRulesetsResponse2Schema` | `src/models/api-v1-styleguide-rulesets-response2.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingSentiment

- **Signature**: `saplingSentiment(request: Analysis.SaplingSentimentRequest, options?: RequestOptions): ApiPromise<ApiV1SentimentResponse1, Analysis.SaplingSentimentError>`
- **Wire**: `POST /api/v1/sentiment`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SentimentResponse1`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Analysis.SaplingSentimentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.SaplingSentimentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SentimentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SentimentRequest` | `apiV1SentimentRequestSchema` | `src/models/api-v1-sentiment-request.ts` |
| `ApiV1SentimentResponse1` | `apiV1SentimentResponse1Schema` | `src/models/unions/api-v1-sentiment-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingSeo

- **Signature**: `saplingSeo(request: Analysis.SaplingSeoRequest, options?: RequestOptions): ApiPromise<ApiV1SeoResponse, Analysis.SaplingSeoError>`
- **Wire**: `POST /api/v1/seo`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SeoResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Analysis.SaplingSeoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [502] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.SaplingSeoRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SeoRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SeoRequest` | `apiV1SeoRequestSchema` | `src/models/api-v1-seo-request.ts` |
| `ApiV1SeoResponse` | `apiV1SeoResponseSchema` | `src/models/api-v1-seo-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingSimilarTerms

- **Signature**: `saplingSimilarTerms(request: Analysis.SaplingSimilarTermsRequest, options?: RequestOptions): ApiPromise<ApiV1ThesaurusResponse, Analysis.SaplingSimilarTermsError>`
- **Wire**: `POST /api/v1/thesaurus`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ThesaurusResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Analysis.SaplingSimilarTermsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"error4"` [500] `Error` · `"error5"` [502] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.SaplingSimilarTermsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ThesaurusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ThesaurusRequest` | `apiV1ThesaurusRequestSchema` | `src/models/api-v1-thesaurus-request.ts` |
| `ApiV1ThesaurusResponse` | `apiV1ThesaurusResponseSchema` | `src/models/api-v1-thesaurus-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |

### saplingStyleguide

- **Signature**: `saplingStyleguide(request: Analysis.SaplingStyleguideRequest, options?: RequestOptions): ApiPromise<ApiV1StyleguideResponse, Analysis.SaplingStyleguideError>`
- **Wire**: `POST /api/v1/styleguide`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1StyleguideResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Analysis.SaplingStyleguideError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [404] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error4"` [500] `Error` · `"error5"` [502] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.SaplingStyleguideRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1StyleguideRequest4` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1StyleguideRequest4` | `apiV1StyleguideRequest4Schema` | `src/models/unions/api-v1-styleguide-request4.ts` |
| `ApiV1StyleguideResponse` | `apiV1StyleguideResponseSchema` | `src/models/api-v1-styleguide-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingTone

- **Signature**: `saplingTone(request: Analysis.SaplingToneRequest, options?: RequestOptions): ApiPromise<ApiV1ToneResponse1, Analysis.SaplingToneError>`
- **Wire**: `POST /api/v1/tone`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ToneResponse1`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Analysis.SaplingToneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.SaplingToneRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ToneRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ToneRequest` | `apiV1ToneRequestSchema` | `src/models/api-v1-tone-request.ts` |
| `ApiV1ToneResponse1` | `apiV1ToneResponse1Schema` | `src/models/unions/api-v1-tone-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

