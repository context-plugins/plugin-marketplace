# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [GoogleCloudTalentSolutionClient](src/GoogleCloudTalentSolution/GoogleCloudTalentSolutionClient.cs)

<details>
<summary><code>Task&lt;Operation&gt; JobsProjectsOperationsGet(JobsProjectsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsOperationsGet(new JobsProjectsOperationsGetRequest
    {
        ProjectsId = "some example string",
        OperationsId = "some example string",
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<JobsProjectsOperationsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsOperationsGetRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsOperationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudTalentSolution/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsOperationsGetError](src/GoogleCloudTalentSolution/Errors/JobsProjectsOperationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClientEvent&gt; JobsProjectsTenantsClientEventsCreate(JobsProjectsTenantsClientEventsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in self service tools. Learn more about self service tools.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsClientEventsCreate(new JobsProjectsTenantsClientEventsCreateRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
        Body = new ClientEvent(),
    });
    // TODO: Handle 'response' of type ClientEvent
}
catch (ApiException<JobsProjectsTenantsClientEventsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsClientEventsCreateRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsClientEventsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClientEvent](src/GoogleCloudTalentSolution/Models/ClientEvent.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsClientEventsCreateError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsClientEventsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Company&gt; JobsProjectsTenantsCompaniesCreate(JobsProjectsTenantsCompaniesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new company entity.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsCompaniesCreate(new JobsProjectsTenantsCompaniesCreateRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
        Body = new Company(),
    });
    // TODO: Handle 'response' of type Company
}
catch (ApiException<JobsProjectsTenantsCompaniesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsCompaniesCreateRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsCompaniesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Company](src/GoogleCloudTalentSolution/Models/Company.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsCompaniesCreateError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsCompaniesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; JobsProjectsTenantsCompaniesDelete(JobsProjectsTenantsCompaniesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes specified company. Prerequisite: The company has no jobs associated with it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsCompaniesDelete(new JobsProjectsTenantsCompaniesDeleteRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
        CompaniesId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<JobsProjectsTenantsCompaniesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsCompaniesDeleteRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsCompaniesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsCompaniesDeleteError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsCompaniesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Company&gt; JobsProjectsTenantsCompaniesGet(JobsProjectsTenantsCompaniesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsCompaniesGet(new JobsProjectsTenantsCompaniesGetRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
        CompaniesId = "some example string",
    });
    // TODO: Handle 'response' of type Company
}
catch (ApiException<JobsProjectsTenantsCompaniesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsCompaniesGetRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsCompaniesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Company](src/GoogleCloudTalentSolution/Models/Company.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsCompaniesGetError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsCompaniesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListCompaniesResponse&gt; JobsProjectsTenantsCompaniesList(JobsProjectsTenantsCompaniesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all companies associated with the project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsCompaniesList(new JobsProjectsTenantsCompaniesListRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
    });
    // TODO: Handle 'response' of type ListCompaniesResponse
}
catch (ApiException<JobsProjectsTenantsCompaniesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsCompaniesListRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsCompaniesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListCompaniesResponse](src/GoogleCloudTalentSolution/Models/ListCompaniesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsCompaniesListError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsCompaniesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Company&gt; JobsProjectsTenantsCompaniesPatch(JobsProjectsTenantsCompaniesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsCompaniesPatch(new JobsProjectsTenantsCompaniesPatchRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
        CompaniesId = "some example string",
        Body = new Company(),
    });
    // TODO: Handle 'response' of type Company
}
catch (ApiException<JobsProjectsTenantsCompaniesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsCompaniesPatchRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsCompaniesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Company](src/GoogleCloudTalentSolution/Models/Company.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsCompaniesPatchError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsCompaniesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompleteQueryResponse&gt; JobsProjectsTenantsCompleteQuery(JobsProjectsTenantsCompleteQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsCompleteQuery(new JobsProjectsTenantsCompleteQueryRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
    });
    // TODO: Handle 'response' of type CompleteQueryResponse
}
catch (ApiException<JobsProjectsTenantsCompleteQueryError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsCompleteQueryRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsCompleteQueryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompleteQueryResponse](src/GoogleCloudTalentSolution/Models/CompleteQueryResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsCompleteQueryError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsCompleteQueryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Tenant&gt; JobsProjectsTenantsCreate(JobsProjectsTenantsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new tenant entity.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsCreate(new JobsProjectsTenantsCreateRequest
    {
        ProjectsId = "some example string",
        Body = new Tenant(),
    });
    // TODO: Handle 'response' of type Tenant
}
catch (ApiException<JobsProjectsTenantsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsCreateRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Tenant](src/GoogleCloudTalentSolution/Models/Tenant.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsCreateError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; JobsProjectsTenantsDelete(JobsProjectsTenantsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes specified tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsDelete(new JobsProjectsTenantsDeleteRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<JobsProjectsTenantsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsDeleteRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsDeleteError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Tenant&gt; JobsProjectsTenantsGet(JobsProjectsTenantsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves specified tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsGet(new JobsProjectsTenantsGetRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
    });
    // TODO: Handle 'response' of type Tenant
}
catch (ApiException<JobsProjectsTenantsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsGetRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Tenant](src/GoogleCloudTalentSolution/Models/Tenant.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsGetError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; JobsProjectsTenantsJobsBatchCreate(JobsProjectsTenantsJobsBatchCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Begins executing a batch create jobs operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsJobsBatchCreate(new JobsProjectsTenantsJobsBatchCreateRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
        Body = new BatchCreateJobsRequest(),
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<JobsProjectsTenantsJobsBatchCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsJobsBatchCreateRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsBatchCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudTalentSolution/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsJobsBatchCreateError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsBatchCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; JobsProjectsTenantsJobsBatchDelete(JobsProjectsTenantsJobsBatchDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Begins executing a batch delete jobs operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsJobsBatchDelete(new JobsProjectsTenantsJobsBatchDeleteRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
        Body = new BatchDeleteJobsRequest(),
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<JobsProjectsTenantsJobsBatchDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsJobsBatchDeleteRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsBatchDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudTalentSolution/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsJobsBatchDeleteError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsBatchDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; JobsProjectsTenantsJobsBatchUpdate(JobsProjectsTenantsJobsBatchUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Begins executing a batch update jobs operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsJobsBatchUpdate(new JobsProjectsTenantsJobsBatchUpdateRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
        Body = new BatchUpdateJobsRequest(),
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<JobsProjectsTenantsJobsBatchUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsJobsBatchUpdateRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsBatchUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudTalentSolution/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsJobsBatchUpdateError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsBatchUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Job&gt; JobsProjectsTenantsJobsCreate(JobsProjectsTenantsJobsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsJobsCreate(new JobsProjectsTenantsJobsCreateRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
        Body = new Job(),
    });
    // TODO: Handle 'response' of type Job
}
catch (ApiException<JobsProjectsTenantsJobsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsJobsCreateRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Job](src/GoogleCloudTalentSolution/Models/Job.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsJobsCreateError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; JobsProjectsTenantsJobsDelete(JobsProjectsTenantsJobsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsJobsDelete(new JobsProjectsTenantsJobsDeleteRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
        JobsId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<JobsProjectsTenantsJobsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsJobsDeleteRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsJobsDeleteError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Job&gt; JobsProjectsTenantsJobsGet(JobsProjectsTenantsJobsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsJobsGet(new JobsProjectsTenantsJobsGetRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
        JobsId = "some example string",
    });
    // TODO: Handle 'response' of type Job
}
catch (ApiException<JobsProjectsTenantsJobsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsJobsGetRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Job](src/GoogleCloudTalentSolution/Models/Job.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsJobsGetError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListJobsResponse&gt; JobsProjectsTenantsJobsList(JobsProjectsTenantsJobsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists jobs by filter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsJobsList(new JobsProjectsTenantsJobsListRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
    });
    // TODO: Handle 'response' of type ListJobsResponse
}
catch (ApiException<JobsProjectsTenantsJobsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsJobsListRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListJobsResponse](src/GoogleCloudTalentSolution/Models/ListJobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsJobsListError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Job&gt; JobsProjectsTenantsJobsPatch(JobsProjectsTenantsJobsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsJobsPatch(new JobsProjectsTenantsJobsPatchRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
        JobsId = "some example string",
        Body = new Job(),
    });
    // TODO: Handle 'response' of type Job
}
catch (ApiException<JobsProjectsTenantsJobsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsJobsPatchRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Job](src/GoogleCloudTalentSolution/Models/Job.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsJobsPatchError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchJobsResponse&gt; JobsProjectsTenantsJobsSearch(JobsProjectsTenantsJobsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsJobsSearch(new JobsProjectsTenantsJobsSearchRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
        Body = new SearchJobsRequest(),
    });
    // TODO: Handle 'response' of type SearchJobsResponse
}
catch (ApiException<JobsProjectsTenantsJobsSearchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsJobsSearchRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsSearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchJobsResponse](src/GoogleCloudTalentSolution/Models/SearchJobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsJobsSearchError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsSearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchJobsResponse&gt; JobsProjectsTenantsJobsSearchForAlert(JobsProjectsTenantsJobsSearchForAlertRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsJobsSearchForAlert(new JobsProjectsTenantsJobsSearchForAlertRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
        Body = new SearchJobsRequest(),
    });
    // TODO: Handle 'response' of type SearchJobsResponse
}
catch (ApiException<JobsProjectsTenantsJobsSearchForAlertError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsJobsSearchForAlertRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsJobsSearchForAlertRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchJobsResponse](src/GoogleCloudTalentSolution/Models/SearchJobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsJobsSearchForAlertError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsJobsSearchForAlertError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListTenantsResponse&gt; JobsProjectsTenantsList(JobsProjectsTenantsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all tenants associated with the project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsList(new JobsProjectsTenantsListRequest
    {
        ProjectsId = "some example string",
    });
    // TODO: Handle 'response' of type ListTenantsResponse
}
catch (ApiException<JobsProjectsTenantsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsListRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTenantsResponse](src/GoogleCloudTalentSolution/Models/ListTenantsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsListError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Tenant&gt; JobsProjectsTenantsPatch(JobsProjectsTenantsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates specified tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobsProjectsTenantsPatch(new JobsProjectsTenantsPatchRequest
    {
        ProjectsId = "some example string",
        TenantsId = "some example string",
        Body = new Tenant(),
    });
    // TODO: Handle 'response' of type Tenant
}
catch (ApiException<JobsProjectsTenantsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JobsProjectsTenantsPatchRequest](src/GoogleCloudTalentSolution/Requests/JobsProjectsTenantsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Tenant](src/GoogleCloudTalentSolution/Models/Tenant.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTalentSolution/Core/Exceptions/ApiException.cs)&lt;[JobsProjectsTenantsPatchError](src/GoogleCloudTalentSolution/Errors/JobsProjectsTenantsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

