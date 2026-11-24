<!-- Generated file — do not edit; regenerated with the SDK. -->

# Files — operations

Accessor: `client.files` · Source: `src/resources/files.ts` · 4 operations · Request and error types: namespace `Files`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sapling`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### saplingChunkHtml

- **Signature**: `saplingChunkHtml(request: Files.SaplingChunkHtmlRequest, options?: RequestOptions): ApiPromise<ApiV1IngestChunkHtmlResponse, Files.SaplingChunkHtmlError>`
- **Wire**: `POST /api/v1/ingest/chunk_html`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1IngestChunkHtmlResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Files.SaplingChunkHtmlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Files.SaplingChunkHtmlRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1IngestChunkHtmlRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1IngestChunkHtmlRequest` | `apiV1IngestChunkHtmlRequestSchema` | `src/models/api-v1-ingest-chunk-html-request.ts` |
| `ApiV1IngestChunkHtmlResponse` | `apiV1IngestChunkHtmlResponseSchema` | `src/models/api-v1-ingest-chunk-html-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |

### saplingChunkText

- **Signature**: `saplingChunkText(request: Files.SaplingChunkTextRequest, options?: RequestOptions): ApiPromise<ApiV1IngestChunkTextResponse, Files.SaplingChunkTextError>`
- **Wire**: `POST /api/v1/ingest/chunk_text`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1IngestChunkTextResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Files.SaplingChunkTextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Files.SaplingChunkTextRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1IngestChunkTextRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1IngestChunkTextRequest` | `apiV1IngestChunkTextRequestSchema` | `src/models/api-v1-ingest-chunk-text-request.ts` |
| `ApiV1IngestChunkTextResponse` | `apiV1IngestChunkTextResponseSchema` | `src/models/api-v1-ingest-chunk-text-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |

### saplingDocxToText

- **Signature**: `saplingDocxToText(request: Files.SaplingDocxToTextRequest, options?: RequestOptions): ApiPromise<ApiV1IngestDocxToTextResponse, Files.SaplingDocxToTextError>`
- **Wire**: `POST /api/v1/ingest/docx_to_text`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `multipart/form-data` — every field marked `form`. `file` and `jsonParams` are file parts, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1IngestDocxToTextResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Files.SaplingDocxToTextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1IngestDocxToText400Error1"` [400] `ApiV1IngestDocxToText400Error1` · `"error"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error2"` [403] `Error` · `"apiV1IngestDocxToText413Error1"` [413] `ApiV1IngestDocxToText413Error1` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Files.SaplingDocxToTextRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `returnUsageQuery` | `query` | `return_usage` | `boolean` | no | `false` |
| `key` | `query` | — | `string` | no | — |
| `file` | `form` | — | `FileInput` | yes | — |
| `jsonParams` | `form` | — | `FileInput` | no | — |
| `returnUsage` | `form` | `return_usage` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1IngestDocxToTextResponse` | `apiV1IngestDocxToTextResponseSchema` | `src/models/api-v1-ingest-docx-to-text-response.ts` |
| `ApiV1IngestDocxToText400Error1` | `apiV1IngestDocxToText400Error1Schema` | `src/models/api-v1-ingest-docx-to-text400-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `ApiV1IngestDocxToText413Error1` | `apiV1IngestDocxToText413Error1Schema` | `src/models/api-v1-ingest-docx-to-text413-error1.ts` |

### saplingPdfToText

- **Signature**: `saplingPdfToText(request: Files.SaplingPdfToTextRequest, options?: RequestOptions): ApiPromise<ApiV1IngestPdfToTextResponse, Files.SaplingPdfToTextError>`
- **Wire**: `POST /api/v1/ingest/pdf_to_text`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `multipart/form-data` — every field marked `form`. `file` and `jsonParams` are file parts, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1IngestPdfToTextResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Files.SaplingPdfToTextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1IngestPdfToText400Error1"` [400] `ApiV1IngestPdfToText400Error1` · `"error"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error2"` [403] `Error` · `"apiV1IngestPdfToText413Error1"` [413] `ApiV1IngestPdfToText413Error1` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Files.SaplingPdfToTextRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `returnUsageQuery` | `query` | `return_usage` | `boolean` | no | `false` |
| `key` | `query` | — | `string` | no | — |
| `file` | `form` | — | `FileInput` | yes | — |
| `jsonParams` | `form` | — | `FileInput` | no | — |
| `returnUsage` | `form` | `return_usage` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1IngestPdfToTextResponse` | `apiV1IngestPdfToTextResponseSchema` | `src/models/api-v1-ingest-pdf-to-text-response.ts` |
| `ApiV1IngestPdfToText400Error1` | `apiV1IngestPdfToText400Error1Schema` | `src/models/api-v1-ingest-pdf-to-text400-error1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `ApiV1IngestPdfToText413Error1` | `apiV1IngestPdfToText413Error1Schema` | `src/models/api-v1-ingest-pdf-to-text413-error1.ts` |

