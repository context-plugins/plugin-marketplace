<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatasetImportJob — operations

Accessor: `client.datasetImportJob` · Source: `src/resources/dataset-import-job.ts` · 4 operations · Request and error types: namespace `DatasetImportJob`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDatasetImportJob

- **Signature**: `createDatasetImportJob(request: DatasetImportJob.CreateDatasetImportJobRequestParams, options?: RequestOptions): ApiPromise<undefined, DatasetImportJob.CreateDatasetImportJobError>`
- **Wire**: `POST /#CreateDatasetImportJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `DatasetImportJob.CreateDatasetImportJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatasetImportJob.CreateDatasetImportJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonForecastServiceDatasetImportJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonForecastServiceDatasetImportJobApi` | `xAmzTargetAmazonForecastServiceDatasetImportJobApiSchema` | `src/models/xamz-target-amazon-forecast-service-dataset-import-job-api.ts` |

### deleteDatasetImportJob

- **Signature**: `deleteDatasetImportJob(request: DatasetImportJob.DeleteDatasetImportJobRequestParams, options?: RequestOptions): ApiPromise<undefined, DatasetImportJob.DeleteDatasetImportJobError>`
- **Wire**: `POST /#DeleteDatasetImportJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `DatasetImportJob.DeleteDatasetImportJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatasetImportJob.DeleteDatasetImportJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonForecastServiceDatasetImportJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonForecastServiceDatasetImportJobApi` | `xAmzTarget1AmazonForecastServiceDatasetImportJobApiSchema` | `src/models/xamz-target1-amazon-forecast-service-dataset-import-job-api.ts` |

### describeDatasetImportJob

- **Signature**: `describeDatasetImportJob(request: DatasetImportJob.DescribeDatasetImportJobRequestParams, options?: RequestOptions): ApiPromise<undefined, DatasetImportJob.DescribeDatasetImportJobError>`
- **Wire**: `POST /#DescribeDatasetImportJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `DatasetImportJob.DescribeDatasetImportJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatasetImportJob.DescribeDatasetImportJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonForecastServiceDatasetImportJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonForecastServiceDatasetImportJobApi` | `xAmzTarget2AmazonForecastServiceDatasetImportJobApiSchema` | `src/models/xamz-target2-amazon-forecast-service-dataset-import-job-api.ts` |

### listDatasetImportJobs

- **Signature**: `listDatasetImportJobs(request: DatasetImportJob.ListDatasetImportJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, DatasetImportJob.ListDatasetImportJobsError>`
- **Wire**: `POST /#ListDatasetImportJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `DatasetImportJob.ListDatasetImportJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DatasetImportJob.ListDatasetImportJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonForecastServiceDatasetImportJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonForecastServiceDatasetImportJobApi` | `xAmzTarget3AmazonForecastServiceDatasetImportJobApiSchema` | `src/models/xamz-target3-amazon-forecast-service-dataset-import-job-api.ts` |

