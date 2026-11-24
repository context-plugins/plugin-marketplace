<!-- Generated file — do not edit; regenerated with the SDK. -->

# Suggestions — operations

Accessor: `client.Suggestions` · Source: `src/Archbee/Api/Suggestions.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DiscardSuggestionDocument

- **Auth**: `options.BearerAuth`
- **Signature**: `DiscardSuggestionDocument(DiscardSuggestionDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SuggestChangeDiscardResponse`
- **Error**: `ApiException<DiscardSuggestionDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetSuggestChangeDiscard400Error1([NotNullWhen(true)] out SuggestChangeDiscard400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DiscardSuggestionDocumentRequest` | `src/Archbee/Requests/Suggestions/DiscardSuggestionDocumentRequest.cs` |
| `SuggestChangeDiscardRequest` | `src/Archbee/Models/SuggestChangeDiscardRequest.cs` |
| `SuggestChangeDiscardResponse` | `src/Archbee/Models/SuggestChangeDiscardResponse.cs` |
| `DiscardSuggestionDocumentError` | `src/Archbee/Errors/DiscardSuggestionDocumentError.cs` |
| `SuggestChangeDiscard400Error1` | `src/Archbee/Models/SuggestChangeDiscard400Error1.cs` |

### MergeSuggestionIntoMainDocument

- **Auth**: `options.BearerAuth`
- **Signature**: `MergeSuggestionIntoMainDocument(MergeSuggestionIntoMainDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SuggestChangeMergeResponse`
- **Error**: `ApiException<MergeSuggestionIntoMainDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetSuggestChangeMerge400Error1([NotNullWhen(true)] out SuggestChangeMerge400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MergeSuggestionIntoMainDocumentRequest` | `src/Archbee/Requests/Suggestions/MergeSuggestionIntoMainDocumentRequest.cs` |
| `SuggestChangeMergeRequest` | `src/Archbee/Models/SuggestChangeMergeRequest.cs` |
| `SuggestChangeMergeResponse` | `src/Archbee/Models/SuggestChangeMergeResponse.cs` |
| `MergeSuggestionIntoMainDocumentError` | `src/Archbee/Errors/MergeSuggestionIntoMainDocumentError.cs` |
| `SuggestChangeMerge400Error1` | `src/Archbee/Models/SuggestChangeMerge400Error1.cs` |

