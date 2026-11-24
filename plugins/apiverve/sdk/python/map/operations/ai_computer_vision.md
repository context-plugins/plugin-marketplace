<!-- Generated file — do not edit; regenerated with the SDK. -->

# AiComputerVision — operations

Accessor: `client.ai_computer_vision` · Source: `api_verve/apis/ai_computer_vision.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ai_computer_vision.articleideas

- **Route**: `GET /v1/articleideas`
- **Auth**: `api_key`
- **Signature**: `def articleideas(topic: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `topic`
- **Params**: `topic` — query
- **Returns (parsed)**: `V1ArticleideasResponse`
- **Returns (raw)**: `ApiResult[V1ArticleideasResponse, ArticleideasErrorBody]`
- **Error**: `ArticleideasErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ArticleideasResponse` | `api_verve/models/v1_articleideas_response.py` |
| `ArticleideasErrorBody` | `api_verve/errors/articleideas_error.py` |

### client.ai_computer_vision.codedetector

- **Route**: `POST /v1/codedetector`
- **Auth**: `api_key`
- **Signature**: `def codedetector(body: V1CodedetectorRequest | V1CodedetectorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1CodedetectorResponse`
- **Returns (raw)**: `ApiResult[V1CodedetectorResponse, CodedetectorErrorBody]`
- **Error**: `CodedetectorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CodedetectorRequest` | `api_verve/models/v1_codedetector_request.py` |
| `V1CodedetectorRequestDict` | `api_verve/models/v1_codedetector_request.py` |
| `V1CodedetectorResponse` | `api_verve/models/v1_codedetector_response.py` |
| `CodedetectorErrorBody` | `api_verve/errors/codedetector_error.py` |

### client.ai_computer_vision.imagecaption

- **Route**: `POST /v1/imagecaption`
- **Auth**: `api_key`
- **Signature**: `def imagecaption(image: FileInput, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `image`
- **Params**: `image` — multipart file
- **Returns (parsed)**: `V1ImagecaptionResponse`
- **Returns (raw)**: `ApiResult[V1ImagecaptionResponse, ImagecaptionErrorBody]`
- **Error**: `ImagecaptionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ImagecaptionResponse` | `api_verve/models/v1_imagecaption_response.py` |
| `ImagecaptionErrorBody` | `api_verve/errors/imagecaption_error.py` |

### client.ai_computer_vision.imagetotext

- **Route**: `POST /v1/imagetotext`
- **Auth**: `api_key`
- **Signature**: `def imagetotext(image: FileInput, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `image`
- **Params**: `image` — multipart file
- **Returns (parsed)**: `V1ImagetotextResponse`
- **Returns (raw)**: `ApiResult[V1ImagetotextResponse, ImagetotextErrorBody]`
- **Error**: `ImagetotextErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ImagetotextResponse` | `api_verve/models/v1_imagetotext_response.py` |
| `ImagetotextErrorBody` | `api_verve/errors/imagetotext_error.py` |

### client.ai_computer_vision.languagedetector

- **Route**: `POST /v1/languagedetector`
- **Auth**: `api_key`
- **Signature**: `def languagedetector(body: V1LanguagedetectorRequest | V1LanguagedetectorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1LanguagedetectorResponse`
- **Returns (raw)**: `ApiResult[V1LanguagedetectorResponse, LanguagedetectorErrorBody]`
- **Error**: `LanguagedetectorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1LanguagedetectorRequest` | `api_verve/models/v1_languagedetector_request.py` |
| `V1LanguagedetectorRequestDict` | `api_verve/models/v1_languagedetector_request.py` |
| `V1LanguagedetectorResponse` | `api_verve/models/v1_languagedetector_response.py` |
| `LanguagedetectorErrorBody` | `api_verve/errors/languagedetector_error.py` |

### client.ai_computer_vision.sentimentanalysis

- **Route**: `POST /v1/sentimentanalysis`
- **Auth**: `api_key`
- **Signature**: `def sentimentanalysis(body: V1SentimentanalysisRequest | V1SentimentanalysisRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1SentimentanalysisResponse`
- **Returns (raw)**: `ApiResult[V1SentimentanalysisResponse, SentimentanalysisErrorBody]`
- **Error**: `SentimentanalysisErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SentimentanalysisRequest` | `api_verve/models/v1_sentimentanalysis_request.py` |
| `V1SentimentanalysisRequestDict` | `api_verve/models/v1_sentimentanalysis_request.py` |
| `V1SentimentanalysisResponse` | `api_verve/models/v1_sentimentanalysis_response.py` |
| `SentimentanalysisErrorBody` | `api_verve/errors/sentimentanalysis_error.py` |

