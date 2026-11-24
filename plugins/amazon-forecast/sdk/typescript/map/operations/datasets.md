<!-- Generated file — do not edit; regenerated with the SDK. -->

# Datasets — operations

Accessor: `client.datasets` · Source: `src/resources/datasets.ts` · 4 operations · Request and error types: namespace `Datasets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDataset

- **Signature**: `createDataset(request: Datasets.CreateDatasetRequestParams, options?: RequestOptions): ApiPromise<undefined, Datasets.CreateDatasetError>`
- **Wire**: `POST /#CreateDataset`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Datasets.CreateDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.CreateDatasetRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonForecastServiceDatasetsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonForecastServiceDatasetsApi` | `xAmzTargetAmazonForecastServiceDatasetsApiSchema` | `src/models/xamz-target-amazon-forecast-service-datasets-api.ts` |

### deleteDataset

- **Signature**: `deleteDataset(request: Datasets.DeleteDatasetRequestParams, options?: RequestOptions): ApiPromise<undefined, Datasets.DeleteDatasetError>`
- **Wire**: `POST /#DeleteDataset`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Datasets.DeleteDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.DeleteDatasetRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonForecastServiceDatasetsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonForecastServiceDatasetsApi` | `xAmzTarget1AmazonForecastServiceDatasetsApiSchema` | `src/models/xamz-target1-amazon-forecast-service-datasets-api.ts` |

### describeDataset

- **Signature**: `describeDataset(request: Datasets.DescribeDatasetRequestParams, options?: RequestOptions): ApiPromise<undefined, Datasets.DescribeDatasetError>`
- **Wire**: `POST /#DescribeDataset`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Datasets.DescribeDatasetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.DescribeDatasetRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonForecastServiceDatasetsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonForecastServiceDatasetsApi` | `xAmzTarget2AmazonForecastServiceDatasetsApiSchema` | `src/models/xamz-target2-amazon-forecast-service-datasets-api.ts` |

### listDatasets

- **Signature**: `listDatasets(request: Datasets.ListDatasetsRequestParams, options?: RequestOptions): ApiPromise<undefined, Datasets.ListDatasetsError>`
- **Wire**: `POST /#ListDatasets`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `Datasets.ListDatasetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Datasets.ListDatasetsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonForecastServiceDatasetsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonForecastServiceDatasetsApi` | `xAmzTarget3AmazonForecastServiceDatasetsApiSchema` | `src/models/xamz-target3-amazon-forecast-service-datasets-api.ts` |

