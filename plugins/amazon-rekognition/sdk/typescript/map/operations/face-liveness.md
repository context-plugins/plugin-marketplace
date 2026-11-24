<!-- Generated file — do not edit; regenerated with the SDK. -->

# FaceLiveness — operations

Accessor: `client.faceLiveness` · Source: `src/resources/face-liveness.ts` · 2 operations · Request and error types: namespace `FaceLiveness`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createFaceLivenessSession

- **Signature**: `createFaceLivenessSession(request: FaceLiveness.CreateFaceLivenessSessionRequestParams, options?: RequestOptions): ApiPromise<undefined, FaceLiveness.CreateFaceLivenessSessionError>`
- **Wire**: `POST /#CreateFaceLivenessSession`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FaceLiveness.CreateFaceLivenessSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaceLiveness.CreateFaceLivenessSessionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionFaceLivenessApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionFaceLivenessApi` | `xAmzTargetAmazonRekognitionFaceLivenessApiSchema` | `src/models/xamz-target-amazon-rekognition-face-liveness-api.ts` |

### getFaceLivenessSessionResults

- **Signature**: `getFaceLivenessSessionResults(request: FaceLiveness.GetFaceLivenessSessionResultsRequestParams, options?: RequestOptions): ApiPromise<undefined, FaceLiveness.GetFaceLivenessSessionResultsError>`
- **Wire**: `POST /#GetFaceLivenessSessionResults`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `FaceLiveness.GetFaceLivenessSessionResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FaceLiveness.GetFaceLivenessSessionResultsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonRekognitionFaceLivenessApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonRekognitionFaceLivenessApi` | `xAmzTarget1AmazonRekognitionFaceLivenessApiSchema` | `src/models/xamz-target1-amazon-rekognition-face-liveness-api.ts` |

