# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [CodeQrClient](src/CodeQr/CodeQrClient.cs)

## Analytics

> Source: [Analytics](src/CodeQr/Api/Analytics.cs)

<details>
<summary><code>Task&lt;AnalyticsResponse&gt; RetrieveAnalytics(RetrieveAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve analytics for a link, a domain, or the authenticated workspace. The response type depends on the `event` and `type` query parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analytics.RetrieveAnalytics(new RetrieveAnalyticsRequest
    {
        Timezone = "America/New_York",
        City = "New York",
        Device = "Desktop",
        Browser = "Chrome",
        Os = "Windows",
        Referer = "google.com",
    });
    // TODO: Handle 'response' of type AnalyticsResponse
}
catch (ApiException<RetrieveAnalyticsError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RetrieveAnalyticsRequest](src/CodeQr/Requests/Analytics/RetrieveAnalyticsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](src/CodeQr/Models/AnyOf/AnalyticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[RetrieveAnalyticsError](src/CodeQr/Errors/RetrieveAnalyticsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Domains

> Source: [Domains](src/CodeQr/Api/Domains.cs)

<details>
<summary><code>Task&lt;DomainSchema&gt; CreateDomain(CreateDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a domain for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Domains.CreateDomain(new CreateDomainRequest());
    // TODO: Handle 'response' of type DomainSchema
}
catch (ApiException<CreateDomainError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDomainRequest](src/CodeQr/Requests/Domains/CreateDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DomainSchema](src/CodeQr/Models/DomainSchema.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[CreateDomainError](src/CodeQr/Errors/CreateDomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DomainsResponse&gt; DeleteDomain(DeleteDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a domain from a workspace. It cannot be undone. This will also delete all the links associated with the domain.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Domains.DeleteDomain(new DeleteDomainRequest { Slug = "acme.com" });
    // TODO: Handle 'response' of type DomainsResponse
}
catch (ApiException<DeleteDomainError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDomainRequest](src/CodeQr/Requests/Domains/DeleteDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DomainsResponse](src/CodeQr/Models/DomainsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[DeleteDomainError](src/CodeQr/Errors/DeleteDomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;DomainSchema&gt;&gt; ListDomains(ListDomainsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of domains associated with the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Domains.ListDomains(new ListDomainsRequest { Page = 1d, PageSize = 50d });
    // TODO: Handle 'response' of type IReadOnlyList<DomainSchema>
}
catch (ApiException<ListDomainsError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDomainsRequest](src/CodeQr/Requests/Domains/ListDomainsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[DomainSchema](src/CodeQr/Models/DomainSchema.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[ListDomainsError](src/CodeQr/Errors/ListDomainsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DomainSchema&gt; UpdateDomain(UpdateDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a domain for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Domains.UpdateDomain(new UpdateDomainRequest { Slug = "acme.com" });
    // TODO: Handle 'response' of type DomainSchema
}
catch (ApiException<UpdateDomainError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateDomainRequest](src/CodeQr/Requests/Domains/UpdateDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DomainSchema](src/CodeQr/Models/DomainSchema.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[UpdateDomainError](src/CodeQr/Errors/UpdateDomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/CodeQr/Api/Events.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;EventsResponse&gt;&gt; ListEvents(ListEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of events for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.ListEvents(new ListEventsRequest
    {
        Timezone = "America/New_York",
        City = "New York",
        Device = "Desktop",
        Browser = "Chrome",
        Os = "Windows",
        Referer = "google.com",
    });
    // TODO: Handle 'response' of type IReadOnlyList<EventsResponse>
}
catch (ApiException<ListEventsError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEventsRequest](src/CodeQr/Requests/Events/ListEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[EventsResponse](src/CodeQr/Models/OneOf/EventsResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[ListEventsError](src/CodeQr/Errors/ListEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Folders

> Source: [Folders](src/CodeQr/Api/Folders.cs)

<details>
<summary><code>Task&lt;FolderSchema&gt; CreateFolder(CreateFolderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a folder for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Folders.CreateFolder(new CreateFolderRequest());
    // TODO: Handle 'response' of type FolderSchema
}
catch (ApiException<CreateFolderError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateFolderRequest](src/CodeQr/Requests/Folders/CreateFolderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FolderSchema](src/CodeQr/Models/FolderSchema.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[CreateFolderError](src/CodeQr/Errors/CreateFolderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FoldersResponse&gt; DeleteFolder(DeleteFolderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a folder from the workspace. All existing links will still work, but they will no longer be associated with this folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Folders.DeleteFolder(new DeleteFolderRequest { Id = "some example string" });
    // TODO: Handle 'response' of type FoldersResponse
}
catch (ApiException<DeleteFolderError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteFolderRequest](src/CodeQr/Requests/Folders/DeleteFolderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FoldersResponse](src/CodeQr/Models/FoldersResponse.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[DeleteFolderError](src/CodeQr/Errors/DeleteFolderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;FolderSchema&gt;&gt; ListFolders(ListFoldersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of folders for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Folders.ListFolders(new ListFoldersRequest { Page = 1d, PageSize = 50d });
    // TODO: Handle 'response' of type IReadOnlyList<FolderSchema>
}
catch (ApiException<ListFoldersError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFoldersRequest](src/CodeQr/Requests/Folders/ListFoldersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[FolderSchema](src/CodeQr/Models/FolderSchema.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[ListFoldersError](src/CodeQr/Errors/ListFoldersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FolderSchema&gt; UpdateFolder(UpdateFolderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a folder in the workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Folders.UpdateFolder(new UpdateFolderRequest { Id = "some example string" });
    // TODO: Handle 'response' of type FolderSchema
}
catch (ApiException<UpdateFolderError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateFolderRequest](src/CodeQr/Requests/Folders/UpdateFolderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FolderSchema](src/CodeQr/Models/FolderSchema.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[UpdateFolderError](src/CodeQr/Errors/UpdateFolderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Links

> Source: [Links](src/CodeQr/Api/Links.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;LinksBulkResponse1&gt;&gt; BulkCreateLinks(BulkCreateLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk create up to 100 links for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Links.BulkCreateLinks(new BulkCreateLinksRequest());
    // TODO: Handle 'response' of type IReadOnlyList<LinksBulkResponse1>
}
catch (ApiException<BulkCreateLinksError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkCreateLinksRequest](src/CodeQr/Requests/Links/BulkCreateLinksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[LinksBulkResponse1](src/CodeQr/Models/AnyOf/LinksBulkResponse1.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[BulkCreateLinksError](src/CodeQr/Errors/BulkCreateLinksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LinksBulkResponse&gt; BulkDeleteLinks(BulkDeleteLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk delete up to 100 links for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Links.BulkDeleteLinks(new BulkDeleteLinksRequest
    {
        LinkIds = ["clux0rgak00011...", "clux0rgak00022..."],
    });
    // TODO: Handle 'response' of type LinksBulkResponse
}
catch (ApiException<BulkDeleteLinksError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkDeleteLinksRequest](src/CodeQr/Requests/Links/BulkDeleteLinksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LinksBulkResponse](src/CodeQr/Models/LinksBulkResponse.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[BulkDeleteLinksError](src/CodeQr/Errors/BulkDeleteLinksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LinkCodeqrIoLinksApi&gt; CreateLink(CreateLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new link for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Links.CreateLink(new CreateLinkRequest());
    // TODO: Handle 'response' of type LinkCodeqrIoLinksApi
}
catch (ApiException<CreateLinkError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateLinkRequest](src/CodeQr/Requests/Links/CreateLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LinkCodeqrIoLinksApi](src/CodeQr/Models/LinkCodeqrIoLinksApi.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[CreateLinkError](src/CodeQr/Errors/CreateLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LinksResponse&gt; DeleteLink(DeleteLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a link for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Links.DeleteLink(new DeleteLinkRequest { LinkId = "some example string" });
    // TODO: Handle 'response' of type LinksResponse
}
catch (ApiException<DeleteLinkError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteLinkRequest](src/CodeQr/Requests/Links/DeleteLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LinksResponse](src/CodeQr/Models/LinksResponse.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[DeleteLinkError](src/CodeQr/Errors/DeleteLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LinkCodeqrIoLinksApi&gt; GetLinkInfo(GetLinkInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the info for a link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Links.GetLinkInfo(new GetLinkInfoRequest
    {
        ProjectSlug = "some example string",
        Domain = "some example string",
        Key = "some example string",
        LinkId = "clux0rgak00011...",
        ExternalId = "ext_123456",
    });
    // TODO: Handle 'response' of type LinkCodeqrIoLinksApi
}
catch (ApiException<GetLinkInfoError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetLinkInfoRequest](src/CodeQr/Requests/Links/GetLinkInfoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LinkCodeqrIoLinksApi](src/CodeQr/Models/LinkCodeqrIoLinksApi.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[GetLinkInfoError](src/CodeQr/Errors/GetLinkInfoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;LinkCodeqrIoLinksApi&gt;&gt; GetLinks(GetLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of links for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Links.GetLinks(new GetLinksRequest { Page = 1d, PageSize = 50d });
    // TODO: Handle 'response' of type IReadOnlyList<LinkCodeqrIoLinksApi>
}
catch (ApiException<GetLinksError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetLinksRequest](src/CodeQr/Requests/Links/GetLinksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[LinkCodeqrIoLinksApi](src/CodeQr/Models/LinkCodeqrIoLinksApi.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[GetLinksError](src/CodeQr/Errors/GetLinksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;double&gt; GetLinksCount(GetLinksCountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the number of links for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Links.GetLinksCount(new GetLinksCountRequest());
    // TODO: Handle 'response' of type double
}
catch (ApiException<GetLinksCountError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetLinksCountRequest](src/CodeQr/Requests/Links/GetLinksCountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>double</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[GetLinksCountError](src/CodeQr/Errors/GetLinksCountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LinkCodeqrIoLinksApi&gt; UpdateLink(UpdateLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a link for the authenticated workspace. If there's no change, returns it as it is.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Links.UpdateLink(new UpdateLinkRequest { LinkId = "some example string" });
    // TODO: Handle 'response' of type LinkCodeqrIoLinksApi
}
catch (ApiException<UpdateLinkError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateLinkRequest](src/CodeQr/Requests/Links/UpdateLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LinkCodeqrIoLinksApi](src/CodeQr/Models/LinkCodeqrIoLinksApi.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[UpdateLinkError](src/CodeQr/Errors/UpdateLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/CodeQr/Api/Projects.cs)

<details>
<summary><code>Task&lt;Project&gt; GetProject(GetProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a project for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetProject(new GetProjectRequest { ProjectSlug = "some example string" });
    // TODO: Handle 'response' of type Project
}
catch (ApiException<GetProjectError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetProjectRequest](src/CodeQr/Requests/Projects/GetProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/CodeQr/Models/Project.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[GetProjectError](src/CodeQr/Errors/GetProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Project&gt;&gt; GetProjects(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of projects for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetProjects();
    // TODO: Handle 'response' of type IReadOnlyList<Project>
}
catch (ApiException<GetProjectsError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Project](src/CodeQr/Models/Project.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[GetProjectsError](src/CodeQr/Errors/GetProjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## QrCodes

> Source: [QrCodes](src/CodeQr/Api/QrCodes.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;QrcodesBulkResponse1&gt;&gt; BulkCreateQrCodes(BulkCreateQrCodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk create up to 100 QR Codes for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.BulkCreateQrCodes(new BulkCreateQrCodesRequest());
    // TODO: Handle 'response' of type IReadOnlyList<QrcodesBulkResponse1>
}
catch (ApiException<BulkCreateQrCodesError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkCreateQrCodesRequest](src/CodeQr/Requests/QrCodes/BulkCreateQrCodesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[QrcodesBulkResponse1](src/CodeQr/Models/AnyOf/QrcodesBulkResponse1.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[BulkCreateQrCodesError](src/CodeQr/Errors/BulkCreateQrCodesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QrcodesBulkResponse&gt; BulkDeleteQrCodes(BulkDeleteQrCodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk delete up to 100 QR Codes for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.BulkDeleteQrCodes(new BulkDeleteQrCodesRequest
    {
        QrcodeIds = ["clux0rgak00011...", "clux0rgak00022..."],
    });
    // TODO: Handle 'response' of type QrcodesBulkResponse
}
catch (ApiException<BulkDeleteQrCodesError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkDeleteQrCodesRequest](src/CodeQr/Requests/QrCodes/BulkDeleteQrCodesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QrcodesBulkResponse](src/CodeQr/Models/QrcodesBulkResponse.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[BulkDeleteQrCodesError](src/CodeQr/Errors/BulkDeleteQrCodesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QrCode&gt; CreateQrCode(CreateQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new QR Code for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.CreateQrCode(new CreateQrCodeRequest());
    // TODO: Handle 'response' of type QrCode
}
catch (ApiException<CreateQrCodeError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateQrCodeRequest](src/CodeQr/Requests/QrCodes/CreateQrCodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QrCode](src/CodeQr/Models/QrCode.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[CreateQrCodeError](src/CodeQr/Errors/CreateQrCodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QrcodesResponse&gt; DeleteQrCode(DeleteQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a QR Code for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.DeleteQrCode(new DeleteQrCodeRequest { QrcodeId = "some example string" });
    // TODO: Handle 'response' of type QrcodesResponse
}
catch (ApiException<DeleteQrCodeError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteQrCodeRequest](src/CodeQr/Requests/QrCodes/DeleteQrCodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QrcodesResponse](src/CodeQr/Models/QrcodesResponse.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[DeleteQrCodeError](src/CodeQr/Errors/DeleteQrCodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QrCode&gt; GetQrCodeInfo(GetQrCodeInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the info for a QR Code.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.GetQrCodeInfo(new GetQrCodeInfoRequest
    {
        ProjectSlug = "some example string",
        Domain = "some example string",
        Key = "some example string",
        ExternalId = "ext_123456",
    });
    // TODO: Handle 'response' of type QrCode
}
catch (ApiException<GetQrCodeInfoError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetQrCodeInfoRequest](src/CodeQr/Requests/QrCodes/GetQrCodeInfoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QrCode](src/CodeQr/Models/QrCode.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[GetQrCodeInfoError](src/CodeQr/Errors/GetQrCodeInfoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;QrCode&gt;&gt; GetQrCodes(GetQrCodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of QR Codes for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.GetQrCodes(new GetQrCodesRequest { Page = 1d, PageSize = 50d });
    // TODO: Handle 'response' of type IReadOnlyList<QrCode>
}
catch (ApiException<GetQrCodesError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetQrCodesRequest](src/CodeQr/Requests/QrCodes/GetQrCodesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[QrCode](src/CodeQr/Models/QrCode.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[GetQrCodesError](src/CodeQr/Errors/GetQrCodesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;double&gt; GetQrCodesCount(GetQrCodesCountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the number of QR Codes for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.GetQrCodesCount(new GetQrCodesCountRequest());
    // TODO: Handle 'response' of type double
}
catch (ApiException<GetQrCodesCountError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetQrCodesCountRequest](src/CodeQr/Requests/QrCodes/GetQrCodesCountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>double</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[GetQrCodesCountError](src/CodeQr/Errors/GetQrCodesCountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QrCode&gt; UpdateQrCode(UpdateQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a QR Code for the authenticated workspace. If there's no change, returns it as it is.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.UpdateQrCode(new UpdateQrCodeRequest { QrcodeId = "some example string" });
    // TODO: Handle 'response' of type QrCode
}
catch (ApiException<UpdateQrCodeError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateQrCodeRequest](src/CodeQr/Requests/QrCodes/UpdateQrCodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QrCode](src/CodeQr/Models/QrCode.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[UpdateQrCodeError](src/CodeQr/Errors/UpdateQrCodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/CodeQr/Api/Tags.cs)

<details>
<summary><code>Task&lt;Tag&gt; CreateTag(CreateTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new tag for the authenticated project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.CreateTag(new CreateTagRequest());
    // TODO: Handle 'response' of type Tag
}
catch (ApiException<CreateTagError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTagRequest](src/CodeQr/Requests/Tags/CreateTagRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Tag](src/CodeQr/Models/Tag.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[CreateTagError](src/CodeQr/Errors/CreateTagError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TagsResponse&gt; DeleteTag(DeleteTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a tag from the workspace. All existing links will still work, but they will no longer be associated with this tag.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.DeleteTag(new DeleteTagRequest { Id = "some example string" });
    // TODO: Handle 'response' of type TagsResponse
}
catch (ApiException<DeleteTagError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteTagRequest](src/CodeQr/Requests/Tags/DeleteTagRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagsResponse](src/CodeQr/Models/TagsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[DeleteTagError](src/CodeQr/Errors/DeleteTagError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Tag&gt;&gt; GetTags(GetTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of tags for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.GetTags(new GetTagsRequest { Page = 1d, PageSize = 50d });
    // TODO: Handle 'response' of type IReadOnlyList<Tag>
}
catch (ApiException<GetTagsError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTagsRequest](src/CodeQr/Requests/Tags/GetTagsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Tag](src/CodeQr/Models/Tag.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[GetTagsError](src/CodeQr/Errors/GetTagsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Tag&gt; UpdateTag(UpdateTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a tag in the workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.UpdateTag(new UpdateTagRequest { Id = "some example string" });
    // TODO: Handle 'response' of type Tag
}
catch (ApiException<UpdateTagError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateTagRequest](src/CodeQr/Requests/Tags/UpdateTagRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Tag](src/CodeQr/Models/Tag.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[UpdateTagError](src/CodeQr/Errors/UpdateTagError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Track

> Source: [Track](src/CodeQr/Api/Track.cs)

<details>
<summary><code>Task&lt;TrackLeadResponse&gt; TrackLead(TrackLeadOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Track a lead for a short link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Track.TrackLead(new TrackLeadOperationRequest());
    // TODO: Handle 'response' of type TrackLeadResponse
}
catch (ApiException<TrackLeadError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TrackLeadOperationRequest](src/CodeQr/Requests/Track/TrackLeadOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TrackLeadResponse](src/CodeQr/Models/TrackLeadResponse.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[TrackLeadError](src/CodeQr/Errors/TrackLeadError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TrackSaleResponse&gt; TrackSale(TrackSaleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Track a sale for a short link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Track.TrackSale(new TrackSaleOperationRequest());
    // TODO: Handle 'response' of type TrackSaleResponse
}
catch (ApiException<TrackSaleError> ex)
{
    if (ex.Error.TryGetM4001(out var error))
    {
        // TODO: Handle 'error' of type M4001
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TrackSaleOperationRequest](src/CodeQr/Requests/Track/TrackSaleOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TrackSaleResponse](src/CodeQr/Models/TrackSaleResponse.cs)</code>

**OnError**: <code>[ApiException](src/CodeQr/Core/Exceptions/ApiException.cs)&lt;[TrackSaleError](src/CodeQr/Errors/TrackSaleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

