<!-- Generated file — do not edit; regenerated with the SDK. -->

# Generation — operations

Accessor: `client.generation` · Source: `sapling/apis/generation.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.generation.sapling_accept_completion

- **Route**: `POST /api/v1/complete/{completion_hash}/accept`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_accept_completion(completion_hash: UUID, body: ApiV1CompleteAcceptRequest | ApiV1CompleteAcceptRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `completion_hash`, `body`
- **Params**: `completion_hash` — path · `body` — JSON body
- **Returns (parsed)**: `ApiV1CompleteAcceptResponse`
- **Returns (raw)**: `ApiResult[ApiV1CompleteAcceptResponse, SaplingAcceptCompletionErrorBody]`
- **Error**: `SaplingAcceptCompletionErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1CompleteAcceptResponse11` [400] · `Error` [401, 403, 500] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CompleteAcceptRequest` | `sapling/models/api_v1_complete_accept_request.py` |
| `ApiV1CompleteAcceptRequestDict` | `sapling/models/api_v1_complete_accept_request.py` |
| `ApiV1CompleteAcceptResponse` | `sapling/models/api_v1_complete_accept_response.py` |
| `SaplingAcceptCompletionErrorBody` | `sapling/errors/sapling_accept_completion_error.py` |
| `ApiV1CompleteAcceptResponse11` | `sapling/models/unions/api_v1_complete_accept_response11.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |

### client.generation.sapling_autocomplete

- **Route**: `POST /api/v1/complete`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_autocomplete(body: ApiV1CompleteRequest | ApiV1CompleteRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1CompleteResponse`
- **Returns (raw)**: `ApiResult[ApiV1CompleteResponse, SaplingAutocompleteErrorBody]`
- **Error**: `SaplingAutocompleteErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CompleteRequest` | `sapling/models/api_v1_complete_request.py` |
| `ApiV1CompleteRequestDict` | `sapling/models/api_v1_complete_request.py` |
| `ApiV1CompleteResponse` | `sapling/models/api_v1_complete_response.py` |
| `SaplingAutocompleteErrorBody` | `sapling/errors/sapling_autocomplete_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.generation.sapling_paraphrase

- **Route**: `POST /api/v1/paraphrase`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_paraphrase(body: ApiV1ParaphraseRequest | ApiV1ParaphraseRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ParaphraseResponse`
- **Returns (raw)**: `ApiResult[ApiV1ParaphraseResponse, SaplingParaphraseErrorBody]`
- **Error**: `SaplingParaphraseErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `ApiV1Paraphrase429Error1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ParaphraseRequest` | `sapling/models/api_v1_paraphrase_request.py` |
| `ApiV1ParaphraseRequestDict` | `sapling/models/api_v1_paraphrase_request.py` |
| `ApiV1ParaphraseResponse` | `sapling/models/api_v1_paraphrase_response.py` |
| `SaplingParaphraseErrorBody` | `sapling/errors/sapling_paraphrase_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `ApiV1Paraphrase429Error1` | `sapling/models/api_v1_paraphrase429_error1.py` |

### client.generation.sapling_rephrase

- **Route**: `POST /api/v1/rephrase`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_rephrase(body: ApiV1RephraseRequest | ApiV1RephraseRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1RephraseResponse`
- **Returns (raw)**: `ApiResult[ApiV1RephraseResponse, SaplingRephraseErrorBody]`
- **Error**: `SaplingRephraseErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `ApiV1Rephrase429Error1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1RephraseRequest` | `sapling/models/api_v1_rephrase_request.py` |
| `ApiV1RephraseRequestDict` | `sapling/models/api_v1_rephrase_request.py` |
| `ApiV1RephraseResponse` | `sapling/models/api_v1_rephrase_response.py` |
| `SaplingRephraseErrorBody` | `sapling/errors/sapling_rephrase_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `ApiV1Rephrase429Error1` | `sapling/models/api_v1_rephrase429_error1.py` |

### client.generation.sapling_sentence_split

- **Route**: `POST /api/v1/sentence_split`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_sentence_split(body: ApiV1SentenceSplitRequest | ApiV1SentenceSplitRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SentenceSplitResponse`
- **Returns (raw)**: `ApiResult[ApiV1SentenceSplitResponse, SaplingSentenceSplitErrorBody]`
- **Error**: `SaplingSentenceSplitErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `ApiV1SentenceSplit429Error1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SentenceSplitRequest` | `sapling/models/api_v1_sentence_split_request.py` |
| `ApiV1SentenceSplitRequestDict` | `sapling/models/api_v1_sentence_split_request.py` |
| `ApiV1SentenceSplitResponse` | `sapling/models/api_v1_sentence_split_response.py` |
| `SaplingSentenceSplitErrorBody` | `sapling/errors/sapling_sentence_split_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `ApiV1SentenceSplit429Error1` | `sapling/models/api_v1_sentence_split429_error1.py` |

### client.generation.sapling_simplify

- **Route**: `POST /api/v1/simplify`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_simplify(body: ApiV1SimplifyRequest2 | ApiV1SimplifyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SimplifyResponse`
- **Returns (raw)**: `ApiResult[ApiV1SimplifyResponse, SaplingSimplifyErrorBody]`
- **Error**: `SaplingSimplifyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 502, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SimplifyRequest2` | `sapling/models/unions/api_v1_simplify_request2.py` |
| `ApiV1SimplifyRequest2Dict` | `sapling/models/unions/api_v1_simplify_request2.py` |
| `ApiV1SimplifyResponse` | `sapling/models/api_v1_simplify_response.py` |
| `SaplingSimplifyErrorBody` | `sapling/errors/sapling_simplify_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.generation.sapling_summarize

- **Route**: `POST /api/v1/summarize`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_summarize(body: ApiV1SummarizeRequest2 | ApiV1SummarizeRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SummarizeResponse`
- **Returns (raw)**: `ApiResult[ApiV1SummarizeResponse, SaplingSummarizeErrorBody]`
- **Error**: `SaplingSummarizeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 502, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `ApiV1Summarize429Error1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SummarizeRequest2` | `sapling/models/unions/api_v1_summarize_request2.py` |
| `ApiV1SummarizeRequest2Dict` | `sapling/models/unions/api_v1_summarize_request2.py` |
| `ApiV1SummarizeResponse` | `sapling/models/api_v1_summarize_response.py` |
| `SaplingSummarizeErrorBody` | `sapling/errors/sapling_summarize_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `ApiV1Summarize429Error1` | `sapling/models/api_v1_summarize429_error1.py` |

### client.generation.sapling_summarize_file

- **Route**: `POST /api/v1/file-summarize`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_summarize_file(file: FileInput, *, return_usage_query: bool | None = False, key: str | None = None, json_params: FileInput | None = None, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file`
- **Params**: `return_usage_query` — query `return_usage` · `key` — query · `file` — multipart file · `json_params` — multipart file `jsonParams` · `return_usage` — multipart field
- **Returns (parsed)**: `ApiV1FileSummarizeResponse`
- **Returns (raw)**: `ApiResult[ApiV1FileSummarizeResponse, SaplingSummarizeFileErrorBody]`
- **Error**: `SaplingSummarizeFileErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1FileSummarize400Error1` [400] · `Error` [401, 403, 500, 502] · `PaymentRequired1` [402] · `ApiV1FileSummarize413Error1` [413] · `ApiV1FileSummarize429Error1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1FileSummarizeResponse` | `sapling/models/api_v1_file_summarize_response.py` |
| `SaplingSummarizeFileErrorBody` | `sapling/errors/sapling_summarize_file_error.py` |
| `ApiV1FileSummarize400Error1` | `sapling/models/api_v1_file_summarize400_error1.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `ApiV1FileSummarize413Error1` | `sapling/models/api_v1_file_summarize413_error1.py` |
| `ApiV1FileSummarize429Error1` | `sapling/models/api_v1_file_summarize429_error1.py` |

### client.generation.sapling_translate

- **Route**: `POST /api/v1/translate`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_translate(body: ApiV1TranslateRequest2 | ApiV1TranslateRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1TranslateResponse`
- **Returns (raw)**: `ApiResult[ApiV1TranslateResponse, SaplingTranslateErrorBody]`
- **Error**: `SaplingTranslateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500, 502, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TranslateRequest2` | `sapling/models/unions/api_v1_translate_request2.py` |
| `ApiV1TranslateRequest2Dict` | `sapling/models/unions/api_v1_translate_request2.py` |
| `ApiV1TranslateResponse` | `sapling/models/api_v1_translate_response.py` |
| `SaplingTranslateErrorBody` | `sapling/errors/sapling_translate_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

