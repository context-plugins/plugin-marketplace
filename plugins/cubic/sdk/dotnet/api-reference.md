# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [CubicClient](src/Cubic/CubicClient.cs)

## Analytics

> Source: [Analytics](src/Cubic/Api/Analytics.cs)

<details>
<summary><code>Task&lt;AnalyticsPrPage&gt; ListPullRequestAnalytics(ListPullRequestAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Export metrics for merged pull requests reviewed by cubic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analytics.ListPullRequestAnalytics(new ListPullRequestAnalyticsRequest
    {
        Org = "some example string",
    });
    // TODO: Handle 'response' of type AnalyticsPrPage
}
catch (ApiException<ListPullRequestAnalyticsError> ex)
{
    if (ex.Error.TryGetAnalyticsError(out var error))
    {
        // TODO: Handle 'error' of type AnalyticsError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPullRequestAnalyticsRequest](src/Cubic/Requests/Analytics/ListPullRequestAnalyticsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsPrPage](src/Cubic/Models/AnalyticsPrPage.cs)</code>

**OnError**: <code>[ApiException](src/Cubic/Core/Exceptions/ApiException.cs)&lt;[ListPullRequestAnalyticsError](src/Cubic/Errors/ListPullRequestAnalyticsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](src/Cubic/Api/Organizations.cs)

<details>
<summary><code>Task&lt;OrganizationMember&gt; GetMember(GetMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.GetMember(new GetMemberRequest
    {
        Org = "some example string",
        GithubUserId = "some example string",
    });
    // TODO: Handle 'response' of type OrganizationMember
}
catch (ApiException<GetMemberError> ex)
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

<code>[GetMemberRequest](src/Cubic/Requests/Organizations/GetMemberRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationMember](src/Cubic/Models/OrganizationMember.cs)</code>

**OnError**: <code>[ApiException](src/Cubic/Core/Exceptions/ApiException.cs)&lt;[GetMemberError](src/Cubic/Errors/GetMemberError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MemberList&gt; ListMembers(ListMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ListMembers(new ListMembersRequest { Org = "some example string" });
    // TODO: Handle 'response' of type MemberList
}
catch (ApiException<ListMembersError> ex)
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

<code>[ListMembersRequest](src/Cubic/Requests/Organizations/ListMembersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MemberList](src/Cubic/Models/MemberList.cs)</code>

**OnError**: <code>[ApiException](src/Cubic/Core/Exceptions/ApiException.cs)&lt;[ListMembersError](src/Cubic/Errors/ListMembersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OrganizationList&gt; ListOrganizations(ListOrganizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An organization API key lists only its own organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ListOrganizations(new ListOrganizationsRequest());
    // TODO: Handle 'response' of type OrganizationList
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

### Request

<dl>
<dd>

<code>[ListOrganizationsRequest](src/Cubic/Requests/Organizations/ListOrganizationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationList](src/Cubic/Models/OrganizationList.cs)</code>

**OnError**: <code>[ApiException](src/Cubic/Core/Exceptions/ApiException.cs)&lt;[ListOrganizationsError](src/Cubic/Errors/ListOrganizationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MemberUpdateResult&gt; UpdateMember(UpdateMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Needs an organization admin or an organization API key with Admin access, and an active paid subscription. It never buys seats. Turning a seat off does not remove access to cubic. To remove someone, remove them from the GitHub organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.UpdateMember(new UpdateMemberRequest
    {
        Org = "some example string",
        GithubUserId = "some example string",
        Body = new MemberUpdate(),
    });
    // TODO: Handle 'response' of type MemberUpdateResult
}
catch (ApiException<UpdateMemberError> ex)
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

<code>[UpdateMemberRequest](src/Cubic/Requests/Organizations/UpdateMemberRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MemberUpdateResult](src/Cubic/Models/MemberUpdateResult.cs)</code>

**OnError**: <code>[ApiException](src/Cubic/Core/Exceptions/ApiException.cs)&lt;[UpdateMemberError](src/Cubic/Errors/UpdateMemberError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

