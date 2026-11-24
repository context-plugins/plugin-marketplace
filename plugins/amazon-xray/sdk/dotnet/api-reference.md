# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AwsXRayClient](src/AwsXRay/AwsXRayClient.cs)

## Creategroup

> Source: [Creategroup](src/AwsXRay/Api/Creategroup.cs)

<details>
<summary><code>Task&lt;CreateGroupResult&gt; CreateGroup(CreateGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a group resource with a name and a filter expression.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Creategroup.CreateGroup(new CreateGroupOperationRequest());
    // TODO: Handle 'response' of type CreateGroupResult
}
catch (ApiException<CreateGroupError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateGroupOperationRequest](src/AwsXRay/Requests/Creategroup/CreateGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateGroupResult](src/AwsXRay/Models/CreateGroupResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[CreateGroupError](src/AwsXRay/Errors/CreateGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Createsamplingrule

> Source: [Createsamplingrule](src/AwsXRay/Api/Createsamplingrule.cs)

<details>
<summary><code>Task&lt;CreateSamplingRuleResult&gt; CreateSamplingRule(CreateSamplingRuleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with GetSamplingRules, and evaluate each rule in ascending order of priority for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with GetSamplingTargets to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Createsamplingrule.CreateSamplingRule(new CreateSamplingRuleOperationRequest());
    // TODO: Handle 'response' of type CreateSamplingRuleResult
}
catch (ApiException<CreateSamplingRuleError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSamplingRuleOperationRequest](src/AwsXRay/Requests/Createsamplingrule/CreateSamplingRuleOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateSamplingRuleResult](src/AwsXRay/Models/CreateSamplingRuleResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[CreateSamplingRuleError](src/AwsXRay/Errors/CreateSamplingRuleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DeleteGroup

> Source: [DeleteGroup](src/AwsXRay/Api/DeleteGroup.cs)

<details>
<summary><code>Task&lt;object&gt; DeleteGroupInvoke(DeleteGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a group resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DeleteGroup.DeleteGroupInvoke(new DeleteGroupOperationRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteGroupError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteGroupOperationRequest](src/AwsXRay/Requests/DeleteGroup/DeleteGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[DeleteGroupError](src/AwsXRay/Errors/DeleteGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Deleteresourcepolicy

> Source: [Deleteresourcepolicy](src/AwsXRay/Api/Deleteresourcepolicy.cs)

<details>
<summary><code>Task&lt;object&gt; DeleteResourcePolicy(DeleteResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a resource policy from the target Amazon Web Services account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deleteresourcepolicy.DeleteResourcePolicy(new DeleteResourcePolicyOperationRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteResourcePolicyError> ex)
{
    if (ex.Error.TryGetInvalidPolicyRevisionIdException(out var error))
    {
        // TODO: Handle 'error' of type InvalidPolicyRevisionIdException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteResourcePolicyOperationRequest](src/AwsXRay/Requests/Deleteresourcepolicy/DeleteResourcePolicyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[DeleteResourcePolicyError](src/AwsXRay/Errors/DeleteResourcePolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Deletesamplingrule

> Source: [Deletesamplingrule](src/AwsXRay/Api/Deletesamplingrule.cs)

<details>
<summary><code>Task&lt;DeleteSamplingRuleResult&gt; DeleteSamplingRule(DeleteSamplingRuleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a sampling rule.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deletesamplingrule.DeleteSamplingRule(new DeleteSamplingRuleOperationRequest());
    // TODO: Handle 'response' of type DeleteSamplingRuleResult
}
catch (ApiException<DeleteSamplingRuleError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSamplingRuleOperationRequest](src/AwsXRay/Requests/Deletesamplingrule/DeleteSamplingRuleOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteSamplingRuleResult](src/AwsXRay/Models/DeleteSamplingRuleResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[DeleteSamplingRuleError](src/AwsXRay/Errors/DeleteSamplingRuleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EncryptionconfigApi

> Source: [EncryptionconfigApi](src/AwsXRay/Api/EncryptionconfigApi.cs)

<details>
<summary><code>Task&lt;GetEncryptionConfigResult&gt; GetEncryptionConfig(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the current encryption configuration for X-Ray data.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EncryptionconfigApi.GetEncryptionConfig();
    // TODO: Handle 'response' of type GetEncryptionConfigResult
}
catch (ApiException<GetEncryptionConfigError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetEncryptionConfigResult](src/AwsXRay/Models/GetEncryptionConfigResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetEncryptionConfigError](src/AwsXRay/Errors/GetEncryptionConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GetGroup

> Source: [GetGroup](src/AwsXRay/Api/GetGroup.cs)

<details>
<summary><code>Task&lt;GetGroupResult&gt; GetGroupInvoke(GetGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves group resource details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GetGroup.GetGroupInvoke(new GetGroupOperationRequest());
    // TODO: Handle 'response' of type GetGroupResult
}
catch (ApiException<GetGroupError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGroupOperationRequest](src/AwsXRay/Requests/GetGroup/GetGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetGroupResult](src/AwsXRay/Models/GetGroupResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetGroupError](src/AwsXRay/Errors/GetGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Getsamplingrules

> Source: [Getsamplingrules](src/AwsXRay/Api/Getsamplingrules.cs)

<details>
<summary><code>Task&lt;GetSamplingRulesResult&gt; GetSamplingRules(GetSamplingRulesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all sampling rules.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Getsamplingrules.GetSamplingRules(new GetSamplingRulesOperationRequest());
    // TODO: Handle 'response' of type GetSamplingRulesResult
}
catch (ApiException<GetSamplingRulesError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSamplingRulesOperationRequest](src/AwsXRay/Requests/Getsamplingrules/GetSamplingRulesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSamplingRulesResult](src/AwsXRay/Models/GetSamplingRulesResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetSamplingRulesError](src/AwsXRay/Errors/GetSamplingRulesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Groups

> Source: [Groups](src/AwsXRay/Api/Groups.cs)

<details>
<summary><code>Task&lt;GetGroupsResult&gt; GetGroups(GetGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all active group details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Groups.GetGroups(new GetGroupsRequest());
    // TODO: Handle 'response' of type GetGroupsResult
}
catch (ApiException<GetGroupsError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGroupsRequest](src/AwsXRay/Requests/Groups/GetGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetGroupsResult](src/AwsXRay/Models/GetGroupsResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetGroupsError](src/AwsXRay/Errors/GetGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## InsightApi

> Source: [InsightApi](src/AwsXRay/Api/InsightApi.cs)

<details>
<summary><code>Task&lt;GetInsightResult&gt; GetInsight(GetInsightRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.InsightApi.GetInsight(new GetInsightRequest());
    // TODO: Handle 'response' of type GetInsightResult
}
catch (ApiException<GetInsightError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInsightRequest](src/AwsXRay/Requests/InsightApi/GetInsightRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetInsightResult](src/AwsXRay/Models/GetInsightResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetInsightError](src/AwsXRay/Errors/GetInsightError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Insightevents

> Source: [Insightevents](src/AwsXRay/Api/Insightevents.cs)

<details>
<summary><code>Task&lt;GetInsightEventsResult&gt; GetInsightEvents(GetInsightEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insightevents.GetInsightEvents(new GetInsightEventsRequest());
    // TODO: Handle 'response' of type GetInsightEventsResult
}
catch (ApiException<GetInsightEventsError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInsightEventsRequest](src/AwsXRay/Requests/Insightevents/GetInsightEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetInsightEventsResult](src/AwsXRay/Models/GetInsightEventsResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetInsightEventsError](src/AwsXRay/Errors/GetInsightEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Insightimpactgraph

> Source: [Insightimpactgraph](src/AwsXRay/Api/Insightimpactgraph.cs)

<details>
<summary><code>Task&lt;GetInsightImpactGraphResult&gt; GetInsightImpactGraph(GetInsightImpactGraphRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insightimpactgraph.GetInsightImpactGraph(new GetInsightImpactGraphRequest());
    // TODO: Handle 'response' of type GetInsightImpactGraphResult
}
catch (ApiException<GetInsightImpactGraphError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInsightImpactGraphRequest](src/AwsXRay/Requests/Insightimpactgraph/GetInsightImpactGraphRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetInsightImpactGraphResult](src/AwsXRay/Models/GetInsightImpactGraphResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetInsightImpactGraphError](src/AwsXRay/Errors/GetInsightImpactGraphError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Insightsummaries

> Source: [Insightsummaries](src/AwsXRay/Api/Insightsummaries.cs)

<details>
<summary><code>Task&lt;GetInsightSummariesResult&gt; GetInsightSummaries(GetInsightSummariesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the summaries of all insights in the specified group matching the provided filter values.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insightsummaries.GetInsightSummaries(new GetInsightSummariesRequest());
    // TODO: Handle 'response' of type GetInsightSummariesResult
}
catch (ApiException<GetInsightSummariesError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInsightSummariesRequest](src/AwsXRay/Requests/Insightsummaries/GetInsightSummariesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetInsightSummariesResult](src/AwsXRay/Models/GetInsightSummariesResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetInsightSummariesError](src/AwsXRay/Errors/GetInsightSummariesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ListTagsForResource

> Source: [ListTagsForResource](src/AwsXRay/Api/ListTagsForResource.cs)

<details>
<summary><code>Task&lt;ListTagsForResourceResponse&gt; ListTagsForResourceInvoke(ListTagsForResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ListTagsForResource.ListTagsForResourceInvoke(
        new ListTagsForResourceOperationRequest());
    // TODO: Handle 'response' of type ListTagsForResourceResponse
}
catch (ApiException<ListTagsForResourceError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTagsForResourceOperationRequest](src/AwsXRay/Requests/ListTagsForResource/ListTagsForResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTagsForResourceResponse](src/AwsXRay/Models/ListTagsForResourceResponse.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[ListTagsForResourceError](src/AwsXRay/Errors/ListTagsForResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Listresourcepolicies

> Source: [Listresourcepolicies](src/AwsXRay/Api/Listresourcepolicies.cs)

<details>
<summary><code>Task&lt;ListResourcePoliciesResult&gt; ListResourcePolicies(ListResourcePoliciesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of resource policies in the target Amazon Web Services account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Listresourcepolicies.ListResourcePolicies(new ListResourcePoliciesOperationRequest());
    // TODO: Handle 'response' of type ListResourcePoliciesResult
}
catch (ApiException<ListResourcePoliciesError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListResourcePoliciesOperationRequest](src/AwsXRay/Requests/Listresourcepolicies/ListResourcePoliciesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResourcePoliciesResult](src/AwsXRay/Models/ListResourcePoliciesResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[ListResourcePoliciesError](src/AwsXRay/Errors/ListResourcePoliciesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/AwsXRay/Api/Operations.cs)

<details>
<summary><code>Task&lt;object&gt; CancelTraceRetrieval(CancelTraceRetrievalOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels an ongoing trace retrieval job initiated by StartTraceRetrieval using the provided RetrievalToken. A successful cancellation will return an HTTP 200 response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.CancelTraceRetrieval(new CancelTraceRetrievalOperationRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<CancelTraceRetrievalError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelTraceRetrievalOperationRequest](src/AwsXRay/Requests/Operations/CancelTraceRetrievalOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[CancelTraceRetrievalError](src/AwsXRay/Errors/CancelTraceRetrievalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetIndexingRulesResult&gt; GetIndexingRules(GetIndexingRulesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all indexing rules. Indexing rules are used to determine the server-side sampling rate for spans ingested through the CloudWatchLogs destination and indexed by X-Ray. For more information, see Transaction Search.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.GetIndexingRules(new GetIndexingRulesOperationRequest());
    // TODO: Handle 'response' of type GetIndexingRulesResult
}
catch (ApiException<GetIndexingRulesError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIndexingRulesOperationRequest](src/AwsXRay/Requests/Operations/GetIndexingRulesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetIndexingRulesResult](src/AwsXRay/Models/GetIndexingRulesResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetIndexingRulesError](src/AwsXRay/Errors/GetIndexingRulesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetRetrievedTracesGraphResult&gt; GetRetrievedTracesGraph(GetRetrievedTracesGraphOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a service graph for traces based on the specified RetrievalToken from the CloudWatch log group generated by Transaction Search. This API does not initiate a retrieval job. You must first execute StartTraceRetrieval to obtain the required RetrievalToken. The trace graph describes services that process incoming requests and any downstream services they call, which may include Amazon Web Services resources, external APIs, or databases. The response is empty until the RetrievalStatus is COMPLETE. Retry the request after the status changes from RUNNING or SCHEDULED to COMPLETE to access the full service graph. When CloudWatch log is the destination, this API can support cross-account observability and service graph retrieval across linked accounts. For retrieving graphs from X-Ray directly as opposed to the Transaction-Search Log group, see GetTraceGraph.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.GetRetrievedTracesGraph(new GetRetrievedTracesGraphOperationRequest());
    // TODO: Handle 'response' of type GetRetrievedTracesGraphResult
}
catch (ApiException<GetRetrievedTracesGraphError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRetrievedTracesGraphOperationRequest](src/AwsXRay/Requests/Operations/GetRetrievedTracesGraphOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetRetrievedTracesGraphResult](src/AwsXRay/Models/GetRetrievedTracesGraphResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetRetrievedTracesGraphError](src/AwsXRay/Errors/GetRetrievedTracesGraphError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetTraceSegmentDestinationResult&gt; GetTraceSegmentDestination(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the current destination of data sent to PutTraceSegments and OpenTelemetry protocol (OTLP) endpoint. The Transaction Search feature requires a CloudWatchLogs destination. For more information, see Transaction Search and OpenTelemetry.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.GetTraceSegmentDestination();
    // TODO: Handle 'response' of type GetTraceSegmentDestinationResult
}
catch (ApiException<GetTraceSegmentDestinationError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTraceSegmentDestinationResult](src/AwsXRay/Models/GetTraceSegmentDestinationResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetTraceSegmentDestinationError](src/AwsXRay/Errors/GetTraceSegmentDestinationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListRetrievedTracesResult&gt; ListRetrievedTraces(ListRetrievedTracesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of traces for a given RetrievalToken from the CloudWatch log group generated by Transaction Search. For information on what each trace returns, see BatchGetTraces. This API does not initiate a retrieval process. To start a trace retrieval, use StartTraceRetrieval, which generates the required RetrievalToken. When the RetrievalStatus is not COMPLETE, the API will return an empty response. Retry the request once the retrieval has completed to access the full list of traces. For cross-account observability, this API can retrieve traces from linked accounts when CloudWatch log is set as the destination across relevant accounts. For more details, see CloudWatch cross-account observability. For retrieving data from X-Ray directly as opposed to the Transaction Search generated log group, see BatchGetTraces.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.ListRetrievedTraces(new ListRetrievedTracesOperationRequest());
    // TODO: Handle 'response' of type ListRetrievedTracesResult
}
catch (ApiException<ListRetrievedTracesError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListRetrievedTracesOperationRequest](src/AwsXRay/Requests/Operations/ListRetrievedTracesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListRetrievedTracesResult](src/AwsXRay/Models/ListRetrievedTracesResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[ListRetrievedTracesError](src/AwsXRay/Errors/ListRetrievedTracesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartTraceRetrievalResult&gt; StartTraceRetrieval(StartTraceRetrievalOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a trace retrieval process using the specified time range and for the given trace IDs in the Transaction Search generated CloudWatch log group. For more information, see Transaction Search. API returns a RetrievalToken, which can be used with ListRetrievedTraces or GetRetrievedTracesGraph to fetch results. Retrievals will time out after 60 minutes. To execute long time ranges, consider segmenting into multiple retrievals. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to retrieve data from a linked source account, as long as both accounts have transaction search enabled. For retrieving data from X-Ray directly as opposed to the Transaction-Search Log group, see BatchGetTraces.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.StartTraceRetrieval(new StartTraceRetrievalOperationRequest());
    // TODO: Handle 'response' of type StartTraceRetrievalResult
}
catch (ApiException<StartTraceRetrievalError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartTraceRetrievalOperationRequest](src/AwsXRay/Requests/Operations/StartTraceRetrievalOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartTraceRetrievalResult](src/AwsXRay/Models/StartTraceRetrievalResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[StartTraceRetrievalError](src/AwsXRay/Errors/StartTraceRetrievalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateIndexingRuleResult&gt; UpdateIndexingRule(UpdateIndexingRuleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Modifies an indexing rule’s configuration. Indexing rules are used for determining the sampling rate for spans indexed from CloudWatch Logs. For more information, see Transaction Search.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.UpdateIndexingRule(new UpdateIndexingRuleOperationRequest());
    // TODO: Handle 'response' of type UpdateIndexingRuleResult
}
catch (ApiException<UpdateIndexingRuleError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateIndexingRuleOperationRequest](src/AwsXRay/Requests/Operations/UpdateIndexingRuleOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateIndexingRuleResult](src/AwsXRay/Models/UpdateIndexingRuleResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[UpdateIndexingRuleError](src/AwsXRay/Errors/UpdateIndexingRuleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateTraceSegmentDestinationResult&gt; UpdateTraceSegmentDestination(UpdateTraceSegmentDestinationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Modifies the destination of data sent to PutTraceSegments. The Transaction Search feature requires the CloudWatchLogs destination. For more information, see Transaction Search.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.UpdateTraceSegmentDestination(
        new UpdateTraceSegmentDestinationOperationRequest());
    // TODO: Handle 'response' of type UpdateTraceSegmentDestinationResult
}
catch (ApiException<UpdateTraceSegmentDestinationError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateTraceSegmentDestinationOperationRequest](src/AwsXRay/Requests/Operations/UpdateTraceSegmentDestinationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateTraceSegmentDestinationResult](src/AwsXRay/Models/UpdateTraceSegmentDestinationResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[UpdateTraceSegmentDestinationError](src/AwsXRay/Errors/UpdateTraceSegmentDestinationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Putencryptionconfig

> Source: [Putencryptionconfig](src/AwsXRay/Api/Putencryptionconfig.cs)

<details>
<summary><code>Task&lt;PutEncryptionConfigResult&gt; PutEncryptionConfig(PutEncryptionConfigOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the encryption configuration for X-Ray data.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Putencryptionconfig.PutEncryptionConfig(new PutEncryptionConfigOperationRequest());
    // TODO: Handle 'response' of type PutEncryptionConfigResult
}
catch (ApiException<PutEncryptionConfigError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutEncryptionConfigOperationRequest](src/AwsXRay/Requests/Putencryptionconfig/PutEncryptionConfigOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutEncryptionConfigResult](src/AwsXRay/Models/PutEncryptionConfigResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[PutEncryptionConfigError](src/AwsXRay/Errors/PutEncryptionConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Putresourcepolicy

> Source: [Putresourcepolicy](src/AwsXRay/Api/Putresourcepolicy.cs)

<details>
<summary><code>Task&lt;PutResourcePolicyResult&gt; PutResourcePolicy(PutResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be unique within that account. The maximum size of each resource policy is 5KB.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Putresourcepolicy.PutResourcePolicy(new PutResourcePolicyOperationRequest());
    // TODO: Handle 'response' of type PutResourcePolicyResult
}
catch (ApiException<PutResourcePolicyError> ex)
{
    if (ex.Error.TryGetInvalidPolicyRevisionIdException(out var error))
    {
        // TODO: Handle 'error' of type InvalidPolicyRevisionIdException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutResourcePolicyOperationRequest](src/AwsXRay/Requests/Putresourcepolicy/PutResourcePolicyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutResourcePolicyResult](src/AwsXRay/Models/PutResourcePolicyResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[PutResourcePolicyError](src/AwsXRay/Errors/PutResourcePolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sampling

> Source: [Sampling](src/AwsXRay/Api/Sampling.cs)

<details>
<summary><code>Task&lt;GetSamplingRulesResult&gt; GetSamplingRules2(GetSamplingRules2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all sampling rules.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sampling.GetSamplingRules2(new GetSamplingRules2Request());
    // TODO: Handle 'response' of type GetSamplingRulesResult
}
catch (ApiException<GetSamplingRules2Error> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSamplingRules2Request](src/AwsXRay/Requests/Sampling/GetSamplingRules2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSamplingRulesResult](src/AwsXRay/Models/GetSamplingRulesResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetSamplingRules2Error](src/AwsXRay/Errors/GetSamplingRules2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Samplingstatisticsummaries

> Source: [Samplingstatisticsummaries](src/AwsXRay/Api/Samplingstatisticsummaries.cs)

<details>
<summary><code>Task&lt;GetSamplingStatisticSummariesResult&gt; GetSamplingStatisticSummaries(GetSamplingStatisticSummariesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about recent sampling results for all sampling rules.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Samplingstatisticsummaries.GetSamplingStatisticSummaries(
        new GetSamplingStatisticSummariesRequest());
    // TODO: Handle 'response' of type GetSamplingStatisticSummariesResult
}
catch (ApiException<GetSamplingStatisticSummariesError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSamplingStatisticSummariesRequest](src/AwsXRay/Requests/Samplingstatisticsummaries/GetSamplingStatisticSummariesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSamplingStatisticSummariesResult](src/AwsXRay/Models/GetSamplingStatisticSummariesResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetSamplingStatisticSummariesError](src/AwsXRay/Errors/GetSamplingStatisticSummariesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Samplingtargets

> Source: [Samplingtargets](src/AwsXRay/Api/Samplingtargets.cs)

<details>
<summary><code>Task&lt;GetSamplingTargetsResult&gt; GetSamplingTargets(GetSamplingTargetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requests a sampling quota for rules that the service is using to sample requests.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Samplingtargets.GetSamplingTargets(new GetSamplingTargetsRequest());
    // TODO: Handle 'response' of type GetSamplingTargetsResult
}
catch (ApiException<GetSamplingTargetsError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSamplingTargetsRequest](src/AwsXRay/Requests/Samplingtargets/GetSamplingTargetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSamplingTargetsResult](src/AwsXRay/Models/GetSamplingTargetsResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetSamplingTargetsError](src/AwsXRay/Errors/GetSamplingTargetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ServiceGraph

> Source: [ServiceGraph](src/AwsXRay/Api/ServiceGraph.cs)

<details>
<summary><code>Task&lt;GetServiceGraphResult&gt; GetServiceGraph(GetServiceGraphRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the Amazon Web Services X-Ray SDK. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ServiceGraph.GetServiceGraph(new GetServiceGraphRequest());
    // TODO: Handle 'response' of type GetServiceGraphResult
}
catch (ApiException<GetServiceGraphError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetServiceGraphRequest](src/AwsXRay/Requests/ServiceGraph/GetServiceGraphRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetServiceGraphResult](src/AwsXRay/Models/GetServiceGraphResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetServiceGraphError](src/AwsXRay/Errors/GetServiceGraphError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TagResource

> Source: [TagResource](src/AwsXRay/Api/TagResource.cs)

<details>
<summary><code>Task&lt;object&gt; TagResourceInvoke(TagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TagResource.TagResourceInvoke(new TagResourceOperationRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<TagResourceError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TagResourceOperationRequest](src/AwsXRay/Requests/TagResource/TagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[TagResourceError](src/AwsXRay/Errors/TagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Telemetryrecords

> Source: [Telemetryrecords](src/AwsXRay/Api/Telemetryrecords.cs)

<details>
<summary><code>Task&lt;object&gt; PutTelemetryRecords(PutTelemetryRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by the Amazon Web Services X-Ray daemon to upload telemetry.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Telemetryrecords.PutTelemetryRecords(new PutTelemetryRecordsRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<PutTelemetryRecordsError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutTelemetryRecordsRequest](src/AwsXRay/Requests/Telemetryrecords/PutTelemetryRecordsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[PutTelemetryRecordsError](src/AwsXRay/Errors/PutTelemetryRecordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TimeseriesservicestatisticsApi

> Source: [TimeseriesservicestatisticsApi](src/AwsXRay/Api/TimeseriesservicestatisticsApi.cs)

<details>
<summary><code>Task&lt;GetTimeSeriesServiceStatisticsResult&gt; GetTimeSeriesServiceStatistics(GetTimeSeriesServiceStatisticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an aggregation of service statistics defined by a specific time range.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TimeseriesservicestatisticsApi.GetTimeSeriesServiceStatistics(
        new GetTimeSeriesServiceStatisticsRequest());
    // TODO: Handle 'response' of type GetTimeSeriesServiceStatisticsResult
}
catch (ApiException<GetTimeSeriesServiceStatisticsError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTimeSeriesServiceStatisticsRequest](src/AwsXRay/Requests/TimeseriesservicestatisticsApi/GetTimeSeriesServiceStatisticsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTimeSeriesServiceStatisticsResult](src/AwsXRay/Models/GetTimeSeriesServiceStatisticsResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetTimeSeriesServiceStatisticsError](src/AwsXRay/Errors/GetTimeSeriesServiceStatisticsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tracegraph

> Source: [Tracegraph](src/AwsXRay/Api/Tracegraph.cs)

<details>
<summary><code>Task&lt;GetTraceGraphResult&gt; GetTraceGraph(GetTraceGraphRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a service graph for one or more specific trace IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracegraph.GetTraceGraph(new GetTraceGraphRequest());
    // TODO: Handle 'response' of type GetTraceGraphResult
}
catch (ApiException<GetTraceGraphError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTraceGraphRequest](src/AwsXRay/Requests/Tracegraph/GetTraceGraphRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTraceGraphResult](src/AwsXRay/Models/GetTraceGraphResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetTraceGraphError](src/AwsXRay/Errors/GetTraceGraphError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Traces

> Source: [Traces](src/AwsXRay/Api/Traces.cs)

<details>
<summary><code>Task&lt;BatchGetTracesResult&gt; BatchGetTraces(BatchGetTracesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You cannot find traces through this API if Transaction Search is enabled since trace is not indexed in X-Ray. Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use GetTraceSummaries to get a list of trace IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.BatchGetTraces(new BatchGetTracesRequest());
    // TODO: Handle 'response' of type BatchGetTracesResult
}
catch (ApiException<BatchGetTracesError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BatchGetTracesRequest](src/AwsXRay/Requests/Traces/BatchGetTracesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchGetTracesResult](src/AwsXRay/Models/BatchGetTracesResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[BatchGetTracesError](src/AwsXRay/Errors/BatchGetTracesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetTraceSummariesResult&gt; GetTraceSummaries(GetTraceSummariesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through api.example.com: service("api.example.com") This filter expression finds traces that have an annotation named account with the value 12345: annotation.account = "12345" For a full list of indexed fields and keywords that you can use in filter expressions, see Use filter expressions in the Amazon Web Services X-Ray Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.GetTraceSummaries(new GetTraceSummariesRequest());
    // TODO: Handle 'response' of type GetTraceSummariesResult
}
catch (ApiException<GetTraceSummariesError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTraceSummariesRequest](src/AwsXRay/Requests/Traces/GetTraceSummariesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTraceSummariesResult](src/AwsXRay/Models/GetTraceSummariesResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetTraceSummariesError](src/AwsXRay/Errors/GetTraceSummariesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tracesegments

> Source: [Tracesegments](src/AwsXRay/Api/Tracesegments.cs)

<details>
<summary><code>Task&lt;PutTraceSegmentsResult&gt; PutTraceSegments(PutTraceSegmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads segment documents to Amazon Web Services X-Ray. A segment document can be a completed segment, an in-progress segment, or an array of subsegments. Segments must include the following fields. For the full segment document schema, see Amazon Web Services X-Ray Segment Documents in the Amazon Web Services X-Ray Developer Guide. Required segment document fields name - The name of the service that handled the request. id - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits. trace_id - A unique identifier that connects all segments and subsegments originating from a single client request. start_time - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, 1480615200.010 or 1.480615200010E9. end_time - Time the segment or subsegment was closed. For example, 1480615200.090 or 1.480615200090E9. Specify either an end_time or in_progress. in_progress - Set to true instead of specifying an end_time to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, t

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracesegments.PutTraceSegments(new PutTraceSegmentsRequest());
    // TODO: Handle 'response' of type PutTraceSegmentsResult
}
catch (ApiException<PutTraceSegmentsError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutTraceSegmentsRequest](src/AwsXRay/Requests/Tracesegments/PutTraceSegmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutTraceSegmentsResult](src/AwsXRay/Models/PutTraceSegmentsResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[PutTraceSegmentsError](src/AwsXRay/Errors/PutTraceSegmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tracesummaries

> Source: [Tracesummaries](src/AwsXRay/Api/Tracesummaries.cs)

<details>
<summary><code>Task&lt;GetTraceSummariesResult&gt; GetTraceSummaries2(GetTraceSummaries2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through api.example.com: service("api.example.com") This filter expression finds traces that have an annotation named account with the value 12345: annotation.account = "12345" For a full list of indexed fields and keywords that you can use in filter expressions, see Use filter expressions in the Amazon Web Services X-Ray Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tracesummaries.GetTraceSummaries2(new GetTraceSummaries2Request());
    // TODO: Handle 'response' of type GetTraceSummariesResult
}
catch (ApiException<GetTraceSummaries2Error> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTraceSummaries2Request](src/AwsXRay/Requests/Tracesummaries/GetTraceSummaries2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTraceSummariesResult](src/AwsXRay/Models/GetTraceSummariesResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[GetTraceSummaries2Error](src/AwsXRay/Errors/GetTraceSummaries2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UntagResource

> Source: [UntagResource](src/AwsXRay/Api/UntagResource.cs)

<details>
<summary><code>Task&lt;object&gt; UntagResourceInvoke(UntagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an aws: prefix).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UntagResource.UntagResourceInvoke(new UntagResourceOperationRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<UntagResourceError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UntagResourceOperationRequest](src/AwsXRay/Requests/UntagResource/UntagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[UntagResourceError](src/AwsXRay/Errors/UntagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UpdateGroup

> Source: [UpdateGroup](src/AwsXRay/Api/UpdateGroup.cs)

<details>
<summary><code>Task&lt;UpdateGroupResult&gt; UpdateGroupInvoke(UpdateGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a group resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UpdateGroup.UpdateGroupInvoke(new UpdateGroupOperationRequest());
    // TODO: Handle 'response' of type UpdateGroupResult
}
catch (ApiException<UpdateGroupError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateGroupOperationRequest](src/AwsXRay/Requests/UpdateGroup/UpdateGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateGroupResult](src/AwsXRay/Models/UpdateGroupResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[UpdateGroupError](src/AwsXRay/Errors/UpdateGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Updatesamplingrule

> Source: [Updatesamplingrule](src/AwsXRay/Api/Updatesamplingrule.cs)

<details>
<summary><code>Task&lt;UpdateSamplingRuleResult&gt; UpdateSamplingRule(UpdateSamplingRuleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Modifies a sampling rule's configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Updatesamplingrule.UpdateSamplingRule(new UpdateSamplingRuleOperationRequest());
    // TODO: Handle 'response' of type UpdateSamplingRuleResult
}
catch (ApiException<UpdateSamplingRuleError> ex)
{
    if (ex.Error.TryGetInvalidRequestException(out var error))
    {
        // TODO: Handle 'error' of type InvalidRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSamplingRuleOperationRequest](src/AwsXRay/Requests/Updatesamplingrule/UpdateSamplingRuleOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateSamplingRuleResult](src/AwsXRay/Models/UpdateSamplingRuleResult.cs)</code>

**OnError**: <code>[ApiException](src/AwsXRay/Core/Exceptions/ApiException.cs)&lt;[UpdateSamplingRuleError](src/AwsXRay/Errors/UpdateSamplingRuleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

