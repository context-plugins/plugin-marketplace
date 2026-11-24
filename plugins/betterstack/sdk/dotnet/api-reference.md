# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [BetterStackClient](src/BetterStack/BetterStackClient.cs)

## Heartbeats

> Source: [Heartbeats](src/BetterStack/Api/Heartbeats.cs)

<details>
<summary><code>Task CreateHeartbeat(CreateHeartbeatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Heartbeats.CreateHeartbeat(new CreateHeartbeatRequest
    {
        Body = new HeartbeatCreate { Name = "some example string", Period = 1 },
    });
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

<code>[CreateHeartbeatRequest](src/BetterStack/Requests/Heartbeats/CreateHeartbeatRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteHeartbeat(DeleteHeartbeatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Heartbeats.DeleteHeartbeat(new DeleteHeartbeatRequest { Id = "some example string" });
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

<code>[DeleteHeartbeatRequest](src/BetterStack/Requests/Heartbeats/DeleteHeartbeatRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetHeartbeat(GetHeartbeatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Heartbeats.GetHeartbeat(new GetHeartbeatRequest { Id = "some example string" });
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

<code>[GetHeartbeatRequest](src/BetterStack/Requests/Heartbeats/GetHeartbeatRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetHeartbeatAvailability(GetHeartbeatAvailabilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Heartbeats.GetHeartbeatAvailability(new GetHeartbeatAvailabilityRequest
    {
        Id = "some example string",
    });
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

<code>[GetHeartbeatAvailabilityRequest](src/BetterStack/Requests/Heartbeats/GetHeartbeatAvailabilityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListHeartbeats(ListHeartbeatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Heartbeats.ListHeartbeats(new ListHeartbeatsRequest());
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

<code>[ListHeartbeatsRequest](src/BetterStack/Requests/Heartbeats/ListHeartbeatsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateHeartbeat(UpdateHeartbeatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Heartbeats.UpdateHeartbeat(new UpdateHeartbeatRequest
    {
        Id = "some example string",
        Body = new HeartbeatCreate { Name = "some example string", Period = 1 },
    });
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

<code>[UpdateHeartbeatRequest](src/BetterStack/Requests/Heartbeats/UpdateHeartbeatRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Incidents

> Source: [Incidents](src/BetterStack/Api/Incidents.cs)

<details>
<summary><code>Task AcknowledgeIncident(AcknowledgeIncidentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Incidents.AcknowledgeIncident(new AcknowledgeIncidentRequest { Id = "some example string" });
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

<code>[AcknowledgeIncidentRequest](src/BetterStack/Requests/Incidents/AcknowledgeIncidentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateIncident(CreateIncidentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Incidents.CreateIncident(new CreateIncidentRequest
    {
        Body = new IncidentCreate { Summary = "some example string", RequesterEmail = "user@example.com" },
    });
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

<code>[CreateIncidentRequest](src/BetterStack/Requests/Incidents/CreateIncidentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteIncident(DeleteIncidentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Incidents.DeleteIncident(new DeleteIncidentRequest { Id = "some example string" });
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

<code>[DeleteIncidentRequest](src/BetterStack/Requests/Incidents/DeleteIncidentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task EscalateIncident(EscalateIncidentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Incidents.EscalateIncident(new EscalateIncidentRequest { Id = "some example string" });
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

<code>[EscalateIncidentRequest](src/BetterStack/Requests/Incidents/EscalateIncidentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetIncident(GetIncidentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Incidents.GetIncident(new GetIncidentRequest { Id = "some example string" });
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

<code>[GetIncidentRequest](src/BetterStack/Requests/Incidents/GetIncidentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetIncidentTimeline(GetIncidentTimelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Incidents.GetIncidentTimeline(new GetIncidentTimelineRequest { Id = "some example string" });
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

<code>[GetIncidentTimelineRequest](src/BetterStack/Requests/Incidents/GetIncidentTimelineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListIncidents(ListIncidentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Incidents.ListIncidents(new ListIncidentsRequest());
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

<code>[ListIncidentsRequest](src/BetterStack/Requests/Incidents/ListIncidentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ReopenIncident(ReopenIncidentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Incidents.ReopenIncident(new ReopenIncidentRequest { Id = "some example string" });
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

<code>[ReopenIncidentRequest](src/BetterStack/Requests/Incidents/ReopenIncidentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ResolveIncident(ResolveIncidentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Incidents.ResolveIncident(new ResolveIncidentRequest { Id = "some example string" });
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

<code>[ResolveIncidentRequest](src/BetterStack/Requests/Incidents/ResolveIncidentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Monitors

> Source: [Monitors](src/BetterStack/Api/Monitors.cs)

<details>
<summary><code>Task&lt;MonitorResource&gt; CreateMonitor(CreateMonitorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.CreateMonitor(new CreateMonitorRequest
    {
        Body = new MonitorCreate { Url = "https://example.com", MonitorType = MonitorType.Status },
    });
    // TODO: Handle 'response' of type MonitorResource
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

<code>[CreateMonitorRequest](src/BetterStack/Requests/Monitors/CreateMonitorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResource](src/BetterStack/Models/MonitorResource.cs)</code>

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteMonitor(DeleteMonitorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Monitors.DeleteMonitor(new DeleteMonitorRequest { Id = "some example string" });
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

<code>[DeleteMonitorRequest](src/BetterStack/Requests/Monitors/DeleteMonitorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MonitorResource&gt; GetMonitor(GetMonitorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.GetMonitor(new GetMonitorRequest { Id = "some example string" });
    // TODO: Handle 'response' of type MonitorResource
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

<code>[GetMonitorRequest](src/BetterStack/Requests/Monitors/GetMonitorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResource](src/BetterStack/Models/MonitorResource.cs)</code>

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetMonitorAvailability(GetMonitorAvailabilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Monitors.GetMonitorAvailability(new GetMonitorAvailabilityRequest { Id = "some example string" });
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

<code>[GetMonitorAvailabilityRequest](src/BetterStack/Requests/Monitors/GetMonitorAvailabilityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetMonitorResponseTimes(GetMonitorResponseTimesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Monitors.GetMonitorResponseTimes(new GetMonitorResponseTimesRequest { Id = "some example string" });
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

<code>[GetMonitorResponseTimesRequest](src/BetterStack/Requests/Monitors/GetMonitorResponseTimesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MonitorList&gt; ListMonitors(ListMonitorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.ListMonitors(new ListMonitorsRequest());
    // TODO: Handle 'response' of type MonitorList
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

<code>[ListMonitorsRequest](src/BetterStack/Requests/Monitors/ListMonitorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorList](src/BetterStack/Models/MonitorList.cs)</code>

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MonitorResource&gt; UpdateMonitor(UpdateMonitorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.UpdateMonitor(new UpdateMonitorRequest
    {
        Id = "some example string",
        Body = new MonitorCreate { Url = "https://example.com", MonitorType = MonitorType.Status },
    });
    // TODO: Handle 'response' of type MonitorResource
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

<code>[UpdateMonitorRequest](src/BetterStack/Requests/Monitors/UpdateMonitorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResource](src/BetterStack/Models/MonitorResource.cs)</code>

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## StatusPages

> Source: [StatusPages](src/BetterStack/Api/StatusPages.cs)

<details>
<summary><code>Task CreateStatusPage(CreateStatusPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.StatusPages.CreateStatusPage(new CreateStatusPageRequest
    {
        Body = new StatusPageCreate
        {
            CompanyName = "some example string",
            CompanyUrl = "https://example.com",
            Subdomain = "some example string",
        },
    });
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

<code>[CreateStatusPageRequest](src/BetterStack/Requests/StatusPages/CreateStatusPageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteStatusPage(DeleteStatusPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.StatusPages.DeleteStatusPage(new DeleteStatusPageRequest { Id = "some example string" });
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

<code>[DeleteStatusPageRequest](src/BetterStack/Requests/StatusPages/DeleteStatusPageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetStatusPage(GetStatusPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.StatusPages.GetStatusPage(new GetStatusPageRequest { Id = "some example string" });
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

<code>[GetStatusPageRequest](src/BetterStack/Requests/StatusPages/GetStatusPageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListStatusPages(ListStatusPagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.StatusPages.ListStatusPages(new ListStatusPagesRequest());
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

<code>[ListStatusPagesRequest](src/BetterStack/Requests/StatusPages/ListStatusPagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListStatusPagesInGroup(ListStatusPagesInGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.StatusPages.ListStatusPagesInGroup(new ListStatusPagesInGroupRequest { Id = "some example string" });
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

<code>[ListStatusPagesInGroupRequest](src/BetterStack/Requests/StatusPages/ListStatusPagesInGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateStatusPage(UpdateStatusPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.StatusPages.UpdateStatusPage(new UpdateStatusPageRequest
    {
        Id = "some example string",
        Body = new StatusPageCreate
        {
            CompanyName = "some example string",
            CompanyUrl = "https://example.com",
            Subdomain = "some example string",
        },
    });
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

<code>[UpdateStatusPageRequest](src/BetterStack/Requests/StatusPages/UpdateStatusPageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BetterStack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/BetterStack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

