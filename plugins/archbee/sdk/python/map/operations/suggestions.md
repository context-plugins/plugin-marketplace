<!-- Generated file — do not edit; regenerated with the SDK. -->

# Suggestions — operations

Accessor: `client.suggestions` · Source: `archbee/apis/suggestions.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.suggestions.discard_suggestion_document

- **Route**: `POST /suggest-change/discard`
- **Auth**: `bearer_auth`
- **Signature**: `def discard_suggestion_document(body: SuggestChangeDiscardRequest | SuggestChangeDiscardRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SuggestChangeDiscardResponse`
- **Returns (raw)**: `ApiResult[SuggestChangeDiscardResponse, DiscardSuggestionDocumentErrorBody]`
- **Error**: `DiscardSuggestionDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `SuggestChangeDiscard400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuggestChangeDiscardRequest` | `archbee/models/suggest_change_discard_request.py` |
| `SuggestChangeDiscardRequestDict` | `archbee/models/suggest_change_discard_request.py` |
| `SuggestChangeDiscardResponse` | `archbee/models/suggest_change_discard_response.py` |
| `DiscardSuggestionDocumentErrorBody` | `archbee/errors/discard_suggestion_document_error.py` |
| `SuggestChangeDiscard400Error1` | `archbee/models/suggest_change_discard400_error1.py` |

### client.suggestions.merge_suggestion_into_main_document

- **Route**: `POST /suggest-change/merge`
- **Auth**: `bearer_auth`
- **Signature**: `def merge_suggestion_into_main_document(body: SuggestChangeMergeRequest | SuggestChangeMergeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SuggestChangeMergeResponse`
- **Returns (raw)**: `ApiResult[SuggestChangeMergeResponse, MergeSuggestionIntoMainDocumentErrorBody]`
- **Error**: `MergeSuggestionIntoMainDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `SuggestChangeMerge400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SuggestChangeMergeRequest` | `archbee/models/suggest_change_merge_request.py` |
| `SuggestChangeMergeRequestDict` | `archbee/models/suggest_change_merge_request.py` |
| `SuggestChangeMergeResponse` | `archbee/models/suggest_change_merge_response.py` |
| `MergeSuggestionIntoMainDocumentErrorBody` | `archbee/errors/merge_suggestion_into_main_document_error.py` |
| `SuggestChangeMerge400Error1` | `archbee/models/suggest_change_merge400_error1.py` |

