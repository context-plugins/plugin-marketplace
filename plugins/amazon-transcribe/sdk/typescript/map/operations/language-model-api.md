<!-- Generated file — do not edit; regenerated with the SDK. -->

# LanguageModelApi — operations

Accessor: `client.languageModelApi` · Source: `src/resources/language-model-api.ts` · 5 operations · Request and error types: namespace `LanguageModelApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-transcribe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createLanguageModel

- **Signature**: `createLanguageModel(request: LanguageModelApi.CreateLanguageModelRequestParams, options?: RequestOptions): ApiPromise<undefined, LanguageModelApi.CreateLanguageModelError>`
- **Wire**: `POST /#CreateLanguageModel`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `LanguageModelApi.CreateLanguageModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LanguageModelApi.CreateLanguageModelRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonTranscribeServiceLanguageModelApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonTranscribeServiceLanguageModelApi` | `xAmzTargetAmazonTranscribeServiceLanguageModelApiSchema` | `src/models/xamz-target-amazon-transcribe-service-language-model-api.ts` |

### deleteLanguageModel

- **Signature**: `deleteLanguageModel(request: LanguageModelApi.DeleteLanguageModelRequestParams, options?: RequestOptions): ApiPromise<undefined, LanguageModelApi.DeleteLanguageModelError>`
- **Wire**: `POST /#DeleteLanguageModel`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `LanguageModelApi.DeleteLanguageModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LanguageModelApi.DeleteLanguageModelRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonTranscribeServiceLanguageModelApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonTranscribeServiceLanguageModelApi` | `xAmzTarget1AmazonTranscribeServiceLanguageModelApiSchema` | `src/models/xamz-target1-amazon-transcribe-service-language-model-api.ts` |

### describeLanguageModel

- **Signature**: `describeLanguageModel(request: LanguageModelApi.DescribeLanguageModelRequestParams, options?: RequestOptions): ApiPromise<undefined, LanguageModelApi.DescribeLanguageModelError>`
- **Wire**: `POST /#DescribeLanguageModel`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `LanguageModelApi.DescribeLanguageModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LanguageModelApi.DescribeLanguageModelRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonTranscribeServiceLanguageModelApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonTranscribeServiceLanguageModelApi` | `xAmzTarget2AmazonTranscribeServiceLanguageModelApiSchema` | `src/models/xamz-target2-amazon-transcribe-service-language-model-api.ts` |

### listLanguageModels

- **Signature**: `listLanguageModels(request: LanguageModelApi.ListLanguageModelsRequestParams, options?: RequestOptions): ApiPromise<undefined, LanguageModelApi.ListLanguageModelsError>`
- **Wire**: `POST /#ListLanguageModels`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `LanguageModelApi.ListLanguageModelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LanguageModelApi.ListLanguageModelsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonTranscribeServiceLanguageModelApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonTranscribeServiceLanguageModelApi` | `xAmzTarget3AmazonTranscribeServiceLanguageModelApiSchema` | `src/models/xamz-target3-amazon-transcribe-service-language-model-api.ts` |

### updateLanguageModel

- **Signature**: `updateLanguageModel(request: LanguageModelApi.UpdateLanguageModelRequestParams, options?: RequestOptions): ApiPromise<undefined, LanguageModelApi.UpdateLanguageModelError>`
- **Wire**: `POST /#UpdateLanguageModel`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `LanguageModelApi.UpdateLanguageModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LanguageModelApi.UpdateLanguageModelRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AmazonTranscribeServiceLanguageModelApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AmazonTranscribeServiceLanguageModelApi` | `xAmzTarget4AmazonTranscribeServiceLanguageModelApiSchema` | `src/models/xamz-target4-amazon-transcribe-service-language-model-api.ts` |

