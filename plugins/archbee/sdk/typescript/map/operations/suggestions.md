<!-- Generated file — do not edit; regenerated with the SDK. -->

# Suggestions — operations

Accessor: `client.suggestions` · Source: `src/resources/suggestions.ts` · 2 operations · Request and error types: namespace `Suggestions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `archbee`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### discardSuggestionDocument

- **Signature**: `discardSuggestionDocument(request: Suggestions.DiscardSuggestionDocumentRequest, options?: RequestOptions): ApiPromise<SuggestChangeDiscardResponse, Suggestions.DiscardSuggestionDocumentError>`
- **Wire**: `POST /suggest-change/discard`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuggestChangeDiscardResponse`
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `Suggestions.DiscardSuggestionDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"suggestChangeDiscard400Error1"` [400] `SuggestChangeDiscard400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Suggestions.DiscardSuggestionDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SuggestChangeDiscardRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuggestChangeDiscardRequest` | `suggestChangeDiscardRequestSchema` | `src/models/suggest-change-discard-request.ts` |
| `SuggestChangeDiscardResponse` | `suggestChangeDiscardResponseSchema` | `src/models/suggest-change-discard-response.ts` |
| `SuggestChangeDiscard400Error1` | `suggestChangeDiscard400Error1Schema` | `src/models/suggest-change-discard400-error1.ts` |

### mergeSuggestionIntoMainDocument

- **Signature**: `mergeSuggestionIntoMainDocument(request: Suggestions.MergeSuggestionIntoMainDocumentRequest, options?: RequestOptions): ApiPromise<SuggestChangeMergeResponse, Suggestions.MergeSuggestionIntoMainDocumentError>`
- **Wire**: `POST /suggest-change/merge`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuggestChangeMergeResponse`
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `Suggestions.MergeSuggestionIntoMainDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"suggestChangeMerge400Error1"` [400] `SuggestChangeMerge400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Suggestions.MergeSuggestionIntoMainDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SuggestChangeMergeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuggestChangeMergeRequest` | `suggestChangeMergeRequestSchema` | `src/models/suggest-change-merge-request.ts` |
| `SuggestChangeMergeResponse` | `suggestChangeMergeResponseSchema` | `src/models/suggest-change-merge-response.ts` |
| `SuggestChangeMerge400Error1` | `suggestChangeMerge400Error1Schema` | `src/models/suggest-change-merge400-error1.ts` |

