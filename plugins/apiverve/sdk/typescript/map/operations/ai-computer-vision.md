<!-- Generated file — do not edit; regenerated with the SDK. -->

# AiComputerVision — operations

Accessor: `client.aiComputerVision` · Source: `src/resources/ai-computer-vision.ts` · 6 operations · Request and error types: namespace `AiComputerVision`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### articleideas

- **Signature**: `articleideas(request: AiComputerVision.ArticleideasRequest, options?: RequestOptions): ApiPromise<V1ArticleideasResponse, AiComputerVision.ArticleideasError>`
- **Wire**: `GET /v1/articleideas`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ArticleideasResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `AiComputerVision.ArticleideasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiComputerVision.ArticleideasRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `topic` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ArticleideasResponse` | `v1ArticleideasResponseSchema` | `src/models/v1-articleideas-response.ts` |

### codedetector

- **Signature**: `codedetector(request: AiComputerVision.CodedetectorRequest, options?: RequestOptions): ApiPromise<V1CodedetectorResponse, AiComputerVision.CodedetectorError>`
- **Wire**: `POST /v1/codedetector`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1CodedetectorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `AiComputerVision.CodedetectorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiComputerVision.CodedetectorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1CodedetectorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CodedetectorRequest` | `v1CodedetectorRequestSchema` | `src/models/v1-codedetector-request.ts` |
| `V1CodedetectorResponse` | `v1CodedetectorResponseSchema` | `src/models/v1-codedetector-response.ts` |

### imagecaption

- **Signature**: `imagecaption(request: AiComputerVision.ImagecaptionRequest, options?: RequestOptions): ApiPromise<V1ImagecaptionResponse, AiComputerVision.ImagecaptionError>`
- **Wire**: `POST /v1/imagecaption`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `image` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1ImagecaptionResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `AiComputerVision.ImagecaptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiComputerVision.ImagecaptionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `image` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ImagecaptionResponse` | `v1ImagecaptionResponseSchema` | `src/models/v1-imagecaption-response.ts` |

### imagetotext

- **Signature**: `imagetotext(request: AiComputerVision.ImagetotextRequest, options?: RequestOptions): ApiPromise<V1ImagetotextResponse, AiComputerVision.ImagetotextError>`
- **Wire**: `POST /v1/imagetotext`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `image` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1ImagetotextResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `AiComputerVision.ImagetotextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiComputerVision.ImagetotextRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `image` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ImagetotextResponse` | `v1ImagetotextResponseSchema` | `src/models/v1-imagetotext-response.ts` |

### languagedetector

- **Signature**: `languagedetector(request: AiComputerVision.LanguagedetectorRequest, options?: RequestOptions): ApiPromise<V1LanguagedetectorResponse, AiComputerVision.LanguagedetectorError>`
- **Wire**: `POST /v1/languagedetector`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1LanguagedetectorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `AiComputerVision.LanguagedetectorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiComputerVision.LanguagedetectorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1LanguagedetectorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LanguagedetectorRequest` | `v1LanguagedetectorRequestSchema` | `src/models/v1-languagedetector-request.ts` |
| `V1LanguagedetectorResponse` | `v1LanguagedetectorResponseSchema` | `src/models/v1-languagedetector-response.ts` |

### sentimentanalysis

- **Signature**: `sentimentanalysis(request: AiComputerVision.SentimentanalysisRequest, options?: RequestOptions): ApiPromise<V1SentimentanalysisResponse, AiComputerVision.SentimentanalysisError>`
- **Wire**: `POST /v1/sentimentanalysis`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1SentimentanalysisResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `AiComputerVision.SentimentanalysisError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiComputerVision.SentimentanalysisRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1SentimentanalysisRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SentimentanalysisRequest` | `v1SentimentanalysisRequestSchema` | `src/models/v1-sentimentanalysis-request.ts` |
| `V1SentimentanalysisResponse` | `v1SentimentanalysisResponseSchema` | `src/models/v1-sentimentanalysis-response.ts` |

