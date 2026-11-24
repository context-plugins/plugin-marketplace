<!-- Generated file — do not edit; regenerated with the SDK. -->

# Detection — operations

Accessor: `client.detection` · Source: `src/resources/detection.ts` · 10 operations · Request and error types: namespace `Detection`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sapling`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### saplingAiDetect

- **Signature**: `saplingAiDetect(request: Detection.SaplingAiDetectRequest, options?: RequestOptions): ApiPromise<ApiV1AidetectResponse, Detection.SaplingAiDetectError>`
- **Wire**: `POST /api/v1/aidetect`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AidetectResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Detection.SaplingAiDetectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Detection.SaplingAiDetectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1AidetectRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AidetectRequest2` | `apiV1AidetectRequest2Schema` | `src/models/unions/api-v1-aidetect-request2.ts` |
| `ApiV1AidetectResponse` | `apiV1AidetectResponseSchema` | `src/models/api-v1-aidetect-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingAiDetectUrl

- **Signature**: `saplingAiDetectUrl(request: Detection.SaplingAiDetectUrlRequest, options?: RequestOptions): ApiPromise<ApiV1UrlAidetectResponse, Detection.SaplingAiDetectUrlError>`
- **Wire**: `POST /api/v1/url-aidetect`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1UrlAidetectResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Detection.SaplingAiDetectUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"error3"` [422] `Error` · `"rateLimited1"` [429] `RateLimited1` · `"error4"` [500] `Error` · `"error5"` [502] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Detection.SaplingAiDetectUrlRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1UrlAidetectRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1UrlAidetectRequest` | `apiV1UrlAidetectRequestSchema` | `src/models/api-v1-url-aidetect-request.ts` |
| `ApiV1UrlAidetectResponse` | `apiV1UrlAidetectResponseSchema` | `src/models/api-v1-url-aidetect-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingAidetectDocx

- **Signature**: `saplingAidetectDocx(request: Detection.SaplingAidetectDocxRequest, options?: RequestOptions): ApiPromise<ApiV1DocxAidetectResponse, Detection.SaplingAidetectDocxError>`
- **Wire**: `POST /api/v1/docx-aidetect`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `multipart/form-data` — every field marked `form`. `file` and `jsonParams` are file parts, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1DocxAidetectResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Detection.SaplingAidetectDocxError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1DocxAidetect400Error1"` [400] `ApiV1DocxAidetect400Error1` · `"error"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error2"` [403] `Error` · `"apiV1DocxAidetect413Error1"` [413] `ApiV1DocxAidetect413Error1` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Detection.SaplingAidetectDocxRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `returnUsageQuery` | `query` | `return_usage` | `boolean` | no | `false` |
| `key` | `query` | — | `string` | no | — |
| `file` | `form` | — | `FileInput` | yes | — |
| `jsonParams` | `form` | — | `FileInput` | no | — |
| `returnUsage` | `form` | `return_usage` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DocxAidetectResponse` | `apiV1DocxAidetectResponseSchema` | `src/models/api-v1-docx-aidetect-response.ts` |
| `ApiV1DocxAidetect400Error1` | `apiV1DocxAidetect400Error1Schema` | `src/models/api-v1-docx-aidetect400-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `ApiV1DocxAidetect413Error1` | `apiV1DocxAidetect413Error1Schema` | `src/models/api-v1-docx-aidetect413-error1.ts` |

### saplingAidetectFile

- **Signature**: `saplingAidetectFile(request: Detection.SaplingAidetectFileRequest, options?: RequestOptions): ApiPromise<ApiV1FileAidetectResponse, Detection.SaplingAidetectFileError>`
- **Wire**: `POST /api/v1/file-aidetect`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `multipart/form-data` — every field marked `form`. `file` and `jsonParams` are file parts, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1FileAidetectResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Detection.SaplingAidetectFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1FileAidetect400Error1"` [400] `ApiV1FileAidetect400Error1` · `"error"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error2"` [403] `Error` · `"apiV1FileAidetect413Error1"` [413] `ApiV1FileAidetect413Error1` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Detection.SaplingAidetectFileRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `returnUsageQuery` | `query` | `return_usage` | `boolean` | no | `false` |
| `key` | `query` | — | `string` | no | — |
| `file` | `form` | — | `FileInput` | yes | — |
| `jsonParams` | `form` | — | `FileInput` | no | — |
| `returnUsage` | `form` | `return_usage` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1FileAidetectResponse` | `apiV1FileAidetectResponseSchema` | `src/models/api-v1-file-aidetect-response.ts` |
| `ApiV1FileAidetect400Error1` | `apiV1FileAidetect400Error1Schema` | `src/models/api-v1-file-aidetect400-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `ApiV1FileAidetect413Error1` | `apiV1FileAidetect413Error1Schema` | `src/models/api-v1-file-aidetect413-error1.ts` |

### saplingAidetectPdf

- **Signature**: `saplingAidetectPdf(request: Detection.SaplingAidetectPdfRequest, options?: RequestOptions): ApiPromise<ApiV1PdfAidetectResponse, Detection.SaplingAidetectPdfError>`
- **Wire**: `POST /api/v1/pdf-aidetect`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `multipart/form-data` — every field marked `form`. `file` and `jsonParams` are file parts, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PdfAidetectResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Detection.SaplingAidetectPdfError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PdfAidetect400Error1"` [400] `ApiV1PdfAidetect400Error1` · `"error"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error2"` [403] `Error` · `"apiV1PdfAidetect413Error1"` [413] `ApiV1PdfAidetect413Error1` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Detection.SaplingAidetectPdfRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `returnUsageQuery` | `query` | `return_usage` | `boolean` | no | `false` |
| `key` | `query` | — | `string` | no | — |
| `file` | `form` | — | `FileInput` | yes | — |
| `jsonParams` | `form` | — | `FileInput` | no | — |
| `returnUsage` | `form` | `return_usage` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PdfAidetectResponse` | `apiV1PdfAidetectResponseSchema` | `src/models/api-v1-pdf-aidetect-response.ts` |
| `ApiV1PdfAidetect400Error1` | `apiV1PdfAidetect400Error1Schema` | `src/models/api-v1-pdf-aidetect400-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `ApiV1PdfAidetect413Error1` | `apiV1PdfAidetect413Error1Schema` | `src/models/api-v1-pdf-aidetect413-error1.ts` |

### saplingDetectLanguage

- **Signature**: `saplingDetectLanguage(request: Detection.SaplingDetectLanguageRequest, options?: RequestOptions): ApiPromise<ApiV1LangdetectResponse, Detection.SaplingDetectLanguageError>`
- **Wire**: `POST /api/v1/langdetect`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1LangdetectResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Detection.SaplingDetectLanguageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Detection.SaplingDetectLanguageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1LangdetectRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1LangdetectRequest2` | `apiV1LangdetectRequest2Schema` | `src/models/unions/api-v1-langdetect-request2.ts` |
| `ApiV1LangdetectResponse` | `apiV1LangdetectResponseSchema` | `src/models/api-v1-langdetect-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingDetectPii

- **Signature**: `saplingDetectPii(request: Detection.SaplingDetectPiiRequest, options?: RequestOptions): ApiPromise<ApiV1PiiResponse, Detection.SaplingDetectPiiError>`
- **Wire**: `POST /api/v1/pii`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PiiResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Detection.SaplingDetectPiiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [502] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Detection.SaplingDetectPiiRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1PiiRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PiiRequest` | `apiV1PiiRequestSchema` | `src/models/api-v1-pii-request.ts` |
| `ApiV1PiiResponse` | `apiV1PiiResponseSchema` | `src/models/api-v1-pii-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingNer

- **Signature**: `saplingNer(request: Detection.SaplingNerRequest, options?: RequestOptions): ApiPromise<ApiV1NerResponse, Detection.SaplingNerError>`
- **Wire**: `POST /api/v1/ner`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1NerResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Detection.SaplingNerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [502] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Detection.SaplingNerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1NerRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1NerRequest2` | `apiV1NerRequest2Schema` | `src/models/unions/api-v1-ner-request2.ts` |
| `ApiV1NerResponse` | `apiV1NerResponseSchema` | `src/models/api-v1-ner-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingProfanity

- **Signature**: `saplingProfanity(request: Detection.SaplingProfanityRequest, options?: RequestOptions): ApiPromise<ApiV1ProfanityResponse, Detection.SaplingProfanityError>`
- **Wire**: `POST /api/v1/profanity`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ProfanityResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Detection.SaplingProfanityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"rateLimited1"` [429] `RateLimited1` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Detection.SaplingProfanityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ProfanityRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ProfanityRequest` | `apiV1ProfanityRequestSchema` | `src/models/api-v1-profanity-request.ts` |
| `ApiV1ProfanityResponse` | `apiV1ProfanityResponseSchema` | `src/models/api-v1-profanity-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingSafety

- **Signature**: `saplingSafety(request: Detection.SaplingSafetyRequest, options?: RequestOptions): ApiPromise<ApiV1SafetyResponse, Detection.SaplingSafetyError>`
- **Wire**: `POST /api/v1/safety`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SafetyResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Detection.SaplingSafetyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Detection.SaplingSafetyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SafetyRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SafetyRequest2` | `apiV1SafetyRequest2Schema` | `src/models/unions/api-v1-safety-request2.ts` |
| `ApiV1SafetyResponse` | `apiV1SafetyResponseSchema` | `src/models/api-v1-safety-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

