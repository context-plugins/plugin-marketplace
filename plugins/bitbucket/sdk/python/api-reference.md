# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [BitbucketClient](bitbucket/client.py)

## Addon

> Source: [Addon](bitbucket/apis/addon.py)

<details>
<summary><code>def delete_addon(*, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

``
$ curl -X DELETE https://api.bitbucket.org/2.0/addon \
-H "Authorization: JWT "
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.addon.delete_addon()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAddonErrorBody
```

**Async**

```python
try:
    await async_client.addon.delete_addon()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAddonErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteAddonErrorBody](bitbucket/errors/delete_addon_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_addon_linkers_by_linker_key_values(linker_key: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.addon.delete_addon_linkers_by_linker_key_values("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAddonLinkersByLinkerKeyValuesErrorBody
```

**Async**

```python
try:
    await async_client.addon.delete_addon_linkers_by_linker_key_values("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAddonLinkersByLinkerKeyValuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>linker_key</code> | <code>str</code> | The unique key of a [linker module](/cloud/bitbucket/modules/linker/)<br>as defined in an application descriptor. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteAddonLinkersByLinkerKeyValuesErrorBody](bitbucket/errors/delete_addon_linkers_by_linker_key_values_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_addon_linkers_by_linker_key_values_by_value_id(linker_key: str, value_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.addon.delete_addon_linkers_by_linker_key_values_by_value_id("some example string", 1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAddonLinkersByLinkerKeyValuesByValueIdErrorBody
```

**Async**

```python
try:
    await async_client.addon.delete_addon_linkers_by_linker_key_values_by_value_id("some example string", 1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAddonLinkersByLinkerKeyValuesByValueIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>linker_key</code> | <code>str</code> | The unique key of a [linker module](/cloud/bitbucket/modules/linker/)<br>as defined in an application descriptor. |
| <code>value_id</code> | <code>int</code> | The numeric ID of the linker value. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteAddonLinkersByLinkerKeyValuesByValueIdErrorBody](bitbucket/errors/delete_addon_linkers_by_linker_key_values_by_value_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_addon_linkers(*, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.addon.get_addon_linkers()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAddonLinkersErrorBody
```

**Async**

```python
try:
    await async_client.addon.get_addon_linkers()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAddonLinkersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetAddonLinkersErrorBody](bitbucket/errors/get_addon_linkers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_addon_linkers_by_linker_key(linker_key: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.addon.get_addon_linkers_by_linker_key("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAddonLinkersByLinkerKeyErrorBody
```

**Async**

```python
try:
    await async_client.addon.get_addon_linkers_by_linker_key("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAddonLinkersByLinkerKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>linker_key</code> | <code>str</code> | The unique key of a [linker module](/cloud/bitbucket/modules/linker/)<br>as defined in an application descriptor. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetAddonLinkersByLinkerKeyErrorBody](bitbucket/errors/get_addon_linkers_by_linker_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_addon_linkers_by_linker_key_values(linker_key: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.addon.get_addon_linkers_by_linker_key_values("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAddonLinkersByLinkerKeyValuesErrorBody
```

**Async**

```python
try:
    await async_client.addon.get_addon_linkers_by_linker_key_values("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAddonLinkersByLinkerKeyValuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>linker_key</code> | <code>str</code> | The unique key of a [linker module](/cloud/bitbucket/modules/linker/)<br>as defined in an application descriptor. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetAddonLinkersByLinkerKeyValuesErrorBody](bitbucket/errors/get_addon_linkers_by_linker_key_values_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_addon_linkers_by_linker_key_values_by_value_id(linker_key: str, value_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.addon.get_addon_linkers_by_linker_key_values_by_value_id("some example string", 1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAddonLinkersByLinkerKeyValuesByValueIdErrorBody
```

**Async**

```python
try:
    await async_client.addon.get_addon_linkers_by_linker_key_values_by_value_id("some example string", 1)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAddonLinkersByLinkerKeyValuesByValueIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>linker_key</code> | <code>str</code> | The unique key of a [linker module](/cloud/bitbucket/modules/linker/)<br>as defined in an application descriptor. |
| <code>value_id</code> | <code>int</code> | The numeric ID of the linker value. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetAddonLinkersByLinkerKeyValuesByValueIdErrorBody](bitbucket/errors/get_addon_linkers_by_linker_key_values_by_value_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_addon_linkers_by_linker_key_values(linker_key: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.addon.post_addon_linkers_by_linker_key_values("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostAddonLinkersByLinkerKeyValuesErrorBody
```

**Async**

```python
try:
    await async_client.addon.post_addon_linkers_by_linker_key_values("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostAddonLinkersByLinkerKeyValuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>linker_key</code> | <code>str</code> | The unique key of a [linker module](/cloud/bitbucket/modules/linker/)<br>as defined in an application descriptor. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostAddonLinkersByLinkerKeyValuesErrorBody](bitbucket/errors/post_addon_linkers_by_linker_key_values_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 409 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_addon(*, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

``
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
-H "Authorization: JWT " \
--header "Content-Type: application/json" \
--data '{}'
``

The new `descriptor` for the installation can be also provided
in the body directly.

``
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
-H "Authorization: JWT " \
--header "Content-Type: application/json" \
--data '{"descriptor": $NEW_DESCRIPTOR}'
``

In both these modes the URL of the descriptor cannot be changed. To
change the descriptor location and upgrade an installation
the request must be made exclusively with a `descriptor_url`.

``
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
-H "Authorization: JWT " \
--header "Content-Type: application/json" \
--data '{"descriptor_url": $NEW_URL}'
``

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

**Sync**

```python
try:
    client.addon.put_addon()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutAddonErrorBody
```

**Async**

```python
try:
    await async_client.addon.put_addon()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutAddonErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutAddonErrorBody](bitbucket/errors/put_addon_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_addon_linkers_by_linker_key_values(linker_key: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.addon.put_addon_linkers_by_linker_key_values("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutAddonLinkersByLinkerKeyValuesErrorBody
```

**Async**

```python
try:
    await async_client.addon.put_addon_linkers_by_linker_key_values("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutAddonLinkersByLinkerKeyValuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>linker_key</code> | <code>str</code> | The unique key of a [linker module](/cloud/bitbucket/modules/linker/)<br>as defined in an application descriptor. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutAddonLinkersByLinkerKeyValuesErrorBody](bitbucket/errors/put_addon_linkers_by_linker_key_values_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BranchRestrictions

> Source: [BranchRestrictions](bitbucket/apis/branch_restrictions.py)

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(id_: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.branch_restrictions.delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody
```

**Async**

```python
try:
    await async_client.branch_restrictions.delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The restriction rule's id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_branch_restrictions(repo_slug: str, workspace: str, *, kind: str | None = None, pattern: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedBranchRestrictions</code></summary>

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

**Sync**

```python
try:
    response = client.branch_restrictions.get_repositories_by_workspace_by_repo_slug_branch_restrictions(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedBranchRestrictions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody
```

**Async**

```python
try:
    response = await async_client.branch_restrictions.get_repositories_by_workspace_by_repo_slug_branch_restrictions(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedBranchRestrictions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>kind</code> | <code>str \| None</code> | Branch restrictions of this type<br>**Default**: <code>None</code> |
| <code>pattern</code> | <code>str \| None</code> | Branch restrictions applied to branches of this pattern<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedBranchRestrictions](bitbucket/models/paginated_branch_restrictions.py)</code> -- A paginated list of branch restrictions

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_branch_restrictions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(id_: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Branchrestriction</code></summary>

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

**Sync**

```python
try:
    response = client.branch_restrictions.get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Branchrestriction
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.branch_restrictions.get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Branchrestriction
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The restriction rule's id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Branchrestriction](bitbucket/models/branchrestriction.py)</code> -- The branch restriction rule

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_branch_restrictions(repo_slug: str, workspace: str, body: Branchrestriction | BranchrestrictionDict, *, request_options: RequestOptionsOrDict | None = None) -> Branchrestriction</code></summary>

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

**Sync**

```python
try:
    response = client.branch_restrictions.post_repositories_by_workspace_by_repo_slug_branch_restrictions(
        "some example string",
        "some example string",
        Branchrestriction(
            kind=Kind.PUSH, branch_match_kind=BranchMatchKind.BRANCHING_MODEL, pattern="some example string"
        ),
    )
    # TODO: Handle 'response' of type Branchrestriction
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody
```

**Async**

```python
try:
    response = await async_client.branch_restrictions.post_repositories_by_workspace_by_repo_slug_branch_restrictions(
        "some example string",
        "some example string",
        Branchrestriction(
            kind=Kind.PUSH, branch_match_kind=BranchMatchKind.BRANCHING_MODEL, pattern="some example string"
        ),
    )
    # TODO: Handle 'response' of type Branchrestriction
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[Branchrestriction](bitbucket/models/branchrestriction.py) \| [BranchrestrictionDict](bitbucket/models/branchrestriction.py)</code> | The new rule |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Branchrestriction](bitbucket/models/branchrestriction.py)</code> -- A paginated list of branch restrictions

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugBranchRestrictionsErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_branch_restrictions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(id_: str, repo_slug: str, workspace: str, body: Branchrestriction | BranchrestrictionDict, *, request_options: RequestOptionsOrDict | None = None) -> Branchrestriction</code></summary>

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

**Sync**

```python
try:
    response = client.branch_restrictions.put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        "some example string",
        "some example string",
        "some example string",
        Branchrestriction(
            kind=Kind.PUSH, branch_match_kind=BranchMatchKind.BRANCHING_MODEL, pattern="some example string"
        ),
    )
    # TODO: Handle 'response' of type Branchrestriction
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.branch_restrictions.put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id(
        "some example string",
        "some example string",
        "some example string",
        Branchrestriction(
            kind=Kind.PUSH, branch_match_kind=BranchMatchKind.BRANCHING_MODEL, pattern="some example string"
        ),
    )
    # TODO: Handle 'response' of type Branchrestriction
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The restriction rule's id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[Branchrestriction](bitbucket/models/branchrestriction.py) \| [BranchrestrictionDict](bitbucket/models/branchrestriction.py)</code> | The new version of the existing rule |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Branchrestriction](bitbucket/models/branchrestriction.py)</code> -- The updated branch restriction rule

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_branch_restrictions_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BranchingModelApi

> Source: [BranchingModelApi](bitbucket/apis/branching_model_api.py)

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_branching_model(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> BranchingModel</code></summary>

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

**Sync**

```python
try:
    response = client.branching_model_api.get_repositories_by_workspace_by_repo_slug_branching_model(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BranchingModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugBranchingModelErrorBody
```

**Async**

```python
try:
    response = await async_client.branching_model_api.get_repositories_by_workspace_by_repo_slug_branching_model(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BranchingModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugBranchingModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BranchingModel](bitbucket/models/branching_model.py)</code> -- The branching model object

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugBranchingModelErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_branching_model_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_branching_model_settings(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> BranchingModelSettings</code></summary>

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

**Sync**

```python
try:
    response = client.branching_model_api.get_repositories_by_workspace_by_repo_slug_branching_model_settings(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BranchingModelSettings
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody
```

**Async**

```python
try:
    response = await async_client.branching_model_api.get_repositories_by_workspace_by_repo_slug_branching_model_settings(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BranchingModelSettings
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BranchingModelSettings](bitbucket/models/branching_model_settings.py)</code> -- The branching model configuration

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_branching_model_settings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_effective_branching_model(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> EffectiveRepoBranchingModel</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.branching_model_api.get_repositories_by_workspace_by_repo_slug_effective_branching_model(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type EffectiveRepoBranchingModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelErrorBody
```

**Async**

```python
try:
    response = await async_client.branching_model_api.get_repositories_by_workspace_by_repo_slug_effective_branching_model(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type EffectiveRepoBranchingModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EffectiveRepoBranchingModel](bitbucket/models/effective_repo_branching_model.py)</code> -- The effective branching model object

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_effective_branching_model_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_projects_by_project_key_branching_model(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> ProjectBranchingModel</code></summary>

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

**Sync**

```python
try:
    response = client.branching_model_api.get_workspaces_by_workspace_projects_by_project_key_branching_model(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectBranchingModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelErrorBody
```

**Async**

```python
try:
    response = await async_client.branching_model_api.get_workspaces_by_workspace_projects_by_project_key_branching_model(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectBranchingModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual `key` assigned<br>to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectBranchingModel](bitbucket/models/project_branching_model.py)</code> -- The branching model object

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelErrorBody](bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_branching_model_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_projects_by_project_key_branching_model_settings(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> BranchingModelSettings</code></summary>

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

**Sync**

```python
try:
    response = client.branching_model_api.get_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BranchingModelSettings
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody
```

**Async**

```python
try:
    response = await async_client.branching_model_api.get_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BranchingModelSettings
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual `key` assigned<br>to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BranchingModelSettings](bitbucket/models/branching_model_settings.py)</code> -- The branching model configuration

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody](bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_branching_model_settings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_branching_model_settings(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> BranchingModelSettings</code></summary>

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

**Sync**

```python
try:
    response = client.branching_model_api.put_repositories_by_workspace_by_repo_slug_branching_model_settings(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BranchingModelSettings
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody
```

**Async**

```python
try:
    response = await async_client.branching_model_api.put_repositories_by_workspace_by_repo_slug_branching_model_settings(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BranchingModelSettings
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BranchingModelSettings](bitbucket/models/branching_model_settings.py)</code> -- The updated branching model configuration

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_branching_model_settings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_workspaces_by_workspace_projects_by_project_key_branching_model_settings(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> BranchingModelSettings</code></summary>

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

**Sync**

```python
try:
    response = client.branching_model_api.put_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BranchingModelSettings
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody
```

**Async**

```python
try:
    response = await async_client.branching_model_api.put_workspaces_by_workspace_projects_by_project_key_branching_model_settings(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BranchingModelSettings
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual `key` assigned<br>to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BranchingModelSettings](bitbucket/models/branching_model_settings.py)</code> -- The updated branching model configuration

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody](bitbucket/errors/put_workspaces_by_workspace_projects_by_project_key_branching_model_settings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CommitStatuses

> Source: [CommitStatuses](bitbucket/apis/commit_statuses.py)

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses(commit: str, repo_slug: str, workspace: str, *, refname: str | None = None, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedCommitStatuses</code></summary>

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

**Sync**

```python
try:
    response = client.commit_statuses.get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedCommitStatuses
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesErrorBody
```

**Async**

```python
try:
    response = await async_client.commit_statuses.get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedCommitStatuses
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>refname</code> | <code>str \| None</code> | If specified, only return commit status objects that were either<br>created without a refname, or were created with the specified refname<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Field by which the results should be sorted as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>Defaults to `created_on`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedCommitStatuses](bitbucket/models/paginated_commit_statuses.py)</code> -- A paginated list of all commit statuses for this commit.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(commit: str, key: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Commitstatus</code></summary>

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

**Sync**

```python
try:
    response = client.commit_statuses.get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Commitstatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody
```

**Async**

```python
try:
    response = await async_client.commit_statuses.get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Commitstatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>key</code> | <code>str</code> | The build status' unique key |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Commitstatus](bitbucket/models/commitstatus.py)</code> -- The build status object with the specified key.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses(pull_request_id: int, repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedCommitStatuses</code></summary>

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

**Sync**

```python
try:
    response = client.commit_statuses.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedCommitStatuses
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.commit_statuses.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedCommitStatuses
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Field by which the results should be sorted as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>Defaults to `created_on`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedCommitStatuses](bitbucket/models/paginated_commit_statuses.py)</code> -- A paginated list of all commit statuses for this pull request.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatusesErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build(commit: str, repo_slug: str, workspace: str, *, body: Commitstatus | CommitstatusDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Commitstatus</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new build status against the specified commit.

If the specified key already exists, the existing status object will
be overwritten.

Example:

``
curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/ -X POST -u jdoe -H 'Content-Type: application/json' -d '{
"key": "MY-BUILD",
"state": "SUCCESSFUL",
"description": "42 tests passed",
"url": "https://www.example.org/my-build-result"
}'
``

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
``
curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/ -X POST -u jdoe -H 'Content-Type: application/json' -d '{
"key": "MY-BUILD",
"state": "SUCCESSFUL",
"description": "42 tests passed",
"url": "https://www.example.org/my-build-result",
"refname": "my-pr-branch"
}'
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.commit_statuses.post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Commitstatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildErrorBody
```

**Async**

```python
try:
    response = await async_client.commit_statuses.post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Commitstatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[Commitstatus](bitbucket/models/commitstatus.py) \| [CommitstatusDict](bitbucket/models/commitstatus.py) \| None</code> | The new commit status object.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Commitstatus](bitbucket/models/commitstatus.py)</code> -- The newly created build status object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(commit: str, key: str, repo_slug: str, workspace: str, *, body: Commitstatus | CommitstatusDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Commitstatus</code></summary>

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

**Sync**

```python
try:
    response = client.commit_statuses.put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Commitstatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody
```

**Async**

```python
try:
    response = await async_client.commit_statuses.put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Commitstatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>key</code> | <code>str</code> | The build status' unique key |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[Commitstatus](bitbucket/models/commitstatus.py) \| [CommitstatusDict](bitbucket/models/commitstatus.py) \| None</code> | The updated build status object<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Commitstatus](bitbucket/models/commitstatus.py)</code> -- The updated build status object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_commit_by_commit_statuses_build_by_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Commits

> Source: [Commits](bitbucket/apis/commits.py)

<details>
<summary><code>def bulk_create_or_update_annotations(workspace: str, repo_slug: str, commit: str, report_id: str, body: list[ReportAnnotation | ReportAnnotationDict], *, request_options: RequestOptionsOrDict | None = None) -> list[ReportAnnotation]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk upload of annotations.
Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated UUID. You can upload up to 100 annotations per POST request.

### Sample cURL request:
``
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
``

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

**Sync**

```python
try:
    response = client.commits.bulk_create_or_update_annotations(
        "some example string", "some example string", "some example string", "some example string", [ReportAnnotation()]
    )
    # TODO: Handle 'response' of type list[ReportAnnotation]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.commits.bulk_create_or_update_annotations(
        "some example string", "some example string", "some example string", "some example string", [ReportAnnotation()]
    )
    # TODO: Handle 'response' of type list[ReportAnnotation]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit for which to retrieve reports. |
| <code>report_id</code> | <code>str</code> | Uuid or external-if of the report for which to get annotations for. |
| <code>body</code> | <code>list&#91;[ReportAnnotation](bitbucket/models/report_annotation.py) \| [ReportAnnotationDict](bitbucket/models/report_annotation.py)&#93;</code> | The annotations to create or update |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[ReportAnnotation](bitbucket/models/report_annotation.py)&#93;</code> -- OK

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_or_update_annotation(workspace: str, repo_slug: str, commit: str, report_id: str, annotation_id: str, body: ReportAnnotation | ReportAnnotationDict, *, request_options: RequestOptionsOrDict | None = None) -> ReportAnnotation</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates an individual annotation for the specified report.
Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated UUID. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.

### Sample cURL request:
``
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
``

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

**Sync**

```python
try:
    response = client.commits.create_or_update_annotation(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        ReportAnnotation(),
    )
    # TODO: Handle 'response' of type ReportAnnotation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrUpdateAnnotationErrorBody
```

**Async**

```python
try:
    response = await async_client.commits.create_or_update_annotation(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        ReportAnnotation(),
    )
    # TODO: Handle 'response' of type ReportAnnotation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrUpdateAnnotationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit the report belongs to. |
| <code>report_id</code> | <code>str</code> | Either the uuid or external-id of the report. |
| <code>annotation_id</code> | <code>str</code> | Either the uuid or external-id of the annotation. |
| <code>body</code> | <code>[ReportAnnotation](bitbucket/models/report_annotation.py) \| [ReportAnnotationDict](bitbucket/models/report_annotation.py)</code> | The annotation to create or update |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportAnnotation](bitbucket/models/report_annotation.py)</code> -- OK

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[CreateOrUpdateAnnotationErrorBody](bitbucket/errors/create_or_update_annotation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_or_update_report(workspace: str, repo_slug: str, commit: str, report_id: str, body: Report | ReportDict, *, request_options: RequestOptionsOrDict | None = None) -> Report</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates a report for the specified commit.
To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.

### Sample cURL request:
``
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
``

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

**Sync**

```python
try:
    response = client.commits.create_or_update_report(
        "some example string", "some example string", "some example string", "some example string", Report()
    )
    # TODO: Handle 'response' of type Report
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrUpdateReportErrorBody
```

**Async**

```python
try:
    response = await async_client.commits.create_or_update_report(
        "some example string", "some example string", "some example string", "some example string", Report()
    )
    # TODO: Handle 'response' of type Report
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrUpdateReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit the report belongs to. |
| <code>report_id</code> | <code>str</code> | Either the uuid or external-id of the report. |
| <code>body</code> | <code>[Report](bitbucket/models/report.py) \| [ReportDict](bitbucket/models/report.py)</code> | The report to create or update |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Report](bitbucket/models/report.py)</code> -- OK

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[CreateOrUpdateReportErrorBody](bitbucket/errors/create_or_update_report_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_annotation(workspace: str, repo_slug: str, commit: str, report_id: str, annotation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.commits.delete_annotation(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.commits.delete_annotation(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit the annotation belongs to. |
| <code>report_id</code> | <code>str</code> | Either the uuid or external-id of the annotation. |
| <code>annotation_id</code> | <code>str</code> | Either the uuid or external-id of the annotation. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_report(workspace: str, repo_slug: str, commit: str, report_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.commits.delete_report(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.commits.delete_report(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit the report belongs to. |
| <code>report_id</code> | <code>str</code> | Either the uuid or external-id of the report. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.commits.delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody
```

**Async**

```python
try:
    await async_client.commits.delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(comment_id: int, commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.commits.delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        1, "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody
    ...
```

**Async**

```python
try:
    await async_client.commits.delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        1, "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>int</code> | The id of the comment. |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](bitbucket/core/results.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_annotation(workspace: str, repo_slug: str, commit: str, report_id: str, annotation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ReportAnnotation</code></summary>

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

**Sync**

```python
try:
    response = client.commits.get_annotation(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type ReportAnnotation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAnnotationErrorBody
```

**Async**

```python
try:
    response = await async_client.commits.get_annotation(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type ReportAnnotation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAnnotationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit the report belongs to. |
| <code>report_id</code> | <code>str</code> | Either the uuid or external-id of the report. |
| <code>annotation_id</code> | <code>str</code> | Either the uuid or external-id of the annotation. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportAnnotation](bitbucket/models/report_annotation.py)</code> -- OK

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetAnnotationErrorBody](bitbucket/errors/get_annotation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_annotations_for_report(workspace: str, repo_slug: str, commit: str, report_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedAnnotations</code></summary>

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

**Sync**

```python
try:
    response = client.commits.get_annotations_for_report(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedAnnotations
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.commits.get_annotations_for_report(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedAnnotations
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit for which to retrieve reports. |
| <code>report_id</code> | <code>str</code> | Uuid or external-if of the report for which to get annotations for. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedAnnotations](bitbucket/models/paginated_annotations.py)</code> -- OK

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_report(workspace: str, repo_slug: str, commit: str, report_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Report</code></summary>

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

**Sync**

```python
try:
    response = client.commits.get_report(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Report
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReportErrorBody
```

**Async**

```python
try:
    response = await async_client.commits.get_report(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Report
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit the report belongs to. |
| <code>report_id</code> | <code>str</code> | Either the uuid or external-id of the report. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Report](bitbucket/models/report.py)</code> -- OK

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetReportErrorBody](bitbucket/errors/get_report_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_reports_for_commit(workspace: str, repo_slug: str, commit: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedReports</code></summary>

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

**Sync**

```python
try:
    response = client.commits.get_reports_for_commit(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedReports
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.commits.get_reports_for_commit(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedReports
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit for which to retrieve reports. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedReports](bitbucket/models/paginated_reports.py)</code> -- OK

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_commit_by_commit(commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Commit</code></summary>

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

**Sync**

```python
try:
    response = client.commits.get_repositories_by_workspace_by_repo_slug_commit_by_commit(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Commit
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugCommitByCommitErrorBody
```

**Async**

```python
try:
    response = await async_client.commits.get_repositories_by_workspace_by_repo_slug_commit_by_commit(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Commit
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugCommitByCommitErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Commit](bitbucket/models/commit.py)</code> -- The commit object

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugCommitByCommitErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_commit_by_commit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(commit: str, repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedCommitComments</code></summary>

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

**Sync**

```python
try:
    response = client.commits.get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedCommitComments
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.commits.get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedCommitComments
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Field by which the results should be sorted as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedCommitComments](bitbucket/models/paginated_commit_comments.py)</code> -- A paginated list of commit comments.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(comment_id: int, commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> CommitComment</code></summary>

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

**Sync**

```python
try:
    response = client.commits.get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        1, "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CommitComment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.commits.get_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        1, "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CommitComment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>int</code> | The id of the comment. |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommitComment](bitbucket/models/commit_comment.py)</code> -- The commit comment.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_commits(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Page</code></summary>

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

**Sync**

```python
try:
    response = client.commits.get_repositories_by_workspace_by_repo_slug_commits(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Page
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugCommitsErrorBody
```

**Async**

```python
try:
    response = await async_client.commits.get_repositories_by_workspace_by_repo_slug_commits(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Page
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugCommitsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Page](bitbucket/models/page.py)</code> -- A paginated list of commits

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugCommitsErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_commits_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_commits_by_revision(repo_slug: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Page</code></summary>

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

**Sync**

```python
try:
    response = client.commits.get_repositories_by_workspace_by_repo_slug_commits_by_revision(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Page
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody
```

**Async**

```python
try:
    response = await async_client.commits.get_repositories_by_workspace_by_repo_slug_commits_by_revision(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Page
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>revision</code> | <code>str</code> | A commit SHA1 or ref name. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Page](bitbucket/models/page.py)</code> -- A paginated list of commits

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_commits_by_revision_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_diff_by_spec(repo_slug: str, spec: str, workspace: str, *, context: int | None = None, path: str | None = None, ignore_whitespace: bool | None = None, binary: bool | None = None, renames: bool | None = None, merge: bool | None = None, topic: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.commits.get_repositories_by_workspace_by_repo_slug_diff_by_spec(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDiffBySpecErrorBody
```

**Async**

```python
try:
    await async_client.commits.get_repositories_by_workspace_by_repo_slug_diff_by_spec(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDiffBySpecErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>spec</code> | <code>str</code> | A commit SHA (e.g. `3a8b42`) or a commit range using double dot<br>notation (e.g. `3a8b42..9ff173`). |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>context</code> | <code>int \| None</code> | Generate diffs with <n> lines of context instead of the usual three.<br>**Default**: <code>None</code> |
| <code>path</code> | <code>str \| None</code> | Limit the diff to a particular file (this parameter<br>can be repeated for multiple paths).<br>**Default**: <code>None</code> |
| <code>ignore_whitespace</code> | <code>bool \| None</code> | Generate diffs that ignore whitespace.<br>**Default**: <code>None</code> |
| <code>binary</code> | <code>bool \| None</code> | Generate diffs that include binary files, true if omitted.<br>**Default**: <code>None</code> |
| <code>renames</code> | <code>bool \| None</code> | Whether to perform rename detection, true if omitted.<br>**Default**: <code>None</code> |
| <code>merge</code> | <code>bool \| None</code> | This parameter is deprecated. The 'topic' parameter should be used<br>instead. The 'merge' and 'topic' parameters cannot be both used at<br>the same time.<br><br>If true, the source commit is merged into the<br>destination commit, and then a diff from the<br>destination to the merge result is returned. If false,<br>a simple 'two dot' diff between the source and<br>destination is returned. True if omitted.<br>**Default**: <code>None</code> |
| <code>topic</code> | <code>bool \| None</code> | If true, returns 2-way 'three-dot' diff.<br>This is a diff between the source commit and the merge base<br>of the source commit and the destination commit.<br>If false, a simple 'two dot' diff between the source and<br>destination is returned.<br><br>If omitted, defaults to true, ie. a 2 way 'three-dot'<br>diff is returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugDiffBySpecErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_diff_by_spec_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 555 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_diffstat_by_spec(repo_slug: str, spec: str, workspace: str, *, ignore_whitespace: bool | None = None, merge: bool | None = None, path: str | None = None, renames: bool | None = None, topic: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedDiffStat</code></summary>

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

**Sync**

```python
try:
    response = client.commits.get_repositories_by_workspace_by_repo_slug_diffstat_by_spec(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedDiffStat
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecErrorBody
```

**Async**

```python
try:
    response = await async_client.commits.get_repositories_by_workspace_by_repo_slug_diffstat_by_spec(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedDiffStat
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>spec</code> | <code>str</code> | A commit SHA (e.g. `3a8b42`) or a commit range using double dot<br>notation (e.g. `3a8b42..9ff173`). |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>ignore_whitespace</code> | <code>bool \| None</code> | Generate diffs that ignore whitespace<br>**Default**: <code>None</code> |
| <code>merge</code> | <code>bool \| None</code> | This parameter is deprecated. The 'topic' parameter should be used<br>instead. The 'merge' and 'topic' parameters cannot be both used at<br>the same time.<br><br>If true, the source commit is merged into the<br>destination commit, and then a diffstat from the<br>destination to the merge result is returned. If false,<br>a simple 'two dot' diffstat between the source and<br>destination is returned. True if omitted.<br>**Default**: <code>None</code> |
| <code>path</code> | <code>str \| None</code> | Limit the diffstat to a particular file (this parameter<br>can be repeated for multiple paths).<br>**Default**: <code>None</code> |
| <code>renames</code> | <code>bool \| None</code> | Whether to perform rename detection, true if omitted.<br>**Default**: <code>None</code> |
| <code>topic</code> | <code>bool \| None</code> | If true, returns 2-way 'three-dot' diff.<br>This is a diff between the source commit and the merge base<br>of the source commit and the destination commit.<br>If false, a simple 'two dot' diff between the source and<br>destination is returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedDiffStat](bitbucket/models/paginated_diff_stat.py)</code> -- The diff stats

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_diffstat_by_spec_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 555 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec(repo_slug: str, revspec: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Commit</code></summary>

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

**Sync**

```python
try:
    response = client.commits.get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Commit
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecErrorBody
```

**Async**

```python
try:
    response = await async_client.commits.get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Commit
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>revspec</code> | <code>str</code> | A commit range using double dot notation (e.g. `3a8b42..9ff173`). |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Commit](bitbucket/models/commit.py)</code> -- The merge base of the provided spec.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_merge_base_by_revspec_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_patch_by_spec(repo_slug: str, spec: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.commits.get_repositories_by_workspace_by_repo_slug_patch_by_spec(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPatchBySpecErrorBody
```

**Async**

```python
try:
    await async_client.commits.get_repositories_by_workspace_by_repo_slug_patch_by_spec(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPatchBySpecErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>spec</code> | <code>str</code> | A commit SHA (e.g. `3a8b42`) or a commit range using double dot<br>notation (e.g. `3a8b42..9ff173`). |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPatchBySpecErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_patch_by_spec_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 555 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(commit: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Participant</code></summary>

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

**Sync**

```python
try:
    response = client.commits.post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Participant
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody
```

**Async**

```python
try:
    response = await async_client.commits.post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Participant
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Participant](bitbucket/models/participant.py)</code> -- The `participant` object recording that the authenticated user approved the commit.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_commit_by_commit_approve_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(commit: str, repo_slug: str, workspace: str, body: CommitComment | CommitCommentDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new comment on the specified commit.

To post a reply to an existing comment, include the `parent.id` field:

``
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/ \
-X POST -u evzijst \
-H 'Content-Type: application/json' \
-d '{"content": {"raw": "One more thing!"},
"parent": {"id": 5728901}}'
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.commits.post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
        "some example string", "some example string", "some example string", CommitComment()
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsErrorBody
```

**Async**

```python
try:
    await async_client.commits.post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments(
        "some example string", "some example string", "some example string", CommitComment()
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[CommitComment](bitbucket/models/commit_comment.py) \| [CommitCommentDict](bitbucket/models/commit_comment.py)</code> | The specified comment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](bitbucket/core/results.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_commits(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Page</code></summary>

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

**Sync**

```python
try:
    response = client.commits.post_repositories_by_workspace_by_repo_slug_commits(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Page
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugCommitsErrorBody
```

**Async**

```python
try:
    response = await async_client.commits.post_repositories_by_workspace_by_repo_slug_commits(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Page
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugCommitsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Page](bitbucket/models/page.py)</code> -- A paginated list of commits

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugCommitsErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_commits_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_commits_by_revision(repo_slug: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Page</code></summary>

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

**Sync**

```python
try:
    response = client.commits.post_repositories_by_workspace_by_repo_slug_commits_by_revision(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Page
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody
```

**Async**

```python
try:
    response = await async_client.commits.post_repositories_by_workspace_by_repo_slug_commits_by_revision(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Page
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>revision</code> | <code>str</code> | A commit SHA1 or ref name. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Page](bitbucket/models/page.py)</code> -- A paginated list of commits

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugCommitsByRevisionErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_commits_by_revision_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(comment_id: int, commit: str, repo_slug: str, workspace: str, body: CommitComment | CommitCommentDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used to update the contents of a comment. Only the content of the comment can be updated.

``
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/7f71b5/comments/5728901 \
-X PUT -u evzijst \
-H 'Content-Type: application/json' \
-d '{"content": {"raw": "One more thing!"}'
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.commits.put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        1, "some example string", "some example string", "some example string", CommitComment()
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody
```

**Async**

```python
try:
    await async_client.commits.put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id(
        1, "some example string", "some example string", "some example string", CommitComment()
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>int</code> | The id of the comment. |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[CommitComment](bitbucket/models/commit_comment.py) \| [CommitCommentDict](bitbucket/models/commit_comment.py)</code> | The updated comment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](bitbucket/core/results.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Deployments

> Source: [Deployments](bitbucket/apis/deployments.py)

<details>
<summary><code>def create_environment(workspace: str, repo_slug: str, body: DeploymentEnvironment | DeploymentEnvironmentDict, *, request_options: RequestOptionsOrDict | None = None) -> DeploymentEnvironment</code></summary>

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

**Sync**

```python
try:
    response = client.deployments.create_environment(
        "some example string", "some example string", DeploymentEnvironment()
    )
    # TODO: Handle 'response' of type DeploymentEnvironment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEnvironmentErrorBody
```

**Async**

```python
try:
    response = await async_client.deployments.create_environment(
        "some example string", "some example string", DeploymentEnvironment()
    )
    # TODO: Handle 'response' of type DeploymentEnvironment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>body</code> | <code>[DeploymentEnvironment](bitbucket/models/deployment_environment.py) \| [DeploymentEnvironmentDict](bitbucket/models/deployment_environment.py)</code> | The environment to create. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeploymentEnvironment](bitbucket/models/deployment_environment.py)</code> -- The environment was created.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[CreateEnvironmentErrorBody](bitbucket/errors/create_environment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 409 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_environment_for_repository(workspace: str, repo_slug: str, environment_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.deployments.delete_environment_for_repository(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEnvironmentForRepositoryErrorBody
```

**Async**

```python
try:
    await async_client.deployments.delete_environment_for_repository(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEnvironmentForRepositoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>environment_uuid</code> | <code>str</code> | The environment UUID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteEnvironmentForRepositoryErrorBody](bitbucket/errors/delete_environment_for_repository_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(key_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.deployments.delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody
```

**Async**

```python
try:
    await async_client.deployments.delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key_id</code> | <code>str</code> | The key ID matching the deploy key. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(key_id: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.deployments.delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody
```

**Async**

```python
try:
    await async_client.deployments.delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key_id</code> | <code>str</code> | The key ID matching the project deploy key. |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual `key` assigned<br>to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody](bitbucket/errors/delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_deployment_for_repository(workspace: str, repo_slug: str, deployment_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> Deployment</code></summary>

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

**Sync**

```python
try:
    response = client.deployments.get_deployment_for_repository(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Deployment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDeploymentForRepositoryErrorBody
```

**Async**

```python
try:
    response = await async_client.deployments.get_deployment_for_repository(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Deployment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDeploymentForRepositoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>deployment_uuid</code> | <code>str</code> | The deployment UUID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deployment](bitbucket/models/deployment.py)</code> -- The deployment.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetDeploymentForRepositoryErrorBody](bitbucket/errors/get_deployment_for_repository_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_deployments_for_repository(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedDeployments</code></summary>

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

**Sync**

```python
try:
    response = client.deployments.get_deployments_for_repository("some example string", "some example string")
    # TODO: Handle 'response' of type PaginatedDeployments
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.deployments.get_deployments_for_repository(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedDeployments
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedDeployments](bitbucket/models/paginated_deployments.py)</code> -- The matching deployments.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_environment_for_repository(workspace: str, repo_slug: str, environment_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> DeploymentEnvironment</code></summary>

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

**Sync**

```python
try:
    response = client.deployments.get_environment_for_repository(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DeploymentEnvironment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEnvironmentForRepositoryErrorBody
```

**Async**

```python
try:
    response = await async_client.deployments.get_environment_for_repository(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DeploymentEnvironment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEnvironmentForRepositoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>environment_uuid</code> | <code>str</code> | The environment UUID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeploymentEnvironment](bitbucket/models/deployment_environment.py)</code> -- The environment.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetEnvironmentForRepositoryErrorBody](bitbucket/errors/get_environment_for_repository_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_environments_for_repository(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedDeploymentEnvironments</code></summary>

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

**Sync**

```python
try:
    response = client.deployments.get_environments_for_repository("some example string", "some example string")
    # TODO: Handle 'response' of type PaginatedDeploymentEnvironments
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.deployments.get_environments_for_repository(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedDeploymentEnvironments
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedDeploymentEnvironments](bitbucket/models/paginated_deployment_environments.py)</code> -- The matching environments.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_deploy_keys(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedDeployKeys</code></summary>

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

**Sync**

```python
try:
    response = client.deployments.get_repositories_by_workspace_by_repo_slug_deploy_keys(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedDeployKeys
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody
```

**Async**

```python
try:
    response = await async_client.deployments.get_repositories_by_workspace_by_repo_slug_deploy_keys(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedDeployKeys
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedDeployKeys](bitbucket/models/paginated_deploy_keys.py)</code> -- Deploy keys matching the repository

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_deploy_keys_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(key_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> DeployKey</code></summary>

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

**Sync**

```python
try:
    response = client.deployments.get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DeployKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody
```

**Async**

```python
try:
    response = await async_client.deployments.get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DeployKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key_id</code> | <code>str</code> | The key ID matching the deploy key. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeployKey](bitbucket/models/deploy_key.py)</code> -- Deploy key matching the key ID

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_projects_by_project_key_deploy_keys(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedProjectDeployKeys</code></summary>

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

**Sync**

```python
try:
    response = client.deployments.get_workspaces_by_workspace_projects_by_project_key_deploy_keys(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedProjectDeployKeys
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody
```

**Async**

```python
try:
    response = await async_client.deployments.get_workspaces_by_workspace_projects_by_project_key_deploy_keys(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedProjectDeployKeys
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual `key` assigned<br>to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedProjectDeployKeys](bitbucket/models/paginated_project_deploy_keys.py)</code> -- Deploy keys matching the project

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody](bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_deploy_keys_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(key_id: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> ProjectDeployKey</code></summary>

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

**Sync**

```python
try:
    response = client.deployments.get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectDeployKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody
```

**Async**

```python
try:
    response = await async_client.deployments.get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectDeployKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key_id</code> | <code>str</code> | The key ID matching the project deploy key. |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual `key` assigned<br>to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectDeployKey](bitbucket/models/project_deploy_key.py)</code> -- Project deploy key matching the key ID

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody](bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_deploy_keys(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> DeployKey</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new deploy key in a repository. Note: If authenticating a deploy key
with an OAuth consumer, any changes to the OAuth consumer will subsequently
invalidate the deploy key.

Example:
``
$ curl -X POST \
-H "Authorization " \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
'{
"key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
"label": "mydeploykey"
}'
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.deployments.post_repositories_by_workspace_by_repo_slug_deploy_keys(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DeployKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody
```

**Async**

```python
try:
    response = await async_client.deployments.post_repositories_by_workspace_by_repo_slug_deploy_keys(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DeployKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeployKey](bitbucket/models/deploy_key.py)</code> -- The deploy key that was created

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_deploy_keys_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_workspaces_by_workspace_projects_by_project_key_deploy_keys(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> ProjectDeployKey</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new deploy key in a project.

Example:
``
$ curl -X POST \
-H "Authorization " \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/ -d \
'{
"key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
"label": "mydeploykey"
}'
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.deployments.post_workspaces_by_workspace_projects_by_project_key_deploy_keys(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectDeployKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody
```

**Async**

```python
try:
    response = await async_client.deployments.post_workspaces_by_workspace_projects_by_project_key_deploy_keys(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectDeployKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual `key` assigned<br>to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectDeployKey](bitbucket/models/project_deploy_key.py)</code> -- The project deploy key that was created

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody](bitbucket/errors/post_workspaces_by_workspace_projects_by_project_key_deploy_keys_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(key_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> DeployKey</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new deploy key in a repository.

The same key needs to be passed in but the comment and label can change.

Example:
``
$ curl -X PUT \
-H "Authorization " \
-H "Content-type: application/json" \
https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
'{
"label": "newlabel",
"key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 newcomment",
}'
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.deployments.put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DeployKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody
```

**Async**

```python
try:
    response = await async_client.deployments.put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DeployKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key_id</code> | <code>str</code> | The key ID matching the deploy key. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeployKey](bitbucket/models/deploy_key.py)</code> -- The newly updated deploy key.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| 403 | <code>[RawError](bitbucket/core/results.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_environment_for_repository(workspace: str, repo_slug: str, environment_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.deployments.update_environment_for_repository(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateEnvironmentForRepositoryErrorBody
```

**Async**

```python
try:
    await async_client.deployments.update_environment_for_repository(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateEnvironmentForRepositoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>environment_uuid</code> | <code>str</code> | The environment UUID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[UpdateEnvironmentForRepositoryErrorBody](bitbucket/errors/update_environment_for_repository_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Downloads

> Source: [Downloads](bitbucket/apis/downloads.py)

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_downloads_by_filename(filename: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.downloads.delete_repositories_by_workspace_by_repo_slug_downloads_by_filename(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody
```

**Async**

```python
try:
    await async_client.downloads.delete_repositories_by_workspace_by_repo_slug_downloads_by_filename(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filename</code> | <code>str</code> | Name of the file. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_downloads_by_filename_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_downloads(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.downloads.get_repositories_by_workspace_by_repo_slug_downloads("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody
```

**Async**

```python
try:
    await async_client.downloads.get_repositories_by_workspace_by_repo_slug_downloads(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_downloads_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_downloads_by_filename(filename: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.downloads.get_repositories_by_workspace_by_repo_slug_downloads_by_filename(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody
```

**Async**

```python
try:
    await async_client.downloads.get_repositories_by_workspace_by_repo_slug_downloads_by_filename(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filename</code> | <code>str</code> | Name of the file. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_downloads_by_filename_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_downloads(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.downloads.post_repositories_by_workspace_by_repo_slug_downloads("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody
```

**Async**

```python
try:
    await async_client.downloads.post_repositories_by_workspace_by_repo_slug_downloads(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugDownloadsErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_downloads_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 406 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Gpg

> Source: [Gpg](bitbucket/apis/gpg.py)

<details>
<summary><code>def delete_users_by_selected_user_gpg_keys_by_fingerprint(fingerprint: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.gpg.delete_users_by_selected_user_gpg_keys_by_fingerprint("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUsersBySelectedUserGpgKeysByFingerprintErrorBody
```

**Async**

```python
try:
    await async_client.gpg.delete_users_by_selected_user_gpg_keys_by_fingerprint(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUsersBySelectedUserGpgKeysByFingerprintErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fingerprint</code> | <code>str</code> | A GPG key fingerprint. |
| <code>selected_user</code> | <code>str</code> | This can either be an Atlassian Account ID OR the UUID of the account,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteUsersBySelectedUserGpgKeysByFingerprintErrorBody](bitbucket/errors/delete_users_by_selected_user_gpg_keys_by_fingerprint_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| 403 | <code>[RawError](bitbucket/core/results.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_users_by_selected_user_gpg_keys(selected_user: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedGpgUserKeys</code></summary>

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

**Sync**

```python
try:
    response = client.gpg.get_users_by_selected_user_gpg_keys("some example string")
    # TODO: Handle 'response' of type PaginatedGpgUserKeys
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsersBySelectedUserGpgKeysErrorBody
```

**Async**

```python
try:
    response = await async_client.gpg.get_users_by_selected_user_gpg_keys("some example string")
    # TODO: Handle 'response' of type PaginatedGpgUserKeys
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsersBySelectedUserGpgKeysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | This can either be an Atlassian Account ID OR the UUID of the account,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedGpgUserKeys](bitbucket/models/paginated_gpg_user_keys.py)</code> -- A list of the GPG keys associated with the account.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetUsersBySelectedUserGpgKeysErrorBody](bitbucket/errors/get_users_by_selected_user_gpg_keys_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_users_by_selected_user_gpg_keys_by_fingerprint(fingerprint: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None) -> GpgAccountKey</code></summary>

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

**Sync**

```python
try:
    response = client.gpg.get_users_by_selected_user_gpg_keys_by_fingerprint(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type GpgAccountKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsersBySelectedUserGpgKeysByFingerprintErrorBody
```

**Async**

```python
try:
    response = await async_client.gpg.get_users_by_selected_user_gpg_keys_by_fingerprint(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type GpgAccountKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsersBySelectedUserGpgKeysByFingerprintErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fingerprint</code> | <code>str</code> | A GPG key fingerprint. |
| <code>selected_user</code> | <code>str</code> | This can either be an Atlassian Account ID OR the UUID of the account,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GpgAccountKey](bitbucket/models/gpg_account_key.py)</code> -- The specific GPG key matching the user and fingerprint.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetUsersBySelectedUserGpgKeysByFingerprintErrorBody](bitbucket/errors/get_users_by_selected_user_gpg_keys_by_fingerprint_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_users_by_selected_user_gpg_keys(selected_user: str, *, body: GpgAccountKey | GpgAccountKeyDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GpgAccountKey</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new GPG public key to the specified user account and returns the resulting key.

Example:

``
$ curl -X POST -H "Content-Type: application/json" -d
'{"key": ""}'
https://api.bitbucket.org/2.0/users/{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}/gpg-keys
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.gpg.post_users_by_selected_user_gpg_keys("some example string")
    # TODO: Handle 'response' of type GpgAccountKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostUsersBySelectedUserGpgKeysErrorBody
```

**Async**

```python
try:
    response = await async_client.gpg.post_users_by_selected_user_gpg_keys("some example string")
    # TODO: Handle 'response' of type GpgAccountKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostUsersBySelectedUserGpgKeysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | This can either be an Atlassian Account ID OR the UUID of the account,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>body</code> | <code>[GpgAccountKey](bitbucket/models/gpg_account_key.py) \| [GpgAccountKeyDict](bitbucket/models/gpg_account_key.py) \| None</code> | The new GPG key object.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GpgAccountKey](bitbucket/models/gpg_account_key.py)</code> -- The newly created GPG key.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostUsersBySelectedUserGpgKeysErrorBody](bitbucket/errors/post_users_by_selected_user_gpg_keys_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| 403 | <code>[RawError](bitbucket/core/results.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## IssueTracker

> Source: [IssueTracker](bitbucket/apis/issue_tracker.py)

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.issue_tracker.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody
```

**Async**

```python
try:
    await async_client.issue_tracker.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(issue_id: str, path: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.issue_tracker.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody
    ...
```

**Async**

```python
try:
    await async_client.issue_tracker.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>path</code> | <code>str</code> | Path to the file. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(comment_id: int, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.issue_tracker.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        1, "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.issue_tracker.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        1, "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>int</code> | The id of the comment. |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Error</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.issue_tracker.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Error](bitbucket/models/error.py)</code> -- Unexpected error.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Error</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Error](bitbucket/models/error.py)</code> -- Indicates that the authenticated user successfully stopped watching this issue.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_components(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedComponents</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_components(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedComponents
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugComponentsErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_components(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedComponents
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugComponentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedComponents](bitbucket/models/paginated_components.py)</code> -- The components that have been defined in the issue tracker.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugComponentsErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_components_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_components_by_component_id(component_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Component</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_components_by_component_id(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Component
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_components_by_component_id(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Component
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>component_id</code> | <code>int</code> | The component's id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Component](bitbucket/models/component.py)</code> -- The specified component object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_components_by_component_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_issues(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedIssues</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedIssues
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedIssues
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedIssues](bitbucket/models/paginated_issues.py)</code> -- A paginated list of the issues matching any filter criteria that were provided.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugIssuesErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Issue</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Issue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Issue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Issue](bitbucket/models/issue.py)</code> -- The issue object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 410 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedIssueAttachment</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedIssueAttachment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedIssueAttachment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedIssueAttachment](bitbucket/models/paginated_issue_attachment.py)</code> -- A paginated list of all attachments for this issue.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(issue_id: str, path: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody
```

**Async**

```python
try:
    await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>path</code> | <code>str</code> | Path to the file. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_by_path_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(issue_id: str, repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedLogEntries</code></summary>

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

``
$ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \
-G --data-urlencode='q=changes.state.new = "resolved"'
``

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedLogEntries
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedLogEntries
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response. See<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for details.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Name of a response property to sort results. See<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results)<br>for details.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedLogEntries](bitbucket/models/paginated_log_entries.py)</code> -- Returns all the issue changes that were made on the specified issue.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id(change_id: str, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> IssueChange</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type IssueChange
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type IssueChange
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>change_id</code> | <code>str</code> | The issue change id |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IssueChange](bitbucket/models/issue_change.py)</code> -- The specified issue change object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_by_change_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(issue_id: str, repo_slug: str, workspace: str, *, q: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedIssueComments</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedIssueComments
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedIssueComments
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedIssueComments](bitbucket/models/paginated_issue_comments.py)</code> -- A paginated list of issue comments.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(comment_id: int, issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> IssueComment</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        1, "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type IssueComment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        1, "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type IssueComment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>int</code> | The id of the comment. |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IssueComment](bitbucket/models/issue_comment.py)</code> -- The issue comment.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Error</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Error](bitbucket/models/error.py)</code> -- If the authenticated user has not voted for this issue.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Error</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Error](bitbucket/models/error.py)</code> -- If the authenticated user is watching this issue.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip(repo_name: str, repo_slug: str, task_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> IssueJobStatus</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type IssueJobStatus
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type IssueJobStatus
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_name</code> | <code>str</code> | The name of the repo |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>task_id</code> | <code>str</code> | The ID of the export task |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IssueJobStatus](bitbucket/models/issue_job_status.py)</code> -- Export job accepted

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_export_repo_name_issues_task_id_zip_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_issues_import(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> IssueJobStatus</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_import(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type IssueJobStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_issues_import(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type IssueJobStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IssueJobStatus](bitbucket/models/issue_job_status.py)</code> -- Import job complete with either FAILURE or SUCCESS status

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_issues_import_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_milestones(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedMilestones</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_milestones(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedMilestones
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugMilestonesErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_milestones(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedMilestones
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugMilestonesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedMilestones](bitbucket/models/paginated_milestones.py)</code> -- The milestones that have been defined in the issue tracker.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugMilestonesErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_milestones_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id(milestone_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Milestone</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Milestone
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Milestone
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>milestone_id</code> | <code>int</code> | The milestone's id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Milestone](bitbucket/models/milestone.py)</code> -- The specified milestone object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_milestones_by_milestone_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_versions(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedVersions</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_versions(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedVersions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugVersionsErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_versions(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedVersions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugVersionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedVersions](bitbucket/models/paginated_versions.py)</code> -- The versions that have been defined in the issue tracker.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugVersionsErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_versions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_versions_by_version_id(repo_slug: str, version_id: int, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Version</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.get_repositories_by_workspace_by_repo_slug_versions_by_version_id(
        "some example string", 1, "some example string"
    )
    # TODO: Handle 'response' of type Version
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.get_repositories_by_workspace_by_repo_slug_versions_by_version_id(
        "some example string", 1, "some example string"
    )
    # TODO: Handle 'response' of type Version
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>version_id</code> | <code>int</code> | The version's id |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Version](bitbucket/models/version.py)</code> -- The specified version object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_versions_by_version_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_issues(repo_slug: str, workspace: str, body: Issue | IssueDict, *, request_options: RequestOptionsOrDict | None = None) -> Issue</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues(
        "some example string", "some example string", Issue()
    )
    # TODO: Handle 'response' of type Issue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugIssuesErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues(
        "some example string", "some example string", Issue()
    )
    # TODO: Handle 'response' of type Issue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugIssuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[Issue](bitbucket/models/issue.py) \| [IssueDict](bitbucket/models/issue.py)</code> | The new issue. The only required element is `title`. All other elements can be omitted from the body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Issue](bitbucket/models/issue.py)</code> -- The newly created issue.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugIssuesErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_issues_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody
```

**Async**

```python
try:
    await async_client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_attachments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(issue_id: str, repo_slug: str, workspace: str, body: IssueChange | IssueChangeDict, *, request_options: RequestOptionsOrDict | None = None) -> IssueChange</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Makes a change to the specified issue.

For example, to change an issue's state and assignee, create a new
change object that modifies these fields:

``
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
``

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

**Sync**

```python
try:
    response = client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
        "some example string", "some example string", "some example string", IssueChange(type_="some example string")
    )
    # TODO: Handle 'response' of type IssueChange
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes(
        "some example string", "some example string", "some example string", IssueChange(type_="some example string")
    )
    # TODO: Handle 'response' of type IssueChange
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[IssueChange](bitbucket/models/issue_change.py) \| [IssueChangeDict](bitbucket/models/issue_change.py)</code> | The new issue state change. The only required elements are `changes.[].new`. All other elements can be omitted from the body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IssueChange](bitbucket/models/issue_change.py)</code> -- The newly created issue change.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_changes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(issue_id: str, repo_slug: str, workspace: str, body: IssueComment | IssueCommentDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new issue comment.

``
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \
-X POST -u evzijst \
-H 'Content-Type: application/json' \
-d '{"content": {"raw": "Lorem ipsum."}}'
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
        "some example string", "some example string", "some example string", IssueComment()
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsErrorBody
```

**Async**

```python
try:
    await async_client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments(
        "some example string", "some example string", "some example string", IssueComment()
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[IssueComment](bitbucket/models/issue_comment.py) \| [IssueCommentDict](bitbucket/models/issue_comment.py)</code> | The new issue comment object. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_issues_export(repo_slug: str, workspace: str, *, body: ExportOptions | ExportOptionsDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues_export(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugIssuesExportErrorBody
```

**Async**

```python
try:
    await async_client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues_export(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugIssuesExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[ExportOptions](bitbucket/models/export_options.py) \| [ExportOptionsDict](bitbucket/models/export_options.py) \| None</code> | The options to apply to the export. Available options include `project_key` and `project_name` which, if specified, are used as the project key and name in the exported Jira json format. Option `send_email` specifies whether an email should be sent upon export result. Option `include_attachments` specifies whether attachments are included in the export.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugIssuesExportErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_issues_export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_issues_import(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> IssueJobStatus</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A POST request to this endpoint will import the zip file given by the archive parameter into the repository. All
existing issues will be deleted and replaced by the contents of the imported zip file.

Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name
"archive," which needs to be a file field:

``
$ curl -u -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories///issues/import
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues_import(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type IssueJobStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.post_repositories_by_workspace_by_repo_slug_issues_import(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type IssueJobStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IssueJobStatus](bitbucket/models/issue_job_status.py)</code> -- Import job accepted

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugIssuesImportErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_issues_import_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 409 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Issue</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Modifies the issue.

``
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
``

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

**Sync**

```python
try:
    response = client.issue_tracker.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Issue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Issue
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Issue](bitbucket/models/issue.py)</code> -- The updated issue object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(comment_id: int, issue_id: str, repo_slug: str, workspace: str, body: IssueComment | IssueCommentDict, *, request_options: RequestOptionsOrDict | None = None) -> IssueComment</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the content of the specified issue comment. Note that only
the `content.raw` field can be modified.

``
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \
-X PUT -u evzijst \
-H 'Content-Type: application/json' \
-d '{"content": {"raw": "Lorem ipsum."}'
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.issue_tracker.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        1, "some example string", "some example string", "some example string", IssueComment()
    )
    # TODO: Handle 'response' of type IssueComment
except ApiError as e:
    # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.issue_tracker.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id(
        1, "some example string", "some example string", "some example string", IssueComment()
    )
    # TODO: Handle 'response' of type IssueComment
except ApiError as e:
    # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>int</code> | The id of the comment. |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[IssueComment](bitbucket/models/issue_comment.py) \| [IssueCommentDict](bitbucket/models/issue_comment.py)</code> | The updated comment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IssueComment](bitbucket/models/issue_comment.py)</code> -- The updated issue comment.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_comments_by_comment_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Error</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Error](bitbucket/models/error.py)</code> -- Indicating the authenticated user has cast their vote successfully.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_vote_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(issue_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Error</code></summary>

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

**Sync**

```python
try:
    response = client.issue_tracker.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody
```

**Async**

```python
try:
    response = await async_client.issue_tracker.put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>issue_id</code> | <code>str</code> | The issue id |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Error](bitbucket/models/error.py)</code> -- Indicates that the authenticated user successfully started watching this issue.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_issues_by_issue_id_watch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Pipelines

> Source: [Pipelines](bitbucket/apis/pipelines.py)

<details>
<summary><code>def create_deployment_variable(workspace: str, repo_slug: str, environment_uuid: str, body: DeploymentVariable | DeploymentVariableDict, *, request_options: RequestOptionsOrDict | None = None) -> DeploymentVariable</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.create_deployment_variable(
        "some example string", "some example string", "some example string", DeploymentVariable()
    )
    # TODO: Handle 'response' of type DeploymentVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDeploymentVariableErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.create_deployment_variable(
        "some example string", "some example string", "some example string", DeploymentVariable()
    )
    # TODO: Handle 'response' of type DeploymentVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDeploymentVariableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>environment_uuid</code> | <code>str</code> | The environment. |
| <code>body</code> | <code>[DeploymentVariable](bitbucket/models/deployment_variable.py) \| [DeploymentVariableDict](bitbucket/models/deployment_variable.py)</code> | The variable to create |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeploymentVariable](bitbucket/models/deployment_variable.py)</code> -- The variable was created.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[CreateDeploymentVariableErrorBody](bitbucket/errors/create_deployment_variable_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 409 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_pipeline_for_repository(workspace: str, repo_slug: str, body: Pipeline | PipelineDict, *, request_options: RequestOptionsOrDict | None = None) -> Pipeline</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.create_pipeline_for_repository("some example string", "some example string", Pipeline())
    # TODO: Handle 'response' of type Pipeline
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePipelineForRepositoryErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.create_pipeline_for_repository(
        "some example string", "some example string", Pipeline()
    )
    # TODO: Handle 'response' of type Pipeline
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePipelineForRepositoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>body</code> | <code>[Pipeline](bitbucket/models/pipeline.py) \| [PipelineDict](bitbucket/models/pipeline.py)</code> | The pipeline to initiate. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](bitbucket/models/pipeline.py)</code> -- The initiated pipeline.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[CreatePipelineForRepositoryErrorBody](bitbucket/errors/create_pipeline_for_repository_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_pipeline_variable_for_team(username: str, *, body: PipelineVariable | PipelineVariableDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PipelineVariable</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.create_pipeline_variable_for_team("some example string")
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePipelineVariableForTeamErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.create_pipeline_variable_for_team("some example string")
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePipelineVariableForTeamErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>str</code> | The account. |
| <code>body</code> | <code>[PipelineVariable](bitbucket/models/pipeline_variable.py) \| [PipelineVariableDict](bitbucket/models/pipeline_variable.py) \| None</code> | The variable to create.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](bitbucket/models/pipeline_variable.py)</code> -- The created variable.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[CreatePipelineVariableForTeamErrorBody](bitbucket/errors/create_pipeline_variable_for_team_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 409 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_pipeline_variable_for_user(selected_user: str, *, body: PipelineVariable | PipelineVariableDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PipelineVariable</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.create_pipeline_variable_for_user("some example string")
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePipelineVariableForUserErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.create_pipeline_variable_for_user("some example string")
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePipelineVariableForUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID. |
| <code>body</code> | <code>[PipelineVariable](bitbucket/models/pipeline_variable.py) \| [PipelineVariableDict](bitbucket/models/pipeline_variable.py) \| None</code> | The variable to create.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](bitbucket/models/pipeline_variable.py)</code> -- The created variable.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[CreatePipelineVariableForUserErrorBody](bitbucket/errors/create_pipeline_variable_for_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 409 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_pipeline_variable_for_workspace(workspace: str, *, body: PipelineVariable | PipelineVariableDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PipelineVariable</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.create_pipeline_variable_for_workspace("some example string")
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePipelineVariableForWorkspaceErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.create_pipeline_variable_for_workspace("some example string")
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePipelineVariableForWorkspaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>body</code> | <code>[PipelineVariable](bitbucket/models/pipeline_variable.py) \| [PipelineVariableDict](bitbucket/models/pipeline_variable.py) \| None</code> | The variable to create.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](bitbucket/models/pipeline_variable.py)</code> -- The created variable.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[CreatePipelineVariableForWorkspaceErrorBody](bitbucket/errors/create_pipeline_variable_for_workspace_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 409 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_repository_pipeline_known_host(workspace: str, repo_slug: str, body: PipelineKnownHost | PipelineKnownHostDict, *, request_options: RequestOptionsOrDict | None = None) -> PipelineKnownHost</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.create_repository_pipeline_known_host(
        "some example string", "some example string", PipelineKnownHost()
    )
    # TODO: Handle 'response' of type PipelineKnownHost
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRepositoryPipelineKnownHostErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.create_repository_pipeline_known_host(
        "some example string", "some example string", PipelineKnownHost()
    )
    # TODO: Handle 'response' of type PipelineKnownHost
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRepositoryPipelineKnownHostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>body</code> | <code>[PipelineKnownHost](bitbucket/models/pipeline_known_host.py) \| [PipelineKnownHostDict](bitbucket/models/pipeline_known_host.py)</code> | The known host to create. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineKnownHost](bitbucket/models/pipeline_known_host.py)</code> -- The known host was created.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[CreateRepositoryPipelineKnownHostErrorBody](bitbucket/errors/create_repository_pipeline_known_host_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 409 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_repository_pipeline_schedule(workspace: str, repo_slug: str, body: PipelineSchedulePostRequestBody | PipelineSchedulePostRequestBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> PipelineSchedule</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.create_repository_pipeline_schedule(
        "some example string",
        "some example string",
        PipelineSchedulePostRequestBody(
            target=Target(selector=PipelineSelector(), ref_name="some example string"),
            cron_pattern="some example string",
        ),
    )
    # TODO: Handle 'response' of type PipelineSchedule
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRepositoryPipelineScheduleErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.create_repository_pipeline_schedule(
        "some example string",
        "some example string",
        PipelineSchedulePostRequestBody(
            target=Target(selector=PipelineSelector(), ref_name="some example string"),
            cron_pattern="some example string",
        ),
    )
    # TODO: Handle 'response' of type PipelineSchedule
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRepositoryPipelineScheduleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>body</code> | <code>[PipelineSchedulePostRequestBody](bitbucket/models/pipeline_schedule_post_request_body.py) \| [PipelineSchedulePostRequestBodyDict](bitbucket/models/pipeline_schedule_post_request_body.py)</code> | The schedule to create. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineSchedule](bitbucket/models/pipeline_schedule.py)</code> -- The created schedule.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[CreateRepositoryPipelineScheduleErrorBody](bitbucket/errors/create_repository_pipeline_schedule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_repository_pipeline_variable(workspace: str, repo_slug: str, body: PipelineVariable | PipelineVariableDict, *, request_options: RequestOptionsOrDict | None = None) -> PipelineVariable</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.create_repository_pipeline_variable(
        "some example string", "some example string", PipelineVariable()
    )
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRepositoryPipelineVariableErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.create_repository_pipeline_variable(
        "some example string", "some example string", PipelineVariable()
    )
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRepositoryPipelineVariableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>body</code> | <code>[PipelineVariable](bitbucket/models/pipeline_variable.py) \| [PipelineVariableDict](bitbucket/models/pipeline_variable.py)</code> | The variable to create. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](bitbucket/models/pipeline_variable.py)</code> -- The variable was created.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[CreateRepositoryPipelineVariableErrorBody](bitbucket/errors/create_repository_pipeline_variable_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 409 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_repository_runner(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelineRunner</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.create_repository_runner("some example string", "some example string")
    # TODO: Handle 'response' of type PipelineRunner
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRepositoryRunnerErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.create_repository_runner("some example string", "some example string")
    # TODO: Handle 'response' of type PipelineRunner
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRepositoryRunnerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineRunner](bitbucket/models/pipeline_runner.py)</code> -- The repository runner.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[CreateRepositoryRunnerErrorBody](bitbucket/errors/create_repository_runner_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_workspace_runner(workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelineRunner</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.create_workspace_runner("some example string")
    # TODO: Handle 'response' of type PipelineRunner
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWorkspaceRunnerErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.create_workspace_runner("some example string")
    # TODO: Handle 'response' of type PipelineRunner
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWorkspaceRunnerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineRunner](bitbucket/models/pipeline_runner.py)</code> -- The workspace runner.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[CreateWorkspaceRunnerErrorBody](bitbucket/errors/create_workspace_runner_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_deployment_variable(workspace: str, repo_slug: str, environment_uuid: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.delete_deployment_variable(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDeploymentVariableErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.delete_deployment_variable(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDeploymentVariableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>environment_uuid</code> | <code>str</code> | The environment. |
| <code>variable_uuid</code> | <code>str</code> | The UUID of the variable to delete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteDeploymentVariableErrorBody](bitbucket/errors/delete_deployment_variable_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_pipeline_variable_for_team(username: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.delete_pipeline_variable_for_team("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePipelineVariableForTeamErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.delete_pipeline_variable_for_team("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePipelineVariableForTeamErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>str</code> | The account. |
| <code>variable_uuid</code> | <code>str</code> | The UUID of the variable to delete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeletePipelineVariableForTeamErrorBody](bitbucket/errors/delete_pipeline_variable_for_team_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_pipeline_variable_for_user(selected_user: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.delete_pipeline_variable_for_user("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePipelineVariableForUserErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.delete_pipeline_variable_for_user("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePipelineVariableForUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID. |
| <code>variable_uuid</code> | <code>str</code> | The UUID of the variable to delete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeletePipelineVariableForUserErrorBody](bitbucket/errors/delete_pipeline_variable_for_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_pipeline_variable_for_workspace(workspace: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.delete_pipeline_variable_for_workspace("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePipelineVariableForWorkspaceErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.delete_pipeline_variable_for_workspace("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePipelineVariableForWorkspaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>variable_uuid</code> | <code>str</code> | The UUID of the variable to delete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeletePipelineVariableForWorkspaceErrorBody](bitbucket/errors/delete_pipeline_variable_for_workspace_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repository_pipeline_cache(workspace: str, repo_slug: str, cache_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.delete_repository_pipeline_cache(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryPipelineCacheErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.delete_repository_pipeline_cache(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryPipelineCacheErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | The account. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>cache_uuid</code> | <code>str</code> | The UUID of the cache to delete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoryPipelineCacheErrorBody](bitbucket/errors/delete_repository_pipeline_cache_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repository_pipeline_caches(workspace: str, repo_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.delete_repository_pipeline_caches(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryPipelineCachesErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.delete_repository_pipeline_caches(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryPipelineCachesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | The account. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>name</code> | <code>str</code> | The cache name. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoryPipelineCachesErrorBody](bitbucket/errors/delete_repository_pipeline_caches_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repository_pipeline_key_pair(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.delete_repository_pipeline_key_pair("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryPipelineKeyPairErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.delete_repository_pipeline_key_pair("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryPipelineKeyPairErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoryPipelineKeyPairErrorBody](bitbucket/errors/delete_repository_pipeline_key_pair_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repository_pipeline_known_host(workspace: str, repo_slug: str, known_host_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.delete_repository_pipeline_known_host(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryPipelineKnownHostErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.delete_repository_pipeline_known_host(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryPipelineKnownHostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>known_host_uuid</code> | <code>str</code> | The UUID of the known host to delete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoryPipelineKnownHostErrorBody](bitbucket/errors/delete_repository_pipeline_known_host_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repository_pipeline_schedule(workspace: str, repo_slug: str, schedule_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.delete_repository_pipeline_schedule(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryPipelineScheduleErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.delete_repository_pipeline_schedule(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryPipelineScheduleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>schedule_uuid</code> | <code>str</code> | The uuid of the schedule. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoryPipelineScheduleErrorBody](bitbucket/errors/delete_repository_pipeline_schedule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repository_pipeline_variable(workspace: str, repo_slug: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.delete_repository_pipeline_variable(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryPipelineVariableErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.delete_repository_pipeline_variable(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryPipelineVariableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>variable_uuid</code> | <code>str</code> | The UUID of the variable to delete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoryPipelineVariableErrorBody](bitbucket/errors/delete_repository_pipeline_variable_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repository_runner(workspace: str, repo_slug: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.delete_repository_runner("some example string", "some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryRunnerErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.delete_repository_runner(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryRunnerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>runner_uuid</code> | <code>str</code> | The runner uuid. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoryRunnerErrorBody](bitbucket/errors/delete_repository_runner_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_workspace_runner(workspace: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.delete_workspace_runner("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWorkspaceRunnerErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.delete_workspace_runner("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWorkspaceRunnerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>runner_uuid</code> | <code>str</code> | The runner uuid. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteWorkspaceRunnerErrorBody](bitbucket/errors/delete_workspace_runner_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_deployment_variables(workspace: str, repo_slug: str, environment_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedDeploymentVariables</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_deployment_variables(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedDeploymentVariables
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.get_deployment_variables(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedDeploymentVariables
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>environment_uuid</code> | <code>str</code> | The environment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedDeploymentVariables](bitbucket/models/paginated_deployment_variables.py)</code> -- The retrieved deployment variables.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_oidc_configuration(workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.get_oidc_configuration("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOidcConfigurationErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.get_oidc_configuration("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOidcConfigurationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetOidcConfigurationErrorBody](bitbucket/errors/get_oidc_configuration_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_oidc_keys(workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.get_oidc_keys("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOidcKeysErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.get_oidc_keys("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOidcKeysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetOidcKeysErrorBody](bitbucket/errors/get_oidc_keys_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline_container_log(workspace: str, repo_slug: str, pipeline_uuid: str, step_uuid: str, log_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.get_pipeline_container_log(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineContainerLogErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.get_pipeline_container_log(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineContainerLogErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>pipeline_uuid</code> | <code>str</code> | The UUID of the pipeline. |
| <code>step_uuid</code> | <code>str</code> | The UUID of the step. |
| <code>log_uuid</code> | <code>str</code> | For the main build container specify the step UUID; for a service container specify the service container UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetPipelineContainerLogErrorBody](bitbucket/errors/get_pipeline_container_log_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](bitbucket/core/results.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline_for_repository(workspace: str, repo_slug: str, pipeline_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> Pipeline</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_pipeline_for_repository(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Pipeline
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineForRepositoryErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.get_pipeline_for_repository(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Pipeline
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineForRepositoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>pipeline_uuid</code> | <code>str</code> | The pipeline UUID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](bitbucket/models/pipeline.py)</code> -- The pipeline.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetPipelineForRepositoryErrorBody](bitbucket/errors/get_pipeline_for_repository_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline_step_for_repository(workspace: str, repo_slug: str, pipeline_uuid: str, step_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelineStep</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_pipeline_step_for_repository(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineStep
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineStepForRepositoryErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.get_pipeline_step_for_repository(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineStep
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineStepForRepositoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>pipeline_uuid</code> | <code>str</code> | The UUID of the pipeline. |
| <code>step_uuid</code> | <code>str</code> | The UUID of the step. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineStep](bitbucket/models/pipeline_step.py)</code> -- The step.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetPipelineStepForRepositoryErrorBody](bitbucket/errors/get_pipeline_step_for_repository_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline_step_log_for_repository(workspace: str, repo_slug: str, pipeline_uuid: str, step_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.get_pipeline_step_log_for_repository(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineStepLogForRepositoryErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.get_pipeline_step_log_for_repository(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineStepLogForRepositoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>pipeline_uuid</code> | <code>str</code> | The UUID of the pipeline. |
| <code>step_uuid</code> | <code>str</code> | The UUID of the step. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetPipelineStepLogForRepositoryErrorBody](bitbucket/errors/get_pipeline_step_log_for_repository_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 416 | <code>[RawError](bitbucket/core/results.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline_steps_for_repository(workspace: str, repo_slug: str, pipeline_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedPipelineSteps</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_pipeline_steps_for_repository(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPipelineSteps
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.get_pipeline_steps_for_repository(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPipelineSteps
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>pipeline_uuid</code> | <code>str</code> | The UUID of the pipeline. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineSteps](bitbucket/models/paginated_pipeline_steps.py)</code> -- The steps.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline_test_report_test_case_reasons(workspace: str, repo_slug: str, pipeline_uuid: str, step_uuid: str, test_case_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.pipelines.get_pipeline_test_report_test_case_reasons(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineTestReportTestCaseReasonsErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.get_pipeline_test_report_test_case_reasons(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineTestReportTestCaseReasonsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>pipeline_uuid</code> | <code>str</code> | The UUID of the pipeline. |
| <code>step_uuid</code> | <code>str</code> | The UUID of the step. |
| <code>test_case_uuid</code> | <code>str</code> | The UUID of the test case. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetPipelineTestReportTestCaseReasonsErrorBody](bitbucket/errors/get_pipeline_test_report_test_case_reasons_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline_test_report_test_cases(workspace: str, repo_slug: str, pipeline_uuid: str, step_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.pipelines.get_pipeline_test_report_test_cases(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineTestReportTestCasesErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.get_pipeline_test_report_test_cases(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineTestReportTestCasesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>pipeline_uuid</code> | <code>str</code> | The UUID of the pipeline. |
| <code>step_uuid</code> | <code>str</code> | The UUID of the step. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetPipelineTestReportTestCasesErrorBody](bitbucket/errors/get_pipeline_test_report_test_cases_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline_test_reports(workspace: str, repo_slug: str, pipeline_uuid: str, step_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.pipelines.get_pipeline_test_reports(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineTestReportsErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.get_pipeline_test_reports(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineTestReportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>pipeline_uuid</code> | <code>str</code> | The UUID of the pipeline. |
| <code>step_uuid</code> | <code>str</code> | The UUID of the step. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetPipelineTestReportsErrorBody](bitbucket/errors/get_pipeline_test_reports_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline_variable_for_team(username: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelineVariable</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_pipeline_variable_for_team("some example string", "some example string")
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineVariableForTeamErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.get_pipeline_variable_for_team("some example string", "some example string")
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineVariableForTeamErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>str</code> | The account. |
| <code>variable_uuid</code> | <code>str</code> | The UUID of the variable to retrieve. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](bitbucket/models/pipeline_variable.py)</code> -- The variable.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetPipelineVariableForTeamErrorBody](bitbucket/errors/get_pipeline_variable_for_team_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline_variable_for_user(selected_user: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelineVariable</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_pipeline_variable_for_user("some example string", "some example string")
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineVariableForUserErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.get_pipeline_variable_for_user("some example string", "some example string")
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineVariableForUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID. |
| <code>variable_uuid</code> | <code>str</code> | The UUID of the variable to retrieve. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](bitbucket/models/pipeline_variable.py)</code> -- The variable.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetPipelineVariableForUserErrorBody](bitbucket/errors/get_pipeline_variable_for_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline_variable_for_workspace(workspace: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelineVariable</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_pipeline_variable_for_workspace("some example string", "some example string")
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineVariableForWorkspaceErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.get_pipeline_variable_for_workspace(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineVariableForWorkspaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>variable_uuid</code> | <code>str</code> | The UUID of the variable to retrieve. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](bitbucket/models/pipeline_variable.py)</code> -- The variable.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetPipelineVariableForWorkspaceErrorBody](bitbucket/errors/get_pipeline_variable_for_workspace_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline_variables_for_team(username: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedPipelineVariables</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_pipeline_variables_for_team("some example string")
    # TODO: Handle 'response' of type PaginatedPipelineVariables
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.get_pipeline_variables_for_team("some example string")
    # TODO: Handle 'response' of type PaginatedPipelineVariables
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>str</code> | The account. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineVariables](bitbucket/models/paginated_pipeline_variables.py)</code> -- The found account level variables.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline_variables_for_user(selected_user: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedPipelineVariables</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_pipeline_variables_for_user("some example string")
    # TODO: Handle 'response' of type PaginatedPipelineVariables
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.get_pipeline_variables_for_user("some example string")
    # TODO: Handle 'response' of type PaginatedPipelineVariables
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineVariables](bitbucket/models/paginated_pipeline_variables.py)</code> -- The found user level variables.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline_variables_for_workspace(workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedPipelineVariables</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_pipeline_variables_for_workspace("some example string")
    # TODO: Handle 'response' of type PaginatedPipelineVariables
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.get_pipeline_variables_for_workspace("some example string")
    # TODO: Handle 'response' of type PaginatedPipelineVariables
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineVariables](bitbucket/models/paginated_pipeline_variables.py)</code> -- The found workspace level variables.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipelines_for_repository(workspace: str, repo_slug: str, *, creator_uuid: UUID | None = None, target_ref_type: TargetRefTypeOrStr | None = None, target_ref_name: str | None = None, target_branch: str | None = None, target_commit_hash: str | None = None, target_selector_pattern: str | None = None, target_selector_type: TargetSelectorTypeOrStr | None = None, created_on: RFC3339DateTime | None = None, trigger_type: TriggerTypeOrStr | None = None, status: Status1OrStr | None = None, sort: SortOrStr | None = None, page: int | None = 1, pagelen: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> PaginatedPipelines</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_pipelines_for_repository("some example string", "some example string")
    # TODO: Handle 'response' of type PaginatedPipelines
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.get_pipelines_for_repository("some example string", "some example string")
    # TODO: Handle 'response' of type PaginatedPipelines
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>creator_uuid</code> | <code>UUID \| None</code> | The UUID of the creator of the pipeline to filter by.<br>**Default**: <code>None</code> |
| <code>target_ref_type</code> | <code>[TargetRefTypeOrStr](bitbucket/models/enums/target_ref_type.py) \| None</code> | The type of the reference to filter by.<br>**Default**: <code>None</code> |
| <code>target_ref_name</code> | <code>str \| None</code> | The reference name to filter by.<br>**Default**: <code>None</code> |
| <code>target_branch</code> | <code>str \| None</code> | The name of the branch to filter by.<br>**Default**: <code>None</code> |
| <code>target_commit_hash</code> | <code>str \| None</code> | The revision to filter by.<br>**Default**: <code>None</code> |
| <code>target_selector_pattern</code> | <code>str \| None</code> | The pipeline pattern to filter by.<br>**Default**: <code>None</code> |
| <code>target_selector_type</code> | <code>[TargetSelectorTypeOrStr](bitbucket/models/enums/target_selector_type.py) \| None</code> | The type of pipeline to filter by.<br>**Default**: <code>None</code> |
| <code>created_on</code> | <code>RFC3339DateTime \| None</code> | The creation date to filter by.<br>**Default**: <code>None</code> |
| <code>trigger_type</code> | <code>[TriggerTypeOrStr](bitbucket/models/enums/trigger_type.py) \| None</code> | The trigger type to filter by.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status1OrStr](bitbucket/models/enums/status1.py) \| None</code> | The pipeline status to filter by.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>[SortOrStr](bitbucket/models/enums/sort.py) \| None</code> | The attribute name to sort on.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | The page number of elements to retrieve.<br>**Default**: <code>1</code> |
| <code>pagelen</code> | <code>int \| None</code> | The maximum number of results to return.<br>**Default**: <code>10</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelines](bitbucket/models/paginated_pipelines.py)</code> -- The matching pipelines.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repository_pipeline_cache_content_uri(workspace: str, repo_slug: str, cache_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelineCacheContentUri</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_repository_pipeline_cache_content_uri(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineCacheContentUri
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineCacheContentUriErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.get_repository_pipeline_cache_content_uri(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineCacheContentUri
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineCacheContentUriErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | The account. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>cache_uuid</code> | <code>str</code> | The UUID of the cache. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineCacheContentUri](bitbucket/models/pipeline_cache_content_uri.py)</code> -- The cache content uri.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoryPipelineCacheContentUriErrorBody](bitbucket/errors/get_repository_pipeline_cache_content_uri_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repository_pipeline_caches(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedPipelineCache</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_repository_pipeline_caches("some example string", "some example string")
    # TODO: Handle 'response' of type PaginatedPipelineCache
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineCachesErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.get_repository_pipeline_caches("some example string", "some example string")
    # TODO: Handle 'response' of type PaginatedPipelineCache
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineCachesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | The account. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineCache](bitbucket/models/paginated_pipeline_cache.py)</code> -- The list of caches for the given repository.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoryPipelineCachesErrorBody](bitbucket/errors/get_repository_pipeline_caches_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repository_pipeline_config(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelinesConfig</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_repository_pipeline_config("some example string", "some example string")
    # TODO: Handle 'response' of type PipelinesConfig
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.get_repository_pipeline_config("some example string", "some example string")
    # TODO: Handle 'response' of type PipelinesConfig
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | The account. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelinesConfig](bitbucket/models/pipelines_config.py)</code> -- The repository pipelines configuration.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repository_pipeline_known_host(workspace: str, repo_slug: str, known_host_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelineKnownHost</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_repository_pipeline_known_host(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineKnownHost
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineKnownHostErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.get_repository_pipeline_known_host(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineKnownHost
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineKnownHostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>known_host_uuid</code> | <code>str</code> | The UUID of the known host to retrieve. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineKnownHost](bitbucket/models/pipeline_known_host.py)</code> -- The known host.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoryPipelineKnownHostErrorBody](bitbucket/errors/get_repository_pipeline_known_host_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repository_pipeline_known_hosts(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedPipelineKnownHosts</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_repository_pipeline_known_hosts("some example string", "some example string")
    # TODO: Handle 'response' of type PaginatedPipelineKnownHosts
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.get_repository_pipeline_known_hosts(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPipelineKnownHosts
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineKnownHosts](bitbucket/models/paginated_pipeline_known_hosts.py)</code> -- The retrieved known hosts.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repository_pipeline_schedule(workspace: str, repo_slug: str, schedule_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelineSchedule</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_repository_pipeline_schedule(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineSchedule
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineScheduleErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.get_repository_pipeline_schedule(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineSchedule
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineScheduleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>schedule_uuid</code> | <code>str</code> | The uuid of the schedule. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineSchedule](bitbucket/models/pipeline_schedule.py)</code> -- The requested schedule.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoryPipelineScheduleErrorBody](bitbucket/errors/get_repository_pipeline_schedule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repository_pipeline_schedule_executions(workspace: str, repo_slug: str, schedule_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedPipelineScheduleExecutions</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_repository_pipeline_schedule_executions(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPipelineScheduleExecutions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineScheduleExecutionsErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.get_repository_pipeline_schedule_executions(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPipelineScheduleExecutions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineScheduleExecutionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>schedule_uuid</code> | <code>str</code> | The uuid of the schedule. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineScheduleExecutions](bitbucket/models/paginated_pipeline_schedule_executions.py)</code> -- The list of executions of a schedule.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoryPipelineScheduleExecutionsErrorBody](bitbucket/errors/get_repository_pipeline_schedule_executions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repository_pipeline_schedules(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedPipelineSchedule</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_repository_pipeline_schedules("some example string", "some example string")
    # TODO: Handle 'response' of type PaginatedPipelineSchedule
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineSchedulesErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.get_repository_pipeline_schedules(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPipelineSchedule
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineSchedulesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineSchedule](bitbucket/models/paginated_pipeline_schedule.py)</code> -- The list of schedules.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoryPipelineSchedulesErrorBody](bitbucket/errors/get_repository_pipeline_schedules_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repository_pipeline_ssh_key_pair(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelineSshKeyPair</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_repository_pipeline_ssh_key_pair("some example string", "some example string")
    # TODO: Handle 'response' of type PipelineSshKeyPair
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineSshKeyPairErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.get_repository_pipeline_ssh_key_pair(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineSshKeyPair
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineSshKeyPairErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineSshKeyPair](bitbucket/models/pipeline_ssh_key_pair.py)</code> -- The SSH key pair.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoryPipelineSshKeyPairErrorBody](bitbucket/errors/get_repository_pipeline_ssh_key_pair_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repository_pipeline_variable(workspace: str, repo_slug: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelineVariable</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_repository_pipeline_variable(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineVariableErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.get_repository_pipeline_variable(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryPipelineVariableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>variable_uuid</code> | <code>str</code> | The UUID of the variable to retrieve. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](bitbucket/models/pipeline_variable.py)</code> -- The variable.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoryPipelineVariableErrorBody](bitbucket/errors/get_repository_pipeline_variable_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repository_pipeline_variables(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedPipelineVariables</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_repository_pipeline_variables("some example string", "some example string")
    # TODO: Handle 'response' of type PaginatedPipelineVariables
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.get_repository_pipeline_variables(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPipelineVariables
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPipelineVariables](bitbucket/models/paginated_pipeline_variables.py)</code> -- The retrieved variables.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repository_runner(workspace: str, repo_slug: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelineRunner</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_repository_runner(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineRunner
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryRunnerErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.get_repository_runner(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineRunner
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryRunnerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>runner_uuid</code> | <code>str</code> | The runner uuid. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineRunner](bitbucket/models/pipeline_runner.py)</code> -- The repository runner.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoryRunnerErrorBody](bitbucket/errors/get_repository_runner_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repository_runners(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedRunners</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_repository_runners("some example string", "some example string")
    # TODO: Handle 'response' of type PaginatedRunners
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.get_repository_runners("some example string", "some example string")
    # TODO: Handle 'response' of type PaginatedRunners
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRunners](bitbucket/models/paginated_runners.py)</code> -- The repository runners.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspace_runner(workspace: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelineRunner</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_workspace_runner("some example string", "some example string")
    # TODO: Handle 'response' of type PipelineRunner
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspaceRunnerErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.get_workspace_runner("some example string", "some example string")
    # TODO: Handle 'response' of type PipelineRunner
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspaceRunnerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>runner_uuid</code> | <code>str</code> | The runner uuid. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineRunner](bitbucket/models/pipeline_runner.py)</code> -- The workspace runner.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspaceRunnerErrorBody](bitbucket/errors/get_workspace_runner_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspace_runners(workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedRunners</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.get_workspace_runners("some example string")
    # TODO: Handle 'response' of type PaginatedRunners
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.get_workspace_runners("some example string")
    # TODO: Handle 'response' of type PaginatedRunners
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRunners](bitbucket/models/paginated_runners.py)</code> -- The workspace runners.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_pipeline(workspace: str, repo_slug: str, pipeline_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pipelines.stop_pipeline("some example string", "some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopPipelineErrorBody
```

**Async**

```python
try:
    await async_client.pipelines.stop_pipeline("some example string", "some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopPipelineErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>pipeline_uuid</code> | <code>str</code> | The UUID of the pipeline. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[StopPipelineErrorBody](bitbucket/errors/stop_pipeline_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_deployment_variable(workspace: str, repo_slug: str, environment_uuid: str, variable_uuid: str, body: DeploymentVariable | DeploymentVariableDict, *, request_options: RequestOptionsOrDict | None = None) -> DeploymentVariable</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.update_deployment_variable(
        "some example string", "some example string", "some example string", "some example string", DeploymentVariable()
    )
    # TODO: Handle 'response' of type DeploymentVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateDeploymentVariableErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.update_deployment_variable(
        "some example string", "some example string", "some example string", "some example string", DeploymentVariable()
    )
    # TODO: Handle 'response' of type DeploymentVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateDeploymentVariableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>environment_uuid</code> | <code>str</code> | The environment. |
| <code>variable_uuid</code> | <code>str</code> | The UUID of the variable to update. |
| <code>body</code> | <code>[DeploymentVariable](bitbucket/models/deployment_variable.py) \| [DeploymentVariableDict](bitbucket/models/deployment_variable.py)</code> | The updated deployment variable. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeploymentVariable](bitbucket/models/deployment_variable.py)</code> -- The deployment variable was updated.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[UpdateDeploymentVariableErrorBody](bitbucket/errors/update_deployment_variable_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_pipeline_variable_for_team(username: str, variable_uuid: str, body: PipelineVariable | PipelineVariableDict, *, request_options: RequestOptionsOrDict | None = None) -> PipelineVariable</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.update_pipeline_variable_for_team(
        "some example string", "some example string", PipelineVariable()
    )
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePipelineVariableForTeamErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.update_pipeline_variable_for_team(
        "some example string", "some example string", PipelineVariable()
    )
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePipelineVariableForTeamErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>str</code> | The account. |
| <code>variable_uuid</code> | <code>str</code> | The UUID of the variable. |
| <code>body</code> | <code>[PipelineVariable](bitbucket/models/pipeline_variable.py) \| [PipelineVariableDict](bitbucket/models/pipeline_variable.py)</code> | The updated variable. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](bitbucket/models/pipeline_variable.py)</code> -- The variable was updated.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[UpdatePipelineVariableForTeamErrorBody](bitbucket/errors/update_pipeline_variable_for_team_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_pipeline_variable_for_user(selected_user: str, variable_uuid: str, body: PipelineVariable | PipelineVariableDict, *, request_options: RequestOptionsOrDict | None = None) -> PipelineVariable</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.update_pipeline_variable_for_user(
        "some example string", "some example string", PipelineVariable()
    )
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePipelineVariableForUserErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.update_pipeline_variable_for_user(
        "some example string", "some example string", PipelineVariable()
    )
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePipelineVariableForUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID. |
| <code>variable_uuid</code> | <code>str</code> | The UUID of the variable. |
| <code>body</code> | <code>[PipelineVariable](bitbucket/models/pipeline_variable.py) \| [PipelineVariableDict](bitbucket/models/pipeline_variable.py)</code> | The updated variable. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](bitbucket/models/pipeline_variable.py)</code> -- The variable was updated.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[UpdatePipelineVariableForUserErrorBody](bitbucket/errors/update_pipeline_variable_for_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_pipeline_variable_for_workspace(workspace: str, variable_uuid: str, body: PipelineVariable | PipelineVariableDict, *, request_options: RequestOptionsOrDict | None = None) -> PipelineVariable</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.update_pipeline_variable_for_workspace(
        "some example string", "some example string", PipelineVariable()
    )
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePipelineVariableForWorkspaceErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.update_pipeline_variable_for_workspace(
        "some example string", "some example string", PipelineVariable()
    )
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePipelineVariableForWorkspaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>variable_uuid</code> | <code>str</code> | The UUID of the variable. |
| <code>body</code> | <code>[PipelineVariable](bitbucket/models/pipeline_variable.py) \| [PipelineVariableDict](bitbucket/models/pipeline_variable.py)</code> | The updated variable. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](bitbucket/models/pipeline_variable.py)</code> -- The variable was updated.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[UpdatePipelineVariableForWorkspaceErrorBody](bitbucket/errors/update_pipeline_variable_for_workspace_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_repository_build_number(workspace: str, repo_slug: str, body: PipelineBuildNumber | PipelineBuildNumberDict, *, request_options: RequestOptionsOrDict | None = None) -> PipelineBuildNumber</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.update_repository_build_number(
        "some example string", "some example string", PipelineBuildNumber()
    )
    # TODO: Handle 'response' of type PipelineBuildNumber
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRepositoryBuildNumberErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.update_repository_build_number(
        "some example string", "some example string", PipelineBuildNumber()
    )
    # TODO: Handle 'response' of type PipelineBuildNumber
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRepositoryBuildNumberErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>body</code> | <code>[PipelineBuildNumber](bitbucket/models/pipeline_build_number.py) \| [PipelineBuildNumberDict](bitbucket/models/pipeline_build_number.py)</code> | The build number to update. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineBuildNumber](bitbucket/models/pipeline_build_number.py)</code> -- The build number has been configured.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[UpdateRepositoryBuildNumberErrorBody](bitbucket/errors/update_repository_build_number_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_repository_pipeline_config(workspace: str, repo_slug: str, body: PipelinesConfig | PipelinesConfigDict, *, request_options: RequestOptionsOrDict | None = None) -> PipelinesConfig</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.update_repository_pipeline_config(
        "some example string", "some example string", PipelinesConfig()
    )
    # TODO: Handle 'response' of type PipelinesConfig
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pipelines.update_repository_pipeline_config(
        "some example string", "some example string", PipelinesConfig()
    )
    # TODO: Handle 'response' of type PipelinesConfig
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>body</code> | <code>[PipelinesConfig](bitbucket/models/pipelines_config.py) \| [PipelinesConfigDict](bitbucket/models/pipelines_config.py)</code> | The updated repository pipelines configuration. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelinesConfig](bitbucket/models/pipelines_config.py)</code> -- The repository pipelines configuration was updated.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_repository_pipeline_key_pair(workspace: str, repo_slug: str, body: PipelineSshKeyPair | PipelineSshKeyPairDict, *, request_options: RequestOptionsOrDict | None = None) -> PipelineSshKeyPair</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.update_repository_pipeline_key_pair(
        "some example string", "some example string", PipelineSshKeyPair()
    )
    # TODO: Handle 'response' of type PipelineSshKeyPair
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRepositoryPipelineKeyPairErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.update_repository_pipeline_key_pair(
        "some example string", "some example string", PipelineSshKeyPair()
    )
    # TODO: Handle 'response' of type PipelineSshKeyPair
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRepositoryPipelineKeyPairErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>body</code> | <code>[PipelineSshKeyPair](bitbucket/models/pipeline_ssh_key_pair.py) \| [PipelineSshKeyPairDict](bitbucket/models/pipeline_ssh_key_pair.py)</code> | The created or updated SSH key pair. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineSshKeyPair](bitbucket/models/pipeline_ssh_key_pair.py)</code> -- The SSH key pair was created or updated.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[UpdateRepositoryPipelineKeyPairErrorBody](bitbucket/errors/update_repository_pipeline_key_pair_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_repository_pipeline_known_host(workspace: str, repo_slug: str, known_host_uuid: str, body: PipelineKnownHost | PipelineKnownHostDict, *, request_options: RequestOptionsOrDict | None = None) -> PipelineKnownHost</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.update_repository_pipeline_known_host(
        "some example string", "some example string", "some example string", PipelineKnownHost()
    )
    # TODO: Handle 'response' of type PipelineKnownHost
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRepositoryPipelineKnownHostErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.update_repository_pipeline_known_host(
        "some example string", "some example string", "some example string", PipelineKnownHost()
    )
    # TODO: Handle 'response' of type PipelineKnownHost
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRepositoryPipelineKnownHostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>known_host_uuid</code> | <code>str</code> | The UUID of the known host to update. |
| <code>body</code> | <code>[PipelineKnownHost](bitbucket/models/pipeline_known_host.py) \| [PipelineKnownHostDict](bitbucket/models/pipeline_known_host.py)</code> | The updated known host. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineKnownHost](bitbucket/models/pipeline_known_host.py)</code> -- The known host was updated.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[UpdateRepositoryPipelineKnownHostErrorBody](bitbucket/errors/update_repository_pipeline_known_host_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_repository_pipeline_schedule(workspace: str, repo_slug: str, schedule_uuid: str, body: PipelineSchedulePutRequestBody | PipelineSchedulePutRequestBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> PipelineSchedule</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.update_repository_pipeline_schedule(
        "some example string", "some example string", "some example string", PipelineSchedulePutRequestBody()
    )
    # TODO: Handle 'response' of type PipelineSchedule
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRepositoryPipelineScheduleErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.update_repository_pipeline_schedule(
        "some example string", "some example string", "some example string", PipelineSchedulePutRequestBody()
    )
    # TODO: Handle 'response' of type PipelineSchedule
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRepositoryPipelineScheduleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>schedule_uuid</code> | <code>str</code> | The uuid of the schedule. |
| <code>body</code> | <code>[PipelineSchedulePutRequestBody](bitbucket/models/pipeline_schedule_put_request_body.py) \| [PipelineSchedulePutRequestBodyDict](bitbucket/models/pipeline_schedule_put_request_body.py)</code> | The schedule to update. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineSchedule](bitbucket/models/pipeline_schedule.py)</code> -- The schedule is updated.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[UpdateRepositoryPipelineScheduleErrorBody](bitbucket/errors/update_repository_pipeline_schedule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_repository_pipeline_variable(workspace: str, repo_slug: str, variable_uuid: str, body: PipelineVariable | PipelineVariableDict, *, request_options: RequestOptionsOrDict | None = None) -> PipelineVariable</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.update_repository_pipeline_variable(
        "some example string", "some example string", "some example string", PipelineVariable()
    )
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRepositoryPipelineVariableErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.update_repository_pipeline_variable(
        "some example string", "some example string", "some example string", PipelineVariable()
    )
    # TODO: Handle 'response' of type PipelineVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRepositoryPipelineVariableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>variable_uuid</code> | <code>str</code> | The UUID of the variable to update. |
| <code>body</code> | <code>[PipelineVariable](bitbucket/models/pipeline_variable.py) \| [PipelineVariableDict](bitbucket/models/pipeline_variable.py)</code> | The updated variable |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineVariable](bitbucket/models/pipeline_variable.py)</code> -- The variable was updated.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[UpdateRepositoryPipelineVariableErrorBody](bitbucket/errors/update_repository_pipeline_variable_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_repository_runner(workspace: str, repo_slug: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelineRunner</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.update_repository_runner(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineRunner
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRepositoryRunnerErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.update_repository_runner(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PipelineRunner
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRepositoryRunnerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>runner_uuid</code> | <code>str</code> | The runner uuid. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineRunner](bitbucket/models/pipeline_runner.py)</code> -- The repository runner.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[UpdateRepositoryRunnerErrorBody](bitbucket/errors/update_repository_runner_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_workspace_runner(workspace: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None) -> PipelineRunner</code></summary>

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

**Sync**

```python
try:
    response = client.pipelines.update_workspace_runner("some example string", "some example string")
    # TODO: Handle 'response' of type PipelineRunner
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWorkspaceRunnerErrorBody
```

**Async**

```python
try:
    response = await async_client.pipelines.update_workspace_runner("some example string", "some example string")
    # TODO: Handle 'response' of type PipelineRunner
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWorkspaceRunnerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>runner_uuid</code> | <code>str</code> | The runner uuid. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineRunner](bitbucket/models/pipeline_runner.py)</code> -- The workspace runner.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[UpdateWorkspaceRunnerErrorBody](bitbucket/errors/update_workspace_runner_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](bitbucket/apis/projects.py)

<details>
<summary><code>def delete_workspaces_by_workspace_projects_by_project_key(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
``
$ curl -X DELETE https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects/PROJ
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.projects.delete_workspaces_by_workspace_projects_by_project_key("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWorkspacesByWorkspaceProjectsByProjectKeyErrorBody
```

**Async**

```python
try:
    await async_client.projects.delete_workspaces_by_workspace_projects_by_project_key(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWorkspacesByWorkspaceProjectsByProjectKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual `key` assigned<br>to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteWorkspacesByWorkspaceProjectsByProjectKeyErrorBody](bitbucket/errors/delete_workspaces_by_workspace_projects_by_project_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(project_key: str, selected_user: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a default reviewer from the project.

Example:
``
$ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D

HTTP/1.1 204
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.projects.delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody
    ...
```

**Async**

```python
try:
    await async_client.projects.delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This can either be the actual `key` assigned<br>to the project or the `UUID` (surrounded by curly-braces (`{}`)). |
| <code>selected_user</code> | <code>str</code> | This can either be the username or the UUID of the default reviewer,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody](bitbucket/errors/delete_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(group_slug: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.projects.delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody
    ...
```

**Async**

```python
try:
    await async_client.projects.delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_slug</code> | <code>str</code> | Slug of the requested group. |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual key assigned to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody](bitbucket/errors/delete_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(project_key: str, selected_user_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.projects.delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody
    ...
```

**Async**

```python
try:
    await async_client.projects.delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual key assigned to the project. |
| <code>selected_user_id</code> | <code>str</code> | This can either be the username, the user's UUID surrounded by curly-braces,<br>for example: {account UUID}, or the user's Atlassian ID. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody](bitbucket/errors/delete_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_projects_by_project_key(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> ProjectBitbucketProjectsApi</code></summary>

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

**Sync**

```python
try:
    response = client.projects.get_workspaces_by_workspace_projects_by_project_key(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectBitbucketProjectsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.get_workspaces_by_workspace_projects_by_project_key(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectBitbucketProjectsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual `key` assigned<br>to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectBitbucketProjectsApi](bitbucket/models/project_bitbucket_projects_api.py)</code> -- The project that is part of a workspace.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceProjectsByProjectKeyErrorBody](bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_projects_by_project_key_default_reviewers(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedDefaultReviewerAndType</code></summary>

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

**Sync**

```python
try:
    response = client.projects.get_workspaces_by_workspace_projects_by_project_key_default_reviewers(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedDefaultReviewerAndType
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.get_workspaces_by_workspace_projects_by_project_key_default_reviewers(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedDefaultReviewerAndType
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual `key` assigned<br>to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedDefaultReviewerAndType](bitbucket/models/paginated_default_reviewer_and_type.py)</code> -- The list of project default reviewers

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersErrorBody](bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_default_reviewers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(project_key: str, selected_user: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> User</code></summary>

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

**Sync**

```python
try:
    response = client.projects.get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type User
except ApiError as e:
    # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.projects.get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type User
except ApiError as e:
    # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This can either be the actual `key` assigned<br>to the project or the `UUID` (surrounded by curly-braces (`{}`)). |
| <code>selected_user</code> | <code>str</code> | This can either be the username or the UUID of the default reviewer,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](bitbucket/models/user.py)</code> -- The specified user that is a default reviewer

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody](bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedProjectGroupPermissions</code></summary>

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

**Sync**

```python
try:
    response = client.projects.get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedProjectGroupPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedProjectGroupPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual key assigned to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedProjectGroupPermissions](bitbucket/models/paginated_project_group_permissions.py)</code> -- Paginated list of project group permissions

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsErrorBody](bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(group_slug: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> ProjectGroupPermission</code></summary>

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

**Sync**

```python
try:
    response = client.projects.get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectGroupPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.projects.get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectGroupPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_slug</code> | <code>str</code> | Slug of the requested group. |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual key assigned to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectGroupPermission](bitbucket/models/project_group_permission.py)</code> -- Project group permission

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody](bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_projects_by_project_key_permissions_config_users(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedProjectUserPermissions</code></summary>

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

**Sync**

```python
try:
    response = client.projects.get_workspaces_by_workspace_projects_by_project_key_permissions_config_users(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedProjectUserPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.get_workspaces_by_workspace_projects_by_project_key_permissions_config_users(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedProjectUserPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual key assigned to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedProjectUserPermissions](bitbucket/models/paginated_project_user_permissions.py)</code> -- Paginated list of explicit user permissions.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersErrorBody](bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(project_key: str, selected_user_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> ProjectUserPermission</code></summary>

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

**Sync**

```python
try:
    response = client.projects.get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectUserPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.projects.get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectUserPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual key assigned to the project. |
| <code>selected_user_id</code> | <code>str</code> | This can either be the username, the user's UUID surrounded by curly-braces,<br>for example: {account UUID}, or the user's Atlassian ID. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectUserPermission](bitbucket/models/project_user_permission.py)</code> -- Explicit user permission for user and project

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody](bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_workspaces_by_workspace_projects(workspace: str, body: ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict, *, request_options: RequestOptionsOrDict | None = None) -> ProjectBitbucketProjectsApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new project.

Note that the avatar has to be embedded as either a data-url
or a URL to an external image as shown in the examples below:

``
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
``

or even:

``
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
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.projects.post_workspaces_by_workspace_projects(
        "some example string", ProjectBitbucketProjectsApi()
    )
    # TODO: Handle 'response' of type ProjectBitbucketProjectsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostWorkspacesByWorkspaceProjectsErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.post_workspaces_by_workspace_projects(
        "some example string", ProjectBitbucketProjectsApi()
    )
    # TODO: Handle 'response' of type ProjectBitbucketProjectsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostWorkspacesByWorkspaceProjectsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[ProjectBitbucketProjectsApi](bitbucket/models/project_bitbucket_projects_api.py) \| [ProjectBitbucketProjectsApiDict](bitbucket/models/project_bitbucket_projects_api.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectBitbucketProjectsApi](bitbucket/models/project_bitbucket_projects_api.py)</code> -- A new project has been created.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostWorkspacesByWorkspaceProjectsErrorBody](bitbucket/errors/post_workspaces_by_workspace_projects_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_workspaces_by_workspace_projects_by_project_key(project_key: str, workspace: str, body: ProjectBitbucketProjectsApi | ProjectBitbucketProjectsApiDict, *, request_options: RequestOptionsOrDict | None = None) -> ProjectBitbucketProjectsApi</code></summary>

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

**Sync**

```python
try:
    response = client.projects.put_workspaces_by_workspace_projects_by_project_key(
        "some example string", "some example string", ProjectBitbucketProjectsApi()
    )
    # TODO: Handle 'response' of type ProjectBitbucketProjectsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutWorkspacesByWorkspaceProjectsByProjectKeyErrorBody
```

**Async**

```python
try:
    response = await async_client.projects.put_workspaces_by_workspace_projects_by_project_key(
        "some example string", "some example string", ProjectBitbucketProjectsApi()
    )
    # TODO: Handle 'response' of type ProjectBitbucketProjectsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutWorkspacesByWorkspaceProjectsByProjectKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual `key` assigned<br>to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[ProjectBitbucketProjectsApi](bitbucket/models/project_bitbucket_projects_api.py) \| [ProjectBitbucketProjectsApiDict](bitbucket/models/project_bitbucket_projects_api.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectBitbucketProjectsApi](bitbucket/models/project_bitbucket_projects_api.py)</code> -- The existing project is has been updated.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutWorkspacesByWorkspaceProjectsByProjectKeyErrorBody](bitbucket/errors/put_workspaces_by_workspace_projects_by_project_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(project_key: str, selected_user: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> User</code></summary>

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

**Sync**

```python
try:
    response = client.projects.put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type User
except ApiError as e:
    # TODO: Handle 'e.error' of type PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.projects.put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type User
except ApiError as e:
    # TODO: Handle 'e.error' of type PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This can either be the actual `key` assigned<br>to the project or the `UUID` (surrounded by curly-braces (`{}`)). |
| <code>selected_user</code> | <code>str</code> | This can either be the username or the UUID of the default reviewer,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](bitbucket/models/user.py)</code> -- The specified user was added as a project default reviewer

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserErrorBody](bitbucket/errors/put_workspaces_by_workspace_projects_by_project_key_default_reviewers_by_selected_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(group_slug: str, project_key: str, workspace: str, body: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict, *, request_options: RequestOptionsOrDict | None = None) -> ProjectGroupPermission</code></summary>

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

**Sync**

```python
try:
    response = client.projects.put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        "some example string",
        "some example string",
        "some example string",
        BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema(permission=Permission.READ),
    )
    # TODO: Handle 'response' of type ProjectGroupPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.projects.put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug(
        "some example string",
        "some example string",
        "some example string",
        BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema(permission=Permission.READ),
    )
    # TODO: Handle 'response' of type ProjectGroupPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_slug</code> | <code>str</code> | Slug of the requested group. |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual key assigned to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema](bitbucket/models/bitbucket_apps_permissions_serializers_project_permission_update_schema.py) \| [BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict](bitbucket/models/bitbucket_apps_permissions_serializers_project_permission_update_schema.py)</code> | The permission to grant |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectGroupPermission](bitbucket/models/project_group_permission.py)</code> -- Project group permission updated.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugErrorBody](bitbucket/errors/put_workspaces_by_workspace_projects_by_project_key_permissions_config_groups_by_group_slug_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(project_key: str, selected_user_id: str, workspace: str, body: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema | BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict, *, request_options: RequestOptionsOrDict | None = None) -> ProjectUserPermission</code></summary>

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

**Sync**

```python
try:
    response = client.projects.put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        "some example string",
        "some example string",
        "some example string",
        BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema(permission=Permission.READ),
    )
    # TODO: Handle 'response' of type ProjectUserPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.projects.put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id(
        "some example string",
        "some example string",
        "some example string",
        BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema(permission=Permission.READ),
    )
    # TODO: Handle 'response' of type ProjectUserPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual key assigned to the project. |
| <code>selected_user_id</code> | <code>str</code> | This can either be the username, the user's UUID surrounded by curly-braces,<br>for example: {account UUID}, or the user's Atlassian ID. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema](bitbucket/models/bitbucket_apps_permissions_serializers_project_permission_update_schema.py) \| [BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchemaDict](bitbucket/models/bitbucket_apps_permissions_serializers_project_permission_update_schema.py)</code> | The permission to grant |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectUserPermission](bitbucket/models/project_user_permission.py)</code> -- Explicit user permission updated

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdErrorBody](bitbucket/errors/put_workspaces_by_workspace_projects_by_project_key_permissions_config_users_by_selected_user_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Properties

> Source: [Properties](bitbucket/apis/properties.py)

<details>
<summary><code>def delete_commit_hosted_property_value(workspace: str, repo_slug: str, commit: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.properties.delete_commit_hosted_property_value(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.properties.delete_commit_hosted_property_value(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | The repository container; either the workspace slug or the UUID in curly braces. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit. |
| <code>app_key</code> | <code>str</code> | The key of the Connect app. |
| <code>property_name</code> | <code>str</code> | The name of the property. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_pull_request_hosted_property_value(workspace: str, repo_slug: str, pullrequest_id: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.properties.delete_pull_request_hosted_property_value(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.properties.delete_pull_request_hosted_property_value(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | The repository container; either the workspace slug or the UUID in curly braces. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>pullrequest_id</code> | <code>str</code> | The pull request ID. |
| <code>app_key</code> | <code>str</code> | The key of the Connect app. |
| <code>property_name</code> | <code>str</code> | The name of the property. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repository_hosted_property_value(workspace: str, repo_slug: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.properties.delete_repository_hosted_property_value(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.properties.delete_repository_hosted_property_value(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | The repository container; either the workspace slug or the UUID in curly braces. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>app_key</code> | <code>str</code> | The key of the Connect app. |
| <code>property_name</code> | <code>str</code> | The name of the property. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_user_hosted_property_value(selected_user: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.properties.delete_user_hosted_property_value(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.properties.delete_user_hosted_property_value(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID. |
| <code>app_key</code> | <code>str</code> | The key of the Connect app. |
| <code>property_name</code> | <code>str</code> | The name of the property. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_commit_hosted_property_value(workspace: str, repo_slug: str, commit: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApplicationProperty</code></summary>

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

**Sync**

```python
try:
    response = client.properties.get_commit_hosted_property_value(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type ApplicationProperty
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.properties.get_commit_hosted_property_value(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type ApplicationProperty
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | The repository container; either the workspace slug or the UUID in curly braces. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit. |
| <code>app_key</code> | <code>str</code> | The key of the Connect app. |
| <code>property_name</code> | <code>str</code> | The name of the property. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationProperty](bitbucket/models/application_property.py)</code> -- The value of the property.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pull_request_hosted_property_value(workspace: str, repo_slug: str, pullrequest_id: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApplicationProperty</code></summary>

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

**Sync**

```python
try:
    response = client.properties.get_pull_request_hosted_property_value(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type ApplicationProperty
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.properties.get_pull_request_hosted_property_value(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type ApplicationProperty
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | The repository container; either the workspace slug or the UUID in curly braces. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>pullrequest_id</code> | <code>str</code> | The pull request ID. |
| <code>app_key</code> | <code>str</code> | The key of the Connect app. |
| <code>property_name</code> | <code>str</code> | The name of the property. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationProperty](bitbucket/models/application_property.py)</code> -- The value of the property.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repository_hosted_property_value(workspace: str, repo_slug: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApplicationProperty</code></summary>

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

**Sync**

```python
try:
    response = client.properties.get_repository_hosted_property_value(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApplicationProperty
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.properties.get_repository_hosted_property_value(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApplicationProperty
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | The repository container; either the workspace slug or the UUID in curly braces. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>app_key</code> | <code>str</code> | The key of the Connect app. |
| <code>property_name</code> | <code>str</code> | The name of the property. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationProperty](bitbucket/models/application_property.py)</code> -- The value of the property.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def retrieve_user_hosted_property_value(selected_user: str, app_key: str, property_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApplicationProperty</code></summary>

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

**Sync**

```python
try:
    response = client.properties.retrieve_user_hosted_property_value(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApplicationProperty
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.properties.retrieve_user_hosted_property_value(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ApplicationProperty
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID. |
| <code>app_key</code> | <code>str</code> | The key of the Connect app. |
| <code>property_name</code> | <code>str</code> | The name of the property. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApplicationProperty](bitbucket/models/application_property.py)</code> -- The value of the property.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_commit_hosted_property_value(workspace: str, repo_slug: str, commit: str, app_key: str, property_name: str, body: ApplicationProperty | ApplicationPropertyDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.properties.update_commit_hosted_property_value(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        ApplicationProperty(),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.properties.update_commit_hosted_property_value(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        ApplicationProperty(),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | The repository container; either the workspace slug or the UUID in curly braces. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit. |
| <code>app_key</code> | <code>str</code> | The key of the Connect app. |
| <code>property_name</code> | <code>str</code> | The name of the property. |
| <code>body</code> | <code>[ApplicationProperty](bitbucket/models/application_property.py) \| [ApplicationPropertyDict](bitbucket/models/application_property.py)</code> | The application property to create or update. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_pull_request_hosted_property_value(workspace: str, repo_slug: str, pullrequest_id: str, app_key: str, property_name: str, body: ApplicationProperty | ApplicationPropertyDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.properties.update_pull_request_hosted_property_value(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        ApplicationProperty(),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.properties.update_pull_request_hosted_property_value(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        ApplicationProperty(),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | The repository container; either the workspace slug or the UUID in curly braces. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>pullrequest_id</code> | <code>str</code> | The pull request ID. |
| <code>app_key</code> | <code>str</code> | The key of the Connect app. |
| <code>property_name</code> | <code>str</code> | The name of the property. |
| <code>body</code> | <code>[ApplicationProperty](bitbucket/models/application_property.py) \| [ApplicationPropertyDict](bitbucket/models/application_property.py)</code> | The application property to create or update. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_repository_hosted_property_value(workspace: str, repo_slug: str, app_key: str, property_name: str, body: ApplicationProperty | ApplicationPropertyDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.properties.update_repository_hosted_property_value(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        ApplicationProperty(),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.properties.update_repository_hosted_property_value(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        ApplicationProperty(),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | The repository container; either the workspace slug or the UUID in curly braces. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>app_key</code> | <code>str</code> | The key of the Connect app. |
| <code>property_name</code> | <code>str</code> | The name of the property. |
| <code>body</code> | <code>[ApplicationProperty](bitbucket/models/application_property.py) \| [ApplicationPropertyDict](bitbucket/models/application_property.py)</code> | The application property to create or update. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_user_hosted_property_value(selected_user: str, app_key: str, property_name: str, body: ApplicationProperty | ApplicationPropertyDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.properties.update_user_hosted_property_value(
        "some example string", "some example string", "some example string", ApplicationProperty()
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.properties.update_user_hosted_property_value(
        "some example string", "some example string", "some example string", ApplicationProperty()
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID. |
| <code>app_key</code> | <code>str</code> | The key of the Connect app. |
| <code>property_name</code> | <code>str</code> | The name of the property. |
| <code>body</code> | <code>[ApplicationProperty](bitbucket/models/application_property.py) \| [ApplicationPropertyDict](bitbucket/models/application_property.py)</code> | The application property to create or update. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PullRequests

> Source: [PullRequests](bitbucket/apis/pull_requests.py)

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(repo_slug: str, target_username: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pull_requests.delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody
    ...
```

**Async**

```python
try:
    await async_client.pull_requests.delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>target_username</code> | <code>str</code> | This can either be the username or the UUID of the default reviewer,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pull_requests.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
        1, "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody
    ...
```

**Async**

```python
try:
    await async_client.pull_requests.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
        1, "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(comment_id: int, pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pull_requests.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        1, 1, "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody
    ...
```

**Async**

```python
try:
    await async_client.pull_requests.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        1, 1, "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>int</code> | The id of the comment. |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(comment_id: int, pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.pull_requests.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
        1, 1, "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody
    ...
```

**Async**

```python
try:
    await async_client.pull_requests.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
        1, 1, "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>int</code> | The id of the comment. |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.pull_requests.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
        1, "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody
    ...
```

**Async**

```python
try:
    await async_client.pull_requests.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
        1, "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(pull_request_id: int, repo_slug: str, task_id: int, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pull_requests.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        1, "some example string", 1, "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody
    ...
```

**Async**

```python
try:
    await async_client.pull_requests.delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        1, "some example string", 1, "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>task_id</code> | <code>int</code> | The ID of the task. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pullrequests_for_commit(workspace: str, repo_slug: str, commit: str, *, page: int | None = 1, pagelen: int | None = 30, request_options: RequestOptionsOrDict | None = None) -> PaginatedPullRequests</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.get_pullrequests_for_commit(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPullRequests
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPullrequestsForCommitErrorBody
```

**Async**

```python
try:
    response = await async_client.pull_requests.get_pullrequests_for_commit(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPullRequests
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPullrequestsForCommitErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces |
| <code>repo_slug</code> | <code>str</code> | The repository; either the UUID in curly braces, or the slug |
| <code>commit</code> | <code>str</code> | The SHA1 of the commit |
| <code>page</code> | <code>int \| None</code> | Which page to retrieve<br>**Default**: <code>1</code> |
| <code>pagelen</code> | <code>int \| None</code> | How many pull requests to retrieve per page<br>**Default**: <code>30</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPullRequests](bitbucket/models/paginated_pull_requests.py)</code> -- The paginated list of pull requests.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetPullrequestsForCommitErrorBody](bitbucket/errors/get_pullrequests_for_commit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_default_reviewers(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedAccounts</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.get_repositories_by_workspace_by_repo_slug_default_reviewers(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedAccounts
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersErrorBody
```

**Async**

```python
try:
    response = await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_default_reviewers(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedAccounts
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedAccounts](bitbucket/models/paginated_accounts.py)</code> -- The paginated list of default reviewers

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_default_reviewers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(repo_slug: str, target_username: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Account</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Account
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody
```

**Async**

```python
try:
    response = await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Account
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>target_username</code> | <code>str</code> | This can either be the username or the UUID of the default reviewer,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Account](bitbucket/models/account.py)</code> -- The specified user is a default reviewer

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_effective_default_reviewers(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedDefaultReviewerAndType</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.get_repositories_by_workspace_by_repo_slug_effective_default_reviewers(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedDefaultReviewerAndType
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersErrorBody
```

**Async**

```python
try:
    response = await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_effective_default_reviewers(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedDefaultReviewerAndType
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedDefaultReviewerAndType](bitbucket/models/paginated_default_reviewer_and_type.py)</code> -- The paginated list of effective default reviewers

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugEffectiveDefaultReviewersErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_effective_default_reviewers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_pullrequests(repo_slug: str, workspace: str, *, state: State5OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedPullRequests</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPullRequests
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody
```

**Async**

```python
try:
    response = await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPullRequests
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>state</code> | <code>[State5OrStr](bitbucket/models/enums/state5.py) \| None</code> | Only return pull requests that are in this state. This parameter can be repeated.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPullRequests](bitbucket/models/paginated_pull_requests.py)</code> -- All pull requests on the specified repository.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_pullrequests_activity(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_activity(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityErrorBody
```

**Async**

```python
try:
    await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_activity(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsActivityErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_activity_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Pullrequest</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Pullrequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody
```

**Async**

```python
try:
    response = await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Pullrequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pullrequest](bitbucket/models/pullrequest.py)</code> -- The pull request object

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity(
        1, "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityErrorBody
    ...
```

**Async**

```python
try:
    await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity(
        1, "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdActivityErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_activity_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedPullRequestComments</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPullRequestComments
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPullRequestComments
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPullRequestComments](bitbucket/models/paginated_pull_request_comments.py)</code> -- A paginated list of comments made on the given pull request, in chronological order.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(comment_id: int, pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PullrequestComment</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        1, 1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PullrequestComment
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        1, 1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PullrequestComment
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>int</code> | The id of the comment. |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PullrequestComment](bitbucket/models/pullrequest_comment.py)</code> -- The comment.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits(
        1, "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsErrorBody
    ...
```

**Async**

```python
try:
    await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits(
        1, "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommitsErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_commits_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diff(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diff(
        1, "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diff(
        1, "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diffstat(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diffstat(
        1, "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_diffstat(
        1, "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id(pull_request_id: int, repo_slug: str, task_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

When merging a pull request takes too long, the client receives a
task ID along with a 202 status code. The task ID can be used in a call
to this endpoint to check the status of a merge task.

``
curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/
``

If the merge task is not yet finished, a PENDING status will be returned.

``
HTTP/2 200
{
"task_status": "PENDING",
"links": {
"self": {
"href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/"
}
}
}
``

If the merge was successful, a SUCCESS status will be returned.

``
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
``

If the merge task failed, an error will be returned.

``
{
"type": "error",
"error": {
"message": ""
}
}
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id(
        1, "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdErrorBody
    ...
```

**Async**

```python
try:
    await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id(
        1, "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>task_id</code> | <code>str</code> | ID of the merge task |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeTaskStatusByTaskIdErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_task_status_by_task_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 409 | <code>[RawError](bitbucket/core/results.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_patch(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_patch(
        1, "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_patch(
        1, "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2(pull_request_id: int, repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedCommitStatuses</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedCommitStatuses
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2ErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedCommitStatuses
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2ErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Field by which the results should be sorted as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>Defaults to `created_on`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedCommitStatuses](bitbucket/models/paginated_commit_statuses.py)</code> -- A paginated list of all commit statuses for this pull request.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdStatuses2ErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_statuses2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(pull_request_id: int, repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, pagelen: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedTasks</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedTasks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody
```

**Async**

```python
try:
    response = await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedTasks
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response. See<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for details.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Field by which the results should be sorted as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>Defaults to `created_on`.<br>**Default**: <code>None</code> |
| <code>pagelen</code> | <code>int \| None</code> | Current number of objects on the existing page.<br>The default value is 10 with 100 being the maximum allowed value.<br>Individual APIs may enforce different values.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedTasks](bitbucket/models/paginated_tasks.py)</code> -- A paginated list of pull request tasks for the given pull request.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(pull_request_id: int, repo_slug: str, task_id: int, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PullrequestCommentTask</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        1, "some example string", 1, "some example string"
    )
    # TODO: Handle 'response' of type PullrequestCommentTask
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.pull_requests.get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        1, "some example string", 1, "some example string"
    )
    # TODO: Handle 'response' of type PullrequestCommentTask
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>task_id</code> | <code>int</code> | The ID of the task. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PullrequestCommentTask](bitbucket/models/pullrequest_comment_task.py)</code> -- The task.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_pullrequests_by_selected_user(selected_user: str, workspace: str, *, state: State5OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedPullRequests</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.get_workspaces_by_workspace_pullrequests_by_selected_user(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPullRequests
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspacePullrequestsBySelectedUserErrorBody
```

**Async**

```python
try:
    response = await async_client.pull_requests.get_workspaces_by_workspace_pullrequests_by_selected_user(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPullRequests
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspacePullrequestsBySelectedUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | This can either be the username of the pull request author, the author's UUID<br>surrounded by curly-braces, for example: `{account UUID}`, or the author's Atlassian ID. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>state</code> | <code>[State5OrStr](bitbucket/models/enums/state5.py) \| None</code> | Only return pull requests that are in this state. This parameter can be repeated.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPullRequests](bitbucket/models/paginated_pull_requests.py)</code> -- All pull requests authored by the specified user.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspacePullrequestsBySelectedUserErrorBody](bitbucket/errors/get_workspaces_by_workspace_pullrequests_by_selected_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_pullrequests(repo_slug: str, workspace: str, *, body: Pullrequest | PullrequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Pullrequest</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new pull request where the destination repository is
this repository and the author is the authenticated user.

The minimum required fields to create a pull request are `title` and
`source`, specified by a branch name.

``
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
``

If the pull request's `destination` is not specified, it will default
to the `repository.mainbranch`. To open a pull request to a
different branch, say from a feature branch to a staging branch,
specify a `destination` (same format as the `source`):

``
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
``

Reviewers can be specified by adding an array of user objects as the
`reviewers` property.

``
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
``

Other fields:

* `description` - a string
* `close_source_branch` - boolean that specifies if the source branch should be closed upon merging
* `draft` - boolean that specifies whether the pull request is a draft

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Pullrequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody
```

**Async**

```python
try:
    response = await async_client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Pullrequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[Pullrequest](bitbucket/models/pullrequest.py) \| [PullrequestDict](bitbucket/models/pullrequest.py) \| None</code> | The new pull request.<br><br>The request URL you POST to becomes the destination repository URL. For this reason, you must specify an explicit source repository in the request object if you want to pull from a different repository (fork).<br><br>Since not all elements are required or even mutable, you only need to include the elements you want to initialize, such as the source branch and the title.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pullrequest](bitbucket/models/pullrequest.py)</code> -- The newly created pull request.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Participant</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Participant
except ApiError as e:
    # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Participant
except ApiError as e:
    # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Participant](bitbucket/models/participant.py)</code> -- The `participant` object recording that the authenticated user approved the pull request.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdApproveErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_approve_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(pull_request_id: int, repo_slug: str, workspace: str, body: PullrequestComment | PullrequestCommentDict, *, request_options: RequestOptionsOrDict | None = None) -> PullrequestComment</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
        1, "some example string", "some example string", PullrequestComment()
    )
    # TODO: Handle 'response' of type PullrequestComment
except ApiError as e:
    # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments(
        1, "some example string", "some example string", PullrequestComment()
    )
    # TODO: Handle 'response' of type PullrequestComment
except ApiError as e:
    # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[PullrequestComment](bitbucket/models/pullrequest_comment.py) \| [PullrequestCommentDict](bitbucket/models/pullrequest_comment.py)</code> | The comment object. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PullrequestComment](bitbucket/models/pullrequest_comment.py)</code> -- The newly created comment.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(comment_id: int, pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> CommentResolution</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
        1, 1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CommentResolution
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve(
        1, 1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CommentResolution
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>int</code> | The id of the comment. |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommentResolution](bitbucket/models/comment_resolution.py)</code> -- The comment resolution details.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdResolveErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_resolve_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 409 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Pullrequest</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Pullrequest
except ApiError as e:
    # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Pullrequest
except ApiError as e:
    # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pullrequest](bitbucket/models/pullrequest.py)</code> -- The pull request was successfully declined.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdDeclineErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_decline_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 555 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge(pull_request_id: int, repo_slug: str, workspace: str, *, async_: bool | None = None, body: PullRequestMergeParameters | PullRequestMergeParametersDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Pullrequest</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Pullrequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeErrorBody
```

**Async**

```python
try:
    response = await async_client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Pullrequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>async_</code> | <code>bool \| None</code> | Default value is false.<br><br><br>When set to true, runs merge asynchronously and<br>immediately returns a 202 with polling link to<br>the task-status API in the Location header.<br><br><br>When set to false, runs merge and waits for it to<br>complete, returning 200 when it succeeds. If the<br>duration of the merge exceeds a timeout threshold,<br>the API returns a 202 with polling link to the<br>task-status API in the Location header.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[PullRequestMergeParameters](bitbucket/models/pull_request_merge_parameters.py) \| [PullRequestMergeParametersDict](bitbucket/models/pull_request_merge_parameters.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pullrequest](bitbucket/models/pullrequest.py)</code> -- The pull request object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_merge_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 409 | <code>[RawError](bitbucket/core/results.py)</code> |
| 555 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(pull_request_id: int, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Participant</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Participant
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Participant
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Participant](bitbucket/models/participant.py)</code> -- The `participant` object recording that the authenticated user requested changes on the pull request.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_request_changes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(pull_request_id: int, repo_slug: str, workspace: str, body: PullRequestTaskCreate | PullRequestTaskCreateDict, *, request_options: RequestOptionsOrDict | None = None) -> PullrequestCommentTask</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
        1,
        "some example string",
        "some example string",
        PullRequestTaskCreate(content=TaskRawContent(raw="some example string")),
    )
    # TODO: Handle 'response' of type PullrequestCommentTask
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody
```

**Async**

```python
try:
    response = await async_client.pull_requests.post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks(
        1,
        "some example string",
        "some example string",
        PullRequestTaskCreate(content=TaskRawContent(raw="some example string")),
    )
    # TODO: Handle 'response' of type PullrequestCommentTask
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[PullRequestTaskCreate](bitbucket/models/pull_request_task_create.py) \| [PullRequestTaskCreateDict](bitbucket/models/pull_request_task_create.py)</code> | The contents of the task |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PullrequestCommentTask](bitbucket/models/pullrequest_comment_task.py)</code> -- The newly created task.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(repo_slug: str, target_username: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Account</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Account
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody
```

**Async**

```python
try:
    response = await async_client.pull_requests.put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Account
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>target_username</code> | <code>str</code> | This can either be the username or the UUID of the default reviewer,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Account](bitbucket/models/account.py)</code> -- The specified user was successfully added to the default reviewers

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(pull_request_id: int, repo_slug: str, workspace: str, *, body: Pullrequest | PullrequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Pullrequest</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Pullrequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody
```

**Async**

```python
try:
    response = await async_client.pull_requests.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Pullrequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[Pullrequest](bitbucket/models/pullrequest.py) \| [PullrequestDict](bitbucket/models/pullrequest.py) \| None</code> | The pull request that is to be updated.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pullrequest](bitbucket/models/pullrequest.py)</code> -- The updated pull request

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(comment_id: int, pull_request_id: int, repo_slug: str, workspace: str, body: PullrequestComment | PullrequestCommentDict, *, request_options: RequestOptionsOrDict | None = None) -> PullrequestComment</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        1, 1, "some example string", "some example string", PullrequestComment()
    )
    # TODO: Handle 'response' of type PullrequestComment
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.pull_requests.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id(
        1, 1, "some example string", "some example string", PullrequestComment()
    )
    # TODO: Handle 'response' of type PullrequestComment
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>int</code> | The id of the comment. |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[PullrequestComment](bitbucket/models/pullrequest_comment.py) \| [PullrequestCommentDict](bitbucket/models/pullrequest_comment.py)</code> | The contents of the updated comment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PullrequestComment](bitbucket/models/pullrequest_comment.py)</code> -- The updated comment.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_comments_by_comment_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(pull_request_id: int, repo_slug: str, task_id: int, workspace: str, body: PullRequestTaskUpdate | PullRequestTaskUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> PullrequestCommentTask</code></summary>

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

**Sync**

```python
try:
    response = client.pull_requests.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        1, "some example string", 1, "some example string", PullRequestTaskUpdate()
    )
    # TODO: Handle 'response' of type PullrequestCommentTask
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.pull_requests.put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id(
        1, "some example string", 1, "some example string", PullRequestTaskUpdate()
    )
    # TODO: Handle 'response' of type PullrequestCommentTask
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pull_request_id</code> | <code>int</code> | The id of the pull request. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>task_id</code> | <code>int</code> | The ID of the task. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[PullRequestTaskUpdate](bitbucket/models/pull_request_task_update.py) \| [PullRequestTaskUpdateDict](bitbucket/models/pull_request_task_update.py)</code> | The updated state and content of the task. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PullrequestCommentTask](bitbucket/models/pullrequest_comment_task.py)</code> -- The updated task.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_pullrequests_by_pull_request_id_tasks_by_task_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Refs

> Source: [Refs](bitbucket/apis/refs.py)

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name(name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.refs.delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody
```

**Async**

```python
try:
    await async_client.refs.delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The name of the branch. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_refs_branches_by_name_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name(name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.refs.delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody
```

**Async**

```python
try:
    await async_client.refs.delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The name of the tag. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_refs_tags_by_name_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_refs(repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedRefs</code></summary>

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

**Sync**

```python
try:
    response = client.refs.get_repositories_by_workspace_by_repo_slug_refs("some example string", "some example string")
    # TODO: Handle 'response' of type PaginatedRefs
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugRefsErrorBody
```

**Async**

```python
try:
    response = await async_client.refs.get_repositories_by_workspace_by_repo_slug_refs(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedRefs
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugRefsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Field by which the results should be sorted as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering). The `name`<br>field is handled specially for refs in that, if specified as the sort field, it<br>uses a natural sort order instead of the default lexicographical sort order. For example,<br>it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRefs](bitbucket/models/paginated_refs.py)</code> -- A paginated list of refs matching any filter criteria that were provided.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugRefsErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_refs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_refs_branches(repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedBranches</code></summary>

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

``
curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches -G --data-urlencode 'q=name ~ "stab"'
``

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

**Sync**

```python
try:
    response = client.refs.get_repositories_by_workspace_by_repo_slug_refs_branches(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedBranches
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody
```

**Async**

```python
try:
    response = await async_client.refs.get_repositories_by_workspace_by_repo_slug_refs_branches(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedBranches
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Field by which the results should be sorted as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering). The `name`<br>field is handled specially for branches in that, if specified as the sort field, it<br>uses a natural sort order instead of the default lexicographical sort order. For example,<br>it will return ['branch1', 'branch2', 'branch10'] instead of ['branch1', 'branch10', 'branch2'].<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedBranches](bitbucket/models/paginated_branches.py)</code> -- A paginated list of branches matching any filter criteria that were provided.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_refs_branches_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_refs_branches_by_name(name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Branch</code></summary>

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

**Sync**

```python
try:
    response = client.refs.get_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Branch
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody
```

**Async**

```python
try:
    response = await async_client.refs.get_repositories_by_workspace_by_repo_slug_refs_branches_by_name(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Branch
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The name of the branch. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Branch](bitbucket/models/branch.py)</code> -- The branch object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_refs_branches_by_name_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_refs_tags(repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedTags</code></summary>

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

**Sync**

```python
try:
    response = client.refs.get_repositories_by_workspace_by_repo_slug_refs_tags(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedTags
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody
```

**Async**

```python
try:
    response = await async_client.refs.get_repositories_by_workspace_by_repo_slug_refs_tags(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedTags
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Field by which the results should be sorted as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering). The `name`<br>field is handled specially for tags in that, if specified as the sort field, it<br>uses a natural sort order instead of the default lexicographical sort order. For example,<br>it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedTags](bitbucket/models/paginated_tags.py)</code> -- A paginated list of tags matching any filter criteria that were provided.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_refs_tags_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_refs_tags_by_name(name: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> TagModel</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the specified tag.

``
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
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.refs.get_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type TagModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody
```

**Async**

```python
try:
    response = await async_client.refs.get_repositories_by_workspace_by_repo_slug_refs_tags_by_name(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type TagModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The name of the tag. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagModel](bitbucket/models/tag_model.py)</code> -- The tag object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_refs_tags_by_name_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_refs_branches(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Branch</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new branch in the specified repository.

The payload of the POST should consist of a JSON document that
contains the name of the tag and the target hash.

``
curl https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/branches \
-s -u seanfarley -X POST -H "Content-Type: application/json" \
-d '{
"name" : "smf/create-feature",
"target" : {
"hash" : "default",
}
}'
``

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

**Sync**

```python
try:
    response = client.refs.post_repositories_by_workspace_by_repo_slug_refs_branches(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Branch
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody
```

**Async**

```python
try:
    response = await async_client.refs.post_repositories_by_workspace_by_repo_slug_refs_branches(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Branch
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Branch](bitbucket/models/branch.py)</code> -- The newly created branch object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugRefsBranchesErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_refs_branches_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_refs_tags(repo_slug: str, workspace: str, body: TagModel | TagModelDict, *, request_options: RequestOptionsOrDict | None = None) -> TagModel</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new annotated tag in the specified repository.

The payload of the POST should consist of a JSON document that
contains the name of the tag and the target hash.

``
curl https://api.bitbucket.org/2.0/repositories/jdoe/myrepo/refs/tags \
-s -u jdoe -X POST -H "Content-Type: application/json" \
-d '{
"name" : "new-tag-name",
"target" : {
"hash" : "a1b2c3d4e5f6",
}
}'
``

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

**Sync**

```python
try:
    response = client.refs.post_repositories_by_workspace_by_repo_slug_refs_tags(
        "some example string", "some example string", TagModel(type_="some example string")
    )
    # TODO: Handle 'response' of type TagModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody
```

**Async**

```python
try:
    response = await async_client.refs.post_repositories_by_workspace_by_repo_slug_refs_tags(
        "some example string", "some example string", TagModel(type_="some example string")
    )
    # TODO: Handle 'response' of type TagModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[TagModel](bitbucket/models/tag_model.py) \| [TagModelDict](bitbucket/models/tag_model.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagModel](bitbucket/models/tag_model.py)</code> -- The newly created tag.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugRefsTagsErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_refs_tags_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](bitbucket/apis/reports.py)

<details>
<summary><code>def bulk_create_or_update_annotations2(workspace: str, repo_slug: str, commit: str, report_id: str, body: list[ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict], *, request_options: RequestOptionsOrDict | None = None) -> list[ReportAnnotationBitbucketReportsApi]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk upload of annotations.
Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated UUID. You can upload up to 100 annotations per POST request.

### Sample cURL request:
``
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
``

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

**Sync**

```python
try:
    response = client.reports.bulk_create_or_update_annotations2(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        [ReportAnnotationBitbucketReportsApi()],
    )
    # TODO: Handle 'response' of type list[ReportAnnotationBitbucketReportsApi]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.reports.bulk_create_or_update_annotations2(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        [ReportAnnotationBitbucketReportsApi()],
    )
    # TODO: Handle 'response' of type list[ReportAnnotationBitbucketReportsApi]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit for which to retrieve reports. |
| <code>report_id</code> | <code>str</code> | Uuid or external-if of the report for which to get annotations for. |
| <code>body</code> | <code>list&#91;[ReportAnnotationBitbucketReportsApi](bitbucket/models/report_annotation_bitbucket_reports_api.py) \| [ReportAnnotationBitbucketReportsApiDict](bitbucket/models/report_annotation_bitbucket_reports_api.py)&#93;</code> | The annotations to create or update |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[ReportAnnotationBitbucketReportsApi](bitbucket/models/report_annotation_bitbucket_reports_api.py)&#93;</code> -- OK

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_or_update_annotation2(workspace: str, repo_slug: str, commit: str, report_id: str, annotation_id: str, body: ReportAnnotationBitbucketReportsApi | ReportAnnotationBitbucketReportsApiDict, *, request_options: RequestOptionsOrDict | None = None) -> ReportAnnotationBitbucketReportsApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates an individual annotation for the specified report.
Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated UUID. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.

### Sample cURL request:
``
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
``

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

**Sync**

```python
try:
    response = client.reports.create_or_update_annotation2(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        ReportAnnotationBitbucketReportsApi(),
    )
    # TODO: Handle 'response' of type ReportAnnotationBitbucketReportsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrUpdateAnnotation2ErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.create_or_update_annotation2(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        ReportAnnotationBitbucketReportsApi(),
    )
    # TODO: Handle 'response' of type ReportAnnotationBitbucketReportsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrUpdateAnnotation2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit the report belongs to. |
| <code>report_id</code> | <code>str</code> | Either the uuid or external-id of the report. |
| <code>annotation_id</code> | <code>str</code> | Either the uuid or external-id of the annotation. |
| <code>body</code> | <code>[ReportAnnotationBitbucketReportsApi](bitbucket/models/report_annotation_bitbucket_reports_api.py) \| [ReportAnnotationBitbucketReportsApiDict](bitbucket/models/report_annotation_bitbucket_reports_api.py)</code> | The annotation to create or update |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportAnnotationBitbucketReportsApi](bitbucket/models/report_annotation_bitbucket_reports_api.py)</code> -- OK

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[CreateOrUpdateAnnotation2ErrorBody](bitbucket/errors/create_or_update_annotation2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_or_update_report2(workspace: str, repo_slug: str, commit: str, report_id: str, body: ReportBitbucketReportsApi | ReportBitbucketReportsApiDict, *, request_options: RequestOptionsOrDict | None = None) -> ReportBitbucketReportsApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates a report for the specified commit.
To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.

### Sample cURL request:
``
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
``

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

**Sync**

```python
try:
    response = client.reports.create_or_update_report2(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        ReportBitbucketReportsApi(),
    )
    # TODO: Handle 'response' of type ReportBitbucketReportsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrUpdateReport2ErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.create_or_update_report2(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        ReportBitbucketReportsApi(),
    )
    # TODO: Handle 'response' of type ReportBitbucketReportsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrUpdateReport2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit the report belongs to. |
| <code>report_id</code> | <code>str</code> | Either the uuid or external-id of the report. |
| <code>body</code> | <code>[ReportBitbucketReportsApi](bitbucket/models/report_bitbucket_reports_api.py) \| [ReportBitbucketReportsApiDict](bitbucket/models/report_bitbucket_reports_api.py)</code> | The report to create or update |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportBitbucketReportsApi](bitbucket/models/report_bitbucket_reports_api.py)</code> -- OK

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[CreateOrUpdateReport2ErrorBody](bitbucket/errors/create_or_update_report2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_annotation2(workspace: str, repo_slug: str, commit: str, report_id: str, annotation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.reports.delete_annotation2(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.reports.delete_annotation2(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit the annotation belongs to. |
| <code>report_id</code> | <code>str</code> | Either the uuid or external-id of the annotation. |
| <code>annotation_id</code> | <code>str</code> | Either the uuid or external-id of the annotation. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_report2(workspace: str, repo_slug: str, commit: str, report_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.reports.delete_report2(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.reports.delete_report2(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit the report belongs to. |
| <code>report_id</code> | <code>str</code> | Either the uuid or external-id of the report. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_annotation2(workspace: str, repo_slug: str, commit: str, report_id: str, annotation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ReportAnnotationBitbucketReportsApi</code></summary>

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

**Sync**

```python
try:
    response = client.reports.get_annotation2(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type ReportAnnotationBitbucketReportsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAnnotation2ErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.get_annotation2(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type ReportAnnotationBitbucketReportsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAnnotation2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit the report belongs to. |
| <code>report_id</code> | <code>str</code> | Either the uuid or external-id of the report. |
| <code>annotation_id</code> | <code>str</code> | Either the uuid or external-id of the annotation. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportAnnotationBitbucketReportsApi](bitbucket/models/report_annotation_bitbucket_reports_api.py)</code> -- OK

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetAnnotation2ErrorBody](bitbucket/errors/get_annotation2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_annotations_for_report2(workspace: str, repo_slug: str, commit: str, report_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedAnnotations</code></summary>

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

**Sync**

```python
try:
    response = client.reports.get_annotations_for_report2(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedAnnotations
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.reports.get_annotations_for_report2(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedAnnotations
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit for which to retrieve reports. |
| <code>report_id</code> | <code>str</code> | Uuid or external-if of the report for which to get annotations for. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedAnnotations](bitbucket/models/paginated_annotations.py)</code> -- OK

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_report2(workspace: str, repo_slug: str, commit: str, report_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ReportBitbucketReportsApi</code></summary>

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

**Sync**

```python
try:
    response = client.reports.get_report2(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ReportBitbucketReportsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReport2ErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.get_report2(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ReportBitbucketReportsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReport2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit the report belongs to. |
| <code>report_id</code> | <code>str</code> | Either the uuid or external-id of the report. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportBitbucketReportsApi](bitbucket/models/report_bitbucket_reports_api.py)</code> -- OK

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetReport2ErrorBody](bitbucket/errors/get_report2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_reports_for_commit2(workspace: str, repo_slug: str, commit: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedReports</code></summary>

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

**Sync**

```python
try:
    response = client.reports.get_reports_for_commit2(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedReports
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.reports.get_reports_for_commit2(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedReports
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`. |
| <code>repo_slug</code> | <code>str</code> | The repository. |
| <code>commit</code> | <code>str</code> | The commit for which to retrieve reports. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedReports](bitbucket/models/paginated_reports.py)</code> -- OK

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Repositories

> Source: [Repositories](bitbucket/apis/repositories.py)

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug(repo_slug: str, workspace: str, *, redirect_to: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.repositories.delete_repositories_by_workspace_by_repo_slug("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugErrorBody
```

**Async**

```python
try:
    await async_client.repositories.delete_repositories_by_workspace_by_repo_slug(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>redirect_to</code> | <code>str \| None</code> | If a repository has been moved to a new location, use this parameter to<br>show users a friendly message in the Bitbucket UI that the repository<br>has moved to a new location. However, a GET to this endpoint will still<br>return a 404.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_hooks_by_uid(repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.repositories.delete_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody
```

**Async**

```python
try:
    await async_client.repositories.delete_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>uid</code> | <code>str</code> | Installed webhook's ID |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_hooks_by_uid_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(group_slug: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.repositories.delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody
    ...
```

**Async**

```python
try:
    await async_client.repositories.delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_slug</code> | <code>str</code> | Slug of the requested group. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(repo_slug: str, selected_user_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.repositories.delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody
    ...
```

**Async**

```python
try:
    await async_client.repositories.delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    # TODO: Handle 'e.error' of type
    # DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>selected_user_id</code> | <code>str</code> | This can either be the UUID of the account, surrounded by curly-braces, for<br>example: `{account UUID}`, OR an Atlassian Account ID. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories(*, after: str | None = None, role: Role1OrStr | None = None, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedRepositories</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.get_repositories()
    # TODO: Handle 'response' of type PaginatedRepositories
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.repositories.get_repositories()
    # TODO: Handle 'response' of type PaginatedRepositories
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>after</code> | <code>str \| None</code> | Filter the results to include only repositories created on or<br>after this [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601)<br> timestamp. Example: `YYYY-MM-DDTHH:mm:ss.sssZ`<br>**Default**: <code>None</code> |
| <code>role</code> | <code>[Role1OrStr](bitbucket/models/enums/role1.py) \| None</code> | Filters the result based on the authenticated user's role on each repository.<br><br>* **member**: returns repositories to which the user has explicit read access<br>* **contributor**: returns repositories to which the user has explicit write access<br>* **admin**: returns repositories to which the user has explicit administrator access<br>* **owner**: returns all repositories owned by the current user<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>`role` parameter must also be specified.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Field by which the results should be sorted as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositories](bitbucket/models/paginated_repositories.py)</code> -- All public repositories.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace(workspace: str, *, role: Role1OrStr | None = None, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedRepositories</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.get_repositories_by_workspace("some example string")
    # TODO: Handle 'response' of type PaginatedRepositories
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.get_repositories_by_workspace("some example string")
    # TODO: Handle 'response' of type PaginatedRepositories
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>role</code> | <code>[Role1OrStr](bitbucket/models/enums/role1.py) \| None</code> | Filters the result based on the authenticated user's role on each repository.<br><br>* **member**: returns repositories to which the user has explicit read access<br>* **contributor**: returns repositories to which the user has explicit write access<br>* **admin**: returns repositories to which the user has explicit administrator access<br>* **owner**: returns all repositories owned by the current user<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Field by which the results should be sorted as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositories](bitbucket/models/paginated_repositories.py)</code> -- The repositories owned by the specified account.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceErrorBody](bitbucket/errors/get_repositories_by_workspace_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 410 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> RepositoryBitbucketRepositoriesApi</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.get_repositories_by_workspace_by_repo_slug(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RepositoryBitbucketRepositoriesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.get_repositories_by_workspace_by_repo_slug(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RepositoryBitbucketRepositoriesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryBitbucketRepositoriesApi](bitbucket/models/repository_bitbucket_repositories_api.py)</code> -- The repository object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path(commit: str, path: str, repo_slug: str, workspace: str, *, renames: str | None = None, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedFiles</code></summary>

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

``
$ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\
'?fields=values.next,values.path,values.commit.date&q=commit.date<=2011-05-18'
``

In the response you can see that the file was renamed to `README.rst`
by the commit made on 2011-05-16, and was previously named `README.txt`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.repositories.get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedFiles
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedFiles
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>path</code> | <code>str</code> | Path to the file. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>renames</code> | <code>str \| None</code> | When `true`, Bitbucket will follow the history of the file across<br>renames (this is the default behavior). This can be turned off by<br>specifying `false`.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Name of a response property sort the result by as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedFiles](bitbucket/models/paginated_files.py)</code> -- A paginated list of commits that modified the specified file

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPathErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_forks(repo_slug: str, workspace: str, *, role: Role1OrStr | None = None, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedRepositories</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.get_repositories_by_workspace_by_repo_slug_forks(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedRepositories
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.repositories.get_repositories_by_workspace_by_repo_slug_forks(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedRepositories
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>role</code> | <code>[Role1OrStr](bitbucket/models/enums/role1.py) \| None</code> | Filters the result based on the authenticated user's role on each repository.<br><br>* **member**: returns repositories to which the user has explicit read access<br>* **contributor**: returns repositories to which the user has explicit write access<br>* **admin**: returns repositories to which the user has explicit administrator access<br>* **owner**: returns all repositories owned by the current user<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Field by which the results should be sorted as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositories](bitbucket/models/paginated_repositories.py)</code> -- All forks.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_hooks(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedWebhookSubscriptions</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.get_repositories_by_workspace_by_repo_slug_hooks(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedWebhookSubscriptions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugHooksErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.get_repositories_by_workspace_by_repo_slug_hooks(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedWebhookSubscriptions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugHooksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWebhookSubscriptions](bitbucket/models/paginated_webhook_subscriptions.py)</code> -- The paginated list of installed webhooks.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugHooksErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_hooks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_hooks_by_uid(repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookSubscription</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.get_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.get_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>uid</code> | <code>str</code> | Installed webhook's ID |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](bitbucket/models/webhook_subscription.py)</code> -- The webhook subscription object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_hooks_by_uid_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_override_settings(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> RepositoryInheritanceState</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.repositories.get_repositories_by_workspace_by_repo_slug_override_settings(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RepositoryInheritanceState
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.get_repositories_by_workspace_by_repo_slug_override_settings(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RepositoryInheritanceState
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryInheritanceState](bitbucket/models/repository_inheritance_state.py)</code> -- The repository setting inheritance state

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_override_settings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_permissions_config_groups(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedRepositoryGroupPermissions</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.get_repositories_by_workspace_by_repo_slug_permissions_config_groups(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedRepositoryGroupPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.get_repositories_by_workspace_by_repo_slug_permissions_config_groups(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedRepositoryGroupPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositoryGroupPermissions](bitbucket/models/paginated_repository_group_permissions.py)</code> -- Paginated of explicit group permissions on the repository.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_permissions_config_groups_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(group_slug: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> RepositoryGroupPermission</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RepositoryGroupPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.repositories.get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RepositoryGroupPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_slug</code> | <code>str</code> | Slug of the requested group. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryGroupPermission](bitbucket/models/repository_group_permission.py)</code> -- Group permission for group slug and repository

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_permissions_config_users(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedRepositoryUserPermissions</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.get_repositories_by_workspace_by_repo_slug_permissions_config_users(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedRepositoryUserPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.get_repositories_by_workspace_by_repo_slug_permissions_config_users(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedRepositoryUserPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositoryUserPermissions](bitbucket/models/paginated_repository_user_permissions.py)</code> -- Paginated of explicit user permissions on the repository.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_permissions_config_users_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(repo_slug: str, selected_user_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> RepositoryUserPermission</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RepositoryUserPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.repositories.get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RepositoryUserPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>selected_user_id</code> | <code>str</code> | This can either be the UUID of the account, surrounded by curly-braces, for<br>example: `{account UUID}`, OR an Atlassian Account ID. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryUserPermission](bitbucket/models/repository_user_permission.py)</code> -- Explicit user permission for user and repository

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_src(repo_slug: str, workspace: str, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedTreeEntry</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.get_repositories_by_workspace_by_repo_slug_src(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedTreeEntry
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugSrcErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.get_repositories_by_workspace_by_repo_slug_src(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedTreeEntry
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugSrcErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>format_</code> | <code>[FormatOrStr](bitbucket/models/enums/format.py) \| None</code> | Instead of returning the file's contents, return the (json) meta data for it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedTreeEntry](bitbucket/models/paginated_tree_entry.py)</code> -- If the path matches a file, then the raw contents of the file are
returned (unless the `format=meta` query parameter was provided,
in which case a json document containing the file's meta data is
returned). If the path matches a directory, then a paginated
list of file and directory entries is returned (if the
`format=meta` query parameter was provided, then the json document
containing the directory's meta data is returned).

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugSrcErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_src_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path(commit: str, path: str, repo_slug: str, workspace: str, *, format_: Format1OrStr | None = None, q: str | None = None, sort: str | None = None, max_depth: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedTreeEntry</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedTreeEntry
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedTreeEntry
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>path</code> | <code>str</code> | Path to the file. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>format_</code> | <code>[Format1OrStr](bitbucket/models/enums/format1.py) \| None</code> | If 'meta' is provided, returns the (json) meta data for the contents of the file.  If 'rendered' is provided, returns the contents of a non-binary file in HTML-formatted rendered markup. The 'rendered' option only supports these filetypes: `.md`, `.markdown`, `.mkd`, `.mkdn`, `.mdown`, `.text`, `.rst`, and `.textile`. Since Git does not generally track what text encoding scheme is used, this endpoint attempts to detect the most appropriate character encoding. While usually correct, determining the character encoding can be ambiguous which in exceptional cases can lead to misinterpretation of the characters. As such, the raw element in the response object should not be treated as equivalent to the file's actual contents.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Optional filter expression as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Optional sorting parameter as per [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results).<br>**Default**: <code>None</code> |
| <code>max_depth</code> | <code>int \| None</code> | If provided, returns the contents of the repository and its subdirectories recursively until the specified max_depth of nested directories. When omitted, this defaults to 1.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedTreeEntry](bitbucket/models/paginated_tree_entry.py)</code> -- If the path matches a file, then the raw contents of the file are
returned.  If the `format=meta` query parameter is provided,
a json document containing the file's meta data is
returned.  If the `format=rendered` query parameter is provided,
the contents of the file in HTML-formated rendered markup is returned.
If the path matches a directory, then a paginated
list of file and directory entries is returned (if the
`format=meta` query parameter was provided, then the json document
containing the directory's meta data is returned.)

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPathErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 555 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_watchers(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedAccounts</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.get_repositories_by_workspace_by_repo_slug_watchers(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedAccounts
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.repositories.get_repositories_by_workspace_by_repo_slug_watchers(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedAccounts
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedAccounts](bitbucket/models/paginated_accounts.py)</code> -- A paginated list of all the watchers on the specified repository.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_permissions_repositories(*, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedRepositoryPermissions</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.get_user_permissions_repositories()
    # TODO: Handle 'response' of type PaginatedRepositoryPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.repositories.get_user_permissions_repositories()
    # TODO: Handle 'response' of type PaginatedRepositoryPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Name of a response property sort the result by as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositoryPermissions](bitbucket/models/paginated_repository_permissions.py)</code> -- Repository permissions for the repositories a caller has explicit access to.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_workspaces_by_workspace_permissions_repositories(workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedRepositoryPermissions</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.get_user_workspaces_by_workspace_permissions_repositories("some example string")
    # TODO: Handle 'response' of type PaginatedRepositoryPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserWorkspacesByWorkspacePermissionsRepositoriesErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.get_user_workspaces_by_workspace_permissions_repositories(
        "some example string"
    )
    # TODO: Handle 'response' of type PaginatedRepositoryPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserWorkspacesByWorkspacePermissionsRepositoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Name of a response property sort the result by as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositoryPermissions](bitbucket/models/paginated_repository_permissions.py)</code> -- The list of repository permissions for the authenticated user in the specified workspace.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetUserWorkspacesByWorkspacePermissionsRepositoriesErrorBody](bitbucket/errors/get_user_workspaces_by_workspace_permissions_repositories_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug(repo_slug: str, workspace: str, *, body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None, request_options: RequestOptionsOrDict | None = None) -> RepositoryBitbucketRepositoriesApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new repository.

Note: In order to set the project for the newly created repository,
pass in either the project key or the project UUID as part of the
request body as shown in the examples below:

``
$ curl -X POST -H "Content-Type: application/json" -d '{
"scm": "git",
"project": {
"key": "MARS"
}
}' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
``

or

``
$ curl -X POST -H "Content-Type: application/json" -d '{
"scm": "git",
"project": {
"key": "{ba516952-992a-4c2d-acbd-17d502922f96}"
}
}' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
``

The project must be assigned for all repositories. If the project is not provided,
the repository is automatically assigned to the oldest project in the workspace.

Note: In the examples above, the workspace ID `teamsinspace`,
and/or the repository name `hablanding` can be replaced by UUIDs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.repositories.post_repositories_by_workspace_by_repo_slug(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RepositoryBitbucketRepositoriesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.post_repositories_by_workspace_by_repo_slug(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RepositoryBitbucketRepositoriesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[RepositoryBitbucketRepositoriesApi](bitbucket/models/repository_bitbucket_repositories_api.py) \| [RepositoryBitbucketRepositoriesApiDict](bitbucket/models/repository_bitbucket_repositories_api.py) \| None</code> | The repository that is to be created. Note that most object elements are optional. Elements "owner" and "full_name" are ignored as the URL implies them.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryBitbucketRepositoriesApi](bitbucket/models/repository_bitbucket_repositories_api.py)</code> -- The newly created repository.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_forks(repo_slug: str, workspace: str, *, body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None, request_options: RequestOptionsOrDict | None = None) -> RepositoryBitbucketRepositoriesApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new fork of the specified repository.

#### Forking a repository

To create a fork, specify the workspace explicitly as part of the
request body:

``
$ curl -X POST -u jdoe https://api.bitbucket.org/2.0/repositories/atlassian/bbql/forks \
-H 'Content-Type: application/json' -d '{
"name": "bbql_fork",
"workspace": {
"slug": "atlassian"
}
}'
``

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

**Sync**

```python
try:
    response = client.repositories.post_repositories_by_workspace_by_repo_slug_forks(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RepositoryBitbucketRepositoriesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.repositories.post_repositories_by_workspace_by_repo_slug_forks(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RepositoryBitbucketRepositoriesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[RepositoryBitbucketRepositoriesApi](bitbucket/models/repository_bitbucket_repositories_api.py) \| [RepositoryBitbucketRepositoriesApiDict](bitbucket/models/repository_bitbucket_repositories_api.py) \| None</code> | A repository object. This can be left blank.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryBitbucketRepositoriesApi](bitbucket/models/repository_bitbucket_repositories_api.py)</code> -- The newly created fork.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_hooks(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookSubscription</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook on the specified repository.

Example:

``
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
``

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

**Sync**

```python
try:
    response = client.repositories.post_repositories_by_workspace_by_repo_slug_hooks(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugHooksErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.post_repositories_by_workspace_by_repo_slug_hooks(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugHooksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](bitbucket/models/webhook_subscription.py)</code> -- If the webhook was registered successfully.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugHooksErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_hooks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_src(repo_slug: str, workspace: str, *, message: str | None = None, author: str | None = None, parents: str | None = None, files: str | None = None, branch: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.repositories.post_repositories_by_workspace_by_repo_slug_src("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugSrcErrorBody
```

**Async**

```python
try:
    await async_client.repositories.post_repositories_by_workspace_by_repo_slug_src(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugSrcErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>message</code> | <code>str \| None</code> | The commit message. When omitted, Bitbucket uses a canned string.<br>**Default**: <code>None</code> |
| <code>author</code> | <code>str \| None</code> | The raw string to be used as the new commit's author.<br>This string follows the format<br>`Erik van Zijst <evzijst@atlassian.com>`.<br><br>When omitted, Bitbucket uses the authenticated user's<br>full/display name and primary email address. Commits cannot<br>be created anonymously.<br>**Default**: <code>None</code> |
| <code>parents</code> | <code>str \| None</code> | #### Deprecation Notice:<br>Support for specifying multiple parent<br>commits is deprecated and will be removed in a future release.<br>Only a single SHA1 is accepted.<br><br>A SHA1 of the commit that should be the parent of the newly created<br>commit. When omitted, the new commit will inherit from and<br>become a child of the main branch's tip/HEAD commit.<br>**Default**: <code>None</code> |
| <code>files</code> | <code>str \| None</code> | Optional field that declares the files that the request is<br>manipulating. When adding a new file to a repo, or when<br>overwriting an existing file, the client can just upload<br>the full contents of the file in a normal form field and<br>the use of this `files` meta data field is redundant.<br>However, when the `files` field contains a file path that<br>does not have a corresponding, identically-named form<br>field, then Bitbucket interprets that as the client wanting<br>to replace the named file with the null set and the file is<br>deleted instead.<br><br>Paths in the repo that are referenced in neither files nor<br>an individual file field, remain unchanged and carry over<br>from the parent to the new commit.<br><br>This API does not support renaming as an explicit feature.<br>To rename a file, simply delete it and recreate it under<br>the new name in the same commit.<br>**Default**: <code>None</code> |
| <code>branch</code> | <code>str \| None</code> | The name of the branch that the new commit should be<br>created on. When omitted, the commit will be created on top<br>of the main branch and will become the main branch's new<br>head.<br><br>When a branch name is provided that already exists in the<br>repo, then the commit will be created on top of that<br>branch. In this case, *if* a parent SHA1 was also provided,<br>then it is asserted that the parent is the branch's<br>tip/HEAD at the time the request is made. When this is not<br>the case, a 409 is returned.<br><br>When a new branch name is specified (that does not already<br>exist in the repo), and no parent SHA1s are provided, then<br>the new commit will inherit from the current main branch's<br>tip/HEAD commit, but not advance the main branch. The new<br>commit will be the new branch. When the request *also*<br>specifies a parent SHA1, then the new commit and branch<br>are created directly on top of the parent commit,<br>regardless of the state of the main branch.<br><br>When a branch name is not specified, but a parent SHA1 is<br>provided, then Bitbucket asserts that it represents the<br>main branch's current HEAD/tip, or a 409 is returned.<br><br>When a branch name is not specified and the repo is empty,<br>the new commit will become the repo's root commit and will<br>be on the main branch.<br><br>When a branch name is specified and the repo is empty, the<br>new commit will become the repo's root commit and also<br>define the repo's main branch going forward.<br><br>This API cannot be used to create additional root commits<br>in non-empty repos.<br><br>The branch field cannot be repeated.<br><br>As a side effect, this API can be used to create a new<br>branch without modifying any files, by specifying a new<br>branch name in this field, together with `parents`, but<br>omitting the `files` fields, while not sending any files.<br>This will create a new commit and branch with the same<br>contents as the first parent. The diff of this commit<br>against its first parent will be empty.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugSrcErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_src_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug(repo_slug: str, workspace: str, *, body: RepositoryBitbucketRepositoriesApi | RepositoryBitbucketRepositoriesApiDict | None = None, request_options: RequestOptionsOrDict | None = None) -> RepositoryBitbucketRepositoriesApi</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.put_repositories_by_workspace_by_repo_slug(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RepositoryBitbucketRepositoriesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.put_repositories_by_workspace_by_repo_slug(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RepositoryBitbucketRepositoriesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[RepositoryBitbucketRepositoriesApi](bitbucket/models/repository_bitbucket_repositories_api.py) \| [RepositoryBitbucketRepositoriesApiDict](bitbucket/models/repository_bitbucket_repositories_api.py) \| None</code> | The repository that is to be updated.<br><br>Note that the elements "owner" and "full_name" are ignored since the<br>URL implies them.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryBitbucketRepositoriesApi](bitbucket/models/repository_bitbucket_repositories_api.py)</code> -- The existing repository has been updated

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_hooks_by_uid(repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookSubscription</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.put_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.put_repositories_by_workspace_by_repo_slug_hooks_by_uid(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>uid</code> | <code>str</code> | Installed webhook's ID |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](bitbucket/models/webhook_subscription.py)</code> -- The webhook subscription object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_hooks_by_uid_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_override_settings(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.repositories.put_repositories_by_workspace_by_repo_slug_override_settings(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody
```

**Async**

```python
try:
    await async_client.repositories.put_repositories_by_workspace_by_repo_slug_override_settings(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugOverrideSettingsErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_override_settings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(group_slug: str, repo_slug: str, workspace: str, body: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict, *, request_options: RequestOptionsOrDict | None = None) -> RepositoryGroupPermission</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        "some example string",
        "some example string",
        "some example string",
        BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema(permission=Permission2.READ),
    )
    # TODO: Handle 'response' of type RepositoryGroupPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.repositories.put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug(
        "some example string",
        "some example string",
        "some example string",
        BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema(permission=Permission2.READ),
    )
    # TODO: Handle 'response' of type RepositoryGroupPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_slug</code> | <code>str</code> | Slug of the requested group. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema](bitbucket/models/bitbucket_apps_permissions_serializers_repo_permission_update_schema.py) \| [BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict](bitbucket/models/bitbucket_apps_permissions_serializers_repo_permission_update_schema.py)</code> | The permission to grant |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryGroupPermission](bitbucket/models/repository_group_permission.py)</code> -- Group permission updated

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_permissions_config_groups_by_group_slug_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(repo_slug: str, selected_user_id: str, workspace: str, body: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema | BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict, *, request_options: RequestOptionsOrDict | None = None) -> RepositoryUserPermission</code></summary>

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

**Sync**

```python
try:
    response = client.repositories.put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        "some example string",
        "some example string",
        "some example string",
        BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema(permission=Permission2.READ),
    )
    # TODO: Handle 'response' of type RepositoryUserPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody
    ...
```

**Async**

```python
try:
    response = await async_client.repositories.put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id(
        "some example string",
        "some example string",
        "some example string",
        BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema(permission=Permission2.READ),
    )
    # TODO: Handle 'response' of type RepositoryUserPermission
except ApiError as e:
    # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody
    ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>selected_user_id</code> | <code>str</code> | This can either be the UUID of the account, surrounded by curly-braces, for<br>example: `{account UUID}`, OR an Atlassian Account ID. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema](bitbucket/models/bitbucket_apps_permissions_serializers_repo_permission_update_schema.py) \| [BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchemaDict](bitbucket/models/bitbucket_apps_permissions_serializers_repo_permission_update_schema.py)</code> | The permission to grant |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepositoryUserPermission](bitbucket/models/repository_user_permission.py)</code> -- Explicit user permission updated

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_permissions_config_users_by_selected_user_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Ssh

> Source: [Ssh](bitbucket/apis/ssh.py)

<details>
<summary><code>def delete_users_by_selected_user_ssh_keys_by_key_id(key_id: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.ssh.delete_users_by_selected_user_ssh_keys_by_key_id("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUsersBySelectedUserSshKeysByKeyIdErrorBody
```

**Async**

```python
try:
    await async_client.ssh.delete_users_by_selected_user_ssh_keys_by_key_id(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUsersBySelectedUserSshKeysByKeyIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key_id</code> | <code>str</code> | The SSH key's UUID value. |
| <code>selected_user</code> | <code>str</code> | This can either be an Atlassian Account ID OR the UUID of the account,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteUsersBySelectedUserSshKeysByKeyIdErrorBody](bitbucket/errors/delete_users_by_selected_user_ssh_keys_by_key_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| 403 | <code>[RawError](bitbucket/core/results.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_users_by_selected_user_ssh_keys(selected_user: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedSshUserKeys</code></summary>

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

**Sync**

```python
try:
    response = client.ssh.get_users_by_selected_user_ssh_keys("some example string")
    # TODO: Handle 'response' of type PaginatedSshUserKeys
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsersBySelectedUserSshKeysErrorBody
```

**Async**

```python
try:
    response = await async_client.ssh.get_users_by_selected_user_ssh_keys("some example string")
    # TODO: Handle 'response' of type PaginatedSshUserKeys
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsersBySelectedUserSshKeysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | This can either be an Atlassian Account ID OR the UUID of the account,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedSshUserKeys](bitbucket/models/paginated_ssh_user_keys.py)</code> -- A list of the SSH keys associated with the account.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetUsersBySelectedUserSshKeysErrorBody](bitbucket/errors/get_users_by_selected_user_ssh_keys_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_users_by_selected_user_ssh_keys_by_key_id(key_id: str, selected_user: str, *, request_options: RequestOptionsOrDict | None = None) -> SshAccountKey</code></summary>

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

**Sync**

```python
try:
    response = client.ssh.get_users_by_selected_user_ssh_keys_by_key_id("some example string", "some example string")
    # TODO: Handle 'response' of type SshAccountKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsersBySelectedUserSshKeysByKeyIdErrorBody
```

**Async**

```python
try:
    response = await async_client.ssh.get_users_by_selected_user_ssh_keys_by_key_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SshAccountKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsersBySelectedUserSshKeysByKeyIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key_id</code> | <code>str</code> | The SSH key's UUID value. |
| <code>selected_user</code> | <code>str</code> | This can either be an Atlassian Account ID OR the UUID of the account,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SshAccountKey](bitbucket/models/ssh_account_key.py)</code> -- The specific SSH key matching the user and UUID

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetUsersBySelectedUserSshKeysByKeyIdErrorBody](bitbucket/errors/get_users_by_selected_user_ssh_keys_by_key_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[RawError](bitbucket/core/results.py)</code> |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_users_by_selected_user_ssh_keys(selected_user: str, *, expires_on: str | None = None, body: SshAccountKey | SshAccountKeyDict | None = None, request_options: RequestOptionsOrDict | None = None) -> SshAccountKey</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new SSH public key to the specified user account and returns the resulting key.

Example:

``
$ curl -X POST -H "Content-Type: application/json" -d '{"key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ssh.post_users_by_selected_user_ssh_keys("some example string")
    # TODO: Handle 'response' of type SshAccountKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostUsersBySelectedUserSshKeysErrorBody
```

**Async**

```python
try:
    response = await async_client.ssh.post_users_by_selected_user_ssh_keys("some example string")
    # TODO: Handle 'response' of type SshAccountKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostUsersBySelectedUserSshKeysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | This can either be an Atlassian Account ID OR the UUID of the account,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>expires_on</code> | <code>str \| None</code> | The date or date-time of when the key will expire,<br>in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format.<br>Example: `YYYY-MM-DDTHH:mm:ss.sssZ`<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[SshAccountKey](bitbucket/models/ssh_account_key.py) \| [SshAccountKeyDict](bitbucket/models/ssh_account_key.py) \| None</code> | The new SSH key object. Note that the username property has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SshAccountKey](bitbucket/models/ssh_account_key.py)</code> -- The newly created SSH key.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostUsersBySelectedUserSshKeysErrorBody](bitbucket/errors/post_users_by_selected_user_ssh_keys_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| 403 | <code>[RawError](bitbucket/core/results.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_users_by_selected_user_ssh_keys_by_key_id(key_id: str, selected_user: str, *, body: SshAccountKey | SshAccountKeyDict | None = None, request_options: RequestOptionsOrDict | None = None) -> SshAccountKey</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a specific SSH public key on a user's account

Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must delete and add the key again.

Example:

``
$ curl -X PUT -H "Content-Type: application/json" -d '{"label": "Work key"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ssh.put_users_by_selected_user_ssh_keys_by_key_id("some example string", "some example string")
    # TODO: Handle 'response' of type SshAccountKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutUsersBySelectedUserSshKeysByKeyIdErrorBody
```

**Async**

```python
try:
    response = await async_client.ssh.put_users_by_selected_user_ssh_keys_by_key_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SshAccountKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutUsersBySelectedUserSshKeysByKeyIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key_id</code> | <code>str</code> | The SSH key's UUID value. |
| <code>selected_user</code> | <code>str</code> | This can either be an Atlassian Account ID OR the UUID of the account,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>body</code> | <code>[SshAccountKey](bitbucket/models/ssh_account_key.py) \| [SshAccountKeyDict](bitbucket/models/ssh_account_key.py) \| None</code> | The updated SSH key object<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SshAccountKey](bitbucket/models/ssh_account_key.py)</code> -- The newly updated SSH key.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutUsersBySelectedUserSshKeysByKeyIdErrorBody](bitbucket/errors/put_users_by_selected_user_ssh_keys_by_key_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| 403 | <code>[RawError](bitbucket/core/results.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](bitbucket/apis/search.py)

<details>
<summary><code>def search_account(selected_user: str, search_query: str, *, page: int | None = 1, pagelen: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> SearchResultPage</code></summary>

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

**Sync**

```python
try:
    response = client.search.search_account("some example string", "some example string")
    # TODO: Handle 'response' of type SearchResultPage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.search.search_account("some example string", "some example string")
    # TODO: Handle 'response' of type SearchResultPage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID. |
| <code>search_query</code> | <code>str</code> | The search query |
| <code>page</code> | <code>int \| None</code> | Which page of the search results to retrieve<br>**Default**: <code>1</code> |
| <code>pagelen</code> | <code>int \| None</code> | How many search results to retrieve per page<br>**Default**: <code>10</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResultPage](bitbucket/models/search_result_page.py)</code> -- Successful search

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[SearchAccountErrorBody](bitbucket/errors/search_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_team(username: str, search_query: str, *, page: int | None = 1, pagelen: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> SearchResultPage</code></summary>

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

**Sync**

```python
try:
    response = client.search.search_team("some example string", "some example string")
    # TODO: Handle 'response' of type SearchResultPage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchTeamErrorBody
```

**Async**

```python
try:
    response = await async_client.search.search_team("some example string", "some example string")
    # TODO: Handle 'response' of type SearchResultPage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchTeamErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>str</code> | The account to search in; either the username or the UUID in curly braces |
| <code>search_query</code> | <code>str</code> | The search query |
| <code>page</code> | <code>int \| None</code> | Which page of the search results to retrieve<br>**Default**: <code>1</code> |
| <code>pagelen</code> | <code>int \| None</code> | How many search results to retrieve per page<br>**Default**: <code>10</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResultPage](bitbucket/models/search_result_page.py)</code> -- Successful search

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[SearchTeamErrorBody](bitbucket/errors/search_team_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_workspace(workspace: str, search_query: str, *, page: int | None = 1, pagelen: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> SearchResultPage</code></summary>

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

**Sync**

```python
try:
    response = client.search.search_workspace("some example string", "some example string")
    # TODO: Handle 'response' of type SearchResultPage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchWorkspaceErrorBody
```

**Async**

```python
try:
    response = await async_client.search.search_workspace("some example string", "some example string")
    # TODO: Handle 'response' of type SearchResultPage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchWorkspaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | The workspace to search in; either the slug or the UUID in curly braces |
| <code>search_query</code> | <code>str</code> | The search query |
| <code>page</code> | <code>int \| None</code> | Which page of the search results to retrieve<br>**Default**: <code>1</code> |
| <code>pagelen</code> | <code>int \| None</code> | How many search results to retrieve per page<br>**Default**: <code>10</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResultPage](bitbucket/models/search_result_page.py)</code> -- Successful search

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[SearchWorkspaceErrorBody](bitbucket/errors/search_workspace_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Snippets

> Source: [Snippets](bitbucket/apis/snippets.py)

<details>
<summary><code>def delete_snippets_by_workspace_by_encoded_id(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.snippets.delete_snippets_by_workspace_by_encoded_id("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSnippetsByWorkspaceByEncodedIdErrorBody
```

**Async**

```python
try:
    await async_client.snippets.delete_snippets_by_workspace_by_encoded_id("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSnippetsByWorkspaceByEncodedIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteSnippetsByWorkspaceByEncodedIdErrorBody](bitbucket/errors/delete_snippets_by_workspace_by_encoded_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_snippets_by_workspace_by_encoded_id_by_node_id(encoded_id: str, node_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.snippets.delete_snippets_by_workspace_by_encoded_id_by_node_id(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody
```

**Async**

```python
try:
    await async_client.snippets.delete_snippets_by_workspace_by_encoded_id_by_node_id(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>node_id</code> | <code>str</code> | A commit revision (SHA1). |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody](bitbucket/errors/delete_snippets_by_workspace_by_encoded_id_by_node_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 405 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id(comment_id: int, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.snippets.delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        1, "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody
```

**Async**

```python
try:
    await async_client.snippets.delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        1, "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>int</code> | The id of the comment. |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody](bitbucket/errors/delete_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_snippets_by_workspace_by_encoded_id_watch(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.snippets.delete_snippets_by_workspace_by_encoded_id_watch("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSnippetsByWorkspaceByEncodedIdWatchErrorBody
```

**Async**

```python
try:
    await async_client.snippets.delete_snippets_by_workspace_by_encoded_id_watch(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSnippetsByWorkspaceByEncodedIdWatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteSnippetsByWorkspaceByEncodedIdWatchErrorBody](bitbucket/errors/delete_snippets_by_workspace_by_encoded_id_watch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_snippets(*, role: RoleBitbucketSnippetsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedSnippets</code></summary>

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

**Sync**

```python
try:
    response = client.snippets.get_snippets()
    # TODO: Handle 'response' of type PaginatedSnippets
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsErrorBody
```

**Async**

```python
try:
    response = await async_client.snippets.get_snippets()
    # TODO: Handle 'response' of type PaginatedSnippets
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>role</code> | <code>[RoleBitbucketSnippetsApiOrStr](bitbucket/models/enums/role_bitbucket_snippets_api.py) \| None</code> | Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedSnippets](bitbucket/models/paginated_snippets.py)</code> -- A paginated list of snippets.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetSnippetsErrorBody](bitbucket/errors/get_snippets_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_snippets_by_workspace(workspace: str, *, role: RoleBitbucketSnippetsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedSnippets</code></summary>

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

**Sync**

```python
try:
    response = client.snippets.get_snippets_by_workspace("some example string")
    # TODO: Handle 'response' of type PaginatedSnippets
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceErrorBody
```

**Async**

```python
try:
    response = await async_client.snippets.get_snippets_by_workspace("some example string")
    # TODO: Handle 'response' of type PaginatedSnippets
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>role</code> | <code>[RoleBitbucketSnippetsApiOrStr](bitbucket/models/enums/role_bitbucket_snippets_api.py) \| None</code> | Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedSnippets](bitbucket/models/paginated_snippets.py)</code> -- A paginated list of snippets.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetSnippetsByWorkspaceErrorBody](bitbucket/errors/get_snippets_by_workspace_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_snippets_by_workspace_by_encoded_id(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Snippet</code></summary>

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

**Sync**

```python
try:
    response = client.snippets.get_snippets_by_workspace_by_encoded_id("some example string", "some example string")
    # TODO: Handle 'response' of type Snippet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdErrorBody
```

**Async**

```python
try:
    response = await async_client.snippets.get_snippets_by_workspace_by_encoded_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Snippet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Snippet](bitbucket/models/snippet.py)</code> -- The snippet object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetSnippetsByWorkspaceByEncodedIdErrorBody](bitbucket/errors/get_snippets_by_workspace_by_encoded_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 410 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_snippets_by_workspace_by_encoded_id_by_node_id(encoded_id: str, node_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Snippet</code></summary>

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

**Sync**

```python
try:
    response = client.snippets.get_snippets_by_workspace_by_encoded_id_by_node_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Snippet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody
```

**Async**

```python
try:
    response = await async_client.snippets.get_snippets_by_workspace_by_encoded_id_by_node_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Snippet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>node_id</code> | <code>str</code> | A commit revision (SHA1). |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Snippet](bitbucket/models/snippet.py)</code> -- The snippet object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody](bitbucket/errors/get_snippets_by_workspace_by_encoded_id_by_node_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path(encoded_id: str, node_id: str, path: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.snippets.get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathErrorBody
```

**Async**

```python
try:
    await async_client.snippets.get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path(
        "some example string", "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>node_id</code> | <code>str</code> | A commit revision (SHA1). |
| <code>path</code> | <code>str</code> | Path to the file. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathErrorBody](bitbucket/errors/get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_snippets_by_workspace_by_encoded_id_by_revision_diff(encoded_id: str, revision: str, workspace: str, *, path: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.snippets.get_snippets_by_workspace_by_encoded_id_by_revision_diff(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdByRevisionDiffErrorBody
```

**Async**

```python
try:
    await async_client.snippets.get_snippets_by_workspace_by_encoded_id_by_revision_diff(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdByRevisionDiffErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>revision</code> | <code>str</code> | A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like `staging..production`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>path</code> | <code>str \| None</code> | When used, only one the diff of the specified file will be returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetSnippetsByWorkspaceByEncodedIdByRevisionDiffErrorBody](bitbucket/errors/get_snippets_by_workspace_by_encoded_id_by_revision_diff_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_snippets_by_workspace_by_encoded_id_by_revision_patch(encoded_id: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.snippets.get_snippets_by_workspace_by_encoded_id_by_revision_patch(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdByRevisionPatchErrorBody
```

**Async**

```python
try:
    await async_client.snippets.get_snippets_by_workspace_by_encoded_id_by_revision_patch(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdByRevisionPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>revision</code> | <code>str</code> | A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like `staging..production`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetSnippetsByWorkspaceByEncodedIdByRevisionPatchErrorBody](bitbucket/errors/get_snippets_by_workspace_by_encoded_id_by_revision_patch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_snippets_by_workspace_by_encoded_id_comments(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedSnippetComments</code></summary>

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

**Sync**

```python
try:
    response = client.snippets.get_snippets_by_workspace_by_encoded_id_comments(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedSnippetComments
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdCommentsErrorBody
```

**Async**

```python
try:
    response = await async_client.snippets.get_snippets_by_workspace_by_encoded_id_comments(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedSnippetComments
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdCommentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedSnippetComments](bitbucket/models/paginated_snippet_comments.py)</code> -- A paginated list of snippet comments, ordered by creation date.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetSnippetsByWorkspaceByEncodedIdCommentsErrorBody](bitbucket/errors/get_snippets_by_workspace_by_encoded_id_comments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_snippets_by_workspace_by_encoded_id_comments_by_comment_id(comment_id: int, encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> SnippetComment</code></summary>

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

**Sync**

```python
try:
    response = client.snippets.get_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SnippetComment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody
```

**Async**

```python
try:
    response = await async_client.snippets.get_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        1, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SnippetComment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>int</code> | The id of the comment. |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnippetComment](bitbucket/models/snippet_comment.py)</code> -- The specified comment.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody](bitbucket/errors/get_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_snippets_by_workspace_by_encoded_id_commits(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedSnippetCommits</code></summary>

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

**Sync**

```python
try:
    response = client.snippets.get_snippets_by_workspace_by_encoded_id_commits(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedSnippetCommits
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdCommitsErrorBody
```

**Async**

```python
try:
    response = await async_client.snippets.get_snippets_by_workspace_by_encoded_id_commits(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedSnippetCommits
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdCommitsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedSnippetCommits](bitbucket/models/paginated_snippet_commits.py)</code> -- The paginated list of snippet commits.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetSnippetsByWorkspaceByEncodedIdCommitsErrorBody](bitbucket/errors/get_snippets_by_workspace_by_encoded_id_commits_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_snippets_by_workspace_by_encoded_id_commits_by_revision(encoded_id: str, revision: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> SnippetCommit</code></summary>

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

**Sync**

```python
try:
    response = client.snippets.get_snippets_by_workspace_by_encoded_id_commits_by_revision(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SnippetCommit
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionErrorBody
```

**Async**

```python
try:
    response = await async_client.snippets.get_snippets_by_workspace_by_encoded_id_commits_by_revision(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SnippetCommit
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>revision</code> | <code>str</code> | The commit's SHA1. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnippetCommit](bitbucket/models/snippet_commit.py)</code> -- The specified snippet commit.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionErrorBody](bitbucket/errors/get_snippets_by_workspace_by_encoded_id_commits_by_revision_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_snippets_by_workspace_by_encoded_id_files_by_path(encoded_id: str, path: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.snippets.get_snippets_by_workspace_by_encoded_id_files_by_path(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdFilesByPathErrorBody
```

**Async**

```python
try:
    await async_client.snippets.get_snippets_by_workspace_by_encoded_id_files_by_path(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdFilesByPathErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>path</code> | <code>str</code> | Path to the file. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetSnippetsByWorkspaceByEncodedIdFilesByPathErrorBody](bitbucket/errors/get_snippets_by_workspace_by_encoded_id_files_by_path_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_snippets_by_workspace_by_encoded_id_watch(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.snippets.get_snippets_by_workspace_by_encoded_id_watch("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdWatchErrorBody
```

**Async**

```python
try:
    await async_client.snippets.get_snippets_by_workspace_by_encoded_id_watch(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdWatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetSnippetsByWorkspaceByEncodedIdWatchErrorBody](bitbucket/errors/get_snippets_by_workspace_by_encoded_id_watch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_snippets_by_workspace_by_encoded_id_watchers(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedAccounts</code></summary>

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

**Sync**

```python
try:
    response = client.snippets.get_snippets_by_workspace_by_encoded_id_watchers(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedAccounts
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdWatchersErrorBody
```

**Async**

```python
try:
    response = await async_client.snippets.get_snippets_by_workspace_by_encoded_id_watchers(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedAccounts
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnippetsByWorkspaceByEncodedIdWatchersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedAccounts](bitbucket/models/paginated_accounts.py)</code> -- The paginated list of users watching this snippet

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetSnippetsByWorkspaceByEncodedIdWatchersErrorBody](bitbucket/errors/get_snippets_by_workspace_by_encoded_id_watchers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_snippets(body: Snippet | SnippetDict, *, request_options: RequestOptionsOrDict | None = None) -> Snippet</code></summary>

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

**Sync**

```python
try:
    response = client.snippets.post_snippets(Snippet())
    # TODO: Handle 'response' of type Snippet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostSnippetsErrorBody
```

**Async**

```python
try:
    response = await async_client.snippets.post_snippets(Snippet())
    # TODO: Handle 'response' of type Snippet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostSnippetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Snippet](bitbucket/models/snippet.py) \| [SnippetDict](bitbucket/models/snippet.py)</code> | The new snippet object. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Snippet](bitbucket/models/snippet.py)</code> -- The newly created snippet object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostSnippetsErrorBody](bitbucket/errors/post_snippets_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_snippets_by_workspace(workspace: str, body: Snippet | SnippetDict, *, request_options: RequestOptionsOrDict | None = None) -> Snippet</code></summary>

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

**Sync**

```python
try:
    response = client.snippets.post_snippets_by_workspace("some example string", Snippet())
    # TODO: Handle 'response' of type Snippet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostSnippetsByWorkspaceErrorBody
```

**Async**

```python
try:
    response = await async_client.snippets.post_snippets_by_workspace("some example string", Snippet())
    # TODO: Handle 'response' of type Snippet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostSnippetsByWorkspaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[Snippet](bitbucket/models/snippet.py) \| [SnippetDict](bitbucket/models/snippet.py)</code> | The new snippet object. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Snippet](bitbucket/models/snippet.py)</code> -- The newly created snippet object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostSnippetsByWorkspaceErrorBody](bitbucket/errors/post_snippets_by_workspace_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_snippets_by_workspace_by_encoded_id_comments(encoded_id: str, workspace: str, body: SnippetComment | SnippetCommentDict, *, request_options: RequestOptionsOrDict | None = None) -> SnippetComment</code></summary>

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

**Sync**

```python
try:
    response = client.snippets.post_snippets_by_workspace_by_encoded_id_comments(
        "some example string", "some example string", SnippetComment()
    )
    # TODO: Handle 'response' of type SnippetComment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostSnippetsByWorkspaceByEncodedIdCommentsErrorBody
```

**Async**

```python
try:
    response = await async_client.snippets.post_snippets_by_workspace_by_encoded_id_comments(
        "some example string", "some example string", SnippetComment()
    )
    # TODO: Handle 'response' of type SnippetComment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostSnippetsByWorkspaceByEncodedIdCommentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[SnippetComment](bitbucket/models/snippet_comment.py) \| [SnippetCommentDict](bitbucket/models/snippet_comment.py)</code> | The contents of the new comment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnippetComment](bitbucket/models/snippet_comment.py)</code> -- The newly created comment.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostSnippetsByWorkspaceByEncodedIdCommentsErrorBody](bitbucket/errors/post_snippets_by_workspace_by_encoded_id_comments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_snippets_by_workspace_by_encoded_id(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Snippet</code></summary>

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

**Sync**

```python
try:
    response = client.snippets.put_snippets_by_workspace_by_encoded_id("some example string", "some example string")
    # TODO: Handle 'response' of type Snippet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSnippetsByWorkspaceByEncodedIdErrorBody
```

**Async**

```python
try:
    response = await async_client.snippets.put_snippets_by_workspace_by_encoded_id(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Snippet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSnippetsByWorkspaceByEncodedIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Snippet](bitbucket/models/snippet.py)</code> -- The updated snippet object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutSnippetsByWorkspaceByEncodedIdErrorBody](bitbucket/errors/put_snippets_by_workspace_by_encoded_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_snippets_by_workspace_by_encoded_id_by_node_id(encoded_id: str, node_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> Snippet</code></summary>

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

**Sync**

```python
try:
    response = client.snippets.put_snippets_by_workspace_by_encoded_id_by_node_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Snippet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody
```

**Async**

```python
try:
    response = await async_client.snippets.put_snippets_by_workspace_by_encoded_id_by_node_id(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type Snippet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>node_id</code> | <code>str</code> | A commit revision (SHA1). |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Snippet](bitbucket/models/snippet.py)</code> -- The updated snippet object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody](bitbucket/errors/put_snippets_by_workspace_by_encoded_id_by_node_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 405 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_snippets_by_workspace_by_encoded_id_comments_by_comment_id(comment_id: int, encoded_id: str, workspace: str, body: SnippetComment | SnippetCommentDict, *, request_options: RequestOptionsOrDict | None = None) -> SnippetComment</code></summary>

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

**Sync**

```python
try:
    response = client.snippets.put_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        1, "some example string", "some example string", SnippetComment()
    )
    # TODO: Handle 'response' of type SnippetComment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody
```

**Async**

```python
try:
    response = await async_client.snippets.put_snippets_by_workspace_by_encoded_id_comments_by_comment_id(
        1, "some example string", "some example string", SnippetComment()
    )
    # TODO: Handle 'response' of type SnippetComment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>int</code> | The id of the comment. |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>body</code> | <code>[SnippetComment](bitbucket/models/snippet_comment.py) \| [SnippetCommentDict](bitbucket/models/snippet_comment.py)</code> | The contents to update the comment to. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnippetComment](bitbucket/models/snippet_comment.py)</code> -- The updated comment object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdErrorBody](bitbucket/errors/put_snippets_by_workspace_by_encoded_id_comments_by_comment_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_snippets_by_workspace_by_encoded_id_watch(encoded_id: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.snippets.put_snippets_by_workspace_by_encoded_id_watch("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSnippetsByWorkspaceByEncodedIdWatchErrorBody
```

**Async**

```python
try:
    await async_client.snippets.put_snippets_by_workspace_by_encoded_id_watch(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSnippetsByWorkspaceByEncodedIdWatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>encoded_id</code> | <code>str</code> | The snippet id. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutSnippetsByWorkspaceByEncodedIdWatchErrorBody](bitbucket/errors/put_snippets_by_workspace_by_encoded_id_watch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Source

> Source: [Source](bitbucket/apis/source.py)

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2(commit: str, path: str, repo_slug: str, workspace: str, *, renames: str | None = None, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedFiles</code></summary>

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

``
$ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\
'?fields=values.next,values.path,values.commit.date&q=commit.date<=2011-05-18'
``

In the response you can see that the file was renamed to `README.rst`
by the commit made on 2011-05-16, and was previously named `README.txt`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.source.get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedFiles
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2ErrorBody
```

**Async**

```python
try:
    response = await async_client.source.get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedFiles
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>path</code> | <code>str</code> | Path to the file. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>renames</code> | <code>str \| None</code> | When `true`, Bitbucket will follow the history of the file across<br>renames (this is the default behavior). This can be turned off by<br>specifying `false`.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Name of a response property sort the result by as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedFiles](bitbucket/models/paginated_files.py)</code> -- A paginated list of commits that modified the specified file

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2ErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_filehistory_by_commit_by_path2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_src2(repo_slug: str, workspace: str, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedTreeEntry</code></summary>

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

**Sync**

```python
try:
    response = client.source.get_repositories_by_workspace_by_repo_slug_src2(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedTreeEntry
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody
```

**Async**

```python
try:
    response = await async_client.source.get_repositories_by_workspace_by_repo_slug_src2(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedTreeEntry
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>format_</code> | <code>[FormatOrStr](bitbucket/models/enums/format.py) \| None</code> | Instead of returning the file's contents, return the (json) meta data for it.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedTreeEntry](bitbucket/models/paginated_tree_entry.py)</code> -- If the path matches a file, then the raw contents of the file are
returned (unless the `format=meta` query parameter was provided,
in which case a json document containing the file's meta data is
returned). If the path matches a directory, then a paginated
list of file and directory entries is returned (if the
`format=meta` query parameter was provided, then the json document
containing the directory's meta data is returned).

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_src2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2(commit: str, path: str, repo_slug: str, workspace: str, *, format_: Format1OrStr | None = None, q: str | None = None, sort: str | None = None, max_depth: int | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedTreeEntry</code></summary>

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

**Sync**

```python
try:
    response = client.source.get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedTreeEntry
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2ErrorBody
```

**Async**

```python
try:
    response = await async_client.source.get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedTreeEntry
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commit</code> | <code>str</code> | The commit's SHA1. |
| <code>path</code> | <code>str</code> | Path to the file. |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>format_</code> | <code>[Format1OrStr](bitbucket/models/enums/format1.py) \| None</code> | If 'meta' is provided, returns the (json) meta data for the contents of the file.  If 'rendered' is provided, returns the contents of a non-binary file in HTML-formatted rendered markup. The 'rendered' option only supports these filetypes: `.md`, `.markdown`, `.mkd`, `.mkdn`, `.mdown`, `.text`, `.rst`, and `.textile`. Since Git does not generally track what text encoding scheme is used, this endpoint attempts to detect the most appropriate character encoding. While usually correct, determining the character encoding can be ambiguous which in exceptional cases can lead to misinterpretation of the characters. As such, the raw element in the response object should not be treated as equivalent to the file's actual contents.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Optional filter expression as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Optional sorting parameter as per [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results).<br>**Default**: <code>None</code> |
| <code>max_depth</code> | <code>int \| None</code> | If provided, returns the contents of the repository and its subdirectories recursively until the specified max_depth of nested directories. When omitted, this defaults to 1.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedTreeEntry](bitbucket/models/paginated_tree_entry.py)</code> -- If the path matches a file, then the raw contents of the file are
returned.  If the `format=meta` query parameter is provided,
a json document containing the file's meta data is
returned.  If the `format=rendered` query parameter is provided,
the contents of the file in HTML-formated rendered markup is returned.
If the path matches a directory, then a paginated
list of file and directory entries is returned (if the
`format=meta` query parameter was provided, then the json document
containing the directory's meta data is returned.)

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2ErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_src_by_commit_by_path2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 555 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_src2(repo_slug: str, workspace: str, *, message: str | None = None, author: str | None = None, parents: str | None = None, files: str | None = None, branch: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.source.post_repositories_by_workspace_by_repo_slug_src2("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody
```

**Async**

```python
try:
    await async_client.source.post_repositories_by_workspace_by_repo_slug_src2(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>message</code> | <code>str \| None</code> | The commit message. When omitted, Bitbucket uses a canned string.<br>**Default**: <code>None</code> |
| <code>author</code> | <code>str \| None</code> | The raw string to be used as the new commit's author.<br>This string follows the format<br>`Erik van Zijst <evzijst@atlassian.com>`.<br><br>When omitted, Bitbucket uses the authenticated user's<br>full/display name and primary email address. Commits cannot<br>be created anonymously.<br>**Default**: <code>None</code> |
| <code>parents</code> | <code>str \| None</code> | #### Deprecation Notice:<br>Support for specifying multiple parent<br>commits is deprecated and will be removed in a future release.<br>Only a single SHA1 is accepted.<br><br>A SHA1 of the commit that should be the parent of the newly created<br>commit. When omitted, the new commit will inherit from and<br>become a child of the main branch's tip/HEAD commit.<br>**Default**: <code>None</code> |
| <code>files</code> | <code>str \| None</code> | Optional field that declares the files that the request is<br>manipulating. When adding a new file to a repo, or when<br>overwriting an existing file, the client can just upload<br>the full contents of the file in a normal form field and<br>the use of this `files` meta data field is redundant.<br>However, when the `files` field contains a file path that<br>does not have a corresponding, identically-named form<br>field, then Bitbucket interprets that as the client wanting<br>to replace the named file with the null set and the file is<br>deleted instead.<br><br>Paths in the repo that are referenced in neither files nor<br>an individual file field, remain unchanged and carry over<br>from the parent to the new commit.<br><br>This API does not support renaming as an explicit feature.<br>To rename a file, simply delete it and recreate it under<br>the new name in the same commit.<br>**Default**: <code>None</code> |
| <code>branch</code> | <code>str \| None</code> | The name of the branch that the new commit should be<br>created on. When omitted, the commit will be created on top<br>of the main branch and will become the main branch's new<br>head.<br><br>When a branch name is provided that already exists in the<br>repo, then the commit will be created on top of that<br>branch. In this case, *if* a parent SHA1 was also provided,<br>then it is asserted that the parent is the branch's<br>tip/HEAD at the time the request is made. When this is not<br>the case, a 409 is returned.<br><br>When a new branch name is specified (that does not already<br>exist in the repo), and no parent SHA1s are provided, then<br>the new commit will inherit from the current main branch's<br>tip/HEAD commit, but not advance the main branch. The new<br>commit will be the new branch. When the request *also*<br>specifies a parent SHA1, then the new commit and branch<br>are created directly on top of the parent commit,<br>regardless of the state of the main branch.<br><br>When a branch name is not specified, but a parent SHA1 is<br>provided, then Bitbucket asserts that it represents the<br>main branch's current HEAD/tip, or a 409 is returned.<br><br>When a branch name is not specified and the repo is empty,<br>the new commit will become the repo's root commit and will<br>be on the main branch.<br><br>When a branch name is specified and the repo is empty, the<br>new commit will become the repo's root commit and also<br>define the repo's main branch going forward.<br><br>This API cannot be used to create additional root commits<br>in non-empty repos.<br><br>The branch field cannot be repeated.<br><br>As a side effect, this API can be used to create a new<br>branch without modifying any files, by specifying a new<br>branch name in this field, together with `parents`, but<br>omitting the `files` fields, while not sending any files.<br>This will create a new commit and branch with the same<br>contents as the first parent. The diff of this commit<br>against its first parent will be empty.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_src2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](bitbucket/apis/users.py)

<details>
<summary><code>def get_user(*, request_options: RequestOptionsOrDict | None = None) -> Account</code></summary>

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

**Sync**

```python
try:
    response = client.users.get_user()
    # TODO: Handle 'response' of type Account
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.get_user()
    # TODO: Handle 'response' of type Account
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Account](bitbucket/models/account.py)</code> -- The current user.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetUserErrorBody](bitbucket/errors/get_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_emails(*, request_options: RequestOptionsOrDict | None = None) -> Error</code></summary>

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

**Sync**

```python
try:
    response = client.users.get_user_emails()
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.users.get_user_emails()
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Error](bitbucket/models/error.py)</code> -- Unexpected error.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_emails_by_email(email: str, *, request_options: RequestOptionsOrDict | None = None) -> Error</code></summary>

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

**Sync**

```python
try:
    response = client.users.get_user_emails_by_email("some example string")
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.users.get_user_emails_by_email("some example string")
    # TODO: Handle 'response' of type Error
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>str</code> | Email address of the user. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Error](bitbucket/models/error.py)</code> -- Unexpected error.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_users_by_selected_user(selected_user: str, *, request_options: RequestOptionsOrDict | None = None) -> Account</code></summary>

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

**Sync**

```python
try:
    response = client.users.get_users_by_selected_user("some example string")
    # TODO: Handle 'response' of type Account
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsersBySelectedUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.get_users_by_selected_user("some example string")
    # TODO: Handle 'response' of type Account
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUsersBySelectedUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | This can either be an Atlassian Account ID OR the UUID of the account,<br>surrounded by curly-braces, for example: `{account UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Account](bitbucket/models/account.py)</code> -- The user object

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetUsersBySelectedUserErrorBody](bitbucket/errors/get_users_by_selected_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](bitbucket/apis/webhooks_api.py)

<details>
<summary><code>def delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2(repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.webhooks_api.delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody
```

**Async**

```python
try:
    await async_client.webhooks_api.delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        "some example string", "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>uid</code> | <code>str</code> | Installed webhook's ID |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody](bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_workspaces_by_workspace_hooks_by_uid(uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.webhooks_api.delete_workspaces_by_workspace_hooks_by_uid("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWorkspacesByWorkspaceHooksByUidErrorBody
```

**Async**

```python
try:
    await async_client.webhooks_api.delete_workspaces_by_workspace_hooks_by_uid(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWorkspacesByWorkspaceHooksByUidErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>str</code> | Installed webhook's ID |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteWorkspacesByWorkspaceHooksByUidErrorBody](bitbucket/errors/delete_workspaces_by_workspace_hooks_by_uid_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_hook_events(*, request_options: RequestOptionsOrDict | None = None) -> SubjectTypes</code></summary>

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

**Sync**

```python
try:
    response = client.webhooks_api.get_hook_events()
    # TODO: Handle 'response' of type SubjectTypes
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_hook_events()
    # TODO: Handle 'response' of type SubjectTypes
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubjectTypes](bitbucket/models/subject_types.py)</code> -- A mapping of resource/subject types pointing to their individual event types.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[RawError](bitbucket/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_hook_events_by_subject_type(subject_type: SubjectType1OrStr, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedHookEvents</code></summary>

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

**Sync**

```python
try:
    response = client.webhooks_api.get_hook_events_by_subject_type(SubjectType1.REPOSITORY)
    # TODO: Handle 'response' of type PaginatedHookEvents
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHookEventsBySubjectTypeErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_hook_events_by_subject_type(SubjectType1.REPOSITORY)
    # TODO: Handle 'response' of type PaginatedHookEvents
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetHookEventsBySubjectTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subject_type</code> | <code>[SubjectType1OrStr](bitbucket/models/enums/subject_type1.py)</code> | A resource or subject type. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedHookEvents](bitbucket/models/paginated_hook_events.py)</code> -- A paginated list of webhook types available to subscribe on.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetHookEventsBySubjectTypeErrorBody](bitbucket/errors/get_hook_events_by_subject_type_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_hooks2(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedWebhookSubscriptions</code></summary>

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

**Sync**

```python
try:
    response = client.webhooks_api.get_repositories_by_workspace_by_repo_slug_hooks2(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedWebhookSubscriptions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_repositories_by_workspace_by_repo_slug_hooks2(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedWebhookSubscriptions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWebhookSubscriptions](bitbucket/models/paginated_webhook_subscriptions.py)</code> -- The paginated list of installed webhooks.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_hooks2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repositories_by_workspace_by_repo_slug_hooks_by_uid2(repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookSubscription</code></summary>

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

**Sync**

```python
try:
    response = client.webhooks_api.get_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>uid</code> | <code>str</code> | Installed webhook's ID |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](bitbucket/models/webhook_subscription.py)</code> -- The webhook subscription object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody](bitbucket/errors/get_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_hooks(workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedWebhookSubscriptions</code></summary>

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

**Sync**

```python
try:
    response = client.webhooks_api.get_workspaces_by_workspace_hooks("some example string")
    # TODO: Handle 'response' of type PaginatedWebhookSubscriptions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceHooksErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_workspaces_by_workspace_hooks("some example string")
    # TODO: Handle 'response' of type PaginatedWebhookSubscriptions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceHooksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWebhookSubscriptions](bitbucket/models/paginated_webhook_subscriptions.py)</code> -- The paginated list of installed webhooks.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceHooksErrorBody](bitbucket/errors/get_workspaces_by_workspace_hooks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_hooks_by_uid(uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookSubscription</code></summary>

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

**Sync**

```python
try:
    response = client.webhooks_api.get_workspaces_by_workspace_hooks_by_uid(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceHooksByUidErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_workspaces_by_workspace_hooks_by_uid(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceHooksByUidErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>str</code> | Installed webhook's ID |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](bitbucket/models/webhook_subscription.py)</code> -- The webhook subscription object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceHooksByUidErrorBody](bitbucket/errors/get_workspaces_by_workspace_hooks_by_uid_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_repositories_by_workspace_by_repo_slug_hooks2(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookSubscription</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook on the specified repository.

Example:

``
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
``

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

**Sync**

```python
try:
    response = client.webhooks_api.post_repositories_by_workspace_by_repo_slug_hooks2(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.post_repositories_by_workspace_by_repo_slug_hooks2(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](bitbucket/models/webhook_subscription.py)</code> -- If the webhook was registered successfully.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody](bitbucket/errors/post_repositories_by_workspace_by_repo_slug_hooks2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_workspaces_by_workspace_hooks(workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookSubscription</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook on the specified workspace.

Workspace webhooks are fired for events from all repositories contained
by that workspace.

Example:

``
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
``

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

**Sync**

```python
try:
    response = client.webhooks_api.post_workspaces_by_workspace_hooks("some example string")
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostWorkspacesByWorkspaceHooksErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.post_workspaces_by_workspace_hooks("some example string")
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostWorkspacesByWorkspaceHooksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](bitbucket/models/webhook_subscription.py)</code> -- If the webhook was registered successfully.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostWorkspacesByWorkspaceHooksErrorBody](bitbucket/errors/post_workspaces_by_workspace_hooks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_repositories_by_workspace_by_repo_slug_hooks_by_uid2(repo_slug: str, uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookSubscription</code></summary>

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

**Sync**

```python
try:
    response = client.webhooks_api.put_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.put_repositories_by_workspace_by_repo_slug_hooks_by_uid2(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>uid</code> | <code>str</code> | Installed webhook's ID |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](bitbucket/models/webhook_subscription.py)</code> -- The webhook subscription object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody](bitbucket/errors/put_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_workspaces_by_workspace_hooks_by_uid(uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookSubscription</code></summary>

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

**Sync**

```python
try:
    response = client.webhooks_api.put_workspaces_by_workspace_hooks_by_uid(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutWorkspacesByWorkspaceHooksByUidErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.put_workspaces_by_workspace_hooks_by_uid(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutWorkspacesByWorkspaceHooksByUidErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>str</code> | Installed webhook's ID |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](bitbucket/models/webhook_subscription.py)</code> -- The webhook subscription object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutWorkspacesByWorkspaceHooksByUidErrorBody](bitbucket/errors/put_workspaces_by_workspace_hooks_by_uid_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](bitbucket/apis/workspaces.py)

<details>
<summary><code>def delete_workspaces_by_workspace_hooks_by_uid2(uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.workspaces.delete_workspaces_by_workspace_hooks_by_uid2("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWorkspacesByWorkspaceHooksByUid2ErrorBody
```

**Async**

```python
try:
    await async_client.workspaces.delete_workspaces_by_workspace_hooks_by_uid2(
        "some example string", "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWorkspacesByWorkspaceHooksByUid2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>str</code> | Installed webhook's ID |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[DeleteWorkspacesByWorkspaceHooksByUid2ErrorBody](bitbucket/errors/delete_workspaces_by_workspace_hooks_by_uid2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_permissions_workspaces(*, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedWorkspaceMemberships</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.get_user_permissions_workspaces()
    # TODO: Handle 'response' of type PaginatedWorkspaceMemberships
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserPermissionsWorkspacesErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_user_permissions_workspaces()
    # TODO: Handle 'response' of type PaginatedWorkspaceMemberships
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserPermissionsWorkspacesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response. See<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for details.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Name of a response property to sort results. See<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results)<br>for details.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWorkspaceMemberships](bitbucket/models/paginated_workspace_memberships.py)</code> -- All of the workspace memberships for the authenticated user.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetUserPermissionsWorkspacesErrorBody](bitbucket/errors/get_user_permissions_workspaces_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_workspaces(*, sort: str | None = None, administrator: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedWorkspacePermissions</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.get_user_workspaces()
    # TODO: Handle 'response' of type PaginatedWorkspacePermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserWorkspacesErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_user_workspaces()
    # TODO: Handle 'response' of type PaginatedWorkspacePermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserWorkspacesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sort</code> | <code>str \| None</code> | Name of a response property to sort results (only slug is supported).<br>**Default**: <code>None</code> |
| <code>administrator</code> | <code>bool \| None</code> | Filter workspaces based on which ones the caller has admin permissions or not.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWorkspacePermissions](bitbucket/models/paginated_workspace_permissions.py)</code> -- The list of workspaces accessible by the authenticated user.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetUserWorkspacesErrorBody](bitbucket/errors/get_user_workspaces_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_workspaces_by_workspace_permission(workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WorkspaceMembership</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.get_user_workspaces_by_workspace_permission("some example string")
    # TODO: Handle 'response' of type WorkspaceMembership
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserWorkspacesByWorkspacePermissionErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_user_workspaces_by_workspace_permission("some example string")
    # TODO: Handle 'response' of type WorkspaceMembership
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserWorkspacesByWorkspacePermissionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceMembership](bitbucket/models/workspace_membership.py)</code> -- The user that is part of a workspace.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetUserWorkspacesByWorkspacePermissionErrorBody](bitbucket/errors/get_user_workspaces_by_workspace_permission_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces(*, role: Role1BitbucketWorkspacesApiOrStr | None = None, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedWorkspaces</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.get_workspaces()
    # TODO: Handle 'response' of type PaginatedWorkspaces
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_workspaces()
    # TODO: Handle 'response' of type PaginatedWorkspaces
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>role</code> | <code>[Role1BitbucketWorkspacesApiOrStr](bitbucket/models/enums/role1_bitbucket_workspaces_api.py) \| None</code> | Filters the workspaces based on the authenticated user's role on each workspace.<br><br>            * **member**: returns a list of all the workspaces which the caller is a member of<br>                at least one workspace group or repository<br>            * **collaborator**: returns a list of workspaces which the caller has write access<br>                to at least one repository in the workspace<br>            * **owner**: returns a list of workspaces which the caller has administrator access<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response. See<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for details.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Name of a response property to sort results. See<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results)<br>for details.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWorkspaces](bitbucket/models/paginated_workspaces.py)</code> -- The list of workspaces accessible by the authenticated user.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesErrorBody](bitbucket/errors/get_workspaces_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace(workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WorkspaceBitbucketWorkspacesApi</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.get_workspaces_by_workspace("some example string")
    # TODO: Handle 'response' of type WorkspaceBitbucketWorkspacesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_workspaces_by_workspace("some example string")
    # TODO: Handle 'response' of type WorkspaceBitbucketWorkspacesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceBitbucketWorkspacesApi](bitbucket/models/workspace_bitbucket_workspaces_api.py)</code> -- The workspace.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceErrorBody](bitbucket/errors/get_workspaces_by_workspace_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_hooks2(workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedWebhookSubscriptions</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.get_workspaces_by_workspace_hooks2("some example string")
    # TODO: Handle 'response' of type PaginatedWebhookSubscriptions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceHooks2ErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_workspaces_by_workspace_hooks2("some example string")
    # TODO: Handle 'response' of type PaginatedWebhookSubscriptions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceHooks2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWebhookSubscriptions](bitbucket/models/paginated_webhook_subscriptions.py)</code> -- The paginated list of installed webhooks.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceHooks2ErrorBody](bitbucket/errors/get_workspaces_by_workspace_hooks2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_hooks_by_uid2(uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookSubscription</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.get_workspaces_by_workspace_hooks_by_uid2("some example string", "some example string")
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceHooksByUid2ErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_workspaces_by_workspace_hooks_by_uid2(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceHooksByUid2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>str</code> | Installed webhook's ID |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](bitbucket/models/webhook_subscription.py)</code> -- The webhook subscription object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceHooksByUid2ErrorBody](bitbucket/errors/get_workspaces_by_workspace_hooks_by_uid2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_members(workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedWorkspaceMemberships</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.get_workspaces_by_workspace_members("some example string")
    # TODO: Handle 'response' of type PaginatedWorkspaceMemberships
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceMembersErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_workspaces_by_workspace_members("some example string")
    # TODO: Handle 'response' of type PaginatedWorkspaceMemberships
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceMembersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWorkspaceMemberships](bitbucket/models/paginated_workspace_memberships.py)</code> -- The list of users that are part of a workspace.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceMembersErrorBody](bitbucket/errors/get_workspaces_by_workspace_members_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_members_by_member(member: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WorkspaceMembership</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.get_workspaces_by_workspace_members_by_member(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WorkspaceMembership
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceMembersByMemberErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_workspaces_by_workspace_members_by_member(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WorkspaceMembership
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceMembersByMemberErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>member</code> | <code>str</code> | Member's UUID or Atlassian ID. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceMembership](bitbucket/models/workspace_membership.py)</code> -- The user that is part of a workspace.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceMembersByMemberErrorBody](bitbucket/errors/get_workspaces_by_workspace_members_by_member_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_permissions(workspace: str, *, q: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedWorkspaceMemberships</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.get_workspaces_by_workspace_permissions("some example string")
    # TODO: Handle 'response' of type PaginatedWorkspaceMemberships
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspacePermissionsErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_workspaces_by_workspace_permissions("some example string")
    # TODO: Handle 'response' of type PaginatedWorkspaceMemberships
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspacePermissionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedWorkspaceMemberships](bitbucket/models/paginated_workspace_memberships.py)</code> -- The list of users that are part of a workspace, along with their permission.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspacePermissionsErrorBody](bitbucket/errors/get_workspaces_by_workspace_permissions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_permissions_repositories(workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedRepositoryPermissions</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.get_workspaces_by_workspace_permissions_repositories("some example string")
    # TODO: Handle 'response' of type PaginatedRepositoryPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspacePermissionsRepositoriesErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_workspaces_by_workspace_permissions_repositories("some example string")
    # TODO: Handle 'response' of type PaginatedRepositoryPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspacePermissionsRepositoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Name of a response property sort the result by as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositoryPermissions](bitbucket/models/paginated_repository_permissions.py)</code> -- List of workspace's repository permissions.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspacePermissionsRepositoriesErrorBody](bitbucket/errors/get_workspaces_by_workspace_permissions_repositories_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_permissions_repositories_by_repo_slug(repo_slug: str, workspace: str, *, q: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedRepositoryPermissions</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.get_workspaces_by_workspace_permissions_repositories_by_repo_slug(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedRepositoryPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_workspaces_by_workspace_permissions_repositories_by_repo_slug(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedRepositoryPermissions
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_slug</code> | <code>str</code> | This can either be the repository slug or the UUID of the repository,<br>surrounded by curly-braces, for example: `{repository UUID}`. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>q</code> | <code>str \| None</code> | Query string to narrow down the response as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Name of a response property sort the result by as per<br>[filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedRepositoryPermissions](bitbucket/models/paginated_repository_permissions.py)</code> -- The repository permission for all users in this repository.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspacePermissionsRepositoriesByRepoSlugErrorBody](bitbucket/errors/get_workspaces_by_workspace_permissions_repositories_by_repo_slug_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_projects(workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> PaginatedProjects</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.get_workspaces_by_workspace_projects("some example string")
    # TODO: Handle 'response' of type PaginatedProjects
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_workspaces_by_workspace_projects("some example string")
    # TODO: Handle 'response' of type PaginatedProjects
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedProjects](bitbucket/models/paginated_projects.py)</code> -- The list of projects in this workspace.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceProjectsErrorBody](bitbucket/errors/get_workspaces_by_workspace_projects_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_projects_by_project_key2(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> ProjectBitbucketDeploymentsApi</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.get_workspaces_by_workspace_projects_by_project_key2(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectBitbucketDeploymentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKey2ErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_workspaces_by_workspace_projects_by_project_key2(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectBitbucketDeploymentsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspaceProjectsByProjectKey2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_key</code> | <code>str</code> | The project in question. This is the actual `key` assigned<br>to the project. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectBitbucketDeploymentsApi](bitbucket/models/project_bitbucket_deployments_api.py)</code> -- The project that is part of a workspace.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspaceProjectsByProjectKey2ErrorBody](bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspaces_by_workspace_pullrequests_by_selected_user2(selected_user: str, workspace: str, *, state: State2BitbucketWorkspacesApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedPullRequests</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.get_workspaces_by_workspace_pullrequests_by_selected_user2(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPullRequests
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspacePullrequestsBySelectedUser2ErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_workspaces_by_workspace_pullrequests_by_selected_user2(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PaginatedPullRequests
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspacesByWorkspacePullrequestsBySelectedUser2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>selected_user</code> | <code>str</code> | This can either be the username of the pull request author, the author's UUID<br>surrounded by curly-braces, for example: `{account UUID}`, or the author's Atlassian ID. |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>state</code> | <code>[State2BitbucketWorkspacesApiOrStr](bitbucket/models/enums/state2_bitbucket_workspaces_api.py) \| None</code> | Only return pull requests that are in this state. This parameter can be repeated.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedPullRequests](bitbucket/models/paginated_pull_requests.py)</code> -- All pull requests authored by the specified user.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[GetWorkspacesByWorkspacePullrequestsBySelectedUser2ErrorBody](bitbucket/errors/get_workspaces_by_workspace_pullrequests_by_selected_user2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_workspaces_by_workspace_hooks2(workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookSubscription</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook on the specified workspace.

Workspace webhooks are fired for events from all repositories contained
by that workspace.

Example:

``
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
``

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

**Sync**

```python
try:
    response = client.workspaces.post_workspaces_by_workspace_hooks2("some example string")
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostWorkspacesByWorkspaceHooks2ErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.post_workspaces_by_workspace_hooks2("some example string")
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostWorkspacesByWorkspaceHooks2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](bitbucket/models/webhook_subscription.py)</code> -- If the webhook was registered successfully.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PostWorkspacesByWorkspaceHooks2ErrorBody](bitbucket/errors/post_workspaces_by_workspace_hooks2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_workspaces_by_workspace_hooks_by_uid2(uid: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookSubscription</code></summary>

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

**Sync**

```python
try:
    response = client.workspaces.put_workspaces_by_workspace_hooks_by_uid2("some example string", "some example string")
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutWorkspacesByWorkspaceHooksByUid2ErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.put_workspaces_by_workspace_hooks_by_uid2(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type WebhookSubscription
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutWorkspacesByWorkspaceHooksByUid2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>str</code> | Installed webhook's ID |
| <code>workspace</code> | <code>str</code> | This can either be the workspace ID (slug) or the workspace UUID<br>surrounded by curly-braces, for example: `{workspace UUID}`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](bitbucket/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookSubscription](bitbucket/models/webhook_subscription.py)</code> -- The webhook subscription object.

**OnError**: <code>[ApiError](bitbucket/core/exceptions.py)&#91;[PutWorkspacesByWorkspaceHooksByUid2ErrorBody](bitbucket/errors/put_workspaces_by_workspace_hooks_by_uid2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[Error](bitbucket/models/error.py)</code> |
| anything unmapped | <code>[RawError](bitbucket/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

