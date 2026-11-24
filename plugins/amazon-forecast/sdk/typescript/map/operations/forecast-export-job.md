<!-- Generated file — do not edit; regenerated with the SDK. -->

# ForecastExportJob — operations

Accessor: `client.forecastExportJob` · Source: `src/resources/forecast-export-job.ts` · 4 operations · Request and error types: namespace `ForecastExportJob`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createForecastExportJob2

- **Signature**: `createForecastExportJob2(request: ForecastExportJob.CreateForecastExportJob2Request, options?: RequestOptions): ApiPromise<undefined, ForecastExportJob.CreateForecastExportJob2Error>`
- **Wire**: `POST /#CreateForecastExportJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `ForecastExportJob.CreateForecastExportJob2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForecastExportJob.CreateForecastExportJob2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonForecastServiceExportJobsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonForecastServiceExportJobsApi` | `xAmzTargetAmazonForecastServiceExportJobsApiSchema` | `src/models/xamz-target-amazon-forecast-service-export-jobs-api.ts` |

### deleteForecastExportJob

- **Signature**: `deleteForecastExportJob(request: ForecastExportJob.DeleteForecastExportJobRequestParams, options?: RequestOptions): ApiPromise<undefined, ForecastExportJob.DeleteForecastExportJobError>`
- **Wire**: `POST /#DeleteForecastExportJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `ForecastExportJob.DeleteForecastExportJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForecastExportJob.DeleteForecastExportJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonForecastServiceForecastExportJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonForecastServiceForecastExportJobApi` | `xAmzTarget1AmazonForecastServiceForecastExportJobApiSchema` | `src/models/xamz-target1-amazon-forecast-service-forecast-export-job-api.ts` |

### describeForecastExportJob

- **Signature**: `describeForecastExportJob(request: ForecastExportJob.DescribeForecastExportJobRequestParams, options?: RequestOptions): ApiPromise<undefined, ForecastExportJob.DescribeForecastExportJobError>`
- **Wire**: `POST /#DescribeForecastExportJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `ForecastExportJob.DescribeForecastExportJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForecastExportJob.DescribeForecastExportJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonForecastServiceForecastExportJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonForecastServiceForecastExportJobApi` | `xAmzTarget2AmazonForecastServiceForecastExportJobApiSchema` | `src/models/xamz-target2-amazon-forecast-service-forecast-export-job-api.ts` |

### listForecastExportJobs

- **Signature**: `listForecastExportJobs(request: ForecastExportJob.ListForecastExportJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, ForecastExportJob.ListForecastExportJobsError>`
- **Wire**: `POST /#ListForecastExportJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `ForecastExportJob.ListForecastExportJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForecastExportJob.ListForecastExportJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonForecastServiceForecastExportJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonForecastServiceForecastExportJobApi` | `xAmzTarget3AmazonForecastServiceForecastExportJobApiSchema` | `src/models/xamz-target3-amazon-forecast-service-forecast-export-job-api.ts` |

