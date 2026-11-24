# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [BoomiClient](src/Boomi/BoomiClient.cs)

## Atoms

> Source: [Atoms](src/Boomi/Api/Atoms.cs)

<details>
<summary><code>Task DeleteAtom(DeleteAtomRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an Atom from the Boomi platform. The Atom must be offline before it can be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Atoms.DeleteAtom(new DeleteAtomRequest { Id = "some example string" });
}
catch (ApiException<DeleteAtomError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAtomRequest](src/Boomi/Requests/Atoms/DeleteAtomRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[DeleteAtomError](src/Boomi/Errors/DeleteAtomError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Atom&gt; GetAtom(GetAtomRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific Boomi Atom (runtime engine) by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Atoms.GetAtom(new GetAtomRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Atom
}
catch (ApiException<GetAtomError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAtomRequest](src/Boomi/Requests/Atoms/GetAtomRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Atom](src/Boomi/Models/Atom.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[GetAtomError](src/Boomi/Errors/GetAtomError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AtomQueryResult&gt; QueryAtoms(QueryAtomsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Atoms matching the specified filter criteria, including online/offline status and environment associations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Atoms.QueryAtoms(new QueryAtomsRequest { Body = new QueryRequest() });
    // TODO: Handle 'response' of type AtomQueryResult
}
catch (ApiException<QueryAtomsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[QueryAtomsRequest](src/Boomi/Requests/Atoms/QueryAtomsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AtomQueryResult](src/Boomi/Models/AtomQueryResult.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[QueryAtomsError](src/Boomi/Errors/QueryAtomsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Atom&gt; UpdateAtom(UpdateAtomRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name or purge schedule of an existing Boomi Atom.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Atoms.UpdateAtom(new UpdateAtomRequest
    {
        Id = "some example string",
        Body = new AtomInput(),
    });
    // TODO: Handle 'response' of type Atom
}
catch (ApiException<UpdateAtomError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateAtomRequest](src/Boomi/Requests/Atoms/UpdateAtomRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Atom](src/Boomi/Models/Atom.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[UpdateAtomError](src/Boomi/Errors/UpdateAtomError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Components

> Source: [Components](src/Boomi/Api/Components.cs)

<details>
<summary><code>Task&lt;PackagedComponent&gt; CreatePackagedComponent(CreatePackagedComponentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a packaged version of a Boomi component (process, connector, etc.) that can be deployed to environments.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Components.CreatePackagedComponent(new CreatePackagedComponentRequest
    {
        Body = new PackagedComponentInput
        {
            ComponentId = "some example string",
            ComponentVersion = "some example string",
        },
    });
    // TODO: Handle 'response' of type PackagedComponent
}
catch (ApiException<CreatePackagedComponentError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePackagedComponentRequest](src/Boomi/Requests/Components/CreatePackagedComponentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PackagedComponent](src/Boomi/Models/PackagedComponent.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[CreatePackagedComponentError](src/Boomi/Errors/CreatePackagedComponentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PackagedComponent&gt; GetPackagedComponent(GetPackagedComponentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific packaged component by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Components.GetPackagedComponent(new GetPackagedComponentRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type PackagedComponent
}
catch (ApiException<GetPackagedComponentError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPackagedComponentRequest](src/Boomi/Requests/Components/GetPackagedComponentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PackagedComponent](src/Boomi/Models/PackagedComponent.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[GetPackagedComponentError](src/Boomi/Errors/GetPackagedComponentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Deployments

> Source: [Deployments](src/Boomi/Api/Deployments.cs)

<details>
<summary><code>Task&lt;DeployedPackage&gt; CreateDeployedPackage(CreateDeployedPackageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deploys a packaged component to an environment. Creates a new deployed package record associating the package with the target environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deployments.CreateDeployedPackage(new CreateDeployedPackageRequest
    {
        Body = new DeployedPackageInput { EnvironmentId = "some example string", PackageId = "some example string" },
    });
    // TODO: Handle 'response' of type DeployedPackage
}
catch (ApiException<CreateDeployedPackageError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDeployedPackageRequest](src/Boomi/Requests/Deployments/CreateDeployedPackageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeployedPackage](src/Boomi/Models/DeployedPackage.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[CreateDeployedPackageError](src/Boomi/Errors/CreateDeployedPackageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteDeployedPackage(DeleteDeployedPackageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a deployed package from its environment, undeploying the component.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Deployments.DeleteDeployedPackage(new DeleteDeployedPackageRequest { Id = "some example string" });
}
catch (ApiException<DeleteDeployedPackageError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDeployedPackageRequest](src/Boomi/Requests/Deployments/DeleteDeployedPackageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[DeleteDeployedPackageError](src/Boomi/Errors/DeleteDeployedPackageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeployedPackage&gt; GetDeployedPackage(GetDeployedPackageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific deployed package by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deployments.GetDeployedPackage(new GetDeployedPackageRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type DeployedPackage
}
catch (ApiException<GetDeployedPackageError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDeployedPackageRequest](src/Boomi/Requests/Deployments/GetDeployedPackageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeployedPackage](src/Boomi/Models/DeployedPackage.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[GetDeployedPackageError](src/Boomi/Errors/GetDeployedPackageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeployedPackageQueryResult&gt; QueryDeployedPackages(QueryDeployedPackagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of deployed packages matching the specified filter criteria. Useful for auditing current deployments across environments.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deployments.QueryDeployedPackages(new QueryDeployedPackagesRequest
    {
        Body = new QueryRequest(),
    });
    // TODO: Handle 'response' of type DeployedPackageQueryResult
}
catch (ApiException<QueryDeployedPackagesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[QueryDeployedPackagesRequest](src/Boomi/Requests/Deployments/QueryDeployedPackagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeployedPackageQueryResult](src/Boomi/Models/DeployedPackageQueryResult.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[QueryDeployedPackagesError](src/Boomi/Errors/QueryDeployedPackagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Environments

> Source: [Environments](src/Boomi/Api/Environments.cs)

<details>
<summary><code>Task&lt;EnvironmentModel&gt; CreateEnvironment(CreateEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new runtime environment in the Boomi platform for deploying and running integration processes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.CreateEnvironment(new CreateEnvironmentRequest
    {
        Body = new EnvironmentInput { Name = "some example string", Classification = Classification1.Production },
    });
    // TODO: Handle 'response' of type EnvironmentModel
}
catch (ApiException<CreateEnvironmentError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateEnvironmentRequest](src/Boomi/Requests/Environments/CreateEnvironmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentModel](src/Boomi/Models/EnvironmentModel.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[CreateEnvironmentError](src/Boomi/Errors/CreateEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteEnvironment(DeleteEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a runtime environment from the Boomi platform.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Environments.DeleteEnvironment(new DeleteEnvironmentRequest { Id = "some example string" });
}
catch (ApiException<DeleteEnvironmentError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteEnvironmentRequest](src/Boomi/Requests/Environments/DeleteEnvironmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[DeleteEnvironmentError](src/Boomi/Errors/DeleteEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentModel&gt; GetEnvironment(GetEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific runtime environment by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.GetEnvironment(new GetEnvironmentRequest { Id = "some example string" });
    // TODO: Handle 'response' of type EnvironmentModel
}
catch (ApiException<GetEnvironmentError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEnvironmentRequest](src/Boomi/Requests/Environments/GetEnvironmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentModel](src/Boomi/Models/EnvironmentModel.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[GetEnvironmentError](src/Boomi/Errors/GetEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentQueryResult&gt; QueryEnvironments(QueryEnvironmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of runtime environments matching the specified query filter criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Environments.QueryEnvironments(new QueryEnvironmentsRequest
    {
        Body = new QueryRequest(),
    });
    // TODO: Handle 'response' of type EnvironmentQueryResult
}
catch (ApiException<QueryEnvironmentsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[QueryEnvironmentsRequest](src/Boomi/Requests/Environments/QueryEnvironmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentQueryResult](src/Boomi/Models/EnvironmentQueryResult.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[QueryEnvironmentsError](src/Boomi/Errors/QueryEnvironmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Execution

> Source: [Execution](src/Boomi/Api/Execution.cs)

<details>
<summary><code>Task&lt;ExecutionRequestResult&gt; ExecuteProcess(ExecuteProcessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers the execution of an integration process on a specified Atom. Returns an execution request ID that can be used to track the job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Execution.ExecuteProcess(new ExecuteProcessRequest
    {
        Body = new ExecutionRequest { AtomId = "some example string", ProcessId = "some example string" },
    });
    // TODO: Handle 'response' of type ExecutionRequestResult
}
catch (ApiException<ExecuteProcessError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExecuteProcessRequest](src/Boomi/Requests/Execution/ExecuteProcessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExecutionRequestResult](src/Boomi/Models/ExecutionRequestResult.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[ExecuteProcessError](src/Boomi/Errors/ExecuteProcessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExecutionRecordQueryResult&gt; QueryExecutionRecords(QueryExecutionRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of process execution records matching the specified filter criteria. Useful for retrieving job history and execution statistics.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Execution.QueryExecutionRecords(new QueryExecutionRecordsRequest
    {
        Body = new QueryRequest(),
    });
    // TODO: Handle 'response' of type ExecutionRecordQueryResult
}
catch (ApiException<QueryExecutionRecordsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[QueryExecutionRecordsRequest](src/Boomi/Requests/Execution/QueryExecutionRecordsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExecutionRecordQueryResult](src/Boomi/Models/ExecutionRecordQueryResult.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[QueryExecutionRecordsError](src/Boomi/Errors/QueryExecutionRecordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GoldenRecords

> Source: [GoldenRecords](src/Boomi/Api/GoldenRecords.cs)

<details>
<summary><code>Task&lt;RepositoriesUniversesRecordsResponse&gt; ListGoldenRecords(ListGoldenRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of golden records from the specified master data domain (universe).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GoldenRecords.ListGoldenRecords(new ListGoldenRecordsRequest
    {
        RepositoryId = "some example string",
        UniverseId = "some example string",
    });
    // TODO: Handle 'response' of type RepositoriesUniversesRecordsResponse
}
catch (ApiException<ListGoldenRecordsError> ex)
{
    if (ex.Error.TryGetErrorResponseBoomiDataHubGoldenRecordsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBoomiDataHubGoldenRecordsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGoldenRecordsRequest](src/Boomi/Requests/GoldenRecords/ListGoldenRecordsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoriesUniversesRecordsResponse](src/Boomi/Models/RepositoriesUniversesRecordsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[ListGoldenRecordsError](src/Boomi/Errors/ListGoldenRecordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Messages

> Source: [Messages](src/Boomi/Api/Messages.cs)

<details>
<summary><code>Task&lt;PublishResponse&gt; PublishMessages(PublishMessagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publishes one or more messages to the event topic. Supports two operational modes: multiple messages mode (predefined JSON format with payload and properties fields) and single message mode (original format in plain text, JSON, or XML). Messages may be up to 5 MB each and the total HTTP request must not exceed 10 MB. Rate limited to 60,000 requests per IP per 5-minute window.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Messages.PublishMessages(new PublishMessagesRequest
    {
        Body = new MultiMessageRequest { Messages = [new MessageItem { Payload = "some example string" }] },
    });
    // TODO: Handle 'response' of type PublishResponse
}
catch (ApiException<PublishMessagesError> ex)
{
    if (ex.Error.TryGetErrorResponseBoomiEventStreamsRestMessagesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBoomiEventStreamsRestMessagesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PublishMessagesRequest](src/Boomi/Requests/Messages/PublishMessagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublishResponse](src/Boomi/Models/PublishResponse.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[PublishMessagesError](src/Boomi/Errors/PublishMessagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ModelsApi

> Source: [ModelsApi](src/Boomi/Api/ModelsApi.cs)

<details>
<summary><code>Task&lt;Model&gt; CreateModel(CreateModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new data model within the repository that defines the schema for a master data domain.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.CreateModel(new CreateModelRequest
    {
        RepositoryId = "some example string",
        Body = new ModelInput { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Model
}
catch (ApiException<CreateModelError> ex)
{
    if (ex.Error.TryGetErrorResponseBoomiDataHubGoldenRecordsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBoomiDataHubGoldenRecordsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateModelRequest](src/Boomi/Requests/ModelsApi/CreateModelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Model](src/Boomi/Models/Model.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[CreateModelError](src/Boomi/Errors/CreateModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteModel(DeleteModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a data model from the repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ModelsApi.DeleteModel(new DeleteModelRequest
    {
        RepositoryId = "some example string",
        ModelId = "some example string",
    });
}
catch (ApiException<DeleteModelError> ex)
{
    if (ex.Error.TryGetErrorResponseBoomiDataHubGoldenRecordsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBoomiDataHubGoldenRecordsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteModelRequest](src/Boomi/Requests/ModelsApi/DeleteModelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[DeleteModelError](src/Boomi/Errors/DeleteModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Model&gt; GetModel(GetModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details and schema of a specific data model.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.GetModel(new GetModelRequest
    {
        RepositoryId = "some example string",
        ModelId = "some example string",
    });
    // TODO: Handle 'response' of type Model
}
catch (ApiException<GetModelError> ex)
{
    if (ex.Error.TryGetErrorResponseBoomiDataHubGoldenRecordsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBoomiDataHubGoldenRecordsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetModelRequest](src/Boomi/Requests/ModelsApi/GetModelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Model](src/Boomi/Models/Model.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[GetModelError](src/Boomi/Errors/GetModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RepositoriesModelsResponse&gt; ListModels(ListModelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all data models defined within a specific repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.ListModels(new ListModelsRequest { RepositoryId = "some example string" });
    // TODO: Handle 'response' of type RepositoriesModelsResponse
}
catch (ApiException<ListModelsError> ex)
{
    if (ex.Error.TryGetErrorResponseBoomiDataHubGoldenRecordsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBoomiDataHubGoldenRecordsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListModelsRequest](src/Boomi/Requests/ModelsApi/ListModelsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoriesModelsResponse](src/Boomi/Models/RepositoriesModelsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[ListModelsError](src/Boomi/Errors/ListModelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Model&gt; PublishModel(PublishModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publishes a data model, making it available for domain deployment and data ingestion.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.PublishModel(new PublishModelRequest
    {
        RepositoryId = "some example string",
        ModelId = "some example string",
    });
    // TODO: Handle 'response' of type Model
}
catch (ApiException<PublishModelError> ex)
{
    if (ex.Error.TryGetErrorResponseBoomiDataHubGoldenRecordsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBoomiDataHubGoldenRecordsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PublishModelRequest](src/Boomi/Requests/ModelsApi/PublishModelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Model](src/Boomi/Models/Model.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[PublishModelError](src/Boomi/Errors/PublishModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Processes

> Source: [Processes](src/Boomi/Api/Processes.cs)

<details>
<summary><code>Task&lt;Process&gt; CreateProcess(CreateProcessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new integration process in the Boomi platform. The process definition is provided in the request body as XML or JSON.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Processes.CreateProcess(new CreateProcessRequest { Body = new ProcessInput() });
    // TODO: Handle 'response' of type Process
}
catch (ApiException<CreateProcessError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateProcessRequest](src/Boomi/Requests/Processes/CreateProcessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Process](src/Boomi/Models/Process.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[CreateProcessError](src/Boomi/Errors/CreateProcessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteProcess(DeleteProcessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an integration process from the Boomi platform.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Processes.DeleteProcess(new DeleteProcessRequest { Id = "some example string" });
}
catch (ApiException<DeleteProcessError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteProcessRequest](src/Boomi/Requests/Processes/DeleteProcessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[DeleteProcessError](src/Boomi/Errors/DeleteProcessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Process&gt; GetProcess(GetProcessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific integration process by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Processes.GetProcess(new GetProcessRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Process
}
catch (ApiException<GetProcessError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetProcessRequest](src/Boomi/Requests/Processes/GetProcessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Process](src/Boomi/Models/Process.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[GetProcessError](src/Boomi/Errors/GetProcessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProcessSchedules&gt; GetProcessSchedules(GetProcessSchedulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the scheduling configuration for a specific integration process.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Processes.GetProcessSchedules(new GetProcessSchedulesRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ProcessSchedules
}
catch (ApiException<GetProcessSchedulesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetProcessSchedulesRequest](src/Boomi/Requests/Processes/GetProcessSchedulesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProcessSchedules](src/Boomi/Models/ProcessSchedules.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[GetProcessSchedulesError](src/Boomi/Errors/GetProcessSchedulesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProcessQueryResult&gt; QueryProcesses(QueryProcessesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of integration processes matching the specified query filter criteria. Supports filtering by folder ID, process name, and other properties.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Processes.QueryProcesses(new QueryProcessesRequest { Body = new QueryRequest() });
    // TODO: Handle 'response' of type ProcessQueryResult
}
catch (ApiException<QueryProcessesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[QueryProcessesRequest](src/Boomi/Requests/Processes/QueryProcessesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProcessQueryResult](src/Boomi/Models/ProcessQueryResult.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[QueryProcessesError](src/Boomi/Errors/QueryProcessesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Process&gt; UpdateProcess(UpdateProcessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing integration process by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Processes.UpdateProcess(new UpdateProcessRequest
    {
        Id = "some example string",
        Body = new ProcessInput(),
    });
    // TODO: Handle 'response' of type Process
}
catch (ApiException<UpdateProcessError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateProcessRequest](src/Boomi/Requests/Processes/UpdateProcessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Process](src/Boomi/Models/Process.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[UpdateProcessError](src/Boomi/Errors/UpdateProcessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProcessSchedules&gt; UpdateProcessSchedules(UpdateProcessSchedulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the scheduling configuration for a specific integration process.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Processes.UpdateProcessSchedules(new UpdateProcessSchedulesRequest
    {
        Id = "some example string",
        Body = new ProcessSchedules(),
    });
    // TODO: Handle 'response' of type ProcessSchedules
}
catch (ApiException<UpdateProcessSchedulesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateProcessSchedulesRequest](src/Boomi/Requests/Processes/UpdateProcessSchedulesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProcessSchedules](src/Boomi/Models/ProcessSchedules.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[UpdateProcessSchedulesError](src/Boomi/Errors/UpdateProcessSchedulesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Quarantine

> Source: [Quarantine](src/Boomi/Api/Quarantine.cs)

<details>
<summary><code>Task&lt;RepositoriesUniversesQuarantineResponse&gt; ListQuarantineEntries(ListQuarantineEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns records held in quarantine that could not be automatically processed due to data quality or matching issues.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Quarantine.ListQuarantineEntries(new ListQuarantineEntriesRequest
    {
        RepositoryId = "some example string",
        UniverseId = "some example string",
    });
    // TODO: Handle 'response' of type RepositoriesUniversesQuarantineResponse
}
catch (ApiException<ListQuarantineEntriesError> ex)
{
    if (ex.Error.TryGetErrorResponseBoomiDataHubGoldenRecordsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBoomiDataHubGoldenRecordsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListQuarantineEntriesRequest](src/Boomi/Requests/Quarantine/ListQuarantineEntriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoriesUniversesQuarantineResponse](src/Boomi/Models/RepositoriesUniversesQuarantineResponse.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[ListQuarantineEntriesError](src/Boomi/Errors/ListQuarantineEntriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Repositories

> Source: [Repositories](src/Boomi/Api/Repositories.cs)

<details>
<summary><code>Task&lt;Repository&gt; CreateRepository(CreateRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new DataHub repository for managing master data.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.CreateRepository(new CreateRepositoryRequest
    {
        Body = new RepositoryInput { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Repository
}
catch (ApiException<CreateRepositoryError> ex)
{
    if (ex.Error.TryGetErrorResponseBoomiDataHubGoldenRecordsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBoomiDataHubGoldenRecordsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateRepositoryRequest](src/Boomi/Requests/Repositories/CreateRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Repository](src/Boomi/Models/Repository.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[CreateRepositoryError](src/Boomi/Errors/CreateRepositoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepository(DeleteRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a DataHub repository and all its data.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Repositories.DeleteRepository(new DeleteRepositoryRequest { RepositoryId = "some example string" });
}
catch (ApiException<DeleteRepositoryError> ex)
{
    if (ex.Error.TryGetErrorResponseBoomiDataHubGoldenRecordsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBoomiDataHubGoldenRecordsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteRepositoryRequest](src/Boomi/Requests/Repositories/DeleteRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoryError](src/Boomi/Errors/DeleteRepositoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Repository&gt; GetRepository(GetRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details of a specific DataHub repository by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepository(new GetRepositoryRequest
    {
        RepositoryId = "some example string",
    });
    // TODO: Handle 'response' of type Repository
}
catch (ApiException<GetRepositoryError> ex)
{
    if (ex.Error.TryGetErrorResponseBoomiDataHubGoldenRecordsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBoomiDataHubGoldenRecordsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRepositoryRequest](src/Boomi/Requests/Repositories/GetRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Repository](src/Boomi/Models/Repository.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[GetRepositoryError](src/Boomi/Errors/GetRepositoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RepositoriesResponse&gt; ListRepositories(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all DataHub repositories associated with the authenticated account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.ListRepositories();
    // TODO: Handle 'response' of type RepositoriesResponse
}
catch (ApiException<ListRepositoriesError> ex)
{
    if (ex.Error.TryGetErrorResponseBoomiDataHubGoldenRecordsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBoomiDataHubGoldenRecordsApi
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoriesResponse](src/Boomi/Models/RepositoriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[ListRepositoriesError](src/Boomi/Errors/ListRepositoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sources

> Source: [Sources](src/Boomi/Api/Sources.cs)

<details>
<summary><code>Task&lt;SourceBoomiDataHubSourcesApi&gt; CreateSource(CreateSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new data source within the repository representing a system that contributes records to the master data hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sources.CreateSource(new CreateSourceRequest
    {
        RepositoryId = "some example string",
        Body = new SourceInput { Name = "some example string" },
    });
    // TODO: Handle 'response' of type SourceBoomiDataHubSourcesApi
}
catch (ApiException<CreateSourceError> ex)
{
    if (ex.Error.TryGetErrorResponseBoomiDataHubGoldenRecordsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBoomiDataHubGoldenRecordsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSourceRequest](src/Boomi/Requests/Sources/CreateSourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SourceBoomiDataHubSourcesApi](src/Boomi/Models/SourceBoomiDataHubSourcesApi.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[CreateSourceError](src/Boomi/Errors/CreateSourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RepositoriesSourcesResponse&gt; ListSources(ListSourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all data sources configured within a specific repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sources.ListSources(new ListSourcesRequest { RepositoryId = "some example string" });
    // TODO: Handle 'response' of type RepositoriesSourcesResponse
}
catch (ApiException<ListSourcesError> ex)
{
    if (ex.Error.TryGetErrorResponseBoomiDataHubGoldenRecordsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseBoomiDataHubGoldenRecordsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSourcesRequest](src/Boomi/Requests/Sources/ListSourcesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoriesSourcesResponse](src/Boomi/Models/RepositoriesSourcesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Boomi/Core/Exceptions/ApiException.cs)&lt;[ListSourcesError](src/Boomi/Errors/ListSourcesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

