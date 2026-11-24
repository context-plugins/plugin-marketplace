# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [HealthGorillaClient](health_gorilla/client.py)

## BinaryApi

> Source: [BinaryApi](health_gorilla/apis/binary_api.py)

<details>
<summary><code>def read_binary(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Binary, RawError]</code></summary>

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
result = client.binary_api.with_raw_response.read_binary("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Binary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.binary_api.with_raw_response.read_binary("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Binary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[Binary](health_gorilla/models/binary.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Binary](health_gorilla/models/binary.py)</code> -- The document content (CCDA, PDF, or other format).

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CapabilityStatementApi

> Source: [CapabilityStatementApi](health_gorilla/apis/capability_statement_api.py)

<details>
<summary><code>def get_capability_statement(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CapabilityStatement, RawError]</code></summary>

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
result = client.capability_statement_api.with_raw_response.get_capability_statement()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CapabilityStatement
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.capability_statement_api.with_raw_response.get_capability_statement()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CapabilityStatement
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[CapabilityStatement](health_gorilla/models/capability_statement.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[CapabilityStatement](health_gorilla/models/capability_statement.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CoverageApi

> Source: [CoverageApi](health_gorilla/apis/coverage_api.py)

<details>
<summary><code>def read_coverage(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Coverage, RawError]</code></summary>

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
result = client.coverage_api.with_raw_response.read_coverage("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Coverage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.coverage_api.with_raw_response.read_coverage("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Coverage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[Coverage](health_gorilla/models/coverage.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Coverage](health_gorilla/models/coverage.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_coverage(*, patient: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Bundle, RawError]</code></summary>

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
result = client.coverage_api.with_raw_response.search_coverage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.coverage_api.with_raw_response.search_coverage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[Bundle](health_gorilla/models/bundle.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of Coverage resources.

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DiagnosticReportApi

> Source: [DiagnosticReportApi](health_gorilla/apis/diagnostic_report_api.py)

<details>
<summary><code>def read_diagnostic_report(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DiagnosticReport, RawError]</code></summary>

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
result = client.diagnostic_report_api.with_raw_response.read_diagnostic_report("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DiagnosticReport
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.diagnostic_report_api.with_raw_response.read_diagnostic_report("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DiagnosticReport
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[DiagnosticReport](health_gorilla/models/diagnostic_report.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[DiagnosticReport](health_gorilla/models/diagnostic_report.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_diagnostic_reports(*, patient: str | None = None, category: str | None = None, date: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Bundle, RawError]</code></summary>

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
result = client.diagnostic_report_api.with_raw_response.search_diagnostic_reports()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.diagnostic_report_api.with_raw_response.search_diagnostic_reports()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[Bundle](health_gorilla/models/bundle.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of DiagnosticReport resources.

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DocumentReferenceApi

> Source: [DocumentReferenceApi](health_gorilla/apis/document_reference_api.py)

<details>
<summary><code>def read_document_reference(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DocumentReference, RawError]</code></summary>

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
result = client.document_reference_api.with_raw_response.read_document_reference("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentReference
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.document_reference_api.with_raw_response.read_document_reference("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocumentReference
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[DocumentReference](health_gorilla/models/document_reference.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[DocumentReference](health_gorilla/models/document_reference.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_document_references(*, patient: str | None = None, type_: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Bundle, RawError]</code></summary>

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
result = client.document_reference_api.with_raw_response.search_document_references()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.document_reference_api.with_raw_response.search_document_references()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[Bundle](health_gorilla/models/bundle.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of DocumentReference resources.

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Observation

> Source: [Observation](health_gorilla/apis/observation.py)

<details>
<summary><code>def search_observations(*, patient: str | None = None, code: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Bundle, RawError]</code></summary>

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
result = client.observation.with_raw_response.search_observations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.observation.with_raw_response.search_observations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[Bundle](health_gorilla/models/bundle.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of Observation resources.

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PatientApi

> Source: [PatientApi](health_gorilla/apis/patient_api.py)

<details>
<summary><code>def create_patient(body: Patient | PatientDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Patient, RawError]</code></summary>

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
result = client.patient_api.with_raw_response.create_patient(Patient())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Patient
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.patient_api.with_raw_response.create_patient(Patient())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Patient
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[Patient](health_gorilla/models/patient.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Patient](health_gorilla/models/patient.py)</code> -- Created

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def patient_everything(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Bundle, RawError]</code></summary>

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
result = client.patient_api.with_raw_response.patient_everything("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.patient_api.with_raw_response.patient_everything("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[Bundle](health_gorilla/models/bundle.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of patient-scoped resources.

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def read_patient(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Patient, ReadPatientErrorBody]</code></summary>

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
result = client.patient_api.with_raw_response.read_patient("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Patient
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReadPatientErrorBody
```

**Async**

```python
result = await async_client.patient_api.with_raw_response.read_patient("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Patient
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReadPatientErrorBody
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[Patient](health_gorilla/models/patient.py), [ReadPatientErrorBody](health_gorilla/errors/read_patient_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Patient](health_gorilla/models/patient.py)</code> -- OK

**On `Failure`**: `error` is <code>[ReadPatientErrorBody](health_gorilla/errors/read_patient_error.py)</code>

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
<summary><code>def search_patients(*, identifier: str | None = None, name: str | None = None, birthdate: Date | None = None, gender: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Bundle, RawError]</code></summary>

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
result = client.patient_api.with_raw_response.search_patients()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.patient_api.with_raw_response.search_patients()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[Bundle](health_gorilla/models/bundle.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of matching Patient resources.

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_patient(id_: str, body: Patient | PatientDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Patient, RawError]</code></summary>

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
result = client.patient_api.with_raw_response.update_patient("some example string", Patient())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Patient
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.patient_api.with_raw_response.update_patient("some example string", Patient())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Patient
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[Patient](health_gorilla/models/patient.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Patient](health_gorilla/models/patient.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PractitionerApi

> Source: [PractitionerApi](health_gorilla/apis/practitioner_api.py)

<details>
<summary><code>def read_practitioner(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Practitioner, RawError]</code></summary>

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
result = client.practitioner_api.with_raw_response.read_practitioner("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Practitioner
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.practitioner_api.with_raw_response.read_practitioner("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Practitioner
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[Practitioner](health_gorilla/models/practitioner.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Practitioner](health_gorilla/models/practitioner.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_practitioners(*, identifier: str | None = None, name: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Bundle, RawError]</code></summary>

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
result = client.practitioner_api.with_raw_response.search_practitioners()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.practitioner_api.with_raw_response.search_practitioners()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[Bundle](health_gorilla/models/bundle.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of Practitioner resources.

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RequestGroupApi

> Source: [RequestGroupApi](health_gorilla/apis/request_group_api.py)

<details>
<summary><code>def create_request_group(body: RequestGroup | RequestGroupDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RequestGroup, RawError]</code></summary>

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
result = client.request_group_api.with_raw_response.create_request_group(RequestGroup())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RequestGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.request_group_api.with_raw_response.create_request_group(RequestGroup())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RequestGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[RequestGroup](health_gorilla/models/request_group.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[RequestGroup](health_gorilla/models/request_group.py)</code> -- Created

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def read_request_group(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RequestGroup, RawError]</code></summary>

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
result = client.request_group_api.with_raw_response.read_request_group("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RequestGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.request_group_api.with_raw_response.read_request_group("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RequestGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[RequestGroup](health_gorilla/models/request_group.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[RequestGroup](health_gorilla/models/request_group.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_request_groups(*, patient: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Bundle, RawError]</code></summary>

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
result = client.request_group_api.with_raw_response.search_request_groups()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.request_group_api.with_raw_response.search_request_groups()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[Bundle](health_gorilla/models/bundle.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of RequestGroup resources.

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceRequestApi

> Source: [ServiceRequestApi](health_gorilla/apis/service_request_api.py)

<details>
<summary><code>def create_service_request(body: ServiceRequest | ServiceRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ServiceRequest, RawError]</code></summary>

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
result = client.service_request_api.with_raw_response.create_service_request(ServiceRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.service_request_api.with_raw_response.create_service_request(ServiceRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[ServiceRequest](health_gorilla/models/service_request.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ServiceRequest](health_gorilla/models/service_request.py)</code> -- Created

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def read_service_request(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ServiceRequest, RawError]</code></summary>

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
result = client.service_request_api.with_raw_response.read_service_request("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.service_request_api.with_raw_response.read_service_request("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ServiceRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[ServiceRequest](health_gorilla/models/service_request.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ServiceRequest](health_gorilla/models/service_request.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_service_requests(*, patient: str | None = None, status: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Bundle, RawError]</code></summary>

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
result = client.service_request_api.with_raw_response.search_service_requests()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.service_request_api.with_raw_response.search_service_requests()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Bundle
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
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

**Returns**: <code>[ApiResult](health_gorilla/core/results.py)&#91;[Bundle](health_gorilla/models/bundle.py), [RawError](health_gorilla/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Bundle](health_gorilla/models/bundle.py)</code> -- A FHIR Bundle of ServiceRequest resources.

**On `Failure`**: `error` is <code>[RawError](health_gorilla/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

