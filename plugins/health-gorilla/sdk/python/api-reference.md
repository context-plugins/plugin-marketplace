# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [HealthGorillaClient](health_gorilla/client.py)

## BinaryApi

> Source: [BinaryApi](health_gorilla/apis/binary_api.py)

<details>
<summary><code>def read_binary(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Binary</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.binary_api.read_binary("some example string")
    # TODO: Handle 'response' of type Binary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.binary_api.read_binary("some example string")
    # TODO: Handle 'response' of type Binary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The logical id of the resource. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Binary](health_gorilla/models/binary.py)</code> -- The document content (CCDA, PDF, or other format).

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CapabilityStatementApi

> Source: [CapabilityStatementApi](health_gorilla/apis/capability_statement_api.py)

<details>
<summary><code>def get_capability_statement(*, request_options: RequestOptionsOrDict | None = None) -> CapabilityStatement</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the FHIR R4 CapabilityStatement describing supported resources, search parameters, operations, and authentication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.capability_statement_api.get_capability_statement()
    # TODO: Handle 'response' of type CapabilityStatement
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.capability_statement_api.get_capability_statement()
    # TODO: Handle 'response' of type CapabilityStatement
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CapabilityStatement](health_gorilla/models/capability_statement.py)</code> -- OK

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CoverageApi

> Source: [CoverageApi](health_gorilla/apis/coverage_api.py)

<details>
<summary><code>def read_coverage(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Coverage</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.coverage_api.read_coverage("some example string")
    # TODO: Handle 'response' of type Coverage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.coverage_api.read_coverage("some example string")
    # TODO: Handle 'response' of type Coverage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The logical id of the resource. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Coverage](health_gorilla/models/coverage.py)</code> -- OK

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_coverage(*, patient: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Bundle</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.coverage_api.search_coverage()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.coverage_api.search_coverage()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>patient</code> | <code>str \| None</code> | Reference to the subject Patient (e.g. Patient/{id}).<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of results per page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of Coverage resources.

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DiagnosticReportApi

> Source: [DiagnosticReportApi](health_gorilla/apis/diagnostic_report_api.py)

<details>
<summary><code>def read_diagnostic_report(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> DiagnosticReport</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.diagnostic_report_api.read_diagnostic_report("some example string")
    # TODO: Handle 'response' of type DiagnosticReport
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.diagnostic_report_api.read_diagnostic_report("some example string")
    # TODO: Handle 'response' of type DiagnosticReport
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The logical id of the resource. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DiagnosticReport](health_gorilla/models/diagnostic_report.py)</code> -- OK

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_diagnostic_reports(*, patient: str | None = None, category: str | None = None, date: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Bundle</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.diagnostic_report_api.search_diagnostic_reports()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.diagnostic_report_api.search_diagnostic_reports()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>patient</code> | <code>str \| None</code> | Reference to the subject Patient (e.g. Patient/{id}).<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>date</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of results per page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of DiagnosticReport resources.

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DocumentReferenceApi

> Source: [DocumentReferenceApi](health_gorilla/apis/document_reference_api.py)

<details>
<summary><code>def read_document_reference(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> DocumentReference</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.document_reference_api.read_document_reference("some example string")
    # TODO: Handle 'response' of type DocumentReference
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.document_reference_api.read_document_reference("some example string")
    # TODO: Handle 'response' of type DocumentReference
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The logical id of the resource. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocumentReference](health_gorilla/models/document_reference.py)</code> -- OK

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_document_references(*, patient: str | None = None, type_: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Bundle</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.document_reference_api.search_document_references()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.document_reference_api.search_document_references()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>patient</code> | <code>str \| None</code> | Reference to the subject Patient (e.g. Patient/{id}).<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of results per page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of DocumentReference resources.

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Observation

> Source: [Observation](health_gorilla/apis/observation.py)

<details>
<summary><code>def search_observations(*, patient: str | None = None, code: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Bundle</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.observation.search_observations()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.observation.search_observations()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>patient</code> | <code>str \| None</code> | Reference to the subject Patient (e.g. Patient/{id}).<br>**Default**: <code>None</code> |
| <code>code</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of results per page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of Observation resources.

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PatientApi

> Source: [PatientApi](health_gorilla/apis/patient_api.py)

<details>
<summary><code>def create_patient(body: Patient | PatientDict, *, request_options: RequestOptionsOrDict | None = None) -> Patient</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.patient_api.create_patient(Patient())
    # TODO: Handle 'response' of type Patient
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.patient_api.create_patient(Patient())
    # TODO: Handle 'response' of type Patient
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Patient](health_gorilla/models/patient.py) \| [PatientDict](health_gorilla/models/patient.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Patient](health_gorilla/models/patient.py)</code> -- Created

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patient_everything(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Bundle</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

FHIR $everything operation returning a Bundle of all resources in the patient compartment, including federated records retrieved across the national exchange network.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.patient_api.patient_everything("some example string")
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.patient_api.patient_everything("some example string")
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The logical id of the resource. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of patient-scoped resources.

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def read_patient(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Patient</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.patient_api.read_patient("some example string")
    # TODO: Handle 'response' of type Patient
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReadPatientErrorBody
```

**Async**

```python
try:
    response = await async_client.patient_api.read_patient("some example string")
    # TODO: Handle 'response' of type Patient
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReadPatientErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The logical id of the resource. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Patient](health_gorilla/models/patient.py)</code> -- OK

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[ReadPatientErrorBody](health_gorilla/errors/read_patient_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[OperationOutcome](health_gorilla/models/operation_outcome.py)</code> |
| anything unmapped | <code>[RawError](health_gorilla/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_patients(*, identifier: str | None = None, name: str | None = None, birthdate: Date | None = None, gender: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Bundle</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.patient_api.search_patients()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.patient_api.search_patients()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>identifier</code> | <code>str \| None</code> | A resource identifier (system\|value).<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | A portion of the name.<br>**Default**: <code>None</code> |
| <code>birthdate</code> | <code>Date \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>gender</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of results per page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of matching Patient resources.

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_patient(id_: str, body: Patient | PatientDict, *, request_options: RequestOptionsOrDict | None = None) -> Patient</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.patient_api.update_patient("some example string", Patient())
    # TODO: Handle 'response' of type Patient
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.patient_api.update_patient("some example string", Patient())
    # TODO: Handle 'response' of type Patient
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The logical id of the resource. |
| <code>body</code> | <code>[Patient](health_gorilla/models/patient.py) \| [PatientDict](health_gorilla/models/patient.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Patient](health_gorilla/models/patient.py)</code> -- OK

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PractitionerApi

> Source: [PractitionerApi](health_gorilla/apis/practitioner_api.py)

<details>
<summary><code>def read_practitioner(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Practitioner</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.practitioner_api.read_practitioner("some example string")
    # TODO: Handle 'response' of type Practitioner
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.practitioner_api.read_practitioner("some example string")
    # TODO: Handle 'response' of type Practitioner
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The logical id of the resource. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Practitioner](health_gorilla/models/practitioner.py)</code> -- OK

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_practitioners(*, identifier: str | None = None, name: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Bundle</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.practitioner_api.search_practitioners()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.practitioner_api.search_practitioners()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>identifier</code> | <code>str \| None</code> | A resource identifier (system\|value).<br>**Default**: <code>None</code> |
| <code>name</code> | <code>str \| None</code> | A portion of the name.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of results per page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of Practitioner resources.

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RequestGroupApi

> Source: [RequestGroupApi](health_gorilla/apis/request_group_api.py)

<details>
<summary><code>def create_request_group(body: RequestGroup | RequestGroupDict, *, request_options: RequestOptionsOrDict | None = None) -> RequestGroup</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a RequestGroup parent order that nests one or more ServiceRequest resources (individual tests) for submission to a participating diagnostic laboratory or radiology partner.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.request_group_api.create_request_group(RequestGroup())
    # TODO: Handle 'response' of type RequestGroup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.request_group_api.create_request_group(RequestGroup())
    # TODO: Handle 'response' of type RequestGroup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RequestGroup](health_gorilla/models/request_group.py) \| [RequestGroupDict](health_gorilla/models/request_group.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequestGroup](health_gorilla/models/request_group.py)</code> -- Created

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def read_request_group(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> RequestGroup</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.request_group_api.read_request_group("some example string")
    # TODO: Handle 'response' of type RequestGroup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.request_group_api.read_request_group("some example string")
    # TODO: Handle 'response' of type RequestGroup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The logical id of the resource. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequestGroup](health_gorilla/models/request_group.py)</code> -- OK

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_request_groups(*, patient: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Bundle</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.request_group_api.search_request_groups()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.request_group_api.search_request_groups()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>patient</code> | <code>str \| None</code> | Reference to the subject Patient (e.g. Patient/{id}).<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of results per page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of RequestGroup resources.

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceRequestApi

> Source: [ServiceRequestApi](health_gorilla/apis/service_request_api.py)

<details>
<summary><code>def create_service_request(body: ServiceRequest | ServiceRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ServiceRequest</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.service_request_api.create_service_request(ServiceRequest())
    # TODO: Handle 'response' of type ServiceRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.service_request_api.create_service_request(ServiceRequest())
    # TODO: Handle 'response' of type ServiceRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ServiceRequest](health_gorilla/models/service_request.py) \| [ServiceRequestDict](health_gorilla/models/service_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceRequest](health_gorilla/models/service_request.py)</code> -- Created

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def read_service_request(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ServiceRequest</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.service_request_api.read_service_request("some example string")
    # TODO: Handle 'response' of type ServiceRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.service_request_api.read_service_request("some example string")
    # TODO: Handle 'response' of type ServiceRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The logical id of the resource. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceRequest](health_gorilla/models/service_request.py)</code> -- OK

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_service_requests(*, patient: str | None = None, status: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Bundle</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.service_request_api.search_service_requests()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.service_request_api.search_service_requests()
    # TODO: Handle 'response' of type Bundle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>patient</code> | <code>str \| None</code> | Reference to the subject Patient (e.g. Patient/{id}).<br>**Default**: <code>None</code> |
| <code>status</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of results per page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](health_gorilla/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of ServiceRequest resources.

**OnError**: <code>[ApiError](health_gorilla/core/exceptions.py)&#91;[RawError](health_gorilla/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

