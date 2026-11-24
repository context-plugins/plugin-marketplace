<!-- Generated file — do not edit; regenerated with the SDK. -->

# ImageAnalysis — operations

Accessor: `client.imageAnalysis` · Source: `src/resources/image-analysis.ts` · 1 operation · Request and error types: namespace `ImageAnalysis`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### detectLabels

- **Signature**: `detectLabels(request: ImageAnalysis.DetectLabelsRequestParams, options?: RequestOptions): ApiPromise<undefined, ImageAnalysis.DetectLabelsError>`
- **Wire**: `POST /#DetectLabels`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `ImageAnalysis.DetectLabelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ImageAnalysis.DetectLabelsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionImageAnalysisApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionImageAnalysisApi` | `xAmzTargetAmazonRekognitionImageAnalysisApiSchema` | `src/models/xamz-target-amazon-rekognition-image-analysis-api.ts` |

