<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExportJobs — operations

Accessor: `client.exportJobs` · Source: `src/resources/export-jobs.ts` · 1 operation · Request and error types: namespace `ExportJobs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-forecast`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createForecastExportJob

- **Signature**: `createForecastExportJob(request: ExportJobs.CreateForecastExportJobRequestParams, options?: RequestOptions): ApiPromise<undefined, ExportJobs.CreateForecastExportJobError>`
- **Wire**: `POST /#CreateForecastExportJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonForecastError` with `kind: "api"`, an instance of `ExportJobs.CreateForecastExportJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExportJobs.CreateForecastExportJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonForecastServiceExportJobsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonForecastServiceExportJobsApi` | `xAmzTargetAmazonForecastServiceExportJobsApiSchema` | `src/models/xamz-target-amazon-forecast-service-export-jobs-api.ts` |

