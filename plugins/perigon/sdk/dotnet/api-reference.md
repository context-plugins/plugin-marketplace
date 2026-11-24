# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [PerigonClient](src/Perigon/PerigonClient.cs)

## AiAdvancedSearch

> Source: [AiAdvancedSearch](src/Perigon/Api/AiAdvancedSearch.cs)

<details>
<summary><code>Task&lt;SummarySearchResult&gt; SearchSummarizer(SearchSummarizerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Produce one concise summary from up to 100 articles matching the supplied filters. Use the prompt and summarization fields to control which insights are highlighted. When method is CLUSTERS, article-only parameters such as articleId, page, sortBy, watchlist, reprintGroupId, exclusion filters, prefixTaxonomy, and highlighting options are ignored.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AiAdvancedSearch.SearchSummarizer(new SearchSummarizerRequest
    {
        Body = new SummaryBody(),
    });
    // TODO: Handle 'response' of type SummarySearchResult
}
catch (ApiException<SearchSummarizerError> ex)
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

<code>[SearchSummarizerRequest](src/Perigon/Requests/AiAdvancedSearch/SearchSummarizerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SummarySearchResult](src/Perigon/Models/SummarySearchResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[SearchSummarizerError](src/Perigon/Errors/SearchSummarizerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ContactPoints

> Source: [ContactPoints](src/Perigon/Api/ContactPoints.cs)

<details>
<summary><code>Task&lt;ContactPointResult&gt; CreateContactPoint(CreateContactPointRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new contact point under the organization associated with the API key. Only WEBHOOK contact points can be created via the API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactPoints.CreateContactPoint(new CreateContactPointRequest
    {
        Body = new ContactPointRequestBody { Type = Type1.Email, Name = "some example string" },
    });
    // TODO: Handle 'response' of type ContactPointResult
}
catch (ApiException<CreateContactPointError> ex)
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

<code>[CreateContactPointRequest](src/Perigon/Requests/ContactPoints/CreateContactPointRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactPointResult](src/Perigon/Models/ContactPointResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[CreateContactPointError](src/Perigon/Errors/CreateContactPointError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactPointResult&gt; DeleteContactPoint(DeleteContactPointRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a contact point owned by the organization associated with the API key. Contact points with historical notifications are archived rather than hard-deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactPoints.DeleteContactPoint(new DeleteContactPointRequest
    {
        Uuid = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ContactPointResult
}
catch (ApiException<DeleteContactPointError> ex)
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

<code>[DeleteContactPointRequest](src/Perigon/Requests/ContactPoints/DeleteContactPointRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactPointResult](src/Perigon/Models/ContactPointResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[DeleteContactPointError](src/Perigon/Errors/DeleteContactPointError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactPointResult&gt; GetContactPoint(GetContactPointRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a contact point by UUID. Only returns contact points owned by the organization associated with the API key. FASTN contact points are not accessible via this endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactPoints.GetContactPoint(new GetContactPointRequest
    {
        Uuid = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ContactPointResult
}
catch (ApiException<GetContactPointError> ex)
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

<code>[GetContactPointRequest](src/Perigon/Requests/ContactPoints/GetContactPointRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactPointResult](src/Perigon/Models/ContactPointResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[GetContactPointError](src/Perigon/Errors/GetContactPointError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactPointListResult&gt; ListContactPoints(ListContactPointsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List contact points owned by the organization associated with the API key. Supports filtering by status and type. FASTN contact points are excluded from results.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactPoints.ListContactPoints(new ListContactPointsRequest
    {
        SortBy = ContactPointSortBy.CreatedAt,
        SortOrder = SortOrder.Asc,
    });
    // TODO: Handle 'response' of type ContactPointListResult
}
catch (ApiException<ListContactPointsError> ex)
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

<code>[ListContactPointsRequest](src/Perigon/Requests/ContactPoints/ListContactPointsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactPointListResult](src/Perigon/Models/ContactPointListResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[ListContactPointsError](src/Perigon/Errors/ListContactPointsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactPointResult&gt; UpdateContactPoint(UpdateContactPointRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially update a contact point owned by the organization associated with the API key. Only provided fields will be updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContactPoints.UpdateContactPoint(new UpdateContactPointRequest
    {
        Uuid = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new ContactPointUpdateBody(),
    });
    // TODO: Handle 'response' of type ContactPointResult
}
catch (ApiException<UpdateContactPointError> ex)
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

<code>[UpdateContactPointRequest](src/Perigon/Requests/ContactPoints/UpdateContactPointRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactPointResult](src/Perigon/Models/ContactPointResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[UpdateContactPointError](src/Perigon/Errors/UpdateContactPointError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Monitors

> Source: [Monitors](src/Perigon/Api/Monitors.cs)

<details>
<summary><code>Task&lt;MonitorResult&gt; ActivateMonitorApi(ActivateMonitorApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activate a monitor, starting its processing pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.ActivateMonitorApi(new ActivateMonitorApiRequest
    {
        Uuid = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MonitorResult
}
catch (ApiException<ActivateMonitorApiError> ex)
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

<code>[ActivateMonitorApiRequest](src/Perigon/Requests/Monitors/ActivateMonitorApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResult](src/Perigon/Models/MonitorResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[ActivateMonitorApiError](src/Perigon/Errors/ActivateMonitorApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MonitorResult&gt; ArchiveMonitorApi(ArchiveMonitorApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a monitor. Archived monitors are excluded from list results by default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.ArchiveMonitorApi(new ArchiveMonitorApiRequest
    {
        Uuid = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MonitorResult
}
catch (ApiException<ArchiveMonitorApiError> ex)
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

<code>[ArchiveMonitorApiRequest](src/Perigon/Requests/Monitors/ArchiveMonitorApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResult](src/Perigon/Models/MonitorResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[ArchiveMonitorApiError](src/Perigon/Errors/ArchiveMonitorApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MonitorResult&gt; CreateMonitorApi(CreateMonitorApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new AI monitor. Only AI_SIGNAL type is supported; status is required and accepts ACTIVE or DRAFT.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.CreateMonitorApi(new CreateMonitorApiRequest
    {
        Body = new SignalApiCreateBody
        {
            Name = "some example string",
            ClassificationType = ClassificationType2.Event,
            MonitoringObjective = "some example string",
            DataSchema = new SignalMonitoringPlanDataSchema
            {
                Schema = new Dictionary<string, SignalMonitoringPlanDataSchemaProperty>
                {
                    ["key"] = new SignalMonitoringPlanDataSchemaProperty(),
                },
            },
            Query = new ComplexAllEndpointQuery(),
        },
    });
    // TODO: Handle 'response' of type MonitorResult
}
catch (ApiException<CreateMonitorApiError> ex)
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

<code>[CreateMonitorApiRequest](src/Perigon/Requests/Monitors/CreateMonitorApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResult](src/Perigon/Models/MonitorResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[CreateMonitorApiError](src/Perigon/Errors/CreateMonitorApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MonitorResult&gt; GetMonitorApi(GetMonitorApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a monitor by UUID for the organization associated with the API key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.GetMonitorApi(new GetMonitorApiRequest
    {
        Uuid = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MonitorResult
}
catch (ApiException<GetMonitorApiError> ex)
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

<code>[GetMonitorApiRequest](src/Perigon/Requests/Monitors/GetMonitorApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResult](src/Perigon/Models/MonitorResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[GetMonitorApiError](src/Perigon/Errors/GetMonitorApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MonitorEventListResult&gt; ListMonitorEventsApi(ListMonitorEventsApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List structured events emitted by a monitor. Events represent individual matches detected by the monitor (e.g. a news article matching the monitor's criteria) and are produced asynchronously as new content is ingested.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.ListMonitorEventsApi(new ListMonitorEventsApiRequest
    {
        Uuid = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        SortBy = "some example string",
        SortOrder = SortOrder.Asc,
    });
    // TODO: Handle 'response' of type MonitorEventListResult
}
catch (ApiException<ListMonitorEventsApiError> ex)
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

<code>[ListMonitorEventsApiRequest](src/Perigon/Requests/Monitors/ListMonitorEventsApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorEventListResult](src/Perigon/Models/MonitorEventListResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[ListMonitorEventsApiError](src/Perigon/Errors/ListMonitorEventsApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MonitorNewsletterListResult&gt; ListMonitorNewslettersApi(ListMonitorNewslettersApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List newsletters generated for a monitor. Newsletters bundle a monitor's recent events into a human-readable digest and are produced on the monitor's configured schedule.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.ListMonitorNewslettersApi(new ListMonitorNewslettersApiRequest
    {
        Uuid = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        SortBy = "some example string",
        SortOrder = SortOrder.Asc,
    });
    // TODO: Handle 'response' of type MonitorNewsletterListResult
}
catch (ApiException<ListMonitorNewslettersApiError> ex)
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

<code>[ListMonitorNewslettersApiRequest](src/Perigon/Requests/Monitors/ListMonitorNewslettersApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorNewsletterListResult](src/Perigon/Models/MonitorNewsletterListResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[ListMonitorNewslettersApiError](src/Perigon/Errors/ListMonitorNewslettersApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MonitorSummaryListResult&gt; ListMonitorSummariesApi(ListMonitorSummariesApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List AI-generated summaries produced for a monitor as matching content is processed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.ListMonitorSummariesApi(new ListMonitorSummariesApiRequest
    {
        Uuid = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        SortBy = "some example string",
        SortOrder = SortOrder.Asc,
    });
    // TODO: Handle 'response' of type MonitorSummaryListResult
}
catch (ApiException<ListMonitorSummariesApiError> ex)
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

<code>[ListMonitorSummariesApiRequest](src/Perigon/Requests/Monitors/ListMonitorSummariesApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorSummaryListResult](src/Perigon/Models/MonitorSummaryListResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[ListMonitorSummariesApiError](src/Perigon/Errors/ListMonitorSummariesApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MonitorListResult&gt; ListMonitorsApi(ListMonitorsApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List AI monitors for the organization associated with the API key. Excludes archived monitors by default. Use the status parameter to filter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.ListMonitorsApi(new ListMonitorsApiRequest
    {
        SortBy = "some example string",
        SortOrder = SortOrder.Asc,
    });
    // TODO: Handle 'response' of type MonitorListResult
}
catch (ApiException<ListMonitorsApiError> ex)
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

<code>[ListMonitorsApiRequest](src/Perigon/Requests/Monitors/ListMonitorsApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorListResult](src/Perigon/Models/MonitorListResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[ListMonitorsApiError](src/Perigon/Errors/ListMonitorsApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MonitorResult&gt; PauseMonitorApi(PauseMonitorApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pause a monitor, stopping its processing pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.PauseMonitorApi(new PauseMonitorApiRequest
    {
        Uuid = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MonitorResult
}
catch (ApiException<PauseMonitorApiError> ex)
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

<code>[PauseMonitorApiRequest](src/Perigon/Requests/Monitors/PauseMonitorApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResult](src/Perigon/Models/MonitorResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[PauseMonitorApiError](src/Perigon/Errors/PauseMonitorApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MonitorResult&gt; UpdateMonitorApi(UpdateMonitorApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially update a monitor. Only provided fields are modified. Use /activate, /pause, or DELETE to change monitor status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Monitors.UpdateMonitorApi(new UpdateMonitorApiRequest
    {
        Uuid = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new SignalApiUpdateBody
        {
            Name = "some example string",
            ClassificationType = ClassificationType1.Event,
            MonitoringObjective = "some example string",
            DataSchema = new SignalMonitoringPlanDataSchema
            {
                Schema = new Dictionary<string, SignalMonitoringPlanDataSchemaProperty>
                {
                    ["key"] = new SignalMonitoringPlanDataSchemaProperty(),
                },
            },
            EntityGroups = [new EntityGroup { GroupReference = "some example string" }],
            Query = new ComplexAllEndpointQuery(),
            ContactPointIds = [Guid.Parse("00000000-0000-0000-0000-000000000000")],
        },
    });
    // TODO: Handle 'response' of type MonitorResult
}
catch (ApiException<UpdateMonitorApiError> ex)
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

<code>[UpdateMonitorApiRequest](src/Perigon/Requests/Monitors/UpdateMonitorApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResult](src/Perigon/Models/MonitorResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[UpdateMonitorApiError](src/Perigon/Errors/UpdateMonitorApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## NewsStories

> Source: [NewsStories](src/Perigon/Api/NewsStories.cs)

<details>
<summary><code>Task&lt;ArticleRefreshJobResponse&gt; GetArticleRefreshJob(GetArticleRefreshJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the job status together with whatever per-article results have been computed so far. Results are immutable snapshots taken when each article was processed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsStories.GetArticleRefreshJob(new GetArticleRefreshJobRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ArticleRefreshJobResponse
}
catch (ApiException<GetArticleRefreshJobError> ex)
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

<code>[GetArticleRefreshJobRequest](src/Perigon/Requests/NewsStories/GetArticleRefreshJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ArticleRefreshJobResponse](src/Perigon/Models/ArticleRefreshJobResponse.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[GetArticleRefreshJobError](src/Perigon/Errors/GetArticleRefreshJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StatResult&gt; GetStoryCounts(GetStoryCountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Count matching stories by their creation time. Results can be grouped by hour, day, week, or month and filtered by supported story attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsStories.GetStoryCounts(new GetStoryCountsRequest { SplitBy = SplitBy.Hour });
    // TODO: Handle 'response' of type StatResult
}
catch (ApiException<GetStoryCountsError> ex)
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

<code>[GetStoryCountsRequest](src/Perigon/Requests/NewsStories/GetStoryCountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatResult](src/Perigon/Models/StatResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[GetStoryCountsError](src/Perigon/Errors/GetStoryCountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoryHistoryResult&gt; GetStoryHistory(GetStoryHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve previous generated versions of stories and their evolving summaries, key points, questions, and changelogs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsStories.GetStoryHistory(new GetStoryHistoryRequest());
    // TODO: Handle 'response' of type StoryHistoryResult
}
catch (ApiException<GetStoryHistoryError> ex)
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

<code>[GetStoryHistoryRequest](src/Perigon/Requests/NewsStories/GetStoryHistoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoryHistoryResult](src/Perigon/Models/StoryHistoryResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[GetStoryHistoryError](src/Perigon/Errors/GetStoryHistoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ArticleRefreshPeekResponse&gt; PeekArticleRefresh(PeekArticleRefreshRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns whatever refreshed article data is already cached, on a best-effort basis, without scheduling any processing or creating a job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsStories.PeekArticleRefresh(new PeekArticleRefreshRequest
    {
        Body = new ArticleRefreshSubmitRequest { ArticleIds = ["some example string"] },
    });
    // TODO: Handle 'response' of type ArticleRefreshPeekResponse
}
catch (ApiException<PeekArticleRefreshError> ex)
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

<code>[PeekArticleRefreshRequest](src/Perigon/Requests/NewsStories/PeekArticleRefreshRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ArticleRefreshPeekResponse](src/Perigon/Models/ArticleRefreshPeekResponse.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[PeekArticleRefreshError](src/Perigon/Errors/PeekArticleRefreshError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QuerySearchResult&gt; SearchArticles(SearchArticlesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search and filter all news articles available via the Perigon API. The result includes a list of individual articles that were matched to your specific criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsStories.SearchArticles(new SearchArticlesRequest());
    // TODO: Handle 'response' of type QuerySearchResult
}
catch (ApiException<SearchArticlesError> ex)
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

<code>[SearchArticlesRequest](src/Perigon/Requests/NewsStories/SearchArticlesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QuerySearchResult](src/Perigon/Models/QuerySearchResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[SearchArticlesError](src/Perigon/Errors/SearchArticlesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StorySearchResult&gt; SearchStories(SearchStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Track evolving narratives and top news headlines with the '**Stories**' endpoint — it returns structured clusters of related articles with summaries, key points, sentiment scores, and metadata on top people, companies, topics, countries, and categories. Use it to monitor how news stories develop over time, who and what they impact, and where they're gaining traction globally.

Each story represents a cluster of related articles grouped during processing. Articles are assigned to a single story, identified by the `clusterId` field. Once a story reaches five articles, a story title is automatically generated based on its content. Stories update as new coverage is processed and key details evolve.

To fetch all articles within a specific story, query the `/articles/all` endpoint using the `clusterId` parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsStories.SearchStories(new SearchStoriesRequest());
    // TODO: Handle 'response' of type StorySearchResult
}
catch (ApiException<SearchStoriesError> ex)
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

<code>[SearchStoriesRequest](src/Perigon/Requests/NewsStories/SearchStoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StorySearchResult](src/Perigon/Models/StorySearchResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[SearchStoriesError](src/Perigon/Errors/SearchStoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ArticleRefreshJobResponse&gt; SubmitArticleRefreshJob(SubmitArticleRefreshJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits article ids for background refresh. Articles resolvable from a fresh cache are returned immediately; the rest are scheduled for processing. Poll the job status endpoint for results.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsStories.SubmitArticleRefreshJob(new SubmitArticleRefreshJobRequest
    {
        Body = new ArticleRefreshSubmitRequest { ArticleIds = ["some example string"] },
    });
    // TODO: Handle 'response' of type ArticleRefreshJobResponse
}
catch (ApiException<SubmitArticleRefreshJobError> ex)
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

<code>[SubmitArticleRefreshJobRequest](src/Perigon/Requests/NewsStories/SubmitArticleRefreshJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ArticleRefreshJobResponse](src/Perigon/Models/ArticleRefreshJobResponse.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[SubmitArticleRefreshJobError](src/Perigon/Errors/SubmitArticleRefreshJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ArticlesVectorSearchResult&gt; VectorSearchArticles(VectorSearchArticlesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a natural language search over news articles from the past 6 months using semantic relevance. The result includes a list of articles most closely matched to your query intent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsStories.VectorSearchArticles(new VectorSearchArticlesRequest
    {
        Body = new ArticleSearchParams { Prompt = "some example string" },
    });
    // TODO: Handle 'response' of type ArticlesVectorSearchResult
}
catch (ApiException<VectorSearchArticlesError> ex)
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

<code>[VectorSearchArticlesRequest](src/Perigon/Requests/NewsStories/VectorSearchArticlesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ArticlesVectorSearchResult](src/Perigon/Models/ArticlesVectorSearchResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[VectorSearchArticlesError](src/Perigon/Errors/VectorSearchArticlesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SourceGroups

> Source: [SourceGroups](src/Perigon/Api/SourceGroups.cs)

<details>
<summary><code>Task&lt;SourceGroupResult&gt; CreateSourceGroup(CreateSourceGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new source group under the organization associated with the API key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SourceGroups.CreateSourceGroup(new CreateSourceGroupRequest
    {
        Body = new CreateSourceGroupParams { Name = "some example string", Domains = ["some example string"] },
    });
    // TODO: Handle 'response' of type SourceGroupResult
}
catch (ApiException<CreateSourceGroupError> ex)
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

<code>[CreateSourceGroupRequest](src/Perigon/Requests/SourceGroups/CreateSourceGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SourceGroupResult](src/Perigon/Models/SourceGroupResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[CreateSourceGroupError](src/Perigon/Errors/CreateSourceGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SourceGroupResult&gt; DeleteSourceGroup(DeleteSourceGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a source group owned by the organization associated with the API key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SourceGroups.DeleteSourceGroup(new DeleteSourceGroupRequest { Id = 1 });
    // TODO: Handle 'response' of type SourceGroupResult
}
catch (ApiException<DeleteSourceGroupError> ex)
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

<code>[DeleteSourceGroupRequest](src/Perigon/Requests/SourceGroups/DeleteSourceGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SourceGroupResult](src/Perigon/Models/SourceGroupResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[DeleteSourceGroupError](src/Perigon/Errors/DeleteSourceGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SourceGroupResult&gt; GetSourceGroup(GetSourceGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a source group by ID. Only returns source groups owned by the organization associated with the API key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SourceGroups.GetSourceGroup(new GetSourceGroupRequest { Id = 1 });
    // TODO: Handle 'response' of type SourceGroupResult
}
catch (ApiException<GetSourceGroupError> ex)
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

<code>[GetSourceGroupRequest](src/Perigon/Requests/SourceGroups/GetSourceGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SourceGroupResult](src/Perigon/Models/SourceGroupResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[GetSourceGroupError](src/Perigon/Errors/GetSourceGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SourceGroupListResult&gt; ListSourceGroups(ListSourceGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List source groups owned by the organization associated with the API key, as well as publicly visible source groups. Supports filtering by name and domain.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SourceGroups.ListSourceGroups(new ListSourceGroupsRequest
    {
        SortBy = SourceGroupSortBy.Id,
        SortOrder = SortOrder.Asc,
    });
    // TODO: Handle 'response' of type SourceGroupListResult
}
catch (ApiException<ListSourceGroupsError> ex)
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

<code>[ListSourceGroupsRequest](src/Perigon/Requests/SourceGroups/ListSourceGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SourceGroupListResult](src/Perigon/Models/SourceGroupListResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[ListSourceGroupsError](src/Perigon/Errors/ListSourceGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SourceGroupResolveResult&gt; ResolveSourceGroups(ResolveSourceGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve source groups by name. For each name, returns the organization's private source group if one exists, otherwise falls back to the matching public source group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SourceGroups.ResolveSourceGroups(new ResolveSourceGroupsRequest());
    // TODO: Handle 'response' of type SourceGroupResolveResult
}
catch (ApiException<ResolveSourceGroupsError> ex)
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

<code>[ResolveSourceGroupsRequest](src/Perigon/Requests/SourceGroups/ResolveSourceGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SourceGroupResolveResult](src/Perigon/Models/SourceGroupResolveResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[ResolveSourceGroupsError](src/Perigon/Errors/ResolveSourceGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SourceGroupResult&gt; UpdateSourceGroup(UpdateSourceGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially update a source group owned by the organization associated with the API key. Only provided fields will be updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SourceGroups.UpdateSourceGroup(new UpdateSourceGroupRequest
    {
        Id = 1,
        Body = new PatchSourceGroupParams(),
    });
    // TODO: Handle 'response' of type SourceGroupResult
}
catch (ApiException<UpdateSourceGroupError> ex)
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

<code>[UpdateSourceGroupRequest](src/Perigon/Requests/SourceGroups/UpdateSourceGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SourceGroupResult](src/Perigon/Models/SourceGroupResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[UpdateSourceGroupError](src/Perigon/Errors/UpdateSourceGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SupplementalEndpoints

> Source: [SupplementalEndpoints](src/Perigon/Api/SupplementalEndpoints.cs)

<details>
<summary><code>Task&lt;Journalist&gt; GetJournalistById(GetJournalistByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find additional details on a journalist by using the journalist ID found in an article response object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupplementalEndpoints.GetJournalistById(new GetJournalistByIdRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type Journalist
}
catch (ApiException<GetJournalistByIdError> ex)
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

<code>[GetJournalistByIdRequest](src/Perigon/Requests/SupplementalEndpoints/GetJournalistByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Journalist](src/Perigon/Models/Journalist.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[GetJournalistByIdError](src/Perigon/Errors/GetJournalistByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompanySearchResult&gt; SearchCompanies(SearchCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Browse or search for companies Perigon tracks using name, domain, ticker symbol, industry, and more. Supports Boolean search logic and filtering by metadata such as country, exchange, employee count, and IPO date.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupplementalEndpoints.SearchCompanies(new SearchCompaniesRequest());
    // TODO: Handle 'response' of type CompanySearchResult
}
catch (ApiException<SearchCompaniesError> ex)
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

<code>[SearchCompaniesRequest](src/Perigon/Requests/SupplementalEndpoints/SearchCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanySearchResult](src/Perigon/Models/CompanySearchResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[SearchCompaniesError](src/Perigon/Errors/SearchCompaniesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JournalistSearchResult&gt; SearchJournalists(SearchJournalistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search journalists using broad search attributes. Our database contains over 230,000 journalists from around the world and is refreshed frequently.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupplementalEndpoints.SearchJournalists(new SearchJournalistsRequest());
    // TODO: Handle 'response' of type JournalistSearchResult
}
catch (ApiException<SearchJournalistsError> ex)
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

<code>[SearchJournalistsRequest](src/Perigon/Requests/SupplementalEndpoints/SearchJournalistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JournalistSearchResult](src/Perigon/Models/JournalistSearchResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[SearchJournalistsError](src/Perigon/Errors/SearchJournalistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PeopleSearchResult&gt; SearchPeople(SearchPeopleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search and retrieve additional information on known persons that exist within Perigon's entity database and as referenced in any article response object. Our database contains over 650,000 people from around the world and is refreshed frequently. People data is derived from Wikidata and includes a wikidataId field that can be used to lookup even more information on Wikidata's website.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupplementalEndpoints.SearchPeople(new SearchPeopleRequest());
    // TODO: Handle 'response' of type PeopleSearchResult
}
catch (ApiException<SearchPeopleError> ex)
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

<code>[SearchPeopleRequest](src/Perigon/Requests/SupplementalEndpoints/SearchPeopleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PeopleSearchResult](src/Perigon/Models/PeopleSearchResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[SearchPeopleError](src/Perigon/Errors/SearchPeopleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SourceSearchResult&gt; SearchSources(SearchSourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search and filter the 200,000+ media sources available via the Perigon API. The result includes a list of individual media sources that were matched to your specific criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupplementalEndpoints.SearchSources(new SearchSourcesRequest());
    // TODO: Handle 'response' of type SourceSearchResult
}
catch (ApiException<SearchSourcesError> ex)
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

<code>[SearchSourcesRequest](src/Perigon/Requests/SupplementalEndpoints/SearchSourcesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SourceSearchResult](src/Perigon/Models/SourceSearchResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[SearchSourcesError](src/Perigon/Errors/SearchSourcesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TopicSearchResult&gt; SearchTopics(SearchTopicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search through all available Topics that exist within the Perigon Database.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SupplementalEndpoints.SearchTopics(new SearchTopicsRequest());
    // TODO: Handle 'response' of type TopicSearchResult
}
catch (ApiException<SearchTopicsError> ex)
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

<code>[SearchTopicsRequest](src/Perigon/Requests/SupplementalEndpoints/SearchTopicsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TopicSearchResult](src/Perigon/Models/TopicSearchResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[SearchTopicsError](src/Perigon/Errors/SearchTopicsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Utilities

> Source: [Utilities](src/Perigon/Api/Utilities.cs)

<details>
<summary><code>Task&lt;LimitsResult&gt; GetLimits(GetLimitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the authenticated account's current API usage and the limits that apply to it: the number of requests made in the current tracking period, the request limit, the per-second rate limit, and when the counter resets.

Optionally, pass one or more API keys via the `apiKeys` parameter to check their status. For each supplied key the response reports whether it is `valid` (exists and belongs to your account), `enabled` (a disabled key is 'off'), and whether its `subscription` is active.

This endpoint is authenticated with your API key but is quota-exempt: calling it does **not** count against your monthly request quota and is not subject to rate limiting. It is intended for liveness/health probes and external dashboards that need to check whether an API key and subscription are active without consuming usage.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Utilities.GetLimits(new GetLimitsRequest());
    // TODO: Handle 'response' of type LimitsResult
}
catch (ApiException<GetLimitsError> ex)
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

<code>[GetLimitsRequest](src/Perigon/Requests/Utilities/GetLimitsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LimitsResult](src/Perigon/Models/LimitsResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[GetLimitsError](src/Perigon/Errors/GetLimitsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Watchlists

> Source: [Watchlists](src/Perigon/Api/Watchlists.cs)

<details>
<summary><code>Task&lt;WatchlistResult&gt; CreateWatchlist(CreateWatchlistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new watchlist under the organization associated with the API key. A watchlist can contain up to 100 combined people and companies.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Watchlists.CreateWatchlist(new CreateWatchlistRequest
    {
        Body = new CreateWatchlistParams
        {
            Name = "some example string",
            People = [new WatchlistPerson()],
            Companies = [new WatchlistCompany()],
        },
    });
    // TODO: Handle 'response' of type WatchlistResult
}
catch (ApiException<CreateWatchlistError> ex)
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

<code>[CreateWatchlistRequest](src/Perigon/Requests/Watchlists/CreateWatchlistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WatchlistResult](src/Perigon/Models/WatchlistResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[CreateWatchlistError](src/Perigon/Errors/CreateWatchlistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WatchlistResult&gt; DeleteWatchlist(DeleteWatchlistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a watchlist owned by the organization associated with the API key. A watchlist cannot be deleted if it is attached to active monitors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Watchlists.DeleteWatchlist(new DeleteWatchlistRequest { Id = 1 });
    // TODO: Handle 'response' of type WatchlistResult
}
catch (ApiException<DeleteWatchlistError> ex)
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

<code>[DeleteWatchlistRequest](src/Perigon/Requests/Watchlists/DeleteWatchlistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WatchlistResult](src/Perigon/Models/WatchlistResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[DeleteWatchlistError](src/Perigon/Errors/DeleteWatchlistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WatchlistResult&gt; GetWatchlist(GetWatchlistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a watchlist by ID. Only returns watchlists owned by the organization associated with the API key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Watchlists.GetWatchlist(new GetWatchlistRequest { Id = 1 });
    // TODO: Handle 'response' of type WatchlistResult
}
catch (ApiException<GetWatchlistError> ex)
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

<code>[GetWatchlistRequest](src/Perigon/Requests/Watchlists/GetWatchlistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WatchlistResult](src/Perigon/Models/WatchlistResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[GetWatchlistError](src/Perigon/Errors/GetWatchlistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WatchlistListResult&gt; ListWatchlists(ListWatchlistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List watchlists owned by the organization associated with the API key, as well as publicly visible watchlists. Supports filtering by name.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Watchlists.ListWatchlists(new ListWatchlistsRequest
    {
        SortBy = WatchlistSortBy.Id,
        SortOrder = SortOrder.Asc,
    });
    // TODO: Handle 'response' of type WatchlistListResult
}
catch (ApiException<ListWatchlistsError> ex)
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

<code>[ListWatchlistsRequest](src/Perigon/Requests/Watchlists/ListWatchlistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WatchlistListResult](src/Perigon/Models/WatchlistListResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[ListWatchlistsError](src/Perigon/Errors/ListWatchlistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WatchlistResolveResult&gt; ResolveWatchlists(ResolveWatchlistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve watchlists by name. For each name, returns the organization's private watchlist if one exists, otherwise falls back to the matching public watchlist.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Watchlists.ResolveWatchlists(new ResolveWatchlistsRequest());
    // TODO: Handle 'response' of type WatchlistResolveResult
}
catch (ApiException<ResolveWatchlistsError> ex)
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

<code>[ResolveWatchlistsRequest](src/Perigon/Requests/Watchlists/ResolveWatchlistsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WatchlistResolveResult](src/Perigon/Models/WatchlistResolveResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[ResolveWatchlistsError](src/Perigon/Errors/ResolveWatchlistsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WatchlistResult&gt; UpdateWatchlist(UpdateWatchlistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially update a watchlist owned by the organization associated with the API key. Only provided fields will be updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Watchlists.UpdateWatchlist(new UpdateWatchlistRequest
    {
        Id = 1,
        Body = new UpdateWatchlistParams(),
    });
    // TODO: Handle 'response' of type WatchlistResult
}
catch (ApiException<UpdateWatchlistError> ex)
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

<code>[UpdateWatchlistRequest](src/Perigon/Requests/Watchlists/UpdateWatchlistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WatchlistResult](src/Perigon/Models/WatchlistResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[UpdateWatchlistError](src/Perigon/Errors/UpdateWatchlistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Wikipedia

> Source: [Wikipedia](src/Perigon/Api/Wikipedia.cs)

<details>
<summary><code>Task&lt;WikipediaSearchResult&gt; SearchWikipedia(SearchWikipediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search and filter all Wikipedia pages available via the Perigon API. The result includes a list of individual pages that were matched to your specific criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Wikipedia.SearchWikipedia(new SearchWikipediaRequest());
    // TODO: Handle 'response' of type WikipediaSearchResult
}
catch (ApiException<SearchWikipediaError> ex)
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

<code>[SearchWikipediaRequest](src/Perigon/Requests/Wikipedia/SearchWikipediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WikipediaSearchResult](src/Perigon/Models/WikipediaSearchResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[SearchWikipediaError](src/Perigon/Errors/SearchWikipediaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WikipediaVectorSearchResult&gt; VectorSearchWikipedia(VectorSearchWikipediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform a natural language search over Wikipedia pages using semantic relevance. The result includes a list of page sections most closely matched to your query intent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Wikipedia.VectorSearchWikipedia(new VectorSearchWikipediaRequest
    {
        Body = new WikipediaSearchParams { Prompt = "some example string" },
    });
    // TODO: Handle 'response' of type WikipediaVectorSearchResult
}
catch (ApiException<VectorSearchWikipediaError> ex)
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

<code>[VectorSearchWikipediaRequest](src/Perigon/Requests/Wikipedia/VectorSearchWikipediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WikipediaVectorSearchResult](src/Perigon/Models/WikipediaVectorSearchResult.cs)</code>

**OnError**: <code>[ApiException](src/Perigon/Core/Exceptions/ApiException.cs)&lt;[VectorSearchWikipediaError](src/Perigon/Errors/VectorSearchWikipediaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

