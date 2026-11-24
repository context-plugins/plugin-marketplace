<!-- Generated file — do not edit; regenerated with the SDK. -->

# MediaAnalysisJob — operations

Accessor: `client.mediaAnalysisJob` · Source: `src/resources/media-analysis-job.ts` · 3 operations · Request and error types: namespace `MediaAnalysisJob`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-rekognition`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMediaAnalysisJob

- **Signature**: `getMediaAnalysisJob(request: MediaAnalysisJob.GetMediaAnalysisJobRequestParams, options?: RequestOptions): ApiPromise<undefined, MediaAnalysisJob.GetMediaAnalysisJobError>`
- **Wire**: `POST /#GetMediaAnalysisJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `MediaAnalysisJob.GetMediaAnalysisJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MediaAnalysisJob.GetMediaAnalysisJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonRekognitionMediaAnalysisJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonRekognitionMediaAnalysisJobApi` | `xAmzTargetAmazonRekognitionMediaAnalysisJobApiSchema` | `src/models/xamz-target-amazon-rekognition-media-analysis-job-api.ts` |

### listMediaAnalysisJobs

- **Signature**: `listMediaAnalysisJobs(request: MediaAnalysisJob.ListMediaAnalysisJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, MediaAnalysisJob.ListMediaAnalysisJobsError>`
- **Wire**: `POST /#ListMediaAnalysisJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `MediaAnalysisJob.ListMediaAnalysisJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MediaAnalysisJob.ListMediaAnalysisJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonRekognitionMediaAnalysisJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonRekognitionMediaAnalysisJobApi` | `xAmzTarget1AmazonRekognitionMediaAnalysisJobApiSchema` | `src/models/xamz-target1-amazon-rekognition-media-analysis-job-api.ts` |

### startMediaAnalysisJob

- **Signature**: `startMediaAnalysisJob(request: MediaAnalysisJob.StartMediaAnalysisJobRequestParams, options?: RequestOptions): ApiPromise<undefined, MediaAnalysisJob.StartMediaAnalysisJobError>`
- **Wire**: `POST /#StartMediaAnalysisJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonRekognitionError` with `kind: "api"`, an instance of `MediaAnalysisJob.StartMediaAnalysisJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MediaAnalysisJob.StartMediaAnalysisJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonRekognitionMediaAnalysisJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonRekognitionMediaAnalysisJobApi` | `xAmzTarget2AmazonRekognitionMediaAnalysisJobApiSchema` | `src/models/xamz-target2-amazon-rekognition-media-analysis-job-api.ts` |

