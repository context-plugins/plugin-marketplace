<!-- Generated file — do not edit; regenerated with the SDK. -->

# PredictorBacktestExportJob — operations

Accessor: `client.predictorBacktestExportJob` · Source: `src/resources/predictor-backtest-export-job.ts` · 4 operations · Request and error types: namespace `PredictorBacktestExportJob`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPredictorBacktestExportJob

- **Signature**: `createPredictorBacktestExportJob(request: PredictorBacktestExportJob.CreatePredictorBacktestExportJobRequestParams, options?: RequestOptions): ApiPromise<undefined, PredictorBacktestExportJob.CreatePredictorBacktestExportJobError>`
- **Wire**: `POST /#CreatePredictorBacktestExportJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `PredictorBacktestExportJob.CreatePredictorBacktestExportJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PredictorBacktestExportJob.CreatePredictorBacktestExportJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi` | `xAmzTargetAmazonForecastServicePredictorBacktestExportJobApiSchema` | `src/models/xamz-target-amazon-forecast-service-predictor-backtest-export-job-api.ts` |

### deletePredictorBacktestExportJob

- **Signature**: `deletePredictorBacktestExportJob(request: PredictorBacktestExportJob.DeletePredictorBacktestExportJobRequestParams, options?: RequestOptions): ApiPromise<undefined, PredictorBacktestExportJob.DeletePredictorBacktestExportJobError>`
- **Wire**: `POST /#DeletePredictorBacktestExportJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `PredictorBacktestExportJob.DeletePredictorBacktestExportJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PredictorBacktestExportJob.DeletePredictorBacktestExportJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi` | `xAmzTarget1AmazonForecastServicePredictorBacktestExportJobApiSchema` | `src/models/xamz-target1-amazon-forecast-service-predictor-backtest-export-job-api.ts` |

### describePredictorBacktestExportJob

- **Signature**: `describePredictorBacktestExportJob(request: PredictorBacktestExportJob.DescribePredictorBacktestExportJobRequestParams, options?: RequestOptions): ApiPromise<undefined, PredictorBacktestExportJob.DescribePredictorBacktestExportJobError>`
- **Wire**: `POST /#DescribePredictorBacktestExportJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `PredictorBacktestExportJob.DescribePredictorBacktestExportJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PredictorBacktestExportJob.DescribePredictorBacktestExportJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi` | `xAmzTarget2AmazonForecastServicePredictorBacktestExportJobApiSchema` | `src/models/xamz-target2-amazon-forecast-service-predictor-backtest-export-job-api.ts` |

### listPredictorBacktestExportJobs

- **Signature**: `listPredictorBacktestExportJobs(request: PredictorBacktestExportJob.ListPredictorBacktestExportJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, PredictorBacktestExportJob.ListPredictorBacktestExportJobsError>`
- **Wire**: `POST /#ListPredictorBacktestExportJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `PredictorBacktestExportJob.ListPredictorBacktestExportJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PredictorBacktestExportJob.ListPredictorBacktestExportJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi` | `xAmzTarget3AmazonForecastServicePredictorBacktestExportJobApiSchema` | `src/models/xamz-target3-amazon-forecast-service-predictor-backtest-export-job-api.ts` |

