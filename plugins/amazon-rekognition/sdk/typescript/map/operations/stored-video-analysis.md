<!-- Generated file — do not edit; regenerated with the SDK. -->

# StoredVideoAnalysis — operations

Accessor: `client.storedVideoAnalysis` · Source: `src/resources/stored-video-analysis.ts` · 2 operations · Request and error types: namespace `StoredVideoAnalysis`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getLabelDetection

- **Signature**: `getLabelDetection(request: StoredVideoAnalysis.GetLabelDetectionRequestParams, options?: RequestOptions): ApiPromise<undefined, StoredVideoAnalysis.GetLabelDetectionError>`
- **Wire**: `POST /#GetLabelDetection`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `StoredVideoAnalysis.GetLabelDetectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StoredVideoAnalysis.GetLabelDetectionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionStoredVideoAnalysisApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionStoredVideoAnalysisApi` | `xAmzTargetAmazonRekognitionStoredVideoAnalysisApiSchema` | `src/models/xamz-target-amazon-rekognition-stored-video-analysis-api.ts` |

### startLabelDetection

- **Signature**: `startLabelDetection(request: StoredVideoAnalysis.StartLabelDetectionRequestParams, options?: RequestOptions): ApiPromise<undefined, StoredVideoAnalysis.StartLabelDetectionError>`
- **Wire**: `POST /#StartLabelDetection`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `StoredVideoAnalysis.StartLabelDetectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StoredVideoAnalysis.StartLabelDetectionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi` | `xAmzTarget1AmazonRekognitionStoredVideoAnalysisApiSchema` | `src/models/xamz-target1-amazon-rekognition-stored-video-analysis-api.ts` |

