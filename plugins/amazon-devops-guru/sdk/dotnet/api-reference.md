# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AmazonDevOpsGuruClient](src/AmazonDevOpsGuru/AmazonDevOpsGuruClient.cs)

## Accounts

> Source: [Accounts](src/AmazonDevOpsGuru/Api/Accounts.cs)

<details>
<summary><code>Task&lt;DescribeAccountHealthResponse&gt; DescribeAccountHealth(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Accounts.DescribeAccountHealth();
    // TODO: Handle 'response' of type DescribeAccountHealthResponse
}
catch (ApiException<DescribeAccountHealthError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeAccountHealthResponse](src/AmazonDevOpsGuru/Models/DescribeAccountHealthResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[DescribeAccountHealthError](src/AmazonDevOpsGuru/Errors/DescribeAccountHealthError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeAccountOverviewResponse&gt; DescribeAccountOverview(DescribeAccountOverviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Accounts.DescribeAccountOverview(new DescribeAccountOverviewRequest());
    // TODO: Handle 'response' of type DescribeAccountOverviewResponse
}
catch (ApiException<DescribeAccountOverviewError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeAccountOverviewRequest](src/AmazonDevOpsGuru/Requests/Accounts/DescribeAccountOverviewRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeAccountOverviewResponse](src/AmazonDevOpsGuru/Models/DescribeAccountOverviewResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[DescribeAccountOverviewError](src/AmazonDevOpsGuru/Errors/DescribeAccountOverviewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeResourceCollectionHealthResponse&gt; DescribeResourceCollectionHealth(DescribeResourceCollectionHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Accounts.DescribeResourceCollectionHealth(new DescribeResourceCollectionHealthRequest
    {
        ResourceCollectionType = ResourceCollectionType.AwsCloudFormation,
    });
    // TODO: Handle 'response' of type DescribeResourceCollectionHealthResponse
}
catch (ApiException<DescribeResourceCollectionHealthError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeResourceCollectionHealthRequest](src/AmazonDevOpsGuru/Requests/Accounts/DescribeResourceCollectionHealthRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeResourceCollectionHealthResponse](src/AmazonDevOpsGuru/Models/DescribeResourceCollectionHealthResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[DescribeResourceCollectionHealthError](src/AmazonDevOpsGuru/Errors/DescribeResourceCollectionHealthError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Anomalies

> Source: [Anomalies](src/AmazonDevOpsGuru/Api/Anomalies.cs)

<details>
<summary><code>Task&lt;DescribeAnomalyResponse&gt; DescribeAnomaly(DescribeAnomalyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details about an anomaly that you specify using its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Anomalies.DescribeAnomaly(new DescribeAnomalyRequest { Id = "some example string" });
    // TODO: Handle 'response' of type DescribeAnomalyResponse
}
catch (ApiException<DescribeAnomalyError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeAnomalyRequest](src/AmazonDevOpsGuru/Requests/Anomalies/DescribeAnomalyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeAnomalyResponse](src/AmazonDevOpsGuru/Models/DescribeAnomalyResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[DescribeAnomalyError](src/AmazonDevOpsGuru/Errors/DescribeAnomalyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListAnomaliesForInsightResponse&gt; ListAnomaliesForInsight(ListAnomaliesForInsightRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the anomalies that belong to an insight that you specify using its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Anomalies.ListAnomaliesForInsight(new ListAnomaliesForInsightRequest
    {
        InsightId = "some example string",
    });
    // TODO: Handle 'response' of type ListAnomaliesForInsightResponse
}
catch (ApiException<ListAnomaliesForInsightError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAnomaliesForInsightRequest](src/AmazonDevOpsGuru/Requests/Anomalies/ListAnomaliesForInsightRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAnomaliesForInsightResponse](src/AmazonDevOpsGuru/Models/ListAnomaliesForInsightResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[ListAnomaliesForInsightError](src/AmazonDevOpsGuru/Errors/ListAnomaliesForInsightError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Channels

> Source: [Channels](src/AmazonDevOpsGuru/Api/Channels.cs)

<details>
<summary><code>Task&lt;AddNotificationChannelResponse&gt; AddNotificationChannel(AddNotificationChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see Permissions for Amazon SNS topics. If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Channels.AddNotificationChannel(new AddNotificationChannelRequest());
    // TODO: Handle 'response' of type AddNotificationChannelResponse
}
catch (ApiException<AddNotificationChannelError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddNotificationChannelRequest](src/AmazonDevOpsGuru/Requests/Channels/AddNotificationChannelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AddNotificationChannelResponse](src/AmazonDevOpsGuru/Models/AddNotificationChannelResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[AddNotificationChannelError](src/AmazonDevOpsGuru/Errors/AddNotificationChannelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListNotificationChannelsResponse&gt; ListNotificationChannels(ListNotificationChannelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Channels.ListNotificationChannels(new ListNotificationChannelsRequest());
    // TODO: Handle 'response' of type ListNotificationChannelsResponse
}
catch (ApiException<ListNotificationChannelsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListNotificationChannelsRequest](src/AmazonDevOpsGuru/Requests/Channels/ListNotificationChannelsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListNotificationChannelsResponse](src/AmazonDevOpsGuru/Models/ListNotificationChannelsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[ListNotificationChannelsError](src/AmazonDevOpsGuru/Errors/ListNotificationChannelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; RemoveNotificationChannel(RemoveNotificationChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Channels.RemoveNotificationChannel(new RemoveNotificationChannelRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RemoveNotificationChannelError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveNotificationChannelRequest](src/AmazonDevOpsGuru/Requests/Channels/RemoveNotificationChannelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[RemoveNotificationChannelError](src/AmazonDevOpsGuru/Errors/RemoveNotificationChannelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CostEstimation

> Source: [CostEstimation](src/AmazonDevOpsGuru/Api/CostEstimation.cs)

<details>
<summary><code>Task&lt;GetCostEstimationResponse&gt; GetCostEstimation(GetCostEstimationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see Estimate your Amazon DevOps Guru costs and Amazon DevOps Guru pricing.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CostEstimation.GetCostEstimation(new GetCostEstimationRequest());
    // TODO: Handle 'response' of type GetCostEstimationResponse
}
catch (ApiException<GetCostEstimationError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCostEstimationRequest](src/AmazonDevOpsGuru/Requests/CostEstimation/GetCostEstimationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetCostEstimationResponse](src/AmazonDevOpsGuru/Models/GetCostEstimationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[GetCostEstimationError](src/AmazonDevOpsGuru/Errors/GetCostEstimationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; StartCostEstimation(StartCostEstimationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CostEstimation.StartCostEstimation(new StartCostEstimationRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<StartCostEstimationError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartCostEstimationRequest](src/AmazonDevOpsGuru/Requests/CostEstimation/StartCostEstimationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[StartCostEstimationError](src/AmazonDevOpsGuru/Errors/StartCostEstimationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EventSources

> Source: [EventSources](src/AmazonDevOpsGuru/Api/EventSources.cs)

<details>
<summary><code>Task&lt;DescribeEventSourcesConfigResponse&gt; DescribeEventSourcesConfig(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventSources.DescribeEventSourcesConfig();
    // TODO: Handle 'response' of type DescribeEventSourcesConfigResponse
}
catch (ApiException<DescribeEventSourcesConfigError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeEventSourcesConfigResponse](src/AmazonDevOpsGuru/Models/DescribeEventSourcesConfigResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[DescribeEventSourcesConfigError](src/AmazonDevOpsGuru/Errors/DescribeEventSourcesConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; UpdateEventSourcesConfig(UpdateEventSourcesConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventSources.UpdateEventSourcesConfig(new UpdateEventSourcesConfigRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<UpdateEventSourcesConfigError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateEventSourcesConfigRequest](src/AmazonDevOpsGuru/Requests/EventSources/UpdateEventSourcesConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[UpdateEventSourcesConfigError](src/AmazonDevOpsGuru/Errors/UpdateEventSourcesConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/AmazonDevOpsGuru/Api/Events.cs)

<details>
<summary><code>Task&lt;ListEventsResponse&gt; ListEvents(ListEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.ListEvents(new ListEventsRequest());
    // TODO: Handle 'response' of type ListEventsResponse
}
catch (ApiException<ListEventsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEventsRequest](src/AmazonDevOpsGuru/Requests/Events/ListEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListEventsResponse](src/AmazonDevOpsGuru/Models/ListEventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[ListEventsError](src/AmazonDevOpsGuru/Errors/ListEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FeedbackApi

> Source: [FeedbackApi](src/AmazonDevOpsGuru/Api/FeedbackApi.cs)

<details>
<summary><code>Task&lt;DescribeFeedbackResponse&gt; DescribeFeedback(DescribeFeedbackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the most recent feedback submitted in the current Amazon Web Services account and Region.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeedbackApi.DescribeFeedback(new DescribeFeedbackRequest());
    // TODO: Handle 'response' of type DescribeFeedbackResponse
}
catch (ApiException<DescribeFeedbackError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeFeedbackRequest](src/AmazonDevOpsGuru/Requests/FeedbackApi/DescribeFeedbackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeFeedbackResponse](src/AmazonDevOpsGuru/Models/DescribeFeedbackResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[DescribeFeedbackError](src/AmazonDevOpsGuru/Errors/DescribeFeedbackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; PutFeedback(PutFeedbackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Collects customer feedback about the specified insight.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FeedbackApi.PutFeedback(new PutFeedbackRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<PutFeedbackError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutFeedbackRequest](src/AmazonDevOpsGuru/Requests/FeedbackApi/PutFeedbackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[PutFeedbackError](src/AmazonDevOpsGuru/Errors/PutFeedbackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](src/AmazonDevOpsGuru/Api/Insights.cs)

<details>
<summary><code>Task&lt;object&gt; DeleteInsight(DeleteInsightRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the insight along with the associated anomalies, events and recommendations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.DeleteInsight(new DeleteInsightRequest { Id = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteInsightError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteInsightRequest](src/AmazonDevOpsGuru/Requests/Insights/DeleteInsightRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[DeleteInsightError](src/AmazonDevOpsGuru/Errors/DeleteInsightError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeInsightResponse&gt; DescribeInsight(DescribeInsightRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details about an insight that you specify using its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.DescribeInsight(new DescribeInsightRequest { Id = "some example string" });
    // TODO: Handle 'response' of type DescribeInsightResponse
}
catch (ApiException<DescribeInsightError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeInsightRequest](src/AmazonDevOpsGuru/Requests/Insights/DescribeInsightRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeInsightResponse](src/AmazonDevOpsGuru/Models/DescribeInsightResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[DescribeInsightError](src/AmazonDevOpsGuru/Errors/DescribeInsightError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListInsightsResponse&gt; ListInsights(ListInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (ONGOING, CLOSED, or ANY).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.ListInsights(new ListInsightsRequest());
    // TODO: Handle 'response' of type ListInsightsResponse
}
catch (ApiException<ListInsightsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListInsightsRequest](src/AmazonDevOpsGuru/Requests/Insights/ListInsightsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListInsightsResponse](src/AmazonDevOpsGuru/Models/ListInsightsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[ListInsightsError](src/AmazonDevOpsGuru/Errors/ListInsightsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchInsightsResponse&gt; SearchInsights(SearchInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (ONGOING or CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use the Type parameter to specify REACTIVE or PROACTIVE in your search.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.SearchInsights(new SearchInsightsRequest());
    // TODO: Handle 'response' of type SearchInsightsResponse
}
catch (ApiException<SearchInsightsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchInsightsRequest](src/AmazonDevOpsGuru/Requests/Insights/SearchInsightsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchInsightsResponse](src/AmazonDevOpsGuru/Models/SearchInsightsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[SearchInsightsError](src/AmazonDevOpsGuru/Errors/SearchInsightsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ListLogAnomalies

> Source: [ListLogAnomalies](src/AmazonDevOpsGuru/Api/ListLogAnomalies.cs)

<details>
<summary><code>Task&lt;ListAnomalousLogGroupsResponse&gt; ListAnomalousLogGroups(ListAnomalousLogGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of log groups that contain log anomalies.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ListLogAnomalies.ListAnomalousLogGroups(new ListAnomalousLogGroupsRequest());
    // TODO: Handle 'response' of type ListAnomalousLogGroupsResponse
}
catch (ApiException<ListAnomalousLogGroupsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAnomalousLogGroupsRequest](src/AmazonDevOpsGuru/Requests/ListLogAnomalies/ListAnomalousLogGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAnomalousLogGroupsResponse](src/AmazonDevOpsGuru/Models/ListAnomalousLogGroupsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[ListAnomalousLogGroupsError](src/AmazonDevOpsGuru/Errors/ListAnomalousLogGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MonitoredResources

> Source: [MonitoredResources](src/AmazonDevOpsGuru/Api/MonitoredResources.cs)

<details>
<summary><code>Task&lt;ListMonitoredResourcesResponse&gt; ListMonitoredResources(ListMonitoredResourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of all log groups that are being monitored and tagged by DevOps Guru.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitoredResources.ListMonitoredResources(new ListMonitoredResourcesRequest());
    // TODO: Handle 'response' of type ListMonitoredResourcesResponse
}
catch (ApiException<ListMonitoredResourcesError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListMonitoredResourcesRequest](src/AmazonDevOpsGuru/Requests/MonitoredResources/ListMonitoredResourcesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMonitoredResourcesResponse](src/AmazonDevOpsGuru/Models/ListMonitoredResourcesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[ListMonitoredResourcesError](src/AmazonDevOpsGuru/Errors/ListMonitoredResourcesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Organization

> Source: [Organization](src/AmazonDevOpsGuru/Api/Organization.cs)

<details>
<summary><code>Task&lt;DescribeOrganizationHealthResponse&gt; DescribeOrganizationHealth(DescribeOrganizationHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns active insights, predictive insights, and resource hours analyzed in last hour.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organization.DescribeOrganizationHealth(new DescribeOrganizationHealthRequest());
    // TODO: Handle 'response' of type DescribeOrganizationHealthResponse
}
catch (ApiException<DescribeOrganizationHealthError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeOrganizationHealthRequest](src/AmazonDevOpsGuru/Requests/Organization/DescribeOrganizationHealthRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeOrganizationHealthResponse](src/AmazonDevOpsGuru/Models/DescribeOrganizationHealthResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[DescribeOrganizationHealthError](src/AmazonDevOpsGuru/Errors/DescribeOrganizationHealthError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeOrganizationOverviewResponse&gt; DescribeOrganizationOverview(DescribeOrganizationOverviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an overview of your organization's history based on the specified time range. The overview includes the total reactive and proactive insights.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organization.DescribeOrganizationOverview(new DescribeOrganizationOverviewRequest());
    // TODO: Handle 'response' of type DescribeOrganizationOverviewResponse
}
catch (ApiException<DescribeOrganizationOverviewError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeOrganizationOverviewRequest](src/AmazonDevOpsGuru/Requests/Organization/DescribeOrganizationOverviewRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeOrganizationOverviewResponse](src/AmazonDevOpsGuru/Models/DescribeOrganizationOverviewResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[DescribeOrganizationOverviewError](src/AmazonDevOpsGuru/Errors/DescribeOrganizationOverviewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DescribeOrganizationResourceCollectionHealthResponse&gt; DescribeOrganizationResourceCollectionHealth(DescribeOrganizationResourceCollectionHealthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the AccountIds field.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organization.DescribeOrganizationResourceCollectionHealth(
        new DescribeOrganizationResourceCollectionHealthRequest());
    // TODO: Handle 'response' of type DescribeOrganizationResourceCollectionHealthResponse
}
catch (ApiException<DescribeOrganizationResourceCollectionHealthError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeOrganizationResourceCollectionHealthRequest](src/AmazonDevOpsGuru/Requests/Organization/DescribeOrganizationResourceCollectionHealthRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeOrganizationResourceCollectionHealthResponse](src/AmazonDevOpsGuru/Models/DescribeOrganizationResourceCollectionHealthResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[DescribeOrganizationResourceCollectionHealthError](src/AmazonDevOpsGuru/Errors/DescribeOrganizationResourceCollectionHealthError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListOrganizationInsightsResponse&gt; ListOrganizationInsights(ListOrganizationInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of insights associated with the account or OU Id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organization.ListOrganizationInsights(new ListOrganizationInsightsRequest());
    // TODO: Handle 'response' of type ListOrganizationInsightsResponse
}
catch (ApiException<ListOrganizationInsightsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListOrganizationInsightsRequest](src/AmazonDevOpsGuru/Requests/Organization/ListOrganizationInsightsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListOrganizationInsightsResponse](src/AmazonDevOpsGuru/Models/ListOrganizationInsightsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[ListOrganizationInsightsError](src/AmazonDevOpsGuru/Errors/ListOrganizationInsightsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchOrganizationInsightsResponse&gt; SearchOrganizationInsights(SearchOrganizationInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (ONGOING, CLOSED, and CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use the Type parameter to specify REACTIVE or PROACTIVE in your search.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organization.SearchOrganizationInsights(new SearchOrganizationInsightsRequest());
    // TODO: Handle 'response' of type SearchOrganizationInsightsResponse
}
catch (ApiException<SearchOrganizationInsightsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchOrganizationInsightsRequest](src/AmazonDevOpsGuru/Requests/Organization/SearchOrganizationInsightsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchOrganizationInsightsResponse](src/AmazonDevOpsGuru/Models/SearchOrganizationInsightsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[SearchOrganizationInsightsError](src/AmazonDevOpsGuru/Errors/SearchOrganizationInsightsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Recommendations

> Source: [Recommendations](src/AmazonDevOpsGuru/Api/Recommendations.cs)

<details>
<summary><code>Task&lt;ListRecommendationsResponse&gt; ListRecommendations(ListRecommendationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Recommendations.ListRecommendations(new ListRecommendationsRequest());
    // TODO: Handle 'response' of type ListRecommendationsResponse
}
catch (ApiException<ListRecommendationsError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListRecommendationsRequest](src/AmazonDevOpsGuru/Requests/Recommendations/ListRecommendationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListRecommendationsResponse](src/AmazonDevOpsGuru/Models/ListRecommendationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[ListRecommendationsError](src/AmazonDevOpsGuru/Errors/ListRecommendationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ResourceCollections

> Source: [ResourceCollections](src/AmazonDevOpsGuru/Api/ResourceCollections.cs)

<details>
<summary><code>Task&lt;GetResourceCollectionResponse&gt; GetResourceCollection(GetResourceCollectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ResourceCollections.GetResourceCollection(new GetResourceCollectionRequest
    {
        ResourceCollectionType = ResourceCollectionType.AwsCloudFormation,
    });
    // TODO: Handle 'response' of type GetResourceCollectionResponse
}
catch (ApiException<GetResourceCollectionError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetResourceCollectionRequest](src/AmazonDevOpsGuru/Requests/ResourceCollections/GetResourceCollectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetResourceCollectionResponse](src/AmazonDevOpsGuru/Models/GetResourceCollectionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[GetResourceCollectionError](src/AmazonDevOpsGuru/Errors/GetResourceCollectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; UpdateResourceCollection(UpdateResourceCollectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ResourceCollections.UpdateResourceCollection(new UpdateResourceCollectionRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<UpdateResourceCollectionError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateResourceCollectionRequest](src/AmazonDevOpsGuru/Requests/ResourceCollections/UpdateResourceCollectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[UpdateResourceCollectionError](src/AmazonDevOpsGuru/Errors/UpdateResourceCollectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceIntegrations

> Source: [ServiceIntegrations](src/AmazonDevOpsGuru/Api/ServiceIntegrations.cs)

<details>
<summary><code>Task&lt;DescribeServiceIntegrationResponse&gt; DescribeServiceIntegration(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ServiceIntegrations.DescribeServiceIntegration();
    // TODO: Handle 'response' of type DescribeServiceIntegrationResponse
}
catch (ApiException<DescribeServiceIntegrationError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeServiceIntegrationResponse](src/AmazonDevOpsGuru/Models/DescribeServiceIntegrationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[DescribeServiceIntegrationError](src/AmazonDevOpsGuru/Errors/DescribeServiceIntegrationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; UpdateServiceIntegration(UpdateServiceIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ServiceIntegrations.UpdateServiceIntegration(new UpdateServiceIntegrationRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<UpdateServiceIntegrationError> ex)
{
    if (ex.Error.TryGetValidationExceptionModel(out var error))
    {
        // TODO: Handle 'error' of type ValidationExceptionModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateServiceIntegrationRequest](src/AmazonDevOpsGuru/Requests/ServiceIntegrations/UpdateServiceIntegrationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonDevOpsGuru/Core/Exceptions/ApiException.cs)&lt;[UpdateServiceIntegrationError](src/AmazonDevOpsGuru/Errors/UpdateServiceIntegrationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

