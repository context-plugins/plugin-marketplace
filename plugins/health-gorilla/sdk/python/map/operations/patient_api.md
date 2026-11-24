<!-- Generated file — do not edit; regenerated with the SDK. -->

# PatientApi — operations

Accessor: `client.patient_api` · Source: `health_gorilla/apis/patient_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.patient_api.create_patient

- **Route**: `POST /Patient`
- **Auth**: `bearer_auth`
- **Signature**: `def create_patient(body: Patient | PatientDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Patient`
- **Returns (raw)**: `ApiResult[Patient, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Patient` | `health_gorilla/models/patient.py` |
| `PatientDict` | `health_gorilla/models/patient.py` |

### client.patient_api.patient_everything

- **Route**: `GET /Patient/{id}/$everything`
- **Auth**: `bearer_auth`
- **Signature**: `def patient_everything(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Bundle`
- **Returns (raw)**: `ApiResult[Bundle, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Bundle` | `health_gorilla/models/bundle.py` |

### client.patient_api.read_patient

- **Route**: `GET /Patient/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def read_patient(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Patient`
- **Returns (raw)**: `ApiResult[Patient, ReadPatientErrorBody]`
- **Error**: `ReadPatientErrorBody` — **Case A (typed)**
- **Error arms**: `OperationOutcome` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Patient` | `health_gorilla/models/patient.py` |
| `ReadPatientErrorBody` | `health_gorilla/errors/read_patient_error.py` |
| `OperationOutcome` | `health_gorilla/models/operation_outcome.py` |

### client.patient_api.search_patients

- **Route**: `GET /Patient`
- **Auth**: `bearer_auth`
- **Signature**: `def search_patients(*, identifier: str | None = None, name: str | None = None, birthdate: Date | None = None, gender: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `identifier` — query · `name` — query · `birthdate` — query · `gender` — query · `count` — query `_count`
- **Returns (parsed)**: `Bundle`
- **Returns (raw)**: `ApiResult[Bundle, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Bundle` | `health_gorilla/models/bundle.py` |

### client.patient_api.update_patient

- **Route**: `PUT /Patient/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_patient(id_: str, body: Patient | PatientDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Patient`
- **Returns (raw)**: `ApiResult[Patient, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Patient` | `health_gorilla/models/patient.py` |
| `PatientDict` | `health_gorilla/models/patient.py` |

