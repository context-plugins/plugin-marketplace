# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [BrowserStackClient](src/BrowserStack/BrowserStackClient.cs)

## AccessKey

> Source: [AccessKey](src/BrowserStack/Api/AccessKey.cs)

<details>
<summary><code>Task&lt;AutomateRecycleKeyJsonResponse&gt; RecycleAccessKey(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a new access key, invalidating the old one.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AccessKey.RecycleAccessKey();
    // TODO: Handle 'response' of type AutomateRecycleKeyJsonResponse
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

**OnSuccess**: <code>[AutomateRecycleKeyJsonResponse](src/BrowserStack/Models/AutomateRecycleKeyJsonResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Browsers

> Source: [Browsers](src/BrowserStack/Api/Browsers.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Browser&gt;&gt; GetBrowsers(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of operating systems, browsers, and real mobile devices supported by Automate.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Browsers.GetBrowsers();
    // TODO: Handle 'response' of type IReadOnlyList<Browser>
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

**OnSuccess**: <code>IReadOnlyList&lt;[Browser](src/BrowserStack/Models/Browser.cs)&gt;</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Builds

> Source: [Builds](src/BrowserStack/Api/Builds.cs)

<details>
<summary><code>Task&lt;StatusMessage&gt; DeleteBuild(DeleteBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.DeleteBuild(new DeleteBuildRequest { BuildId = "some example string" });
    // TODO: Handle 'response' of type StatusMessage
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

<code>[DeleteBuildRequest](src/BrowserStack/Requests/Builds/DeleteBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusMessage](src/BrowserStack/Models/StatusMessage.cs)</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Build&gt;&gt; ListBuilds(ListBuildsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.ListBuilds(new ListBuildsRequest());
    // TODO: Handle 'response' of type IReadOnlyList<Build>
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

<code>[ListBuildsRequest](src/BrowserStack/Requests/Builds/ListBuildsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Build](src/BrowserStack/Models/Build.cs)&gt;</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Build&gt; UpdateBuild(UpdateBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.UpdateBuild(new UpdateBuildRequest
    {
        BuildId = "some example string",
        Body = new AutomateBuildsJsonRequest(),
    });
    // TODO: Handle 'response' of type Build
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

<code>[UpdateBuildRequest](src/BrowserStack/Requests/Builds/UpdateBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Build](src/BrowserStack/Models/Build.cs)</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PlanApi

> Source: [PlanApi](src/BrowserStack/Api/PlanApi.cs)

<details>
<summary><code>Task&lt;Plan&gt; GetPlan(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details of the current Automate subscription plan including parallel session capacity and current usage.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PlanApi.GetPlan();
    // TODO: Handle 'response' of type Plan
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

**OnSuccess**: <code>[Plan](src/BrowserStack/Models/Plan.cs)</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/BrowserStack/Api/Projects.cs)

<details>
<summary><code>Task&lt;StatusMessage&gt; DeleteProject(DeleteProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Automate project. The project must be empty of builds and sessions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.DeleteProject(new DeleteProjectRequest { ProjectId = 1 });
    // TODO: Handle 'response' of type StatusMessage
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

<code>[DeleteProjectRequest](src/BrowserStack/Requests/Projects/DeleteProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusMessage](src/BrowserStack/Models/StatusMessage.cs)</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectDetail&gt; GetProject(GetProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetProject(new GetProjectRequest { ProjectId = 1 });
    // TODO: Handle 'response' of type ProjectDetail
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

<code>[GetProjectRequest](src/BrowserStack/Requests/Projects/GetProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectDetail](src/BrowserStack/Models/ProjectDetail.cs)</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; GetProjectBadgeKey(GetProjectBadgeKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetProjectBadgeKey(new GetProjectBadgeKeyRequest { ProjectId = 1 });
    // TODO: Handle 'response' of type string
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

<code>[GetProjectBadgeKeyRequest](src/BrowserStack/Requests/Projects/GetProjectBadgeKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Project&gt;&gt; ListProjects(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ListProjects();
    // TODO: Handle 'response' of type IReadOnlyList<Project>
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

**OnSuccess**: <code>IReadOnlyList&lt;[Project](src/BrowserStack/Models/Project.cs)&gt;</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Project&gt; UpdateProject(UpdateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.UpdateProject(new UpdateProjectRequest
    {
        ProjectId = 1,
        Body = new AutomateProjectsJsonRequest(),
    });
    // TODO: Handle 'response' of type Project
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

<code>[UpdateProjectRequest](src/BrowserStack/Requests/Projects/UpdateProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/BrowserStack/Models/Project.cs)</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sessions

> Source: [Sessions](src/BrowserStack/Api/Sessions.cs)

<details>
<summary><code>Task&lt;StatusMessage&gt; DeleteSession(DeleteSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.DeleteSession(new DeleteSessionRequest { SessionId = "some example string" });
    // TODO: Handle 'response' of type StatusMessage
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

<code>[DeleteSessionRequest](src/BrowserStack/Requests/Sessions/DeleteSessionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusMessage](src/BrowserStack/Models/StatusMessage.cs)</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Session&gt; GetSession(GetSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.GetSession(new GetSessionRequest { SessionId = "some example string" });
    // TODO: Handle 'response' of type Session
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

<code>[GetSessionRequest](src/BrowserStack/Requests/Sessions/GetSessionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Session](src/BrowserStack/Models/Session.cs)</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; GetSessionConsoleLogs(GetSessionConsoleLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.GetSessionConsoleLogs(new GetSessionConsoleLogsRequest
    {
        SessionId = "some example string",
    });
    // TODO: Handle 'response' of type string
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

<code>[GetSessionConsoleLogsRequest](src/BrowserStack/Requests/Sessions/GetSessionConsoleLogsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; GetSessionLogs(GetSessionLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.GetSessionLogs(new GetSessionLogsRequest
    {
        SessionId = "some example string",
    });
    // TODO: Handle 'response' of type string
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

<code>[GetSessionLogsRequest](src/BrowserStack/Requests/Sessions/GetSessionLogsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetSessionNetworkLogs(GetSessionNetworkLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.GetSessionNetworkLogs(new GetSessionNetworkLogsRequest
    {
        SessionId = "some example string",
    });
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

<code>[GetSessionNetworkLogsRequest](src/BrowserStack/Requests/Sessions/GetSessionNetworkLogsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Session&gt;&gt; ListBuildSessions(ListBuildSessionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.ListBuildSessions(new ListBuildSessionsRequest
    {
        BuildId = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<Session>
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

<code>[ListBuildSessionsRequest](src/BrowserStack/Requests/Sessions/ListBuildSessionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Session](src/BrowserStack/Models/Session.cs)&gt;</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Session&gt; UpdateSession(UpdateSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.UpdateSession(new UpdateSessionRequest
    {
        SessionId = "some example string",
        Body = new AutomateSessionsJsonRequest(),
    });
    // TODO: Handle 'response' of type Session
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

<code>[UpdateSessionRequest](src/BrowserStack/Requests/Sessions/UpdateSessionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Session](src/BrowserStack/Models/Session.cs)</code>

**OnError**: <code>[ApiException](src/BrowserStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BrowserStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

