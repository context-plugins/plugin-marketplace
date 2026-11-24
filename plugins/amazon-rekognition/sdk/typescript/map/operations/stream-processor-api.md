<!-- Generated file — do not edit; regenerated with the SDK. -->

# StreamProcessorApi — operations

Accessor: `client.streamProcessorApi` · Source: `src/resources/stream-processor-api.ts` · 7 operations · Request and error types: namespace `StreamProcessorApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createStreamProcessor

- **Signature**: `createStreamProcessor(request: StreamProcessorApi.CreateStreamProcessorRequestParams, options?: RequestOptions): ApiPromise<undefined, StreamProcessorApi.CreateStreamProcessorError>`
- **Wire**: `POST /#CreateStreamProcessor`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `StreamProcessorApi.CreateStreamProcessorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StreamProcessorApi.CreateStreamProcessorRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionStreamProcessorApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionStreamProcessorApi` | `xAmzTargetAmazonRekognitionStreamProcessorApiSchema` | `src/models/xamz-target-amazon-rekognition-stream-processor-api.ts` |

### deleteStreamProcessor

- **Signature**: `deleteStreamProcessor(request: StreamProcessorApi.DeleteStreamProcessorRequestParams, options?: RequestOptions): ApiPromise<undefined, StreamProcessorApi.DeleteStreamProcessorError>`
- **Wire**: `POST /#DeleteStreamProcessor`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `StreamProcessorApi.DeleteStreamProcessorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StreamProcessorApi.DeleteStreamProcessorRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonRekognitionStreamProcessorApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonRekognitionStreamProcessorApi` | `xAmzTarget1AmazonRekognitionStreamProcessorApiSchema` | `src/models/xamz-target1-amazon-rekognition-stream-processor-api.ts` |

### describeStreamProcessor

- **Signature**: `describeStreamProcessor(request: StreamProcessorApi.DescribeStreamProcessorRequestParams, options?: RequestOptions): ApiPromise<undefined, StreamProcessorApi.DescribeStreamProcessorError>`
- **Wire**: `POST /#DescribeStreamProcessor`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `StreamProcessorApi.DescribeStreamProcessorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StreamProcessorApi.DescribeStreamProcessorRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonRekognitionStreamProcessorApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonRekognitionStreamProcessorApi` | `xAmzTarget2AmazonRekognitionStreamProcessorApiSchema` | `src/models/xamz-target2-amazon-rekognition-stream-processor-api.ts` |

### listStreamProcessors

- **Signature**: `listStreamProcessors(request: StreamProcessorApi.ListStreamProcessorsRequestParams, options?: RequestOptions): ApiPromise<undefined, StreamProcessorApi.ListStreamProcessorsError>`
- **Wire**: `POST /#ListStreamProcessors`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `StreamProcessorApi.ListStreamProcessorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StreamProcessorApi.ListStreamProcessorsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonRekognitionStreamProcessorApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonRekognitionStreamProcessorApi` | `xAmzTarget3AmazonRekognitionStreamProcessorApiSchema` | `src/models/xamz-target3-amazon-rekognition-stream-processor-api.ts` |

### startStreamProcessor

- **Signature**: `startStreamProcessor(request: StreamProcessorApi.StartStreamProcessorRequestParams, options?: RequestOptions): ApiPromise<undefined, StreamProcessorApi.StartStreamProcessorError>`
- **Wire**: `POST /#StartStreamProcessor`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `StreamProcessorApi.StartStreamProcessorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StreamProcessorApi.StartStreamProcessorRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AmazonRekognitionStreamProcessorApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AmazonRekognitionStreamProcessorApi` | `xAmzTarget4AmazonRekognitionStreamProcessorApiSchema` | `src/models/xamz-target4-amazon-rekognition-stream-processor-api.ts` |

### stopStreamProcessor

- **Signature**: `stopStreamProcessor(request: StreamProcessorApi.StopStreamProcessorRequestParams, options?: RequestOptions): ApiPromise<undefined, StreamProcessorApi.StopStreamProcessorError>`
- **Wire**: `POST /#StopStreamProcessor`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `StreamProcessorApi.StopStreamProcessorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StreamProcessorApi.StopStreamProcessorRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5AmazonRekognitionStreamProcessorApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5AmazonRekognitionStreamProcessorApi` | `xAmzTarget5AmazonRekognitionStreamProcessorApiSchema` | `src/models/xamz-target5-amazon-rekognition-stream-processor-api.ts` |

### updateStreamProcessor

- **Signature**: `updateStreamProcessor(request: StreamProcessorApi.UpdateStreamProcessorRequestParams, options?: RequestOptions): ApiPromise<undefined, StreamProcessorApi.UpdateStreamProcessorError>`
- **Wire**: `POST /#UpdateStreamProcessor`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `StreamProcessorApi.UpdateStreamProcessorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StreamProcessorApi.UpdateStreamProcessorRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6AmazonRekognitionStreamProcessorApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6AmazonRekognitionStreamProcessorApi` | `xAmzTarget6AmazonRekognitionStreamProcessorApiSchema` | `src/models/xamz-target6-amazon-rekognition-stream-processor-api.ts` |

