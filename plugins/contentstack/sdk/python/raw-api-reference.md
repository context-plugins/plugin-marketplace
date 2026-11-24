# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [ContentstackClient](contentstack/client.py)

## ScimUsers

> Source: [ScimUsers](contentstack/apis/scim_users.py)

<details>
<summary><code>def create_scim_user(organization_uid: str, body: ScimUser | ScimUserDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimUser, CreateScimUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a new user in the Contentstack organization via SCIM. The user is created with the attributes provided in the SCIM User resource and assigned to the organization's default role unless group mappings specify otherwise.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scim_users.with_raw_response.create_scim_user("some example string", ScimUser())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateScimUserErrorBody
```

**Async**

```python
result = await async_client.scim_users.with_raw_response.create_scim_user("some example string", ScimUser())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateScimUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the Contentstack organization. |
| <code>body</code> | <code>[ScimUser](contentstack/models/scim_user.py) \| [ScimUserDict](contentstack/models/scim_user.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ScimUser](contentstack/models/scim_user.py), [CreateScimUserErrorBody](contentstack/errors/create_scim_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimUser](contentstack/models/scim_user.py)</code> -- The newly provisioned SCIM user resource.

**On `Failure`**: `error` is <code>[CreateScimUserErrorBody](contentstack/errors/create_scim_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 409 | <code>[ScimError](contentstack/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_scim_user(organization_uid: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimUser, GetScimUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the SCIM User resource for a specific user by their SCIM user ID within the organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scim_users.with_raw_response.get_scim_user("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScimUserErrorBody
```

**Async**

```python
result = await async_client.scim_users.with_raw_response.get_scim_user("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScimUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the Contentstack organization. |
| <code>user_id</code> | <code>str</code> | The SCIM user ID of the user within the organization. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ScimUser](contentstack/models/scim_user.py), [GetScimUserErrorBody](contentstack/errors/get_scim_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimUser](contentstack/models/scim_user.py)</code> -- The SCIM user resource.

**On `Failure`**: `error` is <code>[GetScimUserErrorBody](contentstack/errors/get_scim_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ScimError](contentstack/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_scim_users(organization_uid: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimListResponse, ListScimUsersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all users in the organization following the SCIM 2.0 ListResponse format. Supports filtering by userName (email address) using the filter query parameter for user lookup during IdP sync operations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scim_users.with_raw_response.list_scim_users("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListScimUsersErrorBody
```

**Async**

```python
result = await async_client.scim_users.with_raw_response.list_scim_users("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListScimUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the Contentstack organization. |
| <code>filter_</code> | <code>str \| None</code> | SCIM filter expression for searching users. Example: userName eq "user@example.com"<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ScimListResponse](contentstack/models/scim_list_response.py), [ListScimUsersErrorBody](contentstack/errors/list_scim_users_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimListResponse](contentstack/models/scim_list_response.py)</code> -- A SCIM ListResponse containing user resources.

**On `Failure`**: `error` is <code>[ListScimUsersErrorBody](contentstack/errors/list_scim_users_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ScimError](contentstack/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def replace_scim_user(organization_uid: str, user_id: str, body: ScimUser | ScimUserDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimUser, ReplaceScimUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fully replaces a SCIM user resource with the provided attributes. All attributes not included in the request will be cleared or reset to defaults following SCIM 2.0 PUT semantics.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scim_users.with_raw_response.replace_scim_user("some example string", "some example string", ScimUser())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReplaceScimUserErrorBody
```

**Async**

```python
result = await async_client.scim_users.with_raw_response.replace_scim_user(
    "some example string", "some example string", ScimUser()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReplaceScimUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the Contentstack organization. |
| <code>user_id</code> | <code>str</code> | The SCIM user ID of the user within the organization. |
| <code>body</code> | <code>[ScimUser](contentstack/models/scim_user.py) \| [ScimUserDict](contentstack/models/scim_user.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ScimUser](contentstack/models/scim_user.py), [ReplaceScimUserErrorBody](contentstack/errors/replace_scim_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimUser](contentstack/models/scim_user.py)</code> -- The updated SCIM user resource.

**On `Failure`**: `error` is <code>[ReplaceScimUserErrorBody](contentstack/errors/replace_scim_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ScimError](contentstack/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_scim_user(organization_uid: str, user_id: str, body: ScimPatchRequest | ScimPatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimUser, UpdateScimUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a SCIM user resource using SCIM 2.0 PATCH operations. Commonly used to activate or deactivate users by setting the active attribute, or to update specific profile attributes without replacing the entire resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scim_users.with_raw_response.update_scim_user(
    "some example string", "some example string", ScimPatchRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateScimUserErrorBody
```

**Async**

```python
result = await async_client.scim_users.with_raw_response.update_scim_user(
    "some example string", "some example string", ScimPatchRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateScimUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the Contentstack organization. |
| <code>user_id</code> | <code>str</code> | The SCIM user ID of the user within the organization. |
| <code>body</code> | <code>[ScimPatchRequest](contentstack/models/scim_patch_request.py) \| [ScimPatchRequestDict](contentstack/models/scim_patch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ScimUser](contentstack/models/scim_user.py), [UpdateScimUserErrorBody](contentstack/errors/update_scim_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimUser](contentstack/models/scim_user.py)</code> -- The updated SCIM user resource.

**On `Failure`**: `error` is <code>[UpdateScimUserErrorBody](contentstack/errors/update_scim_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ScimError](contentstack/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Accounts

> Source: [Accounts](contentstack/apis/accounts.py)

<details>
<summary><code>def get_all_accounts(organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccountList, GetAllAccountsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all external service account connections configured for the automation project, such as connections to Slack, email services, or other third-party platforms.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.accounts.with_raw_response.get_all_accounts("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllAccountsErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.get_all_accounts("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the automation project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[AccountList](contentstack/models/account_list.py), [GetAllAccountsErrorBody](contentstack/errors/get_all_accounts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccountList](contentstack/models/account_list.py)</code> -- A list of external service account connections.

**On `Failure`**: `error` is <code>[GetAllAccountsErrorBody](contentstack/errors/get_all_accounts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Analytics

> Source: [Analytics](contentstack/apis/analytics.py)

<details>
<summary><code>def get_cache_revalidation_usage(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CacheUsage, GetCacheRevalidationUsageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the organization's current cache revalidation quota usage, showing how many revalidation requests have been used against the organization's plan limit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.analytics.with_raw_response.get_cache_revalidation_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CacheUsage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCacheRevalidationUsageErrorBody
```

**Async**

```python
result = await async_client.analytics.with_raw_response.get_cache_revalidation_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CacheUsage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCacheRevalidationUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[CacheUsage](contentstack/models/cache_usage.py), [GetCacheRevalidationUsageErrorBody](contentstack/errors/get_cache_revalidation_usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CacheUsage](contentstack/models/cache_usage.py)</code> -- Cache revalidation usage metrics.

**On `Failure`**: `error` is <code>[GetCacheRevalidationUsageErrorBody](contentstack/errors/get_cache_revalidation_usage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Assets

> Source: [Assets](contentstack/apis/assets.py)

<details>
<summary><code>def get_all_assets(api_key: str, access_token: str, *, skip: int | None = 0, limit: int | None = 100, include_count: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AssetList, GetAllAssetsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a list of all published assets in the stack including images, videos, and documents. Supports pagination, filtering, and field selection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.assets.with_raw_response.get_all_assets("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AssetList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllAssetsErrorBody
```

**Async**

```python
result = await async_client.assets.with_raw_response.get_all_assets("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AssetList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllAssetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_key</code> | <code>str</code> | The API key for the Contentstack stack. |
| <code>access_token</code> | <code>str</code> | The delivery token for the stack environment. |
| <code>skip</code> | <code>int \| None</code> | Number of entries to skip for pagination.<br>**Default**: <code>0</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of entries to return. Maximum allowed is 250.<br>**Default**: <code>100</code> |
| <code>include_count</code> | <code>bool \| None</code> | Set to true to include the total count of assets in the response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[AssetList](contentstack/models/asset_list.py), [GetAllAssetsErrorBody](contentstack/errors/get_all_assets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AssetList](contentstack/models/asset_list.py)</code> -- A list of assets in the stack.

**On `Failure`**: `error` is <code>[GetAllAssetsErrorBody](contentstack/errors/get_all_assets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_single_asset(asset_uid: str, api_key: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Asset, GetSingleAssetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific asset by its UID, returning all metadata including file URL, dimensions, file size, and content type.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.assets.with_raw_response.get_single_asset(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Asset
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSingleAssetErrorBody
```

**Async**

```python
result = await async_client.assets.with_raw_response.get_single_asset(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Asset
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSingleAssetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asset_uid</code> | <code>str</code> | The unique identifier (UID) of the asset. |
| <code>api_key</code> | <code>str</code> | The API key for the Contentstack stack. |
| <code>access_token</code> | <code>str</code> | The delivery token for the stack environment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Asset](contentstack/models/asset.py), [GetSingleAssetErrorBody](contentstack/errors/get_single_asset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Asset](contentstack/models/asset.py)</code> -- The requested asset object.

**On `Failure`**: `error` is <code>[GetSingleAssetErrorBody](contentstack/errors/get_single_asset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_asset(api_key: str, *, authtoken: str | None = None, asset_upload: FileInput | None = None, asset_title: str | None = None, asset_description: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Asset2, UploadAssetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a new asset file to the stack. Supports multipart form data for the file upload along with metadata such as title, description, and tags.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.assets.with_raw_response.upload_asset("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Asset2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadAssetErrorBody
```

**Async**

```python
result = await async_client.assets.with_raw_response.upload_asset("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Asset2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadAssetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_key</code> | <code>str</code> | The API key identifying the Contentstack stack. |
| <code>authtoken</code> | <code>str \| None</code> | User session token for authentication. Required if not using management token.<br>**Default**: <code>None</code> |
| <code>asset_upload</code> | <code>FileInput \| None</code> | The asset file to upload.<br>**Default**: <code>None</code> |
| <code>asset_title</code> | <code>str \| None</code> | Display title for the asset.<br>**Default**: <code>None</code> |
| <code>asset_description</code> | <code>str \| None</code> | Description of the asset content.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Asset2](contentstack/models/asset2.py), [UploadAssetErrorBody](contentstack/errors/upload_asset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Asset2](contentstack/models/asset2.py)</code> -- The newly uploaded asset.

**On `Failure`**: `error` is <code>[UploadAssetErrorBody](contentstack/errors/upload_asset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error2](contentstack/models/error2.py)</code> |
| 401 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Attributes

> Source: [Attributes](contentstack/apis/attributes.py)

<details>
<summary><code>def create_attribute(x_project_uid: str, body: CreateAttributeRequest | CreateAttributeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Attribute, CreateAttributeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new user attribute definition in the Personalize project. Attributes can be of various types including string, number, boolean, and date, and are used to build audience segment rules.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.attributes.with_raw_response.create_attribute(
    "some example string",
    CreateAttributeRequest(name="some example string", key="some example string", data_type=DataType.STRING),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Attribute
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAttributeErrorBody
```

**Async**

```python
result = await async_client.attributes.with_raw_response.create_attribute(
    "some example string",
    CreateAttributeRequest(name="some example string", key="some example string", data_type=DataType.STRING),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Attribute
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAttributeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[CreateAttributeRequest](contentstack/models/create_attribute_request.py) \| [CreateAttributeRequestDict](contentstack/models/create_attribute_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Attribute](contentstack/models/attribute.py), [CreateAttributeErrorBody](contentstack/errors/create_attribute_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Attribute](contentstack/models/attribute.py)</code> -- The newly created attribute.

**On `Failure`**: `error` is <code>[CreateAttributeErrorBody](contentstack/errors/create_attribute_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_attribute(id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteAttributeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an attribute from the Personalize project. Attributes referenced in audience rules cannot be deleted until those references are removed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.attributes.with_raw_response.delete_attribute("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAttributeErrorBody
```

**Async**

```python
result = await async_client.attributes.with_raw_response.delete_attribute("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAttributeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The unique identifier of the attribute. |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [DeleteAttributeErrorBody](contentstack/errors/delete_attribute_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteAttributeErrorBody](contentstack/errors/delete_attribute_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_all_attributes(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AttributeList, GetAllAttributesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all user attribute definitions configured in the Personalize project. Attributes are used to build audience segment rules.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.attributes.with_raw_response.get_all_attributes("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AttributeList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllAttributesErrorBody
```

**Async**

```python
result = await async_client.attributes.with_raw_response.get_all_attributes("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AttributeList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllAttributesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[AttributeList](contentstack/models/attribute_list.py), [GetAllAttributesErrorBody](contentstack/errors/get_all_attributes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AttributeList](contentstack/models/attribute_list.py)</code> -- A list of all attributes in the project.

**On `Failure`**: `error` is <code>[GetAllAttributesErrorBody](contentstack/errors/get_all_attributes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_attribute(id_: str, x_project_uid: str, body: CreateAttributeRequest | CreateAttributeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Attribute, UpdateAttributeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing attribute in the Personalize project including its name, key, and data type.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.attributes.with_raw_response.update_attribute(
    "some example string",
    "some example string",
    CreateAttributeRequest(name="some example string", key="some example string", data_type=DataType.STRING),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Attribute
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAttributeErrorBody
```

**Async**

```python
result = await async_client.attributes.with_raw_response.update_attribute(
    "some example string",
    "some example string",
    CreateAttributeRequest(name="some example string", key="some example string", data_type=DataType.STRING),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Attribute
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAttributeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The unique identifier of the attribute. |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[CreateAttributeRequest](contentstack/models/create_attribute_request.py) \| [CreateAttributeRequestDict](contentstack/models/create_attribute_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Attribute](contentstack/models/attribute.py), [UpdateAttributeErrorBody](contentstack/errors/update_attribute_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Attribute](contentstack/models/attribute.py)</code> -- The updated attribute.

**On `Failure`**: `error` is <code>[UpdateAttributeErrorBody](contentstack/errors/update_attribute_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Audiences

> Source: [Audiences](contentstack/apis/audiences.py)

<details>
<summary><code>def create_audience(x_project_uid: str, body: CreateAudienceRequest | CreateAudienceRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Audience, CreateAudienceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new audience segment in the Personalize project based on attribute conditions and behavioral rules.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.audiences.with_raw_response.create_audience(
    "some example string", CreateAudienceRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Audience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAudienceErrorBody
```

**Async**

```python
result = await async_client.audiences.with_raw_response.create_audience(
    "some example string", CreateAudienceRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Audience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAudienceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[CreateAudienceRequest](contentstack/models/create_audience_request.py) \| [CreateAudienceRequestDict](contentstack/models/create_audience_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Audience](contentstack/models/audience.py), [CreateAudienceErrorBody](contentstack/errors/create_audience_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Audience](contentstack/models/audience.py)</code> -- The newly created audience.

**On `Failure`**: `error` is <code>[CreateAudienceErrorBody](contentstack/errors/create_audience_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_audience(id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteAudienceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an audience from the Personalize project. Audiences referenced in active experiences cannot be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.audiences.with_raw_response.delete_audience("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAudienceErrorBody
```

**Async**

```python
result = await async_client.audiences.with_raw_response.delete_audience("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAudienceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The unique identifier of the audience. |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [DeleteAudienceErrorBody](contentstack/errors/delete_audience_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteAudienceErrorBody](contentstack/errors/delete_audience_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_all_audiences(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AudienceList, GetAllAudiencesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all audience segment definitions in the Personalize project. Audiences define the user groups that experiences are targeted to.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.audiences.with_raw_response.get_all_audiences("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AudienceList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllAudiencesErrorBody
```

**Async**

```python
result = await async_client.audiences.with_raw_response.get_all_audiences("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AudienceList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllAudiencesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[AudienceList](contentstack/models/audience_list.py), [GetAllAudiencesErrorBody](contentstack/errors/get_all_audiences_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AudienceList](contentstack/models/audience_list.py)</code> -- A list of all audiences in the project.

**On `Failure`**: `error` is <code>[GetAllAudiencesErrorBody](contentstack/errors/get_all_audiences_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_audience(id_: str, x_project_uid: str, body: CreateAudienceRequest | CreateAudienceRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Audience, UpdateAudienceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the rules and configuration of an existing audience segment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.audiences.with_raw_response.update_audience(
    "some example string", "some example string", CreateAudienceRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Audience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAudienceErrorBody
```

**Async**

```python
result = await async_client.audiences.with_raw_response.update_audience(
    "some example string", "some example string", CreateAudienceRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Audience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAudienceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The unique identifier of the audience. |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[CreateAudienceRequest](contentstack/models/create_audience_request.py) \| [CreateAudienceRequestDict](contentstack/models/create_audience_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Audience](contentstack/models/audience.py), [UpdateAudienceErrorBody](contentstack/errors/update_audience_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Audience](contentstack/models/audience.py)</code> -- The updated audience.

**On `Failure`**: `error` is <code>[UpdateAudienceErrorBody](contentstack/errors/update_audience_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AuditLogs

> Source: [AuditLogs](contentstack/apis/audit_logs.py)

<details>
<summary><code>def get_all_audit_logs(organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AuditLogList, GetAllAuditLogsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all audit log entries for administrative actions taken within the project such as creating, updating, or deleting automations and configuration changes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.audit_logs.with_raw_response.get_all_audit_logs("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuditLogList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllAuditLogsErrorBody
```

**Async**

```python
result = await async_client.audit_logs.with_raw_response.get_all_audit_logs(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuditLogList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllAuditLogsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the automation project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[AuditLogList](contentstack/models/audit_log_list.py), [GetAllAuditLogsErrorBody](contentstack/errors/get_all_audit_logs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AuditLogList](contentstack/models/audit_log_list.py)</code> -- A list of audit log entries.

**On `Failure`**: `error` is <code>[GetAllAuditLogsErrorBody](contentstack/errors/get_all_audit_logs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Automations

> Source: [Automations](contentstack/apis/automations.py)

<details>
<summary><code>def activate_automation(organization_uid: str, project_uid: str, automation_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Automation, ActivateAutomationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables an automation so that it will execute when its configured trigger conditions are met. Only automations in a valid, configured state can be activated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.automations.with_raw_response.activate_automation(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Automation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ActivateAutomationErrorBody
```

**Async**

```python
result = await async_client.automations.with_raw_response.activate_automation(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Automation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ActivateAutomationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the automation project. |
| <code>automation_uid</code> | <code>str</code> | The unique identifier of the automation. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Automation](contentstack/models/automation.py), [ActivateAutomationErrorBody](contentstack/errors/activate_automation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Automation](contentstack/models/automation.py)</code> -- Automation activated successfully.

**On `Failure`**: `error` is <code>[ActivateAutomationErrorBody](contentstack/errors/activate_automation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deactivate_automation(organization_uid: str, project_uid: str, automation_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Automation, DeactivateAutomationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables an active automation, preventing it from executing when its trigger conditions are met. Existing in-progress executions will complete before the automation is fully deactivated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.automations.with_raw_response.deactivate_automation(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Automation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeactivateAutomationErrorBody
```

**Async**

```python
result = await async_client.automations.with_raw_response.deactivate_automation(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Automation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeactivateAutomationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the automation project. |
| <code>automation_uid</code> | <code>str</code> | The unique identifier of the automation. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Automation](contentstack/models/automation.py), [DeactivateAutomationErrorBody](contentstack/errors/deactivate_automation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Automation](contentstack/models/automation.py)</code> -- Automation deactivated successfully.

**On `Failure`**: `error` is <code>[DeactivateAutomationErrorBody](contentstack/errors/deactivate_automation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_all_automations(organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AutomationList, GetAllAutomationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all automation workflow definitions within a specific project, including their trigger configurations, steps, and activation status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.automations.with_raw_response.get_all_automations("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutomationList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllAutomationsErrorBody
```

**Async**

```python
result = await async_client.automations.with_raw_response.get_all_automations(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AutomationList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllAutomationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the automation project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[AutomationList](contentstack/models/automation_list.py), [GetAllAutomationsErrorBody](contentstack/errors/get_all_automations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AutomationList](contentstack/models/automation_list.py)</code> -- A list of automations in the project.

**On `Failure`**: `error` is <code>[GetAllAutomationsErrorBody](contentstack/errors/get_all_automations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_automation(organization_uid: str, project_uid: str, automation_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Automation, GetAutomationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the full configuration of a specific automation including trigger settings, action steps, error handling, and activation status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.automations.with_raw_response.get_automation(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Automation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAutomationErrorBody
```

**Async**

```python
result = await async_client.automations.with_raw_response.get_automation(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Automation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAutomationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the automation project. |
| <code>automation_uid</code> | <code>str</code> | The unique identifier of the automation. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Automation](contentstack/models/automation.py), [GetAutomationErrorBody](contentstack/errors/get_automation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Automation](contentstack/models/automation.py)</code> -- The requested automation configuration.

**On `Failure`**: `error` is <code>[GetAutomationErrorBody](contentstack/errors/get_automation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BrandKits

> Source: [BrandKits](contentstack/apis/brand_kits.py)

<details>
<summary><code>def create_brand_kit(organization_uid: str, body: CreateBrandKitRequest | CreateBrandKitRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BrandKit, CreateBrandKitErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Brand Kit in the organization with brand identity configuration including name, description, guidelines, and associated metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.brand_kits.with_raw_response.create_brand_kit(
    "some example string", CreateBrandKitRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BrandKit
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBrandKitErrorBody
```

**Async**

```python
result = await async_client.brand_kits.with_raw_response.create_brand_kit(
    "some example string", CreateBrandKitRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BrandKit
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBrandKitErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>body</code> | <code>[CreateBrandKitRequest](contentstack/models/create_brand_kit_request.py) \| [CreateBrandKitRequestDict](contentstack/models/create_brand_kit_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[BrandKit](contentstack/models/brand_kit.py), [CreateBrandKitErrorBody](contentstack/errors/create_brand_kit_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BrandKit](contentstack/models/brand_kit.py)</code> -- The newly created Brand Kit.

**On `Failure`**: `error` is <code>[CreateBrandKitErrorBody](contentstack/errors/create_brand_kit_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_brand_kit(brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteBrandKitErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently removes a Brand Kit from the organization including all associated voice profiles and knowledge vault content.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.brand_kits.with_raw_response.delete_brand_kit("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteBrandKitErrorBody
```

**Async**

```python
result = await async_client.brand_kits.with_raw_response.delete_brand_kit("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteBrandKitErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>brand_kit_uid</code> | <code>str</code> | The unique identifier of the Brand Kit. |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [DeleteBrandKitErrorBody](contentstack/errors/delete_brand_kit_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteBrandKitErrorBody](contentstack/errors/delete_brand_kit_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_all_brand_kits(organization_uid: str, *, skip: int | None = 0, limit: int | None = 25, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BrandKitList, GetAllBrandKitsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all Brand Kits in the organization with pagination support and optional filtering. Each Brand Kit contains brand identity information used for AI content generation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.brand_kits.with_raw_response.get_all_brand_kits("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BrandKitList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllBrandKitsErrorBody
```

**Async**

```python
result = await async_client.brand_kits.with_raw_response.get_all_brand_kits("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BrandKitList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllBrandKitsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>skip</code> | <code>int \| None</code> | Number of records to skip for pagination.<br>**Default**: <code>0</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of records to return.<br>**Default**: <code>25</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[BrandKitList](contentstack/models/brand_kit_list.py), [GetAllBrandKitsErrorBody](contentstack/errors/get_all_brand_kits_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BrandKitList](contentstack/models/brand_kit_list.py)</code> -- A list of Brand Kits in the organization.

**On `Failure`**: `error` is <code>[GetAllBrandKitsErrorBody](contentstack/errors/get_all_brand_kits_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_brand_kit(brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BrandKit, GetBrandKitErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the full details of a specific Brand Kit including its brand identity configuration, voice profiles, and associated knowledge vault content.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.brand_kits.with_raw_response.get_brand_kit("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BrandKit
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBrandKitErrorBody
```

**Async**

```python
result = await async_client.brand_kits.with_raw_response.get_brand_kit("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BrandKit
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBrandKitErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>brand_kit_uid</code> | <code>str</code> | The unique identifier of the Brand Kit. |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[BrandKit](contentstack/models/brand_kit.py), [GetBrandKitErrorBody](contentstack/errors/get_brand_kit_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BrandKit](contentstack/models/brand_kit.py)</code> -- The requested Brand Kit.

**On `Failure`**: `error` is <code>[GetBrandKitErrorBody](contentstack/errors/get_brand_kit_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_brand_kit(brand_kit_uid: str, organization_uid: str, body: CreateBrandKitRequest | CreateBrandKitRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BrandKit, UpdateBrandKitErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration and brand identity information for an existing Brand Kit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.brand_kits.with_raw_response.update_brand_kit(
    "some example string", "some example string", CreateBrandKitRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BrandKit
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateBrandKitErrorBody
```

**Async**

```python
result = await async_client.brand_kits.with_raw_response.update_brand_kit(
    "some example string", "some example string", CreateBrandKitRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BrandKit
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateBrandKitErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>brand_kit_uid</code> | <code>str</code> | The unique identifier of the Brand Kit. |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>body</code> | <code>[CreateBrandKitRequest](contentstack/models/create_brand_kit_request.py) \| [CreateBrandKitRequestDict](contentstack/models/create_brand_kit_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[BrandKit](contentstack/models/brand_kit.py), [UpdateBrandKitErrorBody](contentstack/errors/update_brand_kit_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BrandKit](contentstack/models/brand_kit.py)</code> -- The updated Brand Kit.

**On `Failure`**: `error` is <code>[UpdateBrandKitErrorBody](contentstack/errors/update_brand_kit_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ContentTypes

> Source: [ContentTypes](contentstack/apis/content_types.py)

<details>
<summary><code>def create_content_type(api_key: str, body: CreateContentTypeRequest | CreateContentTypeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContentType2, CreateContentTypeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new content type in the stack with a defined schema of fields. The schema determines the structure of all entries created from this content type.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.content_types.with_raw_response.create_content_type(
    "some example string",
    CreateContentTypeRequest(
        content_type=ContentType1(uid="some example string", title="some example string", schema_value=[Field2()])
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContentType2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateContentTypeErrorBody
```

**Async**

```python
result = await async_client.content_types.with_raw_response.create_content_type(
    "some example string",
    CreateContentTypeRequest(
        content_type=ContentType1(uid="some example string", title="some example string", schema_value=[Field2()])
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContentType2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateContentTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_key</code> | <code>str</code> | The API key identifying the Contentstack stack. |
| <code>body</code> | <code>[CreateContentTypeRequest](contentstack/models/create_content_type_request.py) \| [CreateContentTypeRequestDict](contentstack/models/create_content_type_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ContentType2](contentstack/models/content_type2.py), [CreateContentTypeErrorBody](contentstack/errors/create_content_type_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContentType2](contentstack/models/content_type2.py)</code> -- The newly created content type.

**On `Failure`**: `error` is <code>[CreateContentTypeErrorBody](contentstack/errors/create_content_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error2](contentstack/models/error2.py)</code> |
| 401 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_content_type(content_type_uid: str, api_key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteContentTypeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a content type from the stack. All entries of this content type must be deleted before the content type can be removed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.content_types.with_raw_response.delete_content_type("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteContentTypeErrorBody
```

**Async**

```python
result = await async_client.content_types.with_raw_response.delete_content_type(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteContentTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>content_type_uid</code> | <code>str</code> | The unique identifier (UID) of the content type. |
| <code>api_key</code> | <code>str</code> | The API key identifying the Contentstack stack. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [DeleteContentTypeErrorBody](contentstack/errors/delete_content_type_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteContentTypeErrorBody](contentstack/errors/delete_content_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_all_content_types(api_key: str, access_token: str, *, include_count: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContentTypeList, GetAllContentTypesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves comprehensive information of all content types available in a stack. Supports include_count parameter to return the total count of content types.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.content_types.with_raw_response.get_all_content_types("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContentTypeList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllContentTypesErrorBody
```

**Async**

```python
result = await async_client.content_types.with_raw_response.get_all_content_types(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContentTypeList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllContentTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_key</code> | <code>str</code> | The API key for the Contentstack stack. |
| <code>access_token</code> | <code>str</code> | The delivery token for the stack environment. |
| <code>include_count</code> | <code>bool \| None</code> | Set to true to include the total count of content types in the response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ContentTypeList](contentstack/models/content_type_list.py), [GetAllContentTypesErrorBody](contentstack/errors/get_all_content_types_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContentTypeList](contentstack/models/content_type_list.py)</code> -- A list of content types in the stack.

**On `Failure`**: `error` is <code>[GetAllContentTypesErrorBody](contentstack/errors/get_all_content_types_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_single_content_type(content_type_uid: str, api_key: str, access_token: str, *, version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContentType, GetSingleContentTypeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information for a specific content type identified by its UID, including all field definitions and schema metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.content_types.with_raw_response.get_single_content_type(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContentType
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSingleContentTypeErrorBody
```

**Async**

```python
result = await async_client.content_types.with_raw_response.get_single_content_type(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContentType
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSingleContentTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>content_type_uid</code> | <code>str</code> | The unique identifier (UID) of the content type. |
| <code>api_key</code> | <code>str</code> | The API key for the Contentstack stack. |
| <code>access_token</code> | <code>str</code> | The delivery token for the stack environment. |
| <code>version</code> | <code>int \| None</code> | Retrieve a specific version of the content type schema.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ContentType](contentstack/models/content_type.py), [GetSingleContentTypeErrorBody](contentstack/errors/get_single_content_type_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContentType](contentstack/models/content_type.py)</code> -- Details of the specified content type.

**On `Failure`**: `error` is <code>[GetSingleContentTypeErrorBody](contentstack/errors/get_single_content_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_content_type(content_type_uid: str, api_key: str, body: CreateContentTypeRequest | CreateContentTypeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContentType2, UpdateContentTypeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the schema and options of an existing content type. Changes to the schema may affect existing entries that use this content type.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.content_types.with_raw_response.update_content_type(
    "some example string",
    "some example string",
    CreateContentTypeRequest(
        content_type=ContentType1(uid="some example string", title="some example string", schema_value=[Field2()])
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContentType2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateContentTypeErrorBody
```

**Async**

```python
result = await async_client.content_types.with_raw_response.update_content_type(
    "some example string",
    "some example string",
    CreateContentTypeRequest(
        content_type=ContentType1(uid="some example string", title="some example string", schema_value=[Field2()])
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContentType2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateContentTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>content_type_uid</code> | <code>str</code> | The unique identifier (UID) of the content type. |
| <code>api_key</code> | <code>str</code> | The API key identifying the Contentstack stack. |
| <code>body</code> | <code>[CreateContentTypeRequest](contentstack/models/create_content_type_request.py) \| [CreateContentTypeRequestDict](contentstack/models/create_content_type_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ContentType2](contentstack/models/content_type2.py), [UpdateContentTypeErrorBody](contentstack/errors/update_content_type_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContentType2](contentstack/models/content_type2.py)</code> -- The updated content type.

**On `Failure`**: `error` is <code>[UpdateContentTypeErrorBody](contentstack/errors/update_content_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error2](contentstack/models/error2.py)</code> |
| 401 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Deployments

> Source: [Deployments](contentstack/apis/deployments.py)

<details>
<summary><code>def create_deployment(project_uid: str, env_uid: str, body: CreateDeploymentRequest | CreateDeploymentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deployment, CreateDeploymentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers a new deployment to the specified environment. Requires a previously uploaded build artifact referenced by its upload URL. The deployment process builds and publishes the application to the environment's CDN infrastructure.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deployments.with_raw_response.create_deployment(
    "some example string", "some example string", CreateDeploymentRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deployment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDeploymentErrorBody
```

**Async**

```python
result = await async_client.deployments.with_raw_response.create_deployment(
    "some example string", "some example string", CreateDeploymentRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deployment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDeploymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the Launch project. |
| <code>env_uid</code> | <code>str</code> | The unique identifier of the deployment environment. |
| <code>body</code> | <code>[CreateDeploymentRequest](contentstack/models/create_deployment_request.py) \| [CreateDeploymentRequestDict](contentstack/models/create_deployment_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Deployment](contentstack/models/deployment.py), [CreateDeploymentErrorBody](contentstack/errors/create_deployment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deployment](contentstack/models/deployment.py)</code> -- Deployment created and queued for processing.

**On `Failure`**: `error` is <code>[CreateDeploymentErrorBody](contentstack/errors/create_deployment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_all_deployments(project_uid: str, env_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DeploymentList, GetAllDeploymentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all deployments for a specific environment, showing deployment history with status, creation times, and build metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deployments.with_raw_response.get_all_deployments("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeploymentList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllDeploymentsErrorBody
```

**Async**

```python
result = await async_client.deployments.with_raw_response.get_all_deployments(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeploymentList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllDeploymentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the Launch project. |
| <code>env_uid</code> | <code>str</code> | The unique identifier of the deployment environment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[DeploymentList](contentstack/models/deployment_list.py), [GetAllDeploymentsErrorBody](contentstack/errors/get_all_deployments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DeploymentList](contentstack/models/deployment_list.py)</code> -- A list of deployments for the environment.

**On `Failure`**: `error` is <code>[GetAllDeploymentsErrorBody](contentstack/errors/get_all_deployments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_deployment(project_uid: str, env_uid: str, deploy_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deployment, GetDeploymentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the full details of a specific deployment including its status, build configuration, and completion information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deployments.with_raw_response.get_deployment(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deployment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDeploymentErrorBody
```

**Async**

```python
result = await async_client.deployments.with_raw_response.get_deployment(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Deployment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDeploymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the Launch project. |
| <code>env_uid</code> | <code>str</code> | The unique identifier of the deployment environment. |
| <code>deploy_uid</code> | <code>str</code> | The unique identifier of the deployment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Deployment](contentstack/models/deployment.py), [GetDeploymentErrorBody](contentstack/errors/get_deployment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Deployment](contentstack/models/deployment.py)</code> -- The requested deployment details.

**On `Failure`**: `error` is <code>[GetDeploymentErrorBody](contentstack/errors/get_deployment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_deployment_logs(project_uid: str, env_uid: str, deploy_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LogResponse, GetDeploymentLogsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the build and deployment logs for a specific deployment, useful for debugging failed deployments and monitoring build progress.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deployments.with_raw_response.get_deployment_logs(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LogResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDeploymentLogsErrorBody
```

**Async**

```python
result = await async_client.deployments.with_raw_response.get_deployment_logs(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LogResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDeploymentLogsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the Launch project. |
| <code>env_uid</code> | <code>str</code> | The unique identifier of the deployment environment. |
| <code>deploy_uid</code> | <code>str</code> | The unique identifier of the deployment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[LogResponse](contentstack/models/log_response.py), [GetDeploymentLogsErrorBody](contentstack/errors/get_deployment_logs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LogResponse](contentstack/models/log_response.py)</code> -- The deployment log output.

**On `Failure`**: `error` is <code>[GetDeploymentLogsErrorBody](contentstack/errors/get_deployment_logs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_server_logs(project_uid: str, env_uid: str, deploy_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LogResponse, GetServerLogsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves server-side runtime logs for a deployed environment, useful for debugging server-side rendering issues and monitoring application runtime behavior.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deployments.with_raw_response.get_server_logs(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LogResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetServerLogsErrorBody
```

**Async**

```python
result = await async_client.deployments.with_raw_response.get_server_logs(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LogResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetServerLogsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the Launch project. |
| <code>env_uid</code> | <code>str</code> | The unique identifier of the deployment environment. |
| <code>deploy_uid</code> | <code>str</code> | The unique identifier of the deployment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[LogResponse](contentstack/models/log_response.py), [GetServerLogsErrorBody](contentstack/errors/get_server_logs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LogResponse](contentstack/models/log_response.py)</code> -- The server runtime logs.

**On `Failure`**: `error` is <code>[GetServerLogsErrorBody](contentstack/errors/get_server_logs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Entries

> Source: [Entries](contentstack/apis/entries.py)

<details>
<summary><code>def create_entry(content_type_uid: str, api_key: str, body: CreateEntryRequest | CreateEntryRequestDict, *, locale: str | None = None, authtoken: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Entry2, CreateEntryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new entry for the specified content type. The entry data must conform to the content type schema. Newly created entries are in draft state and must be published separately.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entries.with_raw_response.create_entry(
    "some example string", "some example string", CreateEntryRequest(entry={}), locale="en-us"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Entry2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEntryErrorBody
```

**Async**

```python
result = await async_client.entries.with_raw_response.create_entry(
    "some example string", "some example string", CreateEntryRequest(entry={}), locale="en-us"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Entry2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEntryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>content_type_uid</code> | <code>str</code> | The unique identifier (UID) of the content type. |
| <code>api_key</code> | <code>str</code> | The API key identifying the Contentstack stack. |
| <code>body</code> | <code>[CreateEntryRequest](contentstack/models/create_entry_request.py) \| [CreateEntryRequestDict](contentstack/models/create_entry_request.py)</code> | The request body. |
| <code>locale</code> | <code>str \| None</code> | The locale code for localized content operations.<br>**Default**: <code>None</code> |
| <code>authtoken</code> | <code>str \| None</code> | User session token for authentication. Required if not using management token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Entry2](contentstack/models/entry2.py), [CreateEntryErrorBody](contentstack/errors/create_entry_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Entry2](contentstack/models/entry2.py)</code> -- The newly created entry.

**On `Failure`**: `error` is <code>[CreateEntryErrorBody](contentstack/errors/create_entry_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error2](contentstack/models/error2.py)</code> |
| 401 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_entry(content_type_uid: str, entry_uid: str, api_key: str, *, authtoken: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteEntryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an entry from the stack. Published entries must be unpublished before deletion. This action cannot be undone.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entries.with_raw_response.delete_entry(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEntryErrorBody
```

**Async**

```python
result = await async_client.entries.with_raw_response.delete_entry(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEntryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>content_type_uid</code> | <code>str</code> | The unique identifier (UID) of the content type. |
| <code>entry_uid</code> | <code>str</code> | The unique identifier (UID) of the entry. |
| <code>api_key</code> | <code>str</code> | The API key identifying the Contentstack stack. |
| <code>authtoken</code> | <code>str \| None</code> | User session token for authentication. Required if not using management token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [DeleteEntryErrorBody](contentstack/errors/delete_entry_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteEntryErrorBody](contentstack/errors/delete_entry_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_all_entries(content_type_uid: str, api_key: str, access_token: str, *, locale: str | None = None, skip: int | None = 0, limit: int | None = 100, query: str | None = None, include_count: bool | None = None, include_content_type: bool | None = None, include_reference: bool | None = None, only: str | None = None, except_: str | None = None, asc: str | None = None, desc: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EntryList, GetAllEntriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a list of all published entries for a particular content type. Supports filtering by query, localization, reference inclusion, pagination, sorting, and field selection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entries.with_raw_response.get_all_entries(
    "some example string", "some example string", "some example string", locale="en-us"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntryList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllEntriesErrorBody
```

**Async**

```python
result = await async_client.entries.with_raw_response.get_all_entries(
    "some example string", "some example string", "some example string", locale="en-us"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntryList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllEntriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>content_type_uid</code> | <code>str</code> | The unique identifier (UID) of the content type. |
| <code>api_key</code> | <code>str</code> | The API key for the Contentstack stack. |
| <code>access_token</code> | <code>str</code> | The delivery token for the stack environment. |
| <code>locale</code> | <code>str \| None</code> | The locale code to retrieve localized content. Defaults to the default locale of the stack if not specified.<br>**Default**: <code>None</code> |
| <code>skip</code> | <code>int \| None</code> | Number of entries to skip for pagination.<br>**Default**: <code>0</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of entries to return. Maximum allowed is 250.<br>**Default**: <code>100</code> |
| <code>query</code> | <code>str \| None</code> | A JSON-encoded query object to filter entries. Supports MongoDB-style query operators for field matching and comparison.<br>**Default**: <code>None</code> |
| <code>include_count</code> | <code>bool \| None</code> | Set to true to include the total count of matching entries.<br>**Default**: <code>None</code> |
| <code>include_content_type</code> | <code>bool \| None</code> | Set to true to include the content type schema in the response.<br>**Default**: <code>None</code> |
| <code>include_reference</code> | <code>bool \| None</code> | Set to true to include referenced entries inline in the response.<br>**Default**: <code>None</code> |
| <code>only</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response.<br>**Default**: <code>None</code> |
| <code>except_</code> | <code>str \| None</code> | Comma-separated list of fields to exclude from the response.<br>**Default**: <code>None</code> |
| <code>asc</code> | <code>str \| None</code> | Field name to sort results in ascending order.<br>**Default**: <code>None</code> |
| <code>desc</code> | <code>str \| None</code> | Field name to sort results in descending order.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[EntryList](contentstack/models/entry_list.py), [GetAllEntriesErrorBody](contentstack/errors/get_all_entries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EntryList](contentstack/models/entry_list.py)</code> -- A list of published entries for the specified content type.

**On `Failure`**: `error` is <code>[GetAllEntriesErrorBody](contentstack/errors/get_all_entries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_single_entry(content_type_uid: str, entry_uid: str, api_key: str, access_token: str, *, locale: str | None = None, include_reference: bool | None = None, version: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Entry, GetSingleEntryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific published entry identified by its UID within a given content type. Supports localization, reference inclusion, and field selection parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entries.with_raw_response.get_single_entry(
    "some example string", "some example string", "some example string", "some example string", locale="en-us"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Entry
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSingleEntryErrorBody
```

**Async**

```python
result = await async_client.entries.with_raw_response.get_single_entry(
    "some example string", "some example string", "some example string", "some example string", locale="en-us"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Entry
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSingleEntryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>content_type_uid</code> | <code>str</code> | The unique identifier (UID) of the content type. |
| <code>entry_uid</code> | <code>str</code> | The unique identifier (UID) of the entry. |
| <code>api_key</code> | <code>str</code> | The API key for the Contentstack stack. |
| <code>access_token</code> | <code>str</code> | The delivery token for the stack environment. |
| <code>locale</code> | <code>str \| None</code> | The locale code to retrieve localized content. Defaults to the default locale of the stack if not specified.<br>**Default**: <code>None</code> |
| <code>include_reference</code> | <code>bool \| None</code> | Set to true to include referenced entries inline in the response.<br>**Default**: <code>None</code> |
| <code>version</code> | <code>int \| None</code> | Retrieve a specific published version of the entry.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Entry](contentstack/models/entry.py), [GetSingleEntryErrorBody](contentstack/errors/get_single_entry_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Entry](contentstack/models/entry.py)</code> -- The requested entry object.

**On `Failure`**: `error` is <code>[GetSingleEntryErrorBody](contentstack/errors/get_single_entry_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def publish_entry(content_type_uid: str, entry_uid: str, api_key: str, body: PublishRequest | PublishRequestDict, *, authtoken: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PublishEntryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publishes an entry to one or more environments and locales. Publishing makes the entry available via the Content Delivery API for the specified environments.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entries.with_raw_response.publish_entry(
    "some example string", "some example string", "some example string", PublishRequest()
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PublishEntryErrorBody
```

**Async**

```python
result = await async_client.entries.with_raw_response.publish_entry(
    "some example string", "some example string", "some example string", PublishRequest()
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PublishEntryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>content_type_uid</code> | <code>str</code> | The unique identifier (UID) of the content type. |
| <code>entry_uid</code> | <code>str</code> | The unique identifier (UID) of the entry. |
| <code>api_key</code> | <code>str</code> | The API key identifying the Contentstack stack. |
| <code>body</code> | <code>[PublishRequest](contentstack/models/publish_request.py) \| [PublishRequestDict](contentstack/models/publish_request.py)</code> | The request body. |
| <code>authtoken</code> | <code>str \| None</code> | User session token for authentication. Required if not using management token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [PublishEntryErrorBody](contentstack/errors/publish_entry_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PublishEntryErrorBody](contentstack/errors/publish_entry_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error2](contentstack/models/error2.py)</code> |
| 401 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unpublish_entry(content_type_uid: str, entry_uid: str, api_key: str, body: PublishRequest | PublishRequestDict, *, authtoken: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UnpublishEntryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an entry from one or more environments, making it unavailable via the Content Delivery API for the specified environments.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entries.with_raw_response.unpublish_entry(
    "some example string", "some example string", "some example string", PublishRequest()
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnpublishEntryErrorBody
```

**Async**

```python
result = await async_client.entries.with_raw_response.unpublish_entry(
    "some example string", "some example string", "some example string", PublishRequest()
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnpublishEntryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>content_type_uid</code> | <code>str</code> | The unique identifier (UID) of the content type. |
| <code>entry_uid</code> | <code>str</code> | The unique identifier (UID) of the entry. |
| <code>api_key</code> | <code>str</code> | The API key identifying the Contentstack stack. |
| <code>body</code> | <code>[PublishRequest](contentstack/models/publish_request.py) \| [PublishRequestDict](contentstack/models/publish_request.py)</code> | The request body. |
| <code>authtoken</code> | <code>str \| None</code> | User session token for authentication. Required if not using management token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [UnpublishEntryErrorBody](contentstack/errors/unpublish_entry_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UnpublishEntryErrorBody](contentstack/errors/unpublish_entry_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error2](contentstack/models/error2.py)</code> |
| 401 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_entry(content_type_uid: str, entry_uid: str, api_key: str, body: UpdateEntryRequest | UpdateEntryRequestDict, *, locale: str | None = None, authtoken: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Entry2, UpdateEntryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the field values of an existing entry. Only the fields included in the request body are updated; other fields retain their current values.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entries.with_raw_response.update_entry(
    "some example string", "some example string", "some example string", UpdateEntryRequest(entry={}), locale="en-us"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Entry2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEntryErrorBody
```

**Async**

```python
result = await async_client.entries.with_raw_response.update_entry(
    "some example string", "some example string", "some example string", UpdateEntryRequest(entry={}), locale="en-us"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Entry2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEntryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>content_type_uid</code> | <code>str</code> | The unique identifier (UID) of the content type. |
| <code>entry_uid</code> | <code>str</code> | The unique identifier (UID) of the entry. |
| <code>api_key</code> | <code>str</code> | The API key identifying the Contentstack stack. |
| <code>body</code> | <code>[UpdateEntryRequest](contentstack/models/update_entry_request.py) \| [UpdateEntryRequestDict](contentstack/models/update_entry_request.py)</code> | The request body. |
| <code>locale</code> | <code>str \| None</code> | The locale code for localized content operations.<br>**Default**: <code>None</code> |
| <code>authtoken</code> | <code>str \| None</code> | User session token for authentication. Required if not using management token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Entry2](contentstack/models/entry2.py), [UpdateEntryErrorBody](contentstack/errors/update_entry_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Entry2](contentstack/models/entry2.py)</code> -- The updated entry.

**On `Failure`**: `error` is <code>[UpdateEntryErrorBody](contentstack/errors/update_entry_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error2](contentstack/models/error2.py)</code> |
| 401 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## EntryVariants

> Source: [EntryVariants](contentstack/apis/entry_variants.py)

<details>
<summary><code>def get_all_entry_variants(content_type_uid: str, entry_uid: str, api_key: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EntryVariantList, GetAllEntryVariantsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all personalization variants of a specific entry, including their variant UIDs and customized field values.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entry_variants.with_raw_response.get_all_entry_variants(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntryVariantList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllEntryVariantsErrorBody
```

**Async**

```python
result = await async_client.entry_variants.with_raw_response.get_all_entry_variants(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntryVariantList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllEntryVariantsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>content_type_uid</code> | <code>str</code> | The unique identifier (UID) of the content type. |
| <code>entry_uid</code> | <code>str</code> | The unique identifier (UID) of the entry. |
| <code>api_key</code> | <code>str</code> | The API key for the Contentstack stack. |
| <code>access_token</code> | <code>str</code> | The delivery token for the stack environment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[EntryVariantList](contentstack/models/entry_variant_list.py), [GetAllEntryVariantsErrorBody](contentstack/errors/get_all_entry_variants_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EntryVariantList](contentstack/models/entry_variant_list.py)</code> -- A list of variants for the specified entry.

**On `Failure`**: `error` is <code>[GetAllEntryVariantsErrorBody](contentstack/errors/get_all_entry_variants_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_single_entry_variant(content_type_uid: str, entry_uid: str, variant_uid: str, api_key: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EntryVariant, GetSingleEntryVariantErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific variant of an entry identified by the variant UID. Returns the customized field values for that variant.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entry_variants.with_raw_response.get_single_entry_variant(
    "some example string", "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntryVariant
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSingleEntryVariantErrorBody
```

**Async**

```python
result = await async_client.entry_variants.with_raw_response.get_single_entry_variant(
    "some example string", "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntryVariant
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSingleEntryVariantErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>content_type_uid</code> | <code>str</code> | The unique identifier (UID) of the content type. |
| <code>entry_uid</code> | <code>str</code> | The unique identifier (UID) of the entry. |
| <code>variant_uid</code> | <code>str</code> | The unique identifier (UID) of the entry variant. |
| <code>api_key</code> | <code>str</code> | The API key for the Contentstack stack. |
| <code>access_token</code> | <code>str</code> | The delivery token for the stack environment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[EntryVariant](contentstack/models/entry_variant.py), [GetSingleEntryVariantErrorBody](contentstack/errors/get_single_entry_variant_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EntryVariant](contentstack/models/entry_variant.py)</code> -- The requested entry variant object.

**On `Failure`**: `error` is <code>[GetSingleEntryVariantErrorBody](contentstack/errors/get_single_entry_variant_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Environments

> Source: [Environments](contentstack/apis/environments.py)

<details>
<summary><code>def create_environment(project_uid: str, body: CreateEnvironmentRequest | CreateEnvironmentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Environment2, CreateEnvironmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new deployment environment for a Launch project. Each environment can have its own domain, build configuration, and deployment settings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.create_environment(
    "some example string", CreateEnvironmentRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Environment2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEnvironmentErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.create_environment(
    "some example string", CreateEnvironmentRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Environment2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the Launch project. |
| <code>body</code> | <code>[CreateEnvironmentRequest](contentstack/models/create_environment_request.py) \| [CreateEnvironmentRequestDict](contentstack/models/create_environment_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Environment2](contentstack/models/environment2.py), [CreateEnvironmentErrorBody](contentstack/errors/create_environment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Environment2](contentstack/models/environment2.py)</code> -- The newly created environment.

**On `Failure`**: `error` is <code>[CreateEnvironmentErrorBody](contentstack/errors/create_environment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error2ContentstackEnvironmentsApi](contentstack/models/error2_contentstack_environments_api.py)</code> |
| 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_environment(project_uid: str, env_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteEnvironmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a deployment environment and its deployment history. This action is irreversible.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.delete_environment("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEnvironmentErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.delete_environment(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the Launch project. |
| <code>env_uid</code> | <code>str</code> | The unique identifier of the deployment environment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [DeleteEnvironmentErrorBody](contentstack/errors/delete_environment_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteEnvironmentErrorBody](contentstack/errors/delete_environment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| 404 | <code>[Error2ContentstackEnvironmentsApi](contentstack/models/error2_contentstack_environments_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_all_environments(api_key: str, *, authtoken: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentList, GetAllEnvironmentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all deployment environments configured for the stack, such as production, staging, and development.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.get_all_environments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllEnvironmentsErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.get_all_environments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllEnvironmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_key</code> | <code>str</code> | The API key identifying the Contentstack stack. |
| <code>authtoken</code> | <code>str \| None</code> | User session token for authentication. Required if not using management token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[EnvironmentList](contentstack/models/environment_list.py), [GetAllEnvironmentsErrorBody](contentstack/errors/get_all_environments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentList](contentstack/models/environment_list.py)</code> -- A list of environments in the stack.

**On `Failure`**: `error` is <code>[GetAllEnvironmentsErrorBody](contentstack/errors/get_all_environments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_environment(project_uid: str, env_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Environment2, GetEnvironmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for a specific deployment environment including its domain configuration, framework settings, and latest deployment status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.get_environment("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Environment2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEnvironmentErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.get_environment("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Environment2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the Launch project. |
| <code>env_uid</code> | <code>str</code> | The unique identifier of the deployment environment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Environment2](contentstack/models/environment2.py), [GetEnvironmentErrorBody](contentstack/errors/get_environment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Environment2](contentstack/models/environment2.py)</code> -- The requested environment.

**On `Failure`**: `error` is <code>[GetEnvironmentErrorBody](contentstack/errors/get_environment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| 404 | <code>[Error2ContentstackEnvironmentsApi](contentstack/models/error2_contentstack_environments_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_projects_by_project_uid_environments(project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentList2, GetProjectsByProjectUidEnvironmentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all deployment environments configured for a Launch project, including their domain configurations and current deployment status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.get_projects_by_project_uid_environments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentList2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectsByProjectUidEnvironmentsErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.get_projects_by_project_uid_environments(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentList2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectsByProjectUidEnvironmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the Launch project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[EnvironmentList2](contentstack/models/environment_list2.py), [GetProjectsByProjectUidEnvironmentsErrorBody](contentstack/errors/get_projects_by_project_uid_environments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentList2](contentstack/models/environment_list2.py)</code> -- A list of environments for the project.

**On `Failure`**: `error` is <code>[GetProjectsByProjectUidEnvironmentsErrorBody](contentstack/errors/get_projects_by_project_uid_environments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def revalidate_cache(project_uid: str, env_uid: str, *, body: ProjectsEnvironmentsRevalidateCacheRequest | ProjectsEnvironmentsRevalidateCacheRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RevalidateCacheErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers a CDN cache revalidation for the specified environment, forcing the CDN to fetch fresh content on the next request. Subject to cache revalidation quota limits per organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.revalidate_cache("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevalidateCacheErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.revalidate_cache(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevalidateCacheErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the Launch project. |
| <code>env_uid</code> | <code>str</code> | The unique identifier of the deployment environment. |
| <code>body</code> | <code>[ProjectsEnvironmentsRevalidateCacheRequest](contentstack/models/projects_environments_revalidate_cache_request.py) \| [ProjectsEnvironmentsRevalidateCacheRequestDict](contentstack/models/projects_environments_revalidate_cache_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [RevalidateCacheErrorBody](contentstack/errors/revalidate_cache_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RevalidateCacheErrorBody](contentstack/errors/revalidate_cache_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| 404 | <code>[Error2ContentstackEnvironmentsApi](contentstack/models/error2_contentstack_environments_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_environment(project_uid: str, env_uid: str, body: CreateEnvironmentRequest | CreateEnvironmentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Environment2, UpdateEnvironmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of a deployment environment such as domain settings or build configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.update_environment(
    "some example string", "some example string", CreateEnvironmentRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Environment2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEnvironmentErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.update_environment(
    "some example string", "some example string", CreateEnvironmentRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Environment2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the Launch project. |
| <code>env_uid</code> | <code>str</code> | The unique identifier of the deployment environment. |
| <code>body</code> | <code>[CreateEnvironmentRequest](contentstack/models/create_environment_request.py) \| [CreateEnvironmentRequestDict](contentstack/models/create_environment_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Environment2](contentstack/models/environment2.py), [UpdateEnvironmentErrorBody](contentstack/errors/update_environment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Environment2](contentstack/models/environment2.py)</code> -- The updated environment.

**On `Failure`**: `error` is <code>[UpdateEnvironmentErrorBody](contentstack/errors/update_environment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error2ContentstackEnvironmentsApi](contentstack/models/error2_contentstack_environments_api.py)</code> |
| 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](contentstack/apis/events.py)

<details>
<summary><code>def get_all_events(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventList, GetAllEventsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all custom event definitions in the Personalize project. Events are used to track user interactions and trigger audience membership updates.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.events.with_raw_response.get_all_events("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllEventsErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.get_all_events("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[EventList](contentstack/models/event_list.py), [GetAllEventsErrorBody](contentstack/errors/get_all_events_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EventList](contentstack/models/event_list.py)</code> -- A list of all events in the project.

**On `Failure`**: `error` is <code>[GetAllEventsErrorBody](contentstack/errors/get_all_events_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def track_events(x_project_uid: str, x_cs_personalize_user_uid: str, body: list[TrackEvent | TrackEventDict], *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, TrackEventsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records one or more user behavior events for experience analytics and audience evaluation. Supports both impression events (automatic tracking when experiences are shown) and custom events (defined in the Personalize Management API and triggered by specific user actions).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.events.with_raw_response.track_events(
    "some example string", "some example string", [TrackEvent(event_key="some example string")]
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TrackEventsErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.track_events(
    "some example string", "some example string", [TrackEvent(event_key="some example string")]
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TrackEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>x_cs_personalize_user_uid</code> | <code>str</code> | The unique identifier for the end user whose events are being tracked. |
| <code>body</code> | <code>list&#91;[TrackEvent](contentstack/models/track_event.py) \| [TrackEventDict](contentstack/models/track_event.py)&#93;</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [TrackEventsErrorBody](contentstack/errors/track_events_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[TrackEventsErrorBody](contentstack/errors/track_events_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ExecutionLogs

> Source: [ExecutionLogs](contentstack/apis/execution_logs.py)

<details>
<summary><code>def get_all_execution_logs(organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExecutionLogList, GetAllExecutionLogsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of execution log entries for all automations in the project, showing each run with its trigger context, status, and completion time.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.execution_logs.with_raw_response.get_all_execution_logs("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExecutionLogList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllExecutionLogsErrorBody
```

**Async**

```python
result = await async_client.execution_logs.with_raw_response.get_all_execution_logs(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExecutionLogList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllExecutionLogsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the automation project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ExecutionLogList](contentstack/models/execution_log_list.py), [GetAllExecutionLogsErrorBody](contentstack/errors/get_all_execution_logs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExecutionLogList](contentstack/models/execution_log_list.py)</code> -- A list of execution log entries.

**On `Failure`**: `error` is <code>[GetAllExecutionLogsErrorBody](contentstack/errors/get_all_execution_logs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_execution_log(organization_uid: str, project_uid: str, execution_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExecutionLog, GetExecutionLogErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the full details of a specific automation execution log entry, including step-by-step results and any error messages encountered.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.execution_logs.with_raw_response.get_execution_log(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExecutionLog
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetExecutionLogErrorBody
```

**Async**

```python
result = await async_client.execution_logs.with_raw_response.get_execution_log(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExecutionLog
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetExecutionLogErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the automation project. |
| <code>execution_uid</code> | <code>str</code> | The unique identifier of the execution log entry. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ExecutionLog](contentstack/models/execution_log.py), [GetExecutionLogErrorBody](contentstack/errors/get_execution_log_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExecutionLog](contentstack/models/execution_log.py)</code> -- The requested execution log entry.

**On `Failure`**: `error` is <code>[GetExecutionLogErrorBody](contentstack/errors/get_execution_log_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Experiences

> Source: [Experiences](contentstack/apis/experiences.py)

<details>
<summary><code>def create_experience(x_project_uid: str, body: CreateExperienceRequest | CreateExperienceRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Experience, CreateExperienceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new experience in the Personalize project. Experiences can be of type SEGMENTED (rule-based audience targeting) or AB_TEST (split testing with traffic distribution).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.experiences.with_raw_response.create_experience(
    "some example string", CreateExperienceRequest(name="some example string", type_=Type1.SEGMENTED)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Experience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateExperienceErrorBody
```

**Async**

```python
result = await async_client.experiences.with_raw_response.create_experience(
    "some example string", CreateExperienceRequest(name="some example string", type_=Type1.SEGMENTED)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Experience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateExperienceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[CreateExperienceRequest](contentstack/models/create_experience_request.py) \| [CreateExperienceRequestDict](contentstack/models/create_experience_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Experience](contentstack/models/experience.py), [CreateExperienceErrorBody](contentstack/errors/create_experience_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Experience](contentstack/models/experience.py)</code> -- The newly created experience.

**On `Failure`**: `error` is <code>[CreateExperienceErrorBody](contentstack/errors/create_experience_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_experience(id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteExperienceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an experience from the Personalize project. Only experiences in draft or inactive status can be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.experiences.with_raw_response.delete_experience("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteExperienceErrorBody
```

**Async**

```python
result = await async_client.experiences.with_raw_response.delete_experience(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteExperienceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The unique identifier of the experience. |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [DeleteExperienceErrorBody](contentstack/errors/delete_experience_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteExperienceErrorBody](contentstack/errors/delete_experience_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_all_experiences(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExperienceList, GetAllExperiencesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all experience configurations in the Personalize project, including their variant definitions and audience assignments.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.experiences.with_raw_response.get_all_experiences("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExperienceList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllExperiencesErrorBody
```

**Async**

```python
result = await async_client.experiences.with_raw_response.get_all_experiences("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExperienceList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllExperiencesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ExperienceList](contentstack/models/experience_list.py), [GetAllExperiencesErrorBody](contentstack/errors/get_all_experiences_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExperienceList](contentstack/models/experience_list.py)</code> -- A list of all experiences in the project.

**On `Failure`**: `error` is <code>[GetAllExperiencesErrorBody](contentstack/errors/get_all_experiences_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_experience(id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Experience, GetExperienceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for a specific experience including its variants, audience assignments, status, and configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.experiences.with_raw_response.get_experience("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Experience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetExperienceErrorBody
```

**Async**

```python
result = await async_client.experiences.with_raw_response.get_experience("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Experience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetExperienceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The unique identifier of the experience. |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Experience](contentstack/models/experience.py), [GetExperienceErrorBody](contentstack/errors/get_experience_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Experience](contentstack/models/experience.py)</code> -- The requested experience.

**On `Failure`**: `error` is <code>[GetExperienceErrorBody](contentstack/errors/get_experience_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_experience_priority(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExperiencePriority, GetExperiencePriorityErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the priority ordering of all active experiences, which determines which experience takes precedence when a user qualifies for multiple experiences.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.experiences.with_raw_response.get_experience_priority("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExperiencePriority
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetExperiencePriorityErrorBody
```

**Async**

```python
result = await async_client.experiences.with_raw_response.get_experience_priority("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExperiencePriority
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetExperiencePriorityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ExperiencePriority](contentstack/models/experience_priority.py), [GetExperiencePriorityErrorBody](contentstack/errors/get_experience_priority_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExperiencePriority](contentstack/models/experience_priority.py)</code> -- The current experience priority ordering.

**On `Failure`**: `error` is <code>[GetExperiencePriorityErrorBody](contentstack/errors/get_experience_priority_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_experience(id_: str, x_project_uid: str, body: CreateExperienceRequest | CreateExperienceRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Experience, UpdateExperienceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing experience including its name, variants, and audience targeting rules.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.experiences.with_raw_response.update_experience(
    "some example string",
    "some example string",
    CreateExperienceRequest(name="some example string", type_=Type1.SEGMENTED),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Experience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateExperienceErrorBody
```

**Async**

```python
result = await async_client.experiences.with_raw_response.update_experience(
    "some example string",
    "some example string",
    CreateExperienceRequest(name="some example string", type_=Type1.SEGMENTED),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Experience
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateExperienceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The unique identifier of the experience. |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[CreateExperienceRequest](contentstack/models/create_experience_request.py) \| [CreateExperienceRequestDict](contentstack/models/create_experience_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Experience](contentstack/models/experience.py), [UpdateExperienceErrorBody](contentstack/errors/update_experience_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Experience](contentstack/models/experience.py)</code> -- The updated experience.

**On `Failure`**: `error` is <code>[UpdateExperienceErrorBody](contentstack/errors/update_experience_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_experience_priority(x_project_uid: str, body: ExperiencePriority | ExperiencePriorityDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExperiencePriority, UpdateExperiencePriorityErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the priority ordering of experiences to control which experience is applied first when a user qualifies for multiple active experiences.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.experiences.with_raw_response.update_experience_priority("some example string", ExperiencePriority())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExperiencePriority
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateExperiencePriorityErrorBody
```

**Async**

```python
result = await async_client.experiences.with_raw_response.update_experience_priority(
    "some example string", ExperiencePriority()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExperiencePriority
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateExperiencePriorityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[ExperiencePriority](contentstack/models/experience_priority.py) \| [ExperiencePriorityDict](contentstack/models/experience_priority.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ExperiencePriority](contentstack/models/experience_priority.py), [UpdateExperiencePriorityErrorBody](contentstack/errors/update_experience_priority_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExperiencePriority](contentstack/models/experience_priority.py)</code> -- Updated experience priority ordering.

**On `Failure`**: `error` is <code>[UpdateExperiencePriorityErrorBody](contentstack/errors/update_experience_priority_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FileUploads

> Source: [FileUploads](contentstack/apis/file_uploads.py)

<details>
<summary><code>def get_project_upload_url(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UploadUrlResponse, GetProjectUploadUrlErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a pre-signed URL valid for 10 minutes for uploading a project build artifact file. Use this URL to upload your build package before triggering a deployment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.file_uploads.with_raw_response.get_project_upload_url()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UploadUrlResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectUploadUrlErrorBody
```

**Async**

```python
result = await async_client.file_uploads.with_raw_response.get_project_upload_url()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UploadUrlResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectUploadUrlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[UploadUrlResponse](contentstack/models/upload_url_response.py), [GetProjectUploadUrlErrorBody](contentstack/errors/get_project_upload_url_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UploadUrlResponse](contentstack/models/upload_url_response.py)</code> -- A pre-signed upload URL for project files.

**On `Failure`**: `error` is <code>[GetProjectUploadUrlErrorBody](contentstack/errors/get_project_upload_url_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Geolocation

> Source: [Geolocation](contentstack/apis/geolocation.py)

<details>
<summary><code>def get_geo_cities(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GeoList, GetGeoCitiesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of cities available for location-based audience targeting rules.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.geolocation.with_raw_response.get_geo_cities("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeoList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGeoCitiesErrorBody
```

**Async**

```python
result = await async_client.geolocation.with_raw_response.get_geo_cities("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeoList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGeoCitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[GeoList](contentstack/models/geo_list.py), [GetGeoCitiesErrorBody](contentstack/errors/get_geo_cities_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GeoList](contentstack/models/geo_list.py)</code> -- A list of cities.

**On `Failure`**: `error` is <code>[GetGeoCitiesErrorBody](contentstack/errors/get_geo_cities_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_geo_countries(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GeoList, GetGeoCountriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of countries available for location-based audience targeting rules.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.geolocation.with_raw_response.get_geo_countries("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeoList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGeoCountriesErrorBody
```

**Async**

```python
result = await async_client.geolocation.with_raw_response.get_geo_countries("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeoList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGeoCountriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[GeoList](contentstack/models/geo_list.py), [GetGeoCountriesErrorBody](contentstack/errors/get_geo_countries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GeoList](contentstack/models/geo_list.py)</code> -- A list of countries.

**On `Failure`**: `error` is <code>[GetGeoCountriesErrorBody](contentstack/errors/get_geo_countries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_geo_regions(x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GeoList, GetGeoRegionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of geographic regions available for location-based audience targeting rules.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.geolocation.with_raw_response.get_geo_regions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeoList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGeoRegionsErrorBody
```

**Async**

```python
result = await async_client.geolocation.with_raw_response.get_geo_regions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GeoList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGeoRegionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[GeoList](contentstack/models/geo_list.py), [GetGeoRegionsErrorBody](contentstack/errors/get_geo_regions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GeoList](contentstack/models/geo_list.py)</code> -- A list of geographic regions.

**On `Failure`**: `error` is <code>[GetGeoRegionsErrorBody](contentstack/errors/get_geo_regions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## GlobalFields

> Source: [GlobalFields](contentstack/apis/global_fields.py)

<details>
<summary><code>def get_all_global_fields(api_key: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GlobalFieldList, GetAllGlobalFieldsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches all reusable global field definitions available in the stack. Global fields can be embedded in content type schemas to create consistent field structures across multiple content types.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.global_fields.with_raw_response.get_all_global_fields("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GlobalFieldList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllGlobalFieldsErrorBody
```

**Async**

```python
result = await async_client.global_fields.with_raw_response.get_all_global_fields(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GlobalFieldList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllGlobalFieldsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_key</code> | <code>str</code> | The API key for the Contentstack stack. |
| <code>access_token</code> | <code>str</code> | The delivery token for the stack environment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[GlobalFieldList](contentstack/models/global_field_list.py), [GetAllGlobalFieldsErrorBody](contentstack/errors/get_all_global_fields_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GlobalFieldList](contentstack/models/global_field_list.py)</code> -- A list of global fields defined in the stack.

**On `Failure`**: `error` is <code>[GetAllGlobalFieldsErrorBody](contentstack/errors/get_all_global_fields_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_single_global_field(global_field_uid: str, api_key: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GlobalField, GetSingleGlobalFieldErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the schema and metadata for a specific global field identified by its UID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.global_fields.with_raw_response.get_single_global_field(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GlobalField
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSingleGlobalFieldErrorBody
```

**Async**

```python
result = await async_client.global_fields.with_raw_response.get_single_global_field(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GlobalField
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSingleGlobalFieldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>global_field_uid</code> | <code>str</code> | The unique identifier (UID) of the global field. |
| <code>api_key</code> | <code>str</code> | The API key for the Contentstack stack. |
| <code>access_token</code> | <code>str</code> | The delivery token for the stack environment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[GlobalField](contentstack/models/global_field.py), [GetSingleGlobalFieldErrorBody](contentstack/errors/get_single_global_field_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GlobalField](contentstack/models/global_field.py)</code> -- The requested global field object.

**On `Failure`**: `error` is <code>[GetSingleGlobalFieldErrorBody](contentstack/errors/get_single_global_field_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## LlmConfiguration

> Source: [LlmConfiguration](contentstack/apis/llm_configuration.py)

<details>
<summary><code>def configure_llm(brand_kit_uid: str, organization_uid: str, body: CreateLlmConfigRequest | CreateLlmConfigRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LlmConfig, ConfigureLlmErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers custom API credentials for an LLM provider to enable content generation through the organization's own LLM subscription rather than Contentstack's default AI infrastructure.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.llm_configuration.with_raw_response.configure_llm(
    "some example string",
    "some example string",
    CreateLlmConfigRequest(provider=Provider.OPENAI, api_key="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LlmConfig
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ConfigureLlmErrorBody
```

**Async**

```python
result = await async_client.llm_configuration.with_raw_response.configure_llm(
    "some example string",
    "some example string",
    CreateLlmConfigRequest(provider=Provider.OPENAI, api_key="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LlmConfig
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ConfigureLlmErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>brand_kit_uid</code> | <code>str</code> | The unique identifier of the Brand Kit. |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>body</code> | <code>[CreateLlmConfigRequest](contentstack/models/create_llm_config_request.py) \| [CreateLlmConfigRequestDict](contentstack/models/create_llm_config_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[LlmConfig](contentstack/models/llm_config.py), [ConfigureLlmErrorBody](contentstack/errors/configure_llm_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LlmConfig](contentstack/models/llm_config.py)</code> -- LLM configuration saved successfully.

**On `Failure`**: `error` is <code>[ConfigureLlmErrorBody](contentstack/errors/configure_llm_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_llm_config(brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LlmConfig, GetLlmConfigErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the custom LLM provider credentials configured for a Brand Kit. This allows organizations to use their own LLM API subscriptions for content generation within the Brand Kit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.llm_configuration.with_raw_response.get_llm_config("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LlmConfig
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLlmConfigErrorBody
```

**Async**

```python
result = await async_client.llm_configuration.with_raw_response.get_llm_config(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LlmConfig
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLlmConfigErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>brand_kit_uid</code> | <code>str</code> | The unique identifier of the Brand Kit. |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[LlmConfig](contentstack/models/llm_config.py), [GetLlmConfigErrorBody](contentstack/errors/get_llm_config_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LlmConfig](contentstack/models/llm_config.py)</code> -- The LLM configuration for the Brand Kit.

**On `Failure`**: `error` is <code>[GetLlmConfigErrorBody](contentstack/errors/get_llm_config_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ManifestApi

> Source: [ManifestApi](contentstack/apis/manifest_api.py)

<details>
<summary><code>def get_manifest(x_project_uid: str, *, x_cs_personalize_user_uid: str | None = None, x_forwarded_for: str | None = None, user_agent: str | None = None, referer: str | None = None, x_page_url: str | None = None, x_live_attributes: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Manifest, GetManifestErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all active personalization experiences and their corresponding content variant mappings for the current user. The manifest is evaluated in real-time based on the user's attributes and current audience memberships. This endpoint is called at the beginning of a user session to determine which content variants to display.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.manifest_api.with_raw_response.get_manifest("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Manifest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetManifestErrorBody
```

**Async**

```python
result = await async_client.manifest_api.with_raw_response.get_manifest("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Manifest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetManifestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>x_cs_personalize_user_uid</code> | <code>str \| None</code> | The unique identifier for the end user. If not provided, a new anonymous user will be created and the UID returned in the response headers.<br>**Default**: <code>None</code> |
| <code>x_forwarded_for</code> | <code>str \| None</code> | Original client IP address for geolocation-based targeting.<br>**Default**: <code>None</code> |
| <code>user_agent</code> | <code>str \| None</code> | User agent string for device-based targeting rules.<br>**Default**: <code>None</code> |
| <code>referer</code> | <code>str \| None</code> | Referring URL for referral-based audience rules.<br>**Default**: <code>None</code> |
| <code>x_page_url</code> | <code>str \| None</code> | Current page URL for page-based audience targeting rules.<br>**Default**: <code>None</code> |
| <code>x_live_attributes</code> | <code>str \| None</code> | JSON-encoded object of real-time attribute values to evaluate audience rules against without persisting them.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Manifest](contentstack/models/manifest.py), [GetManifestErrorBody](contentstack/errors/get_manifest_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Manifest](contentstack/models/manifest.py)</code> -- The personalization manifest with active experiences and variants.

**On `Failure`**: `error` is <code>[GetManifestErrorBody](contentstack/errors/get_manifest_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](contentstack/apis/organizations.py)

<details>
<summary><code>def get_all_organizations(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OrganizationList, GetAllOrganizationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all Contentstack organizations that the authenticated user is a member of, along with their roles and permissions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.organizations.with_raw_response.get_all_organizations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OrganizationList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllOrganizationsErrorBody
```

**Async**

```python
result = await async_client.organizations.with_raw_response.get_all_organizations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OrganizationList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllOrganizationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[OrganizationList](contentstack/models/organization_list.py), [GetAllOrganizationsErrorBody](contentstack/errors/get_all_organizations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OrganizationList](contentstack/models/organization_list.py)</code> -- A list of organizations the user belongs to.

**On `Failure`**: `error` is <code>[GetAllOrganizationsErrorBody](contentstack/errors/get_all_organizations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_organization(organization_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Organization, GetOrganizationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for a specific organization identified by its UID, including plan information and configuration settings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.organizations.with_raw_response.get_organization("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Organization
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrganizationErrorBody
```

**Async**

```python
result = await async_client.organizations.with_raw_response.get_organization("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Organization
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrganizationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Organization](contentstack/models/organization.py), [GetOrganizationErrorBody](contentstack/errors/get_organization_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Organization](contentstack/models/organization.py)</code> -- The requested organization details.

**On `Failure`**: `error` is <code>[GetOrganizationErrorBody](contentstack/errors/get_organization_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_organization_stacks(organization_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StackList, GetOrganizationStacksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all stacks within a given organization that the authenticated user has access to.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.organizations.with_raw_response.get_organization_stacks("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StackList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrganizationStacksErrorBody
```

**Async**

```python
result = await async_client.organizations.with_raw_response.get_organization_stacks("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StackList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetOrganizationStacksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[StackList](contentstack/models/stack_list.py), [GetOrganizationStacksErrorBody](contentstack/errors/get_organization_stacks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StackList](contentstack/models/stack_list.py)</code> -- A list of stacks in the organization.

**On `Failure`**: `error` is <code>[GetOrganizationStacksErrorBody](contentstack/errors/get_organization_stacks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](contentstack/apis/projects.py)

<details>
<summary><code>def create_project(organization_uid: str, body: CreateProjectRequest | CreateProjectRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project, CreateProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new automation project within the specified organization. Projects serve as organizational containers for automations and shared configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.create_project(
    "some example string", CreateProjectRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProjectErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.create_project(
    "some example string", CreateProjectRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>body</code> | <code>[CreateProjectRequest](contentstack/models/create_project_request.py) \| [CreateProjectRequestDict](contentstack/models/create_project_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Project](contentstack/models/project.py), [CreateProjectErrorBody](contentstack/errors/create_project_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project](contentstack/models/project.py)</code> -- The newly created project.

**On `Failure`**: `error` is <code>[CreateProjectErrorBody](contentstack/errors/create_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_project(organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an automation project and all its automations, variables, and configuration. This action is irreversible.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.delete_project("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteProjectErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.delete_project("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the automation project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [DeleteProjectErrorBody](contentstack/errors/delete_project_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteProjectErrorBody](contentstack/errors/delete_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_projects_by_project_uid(project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteProjectsByProjectUidErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a Launch project and all its environments and deployment history. This action is irreversible.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.delete_projects_by_project_uid("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteProjectsByProjectUidErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.delete_projects_by_project_uid("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteProjectsByProjectUidErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the Launch project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [DeleteProjectsByProjectUidErrorBody](contentstack/errors/delete_projects_by_project_uid_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteProjectsByProjectUidErrorBody](contentstack/errors/delete_projects_by_project_uid_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_all_projects(organization_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectList, GetAllProjectsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all automation projects within the specified organization. Each project contains automations, variables, and external service account connections.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.get_all_projects("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllProjectsErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.get_all_projects("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllProjectsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ProjectList](contentstack/models/project_list.py), [GetAllProjectsErrorBody](contentstack/errors/get_all_projects_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectList](contentstack/models/project_list.py)</code> -- A list of automation projects in the organization.

**On `Failure`**: `error` is <code>[GetAllProjectsErrorBody](contentstack/errors/get_all_projects_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_project(organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project, GetProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for a specific automation project including its metadata, creation date, and current status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.get_project("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.get_project("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the automation project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Project](contentstack/models/project.py), [GetProjectErrorBody](contentstack/errors/get_project_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project](contentstack/models/project.py)</code> -- The requested project details.

**On `Failure`**: `error` is <code>[GetProjectErrorBody](contentstack/errors/get_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_projects(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectList2, GetProjectsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all Launch projects accessible to the authenticated user or organization. Returns project metadata including names, creation dates, and environment counts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.get_projects()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectList2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectsErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.get_projects()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectList2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ProjectList2](contentstack/models/project_list2.py), [GetProjectsErrorBody](contentstack/errors/get_projects_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectList2](contentstack/models/project_list2.py)</code> -- A list of Launch projects.

**On `Failure`**: `error` is <code>[GetProjectsErrorBody](contentstack/errors/get_projects_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_projects_by_project_uid(project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project2, GetProjectsByProjectUidErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific Launch project including its configuration, current status, and linked Contentstack stack.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.get_projects_by_project_uid("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectsByProjectUidErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.get_projects_by_project_uid("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectsByProjectUidErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the Launch project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Project2](contentstack/models/project2.py), [GetProjectsByProjectUidErrorBody](contentstack/errors/get_projects_by_project_uid_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project2](contentstack/models/project2.py)</code> -- The requested Launch project.

**On `Failure`**: `error` is <code>[GetProjectsByProjectUidErrorBody](contentstack/errors/get_projects_by_project_uid_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_projects(body: CreateProjectRequest2 | CreateProjectRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project2, PostProjectsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Launch project for deploying a web application. Projects serve as the top-level container for environments and deployments.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.post_projects(CreateProjectRequest2(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostProjectsErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.post_projects(CreateProjectRequest2(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostProjectsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateProjectRequest2](contentstack/models/create_project_request2.py) \| [CreateProjectRequest2Dict](contentstack/models/create_project_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Project2](contentstack/models/project2.py), [PostProjectsErrorBody](contentstack/errors/post_projects_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project2](contentstack/models/project2.py)</code> -- The newly created Launch project.

**On `Failure`**: `error` is <code>[PostProjectsErrorBody](contentstack/errors/post_projects_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_projects_by_project_uid(project_uid: str, body: CreateProjectRequest2 | CreateProjectRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project2, PutProjectsByProjectUidErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing Launch project such as its name, description, or framework settings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.put_projects_by_project_uid(
    "some example string", CreateProjectRequest2(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutProjectsByProjectUidErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.put_projects_by_project_uid(
    "some example string", CreateProjectRequest2(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutProjectsByProjectUidErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the Launch project. |
| <code>body</code> | <code>[CreateProjectRequest2](contentstack/models/create_project_request2.py) \| [CreateProjectRequest2Dict](contentstack/models/create_project_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Project2](contentstack/models/project2.py), [PutProjectsByProjectUidErrorBody](contentstack/errors/put_projects_by_project_uid_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project2](contentstack/models/project2.py)</code> -- The updated Launch project.

**On `Failure`**: `error` is <code>[PutProjectsByProjectUidErrorBody](contentstack/errors/put_projects_by_project_uid_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_project(organization_uid: str, project_uid: str, body: CreateProjectRequest | CreateProjectRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project, UpdateProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name or description of an existing automation project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.update_project(
    "some example string", "some example string", CreateProjectRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProjectErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.update_project(
    "some example string", "some example string", CreateProjectRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the automation project. |
| <code>body</code> | <code>[CreateProjectRequest](contentstack/models/create_project_request.py) \| [CreateProjectRequestDict](contentstack/models/create_project_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Project](contentstack/models/project.py), [UpdateProjectErrorBody](contentstack/errors/update_project_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project](contentstack/models/project.py)</code> -- The updated project.

**On `Failure`**: `error` is <code>[UpdateProjectErrorBody](contentstack/errors/update_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ScimGroups

> Source: [ScimGroups](contentstack/apis/scim_groups.py)

<details>
<summary><code>def create_scim_group(organization_uid: str, body: ScimGroup | ScimGroupDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimGroup, CreateScimGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new group in the Contentstack organization via SCIM. Groups can be mapped to specific roles and stacks in Contentstack to control member access permissions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scim_groups.with_raw_response.create_scim_group("some example string", ScimGroup())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateScimGroupErrorBody
```

**Async**

```python
result = await async_client.scim_groups.with_raw_response.create_scim_group("some example string", ScimGroup())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateScimGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the Contentstack organization. |
| <code>body</code> | <code>[ScimGroup](contentstack/models/scim_group.py) \| [ScimGroupDict](contentstack/models/scim_group.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ScimGroup](contentstack/models/scim_group.py), [CreateScimGroupErrorBody](contentstack/errors/create_scim_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimGroup](contentstack/models/scim_group.py)</code> -- The newly created SCIM group resource.

**On `Failure`**: `error` is <code>[CreateScimGroupErrorBody](contentstack/errors/create_scim_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ScimError](contentstack/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_scim_group(organization_uid: str, group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteScimGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a SCIM group from the Contentstack organization. Members of the group retain their individual user accounts but lose the role permissions granted by the group mapping.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scim_groups.with_raw_response.delete_scim_group("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteScimGroupErrorBody
```

**Async**

```python
result = await async_client.scim_groups.with_raw_response.delete_scim_group(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteScimGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the Contentstack organization. |
| <code>group_id</code> | <code>str</code> | The SCIM group ID of the group within the organization. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [DeleteScimGroupErrorBody](contentstack/errors/delete_scim_group_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteScimGroupErrorBody](contentstack/errors/delete_scim_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ScimError](contentstack/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_scim_group(organization_uid: str, group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimGroup, GetScimGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the SCIM Group resource for a specific group by its SCIM group ID within the organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scim_groups.with_raw_response.get_scim_group("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScimGroupErrorBody
```

**Async**

```python
result = await async_client.scim_groups.with_raw_response.get_scim_group("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScimGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the Contentstack organization. |
| <code>group_id</code> | <code>str</code> | The SCIM group ID of the group within the organization. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ScimGroup](contentstack/models/scim_group.py), [GetScimGroupErrorBody](contentstack/errors/get_scim_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimGroup](contentstack/models/scim_group.py)</code> -- The SCIM group resource.

**On `Failure`**: `error` is <code>[GetScimGroupErrorBody](contentstack/errors/get_scim_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ScimError](contentstack/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_scim_groups(organization_uid: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimListResponse, ListScimGroupsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all groups in the organization following the SCIM 2.0 ListResponse format. Supports filtering by displayName for group lookup during IdP sync operations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scim_groups.with_raw_response.list_scim_groups("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListScimGroupsErrorBody
```

**Async**

```python
result = await async_client.scim_groups.with_raw_response.list_scim_groups("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListScimGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the Contentstack organization. |
| <code>filter_</code> | <code>str \| None</code> | SCIM filter expression for searching groups. Example: displayName eq "Editors"<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ScimListResponse](contentstack/models/scim_list_response.py), [ListScimGroupsErrorBody](contentstack/errors/list_scim_groups_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimListResponse](contentstack/models/scim_list_response.py)</code> -- A SCIM ListResponse containing group resources.

**On `Failure`**: `error` is <code>[ListScimGroupsErrorBody](contentstack/errors/list_scim_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ScimError](contentstack/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def replace_scim_group(organization_uid: str, group_id: str, body: ScimGroup | ScimGroupDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimGroup, ReplaceScimGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fully replaces a SCIM group resource including all member assignments. Use this to synchronize the complete group membership from the IdP.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scim_groups.with_raw_response.replace_scim_group(
    "some example string", "some example string", ScimGroup()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReplaceScimGroupErrorBody
```

**Async**

```python
result = await async_client.scim_groups.with_raw_response.replace_scim_group(
    "some example string", "some example string", ScimGroup()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReplaceScimGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the Contentstack organization. |
| <code>group_id</code> | <code>str</code> | The SCIM group ID of the group within the organization. |
| <code>body</code> | <code>[ScimGroup](contentstack/models/scim_group.py) \| [ScimGroupDict](contentstack/models/scim_group.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ScimGroup](contentstack/models/scim_group.py), [ReplaceScimGroupErrorBody](contentstack/errors/replace_scim_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimGroup](contentstack/models/scim_group.py)</code> -- The updated SCIM group resource.

**On `Failure`**: `error` is <code>[ReplaceScimGroupErrorBody](contentstack/errors/replace_scim_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ScimError](contentstack/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_scim_group(organization_uid: str, group_id: str, body: ScimPatchRequest | ScimPatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimGroup, UpdateScimGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a SCIM group using SCIM 2.0 PATCH operations. Commonly used to add or remove individual members from the group without replacing the entire membership list.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scim_groups.with_raw_response.update_scim_group(
    "some example string", "some example string", ScimPatchRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateScimGroupErrorBody
```

**Async**

```python
result = await async_client.scim_groups.with_raw_response.update_scim_group(
    "some example string", "some example string", ScimPatchRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateScimGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the Contentstack organization. |
| <code>group_id</code> | <code>str</code> | The SCIM group ID of the group within the organization. |
| <code>body</code> | <code>[ScimPatchRequest](contentstack/models/scim_patch_request.py) \| [ScimPatchRequestDict](contentstack/models/scim_patch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ScimGroup](contentstack/models/scim_group.py), [UpdateScimGroupErrorBody](contentstack/errors/update_scim_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimGroup](contentstack/models/scim_group.py)</code> -- The updated SCIM group resource.

**On `Failure`**: `error` is <code>[UpdateScimGroupErrorBody](contentstack/errors/update_scim_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ScimError](contentstack/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ScimSchemaDiscovery

> Source: [ScimSchemaDiscovery](contentstack/apis/scim_schema_discovery.py)

<details>
<summary><code>def get_scim_resource_types(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimListResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the SCIM resource types supported by the Contentstack SCIM API including Users and Groups, enabling IdP clients to discover available endpoints and their schemas.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scim_schema_discovery.with_raw_response.get_scim_resource_types()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.scim_schema_discovery.with_raw_response.get_scim_resource_types()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ScimListResponse](contentstack/models/scim_list_response.py), [RawError](contentstack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimListResponse](contentstack/models/scim_list_response.py)</code> -- A list of SCIM resource types.

**On `Failure`**: `error` is <code>[RawError](contentstack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_scim_schemas(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimListResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the SCIM schemas supported by the Contentstack SCIM API, enabling IdP clients to understand the available attributes for User and Group resources.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.scim_schema_discovery.with_raw_response.get_scim_schemas()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.scim_schema_discovery.with_raw_response.get_scim_schemas()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[ScimListResponse](contentstack/models/scim_list_response.py), [RawError](contentstack/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimListResponse](contentstack/models/scim_list_response.py)</code> -- A list of SCIM schemas supported by the API.

**On `Failure`**: `error` is <code>[RawError](contentstack/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Stacks

> Source: [Stacks](contentstack/apis/stacks.py)

<details>
<summary><code>def create_stack(organization_uid: str, body: CreateStackRequest | CreateStackRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Stack, CreateStackErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Contentstack stack within an organization. A stack is an independent repository for content, assets, and configuration within a Contentstack account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stacks.with_raw_response.create_stack(
    "some example string",
    CreateStackRequest(stack=Stack2(name="some example string", master_locale="some example string")),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stack
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStackErrorBody
```

**Async**

```python
result = await async_client.stacks.with_raw_response.create_stack(
    "some example string",
    CreateStackRequest(stack=Stack2(name="some example string", master_locale="some example string")),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stack
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStackErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The UID of the organization in which to create the stack. |
| <code>body</code> | <code>[CreateStackRequest](contentstack/models/create_stack_request.py) \| [CreateStackRequestDict](contentstack/models/create_stack_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Stack](contentstack/models/stack.py), [CreateStackErrorBody](contentstack/errors/create_stack_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Stack](contentstack/models/stack.py)</code> -- The newly created stack.

**On `Failure`**: `error` is <code>[CreateStackErrorBody](contentstack/errors/create_stack_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_stack(api_key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteStackErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a stack and all its contents. This action is irreversible and will remove all content types, entries, assets, and configuration from the stack.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stacks.with_raw_response.delete_stack("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteStackErrorBody
```

**Async**

```python
result = await async_client.stacks.with_raw_response.delete_stack("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteStackErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_key</code> | <code>str</code> | The API key identifying the Contentstack stack. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [DeleteStackErrorBody](contentstack/errors/delete_stack_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteStackErrorBody](contentstack/errors/delete_stack_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_all_stacks(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StackList, GetAllStacksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all stacks accessible to the authenticated user, optionally filtered by organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stacks.with_raw_response.get_all_stacks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StackList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllStacksErrorBody
```

**Async**

```python
result = await async_client.stacks.with_raw_response.get_all_stacks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StackList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllStacksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[StackList](contentstack/models/stack_list.py), [GetAllStacksErrorBody](contentstack/errors/get_all_stacks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StackList](contentstack/models/stack_list.py)</code> -- A list of accessible stacks.

**On `Failure`**: `error` is <code>[GetAllStacksErrorBody](contentstack/errors/get_all_stacks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_stack(api_key: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Stack, GetStackErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for a specific stack identified by its API key, including configuration, plan, and region information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stacks.with_raw_response.get_stack("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stack
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStackErrorBody
```

**Async**

```python
result = await async_client.stacks.with_raw_response.get_stack("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stack
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStackErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_key</code> | <code>str</code> | The API key identifying the Contentstack stack. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Stack](contentstack/models/stack.py), [GetStackErrorBody](contentstack/errors/get_stack_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Stack](contentstack/models/stack.py)</code> -- The requested stack details.

**On `Failure`**: `error` is <code>[GetStackErrorBody](contentstack/errors/get_stack_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_stack(api_key: str, body: UpdateStackRequest | UpdateStackRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Stack, UpdateStackErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates settings and metadata for a specific stack such as name, description, and master locale configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stacks.with_raw_response.update_stack("some example string", UpdateStackRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stack
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateStackErrorBody
```

**Async**

```python
result = await async_client.stacks.with_raw_response.update_stack("some example string", UpdateStackRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Stack
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateStackErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_key</code> | <code>str</code> | The API key identifying the Contentstack stack. |
| <code>body</code> | <code>[UpdateStackRequest](contentstack/models/update_stack_request.py) \| [UpdateStackRequestDict](contentstack/models/update_stack_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Stack](contentstack/models/stack.py), [UpdateStackErrorBody](contentstack/errors/update_stack_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Stack](contentstack/models/stack.py)</code> -- The updated stack object.

**On `Failure`**: `error` is <code>[UpdateStackErrorBody](contentstack/errors/update_stack_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Synchronization

> Source: [Synchronization](contentstack/apis/synchronization.py)

<details>
<summary><code>def sync_content(api_key: str, access_token: str, *, init: bool | None = None, sync_token: str | None = None, pagination_token: str | None = None, type_: Type1ContentstackContentDeliverySynchronizationApiOrStr | None = None, content_type_uid: str | None = None, locale: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SyncResponse, SyncContentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates an initial sync or continues a paginated sync of all published entries and assets in the stack. Use init=true for the first sync to receive a sync token. Use the sync_token from subsequent responses to fetch only the changes since the last sync.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.synchronization.with_raw_response.sync_content(
    "some example string", "some example string", locale="en-us"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SyncContentErrorBody
```

**Async**

```python
result = await async_client.synchronization.with_raw_response.sync_content(
    "some example string", "some example string", locale="en-us"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SyncResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SyncContentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_key</code> | <code>str</code> | The API key for the Contentstack stack. |
| <code>access_token</code> | <code>str</code> | The delivery token for the stack environment. |
| <code>init</code> | <code>bool \| None</code> | Set to true to initiate the first sync and receive a sync token.<br>**Default**: <code>None</code> |
| <code>sync_token</code> | <code>str \| None</code> | The token received from a previous sync response. Use to fetch only changes since the last sync.<br>**Default**: <code>None</code> |
| <code>pagination_token</code> | <code>str \| None</code> | Token to retrieve the next page of results in a large sync response.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>[Type1ContentstackContentDeliverySynchronizationApiOrStr](contentstack/models/enums/type1_contentstack_content_delivery_synchronization_api.py) \| None</code> | Filter sync results by content type. Options: entry_published, entry_unpublished, entry_deleted, asset_published, asset_unpublished, asset_deleted, content_type_deleted.<br>**Default**: <code>None</code> |
| <code>content_type_uid</code> | <code>str \| None</code> | Filter sync results to a specific content type UID.<br>**Default**: <code>None</code> |
| <code>locale</code> | <code>str \| None</code> | The locale code to retrieve localized content. Defaults to the default locale of the stack if not specified.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[SyncResponse](contentstack/models/sync_response.py), [SyncContentErrorBody](contentstack/errors/sync_content_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SyncResponse](contentstack/models/sync_response.py)</code> -- Sync results with a sync_token or pagination_token for continuation.

**On `Failure`**: `error` is <code>[SyncContentErrorBody](contentstack/errors/sync_content_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorContentstackAssetsApi](contentstack/models/error_contentstack_assets_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## UserAttributes

> Source: [UserAttributes](contentstack/apis/user_attributes.py)

<details>
<summary><code>def merge_user_attributes(x_project_uid: str, body: MergeUserAttributesRequest | MergeUserAttributesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, MergeUserAttributesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Merges the attributes of a source user identity into a target user identity. This is used in identity resolution scenarios where an anonymous user record needs to be combined with an authenticated user record upon login, preserving all accumulated behavioral and attribute data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.user_attributes.with_raw_response.merge_user_attributes(
    "some example string",
    MergeUserAttributesRequest(source_user_uid="some example string", target_user_uid="some example string"),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MergeUserAttributesErrorBody
```

**Async**

```python
result = await async_client.user_attributes.with_raw_response.merge_user_attributes(
    "some example string",
    MergeUserAttributesRequest(source_user_uid="some example string", target_user_uid="some example string"),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MergeUserAttributesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[MergeUserAttributesRequest](contentstack/models/merge_user_attributes_request.py) \| [MergeUserAttributesRequestDict](contentstack/models/merge_user_attributes_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [MergeUserAttributesErrorBody](contentstack/errors/merge_user_attributes_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[MergeUserAttributesErrorBody](contentstack/errors/merge_user_attributes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_user_attributes(x_project_uid: str, body: dict[str, Any], *, x_cs_personalize_user_uid: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SetUserAttributesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Persists custom user attribute values at the Personalize Edge for use in audience rule evaluation. Attributes set via this endpoint are stored against the user's identifier and used in all subsequent manifest requests. Use this endpoint to update attributes based on user actions or profile data from external systems.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.user_attributes.with_raw_response.set_user_attributes("some example string", {"key": {}})
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetUserAttributesErrorBody
```

**Async**

```python
result = await async_client.user_attributes.with_raw_response.set_user_attributes("some example string", {"key": {}})
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetUserAttributesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_project_uid</code> | <code>str</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>dict&#91;str, Any&#93;</code> | The request body. |
| <code>x_cs_personalize_user_uid</code> | <code>str \| None</code> | The unique identifier for the end user. If not provided, a new anonymous user will be created and the UID returned in the response headers.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [SetUserAttributesErrorBody](contentstack/errors/set_user_attributes_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SetUserAttributesErrorBody](contentstack/errors/set_user_attributes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[ErrorContentstackPersonalizeManagementAttributesApi](contentstack/models/error_contentstack_personalize_management_attributes_api.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## UserSessions

> Source: [UserSessions](contentstack/apis/user_sessions.py)

<details>
<summary><code>def login_user(body: LoginRequest | LoginRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LoginResponse, LoginUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Authenticates a user with their email and password and returns an authtoken for use in subsequent API requests. The authtoken is valid for the duration of the session.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.user_sessions.with_raw_response.login_user(
    LoginRequest(user=User2(email="user@example.com", password="some example password"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LoginResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LoginUserErrorBody
```

**Async**

```python
result = await async_client.user_sessions.with_raw_response.login_user(
    LoginRequest(user=User2(email="user@example.com", password="some example password"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LoginResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LoginUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LoginRequest](contentstack/models/login_request.py) \| [LoginRequestDict](contentstack/models/login_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[LoginResponse](contentstack/models/login_response.py), [LoginUserErrorBody](contentstack/errors/login_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LoginResponse](contentstack/models/login_response.py)</code> -- Successful authentication with authtoken.

**On `Failure`**: `error` is <code>[LoginUserErrorBody](contentstack/errors/login_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def logout_user(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, LogoutUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invalidates the current user session and authtoken, signing the user out of all Contentstack sessions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.user_sessions.with_raw_response.logout_user()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LogoutUserErrorBody
```

**Async**

```python
result = await async_client.user_sessions.with_raw_response.logout_user()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LogoutUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [LogoutUserErrorBody](contentstack/errors/logout_user_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[LogoutUserErrorBody](contentstack/errors/logout_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](contentstack/apis/users.py)

<details>
<summary><code>def get_user(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User, GetUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the account details of the currently authenticated user, including profile information and organization memberships.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.get_user()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.get_user()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[User](contentstack/models/user.py), [GetUserErrorBody](contentstack/errors/get_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[User](contentstack/models/user.py)</code> -- The current user's account details.

**On `Failure`**: `error` is <code>[GetUserErrorBody](contentstack/errors/get_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_user(body: UpdateUserRequest | UpdateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User, UpdateUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates profile information for the currently authenticated user, including first name, last name, and other account attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.update_user(UpdateUserRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.update_user(UpdateUserRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateUserRequest](contentstack/models/update_user_request.py) \| [UpdateUserRequestDict](contentstack/models/update_user_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[User](contentstack/models/user.py), [UpdateUserErrorBody](contentstack/errors/update_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[User](contentstack/models/user.py)</code> -- The updated user object.

**On `Failure`**: `error` is <code>[UpdateUserErrorBody](contentstack/errors/update_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error2](contentstack/models/error2.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Variables

> Source: [Variables](contentstack/apis/variables.py)

<details>
<summary><code>def create_variable(organization_uid: str, project_uid: str, body: CreateVariableRequest | CreateVariableRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Variable, CreateVariableErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new project variable that can be referenced in automation configurations. Variables can store API keys, URLs, or other configuration values that are used across multiple automations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.variables.with_raw_response.create_variable(
    "some example string",
    "some example string",
    CreateVariableRequest(name="some example string", key="some example string", value="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Variable
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateVariableErrorBody
```

**Async**

```python
result = await async_client.variables.with_raw_response.create_variable(
    "some example string",
    "some example string",
    CreateVariableRequest(name="some example string", key="some example string", value="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Variable
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateVariableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the automation project. |
| <code>body</code> | <code>[CreateVariableRequest](contentstack/models/create_variable_request.py) \| [CreateVariableRequestDict](contentstack/models/create_variable_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[Variable](contentstack/models/variable.py), [CreateVariableErrorBody](contentstack/errors/create_variable_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Variable](contentstack/models/variable.py)</code> -- The newly created variable.

**On `Failure`**: `error` is <code>[CreateVariableErrorBody](contentstack/errors/create_variable_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_all_variables(organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VariableList, GetAllVariablesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all project variables defined for the automation project. Variables are reusable key-value pairs that can be referenced across automation configurations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.variables.with_raw_response.get_all_variables("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VariableList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllVariablesErrorBody
```

**Async**

```python
result = await async_client.variables.with_raw_response.get_all_variables("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VariableList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllVariablesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>project_uid</code> | <code>str</code> | The unique identifier of the automation project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[VariableList](contentstack/models/variable_list.py), [GetAllVariablesErrorBody](contentstack/errors/get_all_variables_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VariableList](contentstack/models/variable_list.py)</code> -- A list of project variables.

**On `Failure`**: `error` is <code>[GetAllVariablesErrorBody](contentstack/errors/get_all_variables_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## VoiceProfiles

> Source: [VoiceProfiles](contentstack/apis/voice_profiles.py)

<details>
<summary><code>def create_voice_profile(brand_kit_uid: str, organization_uid: str, body: CreateVoiceProfileRequest | CreateVoiceProfileRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VoiceProfile, CreateVoiceProfileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Voice Profile within a Brand Kit defining the writing style, tone characteristics, persona guidelines, and example content for AI generation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.voice_profiles.with_raw_response.create_voice_profile(
    "some example string", "some example string", CreateVoiceProfileRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VoiceProfile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateVoiceProfileErrorBody
```

**Async**

```python
result = await async_client.voice_profiles.with_raw_response.create_voice_profile(
    "some example string", "some example string", CreateVoiceProfileRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VoiceProfile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateVoiceProfileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>brand_kit_uid</code> | <code>str</code> | The unique identifier of the Brand Kit. |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>body</code> | <code>[CreateVoiceProfileRequest](contentstack/models/create_voice_profile_request.py) \| [CreateVoiceProfileRequestDict](contentstack/models/create_voice_profile_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[VoiceProfile](contentstack/models/voice_profile.py), [CreateVoiceProfileErrorBody](contentstack/errors/create_voice_profile_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VoiceProfile](contentstack/models/voice_profile.py)</code> -- The newly created Voice Profile.

**On `Failure`**: `error` is <code>[CreateVoiceProfileErrorBody](contentstack/errors/create_voice_profile_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_voice_profile(brand_kit_uid: str, profile_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteVoiceProfileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently removes a Voice Profile from the Brand Kit. This action cannot be undone.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.voice_profiles.with_raw_response.delete_voice_profile(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteVoiceProfileErrorBody
```

**Async**

```python
result = await async_client.voice_profiles.with_raw_response.delete_voice_profile(
    "some example string", "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteVoiceProfileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>brand_kit_uid</code> | <code>str</code> | The unique identifier of the Brand Kit. |
| <code>profile_uid</code> | <code>str</code> | The unique identifier of the Voice Profile. |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;None, [DeleteVoiceProfileErrorBody](contentstack/errors/delete_voice_profile_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteVoiceProfileErrorBody](contentstack/errors/delete_voice_profile_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_all_voice_profiles(brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VoiceProfileList, GetAllVoiceProfilesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all Voice Profiles associated with a specific Brand Kit. Voice Profiles define the writing style and tone used in AI content generation for that Brand Kit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.voice_profiles.with_raw_response.get_all_voice_profiles("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VoiceProfileList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllVoiceProfilesErrorBody
```

**Async**

```python
result = await async_client.voice_profiles.with_raw_response.get_all_voice_profiles(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VoiceProfileList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAllVoiceProfilesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>brand_kit_uid</code> | <code>str</code> | The unique identifier of the Brand Kit. |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[VoiceProfileList](contentstack/models/voice_profile_list.py), [GetAllVoiceProfilesErrorBody](contentstack/errors/get_all_voice_profiles_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VoiceProfileList](contentstack/models/voice_profile_list.py)</code> -- A list of Voice Profiles in the Brand Kit.

**On `Failure`**: `error` is <code>[GetAllVoiceProfilesErrorBody](contentstack/errors/get_all_voice_profiles_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_voice_profile(brand_kit_uid: str, profile_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VoiceProfile, GetVoiceProfileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the full configuration of a specific Voice Profile including style guidelines, tone settings, and example content.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.voice_profiles.with_raw_response.get_voice_profile(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VoiceProfile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVoiceProfileErrorBody
```

**Async**

```python
result = await async_client.voice_profiles.with_raw_response.get_voice_profile(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VoiceProfile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVoiceProfileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>brand_kit_uid</code> | <code>str</code> | The unique identifier of the Brand Kit. |
| <code>profile_uid</code> | <code>str</code> | The unique identifier of the Voice Profile. |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[VoiceProfile](contentstack/models/voice_profile.py), [GetVoiceProfileErrorBody](contentstack/errors/get_voice_profile_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VoiceProfile](contentstack/models/voice_profile.py)</code> -- The requested Voice Profile.

**On `Failure`**: `error` is <code>[GetVoiceProfileErrorBody](contentstack/errors/get_voice_profile_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_voice_profile(brand_kit_uid: str, profile_uid: str, organization_uid: str, body: CreateVoiceProfileRequest | CreateVoiceProfileRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VoiceProfile, UpdateVoiceProfileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing Voice Profile including style guidelines and tone characteristics.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.voice_profiles.with_raw_response.update_voice_profile(
    "some example string",
    "some example string",
    "some example string",
    CreateVoiceProfileRequest(name="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VoiceProfile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateVoiceProfileErrorBody
```

**Async**

```python
result = await async_client.voice_profiles.with_raw_response.update_voice_profile(
    "some example string",
    "some example string",
    "some example string",
    CreateVoiceProfileRequest(name="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VoiceProfile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateVoiceProfileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>brand_kit_uid</code> | <code>str</code> | The unique identifier of the Brand Kit. |
| <code>profile_uid</code> | <code>str</code> | The unique identifier of the Voice Profile. |
| <code>organization_uid</code> | <code>str</code> | The unique identifier of the organization. |
| <code>body</code> | <code>[CreateVoiceProfileRequest](contentstack/models/create_voice_profile_request.py) \| [CreateVoiceProfileRequestDict](contentstack/models/create_voice_profile_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](contentstack/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](contentstack/core/results.py)&#91;[VoiceProfile](contentstack/models/voice_profile.py), [UpdateVoiceProfileErrorBody](contentstack/errors/update_voice_profile_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VoiceProfile](contentstack/models/voice_profile.py)</code> -- The updated Voice Profile.

**On `Failure`**: `error` is <code>[UpdateVoiceProfileErrorBody](contentstack/errors/update_voice_profile_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[Error](contentstack/models/error.py)</code> |
| anything unmapped | <code>[RawError](contentstack/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

