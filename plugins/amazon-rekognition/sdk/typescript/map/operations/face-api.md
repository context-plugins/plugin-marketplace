<!-- Generated file — do not edit; regenerated with the SDK. -->

# FaceApi — operations

Accessor: `client.faceApi` · Source: `src/resources/face-api.ts` · 6 operations · Request and error types: namespace `FaceApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### associateFaces

- **Signature**: `associateFaces(request: FaceApi.AssociateFacesRequestParams, options?: RequestOptions): ApiPromise<undefined, FaceApi.AssociateFacesError>`
- **Wire**: `POST /#AssociateFaces`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FaceApi.AssociateFacesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaceApi.AssociateFacesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionFaceApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionFaceApi` | `xAmzTargetAmazonRekognitionFaceApiSchema` | `src/models/xamz-target-amazon-rekognition-face-api.ts` |

### deleteFaces

- **Signature**: `deleteFaces(request: FaceApi.DeleteFacesRequestParams, options?: RequestOptions): ApiPromise<undefined, FaceApi.DeleteFacesError>`
- **Wire**: `POST /#DeleteFaces`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FaceApi.DeleteFacesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaceApi.DeleteFacesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonRekognitionFaceApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonRekognitionFaceApi` | `xAmzTarget1AmazonRekognitionFaceApiSchema` | `src/models/xamz-target1-amazon-rekognition-face-api.ts` |

### disassociateFaces

- **Signature**: `disassociateFaces(request: FaceApi.DisassociateFacesRequestParams, options?: RequestOptions): ApiPromise<undefined, FaceApi.DisassociateFacesError>`
- **Wire**: `POST /#DisassociateFaces`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FaceApi.DisassociateFacesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaceApi.DisassociateFacesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonRekognitionFaceApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonRekognitionFaceApi` | `xAmzTarget2AmazonRekognitionFaceApiSchema` | `src/models/xamz-target2-amazon-rekognition-face-api.ts` |

### listFaces

- **Signature**: `listFaces(request: FaceApi.ListFacesRequestParams, options?: RequestOptions): ApiPromise<undefined, FaceApi.ListFacesError>`
- **Wire**: `POST /#ListFaces`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FaceApi.ListFacesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaceApi.ListFacesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3` | `xAmzTarget3Schema` | `src/models/xamz-target3.ts` |

### searchFaces

- **Signature**: `searchFaces(request: FaceApi.SearchFacesRequestParams, options?: RequestOptions): ApiPromise<undefined, FaceApi.SearchFacesError>`
- **Wire**: `POST /#SearchFaces`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FaceApi.SearchFacesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaceApi.SearchFacesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4` | `xAmzTarget4Schema` | `src/models/xamz-target4.ts` |

### searchFacesByImage

- **Signature**: `searchFacesByImage(request: FaceApi.SearchFacesByImageRequestParams, options?: RequestOptions): ApiPromise<undefined, FaceApi.SearchFacesByImageError>`
- **Wire**: `POST /#SearchFacesByImage`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FaceApi.SearchFacesByImageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaceApi.SearchFacesByImageRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5` | `xAmzTarget5Schema` | `src/models/xamz-target5.ts` |

