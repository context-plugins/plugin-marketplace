<!-- Generated file — do not edit; regenerated with the SDK. -->

# MedicalVocabulary — operations

Accessor: `client.medicalVocabulary` · Source: `src/resources/medical-vocabulary.ts` · 5 operations · Request and error types: namespace `MedicalVocabulary`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-transcribe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createMedicalVocabulary

- **Signature**: `createMedicalVocabulary(request: MedicalVocabulary.CreateMedicalVocabularyRequestParams, options?: RequestOptions): ApiPromise<undefined, MedicalVocabulary.CreateMedicalVocabularyError>`
- **Wire**: `POST /#CreateMedicalVocabulary`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `MedicalVocabulary.CreateMedicalVocabularyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MedicalVocabulary.CreateMedicalVocabularyRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi` | `xAmzTargetAmazonTranscribeServiceMedicalVocabularyApiSchema` | `src/models/xamz-target-amazon-transcribe-service-medical-vocabulary-api.ts` |

### deleteMedicalVocabulary

- **Signature**: `deleteMedicalVocabulary(request: MedicalVocabulary.DeleteMedicalVocabularyRequestParams, options?: RequestOptions): ApiPromise<undefined, MedicalVocabulary.DeleteMedicalVocabularyError>`
- **Wire**: `POST /#DeleteMedicalVocabulary`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `MedicalVocabulary.DeleteMedicalVocabularyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MedicalVocabulary.DeleteMedicalVocabularyRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi` | `xAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiSchema` | `src/models/xamz-target1-amazon-transcribe-service-medical-vocabulary-api.ts` |

### getMedicalVocabulary

- **Signature**: `getMedicalVocabulary(request: MedicalVocabulary.GetMedicalVocabularyRequestParams, options?: RequestOptions): ApiPromise<undefined, MedicalVocabulary.GetMedicalVocabularyError>`
- **Wire**: `POST /#GetMedicalVocabulary`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `MedicalVocabulary.GetMedicalVocabularyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MedicalVocabulary.GetMedicalVocabularyRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi` | `xAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiSchema` | `src/models/xamz-target2-amazon-transcribe-service-medical-vocabulary-api.ts` |

### listMedicalVocabularies

- **Signature**: `listMedicalVocabularies(request: MedicalVocabulary.ListMedicalVocabulariesRequestParams, options?: RequestOptions): ApiPromise<undefined, MedicalVocabulary.ListMedicalVocabulariesError>`
- **Wire**: `POST /#ListMedicalVocabularies`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `MedicalVocabulary.ListMedicalVocabulariesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MedicalVocabulary.ListMedicalVocabulariesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi` | `xAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiSchema` | `src/models/xamz-target3-amazon-transcribe-service-medical-vocabulary-api.ts` |

### updateMedicalVocabulary

- **Signature**: `updateMedicalVocabulary(request: MedicalVocabulary.UpdateMedicalVocabularyRequestParams, options?: RequestOptions): ApiPromise<undefined, MedicalVocabulary.UpdateMedicalVocabularyError>`
- **Wire**: `POST /#UpdateMedicalVocabulary`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `MedicalVocabulary.UpdateMedicalVocabularyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MedicalVocabulary.UpdateMedicalVocabularyRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi` | `xAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiSchema` | `src/models/xamz-target4-amazon-transcribe-service-medical-vocabulary-api.ts` |

