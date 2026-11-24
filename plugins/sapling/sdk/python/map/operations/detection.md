<!-- Generated file — do not edit; regenerated with the SDK. -->

# Detection — operations

Accessor: `client.detection` · Source: `sapling/apis/detection.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.detection.sapling_ai_detect

- **Route**: `POST /api/v1/aidetect`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_ai_detect(body: ApiV1AidetectRequest2 | ApiV1AidetectRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1AidetectResponse`
- **Returns (raw)**: `ApiResult[ApiV1AidetectResponse, SaplingAiDetectErrorBody]`
- **Error**: `SaplingAiDetectErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AidetectRequest2` | `sapling/models/unions/api_v1_aidetect_request2.py` |
| `ApiV1AidetectRequest2Dict` | `sapling/models/unions/api_v1_aidetect_request2.py` |
| `ApiV1AidetectResponse` | `sapling/models/api_v1_aidetect_response.py` |
| `SaplingAiDetectErrorBody` | `sapling/errors/sapling_ai_detect_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.detection.sapling_ai_detect_url

- **Route**: `POST /api/v1/url-aidetect`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_ai_detect_url(body: ApiV1UrlAidetectRequest | ApiV1UrlAidetectRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1UrlAidetectResponse`
- **Returns (raw)**: `ApiResult[ApiV1UrlAidetectResponse, SaplingAiDetectUrlErrorBody]`
- **Error**: `SaplingAiDetectUrlErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 422, 500, 502, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1UrlAidetectRequest` | `sapling/models/api_v1_url_aidetect_request.py` |
| `ApiV1UrlAidetectRequestDict` | `sapling/models/api_v1_url_aidetect_request.py` |
| `ApiV1UrlAidetectResponse` | `sapling/models/api_v1_url_aidetect_response.py` |
| `SaplingAiDetectUrlErrorBody` | `sapling/errors/sapling_ai_detect_url_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.detection.sapling_aidetect_docx

- **Route**: `POST /api/v1/docx-aidetect`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_aidetect_docx(file: FileInput, *, return_usage_query: bool | None = False, key: str | None = None, json_params: FileInput | None = None, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file`
- **Params**: `return_usage_query` — query `return_usage` · `key` — query · `file` — multipart file · `json_params` — multipart file `jsonParams` · `return_usage` — multipart field
- **Returns (parsed)**: `ApiV1DocxAidetectResponse`
- **Returns (raw)**: `ApiResult[ApiV1DocxAidetectResponse, SaplingAidetectDocxErrorBody]`
- **Error**: `SaplingAidetectDocxErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1DocxAidetect400Error1` [400] · `Error` [401, 403, 429, 500] · `PaymentRequired1` [402] · `ApiV1DocxAidetect413Error1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DocxAidetectResponse` | `sapling/models/api_v1_docx_aidetect_response.py` |
| `SaplingAidetectDocxErrorBody` | `sapling/errors/sapling_aidetect_docx_error.py` |
| `ApiV1DocxAidetect400Error1` | `sapling/models/api_v1_docx_aidetect400_error1.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `ApiV1DocxAidetect413Error1` | `sapling/models/api_v1_docx_aidetect413_error1.py` |

### client.detection.sapling_aidetect_file

- **Route**: `POST /api/v1/file-aidetect`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_aidetect_file(file: FileInput, *, return_usage_query: bool | None = False, key: str | None = None, json_params: FileInput | None = None, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file`
- **Params**: `return_usage_query` — query `return_usage` · `key` — query · `file` — multipart file · `json_params` — multipart file `jsonParams` · `return_usage` — multipart field
- **Returns (parsed)**: `ApiV1FileAidetectResponse`
- **Returns (raw)**: `ApiResult[ApiV1FileAidetectResponse, SaplingAidetectFileErrorBody]`
- **Error**: `SaplingAidetectFileErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1FileAidetect400Error1` [400] · `Error` [401, 403, 429, 500] · `PaymentRequired1` [402] · `ApiV1FileAidetect413Error1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1FileAidetectResponse` | `sapling/models/api_v1_file_aidetect_response.py` |
| `SaplingAidetectFileErrorBody` | `sapling/errors/sapling_aidetect_file_error.py` |
| `ApiV1FileAidetect400Error1` | `sapling/models/api_v1_file_aidetect400_error1.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `ApiV1FileAidetect413Error1` | `sapling/models/api_v1_file_aidetect413_error1.py` |

### client.detection.sapling_aidetect_pdf

- **Route**: `POST /api/v1/pdf-aidetect`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_aidetect_pdf(file: FileInput, *, return_usage_query: bool | None = False, key: str | None = None, json_params: FileInput | None = None, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file`
- **Params**: `return_usage_query` — query `return_usage` · `key` — query · `file` — multipart file · `json_params` — multipart file `jsonParams` · `return_usage` — multipart field
- **Returns (parsed)**: `ApiV1PdfAidetectResponse`
- **Returns (raw)**: `ApiResult[ApiV1PdfAidetectResponse, SaplingAidetectPdfErrorBody]`
- **Error**: `SaplingAidetectPdfErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PdfAidetect400Error1` [400] · `Error` [401, 403, 429, 500] · `PaymentRequired1` [402] · `ApiV1PdfAidetect413Error1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PdfAidetectResponse` | `sapling/models/api_v1_pdf_aidetect_response.py` |
| `SaplingAidetectPdfErrorBody` | `sapling/errors/sapling_aidetect_pdf_error.py` |
| `ApiV1PdfAidetect400Error1` | `sapling/models/api_v1_pdf_aidetect400_error1.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `ApiV1PdfAidetect413Error1` | `sapling/models/api_v1_pdf_aidetect413_error1.py` |

### client.detection.sapling_detect_language

- **Route**: `POST /api/v1/langdetect`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_detect_language(body: ApiV1LangdetectRequest2 | ApiV1LangdetectRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1LangdetectResponse`
- **Returns (raw)**: `ApiResult[ApiV1LangdetectResponse, SaplingDetectLanguageErrorBody]`
- **Error**: `SaplingDetectLanguageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 503] · `PaymentRequired1` [402] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1LangdetectRequest2` | `sapling/models/unions/api_v1_langdetect_request2.py` |
| `ApiV1LangdetectRequest2Dict` | `sapling/models/unions/api_v1_langdetect_request2.py` |
| `ApiV1LangdetectResponse` | `sapling/models/api_v1_langdetect_response.py` |
| `SaplingDetectLanguageErrorBody` | `sapling/errors/sapling_detect_language_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.detection.sapling_detect_pii

- **Route**: `POST /api/v1/pii`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_detect_pii(body: ApiV1PiiRequest | ApiV1PiiRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1PiiResponse`
- **Returns (raw)**: `ApiResult[ApiV1PiiResponse, SaplingDetectPiiErrorBody]`
- **Error**: `SaplingDetectPiiErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 502, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PiiRequest` | `sapling/models/api_v1_pii_request.py` |
| `ApiV1PiiRequestDict` | `sapling/models/api_v1_pii_request.py` |
| `ApiV1PiiResponse` | `sapling/models/api_v1_pii_response.py` |
| `SaplingDetectPiiErrorBody` | `sapling/errors/sapling_detect_pii_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.detection.sapling_ner

- **Route**: `POST /api/v1/ner`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_ner(body: ApiV1NerRequest2 | ApiV1NerRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1NerResponse`
- **Returns (raw)**: `ApiResult[ApiV1NerResponse, SaplingNerErrorBody]`
- **Error**: `SaplingNerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 502, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1NerRequest2` | `sapling/models/unions/api_v1_ner_request2.py` |
| `ApiV1NerRequest2Dict` | `sapling/models/unions/api_v1_ner_request2.py` |
| `ApiV1NerResponse` | `sapling/models/api_v1_ner_response.py` |
| `SaplingNerErrorBody` | `sapling/errors/sapling_ner_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.detection.sapling_profanity

- **Route**: `POST /api/v1/profanity`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_profanity(body: ApiV1ProfanityRequest | ApiV1ProfanityRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ProfanityResponse`
- **Returns (raw)**: `ApiResult[ApiV1ProfanityResponse, SaplingProfanityErrorBody]`
- **Error**: `SaplingProfanityErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PaymentRequired1` [402] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ProfanityRequest` | `sapling/models/api_v1_profanity_request.py` |
| `ApiV1ProfanityRequestDict` | `sapling/models/api_v1_profanity_request.py` |
| `ApiV1ProfanityResponse` | `sapling/models/api_v1_profanity_response.py` |
| `SaplingProfanityErrorBody` | `sapling/errors/sapling_profanity_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.detection.sapling_safety

- **Route**: `POST /api/v1/safety`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_safety(body: ApiV1SafetyRequest2 | ApiV1SafetyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SafetyResponse`
- **Returns (raw)**: `ApiResult[ApiV1SafetyResponse, SaplingSafetyErrorBody]`
- **Error**: `SaplingSafetyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SafetyRequest2` | `sapling/models/unions/api_v1_safety_request2.py` |
| `ApiV1SafetyRequest2Dict` | `sapling/models/unions/api_v1_safety_request2.py` |
| `ApiV1SafetyResponse` | `sapling/models/api_v1_safety_response.py` |
| `SaplingSafetyErrorBody` | `sapling/errors/sapling_safety_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

