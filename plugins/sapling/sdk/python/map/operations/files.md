<!-- Generated file — do not edit; regenerated with the SDK. -->

# Files — operations

Accessor: `client.files` · Source: `sapling/apis/files.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.files.sapling_chunk_html

- **Route**: `POST /api/v1/ingest/chunk_html`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_chunk_html(body: ApiV1IngestChunkHtmlRequest | ApiV1IngestChunkHtmlRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1IngestChunkHtmlResponse`
- **Returns (raw)**: `ApiResult[ApiV1IngestChunkHtmlResponse, SaplingChunkHtmlErrorBody]`
- **Error**: `SaplingChunkHtmlErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1IngestChunkHtmlRequest` | `sapling/models/api_v1_ingest_chunk_html_request.py` |
| `ApiV1IngestChunkHtmlRequestDict` | `sapling/models/api_v1_ingest_chunk_html_request.py` |
| `ApiV1IngestChunkHtmlResponse` | `sapling/models/api_v1_ingest_chunk_html_response.py` |
| `SaplingChunkHtmlErrorBody` | `sapling/errors/sapling_chunk_html_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |

### client.files.sapling_chunk_text

- **Route**: `POST /api/v1/ingest/chunk_text`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_chunk_text(body: ApiV1IngestChunkTextRequest | ApiV1IngestChunkTextRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1IngestChunkTextResponse`
- **Returns (raw)**: `ApiResult[ApiV1IngestChunkTextResponse, SaplingChunkTextErrorBody]`
- **Error**: `SaplingChunkTextErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1IngestChunkTextRequest` | `sapling/models/api_v1_ingest_chunk_text_request.py` |
| `ApiV1IngestChunkTextRequestDict` | `sapling/models/api_v1_ingest_chunk_text_request.py` |
| `ApiV1IngestChunkTextResponse` | `sapling/models/api_v1_ingest_chunk_text_response.py` |
| `SaplingChunkTextErrorBody` | `sapling/errors/sapling_chunk_text_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |

### client.files.sapling_docx_to_text

- **Route**: `POST /api/v1/ingest/docx_to_text`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_docx_to_text(file: FileInput, *, return_usage_query: bool | None = False, key: str | None = None, json_params: FileInput | None = None, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file`
- **Params**: `return_usage_query` — query `return_usage` · `key` — query · `file` — multipart file · `json_params` — multipart file `jsonParams` · `return_usage` — multipart field
- **Returns (parsed)**: `ApiV1IngestDocxToTextResponse`
- **Returns (raw)**: `ApiResult[ApiV1IngestDocxToTextResponse, SaplingDocxToTextErrorBody]`
- **Error**: `SaplingDocxToTextErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1IngestDocxToText400Error1` [400] · `Error` [401, 403, 429, 500] · `PaymentRequired1` [402] · `ApiV1IngestDocxToText413Error1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1IngestDocxToTextResponse` | `sapling/models/api_v1_ingest_docx_to_text_response.py` |
| `SaplingDocxToTextErrorBody` | `sapling/errors/sapling_docx_to_text_error.py` |
| `ApiV1IngestDocxToText400Error1` | `sapling/models/api_v1_ingest_docx_to_text400_error1.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `ApiV1IngestDocxToText413Error1` | `sapling/models/api_v1_ingest_docx_to_text413_error1.py` |

### client.files.sapling_pdf_to_text

- **Route**: `POST /api/v1/ingest/pdf_to_text`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_pdf_to_text(file: FileInput, *, return_usage_query: bool | None = False, key: str | None = None, json_params: FileInput | None = None, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file`
- **Params**: `return_usage_query` — query `return_usage` · `key` — query · `file` — multipart file · `json_params` — multipart file `jsonParams` · `return_usage` — multipart field
- **Returns (parsed)**: `ApiV1IngestPdfToTextResponse`
- **Returns (raw)**: `ApiResult[ApiV1IngestPdfToTextResponse, SaplingPdfToTextErrorBody]`
- **Error**: `SaplingPdfToTextErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1IngestPdfToText400Error1` [400] · `Error` [401, 403, 429, 500] · `PaymentRequired1` [402] · `ApiV1IngestPdfToText413Error1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1IngestPdfToTextResponse` | `sapling/models/api_v1_ingest_pdf_to_text_response.py` |
| `SaplingPdfToTextErrorBody` | `sapling/errors/sapling_pdf_to_text_error.py` |
| `ApiV1IngestPdfToText400Error1` | `sapling/models/api_v1_ingest_pdf_to_text400_error1.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `ApiV1IngestPdfToText413Error1` | `sapling/models/api_v1_ingest_pdf_to_text413_error1.py` |

