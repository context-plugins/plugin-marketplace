# Reference

> Source: [HealthGorillaClient](src/client.ts)

## BinaryApi

> Source: [BinaryApi](src/resources/binary-api.ts)

<details>
<summary><code>readBinary(request: BinaryApi.ReadBinaryRequest, options?: RequestOptions): ApiPromise&lt;Binary, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.binaryApi.readBinary({ id: "some example string" });
  // TODO: Handle 'response' of type Binary
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.binaryApi.readBinary({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Binary
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The logical id of the resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.binaryApi.readBinary(request)`

- **OnSuccess**: <code>[Binary](src/models/binary.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.binaryApi.readBinary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Binary, ApiError&gt;</code>, with `result.value` of type <code>[Binary](src/models/binary.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CapabilityStatementApi

> Source: [CapabilityStatementApi](src/resources/capability-statement-api.ts)

<details>
<summary><code>getCapabilityStatement(options?: RequestOptions): ApiPromise&lt;CapabilityStatement, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the FHIR R4 CapabilityStatement describing supported resources, search parameters, operations, and authentication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.capabilityStatementApi.getCapabilityStatement();
  // TODO: Handle 'response' of type CapabilityStatement
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.capabilityStatementApi.getCapabilityStatement().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CapabilityStatement
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.capabilityStatementApi.getCapabilityStatement()`

- **OnSuccess**: <code>[CapabilityStatement](src/models/capability-statement.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.capabilityStatementApi.getCapabilityStatement().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CapabilityStatement, ApiError&gt;</code>, with `result.value` of type <code>[CapabilityStatement](src/models/capability-statement.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CoverageApi

> Source: [CoverageApi](src/resources/coverage-api.ts)

<details>
<summary><code>readCoverage(request: CoverageApi.ReadCoverageRequest, options?: RequestOptions): ApiPromise&lt;Coverage, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coverageApi.readCoverage({ id: "some example string" });
  // TODO: Handle 'response' of type Coverage
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coverageApi.readCoverage({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Coverage
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The logical id of the resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coverageApi.readCoverage(request)`

- **OnSuccess**: <code>[Coverage](src/models/coverage.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.coverageApi.readCoverage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Coverage, ApiError&gt;</code>, with `result.value` of type <code>[Coverage](src/models/coverage.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchCoverage(request?: CoverageApi.SearchCoverageRequest, options?: RequestOptions): ApiPromise&lt;Bundle, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.coverageApi.searchCoverage();
  // TODO: Handle 'response' of type Bundle
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.coverageApi.searchCoverage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Bundle
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>patient?</code> | <code>string</code> | Reference to the subject Patient (e.g. Patient/{id}). |
| <code>count?</code> | <code>number</code> | Number of results per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.coverageApi.searchCoverage(request)`

- **OnSuccess**: <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.coverageApi.searchCoverage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Bundle, ApiError&gt;</code>, with `result.value` of type <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DiagnosticReportApi

> Source: [DiagnosticReportApi](src/resources/diagnostic-report-api.ts)

<details>
<summary><code>readDiagnosticReport(request: DiagnosticReportApi.ReadDiagnosticReportRequest, options?: RequestOptions): ApiPromise&lt;DiagnosticReport, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticReportApi.readDiagnosticReport({ id: "some example string" });
  // TODO: Handle 'response' of type DiagnosticReport
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.diagnosticReportApi
  .readDiagnosticReport({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiagnosticReport
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The logical id of the resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.diagnosticReportApi.readDiagnosticReport(request)`

- **OnSuccess**: <code>[DiagnosticReport](src/models/diagnostic-report.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.diagnosticReportApi.readDiagnosticReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiagnosticReport, ApiError&gt;</code>, with `result.value` of type <code>[DiagnosticReport](src/models/diagnostic-report.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchDiagnosticReports(request?: DiagnosticReportApi.SearchDiagnosticReportsRequest, options?: RequestOptions): ApiPromise&lt;Bundle, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticReportApi.searchDiagnosticReports();
  // TODO: Handle 'response' of type Bundle
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.diagnosticReportApi.searchDiagnosticReports().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Bundle
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>patient?</code> | <code>string</code> | Reference to the subject Patient (e.g. Patient/{id}). |
| <code>category?</code> | <code>string</code> | - |
| <code>date?</code> | <code>string</code> | - |
| <code>count?</code> | <code>number</code> | Number of results per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.diagnosticReportApi.searchDiagnosticReports(request)`

- **OnSuccess**: <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.diagnosticReportApi.searchDiagnosticReports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Bundle, ApiError&gt;</code>, with `result.value` of type <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DocumentReferenceApi

> Source: [DocumentReferenceApi](src/resources/document-reference-api.ts)

<details>
<summary><code>readDocumentReference(request: DocumentReferenceApi.ReadDocumentReferenceRequest, options?: RequestOptions): ApiPromise&lt;DocumentReference, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documentReferenceApi.readDocumentReference({ id: "some example string" });
  // TODO: Handle 'response' of type DocumentReference
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentReferenceApi
  .readDocumentReference({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentReference
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The logical id of the resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentReferenceApi.readDocumentReference(request)`

- **OnSuccess**: <code>[DocumentReference](src/models/document-reference.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.documentReferenceApi.readDocumentReference(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentReference, ApiError&gt;</code>, with `result.value` of type <code>[DocumentReference](src/models/document-reference.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchDocumentReferences(request?: DocumentReferenceApi.SearchDocumentReferencesRequest, options?: RequestOptions): ApiPromise&lt;Bundle, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documentReferenceApi.searchDocumentReferences();
  // TODO: Handle 'response' of type Bundle
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documentReferenceApi.searchDocumentReferences().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Bundle
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>patient?</code> | <code>string</code> | Reference to the subject Patient (e.g. Patient/{id}). |
| <code>type?</code> | <code>string</code> | - |
| <code>count?</code> | <code>number</code> | Number of results per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documentReferenceApi.searchDocumentReferences(request)`

- **OnSuccess**: <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.documentReferenceApi.searchDocumentReferences(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Bundle, ApiError&gt;</code>, with `result.value` of type <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Observation

> Source: [Observation](src/resources/observation.ts)

<details>
<summary><code>searchObservations(request?: Observation.SearchObservationsRequest, options?: RequestOptions): ApiPromise&lt;Bundle, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.observation.searchObservations();
  // TODO: Handle 'response' of type Bundle
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.observation.searchObservations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Bundle
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>patient?</code> | <code>string</code> | Reference to the subject Patient (e.g. Patient/{id}). |
| <code>code?</code> | <code>string</code> | - |
| <code>count?</code> | <code>number</code> | Number of results per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.observation.searchObservations(request)`

- **OnSuccess**: <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.observation.searchObservations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Bundle, ApiError&gt;</code>, with `result.value` of type <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PatientApi

> Source: [PatientApi](src/resources/patient-api.ts)

<details>
<summary><code>createPatient(request: PatientApi.CreatePatientRequest, options?: RequestOptions): ApiPromise&lt;Patient, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.patientApi.createPatient({ body: {} });
  // TODO: Handle 'response' of type Patient
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.patientApi.createPatient({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Patient
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Patient](src/models/patient.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.patientApi.createPatient(request)`

- **OnSuccess**: <code>[Patient](src/models/patient.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.patientApi.createPatient(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Patient, ApiError&gt;</code>, with `result.value` of type <code>[Patient](src/models/patient.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patientEverything(request: PatientApi.PatientEverythingRequest, options?: RequestOptions): ApiPromise&lt;Bundle, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

FHIR $everything operation returning a Bundle of all resources in the patient compartment, including federated records retrieved across the national exchange network.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.patientApi.patientEverything({ id: "some example string" });
  // TODO: Handle 'response' of type Bundle
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.patientApi.patientEverything({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Bundle
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The logical id of the resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.patientApi.patientEverything(request)`

- **OnSuccess**: <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.patientApi.patientEverything(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Bundle, ApiError&gt;</code>, with `result.value` of type <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readPatient(request: PatientApi.ReadPatientRequest, options?: RequestOptions): ApiPromise&lt;Patient, PatientApi.ReadPatientError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.patientApi.readPatient({ id: "some example string" });
  // TODO: Handle 'response' of type Patient
} catch (err) {
  // TODO: Handle 'err' of type PatientApi.ReadPatientError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.patientApi.readPatient({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Patient
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The logical id of the resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.patientApi.readPatient(request)`

- **OnSuccess**: <code>[Patient](src/models/patient.ts)</code>
- **OnError**: throws <code>[PatientApi.ReadPatientError](src/resources/patient-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.patientApi.readPatient(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Patient, PatientApi.ReadPatientError&gt;</code>, with `result.value` of type <code>[Patient](src/models/patient.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchPatients(request?: PatientApi.SearchPatientsRequest, options?: RequestOptions): ApiPromise&lt;Bundle, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.patientApi.searchPatients();
  // TODO: Handle 'response' of type Bundle
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.patientApi.searchPatients().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Bundle
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>identifier?</code> | <code>string</code> | A resource identifier (system\|value). |
| <code>name?</code> | <code>string</code> | A portion of the name. |
| <code>birthdate?</code> | <code>string</code> (date) | - |
| <code>gender?</code> | <code>string</code> | - |
| <code>count?</code> | <code>number</code> | Number of results per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.patientApi.searchPatients(request)`

- **OnSuccess**: <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.patientApi.searchPatients(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Bundle, ApiError&gt;</code>, with `result.value` of type <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePatient(request: PatientApi.UpdatePatientRequest, options?: RequestOptions): ApiPromise&lt;Patient, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.patientApi.updatePatient({ id: "some example string", body: {} });
  // TODO: Handle 'response' of type Patient
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.patientApi.updatePatient({ id: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Patient
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The logical id of the resource. |
| <code>body</code> | <code>[Patient](src/models/patient.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.patientApi.updatePatient(request)`

- **OnSuccess**: <code>[Patient](src/models/patient.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.patientApi.updatePatient(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Patient, ApiError&gt;</code>, with `result.value` of type <code>[Patient](src/models/patient.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PractitionerApi

> Source: [PractitionerApi](src/resources/practitioner-api.ts)

<details>
<summary><code>readPractitioner(request: PractitionerApi.ReadPractitionerRequest, options?: RequestOptions): ApiPromise&lt;Practitioner, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.practitionerApi.readPractitioner({ id: "some example string" });
  // TODO: Handle 'response' of type Practitioner
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.practitionerApi.readPractitioner({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Practitioner
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The logical id of the resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.practitionerApi.readPractitioner(request)`

- **OnSuccess**: <code>[Practitioner](src/models/practitioner.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.practitionerApi.readPractitioner(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Practitioner, ApiError&gt;</code>, with `result.value` of type <code>[Practitioner](src/models/practitioner.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchPractitioners(request?: PractitionerApi.SearchPractitionersRequest, options?: RequestOptions): ApiPromise&lt;Bundle, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.practitionerApi.searchPractitioners();
  // TODO: Handle 'response' of type Bundle
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.practitionerApi.searchPractitioners().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Bundle
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>identifier?</code> | <code>string</code> | A resource identifier (system\|value). |
| <code>name?</code> | <code>string</code> | A portion of the name. |
| <code>count?</code> | <code>number</code> | Number of results per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.practitionerApi.searchPractitioners(request)`

- **OnSuccess**: <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.practitionerApi.searchPractitioners(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Bundle, ApiError&gt;</code>, with `result.value` of type <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RequestGroupApi

> Source: [RequestGroupApi](src/resources/request-group-api.ts)

<details>
<summary><code>createRequestGroup(request: RequestGroupApi.CreateRequestGroupRequest, options?: RequestOptions): ApiPromise&lt;RequestGroup, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a RequestGroup parent order that nests one or more ServiceRequest resources (individual tests) for submission to a participating diagnostic laboratory or radiology partner.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.requestGroupApi.createRequestGroup({ body: {} });
  // TODO: Handle 'response' of type RequestGroup
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.requestGroupApi.createRequestGroup({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RequestGroup
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RequestGroup](src/models/request-group.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.requestGroupApi.createRequestGroup(request)`

- **OnSuccess**: <code>[RequestGroup](src/models/request-group.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.requestGroupApi.createRequestGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RequestGroup, ApiError&gt;</code>, with `result.value` of type <code>[RequestGroup](src/models/request-group.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readRequestGroup(request: RequestGroupApi.ReadRequestGroupRequest, options?: RequestOptions): ApiPromise&lt;RequestGroup, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.requestGroupApi.readRequestGroup({ id: "some example string" });
  // TODO: Handle 'response' of type RequestGroup
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.requestGroupApi.readRequestGroup({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RequestGroup
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The logical id of the resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.requestGroupApi.readRequestGroup(request)`

- **OnSuccess**: <code>[RequestGroup](src/models/request-group.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.requestGroupApi.readRequestGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RequestGroup, ApiError&gt;</code>, with `result.value` of type <code>[RequestGroup](src/models/request-group.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchRequestGroups(request?: RequestGroupApi.SearchRequestGroupsRequest, options?: RequestOptions): ApiPromise&lt;Bundle, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.requestGroupApi.searchRequestGroups();
  // TODO: Handle 'response' of type Bundle
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.requestGroupApi.searchRequestGroups().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Bundle
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>patient?</code> | <code>string</code> | Reference to the subject Patient (e.g. Patient/{id}). |
| <code>count?</code> | <code>number</code> | Number of results per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.requestGroupApi.searchRequestGroups(request)`

- **OnSuccess**: <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.requestGroupApi.searchRequestGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Bundle, ApiError&gt;</code>, with `result.value` of type <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceRequestApi

> Source: [ServiceRequestApi](src/resources/service-request-api.ts)

<details>
<summary><code>createServiceRequest(request: ServiceRequestApi.CreateServiceRequestRequest, options?: RequestOptions): ApiPromise&lt;ServiceRequest, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceRequestApi.createServiceRequest({ body: {} });
  // TODO: Handle 'response' of type ServiceRequest
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceRequestApi.createServiceRequest({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceRequest
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ServiceRequest](src/models/service-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceRequestApi.createServiceRequest(request)`

- **OnSuccess**: <code>[ServiceRequest](src/models/service-request.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.serviceRequestApi.createServiceRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceRequest, ApiError&gt;</code>, with `result.value` of type <code>[ServiceRequest](src/models/service-request.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readServiceRequest(request: ServiceRequestApi.ReadServiceRequestRequest, options?: RequestOptions): ApiPromise&lt;ServiceRequest, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceRequestApi.readServiceRequest({ id: "some example string" });
  // TODO: Handle 'response' of type ServiceRequest
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceRequestApi.readServiceRequest({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServiceRequest
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The logical id of the resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceRequestApi.readServiceRequest(request)`

- **OnSuccess**: <code>[ServiceRequest](src/models/service-request.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.serviceRequestApi.readServiceRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServiceRequest, ApiError&gt;</code>, with `result.value` of type <code>[ServiceRequest](src/models/service-request.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchServiceRequests(request?: ServiceRequestApi.SearchServiceRequestsRequest, options?: RequestOptions): ApiPromise&lt;Bundle, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serviceRequestApi.searchServiceRequests();
  // TODO: Handle 'response' of type Bundle
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serviceRequestApi.searchServiceRequests().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Bundle
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>patient?</code> | <code>string</code> | Reference to the subject Patient (e.g. Patient/{id}). |
| <code>status?</code> | <code>string</code> | - |
| <code>count?</code> | <code>number</code> | Number of results per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.serviceRequestApi.searchServiceRequests(request)`

- **OnSuccess**: <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.serviceRequestApi.searchServiceRequests(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Bundle, ApiError&gt;</code>, with `result.value` of type <code>[Bundle](src/models/bundle.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[HealthGorillaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

