<!-- Generated file — do not edit; regenerated with the SDK. -->

# CelebrityRecognitionApi — operations

Accessor: `client.celebrityRecognitionApi` · Source: `src/resources/celebrity-recognition-api.ts` · 3 operations · Request and error types: namespace `CelebrityRecognitionApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCelebrityRecognition

- **Signature**: `getCelebrityRecognition(request: CelebrityRecognitionApi.GetCelebrityRecognitionRequestParams, options?: RequestOptions): ApiPromise<undefined, CelebrityRecognitionApi.GetCelebrityRecognitionError>`
- **Wire**: `POST /#GetCelebrityRecognition`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `CelebrityRecognitionApi.GetCelebrityRecognitionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CelebrityRecognitionApi.GetCelebrityRecognitionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget` | `xAmzTargetSchema` | `src/models/xamz-target.ts` |

### recognizeCelebrities

- **Signature**: `recognizeCelebrities(request: CelebrityRecognitionApi.RecognizeCelebritiesRequestParams, options?: RequestOptions): ApiPromise<undefined, CelebrityRecognitionApi.RecognizeCelebritiesError>`
- **Wire**: `POST /#RecognizeCelebrities`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `CelebrityRecognitionApi.RecognizeCelebritiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CelebrityRecognitionApi.RecognizeCelebritiesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2` | `xAmzTarget2Schema` | `src/models/xamz-target2.ts` |

### startCelebrityRecognition

- **Signature**: `startCelebrityRecognition(request: CelebrityRecognitionApi.StartCelebrityRecognitionRequestParams, options?: RequestOptions): ApiPromise<undefined, CelebrityRecognitionApi.StartCelebrityRecognitionError>`
- **Wire**: `POST /#StartCelebrityRecognition`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `CelebrityRecognitionApi.StartCelebrityRecognitionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CelebrityRecognitionApi.StartCelebrityRecognitionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1` | `xAmzTarget1Schema` | `src/models/xamz-target1.ts` |

