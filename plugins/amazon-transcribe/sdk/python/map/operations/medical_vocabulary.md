<!-- Generated file — do not edit; regenerated with the SDK. -->

# MedicalVocabulary — operations

Accessor: `client.medical_vocabulary` · Source: `amazon_transcribe/apis/medical_vocabulary.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.medical_vocabulary.create_medical_vocabulary

- **Route**: `POST /#CreateMedicalVocabulary`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def create_medical_vocabulary(x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalVocabularyApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateMedicalVocabularyErrorBody]`
- **Error**: `CreateMedicalVocabularyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonTranscribeServiceMedicalVocabularyApiOrStr` | `amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_medical_vocabulary_api.py` |
| `CreateMedicalVocabularyErrorBody` | `amazon_transcribe/errors/create_medical_vocabulary_error.py` |

### client.medical_vocabulary.delete_medical_vocabulary

- **Route**: `POST /#DeleteMedicalVocabulary`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def delete_medical_vocabulary(x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteMedicalVocabularyErrorBody]`
- **Error**: `DeleteMedicalVocabularyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiOrStr` | `amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_medical_vocabulary_api.py` |
| `DeleteMedicalVocabularyErrorBody` | `amazon_transcribe/errors/delete_medical_vocabulary_error.py` |

### client.medical_vocabulary.get_medical_vocabulary

- **Route**: `POST /#GetMedicalVocabulary`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_medical_vocabulary(x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetMedicalVocabularyErrorBody]`
- **Error**: `GetMedicalVocabularyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiOrStr` | `amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_medical_vocabulary_api.py` |
| `GetMedicalVocabularyErrorBody` | `amazon_transcribe/errors/get_medical_vocabulary_error.py` |

### client.medical_vocabulary.list_medical_vocabularies

- **Route**: `POST /#ListMedicalVocabularies`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def list_medical_vocabularies(x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListMedicalVocabulariesErrorBody]`
- **Error**: `ListMedicalVocabulariesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiOrStr` | `amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_medical_vocabulary_api.py` |
| `ListMedicalVocabulariesErrorBody` | `amazon_transcribe/errors/list_medical_vocabularies_error.py` |

### client.medical_vocabulary.update_medical_vocabulary

- **Route**: `POST /#UpdateMedicalVocabulary`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def update_medical_vocabulary(x_amz_target: XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateMedicalVocabularyErrorBody]`
- **Error**: `UpdateMedicalVocabularyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiOrStr` | `amazon_transcribe/models/enums/x_amz_target4_amazon_transcribe_service_medical_vocabulary_api.py` |
| `UpdateMedicalVocabularyErrorBody` | `amazon_transcribe/errors/update_medical_vocabulary_error.py` |

