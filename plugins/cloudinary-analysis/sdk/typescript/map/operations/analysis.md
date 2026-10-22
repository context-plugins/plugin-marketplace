<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analysis — operations

Accessor: `client.analysis` · Source: `src/resources/analysis.ts` · 15 operations · Request and error types: namespace `Analysis`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `analyze-api-beta`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### analyzeAiVisionGeneral

- **Signature**: `analyzeAiVisionGeneral(request: Analysis.AnalyzeAiVisionGeneralRequestParams, options?: RequestOptions): ApiPromise<AnalyzeAiVisionGeneralResponse | null, Analysis.AnalyzeAiVisionGeneralError>`
- **Wire**: `POST /analyze/ai_vision_general`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyzeAiVisionGeneralResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Analysis.AnalyzeAiVisionGeneralError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.AnalyzeAiVisionGeneralRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AnalyzeAiVisionGeneralRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyzeAiVisionGeneralRequest` | `analyzeAiVisionGeneralRequestSchema` | `src/models/analyze-ai-vision-general-request.ts` |
| `AnalyzeAiVisionGeneralResponse` | `analyzeAiVisionGeneralResponseSchema` | `src/models/analyze-ai-vision-general-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

### analyzeAiVisionModeration

- **Signature**: `analyzeAiVisionModeration(request: Analysis.AnalyzeAiVisionModerationRequestParams, options?: RequestOptions): ApiPromise<AnalyzeAiVisionModerationResponse | null, Analysis.AnalyzeAiVisionModerationError>`
- **Wire**: `POST /analyze/ai_vision_moderation`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyzeAiVisionModerationResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Analysis.AnalyzeAiVisionModerationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.AnalyzeAiVisionModerationRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AnalyzeAiVisionModerationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyzeAiVisionModerationRequest` | `analyzeAiVisionModerationRequestSchema` | `src/models/analyze-ai-vision-moderation-request.ts` |
| `AnalyzeAiVisionModerationResponse` | `analyzeAiVisionModerationResponseSchema` | `src/models/analyze-ai-vision-moderation-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

### analyzeAiVisionTagging

- **Signature**: `analyzeAiVisionTagging(request: Analysis.AnalyzeAiVisionTaggingRequestParams, options?: RequestOptions): ApiPromise<AnalyzeAiVisionTaggingResponse | null, Analysis.AnalyzeAiVisionTaggingError>`
- **Wire**: `POST /analyze/ai_vision_tagging`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyzeAiVisionTaggingResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Analysis.AnalyzeAiVisionTaggingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.AnalyzeAiVisionTaggingRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AnalyzeAiVisionTaggingRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyzeAiVisionTaggingRequest` | `analyzeAiVisionTaggingRequestSchema` | `src/models/analyze-ai-vision-tagging-request.ts` |
| `AnalyzeAiVisionTaggingResponse` | `analyzeAiVisionTaggingResponseSchema` | `src/models/analyze-ai-vision-tagging-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

### analyzeCaptioning

- **Signature**: `analyzeCaptioning(request: Analysis.AnalyzeCaptioningRequest, options?: RequestOptions): ApiPromise<AnalyzeCaptioningResponse | null, Analysis.AnalyzeCaptioningError>`
- **Wire**: `POST /analyze/captioning`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyzeCaptioningResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Analysis.AnalyzeCaptioningError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.AnalyzeCaptioningRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BaseAnalyzeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BaseAnalyzeRequest` | `baseAnalyzeRequestSchema` | `src/models/base-analyze-request.ts` |
| `AnalyzeCaptioningResponse` | `analyzeCaptioningResponseSchema` | `src/models/analyze-captioning-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

### analyzeCldFashion

- **Signature**: `analyzeCldFashion(request: Analysis.AnalyzeCldFashionRequest, options?: RequestOptions): ApiPromise<AnalyzeCldFashionResponse | null, Analysis.AnalyzeCldFashionError>`
- **Wire**: `POST /analyze/cld_fashion`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyzeCldFashionResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Analysis.AnalyzeCldFashionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.AnalyzeCldFashionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BaseAnalyzeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BaseAnalyzeRequest` | `baseAnalyzeRequestSchema` | `src/models/base-analyze-request.ts` |
| `AnalyzeCldFashionResponse` | `analyzeCldFashionResponseSchema` | `src/models/analyze-cld-fashion-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

### analyzeCldText

- **Signature**: `analyzeCldText(request: Analysis.AnalyzeCldTextRequest, options?: RequestOptions): ApiPromise<AnalyzeCldTextResponse | null, Analysis.AnalyzeCldTextError>`
- **Wire**: `POST /analyze/cld_text`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyzeCldTextResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Analysis.AnalyzeCldTextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.AnalyzeCldTextRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BaseAnalyzeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BaseAnalyzeRequest` | `baseAnalyzeRequestSchema` | `src/models/base-analyze-request.ts` |
| `AnalyzeCldTextResponse` | `analyzeCldTextResponseSchema` | `src/models/analyze-cld-text-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

### analyzeCoco

- **Signature**: `analyzeCoco(request: Analysis.AnalyzeCocoRequest, options?: RequestOptions): ApiPromise<AnalyzeCocoResponse | null, Analysis.AnalyzeCocoError>`
- **Wire**: `POST /analyze/coco`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyzeCocoResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Analysis.AnalyzeCocoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.AnalyzeCocoRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BaseAnalyzeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BaseAnalyzeRequest` | `baseAnalyzeRequestSchema` | `src/models/base-analyze-request.ts` |
| `AnalyzeCocoResponse` | `analyzeCocoResponseSchema` | `src/models/analyze-coco-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

### analyzeGoogleLogoDetection

- **Signature**: `analyzeGoogleLogoDetection(request: Analysis.AnalyzeGoogleLogoDetectionRequest, options?: RequestOptions): ApiPromise<AnalyzeGoogleLogoDetectionResponse | null, Analysis.AnalyzeGoogleLogoDetectionError>`
- **Wire**: `POST /analyze/google_logo_detection`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyzeGoogleLogoDetectionResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Analysis.AnalyzeGoogleLogoDetectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.AnalyzeGoogleLogoDetectionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BaseAnalyzeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BaseAnalyzeRequest` | `baseAnalyzeRequestSchema` | `src/models/base-analyze-request.ts` |
| `AnalyzeGoogleLogoDetectionResponse` | `analyzeGoogleLogoDetectionResponseSchema` | `src/models/analyze-google-logo-detection-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

### analyzeGoogleTagging

- **Signature**: `analyzeGoogleTagging(request: Analysis.AnalyzeGoogleTaggingRequest, options?: RequestOptions): ApiPromise<AnalyzeGoogleTaggingResponse | null, Analysis.AnalyzeGoogleTaggingError>`
- **Wire**: `POST /analyze/google_tagging`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyzeGoogleTaggingResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Analysis.AnalyzeGoogleTaggingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.AnalyzeGoogleTaggingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BaseAnalyzeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BaseAnalyzeRequest` | `baseAnalyzeRequestSchema` | `src/models/base-analyze-request.ts` |
| `AnalyzeGoogleTaggingResponse` | `analyzeGoogleTaggingResponseSchema` | `src/models/analyze-google-tagging-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

### analyzeHumanAnatomy

- **Signature**: `analyzeHumanAnatomy(request: Analysis.AnalyzeHumanAnatomyRequest, options?: RequestOptions): ApiPromise<AnalyzeHumanAnatomyResponse | null, Analysis.AnalyzeHumanAnatomyError>`
- **Wire**: `POST /analyze/human_anatomy`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyzeHumanAnatomyResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Analysis.AnalyzeHumanAnatomyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.AnalyzeHumanAnatomyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BaseAnalyzeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BaseAnalyzeRequest` | `baseAnalyzeRequestSchema` | `src/models/base-analyze-request.ts` |
| `AnalyzeHumanAnatomyResponse` | `analyzeHumanAnatomyResponseSchema` | `src/models/analyze-human-anatomy-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

### analyzeImageQuality

- **Signature**: `analyzeImageQuality(request: Analysis.AnalyzeImageQualityRequest, options?: RequestOptions): ApiPromise<AnalyzeImageQualityResponse | null, Analysis.AnalyzeImageQualityError>`
- **Wire**: `POST /analyze/image_quality`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyzeImageQualityResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Analysis.AnalyzeImageQualityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.AnalyzeImageQualityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BaseAnalyzeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BaseAnalyzeRequest` | `baseAnalyzeRequestSchema` | `src/models/base-analyze-request.ts` |
| `AnalyzeImageQualityResponse` | `analyzeImageQualityResponseSchema` | `src/models/analyze-image-quality-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

### analyzeLvis

- **Signature**: `analyzeLvis(request: Analysis.AnalyzeLvisRequest, options?: RequestOptions): ApiPromise<AnalyzeLvisResponse | null, Analysis.AnalyzeLvisError>`
- **Wire**: `POST /analyze/lvis`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyzeLvisResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Analysis.AnalyzeLvisError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.AnalyzeLvisRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BaseAnalyzeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BaseAnalyzeRequest` | `baseAnalyzeRequestSchema` | `src/models/base-analyze-request.ts` |
| `AnalyzeLvisResponse` | `analyzeLvisResponseSchema` | `src/models/analyze-lvis-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

### analyzeShopClassifier

- **Signature**: `analyzeShopClassifier(request: Analysis.AnalyzeShopClassifierRequest, options?: RequestOptions): ApiPromise<AnalyzeShopClassifierResponse | null, Analysis.AnalyzeShopClassifierError>`
- **Wire**: `POST /analyze/shop_classifier`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyzeShopClassifierResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Analysis.AnalyzeShopClassifierError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.AnalyzeShopClassifierRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BaseAnalyzeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BaseAnalyzeRequest` | `baseAnalyzeRequestSchema` | `src/models/base-analyze-request.ts` |
| `AnalyzeShopClassifierResponse` | `analyzeShopClassifierResponseSchema` | `src/models/analyze-shop-classifier-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

### analyzeUnidet

- **Signature**: `analyzeUnidet(request: Analysis.AnalyzeUnidetRequest, options?: RequestOptions): ApiPromise<AnalyzeUnidetResponse | null, Analysis.AnalyzeUnidetError>`
- **Wire**: `POST /analyze/unidet`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyzeUnidetResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Analysis.AnalyzeUnidetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.AnalyzeUnidetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BaseAnalyzeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BaseAnalyzeRequest` | `baseAnalyzeRequestSchema` | `src/models/base-analyze-request.ts` |
| `AnalyzeUnidetResponse` | `analyzeUnidetResponseSchema` | `src/models/analyze-unidet-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

### analyzeWatermarkDetection

- **Signature**: `analyzeWatermarkDetection(request: Analysis.AnalyzeWatermarkDetectionRequest, options?: RequestOptions): ApiPromise<AnalyzeWatermarkDetectionResponse | null, Analysis.AnalyzeWatermarkDetectionError>`
- **Wire**: `POST /analyze/watermark_detection`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyzeWatermarkDetectionResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Analysis.AnalyzeWatermarkDetectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analysis.AnalyzeWatermarkDetectionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BaseAnalyzeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BaseAnalyzeRequest` | `baseAnalyzeRequestSchema` | `src/models/base-analyze-request.ts` |
| `AnalyzeWatermarkDetectionResponse` | `analyzeWatermarkDetectionResponseSchema` | `src/models/analyze-watermark-detection-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

