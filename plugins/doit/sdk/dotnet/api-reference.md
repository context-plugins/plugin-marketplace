# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [DoiTClient](src/DoiT/DoiTClient.cs)

## AccountTeam

> Source: [AccountTeam](src/DoiT/Api/AccountTeam.cs)

<details>
<summary><code>Task&lt;CustomersV1AccountTeamResponse&gt; ListAccountTeam(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all DoiT account managers assigned to your organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AccountTeam.ListAccountTeam();
    // TODO: Handle 'response' of type CustomersV1AccountTeamResponse
}
catch (ApiException<ListAccountTeamError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomersV1AccountTeamResponse](src/DoiT/Models/CustomersV1AccountTeamResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListAccountTeamError](src/DoiT/Errors/ListAccountTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Alerts

> Source: [Alerts](src/DoiT/Api/Alerts.cs)

<details>
<summary><code>Task&lt;Alert&gt; CreateAlert(CreateAlertRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new alert.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Alerts.CreateAlert(new CreateAlertRequest
    {
        Body = new AlertRequest
        {
            Name = "Monthly spend",
            Config = new AlertConfig
            {
                Metric = new MetricConfig { Type = "basic", Value = "cost" },
                Currency = Currency.Usd,
                TimeInterval = TimeInterval.Month,
                Condition = Condition.ValueMember,
                Operator = MetricFilterText.Gt,
                Value = 1000d,
            },
            Recipients = ["finops@example.com"],
        },
    });
    // TODO: Handle 'response' of type Alert
}
catch (ApiException<CreateAlertError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAlertRequest](src/DoiT/Requests/Alerts/CreateAlertRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Alert](src/DoiT/Models/Alert.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateAlertError](src/DoiT/Errors/CreateAlertError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAlert(DeleteAlertRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the alert specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Alerts.DeleteAlert(new DeleteAlertRequest { Id = "some example string" });
}
catch (ApiException<DeleteAlertError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAlertRequest](src/DoiT/Requests/Alerts/DeleteAlertRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteAlertError](src/DoiT/Errors/DeleteAlertError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Alert&gt; GetAlert(GetAlertRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an alert by the specified Id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Alerts.GetAlert(new GetAlertRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Alert
}
catch (ApiException<GetAlertError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAlertRequest](src/DoiT/Requests/Alerts/GetAlertRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Alert](src/DoiT/Models/Alert.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetAlertError](src/DoiT/Errors/GetAlertError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AlertSlackChannelList&gt; ListAlertSlackChannels(ListAlertSlackChannelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Slack destinations eligible for Alert notifications for the authenticated customer and caller. Returns canonical identifiers for recipientsSlackChannels and integration status. User credentials include visible private channels; service accounts return public/shared channels only. Results are sorted by stable destination identity. Keep nameContains unchanged when following pageToken.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Alerts.ListAlertSlackChannels(new ListAlertSlackChannelsRequest());
    // TODO: Handle 'response' of type AlertSlackChannelList
}
catch (ApiException<ListAlertSlackChannelsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAlertSlackChannelsRequest](src/DoiT/Requests/Alerts/ListAlertSlackChannelsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AlertSlackChannelList](src/DoiT/Models/AlertSlackChannelList.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListAlertSlackChannelsError](src/DoiT/Errors/ListAlertSlackChannelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExternalAlertList&gt; ListAlerts(ListAlertsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of alerts that your account has access to.
Alerts are listed in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Alerts.ListAlerts(new ListAlertsRequest
    {
        Filter = "name:test",
        NameContains = "monthly spend",
    });
    // TODO: Handle 'response' of type ExternalAlertList
}
catch (ApiException<ListAlertsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAlertsRequest](src/DoiT/Requests/Alerts/ListAlertsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExternalAlertList](src/DoiT/Models/ExternalAlertList.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListAlertsError](src/DoiT/Errors/ListAlertsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Alert&gt; UpdateAlert(UpdateAlertRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the alert specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Alerts.UpdateAlert(new UpdateAlertRequest
    {
        Id = "some example string",
        Body = new AlertUpdateRequest
        {
            RecipientsSlackChannels = [new AlertSlackChannelRequest { Id = "C0123456789", Workspace = "acme" }],
            Recipients = ["finops@example.com"],
        },
    });
    // TODO: Handle 'response' of type Alert
}
catch (ApiException<UpdateAlertError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateAlertRequest](src/DoiT/Requests/Alerts/UpdateAlertRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Alert](src/DoiT/Models/Alert.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateAlertError](src/DoiT/Errors/UpdateAlertError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Allocations

> Source: [Allocations](src/DoiT/Api/Allocations.cs)

<details>
<summary><code>Task&lt;Allocation&gt; CreateAllocation(CreateAllocationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new allocation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Allocations.CreateAllocation(new CreateAllocationOperationRequest());
    // TODO: Handle 'response' of type Allocation
}
catch (ApiException<CreateAllocationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAllocationOperationRequest](src/DoiT/Requests/Allocations/CreateAllocationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Allocation](src/DoiT/Models/Allocation.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateAllocationError](src/DoiT/Errors/CreateAllocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteAllocation(DeleteAllocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the allocation specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Allocations.DeleteAllocation(new DeleteAllocationRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteAllocationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAllocationRequest](src/DoiT/Requests/Allocations/DeleteAllocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteAllocationError](src/DoiT/Errors/DeleteAllocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Allocation&gt; GetAllocation(GetAllocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an allocation by the specified Id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Allocations.GetAllocation(new GetAllocationRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Allocation
}
catch (ApiException<GetAllocationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllocationRequest](src/DoiT/Requests/Allocations/GetAllocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Allocation](src/DoiT/Models/Allocation.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetAllocationError](src/DoiT/Errors/GetAllocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsV1AllocationsResponse&gt; ListAllocations(ListAllocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of allocations that your account has access to.
Allocations are listed in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Allocations.ListAllocations(new ListAllocationsRequest
    {
        Filter = "type:custom",
        NameContains = "monthly spend",
    });
    // TODO: Handle 'response' of type AnalyticsV1AllocationsResponse
}
catch (ApiException<ListAllocationsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAllocationsRequest](src/DoiT/Requests/Allocations/ListAllocationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsV1AllocationsResponse](src/DoiT/Models/AnalyticsV1AllocationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListAllocationsError](src/DoiT/Errors/ListAllocationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Allocation&gt; UpdateAllocation(UpdateAllocationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the allocation specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Allocations.UpdateAllocation(new UpdateAllocationOperationRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type Allocation
}
catch (ApiException<UpdateAllocationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateAllocationOperationRequest](src/DoiT/Requests/Allocations/UpdateAllocationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Allocation](src/DoiT/Models/Allocation.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateAllocationError](src/DoiT/Errors/UpdateAllocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Annotations

> Source: [Annotations](src/DoiT/Api/Annotations.cs)

<details>
<summary><code>Task&lt;AnnotationListItem&gt; CreateAnnotation(CreateAnnotationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new annotation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Annotations.CreateAnnotation(new CreateAnnotationOperationRequest
    {
        Body = new CreateAnnotationRequest
        {
            Content = "some example string",
            Timestamp = DateTimeOffset.Parse("2024-01-15T09:30:00Z"),
        },
    });
    // TODO: Handle 'response' of type AnnotationListItem
}
catch (ApiException<CreateAnnotationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAnnotationOperationRequest](src/DoiT/Requests/Annotations/CreateAnnotationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnnotationListItem](src/DoiT/Models/AnnotationListItem.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateAnnotationError](src/DoiT/Errors/CreateAnnotationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteAnnotation(DeleteAnnotationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the annotation specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Annotations.DeleteAnnotation(new DeleteAnnotationRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteAnnotationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAnnotationRequest](src/DoiT/Requests/Annotations/DeleteAnnotationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteAnnotationError](src/DoiT/Errors/DeleteAnnotationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnnotationListItem&gt; GetAnnotation(GetAnnotationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an annotation by the specified Id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Annotations.GetAnnotation(new GetAnnotationRequest { Id = "some example string" });
    // TODO: Handle 'response' of type AnnotationListItem
}
catch (ApiException<GetAnnotationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAnnotationRequest](src/DoiT/Requests/Annotations/GetAnnotationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnnotationListItem](src/DoiT/Models/AnnotationListItem.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetAnnotationError](src/DoiT/Errors/GetAnnotationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsV1AnnotationsResponse&gt; ListAnnotations(ListAnnotationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of annotations that your account has access to.
Annotations are listed in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Annotations.ListAnnotations(new ListAnnotationsRequest { Filter = "content:budget" });
    // TODO: Handle 'response' of type AnalyticsV1AnnotationsResponse
}
catch (ApiException<ListAnnotationsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAnnotationsRequest](src/DoiT/Requests/Annotations/ListAnnotationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsV1AnnotationsResponse](src/DoiT/Models/AnalyticsV1AnnotationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListAnnotationsError](src/DoiT/Errors/ListAnnotationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnnotationListItem&gt; UpdateAnnotation(UpdateAnnotationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the annotation specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Annotations.UpdateAnnotation(new UpdateAnnotationOperationRequest
    {
        Id = "some example string",
        Body = new UpdateAnnotationRequest { Content = "Updated annotation content" },
    });
    // TODO: Handle 'response' of type AnnotationListItem
}
catch (ApiException<UpdateAnnotationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateAnnotationOperationRequest](src/DoiT/Requests/Annotations/UpdateAnnotationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnnotationListItem](src/DoiT/Models/AnnotationListItem.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateAnnotationError](src/DoiT/Errors/UpdateAnnotationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Anomalies

> Source: [Anomalies](src/DoiT/Api/Anomalies.cs)

<details>
<summary><code>Task&lt;AnomaliesV1Response&gt; GetAnomaly(GetAnomalyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified anomaly.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Anomalies.GetAnomaly(new GetAnomalyRequest { Id = "some example string" });
    // TODO: Handle 'response' of type AnomaliesV1Response
}
catch (ApiException<GetAnomalyError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAnomalyRequest](src/DoiT/Requests/Anomalies/GetAnomalyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnomaliesV1Response](src/DoiT/Models/AnomaliesV1Response.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetAnomalyError](src/DoiT/Errors/GetAnomalyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnomaliesV1ExplanationResponse&gt; GetAnomalyExplanation(GetAnomalyExplanationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a likely-cause explanation for the specified anomaly, alongside the deterministic facts and evidence references it was generated from. The explanation itself is AI-generated; it is always returned separately from the deterministic `facts`, and is marked as such in the `explanation` object. Generation is ephemeral: no conversation is persisted on your behalf.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Anomalies.GetAnomalyExplanation(new GetAnomalyExplanationRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type AnomaliesV1ExplanationResponse
}
catch (ApiException<GetAnomalyExplanationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAnomalyExplanationRequest](src/DoiT/Requests/Anomalies/GetAnomalyExplanationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnomaliesV1ExplanationResponse](src/DoiT/Models/AnomaliesV1ExplanationResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetAnomalyExplanationError](src/DoiT/Errors/GetAnomalyExplanationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnomaliesResponse&gt; ListAnomalies(ListAnomaliesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of detected anomalies.
Anomalies can be sorted by `startTime`, `severityLevel`, or `costOfAnomaly` using `sortBy` and `sortOrder`. By default they are sorted by `startTime` in descending order (most recent first).
The sort order is total and reproducible: ties on the selected field are broken by `startTime` descending and then by anomaly `id` ascending, so the same result set always paginates in the same order.
The `notifications` array is always present on each anomaly item; it is empty unless `includeNotifications=true` is supplied.
**Pagination stability**: `sortBy`, `sortOrder`, `filter`, `minCreationTime`, and `maxCreationTime` must be held constant across a pagination sequence. A `pageToken` presented with any of them changed is rejected with `400`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Anomalies.ListAnomalies(new ListAnomaliesRequest { Filter = "severityLevel:critical" });
    // TODO: Handle 'response' of type AnomaliesResponse
}
catch (ApiException<ListAnomaliesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAnomaliesRequest](src/DoiT/Requests/Anomalies/ListAnomaliesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnomaliesResponse](src/DoiT/Models/AnomaliesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListAnomaliesError](src/DoiT/Errors/ListAnomaliesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PatchAnomaly(PatchAnomalyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the review status of the anomaly identified by `{id}`, the same identifier `getAnomaly` accepts. Mirrors the review workflow available in the console: set `reviewStatus`, and when resolving, qualify it with `resolution` and optionally a `resolutionNote` (feedback reason and comment). The change is recorded in the anomaly's review history exactly like a console update, and the actor is derived from the API credentials - never from the request body.

Validation: `reviewStatus` is one of `NEEDS_REVIEW`, `UNDER_REVIEW`, `RESOLVED`; `resolution` (`ANOMALY_CONFIRMED` or `NOT_ANOMALY`) is required when `reviewStatus` is `RESOLVED` and forbidden otherwise; `resolutionNote.reason` must belong to the given `resolution` - `SECURITY_BREACH`, `MISCONFIGURATION`, `UNINTENTIONAL_PROVISIONING`, `EXPECTED_COST_SPIKE` or `ANOMALOUS_OTHER` for `ANOMALY_CONFIRMED`, and `FAULTY_ANOMALY_DETECTION_MODEL`, `INCORRECT_DATA`, `LOW_IMPACT` or `NON_ANOMALOUS_OTHER` for `NOT_ANOMALY`. Requires the `AnomaliesManager` permission and DoiT API access (`platform:externalApi`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Anomalies.PatchAnomaly(new PatchAnomalyRequest
    {
        Id = "some example string",
        Body = new AnomalyStatusUpdate { CustomerFeedback = new CustomerFeedback() },
    });
}
catch (ApiException<PatchAnomalyError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PatchAnomalyRequest](src/DoiT/Requests/Anomalies/PatchAnomalyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[PatchAnomalyError](src/DoiT/Errors/PatchAnomalyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Assets

> Source: [Assets](src/DoiT/Api/Assets.cs)

<details>
<summary><code>Task&lt;AssetResponse&gt; CreateAsset(CreateAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new asset.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Assets.CreateAsset(new CreateAssetRequest());
    // TODO: Handle 'response' of type AssetResponse
}
catch (ApiException<CreateAssetError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAssetRequest](src/DoiT/Requests/Assets/CreateAssetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AssetResponse](src/DoiT/Models/AssetResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateAssetError](src/DoiT/Errors/CreateAssetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AssetItemDetailed&gt; GetAsset(GetAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full details of an asset specified by the asset id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Assets.GetAsset(new GetAssetRequest { Id = "some example string" });
    // TODO: Handle 'response' of type AssetItemDetailed
}
catch (ApiException<GetAssetError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAssetRequest](src/DoiT/Requests/Assets/GetAssetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AssetItemDetailed](src/DoiT/Models/AssetItemDetailed.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetAssetError](src/DoiT/Errors/GetAssetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BillingV1AssetsResponse1&gt; IdOfAsset(IdOfAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing asset, such as G Suite/Workspace or Office 365 subscription, to add or remove licenses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Assets.IdOfAsset(new IdOfAssetRequest { Id = "some example string" });
    // TODO: Handle 'response' of type BillingV1AssetsResponse1
}
catch (ApiException<IdOfAssetError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[IdOfAssetRequest](src/DoiT/Requests/Assets/IdOfAssetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillingV1AssetsResponse1](src/DoiT/Models/BillingV1AssetsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[IdOfAssetError](src/DoiT/Errors/IdOfAssetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BillingV1AssetsResponse&gt; IdOfAssets(IdOfAssetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all available customer assets, such as Google Cloud billing accounts, G Suite/Workspace subscriptions, etc.
Assets are returned in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Assets.IdOfAssets(new IdOfAssetsRequest());
    // TODO: Handle 'response' of type BillingV1AssetsResponse
}
catch (ApiException<IdOfAssetsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[IdOfAssetsRequest](src/DoiT/Requests/Assets/IdOfAssetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillingV1AssetsResponse](src/DoiT/Models/BillingV1AssetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[IdOfAssetsError](src/DoiT/Errors/IdOfAssetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Auth

> Source: [Auth](src/DoiT/Api/Auth.cs)

<details>
<summary><code>Task&lt;ValidateResponse&gt; Validate(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the domain, email, and effective permissions of the current API user. Callable by any authenticated token, regardless of its own permissions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Auth.Validate();
    // TODO: Handle 'response' of type ValidateResponse
}
catch (ApiException<ValidateError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ValidateResponse](src/DoiT/Models/ValidateResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ValidateError](src/DoiT/Errors/ValidateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Ava

> Source: [Ava](src/DoiT/Api/Ava.cs)

<details>
<summary><code>Task&lt;IAsyncEnumerable&lt;string&gt;&gt; AskAvaStreaming(AskAvaStreamingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a question to Ava and receive a streaming response via Server-Sent Events (SSE).
The response streams back events containing the answer text, conversation ID, and message metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ava.AskAvaStreaming(new AskAvaStreamingRequest
    {
        Body = new AvaAskRequest { Question = "some example string" },
    });
    // TODO: Handle 'response' of type IAsyncEnumerable<string>
}
catch (ApiException<AskAvaStreamingError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AskAvaStreamingRequest](src/DoiT/Requests/Ava/AskAvaStreamingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IAsyncEnumerable&lt;string&gt;</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[AskAvaStreamingError](src/DoiT/Errors/AskAvaStreamingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AvaAskSyncResponse&gt; AskAvaSync(AskAvaSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a question to Ava and receive a synchronous response.
Set `ephemeral` to `true` to skip conversation persistence (recommended for programmatic consumers).
When `ephemeral` is `false` (default), the response includes a `conversationId` that can be used with the delete endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ava.AskAvaSync(new AskAvaSyncRequest
    {
        Body = new AvaAskSyncRequest { Question = "some example string" },
    });
    // TODO: Handle 'response' of type AvaAskSyncResponse
}
catch (ApiException<AskAvaSyncError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AskAvaSyncRequest](src/DoiT/Requests/Ava/AskAvaSyncRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AvaAskSyncResponse](src/DoiT/Models/AvaAskSyncResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[AskAvaSyncError](src/DoiT/Errors/AskAvaSyncError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AvaFeedback(AvaFeedbackOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit feedback on an Ava answer to help improve response quality.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Ava.AvaFeedback(new AvaFeedbackOperationRequest
    {
        Body = new AvaFeedbackRequest
        {
            ConversationId = "some example string",
            AnswerId = "some example string",
            Feedback = new Feedback { Positive = true },
        },
    });
}
catch (ApiException<AvaFeedbackError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AvaFeedbackOperationRequest](src/DoiT/Requests/Ava/AvaFeedbackOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[AvaFeedbackError](src/DoiT/Errors/AvaFeedbackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAvaConversation(DeleteAvaConversationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Ava conversation by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Ava.DeleteAvaConversation(new DeleteAvaConversationRequest { ConversationId = "some example string" });
}
catch (ApiException<DeleteAvaConversationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAvaConversationRequest](src/DoiT/Requests/Ava/DeleteAvaConversationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteAvaConversationError](src/DoiT/Errors/DeleteAvaConversationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BillingExplainerApi

> Source: [BillingExplainerApi](src/DoiT/Api/BillingExplainerApi.cs)

<details>
<summary><code>Task&lt;BillingExplainerCustomer&gt; GetBillingExplainerPerPayer(GetBillingExplainerPerPayerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the invoiced cost changes for each payer in the authenticated tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingExplainerApi.GetBillingExplainerPerPayer(new GetBillingExplainerPerPayerRequest
    {
        InvoiceMonth = "2026-06",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type BillingExplainerCustomer
}
catch (ApiException<GetBillingExplainerPerPayerError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBillingExplainerPerPayerRequest](src/DoiT/Requests/BillingExplainerApi/GetBillingExplainerPerPayerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillingExplainerCustomer](src/DoiT/Models/BillingExplainerCustomer.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetBillingExplainerPerPayerError](src/DoiT/Errors/GetBillingExplainerPerPayerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EntityInvoiceExplainer&gt; GetEntityInvoiceExplainer(GetEntityInvoiceExplainerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns invoiced cost changes for an invoice owned by the specified billing profile in the authenticated tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingExplainerApi.GetEntityInvoiceExplainer(new GetEntityInvoiceExplainerRequest
    {
        BillingProfileId = "CUST-12345",
        InvoiceNumber = "IN244004936",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type EntityInvoiceExplainer
}
catch (ApiException<GetEntityInvoiceExplainerError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEntityInvoiceExplainerRequest](src/DoiT/Requests/BillingExplainerApi/GetEntityInvoiceExplainerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntityInvoiceExplainer](src/DoiT/Models/EntityInvoiceExplainer.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetEntityInvoiceExplainerError](src/DoiT/Errors/GetEntityInvoiceExplainerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BillingTransfer

> Source: [BillingTransfer](src/DoiT/Api/BillingTransfer.cs)

<details>
<summary><code>Task&lt;EndCustomerMappingBatchResult&gt; CreateBillingTransferEndCustomerMappings(CreateBillingTransferEndCustomerMappingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Maps end-customer AWS accounts under a reseller's PMA to their DoiT tenant, as part of AWS
billing transfer onboarding. Reseller-only; distributors are explicitly denied (`403`).

Unlike `POST /billingtransfer/v1/resellerhandshakes`, this endpoint has no
`Idempotency-Key` requirement and no `dryRun` support.

This path is a deliberate exception to the de-hyphenation convention used by the sibling
`resellerhandshakes` and `programmanagementaccounts` paths — it stays hyphenated to match
the existing Go route and its console-facing equivalent.

Each item in the batch is processed independently; per-item outcomes are returned in
`results[]` with HTTP `200`. Malformed items are rejected up front and reported in
`invalidItems` without processing any of the batch.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingTransfer.CreateBillingTransferEndCustomerMappings(
        new CreateBillingTransferEndCustomerMappingsRequest
        {
            XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
            Body = new EndCustomerMappingBatchCreate
            {
                DpmaId = "some example string",
                ResellerPmaAccountId = "some example string",
                Items = [
                    new EndCustomerMappingItem
                    {
                        EcAccountId = "some example string",
                        EcCustomerId = "some example string",
                    },
                ],
            },
        });
    // TODO: Handle 'response' of type EndCustomerMappingBatchResult
}
catch (ApiException<CreateBillingTransferEndCustomerMappingsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBillingTransferEndCustomerMappingsRequest](src/DoiT/Requests/BillingTransfer/CreateBillingTransferEndCustomerMappingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EndCustomerMappingBatchResult](src/DoiT/Models/EndCustomerMappingBatchResult.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateBillingTransferEndCustomerMappingsError](src/DoiT/Errors/CreateBillingTransferEndCustomerMappingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ResellerHandshakeBatchResult&gt; CreateBillingTransferResellerHandshakes(CreateBillingTransferResellerHandshakesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Maps reseller to distributor; also sends the handshake if required, as part of AWS
billing transfer onboarding. Distributor-only; callers without the ChannelOps distributor
tier entitlement receive `403`.

Each item in the batch is processed independently; per-item outcomes are returned in
`results[]` with HTTP `200` even when some items fail. Malformed items (missing fields,
duplicate `resellerPmaAccountId` within the batch) are rejected up front with `422` and
reported in `invalidItems`, and none of the batch is processed in that case.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingTransfer.CreateBillingTransferResellerHandshakes(
        new CreateBillingTransferResellerHandshakesRequest
        {
            IdempotencyKey = "some example string",
            XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
            Body = new ResellerHandshakeBatchCreate
            {
                DpmaId = "some example string",
                Items = [
                    new ResellerHandshakeItem
                    {
                        ResellerCustomerId = "some example string",
                        ResellerPmaAccountId = "some example string",
                    },
                ],
            },
        });
    // TODO: Handle 'response' of type ResellerHandshakeBatchResult
}
catch (ApiException<CreateBillingTransferResellerHandshakesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBillingTransferResellerHandshakesRequest](src/DoiT/Requests/BillingTransfer/CreateBillingTransferResellerHandshakesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResellerHandshakeBatchResult](src/DoiT/Models/ResellerHandshakeBatchResult.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateBillingTransferResellerHandshakesError](src/DoiT/Errors/CreateBillingTransferResellerHandshakesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProgramManagementAccountsStatusResponse&gt; GetBillingTransferProgramManagementAccountsStatus(GetBillingTransferProgramManagementAccountsStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lightweight polling surface for the onboarding wizard: returns each of the caller's PMAs
with only its IAM status/diff and timestamps — no tenant fan-out, no handshake
aggregation, no pagination. Distributor-only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingTransfer.GetBillingTransferProgramManagementAccountsStatus(
        new GetBillingTransferProgramManagementAccountsStatusRequest { XTenantId = "Kp2mN8qL4vR0sT1wX3yZ" });
    // TODO: Handle 'response' of type ProgramManagementAccountsStatusResponse
}
catch (ApiException<GetBillingTransferProgramManagementAccountsStatusError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBillingTransferProgramManagementAccountsStatusRequest](src/DoiT/Requests/BillingTransfer/GetBillingTransferProgramManagementAccountsStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProgramManagementAccountsStatusResponse](src/DoiT/Models/ProgramManagementAccountsStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetBillingTransferProgramManagementAccountsStatusError](src/DoiT/Errors/GetBillingTransferProgramManagementAccountsStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListEndCustomersResponse&gt; ListBillingTransferEndCustomers(ListBillingTransferEndCustomersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the end-customer AWS account mappings under a reseller's program management
account, identified by `dpmaId` and `resellerPmaAccountId`. Callable by the reseller who
owns the PMA or the distributor who owns the DPMA.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingTransfer.ListBillingTransferEndCustomers(
        new ListBillingTransferEndCustomersRequest
        {
            DpmaId = "some example string",
            ResellerPmaAccountId = "123456789012",
            XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
        });
    // TODO: Handle 'response' of type ListEndCustomersResponse
}
catch (ApiException<ListBillingTransferEndCustomersError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBillingTransferEndCustomersRequest](src/DoiT/Requests/BillingTransfer/ListBillingTransferEndCustomersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListEndCustomersResponse](src/DoiT/Models/ListEndCustomersResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListBillingTransferEndCustomersError](src/DoiT/Errors/ListBillingTransferEndCustomersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListEndCustomersResponse&gt; ListBillingTransferEndCustomersByReseller(ListBillingTransferEndCustomersByResellerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Same result as `GET /billingtransfer/v1/end-customers`, identified by
`resellerPmaAccountId` alone (no `dpmaId` needed). Callable by the reseller who owns the
PMA or the distributor who owns its DPMA.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingTransfer.ListBillingTransferEndCustomersByReseller(
        new ListBillingTransferEndCustomersByResellerRequest
        {
            ResellerPmaAccountId = "123456789012",
            XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
        });
    // TODO: Handle 'response' of type ListEndCustomersResponse
}
catch (ApiException<ListBillingTransferEndCustomersByResellerError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBillingTransferEndCustomersByResellerRequest](src/DoiT/Requests/BillingTransfer/ListBillingTransferEndCustomersByResellerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListEndCustomersResponse](src/DoiT/Models/ListEndCustomersResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListBillingTransferEndCustomersByResellerError](src/DoiT/Errors/ListBillingTransferEndCustomersByResellerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProgramManagementAccountList&gt; ListBillingTransferProgramManagementAccounts(ListBillingTransferProgramManagementAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the caller's program management accounts (PMAs) and the reseller tenants mapped to
each one, including AWS Organizations handshake status per account. Distributor-only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingTransfer.ListBillingTransferProgramManagementAccounts(
        new ListBillingTransferProgramManagementAccountsRequest { XTenantId = "Kp2mN8qL4vR0sT1wX3yZ" });
    // TODO: Handle 'response' of type ProgramManagementAccountList
}
catch (ApiException<ListBillingTransferProgramManagementAccountsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBillingTransferProgramManagementAccountsRequest](src/DoiT/Requests/BillingTransfer/ListBillingTransferProgramManagementAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProgramManagementAccountList](src/DoiT/Models/ProgramManagementAccountList.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListBillingTransferProgramManagementAccountsError](src/DoiT/Errors/ListBillingTransferProgramManagementAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResellerAccountsResponse&gt; ListBillingTransferResellerAccounts(ListBillingTransferResellerAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists every reseller program management account (RPMA) node belonging to the calling
reseller, with handshake state and status but without end-customer tenants — the
reseller-tier analog of `GET /billingtransfer/v1/programmanagementaccounts`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingTransfer.ListBillingTransferResellerAccounts(
        new ListBillingTransferResellerAccountsRequest { XTenantId = "Kp2mN8qL4vR0sT1wX3yZ" });
    // TODO: Handle 'response' of type ListResellerAccountsResponse
}
catch (ApiException<ListBillingTransferResellerAccountsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBillingTransferResellerAccountsRequest](src/DoiT/Requests/BillingTransfer/ListBillingTransferResellerAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResellerAccountsResponse](src/DoiT/Models/ListResellerAccountsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListBillingTransferResellerAccountsError](src/DoiT/Errors/ListBillingTransferResellerAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResellerAccountsWithTenantsResponse&gt; ListBillingTransferResellerAccountsWithTenants(ListBillingTransferResellerAccountsWithTenantsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists every reseller PMA node belonging to the calling reseller, each with the
end-customer tenants connected under it — the reseller-tier analog of
`GET /billingtransfer/v1/programmanagementaccounts`. `region`, `iamStatus` and
`lastRefreshTime` are inherited from the parent DPMA root; the reseller node itself
carries no IAM/region metadata of its own.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BillingTransfer.ListBillingTransferResellerAccountsWithTenants(
        new ListBillingTransferResellerAccountsWithTenantsRequest { XTenantId = "Kp2mN8qL4vR0sT1wX3yZ" });
    // TODO: Handle 'response' of type ListResellerAccountsWithTenantsResponse
}
catch (ApiException<ListBillingTransferResellerAccountsWithTenantsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBillingTransferResellerAccountsWithTenantsRequest](src/DoiT/Requests/BillingTransfer/ListBillingTransferResellerAccountsWithTenantsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResellerAccountsWithTenantsResponse](src/DoiT/Models/ListResellerAccountsWithTenantsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListBillingTransferResellerAccountsWithTenantsError](src/DoiT/Errors/ListBillingTransferResellerAccountsWithTenantsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BudgetSuggestions

> Source: [BudgetSuggestions](src/DoiT/Api/BudgetSuggestions.cs)

<details>
<summary><code>Task&lt;AnalyticsV1BudgetSuggestionsActionsAcceptResponse&gt; AcceptBudgetSuggestion(AcceptBudgetSuggestionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks the suggestion as accepted and links it to an existing budget. Create the budget first via
`POST /analytics/v1/budgets`, then pass its `id` as `budgetId`. The budget must belong to your account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BudgetSuggestions.AcceptBudgetSuggestion(new AcceptBudgetSuggestionRequest
    {
        Id = "some example string",
        Body = new BudgetSuggestionAcceptRequest { BudgetId = "some example string" },
    });
    // TODO: Handle 'response' of type AnalyticsV1BudgetSuggestionsActionsAcceptResponse
}
catch (ApiException<AcceptBudgetSuggestionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AcceptBudgetSuggestionRequest](src/DoiT/Requests/BudgetSuggestions/AcceptBudgetSuggestionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsV1BudgetSuggestionsActionsAcceptResponse](src/DoiT/Models/AnalyticsV1BudgetSuggestionsActionsAcceptResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[AcceptBudgetSuggestionError](src/DoiT/Errors/AcceptBudgetSuggestionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsV1BudgetSuggestionsActionsDismissResponse&gt; DismissBudgetSuggestion(DismissBudgetSuggestionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks the suggestion as dismissed so it no longer appears in the pending list.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BudgetSuggestions.DismissBudgetSuggestion(new DismissBudgetSuggestionRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type AnalyticsV1BudgetSuggestionsActionsDismissResponse
}
catch (ApiException<DismissBudgetSuggestionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DismissBudgetSuggestionRequest](src/DoiT/Requests/BudgetSuggestions/DismissBudgetSuggestionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsV1BudgetSuggestionsActionsDismissResponse](src/DoiT/Models/AnalyticsV1BudgetSuggestionsActionsDismissResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DismissBudgetSuggestionError](src/DoiT/Errors/DismissBudgetSuggestionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsV1BudgetSuggestionsResponse&gt; ListBudgetSuggestions(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the pending AI-generated budget suggestions for your account. The set is small (a handful
of pending suggestions) and is returned in full. Each suggestion can be accepted (after you create a
matching budget via `POST /analytics/v1/budgets`) or dismissed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BudgetSuggestions.ListBudgetSuggestions();
    // TODO: Handle 'response' of type AnalyticsV1BudgetSuggestionsResponse
}
catch (ApiException<ListBudgetSuggestionsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsV1BudgetSuggestionsResponse](src/DoiT/Models/AnalyticsV1BudgetSuggestionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListBudgetSuggestionsError](src/DoiT/Errors/ListBudgetSuggestionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Budgets

> Source: [Budgets](src/DoiT/Api/Budgets.cs)

<details>
<summary><code>Task&lt;BudgetApi&gt; CreateBudget(CreateBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new budget

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Budgets.CreateBudget(new CreateBudgetRequest
    {
        Body = new BudgetCreateUpdateRequest
        {
            Amount = 100d,
            Collaborators = [new Collaborator { Email = "placeholder@example.com", Role = Role.Owner }],
            Currency = Currency.Usd,
            Name = "monthly-cloud-budget",
            Scopes = [
                new ExternalConfigFilter
                {
                    Id = "cloud_provider",
                    Type = DimensionsTypes.Fixed,
                    Values = ["amazon-web-services"],
                    Mode = Mode.IsMember,
                },
            ],
            StartPeriod = 1704067200000L,
            TimeInterval = "month",
            Type = "recurring",
            UsePrevSpend = false,
        },
    });
    // TODO: Handle 'response' of type BudgetApi
}
catch (ApiException<CreateBudgetError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBudgetRequest](src/DoiT/Requests/Budgets/CreateBudgetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BudgetApi](src/DoiT/Models/BudgetApi.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateBudgetError](src/DoiT/Errors/CreateBudgetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteBudget(DeleteBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified budget.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Budgets.DeleteBudget(new DeleteBudgetRequest { Id = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteBudgetError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBudgetRequest](src/DoiT/Requests/Budgets/DeleteBudgetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteBudgetError](src/DoiT/Errors/DeleteBudgetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BudgetApi&gt; GetBudget(GetBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current utilization and configuration of the specified budget.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Budgets.GetBudget(new GetBudgetRequest { Id = "some example string" });
    // TODO: Handle 'response' of type BudgetApi
}
catch (ApiException<GetBudgetError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBudgetRequest](src/DoiT/Requests/Budgets/GetBudgetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BudgetApi](src/DoiT/Models/BudgetApi.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetBudgetError](src/DoiT/Errors/GetBudgetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsV1BudgetsResponse&gt; ListBudgets(ListBudgetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of budgets that your account has access to. Budgets are listed in reverse chronological order by default.
Each budget includes a server-computed `riskStatus` (`atRisk`, `onTrack`, or `unknown`), and the response includes a `riskAggregations` summary of risk counts across the full filtered result set (all pages, not just the current page).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Budgets.ListBudgets(new ListBudgetsRequest
    {
        Filter = "riskStatus:atRisk",
        NameContains = "monthly spend",
    });
    // TODO: Handle 'response' of type AnalyticsV1BudgetsResponse
}
catch (ApiException<ListBudgetsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBudgetsRequest](src/DoiT/Requests/Budgets/ListBudgetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsV1BudgetsResponse](src/DoiT/Models/AnalyticsV1BudgetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListBudgetsError](src/DoiT/Errors/ListBudgetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BudgetApi&gt; UpdateBudget(UpdateBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified budget.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Budgets.UpdateBudget(new UpdateBudgetRequest { Id = "some example string" });
    // TODO: Handle 'response' of type BudgetApi
}
catch (ApiException<UpdateBudgetError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateBudgetRequest](src/DoiT/Requests/Budgets/UpdateBudgetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BudgetApi](src/DoiT/Models/BudgetApi.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateBudgetError](src/DoiT/Errors/UpdateBudgetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CloudConnect

> Source: [CloudConnect](src/DoiT/Api/CloudConnect.cs)

<details>
<summary><code>Task&lt;AwsAccountResponse&gt; CreateAccountRole(CreateAccountRoleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates a CloudConnect document for an AWS account.
Unlike the CloudFormation variant, this endpoint does not update Firestore channel documents
or require a CloudFormation stack ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudConnect.CreateAccountRole(new CreateAccountRoleRequest
    {
        Body = new CoreV1CloudconnectAwsAccountsRequest
        {
            AccountId = "some example string",
            RoleArn = "some example string",
            EnabledFeatures = ["some example string"],
        },
    });
    // TODO: Handle 'response' of type AwsAccountResponse
}
catch (ApiException<CreateAccountRoleError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAccountRoleRequest](src/DoiT/Requests/CloudConnect/CreateAccountRoleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AwsAccountResponse](src/DoiT/Models/AwsAccountResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateAccountRoleError](src/DoiT/Errors/CreateAccountRoleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAccountRole(DeleteAccountRoleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a CloudConnect document for an AWS account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CloudConnect.DeleteAccountRole(new DeleteAccountRoleRequest { AccountId = "123456789012" });
}
catch (ApiException<DeleteAccountRoleError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAccountRoleRequest](src/DoiT/Requests/CloudConnect/DeleteAccountRoleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteAccountRoleError](src/DoiT/Errors/DeleteAccountRoleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AwsAccountResponse&gt; GetAwsAccount(GetAwsAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current state of an AWS account including role, supported features, and optional S3 bucket configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudConnect.GetAwsAccount(new GetAwsAccountRequest { AccountId = "123456789012" });
    // TODO: Handle 'response' of type AwsAccountResponse
}
catch (ApiException<GetAwsAccountError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAwsAccountRequest](src/DoiT/Requests/CloudConnect/GetAwsAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AwsAccountResponse](src/DoiT/Models/AwsAccountResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetAwsAccountError](src/DoiT/Errors/GetAwsAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SupportedFeaturesResponse&gt; GetCloudConnectSupportedFeatures(GetCloudConnectSupportedFeaturesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of supported features and their permission status for a cloud account connected via CloudConnect.
The account must belong to the authenticated customer. Supports AWS and Azure accounts.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudConnect.GetCloudConnectSupportedFeatures(
        new GetCloudConnectSupportedFeaturesRequest { AccountId = "some example string" });
    // TODO: Handle 'response' of type SupportedFeaturesResponse
}
catch (ApiException<GetCloudConnectSupportedFeaturesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCloudConnectSupportedFeaturesRequest](src/DoiT/Requests/CloudConnect/GetCloudConnectSupportedFeaturesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SupportedFeaturesResponse](src/DoiT/Models/SupportedFeaturesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCloudConnectSupportedFeaturesError](src/DoiT/Errors/GetCloudConnectSupportedFeaturesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AwsAccountResponse&gt; UpdateAwsFeature(UpdateAwsFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an AWS feature for an existing CloudConnect account.
Unlike the CloudFormation variant, this endpoint does not update Firestore channel documents,
require a CloudFormation stack ID, or handle StackSet member role ARNs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudConnect.UpdateAwsFeature(new UpdateAwsFeatureRequest
    {
        AccountId = "123456789012",
        Body = new CoreV1CloudconnectAwsAccountsRequest1 { EnabledFeatures = ["some example string"] },
    });
    // TODO: Handle 'response' of type AwsAccountResponse
}
catch (ApiException<UpdateAwsFeatureError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateAwsFeatureRequest](src/DoiT/Requests/CloudConnect/UpdateAwsFeatureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AwsAccountResponse](src/DoiT/Models/AwsAccountResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateAwsFeatureError](src/DoiT/Errors/UpdateAwsFeatureError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CloudDiagrams

> Source: [CloudDiagrams](src/DoiT/Api/CloudDiagrams.cs)

<details>
<summary><code>Task&lt;CloudDiagramExportJsonResponse&gt; ExportCloudDiagramJson(ExportCloudDiagramJsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports the full content of a diagram layer as a structured JSON document,
including all components and export metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudDiagrams.ExportCloudDiagramJson(new ExportCloudDiagramJsonRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type CloudDiagramExportJsonResponse
}
catch (ApiException<ExportCloudDiagramJsonError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExportCloudDiagramJsonRequest](src/DoiT/Requests/CloudDiagrams/ExportCloudDiagramJsonRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudDiagramExportJsonResponse](src/DoiT/Models/CloudDiagramExportJsonResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ExportCloudDiagramJsonError](src/DoiT/Errors/ExportCloudDiagramJsonError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;FindCloudDiagramsResponse&gt;&gt; FindCloudDiagrams(FindCloudDiagramsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns diagram URLs matching the provided resource IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudDiagrams.FindCloudDiagrams(new FindCloudDiagramsOperationRequest
    {
        Body = new FindCloudDiagramsRequest { Resources = ["some example string"] },
    });
    // TODO: Handle 'response' of type IReadOnlyList<FindCloudDiagramsResponse>
}
catch (ApiException<FindCloudDiagramsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FindCloudDiagramsOperationRequest](src/DoiT/Requests/CloudDiagrams/FindCloudDiagramsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[FindCloudDiagramsResponse](src/DoiT/Models/FindCloudDiagramsResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[FindCloudDiagramsError](src/DoiT/Errors/FindCloudDiagramsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudDiagramsGetResponse&gt; GetCloudDiagramComponents(GetCloudDiagramComponentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns diagram and layer data. When the request body is empty, returns all diagrams
the caller has access to. When the body is populated, returns full diagram data including
layer components projected to key display and cloud fields.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudDiagrams.GetCloudDiagramComponents(new GetCloudDiagramComponentsRequest());
    // TODO: Handle 'response' of type CloudDiagramsGetResponse
}
catch (ApiException<GetCloudDiagramComponentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCloudDiagramComponentsRequest](src/DoiT/Requests/CloudDiagrams/GetCloudDiagramComponentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudDiagramsGetResponse](src/DoiT/Models/CloudDiagramsGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCloudDiagramComponentsError](src/DoiT/Errors/GetCloudDiagramComponentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudDiagramCostSnapshot&gt; GetCloudDiagramCostSnapshot(GetCloudDiagramCostSnapshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a bounded cost snapshot for the specified diagram layer over a date window.
The response composes the diagram's total spend, period-over-period change, top
resources by cost (capped at 5), top services by cost (capped at 5), and a trend
series (most recent 12 buckets at the requested interval).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudDiagrams.GetCloudDiagramCostSnapshot(new GetCloudDiagramCostSnapshotRequest
    {
        Id = "some example string",
        StartDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
        EndDate = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
    });
    // TODO: Handle 'response' of type CloudDiagramCostSnapshot
}
catch (ApiException<GetCloudDiagramCostSnapshotError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCloudDiagramCostSnapshotRequest](src/DoiT/Requests/CloudDiagrams/GetCloudDiagramCostSnapshotRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudDiagramCostSnapshot](src/DoiT/Models/CloudDiagramCostSnapshot.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCloudDiagramCostSnapshotError](src/DoiT/Errors/GetCloudDiagramCostSnapshotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudDiagramLayerSnapshot&gt; GetCloudDiagramLayerSnapshot(GetCloudDiagramLayerSnapshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single snapshot of the specified diagram layer identified by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudDiagrams.GetCloudDiagramLayerSnapshot(new GetCloudDiagramLayerSnapshotRequest
    {
        Id = "some example string",
        SnapshotId = "some example string",
    });
    // TODO: Handle 'response' of type CloudDiagramLayerSnapshot
}
catch (ApiException<GetCloudDiagramLayerSnapshotError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCloudDiagramLayerSnapshotRequest](src/DoiT/Requests/CloudDiagrams/GetCloudDiagramLayerSnapshotRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudDiagramLayerSnapshot](src/DoiT/Models/CloudDiagramLayerSnapshot.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCloudDiagramLayerSnapshotError](src/DoiT/Errors/GetCloudDiagramLayerSnapshotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DiagramRelationshipsResponse&gt; GetCloudDiagramResourceRelationships(GetCloudDiagramResourceRelationshipsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Walks the diagram graph from the anchor resource and returns related resources.
Edge traversal walks the diagram's link set (same-scheme guard, BFS, cycle-safe);
group traversal walks the group membership set. The result list is capped at 200
relations; `truncated` is `true` when the cap is hit. Read-only: does not mutate
diagram state.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudDiagrams.GetCloudDiagramResourceRelationships(
        new GetCloudDiagramResourceRelationshipsRequest { Id = "some example string", Rid = "some example string" });
    // TODO: Handle 'response' of type DiagramRelationshipsResponse
}
catch (ApiException<GetCloudDiagramResourceRelationshipsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCloudDiagramResourceRelationshipsRequest](src/DoiT/Requests/CloudDiagrams/GetCloudDiagramResourceRelationshipsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DiagramRelationshipsResponse](src/DoiT/Models/DiagramRelationshipsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCloudDiagramResourceRelationshipsError](src/DoiT/Errors/GetCloudDiagramResourceRelationshipsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CloudDiagramStats&gt;&gt; GetCloudDiagramsStats(GetCloudDiagramsStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all diagrams with activity stats for the given time period.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudDiagrams.GetCloudDiagramsStats(new GetCloudDiagramsStatsRequest
    {
        Start = DateTimeOffset.Parse("2026-04-01T00:00:00Z"),
        End = DateTimeOffset.Parse("2026-04-28T00:00:00Z"),
    });
    // TODO: Handle 'response' of type IReadOnlyList<CloudDiagramStats>
}
catch (ApiException<GetCloudDiagramsStatsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCloudDiagramsStatsRequest](src/DoiT/Requests/CloudDiagrams/GetCloudDiagramsStatsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CloudDiagramStats](src/DoiT/Models/CloudDiagramStats.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCloudDiagramsStatsError](src/DoiT/Errors/GetCloudDiagramsStatsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudDiagramStatussheetComponents&gt; GetStatussheetComponents(GetStatussheetComponentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified components of a diagram layer. Provide at least one component
type with one or more IDs in the request body (for example, `node` or `element`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudDiagrams.GetStatussheetComponents(new GetStatussheetComponentsRequest
    {
        Id = "some example string",
        Body = new CloudDiagramStatussheetGetRequest(),
    });
    // TODO: Handle 'response' of type CloudDiagramStatussheetComponents
}
catch (ApiException<GetStatussheetComponentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetStatussheetComponentsRequest](src/DoiT/Requests/CloudDiagrams/GetStatussheetComponentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudDiagramStatussheetComponents](src/DoiT/Models/CloudDiagramStatussheetComponents.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetStatussheetComponentsError](src/DoiT/Errors/GetStatussheetComponentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CloudDiagramSnapshotActivityGroup&gt;&gt; ListCloudDiagramActivityGroups(ListCloudDiagramActivityGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns snapshot activity groups for the specified diagram layer,
ordered by timestamp descending. Each group contains a snapshot reference
and the individual activity records that belong to it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudDiagrams.ListCloudDiagramActivityGroups(new ListCloudDiagramActivityGroupsRequest
    {
        SsId = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<CloudDiagramSnapshotActivityGroup>
}
catch (ApiException<ListCloudDiagramActivityGroupsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCloudDiagramActivityGroupsRequest](src/DoiT/Requests/CloudDiagrams/ListCloudDiagramActivityGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CloudDiagramSnapshotActivityGroup](src/DoiT/Models/CloudDiagramSnapshotActivityGroup.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListCloudDiagramActivityGroupsError](src/DoiT/Errors/ListCloudDiagramActivityGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CloudDiagramLayerSnapshot&gt;&gt; ListCloudDiagramLayerSnapshots(ListCloudDiagramLayerSnapshotsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of saved snapshots for the specified diagram layer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudDiagrams.ListCloudDiagramLayerSnapshots(new ListCloudDiagramLayerSnapshotsRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<CloudDiagramLayerSnapshot>
}
catch (ApiException<ListCloudDiagramLayerSnapshotsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCloudDiagramLayerSnapshotsRequest](src/DoiT/Requests/CloudDiagrams/ListCloudDiagramLayerSnapshotsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CloudDiagramLayerSnapshot](src/DoiT/Models/CloudDiagramLayerSnapshot.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListCloudDiagramLayerSnapshotsError](src/DoiT/Errors/ListCloudDiagramLayerSnapshotsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CloudDiagramNodeActivity&gt;&gt; ListCloudDiagramNodeActivities(ListCloudDiagramNodeActivitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns individual activity records for the specified component node, ordered by timestamp descending.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudDiagrams.ListCloudDiagramNodeActivities(new ListCloudDiagramNodeActivitiesRequest
    {
        SsId = "some example string",
        NodeId = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<CloudDiagramNodeActivity>
}
catch (ApiException<ListCloudDiagramNodeActivitiesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCloudDiagramNodeActivitiesRequest](src/DoiT/Requests/CloudDiagrams/ListCloudDiagramNodeActivitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CloudDiagramNodeActivity](src/DoiT/Models/CloudDiagramNodeActivity.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListCloudDiagramNodeActivitiesError](src/DoiT/Errors/ListCloudDiagramNodeActivitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudDiagramsSearchResponse&gt; SearchCloudDiagrams(SearchCloudDiagramsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Full-text search across diagram layers, components by name, and components
by property values. Returns three result categories: diagram (matching layers), component
(matching components by name), and prop (matching components by property values).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudDiagrams.SearchCloudDiagrams(new SearchCloudDiagramsRequest
    {
        Body = new CloudDiagramsSearchRequest { Query = "some example string" },
    });
    // TODO: Handle 'response' of type CloudDiagramsSearchResponse
}
catch (ApiException<SearchCloudDiagramsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchCloudDiagramsRequest](src/DoiT/Requests/CloudDiagrams/SearchCloudDiagramsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudDiagramsSearchResponse](src/DoiT/Models/CloudDiagramsSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[SearchCloudDiagramsError](src/DoiT/Errors/SearchCloudDiagramsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CloudIncidents

> Source: [CloudIncidents](src/DoiT/Api/CloudIncidents.cs)

<details>
<summary><code>Task&lt;CoreV1CloudincidentsResponse1&gt; GetKnownIssue(GetKnownIssueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified cloud incident.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudIncidents.GetKnownIssue(new GetKnownIssueRequest { Id = "some example string" });
    // TODO: Handle 'response' of type CoreV1CloudincidentsResponse1
}
catch (ApiException<GetKnownIssueError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetKnownIssueRequest](src/DoiT/Requests/CloudIncidents/GetKnownIssueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CoreV1CloudincidentsResponse1](src/DoiT/Models/CoreV1CloudincidentsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetKnownIssueError](src/DoiT/Errors/GetKnownIssueError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CoreV1CloudincidentsResponse&gt; ListKnownIssues(ListKnownIssuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the active and historical cloud incidents for Google Cloud and Amazon Web Services.
Incidents are returned in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudIncidents.ListKnownIssues(new ListKnownIssuesRequest());
    // TODO: Handle 'response' of type CoreV1CloudincidentsResponse
}
catch (ApiException<ListKnownIssuesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListKnownIssuesRequest](src/DoiT/Requests/CloudIncidents/ListKnownIssuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CoreV1CloudincidentsResponse](src/DoiT/Models/CoreV1CloudincidentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListKnownIssuesError](src/DoiT/Errors/ListKnownIssuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CloudFlowApi

> Source: [CloudFlowApi](src/DoiT/Api/CloudFlowApi.cs)

<details>
<summary><code>Task&lt;IAsyncEnumerable&lt;string&gt;&gt; BuildCloudFlow(BuildCloudFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new CloudFlow and generates its nodes and connections based on the provided natural language intent. The operation streams incremental build events, including the ID of the newly created flow, as they are produced.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudFlowApi.BuildCloudFlow(new BuildCloudFlowRequest
    {
        Body = new CloudFlowBuildRequest { Question = "some example string" },
    });
    // TODO: Handle 'response' of type IAsyncEnumerable<string>
}
catch (ApiException<BuildCloudFlowError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BuildCloudFlowRequest](src/DoiT/Requests/CloudFlowApi/BuildCloudFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IAsyncEnumerable&lt;string&gt;</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[BuildCloudFlowError](src/DoiT/Errors/BuildCloudFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudflowFlowBundle&gt; ExportCloudflowFlow(ExportCloudflowFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Serializes the flow — plus every flow it references through subflow nodes — into a
tenant-neutral, credential-free JSON bundle that can be imported into any tenant with
the import operation. Tenant-scoped references (connections, Datastore tables, global
variables) are declared as named requirements and rebound at import time; policy and
Slack-channel references cannot travel and are recorded as unsupported references.
The bundle never contains credentials, tenant identifiers, schedules, or execution state.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudFlowApi.ExportCloudflowFlow(new ExportCloudflowFlowRequest
    {
        FlowId = "some example string",
    });
    // TODO: Handle 'response' of type CloudflowFlowBundle
}
catch (ApiException<ExportCloudflowFlowError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExportCloudflowFlowRequest](src/DoiT/Requests/CloudFlowApi/ExportCloudflowFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowFlowBundle](src/DoiT/Models/CloudflowFlowBundle.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ExportCloudflowFlowError](src/DoiT/Errors/ExportCloudflowFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudflowRun&gt; GetCloudflowFlowRun(GetCloudflowFlowRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a run's status and, for each node, the JSON it consumed and produced. This is how
you find out *why* a run failed, or that it "succeeded" while producing the wrong data.

**`input` is null for most node types, and that is not an error.** Only action nodes — the
AWS, GCP, Azure, Oracle, DoiT and admin operations — record their inputs. Transform, code,
branch, switch, datastore, subflow and trigger nodes record none, so their `input` is
always null. `output` is recorded by every node that finishes, so read a transform's
behaviour from its `output`.

Payloads appear as soon as a node reports a terminal status, so a poll loop can read
results while later nodes are still running.

Any value the node's schema marks sensitive is replaced with a redaction marker;
credentials and connection configuration never appear.

Each `input` and `output` is capped at 64KB. When a payload exceeds that, whole entries
are dropped from the end, `truncated` is true, and `totalBytes` reports the untruncated
size — nothing is silently cut, and what you receive is always valid JSON.

Runs belonging to another tenant, or to a different flow, return `404`. Nodes inside a
fan-out currently report only the last path to finish.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudFlowApi.GetCloudflowFlowRun(new GetCloudflowFlowRunRequest
    {
        FlowId = "some example string",
        RunId = "some example string",
    });
    // TODO: Handle 'response' of type CloudflowRun
}
catch (ApiException<GetCloudflowFlowRunError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCloudflowFlowRunRequest](src/DoiT/Requests/CloudFlowApi/GetCloudflowFlowRunRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowRun](src/DoiT/Models/CloudflowRun.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCloudflowFlowRunError](src/DoiT/Errors/GetCloudflowFlowRunError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudflowTemplate&gt; GetCloudflowTemplate(GetCloudflowTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single CloudFlow template by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudFlowApi.GetCloudflowTemplate(new GetCloudflowTemplateRequest
    {
        TemplateId = "some example string",
    });
    // TODO: Handle 'response' of type CloudflowTemplate
}
catch (ApiException<GetCloudflowTemplateError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCloudflowTemplateRequest](src/DoiT/Requests/CloudFlowApi/GetCloudflowTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowTemplate](src/DoiT/Models/CloudflowTemplate.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCloudflowTemplateError](src/DoiT/Errors/GetCloudflowTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudflowImportPlan&gt; ImportCloudflowFlow(ImportCloudflowFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates every flow of a previously exported bundle in the authenticated tenant.
Imports are create-only: each call creates new draft flows with new IDs — nothing is
published and no schedule is activated until the target tenant publishes.

Requirements declared by the bundle are resolved through `bindings` (requirement key →
target-tenant resource ID). Unbound connections and Datastore tables leave the
referencing nodes flagged incomplete; unbound global variables are auto-created. Pass
`options.createMissingTables: true` to create missing Datastore tables from the schemas
embedded in the bundle (structure only, never row data).

**Dry-run**: pass `?dryRun=true` to validate without writing. The response is an import
plan: per-requirement resolutions with candidate bindings in the target tenant, the
flows that would be created, and every validation issue at once.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudFlowApi.ImportCloudflowFlow(new ImportCloudflowFlowRequest
    {
        IdempotencyKey = "some example string",
        Body = new CloudflowImportFlowsRequest
        {
            Bundle = new CloudflowFlowBundle
            {
                RootFlow = "some example string",
                Flows = [
                    new CloudflowBundleFlow
                    {
                        Key = "some example string",
                        Name = "some example string",
                        FirstNode = "some example string",
                        Nodes = [new CloudflowBundleNode { Key = key, Name = name, Type = type }],
                    },
                ],
            },
        },
    });
    // TODO: Handle 'response' of type CloudflowImportPlan
}
catch (ApiException<ImportCloudflowFlowError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ImportCloudflowFlowRequest](src/DoiT/Requests/CloudFlowApi/ImportCloudflowFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowImportPlan](src/DoiT/Models/CloudflowImportPlan.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ImportCloudflowFlowError](src/DoiT/Errors/ImportCloudflowFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudflowRunList&gt; ListCloudflowFlowRuns(ListCloudflowFlowRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a flow's runs, newest first. Use `mode` to separate test runs from production
ones — test runs are included by default.

Per-node detail is not included here; fetch a single run to read what each node consumed
and produced.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudFlowApi.ListCloudflowFlowRuns(new ListCloudflowFlowRunsRequest
    {
        FlowId = "some example string",
    });
    // TODO: Handle 'response' of type CloudflowRunList
}
catch (ApiException<ListCloudflowFlowRunsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCloudflowFlowRunsRequest](src/DoiT/Requests/CloudFlowApi/ListCloudflowFlowRunsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowRunList](src/DoiT/Models/CloudflowRunList.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListCloudflowFlowRunsError](src/DoiT/Errors/ListCloudflowFlowRunsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudflowTemplateListResponse&gt; ListCloudflowTemplates(ListCloudflowTemplatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the catalogue of available CloudFlow templates (blueprints). Templates are
read-only. To create a flow from a template, use `POST /flows` with a `templateId`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudFlowApi.ListCloudflowTemplates(new ListCloudflowTemplatesRequest());
    // TODO: Handle 'response' of type CloudflowTemplateListResponse
}
catch (ApiException<ListCloudflowTemplatesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCloudflowTemplatesRequest](src/DoiT/Requests/CloudFlowApi/ListCloudflowTemplatesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowTemplateListResponse](src/DoiT/Models/CloudflowTemplateListResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListCloudflowTemplatesError](src/DoiT/Errors/ListCloudflowTemplatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudflowListResponse&gt; ListCloudflows(ListCloudflowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a cursor-paginated list of CloudFlows.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudFlowApi.ListCloudflows(new ListCloudflowsRequest());
    // TODO: Handle 'response' of type CloudflowListResponse
}
catch (ApiException<ListCloudflowsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCloudflowsRequest](src/DoiT/Requests/CloudFlowApi/ListCloudflowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowListResponse](src/DoiT/Models/CloudflowListResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListCloudflowsError](src/DoiT/Errors/ListCloudflowsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IAsyncEnumerable&lt;string&gt;&gt; RefineCloudFlow(RefineCloudFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refines the specified CloudFlow by generating and updating nodes and connections based on the provided natural language intent. The operation streams incremental build events as they are produced.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudFlowApi.RefineCloudFlow(new RefineCloudFlowRequest
    {
        FlowId = "some example string",
        Body = new CloudFlowRefineRequest { Question = "some example string" },
    });
    // TODO: Handle 'response' of type IAsyncEnumerable<string>
}
catch (ApiException<RefineCloudFlowError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RefineCloudFlowRequest](src/DoiT/Requests/CloudFlowApi/RefineCloudFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IAsyncEnumerable&lt;string&gt;</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[RefineCloudFlowError](src/DoiT/Errors/RefineCloudFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudflowRunSummary&gt; StopCloudflowFlow(StopCloudflowFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops the run currently in progress for the given flow. The run is identified from the
flow alone — no run ID is needed, since a flow can only have one run active at a time.

No `Idempotency-Key` is required. This is a state transition, not a resource creation.

Returns `409` when the flow has no run in progress, which includes a run that reached a
terminal state between this request and the stop attempt.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudFlowApi.StopCloudflowFlow(new StopCloudflowFlowRequest
    {
        FlowId = "some example string",
    });
    // TODO: Handle 'response' of type CloudflowRunSummary
}
catch (ApiException<StopCloudflowFlowError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StopCloudflowFlowRequest](src/DoiT/Requests/CloudFlowApi/StopCloudflowFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowRunSummary](src/DoiT/Models/CloudflowRunSummary.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[StopCloudflowFlowError](src/DoiT/Errors/StopCloudflowFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudflowRunSummary&gt; TestRunCloudflowFlow(TestRunCloudflowFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs a flow once as a test, and **accepts an unpublished (draft) flow** — unlike
`actions/trigger`, which requires the flow to be published. Use this to verify a newly
authored or edited flow before publishing it.

Execution is identical to a production run: the same graph, the same bound connections,
the same credentials, and the same approval behaviour. An approval-gated node still parks
the run and its side effect still waits for a real approval — there is no request that
skips one.

The run is recorded as a test, so it does not appear in run history, does not count
towards dashboard statistics, does not become a dashboard widget's data source, and does
not consume a scheduled-run budget. It does hold the flow's concurrency lock, so a `409`
is returned while the flow is already running.

The flow's first node must be a webhook, scheduled, or manual trigger.

Before dispatching, the flow is validated with the same checks publish applies — a draft
has never been through them. A flow that fails returns `422` listing every offending node
at once, so all of them can be fixed in one pass.

Poll the `Location` URL to follow the run and read what each node produced.

Pass `?dryRun=true` to validate the flow without starting a run.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudFlowApi.TestRunCloudflowFlow(new TestRunCloudflowFlowRequest
    {
        FlowId = "some example string",
        IdempotencyKey = "some example string",
    });
    // TODO: Handle 'response' of type CloudflowRunSummary
}
catch (ApiException<TestRunCloudflowFlowError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TestRunCloudflowFlowRequest](src/DoiT/Requests/CloudFlowApi/TestRunCloudflowFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowRunSummary](src/DoiT/Models/CloudflowRunSummary.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[TestRunCloudflowFlowError](src/DoiT/Errors/TestRunCloudflowFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudflowRunSummary&gt; TriggerCloudflowFlow(TriggerCloudflowFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a run of a **published** flow whose first node is a webhook, scheduled, or manual
trigger. A draft flow is rejected with `422` — use `actions/test-run` to run one.

No `Idempotency-Key` is required. This is a state transition, not a resource creation.

The response is a snapshot taken at dispatch, so `status` is always `pending` and the
timing fields are not yet populated. Read the run back through
`GET /cloudflow/v1/flows/{flowId}/runs/{runId}` to follow its progress.

A flow holds a concurrency lock while it runs, so triggering one that is already running
returns `409` with the active run embedded in the problem body — no second lookup needed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudFlowApi.TriggerCloudflowFlow(new TriggerCloudflowFlowRequest
    {
        FlowId = "some example string",
    });
    // TODO: Handle 'response' of type CloudflowRunSummary
}
catch (ApiException<TriggerCloudflowFlowError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TriggerCloudflowFlowRequest](src/DoiT/Requests/CloudFlowApi/TriggerCloudflowFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowRunSummary](src/DoiT/Models/CloudflowRunSummary.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[TriggerCloudflowFlowError](src/DoiT/Errors/TriggerCloudflowFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudflowV1TriggerResponse&gt; TriggerCloudflowWebhook(TriggerCloudflowWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers execution of a published CloudFlow whose first node is a webhook trigger.
The request body must be valid JSON and is passed to the flow as webhook payload data.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudFlowApi.TriggerCloudflowWebhook(new TriggerCloudflowWebhookRequest
    {
        FlowId = "some example string",
        Body = body,
    });
    // TODO: Handle 'response' of type CloudflowV1TriggerResponse
}
catch (ApiException<TriggerCloudflowWebhookError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TriggerCloudflowWebhookRequest](src/DoiT/Requests/CloudFlowApi/TriggerCloudflowWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowV1TriggerResponse](src/DoiT/Models/CloudflowV1TriggerResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[TriggerCloudflowWebhookError](src/DoiT/Errors/TriggerCloudflowWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CommitmentManager

> Source: [CommitmentManager](src/DoiT/Api/CommitmentManager.cs)

<details>
<summary><code>Task&lt;CommitmentExternal&gt; GetCommitment(GetCommitmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a commitment by the specified Id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommitmentManager.GetCommitment(new GetCommitmentRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type CommitmentExternal
}
catch (ApiException<GetCommitmentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCommitmentRequest](src/DoiT/Requests/CommitmentManager/GetCommitmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommitmentExternal](src/DoiT/Models/CommitmentExternal.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCommitmentError](src/DoiT/Errors/GetCommitmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CommitmentExternalList&gt; ListCommitments(ListCommitmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of commitments for the customer.
Commitments are listed in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommitmentManager.ListCommitments(new ListCommitmentsRequest
    {
        Filter = "provider:google-cloud",
    });
    // TODO: Handle 'response' of type CommitmentExternalList
}
catch (ApiException<ListCommitmentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCommitmentsRequest](src/DoiT/Requests/CommitmentManager/ListCommitmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommitmentExternalList](src/DoiT/Models/CommitmentExternalList.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListCommitmentsError](src/DoiT/Errors/ListCommitmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ComposerInsightsBeta

> Source: [ComposerInsightsBeta](src/DoiT/Api/ComposerInsightsBeta.cs)

<details>
<summary><code>Task&lt;ComposerRecipeResultList&gt; ListComposerRecipeResults(ListComposerRecipeResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the results of one Composer recipe: one finding per affected resource, with the resource's account, region, tags and cost metrics. An unknown recipe, one your customer isn't entitled to, and a dismissed recipe all return `200` with an empty `items` list and `rowCount: 0`.

By default (`last_scan_only:true`) only results reported by the most recent scan of each recently scanned account are returned. A resolved result keeps the ID of the last scan that reported it, so resolved results rarely appear by default; add `last_scan_only:false` to include them and results from earlier scans. `rowCount` can therefore be lower than the recipe's `totalResultsCount`. Results are sorted by `detection_time`, descending, by default. Ties break by `id`.

`filter` is one string of `key:value` clauses: `,` separates alternative values for one key (OR) and `|` separates keys (AND), for example `region:us-east-1,us-west-2|status:active`. Because `,` and `|` are separators, a value itself can't contain them. Supported keys:
- `account_id`: one or more cloud account IDs, matched exactly.
- `region`: one or more cloud regions, matched exactly.
- `issued_resource_name`: one or more names of the affected resource, matched exactly.
- `related_resource_name`: one or more names of related resources (for example an attached IAM policy), each matched as a substring anywhere in the result's related-resource details.
- `status`: exactly one of `active` (not resolved and not snoozed), `snoozed`, `resolved` or `all`. Omitting it is the same as `all`. Combine `resolved` with `last_scan_only:false`; with the default it usually returns nothing.
- `last_scan_only`: exactly one of `true` or `false`. Defaults to `true`, which returns only results reported by each recently scanned account's most recent scan, and so rarely includes resolved results. `false` returns results from every scan and account, including resolved ones.
- `allocation`: up to 10 distinct allocation IDs from `GET /analytics/v1/allocations`. Returns only results on resources in any of those allocations. An allocation you can't view returns `404`; if access can't be checked, the request returns `503` rather than unfiltered data.

Requests are always served for the customer your API token belongs to.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ComposerInsightsBeta.ListComposerRecipeResults(new ListComposerRecipeResultsRequest
    {
        RecipeId = 42L,
        MaxResults = 50,
        Filter = "status:active|region:us-east-1,us-west-2",
    });
    // TODO: Handle 'response' of type ComposerRecipeResultList
}
catch (ApiException<ListComposerRecipeResultsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListComposerRecipeResultsRequest](src/DoiT/Requests/ComposerInsightsBeta/ListComposerRecipeResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComposerRecipeResultList](src/DoiT/Models/ComposerRecipeResultList.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListComposerRecipeResultsError](src/DoiT/Errors/ListComposerRecipeResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ComposerRecipeList&gt; ListComposerRecipes(ListComposerRecipesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Composer recipes that have results in your recently scanned cloud accounts, with counts of those results by status and their estimated savings. Recipes with no such results are not listed. Dismissed recipes are listed with `status: dismissed` and every count set to 0.

Recipes are sorted by `severity`, descending, by default. Ties break by title (case-insensitive), then by `id`.

`filter` is one string of `key:value` clauses: `,` separates alternative values for one key (OR) and `|` separates keys (AND), for example `severity:critical,high|provider:aws,gcp`. Because `,` and `|` are separators, a value itself can't contain them. Supported keys:
- `provider`: one or more of `aws`, `azure`, `azure_ad`, `gcp`, `general`, `google_cloud_source`, `google_workspace`, `k8s`, `oci`, `vmware`.
- `severity`: one or more of `critical`, `high`, `medium`, `low`.
- `pillar`: one or more of `cost`, `operations`, `performance`, `security`, `compliance`. `compliance` matches recipes tagged with at least one compliance standard.
- `has_active_results`: exactly one of `true` or `false`.
- `allocation`: up to 10 distinct allocation IDs from `GET /analytics/v1/allocations`. Lists only recipes with results on resources in any of those allocations; counts, savings and `rowCount` then cover only those resources. An allocation you can't view returns `404`; if access can't be checked, the request returns `503` rather than unfiltered data.

Requests are always served for the customer your API token belongs to. To list the results of one recipe, use its `id` with `GET /insights/v2/recipes/{recipeId}/results`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ComposerInsightsBeta.ListComposerRecipes(new ListComposerRecipesRequest
    {
        MaxResults = 50,
        Filter = "severity:critical,high|provider:aws,gcp",
    });
    // TODO: Handle 'response' of type ComposerRecipeList
}
catch (ApiException<ListComposerRecipesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListComposerRecipesRequest](src/DoiT/Requests/ComposerInsightsBeta/ListComposerRecipesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComposerRecipeList](src/DoiT/Models/ComposerRecipeList.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListComposerRecipesError](src/DoiT/Errors/ListComposerRecipesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Connections

> Source: [Connections](src/DoiT/Api/Connections.cs)

<details>
<summary><code>Task&lt;CloudflowConnection&gt; CreateCloudflowConnection(CreateCloudflowConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new cloud provider connection. Exactly one of `gcpConfig` or `awsConfig` must be supplied.
Returns `400 invalid_connection_config` when both or neither are present.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connections.CreateCloudflowConnection(new CreateCloudflowConnectionRequest
    {
        Body = new CloudflowV1ConnectionsRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type CloudflowConnection
}
catch (ApiException<CreateCloudflowConnectionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCloudflowConnectionRequest](src/DoiT/Requests/Connections/CreateCloudflowConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowConnection](src/DoiT/Models/CloudflowConnection.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateCloudflowConnectionError](src/DoiT/Errors/CreateCloudflowConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteCloudflowConnection(DeleteCloudflowConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a connection. Returns 409 if the connection is referenced by one or more flows.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Connections.DeleteCloudflowConnection(new DeleteCloudflowConnectionRequest
    {
        ConnectionId = "some example string",
    });
}
catch (ApiException<DeleteCloudflowConnectionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCloudflowConnectionRequest](src/DoiT/Requests/Connections/DeleteCloudflowConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteCloudflowConnectionError](src/DoiT/Errors/DeleteCloudflowConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudflowConnection&gt; GetCloudflowConnection(GetCloudflowConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single connection by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connections.GetCloudflowConnection(new GetCloudflowConnectionRequest
    {
        ConnectionId = "some example string",
    });
    // TODO: Handle 'response' of type CloudflowConnection
}
catch (ApiException<GetCloudflowConnectionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCloudflowConnectionRequest](src/DoiT/Requests/Connections/GetCloudflowConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowConnection](src/DoiT/Models/CloudflowConnection.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCloudflowConnectionError](src/DoiT/Errors/GetCloudflowConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudflowConnectionListResponse&gt; ListCloudflowConnections(ListCloudflowConnectionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a cursor-paginated list of cloud provider connections for the authenticated tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connections.ListCloudflowConnections(new ListCloudflowConnectionsRequest());
    // TODO: Handle 'response' of type CloudflowConnectionListResponse
}
catch (ApiException<ListCloudflowConnectionsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCloudflowConnectionsRequest](src/DoiT/Requests/Connections/ListCloudflowConnectionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowConnectionListResponse](src/DoiT/Models/CloudflowConnectionListResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListCloudflowConnectionsError](src/DoiT/Errors/ListCloudflowConnectionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudflowConnection&gt; UpdateCloudflowConnection(UpdateCloudflowConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a connection. All fields are optional.
At most one of `gcpConfig` or `awsConfig` may be set per request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connections.UpdateCloudflowConnection(new UpdateCloudflowConnectionRequest
    {
        ConnectionId = "some example string",
        Body = new CloudflowV1ConnectionsRequest1(),
    });
    // TODO: Handle 'response' of type CloudflowConnection
}
catch (ApiException<UpdateCloudflowConnectionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCloudflowConnectionRequest](src/DoiT/Requests/Connections/UpdateCloudflowConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowConnection](src/DoiT/Models/CloudflowConnection.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateCloudflowConnectionError](src/DoiT/Errors/UpdateCloudflowConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ContractTemplates

> Source: [ContractTemplates](src/DoiT/Api/ContractTemplates.cs)

<details>
<summary><code>Task&lt;ContractTemplateResponse&gt; ArchiveContractTemplate(ArchiveContractTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft-deletes (archives) a contract template owned by the authenticated tenant (from the bearer token). Instantiated contracts are unaffected. Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContractTemplates.ArchiveContractTemplate(new ArchiveContractTemplateRequest
    {
        TemplateId = "some example string",
    });
    // TODO: Handle 'response' of type ContractTemplateResponse
}
catch (ApiException<ArchiveContractTemplateError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ArchiveContractTemplateRequest](src/DoiT/Requests/ContractTemplates/ArchiveContractTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContractTemplateResponse](src/DoiT/Models/ContractTemplateResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ArchiveContractTemplateError](src/DoiT/Errors/ArchiveContractTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AssignContractTemplateResponse&gt; AssignContractTemplate(AssignContractTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applies a contract template owned by the authenticated tenant (from the bearer token) to child customers, creating a draft contract for each. Drafts have no billing effect until each one is completed and activated. The template must not be archived, and the current date must fall within its eligibility window. Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContractTemplates.AssignContractTemplate(new AssignContractTemplateRequest
    {
        TemplateId = "some example string",
        Body = new AssignContractTemplateInput { CustomerIds = ["some example string"] },
    });
    // TODO: Handle 'response' of type AssignContractTemplateResponse
}
catch (ApiException<AssignContractTemplateError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssignContractTemplateRequest](src/DoiT/Requests/ContractTemplates/AssignContractTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AssignContractTemplateResponse](src/DoiT/Models/AssignContractTemplateResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[AssignContractTemplateError](src/DoiT/Errors/AssignContractTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContractTemplateResponse&gt; CreateContractTemplate(CreateContractTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a contract template for the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContractTemplates.CreateContractTemplate(new CreateContractTemplateRequest
    {
        Body = new ContractTemplateInput
        {
            Name = "some example string",
            Platform = "some example string",
            EligibleFrom = DateTimeOffset.Parse("2024-01-15T09:30:00Z"),
        },
    });
    // TODO: Handle 'response' of type ContractTemplateResponse
}
catch (ApiException<CreateContractTemplateError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateContractTemplateRequest](src/DoiT/Requests/ContractTemplates/CreateContractTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContractTemplateResponse](src/DoiT/Models/ContractTemplateResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateContractTemplateError](src/DoiT/Errors/CreateContractTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContractTemplateResponse&gt; GetContractTemplate(GetContractTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single contract template owned by the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContractTemplates.GetContractTemplate(new GetContractTemplateRequest
    {
        TemplateId = "some example string",
    });
    // TODO: Handle 'response' of type ContractTemplateResponse
}
catch (ApiException<GetContractTemplateError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetContractTemplateRequest](src/DoiT/Requests/ContractTemplates/GetContractTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContractTemplateResponse](src/DoiT/Models/ContractTemplateResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetContractTemplateError](src/DoiT/Errors/GetContractTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ContractTemplateResponse&gt;&gt; ListContractTemplates(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists contract templates owned by the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContractTemplates.ListContractTemplates();
    // TODO: Handle 'response' of type IReadOnlyList<ContractTemplateResponse>
}
catch (ApiException<ListContractTemplatesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ContractTemplateResponse](src/DoiT/Models/ContractTemplateResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListContractTemplatesError](src/DoiT/Errors/ListContractTemplatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContractTemplateResponse&gt; UpdateContractTemplate(UpdateContractTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a contract template owned by the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContractTemplates.UpdateContractTemplate(new UpdateContractTemplateRequest
    {
        TemplateId = "some example string",
        Body = new ContractTemplateInput
        {
            Name = "some example string",
            Platform = "some example string",
            EligibleFrom = DateTimeOffset.Parse("2024-01-15T09:30:00Z"),
        },
    });
    // TODO: Handle 'response' of type ContractTemplateResponse
}
catch (ApiException<UpdateContractTemplateError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateContractTemplateRequest](src/DoiT/Requests/ContractTemplates/UpdateContractTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContractTemplateResponse](src/DoiT/Models/ContractTemplateResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateContractTemplateError](src/DoiT/Errors/UpdateContractTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Contracts

> Source: [Contracts](src/DoiT/Api/Contracts.cs)

<details>
<summary><code>Task&lt;ContractLifecycleResponse&gt; ActivateContract(ActivateContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transitions a draft contract to active or scheduled (when the start date is in the future). Produces the same system state as activating via the Console.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contracts.ActivateContract(new ActivateContractRequest
    {
        CustomerId = "some example string",
        ContractId = "some example string",
    });
    // TODO: Handle 'response' of type ContractLifecycleResponse
}
catch (ApiException<ActivateContractError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ActivateContractRequest](src/DoiT/Requests/Contracts/ActivateContractRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContractLifecycleResponse](src/DoiT/Models/ContractLifecycleResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ActivateContractError](src/DoiT/Errors/ActivateContractError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContractLifecycleResponse&gt; CancelContract(CancelContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels (deactivates) a contract. Active contracts cannot be deleted; cancel is the terminal operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contracts.CancelContract(new CancelContractRequest
    {
        CustomerId = "some example string",
        ContractId = "some example string",
    });
    // TODO: Handle 'response' of type ContractLifecycleResponse
}
catch (ApiException<CancelContractError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelContractRequest](src/DoiT/Requests/Contracts/CancelContractRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContractLifecycleResponse](src/DoiT/Models/ContractLifecycleResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CancelContractError](src/DoiT/Errors/CancelContractError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateContractResponse&gt; CreateContract(CreateContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a draft contract for the specified customer. Requires the caller to be the direct parent (T1 for a T2-level contract, T2 for a T3-level contract). Write access requires a role without contractsReadOnly; user API tokens must include the matching permission in their scope.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contracts.CreateContract(new CreateContractRequest
    {
        CustomerId = "some example string",
        Body = new MtsContractCreateInput
        {
            Name = "some example string",
            StartDate = DateTimeOffset.Parse("2024-01-15T09:30:00Z"),
            RenewalPolicy = RenewalPolicy1.Auto,
        },
    });
    // TODO: Handle 'response' of type CreateContractResponse
}
catch (ApiException<CreateContractError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateContractRequest](src/DoiT/Requests/Contracts/CreateContractRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateContractResponse](src/DoiT/Models/CreateContractResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateContractError](src/DoiT/Errors/CreateContractError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MtsContractDetailResponse&gt; GetContract(GetContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified contract.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contracts.GetContract(new GetContractRequest
    {
        CustomerId = "some example string",
        ContractId = "some example string",
    });
    // TODO: Handle 'response' of type MtsContractDetailResponse
}
catch (ApiException<GetContractError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetContractRequest](src/DoiT/Requests/Contracts/GetContractRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MtsContractDetailResponse](src/DoiT/Models/MtsContractDetailResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetContractError](src/DoiT/Errors/GetContractError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;MtsContractResponse&gt;&gt; ListContracts(ListContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the contracts held by the specified customer. Callable by a T1/T2 PartnerOps principal for its own tenant or any descendant tenant. Read access requires contractsReadOnly, contractsViewer, or a write-capable role (without contractsReadOnly). User API tokens must include the matching permission in their scope.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contracts.ListContracts(new ListContractsRequest
    {
        CustomerId = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<MtsContractResponse>
}
catch (ApiException<ListContractsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListContractsRequest](src/DoiT/Requests/Contracts/ListContractsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[MtsContractResponse](src/DoiT/Models/MtsContractResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListContractsError](src/DoiT/Errors/ListContractsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateContractResponse&gt; UpdateContract(UpdateContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of the contract. The contract type is immutable and cannot be changed by an update.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contracts.UpdateContract(new UpdateContractRequest
    {
        CustomerId = "some example string",
        ContractId = "some example string",
        Body = new MtsContractInput
        {
            Name = "some example string",
            StartDate = DateTimeOffset.Parse("2024-01-15T09:30:00Z"),
            RenewalPolicy = RenewalPolicy1.Auto,
        },
    });
    // TODO: Handle 'response' of type CreateContractResponse
}
catch (ApiException<UpdateContractError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateContractRequest](src/DoiT/Requests/Contracts/UpdateContractRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateContractResponse](src/DoiT/Models/CreateContractResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateContractError](src/DoiT/Errors/UpdateContractError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerGroups

> Source: [CustomerGroups](src/DoiT/Api/CustomerGroups.cs)

<details>
<summary><code>Task AssignCustomerGroupUser(AssignCustomerGroupUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns a user to a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CustomerGroups.AssignCustomerGroupUser(new AssignCustomerGroupUserRequest
    {
        CustomerGroupId = "some example string",
        UserId = "some example string",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
}
catch (ApiException<AssignCustomerGroupUserError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssignCustomerGroupUserRequest](src/DoiT/Requests/CustomerGroups/AssignCustomerGroupUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[AssignCustomerGroupUserError](src/DoiT/Errors/AssignCustomerGroupUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AssignCustomerGroupUserGroup(AssignCustomerGroupUserGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns a user group owned by the authenticated tenant to a customer group owned by that tenant. Membership changes in the user group apply without reassigning it. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CustomerGroups.AssignCustomerGroupUserGroup(new AssignCustomerGroupUserGroupRequest
    {
        CustomerGroupId = "some example string",
        UserGroupId = "some example string",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
}
catch (ApiException<AssignCustomerGroupUserGroupError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssignCustomerGroupUserGroupRequest](src/DoiT/Requests/CustomerGroups/AssignCustomerGroupUserGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[AssignCustomerGroupUserGroupError](src/DoiT/Errors/AssignCustomerGroupUserGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerGroup&gt; CreateCustomerGroup(CreateCustomerGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerGroups.CreateCustomerGroup(new CreateCustomerGroupOperationRequest
    {
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
        Body = new CreateCustomerGroupRequest
        {
            Name = "some example string",
            MemberCustomerIds = ["some example string"],
        },
    });
    // TODO: Handle 'response' of type CustomerGroup
}
catch (ApiException<CreateCustomerGroupError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomerGroupOperationRequest](src/DoiT/Requests/CustomerGroups/CreateCustomerGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerGroup](src/DoiT/Models/CustomerGroup.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateCustomerGroupError](src/DoiT/Errors/CreateCustomerGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteCustomerGroup(DeleteCustomerGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a customer group owned by the authenticated tenant. Groups with assigned users or user groups cannot be deleted. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CustomerGroups.DeleteCustomerGroup(new DeleteCustomerGroupRequest
    {
        CustomerGroupId = "some example string",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
}
catch (ApiException<DeleteCustomerGroupError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomerGroupRequest](src/DoiT/Requests/CustomerGroups/DeleteCustomerGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomerGroupError](src/DoiT/Errors/DeleteCustomerGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerGroup&gt; GetCustomerGroup(GetCustomerGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerGroups.GetCustomerGroup(new GetCustomerGroupRequest
    {
        CustomerGroupId = "some example string",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type CustomerGroup
}
catch (ApiException<GetCustomerGroupError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomerGroupRequest](src/DoiT/Requests/CustomerGroups/GetCustomerGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerGroup](src/DoiT/Models/CustomerGroup.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCustomerGroupError](src/DoiT/Errors/GetCustomerGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerGroupUserGroupsResponse&gt; ListCustomerGroupUserGroups(ListCustomerGroupUserGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the user groups assigned to a customer group owned by the authenticated tenant, sorted by user-group ID. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerGroups.ListCustomerGroupUserGroups(new ListCustomerGroupUserGroupsRequest
    {
        CustomerGroupId = "some example string",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type CustomerGroupUserGroupsResponse
}
catch (ApiException<ListCustomerGroupUserGroupsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomerGroupUserGroupsRequest](src/DoiT/Requests/CustomerGroups/ListCustomerGroupUserGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerGroupUserGroupsResponse](src/DoiT/Models/CustomerGroupUserGroupsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListCustomerGroupUserGroupsError](src/DoiT/Errors/ListCustomerGroupUserGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerGroupUsersResponse&gt; ListCustomerGroupUsers(ListCustomerGroupUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the users assigned to a customer group owned by the authenticated tenant, sorted by user ID. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerGroups.ListCustomerGroupUsers(new ListCustomerGroupUsersRequest
    {
        CustomerGroupId = "some example string",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type CustomerGroupUsersResponse
}
catch (ApiException<ListCustomerGroupUsersError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomerGroupUsersRequest](src/DoiT/Requests/CustomerGroups/ListCustomerGroupUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerGroupUsersResponse](src/DoiT/Models/CustomerGroupUsersResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListCustomerGroupUsersError](src/DoiT/Errors/ListCustomerGroupUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerGroupsResponse&gt; ListCustomerGroups(ListCustomerGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the ready customer groups owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerGroups.ListCustomerGroups(new ListCustomerGroupsRequest
    {
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type CustomerGroupsResponse
}
catch (ApiException<ListCustomerGroupsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomerGroupsRequest](src/DoiT/Requests/CustomerGroups/ListCustomerGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerGroupsResponse](src/DoiT/Models/CustomerGroupsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListCustomerGroupsError](src/DoiT/Errors/ListCustomerGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UnassignCustomerGroupUser(UnassignCustomerGroupUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unassigns a user from a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CustomerGroups.UnassignCustomerGroupUser(new UnassignCustomerGroupUserRequest
    {
        CustomerGroupId = "some example string",
        UserId = "some example string",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
}
catch (ApiException<UnassignCustomerGroupUserError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UnassignCustomerGroupUserRequest](src/DoiT/Requests/CustomerGroups/UnassignCustomerGroupUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UnassignCustomerGroupUserError](src/DoiT/Errors/UnassignCustomerGroupUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UnassignCustomerGroupUserGroup(UnassignCustomerGroupUserGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unassigns a user group from a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CustomerGroups.UnassignCustomerGroupUserGroup(new UnassignCustomerGroupUserGroupRequest
    {
        CustomerGroupId = "some example string",
        UserGroupId = "some example string",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
}
catch (ApiException<UnassignCustomerGroupUserGroupError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UnassignCustomerGroupUserGroupRequest](src/DoiT/Requests/CustomerGroups/UnassignCustomerGroupUserGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UnassignCustomerGroupUserGroupError](src/DoiT/Errors/UnassignCustomerGroupUserGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomerGroup&gt; UpdateCustomerGroup(UpdateCustomerGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name, customer membership, or both for a customer group owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomerGroups.UpdateCustomerGroup(new UpdateCustomerGroupOperationRequest
    {
        CustomerGroupId = "some example string",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
        Body = new UpdateCustomerGroupRequest(),
    });
    // TODO: Handle 'response' of type CustomerGroup
}
catch (ApiException<UpdateCustomerGroupError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCustomerGroupOperationRequest](src/DoiT/Requests/CustomerGroups/UpdateCustomerGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerGroup](src/DoiT/Models/CustomerGroup.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomerGroupError](src/DoiT/Errors/UpdateCustomerGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](src/DoiT/Api/Customers.cs)

<details>
<summary><code>Task&lt;Customer&gt; GetCustomer(GetCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the customer, including its general settings and contact info, scoped to `{customerId}`. `{customerId}` must match the customer resolved from the bearer token; a token scoped to a different customer gets `403`, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires the `Settings` permission and DoiT API access (`platform:externalApi`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Customers.GetCustomer(new GetCustomerRequest { CustomerId = "some example string" });
    // TODO: Handle 'response' of type Customer
}
catch (ApiException<GetCustomerError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomerRequest](src/DoiT/Requests/Customers/GetCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Customer](src/DoiT/Models/Customer.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCustomerError](src/DoiT/Errors/GetCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateCustomer(UpdateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates the general settings and contact info of the customer identified by `{customerId}`. `{customerId}` must match the customer resolved from the bearer token; a token scoped to a different customer gets `403`, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires the `Settings` permission and DoiT API access (`platform:externalApi`); updating `allowedInviteDomains` additionally requires the `UsersManager` permission.

The request body must use `application/merge-patch+json` (RFC 7396): an omitted field leaves the current value unchanged, and an explicit `null` also leaves it unchanged, except for `urlSlug`, where an explicit empty string removes the customer's active URL slug rather than leaving it unchanged.

Fields are nested exactly as `getCustomer` returns them - `currency` and `allowedInviteDomains` under `settings`, `emails` under `contact` - so every value is read and written at the same path. `settings.currency` accepts only the codes listed in the schema and cannot be cleared; `allowedInviteDomains` and `contact.emails` are cleared with an empty array.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Customers.UpdateCustomer(new UpdateCustomerRequest
    {
        CustomerId = "some example string",
        Body = new CustomerUpdate(),
    });
}
catch (ApiException<UpdateCustomerError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCustomerRequest](src/DoiT/Requests/Customers/UpdateCustomerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomerError](src/DoiT/Errors/UpdateCustomerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DataHub

> Source: [DataHub](src/DoiT/Api/DataHub.cs)

<details>
<summary><code>Task&lt;DatahubV1DatasetsResponse1&gt; CreateDatahubDataset(CreateDatahubDatasetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new DataHub dataset. A dataset is a logical grouping of events that share the same provider name. Creating a dataset allows you to define metadata such as name and description before ingesting events.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataHub.CreateDatahubDataset(new CreateDatahubDatasetRequest
    {
        Body = new DatahubV1DatasetsRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type DatahubV1DatasetsResponse1
}
catch (ApiException<CreateDatahubDatasetError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDatahubDatasetRequest](src/DoiT/Requests/DataHub/CreateDatahubDatasetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatahubV1DatasetsResponse1](src/DoiT/Models/DatahubV1DatasetsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateDatahubDatasetError](src/DoiT/Errors/CreateDatahubDatasetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DatahubV1EventsResponse&gt; DatahubEvents(DatahubEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a batch of events to DataHub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataHub.DatahubEvents(new DatahubEventsRequest { Body = new DatahubV1EventsRequest() });
    // TODO: Handle 'response' of type DatahubV1EventsResponse
}
catch (ApiException<DatahubEventsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DatahubEventsRequest](src/DoiT/Requests/DataHub/DatahubEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatahubV1EventsResponse](src/DoiT/Models/DatahubV1EventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DatahubEventsError](src/DoiT/Errors/DatahubEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DatahubV1CsvUploadResponse&gt; DatahubEventsCsvFile(DatahubEventsCsvFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a batch of events to DataHub using a CSV file, either uncompressed or compressed in ZIP or GZ format. It may take up to 15 minutes for the data to become available in the DoiT console.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataHub.DatahubEventsCsvFile(new DatahubEventsCsvFileRequest
    {
        Provider = "Datadog",
        SchemaTemplate = "anthropic-spend-report@1",
        PeriodStart = DateTimeOffset.Parse("2026-09-10T00:00:00Z"),
        PeriodEnd = DateTimeOffset.Parse("2026-09-10T00:00:00Z"),
    });
    // TODO: Handle 'response' of type DatahubV1CsvUploadResponse
}
catch (ApiException<DatahubEventsCsvFileError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DatahubEventsCsvFileRequest](src/DoiT/Requests/DataHub/DatahubEventsCsvFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatahubV1CsvUploadResponse](src/DoiT/Models/DatahubV1CsvUploadResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DatahubEventsCsvFileError](src/DoiT/Errors/DatahubEventsCsvFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DatahubV1ImportResponse&gt; DatahubImportProviderRecords(DatahubImportProviderRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends provider-native records as JSON instead of a CSV file. The records use the same columns as the template's CSV (currently `anthropic-spend-report@1` only) and are validated, normalized and booked on `periodEnd` exactly like a CSV upload. It may take up to 15 minutes for the data to become available in the DoiT console.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataHub.DatahubImportProviderRecords(new DatahubImportProviderRecordsRequest
    {
        Body = new DatahubV1ImportRequest
        {
            Provider = "some example string",
            SchemaTemplate = "some example string",
            PeriodStart = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
            PeriodEnd = DateTimeOffset.Parse("2024-01-15T00:00:00Z"),
            Records = [],
        },
    });
    // TODO: Handle 'response' of type DatahubV1ImportResponse
}
catch (ApiException<DatahubImportProviderRecordsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DatahubImportProviderRecordsRequest](src/DoiT/Requests/DataHub/DatahubImportProviderRecordsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatahubV1ImportResponse](src/DoiT/Models/DatahubV1ImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DatahubImportProviderRecordsError](src/DoiT/Errors/DatahubImportProviderRecordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DatahubV1DatasetsResponse2&gt; DeleteDatahubDataset(DeleteDatahubDatasetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific DataHub dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataHub.DeleteDatahubDataset(new DeleteDatahubDatasetRequest
    {
        Name = "My Custom Dataset",
    });
    // TODO: Handle 'response' of type DatahubV1DatasetsResponse2
}
catch (ApiException<DeleteDatahubDatasetError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDatahubDatasetRequest](src/DoiT/Requests/DataHub/DeleteDatahubDatasetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatahubV1DatasetsResponse2](src/DoiT/Models/DatahubV1DatasetsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteDatahubDatasetError](src/DoiT/Errors/DeleteDatahubDatasetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DatahubV1DatasetsResponse2&gt; DeleteDatahubDatasets(DeleteDatahubDatasetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes one or more DataHub datasets and all their associated data.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataHub.DeleteDatahubDatasets(new DeleteDatahubDatasetsRequest
    {
        Body = new DatahubV1DatasetsRequest1 { Datasets = ["some example string"] },
    });
    // TODO: Handle 'response' of type DatahubV1DatasetsResponse2
}
catch (ApiException<DeleteDatahubDatasetsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDatahubDatasetsRequest](src/DoiT/Requests/DataHub/DeleteDatahubDatasetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatahubV1DatasetsResponse2](src/DoiT/Models/DatahubV1DatasetsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteDatahubDatasetsError](src/DoiT/Errors/DeleteDatahubDatasetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DatahubV1EventsDeleteResponse&gt; DeleteDatahubEventsByFilter(DeleteDatahubEventsByFilterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes specific events using filters. Note that the two filters, `eventIds` and `time ranges`, are mutually exclusive.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataHub.DeleteDatahubEventsByFilter(new DeleteDatahubEventsByFilterRequest
    {
        Body = new DatahubV1EventsDeleteRequest { Dataset = "some example string" },
    });
    // TODO: Handle 'response' of type DatahubV1EventsDeleteResponse
}
catch (ApiException<DeleteDatahubEventsByFilterError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDatahubEventsByFilterRequest](src/DoiT/Requests/DataHub/DeleteDatahubEventsByFilterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatahubV1EventsDeleteResponse](src/DoiT/Models/DatahubV1EventsDeleteResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteDatahubEventsByFilterError](src/DoiT/Errors/DeleteDatahubEventsByFilterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ExportDatahubDatasetRecords(ExportDatahubDatasetRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one page of the live records of a DataHub dataset, as CSV (default) or as newline-delimited JSON in the same shape as the `/datahub/v1/events` payload.

A time window is required: `startTime` is inclusive, `endTime` is exclusive, and the window must not exceed 366 days. Rows are ordered by their event time and event id, and pages never overlap: read the `X-Next-Page-Token` response header and pass it back as `pageToken` until the header is absent. `X-Row-Count` carries the number of rows in the page. Only live rows are returned; rows deleted through the console or the delete endpoints are excluded.

Every row starts with five provenance columns (`event_id`, `batch`, `source`, `export_time`, `updated_by`) followed by the dataset's business columns in the CSV ingest vocabulary (`usage_date`, `fixed.`, `label.`, `project_label.`, `system_label.`, `metric.`). The business columns are computed from the rows of each page, so consecutive pages can have different label and metric columns; union the headers when concatenating pages. Datasets created with the FOCUS schema template use the FOCUS column names instead and can only be exported as CSV.

To re-import an export into another dataset, drop the `batch`, `source`, `export_time` and `updated_by` columns, and either drop `event_id` or rename it to `id`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.DataHub.ExportDatahubDatasetRecords(new ExportDatahubDatasetRecordsRequest
    {
        Name = "My Custom Dataset",
        StartTime = DateTimeOffset.Parse("2026-01-01T00:00:00Z"),
        EndTime = DateTimeOffset.Parse("2026-02-01T00:00:00Z"),
    });
}
catch (ApiException<ExportDatahubDatasetRecordsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExportDatahubDatasetRecordsRequest](src/DoiT/Requests/DataHub/ExportDatahubDatasetRecordsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ExportDatahubDatasetRecordsError](src/DoiT/Errors/ExportDatahubDatasetRecordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DatahubV1DatasetsResponse4&gt; GetDatahubDataset(GetDatahubDatasetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific DataHub dataset by name.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataHub.GetDatahubDataset(new GetDatahubDatasetRequest { Name = "My Custom Dataset" });
    // TODO: Handle 'response' of type DatahubV1DatasetsResponse4
}
catch (ApiException<GetDatahubDatasetError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDatahubDatasetRequest](src/DoiT/Requests/DataHub/GetDatahubDatasetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatahubV1DatasetsResponse4](src/DoiT/Models/DatahubV1DatasetsResponse4.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetDatahubDatasetError](src/DoiT/Errors/GetDatahubDatasetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DatahubV1DatasetsResponse&gt; ListDatahubDatasets(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all DataHub datasets for the customer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataHub.ListDatahubDatasets();
    // TODO: Handle 'response' of type DatahubV1DatasetsResponse
}
catch (ApiException<ListDatahubDatasetsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatahubV1DatasetsResponse](src/DoiT/Models/DatahubV1DatasetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListDatahubDatasetsError](src/DoiT/Errors/ListDatahubDatasetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DatahubV1DatasetsResponse1&gt; UpdateDatahubDataset(UpdateDatahubDatasetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing DataHub dataset's metadata. The `description`, `displayName` and `logoName` fields can be updated.
Only the fields present in the request body are changed; an omitted field keeps its stored value, and an empty string clears it.
The dataset `name` is immutable and serves as the resource identifier and the ingest `provider` value. To change how a dataset is displayed in the console and in report results, set `displayName`; saved reports, budgets, alerts and filters keep working because they reference `name`.
If `name` is included in the request body, it must match the dataset name in the URL path. A mismatched name will be rejected with a 400 error.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataHub.UpdateDatahubDataset(new UpdateDatahubDatasetRequest
    {
        Name = "My Custom Dataset",
        Body = new DatahubV1DatasetsRequest2(),
    });
    // TODO: Handle 'response' of type DatahubV1DatasetsResponse1
}
catch (ApiException<UpdateDatahubDatasetError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateDatahubDatasetRequest](src/DoiT/Requests/DataHub/UpdateDatahubDatasetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatahubV1DatasetsResponse1](src/DoiT/Models/DatahubV1DatasetsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateDatahubDatasetError](src/DoiT/Errors/UpdateDatahubDatasetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Dimensions

> Source: [Dimensions](src/DoiT/Api/Dimensions.cs)

<details>
<summary><code>Task&lt;DimensionsExternalApiGetResponse&gt; GetDimensions(GetDimensionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a dimension by type and key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Dimensions.GetDimensions(new GetDimensionsRequest
    {
        Type = DimensionsTypes.Fixed,
        Id = "service_description",
    });
    // TODO: Handle 'response' of type DimensionsExternalApiGetResponse
}
catch (ApiException<GetDimensionsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDimensionsRequest](src/DoiT/Requests/Dimensions/GetDimensionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DimensionsExternalApiGetResponse](src/DoiT/Models/DimensionsExternalApiGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetDimensionsError](src/DoiT/Errors/GetDimensionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DimensionsExternalApiListResponse&gt; ListDimensions(ListDimensionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the dimensions that your account has access to.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Dimensions.ListDimensions(new ListDimensionsRequest());
    // TODO: Handle 'response' of type DimensionsExternalApiListResponse
}
catch (ApiException<ListDimensionsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDimensionsRequest](src/DoiT/Requests/Dimensions/ListDimensionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DimensionsExternalApiListResponse](src/DoiT/Models/DimensionsExternalApiListResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListDimensionsError](src/DoiT/Errors/ListDimensionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Folders

> Source: [Folders](src/DoiT/Api/Folders.cs)

<details>
<summary><code>Task&lt;Folder&gt; CreateFolder(CreateFolderOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Cloud Analytics folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Folders.CreateFolder(new CreateFolderOperationRequest
    {
        Body = new CreateFolderRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Folder
}
catch (ApiException<CreateFolderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateFolderOperationRequest](src/DoiT/Requests/Folders/CreateFolderOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Folder](src/DoiT/Models/Folder.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateFolderError](src/DoiT/Errors/CreateFolderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteFolder(DeleteFolderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified folder. All nested folders will be deleted. Any reports or allocations contained in the folder are moved to the root.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Folders.DeleteFolder(new DeleteFolderRequest { Id = "some example string" });
}
catch (ApiException<DeleteFolderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteFolderRequest](src/DoiT/Requests/Folders/DeleteFolderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteFolderError](src/DoiT/Errors/DeleteFolderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Folder&gt; GetFolder(GetFolderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified Cloud Analytics folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Folders.GetFolder(new GetFolderRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Folder
}
catch (ApiException<GetFolderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFolderRequest](src/DoiT/Requests/Folders/GetFolderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Folder](src/DoiT/Models/Folder.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetFolderError](src/DoiT/Errors/GetFolderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsV1FoldersResponse&gt; ListFolders(ListFoldersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Cloud Analytics folders the current customer has access to.
Folders are returned in id-ascending order.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Folders.ListFolders(new ListFoldersRequest());
    // TODO: Handle 'response' of type AnalyticsV1FoldersResponse
}
catch (ApiException<ListFoldersError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFoldersRequest](src/DoiT/Requests/Folders/ListFoldersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsV1FoldersResponse](src/DoiT/Models/AnalyticsV1FoldersResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListFoldersError](src/DoiT/Errors/ListFoldersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Folder&gt; UpdateFolder(UpdateFolderOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified folder. All fields are optional.
To reparent the folder, set `parentFolderId` to the target folder ID
(use "root" for the top level). If a sibling at the target has the same
name, the folder is auto-renamed.
To move reports or allocations into or out of a folder, update the item's
`folderId` field via the report or allocation PATCH endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Folders.UpdateFolder(new UpdateFolderOperationRequest
    {
        Id = "some example string",
        Body = new UpdateFolderRequest(),
    });
    // TODO: Handle 'response' of type Folder
}
catch (ApiException<UpdateFolderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateFolderOperationRequest](src/DoiT/Requests/Folders/UpdateFolderOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Folder](src/DoiT/Models/Folder.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateFolderError](src/DoiT/Errors/UpdateFolderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GeographicAccess

> Source: [GeographicAccess](src/DoiT/Api/GeographicAccess.cs)

<details>
<summary><code>Task&lt;GeographicAccessCustomRegion&gt; CreateGeographicAccessCustomRegion(CreateGeographicAccessCustomRegionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom region owned by the authenticated tenant. The tenant must be a customer-hierarchy root. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GeographicAccess.CreateGeographicAccessCustomRegion(
        new CreateGeographicAccessCustomRegionOperationRequest
        {
            XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
            Body = new CreateGeographicAccessCustomRegionRequest
            {
                Name = "some example string",
                CountryCodes = ["some example string"],
            },
        });
    // TODO: Handle 'response' of type GeographicAccessCustomRegion
}
catch (ApiException<CreateGeographicAccessCustomRegionError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateGeographicAccessCustomRegionOperationRequest](src/DoiT/Requests/GeographicAccess/CreateGeographicAccessCustomRegionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeographicAccessCustomRegion](src/DoiT/Models/GeographicAccessCustomRegion.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateGeographicAccessCustomRegionError](src/DoiT/Errors/CreateGeographicAccessCustomRegionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteCustomerGeographicAccessScope(DeleteCustomerGeographicAccessScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clears the geographic scope for a target customer, leaving it unassigned. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating the request is idempotent. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.GeographicAccess.DeleteCustomerGeographicAccessScope(new DeleteCustomerGeographicAccessScopeRequest
    {
        TargetCustomerId = "some example string",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
}
catch (ApiException<DeleteCustomerGeographicAccessScopeError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomerGeographicAccessScopeRequest](src/DoiT/Requests/GeographicAccess/DeleteCustomerGeographicAccessScopeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomerGeographicAccessScopeError](src/DoiT/Errors/DeleteCustomerGeographicAccessScopeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteGeographicAccessCustomRegion(DeleteGeographicAccessCustomRegionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom region owned by the authenticated tenant. Assigned regions cannot be deleted. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.GeographicAccess.DeleteGeographicAccessCustomRegion(new DeleteGeographicAccessCustomRegionRequest
    {
        CustomRegionId = "some example string",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
}
catch (ApiException<DeleteGeographicAccessCustomRegionError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteGeographicAccessCustomRegionRequest](src/DoiT/Requests/GeographicAccess/DeleteGeographicAccessCustomRegionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteGeographicAccessCustomRegionError](src/DoiT/Errors/DeleteGeographicAccessCustomRegionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteUserGeographicAccessScope(DeleteUserGeographicAccessScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clears the geographic scope assigned to a user who belongs to the target customer, leaving it unassigned. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating the request is idempotent. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.GeographicAccess.DeleteUserGeographicAccessScope(new DeleteUserGeographicAccessScopeRequest
    {
        TargetCustomerId = "some example string",
        UserId = "some example string",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
}
catch (ApiException<DeleteUserGeographicAccessScopeError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteUserGeographicAccessScopeRequest](src/DoiT/Requests/GeographicAccess/DeleteUserGeographicAccessScopeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteUserGeographicAccessScopeError](src/DoiT/Errors/DeleteUserGeographicAccessScopeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GeographicAccessScope&gt; GetCustomerGeographicAccessScope(GetCustomerGeographicAccessScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the geographic scope for a target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Targets outside that hierarchy are returned as not found. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GeographicAccess.GetCustomerGeographicAccessScope(
        new GetCustomerGeographicAccessScopeRequest
        {
            TargetCustomerId = "some example string",
            XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
        });
    // TODO: Handle 'response' of type GeographicAccessScope
}
catch (ApiException<GetCustomerGeographicAccessScopeError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomerGeographicAccessScopeRequest](src/DoiT/Requests/GeographicAccess/GetCustomerGeographicAccessScopeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeographicAccessScope](src/DoiT/Models/OneOf/GeographicAccessScope.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCustomerGeographicAccessScopeError](src/DoiT/Errors/GetCustomerGeographicAccessScopeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GeographicAccessCustomRegion&gt; GetGeographicAccessCustomRegion(GetGeographicAccessCustomRegionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a custom region owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GeographicAccess.GetGeographicAccessCustomRegion(
        new GetGeographicAccessCustomRegionRequest
        {
            CustomRegionId = "some example string",
            XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
        });
    // TODO: Handle 'response' of type GeographicAccessCustomRegion
}
catch (ApiException<GetGeographicAccessCustomRegionError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGeographicAccessCustomRegionRequest](src/DoiT/Requests/GeographicAccess/GetGeographicAccessCustomRegionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeographicAccessCustomRegion](src/DoiT/Models/GeographicAccessCustomRegion.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetGeographicAccessCustomRegionError](src/DoiT/Errors/GetGeographicAccessCustomRegionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GeographicAccessScope&gt; GetUserGeographicAccessScope(GetUserGeographicAccessScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the geographic scope assigned to a user who belongs to the target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Targets outside that hierarchy are returned as not found. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GeographicAccess.GetUserGeographicAccessScope(new GetUserGeographicAccessScopeRequest
    {
        TargetCustomerId = "some example string",
        UserId = "some example string",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type GeographicAccessScope
}
catch (ApiException<GetUserGeographicAccessScopeError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserGeographicAccessScopeRequest](src/DoiT/Requests/GeographicAccess/GetUserGeographicAccessScopeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeographicAccessScope](src/DoiT/Models/OneOf/GeographicAccessScope.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetUserGeographicAccessScopeError](src/DoiT/Errors/GetUserGeographicAccessScopeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GeographicAccessCountriesResponse&gt; ListGeographicAccessCountries(ListGeographicAccessCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the canonical ISO 3166-1 alpha-2 country catalogue used by geographic access policies.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GeographicAccess.ListGeographicAccessCountries(new ListGeographicAccessCountriesRequest
    {
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type GeographicAccessCountriesResponse
}
catch (ApiException<ListGeographicAccessCountriesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGeographicAccessCountriesRequest](src/DoiT/Requests/GeographicAccess/ListGeographicAccessCountriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeographicAccessCountriesResponse](src/DoiT/Models/GeographicAccessCountriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListGeographicAccessCountriesError](src/DoiT/Errors/ListGeographicAccessCountriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GeographicAccessCustomRegionsResponse&gt; ListGeographicAccessCustomRegions(ListGeographicAccessCustomRegionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the ready custom regions owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GeographicAccess.ListGeographicAccessCustomRegions(
        new ListGeographicAccessCustomRegionsRequest { XTenantId = "Kp2mN8qL4vR0sT1wX3yZ" });
    // TODO: Handle 'response' of type GeographicAccessCustomRegionsResponse
}
catch (ApiException<ListGeographicAccessCustomRegionsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGeographicAccessCustomRegionsRequest](src/DoiT/Requests/GeographicAccess/ListGeographicAccessCustomRegionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeographicAccessCustomRegionsResponse](src/DoiT/Models/GeographicAccessCustomRegionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListGeographicAccessCustomRegionsError](src/DoiT/Errors/ListGeographicAccessCustomRegionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GeographicAccessScope&gt; UpdateCustomerGeographicAccessScope(UpdateCustomerGeographicAccessScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Atomically replaces the geographic scope for a target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating an identical request is idempotent. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GeographicAccess.UpdateCustomerGeographicAccessScope(
        new UpdateCustomerGeographicAccessScopeRequest
        {
            TargetCustomerId = "some example string",
            XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
            Body = new CountryGeographicAccessScopeRequest { CountryCode = "DE" },
        });
    // TODO: Handle 'response' of type GeographicAccessScope
}
catch (ApiException<UpdateCustomerGeographicAccessScopeError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCustomerGeographicAccessScopeRequest](src/DoiT/Requests/GeographicAccess/UpdateCustomerGeographicAccessScopeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeographicAccessScope](src/DoiT/Models/OneOf/GeographicAccessScope.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomerGeographicAccessScopeError](src/DoiT/Errors/UpdateCustomerGeographicAccessScopeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GeographicAccessCustomRegion&gt; UpdateGeographicAccessCustomRegion(UpdateGeographicAccessCustomRegionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name, country membership, or both for a custom region owned by the authenticated tenant. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GeographicAccess.UpdateGeographicAccessCustomRegion(
        new UpdateGeographicAccessCustomRegionOperationRequest
        {
            CustomRegionId = "some example string",
            XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
            Body = new UpdateGeographicAccessCustomRegionRequest(),
        });
    // TODO: Handle 'response' of type GeographicAccessCustomRegion
}
catch (ApiException<UpdateGeographicAccessCustomRegionError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateGeographicAccessCustomRegionOperationRequest](src/DoiT/Requests/GeographicAccess/UpdateGeographicAccessCustomRegionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeographicAccessCustomRegion](src/DoiT/Models/GeographicAccessCustomRegion.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateGeographicAccessCustomRegionError](src/DoiT/Errors/UpdateGeographicAccessCustomRegionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GeographicAccessScope&gt; UpdateUserGeographicAccessScope(UpdateUserGeographicAccessScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Atomically replaces the geographic scope assigned to a user who belongs to the target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating an identical request is idempotent. Requires the UsersManager permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GeographicAccess.UpdateUserGeographicAccessScope(
        new UpdateUserGeographicAccessScopeRequest
        {
            TargetCustomerId = "some example string",
            UserId = "some example string",
            XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
            Body = new CountryGeographicAccessScopeRequest { CountryCode = "DE" },
        });
    // TODO: Handle 'response' of type GeographicAccessScope
}
catch (ApiException<UpdateUserGeographicAccessScopeError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateUserGeographicAccessScopeRequest](src/DoiT/Requests/GeographicAccess/UpdateUserGeographicAccessScopeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeographicAccessScope](src/DoiT/Models/OneOf/GeographicAccessScope.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateUserGeographicAccessScopeError](src/DoiT/Errors/UpdateUserGeographicAccessScopeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](src/DoiT/Api/Insights.cs)

<details>
<summary><code>Task DeleteInsightResult(DeleteInsightResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a single insight and all its associated resource results.
Only insights created via the public API can be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Insights.DeleteInsightResult(new DeleteInsightResultRequest
    {
        SourceId = SourceId.PublicApi,
        InsightKey = "some example string",
    });
}
catch (ApiException<DeleteInsightResultError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteInsightResultRequest](src/DoiT/Requests/Insights/DeleteInsightResultRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteInsightResultError](src/DoiT/Errors/DeleteInsightResultError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteInsightResults(DeleteInsightResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all insights matching the specified key from the batch source.
This removes the insight and all its associated resource results.
For single-insight deletion, use `DELETE /source/{sourceID}/insight/{insightKey}` instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Insights.DeleteInsightResults(new DeleteInsightResultsRequest { InsightKey = "some example string" });
}
catch (ApiException<DeleteInsightResultsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteInsightResultsRequest](src/DoiT/Requests/Insights/DeleteInsightResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteInsightResultsError](src/DoiT/Errors/DeleteInsightResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ResourceResultsResponse&gt; GetInsightResourceResults(GetInsightResourceResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of individual resource-level results for a specific insight.
Each resource result represents a single cloud resource (e.g. an EC2 instance, a GCS bucket)
affected by the insight, along with its risk scores or potential savings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetInsightResourceResults(new GetInsightResourceResultsRequest
    {
        SourceId = "some example string",
        InsightKey = "some example string",
    });
    // TODO: Handle 'response' of type ResourceResultsResponse
}
catch (ApiException<GetInsightResourceResultsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInsightResourceResultsRequest](src/DoiT/Requests/Insights/GetInsightResourceResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourceResultsResponse](src/DoiT/Models/ResourceResultsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetInsightResourceResultsError](src/DoiT/Errors/GetInsightResourceResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InsightResponse&gt; GetInsightResult(GetInsightResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the metadata and aggregate summary for a single insight identified by source and key.
Does not include individual resource-level results — use the resource-results endpoint for those.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetInsightResult(new GetInsightResultRequest
    {
        SourceId = "some example string",
        InsightKey = "some example string",
    });
    // TODO: Handle 'response' of type InsightResponse
}
catch (ApiException<GetInsightResultError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInsightResultRequest](src/DoiT/Requests/Insights/GetInsightResultRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightResponse](src/DoiT/Models/InsightResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetInsightResultError](src/DoiT/Errors/GetInsightResultError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ResultsBody&gt; GetInsightResults(GetInsightResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of insights with their aggregate summaries (savings, risk counts).
Use query parameters to filter by status, category, provider, or priority.
Does not include individual resource-level results — use the resource-results endpoint for those.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetInsightResults(new GetInsightResultsRequest { CloudProvider = "aws" });
    // TODO: Handle 'response' of type ResultsBody
}
catch (ApiException<GetInsightResultsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInsightResultsRequest](src/DoiT/Requests/Insights/GetInsightResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResultsBody](src/DoiT/Models/ResultsBody.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetInsightResultsError](src/DoiT/Errors/GetInsightResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ResourceResultsResponse&gt; PostInsightResourceResults(PostInsightResourceResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces all resource results for the specified insight. Any existing unresolved resource results not present in the new set will be removed. The response includes server-computed fields (severity, resolved, enhancement) for each resource result. To delete all resource results, send an empty array.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.PostInsightResourceResults(new PostInsightResourceResultsRequest
    {
        SourceId = SourceId.PublicApi,
        InsightKey = "some example string",
        Body = new CreateResourceResultsBody
        {
            ResourceResults = [
                new ResourceResultRequest
                {
                    ResourceId = "some example string",
                    CloudProvider = "some example string",
                    Account = "some example string",
                    ResultType = ResultType.SecurityRisk,
                },
            ],
        },
    });
    // TODO: Handle 'response' of type ResourceResultsResponse
}
catch (ApiException<PostInsightResourceResultsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostInsightResourceResultsRequest](src/DoiT/Requests/Insights/PostInsightResourceResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourceResultsResponse](src/DoiT/Models/ResourceResultsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[PostInsightResourceResultsError](src/DoiT/Errors/PostInsightResourceResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InsightResponse&gt; PostInsightResult(PostInsightResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates a single insight for the given source and key.
If an insight with the same key already exists for the source, it will be updated.
Resource results are managed separately via the resource-results endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.PostInsightResult(new PostInsightResultRequest
    {
        SourceId = SourceId.PublicApi,
        InsightKey = "some example string",
        Body = new InsightMetadataRequest
        {
            Key = "some example string",
            Title = "some example string",
            ShortDescription = "some example string",
            CloudProvider = "some example string",
            Categories = [CreateCategory.FinOps],
        },
    });
    // TODO: Handle 'response' of type InsightResponse
}
catch (ApiException<PostInsightResultError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostInsightResultRequest](src/DoiT/Requests/Insights/PostInsightResultRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightResponse](src/DoiT/Models/InsightResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[PostInsightResultError](src/DoiT/Errors/PostInsightResultError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ResultsError&gt;&gt; PostInsightResults(PostInsightResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates multiple insights in a single batch request.
Each insight in the batch includes its metadata and resource results inline.
For granular control over insight metadata and resource results independently,
use the single-insight and resource-results endpoints instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.PostInsightResults(new PostInsightResultsRequest());
    // TODO: Handle 'response' of type IReadOnlyList<ResultsError>
}
catch (ApiException<PostInsightResultsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostInsightResultsRequest](src/DoiT/Requests/Insights/PostInsightResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ResultsError](src/DoiT/Models/ResultsError.cs)&gt;</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[PostInsightResultsError](src/DoiT/Errors/PostInsightResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateInsightStatus(UpdateInsightStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the display status (e.g. actionable, acknowledged, dismissed) of a single insight.
Only insights created via the public API can have their status changed.
Deprecated: use the status field on the create/update insight endpoint instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Insights.UpdateInsightStatus(new UpdateInsightStatusRequest
    {
        SourceId = SourceId.PublicApi,
        InsightKey = "some example string",
        Body = new UpdateStatusRequest { Status = DisplayStatus.Actionable },
    });
}
catch (ApiException<UpdateInsightStatusError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateInsightStatusRequest](src/DoiT/Requests/Insights/UpdateInsightStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateInsightStatusError](src/DoiT/Errors/UpdateInsightStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Invoices

> Source: [Invoices](src/DoiT/Api/Invoices.cs)

<details>
<summary><code>Task&lt;BillingV1InvoicesResponse1&gt; GetInvoice(GetInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full details of an invoice specified by the invoice number.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Invoices.GetInvoice(new GetInvoiceRequest { Id = "some example string" });
    // TODO: Handle 'response' of type BillingV1InvoicesResponse1
}
catch (ApiException<GetInvoiceError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInvoiceRequest](src/DoiT/Requests/Invoices/GetInvoiceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillingV1InvoicesResponse1](src/DoiT/Models/BillingV1InvoicesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetInvoiceError](src/DoiT/Errors/GetInvoiceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BillingV1InvoicesResponse&gt; ListInvoices(ListInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the current and historical invoices for your organization.
Invoices are returned in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Invoices.ListInvoices(new ListInvoicesRequest());
    // TODO: Handle 'response' of type BillingV1InvoicesResponse
}
catch (ApiException<ListInvoicesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListInvoicesRequest](src/DoiT/Requests/Invoices/ListInvoicesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillingV1InvoicesResponse](src/DoiT/Models/BillingV1InvoicesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListInvoicesError](src/DoiT/Errors/ListInvoicesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Labels

> Source: [Labels](src/DoiT/Api/Labels.cs)

<details>
<summary><code>Task AssignObjectsToLabel(AssignObjectsToLabelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns or un-assigns objects to the label specified by the ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Labels.AssignObjectsToLabel(new AssignObjectsToLabelOperationRequest
    {
        Id = "some example string",
        Body = new AssignObjectsToLabelRequest(),
    });
}
catch (ApiException<AssignObjectsToLabelError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssignObjectsToLabelOperationRequest](src/DoiT/Requests/Labels/AssignObjectsToLabelOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[AssignObjectsToLabelError](src/DoiT/Errors/AssignObjectsToLabelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LabelListItem&gt; CreateLabel(CreateLabelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new label.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Labels.CreateLabel(new CreateLabelOperationRequest
    {
        Body = new CreateLabelRequest { Name = "some example string", Color = Color.Blue },
    });
    // TODO: Handle 'response' of type LabelListItem
}
catch (ApiException<CreateLabelError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateLabelOperationRequest](src/DoiT/Requests/Labels/CreateLabelOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LabelListItem](src/DoiT/Models/LabelListItem.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateLabelError](src/DoiT/Errors/CreateLabelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteLabel(DeleteLabelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the label specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Labels.DeleteLabel(new DeleteLabelRequest { Id = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteLabelError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteLabelRequest](src/DoiT/Requests/Labels/DeleteLabelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteLabelError](src/DoiT/Errors/DeleteLabelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LabelListItem&gt; GetLabel(GetLabelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a label by the specified Id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Labels.GetLabel(new GetLabelRequest { Id = "some example string" });
    // TODO: Handle 'response' of type LabelListItem
}
catch (ApiException<GetLabelError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetLabelRequest](src/DoiT/Requests/Labels/GetLabelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LabelListItem](src/DoiT/Models/LabelListItem.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetLabelError](src/DoiT/Errors/GetLabelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LabelAssignmentsResponse&gt; GetLabelAssignments(GetLabelAssignmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of objects currently assigned to the label specified by the ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Labels.GetLabelAssignments(new GetLabelAssignmentsRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type LabelAssignmentsResponse
}
catch (ApiException<GetLabelAssignmentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetLabelAssignmentsRequest](src/DoiT/Requests/Labels/GetLabelAssignmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LabelAssignmentsResponse](src/DoiT/Models/LabelAssignmentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetLabelAssignmentsError](src/DoiT/Errors/GetLabelAssignmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LabelList&gt; ListLabels(ListLabelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of labels that your account has access to.
Labels are listed in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Labels.ListLabels(new ListLabelsRequest
    {
        Filter = "name:budget",
        NameContains = "monthly spend",
    });
    // TODO: Handle 'response' of type LabelList
}
catch (ApiException<ListLabelsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListLabelsRequest](src/DoiT/Requests/Labels/ListLabelsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LabelList](src/DoiT/Models/LabelList.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListLabelsError](src/DoiT/Errors/ListLabelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LabelListItem&gt; UpdateLabel(UpdateLabelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the label specified by the Id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Labels.UpdateLabel(new UpdateLabelOperationRequest { Id = "some example string" });
    // TODO: Handle 'response' of type LabelListItem
}
catch (ApiException<UpdateLabelError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateLabelOperationRequest](src/DoiT/Requests/Labels/UpdateLabelOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LabelListItem](src/DoiT/Models/LabelListItem.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateLabelError](src/DoiT/Errors/UpdateLabelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](src/DoiT/Api/Organizations.cs)

<details>
<summary><code>Task&lt;IamV1OrganizationsResponse&gt; ListOrganizations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of organizations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ListOrganizations();
    // TODO: Handle 'response' of type IamV1OrganizationsResponse
}
catch (ApiException<ListOrganizationsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IamV1OrganizationsResponse](src/DoiT/Models/IamV1OrganizationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListOrganizationsError](src/DoiT/Errors/ListOrganizationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PerfectScaleForCommitmentsAws

> Source: [PerfectScaleForCommitmentsAws](src/DoiT/Api/PerfectScaleForCommitmentsAws.cs)

<details>
<summary><code>Task&lt;AwsMemberAccountDetail&gt; GetAwsMemberAccount(GetAwsMemberAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single member AWS account with the same list-item fields as List member accounts, plus the Overview time series. Use this when you need a single members Console Overview in one call (identity and onboarding status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind Cost Summary and Commitment Coverage charts) without fetching every member account.

Fields that drive the Overview tab in the DoiT console:
- `stats30d`: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
- `monthlyStats`: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost Summary chart, and month-over-month card trends).
- `dailyCoverage`: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
- `savingsTotals`: year-to-date and lifetime realized savings per SP type (shown under the Savings card). Lifetime is bounded by the parent organization's PerfectScale for Commitments onboarding start.
- `monthlyPotentialSavings`: estimated monthly additional savings per SP type from the latest purchase projection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsAws.GetAwsMemberAccount(new GetAwsMemberAccountRequest
    {
        ManagementAccountId = "123456789012",
        MemberAccountId = "987654321098",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type AwsMemberAccountDetail
}
catch (ApiException<GetAwsMemberAccountError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAwsMemberAccountRequest](src/DoiT/Requests/PerfectScaleForCommitmentsAws/GetAwsMemberAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AwsMemberAccountDetail](src/DoiT/Models/AwsMemberAccountDetail.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetAwsMemberAccountError](src/DoiT/Errors/GetAwsMemberAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AwsOrganizationDetail&gt; GetAwsOrganization(GetAwsOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single AWS organization with the same list-item fields as List AWS Organizations, plus the Overview time series. Use this when you need a single organization's Console Overview in one call (identity and onboarding status, 30-day ESR and savings, YTD/lifetime totals, monthly potential savings, and the data behind Cost Summary and Commitment Coverage charts) without fetching every organization.

Fields that drive the Overview tab in the DoiT console:
- `stats30d`: last 30 days ESR and realized savings per SP type (ESR and Savings cards).
- `monthlyStats`: last 6 calendar months of ESR, on-demand cost, and cost with savings per SP type (Cost Summary chart, and month-over-month card trends).
- `dailyCoverage`: last 30 days of commitment coverage breakdown per SP type (Commitment Coverage chart).
- `savingsTotals`: year-to-date and lifetime realized savings per SP type (shown under the Savings card). Lifetime is bounded by PerfectScale for Commitments onboarding start.
- `monthlyPotentialSavings`: estimated monthly additional savings per SP type from the latest purchase projection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsAws.GetAwsOrganization(new GetAwsOrganizationRequest
    {
        ManagementAccountId = "123456789012",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type AwsOrganizationDetail
}
catch (ApiException<GetAwsOrganizationError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAwsOrganizationRequest](src/DoiT/Requests/PerfectScaleForCommitmentsAws/GetAwsOrganizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AwsOrganizationDetail](src/DoiT/Models/AwsOrganizationDetail.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetAwsOrganizationError](src/DoiT/Errors/GetAwsOrganizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AwsRecommendationWithEligibleSpend&gt; GetAwsRecommendation(GetAwsRecommendationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the recommendation for one commitment type (`serviceId`) on the AWS organization, including analysis metrics and time-bucketed eligible spend. Use `granularity` to choose the eligible-spend bucket size (defaults to `day`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsAws.GetAwsRecommendation(new GetAwsRecommendationRequest
    {
        ManagementAccountId = "123456789012",
        ServiceId = ServiceId.Compute,
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type AwsRecommendationWithEligibleSpend
}
catch (ApiException<GetAwsRecommendationError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAwsRecommendationRequest](src/DoiT/Requests/PerfectScaleForCommitmentsAws/GetAwsRecommendationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AwsRecommendationWithEligibleSpend](src/DoiT/Models/AwsRecommendationWithEligibleSpend.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetAwsRecommendationError](src/DoiT/Errors/GetAwsRecommendationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse&gt; ListAwsMemberAccounts(ListAwsMemberAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all member AWS accounts under the specified AWS organization that have active or historical commitment coverage. Includes 30-day statistics and estimated monthly potential savings (`monthlyPotentialSavings`) per Savings Plan (SP) type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsAws.ListAwsMemberAccounts(new ListAwsMemberAccountsRequest
    {
        ManagementAccountId = "123456789012",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse
}
catch (ApiException<ListAwsMemberAccountsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAwsMemberAccountsRequest](src/DoiT/Requests/PerfectScaleForCommitmentsAws/ListAwsMemberAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse](src/DoiT/Models/Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListAwsMemberAccountsError](src/DoiT/Errors/ListAwsMemberAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Ps4CommitmentsV1AwsOrganizationsResponse&gt; ListAwsOrganizations(ListAwsOrganizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all AWS organizations (accounts) accessible to the authenticated tenant. Use as the entry point to discover AWS organization account IDs, and organization-level onboarding status of the available commitment types and savings metrics.

Each item includes metadata, trailing 30-day aggregate statistics, precomputed YTD/lifetime savings totals per Savings Plan (SP) type, and estimated monthly potential savings (`monthlyPotentialSavings`) per SP type from the latest projection. Sum across items for customer-level totals.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsAws.ListAwsOrganizations(new ListAwsOrganizationsRequest
    {
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsResponse
}
catch (ApiException<ListAwsOrganizationsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAwsOrganizationsRequest](src/DoiT/Requests/PerfectScaleForCommitmentsAws/ListAwsOrganizationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Ps4CommitmentsV1AwsOrganizationsResponse](src/DoiT/Models/Ps4CommitmentsV1AwsOrganizationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListAwsOrganizationsError](src/DoiT/Errors/ListAwsOrganizationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Ps4CommitmentsV1AwsSettingsResponse&gt; ListAwsOrganizationsSettings(ListAwsOrganizationsSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one item per onboarded AWS organization. Each item includes that AWS organization's commitments purchasing account (`purchaseAccountId`) and commitment settings for each commitment type activated on that AWS organization (`compute`, `database`).

Commitment settings cover recommendation and automation preferences (policy, term, payment option, automation mode, commitment limits, and related fields). They are stored independently for each AWS organization and commitment type. Each item includes that organization's `purchaseAccountId` and activated commitment types.

In the DoiT Console, commitment settings are edited on an account's Settings tab and apply only to that AWS organization and commitment type; the purchasing account is set per AWS organization on Accounts Settings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsAws.ListAwsOrganizationsSettings(
        new ListAwsOrganizationsSettingsRequest { XTenantId = "Kp2mN8qL4vR0sT1wX3yZ" });
    // TODO: Handle 'response' of type Ps4CommitmentsV1AwsSettingsResponse
}
catch (ApiException<ListAwsOrganizationsSettingsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAwsOrganizationsSettingsRequest](src/DoiT/Requests/PerfectScaleForCommitmentsAws/ListAwsOrganizationsSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Ps4CommitmentsV1AwsSettingsResponse](src/DoiT/Models/Ps4CommitmentsV1AwsSettingsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListAwsOrganizationsSettingsError](src/DoiT/Errors/ListAwsOrganizationsSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse&gt; ListAwsPlannedPurchases(ListAwsPlannedPurchasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns planned purchases (laddering projections) for the AWS organization. One item per commitment type that has a projection available (typically `compute` and/or `database`; up to four commitment types as PerfectScale for Commitments expands).

With no filters, returns all available planned-purchase items for the AWS organization in stable commitment-type order (`compute`, then `database`, then any future commitment types in enum order). When a filtered commitment type has no planned purchases, the response is an empty `items` array (not `404`). Partial items return only the fields available at response time.

`404` is returned only when the AWS organization does not exist or the caller cannot access it. An AWS organization that is not onboarded for PerfectScale for Commitments still returns `200` with an empty `items` array when no planned purchases exist — use `GET /ps4commitments/v1/aws/organizations` (or get-by-id) for `onboardingStatus`.

**Pagination**: results are returned in stable commitment-type order (`compute`, then `database`, then any future commitment types in enum order). Use `maxResults` to limit page size (default 50, max 500). When more items remain, the response includes a non-null `pageToken`; pass it unchanged on the next request with the same query parameters (`service`, `maxResults`). `rowCount` is the number of items in this page. An invalid `pageToken` returns `400` with code `pagination_token_invalid`; an expired token returns `400` with code `pagination_token_expired`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsAws.ListAwsPlannedPurchases(new ListAwsPlannedPurchasesRequest
    {
        ManagementAccountId = "123456789012",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse
}
catch (ApiException<ListAwsPlannedPurchasesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAwsPlannedPurchasesRequest](src/DoiT/Requests/PerfectScaleForCommitmentsAws/ListAwsPlannedPurchasesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse](src/DoiT/Models/Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListAwsPlannedPurchasesError](src/DoiT/Errors/ListAwsPlannedPurchasesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AwsRecommendations&gt; ListAwsRecommendations(ListAwsRecommendationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns commitment purchase recommendations for the AWS organization, keyed by commitment type (`compute`, `database`). A commitment type is present only when it is onboarded and a recommendation is available.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsAws.ListAwsRecommendations(new ListAwsRecommendationsRequest
    {
        ManagementAccountId = "123456789012",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type AwsRecommendations
}
catch (ApiException<ListAwsRecommendationsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAwsRecommendationsRequest](src/DoiT/Requests/PerfectScaleForCommitmentsAws/ListAwsRecommendationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AwsRecommendations](src/DoiT/Models/AwsRecommendations.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListAwsRecommendationsError](src/DoiT/Errors/ListAwsRecommendationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse&gt; ListAwsReservedInstances(ListAwsReservedInstancesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of Reserved Instances (RIs) for the specified AWS organization. Optionally filter by state, instance type, instance family, region, and offering class. Omit filters to return all RIs for the AWS organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsAws.ListAwsReservedInstances(
        new ListAwsReservedInstancesRequest
        {
            ManagementAccountId = "123456789012",
            XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
        });
    // TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse
}
catch (ApiException<ListAwsReservedInstancesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAwsReservedInstancesRequest](src/DoiT/Requests/PerfectScaleForCommitmentsAws/ListAwsReservedInstancesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse](src/DoiT/Models/Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListAwsReservedInstancesError](src/DoiT/Errors/ListAwsReservedInstancesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse&gt; ListAwsSavingsPlans(ListAwsSavingsPlansRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of Savings Plans for the specified AWS organization. Optionally filter by plan type (`type`) and state (`status`). Omit both filters to return all plans for the AWS organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsAws.ListAwsSavingsPlans(new ListAwsSavingsPlansRequest
    {
        ManagementAccountId = "123456789012",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse
}
catch (ApiException<ListAwsSavingsPlansError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAwsSavingsPlansRequest](src/DoiT/Requests/PerfectScaleForCommitmentsAws/ListAwsSavingsPlansRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse](src/DoiT/Models/Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListAwsSavingsPlansError](src/DoiT/Errors/ListAwsSavingsPlansError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PerfectScaleForCommitmentsGcp

> Source: [PerfectScaleForCommitmentsGcp](src/DoiT/Api/PerfectScaleForCommitmentsGcp.cs)

<details>
<summary><code>Task&lt;GcpBillingAccountDetail&gt; GetGcpBillingAccount(GetGcpBillingAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single GCP Billing Account with the same list-item fields as List GCP Billing Accounts, plus the Overview time series. Use this when you need a single billing account's Console Overview in one call (identity and onboarding status, 30-day ESR and savings, YTD/lifetime totals, CUD export health, and the data behind Cost Summary and CUD Coverage charts) without fetching every billing account.

Fields that drive the Overview tab in the DoiT console — each is an array with one entry per product line (`service` of `compute` or `cloud_sql`):
- `stats30d`: last 30 days ESR and realized savings per product line (ESR and Savings cards).
- `monthlyStats`: last 6 calendar months of ESR, on-demand cost, and cost with savings per product line (Cost Summary chart, and month-over-month card trends).
- `dailyCoverage`: last 30 days of CUD coverage breakdown per product line (CUD Coverage chart).
- `savingsTotals`: year-to-date and lifetime realized savings per product line (shown under the Savings card). Lifetime is bounded by PerfectScale for Commitments onboarding start.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsGcp.GetGcpBillingAccount(new GetGcpBillingAccountRequest
    {
        BillingAccountId = "01D4A2-4E3F1B-9C72A0",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type GcpBillingAccountDetail
}
catch (ApiException<GetGcpBillingAccountError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGcpBillingAccountRequest](src/DoiT/Requests/PerfectScaleForCommitmentsGcp/GetGcpBillingAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GcpBillingAccountDetail](src/DoiT/Models/GcpBillingAccountDetail.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetGcpBillingAccountError](src/DoiT/Errors/GetGcpBillingAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GcpRecommendationWithEligibleSpend&gt; GetGcpRecommendation(GetGcpRecommendationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the recommendation for one product line (`gcp_service`) and region scope on the GCP
billing account, including analysis metrics and time-bucketed eligible spend. Use
`granularity` to choose the eligible-spend bucket size (defaults to `day`).

**`region`**: optional for `compute`, defaulting to `global` (its only scope). Required
for `cloud_sql` — omitting it returns `400` with code `validation_failed`, as does a
malformed region or one incompatible with `gcp_service` (`cloud_sql` never uses `global`).
A well-formed region the billing account has never had eligible spend in returns `404`
with code `not_found` — the scope does not exist, same as an unknown billing account.
When the scope exists but no stored recommendation matches, the response is `200` with
`recommendation` omitted and `estimatedEquivalentRecommendedCommitment` of `0`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsGcp.GetGcpRecommendation(new GetGcpRecommendationRequest
    {
        BillingAccountId = "01D4A2-4E3F1B-9C72A0",
        GcpService = GcpService.Compute,
        Region = "us_east1",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type GcpRecommendationWithEligibleSpend
}
catch (ApiException<GetGcpRecommendationError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGcpRecommendationRequest](src/DoiT/Requests/PerfectScaleForCommitmentsGcp/GetGcpRecommendationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GcpRecommendationWithEligibleSpend](src/DoiT/Models/GcpRecommendationWithEligibleSpend.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetGcpRecommendationError](src/DoiT/Errors/GetGcpRecommendationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Ps4CommitmentsV1GcpBillingAccountsResponse&gt; ListGcpBillingAccounts(ListGcpBillingAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all GCP Billing Accounts accessible to the authenticated tenant. Use as the entry point to discover GCP billing account IDs, and billing-account-level onboarding status of the available product lines and savings metrics.

Each item includes metadata, CUD export health, trailing 30-day aggregate statistics, and precomputed YTD/lifetime savings totals per product line. Sum across items for customer-level totals.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsGcp.ListGcpBillingAccounts(new ListGcpBillingAccountsRequest
    {
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsResponse
}
catch (ApiException<ListGcpBillingAccountsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGcpBillingAccountsRequest](src/DoiT/Requests/PerfectScaleForCommitmentsGcp/ListGcpBillingAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Ps4CommitmentsV1GcpBillingAccountsResponse](src/DoiT/Models/Ps4CommitmentsV1GcpBillingAccountsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListGcpBillingAccountsError](src/DoiT/Errors/ListGcpBillingAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Ps4CommitmentsV1GcpSettingsResponse&gt; ListGcpBillingAccountsSettings(ListGcpBillingAccountsSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one item per onboarded GCP Billing Account. Each item includes that billing
account's recommendation and automation engine settings for each product line activated
on it, per region scope: one `global` entry for `compute`, and one entry per known region
for `cloud_sql`.

Cloud SQL regions come from the billing account's persisted settings: a region is added
when eligible spend is first seen there and is never removed, so its settings entry
remains listed even if spend later drops to zero. Items are sorted by
`billingAccountId`; within an item, `services` lists `compute` before `cloud_sql`, with
`cloud_sql` regions sorted alphabetically.

Settings are stored independently on each billing account. Existing customer-level
settings are copied lazily when an account is first read or initialized; if no valid
legacy value exists, the complete backend defaults are materialized once on the account.
Only product lines that are activated/onboarded for a given billing account are returned.

In the DoiT Console, these settings are edited on an account's Settings tab.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsSettings(
        new ListGcpBillingAccountsSettingsRequest { XTenantId = "Kp2mN8qL4vR0sT1wX3yZ" });
    // TODO: Handle 'response' of type Ps4CommitmentsV1GcpSettingsResponse
}
catch (ApiException<ListGcpBillingAccountsSettingsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGcpBillingAccountsSettingsRequest](src/DoiT/Requests/PerfectScaleForCommitmentsGcp/ListGcpBillingAccountsSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Ps4CommitmentsV1GcpSettingsResponse](src/DoiT/Models/Ps4CommitmentsV1GcpSettingsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListGcpBillingAccountsSettingsError](src/DoiT/Errors/ListGcpBillingAccountsSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse&gt; ListGcpPlannedPurchases(ListGcpPlannedPurchasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the laddering projections for the billing account, grouped by PS4C product line
(`service`) and region. Each service group lists one entry per available
`gcp-purchases-projection` document for that scope (`compute` scopes are `global`;
`cloud_sql` scopes are per-region).

With no filters, returns all existing projection documents in stable order: service groups
ordered `compute` first, then `cloud_sql`; within each group, regions sorted with `global`
first, then remaining regions alphabetically. Services with no projection documents are omitted
(not returned as empty groups). When a filter matches no documents, the response is an
empty `items` array (not `404`). Partial projection documents return only the fields
available in storage.

**`gcp_service` and `region` filters**: omit both to return all available services and
their regions; supply `gcp_service` alone to return all regions for that service; supply
both to return a single service/region scope. `region` requires `gcp_service` — a request
with `region` but no `gcp_service` returns `400` with code `gcp_service_required`. Invalid
`gcp_service` or `region` values return `400` with code `validation_failed`.

`404` is returned only when the billing account does not exist or the caller cannot access
it. A billing account that is not onboarded for PS4C still returns `200` with an empty
`items` array when no projection documents exist — use
`GET /ps4commitments/v1/gcp/billing-accounts` (or get-by-id) for onboarding status.

**Pagination**: results are paginated by **service group** (a whole group is never split
across pages). Groups keep the stable service order above. Use `maxResults` to limit
page size (default 50, max 500). When more groups remain, the response includes a
non-null `pageToken`; pass it unchanged on the next request with the same query parameters
(`gcp_service`, `region`, `maxResults`). `rowCount` is the number of service groups in
this page. An invalid `pageToken` returns `400` with code `pagination_token_invalid`; an
expired token returns `400` with code `pagination_token_expired`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsGcp.ListGcpPlannedPurchases(new ListGcpPlannedPurchasesRequest
    {
        BillingAccountId = "01D4A2-4E3F1B-9C72A0",
        Region = "us_east1",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse
}
catch (ApiException<ListGcpPlannedPurchasesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGcpPlannedPurchasesRequest](src/DoiT/Requests/PerfectScaleForCommitmentsGcp/ListGcpPlannedPurchasesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse](src/DoiT/Models/Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListGcpPlannedPurchasesError](src/DoiT/Errors/ListGcpPlannedPurchasesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse&gt; ListGcpRecommendations(ListGcpRecommendationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns commitment purchase recommendations for the billing account, filtered to the
term preferred in each product line's settings (`preferredCommitmentPeriod`).

**`gcp_service` and `region` filters**: omit both to return recommendations for all
product lines (`compute`, `cloud_sql`) across all their regions. Supply `gcp_service`
alone to return all regions for that service; supply both to return a single
service/region scope. `region` requires `gcp_service` — a request with `region` but no
`gcp_service` returns `400` with code `gcp_service_required`. A `region` that is malformed
or incompatible with `gcp_service` (`compute` is `global`-only, `cloud_sql` is
regional-only) returns `400` with code `validation_failed`; a well-formed, compatible
region with no data returns `200` with an empty `items` array.

`404` is returned only when the billing account does not exist or the caller cannot access
it. A billing account with no matching recommendation documents returns `200` with an empty
`items` array.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsGcp.ListGcpRecommendations(new ListGcpRecommendationsRequest
    {
        BillingAccountId = "01D4A2-4E3F1B-9C72A0",
        Region = "us_east1",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse
}
catch (ApiException<ListGcpRecommendationsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGcpRecommendationsRequest](src/DoiT/Requests/PerfectScaleForCommitmentsGcp/ListGcpRecommendationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse](src/DoiT/Models/Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListGcpRecommendationsError](src/DoiT/Errors/ListGcpRecommendationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse&gt; ListGcpResourceCuds(ListGcpResourceCudsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of resource-based (vCPU / memory) CUDs for the billing account. Optionally filter by CUD state (`status`). Omit to return CUDs in all states.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsGcp.ListGcpResourceCuds(new ListGcpResourceCudsRequest
    {
        BillingAccountId = "01D4A2-4E3F1B-9C72A0",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse
}
catch (ApiException<ListGcpResourceCudsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGcpResourceCudsRequest](src/DoiT/Requests/PerfectScaleForCommitmentsGcp/ListGcpResourceCudsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse](src/DoiT/Models/Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListGcpResourceCudsError](src/DoiT/Errors/ListGcpResourceCudsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse&gt; ListGcpSpendCuds(ListGcpSpendCudsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of spend-based CUDs for the billing account. Optionally filter by
CUD state (`status`); omit to return CUDs in all states.

**`gcp_service` and `region` filters**: `gcp_service` narrows results to one product
line's coverage sub-type (`compute` or `cloud_sql`); `region` additionally narrows to one
region scope and requires `gcp_service` — a request with `region` but no `gcp_service`
returns `400` with code `gcp_service_required`. A `region` that is malformed or
incompatible with `gcp_service` (`compute` is `global`-only, `cloud_sql` is regional-only)
returns `400` with code `validation_failed`; a well-formed, compatible region with no
matching CUDs returns `200` with an empty `items` array. Note the `region` query parameter
uses the `lower_snake_case` wire form (`us_central1`), while each item's `region` field
echoes the raw provider value (`us-central1`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsGcp.ListGcpSpendCuds(new ListGcpSpendCudsRequest
    {
        BillingAccountId = "01D4A2-4E3F1B-9C72A0",
        Region = "us_east1",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse
}
catch (ApiException<ListGcpSpendCudsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGcpSpendCudsRequest](src/DoiT/Requests/PerfectScaleForCommitmentsGcp/ListGcpSpendCudsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse](src/DoiT/Models/Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListGcpSpendCudsError](src/DoiT/Errors/ListGcpSpendCudsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PerfectScaleForCommitmentsGeneral

> Source: [PerfectScaleForCommitmentsGeneral](src/DoiT/Api/PerfectScaleForCommitmentsGeneral.cs)

<details>
<summary><code>Task&lt;CommitmentPolicyDetail&gt; GetCommitmentPolicy(GetCommitmentPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one commitment policy by id, with its creation and last-update times and the list of
account × product-line scopes it is explicitly assigned to across AWS and GCP.

`assignments` lists explicit assignments only. An account whose settings have not yet been
materialized falls back to `balanced` implicitly and does not appear here, even though the
settings endpoints report it as `balanced`. On AWS the assignment is currently recorded per
tenant and applied to every onboarded organization, so each organization appears once per
product line. The list is not paginated.

Resolving assignments reads every onboarded account on both clouds. If either cloud cannot be
queried the request fails rather than returning a partial list.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsGeneral.GetCommitmentPolicy(new GetCommitmentPolicyRequest
    {
        PolicyId = "balanced",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type CommitmentPolicyDetail
}
catch (ApiException<GetCommitmentPolicyError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCommitmentPolicyRequest](src/DoiT/Requests/PerfectScaleForCommitmentsGeneral/GetCommitmentPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommitmentPolicyDetail](src/DoiT/Models/CommitmentPolicyDetail.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCommitmentPolicyError](src/DoiT/Errors/GetCommitmentPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Ps4CommitmentsV1GeneralPoliciesResponse&gt; ListCommitmentPolicies(ListCommitmentPoliciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every commitment policy available to the tenant: the three built-in policies
(`conservative`, `balanced`, `max_savings`) followed by the tenant's own custom policies.

Commitment policies are cloud-agnostic. A single catalog is shared by AWS and GCP, and the
same policy may be assigned to AWS and GCP product lines alike.

Built-in policies are listed first, ordered from least to most aggressive target coverage;
custom policies follow in creation order. Percentage parameters are expressed as `1`–`100`, as
entered in the DoiT Console. This differs from the coverage and utilization fields on
recommendations and inventory, which are fractions from 0 to 1.

This endpoint is read-only. Custom policies are created, edited and deleted in the DoiT
Console on the Commitment Policies page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PerfectScaleForCommitmentsGeneral.ListCommitmentPolicies(
        new ListCommitmentPoliciesRequest { XTenantId = "Kp2mN8qL4vR0sT1wX3yZ" });
    // TODO: Handle 'response' of type Ps4CommitmentsV1GeneralPoliciesResponse
}
catch (ApiException<ListCommitmentPoliciesError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCommitmentPoliciesRequest](src/DoiT/Requests/PerfectScaleForCommitmentsGeneral/ListCommitmentPoliciesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Ps4CommitmentsV1GeneralPoliciesResponse](src/DoiT/Models/Ps4CommitmentsV1GeneralPoliciesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListCommitmentPoliciesError](src/DoiT/Errors/ListCommitmentPoliciesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Platforms

> Source: [Platforms](src/DoiT/Api/Platforms.cs)

<details>
<summary><code>Task&lt;SupportV1MetadataPlatformsResponse&gt; ListPlatforms(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the available platforms.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Platforms.ListPlatforms();
    // TODO: Handle 'response' of type SupportV1MetadataPlatformsResponse
}
catch (ApiException<ListPlatformsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SupportV1MetadataPlatformsResponse](src/DoiT/Models/SupportV1MetadataPlatformsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListPlatformsError](src/DoiT/Errors/ListPlatformsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Products

> Source: [Products](src/DoiT/Api/Products.cs)

<details>
<summary><code>Task&lt;SupportV1MetadataProductsResponse&gt; ListProducts(ListProductsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all the available products of specific platforms.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Products.ListProducts(new ListProductsRequest());
    // TODO: Handle 'response' of type SupportV1MetadataProductsResponse
}
catch (ApiException<ListProductsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListProductsRequest](src/DoiT/Requests/Products/ListProductsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SupportV1MetadataProductsResponse](src/DoiT/Models/SupportV1MetadataProductsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListProductsError](src/DoiT/Errors/ListProductsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/DoiT/Api/Reports.cs)

<details>
<summary><code>Task&lt;AsyncOperationResponse&gt; AsyncRunInline(AsyncRunInlineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits an async report execution job using an inline configuration. Returns 202 immediately with a Location header pointing to the operation status endpoint. Requires the Idempotency-Key header to ensure at-most-once submission. Duplicate requests with the same config for the same customer return the existing in-flight operation. Use ?dryRun=true to validate the config without creating an operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.AsyncRunInline(new AsyncRunInlineRequest
    {
        IdempotencyKey = "some example string",
        Body = new AnalyticsV1ReportsActionsRunRequest
        {
            Config = new ExternalConfig
            {
                Metrics = [new ExternalMetric { Type = Type2DoiTReportsApi.Basic, Value = "cost" }],
                TimeInterval = TimeIntervalDoiTReportsApi.Month,
                TimeRange = new TimeSettings { Amount = 1L, Mode = Mode2.Last, Unit = Unit.Month },
            },
        },
    });
    // TODO: Handle 'response' of type AsyncOperationResponse
}
catch (ApiException<AsyncRunInlineError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AsyncRunInlineRequest](src/DoiT/Requests/Reports/AsyncRunInlineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsyncOperationResponse](src/DoiT/Models/AsyncOperationResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[AsyncRunInlineError](src/DoiT/Errors/AsyncRunInlineError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AsyncOperationResponse&gt; AsyncRunReportById(AsyncRunReportByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits an async execution job for a saved report identified by ID. Returns 202 immediately with a Location header pointing to the operation status endpoint. Requires the Idempotency-Key header. Use ?dryRun=true to validate without creating an operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.AsyncRunReportById(new AsyncRunReportByIdRequest
    {
        Id = "some example string",
        TimeRange = "P7D",
        StartDate = DateTimeOffset.Parse("2025-01-01T00:00:00Z"),
        EndDate = DateTimeOffset.Parse("2025-01-31T00:00:00Z"),
        IdempotencyKey = "some example string",
    });
    // TODO: Handle 'response' of type AsyncOperationResponse
}
catch (ApiException<AsyncRunReportByIdError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AsyncRunReportByIdRequest](src/DoiT/Requests/Reports/AsyncRunReportByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsyncOperationResponse](src/DoiT/Models/AsyncOperationResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[AsyncRunReportByIdError](src/DoiT/Errors/AsyncRunReportByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AsyncOperationResponse&gt; CancelAsyncOperation(CancelAsyncOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a pending or running async report operation. Already-terminal operations (succeeded, failed, canceled) are returned as-is without any state change (idempotent). Returns 404 if the operationId does not exist or belongs to a different tenant. Use ?dryRun=true to validate the request without modifying any state.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.CancelAsyncOperation(new CancelAsyncOperationRequest
    {
        OperationId = "some example string",
        IdempotencyKey = "some example string",
    });
    // TODO: Handle 'response' of type AsyncOperationResponse
}
catch (ApiException<CancelAsyncOperationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelAsyncOperationRequest](src/DoiT/Requests/Reports/CancelAsyncOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsyncOperationResponse](src/DoiT/Models/AsyncOperationResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CancelAsyncOperationError](src/DoiT/Errors/CancelAsyncOperationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExternalReport&gt; CreateReport(CreateReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new report.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.CreateReport(new CreateReportRequest
    {
        Body = new AnalyticsV1ReportsRequest
        {
            Name = "monthly-cost-by-service",
            Description = "Monthly cost grouped by service",
            Config = new ExternalConfig
            {
                Metrics = [new ExternalMetric { Type = Type2DoiTReportsApi.Basic, Value = "cost" }],
                Aggregation = Aggregation.Total,
                TimeInterval = TimeIntervalDoiTReportsApi.Day,
                Dimensions = [new DimensionDoiTReportsApi { Id = "service_description", Type = DimensionsTypes.Fixed }],
                TimeRange = new TimeSettings
                {
                    Amount = 7L,
                    IncludeCurrent = false,
                    Mode = Mode2.Last,
                    Unit = Unit.Day,
                },
                IncludeSubtotals = false,
                DisplayValues = DisplayValues.ActualsOnly,
                SortGroups = SortGroups.Asc,
                SortDimensions = SortDimensions.Desc,
            },
        },
    });
    // TODO: Handle 'response' of type ExternalReport
}
catch (ApiException<CreateReportError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateReportRequest](src/DoiT/Requests/Reports/CreateReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExternalReport](src/DoiT/Models/ExternalReport.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateReportError](src/DoiT/Errors/CreateReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteReport(DeleteReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified Cloud Analytics report.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.DeleteReport(new DeleteReportRequest { Id = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteReportError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteReportRequest](src/DoiT/Requests/Reports/DeleteReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteReportError](src/DoiT/Errors/DeleteReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AsyncOperationPollResponse&gt; GetAsyncOperation(GetAsyncOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current status of an async report operation. Non-terminal operations (pending, running) include a Retry-After header suggesting when to poll again. This endpoint does not return result data — once status is "succeeded", fetch the result from the operation's results endpoint. When status is "failed", the error field contains an RFC 9457-shaped error. Returns 404 if the operationId does not exist, belongs to a different tenant, or has expired.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetAsyncOperation(new GetAsyncOperationRequest
    {
        OperationId = "some example string",
    });
    // TODO: Handle 'response' of type AsyncOperationPollResponse
}
catch (ApiException<GetAsyncOperationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAsyncOperationRequest](src/DoiT/Requests/Reports/GetAsyncOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsyncOperationPollResponse](src/DoiT/Models/AsyncOperationPollResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetAsyncOperationError](src/DoiT/Errors/GetAsyncOperationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsV1ReportsOperationsResultsResponse&gt; GetAsyncOperationResults(GetAsyncOperationResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the result of a succeeded async report operation, including report metadata (id, reportName, owner, type, createTime, updateTime, urlUI) when the operation was started against a saved report — the same shape as the sync GetReportResponse, instead of requiring a second call to GET /analytics/v1/reports/{id}/config for it. Returns 404 if the operationId does not exist, has expired, or belongs to a different tenant. Returns 425 Too Early if the operation has not yet reached a terminal state — poll the operation status endpoint, which returns its own Retry-After guidance, until it succeeds. Returns 422 if the operation terminated as failed or canceled. The poll status endpoint response does not include result data inline — this is the only endpoint that returns it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetAsyncOperationResults(new GetAsyncOperationResultsRequest
    {
        OperationId = "some example string",
        FileOutput = FileOutput.Pdf,
    });
    // TODO: Handle 'response' of type AnalyticsV1ReportsOperationsResultsResponse
}
catch (ApiException<GetAsyncOperationResultsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAsyncOperationResultsRequest](src/DoiT/Requests/Reports/GetAsyncOperationResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsV1ReportsOperationsResultsResponse](src/DoiT/Models/AnalyticsV1ReportsOperationsResultsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetAsyncOperationResultsError](src/DoiT/Errors/GetAsyncOperationResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetReportResponse&gt; GetReport(GetReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the results of the specified report.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetReport(new GetReportRequest
    {
        Id = "some example string",
        TimeRange = "P7D",
        StartDate = DateTimeOffset.Parse("2025-01-01T00:00:00Z"),
        EndDate = DateTimeOffset.Parse("2025-01-31T00:00:00Z"),
    });
    // TODO: Handle 'response' of type GetReportResponse
}
catch (ApiException<GetReportError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetReportRequest](src/DoiT/Requests/Reports/GetReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetReportResponse](src/DoiT/Models/GetReportResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetReportError](src/DoiT/Errors/GetReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExternalReport&gt; GetReportConfig(GetReportConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the configuration of the specified Cloud Analytics report.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetReportConfig(new GetReportConfigRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ExternalReport
}
catch (ApiException<GetReportConfigError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetReportConfigRequest](src/DoiT/Requests/Reports/GetReportConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExternalReport](src/DoiT/Models/ExternalReport.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetReportConfigError](src/DoiT/Errors/GetReportConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReportList&gt; ListReports(ListReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all Cloud Analytics reports that your account has access to.
Reports are returned in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.ListReports(new ListReportsRequest
    {
        Filter = "reportName:This Month vs. Last",
        NameContains = "monthly spend",
    });
    // TODO: Handle 'response' of type ReportList
}
catch (ApiException<ListReportsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListReportsRequest](src/DoiT/Requests/Reports/ListReportsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportList](src/DoiT/Models/ReportList.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListReportsError](src/DoiT/Errors/ListReportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RunReportResult&gt; Query(QueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs a report query with the specified configuration without persisting it.
Fields that are not populated will use their default values if needed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.Query(new QueryRequest
    {
        Body = new AnalyticsV1ReportsQueryRequest
        {
            Config = new ExternalConfig
            {
                Metrics = [new ExternalMetric { Type = Type2DoiTReportsApi.Basic, Value = "cost" }],
                TimeInterval = TimeIntervalDoiTReportsApi.Day,
                TimeRange = new TimeSettings
                {
                    Amount = 30L,
                    IncludeCurrent = false,
                    Mode = Mode2.Last,
                    Unit = Unit.Day,
                },
                Group = [new Group { Id = "service_description", Type = DimensionsTypes.Fixed }],
                DataSource = DataSourceDoiTReportsApi.Billing,
            },
        },
    });
    // TODO: Handle 'response' of type RunReportResult
}
catch (ApiException<QueryError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[QueryRequest](src/DoiT/Requests/Reports/QueryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunReportResult](src/DoiT/Models/RunReportResult.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[QueryError](src/DoiT/Errors/QueryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExternalReport&gt; UpdateReport(UpdateReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a report with the specified configuration.

Only specified fields will be updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.UpdateReport(new UpdateReportRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ExternalReport
}
catch (ApiException<UpdateReportError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateReportRequest](src/DoiT/Requests/Reports/UpdateReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExternalReport](src/DoiT/Models/ExternalReport.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateReportError](src/DoiT/Errors/UpdateReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Roles

> Source: [Roles](src/DoiT/Api/Roles.cs)

<details>
<summary><code>Task&lt;RoleDoiTRolesApi&gt; CreateRole(CreateRoleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom role in the authenticated customer with the given permission IDs. Permission IDs are the `permissions` values returned by `GET /iam/v1/roles`. A service account of a parent tenant can create the role in a descendant tenant by setting `X-Tenant-Id` to that tenant's customer ID. Requires the `Idempotency-Key` header so a retried request does not create a second role.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Roles.CreateRole(new CreateRoleOperationRequest
    {
        IdempotencyKey = "some example string",
        Body = new CreateRoleRequest
        {
            Name = "FinOps Analyst",
            Description = "Read-only access to cost reports and budgets",
            Permissions = ["oeuwhFPi8UTccU1nYjdl", "8zXuFyohNSiiLy2ZQ6Xu"],
        },
    });
    // TODO: Handle 'response' of type RoleDoiTRolesApi
}
catch (ApiException<CreateRoleError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateRoleOperationRequest](src/DoiT/Requests/Roles/CreateRoleOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RoleDoiTRolesApi](src/DoiT/Models/RoleDoiTRolesApi.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateRoleError](src/DoiT/Errors/CreateRoleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRole(DeleteRoleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom role. Preset roles cannot be deleted, and a role still assigned to users or groups must be unassigned first. A service account of a parent tenant can delete a descendant tenant's role by setting `X-Tenant-Id` to that tenant's customer ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Roles.DeleteRole(new DeleteRoleRequest { Id = "some example string" });
}
catch (ApiException<DeleteRoleError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteRoleRequest](src/DoiT/Requests/Roles/DeleteRoleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteRoleError](src/DoiT/Errors/DeleteRoleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RoleDoiTRolesApi&gt; GetRole(GetRoleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single role by ID. Preset roles are visible to every customer; a custom role is returned only to the customer that owns it. A service account of a parent tenant can read a descendant tenant's role by setting `X-Tenant-Id` to that tenant's customer ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Roles.GetRole(new GetRoleRequest { Id = "some example string" });
    // TODO: Handle 'response' of type RoleDoiTRolesApi
}
catch (ApiException<GetRoleError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRoleRequest](src/DoiT/Requests/Roles/GetRoleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RoleDoiTRolesApi](src/DoiT/Models/RoleDoiTRolesApi.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetRoleError](src/DoiT/Errors/GetRoleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IamV1RolesResponse&gt; ListRoles(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of roles.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Roles.ListRoles();
    // TODO: Handle 'response' of type IamV1RolesResponse
}
catch (ApiException<ListRolesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IamV1RolesResponse](src/DoiT/Models/IamV1RolesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListRolesError](src/DoiT/Errors/ListRolesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RoleDoiTRolesApi&gt; UpdateRole(UpdateRoleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the `name`, `description` and/or `permissions` of a custom role. Only the fields present in the body change; `permissions` replaces the full list when present. Preset roles cannot be modified. A service account of a parent tenant can update a descendant tenant's role by setting `X-Tenant-Id` to that tenant's customer ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Roles.UpdateRole(new UpdateRoleOperationRequest
    {
        Id = "some example string",
        Body = new UpdateRoleRequest
        {
            Name = "FinOps Analyst",
            Description = "Read-only access to cost reports and budgets",
            Permissions = ["oeuwhFPi8UTccU1nYjdl", "8zXuFyohNSiiLy2ZQ6Xu"],
        },
    });
    // TODO: Handle 'response' of type RoleDoiTRolesApi
}
catch (ApiException<UpdateRoleError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateRoleOperationRequest](src/DoiT/Requests/Roles/UpdateRoleOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RoleDoiTRolesApi](src/DoiT/Models/RoleDoiTRolesApi.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateRoleError](src/DoiT/Errors/UpdateRoleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceAccounts

> Source: [ServiceAccounts](src/DoiT/Api/ServiceAccounts.cs)

<details>
<summary><code>Task&lt;ServiceAccount&gt; CreateServiceAccount(CreateServiceAccountOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a service account owned by the authenticated customer. It cannot authenticate anything until it has an API token; mint one with the `api-tokens` sub-resource. Returns `409` when another service account of the customer already uses `name`. With `dryRun=true` the request goes through the same checks as a real create (name bounds and uniqueness, permission names, caller scope) and returns the same errors without creating anything. When the caller authenticates with a service account token, `createdBy`, `createdByEmail` and `createdByUserId` are `null`. Requires the `serviceAccountCreator` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ServiceAccounts.CreateServiceAccount(new CreateServiceAccountOperationRequest
    {
        IdempotencyKey = "some example string",
        Body = new CreateServiceAccountRequest
        {
            Name = "terraform-ci",
            Description = "Manages DoiT resources from CI",
            Permissions = ["cloudAnalyticsReadOnly", "budgetsManager"],
        },
    });
    // TODO: Handle 'response' of type ServiceAccount
}
catch (ApiException<CreateServiceAccountError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateServiceAccountOperationRequest](src/DoiT/Requests/ServiceAccounts/CreateServiceAccountOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceAccount](src/DoiT/Models/ServiceAccount.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateServiceAccountError](src/DoiT/Errors/CreateServiceAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateServiceAccountTokenResponse&gt; CreateServiceAccountToken(CreateServiceAccountTokenOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mints an API token for the service account and returns its `accessToken` once. The token
inherits the service account's permissions as they stand at creation; there is no per-token
scoping. Returns `409` when the service account already has a token of the same name, and
`422` at the cap of 10 tokens.

`dryRun=true` checks the name bounds only, then returns a preview without creating anything.
It does **not** verify that the service account exists, that the name is unused, or that the
account is under the token cap, so a dry run can succeed where the real create then returns
`404`, `409` or `422`. Requires the `serviceAccountCreator` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ServiceAccounts.CreateServiceAccountToken(new CreateServiceAccountTokenOperationRequest
    {
        ServiceAccountId = "some example string",
        IdempotencyKey = "some example string",
        Body = new CreateServiceAccountTokenRequest
        {
            Name = "ci-pipeline-prod",
            ExpiresTime = DateTimeOffset.Parse("2027-09-01T08:00:00Z"),
        },
    });
    // TODO: Handle 'response' of type CreateServiceAccountTokenResponse
}
catch (ApiException<CreateServiceAccountTokenError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateServiceAccountTokenOperationRequest](src/DoiT/Requests/ServiceAccounts/CreateServiceAccountTokenOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateServiceAccountTokenResponse](src/DoiT/Models/CreateServiceAccountTokenResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateServiceAccountTokenError](src/DoiT/Errors/CreateServiceAccountTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteServiceAccount(DeleteServiceAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a service account and all of its API tokens, which stop authenticating immediately. Deleting an ID that no longer exists returns `404`. Requires the `serviceAccountManager` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ServiceAccounts.DeleteServiceAccount(new DeleteServiceAccountRequest
    {
        Id = "some example string",
        IfMatch = "some example string",
        IdempotencyKey = "some example string",
    });
}
catch (ApiException<DeleteServiceAccountError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteServiceAccountRequest](src/DoiT/Requests/ServiceAccounts/DeleteServiceAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteServiceAccountError](src/DoiT/Errors/DeleteServiceAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteServiceAccountToken(DeleteServiceAccountTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an API token, which stops authenticating immediately. This cannot be undone. Deleting an ID that no longer exists returns `404`. Requires the `serviceAccountManager` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ServiceAccounts.DeleteServiceAccountToken(new DeleteServiceAccountTokenRequest
    {
        ServiceAccountId = "some example string",
        Id = "some example string",
        IdempotencyKey = "some example string",
    });
}
catch (ApiException<DeleteServiceAccountTokenError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteServiceAccountTokenRequest](src/DoiT/Requests/ServiceAccounts/DeleteServiceAccountTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteServiceAccountTokenError](src/DoiT/Errors/DeleteServiceAccountTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ServiceAccount&gt; GetServiceAccount(GetServiceAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a service account owned by the authenticated customer; an ID that belongs to another customer returns `404`. The `ETag` response header carries the value to send in `If-Match` on update and delete. Requires the `serviceAccountViewer` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ServiceAccounts.GetServiceAccount(new GetServiceAccountRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ServiceAccount
}
catch (ApiException<GetServiceAccountError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetServiceAccountRequest](src/DoiT/Requests/ServiceAccounts/GetServiceAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceAccount](src/DoiT/Models/ServiceAccount.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetServiceAccountError](src/DoiT/Errors/GetServiceAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ServiceAccountToken&gt; GetServiceAccountToken(GetServiceAccountTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one API token of the service account; an ID that belongs to another customer returns `404`. `accessToken` is not included — it is shown only once, by the create operation. Requires the `serviceAccountViewer` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ServiceAccounts.GetServiceAccountToken(new GetServiceAccountTokenRequest
    {
        ServiceAccountId = "some example string",
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ServiceAccountToken
}
catch (ApiException<GetServiceAccountTokenError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetServiceAccountTokenRequest](src/DoiT/Requests/ServiceAccounts/GetServiceAccountTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceAccountToken](src/DoiT/Models/ServiceAccountToken.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetServiceAccountTokenError](src/DoiT/Errors/GetServiceAccountTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ServiceAccountTokensResponse&gt; ListServiceAccountTokens(ListServiceAccountTokensRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the service account's non-deleted API tokens in a single unpaginated `items` array, at most 10. Secret material is never returned here — `accessToken` is shown only once, by the create operation. Requires the `serviceAccountViewer` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ServiceAccounts.ListServiceAccountTokens(new ListServiceAccountTokensRequest
    {
        ServiceAccountId = "some example string",
    });
    // TODO: Handle 'response' of type ServiceAccountTokensResponse
}
catch (ApiException<ListServiceAccountTokensError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListServiceAccountTokensRequest](src/DoiT/Requests/ServiceAccounts/ListServiceAccountTokensRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceAccountTokensResponse](src/DoiT/Models/ServiceAccountTokensResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListServiceAccountTokensError](src/DoiT/Errors/ListServiceAccountTokensError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ServiceAccountsResponse&gt; ListServiceAccounts(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every service account owned by the authenticated customer in a single unpaginated `items` array, in no guaranteed order. Requires the `serviceAccountViewer` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ServiceAccounts.ListServiceAccounts();
    // TODO: Handle 'response' of type ServiceAccountsResponse
}
catch (ApiException<ListServiceAccountsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceAccountsResponse](src/DoiT/Models/ServiceAccountsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListServiceAccountsError](src/DoiT/Errors/ListServiceAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ServiceAccount&gt; UpdateServiceAccount(UpdateServiceAccountOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a service account with an `application/merge-patch+json` body (RFC 7396). Omitted or `null` fields stay unchanged; an explicit empty string clears `description`. `permissions` replaces the whole list, and `[]` removes every permission. With `dryRun=true` the request goes through the same checks as a real update (`If-Match`, name bounds and uniqueness, permission names, caller scope) and returns the service account as it would look after the patch, without changing anything. Requires the `serviceAccountManager` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ServiceAccounts.UpdateServiceAccount(new UpdateServiceAccountOperationRequest
    {
        Id = "some example string",
        IfMatch = "some example string",
        IdempotencyKey = "some example string",
        Body = new UpdateServiceAccountRequest { Permissions = ["cloudAnalyticsReadOnly"] },
    });
    // TODO: Handle 'response' of type ServiceAccount
}
catch (ApiException<UpdateServiceAccountError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateServiceAccountOperationRequest](src/DoiT/Requests/ServiceAccounts/UpdateServiceAccountOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceAccount](src/DoiT/Models/ServiceAccount.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateServiceAccountError](src/DoiT/Errors/UpdateServiceAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ServiceAccountToken&gt; UpdateServiceAccountToken(UpdateServiceAccountTokenOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Moves the token between `active` and `disabled` by setting `state`. Disabling takes effect
immediately: the token stops authenticating until it is re-enabled. Setting the state a
token already has succeeds and changes nothing.

The two directions are not symmetric. Disabling a token whose expiry has passed succeeds,
but re-enabling an expired token returns `422` — expiry is final, and a new token has to be
created instead. `deleted` and `expired` are not accepted values: a token is deleted through
the delete operation, and expires on its own.

With `dryRun=true` nothing is written and the response body is the token as it would look
after the change, so a `422` here means a real request would also be refused. Requires the
`serviceAccountManager` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ServiceAccounts.UpdateServiceAccountToken(new UpdateServiceAccountTokenOperationRequest
    {
        ServiceAccountId = "some example string",
        Id = "some example string",
        IdempotencyKey = "some example string",
        Body = new UpdateServiceAccountTokenRequest { State = State1DoiTServiceAccountsApi.Disabled },
    });
    // TODO: Handle 'response' of type ServiceAccountToken
}
catch (ApiException<UpdateServiceAccountTokenError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateServiceAccountTokenOperationRequest](src/DoiT/Requests/ServiceAccounts/UpdateServiceAccountTokenOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceAccountToken](src/DoiT/Models/ServiceAccountToken.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateServiceAccountTokenError](src/DoiT/Errors/UpdateServiceAccountTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceQuotas

> Source: [ServiceQuotas](src/DoiT/Api/ServiceQuotas.cs)

<details>
<summary><code>Task&lt;ServiceQuotaList&gt; ListServiceQuotas(ListServiceQuotasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the latest service quota usage snapshots collected by DoiT for the authenticated customer.
Results include only quotas retained by DoiT's monitoring collectors and are not a complete or live inventory from the cloud providers.
Results are sorted by utilization percentage in descending order.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ServiceQuotas.ListServiceQuotas(new ListServiceQuotasRequest());
    // TODO: Handle 'response' of type ServiceQuotaList
}
catch (ApiException<ListServiceQuotasError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListServiceQuotasRequest](src/DoiT/Requests/ServiceQuotas/ListServiceQuotasRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServiceQuotaList](src/DoiT/Models/ServiceQuotaList.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListServiceQuotasError](src/DoiT/Errors/ListServiceQuotasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Settings

> Source: [Settings](src/DoiT/Api/Settings.cs)

<details>
<summary><code>Task&lt;CustomTheme&gt; CreateCustomTheme(CreateCustomThemeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom color theme. Requires Cloud Analytics Admin permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Settings.CreateCustomTheme(new CreateCustomThemeOperationRequest
    {
        Body = new CreateCustomThemeRequest
        {
            Name = "some example string",
            PrimaryColor = "some example string",
            Colors = new ThemeColors { Light = ["some example string"], Dark = ["some example string"] },
        },
    });
    // TODO: Handle 'response' of type CustomTheme
}
catch (ApiException<CreateCustomThemeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomThemeOperationRequest](src/DoiT/Requests/Settings/CreateCustomThemeOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomTheme](src/DoiT/Models/CustomTheme.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateCustomThemeError](src/DoiT/Errors/CreateCustomThemeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteCustomTheme(DeleteCustomThemeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the custom theme specified by the Id. Requires Cloud Analytics Admin permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Settings.DeleteCustomTheme(new DeleteCustomThemeRequest { Id = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteCustomThemeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomThemeRequest](src/DoiT/Requests/Settings/DeleteCustomThemeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomThemeError](src/DoiT/Errors/DeleteCustomThemeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ActiveTheme&gt; GetActiveTheme(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the theme currently active for the authenticated user.
`themeId` is the reserved sentinel `"default"` when no custom or
preset theme is selected and the user is on the built-in default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Settings.GetActiveTheme();
    // TODO: Handle 'response' of type ActiveTheme
}
catch (ApiException<GetActiveThemeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ActiveTheme](src/DoiT/Models/ActiveTheme.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetActiveThemeError](src/DoiT/Errors/GetActiveThemeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomTheme&gt; GetCustomTheme(GetCustomThemeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a custom theme by the specified Id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Settings.GetCustomTheme(new GetCustomThemeRequest { Id = "some example string" });
    // TODO: Handle 'response' of type CustomTheme
}
catch (ApiException<GetCustomThemeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCustomThemeRequest](src/DoiT/Requests/Settings/GetCustomThemeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomTheme](src/DoiT/Models/CustomTheme.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCustomThemeError](src/DoiT/Errors/GetCustomThemeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsV1SettingsThemesResponse&gt; ListCustomThemes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of custom color themes defined for your account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Settings.ListCustomThemes();
    // TODO: Handle 'response' of type AnalyticsV1SettingsThemesResponse
}
catch (ApiException<ListCustomThemesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsV1SettingsThemesResponse](src/DoiT/Models/AnalyticsV1SettingsThemesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListCustomThemesError](src/DoiT/Errors/ListCustomThemesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ActiveTheme&gt; SetActiveTheme(SetActiveThemeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the theme active for the authenticated user. Send the reserved
sentinel `themeId: "default"` to clear the active theme and fall back
to the built-in default. Returns the updated active theme.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Settings.SetActiveTheme(new SetActiveThemeOperationRequest
    {
        Body = new SetActiveThemeRequest { ThemeId = "some example string" },
    });
    // TODO: Handle 'response' of type ActiveTheme
}
catch (ApiException<SetActiveThemeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SetActiveThemeOperationRequest](src/DoiT/Requests/Settings/SetActiveThemeOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ActiveTheme](src/DoiT/Models/ActiveTheme.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[SetActiveThemeError](src/DoiT/Errors/SetActiveThemeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomTheme&gt; UpdateCustomTheme(UpdateCustomThemeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the custom theme specified by the Id. Requires Cloud Analytics Admin permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Settings.UpdateCustomTheme(new UpdateCustomThemeOperationRequest
    {
        Id = "some example string",
        Body = new UpdateCustomThemeRequest(),
    });
    // TODO: Handle 'response' of type CustomTheme
}
catch (ApiException<UpdateCustomThemeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCustomThemeOperationRequest](src/DoiT/Requests/Settings/UpdateCustomThemeOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomTheme](src/DoiT/Models/CustomTheme.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomThemeError](src/DoiT/Errors/UpdateCustomThemeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SharedPayers

> Source: [SharedPayers](src/DoiT/Api/SharedPayers.cs)

<details>
<summary><code>Task&lt;SharedPayerAccountMappingList&gt; ListSharedPayerAccountMappings(ListSharedPayerAccountMappingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the AWS accounts under the reseller's linked shared payers, together with the end customer each is currently mapped to. `{customerId}` (the reseller itself) means the account has not yet been reassigned to an end customer. Each payer's own management account is included alongside its member accounts. Requires the `SharedPayersAdmin` permission and DoiT API access (`platform:externalApi`). User API tokens must include the permission in their scope.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SharedPayers.ListSharedPayerAccountMappings(new ListSharedPayerAccountMappingsRequest
    {
        CustomerId = "some example string",
    });
    // TODO: Handle 'response' of type SharedPayerAccountMappingList
}
catch (ApiException<ListSharedPayerAccountMappingsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSharedPayerAccountMappingsRequest](src/DoiT/Requests/SharedPayers/ListSharedPayerAccountMappingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SharedPayerAccountMappingList](src/DoiT/Models/SharedPayerAccountMappingList.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListSharedPayerAccountMappingsError](src/DoiT/Errors/ListSharedPayerAccountMappingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SharedPayerManagementAccountList&gt; ListSharedPayerManagementAccounts(ListSharedPayerManagementAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the reseller's linked shared-payer management (payer) accounts that have completed onboarding, for use in an account picker. Requires the `SharedPayersAdmin` permission and DoiT API access (`platform:externalApi`). User API tokens must include the permission in their scope.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SharedPayers.ListSharedPayerManagementAccounts(
        new ListSharedPayerManagementAccountsRequest { CustomerId = "some example string" });
    // TODO: Handle 'response' of type SharedPayerManagementAccountList
}
catch (ApiException<ListSharedPayerManagementAccountsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSharedPayerManagementAccountsRequest](src/DoiT/Requests/SharedPayers/ListSharedPayerManagementAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SharedPayerManagementAccountList](src/DoiT/Models/SharedPayerManagementAccountList.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListSharedPayerManagementAccountsError](src/DoiT/Errors/ListSharedPayerManagementAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SharedPayerList&gt; ListSharedPayers(ListSharedPayersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists every shared payer linked to the reseller, including ones still mid-onboarding, with per-payer counts of linked and mapped accounts. Requires the `SharedPayersAdmin` permission and DoiT API access (`platform:externalApi`). User API tokens must include the permission in their scope.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SharedPayers.ListSharedPayers(new ListSharedPayersRequest
    {
        CustomerId = "some example string",
    });
    // TODO: Handle 'response' of type SharedPayerList
}
catch (ApiException<ListSharedPayersError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSharedPayersRequest](src/DoiT/Requests/SharedPayers/ListSharedPayersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SharedPayerList](src/DoiT/Models/SharedPayerList.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListSharedPayersError](src/DoiT/Errors/ListSharedPayersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SharedPayerAccountReassignResult&gt; ReassignSharedPayerAccount(ReassignSharedPayerAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reassigns one AWS account under a linked shared payer - a member account or the payer's own management account - to the reseller itself or to a T3 end customer within its hierarchy. Requires the `SharedPayersAdmin` permission and DoiT API access (`platform:externalApi`). User API tokens must include the permission in their scope.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SharedPayers.ReassignSharedPayerAccount(new ReassignSharedPayerAccountRequest
    {
        CustomerId = "some example string",
        AssetId = "some example string",
        Body = new SharedPayerAccountReassignRequest { CustomerId = "some example string" },
    });
    // TODO: Handle 'response' of type SharedPayerAccountReassignResult
}
catch (ApiException<ReassignSharedPayerAccountError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReassignSharedPayerAccountRequest](src/DoiT/Requests/SharedPayers/ReassignSharedPayerAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SharedPayerAccountReassignResult](src/DoiT/Models/SharedPayerAccountReassignResult.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ReassignSharedPayerAccountError](src/DoiT/Errors/ReassignSharedPayerAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sharing

> Source: [Sharing](src/DoiT/Api/Sharing.cs)

<details>
<summary><code>Task&lt;ResourcePermissionsResponse&gt; GetResourcePermission(GetResourcePermissionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the permissions associated with the specified Cloud Analytics resource.
Supports Allocations, Alerts, Budgets, and Reports.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sharing.GetResourcePermission(new GetResourcePermissionRequest
    {
        ResourceType = ResourceType.Alerts,
        ResourceId = "some example string",
    });
    // TODO: Handle 'response' of type ResourcePermissionsResponse
}
catch (ApiException<GetResourcePermissionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetResourcePermissionRequest](src/DoiT/Requests/Sharing/GetResourcePermissionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourcePermissionsResponse](src/DoiT/Models/ResourcePermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetResourcePermissionError](src/DoiT/Errors/GetResourcePermissionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ResourcePermissionsResponse&gt; UpdateResourcePermission(UpdateResourcePermissionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the permissions associated with the specified Cloud Analytics resource.
Supports Allocations, Alerts, Budgets, and Reports.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sharing.UpdateResourcePermission(new UpdateResourcePermissionRequest
    {
        ResourceType = ResourceType.Alerts,
        ResourceId = "some example string",
    });
    // TODO: Handle 'response' of type ResourcePermissionsResponse
}
catch (ApiException<UpdateResourcePermissionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateResourcePermissionRequest](src/DoiT/Requests/Sharing/UpdateResourcePermissionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourcePermissionsResponse](src/DoiT/Models/ResourcePermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateResourcePermissionError](src/DoiT/Errors/UpdateResourcePermissionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Signup

> Source: [Signup](src/DoiT/Api/Signup.cs)

<details>
<summary><code>Task&lt;SignupRequest&gt; CreateSignupRequest(CreateSignupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a Cloud Intelligence trial signup for the organization owning the email domain. Idempotent per Idempotency-Key: a retried create returns the same request. Nothing is provisioned until the admin verifies the request. Human channels (console, web) additionally require a Cloudflare Turnstile token and an accepted Terms of Service version; the emailed 6-digit verification code is then the consent act. Agents should present consentUrl to the organization's admin and poll getSignupRequest.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Signup.CreateSignupRequest(new CreateSignupRequest
    {
        IdempotencyKey = "some example string",
        Body = new SignupRequestCreate { Email = "user@example.com", CompanyName = "some example string" },
    });
    // TODO: Handle 'response' of type SignupRequest
}
catch (ApiException<CreateSignupRequestError> ex)
{
    if (ex.Error.TryGetSignupProblem(out var error))
    {
        // TODO: Handle 'error' of type SignupProblem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSignupRequest](src/DoiT/Requests/Signup/CreateSignupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignupRequest](src/DoiT/Models/SignupRequest.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateSignupRequestError](src/DoiT/Errors/CreateSignupRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignupSession&gt; CreateSignupSession(CreateSignupSessionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges the one-time activationToken returned by verifySignupRequest for a Firebase custom token once the request is completed, so the browser that entered the code lands in the new tenant without a second email. The token is bound to the request, single-use and valid for 10 minutes. Sign in with signInWithCustomToken against tenantId, then open consoleUrl.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Signup.CreateSignupSession(new CreateSignupSessionRequest
    {
        SignupRequestId = "some example string",
        Body = new SignupSessionRequest { ActivationToken = "some example string" },
    });
    // TODO: Handle 'response' of type SignupSession
}
catch (ApiException<CreateSignupSessionError> ex)
{
    if (ex.Error.TryGetSignupProblem(out var error))
    {
        // TODO: Handle 'error' of type SignupProblem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSignupSessionRequest](src/DoiT/Requests/Signup/CreateSignupSessionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignupSession](src/DoiT/Models/SignupSession.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateSignupSessionError](src/DoiT/Errors/CreateSignupSessionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignupRequest&gt; GetSignupRequest(GetSignupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current state of a signup request. Poll at the returned pollAfterSeconds cadence; once status is completed the response carries customerId, consoleUrl and signInUrl. The response never includes the requester's email or the verification code.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Signup.GetSignupRequest(new GetSignupRequest
    {
        SignupRequestId = "some example string",
    });
    // TODO: Handle 'response' of type SignupRequest
}
catch (ApiException<GetSignupRequestError> ex)
{
    if (ex.Error.TryGetSignupProblem(out var error))
    {
        // TODO: Handle 'error' of type SignupProblem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSignupRequest](src/DoiT/Requests/Signup/GetSignupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignupRequest](src/DoiT/Models/SignupRequest.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetSignupRequestError](src/DoiT/Errors/GetSignupRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignupRequest&gt; ResendSignupVerification(ResendSignupVerificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Emails a fresh 6-digit code to the requester. At most three codes per request, at least 60 seconds apart.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Signup.ResendSignupVerification(new ResendSignupVerificationRequest
    {
        SignupRequestId = "some example string",
    });
    // TODO: Handle 'response' of type SignupRequest
}
catch (ApiException<ResendSignupVerificationError> ex)
{
    if (ex.Error.TryGetSignupProblem(out var error))
    {
        // TODO: Handle 'error' of type SignupProblem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResendSignupVerificationRequest](src/DoiT/Requests/Signup/ResendSignupVerificationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignupRequest](src/DoiT/Models/SignupRequest.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ResendSignupVerificationError](src/DoiT/Errors/ResendSignupVerificationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignupRequest&gt; VerifySignupRequest(VerifySignupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Confirms ownership of the admin email by entering the 6-digit code that was emailed when the request was created (or resent). Success records consent and starts provisioning; the request moves to consented and then completed. Five wrong codes lock the current code; request a new one with resendSignupVerification.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Signup.VerifySignupRequest(new VerifySignupRequest
    {
        SignupRequestId = "some example string",
        Body = new SignupVerificationCode { Code = "some example string" },
    });
    // TODO: Handle 'response' of type SignupRequest
}
catch (ApiException<VerifySignupRequestError> ex)
{
    if (ex.Error.TryGetSignupProblem(out var error))
    {
        // TODO: Handle 'error' of type SignupProblem
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VerifySignupRequest](src/DoiT/Requests/Signup/VerifySignupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignupRequest](src/DoiT/Models/SignupRequest.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[VerifySignupRequestError](src/DoiT/Errors/VerifySignupRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SupportRequests

> Source: [SupportRequests](src/DoiT/Api/SupportRequests.cs)

<details>
<summary><code>Task&lt;TagsResponse&gt; AddTicketTags(AddTicketTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds one or more tags to an existing support request. The operation is
surgical — only the tags listed in the request are added; existing tags
on the ticket are preserved. Re-adding a tag that is already present is
a successful no-op.

All submitted tags are normalized (trim + lowercase) before storage. For
customers, the system additionally applies a `customer_tag/` namespace
prefix to prevent collisions with internal DoiT process tags. The
response echoes the actual stored strings so callers can verify the
transform.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupportRequests.AddTicketTags(new AddTicketTagsRequest
    {
        TicketId = 1L,
        Body = new TagsRequest { Tags = ["some example string"] },
    });
    // TODO: Handle 'response' of type TagsResponse
}
catch (ApiException<AddTicketTagsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddTicketTagsRequest](src/DoiT/Requests/SupportRequests/AddTicketTagsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagsResponse](src/DoiT/Models/TagsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[AddTicketTagsError](src/DoiT/Errors/AddTicketTagsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TicketResponseExtApi&gt; CreateTicket(CreateTicketRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new support request

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupportRequests.CreateTicket(new CreateTicketRequest
    {
        Body = new TicketCreateFormExtApi
        {
            Ticket = new TicketExtApi
            {
                Body = "some example string",
                Platform = PlatformDoiTSupportRequestsApi.Doit,
                Product = "some example string",
                Severity = SeverityDoiTSupportRequestsApi.Low,
                Subject = "some example string",
            },
        },
    });
    // TODO: Handle 'response' of type TicketResponseExtApi
}
catch (ApiException<CreateTicketError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTicketRequest](src/DoiT/Requests/SupportRequests/CreateTicketRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TicketResponseExtApi](src/DoiT/Models/TicketResponseExtApi.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateTicketError](src/DoiT/Errors/CreateTicketError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CommentExtApi&gt; CreateTicketComment(CreateTicketCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a comment to an existing support request. For customers and
service-account callers, comments are always public, even when
`private` is `true`. Callers authenticated with DoiT employee privileges
can create private internal notes by setting `private` to `true`.
The response always includes `public`, reflecting the effective
visibility after these rules are applied, not merely the requested
privacy. Existing authentication and ticket authorization are unchanged.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupportRequests.CreateTicketComment(new CreateTicketCommentRequest
    {
        TicketId = 1L,
        Body = new CreateCommentRequest { Body = "some example string" },
    });
    // TODO: Handle 'response' of type CommentExtApi
}
catch (ApiException<CreateTicketCommentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTicketCommentRequest](src/DoiT/Requests/SupportRequests/CreateTicketCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommentExtApi](src/DoiT/Models/CommentExtApi.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CreateTicketCommentError](src/DoiT/Errors/CreateTicketCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TicketDetailExtApi&gt; GetTicket(GetTicketRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a single support request by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupportRequests.GetTicket(new GetTicketRequest { TicketId = 1L });
    // TODO: Handle 'response' of type TicketDetailExtApi
}
catch (ApiException<GetTicketError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTicketRequest](src/DoiT/Requests/SupportRequests/GetTicketRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TicketDetailExtApi](src/DoiT/Models/TicketDetailExtApi.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetTicketError](src/DoiT/Errors/GetTicketError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CommentsResponseExtApi&gt; ListTicketComments(ListTicketCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all permitted comments on a support request. Customers and
service-account callers receive only public comments; private comment
bodies and attachments are excluded. Callers authenticated with DoiT
employee privileges receive both public and private comments, subject
to existing ticket authorization. Each comment includes `public`,
sourced from Zendesk: `true` means public and `false` means private
(internal). Missing visibility in legacy responses or snapshots means
unknown, not private. All comments are returned in a single response
(no pagination).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupportRequests.ListTicketComments(new ListTicketCommentsRequest { TicketId = 1L });
    // TODO: Handle 'response' of type CommentsResponseExtApi
}
catch (ApiException<ListTicketCommentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTicketCommentsRequest](src/DoiT/Requests/SupportRequests/ListTicketCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommentsResponseExtApi](src/DoiT/Models/CommentsResponseExtApi.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListTicketCommentsError](src/DoiT/Errors/ListTicketCommentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TagsGetResponse&gt; ListTicketTags(ListTicketTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the tags currently set on a support request.

DoiT employee (doer) callers receive the full tag set verbatim,
including internal namespaces (e.g. `tier/*`, `synapse_*`). Customer
callers receive only tags under the `customer_tag/` namespace, with
that prefix stripped (e.g. a tag added as `billing` reads back as
`billing`). Always present; empty array when the caller has no visible
tags.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupportRequests.ListTicketTags(new ListTicketTagsRequest { TicketId = 1L });
    // TODO: Handle 'response' of type TagsGetResponse
}
catch (ApiException<ListTicketTagsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTicketTagsRequest](src/DoiT/Requests/SupportRequests/ListTicketTagsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagsGetResponse](src/DoiT/Models/TagsGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListTicketTagsError](src/DoiT/Errors/ListTicketTagsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TicketsList&gt; ListTickets(ListTicketsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all historical requests that your account has access to.
Tickets are returned in reverse chronological order by default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupportRequests.ListTickets(new ListTicketsRequest());
    // TODO: Handle 'response' of type TicketsList
}
catch (ApiException<ListTicketsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTicketsRequest](src/DoiT/Requests/SupportRequests/ListTicketsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TicketsList](src/DoiT/Models/TicketsList.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListTicketsError](src/DoiT/Errors/ListTicketsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TagsResponse&gt; RemoveTicketTags(RemoveTicketTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes one or more tags from an existing support request. The operation
is surgical — only the tags listed in the request are removed; tags not
listed are preserved. Removing a tag that is not present is a successful
no-op.

For customers, the system applies the same `customer_tag/` namespace
mapping as on add, so a customer who added `my_tag` (stored as
`customer_tag/my_tag`) can remove it by sending `my_tag`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupportRequests.RemoveTicketTags(new RemoveTicketTagsRequest
    {
        TicketId = 1L,
        Body = new TagsRequest { Tags = ["some example string"] },
    });
    // TODO: Handle 'response' of type TagsResponse
}
catch (ApiException<RemoveTicketTagsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveTicketTagsRequest](src/DoiT/Requests/SupportRequests/RemoveTicketTagsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagsResponse](src/DoiT/Models/TagsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[RemoveTicketTagsError](src/DoiT/Errors/RemoveTicketTagsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SupportV1TicketsResponse&gt; UpdateTicket(UpdateTicketRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a support request. Supports setting the request
`status` and/or `assignee`. DoiT employees may set any of `open`,
`pending`, `hold`, or `solved` and may set the `assignee`; customers may
set only `solved` (parity with the console "mark as resolved" action)
and may not set an assignee. `closed` is not settable via the API
(Zendesk auto-closes from `solved`). The `assignee` is a DoiT-employee
email, resolved server-side to a Zendesk agent; an email that does not
resolve to an active agent returns `400`. At least one mutable field
must be present. The response echoes the fields that were applied.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupportRequests.UpdateTicket(new UpdateTicketRequest
    {
        TicketId = 1L,
        Body = new SupportV1TicketsRequest(),
    });
    // TODO: Handle 'response' of type SupportV1TicketsResponse
}
catch (ApiException<UpdateTicketError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateTicketRequest](src/DoiT/Requests/SupportRequests/UpdateTicketRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SupportV1TicketsResponse](src/DoiT/Models/SupportV1TicketsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateTicketError](src/DoiT/Errors/UpdateTicketError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Templates

> Source: [Templates](src/DoiT/Api/Templates.cs)

<details>
<summary><code>Task&lt;CloudflowTemplate&gt; GetCloudflowTemplate2(GetCloudflowTemplate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single CloudFlow template by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Templates.GetCloudflowTemplate2(new GetCloudflowTemplate2Request
    {
        TemplateId = "some example string",
    });
    // TODO: Handle 'response' of type CloudflowTemplate
}
catch (ApiException<GetCloudflowTemplate2Error> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCloudflowTemplate2Request](src/DoiT/Requests/Templates/GetCloudflowTemplate2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowTemplate](src/DoiT/Models/CloudflowTemplate.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetCloudflowTemplate2Error](src/DoiT/Errors/GetCloudflowTemplate2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CloudflowTemplateListResponse&gt; ListCloudflowTemplates2(ListCloudflowTemplates2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the catalogue of available CloudFlow templates (blueprints). Templates are
read-only. To create a flow from a template, use `POST /flows` with a `templateId`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Templates.ListCloudflowTemplates2(new ListCloudflowTemplates2Request());
    // TODO: Handle 'response' of type CloudflowTemplateListResponse
}
catch (ApiException<ListCloudflowTemplates2Error> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCloudflowTemplates2Request](src/DoiT/Requests/Templates/ListCloudflowTemplates2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CloudflowTemplateListResponse](src/DoiT/Models/CloudflowTemplateListResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListCloudflowTemplates2Error](src/DoiT/Errors/ListCloudflowTemplates2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/DoiT/Api/Users.cs)

<details>
<summary><code>Task&lt;CancelInviteResponse&gt; CancelInvite(CancelInviteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks the invite as `Cancelled` and invalidates the invite token so any outstanding email
links stop working. The invite document is retained (soft cancel) — the user row remains
visible in `GET /iam/v1/users` with `inviteStatus: Cancelled`. Use `DELETE /iam/v1/users/{id}`
to fully remove the record.

Returns `404` if no invite exists for the given ID, and `409` if the invite is already cancelled.

Requires `usersManager` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.CancelInvite(new CancelInviteRequest
    {
        Id = "some example string",
        IdempotencyKey = "some example string",
    });
    // TODO: Handle 'response' of type CancelInviteResponse
}
catch (ApiException<CancelInviteError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelInviteRequest](src/DoiT/Requests/Users/CancelInviteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CancelInviteResponse](src/DoiT/Models/CancelInviteResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[CancelInviteError](src/DoiT/Errors/CancelInviteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeleteUserResponse&gt; DeleteUser(DeleteUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.DeleteUser(new DeleteUserRequest { Id = "some example string" });
    // TODO: Handle 'response' of type DeleteUserResponse
}
catch (ApiException<DeleteUserError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteUserRequest](src/DoiT/Requests/Users/DeleteUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteUserResponse](src/DoiT/Models/DeleteUserResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[DeleteUserError](src/DoiT/Errors/DeleteUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InviteResponse&gt; InviteUser(InviteUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invites a new user to the organization with specified role and organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.InviteUser(new InviteUserOperationRequest
    {
        Body = new InviteUserRequest { Email = "user@example.com" },
    });
    // TODO: Handle 'response' of type InviteResponse
}
catch (ApiException<InviteUserError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[InviteUserOperationRequest](src/DoiT/Requests/Users/InviteUserOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InviteResponse](src/DoiT/Models/InviteResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[InviteUserError](src/DoiT/Errors/InviteUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListUsersResponseBody&gt; ListUsers(ListUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of users in the organization, including both active users and invited users.
When the `email` query parameter is provided, returns only the user matching that email address.
If no user is found for the given email, an empty list is returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.ListUsers(new ListUsersRequest());
    // TODO: Handle 'response' of type ListUsersResponseBody
}
catch (ApiException<ListUsersError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListUsersRequest](src/DoiT/Requests/Users/ListUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListUsersResponseBody](src/DoiT/Models/ListUsersResponseBody.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListUsersError](src/DoiT/Errors/ListUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ResendInviteResponse&gt; ResendInvite(ResendInviteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resets the invite expiry to 48 hours from now, invalidates the previous invite token (so
old email links stop working), and triggers a fresh invitation email. Works on invites in
any state including `Cancelled` — resending a cancelled invite reactivates it to `Pending`.

Returns `404` if no invite exists for the given ID (never created, or already accepted and removed).

Requires `usersManager` permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.ResendInvite(new ResendInviteRequest
    {
        Id = "some example string",
        IdempotencyKey = "some example string",
    });
    // TODO: Handle 'response' of type ResendInviteResponse
}
catch (ApiException<ResendInviteError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResendInviteRequest](src/DoiT/Requests/Users/ResendInviteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResendInviteResponse](src/DoiT/Models/ResendInviteResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ResendInviteError](src/DoiT/Errors/ResendInviteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateUserResponse&gt; UpdateUser(UpdateUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates user information, including name, job function, phone, language, and role.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.UpdateUser(new UpdateUserOperationRequest
    {
        Id = "some example string",
        Body = new UpdateUserRequest(),
    });
    // TODO: Handle 'response' of type UpdateUserResponse
}
catch (ApiException<UpdateUserError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateUserOperationRequest](src/DoiT/Requests/Users/UpdateUserOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateUserResponse](src/DoiT/Models/UpdateUserResponse.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[UpdateUserError](src/DoiT/Errors/UpdateUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WidgetsBeta

> Source: [WidgetsBeta](src/DoiT/Api/WidgetsBeta.cs)

<details>
<summary><code>Task&lt;Widget&gt; GetWidget(GetWidgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the latest precomputed cached result for one widget. This read does not refresh or
recompute the widget synchronously.

Use either the customer-specific `id` returned by the list-widgets operation or one of these
stable aliases:

- `current-month-cloud-spend` — total cloud spend accumulated during the current calendar month.
- `current-month-cloud-forecast` — forecast of total cloud spend for the current calendar month.

The two concrete alias requests are:

- `GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-spend`
- `GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-forecast`

Authenticate with `Authorization: Bearer `. Omit `X-Tenant-Id` when the credential
resolves to one customer. When the credential can act on multiple customers, send
`X-Tenant-Id: ` to select the customer. A `403` response means the caller or
selected customer is not authorized or entitled to use this API.

The result's `period.endTime` is exclusive. Monetary `amount` values are decimal strings and
`currency` values are ISO 4217 currency codes. `monthToMonthGrowthPercentage` and
`monthToMonthGrowthAmount` are both `null` when no comparable prior-period value exists.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WidgetsBeta.GetWidget(new GetWidgetRequest
    {
        WidgetId = "current-month-cloud-spend",
        XTenantId = "Kp2mN8qL4vR0sT1wX3yZ",
    });
    // TODO: Handle 'response' of type Widget
}
catch (ApiException<GetWidgetError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWidgetRequest](src/DoiT/Requests/WidgetsBeta/GetWidgetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Widget](src/DoiT/Models/Widget.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[GetWidgetError](src/DoiT/Errors/GetWidgetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WidgetList&gt; ListWidgets(ListWidgetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the complete catalogue of preset widgets supported by the Analytics Widgets API.
Each entry contains a customer-specific `id` and a stable customer-facing `alias`; either
value can be passed to the get-widget operation. An `id` can vary by customer or service
tier, while an `alias` remains stable.

Authenticate with `Authorization: Bearer `. Omit `X-Tenant-Id` when the credential
resolves to one customer. When the credential can act on multiple customers, send
`X-Tenant-Id: ` to select the customer. A `403` response means the caller or
selected customer is not authorized or entitled to use this API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WidgetsBeta.ListWidgets(new ListWidgetsRequest { XTenantId = "Kp2mN8qL4vR0sT1wX3yZ" });
    // TODO: Handle 'response' of type WidgetList
}
catch (ApiException<ListWidgetsError> ex)
{
    if (ex.Error.TryGetProblemDetails(out var error))
    {
        // TODO: Handle 'error' of type ProblemDetails
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListWidgetsRequest](src/DoiT/Requests/WidgetsBeta/ListWidgetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WidgetList](src/DoiT/Models/WidgetList.cs)</code>

**OnError**: <code>[ApiException](src/DoiT/Core/Exceptions/ApiException.cs)&lt;[ListWidgetsError](src/DoiT/Errors/ListWidgetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

