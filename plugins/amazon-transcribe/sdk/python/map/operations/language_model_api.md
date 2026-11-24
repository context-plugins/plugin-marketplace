<!-- Generated file — do not edit; regenerated with the SDK. -->

# LanguageModelApi — operations

Accessor: `client.language_model_api` · Source: `amazon_transcribe/apis/language_model_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.language_model_api.create_language_model

- **Route**: `POST /#CreateLanguageModel`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def create_language_model(x_amz_target: XAmzTargetAmazonTranscribeServiceLanguageModelApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateLanguageModelErrorBody]`
- **Error**: `CreateLanguageModelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonTranscribeServiceLanguageModelApiOrStr` | `amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_language_model_api.py` |
| `CreateLanguageModelErrorBody` | `amazon_transcribe/errors/create_language_model_error.py` |

### client.language_model_api.delete_language_model

- **Route**: `POST /#DeleteLanguageModel`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def delete_language_model(x_amz_target: XAmzTarget1AmazonTranscribeServiceLanguageModelApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteLanguageModelErrorBody]`
- **Error**: `DeleteLanguageModelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonTranscribeServiceLanguageModelApiOrStr` | `amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_language_model_api.py` |
| `DeleteLanguageModelErrorBody` | `amazon_transcribe/errors/delete_language_model_error.py` |

### client.language_model_api.describe_language_model

- **Route**: `POST /#DescribeLanguageModel`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def describe_language_model(x_amz_target: XAmzTarget2AmazonTranscribeServiceLanguageModelApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeLanguageModelErrorBody]`
- **Error**: `DescribeLanguageModelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonTranscribeServiceLanguageModelApiOrStr` | `amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_language_model_api.py` |
| `DescribeLanguageModelErrorBody` | `amazon_transcribe/errors/describe_language_model_error.py` |

### client.language_model_api.list_language_models

- **Route**: `POST /#ListLanguageModels`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def list_language_models(x_amz_target: XAmzTarget3AmazonTranscribeServiceLanguageModelApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListLanguageModelsErrorBody]`
- **Error**: `ListLanguageModelsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonTranscribeServiceLanguageModelApiOrStr` | `amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_language_model_api.py` |
| `ListLanguageModelsErrorBody` | `amazon_transcribe/errors/list_language_models_error.py` |

### client.language_model_api.update_language_model

- **Route**: `POST /#UpdateLanguageModel`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def update_language_model(x_amz_target: XAmzTarget4AmazonTranscribeServiceLanguageModelApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateLanguageModelErrorBody]`
- **Error**: `UpdateLanguageModelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AmazonTranscribeServiceLanguageModelApiOrStr` | `amazon_transcribe/models/enums/x_amz_target4_amazon_transcribe_service_language_model_api.py` |
| `UpdateLanguageModelErrorBody` | `amazon_transcribe/errors/update_language_model_error.py` |

