<!-- Generated file — do not edit; regenerated with the SDK. -->

# CallAnalyticsJobApi — operations

Accessor: `client.callAnalyticsJobApi` · Source: `src/resources/call-analytics-job-api.ts` · 4 operations · Request and error types: namespace `CallAnalyticsJobApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-transcribe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteCallAnalyticsJob

- **Signature**: `deleteCallAnalyticsJob(request: CallAnalyticsJobApi.DeleteCallAnalyticsJobRequestParams, options?: RequestOptions): ApiPromise<undefined, CallAnalyticsJobApi.DeleteCallAnalyticsJobError>`
- **Wire**: `POST /#DeleteCallAnalyticsJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `CallAnalyticsJobApi.DeleteCallAnalyticsJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CallAnalyticsJobApi.DeleteCallAnalyticsJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi` | `xAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiSchema` | `src/models/xamz-target-amazon-transcribe-service-call-analytics-job-api.ts` |

### getCallAnalyticsJob

- **Signature**: `getCallAnalyticsJob(request: CallAnalyticsJobApi.GetCallAnalyticsJobRequestParams, options?: RequestOptions): ApiPromise<undefined, CallAnalyticsJobApi.GetCallAnalyticsJobError>`
- **Wire**: `POST /#GetCallAnalyticsJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `CallAnalyticsJobApi.GetCallAnalyticsJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CallAnalyticsJobApi.GetCallAnalyticsJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi` | `xAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiSchema` | `src/models/xamz-target1-amazon-transcribe-service-call-analytics-job-api.ts` |

### listCallAnalyticsJobs

- **Signature**: `listCallAnalyticsJobs(request: CallAnalyticsJobApi.ListCallAnalyticsJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, CallAnalyticsJobApi.ListCallAnalyticsJobsError>`
- **Wire**: `POST /#ListCallAnalyticsJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `CallAnalyticsJobApi.ListCallAnalyticsJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CallAnalyticsJobApi.ListCallAnalyticsJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi` | `xAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiSchema` | `src/models/xamz-target2-amazon-transcribe-service-call-analytics-job-api.ts` |

### startCallAnalyticsJob

- **Signature**: `startCallAnalyticsJob(request: CallAnalyticsJobApi.StartCallAnalyticsJobRequestParams, options?: RequestOptions): ApiPromise<undefined, CallAnalyticsJobApi.StartCallAnalyticsJobError>`
- **Wire**: `POST /#StartCallAnalyticsJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `CallAnalyticsJobApi.StartCallAnalyticsJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CallAnalyticsJobApi.StartCallAnalyticsJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi` | `xAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiSchema` | `src/models/xamz-target3-amazon-transcribe-service-call-analytics-job-api.ts` |

