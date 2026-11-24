# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [BitbucketClient](src/Bitbucket/BitbucketClient.cs)

## Addon

> Source: [Addon](src/Bitbucket/Api/Addon.cs)

<details>
<summary><code>Task DeleteAddon(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the application for the user.

This endpoint is intended to be used by Bitbucket Connect apps
and only supports JWT authentication -- that is how Bitbucket
identifies the particular installation of the app. Developers
with applications registered in the "Develop Apps" section
of Bitbucket Marketplace need not use this endpoint as
updates for those applications can be sent out via the
UI of that section.

```
$ curl -X DELETE https://api.bitbucket.org/2.0/addon \
-H "Authorization: JWT "
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Addon.DeleteAddon();
}
catch (ApiException<DeleteAddonError> ex)
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

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteAddonError](src/Bitbucket/Errors/DeleteAddonError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAddonLinkersByLinkerKeyValues(DeleteAddonLinkersByLinkerKeyValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete all linker values for the
specified linker of the authenticated application.

This endpoint is deprecated and will be removed by May 2026.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Addon.DeleteAddonLinkersByLinkerKeyValues(new DeleteAddonLinkersByLinkerKeyValuesRequest
    {
        LinkerKey = "some example string",
    });
}
catch (ApiException<DeleteAddonLinkersByLinkerKeyValuesError> ex)
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

<code>[DeleteAddonLinkersByLinkerKeyValuesRequest](src/Bitbucket/Requests/Addon/DeleteAddonLinkersByLinkerKeyValuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteAddonLinkersByLinkerKeyValuesError](src/Bitbucket/Errors/DeleteAddonLinkersByLinkerKeyValuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAddonLinkersByLinkerKeyValuesByValueId(DeleteAddonLinkersByLinkerKeyValuesByValueIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single linker value
of the authenticated application.

This endpoint is deprecated and will be removed by May 2026.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Addon.DeleteAddonLinkersByLinkerKeyValuesByValueId(
        new DeleteAddonLinkersByLinkerKeyValuesByValueIdRequest { LinkerKey = "some example string", ValueId = 1 });
}
catch (ApiException<DeleteAddonLinkersByLinkerKeyValuesByValueIdError> ex)
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

<code>[DeleteAddonLinkersByLinkerKeyValuesByValueIdRequest](src/Bitbucket/Requests/Addon/DeleteAddonLinkersByLinkerKeyValuesByValueIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteAddonLinkersByLinkerKeyValuesByValueIdError](src/Bitbucket/Errors/DeleteAddonLinkersByLinkerKeyValuesByValueIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetAddonLinkers(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of all linkers
for the authenticated application.

This endpoint is deprecated and will be removed by May 2026.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Addon.GetAddonLinkers();
}
catch (ApiException<GetAddonLinkersError> ex)
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

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetAddonLinkersError](src/Bitbucket/Errors/GetAddonLinkersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetAddonLinkersByLinkerKey(GetAddonLinkersByLinkerKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a linker specified by `linker_key`
for the authenticated application.

This endpoint is deprecated and will be removed by May 2026.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Addon.GetAddonLinkersByLinkerKey(new GetAddonLinkersByLinkerKeyRequest
    {
        LinkerKey = "some example string",
    });
}
catch (ApiException<GetAddonLinkersByLinkerKeyError> ex)
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

<code>[GetAddonLinkersByLinkerKeyRequest](src/Bitbucket/Requests/Addon/GetAddonLinkersByLinkerKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetAddonLinkersByLinkerKeyError](src/Bitbucket/Errors/GetAddonLinkersByLinkerKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetAddonLinkersByLinkerKeyValues(GetAddonLinkersByLinkerKeyValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of all linker values for the
specified linker of the authenticated application.

A linker value lets applications supply values to modify its regular expression.

The base regular expression must use a Bitbucket-specific match group `(?K)`
which will be translated to `([\w\-]+)`. A value must match this pattern.

Read more about linker values

This endpoint is deprecated and will be removed by May 2026.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Addon.GetAddonLinkersByLinkerKeyValues(new GetAddonLinkersByLinkerKeyValuesRequest
    {
        LinkerKey = "some example string",
    });
}
catch (ApiException<GetAddonLinkersByLinkerKeyValuesError> ex)
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

<code>[GetAddonLinkersByLinkerKeyValuesRequest](src/Bitbucket/Requests/Addon/GetAddonLinkersByLinkerKeyValuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetAddonLinkersByLinkerKeyValuesError](src/Bitbucket/Errors/GetAddonLinkersByLinkerKeyValuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetAddonLinkersByLinkerKeyValuesByValueId(GetAddonLinkersByLinkerKeyValuesByValueIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single linker value
of the authenticated application.

This endpoint is deprecated and will be removed by May 2026.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Addon.GetAddonLinkersByLinkerKeyValuesByValueId(new GetAddonLinkersByLinkerKeyValuesByValueIdRequest
    {
        LinkerKey = "some example string",
        ValueId = 1,
    });
}
catch (ApiException<GetAddonLinkersByLinkerKeyValuesByValueIdError> ex)
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

<code>[GetAddonLinkersByLinkerKeyValuesByValueIdRequest](src/Bitbucket/Requests/Addon/GetAddonLinkersByLinkerKeyValuesByValueIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetAddonLinkersByLinkerKeyValuesByValueIdError](src/Bitbucket/Errors/GetAddonLinkersByLinkerKeyValuesByValueIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostAddonLinkersByLinkerKeyValues(PostAddonLinkersByLinkerKeyValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a linker value for the specified
linker of authenticated application.

A linker value lets applications supply values to modify its regular expression.

The base regular expression must use a Bitbucket-specific match group `(?K)`
which will be translated to `([\w\-]+)`. A value must match this pattern.

Read more about linker values

This endpoint is deprecated and will be removed by May 2026.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Addon.PostAddonLinkersByLinkerKeyValues(new PostAddonLinkersByLinkerKeyValuesRequest
    {
        LinkerKey = "some example string",
    });
}
catch (ApiException<PostAddonLinkersByLinkerKeyValuesError> ex)
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

<code>[PostAddonLinkersByLinkerKeyValuesRequest](src/Bitbucket/Requests/Addon/PostAddonLinkersByLinkerKeyValuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostAddonLinkersByLinkerKeyValuesError](src/Bitbucket/Errors/PostAddonLinkersByLinkerKeyValuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutAddon(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the application installation for the user.

This endpoint is intended to be used by Bitbucket Connect apps
and only supports JWT authentication -- that is how Bitbucket
identifies the particular installation of the app. Developers
with applications registered in the "Develop Apps" section
of Bitbucket need not use this endpoint as updates for those
applications can be sent out via the UI of that section.

Passing an empty body will update the installation using the
existing descriptor URL.

```
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
-H "Authorization: JWT " \
--header "Content-Type: application/json" \
--data '{}'
```

The new `descriptor` for the installation can be also provided
in the body directly.

```
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
-H "Authorization: JWT " \
--header "Content-Type: application/json" \
--data '{"descriptor": $NEW_DESCRIPTOR}'
```

In both these modes the URL of the descriptor cannot be changed. To
change the descriptor location and upgrade an installation
the request must be made exclusively with a `descriptor_url`.

```
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
-H "Authorization: JWT " \
--header "Content-Type: application/json" \
--data '{"descriptor_url": $NEW_URL}'
```

The `descriptor_url` must exactly match the marketplace registration
that Atlassian has for the application. Contact your Atlassian
developer advocate to update this registration. Once the registration
has been updated you may call this resource for each installation.

Note that the scopes of the application cannot be increased
in the new descriptor nor reduced to none.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Addon.PutAddon();
}
catch (ApiException<PutAddonError> ex)
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

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutAddonError](src/Bitbucket/Errors/PutAddonError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutAddonLinkersByLinkerKeyValues(PutAddonLinkersByLinkerKeyValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update linker values for the specified
linker of the authenticated application.

A linker value lets applications supply values to modify its regular expression.

The base regular expression must use a Bitbucket-specific match group `(?K)`
which will be translated to `([\w\-]+)`. A value must match this pattern.

Read more about linker values

This endpoint is deprecated and will be removed by May 2026.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Addon.PutAddonLinkersByLinkerKeyValues(new PutAddonLinkersByLinkerKeyValuesRequest
    {
        LinkerKey = "some example string",
    });
}
catch (ApiException<PutAddonLinkersByLinkerKeyValuesError> ex)
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

<code>[PutAddonLinkersByLinkerKeyValuesRequest](src/Bitbucket/Requests/Addon/PutAddonLinkersByLinkerKeyValuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutAddonLinkersByLinkerKeyValuesError](src/Bitbucket/Errors/PutAddonLinkersByLinkerKeyValuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BranchRestrictions

> Source: [BranchRestrictions](src/Bitbucket/Api/BranchRestrictions.cs)

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById(DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an existing branch restriction rule.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.BranchRestrictions.DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById(
        new DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest
        {
            Id = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest](src/Bitbucket/Requests/BranchRestrictions/DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedBranchRestrictions&gt; GetRepositoriesByWorkspaceByRepoSlugBranchRestrictions(GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of all branch restrictions on the
repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BranchRestrictions.GetRepositoriesByWorkspaceByRepoSlugBranchRestrictions(
        new GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedBranchRestrictions
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest](src/Bitbucket/Requests/BranchRestrictions/GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedBranchRestrictions](src/Bitbucket/Models/PaginatedBranchRestrictions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Branchrestriction&gt; GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById(GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific branch restriction rule.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BranchRestrictions.GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById(
        new GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest
        {
            Id = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Branchrestriction
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest](src/Bitbucket/Requests/BranchRestrictions/GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Branchrestriction](src/Bitbucket/Models/AllOf/Branchrestriction.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Branchrestriction&gt; PostRepositoriesByWorkspaceByRepoSlugBranchRestrictions(PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new branch restriction rule for a repository.

`kind` describes what will be restricted. Allowed values include:
`push`, `force`, `delete`, `restrict_merges`, `require_tasks_to_be_completed`,
`require_approvals_to_merge`, `require_default_reviewer_approvals_to_merge`,
`require_no_changes_requested`, `require_passing_builds_to_merge`, `require_commits_behind`,
`reset_pullrequest_approvals_on_change`, `smart_reset_pullrequest_approvals`,
`reset_pullrequest_changes_requested_on_change`, `require_all_dependencies_merged`,
`enforce_merge_checks`, and `allow_auto_merge_when_builds_pass`.

Different kinds of branch restrictions have different requirements:

* `push` and `restrict_merges` require `users` and `groups` to be
specified. Empty lists are allowed, in which case permission is
denied for everybody.

The restriction applies to all branches that match. There are
two ways to match a branch. It is configured in `branch_match_kind`:

1. `glob`: Matches a branch against the `pattern`. A `'*'` in
`pattern` will expand to match zero or more characters, and every
other character matches itself. For example, `'foo*'` will match
`'foo'` and `'foobar'`, but not `'barfoo'`. `'*'` will match all
branches.
2. `branching_model`: Matches a branch against the repository's
branching model. The `branch_type` controls the type of branch
to match. Allowed values include: `production`, `development`,
`bugfix`, `release`, `feature` and `hotfix`.

The combination of `kind` and match must be unique. This means that
two `glob` restrictions in a repository cannot have the same `kind` and
`pattern`. Additionally, two `branching_model` restrictions in a
repository cannot have the same `kind` and `branch_type`.

`users` and `groups` are lists of users and groups that are except from
the restriction. They can only be configured in `push` and
`restrict_merges` restrictions. The `push` restriction stops a user
pushing to matching branches unless that user is in `users` or is a
member of a group in `groups`. The `restrict_merges` stops a user
merging pull requests to matching branches unless that user is in
`users` or is a member of a group in `groups`. Adding new users or
groups to an existing restriction should be done via `PUT`.

Note that branch restrictions with overlapping matchers is allowed,
but the resulting behavior may be surprising.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BranchRestrictions.PostRepositoriesByWorkspaceByRepoSlugBranchRestrictions(
        new PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
            Body = new Branchrestriction
            {
                ObjectModel = new ObjectModel(),
                BranchrestrictionProperties = new BranchrestrictionProperties
                {
                    Kind = Kind.Push,
                    BranchMatchKind = BranchMatchKind.BranchingModel,
                    Pattern = "some example string",
                },
            },
        });
    // TODO: Handle 'response' of type Branchrestriction
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest](src/Bitbucket/Requests/BranchRestrictions/PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Branchrestriction](src/Bitbucket/Models/AllOf/Branchrestriction.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Branchrestriction&gt; PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById(PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing branch restriction rule.

Fields not present in the request body are ignored.

See `POST` for details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BranchRestrictions.PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById(
        new PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest
        {
            Id = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
            Body = new Branchrestriction
            {
                ObjectModel = new ObjectModel(),
                BranchrestrictionProperties = new BranchrestrictionProperties
                {
                    Kind = Kind.Push,
                    BranchMatchKind = BranchMatchKind.BranchingModel,
                    Pattern = "some example string",
                },
            },
        });
    // TODO: Handle 'response' of type Branchrestriction
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest](src/Bitbucket/Requests/BranchRestrictions/PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Branchrestriction](src/Bitbucket/Models/AllOf/Branchrestriction.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BranchingModelApi

> Source: [BranchingModelApi](src/Bitbucket/Api/BranchingModelApi.cs)

<details>
<summary><code>Task&lt;BranchingModel&gt; GetRepositoriesByWorkspaceByRepoSlugBranchingModel(GetRepositoriesByWorkspaceByRepoSlugBranchingModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the branching model as applied to the repository. This view is
read-only. The branching model settings can be changed using the
settings API.

The returned object:

1. Always has a `development` property. `development.branch` contains
the actual repository branch object that is considered to be the
`development` branch. `development.branch` will not be present
if it does not exist.
2. Might have a `production` property. `production` will not
be present when `production` is disabled.
`production.branch` contains the actual branch object that is
considered to be the `production` branch. `production.branch` will
not be present if it does not exist.
3. Always has a `branch_types` array which contains all enabled branch
types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BranchingModelApi.GetRepositoriesByWorkspaceByRepoSlugBranchingModel(
        new GetRepositoriesByWorkspaceByRepoSlugBranchingModelRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type BranchingModel
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugBranchingModelError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugBranchingModelRequest](src/Bitbucket/Requests/BranchingModelApi/GetRepositoriesByWorkspaceByRepoSlugBranchingModelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BranchingModel](src/Bitbucket/Models/AllOf/BranchingModel.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugBranchingModelError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugBranchingModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BranchingModelSettings&gt; GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettings(GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the branching model configuration for a repository. The returned
object:

1. Always has a `development` property for the development branch.
2. Always a `production` property for the production branch. The
production branch can be disabled.
3. The `branch_types` contains all the branch types.
4. `default_branch_deletion` indicates whether branches will be
deleted by default on merge.

This is the raw configuration for the branching model. A client
wishing to see the branching model with its actual current branches may
find the active model API more useful.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BranchingModelApi.GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettings(
        new GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type BranchingModelSettings
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest](src/Bitbucket/Requests/BranchingModelApi/GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BranchingModelSettings](src/Bitbucket/Models/AllOf/BranchingModelSettings.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EffectiveRepoBranchingModel&gt; GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModel(GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BranchingModelApi.GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModel(
        new GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type EffectiveRepoBranchingModel
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelRequest](src/Bitbucket/Requests/BranchingModelApi/GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EffectiveRepoBranchingModel](src/Bitbucket/Models/AllOf/EffectiveRepoBranchingModel.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectBranchingModel&gt; GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModel(GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the branching model set at the project level. This view is
read-only. The branching model settings can be changed using the
settings
API.

The returned object:

1. Always has a `development` property. `development.name` is
the user-specified branch that can be inherited by an individual repository's
branching model.
2. Might have a `production` property. `production` will not
be present when `production` is disabled.
`production.name` is the user-specified branch that can be
inherited by an individual repository's branching model.
3. Always has a `branch_types` array which contains all enabled branch
types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BranchingModelApi.GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModel(
        new GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelRequest
        {
            ProjectKey = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type ProjectBranchingModel
}
catch (ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelError> ex)
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

<code>[GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelRequest](src/Bitbucket/Requests/BranchingModelApi/GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectBranchingModel](src/Bitbucket/Models/AllOf/ProjectBranchingModel.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BranchingModelSettings&gt; GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettings(GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the branching model configuration for a project. The returned
object:

1. Always has a `development` property for the development branch.
2. Always a `production` property for the production branch. The
production branch can be disabled.
3. The `branch_types` contains all the branch types.
4. `default_branch_deletion` indicates whether branches will be
deleted by default on merge.

This is the raw configuration for the branching model. A client
wishing to see the branching model with its actual current branches may find the
active model API
more useful.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BranchingModelApi.GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettings(
        new GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest
        {
            ProjectKey = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type BranchingModelSettings
}
catch (ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError> ex)
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

<code>[GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest](src/Bitbucket/Requests/BranchingModelApi/GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BranchingModelSettings](src/Bitbucket/Models/AllOf/BranchingModelSettings.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BranchingModelSettings&gt; PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettings(PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the branching model configuration for a repository.

The `development` branch can be configured to a specific branch or to
track the main branch. When set to a specific branch it must
currently exist. Only the passed properties will be updated. The
properties not passed will be left unchanged. A request without a
`development` property will leave the development branch unchanged.

It is possible for the `development` branch to be invalid. This
happens when it points at a specific branch that has been
deleted. This is indicated in the `is_valid` field for the branch. It is
not possible to update the settings for `development` if that
would leave the branch in an invalid state. Such a request will be
rejected.

The `production` branch can be a specific branch, the main
branch or disabled. When set to a specific branch it must currently
exist. The `enabled` property can be used to enable (`true`) or
disable (`false`) it. Only the passed properties will be updated. The
properties not passed will be left unchanged. A request without a
`production` property will leave the production branch unchanged.

It is possible for the `production` branch to be invalid. This
happens when it points at a specific branch that has been
deleted. This is indicated in the `is_valid` field for the branch. A
request that would leave `production` enabled and invalid will be
rejected. It is possible to update `production` and make it invalid if
it would also be left disabled.

The `branch_types` property contains the branch types to be updated.
Only the branch types passed will be updated. All updates will be
rejected if it would leave the branching model in an invalid state.
For branch types this means that:

1. The prefixes for all enabled branch types are valid. For example,
it is not possible to use '*' inside a Git prefix.
2. A prefix of an enabled branch type must not be a prefix of another
enabled branch type. This is to ensure that a branch can be easily
classified by its prefix unambiguously.

It is possible to store an invalid prefix if that branch type would be
left disabled. Only the passed properties will be updated. The
properties not passed will be left unchanged. Each branch type must
have a `kind` property to identify it.

The `default_branch_deletion` property is a string. The value of `true`
indicates to delete branches by default. The value of `false` indicates
that branches will not be deleted by default. A request without a
`default_branch_deletion` property will leave it unchanged. Other values
would be ignored.

There is currently a side effect when using this API endpoint. If the
repository is inheriting branching model settings from its project,
updating the branching model for this repository will disable the
project setting inheritance.

We have deprecated this side effect and will remove it on 1 August 2022.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BranchingModelApi.PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettings(
        new PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type BranchingModelSettings
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest](src/Bitbucket/Requests/BranchingModelApi/PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BranchingModelSettings](src/Bitbucket/Models/AllOf/BranchingModelSettings.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BranchingModelSettings&gt; PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettings(PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the branching model configuration for a project.

The `development` branch can be configured to a specific branch or to
track the main branch. Any branch name can be supplied, but will only
successfully be applied to a repository via inheritance if that branch
exists for that repository. Only the passed properties will be updated. The
properties not passed will be left unchanged. A request without a
`development` property will leave the development branch unchanged.

The `production` branch can be a specific branch, the main
branch or disabled. Any branch name can be supplied, but will only
successfully be applied to a repository via inheritance if that branch
exists for that repository. The `enabled` property can be used to enable (`true`)
or disable (`false`) it. Only the passed properties will be updated. The
properties not passed will be left unchanged. A request without a
`production` property will leave the production branch unchanged.

The `branch_types` property contains the branch types to be updated.
Only the branch types passed will be updated. All updates will be
rejected if it would leave the branching model in an invalid state.
For branch types this means that:

1. The prefixes for all enabled branch types are valid. For example,
it is not possible to use '*' inside a Git prefix.
2. A prefix of an enabled branch type must not be a prefix of another
enabled branch type. This is to ensure that a branch can be easily
classified by its prefix unambiguously.

It is possible to store an invalid prefix if that branch type would be
left disabled. Only the passed properties will be updated. The
properties not passed will be left unchanged. Each branch type must
have a `kind` property to identify it.

The `default_branch_deletion` property is a string. The value of `true`
indicates to delete branches by default. The value of `false` indicates
that branches will not be deleted by default. A request without a
`default_branch_deletion` property will leave it unchanged. Other values
would be ignored.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BranchingModelApi.PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettings(
        new PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest
        {
            ProjectKey = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type BranchingModelSettings
}
catch (ApiException<PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError> ex)
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

<code>[PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest](src/Bitbucket/Requests/BranchingModelApi/PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BranchingModelSettings](src/Bitbucket/Models/AllOf/BranchingModelSettings.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError](src/Bitbucket/Errors/PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CommitStatuses

> Source: [CommitStatuses](src/Bitbucket/Api/CommitStatuses.cs)

<details>
<summary><code>Task&lt;PaginatedCommitStatuses&gt; GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatuses(GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all statuses (e.g. build results) for a specific commit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommitStatuses.GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatuses(
        new GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesRequest
        {
            Commit = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedCommitStatuses
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesRequest](src/Bitbucket/Requests/CommitStatuses/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedCommitStatuses](src/Bitbucket/Models/PaginatedCommitStatuses.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Commitstatus&gt; GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKey(GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified build status for a commit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommitStatuses.GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKey(
        new GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest
        {
            Commit = "some example string",
            Key = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Commitstatus
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest](src/Bitbucket/Requests/CommitStatuses/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Commitstatus](src/Bitbucket/Models/AllOf/Commitstatus.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedCommitStatuses&gt; GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all statuses (e.g. build results) for the given pull
request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommitStatuses.GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses(
        new GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedCommitStatuses
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesRequest](src/Bitbucket/Requests/CommitStatuses/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedCommitStatuses](src/Bitbucket/Models/PaginatedCommitStatuses.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Commitstatus&gt; PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuild(PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new build status against the specified commit.

If the specified key already exists, the existing status object will
be overwritten.

Example:

```
curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/ -X POST -u jdoe -H 'Content-Type: application/json' -d '{
"key": "MY-BUILD",
"state": "SUCCESSFUL",
"description": "42 tests passed",
"url": "https://www.example.org/my-build-result"
}'
```

When creating a new commit status, you can use a URI template for the URL.
Templates are URLs that contain variable names that Bitbucket will
evaluate at runtime whenever the URL is displayed anywhere similar to
parameter substitution in
Bitbucket Connect.
For example, one could use `https://foo.com/builds/{repository.full_name}`
which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time.
The context variables available are `repository` and `commit`.

To associate a commit status to a pull request, the refname field must be set to the source branch
of the pull request.

Example:
```
curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/ -X POST -u jdoe -H 'Content-Type: application/json' -d '{
"key": "MY-BUILD",
"state": "SUCCESSFUL",
"description": "42 tests passed",
"url": "https://www.example.org/my-build-result",
"refname": "my-pr-branch"
}'
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommitStatuses.PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuild(
        new PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildRequest
        {
            Commit = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Commitstatus
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildRequest](src/Bitbucket/Requests/CommitStatuses/PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Commitstatus](src/Bitbucket/Models/AllOf/Commitstatus.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Commitstatus&gt; PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKey(PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used to update the current status of a build status object on the
specific commit.

This operation can also be used to change other properties of the
build status:

* `state`
* `name`
* `description`
* `url`
* `refname`

The `key` cannot be changed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommitStatuses.PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKey(
        new PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest
        {
            Commit = "some example string",
            Key = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Commitstatus
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest](src/Bitbucket/Requests/CommitStatuses/PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Commitstatus](src/Bitbucket/Models/AllOf/Commitstatus.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Commits

> Source: [Commits](src/Bitbucket/Api/Commits.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ReportAnnotation&gt;&gt; BulkCreateOrUpdateAnnotations(BulkCreateOrUpdateAnnotationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk upload of annotations.
Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated UUID. You can upload up to 100 annotations per POST request.

### Sample cURL request:
```
curl --location 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001/annotations' \
--header 'Content-Type: application/json' \
--data-raw '[
{
"external_id": "mysystem-annotation001",
"title": "Security scan report",
"annotation_type": "VULNERABILITY",
"summary": "This line represents a security threat.",
"severity": "HIGH",
"path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
"line": 42
},
{
"external_id": "mySystem-annotation002",
"title": "Bug report",
"annotation_type": "BUG",
"result": "FAILED",
"summary": "This line might introduce a bug.",
"severity": "MEDIUM",
"path": "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java",
"line": 13
}
]'
```

### Possible field values:
annotation_type: VULNERABILITY, CODE_SMELL, BUG
result: PASSED, FAILED, IGNORED, SKIPPED
severity: HIGH, MEDIUM, LOW, CRITICAL

Please refer to the Code Insights documentation for more information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.BulkCreateOrUpdateAnnotations(new BulkCreateOrUpdateAnnotationsRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
        Body = [
            new ReportAnnotation
            {
                ObjectModel = new ObjectModel(),
                ReportAnnotationProperties = new ReportAnnotationProperties(),
            },
        ],
    });
    // TODO: Handle 'response' of type IReadOnlyList<ReportAnnotation>
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

<code>[BulkCreateOrUpdateAnnotationsRequest](src/Bitbucket/Requests/Commits/BulkCreateOrUpdateAnnotationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ReportAnnotation](src/Bitbucket/Models/AllOf/ReportAnnotation.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReportAnnotation&gt; CreateOrUpdateAnnotation(CreateOrUpdateAnnotationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates an individual annotation for the specified report.
Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated UUID. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.

### Sample cURL request:
```
curl --request PUT 'https://api.bitbucket.org/2.0/repositories///commit//reports/mySystem-001/annotations/mysystem-annotation001' \
--header 'Content-Type: application/json' \
--data-raw '{
"title": "Security scan report",
"annotation_type": "VULNERABILITY",
"summary": "This line represents a security thread.",
"severity": "HIGH",
"path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
"line": 42
}'
```

### Possible field values:
annotation_type: VULNERABILITY, CODE_SMELL, BUG
result: PASSED, FAILED, IGNORED, SKIPPED
severity: HIGH, MEDIUM, LOW, CRITICAL

Please refer to the Code Insights documentation for more information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.CreateOrUpdateAnnotation(new CreateOrUpdateAnnotationRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
        AnnotationId = "some example string",
        Body = new ReportAnnotation
        {
            ObjectModel = new ObjectModel(),
            ReportAnnotationProperties = new ReportAnnotationProperties(),
        },
    });
    // TODO: Handle 'response' of type ReportAnnotation
}
catch (ApiException<CreateOrUpdateAnnotationError> ex)
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

<code>[CreateOrUpdateAnnotationRequest](src/Bitbucket/Requests/Commits/CreateOrUpdateAnnotationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportAnnotation](src/Bitbucket/Models/AllOf/ReportAnnotation.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[CreateOrUpdateAnnotationError](src/Bitbucket/Errors/CreateOrUpdateAnnotationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Report&gt; CreateOrUpdateReport(CreateOrUpdateReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates a report for the specified commit.
To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.

### Sample cURL request:
```
curl --request PUT 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001' \
--header 'Content-Type: application/json' \
--data-raw '{
"title": "Security scan report",
"details": "This pull request introduces 10 new dependency vulnerabilities.",
"report_type": "SECURITY",
"reporter": "mySystem",
"link": "http://www.mysystem.com/reports/001",
"result": "FAILED",
"data": [
{
"title": "Duration (seconds)",
"type": "DURATION",
"value": 14
},
{
"title": "Safe to merge?",
"type": "BOOLEAN",
"value": false
}
]
}'
```

### Possible field values:
report_type: SECURITY, COVERAGE, TEST, BUG
result: PASSED, FAILED, PENDING
data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT

#### Data field formats
| Type Field | Value Field Type | Value Field Display |
|:--------------|:------------------|:--------------------|
| None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
| BOOLEAN | Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
| DATE | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and will be displayed as a relative date if the date is less than one week ago, otherwise it will be displayed as an absolute date. |
| DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human readable duration format. |
| LINK | Object: `{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}` | The value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a clickable link on the report. |
| NUMBER | Number | The value will be read as a JSON number and large numbers will be displayed in a human readable format (e.g. 14.3k). |
| PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will be displayed with a percentage sign. |
| TEXT | String | The value will be read as a JSON string and will be displayed as-is |

Please refer to the Code Insights documentation for more information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.CreateOrUpdateReport(new CreateOrUpdateReportRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
        Body = new Report { ObjectModel = new ObjectModel(), ReportProperties = new ReportProperties() },
    });
    // TODO: Handle 'response' of type Report
}
catch (ApiException<CreateOrUpdateReportError> ex)
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

<code>[CreateOrUpdateReportRequest](src/Bitbucket/Requests/Commits/CreateOrUpdateReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Report](src/Bitbucket/Models/AllOf/Report.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[CreateOrUpdateReportError](src/Bitbucket/Errors/CreateOrUpdateReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAnnotation(DeleteAnnotationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single Annotation matching the provided ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Commits.DeleteAnnotation(new DeleteAnnotationRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
        AnnotationId = "some example string",
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

<code>[DeleteAnnotationRequest](src/Bitbucket/Requests/Commits/DeleteAnnotationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteReport(DeleteReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single Report matching the provided ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Commits.DeleteReport(new DeleteReportRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
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

<code>[DeleteReportRequest](src/Bitbucket/Requests/Commits/DeleteReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApprove(DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Redact the authenticated user's approval of the specified commit.

This operation is only available to users that have explicit access to
the repository. In contrast, just the fact that a repository is
publicly accessible to users does not give them the ability to approve
commits.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Commits.DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApprove(
        new DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest
        {
            Commit = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest](src/Bitbucket/Requests/Commits/DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentId(DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified commit comment.

Note that deleting comments that have visible replies that point to
them will not really delete the resource. This is to retain the integrity
of the original comment tree. Instead, the `deleted` element is set to
`true` and the content is blanked out. The comment will continue to be
returned by the collections and self endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Commits.DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentId(
        new DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest
        {
            CommentId = 1L,
            Commit = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest](src/Bitbucket/Requests/Commits/DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReportAnnotation&gt; GetAnnotation(GetAnnotationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single Annotation matching the provided ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.GetAnnotation(new GetAnnotationRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
        AnnotationId = "some example string",
    });
    // TODO: Handle 'response' of type ReportAnnotation
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

<code>[GetAnnotationRequest](src/Bitbucket/Requests/Commits/GetAnnotationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportAnnotation](src/Bitbucket/Models/AllOf/ReportAnnotation.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetAnnotationError](src/Bitbucket/Errors/GetAnnotationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedAnnotations&gt; GetAnnotationsForReport(GetAnnotationsForReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of Annotations for a specified report.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.GetAnnotationsForReport(new GetAnnotationsForReportRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedAnnotations
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

<code>[GetAnnotationsForReportRequest](src/Bitbucket/Requests/Commits/GetAnnotationsForReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedAnnotations](src/Bitbucket/Models/PaginatedAnnotations.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Report&gt; GetReport(GetReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single Report matching the provided ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.GetReport(new GetReportRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
    });
    // TODO: Handle 'response' of type Report
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

<code>[GetReportRequest](src/Bitbucket/Requests/Commits/GetReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Report](src/Bitbucket/Models/AllOf/Report.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetReportError](src/Bitbucket/Errors/GetReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedReports&gt; GetReportsForCommit(GetReportsForCommitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of Reports linked to this commit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.GetReportsForCommit(new GetReportsForCommitRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedReports
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

<code>[GetReportsForCommitRequest](src/Bitbucket/Requests/Commits/GetReportsForCommitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedReports](src/Bitbucket/Models/PaginatedReports.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Commit&gt; GetRepositoriesByWorkspaceByRepoSlugCommitByCommit(GetRepositoriesByWorkspaceByRepoSlugCommitByCommitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified commit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.GetRepositoriesByWorkspaceByRepoSlugCommitByCommit(
        new GetRepositoriesByWorkspaceByRepoSlugCommitByCommitRequest
        {
            Commit = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Commit
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugCommitByCommitError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugCommitByCommitRequest](src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Commit](src/Bitbucket/Models/AllOf/Commit.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugCommitByCommitError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedCommitComments&gt; GetRepositoriesByWorkspaceByRepoSlugCommitByCommitComments(GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the commit's comments.

This includes both global and inline comments.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.GetRepositoriesByWorkspaceByRepoSlugCommitByCommitComments(
        new GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest
        {
            Commit = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedCommitComments
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

<code>[GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest](src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedCommitComments](src/Bitbucket/Models/PaginatedCommitComments.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CommitComment&gt; GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentId(GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified commit comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentId(
        new GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest
        {
            CommentId = 1L,
            Commit = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type CommitComment
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

<code>[GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest](src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommitComment](src/Bitbucket/Models/AllOf/CommitComment.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Page&gt; GetRepositoriesByWorkspaceByRepoSlugCommits(GetRepositoriesByWorkspaceByRepoSlugCommitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

These are the repository's commits. They are paginated and returned
in reverse chronological order, similar to the output of `git log`.
Like these tools, the DAG can be filtered.

#### GET /repositories/{workspace}/{repo_slug}/commits/

Returns all commits in the repo in topological order (newest commit
first). All branches and tags are included (similar to
`git log --all`).

#### GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master

Returns all commits in the repo that are not on master
(similar to `git log --all ^master`).

#### GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar

Returns all commits that are on refs `foo` or `bar`, but not on `fu` or
`fubar` (similar to `git log foo bar ^fu ^fubar`).

An optional `path` parameter can be specified that will limit the
results to commits that affect that path. `path` can either be a file
or a directory. If a directory is specified, commits are returned that
have modified any file in the directory tree rooted by `path`. It is
important to note that if the `path` parameter is specified, the commits
returned by this endpoint may no longer be a DAG, parent commits that
do not modify the path will be omitted from the response.

#### GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master

Returns all commits that are on refs `foo` or `bar`, but not on `master`
that changed the file README.md.

#### GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master

Returns all commits that are on refs `foo` or `bar`, but not on `master`
that changed to a file in any file in the directory src or its children.

Because the response could include a very large number of commits, it
is paginated. Follow the 'next' link in the response to navigate to the
next page of commits. As with other paginated resources, do not
construct your own links.

When the include and exclude parameters are more than can fit in a
query string, clients can use a `x-www-form-urlencoded` POST instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.GetRepositoriesByWorkspaceByRepoSlugCommits(
        new GetRepositoriesByWorkspaceByRepoSlugCommitsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Page
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugCommitsError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugCommitsRequest](src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugCommitsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Page](src/Bitbucket/Models/Page.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugCommitsError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugCommitsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Page&gt; GetRepositoriesByWorkspaceByRepoSlugCommitsByRevision(GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

These are the repository's commits. They are paginated and returned
in reverse chronological order, similar to the output of `git log`.
Like these tools, the DAG can be filtered.

#### GET /repositories/{workspace}/{repo_slug}/commits/master

Returns all commits on ref `master` (similar to `git log master`).

#### GET /repositories/{workspace}/{repo_slug}/commits/dev?include=foo&exclude=master

Returns all commits on ref `dev` or `foo`, except those that are reachable on
`master` (similar to `git log dev foo ^master`).

An optional `path` parameter can be specified that will limit the
results to commits that affect that path. `path` can either be a file
or a directory. If a directory is specified, commits are returned that
have modified any file in the directory tree rooted by `path`. It is
important to note that if the `path` parameter is specified, the commits
returned by this endpoint may no longer be a DAG, parent commits that
do not modify the path will be omitted from the response.

#### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=README.md&include=foo&include=bar&exclude=master

Returns all commits that are on refs `dev` or `foo` or `bar`, but not on `master`
that changed the file README.md.

#### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=src/&include=foo&exclude=master

Returns all commits that are on refs `dev` or `foo`, but not on `master`
that changed to a file in any file in the directory src or its children.

Because the response could include a very large number of commits, it
is paginated. Follow the 'next' link in the response to navigate to the
next page of commits. As with other paginated resources, do not
construct your own links.

When the include and exclude parameters are more than can fit in a
query string, clients can use a `x-www-form-urlencoded` POST instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.GetRepositoriesByWorkspaceByRepoSlugCommitsByRevision(
        new GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest
        {
            RepoSlug = "some example string",
            Revision = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Page
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest](src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Page](src/Bitbucket/Models/Page.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRepositoriesByWorkspaceByRepoSlugDiffBySpec(GetRepositoriesByWorkspaceByRepoSlugDiffBySpecRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Produces a raw git-style diff.

#### Single commit spec

If the `spec` argument to this API is a single commit, the diff is
produced against the first parent of the specified commit.

#### Two commit spec

Two commits separated by `..` may be provided as the `spec`, e.g.,
`3a8b42..9ff173`. When two commits are provided and the `topic` query
parameter is true, this API produces a 2-way three dot diff.
This is the diff between source commit and the merge base of the source
commit and the destination commit. When the `topic` query param is false,
a simple git-style diff is produced.

The two commits are interpreted as follows:

* First commit: the commit containing the changes we wish to preview
* Second commit: the commit representing the state to which we want to
compare the first commit
* **Note**: This is the opposite of the order used in `git diff`.

#### Comparison to patches

While similar to patches, diffs:

* Don't have a commit header (username, commit message, etc)
* Support the optional `path=foo/bar.py` query param to filter
the diff to just that one file diff

#### Response

The raw diff is returned as-is, in whatever encoding the files in the
repository use. It is not decoded into unicode. As such, the
content-type is `text/plain`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Commits.GetRepositoriesByWorkspaceByRepoSlugDiffBySpec(
        new GetRepositoriesByWorkspaceByRepoSlugDiffBySpecRequest
        {
            RepoSlug = "some example string",
            Spec = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugDiffBySpecError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugDiffBySpecRequest](src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugDiffBySpecRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugDiffBySpecError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDiffBySpecError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedDiffStat&gt; GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpec(GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Produces a response in JSON format with a record for every path
modified, including information on the type of the change and the
number of lines added and removed.

#### Single commit spec

If the `spec` argument to this API is a single commit, the diff is
produced against the first parent of the specified commit.

#### Two commit spec

Two commits separated by `..` may be provided as the `spec`, e.g.,
`3a8b42..9ff173`. When two commits are provided and the `topic` query
parameter is true, this API produces a 2-way three dot diff.
This is the diff between source commit and the merge base of the source
commit and the destination commit. When the `topic` query param is false,
a simple git-style diff is produced.

The two commits are interpreted as follows:

* First commit: the commit containing the changes we wish to preview
* Second commit: the commit representing the state to which we want to
compare the first commit
* **Note**: This is the opposite of the order used in `git diff`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpec(
        new GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecRequest
        {
            RepoSlug = "some example string",
            Spec = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedDiffStat
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecRequest](src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedDiffStat](src/Bitbucket/Models/PaginatedDiffStat.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Commit&gt; GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspec(GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the best common ancestor between two commits, specified in a revspec
of 2 commits (e.g. 3a8b42..9ff173).

If more than one best common ancestor exists, only one will be returned. It is
unspecified which will be returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspec(
        new GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecRequest
        {
            RepoSlug = "some example string",
            Revspec = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Commit
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecRequest](src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Commit](src/Bitbucket/Models/AllOf/Commit.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRepositoriesByWorkspaceByRepoSlugPatchBySpec(GetRepositoriesByWorkspaceByRepoSlugPatchBySpecRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Produces a raw patch for a single commit (diffed against its first
parent), or a patch-series for a revspec of 2 commits (e.g.
`3a8b42..9ff173` where the first commit represents the source and the
second commit the destination).

In case of the latter (diffing a revspec), a patch series is returned
for the commits on the source branch (`3a8b42` and its ancestors in
our example).

While similar to diffs, patches:

* Have a commit header (username, commit message, etc)
* Do not support the `path=foo/bar.py` query parameter

The raw patch is returned as-is, in whatever encoding the files in the
repository use. It is not decoded into unicode. As such, the
content-type is `text/plain`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Commits.GetRepositoriesByWorkspaceByRepoSlugPatchBySpec(
        new GetRepositoriesByWorkspaceByRepoSlugPatchBySpecRequest
        {
            RepoSlug = "some example string",
            Spec = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPatchBySpecError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPatchBySpecRequest](src/Bitbucket/Requests/Commits/GetRepositoriesByWorkspaceByRepoSlugPatchBySpecRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPatchBySpecError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPatchBySpecError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Participant&gt; PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApprove(PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve the specified commit as the authenticated user.

This operation is only available to users that have explicit access to
the repository. In contrast, just the fact that a repository is
publicly accessible to users does not give them the ability to approve
commits.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApprove(
        new PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest
        {
            Commit = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Participant
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest](src/Bitbucket/Requests/Commits/PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Participant](src/Bitbucket/Models/AllOf/Participant.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostRepositoriesByWorkspaceByRepoSlugCommitByCommitComments(PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new comment on the specified commit.

To post a reply to an existing comment, include the `parent.id` field:

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/ \
-X POST -u evzijst \
-H 'Content-Type: application/json' \
-d '{"content": {"raw": "One more thing!"},
"parent": {"id": 5728901}}'
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Commits.PostRepositoriesByWorkspaceByRepoSlugCommitByCommitComments(
        new PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest
        {
            Commit = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
            Body = new CommitComment
            {
                Comment = new Comment { ObjectModel = new ObjectModel(), CommentProperties = new CommentProperties() },
                ObjectModel = new ObjectModel(),
                CommitCommentProperties = new CommitCommentProperties(),
            },
        });
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest](src/Bitbucket/Requests/Commits/PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Page&gt; PostRepositoriesByWorkspaceByRepoSlugCommits(PostRepositoriesByWorkspaceByRepoSlugCommitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Identical to `GET /repositories/{workspace}/{repo_slug}/commits`,
except that POST allows clients to place the include and exclude
parameters in the request body to avoid URL length issues.

**Note that this resource does NOT support new commit creation.**

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.PostRepositoriesByWorkspaceByRepoSlugCommits(
        new PostRepositoriesByWorkspaceByRepoSlugCommitsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Page
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugCommitsError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugCommitsRequest](src/Bitbucket/Requests/Commits/PostRepositoriesByWorkspaceByRepoSlugCommitsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Page](src/Bitbucket/Models/Page.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugCommitsError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugCommitsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Page&gt; PostRepositoriesByWorkspaceByRepoSlugCommitsByRevision(PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Identical to `GET /repositories/{workspace}/{repo_slug}/commits/{revision}`,
except that POST allows clients to place the include and exclude
parameters in the request body to avoid URL length issues.

**Note that this resource does NOT support new commit creation.**

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Commits.PostRepositoriesByWorkspaceByRepoSlugCommitsByRevision(
        new PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest
        {
            RepoSlug = "some example string",
            Revision = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Page
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest](src/Bitbucket/Requests/Commits/PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Page](src/Bitbucket/Models/Page.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentId(PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used to update the contents of a comment. Only the content of the comment can be updated.

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/7f71b5/comments/5728901 \
-X PUT -u evzijst \
-H 'Content-Type: application/json' \
-d '{"content": {"raw": "One more thing!"}'
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Commits.PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentId(
        new PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest
        {
            CommentId = 1L,
            Commit = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
            Body = new CommitComment
            {
                Comment = new Comment { ObjectModel = new ObjectModel(), CommentProperties = new CommentProperties() },
                ObjectModel = new ObjectModel(),
                CommitCommentProperties = new CommitCommentProperties(),
            },
        });
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest](src/Bitbucket/Requests/Commits/PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Deployments

> Source: [Deployments](src/Bitbucket/Api/Deployments.cs)

<details>
<summary><code>Task&lt;DeploymentEnvironment&gt; CreateEnvironment(CreateEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deployments.CreateEnvironment(new CreateEnvironmentRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Body = new DeploymentEnvironment
        {
            ObjectModel = new ObjectModel(),
            DeploymentEnvironmentProperties = new DeploymentEnvironmentProperties(),
        },
    });
    // TODO: Handle 'response' of type DeploymentEnvironment
}
catch (ApiException<CreateEnvironmentError> ex)
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

<code>[CreateEnvironmentRequest](src/Bitbucket/Requests/Deployments/CreateEnvironmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeploymentEnvironment](src/Bitbucket/Models/AllOf/DeploymentEnvironment.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[CreateEnvironmentError](src/Bitbucket/Errors/CreateEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteEnvironmentForRepository(DeleteEnvironmentForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Deployments.DeleteEnvironmentForRepository(new DeleteEnvironmentForRepositoryRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        EnvironmentUuid = "some example string",
    });
}
catch (ApiException<DeleteEnvironmentForRepositoryError> ex)
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

<code>[DeleteEnvironmentForRepositoryRequest](src/Bitbucket/Requests/Deployments/DeleteEnvironmentForRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteEnvironmentForRepositoryError](src/Bitbucket/Errors/DeleteEnvironmentForRepositoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyId(DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This deletes a deploy key from a repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Deployments.DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyId(
        new DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest
        {
            KeyId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest](src/Bitbucket/Requests/Deployments/DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyId(DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This deletes a deploy key from a project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Deployments.DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyId(
        new DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest
        {
            KeyId = "some example string",
            ProjectKey = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError> ex)
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

<code>[DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest](src/Bitbucket/Requests/Deployments/DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError](src/Bitbucket/Errors/DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Deployment&gt; GetDeploymentForRepository(GetDeploymentForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a deployment

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deployments.GetDeploymentForRepository(new GetDeploymentForRepositoryRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        DeploymentUuid = "some example string",
    });
    // TODO: Handle 'response' of type Deployment
}
catch (ApiException<GetDeploymentForRepositoryError> ex)
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

<code>[GetDeploymentForRepositoryRequest](src/Bitbucket/Requests/Deployments/GetDeploymentForRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deployment](src/Bitbucket/Models/AllOf/Deployment.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetDeploymentForRepositoryError](src/Bitbucket/Errors/GetDeploymentForRepositoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedDeployments&gt; GetDeploymentsForRepository(GetDeploymentsForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find deployments

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deployments.GetDeploymentsForRepository(new GetDeploymentsForRepositoryRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedDeployments
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

<code>[GetDeploymentsForRepositoryRequest](src/Bitbucket/Requests/Deployments/GetDeploymentsForRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedDeployments](src/Bitbucket/Models/PaginatedDeployments.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeploymentEnvironment&gt; GetEnvironmentForRepository(GetEnvironmentForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an environment

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deployments.GetEnvironmentForRepository(new GetEnvironmentForRepositoryRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        EnvironmentUuid = "some example string",
    });
    // TODO: Handle 'response' of type DeploymentEnvironment
}
catch (ApiException<GetEnvironmentForRepositoryError> ex)
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

<code>[GetEnvironmentForRepositoryRequest](src/Bitbucket/Requests/Deployments/GetEnvironmentForRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeploymentEnvironment](src/Bitbucket/Models/AllOf/DeploymentEnvironment.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetEnvironmentForRepositoryError](src/Bitbucket/Errors/GetEnvironmentForRepositoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedDeploymentEnvironments&gt; GetEnvironmentsForRepository(GetEnvironmentsForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find environments

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deployments.GetEnvironmentsForRepository(new GetEnvironmentsForRepositoryRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedDeploymentEnvironments
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

<code>[GetEnvironmentsForRepositoryRequest](src/Bitbucket/Requests/Deployments/GetEnvironmentsForRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedDeploymentEnvironments](src/Bitbucket/Models/PaginatedDeploymentEnvironments.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedDeployKeys&gt; GetRepositoriesByWorkspaceByRepoSlugDeployKeys(GetRepositoriesByWorkspaceByRepoSlugDeployKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all deploy-keys belonging to a repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deployments.GetRepositoriesByWorkspaceByRepoSlugDeployKeys(
        new GetRepositoriesByWorkspaceByRepoSlugDeployKeysRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedDeployKeys
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugDeployKeysError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugDeployKeysRequest](src/Bitbucket/Requests/Deployments/GetRepositoriesByWorkspaceByRepoSlugDeployKeysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedDeployKeys](src/Bitbucket/Models/PaginatedDeployKeys.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugDeployKeysError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDeployKeysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeployKey&gt; GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyId(GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the deploy key belonging to a specific key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deployments.GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyId(
        new GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest
        {
            KeyId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type DeployKey
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest](src/Bitbucket/Requests/Deployments/GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeployKey](src/Bitbucket/Models/AllOf/DeployKey.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedProjectDeployKeys&gt; GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeys(GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all deploy keys belonging to a project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deployments.GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeys(
        new GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest
        {
            ProjectKey = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedProjectDeployKeys
}
catch (ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError> ex)
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

<code>[GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest](src/Bitbucket/Requests/Deployments/GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedProjectDeployKeys](src/Bitbucket/Models/PaginatedProjectDeployKeys.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectDeployKey&gt; GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyId(GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the deploy key belonging to a specific key ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deployments.GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyId(
        new GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest
        {
            KeyId = "some example string",
            ProjectKey = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type ProjectDeployKey
}
catch (ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError> ex)
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

<code>[GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest](src/Bitbucket/Requests/Deployments/GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectDeployKey](src/Bitbucket/Models/AllOf/ProjectDeployKey.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeployKey&gt; PostRepositoriesByWorkspaceByRepoSlugDeployKeys(PostRepositoriesByWorkspaceByRepoSlugDeployKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new deploy key in a repository. Note: If authenticating a deploy key
with an OAuth consumer, any changes to the OAuth consumer will subsequently
invalidate the deploy key.

Example:
```
$ curl -X POST \
-H "Authorization " \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
'{
"key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
"label": "mydeploykey"
}'
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deployments.PostRepositoriesByWorkspaceByRepoSlugDeployKeys(
        new PostRepositoriesByWorkspaceByRepoSlugDeployKeysRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type DeployKey
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugDeployKeysError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugDeployKeysRequest](src/Bitbucket/Requests/Deployments/PostRepositoriesByWorkspaceByRepoSlugDeployKeysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeployKey](src/Bitbucket/Models/AllOf/DeployKey.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugDeployKeysError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugDeployKeysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectDeployKey&gt; PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeys(PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new deploy key in a project.

Example:
```
$ curl -X POST \
-H "Authorization " \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/ -d \
'{
"key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
"label": "mydeploykey"
}'
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deployments.PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeys(
        new PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest
        {
            ProjectKey = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type ProjectDeployKey
}
catch (ApiException<PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError> ex)
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

<code>[PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest](src/Bitbucket/Requests/Deployments/PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectDeployKey](src/Bitbucket/Models/AllOf/ProjectDeployKey.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError](src/Bitbucket/Errors/PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeployKey&gt; PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyId(PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new deploy key in a repository.

The same key needs to be passed in but the comment and label can change.

Example:
```
$ curl -X PUT \
-H "Authorization " \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
'{
"label": "newlabel",
"key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 newcomment",
}'
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Deployments.PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyId(
        new PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest
        {
            KeyId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type DeployKey
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest](src/Bitbucket/Requests/Deployments/PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeployKey](src/Bitbucket/Models/AllOf/DeployKey.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateEnvironmentForRepository(UpdateEnvironmentForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Deployments.UpdateEnvironmentForRepository(new UpdateEnvironmentForRepositoryRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        EnvironmentUuid = "some example string",
    });
}
catch (ApiException<UpdateEnvironmentForRepositoryError> ex)
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

<code>[UpdateEnvironmentForRepositoryRequest](src/Bitbucket/Requests/Deployments/UpdateEnvironmentForRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[UpdateEnvironmentForRepositoryError](src/Bitbucket/Errors/UpdateEnvironmentForRepositoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Downloads

> Source: [Downloads](src/Bitbucket/Api/Downloads.cs)

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilename(DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified download artifact from the repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Downloads.DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilename(
        new DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest
        {
            Filename = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest](src/Bitbucket/Requests/Downloads/DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRepositoriesByWorkspaceByRepoSlugDownloads(GetRepositoriesByWorkspaceByRepoSlugDownloadsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of download links associated with the repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Downloads.GetRepositoriesByWorkspaceByRepoSlugDownloads(
        new GetRepositoriesByWorkspaceByRepoSlugDownloadsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugDownloadsError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugDownloadsRequest](src/Bitbucket/Requests/Downloads/GetRepositoriesByWorkspaceByRepoSlugDownloadsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugDownloadsError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDownloadsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilename(GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a redirect to the contents of a download artifact.

This endpoint returns the actual file contents and not the artifact's
metadata.

$ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt
Hello World

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Downloads.GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilename(
        new GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest
        {
            Filename = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest](src/Bitbucket/Requests/Downloads/GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostRepositoriesByWorkspaceByRepoSlugDownloads(PostRepositoriesByWorkspaceByRepoSlugDownloadsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload new download artifacts.

To upload files, perform a `multipart/form-data` POST containing one
or more `files` fields:

$ echo Hello World > hello.txt
$ curl -s -u evzijst -X POST https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt

When a file is uploaded with the same name as an existing artifact,
then the existing file will be replaced.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Downloads.PostRepositoriesByWorkspaceByRepoSlugDownloads(
        new PostRepositoriesByWorkspaceByRepoSlugDownloadsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugDownloadsError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugDownloadsRequest](src/Bitbucket/Requests/Downloads/PostRepositoriesByWorkspaceByRepoSlugDownloadsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugDownloadsError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugDownloadsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Gpg

> Source: [Gpg](src/Bitbucket/Api/Gpg.cs)

<details>
<summary><code>Task DeleteUsersBySelectedUserGpgKeysByFingerprint(DeleteUsersBySelectedUserGpgKeysByFingerprintRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific GPG public key from a user's account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Gpg.DeleteUsersBySelectedUserGpgKeysByFingerprint(
        new DeleteUsersBySelectedUserGpgKeysByFingerprintRequest
        {
            Fingerprint = "some example string",
            SelectedUser = "some example string",
        });
}
catch (ApiException<DeleteUsersBySelectedUserGpgKeysByFingerprintError> ex)
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

<code>[DeleteUsersBySelectedUserGpgKeysByFingerprintRequest](src/Bitbucket/Requests/Gpg/DeleteUsersBySelectedUserGpgKeysByFingerprintRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteUsersBySelectedUserGpgKeysByFingerprintError](src/Bitbucket/Errors/DeleteUsersBySelectedUserGpgKeysByFingerprintError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedGpgUserKeys&gt; GetUsersBySelectedUserGpgKeys(GetUsersBySelectedUserGpgKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of the user's GPG public keys.
The `key` and `subkeys` fields can also be requested from the endpoint.
See Partial Responses for more details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Gpg.GetUsersBySelectedUserGpgKeys(new GetUsersBySelectedUserGpgKeysRequest
    {
        SelectedUser = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedGpgUserKeys
}
catch (ApiException<GetUsersBySelectedUserGpgKeysError> ex)
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

<code>[GetUsersBySelectedUserGpgKeysRequest](src/Bitbucket/Requests/Gpg/GetUsersBySelectedUserGpgKeysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedGpgUserKeys](src/Bitbucket/Models/PaginatedGpgUserKeys.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetUsersBySelectedUserGpgKeysError](src/Bitbucket/Errors/GetUsersBySelectedUserGpgKeysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GpgAccountKey&gt; GetUsersBySelectedUserGpgKeysByFingerprint(GetUsersBySelectedUserGpgKeysByFingerprintRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific GPG public key belonging to a user.
The `key` and `subkeys` fields can also be requested from the endpoint.
See Partial Responses for more details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Gpg.GetUsersBySelectedUserGpgKeysByFingerprint(
        new GetUsersBySelectedUserGpgKeysByFingerprintRequest
        {
            Fingerprint = "some example string",
            SelectedUser = "some example string",
        });
    // TODO: Handle 'response' of type GpgAccountKey
}
catch (ApiException<GetUsersBySelectedUserGpgKeysByFingerprintError> ex)
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

<code>[GetUsersBySelectedUserGpgKeysByFingerprintRequest](src/Bitbucket/Requests/Gpg/GetUsersBySelectedUserGpgKeysByFingerprintRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GpgAccountKey](src/Bitbucket/Models/AllOf/GpgAccountKey.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetUsersBySelectedUserGpgKeysByFingerprintError](src/Bitbucket/Errors/GetUsersBySelectedUserGpgKeysByFingerprintError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GpgAccountKey&gt; PostUsersBySelectedUserGpgKeys(PostUsersBySelectedUserGpgKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new GPG public key to the specified user account and returns the resulting key.

Example:

```
$ curl -X POST -H "Content-Type: application/json" -d
'{"key": ""}'
https://api.bitbucket.org/2.0/users/{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}/gpg-keys
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Gpg.PostUsersBySelectedUserGpgKeys(new PostUsersBySelectedUserGpgKeysRequest
    {
        SelectedUser = "some example string",
    });
    // TODO: Handle 'response' of type GpgAccountKey
}
catch (ApiException<PostUsersBySelectedUserGpgKeysError> ex)
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

<code>[PostUsersBySelectedUserGpgKeysRequest](src/Bitbucket/Requests/Gpg/PostUsersBySelectedUserGpgKeysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GpgAccountKey](src/Bitbucket/Models/AllOf/GpgAccountKey.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostUsersBySelectedUserGpgKeysError](src/Bitbucket/Errors/PostUsersBySelectedUserGpgKeysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IssueTracker

> Source: [IssueTracker](src/Bitbucket/Api/IssueTracker.cs)

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueId(DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified issue. This requires write access to the
repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.IssueTracker.DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueId(
        new DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest
        {
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest](src/Bitbucket/Requests/IssueTracker/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPath(DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an attachment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.IssueTracker.DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPath(
        new DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest
        {
            IssueId = "some example string",
            Path = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest](src/Bitbucket/Requests/IssueTracker/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentId(DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.IssueTracker.DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentId(
        new DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest
        {
            CommentId = 1L,
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest](src/Bitbucket/Requests/IssueTracker/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Error&gt; DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVote(DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retract your vote.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVote(
        new DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest
        {
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Error
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest](src/Bitbucket/Requests/IssueTracker/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Error](src/Bitbucket/Models/Error.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Error&gt; DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatch(DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop watching this issue.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatch(
        new DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest
        {
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Error
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest](src/Bitbucket/Requests/IssueTracker/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Error](src/Bitbucket/Models/Error.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedComponents&gt; GetRepositoriesByWorkspaceByRepoSlugComponents(GetRepositoriesByWorkspaceByRepoSlugComponentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the components that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugComponents(
        new GetRepositoriesByWorkspaceByRepoSlugComponentsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedComponents
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugComponentsError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugComponentsRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugComponentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedComponents](src/Bitbucket/Models/PaginatedComponents.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugComponentsError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugComponentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Component&gt; GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentId(GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified issue tracker component object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentId(
        new GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdRequest
        {
            ComponentId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Component
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Component](src/Bitbucket/Models/AllOf/Component.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedIssues&gt; GetRepositoriesByWorkspaceByRepoSlugIssues(GetRepositoriesByWorkspaceByRepoSlugIssuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the issues in the issue tracker.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugIssues(
        new GetRepositoriesByWorkspaceByRepoSlugIssuesRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedIssues
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugIssuesRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedIssues](src/Bitbucket/Models/PaginatedIssues.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugIssuesError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Issue&gt; GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueId(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified issue.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueId(
        new GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest
        {
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Issue
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Issue](src/Bitbucket/Models/AllOf/Issue.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedIssueAttachment&gt; GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachments(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all attachments for this issue.

This returns the files' meta data. This does not return the files'
actual contents.

The files are always ordered by their upload date.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachments(
        new GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest
        {
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedIssueAttachment
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedIssueAttachment](src/Bitbucket/Models/PaginatedIssueAttachment.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPath(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the contents of the specified file attachment.

Note that this endpoint does not return a JSON response, but instead
returns a redirect pointing to the actual file that in turn will return
the raw contents.

The redirect URL contains a one-time token that has a limited lifetime.
As a result, the link should not be persisted, stored, or shared.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPath(
        new GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest
        {
            IssueId = "some example string",
            Path = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedLogEntries&gt; GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChanges(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of all changes that have been made to the specified
issue. Changes are returned in chronological order with the oldest
change first.

Each time an issue is edited in the UI or through the API, an immutable
change record is created under the `/issues/123/changes` endpoint. It
also has a comment associated with the change.

Note that this operation is changing significantly, due to privacy changes.
See the announcement
for details.

Changes support filtering and sorting that
can be used to search for specific changes. For instance, to see
when an issue transitioned to "resolved":

```
$ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \
-G --data-urlencode='q=changes.state.new = "resolved"'
```

This resource is only available on repositories that have the issue
tracker enabled.

N.B.

The `changes.assignee` and `changes.assignee_account_id` fields are not
a `user` object. Instead, they contain the raw `username` and
`account_id` of the user. This is to protect the integrity of the audit
log even after a user account gets deleted.

The `changes.assignee` field is deprecated will disappear in the
future. Use `changes.assignee_account_id` instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChanges(
        new GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest
        {
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedLogEntries
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedLogEntries](src/Bitbucket/Models/PaginatedLogEntries.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IssueChange&gt; GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeId(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified issue change object.

This resource is only available on repositories that have the issue
tracker enabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeId(
        new GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdRequest
        {
            ChangeId = "some example string",
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type IssueChange
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IssueChange](src/Bitbucket/Models/IssueChange.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedIssueComments&gt; GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdComments(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of all comments that were made on the
specified issue.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

This endpoint also supports filtering and sorting of the results. See
filtering and sorting for more details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdComments(
        new GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest
        {
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedIssueComments
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

<code>[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedIssueComments](src/Bitbucket/Models/PaginatedIssueComments.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IssueComment&gt; GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentId(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified issue comment object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentId(
        new GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest
        {
            CommentId = 1L,
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type IssueComment
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

<code>[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IssueComment](src/Bitbucket/Models/AllOf/IssueComment.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Error&gt; GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVote(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check whether the authenticated user has voted for this issue.
A 204 status code indicates that the user has voted, while a 404
implies they haven't.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVote(
        new GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest
        {
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Error
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Error](src/Bitbucket/Models/Error.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Error&gt; GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatch(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Indicated whether or not the authenticated user is watching this
issue.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatch(
        new GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest
        {
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Error
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Error](src/Bitbucket/Models/Error.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IssueJobStatus&gt; GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZip(GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint is used to poll for the progress of an issue export
job and return the zip file after the job is complete.
As long as the job is running, this will return a 202 response
with in the response body a description of the current status.

After the job has been scheduled, but before it starts executing, the endpoint
returns a 202 response with status `ACCEPTED`.

Once it starts running, it is a 202 response with status `STARTED` and progress filled.

After it is finished, it becomes a 200 response with status `SUCCESS` or `FAILURE`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZip(
        new GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest
        {
            RepoName = "some example string",
            RepoSlug = "some example string",
            TaskId = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type IssueJobStatus
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IssueJobStatus](src/Bitbucket/Models/IssueJobStatus.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IssueJobStatus&gt; GetRepositoriesByWorkspaceByRepoSlugIssuesImport(GetRepositoriesByWorkspaceByRepoSlugIssuesImportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

When using GET, this endpoint reports the status of the current import task.

After the job has been scheduled, but before it starts executing, the endpoint
returns a 202 response with status `ACCEPTED`.

Once it starts running, it is a 202 response with status `STARTED` and progress filled.

After it is finished, it becomes a 200 response with status `SUCCESS` or `FAILURE`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugIssuesImport(
        new GetRepositoriesByWorkspaceByRepoSlugIssuesImportRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type IssueJobStatus
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugIssuesImportError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugIssuesImportRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugIssuesImportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IssueJobStatus](src/Bitbucket/Models/IssueJobStatus.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugIssuesImportError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugIssuesImportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedMilestones&gt; GetRepositoriesByWorkspaceByRepoSlugMilestones(GetRepositoriesByWorkspaceByRepoSlugMilestonesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the milestones that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugMilestones(
        new GetRepositoriesByWorkspaceByRepoSlugMilestonesRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedMilestones
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugMilestonesError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugMilestonesRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugMilestonesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedMilestones](src/Bitbucket/Models/PaginatedMilestones.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugMilestonesError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugMilestonesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Milestone&gt; GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneId(GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified issue tracker milestone object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneId(
        new GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdRequest
        {
            MilestoneId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Milestone
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Milestone](src/Bitbucket/Models/AllOf/Milestone.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedVersions&gt; GetRepositoriesByWorkspaceByRepoSlugVersions(GetRepositoriesByWorkspaceByRepoSlugVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the versions that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugVersions(
        new GetRepositoriesByWorkspaceByRepoSlugVersionsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedVersions
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugVersionsError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugVersionsRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugVersionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedVersions](src/Bitbucket/Models/PaginatedVersions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugVersionsError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugVersionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VersionModel&gt; GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionId(GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified issue tracker version object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionId(
        new GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdRequest
        {
            RepoSlug = "some example string",
            VersionId = 1,
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type VersionModel
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdRequest](src/Bitbucket/Requests/IssueTracker/GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VersionModel](src/Bitbucket/Models/AllOf/VersionModel.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Issue&gt; PostRepositoriesByWorkspaceByRepoSlugIssues(PostRepositoriesByWorkspaceByRepoSlugIssuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new issue.

This call requires authentication. Private repositories or private
issue trackers require the caller to authenticate with an account that
has appropriate authorization.

The authenticated user is used for the issue's `reporter` field.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.PostRepositoriesByWorkspaceByRepoSlugIssues(
        new PostRepositoriesByWorkspaceByRepoSlugIssuesRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
            Body = new Issue { ObjectModel = new ObjectModel(), IssueProperties = new IssueProperties() },
        });
    // TODO: Handle 'response' of type Issue
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugIssuesError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugIssuesRequest](src/Bitbucket/Requests/IssueTracker/PostRepositoriesByWorkspaceByRepoSlugIssuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Issue](src/Bitbucket/Models/AllOf/Issue.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugIssuesError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugIssuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachments(PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload new issue attachments.

To upload files, perform a `multipart/form-data` POST containing one
or more file fields.

When a file is uploaded with the same name as an existing attachment,
then the existing file will be replaced.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.IssueTracker.PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachments(
        new PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest
        {
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest](src/Bitbucket/Requests/IssueTracker/PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IssueChange&gt; PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChanges(PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Makes a change to the specified issue.

For example, to change an issue's state and assignee, create a new
change object that modifies these fields:

```
curl https://api.bitbucket.org/2.0/site/master/issues/1234/changes \
-s -u evzijst -X POST -H "Content-Type: application/json" \
-d '{
"changes": {
"assignee_account_id": {
"new": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
},
"state": {
"new": 'resolved"
}
}
"message": {
"raw": "This is now resolved."
}
}'
```

The above example also includes a custom comment to go alongside the
change. This comment will also be visible on the issue page in the UI.

The fields of the `changes` object are strings, not objects. This
allows for immutable change log records, even after user accounts,
milestones, or other objects recorded in a change entry, get renamed or
deleted.

The `assignee_account_id` field stores the account id. When POSTing a
new change and changing the assignee, the client should therefore use
the user's account_id in the `changes.assignee_account_id.new` field.

This call requires authentication. Private repositories or private
issue trackers require the caller to authenticate with an account that
has appropriate authorization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChanges(
        new PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest
        {
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
            Body = new IssueChange { Type = "some example string" },
        });
    // TODO: Handle 'response' of type IssueChange
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest](src/Bitbucket/Requests/IssueTracker/PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IssueChange](src/Bitbucket/Models/IssueChange.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdComments(PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new issue comment.

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \
-X POST -u evzijst \
-H 'Content-Type: application/json' \
-d '{"content": {"raw": "Lorem ipsum."}}'
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.IssueTracker.PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdComments(
        new PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest
        {
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
            Body = new IssueComment
            {
                CommentBitbucketIssueTrackerApi = new CommentBitbucketIssueTrackerApi
                {
                    ObjectModel = new ObjectModel(),
                    CommentBitbucketIssueTrackerApiProperties = new CommentBitbucketIssueTrackerApiProperties(),
                },
                ObjectModel = new ObjectModel(),
                IssueCommentProperties = new IssueCommentProperties(),
            },
        });
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest](src/Bitbucket/Requests/IssueTracker/PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostRepositoriesByWorkspaceByRepoSlugIssuesExport(PostRepositoriesByWorkspaceByRepoSlugIssuesExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A POST request to this endpoint initiates a new background celery task that archives the repo's issues.

When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the
'Location' response header. This url is the endpoint for where the user can obtain their zip files."

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.IssueTracker.PostRepositoriesByWorkspaceByRepoSlugIssuesExport(
        new PostRepositoriesByWorkspaceByRepoSlugIssuesExportRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugIssuesExportError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugIssuesExportRequest](src/Bitbucket/Requests/IssueTracker/PostRepositoriesByWorkspaceByRepoSlugIssuesExportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugIssuesExportError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugIssuesExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IssueJobStatus&gt; PostRepositoriesByWorkspaceByRepoSlugIssuesImport(PostRepositoriesByWorkspaceByRepoSlugIssuesImportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A POST request to this endpoint will import the zip file given by the archive parameter into the repository. All
existing issues will be deleted and replaced by the contents of the imported zip file.

Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name
"archive," which needs to be a file field:

```
$ curl -u -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories///issues/import
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.PostRepositoriesByWorkspaceByRepoSlugIssuesImport(
        new PostRepositoriesByWorkspaceByRepoSlugIssuesImportRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type IssueJobStatus
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugIssuesImportError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugIssuesImportRequest](src/Bitbucket/Requests/IssueTracker/PostRepositoriesByWorkspaceByRepoSlugIssuesImportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IssueJobStatus](src/Bitbucket/Models/IssueJobStatus.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugIssuesImportError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugIssuesImportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Issue&gt; PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueId(PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Modifies the issue.

```
$ curl https://api.bitbucket.org/2.0/repostories/evzijst/dogslow/issues/123 \
-u evzijst -s -X PUT -H 'Content-Type: application/json' \
-d '{
"title": "Updated title",
"assignee": {
"account_id": "5d5355e8c6b9320d9ea5b28d"
},
"priority": "minor",
"version": {
"name": "1.0"
},
"component": null
}'
```

This example changes the `title`, `assignee`, `priority` and the
`version`. It also removes the value of the `component` from the issue
by setting the field to `null`. Any field not present keeps its existing
value.

Each time an issue is edited in the UI or through the API, an immutable
change record is created under the `/issues/123/changes` endpoint. It
also has a comment associated with the change.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueId(
        new PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest
        {
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Issue
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest](src/Bitbucket/Requests/IssueTracker/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Issue](src/Bitbucket/Models/AllOf/Issue.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IssueComment&gt; PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentId(PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the content of the specified issue comment. Note that only
the `content.raw` field can be modified.

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \
-X PUT -u evzijst \
-H 'Content-Type: application/json' \
-d '{"content": {"raw": "Lorem ipsum."}'
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentId(
        new PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest
        {
            CommentId = 1L,
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
            Body = new IssueComment
            {
                CommentBitbucketIssueTrackerApi = new CommentBitbucketIssueTrackerApi
                {
                    ObjectModel = new ObjectModel(),
                    CommentBitbucketIssueTrackerApiProperties = new CommentBitbucketIssueTrackerApiProperties(),
                },
                ObjectModel = new ObjectModel(),
                IssueCommentProperties = new IssueCommentProperties(),
            },
        });
    // TODO: Handle 'response' of type IssueComment
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest](src/Bitbucket/Requests/IssueTracker/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IssueComment](src/Bitbucket/Models/AllOf/IssueComment.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Error&gt; PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVote(PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Vote for this issue.

To cast your vote, do an empty PUT. The 204 status code indicates that
the operation was successful.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVote(
        new PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest
        {
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Error
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest](src/Bitbucket/Requests/IssueTracker/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Error](src/Bitbucket/Models/Error.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Error&gt; PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatch(PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start watching this issue.

To start watching this issue, do an empty PUT. The 204 status code
indicates that the operation was successful.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IssueTracker.PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatch(
        new PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest
        {
            IssueId = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Error
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest](src/Bitbucket/Requests/IssueTracker/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Error](src/Bitbucket/Models/Error.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pipelines

> Source: [Pipelines](src/Bitbucket/Api/Pipelines.cs)

<details>
<summary><code>Task&lt;DeploymentVariable&gt; CreateDeploymentVariable(CreateDeploymentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a deployment environment level variable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.CreateDeploymentVariable(new CreateDeploymentVariableRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        EnvironmentUuid = "some example string",
        Body = new DeploymentVariable
        {
            ObjectModel = new ObjectModel(),
            DeploymentVariableProperties = new DeploymentVariableProperties(),
        },
    });
    // TODO: Handle 'response' of type DeploymentVariable
}
catch (ApiException<CreateDeploymentVariableError> ex)
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

<code>[CreateDeploymentVariableRequest](src/Bitbucket/Requests/Pipelines/CreateDeploymentVariableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeploymentVariable](src/Bitbucket/Models/AllOf/DeploymentVariable.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[CreateDeploymentVariableError](src/Bitbucket/Errors/CreateDeploymentVariableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Pipeline&gt; CreatePipelineForRepository(CreatePipelineForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Endpoint to create and initiate a pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.CreatePipelineForRepository(new CreatePipelineForRepositoryRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Body = new Pipeline { ObjectModel = new ObjectModel(), PipelineProperties = new PipelineProperties() },
    });
    // TODO: Handle 'response' of type Pipeline
}
catch (ApiException<CreatePipelineForRepositoryError> ex)
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

<code>[CreatePipelineForRepositoryRequest](src/Bitbucket/Requests/Pipelines/CreatePipelineForRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](src/Bitbucket/Models/AllOf/Pipeline.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[CreatePipelineForRepositoryError](src/Bitbucket/Errors/CreatePipelineForRepositoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineVariable&gt; CreatePipelineVariableForTeam(CreatePipelineVariableForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an account level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.CreatePipelineVariableForTeam(new CreatePipelineVariableForTeamRequest
    {
        Username = "some example string",
    });
    // TODO: Handle 'response' of type PipelineVariable
}
catch (ApiException<CreatePipelineVariableForTeamError> ex)
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

<code>[CreatePipelineVariableForTeamRequest](src/Bitbucket/Requests/Pipelines/CreatePipelineVariableForTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](src/Bitbucket/Models/AllOf/PipelineVariable.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[CreatePipelineVariableForTeamError](src/Bitbucket/Errors/CreatePipelineVariableForTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineVariable&gt; CreatePipelineVariableForUser(CreatePipelineVariableForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a user level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.CreatePipelineVariableForUser(new CreatePipelineVariableForUserRequest
    {
        SelectedUser = "some example string",
    });
    // TODO: Handle 'response' of type PipelineVariable
}
catch (ApiException<CreatePipelineVariableForUserError> ex)
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

<code>[CreatePipelineVariableForUserRequest](src/Bitbucket/Requests/Pipelines/CreatePipelineVariableForUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](src/Bitbucket/Models/AllOf/PipelineVariable.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[CreatePipelineVariableForUserError](src/Bitbucket/Errors/CreatePipelineVariableForUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineVariable&gt; CreatePipelineVariableForWorkspace(CreatePipelineVariableForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a workspace level variable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.CreatePipelineVariableForWorkspace(
        new CreatePipelineVariableForWorkspaceRequest { Workspace = "some example string" });
    // TODO: Handle 'response' of type PipelineVariable
}
catch (ApiException<CreatePipelineVariableForWorkspaceError> ex)
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

<code>[CreatePipelineVariableForWorkspaceRequest](src/Bitbucket/Requests/Pipelines/CreatePipelineVariableForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](src/Bitbucket/Models/AllOf/PipelineVariable.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[CreatePipelineVariableForWorkspaceError](src/Bitbucket/Errors/CreatePipelineVariableForWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineKnownHost&gt; CreateRepositoryPipelineKnownHost(CreateRepositoryPipelineKnownHostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a repository level known host.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.CreateRepositoryPipelineKnownHost(new CreateRepositoryPipelineKnownHostRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Body = new PipelineKnownHost
        {
            ObjectModel = new ObjectModel(),
            PipelineKnownHostProperties = new PipelineKnownHostProperties(),
        },
    });
    // TODO: Handle 'response' of type PipelineKnownHost
}
catch (ApiException<CreateRepositoryPipelineKnownHostError> ex)
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

<code>[CreateRepositoryPipelineKnownHostRequest](src/Bitbucket/Requests/Pipelines/CreateRepositoryPipelineKnownHostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineKnownHost](src/Bitbucket/Models/AllOf/PipelineKnownHost.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[CreateRepositoryPipelineKnownHostError](src/Bitbucket/Errors/CreateRepositoryPipelineKnownHostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineSchedule&gt; CreateRepositoryPipelineSchedule(CreateRepositoryPipelineScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a schedule for the given repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.CreateRepositoryPipelineSchedule(new CreateRepositoryPipelineScheduleRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Body = new PipelineSchedulePostRequestBody
        {
            ObjectModel = new ObjectModel(),
            PipelineSchedulePostRequestBodyProperties = new PipelineSchedulePostRequestBodyProperties
            {
                Target = new Target
                {
                    Selector = new PipelineSelector
                    {
                        ObjectModel = new ObjectModel(),
                        PipelineSelectorProperties = new PipelineSelectorProperties(),
                    },
                    RefName = "some example string",
                },
                CronPattern = "some example string",
            },
        },
    });
    // TODO: Handle 'response' of type PipelineSchedule
}
catch (ApiException<CreateRepositoryPipelineScheduleError> ex)
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

<code>[CreateRepositoryPipelineScheduleRequest](src/Bitbucket/Requests/Pipelines/CreateRepositoryPipelineScheduleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineSchedule](src/Bitbucket/Models/AllOf/PipelineSchedule.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[CreateRepositoryPipelineScheduleError](src/Bitbucket/Errors/CreateRepositoryPipelineScheduleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineVariable&gt; CreateRepositoryPipelineVariable(CreateRepositoryPipelineVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a repository level variable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.CreateRepositoryPipelineVariable(new CreateRepositoryPipelineVariableRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Body = new PipelineVariable
        {
            ObjectModel = new ObjectModel(),
            PipelineVariableProperties = new PipelineVariableProperties(),
        },
    });
    // TODO: Handle 'response' of type PipelineVariable
}
catch (ApiException<CreateRepositoryPipelineVariableError> ex)
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

<code>[CreateRepositoryPipelineVariableRequest](src/Bitbucket/Requests/Pipelines/CreateRepositoryPipelineVariableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](src/Bitbucket/Models/AllOf/PipelineVariable.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[CreateRepositoryPipelineVariableError](src/Bitbucket/Errors/CreateRepositoryPipelineVariableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineRunner&gt; CreateRepositoryRunner(CreateRepositoryRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create repository runner.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.CreateRepositoryRunner(new CreateRepositoryRunnerRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
    });
    // TODO: Handle 'response' of type PipelineRunner
}
catch (ApiException<CreateRepositoryRunnerError> ex)
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

<code>[CreateRepositoryRunnerRequest](src/Bitbucket/Requests/Pipelines/CreateRepositoryRunnerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineRunner](src/Bitbucket/Models/AllOf/PipelineRunner.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[CreateRepositoryRunnerError](src/Bitbucket/Errors/CreateRepositoryRunnerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineRunner&gt; CreateWorkspaceRunner(CreateWorkspaceRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create workspace runner.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.CreateWorkspaceRunner(new CreateWorkspaceRunnerRequest
    {
        Workspace = "some example string",
    });
    // TODO: Handle 'response' of type PipelineRunner
}
catch (ApiException<CreateWorkspaceRunnerError> ex)
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

<code>[CreateWorkspaceRunnerRequest](src/Bitbucket/Requests/Pipelines/CreateWorkspaceRunnerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineRunner](src/Bitbucket/Models/AllOf/PipelineRunner.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[CreateWorkspaceRunnerError](src/Bitbucket/Errors/CreateWorkspaceRunnerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteDeploymentVariable(DeleteDeploymentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a deployment environment level variable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.DeleteDeploymentVariable(new DeleteDeploymentVariableRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        EnvironmentUuid = "some example string",
        VariableUuid = "some example string",
    });
}
catch (ApiException<DeleteDeploymentVariableError> ex)
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

<code>[DeleteDeploymentVariableRequest](src/Bitbucket/Requests/Pipelines/DeleteDeploymentVariableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteDeploymentVariableError](src/Bitbucket/Errors/DeleteDeploymentVariableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeletePipelineVariableForTeam(DeletePipelineVariableForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a team level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.DeletePipelineVariableForTeam(new DeletePipelineVariableForTeamRequest
    {
        Username = "some example string",
        VariableUuid = "some example string",
    });
}
catch (ApiException<DeletePipelineVariableForTeamError> ex)
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

<code>[DeletePipelineVariableForTeamRequest](src/Bitbucket/Requests/Pipelines/DeletePipelineVariableForTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeletePipelineVariableForTeamError](src/Bitbucket/Errors/DeletePipelineVariableForTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeletePipelineVariableForUser(DeletePipelineVariableForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an account level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.DeletePipelineVariableForUser(new DeletePipelineVariableForUserRequest
    {
        SelectedUser = "some example string",
        VariableUuid = "some example string",
    });
}
catch (ApiException<DeletePipelineVariableForUserError> ex)
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

<code>[DeletePipelineVariableForUserRequest](src/Bitbucket/Requests/Pipelines/DeletePipelineVariableForUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeletePipelineVariableForUserError](src/Bitbucket/Errors/DeletePipelineVariableForUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeletePipelineVariableForWorkspace(DeletePipelineVariableForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a workspace level variable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.DeletePipelineVariableForWorkspace(new DeletePipelineVariableForWorkspaceRequest
    {
        Workspace = "some example string",
        VariableUuid = "some example string",
    });
}
catch (ApiException<DeletePipelineVariableForWorkspaceError> ex)
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

<code>[DeletePipelineVariableForWorkspaceRequest](src/Bitbucket/Requests/Pipelines/DeletePipelineVariableForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeletePipelineVariableForWorkspaceError](src/Bitbucket/Errors/DeletePipelineVariableForWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoryPipelineCache(DeleteRepositoryPipelineCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a repository cache.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.DeleteRepositoryPipelineCache(new DeleteRepositoryPipelineCacheRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        CacheUuid = "some example string",
    });
}
catch (ApiException<DeleteRepositoryPipelineCacheError> ex)
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

<code>[DeleteRepositoryPipelineCacheRequest](src/Bitbucket/Requests/Pipelines/DeleteRepositoryPipelineCacheRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoryPipelineCacheError](src/Bitbucket/Errors/DeleteRepositoryPipelineCacheError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoryPipelineCaches(DeleteRepositoryPipelineCachesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete repository cache versions by name.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.DeleteRepositoryPipelineCaches(new DeleteRepositoryPipelineCachesRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Name = "some example string",
    });
}
catch (ApiException<DeleteRepositoryPipelineCachesError> ex)
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

<code>[DeleteRepositoryPipelineCachesRequest](src/Bitbucket/Requests/Pipelines/DeleteRepositoryPipelineCachesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoryPipelineCachesError](src/Bitbucket/Errors/DeleteRepositoryPipelineCachesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoryPipelineKeyPair(DeleteRepositoryPipelineKeyPairRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the repository SSH key pair.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.DeleteRepositoryPipelineKeyPair(new DeleteRepositoryPipelineKeyPairRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
    });
}
catch (ApiException<DeleteRepositoryPipelineKeyPairError> ex)
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

<code>[DeleteRepositoryPipelineKeyPairRequest](src/Bitbucket/Requests/Pipelines/DeleteRepositoryPipelineKeyPairRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoryPipelineKeyPairError](src/Bitbucket/Errors/DeleteRepositoryPipelineKeyPairError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoryPipelineKnownHost(DeleteRepositoryPipelineKnownHostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a repository level known host.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.DeleteRepositoryPipelineKnownHost(new DeleteRepositoryPipelineKnownHostRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        KnownHostUuid = "some example string",
    });
}
catch (ApiException<DeleteRepositoryPipelineKnownHostError> ex)
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

<code>[DeleteRepositoryPipelineKnownHostRequest](src/Bitbucket/Requests/Pipelines/DeleteRepositoryPipelineKnownHostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoryPipelineKnownHostError](src/Bitbucket/Errors/DeleteRepositoryPipelineKnownHostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoryPipelineSchedule(DeleteRepositoryPipelineScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a schedule.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.DeleteRepositoryPipelineSchedule(new DeleteRepositoryPipelineScheduleRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        ScheduleUuid = "some example string",
    });
}
catch (ApiException<DeleteRepositoryPipelineScheduleError> ex)
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

<code>[DeleteRepositoryPipelineScheduleRequest](src/Bitbucket/Requests/Pipelines/DeleteRepositoryPipelineScheduleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoryPipelineScheduleError](src/Bitbucket/Errors/DeleteRepositoryPipelineScheduleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoryPipelineVariable(DeleteRepositoryPipelineVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a repository level variable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.DeleteRepositoryPipelineVariable(new DeleteRepositoryPipelineVariableRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        VariableUuid = "some example string",
    });
}
catch (ApiException<DeleteRepositoryPipelineVariableError> ex)
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

<code>[DeleteRepositoryPipelineVariableRequest](src/Bitbucket/Requests/Pipelines/DeleteRepositoryPipelineVariableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoryPipelineVariableError](src/Bitbucket/Errors/DeleteRepositoryPipelineVariableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoryRunner(DeleteRepositoryRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete repository runner by uuid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.DeleteRepositoryRunner(new DeleteRepositoryRunnerRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        RunnerUuid = "some example string",
    });
}
catch (ApiException<DeleteRepositoryRunnerError> ex)
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

<code>[DeleteRepositoryRunnerRequest](src/Bitbucket/Requests/Pipelines/DeleteRepositoryRunnerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoryRunnerError](src/Bitbucket/Errors/DeleteRepositoryRunnerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWorkspaceRunner(DeleteWorkspaceRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete workspace runner by uuid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.DeleteWorkspaceRunner(new DeleteWorkspaceRunnerRequest
    {
        Workspace = "some example string",
        RunnerUuid = "some example string",
    });
}
catch (ApiException<DeleteWorkspaceRunnerError> ex)
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

<code>[DeleteWorkspaceRunnerRequest](src/Bitbucket/Requests/Pipelines/DeleteWorkspaceRunnerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteWorkspaceRunnerError](src/Bitbucket/Errors/DeleteWorkspaceRunnerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedDeploymentVariables&gt; GetDeploymentVariables(GetDeploymentVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find deployment environment level variables.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetDeploymentVariables(new GetDeploymentVariablesRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        EnvironmentUuid = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedDeploymentVariables
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

<code>[GetDeploymentVariablesRequest](src/Bitbucket/Requests/Pipelines/GetDeploymentVariablesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedDeploymentVariables](src/Bitbucket/Models/PaginatedDeploymentVariables.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetOidcConfiguration(GetOidcConfigurationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.GetOidcConfiguration(new GetOidcConfigurationRequest { Workspace = "some example string" });
}
catch (ApiException<GetOidcConfigurationError> ex)
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

<code>[GetOidcConfigurationRequest](src/Bitbucket/Requests/Pipelines/GetOidcConfigurationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetOidcConfigurationError](src/Bitbucket/Errors/GetOidcConfigurationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetOidcKeys(GetOidcKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.GetOidcKeys(new GetOidcKeysRequest { Workspace = "some example string" });
}
catch (ApiException<GetOidcKeysError> ex)
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

<code>[GetOidcKeysRequest](src/Bitbucket/Requests/Pipelines/GetOidcKeysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetOidcKeysError](src/Bitbucket/Errors/GetOidcKeysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetPipelineContainerLog(GetPipelineContainerLogRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the log file for a build container or service container.

This endpoint supports (and encourages!) the use of HTTP Range requests to deal with potentially very large log files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.GetPipelineContainerLog(new GetPipelineContainerLogRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        PipelineUuid = "some example string",
        StepUuid = "some example string",
        LogUuid = "some example string",
    });
}
catch (ApiException<GetPipelineContainerLogError> ex)
{
    if (ex.Error.TryGetErrorByteContent(out var error))
    {
        // TODO: Handle 'error' of type ErrorByteContent
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPipelineContainerLogRequest](src/Bitbucket/Requests/Pipelines/GetPipelineContainerLogRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetPipelineContainerLogError](src/Bitbucket/Errors/GetPipelineContainerLogError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Pipeline&gt; GetPipelineForRepository(GetPipelineForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a specified pipeline

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetPipelineForRepository(new GetPipelineForRepositoryRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        PipelineUuid = "some example string",
    });
    // TODO: Handle 'response' of type Pipeline
}
catch (ApiException<GetPipelineForRepositoryError> ex)
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

<code>[GetPipelineForRepositoryRequest](src/Bitbucket/Requests/Pipelines/GetPipelineForRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](src/Bitbucket/Models/AllOf/Pipeline.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetPipelineForRepositoryError](src/Bitbucket/Errors/GetPipelineForRepositoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineStep&gt; GetPipelineStepForRepository(GetPipelineStepForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a given step of a pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetPipelineStepForRepository(new GetPipelineStepForRepositoryRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        PipelineUuid = "some example string",
        StepUuid = "some example string",
    });
    // TODO: Handle 'response' of type PipelineStep
}
catch (ApiException<GetPipelineStepForRepositoryError> ex)
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

<code>[GetPipelineStepForRepositoryRequest](src/Bitbucket/Requests/Pipelines/GetPipelineStepForRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineStep](src/Bitbucket/Models/AllOf/PipelineStep.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetPipelineStepForRepositoryError](src/Bitbucket/Errors/GetPipelineStepForRepositoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetPipelineStepLogForRepository(GetPipelineStepLogForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the log file for a given step of a pipeline.

This endpoint supports (and encourages!) the use of HTTP Range requests to deal with potentially very large log files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.GetPipelineStepLogForRepository(new GetPipelineStepLogForRepositoryRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        PipelineUuid = "some example string",
        StepUuid = "some example string",
    });
}
catch (ApiException<GetPipelineStepLogForRepositoryError> ex)
{
    if (ex.Error.TryGetErrorByteContent(out var error))
    {
        // TODO: Handle 'error' of type ErrorByteContent
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPipelineStepLogForRepositoryRequest](src/Bitbucket/Requests/Pipelines/GetPipelineStepLogForRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetPipelineStepLogForRepositoryError](src/Bitbucket/Errors/GetPipelineStepLogForRepositoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedPipelineSteps&gt; GetPipelineStepsForRepository(GetPipelineStepsForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find steps for the given pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetPipelineStepsForRepository(new GetPipelineStepsForRepositoryRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        PipelineUuid = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedPipelineSteps
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

<code>[GetPipelineStepsForRepositoryRequest](src/Bitbucket/Requests/Pipelines/GetPipelineStepsForRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineSteps](src/Bitbucket/Models/PaginatedPipelineSteps.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetPipelineTestReportTestCaseReasons(GetPipelineTestReportTestCaseReasonsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.GetPipelineTestReportTestCaseReasons(new GetPipelineTestReportTestCaseReasonsRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        PipelineUuid = "some example string",
        StepUuid = "some example string",
        TestCaseUuid = "some example string",
    });
}
catch (ApiException<GetPipelineTestReportTestCaseReasonsError> ex)
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

<code>[GetPipelineTestReportTestCaseReasonsRequest](src/Bitbucket/Requests/Pipelines/GetPipelineTestReportTestCaseReasonsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetPipelineTestReportTestCaseReasonsError](src/Bitbucket/Errors/GetPipelineTestReportTestCaseReasonsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetPipelineTestReportTestCases(GetPipelineTestReportTestCasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.GetPipelineTestReportTestCases(new GetPipelineTestReportTestCasesRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        PipelineUuid = "some example string",
        StepUuid = "some example string",
    });
}
catch (ApiException<GetPipelineTestReportTestCasesError> ex)
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

<code>[GetPipelineTestReportTestCasesRequest](src/Bitbucket/Requests/Pipelines/GetPipelineTestReportTestCasesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetPipelineTestReportTestCasesError](src/Bitbucket/Errors/GetPipelineTestReportTestCasesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetPipelineTestReports(GetPipelineTestReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.GetPipelineTestReports(new GetPipelineTestReportsRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        PipelineUuid = "some example string",
        StepUuid = "some example string",
    });
}
catch (ApiException<GetPipelineTestReportsError> ex)
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

<code>[GetPipelineTestReportsRequest](src/Bitbucket/Requests/Pipelines/GetPipelineTestReportsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetPipelineTestReportsError](src/Bitbucket/Errors/GetPipelineTestReportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineVariable&gt; GetPipelineVariableForTeam(GetPipelineVariableForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a team level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetPipelineVariableForTeam(new GetPipelineVariableForTeamRequest
    {
        Username = "some example string",
        VariableUuid = "some example string",
    });
    // TODO: Handle 'response' of type PipelineVariable
}
catch (ApiException<GetPipelineVariableForTeamError> ex)
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

<code>[GetPipelineVariableForTeamRequest](src/Bitbucket/Requests/Pipelines/GetPipelineVariableForTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](src/Bitbucket/Models/AllOf/PipelineVariable.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetPipelineVariableForTeamError](src/Bitbucket/Errors/GetPipelineVariableForTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineVariable&gt; GetPipelineVariableForUser(GetPipelineVariableForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a user level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetPipelineVariableForUser(new GetPipelineVariableForUserRequest
    {
        SelectedUser = "some example string",
        VariableUuid = "some example string",
    });
    // TODO: Handle 'response' of type PipelineVariable
}
catch (ApiException<GetPipelineVariableForUserError> ex)
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

<code>[GetPipelineVariableForUserRequest](src/Bitbucket/Requests/Pipelines/GetPipelineVariableForUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](src/Bitbucket/Models/AllOf/PipelineVariable.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetPipelineVariableForUserError](src/Bitbucket/Errors/GetPipelineVariableForUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineVariable&gt; GetPipelineVariableForWorkspace(GetPipelineVariableForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a workspace level variable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetPipelineVariableForWorkspace(new GetPipelineVariableForWorkspaceRequest
    {
        Workspace = "some example string",
        VariableUuid = "some example string",
    });
    // TODO: Handle 'response' of type PipelineVariable
}
catch (ApiException<GetPipelineVariableForWorkspaceError> ex)
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

<code>[GetPipelineVariableForWorkspaceRequest](src/Bitbucket/Requests/Pipelines/GetPipelineVariableForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](src/Bitbucket/Models/AllOf/PipelineVariable.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetPipelineVariableForWorkspaceError](src/Bitbucket/Errors/GetPipelineVariableForWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedPipelineVariables&gt; GetPipelineVariablesForTeam(GetPipelineVariablesForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find account level variables.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetPipelineVariablesForTeam(new GetPipelineVariablesForTeamRequest
    {
        Username = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedPipelineVariables
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

<code>[GetPipelineVariablesForTeamRequest](src/Bitbucket/Requests/Pipelines/GetPipelineVariablesForTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineVariables](src/Bitbucket/Models/PaginatedPipelineVariables.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedPipelineVariables&gt; GetPipelineVariablesForUser(GetPipelineVariablesForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find user level variables.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetPipelineVariablesForUser(new GetPipelineVariablesForUserRequest
    {
        SelectedUser = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedPipelineVariables
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

<code>[GetPipelineVariablesForUserRequest](src/Bitbucket/Requests/Pipelines/GetPipelineVariablesForUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineVariables](src/Bitbucket/Models/PaginatedPipelineVariables.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedPipelineVariables&gt; GetPipelineVariablesForWorkspace(GetPipelineVariablesForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find workspace level variables.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetPipelineVariablesForWorkspace(new GetPipelineVariablesForWorkspaceRequest
    {
        Workspace = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedPipelineVariables
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

<code>[GetPipelineVariablesForWorkspaceRequest](src/Bitbucket/Requests/Pipelines/GetPipelineVariablesForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineVariables](src/Bitbucket/Models/PaginatedPipelineVariables.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedPipelines&gt; GetPipelinesForRepository(GetPipelinesForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find pipelines in a repository.

Note that unlike other endpoints in the Bitbucket API, this endpoint utilizes query parameters to allow filtering
and sorting of returned results. See query parameters
for specific details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetPipelinesForRepository(new GetPipelinesForRepositoryRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedPipelines
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

<code>[GetPipelinesForRepositoryRequest](src/Bitbucket/Requests/Pipelines/GetPipelinesForRepositoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelines](src/Bitbucket/Models/PaginatedPipelines.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineCacheContentUri&gt; GetRepositoryPipelineCacheContentUri(GetRepositoryPipelineCacheContentUriRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the URI of the content of the specified cache.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetRepositoryPipelineCacheContentUri(
        new GetRepositoryPipelineCacheContentUriRequest
        {
            Workspace = "some example string",
            RepoSlug = "some example string",
            CacheUuid = "some example string",
        });
    // TODO: Handle 'response' of type PipelineCacheContentUri
}
catch (ApiException<GetRepositoryPipelineCacheContentUriError> ex)
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

<code>[GetRepositoryPipelineCacheContentUriRequest](src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineCacheContentUriRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineCacheContentUri](src/Bitbucket/Models/PipelineCacheContentUri.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoryPipelineCacheContentUriError](src/Bitbucket/Errors/GetRepositoryPipelineCacheContentUriError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedPipelineCache&gt; GetRepositoryPipelineCaches(GetRepositoryPipelineCachesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the repository pipelines caches.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetRepositoryPipelineCaches(new GetRepositoryPipelineCachesRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedPipelineCache
}
catch (ApiException<GetRepositoryPipelineCachesError> ex)
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

<code>[GetRepositoryPipelineCachesRequest](src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineCachesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineCache](src/Bitbucket/Models/PaginatedPipelineCache.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoryPipelineCachesError](src/Bitbucket/Errors/GetRepositoryPipelineCachesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelinesConfig&gt; GetRepositoryPipelineConfig(GetRepositoryPipelineConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the repository pipelines configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetRepositoryPipelineConfig(new GetRepositoryPipelineConfigRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
    });
    // TODO: Handle 'response' of type PipelinesConfig
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

<code>[GetRepositoryPipelineConfigRequest](src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelinesConfig](src/Bitbucket/Models/AllOf/PipelinesConfig.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineKnownHost&gt; GetRepositoryPipelineKnownHost(GetRepositoryPipelineKnownHostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a repository level known host.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetRepositoryPipelineKnownHost(new GetRepositoryPipelineKnownHostRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        KnownHostUuid = "some example string",
    });
    // TODO: Handle 'response' of type PipelineKnownHost
}
catch (ApiException<GetRepositoryPipelineKnownHostError> ex)
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

<code>[GetRepositoryPipelineKnownHostRequest](src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineKnownHostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineKnownHost](src/Bitbucket/Models/AllOf/PipelineKnownHost.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoryPipelineKnownHostError](src/Bitbucket/Errors/GetRepositoryPipelineKnownHostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedPipelineKnownHosts&gt; GetRepositoryPipelineKnownHosts(GetRepositoryPipelineKnownHostsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find repository level known hosts.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetRepositoryPipelineKnownHosts(new GetRepositoryPipelineKnownHostsRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedPipelineKnownHosts
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

<code>[GetRepositoryPipelineKnownHostsRequest](src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineKnownHostsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineKnownHosts](src/Bitbucket/Models/PaginatedPipelineKnownHosts.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineSchedule&gt; GetRepositoryPipelineSchedule(GetRepositoryPipelineScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a schedule by its UUID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetRepositoryPipelineSchedule(new GetRepositoryPipelineScheduleRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        ScheduleUuid = "some example string",
    });
    // TODO: Handle 'response' of type PipelineSchedule
}
catch (ApiException<GetRepositoryPipelineScheduleError> ex)
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

<code>[GetRepositoryPipelineScheduleRequest](src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineScheduleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineSchedule](src/Bitbucket/Models/AllOf/PipelineSchedule.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoryPipelineScheduleError](src/Bitbucket/Errors/GetRepositoryPipelineScheduleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedPipelineScheduleExecutions&gt; GetRepositoryPipelineScheduleExecutions(GetRepositoryPipelineScheduleExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the executions of a given schedule.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetRepositoryPipelineScheduleExecutions(
        new GetRepositoryPipelineScheduleExecutionsRequest
        {
            Workspace = "some example string",
            RepoSlug = "some example string",
            ScheduleUuid = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedPipelineScheduleExecutions
}
catch (ApiException<GetRepositoryPipelineScheduleExecutionsError> ex)
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

<code>[GetRepositoryPipelineScheduleExecutionsRequest](src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineScheduleExecutionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineScheduleExecutions](src/Bitbucket/Models/PaginatedPipelineScheduleExecutions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoryPipelineScheduleExecutionsError](src/Bitbucket/Errors/GetRepositoryPipelineScheduleExecutionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedPipelineSchedule&gt; GetRepositoryPipelineSchedules(GetRepositoryPipelineSchedulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the configured schedules for the given repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetRepositoryPipelineSchedules(new GetRepositoryPipelineSchedulesRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedPipelineSchedule
}
catch (ApiException<GetRepositoryPipelineSchedulesError> ex)
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

<code>[GetRepositoryPipelineSchedulesRequest](src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineSchedulesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineSchedule](src/Bitbucket/Models/PaginatedPipelineSchedule.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoryPipelineSchedulesError](src/Bitbucket/Errors/GetRepositoryPipelineSchedulesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineSshKeyPair&gt; GetRepositoryPipelineSshKeyPair(GetRepositoryPipelineSshKeyPairRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetRepositoryPipelineSshKeyPair(new GetRepositoryPipelineSshKeyPairRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
    });
    // TODO: Handle 'response' of type PipelineSshKeyPair
}
catch (ApiException<GetRepositoryPipelineSshKeyPairError> ex)
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

<code>[GetRepositoryPipelineSshKeyPairRequest](src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineSshKeyPairRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineSshKeyPair](src/Bitbucket/Models/AllOf/PipelineSshKeyPair.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoryPipelineSshKeyPairError](src/Bitbucket/Errors/GetRepositoryPipelineSshKeyPairError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineVariable&gt; GetRepositoryPipelineVariable(GetRepositoryPipelineVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a repository level variable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetRepositoryPipelineVariable(new GetRepositoryPipelineVariableRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        VariableUuid = "some example string",
    });
    // TODO: Handle 'response' of type PipelineVariable
}
catch (ApiException<GetRepositoryPipelineVariableError> ex)
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

<code>[GetRepositoryPipelineVariableRequest](src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineVariableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](src/Bitbucket/Models/AllOf/PipelineVariable.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoryPipelineVariableError](src/Bitbucket/Errors/GetRepositoryPipelineVariableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedPipelineVariables&gt; GetRepositoryPipelineVariables(GetRepositoryPipelineVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find repository level variables.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetRepositoryPipelineVariables(new GetRepositoryPipelineVariablesRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedPipelineVariables
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

<code>[GetRepositoryPipelineVariablesRequest](src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineVariablesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineVariables](src/Bitbucket/Models/PaginatedPipelineVariables.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineRunner&gt; GetRepositoryRunner(GetRepositoryRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve repository runner by uuid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetRepositoryRunner(new GetRepositoryRunnerRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        RunnerUuid = "some example string",
    });
    // TODO: Handle 'response' of type PipelineRunner
}
catch (ApiException<GetRepositoryRunnerError> ex)
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

<code>[GetRepositoryRunnerRequest](src/Bitbucket/Requests/Pipelines/GetRepositoryRunnerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineRunner](src/Bitbucket/Models/AllOf/PipelineRunner.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoryRunnerError](src/Bitbucket/Errors/GetRepositoryRunnerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedRunners&gt; GetRepositoryRunners(GetRepositoryRunnersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve repository runners.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetRepositoryRunners(new GetRepositoryRunnersRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedRunners
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

<code>[GetRepositoryRunnersRequest](src/Bitbucket/Requests/Pipelines/GetRepositoryRunnersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRunners](src/Bitbucket/Models/PaginatedRunners.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineRunner&gt; GetWorkspaceRunner(GetWorkspaceRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get workspace runner by uuid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetWorkspaceRunner(new GetWorkspaceRunnerRequest
    {
        Workspace = "some example string",
        RunnerUuid = "some example string",
    });
    // TODO: Handle 'response' of type PipelineRunner
}
catch (ApiException<GetWorkspaceRunnerError> ex)
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

<code>[GetWorkspaceRunnerRequest](src/Bitbucket/Requests/Pipelines/GetWorkspaceRunnerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineRunner](src/Bitbucket/Models/AllOf/PipelineRunner.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspaceRunnerError](src/Bitbucket/Errors/GetWorkspaceRunnerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedRunners&gt; GetWorkspaceRunners(GetWorkspaceRunnersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve workspace runners.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.GetWorkspaceRunners(new GetWorkspaceRunnersRequest
    {
        Workspace = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedRunners
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

<code>[GetWorkspaceRunnersRequest](src/Bitbucket/Requests/Pipelines/GetWorkspaceRunnersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRunners](src/Bitbucket/Models/PaginatedRunners.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopPipeline(StopPipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Signal the stop of a pipeline and all of its steps that not have completed yet.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.StopPipeline(new StopPipelineRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        PipelineUuid = "some example string",
    });
}
catch (ApiException<StopPipelineError> ex)
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

<code>[StopPipelineRequest](src/Bitbucket/Requests/Pipelines/StopPipelineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[StopPipelineError](src/Bitbucket/Errors/StopPipelineError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeploymentVariable&gt; UpdateDeploymentVariable(UpdateDeploymentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a deployment environment level variable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.UpdateDeploymentVariable(new UpdateDeploymentVariableRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        EnvironmentUuid = "some example string",
        VariableUuid = "some example string",
        Body = new DeploymentVariable
        {
            ObjectModel = new ObjectModel(),
            DeploymentVariableProperties = new DeploymentVariableProperties(),
        },
    });
    // TODO: Handle 'response' of type DeploymentVariable
}
catch (ApiException<UpdateDeploymentVariableError> ex)
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

<code>[UpdateDeploymentVariableRequest](src/Bitbucket/Requests/Pipelines/UpdateDeploymentVariableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeploymentVariable](src/Bitbucket/Models/AllOf/DeploymentVariable.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[UpdateDeploymentVariableError](src/Bitbucket/Errors/UpdateDeploymentVariableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineVariable&gt; UpdatePipelineVariableForTeam(UpdatePipelineVariableForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a team level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.UpdatePipelineVariableForTeam(new UpdatePipelineVariableForTeamRequest
    {
        Username = "some example string",
        VariableUuid = "some example string",
        Body = new PipelineVariable
        {
            ObjectModel = new ObjectModel(),
            PipelineVariableProperties = new PipelineVariableProperties(),
        },
    });
    // TODO: Handle 'response' of type PipelineVariable
}
catch (ApiException<UpdatePipelineVariableForTeamError> ex)
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

<code>[UpdatePipelineVariableForTeamRequest](src/Bitbucket/Requests/Pipelines/UpdatePipelineVariableForTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](src/Bitbucket/Models/AllOf/PipelineVariable.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[UpdatePipelineVariableForTeamError](src/Bitbucket/Errors/UpdatePipelineVariableForTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineVariable&gt; UpdatePipelineVariableForUser(UpdatePipelineVariableForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a user level variable.
This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.UpdatePipelineVariableForUser(new UpdatePipelineVariableForUserRequest
    {
        SelectedUser = "some example string",
        VariableUuid = "some example string",
        Body = new PipelineVariable
        {
            ObjectModel = new ObjectModel(),
            PipelineVariableProperties = new PipelineVariableProperties(),
        },
    });
    // TODO: Handle 'response' of type PipelineVariable
}
catch (ApiException<UpdatePipelineVariableForUserError> ex)
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

<code>[UpdatePipelineVariableForUserRequest](src/Bitbucket/Requests/Pipelines/UpdatePipelineVariableForUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](src/Bitbucket/Models/AllOf/PipelineVariable.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[UpdatePipelineVariableForUserError](src/Bitbucket/Errors/UpdatePipelineVariableForUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineVariable&gt; UpdatePipelineVariableForWorkspace(UpdatePipelineVariableForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a workspace level variable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.UpdatePipelineVariableForWorkspace(
        new UpdatePipelineVariableForWorkspaceRequest
        {
            Workspace = "some example string",
            VariableUuid = "some example string",
            Body = new PipelineVariable
            {
                ObjectModel = new ObjectModel(),
                PipelineVariableProperties = new PipelineVariableProperties(),
            },
        });
    // TODO: Handle 'response' of type PipelineVariable
}
catch (ApiException<UpdatePipelineVariableForWorkspaceError> ex)
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

<code>[UpdatePipelineVariableForWorkspaceRequest](src/Bitbucket/Requests/Pipelines/UpdatePipelineVariableForWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](src/Bitbucket/Models/AllOf/PipelineVariable.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[UpdatePipelineVariableForWorkspaceError](src/Bitbucket/Errors/UpdatePipelineVariableForWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineBuildNumber&gt; UpdateRepositoryBuildNumber(UpdateRepositoryBuildNumberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the next build number that should be assigned to a pipeline. The next build number that will be configured has to be strictly higher than the current latest build number for this repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.UpdateRepositoryBuildNumber(new UpdateRepositoryBuildNumberRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Body = new PipelineBuildNumber
        {
            ObjectModel = new ObjectModel(),
            PipelineBuildNumberProperties = new PipelineBuildNumberProperties(),
        },
    });
    // TODO: Handle 'response' of type PipelineBuildNumber
}
catch (ApiException<UpdateRepositoryBuildNumberError> ex)
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

<code>[UpdateRepositoryBuildNumberRequest](src/Bitbucket/Requests/Pipelines/UpdateRepositoryBuildNumberRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineBuildNumber](src/Bitbucket/Models/AllOf/PipelineBuildNumber.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[UpdateRepositoryBuildNumberError](src/Bitbucket/Errors/UpdateRepositoryBuildNumberError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelinesConfig&gt; UpdateRepositoryPipelineConfig(UpdateRepositoryPipelineConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the pipelines configuration for a repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.UpdateRepositoryPipelineConfig(new UpdateRepositoryPipelineConfigRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Body = new PipelinesConfig
        {
            ObjectModel = new ObjectModel(),
            PipelinesConfigProperties = new PipelinesConfigProperties(),
        },
    });
    // TODO: Handle 'response' of type PipelinesConfig
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

<code>[UpdateRepositoryPipelineConfigRequest](src/Bitbucket/Requests/Pipelines/UpdateRepositoryPipelineConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelinesConfig](src/Bitbucket/Models/AllOf/PipelinesConfig.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineSshKeyPair&gt; UpdateRepositoryPipelineKeyPair(UpdateRepositoryPipelineKeyPairRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.UpdateRepositoryPipelineKeyPair(new UpdateRepositoryPipelineKeyPairRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Body = new PipelineSshKeyPair
        {
            ObjectModel = new ObjectModel(),
            PipelineSshKeyPairProperties = new PipelineSshKeyPairProperties(),
        },
    });
    // TODO: Handle 'response' of type PipelineSshKeyPair
}
catch (ApiException<UpdateRepositoryPipelineKeyPairError> ex)
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

<code>[UpdateRepositoryPipelineKeyPairRequest](src/Bitbucket/Requests/Pipelines/UpdateRepositoryPipelineKeyPairRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineSshKeyPair](src/Bitbucket/Models/AllOf/PipelineSshKeyPair.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[UpdateRepositoryPipelineKeyPairError](src/Bitbucket/Errors/UpdateRepositoryPipelineKeyPairError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineKnownHost&gt; UpdateRepositoryPipelineKnownHost(UpdateRepositoryPipelineKnownHostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a repository level known host.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.UpdateRepositoryPipelineKnownHost(new UpdateRepositoryPipelineKnownHostRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        KnownHostUuid = "some example string",
        Body = new PipelineKnownHost
        {
            ObjectModel = new ObjectModel(),
            PipelineKnownHostProperties = new PipelineKnownHostProperties(),
        },
    });
    // TODO: Handle 'response' of type PipelineKnownHost
}
catch (ApiException<UpdateRepositoryPipelineKnownHostError> ex)
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

<code>[UpdateRepositoryPipelineKnownHostRequest](src/Bitbucket/Requests/Pipelines/UpdateRepositoryPipelineKnownHostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineKnownHost](src/Bitbucket/Models/AllOf/PipelineKnownHost.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[UpdateRepositoryPipelineKnownHostError](src/Bitbucket/Errors/UpdateRepositoryPipelineKnownHostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineSchedule&gt; UpdateRepositoryPipelineSchedule(UpdateRepositoryPipelineScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a schedule.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.UpdateRepositoryPipelineSchedule(new UpdateRepositoryPipelineScheduleRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        ScheduleUuid = "some example string",
        Body = new PipelineSchedulePutRequestBody
        {
            ObjectModel = new ObjectModel(),
            PipelineSchedulePutRequestBodyProperties = new PipelineSchedulePutRequestBodyProperties(),
        },
    });
    // TODO: Handle 'response' of type PipelineSchedule
}
catch (ApiException<UpdateRepositoryPipelineScheduleError> ex)
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

<code>[UpdateRepositoryPipelineScheduleRequest](src/Bitbucket/Requests/Pipelines/UpdateRepositoryPipelineScheduleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineSchedule](src/Bitbucket/Models/AllOf/PipelineSchedule.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[UpdateRepositoryPipelineScheduleError](src/Bitbucket/Errors/UpdateRepositoryPipelineScheduleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineVariable&gt; UpdateRepositoryPipelineVariable(UpdateRepositoryPipelineVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a repository level variable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.UpdateRepositoryPipelineVariable(new UpdateRepositoryPipelineVariableRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        VariableUuid = "some example string",
        Body = new PipelineVariable
        {
            ObjectModel = new ObjectModel(),
            PipelineVariableProperties = new PipelineVariableProperties(),
        },
    });
    // TODO: Handle 'response' of type PipelineVariable
}
catch (ApiException<UpdateRepositoryPipelineVariableError> ex)
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

<code>[UpdateRepositoryPipelineVariableRequest](src/Bitbucket/Requests/Pipelines/UpdateRepositoryPipelineVariableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](src/Bitbucket/Models/AllOf/PipelineVariable.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[UpdateRepositoryPipelineVariableError](src/Bitbucket/Errors/UpdateRepositoryPipelineVariableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineRunner&gt; UpdateRepositoryRunner(UpdateRepositoryRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update repository runner.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.UpdateRepositoryRunner(new UpdateRepositoryRunnerRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        RunnerUuid = "some example string",
    });
    // TODO: Handle 'response' of type PipelineRunner
}
catch (ApiException<UpdateRepositoryRunnerError> ex)
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

<code>[UpdateRepositoryRunnerRequest](src/Bitbucket/Requests/Pipelines/UpdateRepositoryRunnerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineRunner](src/Bitbucket/Models/AllOf/PipelineRunner.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[UpdateRepositoryRunnerError](src/Bitbucket/Errors/UpdateRepositoryRunnerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineRunner&gt; UpdateWorkspaceRunner(UpdateWorkspaceRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update workspace runner.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.UpdateWorkspaceRunner(new UpdateWorkspaceRunnerRequest
    {
        Workspace = "some example string",
        RunnerUuid = "some example string",
    });
    // TODO: Handle 'response' of type PipelineRunner
}
catch (ApiException<UpdateWorkspaceRunnerError> ex)
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

<code>[UpdateWorkspaceRunnerRequest](src/Bitbucket/Requests/Pipelines/UpdateWorkspaceRunnerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineRunner](src/Bitbucket/Models/AllOf/PipelineRunner.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[UpdateWorkspaceRunnerError](src/Bitbucket/Errors/UpdateWorkspaceRunnerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/Bitbucket/Api/Projects.cs)

<details>
<summary><code>Task DeleteWorkspacesByWorkspaceProjectsByProjectKey(DeleteWorkspacesByWorkspaceProjectsByProjectKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes this project. This is an irreversible operation.

You cannot delete a project that still contains repositories.
To delete the project, delete
or transfer the repositories first.

Example:
```
$ curl -X DELETE https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects/PROJ
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Projects.DeleteWorkspacesByWorkspaceProjectsByProjectKey(
        new DeleteWorkspacesByWorkspaceProjectsByProjectKeyRequest
        {
            ProjectKey = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteWorkspacesByWorkspaceProjectsByProjectKeyError> ex)
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

<code>[DeleteWorkspacesByWorkspaceProjectsByProjectKeyRequest](src/Bitbucket/Requests/Projects/DeleteWorkspacesByWorkspaceProjectsByProjectKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteWorkspacesByWorkspaceProjectsByProjectKeyError](src/Bitbucket/Errors/DeleteWorkspacesByWorkspaceProjectsByProjectKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser(DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a default reviewer from the project.

Example:
```
$ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D

HTTP/1.1 204
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Projects.DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser(
        new DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest
        {
            ProjectKey = "some example string",
            SelectedUser = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError> ex)
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

<code>[DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest](src/Bitbucket/Requests/Projects/DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError](src/Bitbucket/Errors/DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug(DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the project group permission between the requested project and group, if one exists.

Only users with admin permission for the project may access this resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Projects.DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug(
        new DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest
        {
            GroupSlug = "some example string",
            ProjectKey = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError> ex)
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

<code>[DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest](src/Bitbucket/Requests/Projects/DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError](src/Bitbucket/Errors/DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId(DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the project user permission between the requested project and user, if one exists.

Only users with admin permission for the project may access this resource.

Due to security concerns, the JWT and OAuth authentication methods are unsupported.
This is to ensure integrations and add-ons are not allowed to change permissions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Projects.DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId(
        new DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest
        {
            ProjectKey = "some example string",
            SelectedUserId = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError> ex)
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

<code>[DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest](src/Bitbucket/Requests/Projects/DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError](src/Bitbucket/Errors/DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectBitbucketProjectsApi&gt; GetWorkspacesByWorkspaceProjectsByProjectKey(GetWorkspacesByWorkspaceProjectsByProjectKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the requested project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetWorkspacesByWorkspaceProjectsByProjectKey(
        new GetWorkspacesByWorkspaceProjectsByProjectKeyRequest
        {
            ProjectKey = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type ProjectBitbucketProjectsApi
}
catch (ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyError> ex)
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

<code>[GetWorkspacesByWorkspaceProjectsByProjectKeyRequest](src/Bitbucket/Requests/Projects/GetWorkspacesByWorkspaceProjectsByProjectKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectBitbucketProjectsApi](src/Bitbucket/Models/AllOf/ProjectBitbucketProjectsApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceProjectsByProjectKeyError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedDefaultReviewerAndType&gt; GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewers(GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a list of all default reviewers for a project. This is a list of users that will be added as default
reviewers to pull requests for any repository within the project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewers(
        new GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersRequest
        {
            ProjectKey = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedDefaultReviewerAndType
}
catch (ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersError> ex)
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

<code>[GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersRequest](src/Bitbucket/Requests/Projects/GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedDefaultReviewerAndType](src/Bitbucket/Models/PaginatedDefaultReviewerAndType.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;User&gt; GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser(GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified default reviewer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser(
        new GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest
        {
            ProjectKey = "some example string",
            SelectedUser = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type User
}
catch (ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError> ex)
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

<code>[GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest](src/Bitbucket/Requests/Projects/GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/Bitbucket/Models/AllOf/User.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedProjectGroupPermissions&gt; GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroups(GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of explicit group permissions for the given project.
This endpoint does not support BBQL features.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroups(
        new GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsRequest
        {
            ProjectKey = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedProjectGroupPermissions
}
catch (ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsError> ex)
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

<code>[GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsRequest](src/Bitbucket/Requests/Projects/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedProjectGroupPermissions](src/Bitbucket/Models/PaginatedProjectGroupPermissions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectGroupPermission&gt; GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug(GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the group permission for a given group and project.

Only users with admin permission for the project may access this resource.

Permissions can be:

* `admin`
* `create-repo`
* `write`
* `read`
* `none`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug(
        new GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest
        {
            GroupSlug = "some example string",
            ProjectKey = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type ProjectGroupPermission
}
catch (ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError> ex)
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

<code>[GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest](src/Bitbucket/Requests/Projects/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectGroupPermission](src/Bitbucket/Models/ProjectGroupPermission.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedProjectUserPermissions&gt; GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsers(GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of explicit user permissions for the given project.
This endpoint does not support BBQL features.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsers(
        new GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersRequest
        {
            ProjectKey = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedProjectUserPermissions
}
catch (ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersError> ex)
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

<code>[GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersRequest](src/Bitbucket/Requests/Projects/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedProjectUserPermissions](src/Bitbucket/Models/PaginatedProjectUserPermissions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectUserPermission&gt; GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId(GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the explicit user permission for a given user and project.

Only users with admin permission for the project may access this resource.

Permissions can be:

* `admin`
* `create-repo`
* `write`
* `read`
* `none`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId(
        new GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest
        {
            ProjectKey = "some example string",
            SelectedUserId = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type ProjectUserPermission
}
catch (ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError> ex)
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

<code>[GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest](src/Bitbucket/Requests/Projects/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectUserPermission](src/Bitbucket/Models/ProjectUserPermission.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectBitbucketProjectsApi&gt; PostWorkspacesByWorkspaceProjects(PostWorkspacesByWorkspaceProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new project.

Note that the avatar has to be embedded as either a data-url
or a URL to an external image as shown in the examples below:

```
$ body=$(cat << EOF
{
"name": "Mars Project",
"key": "MARS",
"description": "Software for colonizing mars.",
"links": {
"avatar": {
"href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
}
},
"is_private": false
}
EOF
)
$ curl -H "Content-Type: application/json" \
-X POST \
-d "$body" \
https://api.bitbucket.org/2.0/workspaces/teams-in-space/projects/ | jq .
{
// Serialized project document
}
```

or even:

```
$ body=$(cat << EOF
{
"name": "Mars Project",
"key": "MARS",
"description": "Software for colonizing mars.",
"links": {
"avatar": {
"href": "http://i.imgur.com/72tRx4w.gif"
}
},
"is_private": false
}
EOF
)
$ curl -H "Content-Type: application/json" \
-X POST \
-d "$body" \
https://api.bitbucket.org/2.0/workspaces/teams-in-space/projects/ | jq .
{
// Serialized project document
}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.PostWorkspacesByWorkspaceProjects(new PostWorkspacesByWorkspaceProjectsRequest
    {
        Workspace = "some example string",
        Body = new ProjectBitbucketProjectsApi
        {
            ObjectModel = new ObjectModel(),
            ProjectBitbucketProjectsApiProperties = new ProjectBitbucketProjectsApiProperties(),
        },
    });
    // TODO: Handle 'response' of type ProjectBitbucketProjectsApi
}
catch (ApiException<PostWorkspacesByWorkspaceProjectsError> ex)
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

<code>[PostWorkspacesByWorkspaceProjectsRequest](src/Bitbucket/Requests/Projects/PostWorkspacesByWorkspaceProjectsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectBitbucketProjectsApi](src/Bitbucket/Models/AllOf/ProjectBitbucketProjectsApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostWorkspacesByWorkspaceProjectsError](src/Bitbucket/Errors/PostWorkspacesByWorkspaceProjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectBitbucketProjectsApi&gt; PutWorkspacesByWorkspaceProjectsByProjectKey(PutWorkspacesByWorkspaceProjectsByProjectKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Since this endpoint can be used to both update and to create a
project, the request body depends on the intent.

#### Creation

See the POST documentation for the project collection for an
example of the request body.

Note: The `key` should not be specified in the body of request
(since it is already present in the URL). The `name` is required,
everything else is optional.

#### Update

See the POST documentation for the project collection for an
example of the request body.

Note: The key is not required in the body (since it is already in
the URL). The key may be specified in the body, if the intent is
to change the key itself. In such a scenario, the location of the
project is changed and is returned in the `Location` header of the
response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.PutWorkspacesByWorkspaceProjectsByProjectKey(
        new PutWorkspacesByWorkspaceProjectsByProjectKeyRequest
        {
            ProjectKey = "some example string",
            Workspace = "some example string",
            Body = new ProjectBitbucketProjectsApi
            {
                ObjectModel = new ObjectModel(),
                ProjectBitbucketProjectsApiProperties = new ProjectBitbucketProjectsApiProperties(),
            },
        });
    // TODO: Handle 'response' of type ProjectBitbucketProjectsApi
}
catch (ApiException<PutWorkspacesByWorkspaceProjectsByProjectKeyError> ex)
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

<code>[PutWorkspacesByWorkspaceProjectsByProjectKeyRequest](src/Bitbucket/Requests/Projects/PutWorkspacesByWorkspaceProjectsByProjectKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectBitbucketProjectsApi](src/Bitbucket/Models/AllOf/ProjectBitbucketProjectsApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutWorkspacesByWorkspaceProjectsByProjectKeyError](src/Bitbucket/Errors/PutWorkspacesByWorkspaceProjectsByProjectKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;User&gt; PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser(PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified user to the project's list of default reviewers. The method is
idempotent. Accepts an optional body containing the `uuid` of the user to be added.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser(
        new PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest
        {
            ProjectKey = "some example string",
            SelectedUser = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type User
}
catch (ApiException<PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError> ex)
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

<code>[PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest](src/Bitbucket/Requests/Projects/PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/Bitbucket/Models/AllOf/User.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError](src/Bitbucket/Errors/PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectGroupPermission&gt; PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug(PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the group permission, or grants a new permission if one does not already exist.

Only users with admin permission for the project may access this resource.

Due to security concerns, the JWT and OAuth authentication methods are unsupported.
This is to ensure integrations and add-ons are not allowed to change permissions.

Permissions can be:

* `admin`
* `create-repo`
* `write`
* `read`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug(
        new PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest
        {
            GroupSlug = "some example string",
            ProjectKey = "some example string",
            Workspace = "some example string",
            Body = new BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            {
                Permission = Permission.Read,
            },
        });
    // TODO: Handle 'response' of type ProjectGroupPermission
}
catch (ApiException<PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError> ex)
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

<code>[PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest](src/Bitbucket/Requests/Projects/PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectGroupPermission](src/Bitbucket/Models/ProjectGroupPermission.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError](src/Bitbucket/Errors/PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectUserPermission&gt; PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId(PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the explicit user permission for a given user and project. The selected
user must be a member of the workspace, and cannot be the workspace owner.

Only users with admin permission for the project may access this resource.

Due to security concerns, the JWT and OAuth authentication methods are unsupported.
This is to ensure integrations and add-ons are not allowed to change permissions.

Permissions can be:

* `admin`
* `create-repo`
* `write`
* `read`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId(
        new PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest
        {
            ProjectKey = "some example string",
            SelectedUserId = "some example string",
            Workspace = "some example string",
            Body = new BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
            {
                Permission = Permission.Read,
            },
        });
    // TODO: Handle 'response' of type ProjectUserPermission
}
catch (ApiException<PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError> ex)
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

<code>[PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest](src/Bitbucket/Requests/Projects/PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectUserPermission](src/Bitbucket/Models/ProjectUserPermission.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError](src/Bitbucket/Errors/PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Properties

> Source: [Properties](src/Bitbucket/Api/Properties.cs)

<details>
<summary><code>Task DeleteCommitHostedPropertyValue(DeleteCommitHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an application property value stored against a commit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Properties.DeleteCommitHostedPropertyValue(new DeleteCommitHostedPropertyValueRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        AppKey = "some example string",
        PropertyName = "some example string",
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

<code>[DeleteCommitHostedPropertyValueRequest](src/Bitbucket/Requests/Properties/DeleteCommitHostedPropertyValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeletePullRequestHostedPropertyValue(DeletePullRequestHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an application property value stored against a pull request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Properties.DeletePullRequestHostedPropertyValue(new DeletePullRequestHostedPropertyValueRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        PullrequestId = "some example string",
        AppKey = "some example string",
        PropertyName = "some example string",
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

<code>[DeletePullRequestHostedPropertyValueRequest](src/Bitbucket/Requests/Properties/DeletePullRequestHostedPropertyValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoryHostedPropertyValue(DeleteRepositoryHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an application property value stored against a repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Properties.DeleteRepositoryHostedPropertyValue(new DeleteRepositoryHostedPropertyValueRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        AppKey = "some example string",
        PropertyName = "some example string",
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

<code>[DeleteRepositoryHostedPropertyValueRequest](src/Bitbucket/Requests/Properties/DeleteRepositoryHostedPropertyValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteUserHostedPropertyValue(DeleteUserHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an application property value stored against a user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Properties.DeleteUserHostedPropertyValue(new DeleteUserHostedPropertyValueRequest
    {
        SelectedUser = "some example string",
        AppKey = "some example string",
        PropertyName = "some example string",
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

<code>[DeleteUserHostedPropertyValueRequest](src/Bitbucket/Requests/Properties/DeleteUserHostedPropertyValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApplicationProperty&gt; GetCommitHostedPropertyValue(GetCommitHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an application property value stored against a commit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.GetCommitHostedPropertyValue(new GetCommitHostedPropertyValueRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        AppKey = "some example string",
        PropertyName = "some example string",
    });
    // TODO: Handle 'response' of type ApplicationProperty
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

<code>[GetCommitHostedPropertyValueRequest](src/Bitbucket/Requests/Properties/GetCommitHostedPropertyValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationProperty](src/Bitbucket/Models/ApplicationProperty.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApplicationProperty&gt; GetPullRequestHostedPropertyValue(GetPullRequestHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an application property value stored against a pull request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.GetPullRequestHostedPropertyValue(
        new GetPullRequestHostedPropertyValueRequest
        {
            Workspace = "some example string",
            RepoSlug = "some example string",
            PullrequestId = "some example string",
            AppKey = "some example string",
            PropertyName = "some example string",
        });
    // TODO: Handle 'response' of type ApplicationProperty
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

<code>[GetPullRequestHostedPropertyValueRequest](src/Bitbucket/Requests/Properties/GetPullRequestHostedPropertyValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationProperty](src/Bitbucket/Models/ApplicationProperty.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApplicationProperty&gt; GetRepositoryHostedPropertyValue(GetRepositoryHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an application property value stored against a repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.GetRepositoryHostedPropertyValue(new GetRepositoryHostedPropertyValueRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        AppKey = "some example string",
        PropertyName = "some example string",
    });
    // TODO: Handle 'response' of type ApplicationProperty
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

<code>[GetRepositoryHostedPropertyValueRequest](src/Bitbucket/Requests/Properties/GetRepositoryHostedPropertyValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationProperty](src/Bitbucket/Models/ApplicationProperty.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApplicationProperty&gt; RetrieveUserHostedPropertyValue(RetrieveUserHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an application property value stored against a user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Properties.RetrieveUserHostedPropertyValue(new RetrieveUserHostedPropertyValueRequest
    {
        SelectedUser = "some example string",
        AppKey = "some example string",
        PropertyName = "some example string",
    });
    // TODO: Handle 'response' of type ApplicationProperty
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

<code>[RetrieveUserHostedPropertyValueRequest](src/Bitbucket/Requests/Properties/RetrieveUserHostedPropertyValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationProperty](src/Bitbucket/Models/ApplicationProperty.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateCommitHostedPropertyValue(UpdateCommitHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an application property value stored against a commit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Properties.UpdateCommitHostedPropertyValue(new UpdateCommitHostedPropertyValueRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        AppKey = "some example string",
        PropertyName = "some example string",
        Body = new ApplicationProperty(),
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

<code>[UpdateCommitHostedPropertyValueRequest](src/Bitbucket/Requests/Properties/UpdateCommitHostedPropertyValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdatePullRequestHostedPropertyValue(UpdatePullRequestHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an application property value stored against a pull request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Properties.UpdatePullRequestHostedPropertyValue(new UpdatePullRequestHostedPropertyValueRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        PullrequestId = "some example string",
        AppKey = "some example string",
        PropertyName = "some example string",
        Body = new ApplicationProperty(),
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

<code>[UpdatePullRequestHostedPropertyValueRequest](src/Bitbucket/Requests/Properties/UpdatePullRequestHostedPropertyValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateRepositoryHostedPropertyValue(UpdateRepositoryHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an application property value stored against a repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Properties.UpdateRepositoryHostedPropertyValue(new UpdateRepositoryHostedPropertyValueRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        AppKey = "some example string",
        PropertyName = "some example string",
        Body = new ApplicationProperty(),
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

<code>[UpdateRepositoryHostedPropertyValueRequest](src/Bitbucket/Requests/Properties/UpdateRepositoryHostedPropertyValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateUserHostedPropertyValue(UpdateUserHostedPropertyValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an application property value stored against a user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Properties.UpdateUserHostedPropertyValue(new UpdateUserHostedPropertyValueRequest
    {
        SelectedUser = "some example string",
        AppKey = "some example string",
        PropertyName = "some example string",
        Body = new ApplicationProperty(),
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

<code>[UpdateUserHostedPropertyValueRequest](src/Bitbucket/Requests/Properties/UpdateUserHostedPropertyValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PullRequests

> Source: [PullRequests](src/Bitbucket/Api/PullRequests.cs)

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername(DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a default reviewer from the repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PullRequests.DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername(
        new DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest
        {
            RepoSlug = "some example string",
            TargetUsername = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest](src/Bitbucket/Requests/PullRequests/DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApprove(DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Redact the authenticated user's approval of the specified pull
request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PullRequests.DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApprove(
        new DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest](src/Bitbucket/Requests/PullRequests/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId(DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific pull request comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PullRequests.DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId(
        new DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest
        {
            CommentId = 1L,
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest](src/Bitbucket/Requests/PullRequests/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolve(DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PullRequests.DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolve(
        new DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest
        {
            CommentId = 1L,
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest](src/Bitbucket/Requests/PullRequests/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChanges(DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PullRequests.DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChanges(
        new DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest](src/Bitbucket/Requests/PullRequests/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId(DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific pull request task.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PullRequests.DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId(
        new DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            TaskId = 1L,
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest](src/Bitbucket/Requests/PullRequests/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedPullRequests&gt; GetPullrequestsForCommit(GetPullrequestsForCommitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.GetPullrequestsForCommit(new GetPullrequestsForCommitRequest
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedPullRequests
}
catch (ApiException<GetPullrequestsForCommitError> ex)
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

<code>[GetPullrequestsForCommitRequest](src/Bitbucket/Requests/PullRequests/GetPullrequestsForCommitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPullRequests](src/Bitbucket/Models/PaginatedPullRequests.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetPullrequestsForCommitError](src/Bitbucket/Errors/GetPullrequestsForCommitError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedAccounts&gt; GetRepositoriesByWorkspaceByRepoSlugDefaultReviewers(GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the repository's default reviewers.

These are the users that are automatically added as reviewers on every
new pull request that is created. To obtain the repository's default reviewers
as well as the default reviewers inherited from the project, use the
effective-default-reveiwers endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugDefaultReviewers(
        new GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedAccounts
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedAccounts](src/Bitbucket/Models/PaginatedAccounts.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Account&gt; GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername(GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified reviewer.

This can be used to test whether a user is among the repository's
default reviewers list. A 404 indicates that that specified user is not
a default reviewer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername(
        new GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest
        {
            RepoSlug = "some example string",
            TargetUsername = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Account
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Account](src/Bitbucket/Models/AllOf/Account.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedDefaultReviewerAndType&gt; GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewers(GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the repository's effective default reviewers. This includes both default
reviewers defined at the repository level as well as those inherited from its project.

These are the users that are automatically added as reviewers on every
new pull request that is created.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewers(
        new GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedDefaultReviewerAndType
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedDefaultReviewerAndType](src/Bitbucket/Models/PaginatedDefaultReviewerAndType.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedPullRequests&gt; GetRepositoriesByWorkspaceByRepoSlugPullrequests(GetRepositoriesByWorkspaceByRepoSlugPullrequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all pull requests on the specified repository.

By default only open pull requests are returned. This can be controlled
using the `state` query parameter. To retrieve pull requests that are
in one of multiple states, repeat the `state` parameter for each
individual state.

This endpoint also supports filtering and sorting of the results. See
filtering and sorting for more details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugPullrequests(
        new GetRepositoriesByWorkspaceByRepoSlugPullrequestsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedPullRequests
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPullrequestsRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPullRequests](src/Bitbucket/Models/PaginatedPullRequests.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivity(GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of the pull request's activity log.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivity(
        new GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Pullrequest&gt; GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestId(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified pull request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestId(
        new GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Pullrequest
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pullrequest](src/Bitbucket/Models/AllOf/Pullrequest.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivity(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of the pull request's activity log.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivity(
        new GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedPullRequestComments&gt; GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdComments(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of the pull request's comments.

This includes both global, inline comments and replies.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

This endpoint also supports filtering and sorting of the results. See
filtering and sorting for more
details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdComments(
        new GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedPullRequestComments
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPullRequestComments](src/Bitbucket/Models/PaginatedPullRequestComments.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PullrequestComment&gt; GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific pull request comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId(
        new GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest
        {
            CommentId = 1L,
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PullrequestComment
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PullrequestComment](src/Bitbucket/Models/AllOf/PullrequestComment.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommits(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of the pull request's commits.

These are the commits that are being merged into the destination
branch when the pull requests gets accepted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommits(
        new GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiff(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Redirects to the repository diff
with the revspec that corresponds to the pull request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiff(
        new GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffstat(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffstatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Redirects to the repository diffstat
with the revspec that corresponds to the pull request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffstat(
        new GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffstatRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffstatRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDiffstatRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskId(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

When merging a pull request takes too long, the client receives a
task ID along with a 202 status code. The task ID can be used in a call
to this endpoint to check the status of a merge task.

```
curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/
```

If the merge task is not yet finished, a PENDING status will be returned.

```
HTTP/2 200
{
"task_status": "PENDING",
"links": {
"self": {
"href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/"
}
}
}
```

If the merge was successful, a SUCCESS status will be returned.

```
HTTP/2 200
{
"task_status": "SUCCESS",
"links": {
"self": {
"href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/"
}
},
"merge_result":
}
```

If the merge task failed, an error will be returned.

```
{
"type": "error",
"error": {
"message": ""
}
}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskId(
        new GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            TaskId = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdPatch(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Redirects to the repository patch
with the revspec that corresponds to pull request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdPatch(
        new GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdPatchRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdPatchRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedCommitStatuses&gt; GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all statuses (e.g. build results) for the given pull
request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2(
        new GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Request
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedCommitStatuses
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Error> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Request](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedCommitStatuses](src/Bitbucket/Models/PaginatedCommitStatuses.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Error](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedTasks&gt; GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasks(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of the pull request's tasks.

This endpoint supports filtering and sorting of the results by the 'task' field.
See filtering and sorting for more details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasks(
        new GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedTasks
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedTasks](src/Bitbucket/Models/PaginatedTasks.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PullrequestCommentTask&gt; GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId(GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific pull request task.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId(
        new GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            TaskId = 1L,
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PullrequestCommentTask
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest](src/Bitbucket/Requests/PullRequests/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PullrequestCommentTask](src/Bitbucket/Models/PullrequestCommentTask.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedPullRequests&gt; GetWorkspacesByWorkspacePullrequestsBySelectedUser(GetWorkspacesByWorkspacePullrequestsBySelectedUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all workspace pull requests authored by the specified user.

By default only open pull requests are returned. This can be controlled
using the `state` query parameter. To retrieve pull requests that are
in one of multiple states, repeat the `state` parameter for each
individual state.

This endpoint also supports filtering and sorting of the results. See
filtering and sorting for more details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.GetWorkspacesByWorkspacePullrequestsBySelectedUser(
        new GetWorkspacesByWorkspacePullrequestsBySelectedUserRequest
        {
            SelectedUser = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedPullRequests
}
catch (ApiException<GetWorkspacesByWorkspacePullrequestsBySelectedUserError> ex)
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

<code>[GetWorkspacesByWorkspacePullrequestsBySelectedUserRequest](src/Bitbucket/Requests/PullRequests/GetWorkspacesByWorkspacePullrequestsBySelectedUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPullRequests](src/Bitbucket/Models/PaginatedPullRequests.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspacePullrequestsBySelectedUserError](src/Bitbucket/Errors/GetWorkspacesByWorkspacePullrequestsBySelectedUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Pullrequest&gt; PostRepositoriesByWorkspaceByRepoSlugPullrequests(PostRepositoriesByWorkspaceByRepoSlugPullrequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new pull request where the destination repository is
this repository and the author is the authenticated user.

The minimum required fields to create a pull request are `title` and
`source`, specified by a branch name.

```
curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repository/pullrequests \
-u my-username:my-password \
--request POST \
--header 'Content-Type: application/json' \
--data '{
"title": "My Title",
"source": {
"branch": {
"name": "staging"
}
}
}'
```

If the pull request's `destination` is not specified, it will default
to the `repository.mainbranch`. To open a pull request to a
different branch, say from a feature branch to a staging branch,
specify a `destination` (same format as the `source`):

```
{
"title": "My Title",
"source": {
"branch": {
"name": "my-feature-branch"
}
},
"destination": {
"branch": {
"name": "staging"
}
}
}
```

Reviewers can be specified by adding an array of user objects as the
`reviewers` property.

```
{
"title": "My Title",
"source": {
"branch": {
"name": "my-feature-branch"
}
},
"reviewers": [
{
"uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
}
]
}
```

Other fields:

* `description` - a string
* `close_source_branch` - boolean that specifies if the source branch should be closed upon merging
* `draft` - boolean that specifies whether the pull request is a draft

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.PostRepositoriesByWorkspaceByRepoSlugPullrequests(
        new PostRepositoriesByWorkspaceByRepoSlugPullrequestsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Pullrequest
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugPullrequestsRequest](src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pullrequest](src/Bitbucket/Models/AllOf/Pullrequest.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Participant&gt; PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApprove(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve the specified pull request as the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApprove(
        new PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Participant
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest](src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Participant](src/Bitbucket/Models/AllOf/Participant.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PullrequestComment&gt; PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdComments(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new pull request comment.

Returns the newly created pull request comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdComments(
        new PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
            Body = new PullrequestComment
            {
                CommentBitbucketPullrequestsApi = new CommentBitbucketPullrequestsApi
                {
                    ObjectModel = new ObjectModel(),
                    CommentBitbucketPullrequestsApiProperties = new CommentBitbucketPullrequestsApiProperties(),
                },
                ObjectModel = new ObjectModel(),
                PullrequestCommentProperties = new PullrequestCommentProperties(),
            },
        });
    // TODO: Handle 'response' of type PullrequestComment
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest](src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PullrequestComment](src/Bitbucket/Models/AllOf/PullrequestComment.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CommentResolution&gt; PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolve(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolve(
        new PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest
        {
            CommentId = 1L,
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type CommentResolution
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest](src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommentResolution](src/Bitbucket/Models/CommentResolution.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Pullrequest&gt; PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDecline(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Declines the pull request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDecline(
        new PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Pullrequest
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineRequest](src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pullrequest](src/Bitbucket/Models/AllOf/Pullrequest.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Pullrequest&gt; PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMerge(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Merges the pull request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMerge(
        new PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Pullrequest
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeRequest](src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pullrequest](src/Bitbucket/Models/AllOf/Pullrequest.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Participant&gt; PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChanges(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChanges(
        new PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Participant
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest](src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Participant](src/Bitbucket/Models/AllOf/Participant.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PullrequestCommentTask&gt; PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasks(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new pull request task.

Returns the newly created pull request task.

Tasks can optionally be created in relation to a comment specified by the comment's ID which
will cause the task to appear below the comment on a pull request when viewed in Bitbucket.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasks(
        new PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
            Body = new PullRequestTaskCreate { Content = new TaskRawContent { Raw = "some example string" } },
        });
    // TODO: Handle 'response' of type PullrequestCommentTask
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest](src/Bitbucket/Requests/PullRequests/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PullrequestCommentTask](src/Bitbucket/Models/PullrequestCommentTask.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Account&gt; PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername(PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified user to the repository's list of default
reviewers.

This method is idempotent. Adding a user a second time has no effect.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername(
        new PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest
        {
            RepoSlug = "some example string",
            TargetUsername = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Account
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest](src/Bitbucket/Requests/PullRequests/PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Account](src/Bitbucket/Models/AllOf/Account.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Pullrequest&gt; PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestId(PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mutates the specified pull request.

This can be used to change the pull request's branches or description.

Only open pull requests can be mutated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestId(
        new PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Pullrequest
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest](src/Bitbucket/Requests/PullRequests/PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pullrequest](src/Bitbucket/Models/AllOf/Pullrequest.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PullrequestComment&gt; PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId(PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a specific pull request comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId(
        new PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest
        {
            CommentId = 1L,
            PullRequestId = 1,
            RepoSlug = "some example string",
            Workspace = "some example string",
            Body = new PullrequestComment
            {
                CommentBitbucketPullrequestsApi = new CommentBitbucketPullrequestsApi
                {
                    ObjectModel = new ObjectModel(),
                    CommentBitbucketPullrequestsApiProperties = new CommentBitbucketPullrequestsApiProperties(),
                },
                ObjectModel = new ObjectModel(),
                PullrequestCommentProperties = new PullrequestCommentProperties(),
            },
        });
    // TODO: Handle 'response' of type PullrequestComment
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest](src/Bitbucket/Requests/PullRequests/PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PullrequestComment](src/Bitbucket/Models/AllOf/PullrequestComment.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PullrequestCommentTask&gt; PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId(PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a specific pull request task.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PullRequests.PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId(
        new PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest
        {
            PullRequestId = 1,
            RepoSlug = "some example string",
            TaskId = 1L,
            Workspace = "some example string",
            Body = new PullRequestTaskUpdate(),
        });
    // TODO: Handle 'response' of type PullrequestCommentTask
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest](src/Bitbucket/Requests/PullRequests/PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PullrequestCommentTask](src/Bitbucket/Models/PullrequestCommentTask.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Refs

> Source: [Refs](src/Bitbucket/Api/Refs.cs)

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByName(DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a branch in the specified repository.

The main branch is not allowed to be deleted and will return a 400
response.

The branch name should not include any prefixes (e.g.
refs/heads).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Refs.DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByName(
        new DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest
        {
            Name = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest](src/Bitbucket/Requests/Refs/DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByName(DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a tag in the specified repository.

The tag name should not include any prefixes (e.g. refs/tags).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Refs.DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByName(
        new DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest
        {
            Name = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest](src/Bitbucket/Requests/Refs/DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedRefs&gt; GetRepositoriesByWorkspaceByRepoSlugRefs(GetRepositoriesByWorkspaceByRepoSlugRefsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the branches and tags in the repository.

By default, results will be in the order the underlying source control system returns them and identical to
the ordering one sees when running "$ git show-ref". Note that this follows simple
lexical ordering of the ref names.

This can be undesirable as it does apply any natural sorting semantics, meaning for instance that refs are
sorted ["branch1", "branch10", "branch2", "v10", "v11", "v9"] instead of ["branch1", "branch2",
"branch10", "v9", "v10", "v11"].

Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Refs.GetRepositoriesByWorkspaceByRepoSlugRefs(
        new GetRepositoriesByWorkspaceByRepoSlugRefsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedRefs
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugRefsError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugRefsRequest](src/Bitbucket/Requests/Refs/GetRepositoriesByWorkspaceByRepoSlugRefsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRefs](src/Bitbucket/Models/PaginatedRefs.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugRefsError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugRefsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedBranches&gt; GetRepositoriesByWorkspaceByRepoSlugRefsBranches(GetRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all open branches within the specified repository.
Results will be in the order the source control manager returns them.

Branches support filtering and sorting
that can be used to search for specific branches. For instance, to find
all branches that have "stab" in their name:

```
curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches -G --data-urlencode 'q=name ~ "stab"'
```

By default, results will be in the order the underlying source control system returns them and identical to
the ordering one sees when running "$ git branch --list". Note that this follows simple
lexical ordering of the ref names.

This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].

Sorting can be changed using the ?q= query parameter. When using ?q=name to explicitly sort on ref name,
Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Refs.GetRepositoriesByWorkspaceByRepoSlugRefsBranches(
        new GetRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedBranches
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugRefsBranchesError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest](src/Bitbucket/Requests/Refs/GetRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedBranches](src/Bitbucket/Models/PaginatedBranches.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugRefsBranchesError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugRefsBranchesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Branch&gt; GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByName(GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a branch object within the specified repository.

This call requires authentication. Private repositories require the
caller to authenticate with an account that has appropriate
authorization.

For Git, the branch name should not include any prefixes (e.g.
refs/heads).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Refs.GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByName(
        new GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest
        {
            Name = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Branch
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest](src/Bitbucket/Requests/Refs/GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Branch](src/Bitbucket/Models/Branch.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedTags&gt; GetRepositoriesByWorkspaceByRepoSlugRefsTags(GetRepositoriesByWorkspaceByRepoSlugRefsTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the tags in the repository.

By default, results will be in the order the underlying source control system returns them and identical to
the ordering one sees when running "$ git tag --list". Note that this follows simple
lexical ordering of the ref names.

This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].

Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Refs.GetRepositoriesByWorkspaceByRepoSlugRefsTags(
        new GetRepositoriesByWorkspaceByRepoSlugRefsTagsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedTags
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugRefsTagsError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugRefsTagsRequest](src/Bitbucket/Requests/Refs/GetRepositoriesByWorkspaceByRepoSlugRefsTagsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedTags](src/Bitbucket/Models/PaginatedTags.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugRefsTagsError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugRefsTagsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Tag&gt; GetRepositoriesByWorkspaceByRepoSlugRefsTagsByName(GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified tag.

```
$ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8 -G | jq .
{
"name": "3.8",
"links": {
"commits": {
"href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commits/3.8"
},
"self": {
"href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8"
},
"html": {
"href": "https://bitbucket.org/seanfarley/hg/commits/tag/3.8"
}
},
"tagger": {
"raw": "Matt Mackall ",
"type": "author",
"user": {
"username": "mpmselenic",
"nickname": "mpmselenic",
"display_name": "Matt Mackall",
"type": "user",
"uuid": "{a4934530-db4c-419c-a478-9ab4964c2ee7}",
"links": {
"self": {
"href": "https://api.bitbucket.org/2.0/users/mpmselenic"
},
"html": {
"href": "https://bitbucket.org/mpmselenic/"
},
"avatar": {
"href": "https://bitbucket.org/account/mpmselenic/avatar/32/"
}
}
}
},
"date": "2016-05-01T18:52:25+00:00",
"message": "Added tag 3.8 for changeset f85de28eae32",
"type": "tag",
"target": {
"hash": "f85de28eae32e7d3064b1a1321309071bbaaa069",
"repository": {
"links": {
"self": {
"href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg"
},
"html": {
"href": "https://bitbucket.org/seanfarley/hg"
},
"avatar": {
"href": "https://bitbucket.org/seanfarley/hg/avatar/32/"
}
},
"type": "repository",
"name": "hg",
"full_name": "seanfarley/hg",
"uuid": "{c75687fb-e99d-4579-9087-190dbd406d30}"
},
"links": {
"self": {
"href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069"
},
"comments": {
"href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/comments"
},
"patch": {
"href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/patch/f85de28eae32e7d3064b1a1321309071bbaaa069"
},
"html": {
"href": "https://bitbucket.org/seanfarley/hg/commits/f85de28eae32e7d3064b1a1321309071bbaaa069"
},
"diff": {
"href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/diff/f85de28eae32e7d3064b1a1321309071bbaaa069"
},
"approve": {
"href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/approve"
},
"statuses": {
"href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/statuses"
}
},
"author": {
"raw": "Sean Farley ",
"type": "author",
"user": {
"username": "seanfarley",
"nickname": "seanfarley",
"display_name": "Sean Farley",
"type": "user",
"uuid": "{a295f8a8-5876-4d43-89b5-3ad8c6c3c51d}",
"links": {
"self": {
"href": "https://api.bitbucket.org/2.0/users/seanfarley"
},
"html": {
"href": "https://bitbucket.org/seanfarley/"
},
"avatar": {
"href": "https://bitbucket.org/account/seanfarley/avatar/32/"
}
}
}
},
"parents": [
{
"hash": "9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2",
"type": "commit",
"links": {
"self": {
"href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
},
"html": {
"href": "https://bitbucket.org/seanfarley/hg/commits/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
}
}
}
],
"date": "2016-05-01T04:21:17+00:00",
"message": "debian: alphabetize build deps",
"type": "commit"
}
}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Refs.GetRepositoriesByWorkspaceByRepoSlugRefsTagsByName(
        new GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest
        {
            Name = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Tag
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest](src/Bitbucket/Requests/Refs/GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Tag](src/Bitbucket/Models/Tag.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Branch&gt; PostRepositoriesByWorkspaceByRepoSlugRefsBranches(PostRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new branch in the specified repository.

The payload of the POST should consist of a JSON document that
contains the name of the tag and the target hash.

```
curl https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/branches \
-s -u seanfarley -X POST -H "Content-Type: application/json" \
-d '{
"name" : "smf/create-feature",
"target" : {
"hash" : "default",
}
}'
```

This call requires authentication. Private repositories require the
caller to authenticate with an account that has appropriate
authorization.

The branch name should not include any prefixes (e.g.
refs/heads). This endpoint does support using short hash prefixes for
the commit hash, but it may return a 400 response if the provided
prefix is ambiguous. Using a full commit hash is the preferred
approach.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Refs.PostRepositoriesByWorkspaceByRepoSlugRefsBranches(
        new PostRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Branch
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugRefsBranchesError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest](src/Bitbucket/Requests/Refs/PostRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Branch](src/Bitbucket/Models/Branch.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugRefsBranchesError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugRefsBranchesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Tag&gt; PostRepositoriesByWorkspaceByRepoSlugRefsTags(PostRepositoriesByWorkspaceByRepoSlugRefsTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new annotated tag in the specified repository.

The payload of the POST should consist of a JSON document that
contains the name of the tag and the target hash.

```
curl https://api.bitbucket.org/2.0/repositories/jdoe/myrepo/refs/tags \
-s -u jdoe -X POST -H "Content-Type: application/json" \
-d '{
"name" : "new-tag-name",
"target" : {
"hash" : "a1b2c3d4e5f6",
}
}'
```

This endpoint does support using short hash prefixes for the commit
hash, but it may return a 400 response if the provided prefix is
ambiguous. Using a full commit hash is the preferred approach.

A message for the tag object may optionally be provided. If it is
omitted or the provided message is empty, a default message of
"Added tag for changeset " will be used.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Refs.PostRepositoriesByWorkspaceByRepoSlugRefsTags(
        new PostRepositoriesByWorkspaceByRepoSlugRefsTagsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
            Body = new Tag { Type = "some example string" },
        });
    // TODO: Handle 'response' of type Tag
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugRefsTagsError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugRefsTagsRequest](src/Bitbucket/Requests/Refs/PostRepositoriesByWorkspaceByRepoSlugRefsTagsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Tag](src/Bitbucket/Models/Tag.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugRefsTagsError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugRefsTagsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/Bitbucket/Api/Reports.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ReportAnnotationBitbucketReportsApi&gt;&gt; BulkCreateOrUpdateAnnotations2(BulkCreateOrUpdateAnnotations2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk upload of annotations.
Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated UUID. You can upload up to 100 annotations per POST request.

### Sample cURL request:
```
curl --location 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001/annotations' \
--header 'Content-Type: application/json' \
--data-raw '[
{
"external_id": "mysystem-annotation001",
"title": "Security scan report",
"annotation_type": "VULNERABILITY",
"summary": "This line represents a security threat.",
"severity": "HIGH",
"path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
"line": 42
},
{
"external_id": "mySystem-annotation002",
"title": "Bug report",
"annotation_type": "BUG",
"result": "FAILED",
"summary": "This line might introduce a bug.",
"severity": "MEDIUM",
"path": "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java",
"line": 13
}
]'
```

### Possible field values:
annotation_type: VULNERABILITY, CODE_SMELL, BUG
result: PASSED, FAILED, IGNORED, SKIPPED
severity: HIGH, MEDIUM, LOW, CRITICAL

Please refer to the Code Insights documentation for more information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.BulkCreateOrUpdateAnnotations2(new BulkCreateOrUpdateAnnotations2Request
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
        Body = [
            new ReportAnnotationBitbucketReportsApi
            {
                ObjectModel = new ObjectModel(),
                ReportAnnotationBitbucketReportsApiProperties = new ReportAnnotationBitbucketReportsApiProperties(),
            },
        ],
    });
    // TODO: Handle 'response' of type IReadOnlyList<ReportAnnotationBitbucketReportsApi>
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

<code>[BulkCreateOrUpdateAnnotations2Request](src/Bitbucket/Requests/Reports/BulkCreateOrUpdateAnnotations2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ReportAnnotationBitbucketReportsApi](src/Bitbucket/Models/AllOf/ReportAnnotationBitbucketReportsApi.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReportAnnotationBitbucketReportsApi&gt; CreateOrUpdateAnnotation2(CreateOrUpdateAnnotation2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates an individual annotation for the specified report.
Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated UUID. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.

### Sample cURL request:
```
curl --request PUT 'https://api.bitbucket.org/2.0/repositories///commit//reports/mySystem-001/annotations/mysystem-annotation001' \
--header 'Content-Type: application/json' \
--data-raw '{
"title": "Security scan report",
"annotation_type": "VULNERABILITY",
"summary": "This line represents a security thread.",
"severity": "HIGH",
"path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
"line": 42
}'
```

### Possible field values:
annotation_type: VULNERABILITY, CODE_SMELL, BUG
result: PASSED, FAILED, IGNORED, SKIPPED
severity: HIGH, MEDIUM, LOW, CRITICAL

Please refer to the Code Insights documentation for more information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.CreateOrUpdateAnnotation2(new CreateOrUpdateAnnotation2Request
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
        AnnotationId = "some example string",
        Body = new ReportAnnotationBitbucketReportsApi
        {
            ObjectModel = new ObjectModel(),
            ReportAnnotationBitbucketReportsApiProperties = new ReportAnnotationBitbucketReportsApiProperties(),
        },
    });
    // TODO: Handle 'response' of type ReportAnnotationBitbucketReportsApi
}
catch (ApiException<CreateOrUpdateAnnotation2Error> ex)
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

<code>[CreateOrUpdateAnnotation2Request](src/Bitbucket/Requests/Reports/CreateOrUpdateAnnotation2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportAnnotationBitbucketReportsApi](src/Bitbucket/Models/AllOf/ReportAnnotationBitbucketReportsApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[CreateOrUpdateAnnotation2Error](src/Bitbucket/Errors/CreateOrUpdateAnnotation2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReportBitbucketReportsApi&gt; CreateOrUpdateReport2(CreateOrUpdateReport2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates a report for the specified commit.
To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.

### Sample cURL request:
```
curl --request PUT 'https://api.bitbucket.org/2.0/repositories///commit//reports/mysystem-001' \
--header 'Content-Type: application/json' \
--data-raw '{
"title": "Security scan report",
"details": "This pull request introduces 10 new dependency vulnerabilities.",
"report_type": "SECURITY",
"reporter": "mySystem",
"link": "http://www.mysystem.com/reports/001",
"result": "FAILED",
"data": [
{
"title": "Duration (seconds)",
"type": "DURATION",
"value": 14
},
{
"title": "Safe to merge?",
"type": "BOOLEAN",
"value": false
}
]
}'
```

### Possible field values:
report_type: SECURITY, COVERAGE, TEST, BUG
result: PASSED, FAILED, PENDING
data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT

#### Data field formats
| Type Field | Value Field Type | Value Field Display |
|:--------------|:------------------|:--------------------|
| None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
| BOOLEAN | Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
| DATE | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and will be displayed as a relative date if the date is less than one week ago, otherwise it will be displayed as an absolute date. |
| DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human readable duration format. |
| LINK | Object: `{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}` | The value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a clickable link on the report. |
| NUMBER | Number | The value will be read as a JSON number and large numbers will be displayed in a human readable format (e.g. 14.3k). |
| PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will be displayed with a percentage sign. |
| TEXT | String | The value will be read as a JSON string and will be displayed as-is |

Please refer to the Code Insights documentation for more information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.CreateOrUpdateReport2(new CreateOrUpdateReport2Request
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
        Body = new ReportBitbucketReportsApi
        {
            ObjectModel = new ObjectModel(),
            ReportBitbucketReportsApiProperties = new ReportBitbucketReportsApiProperties(),
        },
    });
    // TODO: Handle 'response' of type ReportBitbucketReportsApi
}
catch (ApiException<CreateOrUpdateReport2Error> ex)
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

<code>[CreateOrUpdateReport2Request](src/Bitbucket/Requests/Reports/CreateOrUpdateReport2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportBitbucketReportsApi](src/Bitbucket/Models/AllOf/ReportBitbucketReportsApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[CreateOrUpdateReport2Error](src/Bitbucket/Errors/CreateOrUpdateReport2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAnnotation2(DeleteAnnotation2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single Annotation matching the provided ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Reports.DeleteAnnotation2(new DeleteAnnotation2Request
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
        AnnotationId = "some example string",
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

<code>[DeleteAnnotation2Request](src/Bitbucket/Requests/Reports/DeleteAnnotation2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteReport2(DeleteReport2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single Report matching the provided ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Reports.DeleteReport2(new DeleteReport2Request
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
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

<code>[DeleteReport2Request](src/Bitbucket/Requests/Reports/DeleteReport2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReportAnnotationBitbucketReportsApi&gt; GetAnnotation2(GetAnnotation2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single Annotation matching the provided ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetAnnotation2(new GetAnnotation2Request
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
        AnnotationId = "some example string",
    });
    // TODO: Handle 'response' of type ReportAnnotationBitbucketReportsApi
}
catch (ApiException<GetAnnotation2Error> ex)
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

<code>[GetAnnotation2Request](src/Bitbucket/Requests/Reports/GetAnnotation2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportAnnotationBitbucketReportsApi](src/Bitbucket/Models/AllOf/ReportAnnotationBitbucketReportsApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetAnnotation2Error](src/Bitbucket/Errors/GetAnnotation2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedAnnotations&gt; GetAnnotationsForReport2(GetAnnotationsForReport2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of Annotations for a specified report.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetAnnotationsForReport2(new GetAnnotationsForReport2Request
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedAnnotations
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

<code>[GetAnnotationsForReport2Request](src/Bitbucket/Requests/Reports/GetAnnotationsForReport2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedAnnotations](src/Bitbucket/Models/PaginatedAnnotations.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReportBitbucketReportsApi&gt; GetReport2(GetReport2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single Report matching the provided ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetReport2(new GetReport2Request
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
        ReportId = "some example string",
    });
    // TODO: Handle 'response' of type ReportBitbucketReportsApi
}
catch (ApiException<GetReport2Error> ex)
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

<code>[GetReport2Request](src/Bitbucket/Requests/Reports/GetReport2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportBitbucketReportsApi](src/Bitbucket/Models/AllOf/ReportBitbucketReportsApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetReport2Error](src/Bitbucket/Errors/GetReport2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedReports&gt; GetReportsForCommit2(GetReportsForCommit2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of Reports linked to this commit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.GetReportsForCommit2(new GetReportsForCommit2Request
    {
        Workspace = "some example string",
        RepoSlug = "some example string",
        Commit = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedReports
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

<code>[GetReportsForCommit2Request](src/Bitbucket/Requests/Reports/GetReportsForCommit2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedReports](src/Bitbucket/Models/PaginatedReports.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Repositories

> Source: [Repositories](src/Bitbucket/Api/Repositories.cs)

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlug(DeleteRepositoriesByWorkspaceByRepoSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the repository. This is an irreversible operation.

This does not affect its forks.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Repositories.DeleteRepositoriesByWorkspaceByRepoSlug(new DeleteRepositoriesByWorkspaceByRepoSlugRequest
    {
        RepoSlug = "some example string",
        Workspace = "some example string",
    });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugRequest](src/Bitbucket/Requests/Repositories/DeleteRepositoriesByWorkspaceByRepoSlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid(DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified webhook subscription from the given
repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Repositories.DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid(
        new DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidRequest
        {
            RepoSlug = "some example string",
            Uid = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidRequest](src/Bitbucket/Requests/Repositories/DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug(DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the repository group permission between the requested repository and group, if one exists.

Only users with admin permission for the repository may access this resource.

The only authentication method supported for this endpoint is via app passwords.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Repositories.DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug(
        new DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest
        {
            GroupSlug = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest](src/Bitbucket/Requests/Repositories/DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId(DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the repository user permission between the requested repository and user, if one exists.

Only users with admin permission for the repository may access this resource.

The only authentication method for this endpoint is via app passwords.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Repositories.DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId(
        new DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest
        {
            RepoSlug = "some example string",
            SelectedUserId = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest](src/Bitbucket/Requests/Repositories/DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedRepositories&gt; GetRepositories(GetRepositoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

**This endpoint is deprecated. Please use the
workspace scoped alternative.**

Returns a paginated list of all public repositories.

This endpoint also supports filtering and sorting of the results. See
filtering and sorting for more details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepositories(new GetRepositoriesRequest());
    // TODO: Handle 'response' of type PaginatedRepositories
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

<code>[GetRepositoriesRequest](src/Bitbucket/Requests/Repositories/GetRepositoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositories](src/Bitbucket/Models/PaginatedRepositories.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedRepositories&gt; GetRepositoriesByWorkspace(GetRepositoriesByWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of all repositories owned by the specified
workspace.

The result can be narrowed down based on the authenticated user's role.

E.g. with `?role=contributor`, only those repositories that the
authenticated user has write access to are returned (this includes any
repo the user is an admin on, as that implies write access).

This endpoint also supports filtering and sorting of the results. See
filtering and sorting for more details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepositoriesByWorkspace(new GetRepositoriesByWorkspaceRequest
    {
        Workspace = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedRepositories
}
catch (ApiException<GetRepositoriesByWorkspaceError> ex)
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

<code>[GetRepositoriesByWorkspaceRequest](src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositories](src/Bitbucket/Models/PaginatedRepositories.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RepositoryBitbucketRepositoriesApi&gt; GetRepositoriesByWorkspaceByRepoSlug(GetRepositoriesByWorkspaceByRepoSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the object describing this repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepositoriesByWorkspaceByRepoSlug(
        new GetRepositoriesByWorkspaceByRepoSlugRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type RepositoryBitbucketRepositoriesApi
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugRequest](src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryBitbucketRepositoriesApi](src/Bitbucket/Models/AllOf/RepositoryBitbucketRepositoriesApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedFiles&gt; GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath(GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of commits that modified the specified file.

Commits are returned in reverse chronological order. This is roughly
equivalent to the following commands:

$ git log --follow --date-order

By default, Bitbucket will follow renames and the path name in the
returned entries reflects that. This can be turned off using the
`?renames=false` query parameter.

Results are returned in descending chronological order by default, and
like most endpoints you can
filter and sort the response to
only provide exactly the data you want.

The example response returns commits made before 2011-05-18 against a file
named `README.rst`. The results are filtered to only return the path and
date. This request can be made using:

```
$ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\
'?fields=values.next,values.path,values.commit.date&q=commit.date<=2011-05-18'
```

In the response you can see that the file was renamed to `README.rst`
by the commit made on 2011-05-16, and was previously named `README.txt`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath(
        new GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathRequest
        {
            Commit = "some example string",
            Path = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedFiles
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathRequest](src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedFiles](src/Bitbucket/Models/PaginatedFiles.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedRepositories&gt; GetRepositoriesByWorkspaceByRepoSlugForks(GetRepositoriesByWorkspaceByRepoSlugForksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of all the forks of the specified
repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepositoriesByWorkspaceByRepoSlugForks(
        new GetRepositoriesByWorkspaceByRepoSlugForksRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedRepositories
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

<code>[GetRepositoriesByWorkspaceByRepoSlugForksRequest](src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugForksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositories](src/Bitbucket/Models/PaginatedRepositories.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedWebhookSubscriptions&gt; GetRepositoriesByWorkspaceByRepoSlugHooks(GetRepositoriesByWorkspaceByRepoSlugHooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of webhooks installed on this repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepositoriesByWorkspaceByRepoSlugHooks(
        new GetRepositoriesByWorkspaceByRepoSlugHooksRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedWebhookSubscriptions
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugHooksError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugHooksRequest](src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugHooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWebhookSubscriptions](src/Bitbucket/Models/PaginatedWebhookSubscriptions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugHooksError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugHooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookSubscription&gt; GetRepositoriesByWorkspaceByRepoSlugHooksByUid(GetRepositoriesByWorkspaceByRepoSlugHooksByUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the webhook with the specified id installed on the specified
repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepositoriesByWorkspaceByRepoSlugHooksByUid(
        new GetRepositoriesByWorkspaceByRepoSlugHooksByUidRequest
        {
            RepoSlug = "some example string",
            Uid = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type WebhookSubscription
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugHooksByUidError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugHooksByUidRequest](src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugHooksByUidRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](src/Bitbucket/Models/AllOf/WebhookSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugHooksByUidError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugHooksByUidError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RepositoryInheritanceState&gt; GetRepositoriesByWorkspaceByRepoSlugOverrideSettings(GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepositoriesByWorkspaceByRepoSlugOverrideSettings(
        new GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type RepositoryInheritanceState
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest](src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryInheritanceState](src/Bitbucket/Models/RepositoryInheritanceState.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedRepositoryGroupPermissions&gt; GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroups(GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of explicit group permissions for the given repository.
This endpoint does not support BBQL features.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroups(
        new GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedRepositoryGroupPermissions
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsRequest](src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositoryGroupPermissions](src/Bitbucket/Models/PaginatedRepositoryGroupPermissions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RepositoryGroupPermission&gt; GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug(GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the group permission for a given group slug and repository

Only users with admin permission for the repository may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`
* `none`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug(
        new GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest
        {
            GroupSlug = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type RepositoryGroupPermission
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest](src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryGroupPermission](src/Bitbucket/Models/RepositoryGroupPermission.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedRepositoryUserPermissions&gt; GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsers(GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of explicit user permissions for the given repository.
This endpoint does not support BBQL features.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsers(
        new GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedRepositoryUserPermissions
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersRequest](src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositoryUserPermissions](src/Bitbucket/Models/PaginatedRepositoryUserPermissions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RepositoryUserPermission&gt; GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId(GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the explicit user permission for a given user and repository.

Only users with admin permission for the repository may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`
* `none`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId(
        new GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest
        {
            RepoSlug = "some example string",
            SelectedUserId = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type RepositoryUserPermission
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest](src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryUserPermission](src/Bitbucket/Models/RepositoryUserPermission.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedTreeEntry&gt; GetRepositoriesByWorkspaceByRepoSlugSrc(GetRepositoriesByWorkspaceByRepoSlugSrcRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint redirects the client to the directory listing of the
root directory on the main branch.

This is equivalent to directly hitting
/2.0/repositories/{username}/{repo_slug}/src/{commit}/{path}
without having to know the name or SHA1 of the repo's main branch.

To create new commits, POST to this endpoint

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepositoriesByWorkspaceByRepoSlugSrc(
        new GetRepositoriesByWorkspaceByRepoSlugSrcRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedTreeEntry
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugSrcError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugSrcRequest](src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugSrcRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedTreeEntry](src/Bitbucket/Models/PaginatedTreeEntry.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugSrcError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugSrcError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedTreeEntry&gt; GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath(GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoints is used to retrieve the contents of a single file,
or the contents of a directory at a specified revision.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath(
        new GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathRequest
        {
            Commit = "some example string",
            Path = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedTreeEntry
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathError> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathRequest](src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedTreeEntry](src/Bitbucket/Models/PaginatedTreeEntry.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathError](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedAccounts&gt; GetRepositoriesByWorkspaceByRepoSlugWatchers(GetRepositoriesByWorkspaceByRepoSlugWatchersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of all the watchers on the specified
repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetRepositoriesByWorkspaceByRepoSlugWatchers(
        new GetRepositoriesByWorkspaceByRepoSlugWatchersRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedAccounts
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

<code>[GetRepositoriesByWorkspaceByRepoSlugWatchersRequest](src/Bitbucket/Requests/Repositories/GetRepositoriesByWorkspaceByRepoSlugWatchersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedAccounts](src/Bitbucket/Models/PaginatedAccounts.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedRepositoryPermissions&gt; GetUserPermissionsRepositories(GetUserPermissionsRepositoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

**This endpoint is deprecated. Please use the
workspace scoped alternative.**

Returns an object for each repository the caller has explicit access
to and their effective permission — the highest level of permission the
caller has. This does not return public repositories that the user was
not granted any specific permission in, and does not distinguish between
explicit and implicit privileges.

Permissions can be:

* `admin`
* `write`
* `read`

Results may be further filtered or sorted by
repository or permission by adding the following query string
parameters:

* `q=repository.name="geordi"` or `q=permission>"read"`
* `sort=repository.name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetUserPermissionsRepositories(
        new GetUserPermissionsRepositoriesRequest());
    // TODO: Handle 'response' of type PaginatedRepositoryPermissions
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

<code>[GetUserPermissionsRepositoriesRequest](src/Bitbucket/Requests/Repositories/GetUserPermissionsRepositoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositoryPermissions](src/Bitbucket/Models/PaginatedRepositoryPermissions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedRepositoryPermissions&gt; GetUserWorkspacesByWorkspacePermissionsRepositories(GetUserWorkspacesByWorkspacePermissionsRepositoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an object for each repository the caller has explicit access to in the
specified workspace and their effective permission — the highest level of
permission the caller has. This does not return public repositories that the
user was not granted any specific permission in, and does not distinguish between
explicit and implicit privileges.

Permissions can be:

* `admin`
* `write`
* `read`

Results may be further filtered or sorted by
repository or permission by adding the following query string
parameters:

* `q=repository.name="bits"` or `q=permission>"read"`
* `sort=repository.name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.GetUserWorkspacesByWorkspacePermissionsRepositories(
        new GetUserWorkspacesByWorkspacePermissionsRepositoriesRequest { Workspace = "some example string" });
    // TODO: Handle 'response' of type PaginatedRepositoryPermissions
}
catch (ApiException<GetUserWorkspacesByWorkspacePermissionsRepositoriesError> ex)
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

<code>[GetUserWorkspacesByWorkspacePermissionsRepositoriesRequest](src/Bitbucket/Requests/Repositories/GetUserWorkspacesByWorkspacePermissionsRepositoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositoryPermissions](src/Bitbucket/Models/PaginatedRepositoryPermissions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetUserWorkspacesByWorkspacePermissionsRepositoriesError](src/Bitbucket/Errors/GetUserWorkspacesByWorkspacePermissionsRepositoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RepositoryBitbucketRepositoriesApi&gt; PostRepositoriesByWorkspaceByRepoSlug(PostRepositoriesByWorkspaceByRepoSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new repository.

Note: In order to set the project for the newly created repository,
pass in either the project key or the project UUID as part of the
request body as shown in the examples below:

```
$ curl -X POST -H "Content-Type: application/json" -d '{
"scm": "git",
"project": {
"key": "MARS"
}
}' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
```

or

```
$ curl -X POST -H "Content-Type: application/json" -d '{
"scm": "git",
"project": {
"key": "{ba516952-992a-4c2d-acbd-17d502922f96}"
}
}' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
```

The project must be assigned for all repositories. If the project is not provided,
the repository is automatically assigned to the oldest project in the workspace.

Note: In the examples above, the workspace ID `teamsinspace`,
and/or the repository name `hablanding` can be replaced by UUIDs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.PostRepositoriesByWorkspaceByRepoSlug(
        new PostRepositoriesByWorkspaceByRepoSlugRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type RepositoryBitbucketRepositoriesApi
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugRequest](src/Bitbucket/Requests/Repositories/PostRepositoriesByWorkspaceByRepoSlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryBitbucketRepositoriesApi](src/Bitbucket/Models/AllOf/RepositoryBitbucketRepositoriesApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RepositoryBitbucketRepositoriesApi&gt; PostRepositoriesByWorkspaceByRepoSlugForks(PostRepositoriesByWorkspaceByRepoSlugForksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new fork of the specified repository.

#### Forking a repository

To create a fork, specify the workspace explicitly as part of the
request body:

```
$ curl -X POST -u jdoe https://api.bitbucket.org/2.0/repositories/atlassian/bbql/forks \
-H 'Content-Type: application/json' -d '{
"name": "bbql_fork",
"workspace": {
"slug": "atlassian"
}
}'
```

To fork a repository into the same workspace, also specify a new `name`.

When you specify a value for `name`, it will also affect the `slug`.
The `slug` is reflected in the repository URL of the new fork. It is
derived from `name` by substituting non-ASCII characters, removes
whitespace, and changes characters to lower case. For example,
`My repo` would turn into `my_repo`.

You need contributor access to create new forks within a workspace.

#### Change the properties of a new fork

By default the fork inherits most of its properties from the parent.
However, since the optional POST body document follows the normal
`repository` JSON schema and you can override the new fork's
properties.

Properties that can be overridden include:

* description
* fork_policy
* language
* mainbranch
* is_private (note that a private repo's fork_policy might prohibit
the creation of public forks, in which `is_private=False` would fail)
* has_issues (to initialize or disable the new repo's issue tracker --
note that the actual contents of the parent repository's issue
tracker are not copied during forking)
* has_wiki (to initialize or disable the new repo's wiki --
note that the actual contents of the parent repository's wiki are not
copied during forking)
* project (when forking into a private project, the fork's `is_private`
must be `true`)

Properties that cannot be modified include:

* scm
* parent
* full_name

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.PostRepositoriesByWorkspaceByRepoSlugForks(
        new PostRepositoriesByWorkspaceByRepoSlugForksRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type RepositoryBitbucketRepositoriesApi
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

<code>[PostRepositoriesByWorkspaceByRepoSlugForksRequest](src/Bitbucket/Requests/Repositories/PostRepositoriesByWorkspaceByRepoSlugForksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryBitbucketRepositoriesApi](src/Bitbucket/Models/AllOf/RepositoryBitbucketRepositoriesApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookSubscription&gt; PostRepositoriesByWorkspaceByRepoSlugHooks(PostRepositoriesByWorkspaceByRepoSlugHooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook on the specified repository.

Example:

```
$ curl -X POST -u credentials -H 'Content-Type: application/json'
https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks
-d '
{
"description": "Webhook Description",
"url": "https://example.com/",
"active": true,
"secret": "this is a really bad secret",
"events": [
"repo:push",
"issue:created",
"issue:updated"
]
}'
```

When the `secret` is provided it will be used as the key to generate a HMAC
digest value sent in the `X-Hub-Signature` header at delivery time. Passing
a `null` or empty `secret` or not passing a `secret` will leave the webhook's
secret unset. Bitbucket only generates the `X-Hub-Signature` when the webhook's
secret is set.

Note that this call requires the webhook scope, as well as any scope
that applies to the events that the webhook subscribes to. In the
example above that means: `webhook`, `repository` and `issue`.

Also note that the `url` must properly resolve and cannot be an
internal, non-routed address.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.PostRepositoriesByWorkspaceByRepoSlugHooks(
        new PostRepositoriesByWorkspaceByRepoSlugHooksRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type WebhookSubscription
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugHooksError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugHooksRequest](src/Bitbucket/Requests/Repositories/PostRepositoriesByWorkspaceByRepoSlugHooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](src/Bitbucket/Models/AllOf/WebhookSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugHooksError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugHooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostRepositoriesByWorkspaceByRepoSlugSrc(PostRepositoriesByWorkspaceByRepoSlugSrcRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint is used to create new commits in the repository by
uploading files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Repositories.PostRepositoriesByWorkspaceByRepoSlugSrc(
        new PostRepositoriesByWorkspaceByRepoSlugSrcRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugSrcError> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugSrcRequest](src/Bitbucket/Requests/Repositories/PostRepositoriesByWorkspaceByRepoSlugSrcRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugSrcError](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugSrcError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RepositoryBitbucketRepositoriesApi&gt; PutRepositoriesByWorkspaceByRepoSlug(PutRepositoriesByWorkspaceByRepoSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Since this endpoint can be used to both update and to create a
repository, the request body depends on the intent.

#### Creation

See the POST documentation for the repository endpoint for an example
of the request body.

#### Update

Note: Changing the `name` of the repository will cause the location to
be changed. This is because the URL of the repo is derived from the
name (a process called slugification). In such a scenario, it is
possible for the request to fail if the newly created slug conflicts
with an existing repository's slug. But if there is no conflict,
the new location will be returned in the `Location` header of the
response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.PutRepositoriesByWorkspaceByRepoSlug(
        new PutRepositoriesByWorkspaceByRepoSlugRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type RepositoryBitbucketRepositoriesApi
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugRequest](src/Bitbucket/Requests/Repositories/PutRepositoriesByWorkspaceByRepoSlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryBitbucketRepositoriesApi](src/Bitbucket/Models/AllOf/RepositoryBitbucketRepositoriesApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookSubscription&gt; PutRepositoriesByWorkspaceByRepoSlugHooksByUid(PutRepositoriesByWorkspaceByRepoSlugHooksByUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `secret`
* `active`
* `events`

The hook's secret is used as a key to generate the HMAC hex digest sent in the
`X-Hub-Signature` header at delivery time. This signature is only generated
when the hook has a secret.

Set the hook's secret by passing the new value in the `secret` field. Passing a
`null` value in the `secret` field will remove the secret from the hook. The
hook's secret can be left unchanged by not passing the `secret` field in the
request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.PutRepositoriesByWorkspaceByRepoSlugHooksByUid(
        new PutRepositoriesByWorkspaceByRepoSlugHooksByUidRequest
        {
            RepoSlug = "some example string",
            Uid = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type WebhookSubscription
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugHooksByUidError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugHooksByUidRequest](src/Bitbucket/Requests/Repositories/PutRepositoriesByWorkspaceByRepoSlugHooksByUidRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](src/Bitbucket/Models/AllOf/WebhookSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugHooksByUidError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugHooksByUidError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutRepositoriesByWorkspaceByRepoSlugOverrideSettings(PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Repositories.PutRepositoriesByWorkspaceByRepoSlugOverrideSettings(
        new PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest](src/Bitbucket/Requests/Repositories/PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RepositoryGroupPermission&gt; PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug(PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the group permission, or grants a new permission if one does not already exist.

Only users with admin permission for the repository may access this resource.

The only authentication method supported for this endpoint is via app passwords.

Permissions can be:

* `admin`
* `write`
* `read`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug(
        new PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest
        {
            GroupSlug = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
            Body = new BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema { Permission = Permission2.Read },
        });
    // TODO: Handle 'response' of type RepositoryGroupPermission
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest](src/Bitbucket/Requests/Repositories/PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryGroupPermission](src/Bitbucket/Models/RepositoryGroupPermission.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RepositoryUserPermission&gt; PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId(PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the explicit user permission for a given user and repository. The selected user must be a member of
the workspace, and cannot be the workspace owner.
Only users with admin permission for the repository may access this resource.

The only authentication method for this endpoint is via app passwords.

Permissions can be:

* `admin`
* `write`
* `read`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Repositories.PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId(
        new PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest
        {
            RepoSlug = "some example string",
            SelectedUserId = "some example string",
            Workspace = "some example string",
            Body = new BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema { Permission = Permission2.Read },
        });
    // TODO: Handle 'response' of type RepositoryUserPermission
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest](src/Bitbucket/Requests/Repositories/PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryUserPermission](src/Bitbucket/Models/RepositoryUserPermission.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Ssh

> Source: [Ssh](src/Bitbucket/Api/Ssh.cs)

<details>
<summary><code>Task DeleteUsersBySelectedUserSshKeysByKeyId(DeleteUsersBySelectedUserSshKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific SSH public key from a user's account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Ssh.DeleteUsersBySelectedUserSshKeysByKeyId(new DeleteUsersBySelectedUserSshKeysByKeyIdRequest
    {
        KeyId = "some example string",
        SelectedUser = "some example string",
    });
}
catch (ApiException<DeleteUsersBySelectedUserSshKeysByKeyIdError> ex)
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

<code>[DeleteUsersBySelectedUserSshKeysByKeyIdRequest](src/Bitbucket/Requests/Ssh/DeleteUsersBySelectedUserSshKeysByKeyIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteUsersBySelectedUserSshKeysByKeyIdError](src/Bitbucket/Errors/DeleteUsersBySelectedUserSshKeysByKeyIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedSshUserKeys&gt; GetUsersBySelectedUserSshKeys(GetUsersBySelectedUserSshKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of the user's SSH public keys.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ssh.GetUsersBySelectedUserSshKeys(new GetUsersBySelectedUserSshKeysRequest
    {
        SelectedUser = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedSshUserKeys
}
catch (ApiException<GetUsersBySelectedUserSshKeysError> ex)
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

<code>[GetUsersBySelectedUserSshKeysRequest](src/Bitbucket/Requests/Ssh/GetUsersBySelectedUserSshKeysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedSshUserKeys](src/Bitbucket/Models/PaginatedSshUserKeys.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetUsersBySelectedUserSshKeysError](src/Bitbucket/Errors/GetUsersBySelectedUserSshKeysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SshAccountKey&gt; GetUsersBySelectedUserSshKeysByKeyId(GetUsersBySelectedUserSshKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific SSH public key belonging to a user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ssh.GetUsersBySelectedUserSshKeysByKeyId(new GetUsersBySelectedUserSshKeysByKeyIdRequest
    {
        KeyId = "some example string",
        SelectedUser = "some example string",
    });
    // TODO: Handle 'response' of type SshAccountKey
}
catch (ApiException<GetUsersBySelectedUserSshKeysByKeyIdError> ex)
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

<code>[GetUsersBySelectedUserSshKeysByKeyIdRequest](src/Bitbucket/Requests/Ssh/GetUsersBySelectedUserSshKeysByKeyIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SshAccountKey](src/Bitbucket/Models/AllOf/SshAccountKey.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetUsersBySelectedUserSshKeysByKeyIdError](src/Bitbucket/Errors/GetUsersBySelectedUserSshKeysByKeyIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SshAccountKey&gt; PostUsersBySelectedUserSshKeys(PostUsersBySelectedUserSshKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new SSH public key to the specified user account and returns the resulting key.

Example:

```
$ curl -X POST -H "Content-Type: application/json" -d '{"key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ssh.PostUsersBySelectedUserSshKeys(new PostUsersBySelectedUserSshKeysRequest
    {
        SelectedUser = "some example string",
    });
    // TODO: Handle 'response' of type SshAccountKey
}
catch (ApiException<PostUsersBySelectedUserSshKeysError> ex)
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

<code>[PostUsersBySelectedUserSshKeysRequest](src/Bitbucket/Requests/Ssh/PostUsersBySelectedUserSshKeysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SshAccountKey](src/Bitbucket/Models/AllOf/SshAccountKey.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostUsersBySelectedUserSshKeysError](src/Bitbucket/Errors/PostUsersBySelectedUserSshKeysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SshAccountKey&gt; PutUsersBySelectedUserSshKeysByKeyId(PutUsersBySelectedUserSshKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a specific SSH public key on a user's account

Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must delete and add the key again.

Example:

```
$ curl -X PUT -H "Content-Type: application/json" -d '{"label": "Work key"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ssh.PutUsersBySelectedUserSshKeysByKeyId(new PutUsersBySelectedUserSshKeysByKeyIdRequest
    {
        KeyId = "some example string",
        SelectedUser = "some example string",
    });
    // TODO: Handle 'response' of type SshAccountKey
}
catch (ApiException<PutUsersBySelectedUserSshKeysByKeyIdError> ex)
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

<code>[PutUsersBySelectedUserSshKeysByKeyIdRequest](src/Bitbucket/Requests/Ssh/PutUsersBySelectedUserSshKeysByKeyIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SshAccountKey](src/Bitbucket/Models/AllOf/SshAccountKey.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutUsersBySelectedUserSshKeysByKeyIdError](src/Bitbucket/Errors/PutUsersBySelectedUserSshKeysByKeyIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/Bitbucket/Api/Search.cs)

<details>
<summary><code>Task&lt;SearchResultPage&gt; SearchAccount(SearchAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for code in the repositories of the specified user.

Note that searches can match in the file's text (`content_matches`),
the path (`path_matches`), or both.

You can use the same syntax for the search query as in the UI.
E.g. to search for "foo" only within the repository "demo",
use the query parameter `search_query=foo+repo:demo`.

Similar to other APIs, you can request more fields using a
`fields` query parameter. E.g. to get some more information about
the repository of matched files, use the query parameter
`search_query=foo&fields=%2Bvalues.file.commit.repository`
(the `%2B` is a URL-encoded `+`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchAccount(new SearchAccountRequest
    {
        SelectedUser = "some example string",
        SearchQuery = "some example string",
    });
    // TODO: Handle 'response' of type SearchResultPage
}
catch (ApiException<SearchAccountError> ex)
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

<code>[SearchAccountRequest](src/Bitbucket/Requests/Search/SearchAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResultPage](src/Bitbucket/Models/SearchResultPage.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[SearchAccountError](src/Bitbucket/Errors/SearchAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchResultPage&gt; SearchTeam(SearchTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for code in the repositories of the specified team.

Note that searches can match in the file's text (`content_matches`),
the path (`path_matches`), or both.

You can use the same syntax for the search query as in the UI.
E.g. to search for "foo" only within the repository "demo",
use the query parameter `search_query=foo+repo:demo`.

Similar to other APIs, you can request more fields using a
`fields` query parameter. E.g. to get some more information about
the repository of matched files, use the query parameter
`search_query=foo&fields=%2Bvalues.file.commit.repository`
(the `%2B` is a URL-encoded `+`).

Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchTeam(new SearchTeamRequest
    {
        Username = "some example string",
        SearchQuery = "some example string",
    });
    // TODO: Handle 'response' of type SearchResultPage
}
catch (ApiException<SearchTeamError> ex)
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

<code>[SearchTeamRequest](src/Bitbucket/Requests/Search/SearchTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResultPage](src/Bitbucket/Models/SearchResultPage.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[SearchTeamError](src/Bitbucket/Errors/SearchTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchResultPage&gt; SearchWorkspace(SearchWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for code in the repositories of the specified workspace.

Note that searches can match in the file's text (`content_matches`),
the path (`path_matches`), or both.

You can use the same syntax for the search query as in the UI.
E.g. to search for "foo" only within the repository "demo",
use the query parameter `search_query=foo+repo:demo`.

Similar to other APIs, you can request more fields using a
`fields` query parameter. E.g. to get some more information about
the repository of matched files, use the query parameter
`search_query=foo&fields=%2Bvalues.file.commit.repository`
(the `%2B` is a URL-encoded `+`).

Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchWorkspace(new SearchWorkspaceRequest
    {
        Workspace = "some example string",
        SearchQuery = "some example string",
    });
    // TODO: Handle 'response' of type SearchResultPage
}
catch (ApiException<SearchWorkspaceError> ex)
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

<code>[SearchWorkspaceRequest](src/Bitbucket/Requests/Search/SearchWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResultPage](src/Bitbucket/Models/SearchResultPage.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[SearchWorkspaceError](src/Bitbucket/Errors/SearchWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Snippets

> Source: [Snippets](src/Bitbucket/Api/Snippets.cs)

<details>
<summary><code>Task DeleteSnippetsByWorkspaceByEncodedId(DeleteSnippetsByWorkspaceByEncodedIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a snippet and returns an empty response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Snippets.DeleteSnippetsByWorkspaceByEncodedId(new DeleteSnippetsByWorkspaceByEncodedIdRequest
    {
        EncodedId = "some example string",
        Workspace = "some example string",
    });
}
catch (ApiException<DeleteSnippetsByWorkspaceByEncodedIdError> ex)
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

<code>[DeleteSnippetsByWorkspaceByEncodedIdRequest](src/Bitbucket/Requests/Snippets/DeleteSnippetsByWorkspaceByEncodedIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteSnippetsByWorkspaceByEncodedIdError](src/Bitbucket/Errors/DeleteSnippetsByWorkspaceByEncodedIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSnippetsByWorkspaceByEncodedIdByNodeId(DeleteSnippetsByWorkspaceByEncodedIdByNodeIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the snippet.

Note that this only works for versioned URLs that point to the latest
commit of the snippet. Pointing to an older commit results in a 405
status code.

To delete a snippet, regardless of whether or not concurrent changes
are being made to it, use `DELETE /snippets/{encoded_id}` instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Snippets.DeleteSnippetsByWorkspaceByEncodedIdByNodeId(
        new DeleteSnippetsByWorkspaceByEncodedIdByNodeIdRequest
        {
            EncodedId = "some example string",
            NodeId = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteSnippetsByWorkspaceByEncodedIdByNodeIdError> ex)
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

<code>[DeleteSnippetsByWorkspaceByEncodedIdByNodeIdRequest](src/Bitbucket/Requests/Snippets/DeleteSnippetsByWorkspaceByEncodedIdByNodeIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteSnippetsByWorkspaceByEncodedIdByNodeIdError](src/Bitbucket/Errors/DeleteSnippetsByWorkspaceByEncodedIdByNodeIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentId(DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a snippet comment.

Comments can only be removed by the comment author, snippet creator, or workspace admin.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Snippets.DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentId(
        new DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest
        {
            CommentId = 1L,
            EncodedId = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError> ex)
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

<code>[DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest](src/Bitbucket/Requests/Snippets/DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError](src/Bitbucket/Errors/DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSnippetsByWorkspaceByEncodedIdWatch(DeleteSnippetsByWorkspaceByEncodedIdWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used to stop watching a specific snippet. Returns 204 (No Content)
to indicate success.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Snippets.DeleteSnippetsByWorkspaceByEncodedIdWatch(new DeleteSnippetsByWorkspaceByEncodedIdWatchRequest
    {
        EncodedId = "some example string",
        Workspace = "some example string",
    });
}
catch (ApiException<DeleteSnippetsByWorkspaceByEncodedIdWatchError> ex)
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

<code>[DeleteSnippetsByWorkspaceByEncodedIdWatchRequest](src/Bitbucket/Requests/Snippets/DeleteSnippetsByWorkspaceByEncodedIdWatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteSnippetsByWorkspaceByEncodedIdWatchError](src/Bitbucket/Errors/DeleteSnippetsByWorkspaceByEncodedIdWatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedSnippets&gt; GetSnippets(GetSnippetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

**This endpoint is deprecated. Please use the
workspace scoped alternative.**

Returns all snippets. Like pull requests, repositories and workspaces, the
full set of snippets is defined by what the current user has access to.

This includes all snippets owned by any of the workspaces the user is a member of,
or snippets by other users that the current user is either watching or has collaborated
on (for instance by commenting on it).

To limit the set of returned snippets, apply the
`?role=[owner|contributor|member]` query parameter where the roles are
defined as follows:

* `owner`: all snippets owned by the current user
* `contributor`: all snippets owned by, or watched by the current user
* `member`: created in a workspaces or watched by the current user

When no role is specified, all public snippets are returned, as well as all
privately owned snippets watched or commented on.

The returned response is a normal paginated JSON list. This endpoint
only supports `application/json` responses and no
`multipart/form-data` or `multipart/related`. As a result, it is not
possible to include the file contents.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Snippets.GetSnippets(new GetSnippetsRequest());
    // TODO: Handle 'response' of type PaginatedSnippets
}
catch (ApiException<GetSnippetsError> ex)
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

<code>[GetSnippetsRequest](src/Bitbucket/Requests/Snippets/GetSnippetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedSnippets](src/Bitbucket/Models/PaginatedSnippets.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetSnippetsError](src/Bitbucket/Errors/GetSnippetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedSnippets&gt; GetSnippetsByWorkspace(GetSnippetsByWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Identical to `/snippets`, except that the result is further filtered
by the snippet owner and only those that are owned by `{workspace}` are
returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Snippets.GetSnippetsByWorkspace(new GetSnippetsByWorkspaceRequest
    {
        Workspace = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedSnippets
}
catch (ApiException<GetSnippetsByWorkspaceError> ex)
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

<code>[GetSnippetsByWorkspaceRequest](src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedSnippets](src/Bitbucket/Models/PaginatedSnippets.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetSnippetsByWorkspaceError](src/Bitbucket/Errors/GetSnippetsByWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Snippet&gt; GetSnippetsByWorkspaceByEncodedId(GetSnippetsByWorkspaceByEncodedIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single snippet.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Snippets.GetSnippetsByWorkspaceByEncodedId(new GetSnippetsByWorkspaceByEncodedIdRequest
    {
        EncodedId = "some example string",
        Workspace = "some example string",
    });
    // TODO: Handle 'response' of type Snippet
}
catch (ApiException<GetSnippetsByWorkspaceByEncodedIdError> ex)
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

<code>[GetSnippetsByWorkspaceByEncodedIdRequest](src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Snippet](src/Bitbucket/Models/AllOf/Snippet.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetSnippetsByWorkspaceByEncodedIdError](src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Snippet&gt; GetSnippetsByWorkspaceByEncodedIdByNodeId(GetSnippetsByWorkspaceByEncodedIdByNodeIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Identical to `GET /snippets/encoded_id`, except that this endpoint
can be used to retrieve the contents of the snippet as it was at an
older revision, while `/snippets/encoded_id` always returns the
snippet's current revision.

Note that only the snippet's file contents are versioned, not its
meta data properties like the title.

Other than that, the two endpoints are identical in behavior.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Snippets.GetSnippetsByWorkspaceByEncodedIdByNodeId(
        new GetSnippetsByWorkspaceByEncodedIdByNodeIdRequest
        {
            EncodedId = "some example string",
            NodeId = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Snippet
}
catch (ApiException<GetSnippetsByWorkspaceByEncodedIdByNodeIdError> ex)
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

<code>[GetSnippetsByWorkspaceByEncodedIdByNodeIdRequest](src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdByNodeIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Snippet](src/Bitbucket/Models/AllOf/Snippet.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetSnippetsByWorkspaceByEncodedIdByNodeIdError](src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdByNodeIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPath(GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the raw contents of a specific file in the snippet. The
`Content-Disposition` header will be "attachment" to avoid issues with
malevolent executable files.

The file's mime type is derived from its filename and returned in the
`Content-Type` header.

Note that for text files, no character encoding is included as part of
the content type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Snippets.GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPath(
        new GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathRequest
        {
            EncodedId = "some example string",
            NodeId = "some example string",
            Path = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathError> ex)
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

<code>[GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathRequest](src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathError](src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetSnippetsByWorkspaceByEncodedIdByRevisionDiff(GetSnippetsByWorkspaceByEncodedIdByRevisionDiffRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the diff of the specified commit against its first parent.

Note that this resource is different in functionality from the `patch`
resource.

The differences between a diff and a patch are:

* patches have a commit header with the username, message, etc
* diffs support the optional `path=foo/bar.py` query param to filter the
diff to just that one file diff (not supported for patches)
* for a merge, the diff will show the diff between the merge commit and
its first parent (identical to how PRs work), while patch returns a
response containing separate patches for each commit on the second
parent's ancestry, up to the oldest common ancestor (identical to
its reachability).

Note that the character encoding of the contents of the diff is
unspecified as Git does not track this, making it hard for
Bitbucket to reliably determine this.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Snippets.GetSnippetsByWorkspaceByEncodedIdByRevisionDiff(
        new GetSnippetsByWorkspaceByEncodedIdByRevisionDiffRequest
        {
            EncodedId = "some example string",
            Revision = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<GetSnippetsByWorkspaceByEncodedIdByRevisionDiffError> ex)
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

<code>[GetSnippetsByWorkspaceByEncodedIdByRevisionDiffRequest](src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdByRevisionDiffRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetSnippetsByWorkspaceByEncodedIdByRevisionDiffError](src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdByRevisionDiffError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetSnippetsByWorkspaceByEncodedIdByRevisionPatch(GetSnippetsByWorkspaceByEncodedIdByRevisionPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the patch of the specified commit against its first
parent.

Note that this resource is different in functionality from the `diff`
resource.

The differences between a diff and a patch are:

* patches have a commit header with the username, message, etc
* diffs support the optional `path=foo/bar.py` query param to filter the
diff to just that one file diff (not supported for patches)
* for a merge, the diff will show the diff between the merge commit and
its first parent (identical to how PRs work), while patch returns a
response containing separate patches for each commit on the second
parent's ancestry, up to the oldest common ancestor (identical to
its reachability).

Note that the character encoding of the contents of the patch is
unspecified as Git does not track this, making it hard for
Bitbucket to reliably determine this.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Snippets.GetSnippetsByWorkspaceByEncodedIdByRevisionPatch(
        new GetSnippetsByWorkspaceByEncodedIdByRevisionPatchRequest
        {
            EncodedId = "some example string",
            Revision = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<GetSnippetsByWorkspaceByEncodedIdByRevisionPatchError> ex)
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

<code>[GetSnippetsByWorkspaceByEncodedIdByRevisionPatchRequest](src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdByRevisionPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetSnippetsByWorkspaceByEncodedIdByRevisionPatchError](src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdByRevisionPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedSnippetComments&gt; GetSnippetsByWorkspaceByEncodedIdComments(GetSnippetsByWorkspaceByEncodedIdCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used to retrieve a paginated list of all comments for a specific
snippet.

This resource works identical to commit and pull request comments.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Snippets.GetSnippetsByWorkspaceByEncodedIdComments(
        new GetSnippetsByWorkspaceByEncodedIdCommentsRequest
        {
            EncodedId = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedSnippetComments
}
catch (ApiException<GetSnippetsByWorkspaceByEncodedIdCommentsError> ex)
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

<code>[GetSnippetsByWorkspaceByEncodedIdCommentsRequest](src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedSnippetComments](src/Bitbucket/Models/PaginatedSnippetComments.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetSnippetsByWorkspaceByEncodedIdCommentsError](src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdCommentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SnippetComment&gt; GetSnippetsByWorkspaceByEncodedIdCommentsByCommentId(GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specific snippet comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Snippets.GetSnippetsByWorkspaceByEncodedIdCommentsByCommentId(
        new GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest
        {
            CommentId = 1L,
            EncodedId = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type SnippetComment
}
catch (ApiException<GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError> ex)
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

<code>[GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest](src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnippetComment](src/Bitbucket/Models/AllOf/SnippetComment.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError](src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedSnippetCommits&gt; GetSnippetsByWorkspaceByEncodedIdCommits(GetSnippetsByWorkspaceByEncodedIdCommitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the changes (commits) made on this snippet.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Snippets.GetSnippetsByWorkspaceByEncodedIdCommits(
        new GetSnippetsByWorkspaceByEncodedIdCommitsRequest
        {
            EncodedId = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedSnippetCommits
}
catch (ApiException<GetSnippetsByWorkspaceByEncodedIdCommitsError> ex)
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

<code>[GetSnippetsByWorkspaceByEncodedIdCommitsRequest](src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdCommitsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedSnippetCommits](src/Bitbucket/Models/PaginatedSnippetCommits.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetSnippetsByWorkspaceByEncodedIdCommitsError](src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdCommitsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SnippetCommit&gt; GetSnippetsByWorkspaceByEncodedIdCommitsByRevision(GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the changes made on this snippet in this commit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Snippets.GetSnippetsByWorkspaceByEncodedIdCommitsByRevision(
        new GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionRequest
        {
            EncodedId = "some example string",
            Revision = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type SnippetCommit
}
catch (ApiException<GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionError> ex)
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

<code>[GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionRequest](src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnippetCommit](src/Bitbucket/Models/AllOf/SnippetCommit.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionError](src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetSnippetsByWorkspaceByEncodedIdFilesByPath(GetSnippetsByWorkspaceByEncodedIdFilesByPathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convenience resource for getting to a snippet's raw files without the
need for first having to retrieve the snippet itself and having to pull
out the versioned file links.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Snippets.GetSnippetsByWorkspaceByEncodedIdFilesByPath(
        new GetSnippetsByWorkspaceByEncodedIdFilesByPathRequest
        {
            EncodedId = "some example string",
            Path = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<GetSnippetsByWorkspaceByEncodedIdFilesByPathError> ex)
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

<code>[GetSnippetsByWorkspaceByEncodedIdFilesByPathRequest](src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdFilesByPathRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetSnippetsByWorkspaceByEncodedIdFilesByPathError](src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdFilesByPathError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetSnippetsByWorkspaceByEncodedIdWatch(GetSnippetsByWorkspaceByEncodedIdWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used to check if the current user is watching a specific snippet.

Returns 204 (No Content) if the user is watching the snippet and 404 if
not.

Hitting this endpoint anonymously always returns a 404.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Snippets.GetSnippetsByWorkspaceByEncodedIdWatch(new GetSnippetsByWorkspaceByEncodedIdWatchRequest
    {
        EncodedId = "some example string",
        Workspace = "some example string",
    });
}
catch (ApiException<GetSnippetsByWorkspaceByEncodedIdWatchError> ex)
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

<code>[GetSnippetsByWorkspaceByEncodedIdWatchRequest](src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdWatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetSnippetsByWorkspaceByEncodedIdWatchError](src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdWatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedAccounts&gt; GetSnippetsByWorkspaceByEncodedIdWatchers(GetSnippetsByWorkspaceByEncodedIdWatchersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of all users watching a specific snippet.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Snippets.GetSnippetsByWorkspaceByEncodedIdWatchers(
        new GetSnippetsByWorkspaceByEncodedIdWatchersRequest
        {
            EncodedId = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedAccounts
}
catch (ApiException<GetSnippetsByWorkspaceByEncodedIdWatchersError> ex)
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

<code>[GetSnippetsByWorkspaceByEncodedIdWatchersRequest](src/Bitbucket/Requests/Snippets/GetSnippetsByWorkspaceByEncodedIdWatchersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedAccounts](src/Bitbucket/Models/PaginatedAccounts.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetSnippetsByWorkspaceByEncodedIdWatchersError](src/Bitbucket/Errors/GetSnippetsByWorkspaceByEncodedIdWatchersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Snippet&gt; PostSnippets(PostSnippetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new snippet under the authenticated user's account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Snippets.PostSnippets(new PostSnippetsRequest
    {
        Body = new Snippet { ObjectModel = new ObjectModel(), SnippetProperties = new SnippetProperties() },
    });
    // TODO: Handle 'response' of type Snippet
}
catch (ApiException<PostSnippetsError> ex)
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

<code>[PostSnippetsRequest](src/Bitbucket/Requests/Snippets/PostSnippetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Snippet](src/Bitbucket/Models/AllOf/Snippet.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostSnippetsError](src/Bitbucket/Errors/PostSnippetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Snippet&gt; PostSnippetsByWorkspace(PostSnippetsByWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Identical to `/snippets`, except that the new snippet will be
created under the workspace specified in the path parameter
`{workspace}`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Snippets.PostSnippetsByWorkspace(new PostSnippetsByWorkspaceRequest
    {
        Workspace = "some example string",
        Body = new Snippet { ObjectModel = new ObjectModel(), SnippetProperties = new SnippetProperties() },
    });
    // TODO: Handle 'response' of type Snippet
}
catch (ApiException<PostSnippetsByWorkspaceError> ex)
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

<code>[PostSnippetsByWorkspaceRequest](src/Bitbucket/Requests/Snippets/PostSnippetsByWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Snippet](src/Bitbucket/Models/AllOf/Snippet.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostSnippetsByWorkspaceError](src/Bitbucket/Errors/PostSnippetsByWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SnippetComment&gt; PostSnippetsByWorkspaceByEncodedIdComments(PostSnippetsByWorkspaceByEncodedIdCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new comment.

The only required field in the body is `content.raw`.

To create a threaded reply to an existing comment, include `parent.id`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Snippets.PostSnippetsByWorkspaceByEncodedIdComments(
        new PostSnippetsByWorkspaceByEncodedIdCommentsRequest
        {
            EncodedId = "some example string",
            Workspace = "some example string",
            Body = new SnippetComment
            {
                ObjectModel = new ObjectModel(),
                SnippetCommentProperties = new SnippetCommentProperties(),
            },
        });
    // TODO: Handle 'response' of type SnippetComment
}
catch (ApiException<PostSnippetsByWorkspaceByEncodedIdCommentsError> ex)
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

<code>[PostSnippetsByWorkspaceByEncodedIdCommentsRequest](src/Bitbucket/Requests/Snippets/PostSnippetsByWorkspaceByEncodedIdCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnippetComment](src/Bitbucket/Models/AllOf/SnippetComment.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostSnippetsByWorkspaceByEncodedIdCommentsError](src/Bitbucket/Errors/PostSnippetsByWorkspaceByEncodedIdCommentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Snippet&gt; PutSnippetsByWorkspaceByEncodedId(PutSnippetsByWorkspaceByEncodedIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used to update a snippet.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Snippets.PutSnippetsByWorkspaceByEncodedId(new PutSnippetsByWorkspaceByEncodedIdRequest
    {
        EncodedId = "some example string",
        Workspace = "some example string",
    });
    // TODO: Handle 'response' of type Snippet
}
catch (ApiException<PutSnippetsByWorkspaceByEncodedIdError> ex)
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

<code>[PutSnippetsByWorkspaceByEncodedIdRequest](src/Bitbucket/Requests/Snippets/PutSnippetsByWorkspaceByEncodedIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Snippet](src/Bitbucket/Models/AllOf/Snippet.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutSnippetsByWorkspaceByEncodedIdError](src/Bitbucket/Errors/PutSnippetsByWorkspaceByEncodedIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Snippet&gt; PutSnippetsByWorkspaceByEncodedIdByNodeId(PutSnippetsByWorkspaceByEncodedIdByNodeIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Identical to `UPDATE /snippets/encoded_id`, except that this endpoint
takes an explicit commit revision. Only the snippet's "HEAD"/"tip"
(most recent) version can be updated and requests on all other,
older revisions fail by returning a 405 status.

Usage of this endpoint over the unrestricted `/snippets/encoded_id`
could be desired if the caller wants to be sure no concurrent
modifications have taken place between the moment of the UPDATE
request and the original GET.

This can be considered a so-called "Compare And Swap", or CAS
operation.

Other than that, the two endpoints are identical in behavior.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Snippets.PutSnippetsByWorkspaceByEncodedIdByNodeId(
        new PutSnippetsByWorkspaceByEncodedIdByNodeIdRequest
        {
            EncodedId = "some example string",
            NodeId = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type Snippet
}
catch (ApiException<PutSnippetsByWorkspaceByEncodedIdByNodeIdError> ex)
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

<code>[PutSnippetsByWorkspaceByEncodedIdByNodeIdRequest](src/Bitbucket/Requests/Snippets/PutSnippetsByWorkspaceByEncodedIdByNodeIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Snippet](src/Bitbucket/Models/AllOf/Snippet.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutSnippetsByWorkspaceByEncodedIdByNodeIdError](src/Bitbucket/Errors/PutSnippetsByWorkspaceByEncodedIdByNodeIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SnippetComment&gt; PutSnippetsByWorkspaceByEncodedIdCommentsByCommentId(PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a comment.

The only required field in the body is `content.raw`.

Comments can only be updated by their author.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Snippets.PutSnippetsByWorkspaceByEncodedIdCommentsByCommentId(
        new PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest
        {
            CommentId = 1L,
            EncodedId = "some example string",
            Workspace = "some example string",
            Body = new SnippetComment
            {
                ObjectModel = new ObjectModel(),
                SnippetCommentProperties = new SnippetCommentProperties(),
            },
        });
    // TODO: Handle 'response' of type SnippetComment
}
catch (ApiException<PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError> ex)
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

<code>[PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest](src/Bitbucket/Requests/Snippets/PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnippetComment](src/Bitbucket/Models/AllOf/SnippetComment.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError](src/Bitbucket/Errors/PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutSnippetsByWorkspaceByEncodedIdWatch(PutSnippetsByWorkspaceByEncodedIdWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used to start watching a specific snippet. Returns 204 (No Content).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Snippets.PutSnippetsByWorkspaceByEncodedIdWatch(new PutSnippetsByWorkspaceByEncodedIdWatchRequest
    {
        EncodedId = "some example string",
        Workspace = "some example string",
    });
}
catch (ApiException<PutSnippetsByWorkspaceByEncodedIdWatchError> ex)
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

<code>[PutSnippetsByWorkspaceByEncodedIdWatchRequest](src/Bitbucket/Requests/Snippets/PutSnippetsByWorkspaceByEncodedIdWatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutSnippetsByWorkspaceByEncodedIdWatchError](src/Bitbucket/Errors/PutSnippetsByWorkspaceByEncodedIdWatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Source

> Source: [Source](src/Bitbucket/Api/Source.cs)

<details>
<summary><code>Task&lt;PaginatedFiles&gt; GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2(GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of commits that modified the specified file.

Commits are returned in reverse chronological order. This is roughly
equivalent to the following commands:

$ git log --follow --date-order

By default, Bitbucket will follow renames and the path name in the
returned entries reflects that. This can be turned off using the
`?renames=false` query parameter.

Results are returned in descending chronological order by default, and
like most endpoints you can
filter and sort the response to
only provide exactly the data you want.

The example response returns commits made before 2011-05-18 against a file
named `README.rst`. The results are filtered to only return the path and
date. This request can be made using:

```
$ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\
'?fields=values.next,values.path,values.commit.date&q=commit.date<=2011-05-18'
```

In the response you can see that the file was renamed to `README.rst`
by the commit made on 2011-05-16, and was previously named `README.txt`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Source.GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2(
        new GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Request
        {
            Commit = "some example string",
            Path = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedFiles
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Error> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Request](src/Bitbucket/Requests/Source/GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedFiles](src/Bitbucket/Models/PaginatedFiles.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Error](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedTreeEntry&gt; GetRepositoriesByWorkspaceByRepoSlugSrc2(GetRepositoriesByWorkspaceByRepoSlugSrc2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint redirects the client to the directory listing of the
root directory on the main branch.

This is equivalent to directly hitting
/2.0/repositories/{username}/{repo_slug}/src/{commit}/{path}
without having to know the name or SHA1 of the repo's main branch.

To create new commits, POST to this endpoint

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Source.GetRepositoriesByWorkspaceByRepoSlugSrc2(
        new GetRepositoriesByWorkspaceByRepoSlugSrc2Request
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedTreeEntry
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugSrc2Error> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugSrc2Request](src/Bitbucket/Requests/Source/GetRepositoriesByWorkspaceByRepoSlugSrc2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedTreeEntry](src/Bitbucket/Models/PaginatedTreeEntry.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugSrc2Error](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugSrc2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedTreeEntry&gt; GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2(GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoints is used to retrieve the contents of a single file,
or the contents of a directory at a specified revision.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Source.GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2(
        new GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Request
        {
            Commit = "some example string",
            Path = "some example string",
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedTreeEntry
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Error> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Request](src/Bitbucket/Requests/Source/GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedTreeEntry](src/Bitbucket/Models/PaginatedTreeEntry.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Error](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostRepositoriesByWorkspaceByRepoSlugSrc2(PostRepositoriesByWorkspaceByRepoSlugSrc2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint is used to create new commits in the repository by
uploading files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Source.PostRepositoriesByWorkspaceByRepoSlugSrc2(new PostRepositoriesByWorkspaceByRepoSlugSrc2Request
    {
        RepoSlug = "some example string",
        Workspace = "some example string",
    });
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugSrc2Error> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugSrc2Request](src/Bitbucket/Requests/Source/PostRepositoriesByWorkspaceByRepoSlugSrc2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugSrc2Error](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugSrc2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/Bitbucket/Api/Users.cs)

<details>
<summary><code>Task&lt;Account&gt; GetUser(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the currently logged in user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetUser();
    // TODO: Handle 'response' of type Account
}
catch (ApiException<GetUserError> ex)
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

**OnSuccess**: <code>[Account](src/Bitbucket/Models/AllOf/Account.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetUserError](src/Bitbucket/Errors/GetUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Error&gt; GetUserEmails(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all the authenticated user's email addresses. Both
confirmed and unconfirmed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetUserEmails();
    // TODO: Handle 'response' of type Error
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

**OnSuccess**: <code>[Error](src/Bitbucket/Models/Error.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Error&gt; GetUserEmailsByEmail(GetUserEmailsByEmailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details about a specific one of the authenticated user's
email addresses.

Details describe whether the address has been confirmed by the user and
whether it is the user's primary address or not.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetUserEmailsByEmail(new GetUserEmailsByEmailRequest
    {
        Email = "some example string",
    });
    // TODO: Handle 'response' of type Error
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

<code>[GetUserEmailsByEmailRequest](src/Bitbucket/Requests/Users/GetUserEmailsByEmailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Error](src/Bitbucket/Models/Error.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Account&gt; GetUsersBySelectedUser(GetUsersBySelectedUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the public information associated with a user account.

If the user's profile is private, `location`, `website` and
`created_on` elements are omitted.

Note that the user object returned by this operation is changing significantly, due to privacy changes.
See the announcement for details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetUsersBySelectedUser(new GetUsersBySelectedUserRequest
    {
        SelectedUser = "some example string",
    });
    // TODO: Handle 'response' of type Account
}
catch (ApiException<GetUsersBySelectedUserError> ex)
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

<code>[GetUsersBySelectedUserRequest](src/Bitbucket/Requests/Users/GetUsersBySelectedUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Account](src/Bitbucket/Models/AllOf/Account.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetUsersBySelectedUserError](src/Bitbucket/Errors/GetUsersBySelectedUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/Bitbucket/Api/WebhooksApi.cs)

<details>
<summary><code>Task DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2(DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified webhook subscription from the given
repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.WebhooksApi.DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2(
        new DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Request
        {
            RepoSlug = "some example string",
            Uid = "some example string",
            Workspace = "some example string",
        });
}
catch (ApiException<DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Error> ex)
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

<code>[DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Request](src/Bitbucket/Requests/WebhooksApi/DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Error](src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWorkspacesByWorkspaceHooksByUid(DeleteWorkspacesByWorkspaceHooksByUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified webhook subscription from the given workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.WebhooksApi.DeleteWorkspacesByWorkspaceHooksByUid(new DeleteWorkspacesByWorkspaceHooksByUidRequest
    {
        Uid = "some example string",
        Workspace = "some example string",
    });
}
catch (ApiException<DeleteWorkspacesByWorkspaceHooksByUidError> ex)
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

<code>[DeleteWorkspacesByWorkspaceHooksByUidRequest](src/Bitbucket/Requests/WebhooksApi/DeleteWorkspacesByWorkspaceHooksByUidRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteWorkspacesByWorkspaceHooksByUidError](src/Bitbucket/Errors/DeleteWorkspacesByWorkspaceHooksByUidError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubjectTypes&gt; GetHookEvents(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the webhook resource or subject types on which webhooks can
be registered.

Each resource/subject type contains an `events` link that returns the
paginated list of specific events each individual subject type can
emit.

This endpoint is publicly accessible and does not require
authentication or scopes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetHookEvents();
    // TODO: Handle 'response' of type SubjectTypes
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

**OnSuccess**: <code>[SubjectTypes](src/Bitbucket/Models/SubjectTypes.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Bitbucket/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedHookEvents&gt; GetHookEventsBySubjectType(GetHookEventsBySubjectTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of all valid webhook events for the
specified entity.
**The team and user webhooks are deprecated, and you should use workspace instead.
For more information, see the announcement.**

This is public data that does not require any scopes or authentication.

NOTE: The example response is a truncated response object for the `workspace` `subject_type`.
We return the same structure for the other `subject_type` objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetHookEventsBySubjectType(new GetHookEventsBySubjectTypeRequest
    {
        SubjectType = SubjectType1.Repository,
    });
    // TODO: Handle 'response' of type PaginatedHookEvents
}
catch (ApiException<GetHookEventsBySubjectTypeError> ex)
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

<code>[GetHookEventsBySubjectTypeRequest](src/Bitbucket/Requests/WebhooksApi/GetHookEventsBySubjectTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedHookEvents](src/Bitbucket/Models/PaginatedHookEvents.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetHookEventsBySubjectTypeError](src/Bitbucket/Errors/GetHookEventsBySubjectTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedWebhookSubscriptions&gt; GetRepositoriesByWorkspaceByRepoSlugHooks2(GetRepositoriesByWorkspaceByRepoSlugHooks2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of webhooks installed on this repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetRepositoriesByWorkspaceByRepoSlugHooks2(
        new GetRepositoriesByWorkspaceByRepoSlugHooks2Request
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedWebhookSubscriptions
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugHooks2Error> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugHooks2Request](src/Bitbucket/Requests/WebhooksApi/GetRepositoriesByWorkspaceByRepoSlugHooks2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWebhookSubscriptions](src/Bitbucket/Models/PaginatedWebhookSubscriptions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugHooks2Error](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugHooks2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookSubscription&gt; GetRepositoriesByWorkspaceByRepoSlugHooksByUid2(GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the webhook with the specified id installed on the specified
repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetRepositoriesByWorkspaceByRepoSlugHooksByUid2(
        new GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Request
        {
            RepoSlug = "some example string",
            Uid = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type WebhookSubscription
}
catch (ApiException<GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Error> ex)
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

<code>[GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Request](src/Bitbucket/Requests/WebhooksApi/GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](src/Bitbucket/Models/AllOf/WebhookSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Error](src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedWebhookSubscriptions&gt; GetWorkspacesByWorkspaceHooks(GetWorkspacesByWorkspaceHooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of webhooks installed on this workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWorkspacesByWorkspaceHooks(new GetWorkspacesByWorkspaceHooksRequest
    {
        Workspace = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedWebhookSubscriptions
}
catch (ApiException<GetWorkspacesByWorkspaceHooksError> ex)
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

<code>[GetWorkspacesByWorkspaceHooksRequest](src/Bitbucket/Requests/WebhooksApi/GetWorkspacesByWorkspaceHooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWebhookSubscriptions](src/Bitbucket/Models/PaginatedWebhookSubscriptions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceHooksError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceHooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookSubscription&gt; GetWorkspacesByWorkspaceHooksByUid(GetWorkspacesByWorkspaceHooksByUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the webhook with the specified id installed on the given
workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWorkspacesByWorkspaceHooksByUid(
        new GetWorkspacesByWorkspaceHooksByUidRequest
        {
            Uid = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type WebhookSubscription
}
catch (ApiException<GetWorkspacesByWorkspaceHooksByUidError> ex)
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

<code>[GetWorkspacesByWorkspaceHooksByUidRequest](src/Bitbucket/Requests/WebhooksApi/GetWorkspacesByWorkspaceHooksByUidRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](src/Bitbucket/Models/AllOf/WebhookSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceHooksByUidError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceHooksByUidError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookSubscription&gt; PostRepositoriesByWorkspaceByRepoSlugHooks2(PostRepositoriesByWorkspaceByRepoSlugHooks2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook on the specified repository.

Example:

```
$ curl -X POST -u credentials -H 'Content-Type: application/json'
https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks
-d '
{
"description": "Webhook Description",
"url": "https://example.com/",
"active": true,
"secret": "this is a really bad secret",
"events": [
"repo:push",
"issue:created",
"issue:updated"
]
}'
```

When the `secret` is provided it will be used as the key to generate a HMAC
digest value sent in the `X-Hub-Signature` header at delivery time. Passing
a `null` or empty `secret` or not passing a `secret` will leave the webhook's
secret unset. Bitbucket only generates the `X-Hub-Signature` when the webhook's
secret is set.

Note that this call requires the webhook scope, as well as any scope
that applies to the events that the webhook subscribes to. In the
example above that means: `webhook`, `repository` and `issue`.

Also note that the `url` must properly resolve and cannot be an
internal, non-routed address.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.PostRepositoriesByWorkspaceByRepoSlugHooks2(
        new PostRepositoriesByWorkspaceByRepoSlugHooks2Request
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type WebhookSubscription
}
catch (ApiException<PostRepositoriesByWorkspaceByRepoSlugHooks2Error> ex)
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

<code>[PostRepositoriesByWorkspaceByRepoSlugHooks2Request](src/Bitbucket/Requests/WebhooksApi/PostRepositoriesByWorkspaceByRepoSlugHooks2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](src/Bitbucket/Models/AllOf/WebhookSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostRepositoriesByWorkspaceByRepoSlugHooks2Error](src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugHooks2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookSubscription&gt; PostWorkspacesByWorkspaceHooks(PostWorkspacesByWorkspaceHooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook on the specified workspace.

Workspace webhooks are fired for events from all repositories contained
by that workspace.

Example:

```
$ curl -X POST -u credentials -H 'Content-Type: application/json'
https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks
-d '
{
"description": "Webhook Description",
"url": "https://example.com/",
"active": true,
"secret": "this is a really bad secret",
"events": [
"repo:push",
"issue:created",
"issue:updated"
]
}'
```

When the `secret` is provided it will be used as the key to generate a HMAC
digest value sent in the `X-Hub-Signature` header at delivery time. Passing
a `null` or empty `secret` or not passing a `secret` will leave the webhook's
secret unset. Bitbucket only generates the `X-Hub-Signature` when the webhook's
secret is set.

This call requires the webhook scope, as well as any scope
that applies to the events that the webhook subscribes to. In the
example above that means: `webhook`, `repository` and `issue`.

The `url` must properly resolve and cannot be an internal, non-routed address.

Only workspace owners can install webhooks on workspaces.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.PostWorkspacesByWorkspaceHooks(new PostWorkspacesByWorkspaceHooksRequest
    {
        Workspace = "some example string",
    });
    // TODO: Handle 'response' of type WebhookSubscription
}
catch (ApiException<PostWorkspacesByWorkspaceHooksError> ex)
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

<code>[PostWorkspacesByWorkspaceHooksRequest](src/Bitbucket/Requests/WebhooksApi/PostWorkspacesByWorkspaceHooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](src/Bitbucket/Models/AllOf/WebhookSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostWorkspacesByWorkspaceHooksError](src/Bitbucket/Errors/PostWorkspacesByWorkspaceHooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookSubscription&gt; PutRepositoriesByWorkspaceByRepoSlugHooksByUid2(PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `secret`
* `active`
* `events`

The hook's secret is used as a key to generate the HMAC hex digest sent in the
`X-Hub-Signature` header at delivery time. This signature is only generated
when the hook has a secret.

Set the hook's secret by passing the new value in the `secret` field. Passing a
`null` value in the `secret` field will remove the secret from the hook. The
hook's secret can be left unchanged by not passing the `secret` field in the
request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.PutRepositoriesByWorkspaceByRepoSlugHooksByUid2(
        new PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Request
        {
            RepoSlug = "some example string",
            Uid = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type WebhookSubscription
}
catch (ApiException<PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Error> ex)
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

<code>[PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Request](src/Bitbucket/Requests/WebhooksApi/PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](src/Bitbucket/Models/AllOf/WebhookSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Error](src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookSubscription&gt; PutWorkspacesByWorkspaceHooksByUid(PutWorkspacesByWorkspaceHooksByUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `secret`
* `active`
* `events`

The hook's secret is used as a key to generate the HMAC hex digest sent in the
`X-Hub-Signature` header at delivery time. This signature is only generated
when the hook has a secret.

Set the hook's secret by passing the new value in the `secret` field. Passing a
`null` value in the `secret` field will remove the secret from the hook. The
hook's secret can be left unchanged by not passing the `secret` field in the
request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.PutWorkspacesByWorkspaceHooksByUid(
        new PutWorkspacesByWorkspaceHooksByUidRequest
        {
            Uid = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type WebhookSubscription
}
catch (ApiException<PutWorkspacesByWorkspaceHooksByUidError> ex)
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

<code>[PutWorkspacesByWorkspaceHooksByUidRequest](src/Bitbucket/Requests/WebhooksApi/PutWorkspacesByWorkspaceHooksByUidRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](src/Bitbucket/Models/AllOf/WebhookSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutWorkspacesByWorkspaceHooksByUidError](src/Bitbucket/Errors/PutWorkspacesByWorkspaceHooksByUidError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](src/Bitbucket/Api/Workspaces.cs)

<details>
<summary><code>Task DeleteWorkspacesByWorkspaceHooksByUid2(DeleteWorkspacesByWorkspaceHooksByUid2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified webhook subscription from the given workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Workspaces.DeleteWorkspacesByWorkspaceHooksByUid2(new DeleteWorkspacesByWorkspaceHooksByUid2Request
    {
        Uid = "some example string",
        Workspace = "some example string",
    });
}
catch (ApiException<DeleteWorkspacesByWorkspaceHooksByUid2Error> ex)
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

<code>[DeleteWorkspacesByWorkspaceHooksByUid2Request](src/Bitbucket/Requests/Workspaces/DeleteWorkspacesByWorkspaceHooksByUid2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[DeleteWorkspacesByWorkspaceHooksByUid2Error](src/Bitbucket/Errors/DeleteWorkspacesByWorkspaceHooksByUid2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedWorkspaceMemberships&gt; GetUserPermissionsWorkspaces(GetUserPermissionsWorkspacesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

**This endpoint is deprecated. Please use the supported alternatives:**
* List workspaces for user
* Get user permission on a workspace

Returns an object for each workspace the caller is a member of, and
their effective role - the highest level of privilege the caller has.
If a user is a member of multiple groups with distinct roles, only the
highest level is returned.

Permissions can be:

* `owner`
* `collaborator`
* `member`

**The `collaborator` role is being removed from the Bitbucket Cloud API. For more information,
see the deprecation announcement.**

**When you move your administration from Bitbucket Cloud to admin.atlassian.com, the following fields on
`workspace_membership` will no longer be present: `last_accessed` and `added_on`. See the
deprecation announcement.**

Results may be further filtered or sorted by
workspace or permission by adding the following query string parameters:

* `q=workspace.slug="bbworkspace1"` or `q=permission="owner"`
* `sort=workspace.slug`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetUserPermissionsWorkspaces(new GetUserPermissionsWorkspacesRequest());
    // TODO: Handle 'response' of type PaginatedWorkspaceMemberships
}
catch (ApiException<GetUserPermissionsWorkspacesError> ex)
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

<code>[GetUserPermissionsWorkspacesRequest](src/Bitbucket/Requests/Workspaces/GetUserPermissionsWorkspacesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWorkspaceMemberships](src/Bitbucket/Models/PaginatedWorkspaceMemberships.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetUserPermissionsWorkspacesError](src/Bitbucket/Errors/GetUserPermissionsWorkspacesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedWorkspacePermissions&gt; GetUserWorkspaces(GetUserWorkspacesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an object for each workspace accessible to the caller. This object
also contains details on whether the caller has admin permissions on the workspace
(`"administrator" = true`) or not (`"administrator" = false`).

Queries support filtering based on administrator permissions,
sorting or
filtering by `slug`. Results can
be paginated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetUserWorkspaces(new GetUserWorkspacesRequest());
    // TODO: Handle 'response' of type PaginatedWorkspacePermissions
}
catch (ApiException<GetUserWorkspacesError> ex)
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

<code>[GetUserWorkspacesRequest](src/Bitbucket/Requests/Workspaces/GetUserWorkspacesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWorkspacePermissions](src/Bitbucket/Models/PaginatedWorkspacePermissions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetUserWorkspacesError](src/Bitbucket/Errors/GetUserWorkspacesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspaceMembership&gt; GetUserWorkspacesByWorkspacePermission(GetUserWorkspacesByWorkspacePermissionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the caller's effective role; as in, the highest level of privilege
the caller has for the workspace.
If the calling user is a member of multiple groups with distinct roles, only the
highest level is returned.

Permissions can be:

* `owner`
* `create-project`
* `collaborator` (deprecated; see this
deprecation announcement for more details)
* `member`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetUserWorkspacesByWorkspacePermission(
        new GetUserWorkspacesByWorkspacePermissionRequest { Workspace = "some example string" });
    // TODO: Handle 'response' of type WorkspaceMembership
}
catch (ApiException<GetUserWorkspacesByWorkspacePermissionError> ex)
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

<code>[GetUserWorkspacesByWorkspacePermissionRequest](src/Bitbucket/Requests/Workspaces/GetUserWorkspacesByWorkspacePermissionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceMembership](src/Bitbucket/Models/AllOf/WorkspaceMembership.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetUserWorkspacesByWorkspacePermissionError](src/Bitbucket/Errors/GetUserWorkspacesByWorkspacePermissionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedWorkspaces&gt; GetWorkspaces(GetWorkspacesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

**This endpoint is deprecated. Please use the
supported alternative.**

Returns a list of workspaces accessible by the authenticated user.

Results may be further filtered or sorted by
workspace or permission by adding the following query string parameters:

* `q=slug="bbworkspace1"` or `q=is_private=true`
* `sort=created_on`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

**The `collaborator` role is being removed from the Bitbucket Cloud API. For more information,
see the deprecation announcement.**

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspaces(new GetWorkspacesRequest());
    // TODO: Handle 'response' of type PaginatedWorkspaces
}
catch (ApiException<GetWorkspacesError> ex)
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

<code>[GetWorkspacesRequest](src/Bitbucket/Requests/Workspaces/GetWorkspacesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWorkspaces](src/Bitbucket/Models/PaginatedWorkspaces.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesError](src/Bitbucket/Errors/GetWorkspacesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspaceBitbucketWorkspacesApi&gt; GetWorkspacesByWorkspace(GetWorkspacesByWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the requested workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspacesByWorkspace(new GetWorkspacesByWorkspaceRequest
    {
        Workspace = "some example string",
    });
    // TODO: Handle 'response' of type WorkspaceBitbucketWorkspacesApi
}
catch (ApiException<GetWorkspacesByWorkspaceError> ex)
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

<code>[GetWorkspacesByWorkspaceRequest](src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceBitbucketWorkspacesApi](src/Bitbucket/Models/AllOf/WorkspaceBitbucketWorkspacesApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedWebhookSubscriptions&gt; GetWorkspacesByWorkspaceHooks2(GetWorkspacesByWorkspaceHooks2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of webhooks installed on this workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspacesByWorkspaceHooks2(new GetWorkspacesByWorkspaceHooks2Request
    {
        Workspace = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedWebhookSubscriptions
}
catch (ApiException<GetWorkspacesByWorkspaceHooks2Error> ex)
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

<code>[GetWorkspacesByWorkspaceHooks2Request](src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspaceHooks2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWebhookSubscriptions](src/Bitbucket/Models/PaginatedWebhookSubscriptions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceHooks2Error](src/Bitbucket/Errors/GetWorkspacesByWorkspaceHooks2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookSubscription&gt; GetWorkspacesByWorkspaceHooksByUid2(GetWorkspacesByWorkspaceHooksByUid2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the webhook with the specified id installed on the given
workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspacesByWorkspaceHooksByUid2(
        new GetWorkspacesByWorkspaceHooksByUid2Request
        {
            Uid = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type WebhookSubscription
}
catch (ApiException<GetWorkspacesByWorkspaceHooksByUid2Error> ex)
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

<code>[GetWorkspacesByWorkspaceHooksByUid2Request](src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspaceHooksByUid2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](src/Bitbucket/Models/AllOf/WebhookSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceHooksByUid2Error](src/Bitbucket/Errors/GetWorkspacesByWorkspaceHooksByUid2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedWorkspaceMemberships&gt; GetWorkspacesByWorkspaceMembers(GetWorkspacesByWorkspaceMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all members of the requested workspace.

This endpoint additionally supports filtering by
email address, if called by a workspace administrator, integration or workspace access
token. This is done by adding the following query string parameter:

* `q=user.email IN ("user1@org.com","user2@org.com")`

When filtering by email, you can query up to 90 addresses at a time.
Note that the query parameter values need to be URL escaped, so the final query string
should be:

* `q=user.email%20IN%20(%22user1@org.com%22,%22user2@org.com%22)`

Email addresses that you filter by (and only these email addresses) can be included in the
response using the `fields` query parameter:

* `&fields=+values.user.email` - add the `email` field to the default `user` response object
* `&fields=values.user.email,values.user.account_id` - only return user email addresses and
account IDs

Once again, all query parameter values must be URL escaped.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspacesByWorkspaceMembers(new GetWorkspacesByWorkspaceMembersRequest
    {
        Workspace = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedWorkspaceMemberships
}
catch (ApiException<GetWorkspacesByWorkspaceMembersError> ex)
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

<code>[GetWorkspacesByWorkspaceMembersRequest](src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspaceMembersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWorkspaceMemberships](src/Bitbucket/Models/PaginatedWorkspaceMemberships.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceMembersError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceMembersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspaceMembership&gt; GetWorkspacesByWorkspaceMembersByMember(GetWorkspacesByWorkspaceMembersByMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the workspace membership, which includes
a `User` object for the member and a `Workspace` object
for the requested workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspacesByWorkspaceMembersByMember(
        new GetWorkspacesByWorkspaceMembersByMemberRequest
        {
            Member = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type WorkspaceMembership
}
catch (ApiException<GetWorkspacesByWorkspaceMembersByMemberError> ex)
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

<code>[GetWorkspacesByWorkspaceMembersByMemberRequest](src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspaceMembersByMemberRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceMembership](src/Bitbucket/Models/AllOf/WorkspaceMembership.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceMembersByMemberError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceMembersByMemberError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedWorkspaceMemberships&gt; GetWorkspacesByWorkspacePermissions(GetWorkspacesByWorkspacePermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of members in a workspace
and their permission levels.
Permission can be:
* `owner`
* `collaborator`
* `member`

**The `collaborator` role is being removed from the Bitbucket Cloud API. For more information,
see the deprecation announcement.**

**When you move your administration from Bitbucket Cloud to admin.atlassian.com, the following fields on
`workspace_membership` will no longer be present: `last_accessed` and `added_on`. See the
deprecation announcement.**

Results may be further filtered by
permission by adding the following query string parameters:

* `q=permission="owner"`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspacesByWorkspacePermissions(
        new GetWorkspacesByWorkspacePermissionsRequest { Workspace = "some example string" });
    // TODO: Handle 'response' of type PaginatedWorkspaceMemberships
}
catch (ApiException<GetWorkspacesByWorkspacePermissionsError> ex)
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

<code>[GetWorkspacesByWorkspacePermissionsRequest](src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspacePermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWorkspaceMemberships](src/Bitbucket/Models/PaginatedWorkspaceMemberships.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspacePermissionsError](src/Bitbucket/Errors/GetWorkspacesByWorkspacePermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedRepositoryPermissions&gt; GetWorkspacesByWorkspacePermissionsRepositories(GetWorkspacesByWorkspacePermissionsRepositoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an object for each repository permission for all of a
workspace's repositories.

Permissions returned are effective permissions: the highest level of
permission the user has. This does not distinguish between direct and
indirect (group) privileges.

Only users with admin permission for the team may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`

Results may be further filtered or sorted
by repository, user, or permission by adding the following query string
parameters:

* `q=repository.name="geordi"` or `q=permission>"read"`
* `sort=user.display_name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspacesByWorkspacePermissionsRepositories(
        new GetWorkspacesByWorkspacePermissionsRepositoriesRequest { Workspace = "some example string" });
    // TODO: Handle 'response' of type PaginatedRepositoryPermissions
}
catch (ApiException<GetWorkspacesByWorkspacePermissionsRepositoriesError> ex)
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

<code>[GetWorkspacesByWorkspacePermissionsRepositoriesRequest](src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspacePermissionsRepositoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositoryPermissions](src/Bitbucket/Models/PaginatedRepositoryPermissions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspacePermissionsRepositoriesError](src/Bitbucket/Errors/GetWorkspacesByWorkspacePermissionsRepositoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedRepositoryPermissions&gt; GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlug(GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an object for the repository permission of each user in the
requested repository.

Permissions returned are effective permissions: the highest level of
permission the user has. This does not distinguish between direct and
indirect (group) privileges.

Only users with admin permission for the repository may access this resource.

Permissions can be:

* `admin`
* `write`
* `read`

Results may be further filtered or sorted
by user, or permission by adding the following query string parameters:

* `q=permission>"read"`
* `sort=user.display_name`

Note that the query parameter values need to be URL escaped so that `=`
would become `%3D`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlug(
        new GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugRequest
        {
            RepoSlug = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedRepositoryPermissions
}
catch (ApiException<GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugError> ex)
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

<code>[GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugRequest](src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositoryPermissions](src/Bitbucket/Models/PaginatedRepositoryPermissions.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugError](src/Bitbucket/Errors/GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedProjects&gt; GetWorkspacesByWorkspaceProjects(GetWorkspacesByWorkspaceProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of projects in this workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspacesByWorkspaceProjects(new GetWorkspacesByWorkspaceProjectsRequest
    {
        Workspace = "some example string",
    });
    // TODO: Handle 'response' of type PaginatedProjects
}
catch (ApiException<GetWorkspacesByWorkspaceProjectsError> ex)
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

<code>[GetWorkspacesByWorkspaceProjectsRequest](src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspaceProjectsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedProjects](src/Bitbucket/Models/PaginatedProjects.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceProjectsError](src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectBitbucketDeploymentsApi&gt; GetWorkspacesByWorkspaceProjectsByProjectKey2(GetWorkspacesByWorkspaceProjectsByProjectKey2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the requested project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspacesByWorkspaceProjectsByProjectKey2(
        new GetWorkspacesByWorkspaceProjectsByProjectKey2Request
        {
            ProjectKey = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type ProjectBitbucketDeploymentsApi
}
catch (ApiException<GetWorkspacesByWorkspaceProjectsByProjectKey2Error> ex)
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

<code>[GetWorkspacesByWorkspaceProjectsByProjectKey2Request](src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspaceProjectsByProjectKey2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectBitbucketDeploymentsApi](src/Bitbucket/Models/AllOf/ProjectBitbucketDeploymentsApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspaceProjectsByProjectKey2Error](src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKey2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedPullRequests&gt; GetWorkspacesByWorkspacePullrequestsBySelectedUser2(GetWorkspacesByWorkspacePullrequestsBySelectedUser2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all workspace pull requests authored by the specified user.

By default only open pull requests are returned. This can be controlled
using the `state` query parameter. To retrieve pull requests that are
in one of multiple states, repeat the `state` parameter for each
individual state.

This endpoint also supports filtering and sorting of the results. See
filtering and sorting for more details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspacesByWorkspacePullrequestsBySelectedUser2(
        new GetWorkspacesByWorkspacePullrequestsBySelectedUser2Request
        {
            SelectedUser = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type PaginatedPullRequests
}
catch (ApiException<GetWorkspacesByWorkspacePullrequestsBySelectedUser2Error> ex)
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

<code>[GetWorkspacesByWorkspacePullrequestsBySelectedUser2Request](src/Bitbucket/Requests/Workspaces/GetWorkspacesByWorkspacePullrequestsBySelectedUser2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPullRequests](src/Bitbucket/Models/PaginatedPullRequests.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[GetWorkspacesByWorkspacePullrequestsBySelectedUser2Error](src/Bitbucket/Errors/GetWorkspacesByWorkspacePullrequestsBySelectedUser2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookSubscription&gt; PostWorkspacesByWorkspaceHooks2(PostWorkspacesByWorkspaceHooks2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook on the specified workspace.

Workspace webhooks are fired for events from all repositories contained
by that workspace.

Example:

```
$ curl -X POST -u credentials -H 'Content-Type: application/json'
https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks
-d '
{
"description": "Webhook Description",
"url": "https://example.com/",
"active": true,
"secret": "this is a really bad secret",
"events": [
"repo:push",
"issue:created",
"issue:updated"
]
}'
```

When the `secret` is provided it will be used as the key to generate a HMAC
digest value sent in the `X-Hub-Signature` header at delivery time. Passing
a `null` or empty `secret` or not passing a `secret` will leave the webhook's
secret unset. Bitbucket only generates the `X-Hub-Signature` when the webhook's
secret is set.

This call requires the webhook scope, as well as any scope
that applies to the events that the webhook subscribes to. In the
example above that means: `webhook`, `repository` and `issue`.

The `url` must properly resolve and cannot be an internal, non-routed address.

Only workspace owners can install webhooks on workspaces.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.PostWorkspacesByWorkspaceHooks2(new PostWorkspacesByWorkspaceHooks2Request
    {
        Workspace = "some example string",
    });
    // TODO: Handle 'response' of type WebhookSubscription
}
catch (ApiException<PostWorkspacesByWorkspaceHooks2Error> ex)
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

<code>[PostWorkspacesByWorkspaceHooks2Request](src/Bitbucket/Requests/Workspaces/PostWorkspacesByWorkspaceHooks2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](src/Bitbucket/Models/AllOf/WebhookSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PostWorkspacesByWorkspaceHooks2Error](src/Bitbucket/Errors/PostWorkspacesByWorkspaceHooks2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookSubscription&gt; PutWorkspacesByWorkspaceHooksByUid2(PutWorkspacesByWorkspaceHooksByUid2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified webhook subscription.

The following properties can be mutated:

* `description`
* `url`
* `secret`
* `active`
* `events`

The hook's secret is used as a key to generate the HMAC hex digest sent in the
`X-Hub-Signature` header at delivery time. This signature is only generated
when the hook has a secret.

Set the hook's secret by passing the new value in the `secret` field. Passing a
`null` value in the `secret` field will remove the secret from the hook. The
hook's secret can be left unchanged by not passing the `secret` field in the
request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.PutWorkspacesByWorkspaceHooksByUid2(
        new PutWorkspacesByWorkspaceHooksByUid2Request
        {
            Uid = "some example string",
            Workspace = "some example string",
        });
    // TODO: Handle 'response' of type WebhookSubscription
}
catch (ApiException<PutWorkspacesByWorkspaceHooksByUid2Error> ex)
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

<code>[PutWorkspacesByWorkspaceHooksByUid2Request](src/Bitbucket/Requests/Workspaces/PutWorkspacesByWorkspaceHooksByUid2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](src/Bitbucket/Models/AllOf/WebhookSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Bitbucket/Core/Exceptions/ApiException.cs)&lt;[PutWorkspacesByWorkspaceHooksByUid2Error](src/Bitbucket/Errors/PutWorkspacesByWorkspaceHooksByUid2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

