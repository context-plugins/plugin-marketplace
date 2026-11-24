# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [DopeSecurityClient](src/DopeSecurity/DopeSecurityClient.cs)

## Authorization

> Source: [Authorization](src/DopeSecurity/Api/Authorization.cs)

<details>
<summary><code>Task&lt;PartnerOauthTokenResponse&gt; GenerateAccessToken(GenerateAccessTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to generate an access token for use with the Flightdeck API. A valid access token returned from
this API is required in all other Flightdeck API calls.

Token generation is based on the OAuth 2.0 Client Credentials Flow. The returned token is used within the
HTTP Authorization header as follows:

`Authorization: Bearer `

Note:
- The required `client_id` and `client_secret` are created by an admin via the dope console.
- Returned access tokens are valid for a limited time period. Clients must check the `expires_in` value in
the response to generate a new access token before the current one expires.
- The OAuth scopes parameter is not supported and if provided will be ignored. The scopes returned in the access
token are set directly by the authorization server.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Authorization.GenerateAccessToken(new GenerateAccessTokenRequest
    {
        Body = new PartnerOauthTokenRequest { ClientId = "some example string", ClientSecret = "some example string" },
    });
    // TODO: Handle 'response' of type PartnerOauthTokenResponse
}
catch (ApiException<GenerateAccessTokenError> ex)
{
    if (ex.Error.TryGetOAuthError(out var error))
    {
        // TODO: Handle 'error' of type OAuthError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GenerateAccessTokenRequest](src/DopeSecurity/Requests/Authorization/GenerateAccessTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PartnerOauthTokenResponse](src/DopeSecurity/Models/PartnerOauthTokenResponse.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[GenerateAccessTokenError](src/DopeSecurity/Errors/GenerateAccessTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomCategoriesApi

> Source: [CustomCategoriesApi](src/DopeSecurity/Api/CustomCategoriesApi.cs)

<details>
<summary><code>Task&lt;SuccessMessage&gt; AddCustomCategoryUrls(AddCustomCategoryUrlsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to add URLs to an existing custom category.

Specify the name of the custom category in the path parameter (`custom_category_name`)
and provide a JSON array of URLs in the request body.

Ensure that URLs are properly formatted and included in the array.

Please check the docs at https://inflight.dope.security for guidelines on URL formatting.

If any URL in the list is invalid, the entire request will be rejected.
The 400 error response will include the list of invalid URLs in the error details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomCategoriesApi.AddCustomCategoryUrls(new AddCustomCategoryUrlsRequest
    {
        CustomCategoryName = "some example string",
        Body = new CustomCategoriesUrlsRequest(),
    });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<AddCustomCategoryUrlsError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddCustomCategoryUrlsRequest](src/DopeSecurity/Requests/CustomCategoriesApi/AddCustomCategoryUrlsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[AddCustomCategoryUrlsError](src/DopeSecurity/Errors/AddCustomCategoryUrlsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessMessage&gt; CreateCustomCategory(CreateCustomCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to create a new custom category.

Specify the name of the custom category in the path parameter (`custom_category_name`).

If the custom category already exists, a `400` error is returned.

Validation rules for `custom_category_name`:
- Must not be empty or whitespace-only
- Must not contain leading or trailing whitespace
- Maximum length of 32 characters
- Must not contain any of the following characters: `# ! @ $ % ^ * ? . / \`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomCategoriesApi.CreateCustomCategory(new CreateCustomCategoryRequest
    {
        CustomCategoryName = "some example string",
    });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<CreateCustomCategoryError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomCategoryRequest](src/DopeSecurity/Requests/CustomCategoriesApi/CreateCustomCategoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[CreateCustomCategoryError](src/DopeSecurity/Errors/CreateCustomCategoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessMessage&gt; DeleteAllCustomCategoryUrls(DeleteAllCustomCategoryUrlsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete all URLs from an existing custom category.

Specify the name of the custom category in the path parameter (`custom_category_name`).

This action will remove all URLs associated with the specified custom category.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomCategoriesApi.DeleteAllCustomCategoryUrls(new DeleteAllCustomCategoryUrlsRequest
    {
        CustomCategoryName = "some example string",
    });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<DeleteAllCustomCategoryUrlsError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAllCustomCategoryUrlsRequest](src/DopeSecurity/Requests/CustomCategoriesApi/DeleteAllCustomCategoryUrlsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[DeleteAllCustomCategoryUrlsError](src/DopeSecurity/Errors/DeleteAllCustomCategoryUrlsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessMessage&gt; DeleteCustomCategory(DeleteCustomCategoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete a single custom category by name.
This action will remove the custom category and all of its associated data.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomCategoriesApi.DeleteCustomCategory(new DeleteCustomCategoryRequest
    {
        CustomCategoryName = "some example string",
    });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<DeleteCustomCategoryError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomCategoryRequest](src/DopeSecurity/Requests/CustomCategoriesApi/DeleteCustomCategoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomCategoryError](src/DopeSecurity/Errors/DeleteCustomCategoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessMessage&gt; DeleteCustomCategoryUrl(DeleteCustomCategoryUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete a specific URL from an existing custom category.

Specify the name of the custom category in the path parameter (`custom_category_name`).

Ensure that a given URL is encoded using URL encoding.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomCategoriesApi.DeleteCustomCategoryUrl(new DeleteCustomCategoryUrlRequest
    {
        CustomCategoryName = "some example string",
        EncodedUrl = "some example string",
    });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<DeleteCustomCategoryUrlError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomCategoryUrlRequest](src/DopeSecurity/Requests/CustomCategoriesApi/DeleteCustomCategoryUrlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomCategoryUrlError](src/DopeSecurity/Errors/DeleteCustomCategoryUrlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomCategoriesResponse&gt; ListCustomCategories(ListCustomCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get a paginated list of all custom categories.

Results are returned in pages using cursor based pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomCategoriesApi.ListCustomCategories(new ListCustomCategoriesRequest());
    // TODO: Handle 'response' of type CustomCategoriesResponse
}
catch (ApiException<ListCustomCategoriesError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomCategoriesRequest](src/DopeSecurity/Requests/CustomCategoriesApi/ListCustomCategoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomCategoriesResponse](src/DopeSecurity/Models/CustomCategoriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[ListCustomCategoriesError](src/DopeSecurity/Errors/ListCustomCategoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomCategoriesUrlsResponse&gt; ListCustomCategoryUrls(ListCustomCategoryUrlsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get all URLs of an existing custom category.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomCategoriesApi.ListCustomCategoryUrls(new ListCustomCategoryUrlsRequest
    {
        CustomCategoryName = "some example string",
    });
    // TODO: Handle 'response' of type CustomCategoriesUrlsResponse
}
catch (ApiException<ListCustomCategoryUrlsError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomCategoryUrlsRequest](src/DopeSecurity/Requests/CustomCategoriesApi/ListCustomCategoryUrlsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomCategoriesUrlsResponse](src/DopeSecurity/Models/CustomCategoriesUrlsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[ListCustomCategoryUrlsError](src/DopeSecurity/Errors/ListCustomCategoryUrlsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessMessage&gt; OverwriteCustomCategoryUrls(OverwriteCustomCategoryUrlsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to replace all existing URLs of a custom category with a new list of URLs.

Specify the name of the custom category in the path parameter (`custom_category_name`)
and provide a JSON array of URLs in the request body. All existing URLs will be removed
and replaced with the provided list.

Please check the docs at https://inflight.dope.security for guidelines on URL formatting.

If any URL in the list is invalid, the entire request will be rejected.
The 400 error response will include the list of invalid URLs in the error details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomCategoriesApi.OverwriteCustomCategoryUrls(new OverwriteCustomCategoryUrlsRequest
    {
        CustomCategoryName = "some example string",
        Body = new CustomCategoriesUrlsRequest(),
    });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<OverwriteCustomCategoryUrlsError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[OverwriteCustomCategoryUrlsRequest](src/DopeSecurity/Requests/CustomCategoriesApi/OverwriteCustomCategoryUrlsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[OverwriteCustomCategoryUrlsError](src/DopeSecurity/Errors/OverwriteCustomCategoryUrlsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Endpoints

> Source: [Endpoints](src/DopeSecurity/Api/Endpoints.cs)

<details>
<summary><code>Task&lt;EndpointsSearchResponse&gt; SearchEndpoints(SearchEndpointsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get a list of all endpoints, or search for those matching a query parameter.

Note:
- To return a list of all endpoints do not include any additional parameter.
- Only one of the optional parameters is allowed to be specified per request.
- Results are returned in pages using cursor based pagination and ordered by the `lastSeen` property.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Endpoints.SearchEndpoints(new SearchEndpointsRequest());
    // TODO: Handle 'response' of type EndpointsSearchResponse
}
catch (ApiException<SearchEndpointsError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchEndpointsRequest](src/DopeSecurity/Requests/Endpoints/SearchEndpointsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EndpointsSearchResponse](src/DopeSecurity/Models/EndpointsSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[SearchEndpointsError](src/DopeSecurity/Errors/SearchEndpointsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Policies

> Source: [Policies](src/DopeSecurity/Api/Policies.cs)

<details>
<summary><code>Task&lt;SuccessMessage&gt; CreatePolicy(CreatePolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to create a new policy.

Specify the name of the policy in the path parameter (`policy_name`).

If the policy already exists, a `400` error is returned.

Validation rules for `policy_name`:
- Must not be empty or whitespace-only
- Must not contain leading or trailing whitespace
- Maximum length of 32 characters
- Must not contain any of the following characters: `# ! @ $ % ^ * ? . / \`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.CreatePolicy(new CreatePolicyRequest { PolicyName = "some example string" });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<CreatePolicyError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePolicyRequest](src/DopeSecurity/Requests/Policies/CreatePolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[CreatePolicyError](src/DopeSecurity/Errors/CreatePolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessMessage&gt; DeleteCustomApplicationBypass(DeleteCustomApplicationBypassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete custom application bypass entries from a policy by name.

The operation is idempotent — names that do not exist are silently ignored.

At least one of `mac` or `windows` must be provided.

Policies that inherit application bypass from the Base Policy cannot have custom applications deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.DeleteCustomApplicationBypass(new DeleteCustomApplicationBypassRequest
    {
        PolicyName = "some example string",
        Body = new PoliciesBypassApplicationsRequest1 { Data = new Data8 { Custom = new Custom3() } },
    });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<DeleteCustomApplicationBypassError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomApplicationBypassRequest](src/DopeSecurity/Requests/Policies/DeleteCustomApplicationBypassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomApplicationBypassError](src/DopeSecurity/Errors/DeleteCustomApplicationBypassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessMessage&gt; DeleteCustomUrlBypass(DeleteCustomUrlBypassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete custom URL bypass entries from a policy by name.

The operation is idempotent — names that do not exist are silently ignored.

Policies that inherit URL bypass from the Base Policy cannot have custom URLs deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.DeleteCustomUrlBypass(new DeleteCustomUrlBypassRequest
    {
        PolicyName = "some example string",
        Body = new PoliciesBypassUrlsRequest1
        {
            Data = new Data6 { Custom = new Custom1 { Urls = ["some example string"] } },
        },
    });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<DeleteCustomUrlBypassError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCustomUrlBypassRequest](src/DopeSecurity/Requests/Policies/DeleteCustomUrlBypassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[DeleteCustomUrlBypassError](src/DopeSecurity/Errors/DeleteCustomUrlBypassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessMessage&gt; DeletePolicy(DeletePolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete a custom policy by name.
This removes the policy and unassigns all users and groups from the policy.

The Base Policy cannot be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.DeletePolicy(new DeletePolicyRequest { PolicyName = "some example string" });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<DeletePolicyError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeletePolicyRequest](src/DopeSecurity/Requests/Policies/DeletePolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[DeletePolicyError](src/DopeSecurity/Errors/DeletePolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PoliciesBypassApplicationsResponse&gt; GetApplicationBypass(GetApplicationBypassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get the application bypass entries for a policy.

The response contains both admin-defined `custom` entries and dope-provided
`default` entries with their per-entry toggle state, split per platform
(`mac` and `windows`).

When a policy inherits from the base policy, `inheritsFromBase` will be `true`
and the `custom` and `default` entries will reflect the base policy's settings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.GetApplicationBypass(new GetApplicationBypassRequest
    {
        PolicyName = "some example string",
    });
    // TODO: Handle 'response' of type PoliciesBypassApplicationsResponse
}
catch (ApiException<GetApplicationBypassError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApplicationBypassRequest](src/DopeSecurity/Requests/Policies/GetApplicationBypassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PoliciesBypassApplicationsResponse](src/DopeSecurity/Models/PoliciesBypassApplicationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[GetApplicationBypassError](src/DopeSecurity/Errors/GetApplicationBypassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PoliciesAssignmentsResponse&gt; GetPolicyAssignments(GetPolicyAssignmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get the users and groups assigned to a policy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.GetPolicyAssignments(new GetPolicyAssignmentsRequest
    {
        PolicyName = "some example string",
    });
    // TODO: Handle 'response' of type PoliciesAssignmentsResponse
}
catch (ApiException<GetPolicyAssignmentsError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPolicyAssignmentsRequest](src/DopeSecurity/Requests/Policies/GetPolicyAssignmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PoliciesAssignmentsResponse](src/DopeSecurity/Models/PoliciesAssignmentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[GetPolicyAssignmentsError](src/DopeSecurity/Errors/GetPolicyAssignmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PolicyContentResponse&gt; GetPolicyContent(GetPolicyContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to retrieve the entire content of a policy, including
categories and custom categories.

When a policy inherits from the base policy, `inheritsFromBase` will be `true`
and the content will reflect the base policy's settings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.GetPolicyContent(new GetPolicyContentRequest
    {
        PolicyName = "some example string",
    });
    // TODO: Handle 'response' of type PolicyContentResponse
}
catch (ApiException<GetPolicyContentError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPolicyContentRequest](src/DopeSecurity/Requests/Policies/GetPolicyContentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PolicyContentResponse](src/DopeSecurity/Models/PolicyContentResponse.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[GetPolicyContentError](src/DopeSecurity/Errors/GetPolicyContentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PoliciesSslInspectionResponse&gt; GetSslInspection(GetSslInspectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get the SSL inspection configuration for a policy.

The response returns `sslInspection` as an object containing the resolved
`state` (always `enabled` or `disabled`) and `inheritsFromBase` indicating
whether the policy inherits SSL inspection from the Base Policy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.GetSslInspection(new GetSslInspectionRequest
    {
        PolicyName = "some example string",
    });
    // TODO: Handle 'response' of type PoliciesSslInspectionResponse
}
catch (ApiException<GetSslInspectionError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSslInspectionRequest](src/DopeSecurity/Requests/Policies/GetSslInspectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PoliciesSslInspectionResponse](src/DopeSecurity/Models/PoliciesSslInspectionResponse.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[GetSslInspectionError](src/DopeSecurity/Errors/GetSslInspectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PoliciesBypassUrlsResponse&gt; GetUrlBypass(GetUrlBypassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get the URL bypass entries for a policy.

The response contains both admin-defined `custom` entries and dope-provided
`default` entries with their per-entry toggle state.

When a policy inherits from the base policy, `inheritsFromBase` will be `true`
and the `custom` and `default` entries will reflect the base policy's settings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.GetUrlBypass(new GetUrlBypassRequest { PolicyName = "some example string" });
    // TODO: Handle 'response' of type PoliciesBypassUrlsResponse
}
catch (ApiException<GetUrlBypassError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUrlBypassRequest](src/DopeSecurity/Requests/Policies/GetUrlBypassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PoliciesBypassUrlsResponse](src/DopeSecurity/Models/PoliciesBypassUrlsResponse.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[GetUrlBypassError](src/DopeSecurity/Errors/GetUrlBypassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PoliciesResponse&gt; ListPolicies(ListPoliciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get a paginated list of all your policies, ordered by policy name.

Each item includes the policy name, last-modified timestamp, SSL inspection status, and
the number of conflicting assignments.

The `sslInspection` field returns the effective value (`enabled` or `disabled`). If SSL
inspection is not explicitly configured on a policy, the value is inherited from the Base Policy.

Results are returned in pages using cursor-based pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.ListPolicies(new ListPoliciesRequest());
    // TODO: Handle 'response' of type PoliciesResponse
}
catch (ApiException<ListPoliciesError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPoliciesRequest](src/DopeSecurity/Requests/Policies/ListPoliciesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PoliciesResponse](src/DopeSecurity/Models/PoliciesResponse.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[ListPoliciesError](src/DopeSecurity/Errors/ListPoliciesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessMessage&gt; UpdatePolicyAssignments(UpdatePolicyAssignmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to update the users and groups assigned to a policy.

Each provided field fully replaces that assignment list. Omitted fields are preserved.
Send an empty array to unassign all users or groups.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.UpdatePolicyAssignments(new UpdatePolicyAssignmentsRequest
    {
        PolicyName = "some example string",
        Body = new PoliciesAssignmentsRequest(),
    });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<UpdatePolicyAssignmentsError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePolicyAssignmentsRequest](src/DopeSecurity/Requests/Policies/UpdatePolicyAssignmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[UpdatePolicyAssignmentsError](src/DopeSecurity/Errors/UpdatePolicyAssignmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessMessage&gt; UpdatePolicyExceptions(UpdatePolicyExceptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to update user/group-level exceptions on dope and custom categories for a policy.

Exceptions are per-user/group overrides of a category's restriction.
Each exception is keyed by the user or group identifier (e.g. email address) within a category.

A single request can update exceptions across multiple dope and custom categories.
Categories not included in the request remain unchanged. For each category provided, the submitted
exception set is treated as the complete source of truth and fully replaces any existing exceptions.
Any existing entries not included in the request for that category will be removed.
To remove all exceptions from a category, pass an empty object `{}` as its value.

All user and group identifiers are validated against the tenant directory.
If any identifier cannot be resolved, the request fails with a `400 Bad Request`,
and the response includes details of the invalid entries.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.UpdatePolicyExceptions(new UpdatePolicyExceptionsRequest
    {
        PolicyName = "some example string",
        Body = new PolicyContentExceptionsRequest { Data = new Data2FlightdeckDopeSecurityPublicApiSpecification() },
    });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<UpdatePolicyExceptionsError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePolicyExceptionsRequest](src/DopeSecurity/Requests/Policies/UpdatePolicyExceptionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[UpdatePolicyExceptionsError](src/DopeSecurity/Errors/UpdatePolicyExceptionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessMessage&gt; UpdatePolicyRestrictions(UpdatePolicyRestrictionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to update restrictions on dope and custom categories for a policy.

A single call may update restrictions on any combination of dope
and custom categories. Only submitted categories will be updated -
any category not included in the request will be left unchanged.

This API also resets categories back to inheriting from base.
Both dope categories and custom categories inherit from base
(and are reset) as a whole by sending `{inheritsFromBase:true}` in the payload.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.UpdatePolicyRestrictions(new UpdatePolicyRestrictionsRequest
    {
        PolicyName = "some example string",
        Body = new PolicyContentRestrictionsRequest
        {
            Data = new DataFlightdeckDopeSecurityPublicApiSpecificationWithCategories(),
        },
    });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<UpdatePolicyRestrictionsError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePolicyRestrictionsRequest](src/DopeSecurity/Requests/Policies/UpdatePolicyRestrictionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[UpdatePolicyRestrictionsError](src/DopeSecurity/Errors/UpdatePolicyRestrictionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessMessage&gt; UpdateSslInspection(UpdateSslInspectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to update the SSL inspection configuration for a policy.

The request body must be either:
- `{"state": "enabled" | "disabled"}` to set a custom state on this policy, OR
- `{"inheritsFromBase": true}` to make this policy inherit SSL inspection from the Base Policy.

Exactly one of these two shapes is allowed. Anything else (extra fields,
both fields, `inheritsFromBase: false`) returns `400`. The Base Policy
cannot inherit from itself; setting `inheritsFromBase: true` on the Base
Policy returns `400`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.UpdateSslInspection(new UpdateSslInspectionRequest
    {
        PolicyName = "some example string",
        Body = new PoliciesSslInspectionRequest
        {
            Data = new Data10 { SslInspection = new SslInspectionStateBody { State = State.Enabled } },
        },
    });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<UpdateSslInspectionError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSslInspectionRequest](src/DopeSecurity/Requests/Policies/UpdateSslInspectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[UpdateSslInspectionError](src/DopeSecurity/Errors/UpdateSslInspectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessMessage&gt; UpsertApplicationBypass(UpsertApplicationBypassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upsert custom application bypass entries and/or update default application bypass states for a policy.

**Custom entries** are matched by name: matching names are overwritten, unknown names are added.
Unmentioned custom entries are preserved.

**Default entries** are matched by name: set `state` to `ignored` to suppress a default entry,
or `applied` to re-enable it. Unknown default entry names are silently ignored.

Pass `inheritsFromBase: true` as the entire `data` payload to reset the policy to inherit
all application bypass configuration from the base policy (this drops all custom entries and default
overrides for this policy).

**Detaching from Base**: If a policy inherits from the Base Policy (`inheritsFromBase: true`),
sending `custom` or `default` entries will detach it. Base entries are not copied — include any
you want to keep in the request. Once detached, further Base Policy changes will no longer
propagate to this policy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.UpsertApplicationBypass(new UpsertApplicationBypassRequest
    {
        PolicyName = "some example string",
        Body = new PoliciesBypassApplicationsRequest { Data = new BaseInheritance() },
    });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<UpsertApplicationBypassError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpsertApplicationBypassRequest](src/DopeSecurity/Requests/Policies/UpsertApplicationBypassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[UpsertApplicationBypassError](src/DopeSecurity/Errors/UpsertApplicationBypassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessMessage&gt; UpsertUrlBypass(UpsertUrlBypassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upsert custom URL bypass entries and/or update default URL bypass states for a policy.

**Custom entries** are matched by name: matching names are overwritten, unknown names are added.
Unmentioned custom entries are preserved.

**Default entries** are matched by name: set `state` to `ignored` to suppress a default entry,
or `applied` to re-enable it. Unknown default entry names are silently ignored.

Pass `inheritsFromBase: true` as the entire `data` payload to reset the policy to inherit
all URL bypass configuration from the base policy (this drops all custom entries and default
overrides for this policy).

**Detaching from Base**: If a policy inherits from the Base Policy (`inheritsFromBase: true`),
sending `custom` or `default` entries will detach it. Base entries are not copied — include any
you want to keep in the request. Once detached, further Base Policy changes will no longer
propagate to this policy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Policies.UpsertUrlBypass(new UpsertUrlBypassRequest
    {
        PolicyName = "some example string",
        Body = new PoliciesBypassUrlsRequest { Data = new BaseInheritance() },
    });
    // TODO: Handle 'response' of type SuccessMessage
}
catch (ApiException<UpsertUrlBypassError> ex)
{
    if (ex.Error.TryGetErrorsModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorsModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpsertUrlBypassRequest](src/DopeSecurity/Requests/Policies/UpsertUrlBypassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessMessage](src/DopeSecurity/Models/SuccessMessage.cs)</code>

**OnError**: <code>[ApiException](src/DopeSecurity/Core/Exceptions/ApiException.cs)&lt;[UpsertUrlBypassError](src/DopeSecurity/Errors/UpsertUrlBypassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

