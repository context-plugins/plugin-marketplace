# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [OrttoClient](src/Ortto/OrttoClient.cs)

## Accounts

> Source: [Accounts](src/Ortto/Api/Accounts.cs)

<details>
<summary><code>Task MergeAccounts(MergeAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates accounts (previously called organizations) using the same merge semantics as people.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Accounts.MergeAccounts(new MergeAccountsRequest { Body = new AccountsMergeRequest() });
}
catch (ApiException<MergeAccountsError> ex)
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

<code>[MergeAccountsRequest](src/Ortto/Requests/Accounts/MergeAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Ortto/Core/Exceptions/ApiException.cs)&lt;[MergeAccountsError](src/Ortto/Errors/MergeAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Activities

> Source: [Activities](src/Ortto/Api/Activities.cs)

<details>
<summary><code>Task CreateActivities(CreateActivitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends up to 100 custom activity events in a single payload (max 2 MB). Each activity references a custom activity definition and may create or update the associated person via merge_by or person_id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Activities.CreateActivities(new CreateActivitiesRequest
    {
        Body = new ActivitiesCreateRequest { Activities = [new Activity()] },
    });
}
catch (ApiException<CreateActivitiesError> ex)
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

<code>[CreateActivitiesRequest](src/Ortto/Requests/Activities/CreateActivitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Ortto/Core/Exceptions/ApiException.cs)&lt;[CreateActivitiesError](src/Ortto/Errors/CreateActivitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Campaigns

> Source: [Campaigns](src/Ortto/Api/Campaigns.cs)

<details>
<summary><code>Task GetCampaignCalendar(GetCampaignCalendarRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Campaigns.GetCampaignCalendar(new GetCampaignCalendarRequest { Body = new CampaignCalendarRequest() });
}
catch (ApiException<GetCampaignCalendarError> ex)
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

<code>[GetCampaignCalendarRequest](src/Ortto/Requests/Campaigns/GetCampaignCalendarRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Ortto/Core/Exceptions/ApiException.cs)&lt;[GetCampaignCalendarError](src/Ortto/Errors/GetCampaignCalendarError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetCampaignReport(GetCampaignReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Campaigns.GetCampaignReport(new GetCampaignReportRequest { Body = new CampaignReportsGetRequest() });
}
catch (ApiException<GetCampaignReportError> ex)
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

<code>[GetCampaignReportRequest](src/Ortto/Requests/Campaigns/GetCampaignReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Ortto/Core/Exceptions/ApiException.cs)&lt;[GetCampaignReportError](src/Ortto/Errors/GetCampaignReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## People

> Source: [People](src/Ortto/Api/People.cs)

<details>
<summary><code>Task DeletePeople(DeletePeopleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.People.DeletePeople(new DeletePeopleRequest { Body = new PersonDeleteRequest() });
}
catch (ApiException<DeletePeopleError> ex)
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

<code>[DeletePeopleRequest](src/Ortto/Requests/People/DeletePeopleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Ortto/Core/Exceptions/ApiException.cs)&lt;[DeletePeopleError](src/Ortto/Errors/DeletePeopleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PersonGetResponse&gt; GetPeople(GetPeopleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves people matching a filter, with the requested fields, sort order, limit, and offset for pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.People.GetPeople(new GetPeopleRequest { Body = new PersonGetRequest() });
    // TODO: Handle 'response' of type PersonGetResponse
}
catch (ApiException<GetPeopleError> ex)
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

<code>[GetPeopleRequest](src/Ortto/Requests/People/GetPeopleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PersonGetResponse](src/Ortto/Models/PersonGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Ortto/Core/Exceptions/ApiException.cs)&lt;[GetPeopleError](src/Ortto/Errors/GetPeopleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PersonGetResponse&gt; GetPeopleByIds(GetPeopleByIdsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.People.GetPeopleByIds(new GetPeopleByIdsRequest { Body = new PersonGetByIdsRequest() });
    // TODO: Handle 'response' of type PersonGetResponse
}
catch (ApiException<GetPeopleByIdsError> ex)
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

<code>[GetPeopleByIdsRequest](src/Ortto/Requests/People/GetPeopleByIdsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PersonGetResponse](src/Ortto/Models/PersonGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Ortto/Core/Exceptions/ApiException.cs)&lt;[GetPeopleByIdsError](src/Ortto/Errors/GetPeopleByIdsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PersonMergeResponse&gt; MergePeople(MergePeopleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates up to 100 people in a single request. Matching of existing records is controlled with merge_by, merge_strategy, and find_strategy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.People.MergePeople(new MergePeopleRequest
    {
        Body = new PersonMergeRequest { People = [new PersonInput()], MergeBy = ["some example string"] },
    });
    // TODO: Handle 'response' of type PersonMergeResponse
}
catch (ApiException<MergePeopleError> ex)
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

<code>[MergePeopleRequest](src/Ortto/Requests/People/MergePeopleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PersonMergeResponse](src/Ortto/Models/PersonMergeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Ortto/Core/Exceptions/ApiException.cs)&lt;[MergePeopleError](src/Ortto/Errors/MergePeopleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/Ortto/Api/Tags.cs)

<details>
<summary><code>Task&lt;TagsGetResponse&gt; GetTags(GetTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the tags configured on the account. An empty body returns all tags; an optional search term filters the result.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.GetTags(new GetTagsRequest());
    // TODO: Handle 'response' of type TagsGetResponse
}
catch (ApiException<GetTagsError> ex)
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

<code>[GetTagsRequest](src/Ortto/Requests/Tags/GetTagsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagsGetResponse](src/Ortto/Models/TagsGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Ortto/Core/Exceptions/ApiException.cs)&lt;[GetTagsError](src/Ortto/Errors/GetTagsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Transactional

> Source: [Transactional](src/Ortto/Api/Transactional.cs)

<details>
<summary><code>Task SendTransactionalEmail(SendTransactionalEmailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a transactional email. Set non_transactional to true to send as a marketing email. Up to 5 base64-encoded attachments are supported. A successful request returns a 202 Accepted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Transactional.SendTransactionalEmail(new SendTransactionalEmailRequest
    {
        Body = new TransactionalSendRequest(),
    });
}
catch (ApiException<SendTransactionalEmailError> ex)
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

<code>[SendTransactionalEmailRequest](src/Ortto/Requests/Transactional/SendTransactionalEmailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Ortto/Core/Exceptions/ApiException.cs)&lt;[SendTransactionalEmailError](src/Ortto/Errors/SendTransactionalEmailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SendTransactionalSms(SendTransactionalSmsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Transactional.SendTransactionalSms(new SendTransactionalSmsRequest
    {
        Body = new TransactionalSendSmsRequest(),
    });
}
catch (ApiException<SendTransactionalSmsError> ex)
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

<code>[SendTransactionalSmsRequest](src/Ortto/Requests/Transactional/SendTransactionalSmsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Ortto/Core/Exceptions/ApiException.cs)&lt;[SendTransactionalSmsError](src/Ortto/Errors/SendTransactionalSmsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

