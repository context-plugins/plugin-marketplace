# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [ContentstackClient](src/Contentstack/ContentstackClient.cs)

## ScimUsers

> Source: [ScimUsers](src/Contentstack/Api/ScimUsers.cs)

<details>
<summary><code>Task&lt;ScimUser&gt; CreateScimUser(CreateScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ScimUsers.CreateScimUser(new CreateScimUserRequest
    {
        OrganizationUid = "some example string",
        Body = new ScimUser(),
    });
    // TODO: Handle 'response' of type ScimUser
}
catch (ApiException<CreateScimUserError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateScimUserRequest](src/Contentstack/Requests/ScimUsers/CreateScimUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimUser](src/Contentstack/Models/ScimUser.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[CreateScimUserError](src/Contentstack/Errors/CreateScimUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimUser&gt; GetScimUser(GetScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ScimUsers.GetScimUser(new GetScimUserRequest
    {
        OrganizationUid = "some example string",
        UserId = "some example string",
    });
    // TODO: Handle 'response' of type ScimUser
}
catch (ApiException<GetScimUserError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetScimUserRequest](src/Contentstack/Requests/ScimUsers/GetScimUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimUser](src/Contentstack/Models/ScimUser.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetScimUserError](src/Contentstack/Errors/GetScimUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimListResponse&gt; ListScimUsers(ListScimUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ScimUsers.ListScimUsers(new ListScimUsersRequest
    {
        OrganizationUid = "some example string",
    });
    // TODO: Handle 'response' of type ScimListResponse
}
catch (ApiException<ListScimUsersError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListScimUsersRequest](src/Contentstack/Requests/ScimUsers/ListScimUsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimListResponse](src/Contentstack/Models/ScimListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[ListScimUsersError](src/Contentstack/Errors/ListScimUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimUser&gt; ReplaceScimUser(ReplaceScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ScimUsers.ReplaceScimUser(new ReplaceScimUserRequest
    {
        OrganizationUid = "some example string",
        UserId = "some example string",
        Body = new ScimUser(),
    });
    // TODO: Handle 'response' of type ScimUser
}
catch (ApiException<ReplaceScimUserError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReplaceScimUserRequest](src/Contentstack/Requests/ScimUsers/ReplaceScimUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimUser](src/Contentstack/Models/ScimUser.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[ReplaceScimUserError](src/Contentstack/Errors/ReplaceScimUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimUser&gt; UpdateScimUser(UpdateScimUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ScimUsers.UpdateScimUser(new UpdateScimUserRequest
    {
        OrganizationUid = "some example string",
        UserId = "some example string",
        Body = new ScimPatchRequest(),
    });
    // TODO: Handle 'response' of type ScimUser
}
catch (ApiException<UpdateScimUserError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateScimUserRequest](src/Contentstack/Requests/ScimUsers/UpdateScimUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimUser](src/Contentstack/Models/ScimUser.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UpdateScimUserError](src/Contentstack/Errors/UpdateScimUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Accounts

> Source: [Accounts](src/Contentstack/Api/Accounts.cs)

<details>
<summary><code>Task&lt;AccountList&gt; GetAllAccounts(GetAllAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Accounts.GetAllAccounts(new GetAllAccountsRequest
    {
        OrganizationUid = "some example string",
        ProjectUid = "some example string",
    });
    // TODO: Handle 'response' of type AccountList
}
catch (ApiException<GetAllAccountsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllAccountsRequest](src/Contentstack/Requests/Accounts/GetAllAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountList](src/Contentstack/Models/AccountList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllAccountsError](src/Contentstack/Errors/GetAllAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Analytics

> Source: [Analytics](src/Contentstack/Api/Analytics.cs)

<details>
<summary><code>Task&lt;CacheUsage&gt; GetCacheRevalidationUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Analytics.GetCacheRevalidationUsage();
    // TODO: Handle 'response' of type CacheUsage
}
catch (ApiException<GetCacheRevalidationUsageError> ex)
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

**OnSuccess**: <code>[CacheUsage](src/Contentstack/Models/CacheUsage.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetCacheRevalidationUsageError](src/Contentstack/Errors/GetCacheRevalidationUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Assets

> Source: [Assets](src/Contentstack/Api/Assets.cs)

<details>
<summary><code>Task&lt;AssetList&gt; GetAllAssets(GetAllAssetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Assets.GetAllAssets(new GetAllAssetsRequest
    {
        ApiKey = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type AssetList
}
catch (ApiException<GetAllAssetsError> ex)
{
    if (ex.Error.TryGetErrorContentstackAssetsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackAssetsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllAssetsRequest](src/Contentstack/Requests/Assets/GetAllAssetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AssetList](src/Contentstack/Models/AssetList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllAssetsError](src/Contentstack/Errors/GetAllAssetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Asset&gt; GetSingleAsset(GetSingleAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Assets.GetSingleAsset(new GetSingleAssetRequest
    {
        AssetUid = "some example string",
        ApiKey = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type Asset
}
catch (ApiException<GetSingleAssetError> ex)
{
    if (ex.Error.TryGetErrorContentstackAssetsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackAssetsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSingleAssetRequest](src/Contentstack/Requests/Assets/GetSingleAssetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Asset](src/Contentstack/Models/Asset.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetSingleAssetError](src/Contentstack/Errors/GetSingleAssetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Asset2&gt; UploadAsset(UploadAssetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Assets.UploadAsset(new UploadAssetRequest { ApiKey = "some example string" });
    // TODO: Handle 'response' of type Asset2
}
catch (ApiException<UploadAssetError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadAssetRequest](src/Contentstack/Requests/Assets/UploadAssetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Asset2](src/Contentstack/Models/Asset2.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UploadAssetError](src/Contentstack/Errors/UploadAssetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AttributesApi

> Source: [AttributesApi](src/Contentstack/Api/AttributesApi.cs)

<details>
<summary><code>Task&lt;AttributeModel&gt; CreateAttribute(CreateAttributeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AttributesApi.CreateAttribute(new CreateAttributeOperationRequest
    {
        XProjectUid = "some example string",
        Body = new CreateAttributeRequest
        {
            Name = "some example string",
            Key = "some example string",
            DataType = DataTypeEnum.String,
        },
    });
    // TODO: Handle 'response' of type AttributeModel
}
catch (ApiException<CreateAttributeError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAttributeOperationRequest](src/Contentstack/Requests/AttributesApi/CreateAttributeOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttributeModel](src/Contentstack/Models/AttributeModel.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[CreateAttributeError](src/Contentstack/Errors/CreateAttributeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAttribute(DeleteAttributeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AttributesApi.DeleteAttribute(new DeleteAttributeRequest
    {
        Id = "some example string",
        XProjectUid = "some example string",
    });
}
catch (ApiException<DeleteAttributeError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAttributeRequest](src/Contentstack/Requests/AttributesApi/DeleteAttributeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[DeleteAttributeError](src/Contentstack/Errors/DeleteAttributeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AttributeList&gt; GetAllAttributes(GetAllAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AttributesApi.GetAllAttributes(new GetAllAttributesRequest
    {
        XProjectUid = "some example string",
    });
    // TODO: Handle 'response' of type AttributeList
}
catch (ApiException<GetAllAttributesError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllAttributesRequest](src/Contentstack/Requests/AttributesApi/GetAllAttributesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttributeList](src/Contentstack/Models/AttributeList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllAttributesError](src/Contentstack/Errors/GetAllAttributesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AttributeModel&gt; UpdateAttribute(UpdateAttributeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AttributesApi.UpdateAttribute(new UpdateAttributeRequest
    {
        Id = "some example string",
        XProjectUid = "some example string",
        Body = new CreateAttributeRequest
        {
            Name = "some example string",
            Key = "some example string",
            DataType = DataTypeEnum.String,
        },
    });
    // TODO: Handle 'response' of type AttributeModel
}
catch (ApiException<UpdateAttributeError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateAttributeRequest](src/Contentstack/Requests/AttributesApi/UpdateAttributeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttributeModel](src/Contentstack/Models/AttributeModel.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UpdateAttributeError](src/Contentstack/Errors/UpdateAttributeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Audiences

> Source: [Audiences](src/Contentstack/Api/Audiences.cs)

<details>
<summary><code>Task&lt;Audience&gt; CreateAudience(CreateAudienceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Audiences.CreateAudience(new CreateAudienceOperationRequest
    {
        XProjectUid = "some example string",
        Body = new CreateAudienceRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Audience
}
catch (ApiException<CreateAudienceError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAudienceOperationRequest](src/Contentstack/Requests/Audiences/CreateAudienceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Audience](src/Contentstack/Models/Audience.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[CreateAudienceError](src/Contentstack/Errors/CreateAudienceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAudience(DeleteAudienceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Audiences.DeleteAudience(new DeleteAudienceRequest
    {
        Id = "some example string",
        XProjectUid = "some example string",
    });
}
catch (ApiException<DeleteAudienceError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAudienceRequest](src/Contentstack/Requests/Audiences/DeleteAudienceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[DeleteAudienceError](src/Contentstack/Errors/DeleteAudienceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AudienceList&gt; GetAllAudiences(GetAllAudiencesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Audiences.GetAllAudiences(new GetAllAudiencesRequest
    {
        XProjectUid = "some example string",
    });
    // TODO: Handle 'response' of type AudienceList
}
catch (ApiException<GetAllAudiencesError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllAudiencesRequest](src/Contentstack/Requests/Audiences/GetAllAudiencesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AudienceList](src/Contentstack/Models/AudienceList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllAudiencesError](src/Contentstack/Errors/GetAllAudiencesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Audience&gt; UpdateAudience(UpdateAudienceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Audiences.UpdateAudience(new UpdateAudienceRequest
    {
        Id = "some example string",
        XProjectUid = "some example string",
        Body = new CreateAudienceRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Audience
}
catch (ApiException<UpdateAudienceError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateAudienceRequest](src/Contentstack/Requests/Audiences/UpdateAudienceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Audience](src/Contentstack/Models/Audience.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UpdateAudienceError](src/Contentstack/Errors/UpdateAudienceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuditLogs

> Source: [AuditLogs](src/Contentstack/Api/AuditLogs.cs)

<details>
<summary><code>Task&lt;AuditLogList&gt; GetAllAuditLogs(GetAllAuditLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AuditLogs.GetAllAuditLogs(new GetAllAuditLogsRequest
    {
        OrganizationUid = "some example string",
        ProjectUid = "some example string",
    });
    // TODO: Handle 'response' of type AuditLogList
}
catch (ApiException<GetAllAuditLogsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllAuditLogsRequest](src/Contentstack/Requests/AuditLogs/GetAllAuditLogsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuditLogList](src/Contentstack/Models/AuditLogList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllAuditLogsError](src/Contentstack/Errors/GetAllAuditLogsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Automations

> Source: [Automations](src/Contentstack/Api/Automations.cs)

<details>
<summary><code>Task&lt;Automation&gt; ActivateAutomation(ActivateAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Automations.ActivateAutomation(new ActivateAutomationRequest
    {
        OrganizationUid = "some example string",
        ProjectUid = "some example string",
        AutomationUid = "some example string",
    });
    // TODO: Handle 'response' of type Automation
}
catch (ApiException<ActivateAutomationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ActivateAutomationRequest](src/Contentstack/Requests/Automations/ActivateAutomationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Automation](src/Contentstack/Models/Automation.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[ActivateAutomationError](src/Contentstack/Errors/ActivateAutomationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Automation&gt; DeactivateAutomation(DeactivateAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Automations.DeactivateAutomation(new DeactivateAutomationRequest
    {
        OrganizationUid = "some example string",
        ProjectUid = "some example string",
        AutomationUid = "some example string",
    });
    // TODO: Handle 'response' of type Automation
}
catch (ApiException<DeactivateAutomationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeactivateAutomationRequest](src/Contentstack/Requests/Automations/DeactivateAutomationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Automation](src/Contentstack/Models/Automation.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[DeactivateAutomationError](src/Contentstack/Errors/DeactivateAutomationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AutomationList&gt; GetAllAutomations(GetAllAutomationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Automations.GetAllAutomations(new GetAllAutomationsRequest
    {
        OrganizationUid = "some example string",
        ProjectUid = "some example string",
    });
    // TODO: Handle 'response' of type AutomationList
}
catch (ApiException<GetAllAutomationsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllAutomationsRequest](src/Contentstack/Requests/Automations/GetAllAutomationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationList](src/Contentstack/Models/AutomationList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllAutomationsError](src/Contentstack/Errors/GetAllAutomationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Automation&gt; GetAutomation(GetAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Automations.GetAutomation(new GetAutomationRequest
    {
        OrganizationUid = "some example string",
        ProjectUid = "some example string",
        AutomationUid = "some example string",
    });
    // TODO: Handle 'response' of type Automation
}
catch (ApiException<GetAutomationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAutomationRequest](src/Contentstack/Requests/Automations/GetAutomationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Automation](src/Contentstack/Models/Automation.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAutomationError](src/Contentstack/Errors/GetAutomationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BrandKits

> Source: [BrandKits](src/Contentstack/Api/BrandKits.cs)

<details>
<summary><code>Task&lt;BrandKit&gt; CreateBrandKit(CreateBrandKitOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BrandKits.CreateBrandKit(new CreateBrandKitOperationRequest
    {
        OrganizationUid = "some example string",
        Body = new CreateBrandKitRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type BrandKit
}
catch (ApiException<CreateBrandKitError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBrandKitOperationRequest](src/Contentstack/Requests/BrandKits/CreateBrandKitOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BrandKit](src/Contentstack/Models/BrandKit.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[CreateBrandKitError](src/Contentstack/Errors/CreateBrandKitError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteBrandKit(DeleteBrandKitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.BrandKits.DeleteBrandKit(new DeleteBrandKitRequest
    {
        BrandKitUid = "some example string",
        OrganizationUid = "some example string",
    });
}
catch (ApiException<DeleteBrandKitError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBrandKitRequest](src/Contentstack/Requests/BrandKits/DeleteBrandKitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[DeleteBrandKitError](src/Contentstack/Errors/DeleteBrandKitError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BrandKitList&gt; GetAllBrandKits(GetAllBrandKitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BrandKits.GetAllBrandKits(new GetAllBrandKitsRequest
    {
        OrganizationUid = "some example string",
    });
    // TODO: Handle 'response' of type BrandKitList
}
catch (ApiException<GetAllBrandKitsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllBrandKitsRequest](src/Contentstack/Requests/BrandKits/GetAllBrandKitsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BrandKitList](src/Contentstack/Models/BrandKitList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllBrandKitsError](src/Contentstack/Errors/GetAllBrandKitsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BrandKit&gt; GetBrandKit(GetBrandKitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BrandKits.GetBrandKit(new GetBrandKitRequest
    {
        BrandKitUid = "some example string",
        OrganizationUid = "some example string",
    });
    // TODO: Handle 'response' of type BrandKit
}
catch (ApiException<GetBrandKitError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBrandKitRequest](src/Contentstack/Requests/BrandKits/GetBrandKitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BrandKit](src/Contentstack/Models/BrandKit.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetBrandKitError](src/Contentstack/Errors/GetBrandKitError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BrandKit&gt; UpdateBrandKit(UpdateBrandKitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BrandKits.UpdateBrandKit(new UpdateBrandKitRequest
    {
        BrandKitUid = "some example string",
        OrganizationUid = "some example string",
        Body = new CreateBrandKitRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type BrandKit
}
catch (ApiException<UpdateBrandKitError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateBrandKitRequest](src/Contentstack/Requests/BrandKits/UpdateBrandKitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BrandKit](src/Contentstack/Models/BrandKit.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UpdateBrandKitError](src/Contentstack/Errors/UpdateBrandKitError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ContentTypes

> Source: [ContentTypes](src/Contentstack/Api/ContentTypes.cs)

<details>
<summary><code>Task&lt;ContentType2&gt; CreateContentType(CreateContentTypeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContentTypes.CreateContentType(new CreateContentTypeOperationRequest
    {
        ApiKey = "some example string",
        Body = new CreateContentTypeRequest
        {
            ContentType = new ContentType1
            {
                Uid = "some example string",
                Title = "some example string",
                Schema = [new Field2()],
            },
        },
    });
    // TODO: Handle 'response' of type ContentType2
}
catch (ApiException<CreateContentTypeError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateContentTypeOperationRequest](src/Contentstack/Requests/ContentTypes/CreateContentTypeOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContentType2](src/Contentstack/Models/ContentType2.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[CreateContentTypeError](src/Contentstack/Errors/CreateContentTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteContentType(DeleteContentTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ContentTypes.DeleteContentType(new DeleteContentTypeRequest
    {
        ContentTypeUid = "some example string",
        ApiKey = "some example string",
    });
}
catch (ApiException<DeleteContentTypeError> ex)
{
    if (ex.Error.TryGetErrorContentstackAssetsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackAssetsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteContentTypeRequest](src/Contentstack/Requests/ContentTypes/DeleteContentTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[DeleteContentTypeError](src/Contentstack/Errors/DeleteContentTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContentTypeList&gt; GetAllContentTypes(GetAllContentTypesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContentTypes.GetAllContentTypes(new GetAllContentTypesRequest
    {
        ApiKey = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type ContentTypeList
}
catch (ApiException<GetAllContentTypesError> ex)
{
    if (ex.Error.TryGetErrorContentstackAssetsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackAssetsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllContentTypesRequest](src/Contentstack/Requests/ContentTypes/GetAllContentTypesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContentTypeList](src/Contentstack/Models/ContentTypeList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllContentTypesError](src/Contentstack/Errors/GetAllContentTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContentType&gt; GetSingleContentType(GetSingleContentTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContentTypes.GetSingleContentType(new GetSingleContentTypeRequest
    {
        ContentTypeUid = "some example string",
        ApiKey = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type ContentType
}
catch (ApiException<GetSingleContentTypeError> ex)
{
    if (ex.Error.TryGetErrorContentstackAssetsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackAssetsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSingleContentTypeRequest](src/Contentstack/Requests/ContentTypes/GetSingleContentTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContentType](src/Contentstack/Models/ContentType.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetSingleContentTypeError](src/Contentstack/Errors/GetSingleContentTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContentType2&gt; UpdateContentType(UpdateContentTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContentTypes.UpdateContentType(new UpdateContentTypeRequest
    {
        ContentTypeUid = "some example string",
        ApiKey = "some example string",
        Body = new CreateContentTypeRequest
        {
            ContentType = new ContentType1
            {
                Uid = "some example string",
                Title = "some example string",
                Schema = [new Field2()],
            },
        },
    });
    // TODO: Handle 'response' of type ContentType2
}
catch (ApiException<UpdateContentTypeError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateContentTypeRequest](src/Contentstack/Requests/ContentTypes/UpdateContentTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContentType2](src/Contentstack/Models/ContentType2.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UpdateContentTypeError](src/Contentstack/Errors/UpdateContentTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Deployments

> Source: [Deployments](src/Contentstack/Api/Deployments.cs)

<details>
<summary><code>Task&lt;Deployment&gt; CreateDeployment(CreateDeploymentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Deployments.CreateDeployment(new CreateDeploymentOperationRequest
    {
        ProjectUid = "some example string",
        EnvUid = "some example string",
        Body = new CreateDeploymentRequest(),
    });
    // TODO: Handle 'response' of type Deployment
}
catch (ApiException<CreateDeploymentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDeploymentOperationRequest](src/Contentstack/Requests/Deployments/CreateDeploymentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deployment](src/Contentstack/Models/Deployment.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[CreateDeploymentError](src/Contentstack/Errors/CreateDeploymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeploymentList&gt; GetAllDeployments(GetAllDeploymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Deployments.GetAllDeployments(new GetAllDeploymentsRequest
    {
        ProjectUid = "some example string",
        EnvUid = "some example string",
    });
    // TODO: Handle 'response' of type DeploymentList
}
catch (ApiException<GetAllDeploymentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllDeploymentsRequest](src/Contentstack/Requests/Deployments/GetAllDeploymentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeploymentList](src/Contentstack/Models/DeploymentList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllDeploymentsError](src/Contentstack/Errors/GetAllDeploymentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Deployment&gt; GetDeployment(GetDeploymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Deployments.GetDeployment(new GetDeploymentRequest
    {
        ProjectUid = "some example string",
        EnvUid = "some example string",
        DeployUid = "some example string",
    });
    // TODO: Handle 'response' of type Deployment
}
catch (ApiException<GetDeploymentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDeploymentRequest](src/Contentstack/Requests/Deployments/GetDeploymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Deployment](src/Contentstack/Models/Deployment.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetDeploymentError](src/Contentstack/Errors/GetDeploymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LogResponse&gt; GetDeploymentLogs(GetDeploymentLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Deployments.GetDeploymentLogs(new GetDeploymentLogsRequest
    {
        ProjectUid = "some example string",
        EnvUid = "some example string",
        DeployUid = "some example string",
    });
    // TODO: Handle 'response' of type LogResponse
}
catch (ApiException<GetDeploymentLogsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDeploymentLogsRequest](src/Contentstack/Requests/Deployments/GetDeploymentLogsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LogResponse](src/Contentstack/Models/LogResponse.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetDeploymentLogsError](src/Contentstack/Errors/GetDeploymentLogsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LogResponse&gt; GetServerLogs(GetServerLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Deployments.GetServerLogs(new GetServerLogsRequest
    {
        ProjectUid = "some example string",
        EnvUid = "some example string",
        DeployUid = "some example string",
    });
    // TODO: Handle 'response' of type LogResponse
}
catch (ApiException<GetServerLogsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetServerLogsRequest](src/Contentstack/Requests/Deployments/GetServerLogsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LogResponse](src/Contentstack/Models/LogResponse.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetServerLogsError](src/Contentstack/Errors/GetServerLogsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Entries

> Source: [Entries](src/Contentstack/Api/Entries.cs)

<details>
<summary><code>Task&lt;Entry2&gt; CreateEntry(CreateEntryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Entries.CreateEntry(new CreateEntryOperationRequest
    {
        ContentTypeUid = "some example string",
        Locale = "en-us",
        ApiKey = "some example string",
        Body = new CreateEntryRequest { Entry = entry },
    });
    // TODO: Handle 'response' of type Entry2
}
catch (ApiException<CreateEntryError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateEntryOperationRequest](src/Contentstack/Requests/Entries/CreateEntryOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Entry2](src/Contentstack/Models/Entry2.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[CreateEntryError](src/Contentstack/Errors/CreateEntryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteEntry(DeleteEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Entries.DeleteEntry(new DeleteEntryRequest
    {
        ContentTypeUid = "some example string",
        EntryUid = "some example string",
        ApiKey = "some example string",
    });
}
catch (ApiException<DeleteEntryError> ex)
{
    if (ex.Error.TryGetErrorContentstackAssetsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackAssetsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteEntryRequest](src/Contentstack/Requests/Entries/DeleteEntryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[DeleteEntryError](src/Contentstack/Errors/DeleteEntryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EntryList&gt; GetAllEntries(GetAllEntriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Entries.GetAllEntries(new GetAllEntriesRequest
    {
        ContentTypeUid = "some example string",
        Locale = "en-us",
        ApiKey = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type EntryList
}
catch (ApiException<GetAllEntriesError> ex)
{
    if (ex.Error.TryGetErrorContentstackAssetsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackAssetsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllEntriesRequest](src/Contentstack/Requests/Entries/GetAllEntriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntryList](src/Contentstack/Models/EntryList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllEntriesError](src/Contentstack/Errors/GetAllEntriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Entry&gt; GetSingleEntry(GetSingleEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Entries.GetSingleEntry(new GetSingleEntryRequest
    {
        ContentTypeUid = "some example string",
        EntryUid = "some example string",
        Locale = "en-us",
        ApiKey = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type Entry
}
catch (ApiException<GetSingleEntryError> ex)
{
    if (ex.Error.TryGetErrorContentstackAssetsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackAssetsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSingleEntryRequest](src/Contentstack/Requests/Entries/GetSingleEntryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Entry](src/Contentstack/Models/Entry.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetSingleEntryError](src/Contentstack/Errors/GetSingleEntryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PublishEntry(PublishEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Entries.PublishEntry(new PublishEntryRequest
    {
        ContentTypeUid = "some example string",
        EntryUid = "some example string",
        ApiKey = "some example string",
        Body = new PublishRequest(),
    });
}
catch (ApiException<PublishEntryError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PublishEntryRequest](src/Contentstack/Requests/Entries/PublishEntryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[PublishEntryError](src/Contentstack/Errors/PublishEntryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UnpublishEntry(UnpublishEntryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Entries.UnpublishEntry(new UnpublishEntryRequest
    {
        ContentTypeUid = "some example string",
        EntryUid = "some example string",
        ApiKey = "some example string",
        Body = new PublishRequest(),
    });
}
catch (ApiException<UnpublishEntryError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UnpublishEntryRequest](src/Contentstack/Requests/Entries/UnpublishEntryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UnpublishEntryError](src/Contentstack/Errors/UnpublishEntryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Entry2&gt; UpdateEntry(UpdateEntryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Entries.UpdateEntry(new UpdateEntryOperationRequest
    {
        ContentTypeUid = "some example string",
        EntryUid = "some example string",
        Locale = "en-us",
        ApiKey = "some example string",
        Body = new UpdateEntryRequest { Entry = entry },
    });
    // TODO: Handle 'response' of type Entry2
}
catch (ApiException<UpdateEntryError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateEntryOperationRequest](src/Contentstack/Requests/Entries/UpdateEntryOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Entry2](src/Contentstack/Models/Entry2.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UpdateEntryError](src/Contentstack/Errors/UpdateEntryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EntryVariants

> Source: [EntryVariants](src/Contentstack/Api/EntryVariants.cs)

<details>
<summary><code>Task&lt;EntryVariantList&gt; GetAllEntryVariants(GetAllEntryVariantsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.EntryVariants.GetAllEntryVariants(new GetAllEntryVariantsRequest
    {
        ContentTypeUid = "some example string",
        EntryUid = "some example string",
        ApiKey = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type EntryVariantList
}
catch (ApiException<GetAllEntryVariantsError> ex)
{
    if (ex.Error.TryGetErrorContentstackAssetsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackAssetsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllEntryVariantsRequest](src/Contentstack/Requests/EntryVariants/GetAllEntryVariantsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntryVariantList](src/Contentstack/Models/EntryVariantList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllEntryVariantsError](src/Contentstack/Errors/GetAllEntryVariantsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EntryVariant&gt; GetSingleEntryVariant(GetSingleEntryVariantRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.EntryVariants.GetSingleEntryVariant(new GetSingleEntryVariantRequest
    {
        ContentTypeUid = "some example string",
        EntryUid = "some example string",
        VariantUid = "some example string",
        ApiKey = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type EntryVariant
}
catch (ApiException<GetSingleEntryVariantError> ex)
{
    if (ex.Error.TryGetErrorContentstackAssetsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackAssetsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSingleEntryVariantRequest](src/Contentstack/Requests/EntryVariants/GetSingleEntryVariantRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntryVariant](src/Contentstack/Models/EntryVariant.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetSingleEntryVariantError](src/Contentstack/Errors/GetSingleEntryVariantError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Environments

> Source: [Environments](src/Contentstack/Api/Environments.cs)

<details>
<summary><code>Task&lt;Environment2&gt; CreateEnvironment(CreateEnvironmentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Environments.CreateEnvironment(new CreateEnvironmentOperationRequest
    {
        ProjectUid = "some example string",
        Body = new CreateEnvironmentRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Environment2
}
catch (ApiException<CreateEnvironmentError> ex)
{
    if (ex.Error.TryGetError2ContentstackEnvironmentsApi(out var error))
    {
        // TODO: Handle 'error' of type Error2ContentstackEnvironmentsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateEnvironmentOperationRequest](src/Contentstack/Requests/Environments/CreateEnvironmentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Environment2](src/Contentstack/Models/Environment2.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[CreateEnvironmentError](src/Contentstack/Errors/CreateEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteEnvironment(DeleteEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Environments.DeleteEnvironment(new DeleteEnvironmentRequest
    {
        ProjectUid = "some example string",
        EnvUid = "some example string",
    });
}
catch (ApiException<DeleteEnvironmentError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteEnvironmentRequest](src/Contentstack/Requests/Environments/DeleteEnvironmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[DeleteEnvironmentError](src/Contentstack/Errors/DeleteEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentList&gt; GetAllEnvironments(GetAllEnvironmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Environments.GetAllEnvironments(new GetAllEnvironmentsRequest
    {
        ApiKey = "some example string",
    });
    // TODO: Handle 'response' of type EnvironmentList
}
catch (ApiException<GetAllEnvironmentsError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllEnvironmentsRequest](src/Contentstack/Requests/Environments/GetAllEnvironmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentList](src/Contentstack/Models/EnvironmentList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllEnvironmentsError](src/Contentstack/Errors/GetAllEnvironmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Environment2&gt; GetEnvironment(GetEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Environments.GetEnvironment(new GetEnvironmentRequest
    {
        ProjectUid = "some example string",
        EnvUid = "some example string",
    });
    // TODO: Handle 'response' of type Environment2
}
catch (ApiException<GetEnvironmentError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEnvironmentRequest](src/Contentstack/Requests/Environments/GetEnvironmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Environment2](src/Contentstack/Models/Environment2.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetEnvironmentError](src/Contentstack/Errors/GetEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentList2&gt; GetProjectsByProjectUidEnvironments(GetProjectsByProjectUidEnvironmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Environments.GetProjectsByProjectUidEnvironments(
        new GetProjectsByProjectUidEnvironmentsRequest { ProjectUid = "some example string" });
    // TODO: Handle 'response' of type EnvironmentList2
}
catch (ApiException<GetProjectsByProjectUidEnvironmentsError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetProjectsByProjectUidEnvironmentsRequest](src/Contentstack/Requests/Environments/GetProjectsByProjectUidEnvironmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentList2](src/Contentstack/Models/EnvironmentList2.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetProjectsByProjectUidEnvironmentsError](src/Contentstack/Errors/GetProjectsByProjectUidEnvironmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RevalidateCache(RevalidateCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Environments.RevalidateCache(new RevalidateCacheRequest
    {
        ProjectUid = "some example string",
        EnvUid = "some example string",
    });
}
catch (ApiException<RevalidateCacheError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RevalidateCacheRequest](src/Contentstack/Requests/Environments/RevalidateCacheRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[RevalidateCacheError](src/Contentstack/Errors/RevalidateCacheError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Environment2&gt; UpdateEnvironment(UpdateEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Environments.UpdateEnvironment(new UpdateEnvironmentRequest
    {
        ProjectUid = "some example string",
        EnvUid = "some example string",
        Body = new CreateEnvironmentRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Environment2
}
catch (ApiException<UpdateEnvironmentError> ex)
{
    if (ex.Error.TryGetError2ContentstackEnvironmentsApi(out var error))
    {
        // TODO: Handle 'error' of type Error2ContentstackEnvironmentsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateEnvironmentRequest](src/Contentstack/Requests/Environments/UpdateEnvironmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Environment2](src/Contentstack/Models/Environment2.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UpdateEnvironmentError](src/Contentstack/Errors/UpdateEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/Contentstack/Api/Events.cs)

<details>
<summary><code>Task&lt;EventList&gt; GetAllEvents(GetAllEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Events.GetAllEvents(new GetAllEventsRequest { XProjectUid = "some example string" });
    // TODO: Handle 'response' of type EventList
}
catch (ApiException<GetAllEventsError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllEventsRequest](src/Contentstack/Requests/Events/GetAllEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventList](src/Contentstack/Models/EventList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllEventsError](src/Contentstack/Errors/GetAllEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TrackEvents(TrackEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Events.TrackEvents(new TrackEventsRequest
    {
        XProjectUid = "some example string",
        XCsPersonalizeUserUid = "some example string",
        Body = [new TrackEvent { EventKey = "some example string" }],
    });
}
catch (ApiException<TrackEventsError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TrackEventsRequest](src/Contentstack/Requests/Events/TrackEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[TrackEventsError](src/Contentstack/Errors/TrackEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ExecutionLogs

> Source: [ExecutionLogs](src/Contentstack/Api/ExecutionLogs.cs)

<details>
<summary><code>Task&lt;ExecutionLogList&gt; GetAllExecutionLogs(GetAllExecutionLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ExecutionLogs.GetAllExecutionLogs(new GetAllExecutionLogsRequest
    {
        OrganizationUid = "some example string",
        ProjectUid = "some example string",
    });
    // TODO: Handle 'response' of type ExecutionLogList
}
catch (ApiException<GetAllExecutionLogsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllExecutionLogsRequest](src/Contentstack/Requests/ExecutionLogs/GetAllExecutionLogsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExecutionLogList](src/Contentstack/Models/ExecutionLogList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllExecutionLogsError](src/Contentstack/Errors/GetAllExecutionLogsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExecutionLog&gt; GetExecutionLog(GetExecutionLogRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ExecutionLogs.GetExecutionLog(new GetExecutionLogRequest
    {
        OrganizationUid = "some example string",
        ProjectUid = "some example string",
        ExecutionUid = "some example string",
    });
    // TODO: Handle 'response' of type ExecutionLog
}
catch (ApiException<GetExecutionLogError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetExecutionLogRequest](src/Contentstack/Requests/ExecutionLogs/GetExecutionLogRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExecutionLog](src/Contentstack/Models/ExecutionLog.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetExecutionLogError](src/Contentstack/Errors/GetExecutionLogError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Experiences

> Source: [Experiences](src/Contentstack/Api/Experiences.cs)

<details>
<summary><code>Task&lt;Experience&gt; CreateExperience(CreateExperienceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Experiences.CreateExperience(new CreateExperienceOperationRequest
    {
        XProjectUid = "some example string",
        Body = new CreateExperienceRequest { Name = "some example string", Type = Type1.Segmented },
    });
    // TODO: Handle 'response' of type Experience
}
catch (ApiException<CreateExperienceError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateExperienceOperationRequest](src/Contentstack/Requests/Experiences/CreateExperienceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Experience](src/Contentstack/Models/Experience.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[CreateExperienceError](src/Contentstack/Errors/CreateExperienceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteExperience(DeleteExperienceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Experiences.DeleteExperience(new DeleteExperienceRequest
    {
        Id = "some example string",
        XProjectUid = "some example string",
    });
}
catch (ApiException<DeleteExperienceError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteExperienceRequest](src/Contentstack/Requests/Experiences/DeleteExperienceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[DeleteExperienceError](src/Contentstack/Errors/DeleteExperienceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExperienceList&gt; GetAllExperiences(GetAllExperiencesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Experiences.GetAllExperiences(new GetAllExperiencesRequest
    {
        XProjectUid = "some example string",
    });
    // TODO: Handle 'response' of type ExperienceList
}
catch (ApiException<GetAllExperiencesError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllExperiencesRequest](src/Contentstack/Requests/Experiences/GetAllExperiencesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExperienceList](src/Contentstack/Models/ExperienceList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllExperiencesError](src/Contentstack/Errors/GetAllExperiencesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Experience&gt; GetExperience(GetExperienceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Experiences.GetExperience(new GetExperienceRequest
    {
        Id = "some example string",
        XProjectUid = "some example string",
    });
    // TODO: Handle 'response' of type Experience
}
catch (ApiException<GetExperienceError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetExperienceRequest](src/Contentstack/Requests/Experiences/GetExperienceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Experience](src/Contentstack/Models/Experience.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetExperienceError](src/Contentstack/Errors/GetExperienceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExperiencePriority&gt; GetExperiencePriority(GetExperiencePriorityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Experiences.GetExperiencePriority(new GetExperiencePriorityRequest
    {
        XProjectUid = "some example string",
    });
    // TODO: Handle 'response' of type ExperiencePriority
}
catch (ApiException<GetExperiencePriorityError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetExperiencePriorityRequest](src/Contentstack/Requests/Experiences/GetExperiencePriorityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExperiencePriority](src/Contentstack/Models/ExperiencePriority.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetExperiencePriorityError](src/Contentstack/Errors/GetExperiencePriorityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Experience&gt; UpdateExperience(UpdateExperienceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Experiences.UpdateExperience(new UpdateExperienceRequest
    {
        Id = "some example string",
        XProjectUid = "some example string",
        Body = new CreateExperienceRequest { Name = "some example string", Type = Type1.Segmented },
    });
    // TODO: Handle 'response' of type Experience
}
catch (ApiException<UpdateExperienceError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateExperienceRequest](src/Contentstack/Requests/Experiences/UpdateExperienceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Experience](src/Contentstack/Models/Experience.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UpdateExperienceError](src/Contentstack/Errors/UpdateExperienceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExperiencePriority&gt; UpdateExperiencePriority(UpdateExperiencePriorityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Experiences.UpdateExperiencePriority(new UpdateExperiencePriorityRequest
    {
        XProjectUid = "some example string",
        Body = new ExperiencePriority(),
    });
    // TODO: Handle 'response' of type ExperiencePriority
}
catch (ApiException<UpdateExperiencePriorityError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateExperiencePriorityRequest](src/Contentstack/Requests/Experiences/UpdateExperiencePriorityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExperiencePriority](src/Contentstack/Models/ExperiencePriority.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UpdateExperiencePriorityError](src/Contentstack/Errors/UpdateExperiencePriorityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FileUploads

> Source: [FileUploads](src/Contentstack/Api/FileUploads.cs)

<details>
<summary><code>Task&lt;UploadUrlResponse&gt; GetProjectUploadUrl(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.FileUploads.GetProjectUploadUrl();
    // TODO: Handle 'response' of type UploadUrlResponse
}
catch (ApiException<GetProjectUploadUrlError> ex)
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

**OnSuccess**: <code>[UploadUrlResponse](src/Contentstack/Models/UploadUrlResponse.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetProjectUploadUrlError](src/Contentstack/Errors/GetProjectUploadUrlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Geolocation

> Source: [Geolocation](src/Contentstack/Api/Geolocation.cs)

<details>
<summary><code>Task&lt;GeoList&gt; GetGeoCities(GetGeoCitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Geolocation.GetGeoCities(new GetGeoCitiesRequest
    {
        XProjectUid = "some example string",
    });
    // TODO: Handle 'response' of type GeoList
}
catch (ApiException<GetGeoCitiesError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGeoCitiesRequest](src/Contentstack/Requests/Geolocation/GetGeoCitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeoList](src/Contentstack/Models/GeoList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetGeoCitiesError](src/Contentstack/Errors/GetGeoCitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GeoList&gt; GetGeoCountries(GetGeoCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Geolocation.GetGeoCountries(new GetGeoCountriesRequest
    {
        XProjectUid = "some example string",
    });
    // TODO: Handle 'response' of type GeoList
}
catch (ApiException<GetGeoCountriesError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGeoCountriesRequest](src/Contentstack/Requests/Geolocation/GetGeoCountriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeoList](src/Contentstack/Models/GeoList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetGeoCountriesError](src/Contentstack/Errors/GetGeoCountriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GeoList&gt; GetGeoRegions(GetGeoRegionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Geolocation.GetGeoRegions(new GetGeoRegionsRequest
    {
        XProjectUid = "some example string",
    });
    // TODO: Handle 'response' of type GeoList
}
catch (ApiException<GetGeoRegionsError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGeoRegionsRequest](src/Contentstack/Requests/Geolocation/GetGeoRegionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeoList](src/Contentstack/Models/GeoList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetGeoRegionsError](src/Contentstack/Errors/GetGeoRegionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GlobalFields

> Source: [GlobalFields](src/Contentstack/Api/GlobalFields.cs)

<details>
<summary><code>Task&lt;GlobalFieldList&gt; GetAllGlobalFields(GetAllGlobalFieldsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GlobalFields.GetAllGlobalFields(new GetAllGlobalFieldsRequest
    {
        ApiKey = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type GlobalFieldList
}
catch (ApiException<GetAllGlobalFieldsError> ex)
{
    if (ex.Error.TryGetErrorContentstackAssetsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackAssetsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllGlobalFieldsRequest](src/Contentstack/Requests/GlobalFields/GetAllGlobalFieldsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GlobalFieldList](src/Contentstack/Models/GlobalFieldList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllGlobalFieldsError](src/Contentstack/Errors/GetAllGlobalFieldsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GlobalField&gt; GetSingleGlobalField(GetSingleGlobalFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.GlobalFields.GetSingleGlobalField(new GetSingleGlobalFieldRequest
    {
        GlobalFieldUid = "some example string",
        ApiKey = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type GlobalField
}
catch (ApiException<GetSingleGlobalFieldError> ex)
{
    if (ex.Error.TryGetErrorContentstackAssetsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackAssetsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSingleGlobalFieldRequest](src/Contentstack/Requests/GlobalFields/GetSingleGlobalFieldRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GlobalField](src/Contentstack/Models/GlobalField.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetSingleGlobalFieldError](src/Contentstack/Errors/GetSingleGlobalFieldError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LlmConfiguration

> Source: [LlmConfiguration](src/Contentstack/Api/LlmConfiguration.cs)

<details>
<summary><code>Task&lt;LlmConfig&gt; ConfigureLlm(ConfigureLlmRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.LlmConfiguration.ConfigureLlm(new ConfigureLlmRequest
    {
        BrandKitUid = "some example string",
        OrganizationUid = "some example string",
        Body = new CreateLlmConfigRequest { Provider = Provider.Openai, ApiKey = "some example string" },
    });
    // TODO: Handle 'response' of type LlmConfig
}
catch (ApiException<ConfigureLlmError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConfigureLlmRequest](src/Contentstack/Requests/LlmConfiguration/ConfigureLlmRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LlmConfig](src/Contentstack/Models/LlmConfig.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[ConfigureLlmError](src/Contentstack/Errors/ConfigureLlmError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LlmConfig&gt; GetLlmConfig(GetLlmConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.LlmConfiguration.GetLlmConfig(new GetLlmConfigRequest
    {
        BrandKitUid = "some example string",
        OrganizationUid = "some example string",
    });
    // TODO: Handle 'response' of type LlmConfig
}
catch (ApiException<GetLlmConfigError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetLlmConfigRequest](src/Contentstack/Requests/LlmConfiguration/GetLlmConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LlmConfig](src/Contentstack/Models/LlmConfig.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetLlmConfigError](src/Contentstack/Errors/GetLlmConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManifestApi

> Source: [ManifestApi](src/Contentstack/Api/ManifestApi.cs)

<details>
<summary><code>Task&lt;Manifest&gt; GetManifest(GetManifestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ManifestApi.GetManifest(new GetManifestRequest { XProjectUid = "some example string" });
    // TODO: Handle 'response' of type Manifest
}
catch (ApiException<GetManifestError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetManifestRequest](src/Contentstack/Requests/ManifestApi/GetManifestRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Manifest](src/Contentstack/Models/Manifest.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetManifestError](src/Contentstack/Errors/GetManifestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](src/Contentstack/Api/Organizations.cs)

<details>
<summary><code>Task&lt;OrganizationList&gt; GetAllOrganizations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Organizations.GetAllOrganizations();
    // TODO: Handle 'response' of type OrganizationList
}
catch (ApiException<GetAllOrganizationsError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationList](src/Contentstack/Models/OrganizationList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllOrganizationsError](src/Contentstack/Errors/GetAllOrganizationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Organization&gt; GetOrganization(GetOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Organizations.GetOrganization(new GetOrganizationRequest
    {
        OrganizationUid = "some example string",
    });
    // TODO: Handle 'response' of type Organization
}
catch (ApiException<GetOrganizationError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOrganizationRequest](src/Contentstack/Requests/Organizations/GetOrganizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Organization](src/Contentstack/Models/Organization.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetOrganizationError](src/Contentstack/Errors/GetOrganizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StackList&gt; GetOrganizationStacks(GetOrganizationStacksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Organizations.GetOrganizationStacks(new GetOrganizationStacksRequest
    {
        OrganizationUid = "some example string",
    });
    // TODO: Handle 'response' of type StackList
}
catch (ApiException<GetOrganizationStacksError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOrganizationStacksRequest](src/Contentstack/Requests/Organizations/GetOrganizationStacksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StackList](src/Contentstack/Models/StackList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetOrganizationStacksError](src/Contentstack/Errors/GetOrganizationStacksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/Contentstack/Api/Projects.cs)

<details>
<summary><code>Task&lt;Project&gt; CreateProject(CreateProjectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Projects.CreateProject(new CreateProjectOperationRequest
    {
        OrganizationUid = "some example string",
        Body = new CreateProjectRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Project
}
catch (ApiException<CreateProjectError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateProjectOperationRequest](src/Contentstack/Requests/Projects/CreateProjectOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/Contentstack/Models/Project.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[CreateProjectError](src/Contentstack/Errors/CreateProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteProject(DeleteProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Projects.DeleteProject(new DeleteProjectRequest
    {
        OrganizationUid = "some example string",
        ProjectUid = "some example string",
    });
}
catch (ApiException<DeleteProjectError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteProjectRequest](src/Contentstack/Requests/Projects/DeleteProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[DeleteProjectError](src/Contentstack/Errors/DeleteProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteProjectsByProjectUid(DeleteProjectsByProjectUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Projects.DeleteProjectsByProjectUid(new DeleteProjectsByProjectUidRequest
    {
        ProjectUid = "some example string",
    });
}
catch (ApiException<DeleteProjectsByProjectUidError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteProjectsByProjectUidRequest](src/Contentstack/Requests/Projects/DeleteProjectsByProjectUidRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[DeleteProjectsByProjectUidError](src/Contentstack/Errors/DeleteProjectsByProjectUidError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectList&gt; GetAllProjects(GetAllProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Projects.GetAllProjects(new GetAllProjectsRequest
    {
        OrganizationUid = "some example string",
    });
    // TODO: Handle 'response' of type ProjectList
}
catch (ApiException<GetAllProjectsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllProjectsRequest](src/Contentstack/Requests/Projects/GetAllProjectsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectList](src/Contentstack/Models/ProjectList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllProjectsError](src/Contentstack/Errors/GetAllProjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Project&gt; GetProject(GetProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Projects.GetProject(new GetProjectRequest
    {
        OrganizationUid = "some example string",
        ProjectUid = "some example string",
    });
    // TODO: Handle 'response' of type Project
}
catch (ApiException<GetProjectError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetProjectRequest](src/Contentstack/Requests/Projects/GetProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/Contentstack/Models/Project.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetProjectError](src/Contentstack/Errors/GetProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectList2&gt; GetProjects(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Projects.GetProjects();
    // TODO: Handle 'response' of type ProjectList2
}
catch (ApiException<GetProjectsError> ex)
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

**OnSuccess**: <code>[ProjectList2](src/Contentstack/Models/ProjectList2.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetProjectsError](src/Contentstack/Errors/GetProjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Project2&gt; GetProjectsByProjectUid(GetProjectsByProjectUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Projects.GetProjectsByProjectUid(new GetProjectsByProjectUidRequest
    {
        ProjectUid = "some example string",
    });
    // TODO: Handle 'response' of type Project2
}
catch (ApiException<GetProjectsByProjectUidError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetProjectsByProjectUidRequest](src/Contentstack/Requests/Projects/GetProjectsByProjectUidRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project2](src/Contentstack/Models/Project2.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetProjectsByProjectUidError](src/Contentstack/Errors/GetProjectsByProjectUidError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Project2&gt; PostProjects(PostProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Projects.PostProjects(new PostProjectsRequest
    {
        Body = new CreateProjectRequest2 { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Project2
}
catch (ApiException<PostProjectsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostProjectsRequest](src/Contentstack/Requests/Projects/PostProjectsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project2](src/Contentstack/Models/Project2.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[PostProjectsError](src/Contentstack/Errors/PostProjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Project2&gt; PutProjectsByProjectUid(PutProjectsByProjectUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Projects.PutProjectsByProjectUid(new PutProjectsByProjectUidRequest
    {
        ProjectUid = "some example string",
        Body = new CreateProjectRequest2 { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Project2
}
catch (ApiException<PutProjectsByProjectUidError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutProjectsByProjectUidRequest](src/Contentstack/Requests/Projects/PutProjectsByProjectUidRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project2](src/Contentstack/Models/Project2.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[PutProjectsByProjectUidError](src/Contentstack/Errors/PutProjectsByProjectUidError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Project&gt; UpdateProject(UpdateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Projects.UpdateProject(new UpdateProjectRequest
    {
        OrganizationUid = "some example string",
        ProjectUid = "some example string",
        Body = new CreateProjectRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Project
}
catch (ApiException<UpdateProjectError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateProjectRequest](src/Contentstack/Requests/Projects/UpdateProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project](src/Contentstack/Models/Project.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UpdateProjectError](src/Contentstack/Errors/UpdateProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ScimGroups

> Source: [ScimGroups](src/Contentstack/Api/ScimGroups.cs)

<details>
<summary><code>Task&lt;ScimGroup&gt; CreateScimGroup(CreateScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ScimGroups.CreateScimGroup(new CreateScimGroupRequest
    {
        OrganizationUid = "some example string",
        Body = new ScimGroup(),
    });
    // TODO: Handle 'response' of type ScimGroup
}
catch (ApiException<CreateScimGroupError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateScimGroupRequest](src/Contentstack/Requests/ScimGroups/CreateScimGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimGroup](src/Contentstack/Models/ScimGroup.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[CreateScimGroupError](src/Contentstack/Errors/CreateScimGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteScimGroup(DeleteScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ScimGroups.DeleteScimGroup(new DeleteScimGroupRequest
    {
        OrganizationUid = "some example string",
        GroupId = "some example string",
    });
}
catch (ApiException<DeleteScimGroupError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteScimGroupRequest](src/Contentstack/Requests/ScimGroups/DeleteScimGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[DeleteScimGroupError](src/Contentstack/Errors/DeleteScimGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimGroup&gt; GetScimGroup(GetScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ScimGroups.GetScimGroup(new GetScimGroupRequest
    {
        OrganizationUid = "some example string",
        GroupId = "some example string",
    });
    // TODO: Handle 'response' of type ScimGroup
}
catch (ApiException<GetScimGroupError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetScimGroupRequest](src/Contentstack/Requests/ScimGroups/GetScimGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimGroup](src/Contentstack/Models/ScimGroup.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetScimGroupError](src/Contentstack/Errors/GetScimGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimListResponse&gt; ListScimGroups(ListScimGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ScimGroups.ListScimGroups(new ListScimGroupsRequest
    {
        OrganizationUid = "some example string",
    });
    // TODO: Handle 'response' of type ScimListResponse
}
catch (ApiException<ListScimGroupsError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListScimGroupsRequest](src/Contentstack/Requests/ScimGroups/ListScimGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimListResponse](src/Contentstack/Models/ScimListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[ListScimGroupsError](src/Contentstack/Errors/ListScimGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimGroup&gt; ReplaceScimGroup(ReplaceScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ScimGroups.ReplaceScimGroup(new ReplaceScimGroupRequest
    {
        OrganizationUid = "some example string",
        GroupId = "some example string",
        Body = new ScimGroup(),
    });
    // TODO: Handle 'response' of type ScimGroup
}
catch (ApiException<ReplaceScimGroupError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReplaceScimGroupRequest](src/Contentstack/Requests/ScimGroups/ReplaceScimGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimGroup](src/Contentstack/Models/ScimGroup.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[ReplaceScimGroupError](src/Contentstack/Errors/ReplaceScimGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimGroup&gt; UpdateScimGroup(UpdateScimGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ScimGroups.UpdateScimGroup(new UpdateScimGroupRequest
    {
        OrganizationUid = "some example string",
        GroupId = "some example string",
        Body = new ScimPatchRequest(),
    });
    // TODO: Handle 'response' of type ScimGroup
}
catch (ApiException<UpdateScimGroupError> ex)
{
    if (ex.Error.TryGetScimError(out var error))
    {
        // TODO: Handle 'error' of type ScimError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateScimGroupRequest](src/Contentstack/Requests/ScimGroups/UpdateScimGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScimGroup](src/Contentstack/Models/ScimGroup.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UpdateScimGroupError](src/Contentstack/Errors/UpdateScimGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ScimSchemaDiscovery

> Source: [ScimSchemaDiscovery](src/Contentstack/Api/ScimSchemaDiscovery.cs)

<details>
<summary><code>Task&lt;ScimListResponse&gt; GetScimResourceTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ScimSchemaDiscovery.GetScimResourceTypes();
    // TODO: Handle 'response' of type ScimListResponse
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

**OnSuccess**: <code>[ScimListResponse](src/Contentstack/Models/ScimListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Contentstack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScimListResponse&gt; GetScimSchemas(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ScimSchemaDiscovery.GetScimSchemas();
    // TODO: Handle 'response' of type ScimListResponse
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

**OnSuccess**: <code>[ScimListResponse](src/Contentstack/Models/ScimListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Contentstack/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Stacks

> Source: [Stacks](src/Contentstack/Api/Stacks.cs)

<details>
<summary><code>Task&lt;StackModel&gt; CreateStack(CreateStackOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Stacks.CreateStack(new CreateStackOperationRequest
    {
        OrganizationUid = "some example string",
        Body = new CreateStackRequest
        {
            Stack = new Stack2 { Name = "some example string", MasterLocale = "some example string" },
        },
    });
    // TODO: Handle 'response' of type StackModel
}
catch (ApiException<CreateStackError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateStackOperationRequest](src/Contentstack/Requests/Stacks/CreateStackOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StackModel](src/Contentstack/Models/StackModel.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[CreateStackError](src/Contentstack/Errors/CreateStackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteStack(DeleteStackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Stacks.DeleteStack(new DeleteStackRequest { ApiKey = "some example string" });
}
catch (ApiException<DeleteStackError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteStackRequest](src/Contentstack/Requests/Stacks/DeleteStackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[DeleteStackError](src/Contentstack/Errors/DeleteStackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StackList&gt; GetAllStacks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Stacks.GetAllStacks();
    // TODO: Handle 'response' of type StackList
}
catch (ApiException<GetAllStacksError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StackList](src/Contentstack/Models/StackList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllStacksError](src/Contentstack/Errors/GetAllStacksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StackModel&gt; GetStack(GetStackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Stacks.GetStack(new GetStackRequest { ApiKey = "some example string" });
    // TODO: Handle 'response' of type StackModel
}
catch (ApiException<GetStackError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetStackRequest](src/Contentstack/Requests/Stacks/GetStackRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StackModel](src/Contentstack/Models/StackModel.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetStackError](src/Contentstack/Errors/GetStackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StackModel&gt; UpdateStack(UpdateStackOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Stacks.UpdateStack(new UpdateStackOperationRequest
    {
        ApiKey = "some example string",
        Body = new UpdateStackRequest(),
    });
    // TODO: Handle 'response' of type StackModel
}
catch (ApiException<UpdateStackError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateStackOperationRequest](src/Contentstack/Requests/Stacks/UpdateStackOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StackModel](src/Contentstack/Models/StackModel.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UpdateStackError](src/Contentstack/Errors/UpdateStackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Synchronization

> Source: [Synchronization](src/Contentstack/Api/Synchronization.cs)

<details>
<summary><code>Task&lt;SyncResponse&gt; SyncContent(SyncContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Synchronization.SyncContent(new SyncContentRequest
    {
        Locale = "en-us",
        ApiKey = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type SyncResponse
}
catch (ApiException<SyncContentError> ex)
{
    if (ex.Error.TryGetErrorContentstackAssetsApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackAssetsApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SyncContentRequest](src/Contentstack/Requests/Synchronization/SyncContentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SyncResponse](src/Contentstack/Models/SyncResponse.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[SyncContentError](src/Contentstack/Errors/SyncContentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UserAttributes

> Source: [UserAttributes](src/Contentstack/Api/UserAttributes.cs)

<details>
<summary><code>Task MergeUserAttributes(MergeUserAttributesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.UserAttributes.MergeUserAttributes(new MergeUserAttributesOperationRequest
    {
        XProjectUid = "some example string",
        Body = new MergeUserAttributesRequest
        {
            SourceUserUid = "some example string",
            TargetUserUid = "some example string",
        },
    });
}
catch (ApiException<MergeUserAttributesError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MergeUserAttributesOperationRequest](src/Contentstack/Requests/UserAttributes/MergeUserAttributesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[MergeUserAttributesError](src/Contentstack/Errors/MergeUserAttributesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SetUserAttributes(SetUserAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.UserAttributes.SetUserAttributes(new SetUserAttributesRequest
    {
        XProjectUid = "some example string",
        Body = new Dictionary<string, object>(),
    });
}
catch (ApiException<SetUserAttributesError> ex)
{
    if (ex.Error.TryGetErrorContentstackPersonalizeManagementAttributesApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorContentstackPersonalizeManagementAttributesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SetUserAttributesRequest](src/Contentstack/Requests/UserAttributes/SetUserAttributesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[SetUserAttributesError](src/Contentstack/Errors/SetUserAttributesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UserSessions

> Source: [UserSessions](src/Contentstack/Api/UserSessions.cs)

<details>
<summary><code>Task&lt;LoginResponse&gt; LoginUser(LoginUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.UserSessions.LoginUser(new LoginUserRequest
    {
        Body = new LoginRequest { User = new User2 { Email = "user@example.com", Password = "some example password" } },
    });
    // TODO: Handle 'response' of type LoginResponse
}
catch (ApiException<LoginUserError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[LoginUserRequest](src/Contentstack/Requests/UserSessions/LoginUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LoginResponse](src/Contentstack/Models/LoginResponse.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[LoginUserError](src/Contentstack/Errors/LoginUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task LogoutUser(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.UserSessions.LogoutUser();
}
catch (ApiException<LogoutUserError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[LogoutUserError](src/Contentstack/Errors/LogoutUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/Contentstack/Api/Users.cs)

<details>
<summary><code>Task&lt;User&gt; GetUser(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Users.GetUser();
    // TODO: Handle 'response' of type User
}
catch (ApiException<GetUserError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/Contentstack/Models/User.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetUserError](src/Contentstack/Errors/GetUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;User&gt; UpdateUser(UpdateUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Users.UpdateUser(new UpdateUserOperationRequest { Body = new UpdateUserRequest() });
    // TODO: Handle 'response' of type User
}
catch (ApiException<UpdateUserError> ex)
{
    if (ex.Error.TryGetError2(out var error))
    {
        // TODO: Handle 'error' of type Error2
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateUserOperationRequest](src/Contentstack/Requests/Users/UpdateUserOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/Contentstack/Models/User.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UpdateUserError](src/Contentstack/Errors/UpdateUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Variables

> Source: [Variables](src/Contentstack/Api/Variables.cs)

<details>
<summary><code>Task&lt;Variable&gt; CreateVariable(CreateVariableOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Variables.CreateVariable(new CreateVariableOperationRequest
    {
        OrganizationUid = "some example string",
        ProjectUid = "some example string",
        Body = new CreateVariableRequest
        {
            Name = "some example string",
            Key = "some example string",
            Value = "some example string",
        },
    });
    // TODO: Handle 'response' of type Variable
}
catch (ApiException<CreateVariableError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateVariableOperationRequest](src/Contentstack/Requests/Variables/CreateVariableOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Variable](src/Contentstack/Models/Variable.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[CreateVariableError](src/Contentstack/Errors/CreateVariableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VariableList&gt; GetAllVariables(GetAllVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Variables.GetAllVariables(new GetAllVariablesRequest
    {
        OrganizationUid = "some example string",
        ProjectUid = "some example string",
    });
    // TODO: Handle 'response' of type VariableList
}
catch (ApiException<GetAllVariablesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllVariablesRequest](src/Contentstack/Requests/Variables/GetAllVariablesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VariableList](src/Contentstack/Models/VariableList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllVariablesError](src/Contentstack/Errors/GetAllVariablesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VoiceProfiles

> Source: [VoiceProfiles](src/Contentstack/Api/VoiceProfiles.cs)

<details>
<summary><code>Task&lt;VoiceProfile&gt; CreateVoiceProfile(CreateVoiceProfileOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VoiceProfiles.CreateVoiceProfile(new CreateVoiceProfileOperationRequest
    {
        BrandKitUid = "some example string",
        OrganizationUid = "some example string",
        Body = new CreateVoiceProfileRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type VoiceProfile
}
catch (ApiException<CreateVoiceProfileError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateVoiceProfileOperationRequest](src/Contentstack/Requests/VoiceProfiles/CreateVoiceProfileOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VoiceProfile](src/Contentstack/Models/VoiceProfile.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[CreateVoiceProfileError](src/Contentstack/Errors/CreateVoiceProfileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteVoiceProfile(DeleteVoiceProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.VoiceProfiles.DeleteVoiceProfile(new DeleteVoiceProfileRequest
    {
        BrandKitUid = "some example string",
        ProfileUid = "some example string",
        OrganizationUid = "some example string",
    });
}
catch (ApiException<DeleteVoiceProfileError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteVoiceProfileRequest](src/Contentstack/Requests/VoiceProfiles/DeleteVoiceProfileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[DeleteVoiceProfileError](src/Contentstack/Errors/DeleteVoiceProfileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VoiceProfileList&gt; GetAllVoiceProfiles(GetAllVoiceProfilesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VoiceProfiles.GetAllVoiceProfiles(new GetAllVoiceProfilesRequest
    {
        BrandKitUid = "some example string",
        OrganizationUid = "some example string",
    });
    // TODO: Handle 'response' of type VoiceProfileList
}
catch (ApiException<GetAllVoiceProfilesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAllVoiceProfilesRequest](src/Contentstack/Requests/VoiceProfiles/GetAllVoiceProfilesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VoiceProfileList](src/Contentstack/Models/VoiceProfileList.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetAllVoiceProfilesError](src/Contentstack/Errors/GetAllVoiceProfilesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VoiceProfile&gt; GetVoiceProfile(GetVoiceProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VoiceProfiles.GetVoiceProfile(new GetVoiceProfileRequest
    {
        BrandKitUid = "some example string",
        ProfileUid = "some example string",
        OrganizationUid = "some example string",
    });
    // TODO: Handle 'response' of type VoiceProfile
}
catch (ApiException<GetVoiceProfileError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVoiceProfileRequest](src/Contentstack/Requests/VoiceProfiles/GetVoiceProfileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VoiceProfile](src/Contentstack/Models/VoiceProfile.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[GetVoiceProfileError](src/Contentstack/Errors/GetVoiceProfileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VoiceProfile&gt; UpdateVoiceProfile(UpdateVoiceProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VoiceProfiles.UpdateVoiceProfile(new UpdateVoiceProfileRequest
    {
        BrandKitUid = "some example string",
        ProfileUid = "some example string",
        OrganizationUid = "some example string",
        Body = new CreateVoiceProfileRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type VoiceProfile
}
catch (ApiException<UpdateVoiceProfileError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateVoiceProfileRequest](src/Contentstack/Requests/VoiceProfiles/UpdateVoiceProfileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VoiceProfile](src/Contentstack/Models/VoiceProfile.cs)</code>

**OnError**: <code>[ApiException](src/Contentstack/Core/Exceptions/ApiException.cs)&lt;[UpdateVoiceProfileError](src/Contentstack/Errors/UpdateVoiceProfileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

