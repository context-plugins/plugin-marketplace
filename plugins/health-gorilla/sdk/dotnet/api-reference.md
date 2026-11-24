# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [HealthGorillaClient](src/HealthGorilla/HealthGorillaClient.cs)

## BinaryApi

> Source: [BinaryApi](src/HealthGorilla/Api/BinaryApi.cs)

<details>
<summary><code>Task&lt;Binary&gt; ReadBinary(ReadBinaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BinaryApi.ReadBinary(new ReadBinaryRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Binary
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReadBinaryRequest](src/HealthGorilla/Requests/BinaryApi/ReadBinaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Binary](src/HealthGorilla/Models/Binary.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CapabilityStatementApi

> Source: [CapabilityStatementApi](src/HealthGorilla/Api/CapabilityStatementApi.cs)

<details>
<summary><code>Task&lt;CapabilityStatement&gt; GetCapabilityStatement(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CapabilityStatementApi.GetCapabilityStatement();
    // TODO: Handle 'response' of type CapabilityStatement
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CapabilityStatement](src/HealthGorilla/Models/CapabilityStatement.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CoverageApi

> Source: [CoverageApi](src/HealthGorilla/Api/CoverageApi.cs)

<details>
<summary><code>Task&lt;Coverage&gt; ReadCoverage(ReadCoverageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CoverageApi.ReadCoverage(new ReadCoverageRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Coverage
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReadCoverageRequest](src/HealthGorilla/Requests/CoverageApi/ReadCoverageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Coverage](src/HealthGorilla/Models/Coverage.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Bundle&gt; SearchCoverage(SearchCoverageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CoverageApi.SearchCoverage(new SearchCoverageRequest());
    // TODO: Handle 'response' of type Bundle
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchCoverageRequest](src/HealthGorilla/Requests/CoverageApi/SearchCoverageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](src/HealthGorilla/Models/Bundle.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DiagnosticReportApi

> Source: [DiagnosticReportApi](src/HealthGorilla/Api/DiagnosticReportApi.cs)

<details>
<summary><code>Task&lt;DiagnosticReport&gt; ReadDiagnosticReport(ReadDiagnosticReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DiagnosticReportApi.ReadDiagnosticReport(new ReadDiagnosticReportRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type DiagnosticReport
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReadDiagnosticReportRequest](src/HealthGorilla/Requests/DiagnosticReportApi/ReadDiagnosticReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DiagnosticReport](src/HealthGorilla/Models/DiagnosticReport.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Bundle&gt; SearchDiagnosticReports(SearchDiagnosticReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DiagnosticReportApi.SearchDiagnosticReports(new SearchDiagnosticReportsRequest());
    // TODO: Handle 'response' of type Bundle
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchDiagnosticReportsRequest](src/HealthGorilla/Requests/DiagnosticReportApi/SearchDiagnosticReportsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](src/HealthGorilla/Models/Bundle.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DocumentReferenceApi

> Source: [DocumentReferenceApi](src/HealthGorilla/Api/DocumentReferenceApi.cs)

<details>
<summary><code>Task&lt;DocumentReference&gt; ReadDocumentReference(ReadDocumentReferenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DocumentReferenceApi.ReadDocumentReference(new ReadDocumentReferenceRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type DocumentReference
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReadDocumentReferenceRequest](src/HealthGorilla/Requests/DocumentReferenceApi/ReadDocumentReferenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocumentReference](src/HealthGorilla/Models/DocumentReference.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Bundle&gt; SearchDocumentReferences(SearchDocumentReferencesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DocumentReferenceApi.SearchDocumentReferences(new SearchDocumentReferencesRequest());
    // TODO: Handle 'response' of type Bundle
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchDocumentReferencesRequest](src/HealthGorilla/Requests/DocumentReferenceApi/SearchDocumentReferencesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](src/HealthGorilla/Models/Bundle.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Observation

> Source: [Observation](src/HealthGorilla/Api/Observation.cs)

<details>
<summary><code>Task&lt;Bundle&gt; SearchObservations(SearchObservationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Observation.SearchObservations(new SearchObservationsRequest());
    // TODO: Handle 'response' of type Bundle
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchObservationsRequest](src/HealthGorilla/Requests/Observation/SearchObservationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](src/HealthGorilla/Models/Bundle.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PatientApi

> Source: [PatientApi](src/HealthGorilla/Api/PatientApi.cs)

<details>
<summary><code>Task&lt;Patient&gt; CreatePatient(CreatePatientRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PatientApi.CreatePatient(new CreatePatientRequest { Body = new Patient() });
    // TODO: Handle 'response' of type Patient
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePatientRequest](src/HealthGorilla/Requests/PatientApi/CreatePatientRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Patient](src/HealthGorilla/Models/Patient.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Bundle&gt; PatientEverything(PatientEverythingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PatientApi.PatientEverything(new PatientEverythingRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type Bundle
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PatientEverythingRequest](src/HealthGorilla/Requests/PatientApi/PatientEverythingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](src/HealthGorilla/Models/Bundle.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Patient&gt; ReadPatient(ReadPatientRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PatientApi.ReadPatient(new ReadPatientRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Patient
}
catch (ApiException<ReadPatientError> ex)
{
    if (ex.Error.TryGetOperationOutcome(out var error))
    {
        // TODO: Handle 'error' of type OperationOutcome
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReadPatientRequest](src/HealthGorilla/Requests/PatientApi/ReadPatientRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Patient](src/HealthGorilla/Models/Patient.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[ReadPatientError](src/HealthGorilla/Errors/ReadPatientError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Bundle&gt; SearchPatients(SearchPatientsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PatientApi.SearchPatients(new SearchPatientsRequest());
    // TODO: Handle 'response' of type Bundle
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchPatientsRequest](src/HealthGorilla/Requests/PatientApi/SearchPatientsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](src/HealthGorilla/Models/Bundle.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Patient&gt; UpdatePatient(UpdatePatientRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PatientApi.UpdatePatient(new UpdatePatientRequest
    {
        Id = "some example string",
        Body = new Patient(),
    });
    // TODO: Handle 'response' of type Patient
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePatientRequest](src/HealthGorilla/Requests/PatientApi/UpdatePatientRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Patient](src/HealthGorilla/Models/Patient.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PractitionerApi

> Source: [PractitionerApi](src/HealthGorilla/Api/PractitionerApi.cs)

<details>
<summary><code>Task&lt;Practitioner&gt; ReadPractitioner(ReadPractitionerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PractitionerApi.ReadPractitioner(new ReadPractitionerRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type Practitioner
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReadPractitionerRequest](src/HealthGorilla/Requests/PractitionerApi/ReadPractitionerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Practitioner](src/HealthGorilla/Models/Practitioner.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Bundle&gt; SearchPractitioners(SearchPractitionersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PractitionerApi.SearchPractitioners(new SearchPractitionersRequest());
    // TODO: Handle 'response' of type Bundle
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchPractitionersRequest](src/HealthGorilla/Requests/PractitionerApi/SearchPractitionersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](src/HealthGorilla/Models/Bundle.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RequestGroupApi

> Source: [RequestGroupApi](src/HealthGorilla/Api/RequestGroupApi.cs)

<details>
<summary><code>Task&lt;RequestGroup&gt; CreateRequestGroup(CreateRequestGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.RequestGroupApi.CreateRequestGroup(new CreateRequestGroupRequest
    {
        Body = new RequestGroup(),
    });
    // TODO: Handle 'response' of type RequestGroup
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateRequestGroupRequest](src/HealthGorilla/Requests/RequestGroupApi/CreateRequestGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequestGroup](src/HealthGorilla/Models/RequestGroup.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RequestGroup&gt; ReadRequestGroup(ReadRequestGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RequestGroupApi.ReadRequestGroup(new ReadRequestGroupRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type RequestGroup
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReadRequestGroupRequest](src/HealthGorilla/Requests/RequestGroupApi/ReadRequestGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequestGroup](src/HealthGorilla/Models/RequestGroup.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Bundle&gt; SearchRequestGroups(SearchRequestGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RequestGroupApi.SearchRequestGroups(new SearchRequestGroupsRequest());
    // TODO: Handle 'response' of type Bundle
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchRequestGroupsRequest](src/HealthGorilla/Requests/RequestGroupApi/SearchRequestGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](src/HealthGorilla/Models/Bundle.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceRequestApi

> Source: [ServiceRequestApi](src/HealthGorilla/Api/ServiceRequestApi.cs)

<details>
<summary><code>Task&lt;ServiceRequest&gt; CreateServiceRequest(CreateServiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ServiceRequestApi.CreateServiceRequest(new CreateServiceRequest
    {
        Body = new ServiceRequest(),
    });
    // TODO: Handle 'response' of type ServiceRequest
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateServiceRequest](src/HealthGorilla/Requests/ServiceRequestApi/CreateServiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceRequest](src/HealthGorilla/Models/ServiceRequest.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ServiceRequest&gt; ReadServiceRequest(ReadServiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ServiceRequestApi.ReadServiceRequest(new ReadServiceRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ServiceRequest
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReadServiceRequest](src/HealthGorilla/Requests/ServiceRequestApi/ReadServiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceRequest](src/HealthGorilla/Models/ServiceRequest.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Bundle&gt; SearchServiceRequests(SearchServiceRequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ServiceRequestApi.SearchServiceRequests(new SearchServiceRequestsRequest());
    // TODO: Handle 'response' of type Bundle
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchServiceRequestsRequest](src/HealthGorilla/Requests/ServiceRequestApi/SearchServiceRequestsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bundle](src/HealthGorilla/Models/Bundle.cs)</code>

**OnError**: <code>[ApiException](src/HealthGorilla/Core/Exceptions/ApiException.cs)&lt;[RawError](src/HealthGorilla/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

