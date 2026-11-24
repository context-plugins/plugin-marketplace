<!-- Generated file — do not edit; regenerated with the SDK. -->

# TranscriptionJobs — operations

Accessor: `client.transcriptionJobs` · Source: `src/resources/transcription-jobs.ts` · 4 operations · Request and error types: namespace `TranscriptionJobs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-transcribe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteTranscriptionJob

- **Signature**: `deleteTranscriptionJob(request: TranscriptionJobs.DeleteTranscriptionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, TranscriptionJobs.DeleteTranscriptionJobError>`
- **Wire**: `POST /#DeleteTranscriptionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `TranscriptionJobs.DeleteTranscriptionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TranscriptionJobs.DeleteTranscriptionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi` | `xAmzTargetAmazonTranscribeServiceTranscriptionJobsApiSchema` | `src/models/xamz-target-amazon-transcribe-service-transcription-jobs-api.ts` |

### getTranscriptionJob

- **Signature**: `getTranscriptionJob(request: TranscriptionJobs.GetTranscriptionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, TranscriptionJobs.GetTranscriptionJobError>`
- **Wire**: `POST /#GetTranscriptionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `TranscriptionJobs.GetTranscriptionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TranscriptionJobs.GetTranscriptionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi` | `xAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiSchema` | `src/models/xamz-target1-amazon-transcribe-service-transcription-jobs-api.ts` |

### listTranscriptionJobs

- **Signature**: `listTranscriptionJobs(request: TranscriptionJobs.ListTranscriptionJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, TranscriptionJobs.ListTranscriptionJobsError>`
- **Wire**: `POST /#ListTranscriptionJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `TranscriptionJobs.ListTranscriptionJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TranscriptionJobs.ListTranscriptionJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi` | `xAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiSchema` | `src/models/xamz-target2-amazon-transcribe-service-transcription-jobs-api.ts` |

### startTranscriptionJob

- **Signature**: `startTranscriptionJob(request: TranscriptionJobs.StartTranscriptionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, TranscriptionJobs.StartTranscriptionJobError>`
- **Wire**: `POST /#StartTranscriptionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `TranscriptionJobs.StartTranscriptionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TranscriptionJobs.StartTranscriptionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi` | `xAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiSchema` | `src/models/xamz-target3-amazon-transcribe-service-transcription-jobs-api.ts` |

