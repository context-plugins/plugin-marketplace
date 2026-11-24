<!-- Generated file — do not edit; regenerated with the SDK. -->

# VocabularyFilter — operations

Accessor: `client.vocabularyFilter` · Source: `src/resources/vocabulary-filter.ts` · 5 operations · Request and error types: namespace `VocabularyFilter`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-transcribe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createVocabularyFilter

- **Signature**: `createVocabularyFilter(request: VocabularyFilter.CreateVocabularyFilterRequestParams, options?: RequestOptions): ApiPromise<undefined, VocabularyFilter.CreateVocabularyFilterError>`
- **Wire**: `POST /#CreateVocabularyFilter`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `VocabularyFilter.CreateVocabularyFilterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VocabularyFilter.CreateVocabularyFilterRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonTranscribeServiceVocabularyFilterApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonTranscribeServiceVocabularyFilterApi` | `xAmzTargetAmazonTranscribeServiceVocabularyFilterApiSchema` | `src/models/xamz-target-amazon-transcribe-service-vocabulary-filter-api.ts` |

### deleteVocabularyFilter

- **Signature**: `deleteVocabularyFilter(request: VocabularyFilter.DeleteVocabularyFilterRequestParams, options?: RequestOptions): ApiPromise<undefined, VocabularyFilter.DeleteVocabularyFilterError>`
- **Wire**: `POST /#DeleteVocabularyFilter`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `VocabularyFilter.DeleteVocabularyFilterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VocabularyFilter.DeleteVocabularyFilterRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi` | `xAmzTarget1AmazonTranscribeServiceVocabularyFilterApiSchema` | `src/models/xamz-target1-amazon-transcribe-service-vocabulary-filter-api.ts` |

### getVocabularyFilter

- **Signature**: `getVocabularyFilter(request: VocabularyFilter.GetVocabularyFilterRequestParams, options?: RequestOptions): ApiPromise<undefined, VocabularyFilter.GetVocabularyFilterError>`
- **Wire**: `POST /#GetVocabularyFilter`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `VocabularyFilter.GetVocabularyFilterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VocabularyFilter.GetVocabularyFilterRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi` | `xAmzTarget2AmazonTranscribeServiceVocabularyFilterApiSchema` | `src/models/xamz-target2-amazon-transcribe-service-vocabulary-filter-api.ts` |

### listVocabularyFilters

- **Signature**: `listVocabularyFilters(request: VocabularyFilter.ListVocabularyFiltersRequestParams, options?: RequestOptions): ApiPromise<undefined, VocabularyFilter.ListVocabularyFiltersError>`
- **Wire**: `POST /#ListVocabularyFilters`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `VocabularyFilter.ListVocabularyFiltersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VocabularyFilter.ListVocabularyFiltersRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi` | `xAmzTarget3AmazonTranscribeServiceVocabularyFilterApiSchema` | `src/models/xamz-target3-amazon-transcribe-service-vocabulary-filter-api.ts` |

### updateVocabularyFilter

- **Signature**: `updateVocabularyFilter(request: VocabularyFilter.UpdateVocabularyFilterRequestParams, options?: RequestOptions): ApiPromise<undefined, VocabularyFilter.UpdateVocabularyFilterError>`
- **Wire**: `POST /#UpdateVocabularyFilter`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `VocabularyFilter.UpdateVocabularyFilterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VocabularyFilter.UpdateVocabularyFilterRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi` | `xAmzTarget4AmazonTranscribeServiceVocabularyFilterApiSchema` | `src/models/xamz-target4-amazon-transcribe-service-vocabulary-filter-api.ts` |

