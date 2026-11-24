<!-- Generated file — do not edit; regenerated with the SDK. -->

# Proofreading — operations

Accessor: `client.proofreading` · Source: `sapling/apis/proofreading.py` · 13 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.proofreading.sapling_accept_edit

- **Route**: `POST /api/v1/edits/{edit_hash}/accept`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_accept_edit(edit_hash: UUID, body: ApiV1EditsAcceptRequest | ApiV1EditsAcceptRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `edit_hash`, `body`
- **Params**: `edit_hash` — path · `body` — JSON body
- **Returns (parsed)**: `ApiV1EditsAcceptResponse`
- **Returns (raw)**: `ApiResult[ApiV1EditsAcceptResponse, SaplingAcceptEditErrorBody]`
- **Error**: `SaplingAcceptEditErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1EditsAcceptResponse11` [400] · `Error` [401, 403, 500] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1EditsAcceptRequest` | `sapling/models/api_v1_edits_accept_request.py` |
| `ApiV1EditsAcceptRequestDict` | `sapling/models/api_v1_edits_accept_request.py` |
| `ApiV1EditsAcceptResponse` | `sapling/models/api_v1_edits_accept_response.py` |
| `SaplingAcceptEditErrorBody` | `sapling/errors/sapling_accept_edit_error.py` |
| `ApiV1EditsAcceptResponse11` | `sapling/models/unions/api_v1_edits_accept_response11.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |

### client.proofreading.sapling_add_custom_filter

- **Route**: `POST /api/v1/custom_filter`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_add_custom_filter(body: ApiV1CustomFilterRequest | ApiV1CustomFilterRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1CustomFilterResponse1`
- **Returns (raw)**: `ApiResult[ApiV1CustomFilterResponse1, SaplingAddCustomFilterErrorBody]`
- **Error**: `SaplingAddCustomFilterErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CustomFilterRequest` | `sapling/models/api_v1_custom_filter_request.py` |
| `ApiV1CustomFilterRequestDict` | `sapling/models/api_v1_custom_filter_request.py` |
| `ApiV1CustomFilterResponse1` | `sapling/models/api_v1_custom_filter_response1.py` |
| `SaplingAddCustomFilterErrorBody` | `sapling/errors/sapling_add_custom_filter_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |

### client.proofreading.sapling_add_custom_mapping

- **Route**: `POST /api/v1/custom_mapping`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_add_custom_mapping(body: ApiV1CustomMappingRequest | ApiV1CustomMappingRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1CustomMappingResponse1`
- **Returns (raw)**: `ApiResult[ApiV1CustomMappingResponse1, SaplingAddCustomMappingErrorBody]`
- **Error**: `SaplingAddCustomMappingErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CustomMappingRequest` | `sapling/models/api_v1_custom_mapping_request.py` |
| `ApiV1CustomMappingRequestDict` | `sapling/models/api_v1_custom_mapping_request.py` |
| `ApiV1CustomMappingResponse1` | `sapling/models/api_v1_custom_mapping_response1.py` |
| `SaplingAddCustomMappingErrorBody` | `sapling/errors/sapling_add_custom_mapping_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |

### client.proofreading.sapling_add_dictionary_entry

- **Route**: `POST /api/v1/dictionary`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_add_dictionary_entry(body: ApiV1DictionaryRequest | ApiV1DictionaryRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1DictionaryResponse1`
- **Returns (raw)**: `ApiResult[ApiV1DictionaryResponse1, SaplingAddDictionaryEntryErrorBody]`
- **Error**: `SaplingAddDictionaryEntryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DictionaryRequest` | `sapling/models/api_v1_dictionary_request.py` |
| `ApiV1DictionaryRequestDict` | `sapling/models/api_v1_dictionary_request.py` |
| `ApiV1DictionaryResponse1` | `sapling/models/api_v1_dictionary_response1.py` |
| `SaplingAddDictionaryEntryErrorBody` | `sapling/errors/sapling_add_dictionary_entry_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |

### client.proofreading.sapling_delete_custom_filter

- **Route**: `DELETE /api/v1/custom_filter/{filter_id}`
- **Auth**: `bearer_auth` OR `api_key_query`
- **Signature**: `def sapling_delete_custom_filter(filter_id: UUID, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `filter_id`
- **Params**: `filter_id` — path · `return_usage` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SaplingDeleteCustomFilterErrorBody]`
- **Error**: `SaplingDeleteCustomFilterErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PaymentRequired1` [402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SaplingDeleteCustomFilterErrorBody` | `sapling/errors/sapling_delete_custom_filter_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |

### client.proofreading.sapling_delete_custom_mapping

- **Route**: `DELETE /api/v1/custom_mapping/{mapping_id}`
- **Auth**: `bearer_auth` OR `api_key_query`
- **Signature**: `def sapling_delete_custom_mapping(mapping_id: UUID, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `mapping_id`
- **Params**: `mapping_id` — path · `return_usage` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SaplingDeleteCustomMappingErrorBody]`
- **Error**: `SaplingDeleteCustomMappingErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PaymentRequired1` [402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SaplingDeleteCustomMappingErrorBody` | `sapling/errors/sapling_delete_custom_mapping_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |

### client.proofreading.sapling_delete_dictionary_entry

- **Route**: `DELETE /api/v1/dictionary/{entry_id}`
- **Auth**: `bearer_auth` OR `api_key_query`
- **Signature**: `def sapling_delete_dictionary_entry(entry_id: UUID, *, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `entry_id`
- **Params**: `entry_id` — path · `return_usage` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SaplingDeleteDictionaryEntryErrorBody]`
- **Error**: `SaplingDeleteDictionaryEntryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PaymentRequired1` [402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SaplingDeleteDictionaryEntryErrorBody` | `sapling/errors/sapling_delete_dictionary_entry_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |

### client.proofreading.sapling_grammar_check

- **Route**: `POST /api/v1/edits`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_grammar_check(body: ApiV1EditsRequest | ApiV1EditsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1EditsResponse`
- **Returns (raw)**: `ApiResult[ApiV1EditsResponse, SaplingGrammarCheckErrorBody]`
- **Error**: `SaplingGrammarCheckErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1EditsRequest` | `sapling/models/api_v1_edits_request.py` |
| `ApiV1EditsRequestDict` | `sapling/models/api_v1_edits_request.py` |
| `ApiV1EditsResponse` | `sapling/models/api_v1_edits_response.py` |
| `SaplingGrammarCheckErrorBody` | `sapling/errors/sapling_grammar_check_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.proofreading.sapling_list_custom_filters

- **Route**: `GET /api/v1/custom_filter`
- **Auth**: `bearer_auth` OR `api_key_query`
- **Signature**: `def sapling_list_custom_filters(*, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `return_usage` — query
- **Returns (parsed)**: `ApiV1CustomFilterResponse`
- **Returns (raw)**: `ApiResult[ApiV1CustomFilterResponse, SaplingListCustomFiltersErrorBody]`
- **Error**: `SaplingListCustomFiltersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 500] · `PaymentRequired1` [402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CustomFilterResponse` | `sapling/models/api_v1_custom_filter_response.py` |
| `SaplingListCustomFiltersErrorBody` | `sapling/errors/sapling_list_custom_filters_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |

### client.proofreading.sapling_list_custom_mappings

- **Route**: `GET /api/v1/custom_mapping`
- **Auth**: `bearer_auth` OR `api_key_query`
- **Signature**: `def sapling_list_custom_mappings(*, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `return_usage` — query
- **Returns (parsed)**: `ApiV1CustomMappingResponse`
- **Returns (raw)**: `ApiResult[ApiV1CustomMappingResponse, SaplingListCustomMappingsErrorBody]`
- **Error**: `SaplingListCustomMappingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 500] · `PaymentRequired1` [402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CustomMappingResponse` | `sapling/models/api_v1_custom_mapping_response.py` |
| `SaplingListCustomMappingsErrorBody` | `sapling/errors/sapling_list_custom_mappings_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |

### client.proofreading.sapling_list_dictionary

- **Route**: `GET /api/v1/dictionary`
- **Auth**: `bearer_auth` OR `api_key_query`
- **Signature**: `def sapling_list_dictionary(*, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `return_usage` — query
- **Returns (parsed)**: `list[ApiV1DictionaryResponse]`
- **Returns (raw)**: `ApiResult[list[ApiV1DictionaryResponse], SaplingListDictionaryErrorBody]`
- **Error**: `SaplingListDictionaryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 500] · `PaymentRequired1` [402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DictionaryResponse` | `sapling/models/api_v1_dictionary_response.py` |
| `SaplingListDictionaryErrorBody` | `sapling/errors/sapling_list_dictionary_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |

### client.proofreading.sapling_reject_edit

- **Route**: `POST /api/v1/edits/{edit_hash}/reject`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_reject_edit(edit_hash: UUID, body: ApiV1EditsRejectRequest | ApiV1EditsRejectRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `edit_hash`, `body`
- **Params**: `edit_hash` — path · `body` — JSON body
- **Returns (parsed)**: `ApiV1EditsRejectResponse`
- **Returns (raw)**: `ApiResult[ApiV1EditsRejectResponse, SaplingRejectEditErrorBody]`
- **Error**: `SaplingRejectEditErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1EditsRejectResponse11` [400] · `Error` [401, 403, 500] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1EditsRejectRequest` | `sapling/models/api_v1_edits_reject_request.py` |
| `ApiV1EditsRejectRequestDict` | `sapling/models/api_v1_edits_reject_request.py` |
| `ApiV1EditsRejectResponse` | `sapling/models/api_v1_edits_reject_response.py` |
| `SaplingRejectEditErrorBody` | `sapling/errors/sapling_reject_edit_error.py` |
| `ApiV1EditsRejectResponse11` | `sapling/models/unions/api_v1_edits_reject_response11.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |

### client.proofreading.sapling_spellcheck

- **Route**: `POST /api/v1/spellcheck`
- **Auth**: `bearer_auth` OR `oauth2`
- **Signature**: `def sapling_spellcheck(body: ApiV1SpellcheckRequest | ApiV1SpellcheckRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1SpellcheckResponse`
- **Returns (raw)**: `ApiResult[ApiV1SpellcheckResponse, SaplingSpellcheckErrorBody]`
- **Error**: `SaplingSpellcheckErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500, 503] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1SpellcheckRequest` | `sapling/models/api_v1_spellcheck_request.py` |
| `ApiV1SpellcheckRequestDict` | `sapling/models/api_v1_spellcheck_request.py` |
| `ApiV1SpellcheckResponse` | `sapling/models/api_v1_spellcheck_response.py` |
| `SaplingSpellcheckErrorBody` | `sapling/errors/sapling_spellcheck_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

