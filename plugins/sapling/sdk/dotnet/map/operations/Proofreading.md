<!-- Generated file — do not edit; regenerated with the SDK. -->

# Proofreading — operations

Accessor: `client.Proofreading` · Source: `src/Sapling/Api/Proofreading.cs` · 13 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SaplingAcceptEdit

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingAcceptEdit(SaplingAcceptEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EditHash`, `Body`
- **Returns**: `ApiV1EditsAcceptResponse`
- **Error**: `ApiException<SaplingAcceptEditError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1EditsAcceptResponse11([NotNullWhen(true)] out ApiV1EditsAcceptResponse11? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingAcceptEditRequest` | `src/Sapling/Requests/Proofreading/SaplingAcceptEditRequest.cs` |
| `ApiV1EditsAcceptRequest` | `src/Sapling/Models/ApiV1EditsAcceptRequest.cs` |
| `ApiV1EditsAcceptResponse` | `src/Sapling/Models/ApiV1EditsAcceptResponse.cs` |
| `SaplingAcceptEditError` | `src/Sapling/Errors/SaplingAcceptEditError.cs` |
| `ApiV1EditsAcceptResponse11` | `src/Sapling/Models/AnyOf/ApiV1EditsAcceptResponse11.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |

### SaplingAddCustomFilter

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingAddCustomFilter(SaplingAddCustomFilterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1CustomFilterResponse1`
- **Error**: `ApiException<SaplingAddCustomFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingAddCustomFilterRequest` | `src/Sapling/Requests/Proofreading/SaplingAddCustomFilterRequest.cs` |
| `ApiV1CustomFilterRequest` | `src/Sapling/Models/ApiV1CustomFilterRequest.cs` |
| `ApiV1CustomFilterResponse1` | `src/Sapling/Models/ApiV1CustomFilterResponse1.cs` |
| `SaplingAddCustomFilterError` | `src/Sapling/Errors/SaplingAddCustomFilterError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |

### SaplingAddCustomMapping

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingAddCustomMapping(SaplingAddCustomMappingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1CustomMappingResponse1`
- **Error**: `ApiException<SaplingAddCustomMappingError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingAddCustomMappingRequest` | `src/Sapling/Requests/Proofreading/SaplingAddCustomMappingRequest.cs` |
| `ApiV1CustomMappingRequest` | `src/Sapling/Models/ApiV1CustomMappingRequest.cs` |
| `ApiV1CustomMappingResponse1` | `src/Sapling/Models/ApiV1CustomMappingResponse1.cs` |
| `SaplingAddCustomMappingError` | `src/Sapling/Errors/SaplingAddCustomMappingError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |

### SaplingAddDictionaryEntry

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingAddDictionaryEntry(SaplingAddDictionaryEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1DictionaryResponse1`
- **Error**: `ApiException<SaplingAddDictionaryEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingAddDictionaryEntryRequest` | `src/Sapling/Requests/Proofreading/SaplingAddDictionaryEntryRequest.cs` |
| `ApiV1DictionaryRequest` | `src/Sapling/Models/ApiV1DictionaryRequest.cs` |
| `ApiV1DictionaryResponse1` | `src/Sapling/Models/ApiV1DictionaryResponse1.cs` |
| `SaplingAddDictionaryEntryError` | `src/Sapling/Errors/SaplingAddDictionaryEntryError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |

### SaplingDeleteCustomFilter

- **Auth**: `options.BearerAuth` OR `options.ApiKeyQuery`
- **Signature**: `SaplingDeleteCustomFilter(SaplingDeleteCustomFilterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FilterId`
- **Query params (wire ← C#)**: `return_usage` ← `ReturnUsage`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SaplingDeleteCustomFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingDeleteCustomFilterRequest` | `src/Sapling/Requests/Proofreading/SaplingDeleteCustomFilterRequest.cs` |
| `SaplingDeleteCustomFilterError` | `src/Sapling/Errors/SaplingDeleteCustomFilterError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |

### SaplingDeleteCustomMapping

- **Auth**: `options.BearerAuth` OR `options.ApiKeyQuery`
- **Signature**: `SaplingDeleteCustomMapping(SaplingDeleteCustomMappingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MappingId`
- **Query params (wire ← C#)**: `return_usage` ← `ReturnUsage`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SaplingDeleteCustomMappingError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingDeleteCustomMappingRequest` | `src/Sapling/Requests/Proofreading/SaplingDeleteCustomMappingRequest.cs` |
| `SaplingDeleteCustomMappingError` | `src/Sapling/Errors/SaplingDeleteCustomMappingError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |

### SaplingDeleteDictionaryEntry

- **Auth**: `options.BearerAuth` OR `options.ApiKeyQuery`
- **Signature**: `SaplingDeleteDictionaryEntry(SaplingDeleteDictionaryEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EntryId`
- **Query params (wire ← C#)**: `return_usage` ← `ReturnUsage`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SaplingDeleteDictionaryEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingDeleteDictionaryEntryRequest` | `src/Sapling/Requests/Proofreading/SaplingDeleteDictionaryEntryRequest.cs` |
| `SaplingDeleteDictionaryEntryError` | `src/Sapling/Errors/SaplingDeleteDictionaryEntryError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |

### SaplingGrammarCheck

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingGrammarCheck(SaplingGrammarCheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1EditsResponse1`
- **Error**: `ApiException<SaplingGrammarCheckError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1EditsResponse11([NotNullWhen(true)] out ApiV1EditsResponse11? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingGrammarCheckRequest` | `src/Sapling/Requests/Proofreading/SaplingGrammarCheckRequest.cs` |
| `ApiV1EditsRequest` | `src/Sapling/Models/ApiV1EditsRequest.cs` |
| `ApiV1EditsResponse1` | `src/Sapling/Models/AnyOf/ApiV1EditsResponse1.cs` |
| `SaplingGrammarCheckError` | `src/Sapling/Errors/SaplingGrammarCheckError.cs` |
| `ApiV1EditsResponse11` | `src/Sapling/Models/AnyOf/ApiV1EditsResponse11.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

### SaplingListCustomFilters

- **Auth**: `options.BearerAuth` OR `options.ApiKeyQuery`
- **Signature**: `SaplingListCustomFilters(SaplingListCustomFiltersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `return_usage` ← `ReturnUsage`
- **Returns**: `ApiV1CustomFilterResponse`
- **Error**: `ApiException<SaplingListCustomFiltersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingListCustomFiltersRequest` | `src/Sapling/Requests/Proofreading/SaplingListCustomFiltersRequest.cs` |
| `ApiV1CustomFilterResponse` | `src/Sapling/Models/ApiV1CustomFilterResponse.cs` |
| `SaplingListCustomFiltersError` | `src/Sapling/Errors/SaplingListCustomFiltersError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |

### SaplingListCustomMappings

- **Auth**: `options.BearerAuth` OR `options.ApiKeyQuery`
- **Signature**: `SaplingListCustomMappings(SaplingListCustomMappingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `return_usage` ← `ReturnUsage`
- **Returns**: `ApiV1CustomMappingResponse`
- **Error**: `ApiException<SaplingListCustomMappingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingListCustomMappingsRequest` | `src/Sapling/Requests/Proofreading/SaplingListCustomMappingsRequest.cs` |
| `ApiV1CustomMappingResponse` | `src/Sapling/Models/ApiV1CustomMappingResponse.cs` |
| `SaplingListCustomMappingsError` | `src/Sapling/Errors/SaplingListCustomMappingsError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |

### SaplingListDictionary

- **Auth**: `options.BearerAuth` OR `options.ApiKeyQuery`
- **Signature**: `SaplingListDictionary(SaplingListDictionaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `return_usage` ← `ReturnUsage`
- **Returns**: `IReadOnlyList<ApiV1DictionaryResponse>`
- **Error**: `ApiException<SaplingListDictionaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingListDictionaryRequest` | `src/Sapling/Requests/Proofreading/SaplingListDictionaryRequest.cs` |
| `ApiV1DictionaryResponse` | `src/Sapling/Models/ApiV1DictionaryResponse.cs` |
| `SaplingListDictionaryError` | `src/Sapling/Errors/SaplingListDictionaryError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |

### SaplingRejectEdit

- **Auth**: `options.BearerAuth` OR anonymous
- **Signature**: `SaplingRejectEdit(SaplingRejectEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EditHash`, `Body`
- **Returns**: `ApiV1EditsRejectResponse`
- **Error**: `ApiException<SaplingRejectEditError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1EditsRejectResponse11([NotNullWhen(true)] out ApiV1EditsRejectResponse11? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingRejectEditRequest` | `src/Sapling/Requests/Proofreading/SaplingRejectEditRequest.cs` |
| `ApiV1EditsRejectRequest` | `src/Sapling/Models/ApiV1EditsRejectRequest.cs` |
| `ApiV1EditsRejectResponse` | `src/Sapling/Models/ApiV1EditsRejectResponse.cs` |
| `SaplingRejectEditError` | `src/Sapling/Errors/SaplingRejectEditError.cs` |
| `ApiV1EditsRejectResponse11` | `src/Sapling/Models/AnyOf/ApiV1EditsRejectResponse11.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |

### SaplingSpellcheck

- **Auth**: `options.BearerAuth` OR `options.Oauth2` OR anonymous
- **Signature**: `SaplingSpellcheck(SaplingSpellcheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1SpellcheckResponse1`
- **Error**: `ApiException<SaplingSpellcheckError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500, 503] · `TryGetPaymentRequired1([NotNullWhen(true)] out PaymentRequired1? value)` [402] · `TryGetPayloadTooLarge1([NotNullWhen(true)] out PayloadTooLarge1? value)` [413] · `TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SaplingSpellcheckRequest` | `src/Sapling/Requests/Proofreading/SaplingSpellcheckRequest.cs` |
| `ApiV1SpellcheckRequest` | `src/Sapling/Models/ApiV1SpellcheckRequest.cs` |
| `ApiV1SpellcheckResponse1` | `src/Sapling/Models/AnyOf/ApiV1SpellcheckResponse1.cs` |
| `SaplingSpellcheckError` | `src/Sapling/Errors/SaplingSpellcheckError.cs` |
| `Error` | `src/Sapling/Models/Error.cs` |
| `PaymentRequired1` | `src/Sapling/Models/PaymentRequired1.cs` |
| `PayloadTooLarge1` | `src/Sapling/Models/PayloadTooLarge1.cs` |
| `RateLimited1` | `src/Sapling/Models/RateLimited1.cs` |

