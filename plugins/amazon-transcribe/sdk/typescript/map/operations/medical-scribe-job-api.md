<!-- Generated file — do not edit; regenerated with the SDK. -->

# MedicalScribeJobApi — operations

Accessor: `client.medicalScribeJobApi` · Source: `src/resources/medical-scribe-job-api.ts` · 4 operations · Request and error types: namespace `MedicalScribeJobApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-transcribe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteMedicalScribeJob

- **Signature**: `deleteMedicalScribeJob(request: MedicalScribeJobApi.DeleteMedicalScribeJobRequestParams, options?: RequestOptions): ApiPromise<undefined, MedicalScribeJobApi.DeleteMedicalScribeJobError>`
- **Wire**: `POST /#DeleteMedicalScribeJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `MedicalScribeJobApi.DeleteMedicalScribeJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MedicalScribeJobApi.DeleteMedicalScribeJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi` | `xAmzTargetAmazonTranscribeServiceMedicalScribeJobApiSchema` | `src/models/xamz-target-amazon-transcribe-service-medical-scribe-job-api.ts` |

### getMedicalScribeJob

- **Signature**: `getMedicalScribeJob(request: MedicalScribeJobApi.GetMedicalScribeJobRequestParams, options?: RequestOptions): ApiPromise<undefined, MedicalScribeJobApi.GetMedicalScribeJobError>`
- **Wire**: `POST /#GetMedicalScribeJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `MedicalScribeJobApi.GetMedicalScribeJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MedicalScribeJobApi.GetMedicalScribeJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi` | `xAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiSchema` | `src/models/xamz-target1-amazon-transcribe-service-medical-scribe-job-api.ts` |

### listMedicalScribeJobs

- **Signature**: `listMedicalScribeJobs(request: MedicalScribeJobApi.ListMedicalScribeJobsRequestParams, options?: RequestOptions): ApiPromise<undefined, MedicalScribeJobApi.ListMedicalScribeJobsError>`
- **Wire**: `POST /#ListMedicalScribeJobs`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `MedicalScribeJobApi.ListMedicalScribeJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MedicalScribeJobApi.ListMedicalScribeJobsRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi` | `xAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiSchema` | `src/models/xamz-target2-amazon-transcribe-service-medical-scribe-job-api.ts` |

### startMedicalScribeJob

- **Signature**: `startMedicalScribeJob(request: MedicalScribeJobApi.StartMedicalScribeJobRequestParams, options?: RequestOptions): ApiPromise<undefined, MedicalScribeJobApi.StartMedicalScribeJobError>`
- **Wire**: `POST /#StartMedicalScribeJob`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `MedicalScribeJobApi.StartMedicalScribeJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MedicalScribeJobApi.StartMedicalScribeJobRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi` | `xAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiSchema` | `src/models/xamz-target3-amazon-transcribe-service-medical-scribe-job-api.ts` |

