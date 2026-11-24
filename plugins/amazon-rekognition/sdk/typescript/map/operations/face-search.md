<!-- Generated file — do not edit; regenerated with the SDK. -->

# FaceSearch — operations

Accessor: `client.faceSearch` · Source: `src/resources/face-search.ts` · 3 operations · Request and error types: namespace `FaceSearch`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFaceSearch

- **Signature**: `getFaceSearch(request: FaceSearch.GetFaceSearchRequestParams, options?: RequestOptions): ApiPromise<undefined, FaceSearch.GetFaceSearchError>`
- **Wire**: `POST /#GetFaceSearch`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FaceSearch.GetFaceSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaceSearch.GetFaceSearchRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionFaceSearchApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionFaceSearchApi` | `xAmzTargetAmazonRekognitionFaceSearchApiSchema` | `src/models/xamz-target-amazon-rekognition-face-search-api.ts` |

### searchFacesByImage2

- **Signature**: `searchFacesByImage2(request: FaceSearch.SearchFacesByImage2Request, options?: RequestOptions): ApiPromise<undefined, FaceSearch.SearchFacesByImage2Error>`
- **Wire**: `POST /#SearchFacesByImage`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FaceSearch.SearchFacesByImage2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaceSearch.SearchFacesByImage2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonRekognitionFaceSearchApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonRekognitionFaceSearchApi` | `xAmzTarget2AmazonRekognitionFaceSearchApiSchema` | `src/models/xamz-target2-amazon-rekognition-face-search-api.ts` |

### startFaceSearch

- **Signature**: `startFaceSearch(request: FaceSearch.StartFaceSearchRequestParams, options?: RequestOptions): ApiPromise<undefined, FaceSearch.StartFaceSearchError>`
- **Wire**: `POST /#StartFaceSearch`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FaceSearch.StartFaceSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaceSearch.StartFaceSearchRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonRekognitionFaceSearchApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonRekognitionFaceSearchApi` | `xAmzTarget1AmazonRekognitionFaceSearchApiSchema` | `src/models/xamz-target1-amazon-rekognition-face-search-api.ts` |

