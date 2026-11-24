<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vocabularies — operations

Accessor: `client.vocabularies` · Source: `amazon_transcribe/apis/vocabularies.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.vocabularies.create_vocabulary

- **Route**: `POST /#CreateVocabulary`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def create_vocabulary(x_amz_target: XAmzTargetAmazonTranscribeServiceVocabulariesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateVocabularyErrorBody]`
- **Error**: `CreateVocabularyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonTranscribeServiceVocabulariesApiOrStr` | `amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_vocabularies_api.py` |
| `CreateVocabularyErrorBody` | `amazon_transcribe/errors/create_vocabulary_error.py` |

### client.vocabularies.delete_vocabulary

- **Route**: `POST /#DeleteVocabulary`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def delete_vocabulary(x_amz_target: XAmzTarget1AmazonTranscribeServiceVocabulariesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteVocabularyErrorBody]`
- **Error**: `DeleteVocabularyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonTranscribeServiceVocabulariesApiOrStr` | `amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_vocabularies_api.py` |
| `DeleteVocabularyErrorBody` | `amazon_transcribe/errors/delete_vocabulary_error.py` |

### client.vocabularies.get_vocabulary

- **Route**: `POST /#GetVocabulary`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_vocabulary(x_amz_target: XAmzTarget2AmazonTranscribeServiceVocabulariesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetVocabularyErrorBody]`
- **Error**: `GetVocabularyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonTranscribeServiceVocabulariesApiOrStr` | `amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_vocabularies_api.py` |
| `GetVocabularyErrorBody` | `amazon_transcribe/errors/get_vocabulary_error.py` |

### client.vocabularies.list_vocabularies

- **Route**: `POST /#ListVocabularies`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def list_vocabularies(x_amz_target: XAmzTarget3AmazonTranscribeServiceVocabulariesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListVocabulariesErrorBody]`
- **Error**: `ListVocabulariesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonTranscribeServiceVocabulariesApiOrStr` | `amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_vocabularies_api.py` |
| `ListVocabulariesErrorBody` | `amazon_transcribe/errors/list_vocabularies_error.py` |

### client.vocabularies.update_vocabulary

- **Route**: `POST /#UpdateVocabulary`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def update_vocabulary(x_amz_target: XAmzTarget4AmazonTranscribeServiceVocabulariesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateVocabularyErrorBody]`
- **Error**: `UpdateVocabularyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AmazonTranscribeServiceVocabulariesApiOrStr` | `amazon_transcribe/models/enums/x_amz_target4_amazon_transcribe_service_vocabularies_api.py` |
| `UpdateVocabularyErrorBody` | `amazon_transcribe/errors/update_vocabulary_error.py` |

