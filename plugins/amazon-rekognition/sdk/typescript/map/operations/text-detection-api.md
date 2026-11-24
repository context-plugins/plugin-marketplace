<!-- Generated file — do not edit; regenerated with the SDK. -->

# TextDetectionApi — operations

Accessor: `client.textDetectionApi` · Source: `src/resources/text-detection-api.ts` · 3 operations · Request and error types: namespace `TextDetectionApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### detectText2

- **Signature**: `detectText2(request: TextDetectionApi.DetectText2Request, options?: RequestOptions): ApiPromise<undefined, TextDetectionApi.DetectText2Error>`
- **Wire**: `POST /#DetectText`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `TextDetectionApi.DetectText2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextDetectionApi.DetectText2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonRekognitionTextDetectionApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonRekognitionTextDetectionApi` | `xAmzTarget2AmazonRekognitionTextDetectionApiSchema` | `src/models/xamz-target2-amazon-rekognition-text-detection-api.ts` |

### getTextDetection

- **Signature**: `getTextDetection(request: TextDetectionApi.GetTextDetectionRequestParams, options?: RequestOptions): ApiPromise<undefined, TextDetectionApi.GetTextDetectionError>`
- **Wire**: `POST /#GetTextDetection`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `TextDetectionApi.GetTextDetectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextDetectionApi.GetTextDetectionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionTextDetectionApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionTextDetectionApi` | `xAmzTargetAmazonRekognitionTextDetectionApiSchema` | `src/models/xamz-target-amazon-rekognition-text-detection-api.ts` |

### startTextDetection

- **Signature**: `startTextDetection(request: TextDetectionApi.StartTextDetectionRequestParams, options?: RequestOptions): ApiPromise<undefined, TextDetectionApi.StartTextDetectionError>`
- **Wire**: `POST /#StartTextDetection`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `TextDetectionApi.StartTextDetectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TextDetectionApi.StartTextDetectionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonRekognitionTextDetectionApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonRekognitionTextDetectionApi` | `xAmzTarget1AmazonRekognitionTextDetectionApiSchema` | `src/models/xamz-target1-amazon-rekognition-text-detection-api.ts` |

