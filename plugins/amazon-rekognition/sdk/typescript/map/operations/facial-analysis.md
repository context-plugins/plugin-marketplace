<!-- Generated file — do not edit; regenerated with the SDK. -->

# FacialAnalysis — operations

Accessor: `client.facialAnalysis` · Source: `src/resources/facial-analysis.ts` · 2 operations · Request and error types: namespace `FacialAnalysis`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### compareFaces

- **Signature**: `compareFaces(request: FacialAnalysis.CompareFacesRequestParams, options?: RequestOptions): ApiPromise<undefined, FacialAnalysis.CompareFacesError>`
- **Wire**: `POST /#CompareFaces`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FacialAnalysis.CompareFacesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FacialAnalysis.CompareFacesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionFacialAnalysisApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionFacialAnalysisApi` | `xAmzTargetAmazonRekognitionFacialAnalysisApiSchema` | `src/models/xamz-target-amazon-rekognition-facial-analysis-api.ts` |

### detectFaces

- **Signature**: `detectFaces(request: FacialAnalysis.DetectFacesRequestParams, options?: RequestOptions): ApiPromise<undefined, FacialAnalysis.DetectFacesError>`
- **Wire**: `POST /#DetectFaces`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FacialAnalysis.DetectFacesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FacialAnalysis.DetectFacesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonRekognitionFacialAnalysisApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonRekognitionFacialAnalysisApi` | `xAmzTarget1AmazonRekognitionFacialAnalysisApiSchema` | `src/models/xamz-target1-amazon-rekognition-facial-analysis-api.ts` |

