<!-- Generated file — do not edit; regenerated with the SDK. -->

# FaceCollections — operations

Accessor: `client.faceCollections` · Source: `src/resources/face-collections.ts` · 3 operations · Request and error types: namespace `FaceCollections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCollection

- **Signature**: `createCollection(request: FaceCollections.CreateCollectionRequestParams, options?: RequestOptions): ApiPromise<undefined, FaceCollections.CreateCollectionError>`
- **Wire**: `POST /#CreateCollection`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FaceCollections.CreateCollectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaceCollections.CreateCollectionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonRekognitionFaceCollectionsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonRekognitionFaceCollectionsApi` | `xAmzTarget1AmazonRekognitionFaceCollectionsApiSchema` | `src/models/xamz-target1-amazon-rekognition-face-collections-api.ts` |

### indexFaces

- **Signature**: `indexFaces(request: FaceCollections.IndexFacesRequestParams, options?: RequestOptions): ApiPromise<undefined, FaceCollections.IndexFacesError>`
- **Wire**: `POST /#IndexFaces`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FaceCollections.IndexFacesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaceCollections.IndexFacesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionFaceCollectionsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionFaceCollectionsApi` | `xAmzTargetAmazonRekognitionFaceCollectionsApiSchema` | `src/models/xamz-target-amazon-rekognition-face-collections-api.ts` |

### listCollections

- **Signature**: `listCollections(request: FaceCollections.ListCollectionsRequestParams, options?: RequestOptions): ApiPromise<undefined, FaceCollections.ListCollectionsError>`
- **Wire**: `POST /#ListCollections`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FaceCollections.ListCollectionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaceCollections.ListCollectionsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonRekognitionFaceCollectionsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonRekognitionFaceCollectionsApi` | `xAmzTarget2AmazonRekognitionFaceCollectionsApiSchema` | `src/models/xamz-target2-amazon-rekognition-face-collections-api.ts` |

