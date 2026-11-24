<!-- Generated file — do not edit; regenerated with the SDK. -->

# MedicalTranscriptionJobApi — operations

Accessor: `client.medicalTranscriptionJobApi` · Source: `src/resources/medical-transcription-job-api.ts` · 4 operations · Request and error types: namespace `MedicalTranscriptionJobApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-transcribe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteMedicalTranscriptionJob

- **Signature**: `deleteMedicalTranscriptionJob(request: MedicalTranscriptionJobApi.DeleteMedicalTranscriptionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, MedicalTranscriptionJobApi.DeleteMedicalTranscriptionJobError>`
- **Wire**: `POST /#DeleteMedicalTranscriptionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `MedicalTranscriptionJobApi.DeleteMedicalTranscriptionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MedicalTranscriptionJobApi.DeleteMedicalTranscriptionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi` | `xAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiSchema` | `src/models/xamz-target-amazon-transcribe-service-medical-transcription-job-api.ts` |

### getMedicalTranscriptionJob

- **Signature**: `getMedicalTranscriptionJob(request: MedicalTranscriptionJobApi.GetMedicalTranscriptionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, MedicalTranscriptionJobApi.GetMedicalTranscriptionJobError>`
- **Wire**: `POST /#GetMedicalTranscriptionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `MedicalTranscriptionJobApi.GetMedicalTranscriptionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MedicalTranscriptionJobApi.GetMedicalTranscriptionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi` | `xAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiSchema` | `src/models/xamz-target1-amazon-transcribe-service-medical-transcription-job-api.ts` |

### listMedicalTranscriptionJobs

- **Signature**: `listMedicalTranscriptionJobs(request: MedicalTranscriptionJobApi.ListMedicalTranscriptionJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, MedicalTranscriptionJobApi.ListMedicalTranscriptionJobsError>`
- **Wire**: `POST /#ListMedicalTranscriptionJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `MedicalTranscriptionJobApi.ListMedicalTranscriptionJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MedicalTranscriptionJobApi.ListMedicalTranscriptionJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi` | `xAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiSchema` | `src/models/xamz-target2-amazon-transcribe-service-medical-transcription-job-api.ts` |

### startMedicalTranscriptionJob

- **Signature**: `startMedicalTranscriptionJob(request: MedicalTranscriptionJobApi.StartMedicalTranscriptionJobRequestParams, options?: RequestOptions): ApiPromise<undefined, MedicalTranscriptionJobApi.StartMedicalTranscriptionJobError>`
- **Wire**: `POST /#StartMedicalTranscriptionJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `MedicalTranscriptionJobApi.StartMedicalTranscriptionJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MedicalTranscriptionJobApi.StartMedicalTranscriptionJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi` | `xAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiSchema` | `src/models/xamz-target3-amazon-transcribe-service-medical-transcription-job-api.ts` |

