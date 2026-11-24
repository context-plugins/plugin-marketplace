<!-- Generated file — do not edit; regenerated with the SDK. -->

# Proofreading — operations

Accessor: `client.proofreading` · Source: `src/resources/proofreading.ts` · 13 operations · Request and error types: namespace `Proofreading`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sapling`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### saplingAcceptEdit

- **Signature**: `saplingAcceptEdit(request: Proofreading.SaplingAcceptEditRequest, options?: RequestOptions): ApiPromise<ApiV1EditsAcceptResponse, Proofreading.SaplingAcceptEditError>`
- **Wire**: `POST /api/v1/edits/{edit_hash}/accept`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1EditsAcceptResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Proofreading.SaplingAcceptEditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1EditsAcceptResponse11"` [400] `ApiV1EditsAcceptResponse11` · `"error"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error2"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Proofreading.SaplingAcceptEditRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `editHash` | `path` | `edit_hash` | `string` | yes |
| `body` | `body` | — | `ApiV1EditsAcceptRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1EditsAcceptRequest` | `apiV1EditsAcceptRequestSchema` | `src/models/api-v1-edits-accept-request.ts` |
| `ApiV1EditsAcceptResponse` | `apiV1EditsAcceptResponseSchema` | `src/models/api-v1-edits-accept-response.ts` |
| `ApiV1EditsAcceptResponse11` | `apiV1EditsAcceptResponse11Schema` | `src/models/unions/api-v1-edits-accept-response11.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |

### saplingAddCustomFilter

- **Signature**: `saplingAddCustomFilter(request: Proofreading.SaplingAddCustomFilterRequest, options?: RequestOptions): ApiPromise<ApiV1CustomFilterResponse1, Proofreading.SaplingAddCustomFilterError>`
- **Wire**: `POST /api/v1/custom_filter`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1CustomFilterResponse1`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Proofreading.SaplingAddCustomFilterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Proofreading.SaplingAddCustomFilterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1CustomFilterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CustomFilterRequest` | `apiV1CustomFilterRequestSchema` | `src/models/api-v1-custom-filter-request.ts` |
| `ApiV1CustomFilterResponse1` | `apiV1CustomFilterResponse1Schema` | `src/models/api-v1-custom-filter-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |

### saplingAddCustomMapping

- **Signature**: `saplingAddCustomMapping(request: Proofreading.SaplingAddCustomMappingRequest, options?: RequestOptions): ApiPromise<ApiV1CustomMappingResponse1, Proofreading.SaplingAddCustomMappingError>`
- **Wire**: `POST /api/v1/custom_mapping`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1CustomMappingResponse1`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Proofreading.SaplingAddCustomMappingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Proofreading.SaplingAddCustomMappingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1CustomMappingRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CustomMappingRequest` | `apiV1CustomMappingRequestSchema` | `src/models/api-v1-custom-mapping-request.ts` |
| `ApiV1CustomMappingResponse1` | `apiV1CustomMappingResponse1Schema` | `src/models/api-v1-custom-mapping-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |

### saplingAddDictionaryEntry

- **Signature**: `saplingAddDictionaryEntry(request: Proofreading.SaplingAddDictionaryEntryRequest, options?: RequestOptions): ApiPromise<ApiV1DictionaryResponse1, Proofreading.SaplingAddDictionaryEntryError>`
- **Wire**: `POST /api/v1/dictionary`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1DictionaryResponse1`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Proofreading.SaplingAddDictionaryEntryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Proofreading.SaplingAddDictionaryEntryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1DictionaryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DictionaryRequest` | `apiV1DictionaryRequestSchema` | `src/models/api-v1-dictionary-request.ts` |
| `ApiV1DictionaryResponse1` | `apiV1DictionaryResponse1Schema` | `src/models/api-v1-dictionary-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |

### saplingDeleteCustomFilter

- **Signature**: `saplingDeleteCustomFilter(request: Proofreading.SaplingDeleteCustomFilterRequest, options?: RequestOptions): ApiPromise<undefined, Proofreading.SaplingDeleteCustomFilterError>`
- **Wire**: `DELETE /api/v1/custom_filter/{filter_id}`
- **Auth**: any of `bearerAuth`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Proofreading.SaplingDeleteCustomFilterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Proofreading.SaplingDeleteCustomFilterRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `filterId` | `path` | `filter_id` | `string` | yes | — |
| `returnUsage` | `query` | `return_usage` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |

### saplingDeleteCustomMapping

- **Signature**: `saplingDeleteCustomMapping(request: Proofreading.SaplingDeleteCustomMappingRequest, options?: RequestOptions): ApiPromise<undefined, Proofreading.SaplingDeleteCustomMappingError>`
- **Wire**: `DELETE /api/v1/custom_mapping/{mapping_id}`
- **Auth**: any of `bearerAuth`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Proofreading.SaplingDeleteCustomMappingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Proofreading.SaplingDeleteCustomMappingRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `mappingId` | `path` | `mapping_id` | `string` | yes | — |
| `returnUsage` | `query` | `return_usage` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |

### saplingDeleteDictionaryEntry

- **Signature**: `saplingDeleteDictionaryEntry(request: Proofreading.SaplingDeleteDictionaryEntryRequest, options?: RequestOptions): ApiPromise<undefined, Proofreading.SaplingDeleteDictionaryEntryError>`
- **Wire**: `DELETE /api/v1/dictionary/{entry_id}`
- **Auth**: any of `bearerAuth`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Proofreading.SaplingDeleteDictionaryEntryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Proofreading.SaplingDeleteDictionaryEntryRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `entryId` | `path` | `entry_id` | `string` | yes | — |
| `returnUsage` | `query` | `return_usage` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |

### saplingGrammarCheck

- **Signature**: `saplingGrammarCheck(request: Proofreading.SaplingGrammarCheckRequest, options?: RequestOptions): ApiPromise<ApiV1EditsResponse1, Proofreading.SaplingGrammarCheckError>`
- **Wire**: `POST /api/v1/edits`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1EditsResponse1`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Proofreading.SaplingGrammarCheckError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1EditsResponse11"` [400] `ApiV1EditsResponse11` · `"error"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error2"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Proofreading.SaplingGrammarCheckRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1EditsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1EditsRequest` | `apiV1EditsRequestSchema` | `src/models/api-v1-edits-request.ts` |
| `ApiV1EditsResponse1` | `apiV1EditsResponse1Schema` | `src/models/unions/api-v1-edits-response1.ts` |
| `ApiV1EditsResponse11` | `apiV1EditsResponse11Schema` | `src/models/unions/api-v1-edits-response11.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingListCustomFilters

- **Signature**: `saplingListCustomFilters(request?: Proofreading.SaplingListCustomFiltersRequest, options?: RequestOptions): ApiPromise<ApiV1CustomFilterResponse, Proofreading.SaplingListCustomFiltersError>`
- **Wire**: `GET /api/v1/custom_filter`
- **Auth**: any of `bearerAuth`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CustomFilterResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Proofreading.SaplingListCustomFiltersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Proofreading.SaplingListCustomFiltersRequest` (1):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `returnUsage` | `query` | `return_usage` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CustomFilterResponse` | `apiV1CustomFilterResponseSchema` | `src/models/api-v1-custom-filter-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |

### saplingListCustomMappings

- **Signature**: `saplingListCustomMappings(request?: Proofreading.SaplingListCustomMappingsRequest, options?: RequestOptions): ApiPromise<ApiV1CustomMappingResponse, Proofreading.SaplingListCustomMappingsError>`
- **Wire**: `GET /api/v1/custom_mapping`
- **Auth**: any of `bearerAuth`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CustomMappingResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Proofreading.SaplingListCustomMappingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Proofreading.SaplingListCustomMappingsRequest` (1):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `returnUsage` | `query` | `return_usage` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CustomMappingResponse` | `apiV1CustomMappingResponseSchema` | `src/models/api-v1-custom-mapping-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |

### saplingListDictionary

- **Signature**: `saplingListDictionary(request?: Proofreading.SaplingListDictionaryRequest, options?: RequestOptions): ApiPromise<ApiV1DictionaryResponse[], Proofreading.SaplingListDictionaryError>`
- **Wire**: `GET /api/v1/dictionary`
- **Auth**: any of `bearerAuth`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1DictionaryResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Proofreading.SaplingListDictionaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Proofreading.SaplingListDictionaryRequest` (1):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `returnUsage` | `query` | `return_usage` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1DictionaryResponse` | `apiV1DictionaryResponseSchema` | `src/models/api-v1-dictionary-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |

### saplingRejectEdit

- **Signature**: `saplingRejectEdit(request: Proofreading.SaplingRejectEditRequest, options?: RequestOptions): ApiPromise<ApiV1EditsRejectResponse, Proofreading.SaplingRejectEditError>`
- **Wire**: `POST /api/v1/edits/{edit_hash}/reject`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1EditsRejectResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Proofreading.SaplingRejectEditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1EditsRejectResponse11"` [400] `ApiV1EditsRejectResponse11` · `"error"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error2"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Proofreading.SaplingRejectEditRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `editHash` | `path` | `edit_hash` | `string` | yes |
| `body` | `body` | — | `ApiV1EditsRejectRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1EditsRejectRequest` | `apiV1EditsRejectRequestSchema` | `src/models/api-v1-edits-reject-request.ts` |
| `ApiV1EditsRejectResponse` | `apiV1EditsRejectResponseSchema` | `src/models/api-v1-edits-reject-response.ts` |
| `ApiV1EditsRejectResponse11` | `apiV1EditsRejectResponse11Schema` | `src/models/unions/api-v1-edits-reject-response11.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |

### saplingSpellcheck

- **Signature**: `saplingSpellcheck(request: Proofreading.SaplingSpellcheckRequest, options?: RequestOptions): ApiPromise<ApiV1SpellcheckResponse1, Proofreading.SaplingSpellcheckError>`
- **Wire**: `POST /api/v1/spellcheck`
- **Auth**: any of `bearerAuth`, `oauth2`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1SpellcheckResponse1`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Proofreading.SaplingSpellcheckError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"rateLimited1"` [429] `RateLimited1` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Proofreading.SaplingSpellcheckRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1SpellcheckRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1SpellcheckRequest` | `apiV1SpellcheckRequestSchema` | `src/models/api-v1-spellcheck-request.ts` |
| `ApiV1SpellcheckResponse1` | `apiV1SpellcheckResponse1Schema` | `src/models/unions/api-v1-spellcheck-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

