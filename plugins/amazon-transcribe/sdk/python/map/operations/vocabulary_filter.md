<!-- Generated file — do not edit; regenerated with the SDK. -->

# VocabularyFilter — operations

Accessor: `client.vocabulary_filter` · Source: `amazon_transcribe/apis/vocabulary_filter.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.vocabulary_filter.create_vocabulary_filter

- **Route**: `POST /#CreateVocabularyFilter`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def create_vocabulary_filter(x_amz_target: XAmzTargetAmazonTranscribeServiceVocabularyFilterApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateVocabularyFilterErrorBody]`
- **Error**: `CreateVocabularyFilterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonTranscribeServiceVocabularyFilterApiOrStr` | `amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_vocabulary_filter_api.py` |
| `CreateVocabularyFilterErrorBody` | `amazon_transcribe/errors/create_vocabulary_filter_error.py` |

### client.vocabulary_filter.delete_vocabulary_filter

- **Route**: `POST /#DeleteVocabularyFilter`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def delete_vocabulary_filter(x_amz_target: XAmzTarget1AmazonTranscribeServiceVocabularyFilterApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteVocabularyFilterErrorBody]`
- **Error**: `DeleteVocabularyFilterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonTranscribeServiceVocabularyFilterApiOrStr` | `amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_vocabulary_filter_api.py` |
| `DeleteVocabularyFilterErrorBody` | `amazon_transcribe/errors/delete_vocabulary_filter_error.py` |

### client.vocabulary_filter.get_vocabulary_filter

- **Route**: `POST /#GetVocabularyFilter`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_vocabulary_filter(x_amz_target: XAmzTarget2AmazonTranscribeServiceVocabularyFilterApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetVocabularyFilterErrorBody]`
- **Error**: `GetVocabularyFilterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonTranscribeServiceVocabularyFilterApiOrStr` | `amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_vocabulary_filter_api.py` |
| `GetVocabularyFilterErrorBody` | `amazon_transcribe/errors/get_vocabulary_filter_error.py` |

### client.vocabulary_filter.list_vocabulary_filters

- **Route**: `POST /#ListVocabularyFilters`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def list_vocabulary_filters(x_amz_target: XAmzTarget3AmazonTranscribeServiceVocabularyFilterApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListVocabularyFiltersErrorBody]`
- **Error**: `ListVocabularyFiltersErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonTranscribeServiceVocabularyFilterApiOrStr` | `amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_vocabulary_filter_api.py` |
| `ListVocabularyFiltersErrorBody` | `amazon_transcribe/errors/list_vocabulary_filters_error.py` |

### client.vocabulary_filter.update_vocabulary_filter

- **Route**: `POST /#UpdateVocabularyFilter`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def update_vocabulary_filter(x_amz_target: XAmzTarget4AmazonTranscribeServiceVocabularyFilterApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateVocabularyFilterErrorBody]`
- **Error**: `UpdateVocabularyFilterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AmazonTranscribeServiceVocabularyFilterApiOrStr` | `amazon_transcribe/models/enums/x_amz_target4_amazon_transcribe_service_vocabulary_filter_api.py` |
| `UpdateVocabularyFilterErrorBody` | `amazon_transcribe/errors/update_vocabulary_filter_error.py` |

