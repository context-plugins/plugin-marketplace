<!-- Generated file — do not edit; regenerated with the SDK. -->

# PatientApi — operations

Accessor: `client.patientApi` · Source: `src/resources/patient-api.ts` · 5 operations · Request and error types: namespace `PatientApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `health-gorilla`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPatient

- **Signature**: `createPatient(request: PatientApi.CreatePatientRequest, options?: RequestOptions): ApiPromise<Patient, ApiError>`
- **Wire**: `POST /Patient`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Patient`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PatientApi.CreatePatientRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Patient` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Patient` | `patientSchema` | `src/models/patient.ts` |

### patientEverything

- **Signature**: `patientEverything(request: PatientApi.PatientEverythingRequest, options?: RequestOptions): ApiPromise<Bundle, ApiError>`
- **Wire**: `GET /Patient/{id}/$everything`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Bundle`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PatientApi.PatientEverythingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Bundle` | `bundleSchema` | `src/models/bundle.ts` |

### readPatient

- **Signature**: `readPatient(request: PatientApi.ReadPatientRequest, options?: RequestOptions): ApiPromise<Patient, PatientApi.ReadPatientError>`
- **Wire**: `GET /Patient/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Patient`
- **Error**: `HealthGorillaError` with `kind: "api"`, an instance of `PatientApi.ReadPatientError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"operationOutcome"` [404] `OperationOutcome` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PatientApi.ReadPatientRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Patient` | `patientSchema` | `src/models/patient.ts` |
| `OperationOutcome` | `operationOutcomeSchema` | `src/models/operation-outcome.ts` |

### searchPatients

- **Signature**: `searchPatients(request?: PatientApi.SearchPatientsRequest, options?: RequestOptions): ApiPromise<Bundle, ApiError>`
- **Wire**: `GET /Patient`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Bundle`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PatientApi.SearchPatientsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `identifier` | `query` | — | `string` | no |
| `name` | `query` | — | `string` | no |
| `birthdate` | `query` | — | `string` (date) | no |
| `gender` | `query` | — | `string` | no |
| `count` | `query` | `_count` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Bundle` | `bundleSchema` | `src/models/bundle.ts` |

### updatePatient

- **Signature**: `updatePatient(request: PatientApi.UpdatePatientRequest, options?: RequestOptions): ApiPromise<Patient, ApiError>`
- **Wire**: `PUT /Patient/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Patient`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PatientApi.UpdatePatientRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `Patient` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Patient` | `patientSchema` | `src/models/patient.ts` |

