# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [ApigeeClient](src/Apigee/ApigeeClient.cs)

## Hybrid

> Source: [Hybrid](src/Apigee/Api/Hybrid.cs)

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListHybridIssuersResponse&gt; ApigeeHybridIssuersList(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists hybrid services and its trusted issuers service account ids. This api is authenticated and unauthorized(allow all the users) and used by runtime authn-authz service to query control plane's issuer service account ids.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Hybrid.ApigeeHybridIssuersList();
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListHybridIssuersResponse
}
catch (ApiException<ApigeeHybridIssuersListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListHybridIssuersResponse](src/Apigee/Models/GoogleCloudApigeeV1ListHybridIssuersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeHybridIssuersListError](src/Apigee/Errors/ApigeeHybridIssuersListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](src/Apigee/Api/Organizations.cs)

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Datastore&gt; ApigeeOrganizationsAnalyticsDatastoresCreate(ApigeeOrganizationsAnalyticsDatastoresCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a Datastore for an org

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAnalyticsDatastoresCreate(
        new ApigeeOrganizationsAnalyticsDatastoresCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1Datastore(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Datastore
}
catch (ApiException<ApigeeOrganizationsAnalyticsDatastoresCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAnalyticsDatastoresCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAnalyticsDatastoresCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Datastore](src/Apigee/Models/GoogleCloudApigeeV1Datastore.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAnalyticsDatastoresCreateError](src/Apigee/Errors/ApigeeOrganizationsAnalyticsDatastoresCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsAnalyticsDatastoresDelete(ApigeeOrganizationsAnalyticsDatastoresDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a Datastore from an org.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAnalyticsDatastoresDelete(
        new ApigeeOrganizationsAnalyticsDatastoresDeleteRequest
        {
            OrganizationsId = "some example string",
            DatastoresId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsAnalyticsDatastoresDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAnalyticsDatastoresDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAnalyticsDatastoresDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAnalyticsDatastoresDeleteError](src/Apigee/Errors/ApigeeOrganizationsAnalyticsDatastoresDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Datastore&gt; ApigeeOrganizationsAnalyticsDatastoresGet(ApigeeOrganizationsAnalyticsDatastoresGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Datastore

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAnalyticsDatastoresGet(
        new ApigeeOrganizationsAnalyticsDatastoresGetRequest
        {
            OrganizationsId = "some example string",
            DatastoresId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Datastore
}
catch (ApiException<ApigeeOrganizationsAnalyticsDatastoresGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAnalyticsDatastoresGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAnalyticsDatastoresGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Datastore](src/Apigee/Models/GoogleCloudApigeeV1Datastore.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAnalyticsDatastoresGetError](src/Apigee/Errors/ApigeeOrganizationsAnalyticsDatastoresGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListDatastoresResponse&gt; ApigeeOrganizationsAnalyticsDatastoresList(ApigeeOrganizationsAnalyticsDatastoresListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Datastores

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAnalyticsDatastoresList(
        new ApigeeOrganizationsAnalyticsDatastoresListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListDatastoresResponse
}
catch (ApiException<ApigeeOrganizationsAnalyticsDatastoresListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAnalyticsDatastoresListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAnalyticsDatastoresListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListDatastoresResponse](src/Apigee/Models/GoogleCloudApigeeV1ListDatastoresResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAnalyticsDatastoresListError](src/Apigee/Errors/ApigeeOrganizationsAnalyticsDatastoresListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1TestDatastoreResponse&gt; ApigeeOrganizationsAnalyticsDatastoresTest(ApigeeOrganizationsAnalyticsDatastoresTestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Test if Datastore configuration is correct. This includes checking if credentials provided by customer have required permissions in target destination storage

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAnalyticsDatastoresTest(
        new ApigeeOrganizationsAnalyticsDatastoresTestRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1Datastore(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1TestDatastoreResponse
}
catch (ApiException<ApigeeOrganizationsAnalyticsDatastoresTestError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAnalyticsDatastoresTestRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAnalyticsDatastoresTestRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1TestDatastoreResponse](src/Apigee/Models/GoogleCloudApigeeV1TestDatastoreResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAnalyticsDatastoresTestError](src/Apigee/Errors/ApigeeOrganizationsAnalyticsDatastoresTestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Datastore&gt; ApigeeOrganizationsAnalyticsDatastoresUpdate(ApigeeOrganizationsAnalyticsDatastoresUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Datastore

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAnalyticsDatastoresUpdate(
        new ApigeeOrganizationsAnalyticsDatastoresUpdateRequest
        {
            OrganizationsId = "some example string",
            DatastoresId = "some example string",
            Body = new GoogleCloudApigeeV1Datastore(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Datastore
}
catch (ApiException<ApigeeOrganizationsAnalyticsDatastoresUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAnalyticsDatastoresUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAnalyticsDatastoresUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Datastore](src/Apigee/Models/GoogleCloudApigeeV1Datastore.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAnalyticsDatastoresUpdateError](src/Apigee/Errors/ApigeeOrganizationsAnalyticsDatastoresUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsApimServiceExtensionsCreate(ApigeeOrganizationsApimServiceExtensionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an APIM ServiceExtension in an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApimServiceExtensionsCreate(
        new ApigeeOrganizationsApimServiceExtensionsCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1ApimServiceExtension(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsApimServiceExtensionsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApimServiceExtensionsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApimServiceExtensionsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApimServiceExtensionsCreateError](src/Apigee/Errors/ApigeeOrganizationsApimServiceExtensionsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsApimServiceExtensionsDelete(ApigeeOrganizationsApimServiceExtensionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes APIM service extension from an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApimServiceExtensionsDelete(
        new ApigeeOrganizationsApimServiceExtensionsDeleteRequest
        {
            OrganizationsId = "some example string",
            ApimServiceExtensionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsApimServiceExtensionsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApimServiceExtensionsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApimServiceExtensionsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApimServiceExtensionsDeleteError](src/Apigee/Errors/ApigeeOrganizationsApimServiceExtensionsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApimServiceExtension&gt; ApigeeOrganizationsApimServiceExtensionsGet(ApigeeOrganizationsApimServiceExtensionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets APIM service extension details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApimServiceExtensionsGet(
        new ApigeeOrganizationsApimServiceExtensionsGetRequest
        {
            OrganizationsId = "some example string",
            ApimServiceExtensionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApimServiceExtension
}
catch (ApiException<ApigeeOrganizationsApimServiceExtensionsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApimServiceExtensionsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApimServiceExtensionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApimServiceExtension](src/Apigee/Models/GoogleCloudApigeeV1ApimServiceExtension.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApimServiceExtensionsGetError](src/Apigee/Errors/ApigeeOrganizationsApimServiceExtensionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListApimServiceExtensionsResponse&gt; ApigeeOrganizationsApimServiceExtensionsList(ApigeeOrganizationsApimServiceExtensionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all APIM service extensions in an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApimServiceExtensionsList(
        new ApigeeOrganizationsApimServiceExtensionsListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListApimServiceExtensionsResponse
}
catch (ApiException<ApigeeOrganizationsApimServiceExtensionsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApimServiceExtensionsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApimServiceExtensionsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListApimServiceExtensionsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListApimServiceExtensionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApimServiceExtensionsListError](src/Apigee/Errors/ApigeeOrganizationsApimServiceExtensionsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsApimServiceExtensionsPatch(ApigeeOrganizationsApimServiceExtensionsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an APIM service extension in an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApimServiceExtensionsPatch(
        new ApigeeOrganizationsApimServiceExtensionsPatchRequest
        {
            OrganizationsId = "some example string",
            ApimServiceExtensionsId = "some example string",
            Body = new GoogleCloudApigeeV1ApimServiceExtension(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsApimServiceExtensionsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApimServiceExtensionsPatchRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApimServiceExtensionsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApimServiceExtensionsPatchError](src/Apigee/Errors/ApigeeOrganizationsApimServiceExtensionsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Attributes&gt; ApigeeOrganizationsApiproductsAttributes(ApigeeOrganizationsApiproductsAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates or creates API product attributes. This API **replaces** the current list of attributes with the attributes specified in the request body. In this way, you can update existing attributes, add new attributes, or delete existing attributes by omitting them from the request body. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with entities also get cached for at least 180 seconds after entity is accessed during runtime. In this case, the `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsAttributes(
        new ApigeeOrganizationsApiproductsAttributesRequest
        {
            OrganizationsId = "some example string",
            ApiproductsId = "some example string",
            Body = new GoogleCloudApigeeV1Attributes(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Attributes
}
catch (ApiException<ApigeeOrganizationsApiproductsAttributesError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsAttributesRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsAttributesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Attributes](src/Apigee/Models/GoogleCloudApigeeV1Attributes.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsAttributesError](src/Apigee/Errors/ApigeeOrganizationsApiproductsAttributesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Attribute&gt; ApigeeOrganizationsApiproductsAttributesDelete(ApigeeOrganizationsApiproductsAttributesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an API product attribute.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsAttributesDelete(
        new ApigeeOrganizationsApiproductsAttributesDeleteRequest
        {
            OrganizationsId = "some example string",
            ApiproductsId = "some example string",
            AttributesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Attribute
}
catch (ApiException<ApigeeOrganizationsApiproductsAttributesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsAttributesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsAttributesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Attribute](src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsAttributesDeleteError](src/Apigee/Errors/ApigeeOrganizationsApiproductsAttributesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Attribute&gt; ApigeeOrganizationsApiproductsAttributesGet(ApigeeOrganizationsApiproductsAttributesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the value of an API product attribute.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsAttributesGet(
        new ApigeeOrganizationsApiproductsAttributesGetRequest
        {
            OrganizationsId = "some example string",
            ApiproductsId = "some example string",
            AttributesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Attribute
}
catch (ApiException<ApigeeOrganizationsApiproductsAttributesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsAttributesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsAttributesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Attribute](src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsAttributesGetError](src/Apigee/Errors/ApigeeOrganizationsApiproductsAttributesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Attributes&gt; ApigeeOrganizationsApiproductsAttributesList(ApigeeOrganizationsApiproductsAttributesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all API product attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsAttributesList(
        new ApigeeOrganizationsApiproductsAttributesListRequest
        {
            OrganizationsId = "some example string",
            ApiproductsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Attributes
}
catch (ApiException<ApigeeOrganizationsApiproductsAttributesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsAttributesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsAttributesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Attributes](src/Apigee/Models/GoogleCloudApigeeV1Attributes.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsAttributesListError](src/Apigee/Errors/ApigeeOrganizationsApiproductsAttributesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Attribute&gt; ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttribute(ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the value of an API product attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with entities also get cached for at least 180 seconds after entity is accessed during runtime. In this case, the `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttribute(
        new ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeRequest
        {
            OrganizationsId = "some example string",
            ApiproductsId = "some example string",
            AttributesId = "some example string",
            Body = new GoogleCloudApigeeV1Attribute(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Attribute
}
catch (ApiException<ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Attribute](src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeError](src/Apigee/Errors/ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiProduct&gt; ApigeeOrganizationsApiproductsCreate(ApigeeOrganizationsApiproductsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an API product in an organization. You create API products after you have proxied backend services using API proxies. An API product is a collection of API resources combined with quota settings and metadata that you can use to deliver customized and productized API bundles to your developer community. This metadata can include: - Scope - Environments - API proxies - Extensible profile API products enable you repackage APIs on the fly, without having to do any additional coding or configuration. Apigee recommends that you start with a simple API product including only required elements. You then provision credentials to apps to enable them to start testing your APIs. After you have authentication and authorization working against a simple API product, you can iterate to create finer-grained API products, defining different sets of API resources for each API product. **WARNING:** - If you don't specify an API proxy in the request body, *any* app associated with the product can make calls to *any* API in your entire organization. - If you don't specify an environment in the request body, the product allows access to all environments. For more information, see What is an API product?

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsCreate(
        new ApigeeOrganizationsApiproductsCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1ApiProduct(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiProduct
}
catch (ApiException<ApigeeOrganizationsApiproductsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiProduct](src/Apigee/Models/GoogleCloudApigeeV1ApiProduct.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsCreateError](src/Apigee/Errors/ApigeeOrganizationsApiproductsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiProduct&gt; ApigeeOrganizationsApiproductsDelete(ApigeeOrganizationsApiproductsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an API product from an organization. Deleting an API product causes app requests to the resource URIs defined in the API product to fail. Ensure that you create a new API product to serve existing apps, unless your intention is to disable access to the resources defined in the API product. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via the UI or the API. View the list of API products to verify the internal name.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsDelete(
        new ApigeeOrganizationsApiproductsDeleteRequest
        {
            OrganizationsId = "some example string",
            ApiproductsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiProduct
}
catch (ApiException<ApigeeOrganizationsApiproductsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiProduct](src/Apigee/Models/GoogleCloudApigeeV1ApiProduct.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsDeleteError](src/Apigee/Errors/ApigeeOrganizationsApiproductsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiProduct&gt; ApigeeOrganizationsApiproductsGet(ApigeeOrganizationsApiproductsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets configuration details for an API product. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via the UI or the API. View the list of API products to verify the internal name.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsGet(
        new ApigeeOrganizationsApiproductsGetRequest
        {
            OrganizationsId = "some example string",
            ApiproductsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiProduct
}
catch (ApiException<ApigeeOrganizationsApiproductsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiProduct](src/Apigee/Models/GoogleCloudApigeeV1ApiProduct.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsGetError](src/Apigee/Errors/ApigeeOrganizationsApiproductsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListApiProductsResponse&gt; ApigeeOrganizationsApiproductsList(ApigeeOrganizationsApiproductsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all API product names for an organization. Filter the list by passing an `attributename` and `attibutevalue`. The maximum number of API products returned is 1000. You can paginate the list of API products returned using the `startKey` and `count` query parameters. If the resource has the `space` attribute set, the response may not return all resources. To learn more, read the Apigee Spaces Overview.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsList(
        new ApigeeOrganizationsApiproductsListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListApiProductsResponse
}
catch (ApiException<ApigeeOrganizationsApiproductsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListApiProductsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListApiProductsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsListError](src/Apigee/Errors/ApigeeOrganizationsApiproductsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiProduct&gt; ApigeeOrganizationsApiproductsMove(ApigeeOrganizationsApiproductsMoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Moves an API product to a different space.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsMove(
        new ApigeeOrganizationsApiproductsMoveRequest
        {
            OrganizationsId = "some example string",
            ApiproductsId = "some example string",
            Body = new GoogleCloudApigeeV1MoveApiProductRequest(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiProduct
}
catch (ApiException<ApigeeOrganizationsApiproductsMoveError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsMoveRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsMoveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiProduct](src/Apigee/Models/GoogleCloudApigeeV1ApiProduct.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsMoveError](src/Apigee/Errors/ApigeeOrganizationsApiproductsMoveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1RatePlan&gt; ApigeeOrganizationsApiproductsRateplansCreate(ApigeeOrganizationsApiproductsRateplansCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a rate plan that is associated with an API product in an organization. Using rate plans, API product owners can monetize their API products by configuring one or more of the following: - Billing frequency - Initial setup fees for using an API product - Payment funding model (postpaid only) - Fixed recurring or consumption-based charges for using an API product - Revenue sharing with developer partners An API product can have multiple rate plans associated with it but *only one* rate plan can be active at any point of time. **Note: From the developer's perspective, they purchase API products not rate plans.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsRateplansCreate(
        new ApigeeOrganizationsApiproductsRateplansCreateRequest
        {
            OrganizationsId = "some example string",
            ApiproductsId = "some example string",
            Body = new GoogleCloudApigeeV1RatePlan(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1RatePlan
}
catch (ApiException<ApigeeOrganizationsApiproductsRateplansCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsRateplansCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsRateplansCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1RatePlan](src/Apigee/Models/GoogleCloudApigeeV1RatePlan.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsRateplansCreateError](src/Apigee/Errors/ApigeeOrganizationsApiproductsRateplansCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1RatePlan&gt; ApigeeOrganizationsApiproductsRateplansDelete(ApigeeOrganizationsApiproductsRateplansDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a rate plan.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsRateplansDelete(
        new ApigeeOrganizationsApiproductsRateplansDeleteRequest
        {
            OrganizationsId = "some example string",
            ApiproductsId = "some example string",
            RateplansId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1RatePlan
}
catch (ApiException<ApigeeOrganizationsApiproductsRateplansDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsRateplansDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsRateplansDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1RatePlan](src/Apigee/Models/GoogleCloudApigeeV1RatePlan.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsRateplansDeleteError](src/Apigee/Errors/ApigeeOrganizationsApiproductsRateplansDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1RatePlan&gt; ApigeeOrganizationsApiproductsRateplansGet(ApigeeOrganizationsApiproductsRateplansGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the details of a rate plan.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsRateplansGet(
        new ApigeeOrganizationsApiproductsRateplansGetRequest
        {
            OrganizationsId = "some example string",
            ApiproductsId = "some example string",
            RateplansId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1RatePlan
}
catch (ApiException<ApigeeOrganizationsApiproductsRateplansGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsRateplansGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsRateplansGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1RatePlan](src/Apigee/Models/GoogleCloudApigeeV1RatePlan.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsRateplansGetError](src/Apigee/Errors/ApigeeOrganizationsApiproductsRateplansGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListRatePlansResponse&gt; ApigeeOrganizationsApiproductsRateplansList(ApigeeOrganizationsApiproductsRateplansListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all the rate plans for an API product.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsRateplansList(
        new ApigeeOrganizationsApiproductsRateplansListRequest
        {
            OrganizationsId = "some example string",
            ApiproductsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListRatePlansResponse
}
catch (ApiException<ApigeeOrganizationsApiproductsRateplansListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsRateplansListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsRateplansListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListRatePlansResponse](src/Apigee/Models/GoogleCloudApigeeV1ListRatePlansResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsRateplansListError](src/Apigee/Errors/ApigeeOrganizationsApiproductsRateplansListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1RatePlan&gt; ApigeeOrganizationsApiproductsRateplansUpdate(ApigeeOrganizationsApiproductsRateplansUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing rate plan.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsRateplansUpdate(
        new ApigeeOrganizationsApiproductsRateplansUpdateRequest
        {
            OrganizationsId = "some example string",
            ApiproductsId = "some example string",
            RateplansId = "some example string",
            Body = new GoogleCloudApigeeV1RatePlan(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1RatePlan
}
catch (ApiException<ApigeeOrganizationsApiproductsRateplansUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsRateplansUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsRateplansUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1RatePlan](src/Apigee/Models/GoogleCloudApigeeV1RatePlan.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsRateplansUpdateError](src/Apigee/Errors/ApigeeOrganizationsApiproductsRateplansUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiProduct&gt; ApigeeOrganizationsApiproductsUpdate(ApigeeOrganizationsApiproductsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing API product. You must include all required values, whether or not you are updating them, as well as any optional values that you are updating. The API product name required in the request URL is the internal name of the product, not the display name. While they may be the same, it depends on whether the API product was created via UI or API. View the list of API products to identify their internal names. **Note:** We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApiproductsUpdate(
        new ApigeeOrganizationsApiproductsUpdateRequest
        {
            OrganizationsId = "some example string",
            ApiproductsId = "some example string",
            Body = new GoogleCloudApigeeV1ApiProduct(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiProduct
}
catch (ApiException<ApigeeOrganizationsApiproductsUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApiproductsUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiProduct](src/Apigee/Models/GoogleCloudApigeeV1ApiProduct.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApiproductsUpdateError](src/Apigee/Errors/ApigeeOrganizationsApiproductsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiProxyRevision&gt; ApigeeOrganizationsApisCreate(ApigeeOrganizationsApisCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an API proxy. The API proxy created will not be accessible at runtime until it is deployed to an environment. Create a new API proxy by setting the `name` query parameter to the name of the API proxy. Import an API proxy configuration bundle stored in zip format on your local machine to your organization by doing the following: * Set the `name` query parameter to the name of the API proxy. * Set the `action` query parameter to `import`. * Set the `Content-Type` header to `multipart/form-data`. * Pass as a file the name of API proxy configuration bundle stored in zip format on your local machine using the `file` form field. **Note**: To validate the API proxy configuration bundle only without importing it, set the `action` query parameter to `validate`. When importing an API proxy configuration bundle, if the API proxy does not exist, it will be created. If the API proxy exists, then a new revision is created. Invalid API proxy configurations are rejected, and a list of validation errors is returned to the client.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisCreate(new ApigeeOrganizationsApisCreateRequest
    {
        OrganizationsId = "some example string",
        Body = new GoogleApiHttpBody(),
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiProxyRevision
}
catch (ApiException<ApigeeOrganizationsApisCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiProxyRevision](src/Apigee/Models/GoogleCloudApigeeV1ApiProxyRevision.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisCreateError](src/Apigee/Errors/ApigeeOrganizationsApisCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListApiDebugSessionsResponse&gt; ApigeeOrganizationsApisDebugsessionsList(ApigeeOrganizationsApisDebugsessionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists debug sessions that are currently active in the given API Proxy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisDebugsessionsList(
        new ApigeeOrganizationsApisDebugsessionsListRequest
        {
            OrganizationsId = "some example string",
            ApisId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListApiDebugSessionsResponse
}
catch (ApiException<ApigeeOrganizationsApisDebugsessionsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisDebugsessionsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisDebugsessionsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListApiDebugSessionsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListApiDebugSessionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisDebugsessionsListError](src/Apigee/Errors/ApigeeOrganizationsApisDebugsessionsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiProxy&gt; ApigeeOrganizationsApisDelete(ApigeeOrganizationsApisDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an API proxy and all associated endpoints, policies, resources, and revisions. The API proxy must be undeployed before you can delete it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisDelete(new ApigeeOrganizationsApisDeleteRequest
    {
        OrganizationsId = "some example string",
        ApisId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiProxy
}
catch (ApiException<ApigeeOrganizationsApisDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiProxy](src/Apigee/Models/GoogleCloudApigeeV1ApiProxy.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisDeleteError](src/Apigee/Errors/ApigeeOrganizationsApisDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListDeploymentsResponse&gt; ApigeeOrganizationsApisDeploymentsList(ApigeeOrganizationsApisDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all deployments of an API proxy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisDeploymentsList(
        new ApigeeOrganizationsApisDeploymentsListRequest
        {
            OrganizationsId = "some example string",
            ApisId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListDeploymentsResponse
}
catch (ApiException<ApigeeOrganizationsApisDeploymentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisDeploymentsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisDeploymentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListDeploymentsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisDeploymentsListError](src/Apigee/Errors/ApigeeOrganizationsApisDeploymentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiProxy&gt; ApigeeOrganizationsApisGet(ApigeeOrganizationsApisGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets an API proxy including a list of existing revisions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisGet(new ApigeeOrganizationsApisGetRequest
    {
        OrganizationsId = "some example string",
        ApisId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiProxy
}
catch (ApiException<ApigeeOrganizationsApisGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiProxy](src/Apigee/Models/GoogleCloudApigeeV1ApiProxy.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisGetError](src/Apigee/Errors/ApigeeOrganizationsApisGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueMap&gt; ApigeeOrganizationsApisKeyvaluemapsCreate(ApigeeOrganizationsApisKeyvaluemapsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a key value map in an API proxy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisKeyvaluemapsCreate(
        new ApigeeOrganizationsApisKeyvaluemapsCreateRequest
        {
            OrganizationsId = "some example string",
            ApisId = "some example string",
            Body = new GoogleCloudApigeeV1KeyValueMap(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueMap
}
catch (ApiException<ApigeeOrganizationsApisKeyvaluemapsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisKeyvaluemapsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueMap](src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisKeyvaluemapsCreateError](src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueMap&gt; ApigeeOrganizationsApisKeyvaluemapsDelete(ApigeeOrganizationsApisKeyvaluemapsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a key value map from an API proxy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisKeyvaluemapsDelete(
        new ApigeeOrganizationsApisKeyvaluemapsDeleteRequest
        {
            OrganizationsId = "some example string",
            ApisId = "some example string",
            KeyvaluemapsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueMap
}
catch (ApiException<ApigeeOrganizationsApisKeyvaluemapsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisKeyvaluemapsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueMap](src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisKeyvaluemapsDeleteError](src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueEntry&gt; ApigeeOrganizationsApisKeyvaluemapsEntriesCreate(ApigeeOrganizationsApisKeyvaluemapsEntriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesCreate(
        new ApigeeOrganizationsApisKeyvaluemapsEntriesCreateRequest
        {
            OrganizationsId = "some example string",
            ApisId = "some example string",
            KeyvaluemapsId = "some example string",
            Body = new GoogleCloudApigeeV1KeyValueEntry(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueEntry
}
catch (ApiException<ApigeeOrganizationsApisKeyvaluemapsEntriesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisKeyvaluemapsEntriesCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsEntriesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueEntry](src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisKeyvaluemapsEntriesCreateError](src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsEntriesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueEntry&gt; ApigeeOrganizationsApisKeyvaluemapsEntriesDelete(ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. **Notes:** * After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior. * Supported for Apigee hybrid 1.8.x and higher.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesDelete(
        new ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteRequest
        {
            OrganizationsId = "some example string",
            ApisId = "some example string",
            KeyvaluemapsId = "some example string",
            EntriesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueEntry
}
catch (ApiException<ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueEntry](src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteError](src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueEntry&gt; ApigeeOrganizationsApisKeyvaluemapsEntriesGet(ApigeeOrganizationsApisKeyvaluemapsEntriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesGet(
        new ApigeeOrganizationsApisKeyvaluemapsEntriesGetRequest
        {
            OrganizationsId = "some example string",
            ApisId = "some example string",
            KeyvaluemapsId = "some example string",
            EntriesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueEntry
}
catch (ApiException<ApigeeOrganizationsApisKeyvaluemapsEntriesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisKeyvaluemapsEntriesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsEntriesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueEntry](src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisKeyvaluemapsEntriesGetError](src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsEntriesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListKeyValueEntriesResponse&gt; ApigeeOrganizationsApisKeyvaluemapsEntriesList(ApigeeOrganizationsApisKeyvaluemapsEntriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesList(
        new ApigeeOrganizationsApisKeyvaluemapsEntriesListRequest
        {
            OrganizationsId = "some example string",
            ApisId = "some example string",
            KeyvaluemapsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListKeyValueEntriesResponse
}
catch (ApiException<ApigeeOrganizationsApisKeyvaluemapsEntriesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisKeyvaluemapsEntriesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsEntriesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListKeyValueEntriesResponse](src/Apigee/Models/GoogleCloudApigeeV1ListKeyValueEntriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisKeyvaluemapsEntriesListError](src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsEntriesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueEntry&gt; ApigeeOrganizationsApisKeyvaluemapsEntriesUpdate(ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update key value entry scoped to an organization, environment, or API proxy for an existing key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesUpdate(
        new ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateRequest
        {
            OrganizationsId = "some example string",
            ApisId = "some example string",
            KeyvaluemapsId = "some example string",
            EntriesId = "some example string",
            Body = new GoogleCloudApigeeV1KeyValueEntry(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueEntry
}
catch (ApiException<ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueEntry](src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateError](src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueMap&gt; ApigeeOrganizationsApisKeyvaluemapsGet(ApigeeOrganizationsApisKeyvaluemapsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the key value map scoped to an organization, environment, or API proxy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisKeyvaluemapsGet(
        new ApigeeOrganizationsApisKeyvaluemapsGetRequest
        {
            OrganizationsId = "some example string",
            ApisId = "some example string",
            KeyvaluemapsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueMap
}
catch (ApiException<ApigeeOrganizationsApisKeyvaluemapsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisKeyvaluemapsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueMap](src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisKeyvaluemapsGetError](src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueMap&gt; ApigeeOrganizationsApisKeyvaluemapsUpdate(ApigeeOrganizationsApisKeyvaluemapsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the key value map scoped to an organization, environment, or API proxy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisKeyvaluemapsUpdate(
        new ApigeeOrganizationsApisKeyvaluemapsUpdateRequest
        {
            OrganizationsId = "some example string",
            ApisId = "some example string",
            KeyvaluemapsId = "some example string",
            Body = new GoogleCloudApigeeV1KeyValueMap(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueMap
}
catch (ApiException<ApigeeOrganizationsApisKeyvaluemapsUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisKeyvaluemapsUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueMap](src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisKeyvaluemapsUpdateError](src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListApiProxiesResponse&gt; ApigeeOrganizationsApisList(ApigeeOrganizationsApisListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the names of all API proxies in an organization. The names returned correspond to the names defined in the configuration files for each API proxy. If the resource has the `space` attribute set, the response may not return all resources. To learn more, read the Apigee Spaces Overview.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisList(new ApigeeOrganizationsApisListRequest
    {
        OrganizationsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListApiProxiesResponse
}
catch (ApiException<ApigeeOrganizationsApisListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListApiProxiesResponse](src/Apigee/Models/GoogleCloudApigeeV1ListApiProxiesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisListError](src/Apigee/Errors/ApigeeOrganizationsApisListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiProxy&gt; ApigeeOrganizationsApisMove(ApigeeOrganizationsApisMoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Moves an API proxy to a different space.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisMove(new ApigeeOrganizationsApisMoveRequest
    {
        OrganizationsId = "some example string",
        ApisId = "some example string",
        Body = new GoogleCloudApigeeV1MoveApiProxyRequest(),
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiProxy
}
catch (ApiException<ApigeeOrganizationsApisMoveError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisMoveRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisMoveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiProxy](src/Apigee/Models/GoogleCloudApigeeV1ApiProxy.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisMoveError](src/Apigee/Errors/ApigeeOrganizationsApisMoveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiProxy&gt; ApigeeOrganizationsApisPatch(ApigeeOrganizationsApisPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing API proxy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisPatch(new ApigeeOrganizationsApisPatchRequest
    {
        OrganizationsId = "some example string",
        ApisId = "some example string",
        Body = new GoogleCloudApigeeV1ApiProxy(),
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiProxy
}
catch (ApiException<ApigeeOrganizationsApisPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisPatchRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiProxy](src/Apigee/Models/GoogleCloudApigeeV1ApiProxy.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisPatchError](src/Apigee/Errors/ApigeeOrganizationsApisPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiProxyRevision&gt; ApigeeOrganizationsApisRevisionsDelete(ApigeeOrganizationsApisRevisionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an API proxy revision and all policies, resources, endpoints, and revisions associated with it. The API proxy revision must be undeployed before you can delete it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisRevisionsDelete(
        new ApigeeOrganizationsApisRevisionsDeleteRequest
        {
            OrganizationsId = "some example string",
            ApisId = "some example string",
            RevisionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiProxyRevision
}
catch (ApiException<ApigeeOrganizationsApisRevisionsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisRevisionsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisRevisionsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiProxyRevision](src/Apigee/Models/GoogleCloudApigeeV1ApiProxyRevision.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisRevisionsDeleteError](src/Apigee/Errors/ApigeeOrganizationsApisRevisionsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListDeploymentsResponse&gt; ApigeeOrganizationsApisRevisionsDeploymentsList(ApigeeOrganizationsApisRevisionsDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all deployments of an API proxy revision.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisRevisionsDeploymentsList(
        new ApigeeOrganizationsApisRevisionsDeploymentsListRequest
        {
            OrganizationsId = "some example string",
            ApisId = "some example string",
            RevisionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListDeploymentsResponse
}
catch (ApiException<ApigeeOrganizationsApisRevisionsDeploymentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisRevisionsDeploymentsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisRevisionsDeploymentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListDeploymentsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisRevisionsDeploymentsListError](src/Apigee/Errors/ApigeeOrganizationsApisRevisionsDeploymentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleApiHttpBody&gt; ApigeeOrganizationsApisRevisionsGet(ApigeeOrganizationsApisRevisionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets an API proxy revision. To download the API proxy configuration bundle for the specified revision as a zip file, set the `format` query parameter to `bundle`. If you are using curl, specify `-o filename.zip` to save the output to a file; otherwise, it displays to `stdout`. Then, develop the API proxy configuration locally and upload the updated API proxy configuration revision, as described in updateApiProxyRevision.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisRevisionsGet(
        new ApigeeOrganizationsApisRevisionsGetRequest
        {
            OrganizationsId = "some example string",
            ApisId = "some example string",
            RevisionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleApiHttpBody
}
catch (ApiException<ApigeeOrganizationsApisRevisionsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisRevisionsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisRevisionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleApiHttpBody](src/Apigee/Models/GoogleApiHttpBody.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisRevisionsGetError](src/Apigee/Errors/ApigeeOrganizationsApisRevisionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiProxyRevision&gt; ApigeeOrganizationsApisRevisionsUpdateApiProxyRevision(ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing API proxy revision by uploading the API proxy configuration bundle as a zip file from your local machine. You can update only API proxy revisions that have never been deployed. After deployment, an API proxy revision becomes immutable, even if it is undeployed. Set the `Content-Type` header to either `multipart/form-data` or `application/octet-stream`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsApisRevisionsUpdateApiProxyRevision(
        new ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionRequest
        {
            OrganizationsId = "some example string",
            ApisId = "some example string",
            RevisionsId = "some example string",
            Body = new GoogleApiHttpBody(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiProxyRevision
}
catch (ApiException<ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiProxyRevision](src/Apigee/Models/GoogleCloudApigeeV1ApiProxyRevision.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionError](src/Apigee/Errors/ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupApp&gt; ApigeeOrganizationsAppgroupsAppsCreate(ApigeeOrganizationsAppgroupsAppsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an app and associates it with an AppGroup. This API associates the AppGroup app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsAppsCreate(
        new ApigeeOrganizationsAppgroupsAppsCreateRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            Body = new GoogleCloudApigeeV1AppGroupApp(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupApp
}
catch (ApiException<ApigeeOrganizationsAppgroupsAppsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsAppsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupApp](src/Apigee/Models/GoogleCloudApigeeV1AppGroupApp.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsAppsCreateError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupApp&gt; ApigeeOrganizationsAppgroupsAppsDelete(ApigeeOrganizationsAppgroupsAppsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an AppGroup app. **Note**: The delete operation is asynchronous. The AppGroup app is deleted immediately, but its associated resources, such as app keys or access tokens, may take anywhere from a few seconds to a few minutes to be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsAppsDelete(
        new ApigeeOrganizationsAppgroupsAppsDeleteRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            AppsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupApp
}
catch (ApiException<ApigeeOrganizationsAppgroupsAppsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsAppsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupApp](src/Apigee/Models/GoogleCloudApigeeV1AppGroupApp.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsAppsDeleteError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupApp&gt; ApigeeOrganizationsAppgroupsAppsGet(ApigeeOrganizationsAppgroupsAppsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details for an AppGroup app.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsAppsGet(
        new ApigeeOrganizationsAppgroupsAppsGetRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            AppsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupApp
}
catch (ApiException<ApigeeOrganizationsAppgroupsAppsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsAppsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupApp](src/Apigee/Models/GoogleCloudApigeeV1AppGroupApp.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsAppsGetError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupAppKey&gt; ApigeeOrganizationsAppgroupsAppsKeysApiproductsDelete(ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an API product from an app's consumer key. After the API product is removed, the app cannot access the API resources defined in that API product. **Note**: The consumer key is not removed, only its association with the API product.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsAppsKeysApiproductsDelete(
        new ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            AppsId = "some example string",
            KeysId = "some example string",
            ApiproductsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupAppKey
}
catch (ApiException<ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupAppKey](src/Apigee/Models/GoogleCloudApigeeV1AppGroupAppKey.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProduct(ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approves or revokes the consumer key for an API product. After a consumer key is approved, the app can use it to access APIs. A consumer key that is revoked or pending cannot be used to access an API. Any access tokens associated with a revoked consumer key will remain active. However, Apigee checks the status of the consumer key and if set to `revoked` will not allow access to the API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProduct(
        new ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            AppsId = "some example string",
            KeysId = "some example string",
            ApiproductsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupAppKey&gt; ApigeeOrganizationsAppgroupsAppsKeysCreate(ApigeeOrganizationsAppgroupsAppsKeysCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom consumer key and secret for a AppGroup app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateAppGroupAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteAppGroupAppKey API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsAppsKeysCreate(
        new ApigeeOrganizationsAppgroupsAppsKeysCreateRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            AppsId = "some example string",
            Body = new GoogleCloudApigeeV1AppGroupAppKey(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupAppKey
}
catch (ApiException<ApigeeOrganizationsAppgroupsAppsKeysCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsAppsKeysCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsKeysCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupAppKey](src/Apigee/Models/GoogleCloudApigeeV1AppGroupAppKey.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsAppsKeysCreateError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsKeysCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupAppKey&gt; ApigeeOrganizationsAppgroupsAppsKeysDelete(ApigeeOrganizationsAppgroupsAppsKeysDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an app's consumer key and removes all API products associated with the app. After the consumer key is deleted, it cannot be used to access any APIs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsAppsKeysDelete(
        new ApigeeOrganizationsAppgroupsAppsKeysDeleteRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            AppsId = "some example string",
            KeysId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupAppKey
}
catch (ApiException<ApigeeOrganizationsAppgroupsAppsKeysDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsAppsKeysDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsKeysDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupAppKey](src/Apigee/Models/GoogleCloudApigeeV1AppGroupAppKey.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsAppsKeysDeleteError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsKeysDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupAppKey&gt; ApigeeOrganizationsAppgroupsAppsKeysGet(ApigeeOrganizationsAppgroupsAppsKeysGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details for a consumer key for a AppGroup app, including the key and secret value, associated API products, and other information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsAppsKeysGet(
        new ApigeeOrganizationsAppgroupsAppsKeysGetRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            AppsId = "some example string",
            KeysId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupAppKey
}
catch (ApiException<ApigeeOrganizationsAppgroupsAppsKeysGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsAppsKeysGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsKeysGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupAppKey](src/Apigee/Models/GoogleCloudApigeeV1AppGroupAppKey.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsAppsKeysGetError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsKeysGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupAppKey&gt; ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKey(ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an API product to an AppGroupAppKey, enabling the app that holds the key to access the API resources bundled in the API product. In addition, you can add attributes and scopes to the AppGroupAppKey. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively. You can use the same key to access all API products associated with the app.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKey(
        new ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            AppsId = "some example string",
            KeysId = "some example string",
            Body = new GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupAppKey
}
catch (ApiException<ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupAppKey](src/Apigee/Models/GoogleCloudApigeeV1AppGroupAppKey.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListAppGroupAppsResponse&gt; ApigeeOrganizationsAppgroupsAppsList(ApigeeOrganizationsAppgroupsAppsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all apps created by an AppGroup in an Apigee organization. Optionally, you can request an expanded view of the AppGroup apps. Lists all AppGroupApps in an AppGroup. A maximum of 1000 AppGroup apps are returned in the response if PageSize is not specified, or if the PageSize is greater than 1000.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsAppsList(
        new ApigeeOrganizationsAppgroupsAppsListRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListAppGroupAppsResponse
}
catch (ApiException<ApigeeOrganizationsAppgroupsAppsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsAppsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListAppGroupAppsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListAppGroupAppsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsAppsListError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupApp&gt; ApigeeOrganizationsAppgroupsAppsUpdate(ApigeeOrganizationsAppgroupsAppsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the details for an AppGroup app. In addition, you can add an API product to an AppGroup app and automatically generate an API key for the app to use when calling APIs in the API product. If you want to use an existing API key for the API product, add the API product to the API key using the UpdateAppGroupAppKey API. Using this API, you cannot update the app name, as it is the primary key used to identify the app and cannot be changed. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively. **Note:** We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsAppsUpdate(
        new ApigeeOrganizationsAppgroupsAppsUpdateRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            AppsId = "some example string",
            Body = new GoogleCloudApigeeV1AppGroupApp(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupApp
}
catch (ApiException<ApigeeOrganizationsAppgroupsAppsUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsAppsUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupApp](src/Apigee/Models/GoogleCloudApigeeV1AppGroupApp.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsAppsUpdateError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupBalance&gt; ApigeeOrganizationsAppgroupsBalanceAdjust(ApigeeOrganizationsAppgroupsBalanceAdjustRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adjust the prepaid balance for the AppGroup. This API will be used in scenarios where the AppGroup has been under-charged or over-charged.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsBalanceAdjust(
        new ApigeeOrganizationsAppgroupsBalanceAdjustRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            Body = new GoogleCloudApigeeV1AdjustAppGroupBalanceRequest(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupBalance
}
catch (ApiException<ApigeeOrganizationsAppgroupsBalanceAdjustError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsBalanceAdjustRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsBalanceAdjustRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupBalance](src/Apigee/Models/GoogleCloudApigeeV1AppGroupBalance.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsBalanceAdjustError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsBalanceAdjustError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupBalance&gt; ApigeeOrganizationsAppgroupsBalanceCredit(ApigeeOrganizationsAppgroupsBalanceCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Credits the account balance for the AppGroup.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsBalanceCredit(
        new ApigeeOrganizationsAppgroupsBalanceCreditRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            Body = new GoogleCloudApigeeV1CreditAppGroupBalanceRequest(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupBalance
}
catch (ApiException<ApigeeOrganizationsAppgroupsBalanceCreditError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsBalanceCreditRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsBalanceCreditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupBalance](src/Apigee/Models/GoogleCloudApigeeV1AppGroupBalance.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsBalanceCreditError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsBalanceCreditError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroup&gt; ApigeeOrganizationsAppgroupsCreate(ApigeeOrganizationsAppgroupsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an AppGroup. Once created, user can register apps under the AppGroup to obtain secret key and password. At creation time, the AppGroup's state is set as `active`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsCreate(
        new ApigeeOrganizationsAppgroupsCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1AppGroup(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroup
}
catch (ApiException<ApigeeOrganizationsAppgroupsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroup](src/Apigee/Models/GoogleCloudApigeeV1AppGroup.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsCreateError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroup&gt; ApigeeOrganizationsAppgroupsDelete(ApigeeOrganizationsAppgroupsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an AppGroup. All app and API keys associations with the AppGroup are also removed. **Warning**: This API will permanently delete the AppGroup and related artifacts. **Note**: The delete operation is asynchronous. The AppGroup is deleted immediately, but its associated resources, such as apps and API keys, may take anywhere from a few seconds to a few minutes to be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsDelete(
        new ApigeeOrganizationsAppgroupsDeleteRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroup
}
catch (ApiException<ApigeeOrganizationsAppgroupsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroup](src/Apigee/Models/GoogleCloudApigeeV1AppGroup.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsDeleteError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroup&gt; ApigeeOrganizationsAppgroupsGet(ApigeeOrganizationsAppgroupsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the AppGroup details for the provided AppGroup name in the request URI.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsGet(new ApigeeOrganizationsAppgroupsGetRequest
    {
        OrganizationsId = "some example string",
        AppgroupsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroup
}
catch (ApiException<ApigeeOrganizationsAppgroupsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroup](src/Apigee/Models/GoogleCloudApigeeV1AppGroup.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsGetError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupBalance&gt; ApigeeOrganizationsAppgroupsGetBalance(ApigeeOrganizationsAppgroupsGetBalanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the account balance for the AppGroup.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsGetBalance(
        new ApigeeOrganizationsAppgroupsGetBalanceRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupBalance
}
catch (ApiException<ApigeeOrganizationsAppgroupsGetBalanceError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsGetBalanceRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsGetBalanceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupBalance](src/Apigee/Models/GoogleCloudApigeeV1AppGroupBalance.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsGetBalanceError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsGetBalanceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupMonetizationConfig&gt; ApigeeOrganizationsAppgroupsGetMonetizationConfig(ApigeeOrganizationsAppgroupsGetMonetizationConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the monetization configuration for the AppGroup.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsGetMonetizationConfig(
        new ApigeeOrganizationsAppgroupsGetMonetizationConfigRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupMonetizationConfig
}
catch (ApiException<ApigeeOrganizationsAppgroupsGetMonetizationConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsGetMonetizationConfigRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsGetMonetizationConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupMonetizationConfig](src/Apigee/Models/GoogleCloudApigeeV1AppGroupMonetizationConfig.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsGetMonetizationConfigError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsGetMonetizationConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListAppGroupsResponse&gt; ApigeeOrganizationsAppgroupsList(ApigeeOrganizationsAppgroupsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all AppGroups in an organization. A maximum of 1000 AppGroups are returned in the response if PageSize is not specified, or if the PageSize is greater than 1000.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsList(
        new ApigeeOrganizationsAppgroupsListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListAppGroupsResponse
}
catch (ApiException<ApigeeOrganizationsAppgroupsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListAppGroupsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListAppGroupsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsListError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupSubscription&gt; ApigeeOrganizationsAppgroupsSubscriptionsCreate(ApigeeOrganizationsAppgroupsSubscriptionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a subscription to an API product.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsSubscriptionsCreate(
        new ApigeeOrganizationsAppgroupsSubscriptionsCreateRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            Body = new GoogleCloudApigeeV1AppGroupSubscription(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupSubscription
}
catch (ApiException<ApigeeOrganizationsAppgroupsSubscriptionsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsSubscriptionsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsSubscriptionsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupSubscription](src/Apigee/Models/GoogleCloudApigeeV1AppGroupSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsSubscriptionsCreateError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsSubscriptionsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupSubscription&gt; ApigeeOrganizationsAppgroupsSubscriptionsExpire(ApigeeOrganizationsAppgroupsSubscriptionsExpireRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Expires an API product subscription immediately.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsSubscriptionsExpire(
        new ApigeeOrganizationsAppgroupsSubscriptionsExpireRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            SubscriptionsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupSubscription
}
catch (ApiException<ApigeeOrganizationsAppgroupsSubscriptionsExpireError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsSubscriptionsExpireRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsSubscriptionsExpireRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupSubscription](src/Apigee/Models/GoogleCloudApigeeV1AppGroupSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsSubscriptionsExpireError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsSubscriptionsExpireError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupSubscription&gt; ApigeeOrganizationsAppgroupsSubscriptionsGet(ApigeeOrganizationsAppgroupsSubscriptionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an api product subscription for an appgroup.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsSubscriptionsGet(
        new ApigeeOrganizationsAppgroupsSubscriptionsGetRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            SubscriptionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupSubscription
}
catch (ApiException<ApigeeOrganizationsAppgroupsSubscriptionsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsSubscriptionsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsSubscriptionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupSubscription](src/Apigee/Models/GoogleCloudApigeeV1AppGroupSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsSubscriptionsGetError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsSubscriptionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse&gt; ApigeeOrganizationsAppgroupsSubscriptionsList(ApigeeOrganizationsAppgroupsSubscriptionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all api product subscriptions for an appgroup.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsSubscriptionsList(
        new ApigeeOrganizationsAppgroupsSubscriptionsListRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse
}
catch (ApiException<ApigeeOrganizationsAppgroupsSubscriptionsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsSubscriptionsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsSubscriptionsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsSubscriptionsListError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsSubscriptionsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroup&gt; ApigeeOrganizationsAppgroupsUpdate(ApigeeOrganizationsAppgroupsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an AppGroup. This API replaces the existing AppGroup details with those specified in the request. Include or exclude any existing details that you want to retain or delete, respectively. Note that the state of the AppGroup should be updated using `action`, and not via AppGroup. **Note:** We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsUpdate(
        new ApigeeOrganizationsAppgroupsUpdateRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            Body = new GoogleCloudApigeeV1AppGroup(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroup
}
catch (ApiException<ApigeeOrganizationsAppgroupsUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroup](src/Apigee/Models/GoogleCloudApigeeV1AppGroup.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsUpdateError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AppGroupMonetizationConfig&gt; ApigeeOrganizationsAppgroupsUpdateMonetizationConfig(ApigeeOrganizationsAppgroupsUpdateMonetizationConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the monetization configuration for the AppGroup. **Note:** We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppgroupsUpdateMonetizationConfig(
        new ApigeeOrganizationsAppgroupsUpdateMonetizationConfigRequest
        {
            OrganizationsId = "some example string",
            AppgroupsId = "some example string",
            Body = new GoogleCloudApigeeV1AppGroupMonetizationConfig(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AppGroupMonetizationConfig
}
catch (ApiException<ApigeeOrganizationsAppgroupsUpdateMonetizationConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppgroupsUpdateMonetizationConfigRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsUpdateMonetizationConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AppGroupMonetizationConfig](src/Apigee/Models/GoogleCloudApigeeV1AppGroupMonetizationConfig.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppgroupsUpdateMonetizationConfigError](src/Apigee/Errors/ApigeeOrganizationsAppgroupsUpdateMonetizationConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1App&gt; ApigeeOrganizationsAppsGet(ApigeeOrganizationsAppsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the app profile for the specified app ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppsGet(new ApigeeOrganizationsAppsGetRequest
    {
        OrganizationsId = "some example string",
        AppsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1App
}
catch (ApiException<ApigeeOrganizationsAppsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1App](src/Apigee/Models/GoogleCloudApigeeV1App.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppsGetError](src/Apigee/Errors/ApigeeOrganizationsAppsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListAppsResponse&gt; ApigeeOrganizationsAppsList(ApigeeOrganizationsAppsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists IDs of apps within an organization that have the specified app status (approved or revoked) or are of the specified app type (developer or company).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsAppsList(new ApigeeOrganizationsAppsListRequest
    {
        OrganizationsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListAppsResponse
}
catch (ApiException<ApigeeOrganizationsAppsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsAppsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsAppsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListAppsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListAppsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsAppsListError](src/Apigee/Errors/ApigeeOrganizationsAppsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsCreate(ApigeeOrganizationsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Apigee organization. See Create an Apigee organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsCreate(new ApigeeOrganizationsCreateRequest
    {
        Body = new GoogleCloudApigeeV1Organization(),
    });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsCreateError](src/Apigee/Errors/ApigeeOrganizationsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DataCollector&gt; ApigeeOrganizationsDatacollectorsCreate(ApigeeOrganizationsDatacollectorsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new data collector.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDatacollectorsCreate(
        new ApigeeOrganizationsDatacollectorsCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1DataCollector(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DataCollector
}
catch (ApiException<ApigeeOrganizationsDatacollectorsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDatacollectorsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDatacollectorsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DataCollector](src/Apigee/Models/GoogleCloudApigeeV1DataCollector.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDatacollectorsCreateError](src/Apigee/Errors/ApigeeOrganizationsDatacollectorsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsDatacollectorsDelete(ApigeeOrganizationsDatacollectorsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a data collector.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDatacollectorsDelete(
        new ApigeeOrganizationsDatacollectorsDeleteRequest
        {
            OrganizationsId = "some example string",
            DatacollectorsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsDatacollectorsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDatacollectorsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDatacollectorsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDatacollectorsDeleteError](src/Apigee/Errors/ApigeeOrganizationsDatacollectorsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DataCollector&gt; ApigeeOrganizationsDatacollectorsGet(ApigeeOrganizationsDatacollectorsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a data collector.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDatacollectorsGet(
        new ApigeeOrganizationsDatacollectorsGetRequest
        {
            OrganizationsId = "some example string",
            DatacollectorsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DataCollector
}
catch (ApiException<ApigeeOrganizationsDatacollectorsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDatacollectorsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDatacollectorsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DataCollector](src/Apigee/Models/GoogleCloudApigeeV1DataCollector.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDatacollectorsGetError](src/Apigee/Errors/ApigeeOrganizationsDatacollectorsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListDataCollectorsResponse&gt; ApigeeOrganizationsDatacollectorsList(ApigeeOrganizationsDatacollectorsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all data collectors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDatacollectorsList(
        new ApigeeOrganizationsDatacollectorsListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListDataCollectorsResponse
}
catch (ApiException<ApigeeOrganizationsDatacollectorsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDatacollectorsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDatacollectorsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListDataCollectorsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListDataCollectorsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDatacollectorsListError](src/Apigee/Errors/ApigeeOrganizationsDatacollectorsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DataCollector&gt; ApigeeOrganizationsDatacollectorsPatch(ApigeeOrganizationsDatacollectorsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a data collector.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDatacollectorsPatch(
        new ApigeeOrganizationsDatacollectorsPatchRequest
        {
            OrganizationsId = "some example string",
            DatacollectorsId = "some example string",
            Body = new GoogleCloudApigeeV1DataCollector(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DataCollector
}
catch (ApiException<ApigeeOrganizationsDatacollectorsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDatacollectorsPatchRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDatacollectorsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DataCollector](src/Apigee/Models/GoogleCloudApigeeV1DataCollector.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDatacollectorsPatchError](src/Apigee/Errors/ApigeeOrganizationsDatacollectorsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsDelete(ApigeeOrganizationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Apigee organization. For organizations with BillingType EVALUATION, an immediate deletion is performed. For paid organizations (Subscription or Pay-as-you-go), a soft-deletion is performed by default. The organization can be restored within the soft-deletion period, which is specified using the `retention` field in the request or by filing a support ticket with Apigee. During the data retention period specified in the request, the Apigee organization cannot be recreated in the same Google Cloud project. **IMPORTANT: The default data retention setting for this operation is 7 days. To permanently delete the organization in 24 hours, set the retention parameter to `MINIMUM`.**

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDelete(new ApigeeOrganizationsDeleteRequest
    {
        OrganizationsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDeleteError](src/Apigee/Errors/ApigeeOrganizationsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListDeploymentsResponse&gt; ApigeeOrganizationsDeploymentsList(ApigeeOrganizationsDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all deployments of API proxies or shared flows.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDeploymentsList(
        new ApigeeOrganizationsDeploymentsListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListDeploymentsResponse
}
catch (ApiException<ApigeeOrganizationsDeploymentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDeploymentsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDeploymentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListDeploymentsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDeploymentsListError](src/Apigee/Errors/ApigeeOrganizationsDeploymentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Attributes&gt; ApigeeOrganizationsDevelopersAppsAttributes(ApigeeOrganizationsDevelopersAppsAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates attributes for a developer app. This API replaces the current attributes with those specified in the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsAttributes(
        new ApigeeOrganizationsDevelopersAppsAttributesRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
            Body = new GoogleCloudApigeeV1Attributes(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Attributes
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsAttributesError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsAttributesRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsAttributesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Attributes](src/Apigee/Models/GoogleCloudApigeeV1Attributes.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsAttributesError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsAttributesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Attribute&gt; ApigeeOrganizationsDevelopersAppsAttributesDelete(ApigeeOrganizationsDevelopersAppsAttributesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a developer app attribute.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsAttributesDelete(
        new ApigeeOrganizationsDevelopersAppsAttributesDeleteRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
            AttributesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Attribute
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsAttributesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsAttributesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsAttributesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Attribute](src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsAttributesDeleteError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsAttributesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Attribute&gt; ApigeeOrganizationsDevelopersAppsAttributesGet(ApigeeOrganizationsDevelopersAppsAttributesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a developer app attribute.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsAttributesGet(
        new ApigeeOrganizationsDevelopersAppsAttributesGetRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
            AttributesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Attribute
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsAttributesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsAttributesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsAttributesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Attribute](src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsAttributesGetError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsAttributesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Attributes&gt; ApigeeOrganizationsDevelopersAppsAttributesList(ApigeeOrganizationsDevelopersAppsAttributesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all developer app attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsAttributesList(
        new ApigeeOrganizationsDevelopersAppsAttributesListRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Attributes
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsAttributesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsAttributesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsAttributesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Attributes](src/Apigee/Models/GoogleCloudApigeeV1Attributes.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsAttributesListError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsAttributesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Attribute&gt; ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttribute(ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a developer app attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttribute(
        new ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
            AttributesId = "some example string",
            Body = new GoogleCloudApigeeV1Attribute(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Attribute
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Attribute](src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperApp&gt; ApigeeOrganizationsDevelopersAppsCreate(ApigeeOrganizationsDevelopersAppsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an app associated with a developer. This API associates the developer app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls. The `DisplayName` (set as an attribute) appears in the UI. If you don't set the `DisplayName` attribute, the `name` appears in the UI.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsCreate(
        new ApigeeOrganizationsDevelopersAppsCreateRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            Body = new GoogleCloudApigeeV1DeveloperApp(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperApp
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperApp](src/Apigee/Models/GoogleCloudApigeeV1DeveloperApp.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsCreateError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperApp&gt; ApigeeOrganizationsDevelopersAppsDelete(ApigeeOrganizationsDevelopersAppsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a developer app. **Note**: The delete operation is asynchronous. The developer app is deleted immediately, but its associated resources, such as app keys or access tokens, may take anywhere from a few seconds to a few minutes to be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsDelete(
        new ApigeeOrganizationsDevelopersAppsDeleteRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperApp
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperApp](src/Apigee/Models/GoogleCloudApigeeV1DeveloperApp.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsDeleteError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperApp&gt; ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatus(ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Manages access to a developer app by enabling you to: * Approve or revoke a developer app * Generate a new consumer key and secret for a developer app To approve or revoke a developer app, set the `action` query parameter to `approve` or `revoke`, respectively, and the `Content-Type` header to `application/octet-stream`. If a developer app is revoked, none of its API keys are valid for API calls even though the keys are still approved. If successful, the API call returns the following HTTP status code: `204 No Content` To generate a new consumer key and secret for a developer app, pass the new key/secret details. Rather than replace an existing key, this API generates a new key. In this case, multiple key pairs may be associated with a single developer app. Each key pair has an independent status (`approve` or `revoke`) and expiration time. Any approved, non-expired key can be used in an API call. For example, if you're using API key rotation, you can generate new keys with expiration times that overlap keys that are going to expire. You might also generate a new consumer key/secret if the security of the original key/secret is compromised. The `keyExpiresIn` property defines the expiration time for the API key in milliseconds. If you don't set this property or set it to `-1`, the API key never expires. **Notes**: * When generating a new key/secret, this API replaces the existing attributes, notes, and callback URLs with those specified in the request. Include or exclude any existing information that you want to retain or delete, respectively. * To migrate existing consumer keys and secrets to hybrid from another system, see the CreateDeveloperAppKey API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatus(
        new ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
            Body = new GoogleCloudApigeeV1DeveloperApp(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperApp
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperApp](src/Apigee/Models/GoogleCloudApigeeV1DeveloperApp.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperApp&gt; ApigeeOrganizationsDevelopersAppsGet(ApigeeOrganizationsDevelopersAppsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details for a developer app.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsGet(
        new ApigeeOrganizationsDevelopersAppsGetRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperApp
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperApp](src/Apigee/Models/GoogleCloudApigeeV1DeveloperApp.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsGetError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperAppKey&gt; ApigeeOrganizationsDevelopersAppsKeysApiproductsDelete(ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an API product from an app's consumer key. After the API product is removed, the app cannot access the API resources defined in that API product. **Note**: The consumer key is not removed, only its association with the API product.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsKeysApiproductsDelete(
        new ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
            KeysId = "some example string",
            ApiproductsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperAppKey
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperAppKey](src/Apigee/Models/GoogleCloudApigeeV1DeveloperAppKey.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProduct(ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approves or revokes the consumer key for an API product. After a consumer key is approved, the app can use it to access APIs. A consumer key that is revoked or pending cannot be used to access an API. Any access tokens associated with a revoked consumer key will remain active. However, Apigee checks the status of the consumer key and if set to `revoked` will not allow access to the API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProduct(
        new ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
            KeysId = "some example string",
            ApiproductsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperAppKey&gt; ApigeeOrganizationsDevelopersAppsKeysCreate(ApigeeOrganizationsDevelopersAppsKeysCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API. **Note**: All keys start out with status=approved, even if status=revoked is passed when the key is created. To revoke a key, use the UpdateDeveloperAppKey API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsKeysCreate(
        new ApigeeOrganizationsDevelopersAppsKeysCreateRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
            Body = new GoogleCloudApigeeV1DeveloperAppKey(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperAppKey
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsKeysCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsKeysCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperAppKey](src/Apigee/Models/GoogleCloudApigeeV1DeveloperAppKey.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsKeysCreateError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperAppKey&gt; ApigeeOrganizationsDevelopersAppsKeysCreateCreate(ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API. **Note**: All keys start out with status=approved, even if status=revoked is passed when the key is created. To revoke a key, use the UpdateDeveloperAppKey API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsKeysCreateCreate(
        new ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
            Body = new GoogleCloudApigeeV1DeveloperAppKey(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperAppKey
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsKeysCreateCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperAppKey](src/Apigee/Models/GoogleCloudApigeeV1DeveloperAppKey.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsKeysCreateCreateError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysCreateCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperAppKey&gt; ApigeeOrganizationsDevelopersAppsKeysDelete(ApigeeOrganizationsDevelopersAppsKeysDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an app's consumer key and removes all API products associated with the app. After the consumer key is deleted, it cannot be used to access any APIs. **Note**: After you delete a consumer key, you may want to: 1. Create a new consumer key and secret for the developer app using the CreateDeveloperAppKey API, and subsequently add an API product to the key using the UpdateDeveloperAppKey API. 2. Delete the developer app, if it is no longer required.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsKeysDelete(
        new ApigeeOrganizationsDevelopersAppsKeysDeleteRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
            KeysId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperAppKey
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsKeysDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsKeysDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperAppKey](src/Apigee/Models/GoogleCloudApigeeV1DeveloperAppKey.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsKeysDeleteError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperAppKey&gt; ApigeeOrganizationsDevelopersAppsKeysGet(ApigeeOrganizationsDevelopersAppsKeysGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details for a consumer key for a developer app, including the key and secret value, associated API products, and other information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsKeysGet(
        new ApigeeOrganizationsDevelopersAppsKeysGetRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
            KeysId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperAppKey
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsKeysGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsKeysGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperAppKey](src/Apigee/Models/GoogleCloudApigeeV1DeveloperAppKey.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsKeysGetError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperAppKey&gt; ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKey(ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the scope of an app. This API replaces the existing scopes with those specified in the request. Include or exclude any existing scopes that you want to retain or delete, respectively. The specified scopes must already be defined for the API products associated with the app. This API sets the `scopes` element under the `apiProducts` element in the attributes of the app.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKey(
        new ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
            KeysId = "some example string",
            Body = new GoogleCloudApigeeV1DeveloperAppKey(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperAppKey
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperAppKey](src/Apigee/Models/GoogleCloudApigeeV1DeveloperAppKey.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperAppKey&gt; ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKey(ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an API product to a developer app key, enabling the app that holds the key to access the API resources bundled in the API product. In addition, you can add attributes and scopes associated with the API product to the developer app key. The status of the key can be updated via "action" Query Parameter. None of the other fields can be updated via this API. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively. None of the other fields can be updated. You can use the same key to access all API products associated with the app.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKey(
        new ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
            KeysId = "some example string",
            Body = new GoogleCloudApigeeV1DeveloperAppKey(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperAppKey
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperAppKey](src/Apigee/Models/GoogleCloudApigeeV1DeveloperAppKey.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListDeveloperAppsResponse&gt; ApigeeOrganizationsDevelopersAppsList(ApigeeOrganizationsDevelopersAppsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all apps created by a developer in an Apigee organization. Optionally, you can request an expanded view of the developer apps. A maximum of 100 developer apps are returned per API call. You can paginate the list of deveoper apps returned using the `startKey` and `count` query parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsList(
        new ApigeeOrganizationsDevelopersAppsListRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListDeveloperAppsResponse
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListDeveloperAppsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListDeveloperAppsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsListError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperApp&gt; ApigeeOrganizationsDevelopersAppsUpdate(ApigeeOrganizationsDevelopersAppsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the details for a developer app. In addition, you can add an API product to a developer app and automatically generate an API key for the app to use when calling APIs in the API product. If you want to use an existing API key for the API product, add the API product to the API key using the UpdateDeveloperAppKey API. Using this API, you cannot update the following: * App name as it is the primary key used to identify the app and cannot be changed. * Scopes associated with the app. Instead, use the ReplaceDeveloperAppKey API. This API replaces the existing attributes with those specified in the request. Include or exclude any existing attributes that you want to retain or delete, respectively. **Note:** We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAppsUpdate(
        new ApigeeOrganizationsDevelopersAppsUpdateRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AppsId = "some example string",
            Body = new GoogleCloudApigeeV1DeveloperApp(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperApp
}
catch (ApiException<ApigeeOrganizationsDevelopersAppsUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAppsUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperApp](src/Apigee/Models/GoogleCloudApigeeV1DeveloperApp.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAppsUpdateError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Attributes&gt; ApigeeOrganizationsDevelopersAttributes(ApigeeOrganizationsDevelopersAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates developer attributes. This API replaces the existing attributes with those specified in the request. Add new attributes, and include or exclude any existing attributes that you want to retain or remove, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAttributes(
        new ApigeeOrganizationsDevelopersAttributesRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            Body = new GoogleCloudApigeeV1Attributes(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Attributes
}
catch (ApiException<ApigeeOrganizationsDevelopersAttributesError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAttributesRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAttributesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Attributes](src/Apigee/Models/GoogleCloudApigeeV1Attributes.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAttributesError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAttributesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Attribute&gt; ApigeeOrganizationsDevelopersAttributesDelete(ApigeeOrganizationsDevelopersAttributesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a developer attribute.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAttributesDelete(
        new ApigeeOrganizationsDevelopersAttributesDeleteRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AttributesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Attribute
}
catch (ApiException<ApigeeOrganizationsDevelopersAttributesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAttributesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAttributesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Attribute](src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAttributesDeleteError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAttributesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Attribute&gt; ApigeeOrganizationsDevelopersAttributesGet(ApigeeOrganizationsDevelopersAttributesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the value of the specified developer attribute.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAttributesGet(
        new ApigeeOrganizationsDevelopersAttributesGetRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AttributesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Attribute
}
catch (ApiException<ApigeeOrganizationsDevelopersAttributesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAttributesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAttributesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Attribute](src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAttributesGetError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAttributesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Attributes&gt; ApigeeOrganizationsDevelopersAttributesList(ApigeeOrganizationsDevelopersAttributesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all developer attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAttributesList(
        new ApigeeOrganizationsDevelopersAttributesListRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Attributes
}
catch (ApiException<ApigeeOrganizationsDevelopersAttributesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAttributesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAttributesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Attributes](src/Apigee/Models/GoogleCloudApigeeV1Attributes.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAttributesListError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAttributesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Attribute&gt; ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttribute(ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a developer attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttribute(
        new ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            AttributesId = "some example string",
            Body = new GoogleCloudApigeeV1Attribute(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Attribute
}
catch (ApiException<ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Attribute](src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeError](src/Apigee/Errors/ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperBalance&gt; ApigeeOrganizationsDevelopersBalanceAdjust(ApigeeOrganizationsDevelopersBalanceAdjustRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adjust the prepaid balance for the developer. This API will be used in scenarios where the developer has been under-charged or over-charged.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersBalanceAdjust(
        new ApigeeOrganizationsDevelopersBalanceAdjustRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            Body = new GoogleCloudApigeeV1AdjustDeveloperBalanceRequest(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperBalance
}
catch (ApiException<ApigeeOrganizationsDevelopersBalanceAdjustError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersBalanceAdjustRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersBalanceAdjustRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperBalance](src/Apigee/Models/GoogleCloudApigeeV1DeveloperBalance.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersBalanceAdjustError](src/Apigee/Errors/ApigeeOrganizationsDevelopersBalanceAdjustError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperBalance&gt; ApigeeOrganizationsDevelopersBalanceCredit(ApigeeOrganizationsDevelopersBalanceCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Credits the account balance for the developer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersBalanceCredit(
        new ApigeeOrganizationsDevelopersBalanceCreditRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            Body = new GoogleCloudApigeeV1CreditDeveloperBalanceRequest(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperBalance
}
catch (ApiException<ApigeeOrganizationsDevelopersBalanceCreditError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersBalanceCreditRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersBalanceCreditRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperBalance](src/Apigee/Models/GoogleCloudApigeeV1DeveloperBalance.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersBalanceCreditError](src/Apigee/Errors/ApigeeOrganizationsDevelopersBalanceCreditError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Developer&gt; ApigeeOrganizationsDevelopersCreate(ApigeeOrganizationsDevelopersCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a developer. Once created, the developer can register an app and obtain an API key. At creation time, a developer is set as `active`. To change the developer status, use the SetDeveloperStatus API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersCreate(
        new ApigeeOrganizationsDevelopersCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1Developer(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Developer
}
catch (ApiException<ApigeeOrganizationsDevelopersCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Developer](src/Apigee/Models/GoogleCloudApigeeV1Developer.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersCreateError](src/Apigee/Errors/ApigeeOrganizationsDevelopersCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Developer&gt; ApigeeOrganizationsDevelopersDelete(ApigeeOrganizationsDevelopersDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a developer. All apps and API keys associated with the developer are also removed. **Warning**: This API will permanently delete the developer and related artifacts. To avoid permanently deleting developers and their artifacts, set the developer status to `inactive` using the SetDeveloperStatus API. **Note**: The delete operation is asynchronous. The developer is deleted immediately, but its associated resources, such as apps and API keys, may take anywhere from a few seconds to a few minutes to be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersDelete(
        new ApigeeOrganizationsDevelopersDeleteRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Developer
}
catch (ApiException<ApigeeOrganizationsDevelopersDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Developer](src/Apigee/Models/GoogleCloudApigeeV1Developer.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersDeleteError](src/Apigee/Errors/ApigeeOrganizationsDevelopersDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Developer&gt; ApigeeOrganizationsDevelopersGet(ApigeeOrganizationsDevelopersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the developer details, including the developer's name, email address, apps, and other information. **Note**: The response includes only the first 100 developer apps.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersGet(
        new ApigeeOrganizationsDevelopersGetRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Developer
}
catch (ApiException<ApigeeOrganizationsDevelopersGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Developer](src/Apigee/Models/GoogleCloudApigeeV1Developer.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersGetError](src/Apigee/Errors/ApigeeOrganizationsDevelopersGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperBalance&gt; ApigeeOrganizationsDevelopersGetBalance(ApigeeOrganizationsDevelopersGetBalanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the account balance for the developer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersGetBalance(
        new ApigeeOrganizationsDevelopersGetBalanceRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperBalance
}
catch (ApiException<ApigeeOrganizationsDevelopersGetBalanceError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersGetBalanceRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersGetBalanceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperBalance](src/Apigee/Models/GoogleCloudApigeeV1DeveloperBalance.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersGetBalanceError](src/Apigee/Errors/ApigeeOrganizationsDevelopersGetBalanceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperMonetizationConfig&gt; ApigeeOrganizationsDevelopersGetMonetizationConfig(ApigeeOrganizationsDevelopersGetMonetizationConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the monetization configuration for the developer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersGetMonetizationConfig(
        new ApigeeOrganizationsDevelopersGetMonetizationConfigRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperMonetizationConfig
}
catch (ApiException<ApigeeOrganizationsDevelopersGetMonetizationConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersGetMonetizationConfigRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersGetMonetizationConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperMonetizationConfig](src/Apigee/Models/GoogleCloudApigeeV1DeveloperMonetizationConfig.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersGetMonetizationConfigError](src/Apigee/Errors/ApigeeOrganizationsDevelopersGetMonetizationConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListOfDevelopersResponse&gt; ApigeeOrganizationsDevelopersList(ApigeeOrganizationsDevelopersListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all developers in an organization by email address. By default, the response does not include company developers. Set the `includeCompany` query parameter to `true` to include company developers. **Note**: A maximum of 1000 developers are returned in the response. You paginate the list of developers returned using the `startKey` and `count` query parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersList(
        new ApigeeOrganizationsDevelopersListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListOfDevelopersResponse
}
catch (ApiException<ApigeeOrganizationsDevelopersListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListOfDevelopersResponse](src/Apigee/Models/GoogleCloudApigeeV1ListOfDevelopersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersListError](src/Apigee/Errors/ApigeeOrganizationsDevelopersListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsDevelopersSetDeveloperStatus(ApigeeOrganizationsDevelopersSetDeveloperStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the status of a developer. A developer is `active` by default. If you set a developer's status to `inactive`, the API keys assigned to the developer apps are no longer valid even though the API keys are set to `approved`. Inactive developers can still sign in to the developer portal and create apps; however, any new API keys generated during app creation won't work. To set the status of a developer, set the `action` query parameter to `active` or `inactive`, and the `Content-Type` header to `application/octet-stream`. If successful, the API call returns the following HTTP status code: `204 No Content`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersSetDeveloperStatus(
        new ApigeeOrganizationsDevelopersSetDeveloperStatusRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsDevelopersSetDeveloperStatusError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersSetDeveloperStatusRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersSetDeveloperStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersSetDeveloperStatusError](src/Apigee/Errors/ApigeeOrganizationsDevelopersSetDeveloperStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperSubscription&gt; ApigeeOrganizationsDevelopersSubscriptionsCreate(ApigeeOrganizationsDevelopersSubscriptionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a subscription to an API product.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersSubscriptionsCreate(
        new ApigeeOrganizationsDevelopersSubscriptionsCreateRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            Body = new GoogleCloudApigeeV1DeveloperSubscription(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperSubscription
}
catch (ApiException<ApigeeOrganizationsDevelopersSubscriptionsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersSubscriptionsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersSubscriptionsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperSubscription](src/Apigee/Models/GoogleCloudApigeeV1DeveloperSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersSubscriptionsCreateError](src/Apigee/Errors/ApigeeOrganizationsDevelopersSubscriptionsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperSubscription&gt; ApigeeOrganizationsDevelopersSubscriptionsExpire(ApigeeOrganizationsDevelopersSubscriptionsExpireRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Expires an API product subscription immediately.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersSubscriptionsExpire(
        new ApigeeOrganizationsDevelopersSubscriptionsExpireRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            SubscriptionsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperSubscription
}
catch (ApiException<ApigeeOrganizationsDevelopersSubscriptionsExpireError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersSubscriptionsExpireRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersSubscriptionsExpireRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperSubscription](src/Apigee/Models/GoogleCloudApigeeV1DeveloperSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersSubscriptionsExpireError](src/Apigee/Errors/ApigeeOrganizationsDevelopersSubscriptionsExpireError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperSubscription&gt; ApigeeOrganizationsDevelopersSubscriptionsGet(ApigeeOrganizationsDevelopersSubscriptionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details for an API product subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersSubscriptionsGet(
        new ApigeeOrganizationsDevelopersSubscriptionsGetRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            SubscriptionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperSubscription
}
catch (ApiException<ApigeeOrganizationsDevelopersSubscriptionsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersSubscriptionsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersSubscriptionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperSubscription](src/Apigee/Models/GoogleCloudApigeeV1DeveloperSubscription.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersSubscriptionsGetError](src/Apigee/Errors/ApigeeOrganizationsDevelopersSubscriptionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse&gt; ApigeeOrganizationsDevelopersSubscriptionsList(ApigeeOrganizationsDevelopersSubscriptionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all API product subscriptions for a developer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersSubscriptionsList(
        new ApigeeOrganizationsDevelopersSubscriptionsListRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse
}
catch (ApiException<ApigeeOrganizationsDevelopersSubscriptionsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersSubscriptionsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersSubscriptionsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersSubscriptionsListError](src/Apigee/Errors/ApigeeOrganizationsDevelopersSubscriptionsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Developer&gt; ApigeeOrganizationsDevelopersUpdate(ApigeeOrganizationsDevelopersUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a developer. This API replaces the existing developer details with those specified in the request. Include or exclude any existing details that you want to retain or delete, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds. **Note:** We recommend that you avoid making concurrent update requests for the same resource. Near-simultaneous writes to the same entity can result in conflicts and unexpected behavior. Ensure operations are sequential when modifying a single resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersUpdate(
        new ApigeeOrganizationsDevelopersUpdateRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            Body = new GoogleCloudApigeeV1Developer(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Developer
}
catch (ApiException<ApigeeOrganizationsDevelopersUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Developer](src/Apigee/Models/GoogleCloudApigeeV1Developer.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersUpdateError](src/Apigee/Errors/ApigeeOrganizationsDevelopersUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeveloperMonetizationConfig&gt; ApigeeOrganizationsDevelopersUpdateMonetizationConfig(ApigeeOrganizationsDevelopersUpdateMonetizationConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the monetization configuration for the developer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDevelopersUpdateMonetizationConfig(
        new ApigeeOrganizationsDevelopersUpdateMonetizationConfigRequest
        {
            OrganizationsId = "some example string",
            DevelopersId = "some example string",
            Body = new GoogleCloudApigeeV1DeveloperMonetizationConfig(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeveloperMonetizationConfig
}
catch (ApiException<ApigeeOrganizationsDevelopersUpdateMonetizationConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDevelopersUpdateMonetizationConfigRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersUpdateMonetizationConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeveloperMonetizationConfig](src/Apigee/Models/GoogleCloudApigeeV1DeveloperMonetizationConfig.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDevelopersUpdateMonetizationConfigError](src/Apigee/Errors/ApigeeOrganizationsDevelopersUpdateMonetizationConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsDnsZonesCreate(ApigeeOrganizationsDnsZonesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new DNS zone.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDnsZonesCreate(
        new ApigeeOrganizationsDnsZonesCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1DnsZone(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsDnsZonesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDnsZonesCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDnsZonesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDnsZonesCreateError](src/Apigee/Errors/ApigeeOrganizationsDnsZonesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsDnsZonesDelete(ApigeeOrganizationsDnsZonesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a previously created DNS zone.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDnsZonesDelete(
        new ApigeeOrganizationsDnsZonesDeleteRequest
        {
            OrganizationsId = "some example string",
            DnsZonesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsDnsZonesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDnsZonesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDnsZonesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDnsZonesDeleteError](src/Apigee/Errors/ApigeeOrganizationsDnsZonesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DnsZone&gt; ApigeeOrganizationsDnsZonesGet(ApigeeOrganizationsDnsZonesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the representation of an existing DNS zone.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDnsZonesGet(new ApigeeOrganizationsDnsZonesGetRequest
    {
        OrganizationsId = "some example string",
        DnsZonesId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DnsZone
}
catch (ApiException<ApigeeOrganizationsDnsZonesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDnsZonesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDnsZonesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DnsZone](src/Apigee/Models/GoogleCloudApigeeV1DnsZone.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDnsZonesGetError](src/Apigee/Errors/ApigeeOrganizationsDnsZonesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListDnsZonesResponse&gt; ApigeeOrganizationsDnsZonesList(ApigeeOrganizationsDnsZonesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enumerates DNS zones that have been created but not yet deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsDnsZonesList(new ApigeeOrganizationsDnsZonesListRequest
    {
        OrganizationsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListDnsZonesResponse
}
catch (ApiException<ApigeeOrganizationsDnsZonesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsDnsZonesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsDnsZonesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListDnsZonesResponse](src/Apigee/Models/GoogleCloudApigeeV1ListDnsZonesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsDnsZonesListError](src/Apigee/Errors/ApigeeOrganizationsDnsZonesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsEndpointAttachmentsCreate(ApigeeOrganizationsEndpointAttachmentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an endpoint attachment. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEndpointAttachmentsCreate(
        new ApigeeOrganizationsEndpointAttachmentsCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1EndpointAttachment(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsEndpointAttachmentsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEndpointAttachmentsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEndpointAttachmentsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEndpointAttachmentsCreateError](src/Apigee/Errors/ApigeeOrganizationsEndpointAttachmentsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsEndpointAttachmentsDelete(ApigeeOrganizationsEndpointAttachmentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an endpoint attachment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEndpointAttachmentsDelete(
        new ApigeeOrganizationsEndpointAttachmentsDeleteRequest
        {
            OrganizationsId = "some example string",
            EndpointAttachmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsEndpointAttachmentsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEndpointAttachmentsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEndpointAttachmentsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEndpointAttachmentsDeleteError](src/Apigee/Errors/ApigeeOrganizationsEndpointAttachmentsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1EndpointAttachment&gt; ApigeeOrganizationsEndpointAttachmentsGet(ApigeeOrganizationsEndpointAttachmentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the endpoint attachment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEndpointAttachmentsGet(
        new ApigeeOrganizationsEndpointAttachmentsGetRequest
        {
            OrganizationsId = "some example string",
            EndpointAttachmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1EndpointAttachment
}
catch (ApiException<ApigeeOrganizationsEndpointAttachmentsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEndpointAttachmentsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEndpointAttachmentsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1EndpointAttachment](src/Apigee/Models/GoogleCloudApigeeV1EndpointAttachment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEndpointAttachmentsGetError](src/Apigee/Errors/ApigeeOrganizationsEndpointAttachmentsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListEndpointAttachmentsResponse&gt; ApigeeOrganizationsEndpointAttachmentsList(ApigeeOrganizationsEndpointAttachmentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the endpoint attachments in an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEndpointAttachmentsList(
        new ApigeeOrganizationsEndpointAttachmentsListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListEndpointAttachmentsResponse
}
catch (ApiException<ApigeeOrganizationsEndpointAttachmentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEndpointAttachmentsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEndpointAttachmentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListEndpointAttachmentsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListEndpointAttachmentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEndpointAttachmentsListError](src/Apigee/Errors/ApigeeOrganizationsEndpointAttachmentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsEnvgroupsAttachmentsCreate(ApigeeOrganizationsEnvgroupsAttachmentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new attachment of an environment to an environment group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvgroupsAttachmentsCreate(
        new ApigeeOrganizationsEnvgroupsAttachmentsCreateRequest
        {
            OrganizationsId = "some example string",
            EnvgroupsId = "some example string",
            Body = new GoogleCloudApigeeV1EnvironmentGroupAttachment(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsEnvgroupsAttachmentsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvgroupsAttachmentsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsAttachmentsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvgroupsAttachmentsCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvgroupsAttachmentsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsEnvgroupsAttachmentsDelete(ApigeeOrganizationsEnvgroupsAttachmentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an environment group attachment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvgroupsAttachmentsDelete(
        new ApigeeOrganizationsEnvgroupsAttachmentsDeleteRequest
        {
            OrganizationsId = "some example string",
            EnvgroupsId = "some example string",
            AttachmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsEnvgroupsAttachmentsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvgroupsAttachmentsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsAttachmentsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvgroupsAttachmentsDeleteError](src/Apigee/Errors/ApigeeOrganizationsEnvgroupsAttachmentsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1EnvironmentGroupAttachment&gt; ApigeeOrganizationsEnvgroupsAttachmentsGet(ApigeeOrganizationsEnvgroupsAttachmentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets an environment group attachment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvgroupsAttachmentsGet(
        new ApigeeOrganizationsEnvgroupsAttachmentsGetRequest
        {
            OrganizationsId = "some example string",
            EnvgroupsId = "some example string",
            AttachmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1EnvironmentGroupAttachment
}
catch (ApiException<ApigeeOrganizationsEnvgroupsAttachmentsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvgroupsAttachmentsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsAttachmentsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1EnvironmentGroupAttachment](src/Apigee/Models/GoogleCloudApigeeV1EnvironmentGroupAttachment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvgroupsAttachmentsGetError](src/Apigee/Errors/ApigeeOrganizationsEnvgroupsAttachmentsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse&gt; ApigeeOrganizationsEnvgroupsAttachmentsList(ApigeeOrganizationsEnvgroupsAttachmentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all attachments of an environment group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvgroupsAttachmentsList(
        new ApigeeOrganizationsEnvgroupsAttachmentsListRequest
        {
            OrganizationsId = "some example string",
            EnvgroupsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse
}
catch (ApiException<ApigeeOrganizationsEnvgroupsAttachmentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvgroupsAttachmentsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsAttachmentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvgroupsAttachmentsListError](src/Apigee/Errors/ApigeeOrganizationsEnvgroupsAttachmentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsEnvgroupsCreate(ApigeeOrganizationsEnvgroupsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new environment group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvgroupsCreate(
        new ApigeeOrganizationsEnvgroupsCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1EnvironmentGroup(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsEnvgroupsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvgroupsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvgroupsCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvgroupsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsEnvgroupsDelete(ApigeeOrganizationsEnvgroupsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an environment group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvgroupsDelete(
        new ApigeeOrganizationsEnvgroupsDeleteRequest
        {
            OrganizationsId = "some example string",
            EnvgroupsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsEnvgroupsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvgroupsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvgroupsDeleteError](src/Apigee/Errors/ApigeeOrganizationsEnvgroupsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1EnvironmentGroup&gt; ApigeeOrganizationsEnvgroupsGet(ApigeeOrganizationsEnvgroupsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets an environment group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvgroupsGet(new ApigeeOrganizationsEnvgroupsGetRequest
    {
        OrganizationsId = "some example string",
        EnvgroupsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1EnvironmentGroup
}
catch (ApiException<ApigeeOrganizationsEnvgroupsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvgroupsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1EnvironmentGroup](src/Apigee/Models/GoogleCloudApigeeV1EnvironmentGroup.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvgroupsGetError](src/Apigee/Errors/ApigeeOrganizationsEnvgroupsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1EnvironmentGroupConfig&gt; ApigeeOrganizationsEnvgroupsGetDeployedIngressConfig(ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the deployed ingress configuration for an environment group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvgroupsGetDeployedIngressConfig(
        new ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigRequest
        {
            OrganizationsId = "some example string",
            EnvgroupsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1EnvironmentGroupConfig
}
catch (ApiException<ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1EnvironmentGroupConfig](src/Apigee/Models/GoogleCloudApigeeV1EnvironmentGroupConfig.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigError](src/Apigee/Errors/ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListEnvironmentGroupsResponse&gt; ApigeeOrganizationsEnvgroupsList(ApigeeOrganizationsEnvgroupsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all environment groups.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvgroupsList(
        new ApigeeOrganizationsEnvgroupsListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListEnvironmentGroupsResponse
}
catch (ApiException<ApigeeOrganizationsEnvgroupsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvgroupsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListEnvironmentGroupsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListEnvironmentGroupsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvgroupsListError](src/Apigee/Errors/ApigeeOrganizationsEnvgroupsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsEnvgroupsPatch(ApigeeOrganizationsEnvgroupsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an environment group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvgroupsPatch(
        new ApigeeOrganizationsEnvgroupsPatchRequest
        {
            OrganizationsId = "some example string",
            EnvgroupsId = "some example string",
            Body = new GoogleCloudApigeeV1EnvironmentGroup(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsEnvgroupsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvgroupsPatchRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvgroupsPatchError](src/Apigee/Errors/ApigeeOrganizationsEnvgroupsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablement(ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an add-on enablement status of an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablement(
        new ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1SetAddonEnablementRequest(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Schema&gt; ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2(ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of metrics and dimensions that can be used to create analytics queries and reports. Each schema element contains the name of the field, its associated type, and a flag indicating whether it is a standard or custom field.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2(
        new ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Request
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Schema
}
catch (ApiException<ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Error> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Request](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Schema](src/Apigee/Models/GoogleCloudApigeeV1Schema.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Error](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Export&gt; ApigeeOrganizationsEnvironmentsAnalyticsExportsCreate(ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a data export job to be processed in the background. If the request is successful, the API returns a 201 status, a URI that can be used to retrieve the status of the export job, and the `state` value of "enqueued".

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsAnalyticsExportsCreate(
        new ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1ExportRequest(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Export
}
catch (ApiException<ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Export](src/Apigee/Models/GoogleCloudApigeeV1Export.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Export&gt; ApigeeOrganizationsEnvironmentsAnalyticsExportsGet(ApigeeOrganizationsEnvironmentsAnalyticsExportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the details and status of an analytics export job. If the export job is still in progress, its `state` is set to "running". After the export job has completed successfully, its `state` is set to "completed". If the export job fails, its `state` is set to `failed`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsAnalyticsExportsGet(
        new ApigeeOrganizationsEnvironmentsAnalyticsExportsGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ExportsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Export
}
catch (ApiException<ApigeeOrganizationsEnvironmentsAnalyticsExportsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsAnalyticsExportsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsAnalyticsExportsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Export](src/Apigee/Models/GoogleCloudApigeeV1Export.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsAnalyticsExportsGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsAnalyticsExportsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListExportsResponse&gt; ApigeeOrganizationsEnvironmentsAnalyticsExportsList(ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the details and status of all analytics export jobs belonging to the parent organization and environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsAnalyticsExportsList(
        new ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListExportsResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsAnalyticsExportsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListExportsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListExportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsAnalyticsExportsListError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsAnalyticsExportsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListDeploymentsResponse&gt; ApigeeOrganizationsEnvironmentsApisDeploymentsList(ApigeeOrganizationsEnvironmentsApisDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all deployments of an API proxy in an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsApisDeploymentsList(
        new ApigeeOrganizationsEnvironmentsApisDeploymentsListRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ApisId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListDeploymentsResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsApisDeploymentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsApisDeploymentsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisDeploymentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListDeploymentsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsApisDeploymentsListError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisDeploymentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DebugSession&gt; ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreate(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a debug session for a deployed API Proxy revision.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreate(
        new ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ApisId = "some example string",
            RevisionsId = "some example string",
            Body = new GoogleCloudApigeeV1DebugSession(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DebugSession
}
catch (ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DebugSession](src/Apigee/Models/GoogleCloudApigeeV1DebugSession.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DebugSessionTransaction&gt; ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGet(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the debug data from a transaction.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGet(
        new ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ApisId = "some example string",
            RevisionsId = "some example string",
            DebugsessionsId = "some example string",
            DataId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DebugSessionTransaction
}
catch (ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DebugSessionTransaction](src/Apigee/Models/GoogleCloudApigeeV1DebugSessionTransaction.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteData(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the data from a debug session. This does not cancel the debug session or prevent further data from being collected if the session is still active in runtime pods.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteData(
        new ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ApisId = "some example string",
            RevisionsId = "some example string",
            DebugsessionsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DebugSession&gt; ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGet(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a debug session.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGet(
        new ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ApisId = "some example string",
            RevisionsId = "some example string",
            DebugsessionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DebugSession
}
catch (ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DebugSession](src/Apigee/Models/GoogleCloudApigeeV1DebugSession.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListDebugSessionsResponse&gt; ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsList(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists debug sessions that are currently active in the given API Proxy revision.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsList(
        new ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ApisId = "some example string",
            RevisionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListDebugSessionsResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListDebugSessionsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListDebugSessionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Deployment&gt; ApigeeOrganizationsEnvironmentsApisRevisionsDeploy(ApigeeOrganizationsEnvironmentsApisRevisionsDeployRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deploys a revision of an API proxy. If another revision of the same API proxy revision is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot invoke an API proxy until it has been deployed to an environment. After you deploy an API proxy revision, you cannot edit it. To edit the API proxy, you must create and deploy a new revision. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.deploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}` All successful API proxy deployments to Apigee are zero-downtime deployments. Apigee hybrid validates the dependencies between shared flows and API proxies at deployment time. For example, if the Flow Callout policy in an API proxy references a shared flow that either doesn't exist or isn't deployed, the API proxy deployment fails.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploy(
        new ApigeeOrganizationsEnvironmentsApisRevisionsDeployRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ApisId = "some example string",
            RevisionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Deployment
}
catch (ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDeployError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsApisRevisionsDeployRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDeployRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Deployment](src/Apigee/Models/GoogleCloudApigeeV1Deployment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsApisRevisionsDeployError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDeployError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeploymentChangeReport&gt; ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReport(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a report for a dry run analysis of a DeployApiProxy request without committing the deployment. In addition to the standard validations performed when adding deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being created. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run DeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateDeployChangeReport`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.deploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReport(
        new ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ApisId = "some example string",
            RevisionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeploymentChangeReport
}
catch (ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeploymentChangeReport](src/Apigee/Models/GoogleCloudApigeeV1DeploymentChangeReport.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeploymentChangeReport&gt; ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReport(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a report for a dry run analysis of an UndeployApiProxy request without committing the undeploy. In addition to the standard validations performed when removing deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being removed. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run UndeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateUndeployChangeReport`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.undeploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReport(
        new ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ApisId = "some example string",
            RevisionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeploymentChangeReport
}
catch (ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeploymentChangeReport](src/Apigee/Models/GoogleCloudApigeeV1DeploymentChangeReport.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Deployment&gt; ApigeeOrganizationsEnvironmentsApisRevisionsGetDeployments(ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the deployment of an API proxy revision and actual state reported by runtime pods.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsGetDeployments(
        new ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ApisId = "some example string",
            RevisionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Deployment
}
catch (ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Deployment](src/Apigee/Models/GoogleCloudApigeeV1Deployment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsEnvironmentsApisRevisionsUndeploy(ApigeeOrganizationsEnvironmentsApisRevisionsUndeployRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Undeploys an API proxy revision from an environment. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.undeploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsUndeploy(
        new ApigeeOrganizationsEnvironmentsApisRevisionsUndeployRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ApisId = "some example string",
            RevisionsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsUndeployError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsApisRevisionsUndeployRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsUndeployRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsApisRevisionsUndeployError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsUndeployError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreate(ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new ArchiveDeployment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreate(
        new ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1ArchiveDeployment(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsEnvironmentsArchiveDeploymentsDelete(ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an archive deployment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsDelete(
        new ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ArchiveDeploymentsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1GenerateDownloadUrlResponse&gt; ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrl(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a signed URL for downloading the original zip file used to create an Archive Deployment. The URL is only valid for a limited period and should be used within minutes after generation. Each call returns a new upload URL.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrl(
        new ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ArchiveDeploymentsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1GenerateDownloadUrlResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1GenerateDownloadUrlResponse](src/Apigee/Models/GoogleCloudApigeeV1GenerateDownloadUrlResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1GenerateUploadUrlResponse&gt; ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrl(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a signed URL for uploading an Archive zip file to Google Cloud Storage. Once the upload is complete, the signed URL should be passed to CreateArchiveDeployment. When uploading to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * Source file size should not exceed 1GB limit. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` * `x-goog-content-length-range: 0,1073741824` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrl(
        new ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1GenerateUploadUrlResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1GenerateUploadUrlResponse](src/Apigee/Models/GoogleCloudApigeeV1GenerateUploadUrlResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ArchiveDeployment&gt; ApigeeOrganizationsEnvironmentsArchiveDeploymentsGet(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the specified ArchiveDeployment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGet(
        new ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ArchiveDeploymentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ArchiveDeployment
}
catch (ApiException<ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ArchiveDeployment](src/Apigee/Models/GoogleCloudApigeeV1ArchiveDeployment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListArchiveDeploymentsResponse&gt; ApigeeOrganizationsEnvironmentsArchiveDeploymentsList(ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the ArchiveDeployments in the specified Environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsList(
        new ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListArchiveDeploymentsResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsArchiveDeploymentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListArchiveDeploymentsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListArchiveDeploymentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsArchiveDeploymentsListError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsArchiveDeploymentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ArchiveDeployment&gt; ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatch(ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing ArchiveDeployment. Labels can modified but most of the other fields are not modifiable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatch(
        new ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ArchiveDeploymentsId = "some example string",
            Body = new GoogleCloudApigeeV1ArchiveDeployment(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ArchiveDeployment
}
catch (ApiException<ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ArchiveDeployment](src/Apigee/Models/GoogleCloudApigeeV1ArchiveDeployment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsEnvironmentsCachesDelete(ApigeeOrganizationsEnvironmentsCachesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a cache.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsCachesDelete(
        new ApigeeOrganizationsEnvironmentsCachesDeleteRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            CachesId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsEnvironmentsCachesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsCachesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsCachesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsCachesDeleteError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsCachesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsEnvironmentsCreate(ApigeeOrganizationsEnvironmentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an environment in an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsCreate(
        new ApigeeOrganizationsEnvironmentsCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1Environment(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsEnvironmentsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsEnvironmentsDelete(ApigeeOrganizationsEnvironmentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an environment from an organization. **Warning: You must delete all key value maps and key value entries before you delete an environment.** Otherwise, if you re-create the environment the key value map entry operations will encounter encryption/decryption discrepancies.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsDelete(
        new ApigeeOrganizationsEnvironmentsDeleteRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsEnvironmentsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsDeleteError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Deployment&gt; ApigeeOrganizationsEnvironmentsDeploymentsGet(ApigeeOrganizationsEnvironmentsDeploymentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a particular deployment of Api proxy or a shared flow in an environment

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsDeploymentsGet(
        new ApigeeOrganizationsEnvironmentsDeploymentsGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            DeploymentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Deployment
}
catch (ApiException<ApigeeOrganizationsEnvironmentsDeploymentsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsDeploymentsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsDeploymentsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Deployment](src/Apigee/Models/GoogleCloudApigeeV1Deployment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsDeploymentsGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsDeploymentsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleIamV1Policy&gt; ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicy(ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the IAM policy on a deployment. For more information, see Manage users, roles, and permissions using the API. You must have the `apigee.deployments.getIamPolicy` permission to call this API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicy(
        new ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            DeploymentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleIamV1Policy
}
catch (ApiException<ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleIamV1Policy](src/Apigee/Models/GoogleIamV1Policy.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListDeploymentsResponse&gt; ApigeeOrganizationsEnvironmentsDeploymentsList(ApigeeOrganizationsEnvironmentsDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all deployments of API proxies or shared flows in an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsDeploymentsList(
        new ApigeeOrganizationsEnvironmentsDeploymentsListRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListDeploymentsResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsDeploymentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsDeploymentsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsDeploymentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListDeploymentsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsDeploymentsListError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsDeploymentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleIamV1Policy&gt; ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicy(ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the IAM policy on a deployment, if the policy already exists it will be replaced. For more information, see Manage users, roles, and permissions using the API. You must have the `apigee.deployments.setIamPolicy` permission to call this API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicy(
        new ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            DeploymentsId = "some example string",
            Body = new GoogleIamV1SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type GoogleIamV1Policy
}
catch (ApiException<ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleIamV1Policy](src/Apigee/Models/GoogleIamV1Policy.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleIamV1TestIamPermissionsResponse&gt; ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissions(ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Tests the permissions of a user on a deployment, and returns a subset of permissions that the user has on the deployment. If the deployment does not exist, an empty permission set is returned (a NOT_FOUND error is not returned).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissions(
        new ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            DeploymentsId = "some example string",
            Body = new GoogleIamV1TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type GoogleIamV1TestIamPermissionsResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleIamV1TestIamPermissionsResponse](src/Apigee/Models/GoogleIamV1TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1FlowHook&gt; ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHook(ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attaches a shared flow to a flow hook.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHook(
        new ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            FlowhooksId = "some example string",
            Body = new GoogleCloudApigeeV1FlowHook(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1FlowHook
}
catch (ApiException<ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1FlowHook](src/Apigee/Models/GoogleCloudApigeeV1FlowHook.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1FlowHook&gt; ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHook(ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detaches a shared flow from a flow hook.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHook(
        new ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            FlowhooksId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1FlowHook
}
catch (ApiException<ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1FlowHook](src/Apigee/Models/GoogleCloudApigeeV1FlowHook.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1FlowHook&gt; ApigeeOrganizationsEnvironmentsFlowhooksGet(ApigeeOrganizationsEnvironmentsFlowhooksGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the name of the shared flow attached to the specified flow hook. If there's no shared flow attached to the flow hook, the API does not return an error; it simply does not return a name in the response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsFlowhooksGet(
        new ApigeeOrganizationsEnvironmentsFlowhooksGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            FlowhooksId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1FlowHook
}
catch (ApiException<ApigeeOrganizationsEnvironmentsFlowhooksGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsFlowhooksGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsFlowhooksGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1FlowHook](src/Apigee/Models/GoogleCloudApigeeV1FlowHook.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsFlowhooksGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsFlowhooksGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Environment&gt; ApigeeOrganizationsEnvironmentsGet(ApigeeOrganizationsEnvironmentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets environment details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsGet(
        new ApigeeOrganizationsEnvironmentsGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Environment
}
catch (ApiException<ApigeeOrganizationsEnvironmentsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Environment](src/Apigee/Models/GoogleCloudApigeeV1Environment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AddonsConfig&gt; ApigeeOrganizationsEnvironmentsGetAddonsConfig(ApigeeOrganizationsEnvironmentsGetAddonsConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the add-ons config of an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsGetAddonsConfig(
        new ApigeeOrganizationsEnvironmentsGetAddonsConfigRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AddonsConfig
}
catch (ApiException<ApigeeOrganizationsEnvironmentsGetAddonsConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsGetAddonsConfigRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetAddonsConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AddonsConfig](src/Apigee/Models/GoogleCloudApigeeV1AddonsConfig.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsGetAddonsConfigError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetAddonsConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiSecurityRuntimeConfig&gt; ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfig(ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the API Security runtime configuration for an environment. This named ApiSecurityRuntimeConfig to prevent conflicts with ApiSecurityConfig from addon config.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfig(
        new ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiSecurityRuntimeConfig
}
catch (ApiException<ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiSecurityRuntimeConfig](src/Apigee/Models/GoogleCloudApigeeV1ApiSecurityRuntimeConfig.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DebugMask&gt; ApigeeOrganizationsEnvironmentsGetDebugmask(ApigeeOrganizationsEnvironmentsGetDebugmaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the debug mask singleton resource for an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsGetDebugmask(
        new ApigeeOrganizationsEnvironmentsGetDebugmaskRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DebugMask
}
catch (ApiException<ApigeeOrganizationsEnvironmentsGetDebugmaskError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsGetDebugmaskRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetDebugmaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DebugMask](src/Apigee/Models/GoogleCloudApigeeV1DebugMask.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsGetDebugmaskError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetDebugmaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1EnvironmentConfig&gt; ApigeeOrganizationsEnvironmentsGetDeployedConfig(ApigeeOrganizationsEnvironmentsGetDeployedConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the deployed configuration for an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsGetDeployedConfig(
        new ApigeeOrganizationsEnvironmentsGetDeployedConfigRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1EnvironmentConfig
}
catch (ApiException<ApigeeOrganizationsEnvironmentsGetDeployedConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsGetDeployedConfigRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetDeployedConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1EnvironmentConfig](src/Apigee/Models/GoogleCloudApigeeV1EnvironmentConfig.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsGetDeployedConfigError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetDeployedConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleIamV1Policy&gt; ApigeeOrganizationsEnvironmentsGetIamPolicy(ApigeeOrganizationsEnvironmentsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the IAM policy on an environment. For more information, see Manage users, roles, and permissions using the API. You must have the `apigee.environments.getIamPolicy` permission to call this API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsGetIamPolicy(
        new ApigeeOrganizationsEnvironmentsGetIamPolicyRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleIamV1Policy
}
catch (ApiException<ApigeeOrganizationsEnvironmentsGetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsGetIamPolicyRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleIamV1Policy](src/Apigee/Models/GoogleIamV1Policy.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsGetIamPolicyError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityActionsConfig&gt; ApigeeOrganizationsEnvironmentsGetSecurityActionsConfig(ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

GetSecurityActionConfig returns the current SecurityActions configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsGetSecurityActionsConfig(
        new ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityActionsConfig
}
catch (ApiException<ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityActionsConfig](src/Apigee/Models/GoogleCloudApigeeV1SecurityActionsConfig.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1TraceConfig&gt; ApigeeOrganizationsEnvironmentsGetTraceConfig(ApigeeOrganizationsEnvironmentsGetTraceConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get distributed trace configuration in an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsGetTraceConfig(
        new ApigeeOrganizationsEnvironmentsGetTraceConfigRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1TraceConfig
}
catch (ApiException<ApigeeOrganizationsEnvironmentsGetTraceConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsGetTraceConfigRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetTraceConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1TraceConfig](src/Apigee/Models/GoogleCloudApigeeV1TraceConfig.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsGetTraceConfigError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetTraceConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Alias&gt; ApigeeOrganizationsEnvironmentsKeystoresAliasesCreate(ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an alias from a key/certificate pair. The structure of the request is controlled by the `format` query parameter: - `keycertfile` - Separate PEM-encoded key and certificate files are uploaded. Set `Content-Type: multipart/form-data` and include the `keyFile`, `certFile`, and `password` (if keys are encrypted) fields in the request body. If uploading to a truststore, omit `keyFile`. - `pkcs12` - A PKCS12 file is uploaded. Set `Content-Type: multipart/form-data`, provide the file in the `file` field, and include the `password` field if the file is encrypted in the request body. - `selfsignedcert` - A new private key and certificate are generated. Set `Content-Type: application/json` and include CertificateGenerationSpec in the request body.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCreate(
        new ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeystoresId = "some example string",
            Body = new GoogleApiHttpBody(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Alias
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Alias](src/Apigee/Models/GoogleCloudApigeeV1Alias.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleApiHttpBody&gt; ApigeeOrganizationsEnvironmentsKeystoresAliasesCsr(ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a PKCS #10 Certificate Signing Request for the private key in an alias.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCsr(
        new ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeystoresId = "some example string",
            AliasesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleApiHttpBody
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleApiHttpBody](src/Apigee/Models/GoogleApiHttpBody.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Alias&gt; ApigeeOrganizationsEnvironmentsKeystoresAliasesDelete(ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an alias.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesDelete(
        new ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeystoresId = "some example string",
            AliasesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Alias
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Alias](src/Apigee/Models/GoogleCloudApigeeV1Alias.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Alias&gt; ApigeeOrganizationsEnvironmentsKeystoresAliasesGet(ApigeeOrganizationsEnvironmentsKeystoresAliasesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets an alias.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGet(
        new ApigeeOrganizationsEnvironmentsKeystoresAliasesGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeystoresId = "some example string",
            AliasesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Alias
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeystoresAliasesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeystoresAliasesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresAliasesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Alias](src/Apigee/Models/GoogleCloudApigeeV1Alias.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeystoresAliasesGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresAliasesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleApiHttpBody&gt; ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificate(ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the certificate from an alias in PEM-encoded form.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificate(
        new ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeystoresId = "some example string",
            AliasesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleApiHttpBody
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleApiHttpBody](src/Apigee/Models/GoogleApiHttpBody.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Alias&gt; ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdate(ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the certificate in an alias. The updated certificate must be in PEM- or DER-encoded X.509 format.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdate(
        new ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeystoresId = "some example string",
            AliasesId = "some example string",
            Body = new GoogleApiHttpBody(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Alias
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Alias](src/Apigee/Models/GoogleCloudApigeeV1Alias.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Keystore&gt; ApigeeOrganizationsEnvironmentsKeystoresCreate(ApigeeOrganizationsEnvironmentsKeystoresCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a keystore or truststore. - Keystore: Contains certificates and their associated keys. - Truststore: Contains trusted certificates used to validate a server's certificate. These certificates are typically self-signed certificates or certificates that are not signed by a trusted CA.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeystoresCreate(
        new ApigeeOrganizationsEnvironmentsKeystoresCreateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1Keystore(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Keystore
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeystoresCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeystoresCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Keystore](src/Apigee/Models/GoogleCloudApigeeV1Keystore.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeystoresCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Keystore&gt; ApigeeOrganizationsEnvironmentsKeystoresDelete(ApigeeOrganizationsEnvironmentsKeystoresDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a keystore or truststore.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeystoresDelete(
        new ApigeeOrganizationsEnvironmentsKeystoresDeleteRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeystoresId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Keystore
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeystoresDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeystoresDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Keystore](src/Apigee/Models/GoogleCloudApigeeV1Keystore.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeystoresDeleteError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Keystore&gt; ApigeeOrganizationsEnvironmentsKeystoresGet(ApigeeOrganizationsEnvironmentsKeystoresGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a keystore or truststore.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeystoresGet(
        new ApigeeOrganizationsEnvironmentsKeystoresGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeystoresId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Keystore
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeystoresGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeystoresGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Keystore](src/Apigee/Models/GoogleCloudApigeeV1Keystore.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeystoresGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueMap&gt; ApigeeOrganizationsEnvironmentsKeyvaluemapsCreate(ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a key value map in an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsCreate(
        new ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1KeyValueMap(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueMap
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueMap](src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueMap&gt; ApigeeOrganizationsEnvironmentsKeyvaluemapsDelete(ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a key value map from an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsDelete(
        new ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeyvaluemapsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueMap
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueMap](src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueEntry&gt; ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreate(ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreate(
        new ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeyvaluemapsId = "some example string",
            Body = new GoogleCloudApigeeV1KeyValueEntry(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueEntry
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueEntry](src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueEntry&gt; ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDelete(ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. **Notes:** * After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior. * Supported for Apigee hybrid 1.8.x and higher.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDelete(
        new ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeyvaluemapsId = "some example string",
            EntriesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueEntry
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueEntry](src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueEntry&gt; ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGet(ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGet(
        new ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeyvaluemapsId = "some example string",
            EntriesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueEntry
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueEntry](src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListKeyValueEntriesResponse&gt; ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesList(ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesList(
        new ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeyvaluemapsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListKeyValueEntriesResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListKeyValueEntriesResponse](src/Apigee/Models/GoogleCloudApigeeV1ListKeyValueEntriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueEntry&gt; ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdate(ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update key value entry scoped to an organization, environment, or API proxy for an existing key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdate(
        new ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeyvaluemapsId = "some example string",
            EntriesId = "some example string",
            Body = new GoogleCloudApigeeV1KeyValueEntry(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueEntry
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueEntry](src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueMap&gt; ApigeeOrganizationsEnvironmentsKeyvaluemapsGet(ApigeeOrganizationsEnvironmentsKeyvaluemapsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the key value map scoped to an organization, environment, or API proxy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsGet(
        new ApigeeOrganizationsEnvironmentsKeyvaluemapsGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeyvaluemapsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueMap
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeyvaluemapsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueMap](src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeyvaluemapsGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueMap&gt; ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdate(ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the key value map scoped to an organization, environment, or API proxy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdate(
        new ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            KeyvaluemapsId = "some example string",
            Body = new GoogleCloudApigeeV1KeyValueMap(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueMap
}
catch (ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueMap](src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsEnvironmentsModifyEnvironment(ApigeeOrganizationsEnvironmentsModifyEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates properties for an Apigee environment with patch semantics using a field mask. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsModifyEnvironment(
        new ApigeeOrganizationsEnvironmentsModifyEnvironmentRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1Environment(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsEnvironmentsModifyEnvironmentError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsModifyEnvironmentRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsModifyEnvironmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsModifyEnvironmentError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsModifyEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1OptimizedStats&gt; ApigeeOrganizationsEnvironmentsOptimizedStatsGet(ApigeeOrganizationsEnvironmentsOptimizedStatsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Similar to GetStats except that the response is less verbose.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsOptimizedStatsGet(
        new ApigeeOrganizationsEnvironmentsOptimizedStatsGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            OptimizedStatsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1OptimizedStats
}
catch (ApiException<ApigeeOrganizationsEnvironmentsOptimizedStatsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsOptimizedStatsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsOptimizedStatsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1OptimizedStats](src/Apigee/Models/GoogleCloudApigeeV1OptimizedStats.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsOptimizedStatsGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsOptimizedStatsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AsyncQuery&gt; ApigeeOrganizationsEnvironmentsQueriesCreate(ApigeeOrganizationsEnvironmentsQueriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a query to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsQueriesCreate(
        new ApigeeOrganizationsEnvironmentsQueriesCreateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1Query(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AsyncQuery
}
catch (ApiException<ApigeeOrganizationsEnvironmentsQueriesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsQueriesCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsQueriesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AsyncQuery](src/Apigee/Models/GoogleCloudApigeeV1AsyncQuery.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsQueriesCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsQueriesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AsyncQuery&gt; ApigeeOrganizationsEnvironmentsQueriesGet(ApigeeOrganizationsEnvironmentsQueriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get query status If the query is still in progress, the `state` is set to "running" After the query has completed successfully, `state` is set to "completed"

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsQueriesGet(
        new ApigeeOrganizationsEnvironmentsQueriesGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            QueriesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AsyncQuery
}
catch (ApiException<ApigeeOrganizationsEnvironmentsQueriesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsQueriesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsQueriesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AsyncQuery](src/Apigee/Models/GoogleCloudApigeeV1AsyncQuery.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsQueriesGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsQueriesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleApiHttpBody&gt; ApigeeOrganizationsEnvironmentsQueriesGetResult(ApigeeOrganizationsEnvironmentsQueriesGetResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: `OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsQueriesGetResult(
        new ApigeeOrganizationsEnvironmentsQueriesGetResultRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            QueriesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleApiHttpBody
}
catch (ApiException<ApigeeOrganizationsEnvironmentsQueriesGetResultError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsQueriesGetResultRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsQueriesGetResultRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleApiHttpBody](src/Apigee/Models/GoogleApiHttpBody.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsQueriesGetResultError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsQueriesGetResultError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse&gt; ApigeeOrganizationsEnvironmentsQueriesGetResulturl(ApigeeOrganizationsEnvironmentsQueriesGetResulturlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is sent to the client as a list of urls to JSON files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsQueriesGetResulturl(
        new ApigeeOrganizationsEnvironmentsQueriesGetResulturlRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            QueriesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsQueriesGetResulturlError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsQueriesGetResulturlRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsQueriesGetResulturlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse](src/Apigee/Models/GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsQueriesGetResulturlError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsQueriesGetResulturlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListAsyncQueriesResponse&gt; ApigeeOrganizationsEnvironmentsQueriesList(ApigeeOrganizationsEnvironmentsQueriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a list of Asynchronous Queries

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsQueriesList(
        new ApigeeOrganizationsEnvironmentsQueriesListRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListAsyncQueriesResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsQueriesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsQueriesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsQueriesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListAsyncQueriesResponse](src/Apigee/Models/GoogleCloudApigeeV1ListAsyncQueriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsQueriesListError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsQueriesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Reference&gt; ApigeeOrganizationsEnvironmentsReferencesCreate(ApigeeOrganizationsEnvironmentsReferencesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Reference in the specified environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsReferencesCreate(
        new ApigeeOrganizationsEnvironmentsReferencesCreateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1Reference(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Reference
}
catch (ApiException<ApigeeOrganizationsEnvironmentsReferencesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsReferencesCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsReferencesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Reference](src/Apigee/Models/GoogleCloudApigeeV1Reference.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsReferencesCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsReferencesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Reference&gt; ApigeeOrganizationsEnvironmentsReferencesDelete(ApigeeOrganizationsEnvironmentsReferencesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Reference from an environment. Returns the deleted Reference resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsReferencesDelete(
        new ApigeeOrganizationsEnvironmentsReferencesDeleteRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ReferencesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Reference
}
catch (ApiException<ApigeeOrganizationsEnvironmentsReferencesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsReferencesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsReferencesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Reference](src/Apigee/Models/GoogleCloudApigeeV1Reference.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsReferencesDeleteError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsReferencesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Reference&gt; ApigeeOrganizationsEnvironmentsReferencesGet(ApigeeOrganizationsEnvironmentsReferencesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a Reference resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsReferencesGet(
        new ApigeeOrganizationsEnvironmentsReferencesGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ReferencesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Reference
}
catch (ApiException<ApigeeOrganizationsEnvironmentsReferencesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsReferencesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsReferencesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Reference](src/Apigee/Models/GoogleCloudApigeeV1Reference.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsReferencesGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsReferencesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Reference&gt; ApigeeOrganizationsEnvironmentsReferencesUpdate(ApigeeOrganizationsEnvironmentsReferencesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing Reference. Note that this operation has PUT semantics; it will replace the entirety of the existing Reference with the resource in the request body.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsReferencesUpdate(
        new ApigeeOrganizationsEnvironmentsReferencesUpdateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            ReferencesId = "some example string",
            Body = new GoogleCloudApigeeV1Reference(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Reference
}
catch (ApiException<ApigeeOrganizationsEnvironmentsReferencesUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsReferencesUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsReferencesUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Reference](src/Apigee/Models/GoogleCloudApigeeV1Reference.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsReferencesUpdateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsReferencesUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ResourceFile&gt; ApigeeOrganizationsEnvironmentsResourcefilesCreate(ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see Resource files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsResourcefilesCreate(
        new ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleApiHttpBody(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ResourceFile
}
catch (ApiException<ApigeeOrganizationsEnvironmentsResourcefilesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ResourceFile](src/Apigee/Models/GoogleCloudApigeeV1ResourceFile.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsResourcefilesCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsResourcefilesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ResourceFile&gt; ApigeeOrganizationsEnvironmentsResourcefilesDelete(ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a resource file. For more information about resource files, see Resource files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsResourcefilesDelete(
        new ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Type = "some example string",
            Name = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ResourceFile
}
catch (ApiException<ApigeeOrganizationsEnvironmentsResourcefilesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ResourceFile](src/Apigee/Models/GoogleCloudApigeeV1ResourceFile.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsResourcefilesDeleteError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsResourcefilesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleApiHttpBody&gt; ApigeeOrganizationsEnvironmentsResourcefilesGet(ApigeeOrganizationsEnvironmentsResourcefilesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the contents of a resource file. For more information about resource files, see Resource files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsResourcefilesGet(
        new ApigeeOrganizationsEnvironmentsResourcefilesGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Type = "some example string",
            Name = "some example string",
        });
    // TODO: Handle 'response' of type GoogleApiHttpBody
}
catch (ApiException<ApigeeOrganizationsEnvironmentsResourcefilesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsResourcefilesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsResourcefilesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleApiHttpBody](src/Apigee/Models/GoogleApiHttpBody.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsResourcefilesGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsResourcefilesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListEnvironmentResourcesResponse&gt; ApigeeOrganizationsEnvironmentsResourcefilesList(ApigeeOrganizationsEnvironmentsResourcefilesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all resource files, optionally filtering by type. For more information about resource files, see Resource files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsResourcefilesList(
        new ApigeeOrganizationsEnvironmentsResourcefilesListRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListEnvironmentResourcesResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsResourcefilesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsResourcefilesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsResourcefilesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListEnvironmentResourcesResponse](src/Apigee/Models/GoogleCloudApigeeV1ListEnvironmentResourcesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsResourcefilesListError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsResourcefilesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListEnvironmentResourcesResponse&gt; ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResources(ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all resource files, optionally filtering by type. For more information about resource files, see Resource files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResources(
        new ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Type = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListEnvironmentResourcesResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListEnvironmentResourcesResponse](src/Apigee/Models/GoogleCloudApigeeV1ListEnvironmentResourcesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ResourceFile&gt; ApigeeOrganizationsEnvironmentsResourcefilesUpdate(ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see Resource files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsResourcefilesUpdate(
        new ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Type = "some example string",
            Name = "some example string",
            Body = new GoogleApiHttpBody(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ResourceFile
}
catch (ApiException<ApigeeOrganizationsEnvironmentsResourcefilesUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ResourceFile](src/Apigee/Models/GoogleCloudApigeeV1ResourceFile.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsResourcefilesUpdateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsResourcefilesUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityAction&gt; ApigeeOrganizationsEnvironmentsSecurityActionsCreate(ApigeeOrganizationsEnvironmentsSecurityActionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

CreateSecurityAction creates a SecurityAction.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsCreate(
        new ApigeeOrganizationsEnvironmentsSecurityActionsCreateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1SecurityAction(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityAction
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityActionsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityActionsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityActionsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityAction](src/Apigee/Models/GoogleCloudApigeeV1SecurityAction.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityActionsCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityActionsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsEnvironmentsSecurityActionsDelete(ApigeeOrganizationsEnvironmentsSecurityActionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a SecurityAction.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsDelete(
        new ApigeeOrganizationsEnvironmentsSecurityActionsDeleteRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            SecurityActionsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityActionsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityActionsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityActionsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityActionsDeleteError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityActionsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityAction&gt; ApigeeOrganizationsEnvironmentsSecurityActionsDisable(ApigeeOrganizationsEnvironmentsSecurityActionsDisableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disable a SecurityAction. The `state` of the SecurityAction after disabling is `DISABLED`. `DisableSecurityAction` can be called on SecurityActions in the state `ENABLED`; SecurityActions in a different state (including `DISABLED`) return an error.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsDisable(
        new ApigeeOrganizationsEnvironmentsSecurityActionsDisableRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            SecurityActionsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityAction
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityActionsDisableError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityActionsDisableRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityActionsDisableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityAction](src/Apigee/Models/GoogleCloudApigeeV1SecurityAction.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityActionsDisableError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityActionsDisableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityAction&gt; ApigeeOrganizationsEnvironmentsSecurityActionsEnable(ApigeeOrganizationsEnvironmentsSecurityActionsEnableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable a SecurityAction. The `state` of the SecurityAction after enabling is `ENABLED`. `EnableSecurityAction` can be called on SecurityActions in the state `DISABLED`; SecurityActions in a different state (including `ENABLED) return an error.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsEnable(
        new ApigeeOrganizationsEnvironmentsSecurityActionsEnableRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            SecurityActionsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityAction
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityActionsEnableError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityActionsEnableRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityActionsEnableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityAction](src/Apigee/Models/GoogleCloudApigeeV1SecurityAction.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityActionsEnableError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityActionsEnableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityAction&gt; ApigeeOrganizationsEnvironmentsSecurityActionsGet(ApigeeOrganizationsEnvironmentsSecurityActionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a SecurityAction by name.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsGet(
        new ApigeeOrganizationsEnvironmentsSecurityActionsGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            SecurityActionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityAction
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityActionsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityActionsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityActionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityAction](src/Apigee/Models/GoogleCloudApigeeV1SecurityAction.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityActionsGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityActionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListSecurityActionsResponse&gt; ApigeeOrganizationsEnvironmentsSecurityActionsList(ApigeeOrganizationsEnvironmentsSecurityActionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of SecurityActions. This returns both enabled and disabled actions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsList(
        new ApigeeOrganizationsEnvironmentsSecurityActionsListRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListSecurityActionsResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityActionsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityActionsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityActionsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListSecurityActionsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListSecurityActionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityActionsListError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityActionsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityAction&gt; ApigeeOrganizationsEnvironmentsSecurityActionsPatch(ApigeeOrganizationsEnvironmentsSecurityActionsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a SecurityAction.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsPatch(
        new ApigeeOrganizationsEnvironmentsSecurityActionsPatchRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            SecurityActionsId = "some example string",
            Body = new GoogleCloudApigeeV1SecurityAction(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityAction
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityActionsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityActionsPatchRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityActionsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityAction](src/Apigee/Models/GoogleCloudApigeeV1SecurityAction.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityActionsPatchError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityActionsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse&gt; ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdate(ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

BatchUpdateSecurityIncident updates multiple existing security incidents.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdate(
        new ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse](src/Apigee/Models/GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityIncident&gt; ApigeeOrganizationsEnvironmentsSecurityIncidentsGet(ApigeeOrganizationsEnvironmentsSecurityIncidentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

GetSecurityIncident gets the specified security incident. Returns NOT_FOUND if security incident is not present for the specified organization and environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsGet(
        new ApigeeOrganizationsEnvironmentsSecurityIncidentsGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            SecurityIncidentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityIncident
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityIncidentsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityIncidentsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityIncidentsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityIncident](src/Apigee/Models/GoogleCloudApigeeV1SecurityIncident.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityIncidentsGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityIncidentsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListSecurityIncidentsResponse&gt; ApigeeOrganizationsEnvironmentsSecurityIncidentsList(ApigeeOrganizationsEnvironmentsSecurityIncidentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ListSecurityIncidents lists all the security incident associated with the environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsList(
        new ApigeeOrganizationsEnvironmentsSecurityIncidentsListRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListSecurityIncidentsResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityIncidentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityIncidentsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityIncidentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListSecurityIncidentsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListSecurityIncidentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityIncidentsListError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityIncidentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityIncident&gt; ApigeeOrganizationsEnvironmentsSecurityIncidentsPatch(ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

UpdateSecurityIncidents updates an existing security incident.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsPatch(
        new ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            SecurityIncidentsId = "some example string",
            Body = new GoogleCloudApigeeV1SecurityIncident(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityIncident
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityIncident](src/Apigee/Models/GoogleCloudApigeeV1SecurityIncident.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityReport&gt; ApigeeOrganizationsEnvironmentsSecurityReportsCreate(ApigeeOrganizationsEnvironmentsSecurityReportsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a report request to be processed in the background. If the submission succeeds, the API returns a 200 status and an ID that refer to the report request. In addition to the HTTP status 200, the `state` of "enqueued" means that the request succeeded.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsCreate(
        new ApigeeOrganizationsEnvironmentsSecurityReportsCreateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1SecurityReportQuery(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityReport
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityReportsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityReportsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityReportsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityReport](src/Apigee/Models/GoogleCloudApigeeV1SecurityReport.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityReportsCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityReportsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityReport&gt; ApigeeOrganizationsEnvironmentsSecurityReportsGet(ApigeeOrganizationsEnvironmentsSecurityReportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get security report status If the query is still in progress, the `state` is set to "running" After the query has completed successfully, `state` is set to "completed"

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsGet(
        new ApigeeOrganizationsEnvironmentsSecurityReportsGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            SecurityReportsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityReport
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityReportsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityReportsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityReportsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityReport](src/Apigee/Models/GoogleCloudApigeeV1SecurityReport.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityReportsGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityReportsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleApiHttpBody&gt; ApigeeOrganizationsEnvironmentsSecurityReportsGetResult(ApigeeOrganizationsEnvironmentsSecurityReportsGetResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

After the query is completed, use this API to retrieve the results as file. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: `OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsGetResult(
        new ApigeeOrganizationsEnvironmentsSecurityReportsGetResultRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            SecurityReportsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleApiHttpBody
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityReportsGetResultError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityReportsGetResultRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityReportsGetResultRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleApiHttpBody](src/Apigee/Models/GoogleApiHttpBody.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityReportsGetResultError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityReportsGetResultError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityReportResultView&gt; ApigeeOrganizationsEnvironmentsSecurityReportsGetResultView(ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

After the query is completed, use this API to view the query result when result size is small.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsGetResultView(
        new ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            SecurityReportsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityReportResultView
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityReportResultView](src/Apigee/Models/GoogleCloudApigeeV1SecurityReportResultView.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListSecurityReportsResponse&gt; ApigeeOrganizationsEnvironmentsSecurityReportsList(ApigeeOrganizationsEnvironmentsSecurityReportsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a list of Security Reports

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsList(
        new ApigeeOrganizationsEnvironmentsSecurityReportsListRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListSecurityReportsResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityReportsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityReportsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityReportsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListSecurityReportsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListSecurityReportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityReportsListError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityReportsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1QueryTabularStatsResponse&gt; ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStats(ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve security statistics as tabular rows.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStats(
        new ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1QueryTabularStatsRequest(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1QueryTabularStatsResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1QueryTabularStatsResponse](src/Apigee/Models/GoogleCloudApigeeV1QueryTabularStatsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1QueryTimeSeriesStatsResponse&gt; ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStats(ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve security statistics as a collection of time series.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStats(
        new ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1QueryTimeSeriesStatsRequest(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1QueryTimeSeriesStatsResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1QueryTimeSeriesStatsResponse](src/Apigee/Models/GoogleCloudApigeeV1QueryTimeSeriesStatsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleIamV1Policy&gt; ApigeeOrganizationsEnvironmentsSetIamPolicy(ApigeeOrganizationsEnvironmentsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the IAM policy on an environment, if the policy already exists it will be replaced. For more information, see Manage users, roles, and permissions using the API. You must have the `apigee.environments.setIamPolicy` permission to call this API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSetIamPolicy(
        new ApigeeOrganizationsEnvironmentsSetIamPolicyRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleIamV1SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type GoogleIamV1Policy
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSetIamPolicyRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleIamV1Policy](src/Apigee/Models/GoogleIamV1Policy.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSetIamPolicyError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListDeploymentsResponse&gt; ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsList(ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all deployments of a shared flow in an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsList(
        new ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            SharedflowsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListDeploymentsResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListDeploymentsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Deployment&gt; ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploy(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deploys a revision of a shared flow. If another revision of the same shared flow is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot use a shared flow until it has been deployed to an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.deploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploy(
        new ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            SharedflowsId = "some example string",
            RevisionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Deployment
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Deployment](src/Apigee/Models/GoogleCloudApigeeV1Deployment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Deployment&gt; ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeployments(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the deployment of a shared flow revision and actual state reported by runtime pods.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeployments(
        new ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            SharedflowsId = "some example string",
            RevisionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Deployment
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Deployment](src/Apigee/Models/GoogleCloudApigeeV1Deployment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploy(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Undeploys a shared flow revision from an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.undeploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploy(
        new ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            SharedflowsId = "some example string",
            RevisionsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Stats&gt; ApigeeOrganizationsEnvironmentsStatsGet(ApigeeOrganizationsEnvironmentsStatsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve metrics grouped by dimensions. The types of metrics you can retrieve include traffic, message counts, API call latency, response size, and cache hits and counts. Dimensions let you view metrics in meaningful groups. You can optionally pass dimensions as path parameters to the `stats` API. If dimensions are not specified, the metrics are computed on the entire set of data for the given time range.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsStatsGet(
        new ApigeeOrganizationsEnvironmentsStatsGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            StatsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Stats
}
catch (ApiException<ApigeeOrganizationsEnvironmentsStatsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsStatsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsStatsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Stats](src/Apigee/Models/GoogleCloudApigeeV1Stats.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsStatsGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsStatsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Subscription&gt; ApigeeOrganizationsEnvironmentsSubscribe(ApigeeOrganizationsEnvironmentsSubscribeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a subscription for the environment's Pub/Sub topic. The server will assign a random name for this subscription. The "name" and "push_config" must *not* be specified.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsSubscribe(
        new ApigeeOrganizationsEnvironmentsSubscribeRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Subscription
}
catch (ApiException<ApigeeOrganizationsEnvironmentsSubscribeError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsSubscribeRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSubscribeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Subscription](src/Apigee/Models/GoogleCloudApigeeV1Subscription.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsSubscribeError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSubscribeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1TargetServer&gt; ApigeeOrganizationsEnvironmentsTargetserversCreate(ApigeeOrganizationsEnvironmentsTargetserversCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a TargetServer in the specified environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsTargetserversCreate(
        new ApigeeOrganizationsEnvironmentsTargetserversCreateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1TargetServer(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1TargetServer
}
catch (ApiException<ApigeeOrganizationsEnvironmentsTargetserversCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsTargetserversCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTargetserversCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1TargetServer](src/Apigee/Models/GoogleCloudApigeeV1TargetServer.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsTargetserversCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTargetserversCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1TargetServer&gt; ApigeeOrganizationsEnvironmentsTargetserversDelete(ApigeeOrganizationsEnvironmentsTargetserversDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a TargetServer from an environment. Returns the deleted TargetServer resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsTargetserversDelete(
        new ApigeeOrganizationsEnvironmentsTargetserversDeleteRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            TargetserversId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1TargetServer
}
catch (ApiException<ApigeeOrganizationsEnvironmentsTargetserversDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsTargetserversDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTargetserversDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1TargetServer](src/Apigee/Models/GoogleCloudApigeeV1TargetServer.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsTargetserversDeleteError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTargetserversDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1TargetServer&gt; ApigeeOrganizationsEnvironmentsTargetserversGet(ApigeeOrganizationsEnvironmentsTargetserversGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a TargetServer resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsTargetserversGet(
        new ApigeeOrganizationsEnvironmentsTargetserversGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            TargetserversId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1TargetServer
}
catch (ApiException<ApigeeOrganizationsEnvironmentsTargetserversGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsTargetserversGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTargetserversGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1TargetServer](src/Apigee/Models/GoogleCloudApigeeV1TargetServer.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsTargetserversGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTargetserversGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1TargetServer&gt; ApigeeOrganizationsEnvironmentsTargetserversUpdate(ApigeeOrganizationsEnvironmentsTargetserversUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing TargetServer. Note that this operation has PUT semantics; it will replace the entirety of the existing TargetServer with the resource in the request body.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsTargetserversUpdate(
        new ApigeeOrganizationsEnvironmentsTargetserversUpdateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            TargetserversId = "some example string",
            Body = new GoogleCloudApigeeV1TargetServer(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1TargetServer
}
catch (ApiException<ApigeeOrganizationsEnvironmentsTargetserversUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsTargetserversUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTargetserversUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1TargetServer](src/Apigee/Models/GoogleCloudApigeeV1TargetServer.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsTargetserversUpdateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTargetserversUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleIamV1TestIamPermissionsResponse&gt; ApigeeOrganizationsEnvironmentsTestIamPermissions(ApigeeOrganizationsEnvironmentsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Tests the permissions of a user on an environment, and returns a subset of permissions that the user has on the environment. If the environment does not exist, an empty permission set is returned (a NOT_FOUND error is not returned).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsTestIamPermissions(
        new ApigeeOrganizationsEnvironmentsTestIamPermissionsRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleIamV1TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type GoogleIamV1TestIamPermissionsResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsTestIamPermissionsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsTestIamPermissionsRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleIamV1TestIamPermissionsResponse](src/Apigee/Models/GoogleIamV1TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsTestIamPermissionsError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1TraceConfigOverride&gt; ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreate(ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a trace configuration override. The response contains a system-generated UUID, that can be used to view, update, or delete the configuration override. Use the List API to view the existing trace configuration overrides.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreate(
        new ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1TraceConfigOverride(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1TraceConfigOverride
}
catch (ApiException<ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1TraceConfigOverride](src/Apigee/Models/GoogleCloudApigeeV1TraceConfigOverride.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsEnvironmentsTraceConfigOverridesDelete(ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a distributed trace configuration override.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesDelete(
        new ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            OverridesId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1TraceConfigOverride&gt; ApigeeOrganizationsEnvironmentsTraceConfigOverridesGet(ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a trace configuration override.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesGet(
        new ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            OverridesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1TraceConfigOverride
}
catch (ApiException<ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1TraceConfigOverride](src/Apigee/Models/GoogleCloudApigeeV1TraceConfigOverride.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListTraceConfigOverridesResponse&gt; ApigeeOrganizationsEnvironmentsTraceConfigOverridesList(ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all of the distributed trace configuration overrides in an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesList(
        new ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListTraceConfigOverridesResponse
}
catch (ApiException<ApigeeOrganizationsEnvironmentsTraceConfigOverridesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListTraceConfigOverridesResponse](src/Apigee/Models/GoogleCloudApigeeV1ListTraceConfigOverridesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsTraceConfigOverridesListError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTraceConfigOverridesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1TraceConfigOverride&gt; ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatch(ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a distributed trace configuration override. Note that the repeated fields have replace semantics when included in the field mask and that they will be overwritten by the value of the fields in the request body.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatch(
        new ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            OverridesId = "some example string",
            Body = new GoogleCloudApigeeV1TraceConfigOverride(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1TraceConfigOverride
}
catch (ApiException<ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1TraceConfigOverride](src/Apigee/Models/GoogleCloudApigeeV1TraceConfigOverride.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsEnvironmentsUnsubscribe(ApigeeOrganizationsEnvironmentsUnsubscribeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a subscription for the environment's Pub/Sub topic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsUnsubscribe(
        new ApigeeOrganizationsEnvironmentsUnsubscribeRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1Subscription(),
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsEnvironmentsUnsubscribeError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsUnsubscribeRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsUnsubscribeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsUnsubscribeError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsUnsubscribeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Environment&gt; ApigeeOrganizationsEnvironmentsUpdate(ApigeeOrganizationsEnvironmentsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing environment. When updating properties, you must pass all existing properties to the API, even if they are not being changed. If you omit properties from the payload, the properties are removed. To get the current list of properties for the environment, use the Get Environment API. **Note**: Both `PUT` and `POST` methods are supported for updating an existing environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsUpdate(
        new ApigeeOrganizationsEnvironmentsUpdateRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1Environment(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Environment
}
catch (ApiException<ApigeeOrganizationsEnvironmentsUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Environment](src/Apigee/Models/GoogleCloudApigeeV1Environment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsUpdateError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DebugMask&gt; ApigeeOrganizationsEnvironmentsUpdateDebugmask(ApigeeOrganizationsEnvironmentsUpdateDebugmaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the debug mask singleton resource for an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsUpdateDebugmask(
        new ApigeeOrganizationsEnvironmentsUpdateDebugmaskRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1DebugMask(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DebugMask
}
catch (ApiException<ApigeeOrganizationsEnvironmentsUpdateDebugmaskError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsUpdateDebugmaskRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsUpdateDebugmaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DebugMask](src/Apigee/Models/GoogleCloudApigeeV1DebugMask.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsUpdateDebugmaskError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsUpdateDebugmaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Environment&gt; ApigeeOrganizationsEnvironmentsUpdateEnvironment(ApigeeOrganizationsEnvironmentsUpdateEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing environment. When updating properties, you must pass all existing properties to the API, even if they are not being changed. If you omit properties from the payload, the properties are removed. To get the current list of properties for the environment, use the Get Environment API. **Note**: Both `PUT` and `POST` methods are supported for updating an existing environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsUpdateEnvironment(
        new ApigeeOrganizationsEnvironmentsUpdateEnvironmentRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1Environment(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Environment
}
catch (ApiException<ApigeeOrganizationsEnvironmentsUpdateEnvironmentError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsUpdateEnvironmentRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsUpdateEnvironmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Environment](src/Apigee/Models/GoogleCloudApigeeV1Environment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsUpdateEnvironmentError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsUpdateEnvironmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityActionsConfig&gt; ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfig(ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

UpdateSecurityActionConfig updates the current SecurityActions configuration. This method is used to enable/disable the feature at the environment level.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfig(
        new ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1SecurityActionsConfig(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityActionsConfig
}
catch (ApiException<ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityActionsConfig](src/Apigee/Models/GoogleCloudApigeeV1SecurityActionsConfig.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1TraceConfig&gt; ApigeeOrganizationsEnvironmentsUpdateTraceConfig(ApigeeOrganizationsEnvironmentsUpdateTraceConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the trace configurations in an environment. Note that the repeated fields have replace semantics when included in the field mask and that they will be overwritten by the value of the fields in the request body.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsEnvironmentsUpdateTraceConfig(
        new ApigeeOrganizationsEnvironmentsUpdateTraceConfigRequest
        {
            OrganizationsId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1TraceConfig(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1TraceConfig
}
catch (ApiException<ApigeeOrganizationsEnvironmentsUpdateTraceConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsEnvironmentsUpdateTraceConfigRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsUpdateTraceConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1TraceConfig](src/Apigee/Models/GoogleCloudApigeeV1TraceConfig.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsEnvironmentsUpdateTraceConfigError](src/Apigee/Errors/ApigeeOrganizationsEnvironmentsUpdateTraceConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Organization&gt; ApigeeOrganizationsGet(ApigeeOrganizationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the profile for an Apigee organization. See Understanding organizations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsGet(new ApigeeOrganizationsGetRequest
    {
        OrganizationsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Organization
}
catch (ApiException<ApigeeOrganizationsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Organization](src/Apigee/Models/GoogleCloudApigeeV1Organization.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsGetError](src/Apigee/Errors/ApigeeOrganizationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ControlPlaneAccess&gt; ApigeeOrganizationsGetControlPlaneAccess(ApigeeOrganizationsGetControlPlaneAccessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the service accounts allowed to access Apigee control plane directly for limited functionality. **Note**: Available to Apigee hybrid only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsGetControlPlaneAccess(
        new ApigeeOrganizationsGetControlPlaneAccessRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ControlPlaneAccess
}
catch (ApiException<ApigeeOrganizationsGetControlPlaneAccessError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsGetControlPlaneAccessRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsGetControlPlaneAccessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ControlPlaneAccess](src/Apigee/Models/GoogleCloudApigeeV1ControlPlaneAccess.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsGetControlPlaneAccessError](src/Apigee/Errors/ApigeeOrganizationsGetControlPlaneAccessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1IngressConfig&gt; ApigeeOrganizationsGetDeployedIngressConfig(ApigeeOrganizationsGetDeployedIngressConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the deployed ingress configuration for an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsGetDeployedIngressConfig(
        new ApigeeOrganizationsGetDeployedIngressConfigRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1IngressConfig
}
catch (ApiException<ApigeeOrganizationsGetDeployedIngressConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsGetDeployedIngressConfigRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsGetDeployedIngressConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1IngressConfig](src/Apigee/Models/GoogleCloudApigeeV1IngressConfig.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsGetDeployedIngressConfigError](src/Apigee/Errors/ApigeeOrganizationsGetDeployedIngressConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1McpServerConfig&gt; ApigeeOrganizationsGetMcpServerConfig(ApigeeOrganizationsGetMcpServerConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the deployed MCP server configuration for an organization. McpServerConfig is an org-scoped singleton (one per organization). The returned configuration may be up to 30 seconds out of date by default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsGetMcpServerConfig(
        new ApigeeOrganizationsGetMcpServerConfigRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1McpServerConfig
}
catch (ApiException<ApigeeOrganizationsGetMcpServerConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsGetMcpServerConfigRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsGetMcpServerConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1McpServerConfig](src/Apigee/Models/GoogleCloudApigeeV1McpServerConfig.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsGetMcpServerConfigError](src/Apigee/Errors/ApigeeOrganizationsGetMcpServerConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1OrganizationProjectMapping&gt; ApigeeOrganizationsGetProjectMapping(ApigeeOrganizationsGetProjectMappingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the project ID and region for an Apigee organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsGetProjectMapping(
        new ApigeeOrganizationsGetProjectMappingRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1OrganizationProjectMapping
}
catch (ApiException<ApigeeOrganizationsGetProjectMappingError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsGetProjectMappingRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsGetProjectMappingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1OrganizationProjectMapping](src/Apigee/Models/GoogleCloudApigeeV1OrganizationProjectMapping.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsGetProjectMappingError](src/Apigee/Errors/ApigeeOrganizationsGetProjectMappingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1RuntimeConfig&gt; ApigeeOrganizationsGetRuntimeConfig(ApigeeOrganizationsGetRuntimeConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get runtime config for an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsGetRuntimeConfig(
        new ApigeeOrganizationsGetRuntimeConfigRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1RuntimeConfig
}
catch (ApiException<ApigeeOrganizationsGetRuntimeConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsGetRuntimeConfigRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsGetRuntimeConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1RuntimeConfig](src/Apigee/Models/GoogleCloudApigeeV1RuntimeConfig.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsGetRuntimeConfigError](src/Apigee/Errors/ApigeeOrganizationsGetRuntimeConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecuritySettings&gt; ApigeeOrganizationsGetSecuritySettings(ApigeeOrganizationsGetSecuritySettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

GetSecuritySettings gets the security settings for API Security.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsGetSecuritySettings(
        new ApigeeOrganizationsGetSecuritySettingsRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecuritySettings
}
catch (ApiException<ApigeeOrganizationsGetSecuritySettingsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsGetSecuritySettingsRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsGetSecuritySettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecuritySettings](src/Apigee/Models/GoogleCloudApigeeV1SecuritySettings.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsGetSecuritySettingsError](src/Apigee/Errors/ApigeeOrganizationsGetSecuritySettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SyncAuthorization&gt; ApigeeOrganizationsGetSyncAuthorization(ApigeeOrganizationsGetSyncAuthorizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the service accounts with the permissions required to allow the Synchronizer to download environment data from the control plane. An ETag is returned in the response to `getSyncAuthorization`. Pass that ETag when calling setSyncAuthorization to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see Configure the Synchronizer. **Note**: Available to Apigee hybrid only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsGetSyncAuthorization(
        new ApigeeOrganizationsGetSyncAuthorizationRequest { OrganizationsId = "some example string", Body = body });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SyncAuthorization
}
catch (ApiException<ApigeeOrganizationsGetSyncAuthorizationError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsGetSyncAuthorizationRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsGetSyncAuthorizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SyncAuthorization](src/Apigee/Models/GoogleCloudApigeeV1SyncAuthorization.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsGetSyncAuthorizationError](src/Apigee/Errors/ApigeeOrganizationsGetSyncAuthorizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AsyncQuery&gt; ApigeeOrganizationsHostQueriesCreate(ApigeeOrganizationsHostQueriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsHostQueriesCreate(
        new ApigeeOrganizationsHostQueriesCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1Query(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AsyncQuery
}
catch (ApiException<ApigeeOrganizationsHostQueriesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsHostQueriesCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsHostQueriesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AsyncQuery](src/Apigee/Models/GoogleCloudApigeeV1AsyncQuery.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsHostQueriesCreateError](src/Apigee/Errors/ApigeeOrganizationsHostQueriesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AsyncQuery&gt; ApigeeOrganizationsHostQueriesGet(ApigeeOrganizationsHostQueriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get status of a query submitted at host level. If the query is still in progress, the `state` is set to "running" After the query has completed successfully, `state` is set to "completed"

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsHostQueriesGet(
        new ApigeeOrganizationsHostQueriesGetRequest
        {
            OrganizationsId = "some example string",
            HostQueriesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AsyncQuery
}
catch (ApiException<ApigeeOrganizationsHostQueriesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsHostQueriesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsHostQueriesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AsyncQuery](src/Apigee/Models/GoogleCloudApigeeV1AsyncQuery.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsHostQueriesGetError](src/Apigee/Errors/ApigeeOrganizationsHostQueriesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleApiHttpBody&gt; ApigeeOrganizationsHostQueriesGetResult(ApigeeOrganizationsHostQueriesGetResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: `OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsHostQueriesGetResult(
        new ApigeeOrganizationsHostQueriesGetResultRequest
        {
            OrganizationsId = "some example string",
            HostQueriesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleApiHttpBody
}
catch (ApiException<ApigeeOrganizationsHostQueriesGetResultError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsHostQueriesGetResultRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsHostQueriesGetResultRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleApiHttpBody](src/Apigee/Models/GoogleApiHttpBody.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsHostQueriesGetResultError](src/Apigee/Errors/ApigeeOrganizationsHostQueriesGetResultError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1AsyncQueryResultView&gt; ApigeeOrganizationsHostQueriesGetResultView(ApigeeOrganizationsHostQueriesGetResultViewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsHostQueriesGetResultView(
        new ApigeeOrganizationsHostQueriesGetResultViewRequest
        {
            OrganizationsId = "some example string",
            HostQueriesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1AsyncQueryResultView
}
catch (ApiException<ApigeeOrganizationsHostQueriesGetResultViewError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsHostQueriesGetResultViewRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsHostQueriesGetResultViewRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1AsyncQueryResultView](src/Apigee/Models/GoogleCloudApigeeV1AsyncQueryResultView.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsHostQueriesGetResultViewError](src/Apigee/Errors/ApigeeOrganizationsHostQueriesGetResultViewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListAsyncQueriesResponse&gt; ApigeeOrganizationsHostQueriesList(ApigeeOrganizationsHostQueriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a list of Asynchronous Queries at host level.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsHostQueriesList(
        new ApigeeOrganizationsHostQueriesListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListAsyncQueriesResponse
}
catch (ApiException<ApigeeOrganizationsHostQueriesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsHostQueriesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsHostQueriesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListAsyncQueriesResponse](src/Apigee/Models/GoogleCloudApigeeV1ListAsyncQueriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsHostQueriesListError](src/Apigee/Errors/ApigeeOrganizationsHostQueriesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityReport&gt; ApigeeOrganizationsHostSecurityReportsCreate(ApigeeOrganizationsHostSecurityReportsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsHostSecurityReportsCreate(
        new ApigeeOrganizationsHostSecurityReportsCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1SecurityReportQuery(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityReport
}
catch (ApiException<ApigeeOrganizationsHostSecurityReportsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsHostSecurityReportsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsHostSecurityReportsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityReport](src/Apigee/Models/GoogleCloudApigeeV1SecurityReport.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsHostSecurityReportsCreateError](src/Apigee/Errors/ApigeeOrganizationsHostSecurityReportsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityReport&gt; ApigeeOrganizationsHostSecurityReportsGet(ApigeeOrganizationsHostSecurityReportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get status of a query submitted at host level. If the query is still in progress, the `state` is set to "running" After the query has completed successfully, `state` is set to "completed"

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsHostSecurityReportsGet(
        new ApigeeOrganizationsHostSecurityReportsGetRequest
        {
            OrganizationsId = "some example string",
            HostSecurityReportsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityReport
}
catch (ApiException<ApigeeOrganizationsHostSecurityReportsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsHostSecurityReportsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsHostSecurityReportsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityReport](src/Apigee/Models/GoogleCloudApigeeV1SecurityReport.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsHostSecurityReportsGetError](src/Apigee/Errors/ApigeeOrganizationsHostSecurityReportsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleApiHttpBody&gt; ApigeeOrganizationsHostSecurityReportsGetResult(ApigeeOrganizationsHostSecurityReportsGetResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

After the query is completed, use this API to retrieve the results. If the request succeeds, and there is a non-zero result set, the result is downloaded to the client as a zipped JSON file. The name of the downloaded file will be: OfflineQueryResult-.zip Example: `OfflineQueryResult-9cfc0d85-0f30-46d6-ae6f-318d0cb961bd.zip`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsHostSecurityReportsGetResult(
        new ApigeeOrganizationsHostSecurityReportsGetResultRequest
        {
            OrganizationsId = "some example string",
            HostSecurityReportsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleApiHttpBody
}
catch (ApiException<ApigeeOrganizationsHostSecurityReportsGetResultError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsHostSecurityReportsGetResultRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsHostSecurityReportsGetResultRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleApiHttpBody](src/Apigee/Models/GoogleApiHttpBody.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsHostSecurityReportsGetResultError](src/Apigee/Errors/ApigeeOrganizationsHostSecurityReportsGetResultError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityReportResultView&gt; ApigeeOrganizationsHostSecurityReportsGetResultView(ApigeeOrganizationsHostSecurityReportsGetResultViewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

After the query is completed, use this API to view the query result when result size is small.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsHostSecurityReportsGetResultView(
        new ApigeeOrganizationsHostSecurityReportsGetResultViewRequest
        {
            OrganizationsId = "some example string",
            HostSecurityReportsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityReportResultView
}
catch (ApiException<ApigeeOrganizationsHostSecurityReportsGetResultViewError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsHostSecurityReportsGetResultViewRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsHostSecurityReportsGetResultViewRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityReportResultView](src/Apigee/Models/GoogleCloudApigeeV1SecurityReportResultView.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsHostSecurityReportsGetResultViewError](src/Apigee/Errors/ApigeeOrganizationsHostSecurityReportsGetResultViewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListSecurityReportsResponse&gt; ApigeeOrganizationsHostSecurityReportsList(ApigeeOrganizationsHostSecurityReportsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a list of Security Reports at host level.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsHostSecurityReportsList(
        new ApigeeOrganizationsHostSecurityReportsListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListSecurityReportsResponse
}
catch (ApiException<ApigeeOrganizationsHostSecurityReportsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsHostSecurityReportsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsHostSecurityReportsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListSecurityReportsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListSecurityReportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsHostSecurityReportsListError](src/Apigee/Errors/ApigeeOrganizationsHostSecurityReportsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Stats&gt; ApigeeOrganizationsHostStatsGet(ApigeeOrganizationsHostStatsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve metrics grouped by dimensions in host level. The types of metrics you can retrieve include traffic, message counts, API call latency, response size, and cache hits and counts. Dimensions let you view metrics in meaningful groups. You can optionally pass dimensions as path parameters to the `stats` API. If dimensions are not specified, the metrics are computed on the entire set of data for the given time range.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsHostStatsGet(new ApigeeOrganizationsHostStatsGetRequest
    {
        OrganizationsId = "some example string",
        HostStatsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Stats
}
catch (ApiException<ApigeeOrganizationsHostStatsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsHostStatsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsHostStatsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Stats](src/Apigee/Models/GoogleCloudApigeeV1Stats.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsHostStatsGetError](src/Apigee/Errors/ApigeeOrganizationsHostStatsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsInstancesAttachmentsCreate(ApigeeOrganizationsInstancesAttachmentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new attachment of an environment to an instance. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesAttachmentsCreate(
        new ApigeeOrganizationsInstancesAttachmentsCreateRequest
        {
            OrganizationsId = "some example string",
            InstancesId = "some example string",
            Body = new GoogleCloudApigeeV1InstanceAttachment(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsInstancesAttachmentsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesAttachmentsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesAttachmentsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesAttachmentsCreateError](src/Apigee/Errors/ApigeeOrganizationsInstancesAttachmentsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsInstancesAttachmentsDelete(ApigeeOrganizationsInstancesAttachmentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an attachment. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesAttachmentsDelete(
        new ApigeeOrganizationsInstancesAttachmentsDeleteRequest
        {
            OrganizationsId = "some example string",
            InstancesId = "some example string",
            AttachmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsInstancesAttachmentsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesAttachmentsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesAttachmentsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesAttachmentsDeleteError](src/Apigee/Errors/ApigeeOrganizationsInstancesAttachmentsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1InstanceAttachment&gt; ApigeeOrganizationsInstancesAttachmentsGet(ApigeeOrganizationsInstancesAttachmentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets an attachment. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesAttachmentsGet(
        new ApigeeOrganizationsInstancesAttachmentsGetRequest
        {
            OrganizationsId = "some example string",
            InstancesId = "some example string",
            AttachmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1InstanceAttachment
}
catch (ApiException<ApigeeOrganizationsInstancesAttachmentsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesAttachmentsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesAttachmentsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1InstanceAttachment](src/Apigee/Models/GoogleCloudApigeeV1InstanceAttachment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesAttachmentsGetError](src/Apigee/Errors/ApigeeOrganizationsInstancesAttachmentsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListInstanceAttachmentsResponse&gt; ApigeeOrganizationsInstancesAttachmentsList(ApigeeOrganizationsInstancesAttachmentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all attachments to an instance. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesAttachmentsList(
        new ApigeeOrganizationsInstancesAttachmentsListRequest
        {
            OrganizationsId = "some example string",
            InstancesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListInstanceAttachmentsResponse
}
catch (ApiException<ApigeeOrganizationsInstancesAttachmentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesAttachmentsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesAttachmentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListInstanceAttachmentsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListInstanceAttachmentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesAttachmentsListError](src/Apigee/Errors/ApigeeOrganizationsInstancesAttachmentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsInstancesCanaryevaluationsCreate(ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new canary evaluation for an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesCanaryevaluationsCreate(
        new ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest
        {
            OrganizationsId = "some example string",
            InstancesId = "some example string",
            Body = new GoogleCloudApigeeV1CanaryEvaluation(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsInstancesCanaryevaluationsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesCanaryevaluationsCreateError](src/Apigee/Errors/ApigeeOrganizationsInstancesCanaryevaluationsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1CanaryEvaluation&gt; ApigeeOrganizationsInstancesCanaryevaluationsGet(ApigeeOrganizationsInstancesCanaryevaluationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a CanaryEvaluation for an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesCanaryevaluationsGet(
        new ApigeeOrganizationsInstancesCanaryevaluationsGetRequest
        {
            OrganizationsId = "some example string",
            InstancesId = "some example string",
            CanaryevaluationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1CanaryEvaluation
}
catch (ApiException<ApigeeOrganizationsInstancesCanaryevaluationsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesCanaryevaluationsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesCanaryevaluationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1CanaryEvaluation](src/Apigee/Models/GoogleCloudApigeeV1CanaryEvaluation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesCanaryevaluationsGetError](src/Apigee/Errors/ApigeeOrganizationsInstancesCanaryevaluationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsInstancesCreate(ApigeeOrganizationsInstancesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Apigee runtime instance. The instance is accessible from the authorized network configured on the organization. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesCreate(
        new ApigeeOrganizationsInstancesCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1Instance(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsInstancesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesCreateError](src/Apigee/Errors/ApigeeOrganizationsInstancesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsInstancesDelete(ApigeeOrganizationsInstancesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Apigee runtime instance. The instance stops serving requests and the runtime data is deleted. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesDelete(
        new ApigeeOrganizationsInstancesDeleteRequest
        {
            OrganizationsId = "some example string",
            InstancesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsInstancesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesDeleteError](src/Apigee/Errors/ApigeeOrganizationsInstancesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Instance&gt; ApigeeOrganizationsInstancesGet(ApigeeOrganizationsInstancesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the details for an Apigee runtime instance. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesGet(new ApigeeOrganizationsInstancesGetRequest
    {
        OrganizationsId = "some example string",
        InstancesId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Instance
}
catch (ApiException<ApigeeOrganizationsInstancesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Instance](src/Apigee/Models/GoogleCloudApigeeV1Instance.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesGetError](src/Apigee/Errors/ApigeeOrganizationsInstancesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListInstancesResponse&gt; ApigeeOrganizationsInstancesList(ApigeeOrganizationsInstancesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all Apigee runtime instances for the organization. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesList(
        new ApigeeOrganizationsInstancesListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListInstancesResponse
}
catch (ApiException<ApigeeOrganizationsInstancesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListInstancesResponse](src/Apigee/Models/GoogleCloudApigeeV1ListInstancesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesListError](src/Apigee/Errors/ApigeeOrganizationsInstancesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsInstancesNatAddressesActivate(ApigeeOrganizationsInstancesNatAddressesActivateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates the NAT address. The Apigee instance can now use this for Internet egress traffic. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesNatAddressesActivate(
        new ApigeeOrganizationsInstancesNatAddressesActivateRequest
        {
            OrganizationsId = "some example string",
            InstancesId = "some example string",
            NatAddressesId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsInstancesNatAddressesActivateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesNatAddressesActivateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesNatAddressesActivateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesNatAddressesActivateError](src/Apigee/Errors/ApigeeOrganizationsInstancesNatAddressesActivateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsInstancesNatAddressesCreate(ApigeeOrganizationsInstancesNatAddressesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a NAT address. The address is created in the RESERVED state and a static external IP address will be provisioned. At this time, the instance will not use this IP address for Internet egress traffic. The address can be activated for use once any required firewall IP whitelisting has been completed. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesNatAddressesCreate(
        new ApigeeOrganizationsInstancesNatAddressesCreateRequest
        {
            OrganizationsId = "some example string",
            InstancesId = "some example string",
            Body = new GoogleCloudApigeeV1NatAddress(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsInstancesNatAddressesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesNatAddressesCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesNatAddressesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesNatAddressesCreateError](src/Apigee/Errors/ApigeeOrganizationsInstancesNatAddressesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsInstancesNatAddressesDelete(ApigeeOrganizationsInstancesNatAddressesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the NAT address. Connections that are actively using the address are drained before it is removed. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesNatAddressesDelete(
        new ApigeeOrganizationsInstancesNatAddressesDeleteRequest
        {
            OrganizationsId = "some example string",
            InstancesId = "some example string",
            NatAddressesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsInstancesNatAddressesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesNatAddressesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesNatAddressesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesNatAddressesDeleteError](src/Apigee/Errors/ApigeeOrganizationsInstancesNatAddressesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1NatAddress&gt; ApigeeOrganizationsInstancesNatAddressesGet(ApigeeOrganizationsInstancesNatAddressesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the details of a NAT address. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesNatAddressesGet(
        new ApigeeOrganizationsInstancesNatAddressesGetRequest
        {
            OrganizationsId = "some example string",
            InstancesId = "some example string",
            NatAddressesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1NatAddress
}
catch (ApiException<ApigeeOrganizationsInstancesNatAddressesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesNatAddressesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesNatAddressesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1NatAddress](src/Apigee/Models/GoogleCloudApigeeV1NatAddress.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesNatAddressesGetError](src/Apigee/Errors/ApigeeOrganizationsInstancesNatAddressesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListNatAddressesResponse&gt; ApigeeOrganizationsInstancesNatAddressesList(ApigeeOrganizationsInstancesNatAddressesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the NAT addresses for an Apigee instance. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesNatAddressesList(
        new ApigeeOrganizationsInstancesNatAddressesListRequest
        {
            OrganizationsId = "some example string",
            InstancesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListNatAddressesResponse
}
catch (ApiException<ApigeeOrganizationsInstancesNatAddressesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesNatAddressesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesNatAddressesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListNatAddressesResponse](src/Apigee/Models/GoogleCloudApigeeV1ListNatAddressesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesNatAddressesListError](src/Apigee/Errors/ApigeeOrganizationsInstancesNatAddressesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsInstancesPatch(ApigeeOrganizationsInstancesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an Apigee runtime instance. You can update the fields described in NodeConfig. No other fields will be updated. **Note:** Not supported for Apigee hybrid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesPatch(
        new ApigeeOrganizationsInstancesPatchRequest
        {
            OrganizationsId = "some example string",
            InstancesId = "some example string",
            Body = new GoogleCloudApigeeV1Instance(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsInstancesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesPatchRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesPatchError](src/Apigee/Errors/ApigeeOrganizationsInstancesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsInstancesReportStatus(ApigeeOrganizationsInstancesReportStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reports the latest status for a runtime instance.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsInstancesReportStatus(
        new ApigeeOrganizationsInstancesReportStatusRequest
        {
            OrganizationsId = "some example string",
            InstancesId = "some example string",
            Body = new GoogleCloudApigeeV1ReportInstanceStatusRequest(),
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsInstancesReportStatusError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsInstancesReportStatusRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesReportStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsInstancesReportStatusError](src/Apigee/Errors/ApigeeOrganizationsInstancesReportStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueMap&gt; ApigeeOrganizationsKeyvaluemapsCreate(ApigeeOrganizationsKeyvaluemapsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a key value map in an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsKeyvaluemapsCreate(
        new ApigeeOrganizationsKeyvaluemapsCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1KeyValueMap(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueMap
}
catch (ApiException<ApigeeOrganizationsKeyvaluemapsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsKeyvaluemapsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueMap](src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsKeyvaluemapsCreateError](src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueMap&gt; ApigeeOrganizationsKeyvaluemapsDelete(ApigeeOrganizationsKeyvaluemapsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a key value map from an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsKeyvaluemapsDelete(
        new ApigeeOrganizationsKeyvaluemapsDeleteRequest
        {
            OrganizationsId = "some example string",
            KeyvaluemapsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueMap
}
catch (ApiException<ApigeeOrganizationsKeyvaluemapsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsKeyvaluemapsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueMap](src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsKeyvaluemapsDeleteError](src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueEntry&gt; ApigeeOrganizationsKeyvaluemapsEntriesCreate(ApigeeOrganizationsKeyvaluemapsEntriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsKeyvaluemapsEntriesCreate(
        new ApigeeOrganizationsKeyvaluemapsEntriesCreateRequest
        {
            OrganizationsId = "some example string",
            KeyvaluemapsId = "some example string",
            Body = new GoogleCloudApigeeV1KeyValueEntry(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueEntry
}
catch (ApiException<ApigeeOrganizationsKeyvaluemapsEntriesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsKeyvaluemapsEntriesCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsEntriesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueEntry](src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsKeyvaluemapsEntriesCreateError](src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsEntriesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueEntry&gt; ApigeeOrganizationsKeyvaluemapsEntriesDelete(ApigeeOrganizationsKeyvaluemapsEntriesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a key value entry from a key value map scoped to an organization, environment, or API proxy. **Notes:** * After you delete the key value entry, the policy consuming the entry will continue to function with its cached values for a few minutes. This is expected behavior. * Supported for Apigee hybrid 1.8.x and higher.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsKeyvaluemapsEntriesDelete(
        new ApigeeOrganizationsKeyvaluemapsEntriesDeleteRequest
        {
            OrganizationsId = "some example string",
            KeyvaluemapsId = "some example string",
            EntriesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueEntry
}
catch (ApiException<ApigeeOrganizationsKeyvaluemapsEntriesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsKeyvaluemapsEntriesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsEntriesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueEntry](src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsKeyvaluemapsEntriesDeleteError](src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsEntriesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueEntry&gt; ApigeeOrganizationsKeyvaluemapsEntriesGet(ApigeeOrganizationsKeyvaluemapsEntriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the key value entry value for a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsKeyvaluemapsEntriesGet(
        new ApigeeOrganizationsKeyvaluemapsEntriesGetRequest
        {
            OrganizationsId = "some example string",
            KeyvaluemapsId = "some example string",
            EntriesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueEntry
}
catch (ApiException<ApigeeOrganizationsKeyvaluemapsEntriesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsKeyvaluemapsEntriesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsEntriesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueEntry](src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsKeyvaluemapsEntriesGetError](src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsEntriesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListKeyValueEntriesResponse&gt; ApigeeOrganizationsKeyvaluemapsEntriesList(ApigeeOrganizationsKeyvaluemapsEntriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsKeyvaluemapsEntriesList(
        new ApigeeOrganizationsKeyvaluemapsEntriesListRequest
        {
            OrganizationsId = "some example string",
            KeyvaluemapsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListKeyValueEntriesResponse
}
catch (ApiException<ApigeeOrganizationsKeyvaluemapsEntriesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsKeyvaluemapsEntriesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsEntriesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListKeyValueEntriesResponse](src/Apigee/Models/GoogleCloudApigeeV1ListKeyValueEntriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsKeyvaluemapsEntriesListError](src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsEntriesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueEntry&gt; ApigeeOrganizationsKeyvaluemapsEntriesUpdate(ApigeeOrganizationsKeyvaluemapsEntriesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update key value entry scoped to an organization, environment, or API proxy for an existing key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsKeyvaluemapsEntriesUpdate(
        new ApigeeOrganizationsKeyvaluemapsEntriesUpdateRequest
        {
            OrganizationsId = "some example string",
            KeyvaluemapsId = "some example string",
            EntriesId = "some example string",
            Body = new GoogleCloudApigeeV1KeyValueEntry(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueEntry
}
catch (ApiException<ApigeeOrganizationsKeyvaluemapsEntriesUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsKeyvaluemapsEntriesUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsEntriesUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueEntry](src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsKeyvaluemapsEntriesUpdateError](src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsEntriesUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueMap&gt; ApigeeOrganizationsKeyvaluemapsGet(ApigeeOrganizationsKeyvaluemapsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the key value map scoped to an organization, environment, or API proxy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsKeyvaluemapsGet(
        new ApigeeOrganizationsKeyvaluemapsGetRequest
        {
            OrganizationsId = "some example string",
            KeyvaluemapsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueMap
}
catch (ApiException<ApigeeOrganizationsKeyvaluemapsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsKeyvaluemapsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueMap](src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsKeyvaluemapsGetError](src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1KeyValueMap&gt; ApigeeOrganizationsKeyvaluemapsUpdate(ApigeeOrganizationsKeyvaluemapsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the key value map scoped to an organization, environment, or API proxy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsKeyvaluemapsUpdate(
        new ApigeeOrganizationsKeyvaluemapsUpdateRequest
        {
            OrganizationsId = "some example string",
            KeyvaluemapsId = "some example string",
            Body = new GoogleCloudApigeeV1KeyValueMap(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1KeyValueMap
}
catch (ApiException<ApigeeOrganizationsKeyvaluemapsUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsKeyvaluemapsUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1KeyValueMap](src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsKeyvaluemapsUpdateError](src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListOrganizationsResponse&gt; ApigeeOrganizationsList(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the Apigee organizations and associated Google Cloud projects that you have permission to access. See Understanding organizations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsList();
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListOrganizationsResponse
}
catch (ApiException<ApigeeOrganizationsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListOrganizationsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListOrganizationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsListError](src/Apigee/Errors/ApigeeOrganizationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsOperationsGet(ApigeeOrganizationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsOperationsGet(
        new ApigeeOrganizationsOperationsGetRequest
        {
            OrganizationsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsOperationsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsOperationsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsOperationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsOperationsGetError](src/Apigee/Errors/ApigeeOrganizationsOperationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningListOperationsResponse&gt; ApigeeOrganizationsOperationsList(ApigeeOrganizationsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsOperationsList(
        new ApigeeOrganizationsOperationsListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleLongrunningListOperationsResponse
}
catch (ApiException<ApigeeOrganizationsOperationsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsOperationsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsOperationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningListOperationsResponse](src/Apigee/Models/GoogleLongrunningListOperationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsOperationsListError](src/Apigee/Errors/ApigeeOrganizationsOperationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1OptimizedStats&gt; ApigeeOrganizationsOptimizedHostStatsGet(ApigeeOrganizationsOptimizedHostStatsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Similar to GetHostStats except that the response is less verbose.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsOptimizedHostStatsGet(
        new ApigeeOrganizationsOptimizedHostStatsGetRequest
        {
            OrganizationsId = "some example string",
            OptimizedHostStatsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1OptimizedStats
}
catch (ApiException<ApigeeOrganizationsOptimizedHostStatsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsOptimizedHostStatsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsOptimizedHostStatsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1OptimizedStats](src/Apigee/Models/GoogleCloudApigeeV1OptimizedStats.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsOptimizedHostStatsGetError](src/Apigee/Errors/ApigeeOrganizationsOptimizedHostStatsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1CustomReport&gt; ApigeeOrganizationsReportsCreate(ApigeeOrganizationsReportsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Custom Report for an Organization. A Custom Report provides Apigee Customers to create custom dashboards in addition to the standard dashboards which are provided. The Custom Report in its simplest form contains specifications about metrics, dimensions and filters. It is important to note that the custom report by itself does not provide an executable entity. The Edge UI converts the custom report definition into an analytics query and displays the result in a chart.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsReportsCreate(
        new ApigeeOrganizationsReportsCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1CustomReport(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1CustomReport
}
catch (ApiException<ApigeeOrganizationsReportsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsReportsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsReportsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1CustomReport](src/Apigee/Models/GoogleCloudApigeeV1CustomReport.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsReportsCreateError](src/Apigee/Errors/ApigeeOrganizationsReportsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeleteCustomReportResponse&gt; ApigeeOrganizationsReportsDelete(ApigeeOrganizationsReportsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an existing custom report definition

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsReportsDelete(
        new ApigeeOrganizationsReportsDeleteRequest
        {
            OrganizationsId = "some example string",
            ReportsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeleteCustomReportResponse
}
catch (ApiException<ApigeeOrganizationsReportsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsReportsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsReportsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeleteCustomReportResponse](src/Apigee/Models/GoogleCloudApigeeV1DeleteCustomReportResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsReportsDeleteError](src/Apigee/Errors/ApigeeOrganizationsReportsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1CustomReport&gt; ApigeeOrganizationsReportsGet(ApigeeOrganizationsReportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a custom report definition.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsReportsGet(new ApigeeOrganizationsReportsGetRequest
    {
        OrganizationsId = "some example string",
        ReportsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1CustomReport
}
catch (ApiException<ApigeeOrganizationsReportsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsReportsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsReportsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1CustomReport](src/Apigee/Models/GoogleCloudApigeeV1CustomReport.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsReportsGetError](src/Apigee/Errors/ApigeeOrganizationsReportsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListCustomReportsResponse&gt; ApigeeOrganizationsReportsList(ApigeeOrganizationsReportsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a list of Custom Reports

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsReportsList(new ApigeeOrganizationsReportsListRequest
    {
        OrganizationsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListCustomReportsResponse
}
catch (ApiException<ApigeeOrganizationsReportsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsReportsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsReportsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListCustomReportsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListCustomReportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsReportsListError](src/Apigee/Errors/ApigeeOrganizationsReportsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1CustomReport&gt; ApigeeOrganizationsReportsUpdate(ApigeeOrganizationsReportsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing custom report definition

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsReportsUpdate(
        new ApigeeOrganizationsReportsUpdateRequest
        {
            OrganizationsId = "some example string",
            ReportsId = "some example string",
            Body = new GoogleCloudApigeeV1CustomReport(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1CustomReport
}
catch (ApiException<ApigeeOrganizationsReportsUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsReportsUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsReportsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1CustomReport](src/Apigee/Models/GoogleCloudApigeeV1CustomReport.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsReportsUpdateError](src/Apigee/Errors/ApigeeOrganizationsReportsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse&gt; ApigeeOrganizationsSecurityAssessmentResultsBatchCompute(ApigeeOrganizationsSecurityAssessmentResultsBatchComputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compute RAV2 security scores for a set of resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityAssessmentResultsBatchCompute(
        new ApigeeOrganizationsSecurityAssessmentResultsBatchComputeRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequest(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse
}
catch (ApiException<ApigeeOrganizationsSecurityAssessmentResultsBatchComputeError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityAssessmentResultsBatchComputeRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityAssessmentResultsBatchComputeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse](src/Apigee/Models/GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityAssessmentResultsBatchComputeError](src/Apigee/Errors/ApigeeOrganizationsSecurityAssessmentResultsBatchComputeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityFeedback&gt; ApigeeOrganizationsSecurityFeedbackCreate(ApigeeOrganizationsSecurityFeedbackCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new report containing customer feedback.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityFeedbackCreate(
        new ApigeeOrganizationsSecurityFeedbackCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1SecurityFeedback(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityFeedback
}
catch (ApiException<ApigeeOrganizationsSecurityFeedbackCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityFeedbackCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityFeedbackCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityFeedback](src/Apigee/Models/GoogleCloudApigeeV1SecurityFeedback.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityFeedbackCreateError](src/Apigee/Errors/ApigeeOrganizationsSecurityFeedbackCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsSecurityFeedbackDelete(ApigeeOrganizationsSecurityFeedbackDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific feedback report. Used for "undo" of a feedback submission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityFeedbackDelete(
        new ApigeeOrganizationsSecurityFeedbackDeleteRequest
        {
            OrganizationsId = "some example string",
            SecurityFeedbackId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsSecurityFeedbackDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityFeedbackDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityFeedbackDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityFeedbackDeleteError](src/Apigee/Errors/ApigeeOrganizationsSecurityFeedbackDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityFeedback&gt; ApigeeOrganizationsSecurityFeedbackGet(ApigeeOrganizationsSecurityFeedbackGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a specific customer feedback report.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityFeedbackGet(
        new ApigeeOrganizationsSecurityFeedbackGetRequest
        {
            OrganizationsId = "some example string",
            SecurityFeedbackId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityFeedback
}
catch (ApiException<ApigeeOrganizationsSecurityFeedbackGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityFeedbackGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityFeedbackGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityFeedback](src/Apigee/Models/GoogleCloudApigeeV1SecurityFeedback.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityFeedbackGetError](src/Apigee/Errors/ApigeeOrganizationsSecurityFeedbackGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListSecurityFeedbackResponse&gt; ApigeeOrganizationsSecurityFeedbackList(ApigeeOrganizationsSecurityFeedbackListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all feedback reports which have already been submitted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityFeedbackList(
        new ApigeeOrganizationsSecurityFeedbackListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListSecurityFeedbackResponse
}
catch (ApiException<ApigeeOrganizationsSecurityFeedbackListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityFeedbackListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityFeedbackListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListSecurityFeedbackResponse](src/Apigee/Models/GoogleCloudApigeeV1ListSecurityFeedbackResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityFeedbackListError](src/Apigee/Errors/ApigeeOrganizationsSecurityFeedbackListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityFeedback&gt; ApigeeOrganizationsSecurityFeedbackPatch(ApigeeOrganizationsSecurityFeedbackPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a specific feedback report.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityFeedbackPatch(
        new ApigeeOrganizationsSecurityFeedbackPatchRequest
        {
            OrganizationsId = "some example string",
            SecurityFeedbackId = "some example string",
            Body = new GoogleCloudApigeeV1SecurityFeedback(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityFeedback
}
catch (ApiException<ApigeeOrganizationsSecurityFeedbackPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityFeedbackPatchRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityFeedbackPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityFeedback](src/Apigee/Models/GoogleCloudApigeeV1SecurityFeedback.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityFeedbackPatchError](src/Apigee/Errors/ApigeeOrganizationsSecurityFeedbackPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityMonitoringCondition&gt; ApigeeOrganizationsSecurityMonitoringConditionsCreate(ApigeeOrganizationsSecurityMonitoringConditionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a security monitoring condition.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityMonitoringConditionsCreate(
        new ApigeeOrganizationsSecurityMonitoringConditionsCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1SecurityMonitoringCondition(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityMonitoringCondition
}
catch (ApiException<ApigeeOrganizationsSecurityMonitoringConditionsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityMonitoringConditionsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityMonitoringConditionsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityMonitoringCondition](src/Apigee/Models/GoogleCloudApigeeV1SecurityMonitoringCondition.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityMonitoringConditionsCreateError](src/Apigee/Errors/ApigeeOrganizationsSecurityMonitoringConditionsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsSecurityMonitoringConditionsDelete(ApigeeOrganizationsSecurityMonitoringConditionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a security monitoring condition.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityMonitoringConditionsDelete(
        new ApigeeOrganizationsSecurityMonitoringConditionsDeleteRequest
        {
            OrganizationsId = "some example string",
            SecurityMonitoringConditionsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsSecurityMonitoringConditionsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityMonitoringConditionsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityMonitoringConditionsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityMonitoringConditionsDeleteError](src/Apigee/Errors/ApigeeOrganizationsSecurityMonitoringConditionsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityMonitoringCondition&gt; ApigeeOrganizationsSecurityMonitoringConditionsGet(ApigeeOrganizationsSecurityMonitoringConditionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a security monitoring condition.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityMonitoringConditionsGet(
        new ApigeeOrganizationsSecurityMonitoringConditionsGetRequest
        {
            OrganizationsId = "some example string",
            SecurityMonitoringConditionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityMonitoringCondition
}
catch (ApiException<ApigeeOrganizationsSecurityMonitoringConditionsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityMonitoringConditionsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityMonitoringConditionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityMonitoringCondition](src/Apigee/Models/GoogleCloudApigeeV1SecurityMonitoringCondition.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityMonitoringConditionsGetError](src/Apigee/Errors/ApigeeOrganizationsSecurityMonitoringConditionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse&gt; ApigeeOrganizationsSecurityMonitoringConditionsList(ApigeeOrganizationsSecurityMonitoringConditionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List security monitoring conditions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityMonitoringConditionsList(
        new ApigeeOrganizationsSecurityMonitoringConditionsListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse
}
catch (ApiException<ApigeeOrganizationsSecurityMonitoringConditionsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityMonitoringConditionsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityMonitoringConditionsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityMonitoringConditionsListError](src/Apigee/Errors/ApigeeOrganizationsSecurityMonitoringConditionsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityMonitoringCondition&gt; ApigeeOrganizationsSecurityMonitoringConditionsPatch(ApigeeOrganizationsSecurityMonitoringConditionsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a security monitoring condition.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityMonitoringConditionsPatch(
        new ApigeeOrganizationsSecurityMonitoringConditionsPatchRequest
        {
            OrganizationsId = "some example string",
            SecurityMonitoringConditionsId = "some example string",
            Body = new GoogleCloudApigeeV1SecurityMonitoringCondition(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityMonitoringCondition
}
catch (ApiException<ApigeeOrganizationsSecurityMonitoringConditionsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityMonitoringConditionsPatchRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityMonitoringConditionsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityMonitoringCondition](src/Apigee/Models/GoogleCloudApigeeV1SecurityMonitoringCondition.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityMonitoringConditionsPatchError](src/Apigee/Errors/ApigeeOrganizationsSecurityMonitoringConditionsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityProfile&gt; ApigeeOrganizationsSecurityProfilesCreate(ApigeeOrganizationsSecurityProfilesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

CreateSecurityProfile create a new custom security profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityProfilesCreate(
        new ApigeeOrganizationsSecurityProfilesCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1SecurityProfile(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityProfile
}
catch (ApiException<ApigeeOrganizationsSecurityProfilesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityProfilesCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityProfile](src/Apigee/Models/GoogleCloudApigeeV1SecurityProfile.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityProfilesCreateError](src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsSecurityProfilesDelete(ApigeeOrganizationsSecurityProfilesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DeleteSecurityProfile delete a profile with all its revisions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityProfilesDelete(
        new ApigeeOrganizationsSecurityProfilesDeleteRequest
        {
            OrganizationsId = "some example string",
            SecurityProfilesId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsSecurityProfilesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityProfilesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityProfilesDeleteError](src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ComputeEnvironmentScoresResponse&gt; ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScores(ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ComputeEnvironmentScores calculates scores for requested time range for the specified security profile and environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScores(
        new ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest
        {
            OrganizationsId = "some example string",
            SecurityProfilesId = "some example string",
            EnvironmentsId = "some example string",
            Body = new GoogleCloudApigeeV1ComputeEnvironmentScoresRequest(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ComputeEnvironmentScoresResponse
}
catch (ApiException<ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ComputeEnvironmentScoresResponse](src/Apigee/Models/GoogleCloudApigeeV1ComputeEnvironmentScoresResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresError](src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation&gt; ApigeeOrganizationsSecurityProfilesEnvironmentsCreate(ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

CreateSecurityProfileEnvironmentAssociation creates profile environment association i.e. attaches environment to security profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityProfilesEnvironmentsCreate(
        new ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest
        {
            OrganizationsId = "some example string",
            SecurityProfilesId = "some example string",
            Body = new GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation
}
catch (ApiException<ApigeeOrganizationsSecurityProfilesEnvironmentsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation](src/Apigee/Models/GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityProfilesEnvironmentsCreateError](src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesEnvironmentsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsSecurityProfilesEnvironmentsDelete(ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DeleteSecurityProfileEnvironmentAssociation removes profile environment association i.e. detaches environment from security profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityProfilesEnvironmentsDelete(
        new ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteRequest
        {
            OrganizationsId = "some example string",
            SecurityProfilesId = "some example string",
            EnvironmentsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteError](src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityProfile&gt; ApigeeOrganizationsSecurityProfilesGet(ApigeeOrganizationsSecurityProfilesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

GetSecurityProfile gets the specified security profile. Returns NOT_FOUND if security profile is not present for the specified organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityProfilesGet(
        new ApigeeOrganizationsSecurityProfilesGetRequest
        {
            OrganizationsId = "some example string",
            SecurityProfilesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityProfile
}
catch (ApiException<ApigeeOrganizationsSecurityProfilesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityProfilesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityProfile](src/Apigee/Models/GoogleCloudApigeeV1SecurityProfile.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityProfilesGetError](src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListSecurityProfilesResponse&gt; ApigeeOrganizationsSecurityProfilesList(ApigeeOrganizationsSecurityProfilesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ListSecurityProfiles lists all the security profiles associated with the org including attached and unattached profiles.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityProfilesList(
        new ApigeeOrganizationsSecurityProfilesListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListSecurityProfilesResponse
}
catch (ApiException<ApigeeOrganizationsSecurityProfilesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityProfilesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListSecurityProfilesResponse](src/Apigee/Models/GoogleCloudApigeeV1ListSecurityProfilesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityProfilesListError](src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse&gt; ApigeeOrganizationsSecurityProfilesListRevisions(ApigeeOrganizationsSecurityProfilesListRevisionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ListSecurityProfileRevisions lists all the revisions of the security profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityProfilesListRevisions(
        new ApigeeOrganizationsSecurityProfilesListRevisionsRequest
        {
            OrganizationsId = "some example string",
            SecurityProfilesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse
}
catch (ApiException<ApigeeOrganizationsSecurityProfilesListRevisionsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityProfilesListRevisionsRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesListRevisionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityProfilesListRevisionsError](src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesListRevisionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityProfile&gt; ApigeeOrganizationsSecurityProfilesPatch(ApigeeOrganizationsSecurityProfilesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

UpdateSecurityProfile update the metadata of security profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityProfilesPatch(
        new ApigeeOrganizationsSecurityProfilesPatchRequest
        {
            OrganizationsId = "some example string",
            SecurityProfilesId = "some example string",
            Body = new GoogleCloudApigeeV1SecurityProfile(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityProfile
}
catch (ApiException<ApigeeOrganizationsSecurityProfilesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityProfilesPatchRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityProfile](src/Apigee/Models/GoogleCloudApigeeV1SecurityProfile.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityProfilesPatchError](src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityProfileV2&gt; ApigeeOrganizationsSecurityProfilesV2Create(ApigeeOrganizationsSecurityProfilesV2CreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a security profile v2.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityProfilesV2Create(
        new ApigeeOrganizationsSecurityProfilesV2CreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1SecurityProfileV2(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityProfileV2
}
catch (ApiException<ApigeeOrganizationsSecurityProfilesV2CreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityProfilesV2CreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesV2CreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityProfileV2](src/Apigee/Models/GoogleCloudApigeeV1SecurityProfileV2.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityProfilesV2CreateError](src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesV2CreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsSecurityProfilesV2Delete(ApigeeOrganizationsSecurityProfilesV2DeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a security profile v2.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityProfilesV2Delete(
        new ApigeeOrganizationsSecurityProfilesV2DeleteRequest
        {
            OrganizationsId = "some example string",
            SecurityProfilesV2Id = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsSecurityProfilesV2DeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityProfilesV2DeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesV2DeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityProfilesV2DeleteError](src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesV2DeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityProfileV2&gt; ApigeeOrganizationsSecurityProfilesV2Get(ApigeeOrganizationsSecurityProfilesV2GetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a security profile v2.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityProfilesV2Get(
        new ApigeeOrganizationsSecurityProfilesV2GetRequest
        {
            OrganizationsId = "some example string",
            SecurityProfilesV2Id = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityProfileV2
}
catch (ApiException<ApigeeOrganizationsSecurityProfilesV2GetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityProfilesV2GetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesV2GetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityProfileV2](src/Apigee/Models/GoogleCloudApigeeV1SecurityProfileV2.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityProfilesV2GetError](src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesV2GetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListSecurityProfilesV2Response&gt; ApigeeOrganizationsSecurityProfilesV2List(ApigeeOrganizationsSecurityProfilesV2ListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List security profiles v2.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityProfilesV2List(
        new ApigeeOrganizationsSecurityProfilesV2ListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListSecurityProfilesV2Response
}
catch (ApiException<ApigeeOrganizationsSecurityProfilesV2ListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityProfilesV2ListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesV2ListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListSecurityProfilesV2Response](src/Apigee/Models/GoogleCloudApigeeV1ListSecurityProfilesV2Response.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityProfilesV2ListError](src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesV2ListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecurityProfileV2&gt; ApigeeOrganizationsSecurityProfilesV2Patch(ApigeeOrganizationsSecurityProfilesV2PatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a security profile V2.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSecurityProfilesV2Patch(
        new ApigeeOrganizationsSecurityProfilesV2PatchRequest
        {
            OrganizationsId = "some example string",
            SecurityProfilesV2Id = "some example string",
            Body = new GoogleCloudApigeeV1SecurityProfileV2(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecurityProfileV2
}
catch (ApiException<ApigeeOrganizationsSecurityProfilesV2PatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSecurityProfilesV2PatchRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesV2PatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecurityProfileV2](src/Apigee/Models/GoogleCloudApigeeV1SecurityProfileV2.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSecurityProfilesV2PatchError](src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesV2PatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsSetAddons(ApigeeOrganizationsSetAddonsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Configures the add-ons for the Apigee organization. The existing add-on configuration will be fully replaced.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSetAddons(new ApigeeOrganizationsSetAddonsRequest
    {
        OrganizationsId = "some example string",
        Body = new GoogleCloudApigeeV1SetAddonsRequest(),
    });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsSetAddonsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSetAddonsRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSetAddonsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSetAddonsError](src/Apigee/Errors/ApigeeOrganizationsSetAddonsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SyncAuthorization&gt; ApigeeOrganizationsSetSyncAuthorization(ApigeeOrganizationsSetSyncAuthorizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the permissions required to allow the Synchronizer to download environment data from the control plane. You must call this API to enable proper functioning of hybrid. Pass the ETag when calling `setSyncAuthorization` to ensure that you are updating the correct version. To get an ETag, call getSyncAuthorization. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see Configure the Synchronizer. **Note**: Available to Apigee hybrid only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSetSyncAuthorization(
        new ApigeeOrganizationsSetSyncAuthorizationRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1SyncAuthorization(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SyncAuthorization
}
catch (ApiException<ApigeeOrganizationsSetSyncAuthorizationError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSetSyncAuthorizationRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSetSyncAuthorizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SyncAuthorization](src/Apigee/Models/GoogleCloudApigeeV1SyncAuthorization.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSetSyncAuthorizationError](src/Apigee/Errors/ApigeeOrganizationsSetSyncAuthorizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SharedFlowRevision&gt; ApigeeOrganizationsSharedflowsCreate(ApigeeOrganizationsSharedflowsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a ZIP-formatted shared flow configuration bundle to an organization. If the shared flow already exists, this creates a new revision of it. If the shared flow does not exist, this creates it. Once imported, the shared flow revision must be deployed before it can be accessed at runtime. The size limit of a shared flow bundle is 15 MB.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSharedflowsCreate(
        new ApigeeOrganizationsSharedflowsCreateRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleApiHttpBody(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SharedFlowRevision
}
catch (ApiException<ApigeeOrganizationsSharedflowsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSharedflowsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SharedFlowRevision](src/Apigee/Models/GoogleCloudApigeeV1SharedFlowRevision.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSharedflowsCreateError](src/Apigee/Errors/ApigeeOrganizationsSharedflowsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SharedFlow&gt; ApigeeOrganizationsSharedflowsDelete(ApigeeOrganizationsSharedflowsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a shared flow and all it's revisions. The shared flow must be undeployed before you can delete it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSharedflowsDelete(
        new ApigeeOrganizationsSharedflowsDeleteRequest
        {
            OrganizationsId = "some example string",
            SharedflowsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SharedFlow
}
catch (ApiException<ApigeeOrganizationsSharedflowsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSharedflowsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SharedFlow](src/Apigee/Models/GoogleCloudApigeeV1SharedFlow.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSharedflowsDeleteError](src/Apigee/Errors/ApigeeOrganizationsSharedflowsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListDeploymentsResponse&gt; ApigeeOrganizationsSharedflowsDeploymentsList(ApigeeOrganizationsSharedflowsDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all deployments of a shared flow.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSharedflowsDeploymentsList(
        new ApigeeOrganizationsSharedflowsDeploymentsListRequest
        {
            OrganizationsId = "some example string",
            SharedflowsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListDeploymentsResponse
}
catch (ApiException<ApigeeOrganizationsSharedflowsDeploymentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSharedflowsDeploymentsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsDeploymentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListDeploymentsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSharedflowsDeploymentsListError](src/Apigee/Errors/ApigeeOrganizationsSharedflowsDeploymentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SharedFlow&gt; ApigeeOrganizationsSharedflowsGet(ApigeeOrganizationsSharedflowsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a shared flow by name, including a list of its revisions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSharedflowsGet(
        new ApigeeOrganizationsSharedflowsGetRequest
        {
            OrganizationsId = "some example string",
            SharedflowsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SharedFlow
}
catch (ApiException<ApigeeOrganizationsSharedflowsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSharedflowsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SharedFlow](src/Apigee/Models/GoogleCloudApigeeV1SharedFlow.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSharedflowsGetError](src/Apigee/Errors/ApigeeOrganizationsSharedflowsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListSharedFlowsResponse&gt; ApigeeOrganizationsSharedflowsList(ApigeeOrganizationsSharedflowsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all shared flows in the organization. If the resource has the `space` attribute set, the response may not return all resources. To learn more, read the Apigee Spaces Overview.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSharedflowsList(
        new ApigeeOrganizationsSharedflowsListRequest { OrganizationsId = "some example string" });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListSharedFlowsResponse
}
catch (ApiException<ApigeeOrganizationsSharedflowsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSharedflowsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListSharedFlowsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListSharedFlowsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSharedflowsListError](src/Apigee/Errors/ApigeeOrganizationsSharedflowsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SharedFlow&gt; ApigeeOrganizationsSharedflowsMove(ApigeeOrganizationsSharedflowsMoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Moves an shared flow to a different space.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSharedflowsMove(
        new ApigeeOrganizationsSharedflowsMoveRequest
        {
            OrganizationsId = "some example string",
            SharedflowsId = "some example string",
            Body = new GoogleCloudApigeeV1MoveSharedFlowRequest(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SharedFlow
}
catch (ApiException<ApigeeOrganizationsSharedflowsMoveError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSharedflowsMoveRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsMoveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SharedFlow](src/Apigee/Models/GoogleCloudApigeeV1SharedFlow.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSharedflowsMoveError](src/Apigee/Errors/ApigeeOrganizationsSharedflowsMoveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SharedFlowRevision&gt; ApigeeOrganizationsSharedflowsRevisionsDelete(ApigeeOrganizationsSharedflowsRevisionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a shared flow and all associated policies, resources, and revisions. You must undeploy the shared flow before deleting it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSharedflowsRevisionsDelete(
        new ApigeeOrganizationsSharedflowsRevisionsDeleteRequest
        {
            OrganizationsId = "some example string",
            SharedflowsId = "some example string",
            RevisionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SharedFlowRevision
}
catch (ApiException<ApigeeOrganizationsSharedflowsRevisionsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSharedflowsRevisionsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsRevisionsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SharedFlowRevision](src/Apigee/Models/GoogleCloudApigeeV1SharedFlowRevision.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSharedflowsRevisionsDeleteError](src/Apigee/Errors/ApigeeOrganizationsSharedflowsRevisionsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListDeploymentsResponse&gt; ApigeeOrganizationsSharedflowsRevisionsDeploymentsList(ApigeeOrganizationsSharedflowsRevisionsDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all deployments of a shared flow revision.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSharedflowsRevisionsDeploymentsList(
        new ApigeeOrganizationsSharedflowsRevisionsDeploymentsListRequest
        {
            OrganizationsId = "some example string",
            SharedflowsId = "some example string",
            RevisionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListDeploymentsResponse
}
catch (ApiException<ApigeeOrganizationsSharedflowsRevisionsDeploymentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSharedflowsRevisionsDeploymentsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsRevisionsDeploymentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListDeploymentsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSharedflowsRevisionsDeploymentsListError](src/Apigee/Errors/ApigeeOrganizationsSharedflowsRevisionsDeploymentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleApiHttpBody&gt; ApigeeOrganizationsSharedflowsRevisionsGet(ApigeeOrganizationsSharedflowsRevisionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a revision of a shared flow. To download the shared flow configuration bundle for the specified revision as a zip file, set the `format` query parameter to `bundle`. If you are using curl, specify `-o filename.zip` to save the output to a file; otherwise, it displays to `stdout`. Then, develop the shared flow configuration locally and upload the updated sharedFlow configuration revision, as described in updateSharedFlowRevision.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSharedflowsRevisionsGet(
        new ApigeeOrganizationsSharedflowsRevisionsGetRequest
        {
            OrganizationsId = "some example string",
            SharedflowsId = "some example string",
            RevisionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleApiHttpBody
}
catch (ApiException<ApigeeOrganizationsSharedflowsRevisionsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSharedflowsRevisionsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsRevisionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleApiHttpBody](src/Apigee/Models/GoogleApiHttpBody.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSharedflowsRevisionsGetError](src/Apigee/Errors/ApigeeOrganizationsSharedflowsRevisionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SharedFlowRevision&gt; ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevision(ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a shared flow revision. This operation is only allowed on revisions which have never been deployed. After deployment a revision becomes immutable, even if it becomes undeployed. The payload is a ZIP-formatted shared flow. Content type must be either multipart/form-data or application/octet-stream.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevision(
        new ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionRequest
        {
            OrganizationsId = "some example string",
            SharedflowsId = "some example string",
            RevisionsId = "some example string",
            Body = new GoogleApiHttpBody(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SharedFlowRevision
}
catch (ApiException<ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SharedFlowRevision](src/Apigee/Models/GoogleCloudApigeeV1SharedFlowRevision.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionError](src/Apigee/Errors/ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiCategoryResponse&gt; ApigeeOrganizationsSitesApicategoriesCreate(ApigeeOrganizationsSitesApicategoriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new API category.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSitesApicategoriesCreate(
        new ApigeeOrganizationsSitesApicategoriesCreateRequest
        {
            OrganizationsId = "some example string",
            SitesId = "some example string",
            Body = new GoogleCloudApigeeV1ApiCategory(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiCategoryResponse
}
catch (ApiException<ApigeeOrganizationsSitesApicategoriesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSitesApicategoriesCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApicategoriesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiCategoryResponse](src/Apigee/Models/GoogleCloudApigeeV1ApiCategoryResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSitesApicategoriesCreateError](src/Apigee/Errors/ApigeeOrganizationsSitesApicategoriesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeleteResponse&gt; ApigeeOrganizationsSitesApicategoriesDelete(ApigeeOrganizationsSitesApicategoriesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an API category.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSitesApicategoriesDelete(
        new ApigeeOrganizationsSitesApicategoriesDeleteRequest
        {
            OrganizationsId = "some example string",
            SitesId = "some example string",
            ApicategoriesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeleteResponse
}
catch (ApiException<ApigeeOrganizationsSitesApicategoriesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSitesApicategoriesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApicategoriesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeleteResponse](src/Apigee/Models/GoogleCloudApigeeV1DeleteResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSitesApicategoriesDeleteError](src/Apigee/Errors/ApigeeOrganizationsSitesApicategoriesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiCategoryResponse&gt; ApigeeOrganizationsSitesApicategoriesGet(ApigeeOrganizationsSitesApicategoriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets an API category.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSitesApicategoriesGet(
        new ApigeeOrganizationsSitesApicategoriesGetRequest
        {
            OrganizationsId = "some example string",
            SitesId = "some example string",
            ApicategoriesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiCategoryResponse
}
catch (ApiException<ApigeeOrganizationsSitesApicategoriesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSitesApicategoriesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApicategoriesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiCategoryResponse](src/Apigee/Models/GoogleCloudApigeeV1ApiCategoryResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSitesApicategoriesGetError](src/Apigee/Errors/ApigeeOrganizationsSitesApicategoriesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListApiCategoriesResponse&gt; ApigeeOrganizationsSitesApicategoriesList(ApigeeOrganizationsSitesApicategoriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the API categories associated with a portal.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSitesApicategoriesList(
        new ApigeeOrganizationsSitesApicategoriesListRequest
        {
            OrganizationsId = "some example string",
            SitesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListApiCategoriesResponse
}
catch (ApiException<ApigeeOrganizationsSitesApicategoriesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSitesApicategoriesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApicategoriesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListApiCategoriesResponse](src/Apigee/Models/GoogleCloudApigeeV1ListApiCategoriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSitesApicategoriesListError](src/Apigee/Errors/ApigeeOrganizationsSitesApicategoriesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiCategoryResponse&gt; ApigeeOrganizationsSitesApicategoriesPatch(ApigeeOrganizationsSitesApicategoriesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an API category.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSitesApicategoriesPatch(
        new ApigeeOrganizationsSitesApicategoriesPatchRequest
        {
            OrganizationsId = "some example string",
            SitesId = "some example string",
            ApicategoriesId = "some example string",
            Body = new GoogleCloudApigeeV1ApiCategory(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiCategoryResponse
}
catch (ApiException<ApigeeOrganizationsSitesApicategoriesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSitesApicategoriesPatchRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApicategoriesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiCategoryResponse](src/Apigee/Models/GoogleCloudApigeeV1ApiCategoryResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSitesApicategoriesPatchError](src/Apigee/Errors/ApigeeOrganizationsSitesApicategoriesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiDocResponse&gt; ApigeeOrganizationsSitesApidocsCreate(ApigeeOrganizationsSitesApidocsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new catalog item.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSitesApidocsCreate(
        new ApigeeOrganizationsSitesApidocsCreateRequest
        {
            OrganizationsId = "some example string",
            SitesId = "some example string",
            Body = new GoogleCloudApigeeV1ApiDoc(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiDocResponse
}
catch (ApiException<ApigeeOrganizationsSitesApidocsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSitesApidocsCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApidocsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiDocResponse](src/Apigee/Models/GoogleCloudApigeeV1ApiDocResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSitesApidocsCreateError](src/Apigee/Errors/ApigeeOrganizationsSitesApidocsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1DeleteResponse&gt; ApigeeOrganizationsSitesApidocsDelete(ApigeeOrganizationsSitesApidocsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a catalog item.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSitesApidocsDelete(
        new ApigeeOrganizationsSitesApidocsDeleteRequest
        {
            OrganizationsId = "some example string",
            SitesId = "some example string",
            ApidocsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1DeleteResponse
}
catch (ApiException<ApigeeOrganizationsSitesApidocsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSitesApidocsDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApidocsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1DeleteResponse](src/Apigee/Models/GoogleCloudApigeeV1DeleteResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSitesApidocsDeleteError](src/Apigee/Errors/ApigeeOrganizationsSitesApidocsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiDocResponse&gt; ApigeeOrganizationsSitesApidocsGet(ApigeeOrganizationsSitesApidocsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a catalog item.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSitesApidocsGet(
        new ApigeeOrganizationsSitesApidocsGetRequest
        {
            OrganizationsId = "some example string",
            SitesId = "some example string",
            ApidocsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiDocResponse
}
catch (ApiException<ApigeeOrganizationsSitesApidocsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSitesApidocsGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApidocsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiDocResponse](src/Apigee/Models/GoogleCloudApigeeV1ApiDocResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSitesApidocsGetError](src/Apigee/Errors/ApigeeOrganizationsSitesApidocsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiDocDocumentationResponse&gt; ApigeeOrganizationsSitesApidocsGetDocumentation(ApigeeOrganizationsSitesApidocsGetDocumentationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the documentation for the specified catalog item.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSitesApidocsGetDocumentation(
        new ApigeeOrganizationsSitesApidocsGetDocumentationRequest
        {
            OrganizationsId = "some example string",
            SitesId = "some example string",
            ApidocsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiDocDocumentationResponse
}
catch (ApiException<ApigeeOrganizationsSitesApidocsGetDocumentationError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSitesApidocsGetDocumentationRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApidocsGetDocumentationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiDocDocumentationResponse](src/Apigee/Models/GoogleCloudApigeeV1ApiDocDocumentationResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSitesApidocsGetDocumentationError](src/Apigee/Errors/ApigeeOrganizationsSitesApidocsGetDocumentationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListApiDocsResponse&gt; ApigeeOrganizationsSitesApidocsList(ApigeeOrganizationsSitesApidocsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the catalog items associated with a portal.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSitesApidocsList(
        new ApigeeOrganizationsSitesApidocsListRequest
        {
            OrganizationsId = "some example string",
            SitesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListApiDocsResponse
}
catch (ApiException<ApigeeOrganizationsSitesApidocsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSitesApidocsListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApidocsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListApiDocsResponse](src/Apigee/Models/GoogleCloudApigeeV1ListApiDocsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSitesApidocsListError](src/Apigee/Errors/ApigeeOrganizationsSitesApidocsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiDocResponse&gt; ApigeeOrganizationsSitesApidocsUpdate(ApigeeOrganizationsSitesApidocsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a catalog item.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSitesApidocsUpdate(
        new ApigeeOrganizationsSitesApidocsUpdateRequest
        {
            OrganizationsId = "some example string",
            SitesId = "some example string",
            ApidocsId = "some example string",
            Body = new GoogleCloudApigeeV1ApiDoc(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiDocResponse
}
catch (ApiException<ApigeeOrganizationsSitesApidocsUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSitesApidocsUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApidocsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiDocResponse](src/Apigee/Models/GoogleCloudApigeeV1ApiDocResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSitesApidocsUpdateError](src/Apigee/Errors/ApigeeOrganizationsSitesApidocsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ApiDocDocumentationResponse&gt; ApigeeOrganizationsSitesApidocsUpdateDocumentation(ApigeeOrganizationsSitesApidocsUpdateDocumentationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the documentation for the specified catalog item. Note that the documentation file contents will not be populated in the return message.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSitesApidocsUpdateDocumentation(
        new ApigeeOrganizationsSitesApidocsUpdateDocumentationRequest
        {
            OrganizationsId = "some example string",
            SitesId = "some example string",
            ApidocsId = "some example string",
            Body = new GoogleCloudApigeeV1ApiDocDocumentation(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ApiDocDocumentationResponse
}
catch (ApiException<ApigeeOrganizationsSitesApidocsUpdateDocumentationError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSitesApidocsUpdateDocumentationRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApidocsUpdateDocumentationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ApiDocDocumentationResponse](src/Apigee/Models/GoogleCloudApigeeV1ApiDocDocumentationResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSitesApidocsUpdateDocumentationError](src/Apigee/Errors/ApigeeOrganizationsSitesApidocsUpdateDocumentationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Space&gt; ApigeeOrganizationsSpacesCreate(ApigeeOrganizationsSpacesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a space under an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSpacesCreate(new ApigeeOrganizationsSpacesCreateRequest
    {
        OrganizationsId = "some example string",
        Body = new GoogleCloudApigeeV1Space(),
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Space
}
catch (ApiException<ApigeeOrganizationsSpacesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSpacesCreateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Space](src/Apigee/Models/GoogleCloudApigeeV1Space.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSpacesCreateError](src/Apigee/Errors/ApigeeOrganizationsSpacesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigeeOrganizationsSpacesDelete(ApigeeOrganizationsSpacesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an organization space.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSpacesDelete(new ApigeeOrganizationsSpacesDeleteRequest
    {
        OrganizationsId = "some example string",
        SpacesId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigeeOrganizationsSpacesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSpacesDeleteRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSpacesDeleteError](src/Apigee/Errors/ApigeeOrganizationsSpacesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Space&gt; ApigeeOrganizationsSpacesGet(ApigeeOrganizationsSpacesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a space under an Organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSpacesGet(new ApigeeOrganizationsSpacesGetRequest
    {
        OrganizationsId = "some example string",
        SpacesId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Space
}
catch (ApiException<ApigeeOrganizationsSpacesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSpacesGetRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Space](src/Apigee/Models/GoogleCloudApigeeV1Space.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSpacesGetError](src/Apigee/Errors/ApigeeOrganizationsSpacesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleIamV1Policy&gt; ApigeeOrganizationsSpacesGetIamPolicy(ApigeeOrganizationsSpacesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Callers must have apigee.spaces.getIamPolicy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSpacesGetIamPolicy(
        new ApigeeOrganizationsSpacesGetIamPolicyRequest
        {
            OrganizationsId = "some example string",
            SpacesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleIamV1Policy
}
catch (ApiException<ApigeeOrganizationsSpacesGetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSpacesGetIamPolicyRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleIamV1Policy](src/Apigee/Models/GoogleIamV1Policy.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSpacesGetIamPolicyError](src/Apigee/Errors/ApigeeOrganizationsSpacesGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1ListSpacesResponse&gt; ApigeeOrganizationsSpacesList(ApigeeOrganizationsSpacesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists spaces under an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSpacesList(new ApigeeOrganizationsSpacesListRequest
    {
        OrganizationsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1ListSpacesResponse
}
catch (ApiException<ApigeeOrganizationsSpacesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSpacesListRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1ListSpacesResponse](src/Apigee/Models/GoogleCloudApigeeV1ListSpacesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSpacesListError](src/Apigee/Errors/ApigeeOrganizationsSpacesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Space&gt; ApigeeOrganizationsSpacesPatch(ApigeeOrganizationsSpacesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a space.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSpacesPatch(new ApigeeOrganizationsSpacesPatchRequest
    {
        OrganizationsId = "some example string",
        SpacesId = "some example string",
        Body = new GoogleCloudApigeeV1Space(),
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Space
}
catch (ApiException<ApigeeOrganizationsSpacesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSpacesPatchRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Space](src/Apigee/Models/GoogleCloudApigeeV1Space.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSpacesPatchError](src/Apigee/Errors/ApigeeOrganizationsSpacesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleIamV1Policy&gt; ApigeeOrganizationsSpacesSetIamPolicy(ApigeeOrganizationsSpacesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IAM META APIs Callers must have apigee.spaces.setIamPolicy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSpacesSetIamPolicy(
        new ApigeeOrganizationsSpacesSetIamPolicyRequest
        {
            OrganizationsId = "some example string",
            SpacesId = "some example string",
            Body = new GoogleIamV1SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type GoogleIamV1Policy
}
catch (ApiException<ApigeeOrganizationsSpacesSetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSpacesSetIamPolicyRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleIamV1Policy](src/Apigee/Models/GoogleIamV1Policy.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSpacesSetIamPolicyError](src/Apigee/Errors/ApigeeOrganizationsSpacesSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleIamV1TestIamPermissionsResponse&gt; ApigeeOrganizationsSpacesTestIamPermissions(ApigeeOrganizationsSpacesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Callers don't need any permissions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsSpacesTestIamPermissions(
        new ApigeeOrganizationsSpacesTestIamPermissionsRequest
        {
            OrganizationsId = "some example string",
            SpacesId = "some example string",
            Body = new GoogleIamV1TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type GoogleIamV1TestIamPermissionsResponse
}
catch (ApiException<ApigeeOrganizationsSpacesTestIamPermissionsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsSpacesTestIamPermissionsRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleIamV1TestIamPermissionsResponse](src/Apigee/Models/GoogleIamV1TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsSpacesTestIamPermissionsError](src/Apigee/Errors/ApigeeOrganizationsSpacesTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1Organization&gt; ApigeeOrganizationsUpdate(ApigeeOrganizationsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the properties for an Apigee organization. No other fields in the organization profile will be updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsUpdate(new ApigeeOrganizationsUpdateRequest
    {
        OrganizationsId = "some example string",
        Body = new GoogleCloudApigeeV1Organization(),
    });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1Organization
}
catch (ApiException<ApigeeOrganizationsUpdateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsUpdateRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1Organization](src/Apigee/Models/GoogleCloudApigeeV1Organization.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsUpdateError](src/Apigee/Errors/ApigeeOrganizationsUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeOrganizationsUpdateControlPlaneAccess(ApigeeOrganizationsUpdateControlPlaneAccessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the permissions required to allow Apigee runtime-plane components access to the control plane. Currently, the permissions required are to: 1. Allow runtime components to publish analytics data to the control plane. **Note**: Available to Apigee hybrid only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsUpdateControlPlaneAccess(
        new ApigeeOrganizationsUpdateControlPlaneAccessRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1ControlPlaneAccess(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeOrganizationsUpdateControlPlaneAccessError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsUpdateControlPlaneAccessRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsUpdateControlPlaneAccessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsUpdateControlPlaneAccessError](src/Apigee/Errors/ApigeeOrganizationsUpdateControlPlaneAccessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApigeeV1SecuritySettings&gt; ApigeeOrganizationsUpdateSecuritySettings(ApigeeOrganizationsUpdateSecuritySettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

UpdateSecuritySettings updates the current security settings for API Security.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Organizations.ApigeeOrganizationsUpdateSecuritySettings(
        new ApigeeOrganizationsUpdateSecuritySettingsRequest
        {
            OrganizationsId = "some example string",
            Body = new GoogleCloudApigeeV1SecuritySettings(),
        });
    // TODO: Handle 'response' of type GoogleCloudApigeeV1SecuritySettings
}
catch (ApiException<ApigeeOrganizationsUpdateSecuritySettingsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeOrganizationsUpdateSecuritySettingsRequest](src/Apigee/Requests/Organizations/ApigeeOrganizationsUpdateSecuritySettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApigeeV1SecuritySettings](src/Apigee/Models/GoogleCloudApigeeV1SecuritySettings.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeOrganizationsUpdateSecuritySettingsError](src/Apigee/Errors/ApigeeOrganizationsUpdateSecuritySettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/Apigee/Api/Projects.cs)

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApigeeProjectsProvisionOrganization(ApigeeProjectsProvisionOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial organizations for a free Apigee trial.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApigeeProjectsProvisionOrganization(
        new ApigeeProjectsProvisionOrganizationRequest
        {
            ProjectsId = "some example string",
            Body = new GoogleCloudApigeeV1ProvisionOrganizationRequest(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApigeeProjectsProvisionOrganizationError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApigeeProjectsProvisionOrganizationRequest](src/Apigee/Requests/Projects/ApigeeProjectsProvisionOrganizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApigeeProjectsProvisionOrganizationError](src/Apigee/Errors/ApigeeProjectsProvisionOrganizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Addon&gt; ApihubProjectsLocationsAddonsGet(ApihubProjectsLocationsAddonsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an addon.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsAddonsGet(new ApihubProjectsLocationsAddonsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        AddonsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Addon
}
catch (ApiException<ApihubProjectsLocationsAddonsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsAddonsGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsAddonsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Addon](src/Apigee/Models/GoogleCloudApihubV1Addon.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsAddonsGetError](src/Apigee/Errors/ApihubProjectsLocationsAddonsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListAddonsResponse&gt; ApihubProjectsLocationsAddonsList(ApihubProjectsLocationsAddonsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List addons.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsAddonsList(new ApihubProjectsLocationsAddonsListRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListAddonsResponse
}
catch (ApiException<ApihubProjectsLocationsAddonsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsAddonsListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsAddonsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListAddonsResponse](src/Apigee/Models/GoogleCloudApihubV1ListAddonsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsAddonsListError](src/Apigee/Errors/ApihubProjectsLocationsAddonsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApihubProjectsLocationsAddonsManageConfig(ApihubProjectsLocationsAddonsManageConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Manage addon config. This RPC is used for managing the config of the addon. Calling this RPC moves the addon into an updating state until the long-running operation succeeds.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsAddonsManageConfig(
        new ApihubProjectsLocationsAddonsManageConfigRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AddonsId = "some example string",
            Body = new GoogleCloudApihubV1ManageAddonConfigRequest(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApihubProjectsLocationsAddonsManageConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsAddonsManageConfigRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsAddonsManageConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsAddonsManageConfigError](src/Apigee/Errors/ApihubProjectsLocationsAddonsManageConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApihubProjectsLocationsApiHubInstancesCreate(ApihubProjectsLocationsApiHubInstancesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions instance resources for the API Hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApiHubInstancesCreate(
        new ApihubProjectsLocationsApiHubInstancesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new GoogleCloudApihubV1ApiHubInstance(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApihubProjectsLocationsApiHubInstancesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApiHubInstancesCreateRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApiHubInstancesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApiHubInstancesCreateError](src/Apigee/Errors/ApihubProjectsLocationsApiHubInstancesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApihubProjectsLocationsApiHubInstancesDelete(ApihubProjectsLocationsApiHubInstancesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the API hub instance. Deleting the API hub instance will also result in the removal of all associated runtime project attachments and the host project registration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApiHubInstancesDelete(
        new ApihubProjectsLocationsApiHubInstancesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApiHubInstancesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApihubProjectsLocationsApiHubInstancesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApiHubInstancesDeleteRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApiHubInstancesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApiHubInstancesDeleteError](src/Apigee/Errors/ApihubProjectsLocationsApiHubInstancesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ApiHubInstance&gt; ApihubProjectsLocationsApiHubInstancesGet(ApihubProjectsLocationsApiHubInstancesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single API Hub instance.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApiHubInstancesGet(
        new ApihubProjectsLocationsApiHubInstancesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApiHubInstancesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ApiHubInstance
}
catch (ApiException<ApihubProjectsLocationsApiHubInstancesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApiHubInstancesGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApiHubInstancesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ApiHubInstance](src/Apigee/Models/GoogleCloudApihubV1ApiHubInstance.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApiHubInstancesGetError](src/Apigee/Errors/ApihubProjectsLocationsApiHubInstancesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1LookupApiHubInstanceResponse&gt; ApihubProjectsLocationsApiHubInstancesLookup(ApihubProjectsLocationsApiHubInstancesLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Looks up an Api Hub instance in a given Google Cloud project. There will always be only one Api Hub instance for a Google Cloud project across all locations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApiHubInstancesLookup(
        new ApihubProjectsLocationsApiHubInstancesLookupRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1LookupApiHubInstanceResponse
}
catch (ApiException<ApihubProjectsLocationsApiHubInstancesLookupError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApiHubInstancesLookupRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApiHubInstancesLookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1LookupApiHubInstanceResponse](src/Apigee/Models/GoogleCloudApihubV1LookupApiHubInstanceResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApiHubInstancesLookupError](src/Apigee/Errors/ApihubProjectsLocationsApiHubInstancesLookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApihubProjectsLocationsApiHubInstancesPatch(ApihubProjectsLocationsApiHubInstancesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an Api Hub instance. The following fields in the ApiHubInstance can be updated: * disable_search * vertex_location * agent_registry_sync_config The update_mask should be used to specify the fields being updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApiHubInstancesPatch(
        new ApihubProjectsLocationsApiHubInstancesPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApiHubInstancesId = "some example string",
            Body = new GoogleCloudApihubV1ApiHubInstance(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApihubProjectsLocationsApiHubInstancesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApiHubInstancesPatchRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApiHubInstancesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApiHubInstancesPatchError](src/Apigee/Errors/ApihubProjectsLocationsApiHubInstancesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Api&gt; ApihubProjectsLocationsApisCreate(ApihubProjectsLocationsApisCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an API resource in the API hub. Once an API resource is created, versions can be added to it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisCreate(new ApihubProjectsLocationsApisCreateRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        Body = new GoogleCloudApihubV1Api(),
    });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Api
}
catch (ApiException<ApihubProjectsLocationsApisCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisCreateRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Api](src/Apigee/Models/GoogleCloudApihubV1Api.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisCreateError](src/Apigee/Errors/ApihubProjectsLocationsApisCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApihubProjectsLocationsApisDelete(ApihubProjectsLocationsApisDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an API resource in the API hub. API can only be deleted if all underlying versions are deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisDelete(new ApihubProjectsLocationsApisDeleteRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        ApisId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApihubProjectsLocationsApisDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisDeleteRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisDeleteError](src/Apigee/Errors/ApihubProjectsLocationsApisDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Api&gt; ApihubProjectsLocationsApisGet(ApihubProjectsLocationsApisGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get API resource details including the API versions contained in it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisGet(new ApihubProjectsLocationsApisGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        ApisId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Api
}
catch (ApiException<ApihubProjectsLocationsApisGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Api](src/Apigee/Models/GoogleCloudApihubV1Api.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisGetError](src/Apigee/Errors/ApihubProjectsLocationsApisGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListApisResponse&gt; ApihubProjectsLocationsApisList(ApihubProjectsLocationsApisListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List API resources in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisList(new ApihubProjectsLocationsApisListRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListApisResponse
}
catch (ApiException<ApihubProjectsLocationsApisListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListApisResponse](src/Apigee/Models/GoogleCloudApihubV1ListApisResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisListError](src/Apigee/Errors/ApihubProjectsLocationsApisListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Api&gt; ApihubProjectsLocationsApisPatch(ApihubProjectsLocationsApisPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an API resource in the API hub. The following fields in the API can be updated: * display_name * description * owner * documentation * target_user * team * business_unit * maturity_level * api_style * attributes * fingerprint The update_mask should be used to specify the fields being updated. Updating the owner field requires complete owner message and updates both owner and email fields.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisPatch(new ApihubProjectsLocationsApisPatchRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        ApisId = "some example string",
        Body = new GoogleCloudApihubV1Api(),
    });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Api
}
catch (ApiException<ApihubProjectsLocationsApisPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisPatchRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Api](src/Apigee/Models/GoogleCloudApihubV1Api.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisPatchError](src/Apigee/Errors/ApihubProjectsLocationsApisPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Version&gt; ApihubProjectsLocationsApisVersionsCreate(ApihubProjectsLocationsApisVersionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an API version for an API resource in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsCreate(
        new ApihubProjectsLocationsApisVersionsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            Body = new GoogleCloudApihubV1Version(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Version
}
catch (ApiException<ApihubProjectsLocationsApisVersionsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsCreateRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Version](src/Apigee/Models/GoogleCloudApihubV1Version.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsCreateError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Definition&gt; ApihubProjectsLocationsApisVersionsDefinitionsGet(ApihubProjectsLocationsApisVersionsDefinitionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about a definition in an API version.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsDefinitionsGet(
        new ApihubProjectsLocationsApisVersionsDefinitionsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
            DefinitionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Definition
}
catch (ApiException<ApihubProjectsLocationsApisVersionsDefinitionsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsDefinitionsGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsDefinitionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Definition](src/Apigee/Models/GoogleCloudApihubV1Definition.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsDefinitionsGetError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsDefinitionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApihubProjectsLocationsApisVersionsDelete(ApihubProjectsLocationsApisVersionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an API version. Version can only be deleted if all underlying specs, operations, definitions and linked deployments are deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsDelete(
        new ApihubProjectsLocationsApisVersionsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApihubProjectsLocationsApisVersionsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsDeleteRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsDeleteError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Version&gt; ApihubProjectsLocationsApisVersionsGet(ApihubProjectsLocationsApisVersionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about the API version of an API resource. This will include information about the specs and operations present in the API version as well as the deployments linked to it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsGet(
        new ApihubProjectsLocationsApisVersionsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Version
}
catch (ApiException<ApihubProjectsLocationsApisVersionsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Version](src/Apigee/Models/GoogleCloudApihubV1Version.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsGetError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListVersionsResponse&gt; ApihubProjectsLocationsApisVersionsList(ApihubProjectsLocationsApisVersionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List API versions of an API resource in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsList(
        new ApihubProjectsLocationsApisVersionsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListVersionsResponse
}
catch (ApiException<ApihubProjectsLocationsApisVersionsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListVersionsResponse](src/Apigee/Models/GoogleCloudApihubV1ListVersionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsListError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ApiOperation&gt; ApihubProjectsLocationsApisVersionsOperationsCreate(ApihubProjectsLocationsApisVersionsOperationsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an apiOperation in an API version. An apiOperation can be created only if the version has no apiOperations which were created by parsing a spec.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsOperationsCreate(
        new ApihubProjectsLocationsApisVersionsOperationsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
            Body = new GoogleCloudApihubV1ApiOperation(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ApiOperation
}
catch (ApiException<ApihubProjectsLocationsApisVersionsOperationsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsOperationsCreateRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsOperationsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ApiOperation](src/Apigee/Models/GoogleCloudApihubV1ApiOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsOperationsCreateError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsOperationsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApihubProjectsLocationsApisVersionsOperationsDelete(ApihubProjectsLocationsApisVersionsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an operation in an API version and we can delete only the operations created via create API. If the operation was created by parsing the spec, then it can be deleted by editing or deleting the spec. Deleting an operation will also remove any links between the operation and deployments.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsOperationsDelete(
        new ApihubProjectsLocationsApisVersionsOperationsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApihubProjectsLocationsApisVersionsOperationsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsOperationsDeleteRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsOperationsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsOperationsDeleteError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsOperationsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ApiOperation&gt; ApihubProjectsLocationsApisVersionsOperationsGet(ApihubProjectsLocationsApisVersionsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about a particular operation in API version.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsOperationsGet(
        new ApihubProjectsLocationsApisVersionsOperationsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ApiOperation
}
catch (ApiException<ApihubProjectsLocationsApisVersionsOperationsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsOperationsGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsOperationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ApiOperation](src/Apigee/Models/GoogleCloudApihubV1ApiOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsOperationsGetError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsOperationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListApiOperationsResponse&gt; ApihubProjectsLocationsApisVersionsOperationsList(ApihubProjectsLocationsApisVersionsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List operations in an API version.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsOperationsList(
        new ApihubProjectsLocationsApisVersionsOperationsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListApiOperationsResponse
}
catch (ApiException<ApihubProjectsLocationsApisVersionsOperationsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsOperationsListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsOperationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListApiOperationsResponse](src/Apigee/Models/GoogleCloudApihubV1ListApiOperationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsOperationsListError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsOperationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ApiOperation&gt; ApihubProjectsLocationsApisVersionsOperationsPatch(ApihubProjectsLocationsApisVersionsOperationsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an operation in an API version. The following fields in the ApiOperation resource can be updated: * details.description * details.documentation * details.http_operation.path * details.http_operation.method * details.deprecated * attributes * details.mcp_tool.title * details.mcp_tool.description * details.mcp_tool.input_schema * details.mcp_tool.output_schema * details.input_schema * details.output_schema * details.mcp_tool.annotations.title * details.mcp_tool.annotations.read_only_hint * details.mcp_tool.annotations.destructive_hint * details.mcp_tool.annotations.idempotent_hint * details.mcp_tool.annotations.open_world_hint * details.mcp_tool.annotations.additional_hints The update_mask should be used to specify the fields being updated. An operation can be updated only if the operation was created via CreateApiOperation API. If the operation was created by parsing the spec, then it can be edited by updating the spec.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsOperationsPatch(
        new ApihubProjectsLocationsApisVersionsOperationsPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
            OperationsId = "some example string",
            Body = new GoogleCloudApihubV1ApiOperation(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ApiOperation
}
catch (ApiException<ApihubProjectsLocationsApisVersionsOperationsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsOperationsPatchRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsOperationsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ApiOperation](src/Apigee/Models/GoogleCloudApihubV1ApiOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsOperationsPatchError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsOperationsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Version&gt; ApihubProjectsLocationsApisVersionsPatch(ApihubProjectsLocationsApisVersionsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update API version. The following fields in the version can be updated currently: * display_name * description * documentation * deployments * lifecycle * compliance * accreditation * attributes The update_mask should be used to specify the fields being updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsPatch(
        new ApihubProjectsLocationsApisVersionsPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
            Body = new GoogleCloudApihubV1Version(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Version
}
catch (ApiException<ApihubProjectsLocationsApisVersionsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsPatchRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Version](src/Apigee/Models/GoogleCloudApihubV1Version.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsPatchError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Spec&gt; ApihubProjectsLocationsApisVersionsSpecsCreate(ApihubProjectsLocationsApisVersionsSpecsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a spec to an API version in the API hub. Multiple specs can be added to an API version. Note, while adding a spec, at least one of `contents` or `source_uri` must be provided. If `contents` is provided, then `spec_type` must also be provided. On adding a spec with contents to the version, the operations present in it will be added to the version.Note that the file contents in the spec should be of the same type as defined in the `projects/{project}/locations/{location}/attributes/system-spec-type` attribute associated with spec resource. Note that specs of various types can be uploaded, however parsing of details is supported for OpenAPI spec currently. In order to access the information parsed from the spec, use the GetSpec method. In order to access the raw contents for a particular spec, use the GetSpecContents method. In order to access the operations parsed from the spec, use the ListAPIOperations method.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsSpecsCreate(
        new ApihubProjectsLocationsApisVersionsSpecsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
            Body = new GoogleCloudApihubV1Spec(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Spec
}
catch (ApiException<ApihubProjectsLocationsApisVersionsSpecsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsSpecsCreateRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Spec](src/Apigee/Models/GoogleCloudApihubV1Spec.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsSpecsCreateError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApihubProjectsLocationsApisVersionsSpecsDelete(ApihubProjectsLocationsApisVersionsSpecsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a spec. Deleting a spec will also delete the associated operations from the version and remove any links between the spec and deployments.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsSpecsDelete(
        new ApihubProjectsLocationsApisVersionsSpecsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
            SpecsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApihubProjectsLocationsApisVersionsSpecsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsSpecsDeleteRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsSpecsDeleteError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1FetchAdditionalSpecContentResponse&gt; ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContent(ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch additional spec content.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContent(
        new ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
            SpecsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1FetchAdditionalSpecContentResponse
}
catch (ApiException<ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1FetchAdditionalSpecContentResponse](src/Apigee/Models/GoogleCloudApihubV1FetchAdditionalSpecContentResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Spec&gt; ApihubProjectsLocationsApisVersionsSpecsGet(ApihubProjectsLocationsApisVersionsSpecsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about the information parsed from a spec. Note that this method does not return the raw spec contents. Use GetSpecContents method to retrieve the same.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsSpecsGet(
        new ApihubProjectsLocationsApisVersionsSpecsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
            SpecsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Spec
}
catch (ApiException<ApihubProjectsLocationsApisVersionsSpecsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsSpecsGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Spec](src/Apigee/Models/GoogleCloudApihubV1Spec.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsSpecsGetError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1SpecContents&gt; ApihubProjectsLocationsApisVersionsSpecsGetContents(ApihubProjectsLocationsApisVersionsSpecsGetContentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get spec contents.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsSpecsGetContents(
        new ApihubProjectsLocationsApisVersionsSpecsGetContentsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
            SpecsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1SpecContents
}
catch (ApiException<ApihubProjectsLocationsApisVersionsSpecsGetContentsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsSpecsGetContentsRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsGetContentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1SpecContents](src/Apigee/Models/GoogleCloudApihubV1SpecContents.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsSpecsGetContentsError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsGetContentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApihubProjectsLocationsApisVersionsSpecsLint(ApihubProjectsLocationsApisVersionsSpecsLintRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lints the requested spec and updates the corresponding API Spec with the lint response. This lint response will be available in all subsequent Get and List Spec calls to Core service.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsSpecsLint(
        new ApihubProjectsLocationsApisVersionsSpecsLintRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
            SpecsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApihubProjectsLocationsApisVersionsSpecsLintError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsSpecsLintRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsLintRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsSpecsLintError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsLintError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListSpecsResponse&gt; ApihubProjectsLocationsApisVersionsSpecsList(ApihubProjectsLocationsApisVersionsSpecsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List specs corresponding to a particular API resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsSpecsList(
        new ApihubProjectsLocationsApisVersionsSpecsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListSpecsResponse
}
catch (ApiException<ApihubProjectsLocationsApisVersionsSpecsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsSpecsListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListSpecsResponse](src/Apigee/Models/GoogleCloudApihubV1ListSpecsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsSpecsListError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Spec&gt; ApihubProjectsLocationsApisVersionsSpecsPatch(ApihubProjectsLocationsApisVersionsSpecsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update spec. The following fields in the spec can be updated: * display_name * source_uri * lint_response * attributes * contents * spec_type In case of an OAS spec, updating spec contents can lead to: 1. Creation, deletion and update of operations. 2. Creation, deletion and update of definitions. 3. Update of other info parsed out from the new spec. In case of contents or source_uri being present in update mask, spec_type must also be present. Also, spec_type can not be present in update mask if contents or source_uri is not present. The update_mask should be used to specify the fields being updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsApisVersionsSpecsPatch(
        new ApihubProjectsLocationsApisVersionsSpecsPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            VersionsId = "some example string",
            SpecsId = "some example string",
            Body = new GoogleCloudApihubV1Spec(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Spec
}
catch (ApiException<ApihubProjectsLocationsApisVersionsSpecsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsApisVersionsSpecsPatchRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsApisVersionsSpecsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Spec](src/Apigee/Models/GoogleCloudApihubV1Spec.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsApisVersionsSpecsPatchError](src/Apigee/Errors/ApihubProjectsLocationsApisVersionsSpecsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Attribute&gt; ApihubProjectsLocationsAttributesCreate(ApihubProjectsLocationsAttributesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a user defined attribute. Certain pre defined attributes are already created by the API hub. These attributes will have type as `SYSTEM_DEFINED` and can be listed via ListAttributes method. Allowed values for the same can be updated via UpdateAttribute method.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsAttributesCreate(
        new ApihubProjectsLocationsAttributesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new GoogleCloudApihubV1Attribute(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Attribute
}
catch (ApiException<ApihubProjectsLocationsAttributesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsAttributesCreateRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsAttributesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Attribute](src/Apigee/Models/GoogleCloudApihubV1Attribute.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsAttributesCreateError](src/Apigee/Errors/ApihubProjectsLocationsAttributesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApihubProjectsLocationsAttributesDelete(ApihubProjectsLocationsAttributesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an attribute. Note: System defined attributes cannot be deleted. All associations of the attribute being deleted with any API hub resource will also get deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsAttributesDelete(
        new ApihubProjectsLocationsAttributesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AttributesId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApihubProjectsLocationsAttributesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsAttributesDeleteRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsAttributesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsAttributesDeleteError](src/Apigee/Errors/ApihubProjectsLocationsAttributesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Attribute&gt; ApihubProjectsLocationsAttributesGet(ApihubProjectsLocationsAttributesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about the attribute.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsAttributesGet(
        new ApihubProjectsLocationsAttributesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AttributesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Attribute
}
catch (ApiException<ApihubProjectsLocationsAttributesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsAttributesGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsAttributesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Attribute](src/Apigee/Models/GoogleCloudApihubV1Attribute.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsAttributesGetError](src/Apigee/Errors/ApihubProjectsLocationsAttributesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListAttributesResponse&gt; ApihubProjectsLocationsAttributesList(ApihubProjectsLocationsAttributesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsAttributesList(
        new ApihubProjectsLocationsAttributesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListAttributesResponse
}
catch (ApiException<ApihubProjectsLocationsAttributesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsAttributesListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsAttributesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListAttributesResponse](src/Apigee/Models/GoogleCloudApihubV1ListAttributesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsAttributesListError](src/Apigee/Errors/ApihubProjectsLocationsAttributesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Attribute&gt; ApihubProjectsLocationsAttributesPatch(ApihubProjectsLocationsAttributesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the attribute. The following fields in the Attribute resource can be updated: * display_name The display name can be updated for user defined attributes only. * description The description can be updated for user defined attributes only. * allowed_values To update the list of allowed values, clients need to use the fetched list of allowed values and add or remove values to or from the same list. The mutable allowed values can be updated for both user defined and System defined attributes. The immutable allowed values cannot be updated or deleted. The updated list of allowed values cannot be empty. If an allowed value that is already used by some resource's attribute is deleted, then the association between the resource and the attribute value will also be deleted. * cardinality The cardinality can be updated for user defined attributes only. Cardinality can only be increased during an update. The update_mask should be used to specify the fields being updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsAttributesPatch(
        new ApihubProjectsLocationsAttributesPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AttributesId = "some example string",
            Body = new GoogleCloudApihubV1Attribute(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Attribute
}
catch (ApiException<ApihubProjectsLocationsAttributesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsAttributesPatchRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsAttributesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Attribute](src/Apigee/Models/GoogleCloudApihubV1Attribute.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsAttributesPatchError](src/Apigee/Errors/ApihubProjectsLocationsAttributesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApihubProjectsLocationsCollectApiData(ApihubProjectsLocationsCollectApiDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Collect API data from a source and push it to Hub's collect layer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsCollectApiData(
        new ApihubProjectsLocationsCollectApiDataRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new GoogleCloudApihubV1CollectApiDataRequest(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApihubProjectsLocationsCollectApiDataError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsCollectApiDataRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsCollectApiDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsCollectApiDataError](src/Apigee/Errors/ApihubProjectsLocationsCollectApiDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Curation&gt; ApihubProjectsLocationsCurationsCreate(ApihubProjectsLocationsCurationsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a curation resource in the API hub. Once a curation resource is created, plugin instances can start using it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsCurationsCreate(
        new ApihubProjectsLocationsCurationsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new GoogleCloudApihubV1Curation(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Curation
}
catch (ApiException<ApihubProjectsLocationsCurationsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsCurationsCreateRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsCurationsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Curation](src/Apigee/Models/GoogleCloudApihubV1Curation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsCurationsCreateError](src/Apigee/Errors/ApihubProjectsLocationsCurationsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApihubProjectsLocationsCurationsDelete(ApihubProjectsLocationsCurationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a curation resource in the API hub. A curation can only be deleted if it's not being used by any plugin instance.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsCurationsDelete(
        new ApihubProjectsLocationsCurationsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            CurationsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApihubProjectsLocationsCurationsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsCurationsDeleteRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsCurationsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsCurationsDeleteError](src/Apigee/Errors/ApihubProjectsLocationsCurationsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Curation&gt; ApihubProjectsLocationsCurationsGet(ApihubProjectsLocationsCurationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get curation resource details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsCurationsGet(
        new ApihubProjectsLocationsCurationsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            CurationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Curation
}
catch (ApiException<ApihubProjectsLocationsCurationsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsCurationsGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsCurationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Curation](src/Apigee/Models/GoogleCloudApihubV1Curation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsCurationsGetError](src/Apigee/Errors/ApihubProjectsLocationsCurationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListCurationsResponse&gt; ApihubProjectsLocationsCurationsList(ApihubProjectsLocationsCurationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List curation resources in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsCurationsList(
        new ApihubProjectsLocationsCurationsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListCurationsResponse
}
catch (ApiException<ApihubProjectsLocationsCurationsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsCurationsListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsCurationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListCurationsResponse](src/Apigee/Models/GoogleCloudApihubV1ListCurationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsCurationsListError](src/Apigee/Errors/ApihubProjectsLocationsCurationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Curation&gt; ApihubProjectsLocationsCurationsPatch(ApihubProjectsLocationsCurationsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a curation resource in the API hub. The following fields in the curation can be updated: * display_name * description The update_mask should be used to specify the fields being updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsCurationsPatch(
        new ApihubProjectsLocationsCurationsPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            CurationsId = "some example string",
            Body = new GoogleCloudApihubV1Curation(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Curation
}
catch (ApiException<ApihubProjectsLocationsCurationsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsCurationsPatchRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsCurationsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Curation](src/Apigee/Models/GoogleCloudApihubV1Curation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsCurationsPatchError](src/Apigee/Errors/ApihubProjectsLocationsCurationsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Dependency&gt; ApihubProjectsLocationsDependenciesCreate(ApihubProjectsLocationsDependenciesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a dependency between two entities in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsDependenciesCreate(
        new ApihubProjectsLocationsDependenciesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new GoogleCloudApihubV1Dependency(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Dependency
}
catch (ApiException<ApihubProjectsLocationsDependenciesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsDependenciesCreateRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsDependenciesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Dependency](src/Apigee/Models/GoogleCloudApihubV1Dependency.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsDependenciesCreateError](src/Apigee/Errors/ApihubProjectsLocationsDependenciesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApihubProjectsLocationsDependenciesDelete(ApihubProjectsLocationsDependenciesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the dependency resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsDependenciesDelete(
        new ApihubProjectsLocationsDependenciesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            DependenciesId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApihubProjectsLocationsDependenciesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsDependenciesDeleteRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsDependenciesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsDependenciesDeleteError](src/Apigee/Errors/ApihubProjectsLocationsDependenciesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Dependency&gt; ApihubProjectsLocationsDependenciesGet(ApihubProjectsLocationsDependenciesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about a dependency resource in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsDependenciesGet(
        new ApihubProjectsLocationsDependenciesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            DependenciesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Dependency
}
catch (ApiException<ApihubProjectsLocationsDependenciesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsDependenciesGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsDependenciesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Dependency](src/Apigee/Models/GoogleCloudApihubV1Dependency.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsDependenciesGetError](src/Apigee/Errors/ApihubProjectsLocationsDependenciesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListDependenciesResponse&gt; ApihubProjectsLocationsDependenciesList(ApihubProjectsLocationsDependenciesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List dependencies based on the provided filter and pagination parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsDependenciesList(
        new ApihubProjectsLocationsDependenciesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListDependenciesResponse
}
catch (ApiException<ApihubProjectsLocationsDependenciesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsDependenciesListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsDependenciesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListDependenciesResponse](src/Apigee/Models/GoogleCloudApihubV1ListDependenciesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsDependenciesListError](src/Apigee/Errors/ApihubProjectsLocationsDependenciesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Dependency&gt; ApihubProjectsLocationsDependenciesPatch(ApihubProjectsLocationsDependenciesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a dependency based on the update_mask provided in the request. The following fields in the dependency can be updated: * description

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsDependenciesPatch(
        new ApihubProjectsLocationsDependenciesPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            DependenciesId = "some example string",
            Body = new GoogleCloudApihubV1Dependency(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Dependency
}
catch (ApiException<ApihubProjectsLocationsDependenciesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsDependenciesPatchRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsDependenciesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Dependency](src/Apigee/Models/GoogleCloudApihubV1Dependency.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsDependenciesPatchError](src/Apigee/Errors/ApihubProjectsLocationsDependenciesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Deployment&gt; ApihubProjectsLocationsDeploymentsCreate(ApihubProjectsLocationsDeploymentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a deployment resource in the API hub. Once a deployment resource is created, it can be associated with API versions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsDeploymentsCreate(
        new ApihubProjectsLocationsDeploymentsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new GoogleCloudApihubV1Deployment(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Deployment
}
catch (ApiException<ApihubProjectsLocationsDeploymentsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsDeploymentsCreateRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsDeploymentsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Deployment](src/Apigee/Models/GoogleCloudApihubV1Deployment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsDeploymentsCreateError](src/Apigee/Errors/ApihubProjectsLocationsDeploymentsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApihubProjectsLocationsDeploymentsDelete(ApihubProjectsLocationsDeploymentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a deployment resource in the API hub. A deployment can only be deleted after its links to any versions, specs, and API operations have been removed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsDeploymentsDelete(
        new ApihubProjectsLocationsDeploymentsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            DeploymentsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApihubProjectsLocationsDeploymentsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsDeploymentsDeleteRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsDeploymentsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsDeploymentsDeleteError](src/Apigee/Errors/ApihubProjectsLocationsDeploymentsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Deployment&gt; ApihubProjectsLocationsDeploymentsGet(ApihubProjectsLocationsDeploymentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about a deployment and the API versions linked to it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsDeploymentsGet(
        new ApihubProjectsLocationsDeploymentsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            DeploymentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Deployment
}
catch (ApiException<ApihubProjectsLocationsDeploymentsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsDeploymentsGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsDeploymentsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Deployment](src/Apigee/Models/GoogleCloudApihubV1Deployment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsDeploymentsGetError](src/Apigee/Errors/ApihubProjectsLocationsDeploymentsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListDeploymentsResponse&gt; ApihubProjectsLocationsDeploymentsList(ApihubProjectsLocationsDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List deployment resources in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsDeploymentsList(
        new ApihubProjectsLocationsDeploymentsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListDeploymentsResponse
}
catch (ApiException<ApihubProjectsLocationsDeploymentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsDeploymentsListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsDeploymentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListDeploymentsResponse](src/Apigee/Models/GoogleCloudApihubV1ListDeploymentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsDeploymentsListError](src/Apigee/Errors/ApihubProjectsLocationsDeploymentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Deployment&gt; ApihubProjectsLocationsDeploymentsPatch(ApihubProjectsLocationsDeploymentsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a deployment resource in the API hub. The following fields in the deployment resource can be updated: * display_name * description * documentation * deployment_type * resource_uri * endpoints * slo * environment * attributes * source_project * source_environment * management_url * source_uri The update_mask should be used to specify the fields being updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsDeploymentsPatch(
        new ApihubProjectsLocationsDeploymentsPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            DeploymentsId = "some example string",
            Body = new GoogleCloudApihubV1Deployment(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Deployment
}
catch (ApiException<ApihubProjectsLocationsDeploymentsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsDeploymentsPatchRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsDeploymentsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Deployment](src/Apigee/Models/GoogleCloudApihubV1Deployment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsDeploymentsPatchError](src/Apigee/Errors/ApihubProjectsLocationsDeploymentsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1DiscoveredApiOperation&gt; ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGet(ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a DiscoveredAPIOperation in a given project, location, ApiObservation and ApiOperation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGet(
        new ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            DiscoveredApiObservationsId = "some example string",
            DiscoveredApiOperationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1DiscoveredApiOperation
}
catch (ApiException<ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1DiscoveredApiOperation](src/Apigee/Models/GoogleCloudApihubV1DiscoveredApiOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetError](src/Apigee/Errors/ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListDiscoveredApiOperationsResponse&gt; ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsList(ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all the DiscoveredAPIOperations in a given project, location and ApiObservation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsList(
        new ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            DiscoveredApiObservationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListDiscoveredApiOperationsResponse
}
catch (ApiException<ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListDiscoveredApiOperationsResponse](src/Apigee/Models/GoogleCloudApihubV1ListDiscoveredApiOperationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListError](src/Apigee/Errors/ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1DiscoveredApiObservation&gt; ApihubProjectsLocationsDiscoveredApiObservationsGet(ApihubProjectsLocationsDiscoveredApiObservationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a DiscoveredAPIObservation in a given project, location and ApiObservation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsDiscoveredApiObservationsGet(
        new ApihubProjectsLocationsDiscoveredApiObservationsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            DiscoveredApiObservationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1DiscoveredApiObservation
}
catch (ApiException<ApihubProjectsLocationsDiscoveredApiObservationsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsDiscoveredApiObservationsGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsDiscoveredApiObservationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1DiscoveredApiObservation](src/Apigee/Models/GoogleCloudApihubV1DiscoveredApiObservation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsDiscoveredApiObservationsGetError](src/Apigee/Errors/ApihubProjectsLocationsDiscoveredApiObservationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListDiscoveredApiObservationsResponse&gt; ApihubProjectsLocationsDiscoveredApiObservationsList(ApihubProjectsLocationsDiscoveredApiObservationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all the DiscoveredAPIObservations in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsDiscoveredApiObservationsList(
        new ApihubProjectsLocationsDiscoveredApiObservationsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListDiscoveredApiObservationsResponse
}
catch (ApiException<ApihubProjectsLocationsDiscoveredApiObservationsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsDiscoveredApiObservationsListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsDiscoveredApiObservationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListDiscoveredApiObservationsResponse](src/Apigee/Models/GoogleCloudApihubV1ListDiscoveredApiObservationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsDiscoveredApiObservationsListError](src/Apigee/Errors/ApihubProjectsLocationsDiscoveredApiObservationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ExternalApi&gt; ApihubProjectsLocationsExternalApisCreate(ApihubProjectsLocationsExternalApisCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an External API resource in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsExternalApisCreate(
        new ApihubProjectsLocationsExternalApisCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new GoogleCloudApihubV1ExternalApi(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ExternalApi
}
catch (ApiException<ApihubProjectsLocationsExternalApisCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsExternalApisCreateRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsExternalApisCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ExternalApi](src/Apigee/Models/GoogleCloudApihubV1ExternalApi.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsExternalApisCreateError](src/Apigee/Errors/ApihubProjectsLocationsExternalApisCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApihubProjectsLocationsExternalApisDelete(ApihubProjectsLocationsExternalApisDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an External API resource in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsExternalApisDelete(
        new ApihubProjectsLocationsExternalApisDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ExternalApisId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApihubProjectsLocationsExternalApisDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsExternalApisDeleteRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsExternalApisDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsExternalApisDeleteError](src/Apigee/Errors/ApihubProjectsLocationsExternalApisDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ExternalApi&gt; ApihubProjectsLocationsExternalApisGet(ApihubProjectsLocationsExternalApisGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an External API resource in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsExternalApisGet(
        new ApihubProjectsLocationsExternalApisGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ExternalApisId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ExternalApi
}
catch (ApiException<ApihubProjectsLocationsExternalApisGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsExternalApisGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsExternalApisGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ExternalApi](src/Apigee/Models/GoogleCloudApihubV1ExternalApi.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsExternalApisGetError](src/Apigee/Errors/ApihubProjectsLocationsExternalApisGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListExternalApisResponse&gt; ApihubProjectsLocationsExternalApisList(ApihubProjectsLocationsExternalApisListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List External API resources in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsExternalApisList(
        new ApihubProjectsLocationsExternalApisListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListExternalApisResponse
}
catch (ApiException<ApihubProjectsLocationsExternalApisListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsExternalApisListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsExternalApisListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListExternalApisResponse](src/Apigee/Models/GoogleCloudApihubV1ListExternalApisResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsExternalApisListError](src/Apigee/Errors/ApihubProjectsLocationsExternalApisListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ExternalApi&gt; ApihubProjectsLocationsExternalApisPatch(ApihubProjectsLocationsExternalApisPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an External API resource in the API hub. The following fields can be updated: * display_name * description * documentation * endpoints * paths The update_mask should be used to specify the fields being updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsExternalApisPatch(
        new ApihubProjectsLocationsExternalApisPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ExternalApisId = "some example string",
            Body = new GoogleCloudApihubV1ExternalApi(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ExternalApi
}
catch (ApiException<ApihubProjectsLocationsExternalApisPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsExternalApisPatchRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsExternalApisPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ExternalApi](src/Apigee/Models/GoogleCloudApihubV1ExternalApi.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsExternalApisPatchError](src/Apigee/Errors/ApihubProjectsLocationsExternalApisPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1GenerateSpecResponse&gt; ApihubProjectsLocationsGeneratedSpecApisGenerateSpec(ApihubProjectsLocationsGeneratedSpecApisGenerateSpecRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Merges the per-day stored specs across the requested window and returns the merged OpenAPI document. Preview: this method is in Public Preview. Behavior and the API surface may change until the Spec Generation feature reaches General Availability.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsGeneratedSpecApisGenerateSpec(
        new ApihubProjectsLocationsGeneratedSpecApisGenerateSpecRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GeneratedSpecApisId = "some example string",
            Body = new GoogleCloudApihubV1GenerateSpecRequest(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1GenerateSpecResponse
}
catch (ApiException<ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsGeneratedSpecApisGenerateSpecRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsGeneratedSpecApisGenerateSpecRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1GenerateSpecResponse](src/Apigee/Models/GoogleCloudApihubV1GenerateSpecResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError](src/Apigee/Errors/ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1GeneratedSpecApi&gt; ApihubProjectsLocationsGeneratedSpecApisGet(ApihubProjectsLocationsGeneratedSpecApisGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a single GeneratedSpecApi by resource name. Preview: this method is in Public Preview. Behavior and the API surface may change until the Spec Generation feature reaches General Availability.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsGeneratedSpecApisGet(
        new ApihubProjectsLocationsGeneratedSpecApisGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GeneratedSpecApisId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1GeneratedSpecApi
}
catch (ApiException<ApihubProjectsLocationsGeneratedSpecApisGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsGeneratedSpecApisGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsGeneratedSpecApisGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1GeneratedSpecApi](src/Apigee/Models/GoogleCloudApihubV1GeneratedSpecApi.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsGeneratedSpecApisGetError](src/Apigee/Errors/ApihubProjectsLocationsGeneratedSpecApisGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListGeneratedSpecApisResponse&gt; ApihubProjectsLocationsGeneratedSpecApisList(ApihubProjectsLocationsGeneratedSpecApisListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the APIs the pipeline is tracking, ordered by `update_time desc`. Preview: this method is in Public Preview. Behavior and the API surface may change until the Spec Generation feature reaches General Availability.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsGeneratedSpecApisList(
        new ApihubProjectsLocationsGeneratedSpecApisListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListGeneratedSpecApisResponse
}
catch (ApiException<ApihubProjectsLocationsGeneratedSpecApisListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsGeneratedSpecApisListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsGeneratedSpecApisListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListGeneratedSpecApisResponse](src/Apigee/Models/GoogleCloudApihubV1ListGeneratedSpecApisResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsGeneratedSpecApisListError](src/Apigee/Errors/ApihubProjectsLocationsGeneratedSpecApisListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudLocationLocation&gt; ApihubProjectsLocationsGet(ApihubProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsGet(new ApihubProjectsLocationsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudLocationLocation
}
catch (ApiException<ApihubProjectsLocationsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudLocationLocation](src/Apigee/Models/GoogleCloudLocationLocation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsGetError](src/Apigee/Errors/ApihubProjectsLocationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1HostProjectRegistration&gt; ApihubProjectsLocationsHostProjectRegistrationsCreate(ApihubProjectsLocationsHostProjectRegistrationsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a host project registration. A Google cloud project can be registered as a host project if it is not attached as a runtime project to another host project. A project can have only one host project registration at a time. Subsequent register calls for the same project will fail until the existing registration is deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsHostProjectRegistrationsCreate(
        new ApihubProjectsLocationsHostProjectRegistrationsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new GoogleCloudApihubV1HostProjectRegistration(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1HostProjectRegistration
}
catch (ApiException<ApihubProjectsLocationsHostProjectRegistrationsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsHostProjectRegistrationsCreateRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsHostProjectRegistrationsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1HostProjectRegistration](src/Apigee/Models/GoogleCloudApihubV1HostProjectRegistration.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsHostProjectRegistrationsCreateError](src/Apigee/Errors/ApihubProjectsLocationsHostProjectRegistrationsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1HostProjectRegistration&gt; ApihubProjectsLocationsHostProjectRegistrationsGet(ApihubProjectsLocationsHostProjectRegistrationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a host project registration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsHostProjectRegistrationsGet(
        new ApihubProjectsLocationsHostProjectRegistrationsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            HostProjectRegistrationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1HostProjectRegistration
}
catch (ApiException<ApihubProjectsLocationsHostProjectRegistrationsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsHostProjectRegistrationsGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsHostProjectRegistrationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1HostProjectRegistration](src/Apigee/Models/GoogleCloudApihubV1HostProjectRegistration.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsHostProjectRegistrationsGetError](src/Apigee/Errors/ApihubProjectsLocationsHostProjectRegistrationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListHostProjectRegistrationsResponse&gt; ApihubProjectsLocationsHostProjectRegistrationsList(ApihubProjectsLocationsHostProjectRegistrationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists host project registrations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsHostProjectRegistrationsList(
        new ApihubProjectsLocationsHostProjectRegistrationsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListHostProjectRegistrationsResponse
}
catch (ApiException<ApihubProjectsLocationsHostProjectRegistrationsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsHostProjectRegistrationsListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsHostProjectRegistrationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListHostProjectRegistrationsResponse](src/Apigee/Models/GoogleCloudApihubV1ListHostProjectRegistrationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsHostProjectRegistrationsListError](src/Apigee/Errors/ApihubProjectsLocationsHostProjectRegistrationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudLocationListLocationsResponse&gt; ApihubProjectsLocationsList(ApihubProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsList(new ApihubProjectsLocationsListRequest
    {
        ProjectsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudLocationListLocationsResponse
}
catch (ApiException<ApihubProjectsLocationsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudLocationListLocationsResponse](src/Apigee/Models/GoogleCloudLocationListLocationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsListError](src/Apigee/Errors/ApihubProjectsLocationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse&gt; ApihubProjectsLocationsLookupRuntimeProjectAttachment(ApihubProjectsLocationsLookupRuntimeProjectAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Look up a runtime project attachment. This API can be called in the context of any project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsLookupRuntimeProjectAttachment(
        new ApihubProjectsLocationsLookupRuntimeProjectAttachmentRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse
}
catch (ApiException<ApihubProjectsLocationsLookupRuntimeProjectAttachmentError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsLookupRuntimeProjectAttachmentRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsLookupRuntimeProjectAttachmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse](src/Apigee/Models/GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsLookupRuntimeProjectAttachmentError](src/Apigee/Errors/ApihubProjectsLocationsLookupRuntimeProjectAttachmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApihubProjectsLocationsOperationsCancel(ApihubProjectsLocationsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsOperationsCancel(
        new ApihubProjectsLocationsOperationsCancelRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApihubProjectsLocationsOperationsCancelError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsOperationsCancelRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsOperationsCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsOperationsCancelError](src/Apigee/Errors/ApihubProjectsLocationsOperationsCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApihubProjectsLocationsOperationsDelete(ApihubProjectsLocationsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsOperationsDelete(
        new ApihubProjectsLocationsOperationsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApihubProjectsLocationsOperationsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsOperationsDeleteRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsOperationsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsOperationsDeleteError](src/Apigee/Errors/ApihubProjectsLocationsOperationsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApihubProjectsLocationsOperationsGet(ApihubProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsOperationsGet(
        new ApihubProjectsLocationsOperationsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApihubProjectsLocationsOperationsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsOperationsGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsOperationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsOperationsGetError](src/Apigee/Errors/ApihubProjectsLocationsOperationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningListOperationsResponse&gt; ApihubProjectsLocationsOperationsList(ApihubProjectsLocationsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsOperationsList(
        new ApihubProjectsLocationsOperationsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningListOperationsResponse
}
catch (ApiException<ApihubProjectsLocationsOperationsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsOperationsListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsOperationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningListOperationsResponse](src/Apigee/Models/GoogleLongrunningListOperationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsOperationsListError](src/Apigee/Errors/ApihubProjectsLocationsOperationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Plugin&gt; ApihubProjectsLocationsPluginsCreate(ApihubProjectsLocationsPluginsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an API Hub plugin resource in the API hub. Once a plugin is created, it can be used to create plugin instances.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsCreate(
        new ApihubProjectsLocationsPluginsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new GoogleCloudApihubV1Plugin(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Plugin
}
catch (ApiException<ApihubProjectsLocationsPluginsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsCreateRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Plugin](src/Apigee/Models/GoogleCloudApihubV1Plugin.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsCreateError](src/Apigee/Errors/ApihubProjectsLocationsPluginsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApihubProjectsLocationsPluginsDelete(ApihubProjectsLocationsPluginsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a Plugin in API hub. Note, only user owned plugins can be deleted via this method.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsDelete(
        new ApihubProjectsLocationsPluginsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PluginsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApihubProjectsLocationsPluginsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsDeleteRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsDeleteError](src/Apigee/Errors/ApihubProjectsLocationsPluginsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Plugin&gt; ApihubProjectsLocationsPluginsDisable(ApihubProjectsLocationsPluginsDisableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables a plugin. The `state` of the plugin after disabling is `DISABLED`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsDisable(
        new ApihubProjectsLocationsPluginsDisableRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PluginsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Plugin
}
catch (ApiException<ApihubProjectsLocationsPluginsDisableError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsDisableRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsDisableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Plugin](src/Apigee/Models/GoogleCloudApihubV1Plugin.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsDisableError](src/Apigee/Errors/ApihubProjectsLocationsPluginsDisableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Plugin&gt; ApihubProjectsLocationsPluginsEnable(ApihubProjectsLocationsPluginsEnableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables a plugin. The `state` of the plugin after enabling is `ENABLED`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsEnable(
        new ApihubProjectsLocationsPluginsEnableRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PluginsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Plugin
}
catch (ApiException<ApihubProjectsLocationsPluginsEnableError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsEnableRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsEnableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Plugin](src/Apigee/Models/GoogleCloudApihubV1Plugin.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsEnableError](src/Apigee/Errors/ApihubProjectsLocationsPluginsEnableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1Plugin&gt; ApihubProjectsLocationsPluginsGet(ApihubProjectsLocationsPluginsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an API Hub plugin.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsGet(new ApihubProjectsLocationsPluginsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        PluginsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleCloudApihubV1Plugin
}
catch (ApiException<ApihubProjectsLocationsPluginsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1Plugin](src/Apigee/Models/GoogleCloudApihubV1Plugin.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsGetError](src/Apigee/Errors/ApihubProjectsLocationsPluginsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1StyleGuide&gt; ApihubProjectsLocationsPluginsGetStyleGuide(ApihubProjectsLocationsPluginsGetStyleGuideRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the style guide being used for linting.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsGetStyleGuide(
        new ApihubProjectsLocationsPluginsGetStyleGuideRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PluginsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1StyleGuide
}
catch (ApiException<ApihubProjectsLocationsPluginsGetStyleGuideError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsGetStyleGuideRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsGetStyleGuideRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1StyleGuide](src/Apigee/Models/GoogleCloudApihubV1StyleGuide.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsGetStyleGuideError](src/Apigee/Errors/ApihubProjectsLocationsPluginsGetStyleGuideError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApihubProjectsLocationsPluginsInstancesCreate(ApihubProjectsLocationsPluginsInstancesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Plugin instance in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsInstancesCreate(
        new ApihubProjectsLocationsPluginsInstancesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PluginsId = "some example string",
            Body = new GoogleCloudApihubV1PluginInstance(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApihubProjectsLocationsPluginsInstancesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsInstancesCreateRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsInstancesCreateError](src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApihubProjectsLocationsPluginsInstancesDelete(ApihubProjectsLocationsPluginsInstancesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a plugin instance in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsInstancesDelete(
        new ApihubProjectsLocationsPluginsInstancesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PluginsId = "some example string",
            InstancesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApihubProjectsLocationsPluginsInstancesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsInstancesDeleteRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsInstancesDeleteError](src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApihubProjectsLocationsPluginsInstancesDisableAction(ApihubProjectsLocationsPluginsInstancesDisableActionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables a plugin instance in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsInstancesDisableAction(
        new ApihubProjectsLocationsPluginsInstancesDisableActionRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PluginsId = "some example string",
            InstancesId = "some example string",
            Body = new GoogleCloudApihubV1DisablePluginInstanceActionRequest(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApihubProjectsLocationsPluginsInstancesDisableActionError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsInstancesDisableActionRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesDisableActionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsInstancesDisableActionError](src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesDisableActionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApihubProjectsLocationsPluginsInstancesEnableAction(ApihubProjectsLocationsPluginsInstancesEnableActionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables a plugin instance in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsInstancesEnableAction(
        new ApihubProjectsLocationsPluginsInstancesEnableActionRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PluginsId = "some example string",
            InstancesId = "some example string",
            Body = new GoogleCloudApihubV1EnablePluginInstanceActionRequest(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApihubProjectsLocationsPluginsInstancesEnableActionError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsInstancesEnableActionRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesEnableActionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsInstancesEnableActionError](src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesEnableActionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApihubProjectsLocationsPluginsInstancesExecuteAction(ApihubProjectsLocationsPluginsInstancesExecuteActionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Executes a plugin instance in the API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsInstancesExecuteAction(
        new ApihubProjectsLocationsPluginsInstancesExecuteActionRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PluginsId = "some example string",
            InstancesId = "some example string",
            Body = new GoogleCloudApihubV1ExecutePluginInstanceActionRequest(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApihubProjectsLocationsPluginsInstancesExecuteActionError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsInstancesExecuteActionRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesExecuteActionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsInstancesExecuteActionError](src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesExecuteActionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1PluginInstance&gt; ApihubProjectsLocationsPluginsInstancesGet(ApihubProjectsLocationsPluginsInstancesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an API Hub plugin instance.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsInstancesGet(
        new ApihubProjectsLocationsPluginsInstancesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PluginsId = "some example string",
            InstancesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1PluginInstance
}
catch (ApiException<ApihubProjectsLocationsPluginsInstancesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsInstancesGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1PluginInstance](src/Apigee/Models/GoogleCloudApihubV1PluginInstance.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsInstancesGetError](src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListPluginInstancesResponse&gt; ApihubProjectsLocationsPluginsInstancesList(ApihubProjectsLocationsPluginsInstancesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the plugins in a given project and location. `-` can be used as wildcard value for {plugin_id}

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsInstancesList(
        new ApihubProjectsLocationsPluginsInstancesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PluginsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListPluginInstancesResponse
}
catch (ApiException<ApihubProjectsLocationsPluginsInstancesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsInstancesListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListPluginInstancesResponse](src/Apigee/Models/GoogleCloudApihubV1ListPluginInstancesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsInstancesListError](src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApihubProjectsLocationsPluginsInstancesManageSourceData(ApihubProjectsLocationsPluginsInstancesManageSourceDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Manages data for a given plugin instance.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsInstancesManageSourceData(
        new ApihubProjectsLocationsPluginsInstancesManageSourceDataRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PluginsId = "some example string",
            InstancesId = "some example string",
            Body = new GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest(),
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApihubProjectsLocationsPluginsInstancesManageSourceDataError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsInstancesManageSourceDataRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesManageSourceDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsInstancesManageSourceDataError](src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesManageSourceDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1PluginInstance&gt; ApihubProjectsLocationsPluginsInstancesPatch(ApihubProjectsLocationsPluginsInstancesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a plugin instance in the API hub. The following fields in the plugin_instance can be updated currently: * display_name * schedule_cron_expression The update_mask should be used to specify the fields being updated. To update the auth_config and additional_config of the plugin instance, use the ApplyPluginInstanceConfig method.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsInstancesPatch(
        new ApihubProjectsLocationsPluginsInstancesPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PluginsId = "some example string",
            InstancesId = "some example string",
            Body = new GoogleCloudApihubV1PluginInstance(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1PluginInstance
}
catch (ApiException<ApihubProjectsLocationsPluginsInstancesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsInstancesPatchRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsInstancesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1PluginInstance](src/Apigee/Models/GoogleCloudApihubV1PluginInstance.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsInstancesPatchError](src/Apigee/Errors/ApihubProjectsLocationsPluginsInstancesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListPluginsResponse&gt; ApihubProjectsLocationsPluginsList(ApihubProjectsLocationsPluginsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the plugins in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsList(
        new ApihubProjectsLocationsPluginsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListPluginsResponse
}
catch (ApiException<ApihubProjectsLocationsPluginsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListPluginsResponse](src/Apigee/Models/GoogleCloudApihubV1ListPluginsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsListError](src/Apigee/Errors/ApihubProjectsLocationsPluginsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1StyleGuideContents&gt; ApihubProjectsLocationsPluginsStyleGuideGetContents(ApihubProjectsLocationsPluginsStyleGuideGetContentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the contents of the style guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsStyleGuideGetContents(
        new ApihubProjectsLocationsPluginsStyleGuideGetContentsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PluginsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1StyleGuideContents
}
catch (ApiException<ApihubProjectsLocationsPluginsStyleGuideGetContentsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsStyleGuideGetContentsRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsStyleGuideGetContentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1StyleGuideContents](src/Apigee/Models/GoogleCloudApihubV1StyleGuideContents.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsStyleGuideGetContentsError](src/Apigee/Errors/ApihubProjectsLocationsPluginsStyleGuideGetContentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1StyleGuide&gt; ApihubProjectsLocationsPluginsUpdateStyleGuide(ApihubProjectsLocationsPluginsUpdateStyleGuideRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the styleGuide to be used for liniting in by API hub.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsPluginsUpdateStyleGuide(
        new ApihubProjectsLocationsPluginsUpdateStyleGuideRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PluginsId = "some example string",
            Body = new GoogleCloudApihubV1StyleGuide(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1StyleGuide
}
catch (ApiException<ApihubProjectsLocationsPluginsUpdateStyleGuideError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsPluginsUpdateStyleGuideRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsPluginsUpdateStyleGuideRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1StyleGuide](src/Apigee/Models/GoogleCloudApihubV1StyleGuide.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsPluginsUpdateStyleGuideError](src/Apigee/Errors/ApihubProjectsLocationsPluginsUpdateStyleGuideError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1RetrieveApiViewsResponse&gt; ApihubProjectsLocationsRetrieveApiViews(ApihubProjectsLocationsRetrieveApiViewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve API views.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsRetrieveApiViews(
        new ApihubProjectsLocationsRetrieveApiViewsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1RetrieveApiViewsResponse
}
catch (ApiException<ApihubProjectsLocationsRetrieveApiViewsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsRetrieveApiViewsRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsRetrieveApiViewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1RetrieveApiViewsResponse](src/Apigee/Models/GoogleCloudApihubV1RetrieveApiViewsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsRetrieveApiViewsError](src/Apigee/Errors/ApihubProjectsLocationsRetrieveApiViewsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1RuntimeProjectAttachment&gt; ApihubProjectsLocationsRuntimeProjectAttachmentsCreate(ApihubProjectsLocationsRuntimeProjectAttachmentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attaches a runtime project to the host project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsCreate(
        new ApihubProjectsLocationsRuntimeProjectAttachmentsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new GoogleCloudApihubV1RuntimeProjectAttachment(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1RuntimeProjectAttachment
}
catch (ApiException<ApihubProjectsLocationsRuntimeProjectAttachmentsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsRuntimeProjectAttachmentsCreateRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsRuntimeProjectAttachmentsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1RuntimeProjectAttachment](src/Apigee/Models/GoogleCloudApihubV1RuntimeProjectAttachment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsRuntimeProjectAttachmentsCreateError](src/Apigee/Errors/ApihubProjectsLocationsRuntimeProjectAttachmentsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApihubProjectsLocationsRuntimeProjectAttachmentsDelete(ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a runtime project attachment in the API Hub. This call will detach the runtime project from the host project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsDelete(
        new ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            RuntimeProjectAttachmentsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteError](src/Apigee/Errors/ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1RuntimeProjectAttachment&gt; ApihubProjectsLocationsRuntimeProjectAttachmentsGet(ApihubProjectsLocationsRuntimeProjectAttachmentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a runtime project attachment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsGet(
        new ApihubProjectsLocationsRuntimeProjectAttachmentsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            RuntimeProjectAttachmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1RuntimeProjectAttachment
}
catch (ApiException<ApihubProjectsLocationsRuntimeProjectAttachmentsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsRuntimeProjectAttachmentsGetRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsRuntimeProjectAttachmentsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1RuntimeProjectAttachment](src/Apigee/Models/GoogleCloudApihubV1RuntimeProjectAttachment.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsRuntimeProjectAttachmentsGetError](src/Apigee/Errors/ApihubProjectsLocationsRuntimeProjectAttachmentsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse&gt; ApihubProjectsLocationsRuntimeProjectAttachmentsList(ApihubProjectsLocationsRuntimeProjectAttachmentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List runtime projects attached to the host project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsList(
        new ApihubProjectsLocationsRuntimeProjectAttachmentsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse
}
catch (ApiException<ApihubProjectsLocationsRuntimeProjectAttachmentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsRuntimeProjectAttachmentsListRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsRuntimeProjectAttachmentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse](src/Apigee/Models/GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsRuntimeProjectAttachmentsListError](src/Apigee/Errors/ApihubProjectsLocationsRuntimeProjectAttachmentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleCloudApihubV1SearchResourcesResponse&gt; ApihubProjectsLocationsSearchResources(ApihubProjectsLocationsSearchResourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search across API-Hub resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsSearchResources(
        new ApihubProjectsLocationsSearchResourcesRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new GoogleCloudApihubV1SearchResourcesRequest(),
        });
    // TODO: Handle 'response' of type GoogleCloudApihubV1SearchResourcesResponse
}
catch (ApiException<ApihubProjectsLocationsSearchResourcesError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsSearchResourcesRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsSearchResourcesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleCloudApihubV1SearchResourcesResponse](src/Apigee/Models/GoogleCloudApihubV1SearchResourcesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsSearchResourcesError](src/Apigee/Errors/ApihubProjectsLocationsSearchResourcesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; ApihubProjectsLocationsServersConfigureAndDeployServer(ApihubProjectsLocationsServersConfigureAndDeployServerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Configures and deploys a given server config for given target. Currently this API supports only deploying MCP server in Apigee X. For mcp server deployment in apigee X, if there is already a mcp proxy deployed, then this method will try to overwrite it by creating new revision i.e. all existing tools will be removed and new set of tools will be deployed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.ApihubProjectsLocationsServersConfigureAndDeployServer(
        new ApihubProjectsLocationsServersConfigureAndDeployServerRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new GoogleCloudApihubV1ConfigureAndDeployServerRequest(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<ApihubProjectsLocationsServersConfigureAndDeployServerError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApihubProjectsLocationsServersConfigureAndDeployServerRequest](src/Apigee/Requests/Projects/ApihubProjectsLocationsServersConfigureAndDeployServerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/Apigee/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/Apigee/Core/Exceptions/ApiException.cs)&lt;[ApihubProjectsLocationsServersConfigureAndDeployServerError](src/Apigee/Errors/ApihubProjectsLocationsServersConfigureAndDeployServerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

