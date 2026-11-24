<!-- Generated file — do not edit; regenerated with the SDK. -->

# AmazonComprehend — operations

Accessor: `client.amazonComprehend` · Source: `src/resources/amazon-comprehend.ts` · 84 operations · Request and error types: namespace `AmazonComprehend`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-comprehend`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batchDetectDominantLanguage

- **Signature**: `batchDetectDominantLanguage(request: AmazonComprehend.BatchDetectDominantLanguageRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.BatchDetectDominantLanguageError>`
- **Wire**: `POST /#BatchDetectDominantLanguage`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.BatchDetectDominantLanguageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.BatchDetectDominantLanguageRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget` | `xAmzTargetSchema` | `src/models/xamz-target.ts` |

### batchDetectEntities

- **Signature**: `batchDetectEntities(request: AmazonComprehend.BatchDetectEntitiesRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.BatchDetectEntitiesError>`
- **Wire**: `POST /#BatchDetectEntities`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.BatchDetectEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.BatchDetectEntitiesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1` | `xAmzTarget1Schema` | `src/models/xamz-target1.ts` |

### batchDetectKeyPhrases

- **Signature**: `batchDetectKeyPhrases(request: AmazonComprehend.BatchDetectKeyPhrasesRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.BatchDetectKeyPhrasesError>`
- **Wire**: `POST /#BatchDetectKeyPhrases`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.BatchDetectKeyPhrasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.BatchDetectKeyPhrasesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2` | `xAmzTarget2Schema` | `src/models/xamz-target2.ts` |

### batchDetectSentiment

- **Signature**: `batchDetectSentiment(request: AmazonComprehend.BatchDetectSentimentRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.BatchDetectSentimentError>`
- **Wire**: `POST /#BatchDetectSentiment`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.BatchDetectSentimentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.BatchDetectSentimentRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3` | `xAmzTarget3Schema` | `src/models/xamz-target3.ts` |

### batchDetectSyntax

- **Signature**: `batchDetectSyntax(request: AmazonComprehend.BatchDetectSyntaxRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.BatchDetectSyntaxError>`
- **Wire**: `POST /#BatchDetectSyntax`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.BatchDetectSyntaxError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.BatchDetectSyntaxRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4` | `xAmzTarget4Schema` | `src/models/xamz-target4.ts` |

### batchDetectTargetedSentiment

- **Signature**: `batchDetectTargetedSentiment(request: AmazonComprehend.BatchDetectTargetedSentimentRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.BatchDetectTargetedSentimentError>`
- **Wire**: `POST /#BatchDetectTargetedSentiment`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.BatchDetectTargetedSentimentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.BatchDetectTargetedSentimentRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5` | `xAmzTarget5Schema` | `src/models/xamz-target5.ts` |

### classifyDocument

- **Signature**: `classifyDocument(request: AmazonComprehend.ClassifyDocumentRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ClassifyDocumentError>`
- **Wire**: `POST /#ClassifyDocument`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ClassifyDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ClassifyDocumentRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6` | `xAmzTarget6Schema` | `src/models/xamz-target6.ts` |

### containsPiiEntities

- **Signature**: `containsPiiEntities(request: AmazonComprehend.ContainsPiiEntitiesRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ContainsPiiEntitiesError>`
- **Wire**: `POST /#ContainsPiiEntities`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ContainsPiiEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ContainsPiiEntitiesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget7` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget7` | `xAmzTarget7Schema` | `src/models/xamz-target7.ts` |

### createDataset

- **Signature**: `createDataset(request: AmazonComprehend.CreateDatasetRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.CreateDatasetError>`
- **Wire**: `POST /#CreateDataset`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.CreateDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.CreateDatasetRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget15` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget15` | `xAmzTarget15Schema` | `src/models/xamz-target15.ts` |

### createDocumentClassifier

- **Signature**: `createDocumentClassifier(request: AmazonComprehend.CreateDocumentClassifierRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.CreateDocumentClassifierError>`
- **Wire**: `POST /#CreateDocumentClassifier`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.CreateDocumentClassifierError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.CreateDocumentClassifierRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget18` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget18` | `xAmzTarget18Schema` | `src/models/xamz-target18.ts` |

### createEndpoint

- **Signature**: `createEndpoint(request: AmazonComprehend.CreateEndpointRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.CreateEndpointError>`
- **Wire**: `POST /#CreateEndpoint`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.CreateEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.CreateEndpointRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget22` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget22` | `xAmzTarget22Schema` | `src/models/xamz-target22.ts` |

### createEntityRecognizer

- **Signature**: `createEntityRecognizer(request: AmazonComprehend.CreateEntityRecognizerRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.CreateEntityRecognizerError>`
- **Wire**: `POST /#CreateEntityRecognizer`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.CreateEntityRecognizerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.CreateEntityRecognizerRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget27` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget27` | `xAmzTarget27Schema` | `src/models/xamz-target27.ts` |

### createFlywheel

- **Signature**: `createFlywheel(request: AmazonComprehend.CreateFlywheelRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.CreateFlywheelError>`
- **Wire**: `POST /#CreateFlywheel`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.CreateFlywheelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.CreateFlywheelRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget31` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget31` | `xAmzTarget31Schema` | `src/models/xamz-target31.ts` |

### deleteDocumentClassifier

- **Signature**: `deleteDocumentClassifier(request: AmazonComprehend.DeleteDocumentClassifierRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DeleteDocumentClassifierError>`
- **Wire**: `POST /#DeleteDocumentClassifier`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DeleteDocumentClassifierError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DeleteDocumentClassifierRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget19` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget19` | `xAmzTarget19Schema` | `src/models/xamz-target19.ts` |

### deleteEndpoint

- **Signature**: `deleteEndpoint(request: AmazonComprehend.DeleteEndpointRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DeleteEndpointError>`
- **Wire**: `POST /#DeleteEndpoint`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DeleteEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DeleteEndpointRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget23` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget23` | `xAmzTarget23Schema` | `src/models/xamz-target23.ts` |

### deleteEntityRecognizer

- **Signature**: `deleteEntityRecognizer(request: AmazonComprehend.DeleteEntityRecognizerRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DeleteEntityRecognizerError>`
- **Wire**: `POST /#DeleteEntityRecognizer`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DeleteEntityRecognizerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DeleteEntityRecognizerRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget28` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget28` | `xAmzTarget28Schema` | `src/models/xamz-target28.ts` |

### deleteFlywheel

- **Signature**: `deleteFlywheel(request: AmazonComprehend.DeleteFlywheelRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DeleteFlywheelError>`
- **Wire**: `POST /#DeleteFlywheel`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DeleteFlywheelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DeleteFlywheelRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget32` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget32` | `xAmzTarget32Schema` | `src/models/xamz-target32.ts` |

### deleteResourcePolicy

- **Signature**: `deleteResourcePolicy(request: AmazonComprehend.DeleteResourcePolicyRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DeleteResourcePolicyError>`
- **Wire**: `POST /#DeleteResourcePolicy`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DeleteResourcePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DeleteResourcePolicyRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget36` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget36` | `xAmzTarget36Schema` | `src/models/xamz-target36.ts` |

### describeDataset

- **Signature**: `describeDataset(request: AmazonComprehend.DescribeDatasetRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribeDatasetError>`
- **Wire**: `POST /#DescribeDataset`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribeDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribeDatasetRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget16` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget16` | `xAmzTarget16Schema` | `src/models/xamz-target16.ts` |

### describeDocumentClassificationJob

- **Signature**: `describeDocumentClassificationJob(request: AmazonComprehend.DescribeDocumentClassificationJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribeDocumentClassificationJobError>`
- **Wire**: `POST /#DescribeDocumentClassificationJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribeDocumentClassificationJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribeDocumentClassificationJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget39` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget39` | `xAmzTarget39Schema` | `src/models/xamz-target39.ts` |

### describeDocumentClassifier

- **Signature**: `describeDocumentClassifier(request: AmazonComprehend.DescribeDocumentClassifierRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribeDocumentClassifierError>`
- **Wire**: `POST /#DescribeDocumentClassifier`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribeDocumentClassifierError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribeDocumentClassifierRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget20` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget20` | `xAmzTarget20Schema` | `src/models/xamz-target20.ts` |

### describeDominantLanguageDetectionJob

- **Signature**: `describeDominantLanguageDetectionJob(request: AmazonComprehend.DescribeDominantLanguageDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribeDominantLanguageDetectionJobError>`
- **Wire**: `POST /#DescribeDominantLanguageDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribeDominantLanguageDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribeDominantLanguageDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget42` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget42` | `xAmzTarget42Schema` | `src/models/xamz-target42.ts` |

### describeEndpoint

- **Signature**: `describeEndpoint(request: AmazonComprehend.DescribeEndpointRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribeEndpointError>`
- **Wire**: `POST /#DescribeEndpoint`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribeEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribeEndpointRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget24` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget24` | `xAmzTarget24Schema` | `src/models/xamz-target24.ts` |

### describeEntitiesDetectionJob

- **Signature**: `describeEntitiesDetectionJob(request: AmazonComprehend.DescribeEntitiesDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribeEntitiesDetectionJobError>`
- **Wire**: `POST /#DescribeEntitiesDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribeEntitiesDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribeEntitiesDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget46` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget46` | `xAmzTarget46Schema` | `src/models/xamz-target46.ts` |

### describeEntityRecognizer

- **Signature**: `describeEntityRecognizer(request: AmazonComprehend.DescribeEntityRecognizerRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribeEntityRecognizerError>`
- **Wire**: `POST /#DescribeEntityRecognizer`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribeEntityRecognizerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribeEntityRecognizerRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget29` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget29` | `xAmzTarget29Schema` | `src/models/xamz-target29.ts` |

### describeEventsDetectionJob

- **Signature**: `describeEventsDetectionJob(request: AmazonComprehend.DescribeEventsDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribeEventsDetectionJobError>`
- **Wire**: `POST /#DescribeEventsDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribeEventsDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribeEventsDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget50` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget50` | `xAmzTarget50Schema` | `src/models/xamz-target50.ts` |

### describeFlywheel

- **Signature**: `describeFlywheel(request: AmazonComprehend.DescribeFlywheelRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribeFlywheelError>`
- **Wire**: `POST /#DescribeFlywheel`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribeFlywheelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribeFlywheelRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget33` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget33` | `xAmzTarget33Schema` | `src/models/xamz-target33.ts` |

### describeFlywheelIteration

- **Signature**: `describeFlywheelIteration(request: AmazonComprehend.DescribeFlywheelIterationRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribeFlywheelIterationError>`
- **Wire**: `POST /#DescribeFlywheelIteration`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribeFlywheelIterationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribeFlywheelIterationRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget54` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget54` | `xAmzTarget54Schema` | `src/models/xamz-target54.ts` |

### describeKeyPhrasesDetectionJob

- **Signature**: `describeKeyPhrasesDetectionJob(request: AmazonComprehend.DescribeKeyPhrasesDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribeKeyPhrasesDetectionJobError>`
- **Wire**: `POST /#DescribeKeyPhrasesDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribeKeyPhrasesDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribeKeyPhrasesDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget56` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget56` | `xAmzTarget56Schema` | `src/models/xamz-target56.ts` |

### describePiiEntitiesDetectionJob

- **Signature**: `describePiiEntitiesDetectionJob(request: AmazonComprehend.DescribePiiEntitiesDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribePiiEntitiesDetectionJobError>`
- **Wire**: `POST /#DescribePiiEntitiesDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribePiiEntitiesDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribePiiEntitiesDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget60` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget60` | `xAmzTarget60Schema` | `src/models/xamz-target60.ts` |

### describeResourcePolicy

- **Signature**: `describeResourcePolicy(request: AmazonComprehend.DescribeResourcePolicyRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribeResourcePolicyError>`
- **Wire**: `POST /#DescribeResourcePolicy`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribeResourcePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribeResourcePolicyRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget37` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget37` | `xAmzTarget37Schema` | `src/models/xamz-target37.ts` |

### describeSentimentDetectionJob

- **Signature**: `describeSentimentDetectionJob(request: AmazonComprehend.DescribeSentimentDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribeSentimentDetectionJobError>`
- **Wire**: `POST /#DescribeSentimentDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribeSentimentDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribeSentimentDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget64` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget64` | `xAmzTarget64Schema` | `src/models/xamz-target64.ts` |

### describeTargetedSentimentDetectionJob

- **Signature**: `describeTargetedSentimentDetectionJob(request: AmazonComprehend.DescribeTargetedSentimentDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribeTargetedSentimentDetectionJobError>`
- **Wire**: `POST /#DescribeTargetedSentimentDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribeTargetedSentimentDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribeTargetedSentimentDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget68` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget68` | `xAmzTarget68Schema` | `src/models/xamz-target68.ts` |

### describeTopicsDetectionJob

- **Signature**: `describeTopicsDetectionJob(request: AmazonComprehend.DescribeTopicsDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DescribeTopicsDetectionJobError>`
- **Wire**: `POST /#DescribeTopicsDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DescribeTopicsDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DescribeTopicsDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget72` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget72` | `xAmzTarget72Schema` | `src/models/xamz-target72.ts` |

### detectDominantLanguage

- **Signature**: `detectDominantLanguage(request: AmazonComprehend.DetectDominantLanguageRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DetectDominantLanguageError>`
- **Wire**: `POST /#DetectDominantLanguage`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DetectDominantLanguageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DetectDominantLanguageRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget8` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget8` | `xAmzTarget8Schema` | `src/models/xamz-target8.ts` |

### detectEntities

- **Signature**: `detectEntities(request: AmazonComprehend.DetectEntitiesRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DetectEntitiesError>`
- **Wire**: `POST /#DetectEntities`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DetectEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DetectEntitiesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget9` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget9` | `xAmzTarget9Schema` | `src/models/xamz-target9.ts` |

### detectKeyPhrases

- **Signature**: `detectKeyPhrases(request: AmazonComprehend.DetectKeyPhrasesRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DetectKeyPhrasesError>`
- **Wire**: `POST /#DetectKeyPhrases`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DetectKeyPhrasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DetectKeyPhrasesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget10` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget10` | `xAmzTarget10Schema` | `src/models/xamz-target10.ts` |

### detectPiiEntities

- **Signature**: `detectPiiEntities(request: AmazonComprehend.DetectPiiEntitiesRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DetectPiiEntitiesError>`
- **Wire**: `POST /#DetectPiiEntities`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DetectPiiEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DetectPiiEntitiesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget11` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget11` | `xAmzTarget11Schema` | `src/models/xamz-target11.ts` |

### detectSentiment

- **Signature**: `detectSentiment(request: AmazonComprehend.DetectSentimentRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DetectSentimentError>`
- **Wire**: `POST /#DetectSentiment`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DetectSentimentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DetectSentimentRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget12` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget12` | `xAmzTarget12Schema` | `src/models/xamz-target12.ts` |

### detectSyntax

- **Signature**: `detectSyntax(request: AmazonComprehend.DetectSyntaxRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DetectSyntaxError>`
- **Wire**: `POST /#DetectSyntax`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DetectSyntaxError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DetectSyntaxRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget13` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget13` | `xAmzTarget13Schema` | `src/models/xamz-target13.ts` |

### detectTargetedSentiment

- **Signature**: `detectTargetedSentiment(request: AmazonComprehend.DetectTargetedSentimentRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.DetectTargetedSentimentError>`
- **Wire**: `POST /#DetectTargetedSentiment`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.DetectTargetedSentimentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.DetectTargetedSentimentRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget14` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget14` | `xAmzTarget14Schema` | `src/models/xamz-target14.ts` |

### importModel

- **Signature**: `importModel(request: AmazonComprehend.ImportModelRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ImportModelError>`
- **Wire**: `POST /#ImportModel`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ImportModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ImportModelRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget75` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget75` | `xAmzTarget75Schema` | `src/models/xamz-target75.ts` |

### listDatasets

- **Signature**: `listDatasets(request: AmazonComprehend.ListDatasetsRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListDatasetsError>`
- **Wire**: `POST /#ListDatasets`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListDatasetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListDatasetsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget17` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget17` | `xAmzTarget17Schema` | `src/models/xamz-target17.ts` |

### listDocumentClassificationJobs

- **Signature**: `listDocumentClassificationJobs(request: AmazonComprehend.ListDocumentClassificationJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListDocumentClassificationJobsError>`
- **Wire**: `POST /#ListDocumentClassificationJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListDocumentClassificationJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListDocumentClassificationJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget40` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget40` | `xAmzTarget40Schema` | `src/models/xamz-target40.ts` |

### listDocumentClassifierSummaries

- **Signature**: `listDocumentClassifierSummaries(request: AmazonComprehend.ListDocumentClassifierSummariesRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListDocumentClassifierSummariesError>`
- **Wire**: `POST /#ListDocumentClassifierSummaries`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListDocumentClassifierSummariesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListDocumentClassifierSummariesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget76` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget76` | `xAmzTarget76Schema` | `src/models/xamz-target76.ts` |

### listDocumentClassifiers

- **Signature**: `listDocumentClassifiers(request: AmazonComprehend.ListDocumentClassifiersRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListDocumentClassifiersError>`
- **Wire**: `POST /#ListDocumentClassifiers`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListDocumentClassifiersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListDocumentClassifiersRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget21` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget21` | `xAmzTarget21Schema` | `src/models/xamz-target21.ts` |

### listDominantLanguageDetectionJobs

- **Signature**: `listDominantLanguageDetectionJobs(request: AmazonComprehend.ListDominantLanguageDetectionJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListDominantLanguageDetectionJobsError>`
- **Wire**: `POST /#ListDominantLanguageDetectionJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListDominantLanguageDetectionJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListDominantLanguageDetectionJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget43` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget43` | `xAmzTarget43Schema` | `src/models/xamz-target43.ts` |

### listEndpoints

- **Signature**: `listEndpoints(request: AmazonComprehend.ListEndpointsRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListEndpointsError>`
- **Wire**: `POST /#ListEndpoints`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListEndpointsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListEndpointsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget25` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget25` | `xAmzTarget25Schema` | `src/models/xamz-target25.ts` |

### listEntitiesDetectionJobs

- **Signature**: `listEntitiesDetectionJobs(request: AmazonComprehend.ListEntitiesDetectionJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListEntitiesDetectionJobsError>`
- **Wire**: `POST /#ListEntitiesDetectionJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListEntitiesDetectionJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListEntitiesDetectionJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget47` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget47` | `xAmzTarget47Schema` | `src/models/xamz-target47.ts` |

### listEntityRecognizerSummaries

- **Signature**: `listEntityRecognizerSummaries(request: AmazonComprehend.ListEntityRecognizerSummariesRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListEntityRecognizerSummariesError>`
- **Wire**: `POST /#ListEntityRecognizerSummaries`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListEntityRecognizerSummariesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListEntityRecognizerSummariesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget77` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget77` | `xAmzTarget77Schema` | `src/models/xamz-target77.ts` |

### listEntityRecognizers

- **Signature**: `listEntityRecognizers(request: AmazonComprehend.ListEntityRecognizersRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListEntityRecognizersError>`
- **Wire**: `POST /#ListEntityRecognizers`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListEntityRecognizersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListEntityRecognizersRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget30` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget30` | `xAmzTarget30Schema` | `src/models/xamz-target30.ts` |

### listEventsDetectionJobs

- **Signature**: `listEventsDetectionJobs(request: AmazonComprehend.ListEventsDetectionJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListEventsDetectionJobsError>`
- **Wire**: `POST /#ListEventsDetectionJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListEventsDetectionJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListEventsDetectionJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget51` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget51` | `xAmzTarget51Schema` | `src/models/xamz-target51.ts` |

### listFlywheelIterationHistory

- **Signature**: `listFlywheelIterationHistory(request: AmazonComprehend.ListFlywheelIterationHistoryRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListFlywheelIterationHistoryError>`
- **Wire**: `POST /#ListFlywheelIterationHistory`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListFlywheelIterationHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListFlywheelIterationHistoryRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget78` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget78` | `xAmzTarget78Schema` | `src/models/xamz-target78.ts` |

### listFlywheels

- **Signature**: `listFlywheels(request: AmazonComprehend.ListFlywheelsRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListFlywheelsError>`
- **Wire**: `POST /#ListFlywheels`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListFlywheelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListFlywheelsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget34` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget34` | `xAmzTarget34Schema` | `src/models/xamz-target34.ts` |

### listKeyPhrasesDetectionJobs

- **Signature**: `listKeyPhrasesDetectionJobs(request: AmazonComprehend.ListKeyPhrasesDetectionJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListKeyPhrasesDetectionJobsError>`
- **Wire**: `POST /#ListKeyPhrasesDetectionJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListKeyPhrasesDetectionJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListKeyPhrasesDetectionJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget57` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget57` | `xAmzTarget57Schema` | `src/models/xamz-target57.ts` |

### listPiiEntitiesDetectionJobs

- **Signature**: `listPiiEntitiesDetectionJobs(request: AmazonComprehend.ListPiiEntitiesDetectionJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListPiiEntitiesDetectionJobsError>`
- **Wire**: `POST /#ListPiiEntitiesDetectionJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListPiiEntitiesDetectionJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListPiiEntitiesDetectionJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget61` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget61` | `xAmzTarget61Schema` | `src/models/xamz-target61.ts` |

### listSentimentDetectionJobs

- **Signature**: `listSentimentDetectionJobs(request: AmazonComprehend.ListSentimentDetectionJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListSentimentDetectionJobsError>`
- **Wire**: `POST /#ListSentimentDetectionJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListSentimentDetectionJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListSentimentDetectionJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget65` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget65` | `xAmzTarget65Schema` | `src/models/xamz-target65.ts` |

### listTagsForResource

- **Signature**: `listTagsForResource(request: AmazonComprehend.ListTagsForResourceRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListTagsForResourceError>`
- **Wire**: `POST /#ListTagsForResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListTagsForResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListTagsForResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget79` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget79` | `xAmzTarget79Schema` | `src/models/xamz-target79.ts` |

### listTargetedSentimentDetectionJobs

- **Signature**: `listTargetedSentimentDetectionJobs(request: AmazonComprehend.ListTargetedSentimentDetectionJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListTargetedSentimentDetectionJobsError>`
- **Wire**: `POST /#ListTargetedSentimentDetectionJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListTargetedSentimentDetectionJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListTargetedSentimentDetectionJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget69` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget69` | `xAmzTarget69Schema` | `src/models/xamz-target69.ts` |

### listTopicsDetectionJobs

- **Signature**: `listTopicsDetectionJobs(request: AmazonComprehend.ListTopicsDetectionJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.ListTopicsDetectionJobsError>`
- **Wire**: `POST /#ListTopicsDetectionJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.ListTopicsDetectionJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.ListTopicsDetectionJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget73` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget73` | `xAmzTarget73Schema` | `src/models/xamz-target73.ts` |

### putResourcePolicy

- **Signature**: `putResourcePolicy(request: AmazonComprehend.PutResourcePolicyRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.PutResourcePolicyError>`
- **Wire**: `POST /#PutResourcePolicy`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.PutResourcePolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.PutResourcePolicyRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget38` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget38` | `xAmzTarget38Schema` | `src/models/xamz-target38.ts` |

### startDocumentClassificationJob

- **Signature**: `startDocumentClassificationJob(request: AmazonComprehend.StartDocumentClassificationJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StartDocumentClassificationJobError>`
- **Wire**: `POST /#StartDocumentClassificationJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StartDocumentClassificationJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StartDocumentClassificationJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget41` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget41` | `xAmzTarget41Schema` | `src/models/xamz-target41.ts` |

### startDominantLanguageDetectionJob

- **Signature**: `startDominantLanguageDetectionJob(request: AmazonComprehend.StartDominantLanguageDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StartDominantLanguageDetectionJobError>`
- **Wire**: `POST /#StartDominantLanguageDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StartDominantLanguageDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StartDominantLanguageDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget44` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget44` | `xAmzTarget44Schema` | `src/models/xamz-target44.ts` |

### startEntitiesDetectionJob

- **Signature**: `startEntitiesDetectionJob(request: AmazonComprehend.StartEntitiesDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StartEntitiesDetectionJobError>`
- **Wire**: `POST /#StartEntitiesDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StartEntitiesDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StartEntitiesDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget48` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget48` | `xAmzTarget48Schema` | `src/models/xamz-target48.ts` |

### startEventsDetectionJob

- **Signature**: `startEventsDetectionJob(request: AmazonComprehend.StartEventsDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StartEventsDetectionJobError>`
- **Wire**: `POST /#StartEventsDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StartEventsDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StartEventsDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget52` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget52` | `xAmzTarget52Schema` | `src/models/xamz-target52.ts` |

### startFlywheelIteration

- **Signature**: `startFlywheelIteration(request: AmazonComprehend.StartFlywheelIterationRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StartFlywheelIterationError>`
- **Wire**: `POST /#StartFlywheelIteration`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StartFlywheelIterationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StartFlywheelIterationRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget55` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget55` | `xAmzTarget55Schema` | `src/models/xamz-target55.ts` |

### startKeyPhrasesDetectionJob

- **Signature**: `startKeyPhrasesDetectionJob(request: AmazonComprehend.StartKeyPhrasesDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StartKeyPhrasesDetectionJobError>`
- **Wire**: `POST /#StartKeyPhrasesDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StartKeyPhrasesDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StartKeyPhrasesDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget58` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget58` | `xAmzTarget58Schema` | `src/models/xamz-target58.ts` |

### startPiiEntitiesDetectionJob

- **Signature**: `startPiiEntitiesDetectionJob(request: AmazonComprehend.StartPiiEntitiesDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StartPiiEntitiesDetectionJobError>`
- **Wire**: `POST /#StartPiiEntitiesDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StartPiiEntitiesDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StartPiiEntitiesDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget62` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget62` | `xAmzTarget62Schema` | `src/models/xamz-target62.ts` |

### startSentimentDetectionJob

- **Signature**: `startSentimentDetectionJob(request: AmazonComprehend.StartSentimentDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StartSentimentDetectionJobError>`
- **Wire**: `POST /#StartSentimentDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StartSentimentDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StartSentimentDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget66` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget66` | `xAmzTarget66Schema` | `src/models/xamz-target66.ts` |

### startTargetedSentimentDetectionJob

- **Signature**: `startTargetedSentimentDetectionJob(request: AmazonComprehend.StartTargetedSentimentDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StartTargetedSentimentDetectionJobError>`
- **Wire**: `POST /#StartTargetedSentimentDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StartTargetedSentimentDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StartTargetedSentimentDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget70` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget70` | `xAmzTarget70Schema` | `src/models/xamz-target70.ts` |

### startTopicsDetectionJob

- **Signature**: `startTopicsDetectionJob(request: AmazonComprehend.StartTopicsDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StartTopicsDetectionJobError>`
- **Wire**: `POST /#StartTopicsDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StartTopicsDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StartTopicsDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget74` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget74` | `xAmzTarget74Schema` | `src/models/xamz-target74.ts` |

### stopDominantLanguageDetectionJob

- **Signature**: `stopDominantLanguageDetectionJob(request: AmazonComprehend.StopDominantLanguageDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StopDominantLanguageDetectionJobError>`
- **Wire**: `POST /#StopDominantLanguageDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StopDominantLanguageDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StopDominantLanguageDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget45` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget45` | `xAmzTarget45Schema` | `src/models/xamz-target45.ts` |

### stopEntitiesDetectionJob

- **Signature**: `stopEntitiesDetectionJob(request: AmazonComprehend.StopEntitiesDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StopEntitiesDetectionJobError>`
- **Wire**: `POST /#StopEntitiesDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StopEntitiesDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StopEntitiesDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget49` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget49` | `xAmzTarget49Schema` | `src/models/xamz-target49.ts` |

### stopEventsDetectionJob

- **Signature**: `stopEventsDetectionJob(request: AmazonComprehend.StopEventsDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StopEventsDetectionJobError>`
- **Wire**: `POST /#StopEventsDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StopEventsDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StopEventsDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget53` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget53` | `xAmzTarget53Schema` | `src/models/xamz-target53.ts` |

### stopKeyPhrasesDetectionJob

- **Signature**: `stopKeyPhrasesDetectionJob(request: AmazonComprehend.StopKeyPhrasesDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StopKeyPhrasesDetectionJobError>`
- **Wire**: `POST /#StopKeyPhrasesDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StopKeyPhrasesDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StopKeyPhrasesDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget59` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget59` | `xAmzTarget59Schema` | `src/models/xamz-target59.ts` |

### stopPiiEntitiesDetectionJob

- **Signature**: `stopPiiEntitiesDetectionJob(request: AmazonComprehend.StopPiiEntitiesDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StopPiiEntitiesDetectionJobError>`
- **Wire**: `POST /#StopPiiEntitiesDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StopPiiEntitiesDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StopPiiEntitiesDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget63` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget63` | `xAmzTarget63Schema` | `src/models/xamz-target63.ts` |

### stopSentimentDetectionJob

- **Signature**: `stopSentimentDetectionJob(request: AmazonComprehend.StopSentimentDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StopSentimentDetectionJobError>`
- **Wire**: `POST /#StopSentimentDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StopSentimentDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StopSentimentDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget67` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget67` | `xAmzTarget67Schema` | `src/models/xamz-target67.ts` |

### stopTargetedSentimentDetectionJob

- **Signature**: `stopTargetedSentimentDetectionJob(request: AmazonComprehend.StopTargetedSentimentDetectionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StopTargetedSentimentDetectionJobError>`
- **Wire**: `POST /#StopTargetedSentimentDetectionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StopTargetedSentimentDetectionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StopTargetedSentimentDetectionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget71` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget71` | `xAmzTarget71Schema` | `src/models/xamz-target71.ts` |

### stopTrainingDocumentClassifier

- **Signature**: `stopTrainingDocumentClassifier(request: AmazonComprehend.StopTrainingDocumentClassifierRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StopTrainingDocumentClassifierError>`
- **Wire**: `POST /#StopTrainingDocumentClassifier`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StopTrainingDocumentClassifierError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StopTrainingDocumentClassifierRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget80` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget80` | `xAmzTarget80Schema` | `src/models/xamz-target80.ts` |

### stopTrainingEntityRecognizer

- **Signature**: `stopTrainingEntityRecognizer(request: AmazonComprehend.StopTrainingEntityRecognizerRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.StopTrainingEntityRecognizerError>`
- **Wire**: `POST /#StopTrainingEntityRecognizer`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.StopTrainingEntityRecognizerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.StopTrainingEntityRecognizerRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget81` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget81` | `xAmzTarget81Schema` | `src/models/xamz-target81.ts` |

### tagResource

- **Signature**: `tagResource(request: AmazonComprehend.TagResourceRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.TagResourceError>`
- **Wire**: `POST /#TagResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.TagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.TagResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget82` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget82` | `xAmzTarget82Schema` | `src/models/xamz-target82.ts` |

### untagResource

- **Signature**: `untagResource(request: AmazonComprehend.UntagResourceRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.UntagResourceError>`
- **Wire**: `POST /#UntagResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.UntagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.UntagResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget83` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget83` | `xAmzTarget83Schema` | `src/models/xamz-target83.ts` |

### updateEndpoint

- **Signature**: `updateEndpoint(request: AmazonComprehend.UpdateEndpointRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.UpdateEndpointError>`
- **Wire**: `POST /#UpdateEndpoint`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.UpdateEndpointError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.UpdateEndpointRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget26` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget26` | `xAmzTarget26Schema` | `src/models/xamz-target26.ts` |

### updateFlywheel

- **Signature**: `updateFlywheel(request: AmazonComprehend.UpdateFlywheelRequestParams, options?: RequestOptions): ApiPromise<undefined, AmazonComprehend.UpdateFlywheelError>`
- **Wire**: `POST /#UpdateFlywheel`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonComprehendError` with `kind: "api"`, an instance of `AmazonComprehend.UpdateFlywheelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error500"` [500] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonComprehend.UpdateFlywheelRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget35` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget35` | `xAmzTarget35Schema` | `src/models/xamz-target35.ts` |

