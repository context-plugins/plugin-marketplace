# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [MrScraperClient](src/MrScraper/MrScraperClient.cs)

## Analytic

> Source: [Analytic](src/MrScraper/Api/Analytic.cs)

<details>
<summary><code>Task GetApiV1AnalyticStatuses(GetApiV1AnalyticStatusesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Analytic.GetApiV1AnalyticStatuses(new GetApiV1AnalyticStatusesRequest());
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

<code>[GetApiV1AnalyticStatusesRequest](src/MrScraper/Requests/Analytic/GetApiV1AnalyticStatusesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Auth

> Source: [Auth](src/MrScraper/Api/Auth.cs)

<details>
<summary><code>Task&lt;SubscriptionAccountsResponse&gt; GetSubscriptionAccounts(GetSubscriptionAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Auth.GetSubscriptionAccounts(new GetSubscriptionAccountsRequest());
    // TODO: Handle 'response' of type SubscriptionAccountsResponse
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

<code>[GetSubscriptionAccountsRequest](src/MrScraper/Requests/Auth/GetSubscriptionAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionAccountsResponse](src/MrScraper/Models/SubscriptionAccountsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Gateway

> Source: [Gateway](src/MrScraper/Api/Gateway.cs)

<details>
<summary><code>Task&lt;object&gt; GetRoot(GetRootRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Gateway.GetRoot(new GetRootRequest { Url = "some example string" });
    // TODO: Handle 'response' of type object
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

<code>[GetRootRequest](src/MrScraper/Requests/Gateway/GetRootRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; PostRoot(PostRootRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Gateway.PostRoot(new PostRootRequest { Body = new GatewayRequestBody() });
    // TODO: Handle 'response' of type object
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

<code>[PostRootRequest](src/MrScraper/Requests/Gateway/PostRootRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/MrScraper/Api/Jobs.cs)

<details>
<summary><code>Task&lt;JobsResponse&gt; GetJobs(GetJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.GetJobs(new GetJobsRequest());
    // TODO: Handle 'response' of type JobsResponse
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

<code>[GetJobsRequest](src/MrScraper/Requests/Jobs/GetJobsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobsResponse](src/MrScraper/Models/JobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobsResponse1&gt; GetJobsById(GetJobsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.GetJobsById(new GetJobsByIdRequest { Id = 1 });
    // TODO: Handle 'response' of type JobsResponse1
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

<code>[GetJobsByIdRequest](src/MrScraper/Requests/Jobs/GetJobsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobsResponse1](src/MrScraper/Models/JobsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobsResponse1&gt; PostJobs(PostJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.PostJobs(new PostJobsRequest { Body = new JobJob() });
    // TODO: Handle 'response' of type JobsResponse1
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

<code>[PostJobsRequest](src/MrScraper/Requests/Jobs/PostJobsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobsResponse1](src/MrScraper/Models/JobsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobsResponse1&gt; PutJobsById(PutJobsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.PutJobsById(new PutJobsByIdRequest { Id = 1, Body = new JobJob() });
    // TODO: Handle 'response' of type JobsResponse1
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

<code>[PutJobsByIdRequest](src/MrScraper/Requests/Jobs/PutJobsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobsResponse1](src/MrScraper/Models/JobsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Proxies

> Source: [Proxies](src/MrScraper/Api/Proxies.cs)

<details>
<summary><code>Task&lt;GetApiV1ProxiesUserRequestsBandwidthResponse&gt; GetApiV1ProxiesUserRequestsBandwidth(GetApiV1ProxiesUserRequestsBandwidthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Proxies.GetApiV1ProxiesUserRequestsBandwidth(
        new GetApiV1ProxiesUserRequestsBandwidthRequest());
    // TODO: Handle 'response' of type GetApiV1ProxiesUserRequestsBandwidthResponse
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

<code>[GetApiV1ProxiesUserRequestsBandwidthRequest](src/MrScraper/Requests/Proxies/GetApiV1ProxiesUserRequestsBandwidthRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetApiV1ProxiesUserRequestsBandwidthResponse](src/MrScraper/Models/GetApiV1ProxiesUserRequestsBandwidthResponse.cs)</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Results

> Source: [Results](src/MrScraper/Api/Results.cs)

<details>
<summary><code>Task&lt;GetApiV1ResultsResultidResponse&gt; GetApiV1ResultsResultId(GetApiV1ResultsResultIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Results.GetApiV1ResultsResultId(new GetApiV1ResultsResultIdRequest
    {
        ResultId = "some example string",
    });
    // TODO: Handle 'response' of type GetApiV1ResultsResultidResponse
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

<code>[GetApiV1ResultsResultIdRequest](src/MrScraper/Requests/Results/GetApiV1ResultsResultIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetApiV1ResultsResultidResponse](src/MrScraper/Models/GetApiV1ResultsResultidResponse.cs)</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Storage

> Source: [Storage](src/MrScraper/Api/Storage.cs)

<details>
<summary><code>Task GetStorageByKey(GetStorageByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the stored body directly with application/json content type, without a message/data envelope. The key may contain multiple path segments and must belong to the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Storage.GetStorageByKey(new GetStorageByKeyRequest { Key = "some example string" });
}
catch (ApiException<GetStorageByKeyError> ex)
{
    if (ex.Error.TryGetStorage400Error1(out var error))
    {
        // TODO: Handle 'error' of type Storage400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetStorageByKeyRequest](src/MrScraper/Requests/Storage/GetStorageByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[GetStorageByKeyError](src/MrScraper/Errors/GetStorageByKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](src/MrScraper/Api/Tasks.cs)

<details>
<summary><code>Task&lt;TasksResponse&gt; GetTasks(GetTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetTasks(new GetTasksRequest
    {
        StartAt = "some example string",
        EndAt = "some example string",
    });
    // TODO: Handle 'response' of type TasksResponse
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

<code>[GetTasksRequest](src/MrScraper/Requests/Tasks/GetTasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksResponse](src/MrScraper/Models/TasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksResponse3&gt; GetTasksById(GetTasksByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetTasksById(new GetTasksByIdRequest { Id = 1 });
    // TODO: Handle 'response' of type TasksResponse3
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

<code>[GetTasksByIdRequest](src/MrScraper/Requests/Tasks/GetTasksByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksResponse3](src/MrScraper/Models/TasksResponse3.cs)</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksResponse1&gt; PostTasks(PostTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostTasks(new PostTasksRequest { Body = new TaskTaskSwagger() });
    // TODO: Handle 'response' of type TasksResponse1
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

<code>[PostTasksRequest](src/MrScraper/Requests/Tasks/PostTasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksResponse1](src/MrScraper/Models/TasksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksBulkResponse1&gt; PostTasksBulk(PostTasksBulkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PostTasksBulk(new PostTasksBulkRequest { Body = new TaskBatchCreateRequest() });
    // TODO: Handle 'response' of type TasksBulkResponse1
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

<code>[PostTasksBulkRequest](src/MrScraper/Requests/Tasks/PostTasksBulkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksBulkResponse1](src/MrScraper/Models/TasksBulkResponse1.cs)</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksBulkResponse&gt; PutTasksBulk(PutTasksBulkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PutTasksBulk(new PutTasksBulkRequest { Body = new TaskBatchUpdateRequest() });
    // TODO: Handle 'response' of type TasksBulkResponse
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

<code>[PutTasksBulkRequest](src/MrScraper/Requests/Tasks/PutTasksBulkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksBulkResponse](src/MrScraper/Models/TasksBulkResponse.cs)</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksResponse1&gt; PutTasksById(PutTasksByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PutTasksById(new PutTasksByIdRequest { Id = 1, Body = new TaskTaskSwagger() });
    // TODO: Handle 'response' of type TasksResponse1
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

<code>[PutTasksByIdRequest](src/MrScraper/Requests/Tasks/PutTasksByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksResponse1](src/MrScraper/Models/TasksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksStatusResponse&gt; PutTasksByIdStatus(PutTasksByIdStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.PutTasksByIdStatus(new PutTasksByIdStatusRequest
    {
        Id = 1,
        Body = new TaskUpdateTaskStatusRequest(),
    });
    // TODO: Handle 'response' of type TasksStatusResponse
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

<code>[PutTasksByIdStatusRequest](src/MrScraper/Requests/Tasks/PutTasksByIdStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksStatusResponse](src/MrScraper/Models/TasksStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/MrScraper/Core/Exceptions/ApiException.cs)&lt;[RawError](src/MrScraper/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

