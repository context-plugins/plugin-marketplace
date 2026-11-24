# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [ReadMeClient](src/ReadMe/ReadMeClient.cs)

## ApiKeys

> Source: [ApiKeys](src/ReadMe/Api/ApiKeys.cs)

<details>
<summary><code>Task DeleteApikeysById(DeleteApikeysByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ApiKeys.DeleteApikeysById(new DeleteApikeysByIdRequest { Id = "some example string" });
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

<code>[DeleteApikeysByIdRequest](src/ReadMe/Requests/ApiKeys/DeleteApikeysByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetApikeys(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ApiKeys.GetApikeys();
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

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostApikeys(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ApiKeys.PostApikeys();
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

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ApIs

> Source: [ApIs](src/ReadMe/Api/ApIs.cs)

<details>
<summary><code>Task DeleteBranchesByBranchApisById(DeleteBranchesByBranchApisByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ApIs.DeleteBranchesByBranchApisById(new DeleteBranchesByBranchApisByIdRequest
    {
        Branch = "some example string",
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

<code>[DeleteBranchesByBranchApisByIdRequest](src/ReadMe/Requests/ApIs/DeleteBranchesByBranchApisByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetBranchesByBranchApis(GetBranchesByBranchApisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve metadata for API definitions on a branch.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ApIs.GetBranchesByBranchApis(new GetBranchesByBranchApisRequest { Branch = "some example string" });
}
catch (ApiException<GetBranchesByBranchApisError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBranchesByBranchApisRequest](src/ReadMe/Requests/ApIs/GetBranchesByBranchApisRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[GetBranchesByBranchApisError](src/ReadMe/Errors/GetBranchesByBranchApisError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetBranchesByBranchApisById(GetBranchesByBranchApisByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ApIs.GetBranchesByBranchApisById(new GetBranchesByBranchApisByIdRequest
    {
        Branch = "some example string",
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

<code>[GetBranchesByBranchApisByIdRequest](src/ReadMe/Requests/ApIs/GetBranchesByBranchApisByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostBranchesByBranchApis(PostBranchesByBranchApisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ApIs.PostBranchesByBranchApis(new PostBranchesByBranchApisRequest { Branch = "some example string" });
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

<code>[PostBranchesByBranchApisRequest](src/ReadMe/Requests/ApIs/PostBranchesByBranchApisRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutBranchesByBranchApisById(PutBranchesByBranchApisByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ApIs.PutBranchesByBranchApisById(new PutBranchesByBranchApisByIdRequest
    {
        Branch = "some example string",
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

<code>[PutBranchesByBranchApisByIdRequest](src/ReadMe/Requests/ApIs/PutBranchesByBranchApisByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Analytics

> Source: [Analytics](src/ReadMe/Api/Analytics.cs)

<details>
<summary><code>Task GetPageviews(GetPageviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Analytics.GetPageviews(new GetPageviewsRequest());
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

<code>[GetPageviewsRequest](src/ReadMe/Requests/Analytics/GetPageviewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetQuality(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns quality scores produced by Docs Audit for the project's pages.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Analytics.GetQuality();
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

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetSearch(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Analytics.GetSearch();
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

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Branches

> Source: [Branches](src/ReadMe/Api/Branches.cs)

<details>
<summary><code>Task DeleteBranchesByBranch(DeleteBranchesByBranchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Branches.DeleteBranchesByBranch(new DeleteBranchesByBranchRequest { Branch = "some example string" });
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

<code>[DeleteBranchesByBranchRequest](src/ReadMe/Requests/Branches/DeleteBranchesByBranchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetBranches(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Branches.GetBranches();
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

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetBranchesByBranch(GetBranchesByBranchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Branches.GetBranchesByBranch(new GetBranchesByBranchRequest { Branch = "some example string" });
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

<code>[GetBranchesByBranchRequest](src/ReadMe/Requests/Branches/GetBranchesByBranchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostBranches(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Branches.PostBranches();
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

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutBranchesByBranch(PutBranchesByBranchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Branches.PutBranchesByBranch(new PutBranchesByBranchRequest { Branch = "some example string" });
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

<code>[PutBranchesByBranchRequest](src/ReadMe/Requests/Branches/PutBranchesByBranchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Categories

> Source: [Categories](src/ReadMe/Api/Categories.cs)

<details>
<summary><code>Task DeleteBranchesByBranchCategoriesBySlug(DeleteBranchesByBranchCategoriesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Categories.DeleteBranchesByBranchCategoriesBySlug(new DeleteBranchesByBranchCategoriesBySlugRequest
    {
        Branch = "some example string",
        Slug = "some example string",
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

<code>[DeleteBranchesByBranchCategoriesBySlugRequest](src/ReadMe/Requests/Categories/DeleteBranchesByBranchCategoriesBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetBranchesByBranchCategories(GetBranchesByBranchCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Categories.GetBranchesByBranchCategories(new GetBranchesByBranchCategoriesRequest
    {
        Branch = "some example string",
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

<code>[GetBranchesByBranchCategoriesRequest](src/ReadMe/Requests/Categories/GetBranchesByBranchCategoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetBranchesByBranchCategoriesBySlug(GetBranchesByBranchCategoriesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Categories.GetBranchesByBranchCategoriesBySlug(new GetBranchesByBranchCategoriesBySlugRequest
    {
        Branch = "some example string",
        Slug = "some example string",
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

<code>[GetBranchesByBranchCategoriesBySlugRequest](src/ReadMe/Requests/Categories/GetBranchesByBranchCategoriesBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostBranchesByBranchCategories(PostBranchesByBranchCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Categories.PostBranchesByBranchCategories(new PostBranchesByBranchCategoriesRequest
    {
        Branch = "some example string",
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

<code>[PostBranchesByBranchCategoriesRequest](src/ReadMe/Requests/Categories/PostBranchesByBranchCategoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutBranchesByBranchCategoriesBySlug(PutBranchesByBranchCategoriesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Categories.PutBranchesByBranchCategoriesBySlug(new PutBranchesByBranchCategoriesBySlugRequest
    {
        Branch = "some example string",
        Slug = "some example string",
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

<code>[PutBranchesByBranchCategoriesBySlugRequest](src/ReadMe/Requests/Categories/PutBranchesByBranchCategoriesBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Changelog

> Source: [Changelog](src/ReadMe/Api/Changelog.cs)

<details>
<summary><code>Task DeleteBranchesByBranchChangelogsBySlug(DeleteBranchesByBranchChangelogsBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Changelog.DeleteBranchesByBranchChangelogsBySlug(new DeleteBranchesByBranchChangelogsBySlugRequest
    {
        Branch = "some example string",
        Slug = "some example string",
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

<code>[DeleteBranchesByBranchChangelogsBySlugRequest](src/ReadMe/Requests/Changelog/DeleteBranchesByBranchChangelogsBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetBranchesByBranchChangelogs(GetBranchesByBranchChangelogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Changelog.GetBranchesByBranchChangelogs(new GetBranchesByBranchChangelogsRequest
    {
        Branch = "some example string",
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

<code>[GetBranchesByBranchChangelogsRequest](src/ReadMe/Requests/Changelog/GetBranchesByBranchChangelogsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetBranchesByBranchChangelogsBySlug(GetBranchesByBranchChangelogsBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Changelog.GetBranchesByBranchChangelogsBySlug(new GetBranchesByBranchChangelogsBySlugRequest
    {
        Branch = "some example string",
        Slug = "some example string",
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

<code>[GetBranchesByBranchChangelogsBySlugRequest](src/ReadMe/Requests/Changelog/GetBranchesByBranchChangelogsBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostBranchesByBranchChangelogs(PostBranchesByBranchChangelogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Changelog.PostBranchesByBranchChangelogs(new PostBranchesByBranchChangelogsRequest
    {
        Branch = "some example string",
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

<code>[PostBranchesByBranchChangelogsRequest](src/ReadMe/Requests/Changelog/PostBranchesByBranchChangelogsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutBranchesByBranchChangelogsBySlug(PutBranchesByBranchChangelogsBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Changelog.PutBranchesByBranchChangelogsBySlug(new PutBranchesByBranchChangelogsBySlugRequest
    {
        Branch = "some example string",
        Slug = "some example string",
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

<code>[PutBranchesByBranchChangelogsBySlugRequest](src/ReadMe/Requests/Changelog/PutBranchesByBranchChangelogsBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomPages

> Source: [CustomPages](src/ReadMe/Api/CustomPages.cs)

<details>
<summary><code>Task DeleteBranchesByBranchCustomPagesBySlug(DeleteBranchesByBranchCustomPagesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CustomPages.DeleteBranchesByBranchCustomPagesBySlug(new DeleteBranchesByBranchCustomPagesBySlugRequest
    {
        Branch = "some example string",
        Slug = "some example string",
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

<code>[DeleteBranchesByBranchCustomPagesBySlugRequest](src/ReadMe/Requests/CustomPages/DeleteBranchesByBranchCustomPagesBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetBranchesByBranchCustomPages(GetBranchesByBranchCustomPagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CustomPages.GetBranchesByBranchCustomPages(new GetBranchesByBranchCustomPagesRequest
    {
        Branch = "some example string",
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

<code>[GetBranchesByBranchCustomPagesRequest](src/ReadMe/Requests/CustomPages/GetBranchesByBranchCustomPagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetBranchesByBranchCustomPagesBySlug(GetBranchesByBranchCustomPagesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CustomPages.GetBranchesByBranchCustomPagesBySlug(new GetBranchesByBranchCustomPagesBySlugRequest
    {
        Branch = "some example string",
        Slug = "some example string",
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

<code>[GetBranchesByBranchCustomPagesBySlugRequest](src/ReadMe/Requests/CustomPages/GetBranchesByBranchCustomPagesBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostBranchesByBranchCustomPages(PostBranchesByBranchCustomPagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CustomPages.PostBranchesByBranchCustomPages(new PostBranchesByBranchCustomPagesRequest
    {
        Branch = "some example string",
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

<code>[PostBranchesByBranchCustomPagesRequest](src/ReadMe/Requests/CustomPages/PostBranchesByBranchCustomPagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutBranchesByBranchCustomPagesBySlug(PutBranchesByBranchCustomPagesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CustomPages.PutBranchesByBranchCustomPagesBySlug(new PutBranchesByBranchCustomPagesBySlugRequest
    {
        Branch = "some example string",
        Slug = "some example string",
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

<code>[PutBranchesByBranchCustomPagesBySlugRequest](src/ReadMe/Requests/CustomPages/PutBranchesByBranchCustomPagesBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Guides

> Source: [Guides](src/ReadMe/Api/Guides.cs)

<details>
<summary><code>Task DeleteBranchesByBranchGuidesBySlug(DeleteBranchesByBranchGuidesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Guides.DeleteBranchesByBranchGuidesBySlug(new DeleteBranchesByBranchGuidesBySlugRequest
    {
        Branch = "some example string",
        Slug = "some example string",
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

<code>[DeleteBranchesByBranchGuidesBySlugRequest](src/ReadMe/Requests/Guides/DeleteBranchesByBranchGuidesBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetBranchesByBranchGuides(GetBranchesByBranchGuidesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Guides.GetBranchesByBranchGuides(new GetBranchesByBranchGuidesRequest
    {
        Branch = "some example string",
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

<code>[GetBranchesByBranchGuidesRequest](src/ReadMe/Requests/Guides/GetBranchesByBranchGuidesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetBranchesByBranchGuidesBySlug(GetBranchesByBranchGuidesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Guides.GetBranchesByBranchGuidesBySlug(new GetBranchesByBranchGuidesBySlugRequest
    {
        Branch = "some example string",
        Slug = "some example string",
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

<code>[GetBranchesByBranchGuidesBySlugRequest](src/ReadMe/Requests/Guides/GetBranchesByBranchGuidesBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostBranchesByBranchGuides(PostBranchesByBranchGuidesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Guides.PostBranchesByBranchGuides(new PostBranchesByBranchGuidesRequest
    {
        Branch = "some example string",
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

<code>[PostBranchesByBranchGuidesRequest](src/ReadMe/Requests/Guides/PostBranchesByBranchGuidesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutBranchesByBranchGuidesBySlug(PutBranchesByBranchGuidesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Guides.PutBranchesByBranchGuidesBySlug(new PutBranchesByBranchGuidesBySlugRequest
    {
        Branch = "some example string",
        Slug = "some example string",
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

<code>[PutBranchesByBranchGuidesBySlugRequest](src/ReadMe/Requests/Guides/PutBranchesByBranchGuidesBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Images

> Source: [Images](src/ReadMe/Api/Images.cs)

<details>
<summary><code>Task PostImages(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Images.PostImages();
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

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Metrics

> Source: [Metrics](src/ReadMe/Api/Metrics.cs)

<details>
<summary><code>Task PostRequest(PostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send API request and response metadata (HAR-formatted) to ReadMe Metrics for analysis in the Developer Dashboard.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Metrics.PostRequest(new PostRequest());
}
catch (ApiException<PostRequestError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostRequest](src/ReadMe/Requests/Metrics/PostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[PostRequestError](src/ReadMe/Errors/PostRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Recipes

> Source: [Recipes](src/ReadMe/Api/Recipes.cs)

<details>
<summary><code>Task DeleteRecipesBySlug(DeleteRecipesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Recipes.DeleteRecipesBySlug(new DeleteRecipesBySlugRequest { Slug = "some example string" });
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

<code>[DeleteRecipesBySlugRequest](src/ReadMe/Requests/Recipes/DeleteRecipesBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRecipes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Recipes.GetRecipes();
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

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRecipesBySlug(GetRecipesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Recipes.GetRecipesBySlug(new GetRecipesBySlugRequest { Slug = "some example string" });
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

<code>[GetRecipesBySlugRequest](src/ReadMe/Requests/Recipes/GetRecipesBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostRecipes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Recipes.PostRecipes();
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

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutRecipesBySlug(PutRecipesBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Recipes.PutRecipesBySlug(new PutRecipesBySlugRequest { Slug = "some example string" });
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

<code>[PutRecipesBySlugRequest](src/ReadMe/Requests/Recipes/PutRecipesBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/ReadMe/Api/Search.cs)

<details>
<summary><code>Task GetSearch2(GetSearch2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Search.GetSearch2(new GetSearch2Request { Q = "some example string" });
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

<code>[GetSearch2Request](src/ReadMe/Requests/Search/GetSearch2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ReadMe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/ReadMe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

