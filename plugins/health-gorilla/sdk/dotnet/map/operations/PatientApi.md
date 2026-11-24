<!-- Generated file — do not edit; regenerated with the SDK. -->

# PatientApi — operations

Accessor: `client.PatientApi` · Source: `src/HealthGorilla/Api/PatientApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePatient

- **Auth**: `options.BearerAuth`
- **Signature**: `CreatePatient(CreatePatientRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Patient`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreatePatientRequest` | `src/HealthGorilla/Requests/PatientApi/CreatePatientRequest.cs` |
| `Patient` | `src/HealthGorilla/Models/Patient.cs` |

### PatientEverything

- **Auth**: `options.BearerAuth`
- **Signature**: `PatientEverything(PatientEverythingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Bundle`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PatientEverythingRequest` | `src/HealthGorilla/Requests/PatientApi/PatientEverythingRequest.cs` |
| `Bundle` | `src/HealthGorilla/Models/Bundle.cs` |

### ReadPatient

- **Auth**: `options.BearerAuth`
- **Signature**: `ReadPatient(ReadPatientRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Patient`
- **Error**: `ApiException<ReadPatientError>` — **Case A (typed)**
- **Error accessors**: `TryGetOperationOutcome([NotNullWhen(true)] out OperationOutcome? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReadPatientRequest` | `src/HealthGorilla/Requests/PatientApi/ReadPatientRequest.cs` |
| `Patient` | `src/HealthGorilla/Models/Patient.cs` |
| `ReadPatientError` | `src/HealthGorilla/Errors/ReadPatientError.cs` |
| `OperationOutcome` | `src/HealthGorilla/Models/OperationOutcome.cs` |

### SearchPatients

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchPatients(SearchPatientsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `identifier` ← `Identifier`, `name` ← `Name`, `birthdate` ← `Birthdate`, `gender` ← `Gender`, `_count` ← `Count`
- **Returns**: `Bundle`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SearchPatientsRequest` | `src/HealthGorilla/Requests/PatientApi/SearchPatientsRequest.cs` |
| `Bundle` | `src/HealthGorilla/Models/Bundle.cs` |

### UpdatePatient

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdatePatient(UpdatePatientRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Patient`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdatePatientRequest` | `src/HealthGorilla/Requests/PatientApi/UpdatePatientRequest.cs` |
| `Patient` | `src/HealthGorilla/Models/Patient.cs` |

