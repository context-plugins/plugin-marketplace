<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vocabularies — operations

Accessor: `client.vocabularies` · Source: `src/resources/vocabularies.ts` · 5 operations · Request and error types: namespace `Vocabularies`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-transcribe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createVocabulary

- **Signature**: `createVocabulary(request: Vocabularies.CreateVocabularyRequestParams, options?: RequestOptions): ApiPromise<undefined, Vocabularies.CreateVocabularyError>`
- **Wire**: `POST /#CreateVocabulary`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `Vocabularies.CreateVocabularyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vocabularies.CreateVocabularyRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonTranscribeServiceVocabulariesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonTranscribeServiceVocabulariesApi` | `xAmzTargetAmazonTranscribeServiceVocabulariesApiSchema` | `src/models/xamz-target-amazon-transcribe-service-vocabularies-api.ts` |

### deleteVocabulary

- **Signature**: `deleteVocabulary(request: Vocabularies.DeleteVocabularyRequestParams, options?: RequestOptions): ApiPromise<undefined, Vocabularies.DeleteVocabularyError>`
- **Wire**: `POST /#DeleteVocabulary`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `Vocabularies.DeleteVocabularyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vocabularies.DeleteVocabularyRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonTranscribeServiceVocabulariesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonTranscribeServiceVocabulariesApi` | `xAmzTarget1AmazonTranscribeServiceVocabulariesApiSchema` | `src/models/xamz-target1-amazon-transcribe-service-vocabularies-api.ts` |

### getVocabulary

- **Signature**: `getVocabulary(request: Vocabularies.GetVocabularyRequestParams, options?: RequestOptions): ApiPromise<undefined, Vocabularies.GetVocabularyError>`
- **Wire**: `POST /#GetVocabulary`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `Vocabularies.GetVocabularyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vocabularies.GetVocabularyRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonTranscribeServiceVocabulariesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonTranscribeServiceVocabulariesApi` | `xAmzTarget2AmazonTranscribeServiceVocabulariesApiSchema` | `src/models/xamz-target2-amazon-transcribe-service-vocabularies-api.ts` |

### listVocabularies

- **Signature**: `listVocabularies(request: Vocabularies.ListVocabulariesRequestParams, options?: RequestOptions): ApiPromise<undefined, Vocabularies.ListVocabulariesError>`
- **Wire**: `POST /#ListVocabularies`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `Vocabularies.ListVocabulariesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vocabularies.ListVocabulariesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonTranscribeServiceVocabulariesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonTranscribeServiceVocabulariesApi` | `xAmzTarget3AmazonTranscribeServiceVocabulariesApiSchema` | `src/models/xamz-target3-amazon-transcribe-service-vocabularies-api.ts` |

### updateVocabulary

- **Signature**: `updateVocabulary(request: Vocabularies.UpdateVocabularyRequestParams, options?: RequestOptions): ApiPromise<undefined, Vocabularies.UpdateVocabularyError>`
- **Wire**: `POST /#UpdateVocabulary`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `Vocabularies.UpdateVocabularyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vocabularies.UpdateVocabularyRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AmazonTranscribeServiceVocabulariesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AmazonTranscribeServiceVocabulariesApi` | `xAmzTarget4AmazonTranscribeServiceVocabulariesApiSchema` | `src/models/xamz-target4-amazon-transcribe-service-vocabularies-api.ts` |

