<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dataset — operations

Accessor: `client.dataset` · Source: `src/resources/dataset.ts` · 3 operations · Request and error types: namespace `Dataset`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDataset

- **Signature**: `createDataset(request: Dataset.CreateDatasetRequestParams, options?: RequestOptions): ApiPromise<undefined, Dataset.CreateDatasetError>`
- **Wire**: `POST /#CreateDataset`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `Dataset.CreateDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.CreateDatasetRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionDatasetApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionDatasetApi` | `xAmzTargetAmazonRekognitionDatasetApiSchema` | `src/models/xamz-target-amazon-rekognition-dataset-api.ts` |

### deleteDataset

- **Signature**: `deleteDataset(request: Dataset.DeleteDatasetRequestParams, options?: RequestOptions): ApiPromise<undefined, Dataset.DeleteDatasetError>`
- **Wire**: `POST /#DeleteDataset`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `Dataset.DeleteDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.DeleteDatasetRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonRekognitionDatasetApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonRekognitionDatasetApi` | `xAmzTarget1AmazonRekognitionDatasetApiSchema` | `src/models/xamz-target1-amazon-rekognition-dataset-api.ts` |

### describeDataset

- **Signature**: `describeDataset(request: Dataset.DescribeDatasetRequestParams, options?: RequestOptions): ApiPromise<undefined, Dataset.DescribeDatasetError>`
- **Wire**: `POST /#DescribeDataset`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `Dataset.DescribeDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dataset.DescribeDatasetRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonRekognitionDatasetApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonRekognitionDatasetApi` | `xAmzTarget2AmazonRekognitionDatasetApiSchema` | `src/models/xamz-target2-amazon-rekognition-dataset-api.ts` |

