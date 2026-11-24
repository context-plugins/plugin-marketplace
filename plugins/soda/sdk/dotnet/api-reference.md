# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [SodaClient](src/Soda/SodaClient.cs)

## AttributesApi

> Source: [AttributesApi](src/Soda/Api/AttributesApi.cs)

<details>
<summary><code>Task&lt;PublicApiDeleteAttributeResponse&gt; DeleteApiV1AttributesAttributeId(DeleteApiV1AttributesAttributeIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to delete an existing attribute from your organization's Soda Cloud account.

The attribute will be removed from any resources where it is set.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_ATTRIBUTES to execute this call.

## Tags

`Attributes`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AttributesApi.DeleteApiV1AttributesAttributeId(
        new DeleteApiV1AttributesAttributeIdRequest { AttributeId = "some example string" });
    // TODO: Handle 'response' of type PublicApiDeleteAttributeResponse
}
catch (ApiException<DeleteApiV1AttributesAttributeIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1AttributesAttributeIdRequest](src/Soda/Requests/AttributesApi/DeleteApiV1AttributesAttributeIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDeleteAttributeResponse](src/Soda/Models/PublicApiDeleteAttributeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1AttributesAttributeIdError](src/Soda/Errors/DeleteApiV1AttributesAttributeIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiListAttributesResponse&gt; GetApiV1Attributes(GetApiV1AttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to list the attributes available in your organization's Soda Cloud account.

Optionally filter by resource type using the `resourceType` query parameter.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.

- `page`: Supply an integer value. The default value is 0.

- `resourceType`: Optional. Filter by resource type (`dataset`, `check`, or `column`).

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Any Soda Cloud user in your organization may execute this query.

## Tags

`Attributes`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AttributesApi.GetApiV1Attributes(new GetApiV1AttributesRequest());
    // TODO: Handle 'response' of type PublicApiListAttributesResponse
}
catch (ApiException<GetApiV1AttributesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1AttributesRequest](src/Soda/Requests/AttributesApi/GetApiV1AttributesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiListAttributesResponse](src/Soda/Models/PublicApiListAttributesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1AttributesError](src/Soda/Errors/GetApiV1AttributesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiCreateAttributeResponse&gt; PostApiV1Attributes(PostApiV1AttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to create a new attribute in your organization's Soda Cloud account.

Attributes are scoped to a resource type (dataset, check, or column). Once an attribute is created, it can be set on the associated resource type. Attributes can be used to configure notification rules, dashboards, filters, etc. For example sending email alerts when checks marked as critical fail.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_ATTRIBUTES to execute this call.

## Tags

`Attributes`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AttributesApi.PostApiV1Attributes(new PostApiV1AttributesRequest
    {
        Body = new PublicApiCreateAttributeRequestDto
        {
            Label = "some example string",
            Name = "some example string",
            ResourceType = AttributeResourceTypeDto.Dataset,
            Type = AttributeTypeDto.Text,
        },
    });
    // TODO: Handle 'response' of type PublicApiCreateAttributeResponse
}
catch (ApiException<PostApiV1AttributesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1AttributesRequest](src/Soda/Requests/AttributesApi/PostApiV1AttributesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiCreateAttributeResponse](src/Soda/Models/PublicApiCreateAttributeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1AttributesError](src/Soda/Errors/PostApiV1AttributesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiUpdateAttributeResponse&gt; PostApiV1AttributesAttributeId(PostApiV1AttributesAttributeIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to update an existing attribute in your organization's Soda Cloud account.

Only label, description, and allowedValues (for select types) can be updated.

When updating allowedValues, existing attribute values on resources are left in place, even if they are no longer in the allowed set.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_ATTRIBUTES to execute this call.

## Tags

`Attributes`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AttributesApi.PostApiV1AttributesAttributeId(new PostApiV1AttributesAttributeIdRequest
    {
        AttributeId = "some example string",
        Body = new PublicApiUpdateAttributeRequestDto(),
    });
    // TODO: Handle 'response' of type PublicApiUpdateAttributeResponse
}
catch (ApiException<PostApiV1AttributesAttributeIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1AttributesAttributeIdRequest](src/Soda/Requests/AttributesApi/PostApiV1AttributesAttributeIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiUpdateAttributeResponse](src/Soda/Models/PublicApiUpdateAttributeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1AttributesAttributeIdError](src/Soda/Errors/PostApiV1AttributesAttributeIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Checks

> Source: [Checks](src/Soda/Api/Checks.cs)

<details>
<summary><code>Task DeleteApiV1ChecksCheckId(DeleteApiV1ChecksCheckIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to delete a specific check in your organization's Soda Cloud account.

## Authorization

Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can delete checks. Soda Cloud Admins can delete checks for all datasets. **See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Checks`

## Rate limiting

1000 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Checks.DeleteApiV1ChecksCheckId(new DeleteApiV1ChecksCheckIdRequest
    {
        CheckId = "some example string",
    });
}
catch (ApiException<DeleteApiV1ChecksCheckIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1ChecksCheckIdRequest](src/Soda/Requests/Checks/DeleteApiV1ChecksCheckIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1ChecksCheckIdError](src/Soda/Errors/DeleteApiV1ChecksCheckIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiChecksResponse&gt; GetApiV1Checks(GetApiV1ChecksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to gather information about the checks that in exist in your organization's Soda Cloud account, including information about the datasets and agreements with which they are associated and the incidents to which they are linked. .

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

- `page`: Supply an integer value. The default value is 0.

- `datasetId`: Optionally, use this parameter to collect only the information for checks associated with a specific dataset. Find the `datasetId` in the URL of the dataset page in Soda Cloud.

- `dataStandardId`: Optionally, use this parameter to collect only the information for checks belonging to a specific data standard. Find the `dataStandardId` in the URL of the data standard page in Soda Cloud.

- `checkIds`: Optionally, use this parameter to collect only the information for a specific batch of checks. Provide multiple values as a comma-separated list of check IDs, which you can find on the individual check pages in Soda Cloud. This query parameter is limited to 1000 check IDs and it can't be combined with other query parameters like `page`, `datasetId`, `size`.

If not specified, the query gathers information for all checks in the account and sorts the results by check name in ascending order.

## Authorization

Soda only returns the checks linked to datasets to which the user has **View dataset** permissions. Soda Cloud Admins have access to all checks.**See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Checks`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Checks.GetApiV1Checks(new GetApiV1ChecksRequest());
    // TODO: Handle 'response' of type PublicApiChecksResponse
}
catch (ApiException<GetApiV1ChecksError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ChecksRequest](src/Soda/Requests/Checks/GetApiV1ChecksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiChecksResponse](src/Soda/Models/PublicApiChecksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ChecksError](src/Soda/Errors/GetApiV1ChecksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Contracts

> Source: [Contracts](src/Soda/Api/Contracts.cs)

<details>
<summary><code>Task&lt;PublicApiListContractsResponse&gt; GetApiV1Contracts(GetApiV1ContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to list contracts in your organization.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

- `page`: Supply an integer value. The default value is 0.

- `datasetId`: Optionally, use this parameter to list only the contracts for a specific dataset.

- `datasetQualifiedName`: Optionally, use this parameter instead of `datasetId` to identify the dataset by its qualified name. Do not supply both `datasetId` and `datasetQualifiedName`.

## Authorization

When filtering by dataset, only users with **View dataset** permission on the specified dataset can list its contracts. When no dataset filter is supplied, all contracts in the organization are returned.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Contracts`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contracts.GetApiV1Contracts(new GetApiV1ContractsRequest());
    // TODO: Handle 'response' of type PublicApiListContractsResponse
}
catch (ApiException<GetApiV1ContractsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ContractsRequest](src/Soda/Requests/Contracts/GetApiV1ContractsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiListContractsResponse](src/Soda/Models/PublicApiListContractsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ContractsError](src/Soda/Errors/GetApiV1ContractsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiCreateSkeletonContractStatusResponse&gt; GetApiV1ContractsActionsCreateSkeletonOperationId(GetApiV1ContractsActionsCreateSkeletonOperationIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the status of a skeleton contract generation operation that was triggered via the **Generate skeleton contract** endpoint.

The `operationId` is the last path segment of the `Location` header returned by the **Generate skeleton contract** response.

The response includes the operation state, dataset information, and creation timestamp.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Contracts`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contracts.GetApiV1ContractsActionsCreateSkeletonOperationId(
        new GetApiV1ContractsActionsCreateSkeletonOperationIdRequest { OperationId = "some example string" });
    // TODO: Handle 'response' of type PublicApiCreateSkeletonContractStatusResponse
}
catch (ApiException<GetApiV1ContractsActionsCreateSkeletonOperationIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ContractsActionsCreateSkeletonOperationIdRequest](src/Soda/Requests/Contracts/GetApiV1ContractsActionsCreateSkeletonOperationIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiCreateSkeletonContractStatusResponse](src/Soda/Models/PublicApiCreateSkeletonContractStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ContractsActionsCreateSkeletonOperationIdError](src/Soda/Errors/GetApiV1ContractsActionsCreateSkeletonOperationIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiGenerateContractStatusResponse&gt; GetApiV1ContractsActionsGenerateOperationId(GetApiV1ContractsActionsGenerateOperationIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the status of a contract generation operation that was triggered via the **Generate contracts** endpoint.

The `operationId` is the last path segment of the `Location` header returned by the **Generate contracts** response.

While the operation is ongoing, only the operation state is returned (`datasets` will be `null`). Once the operation reaches a terminal state (completed, failed, or canceled), the full per-dataset scan details are included.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Contracts`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contracts.GetApiV1ContractsActionsGenerateOperationId(
        new GetApiV1ContractsActionsGenerateOperationIdRequest { OperationId = "some example string" });
    // TODO: Handle 'response' of type PublicApiGenerateContractStatusResponse
}
catch (ApiException<GetApiV1ContractsActionsGenerateOperationIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ContractsActionsGenerateOperationIdRequest](src/Soda/Requests/Contracts/GetApiV1ContractsActionsGenerateOperationIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiGenerateContractStatusResponse](src/Soda/Models/PublicApiGenerateContractStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ContractsActionsGenerateOperationIdError](src/Soda/Errors/GetApiV1ContractsActionsGenerateOperationIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiGetContractResponse&gt; GetApiV1ContractsContractId(GetApiV1ContractsContractIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve a specific contract, including its YAML content.

## Authorization

Only users with **View dataset** permission can view contracts.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Contracts`

## Rate limiting

1000 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contracts.GetApiV1ContractsContractId(new GetApiV1ContractsContractIdRequest
    {
        ContractId = "some example string",
    });
    // TODO: Handle 'response' of type PublicApiGetContractResponse
}
catch (ApiException<GetApiV1ContractsContractIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ContractsContractIdRequest](src/Soda/Requests/Contracts/GetApiV1ContractsContractIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiGetContractResponse](src/Soda/Models/PublicApiGetContractResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ContractsContractIdError](src/Soda/Errors/GetApiV1ContractsContractIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiListContractVersionsResponse&gt; GetApiV1ContractsContractIdVersions(GetApiV1ContractsContractIdVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to list versions of a specific contract.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

- `page`: Supply an integer value. The default value is 0.

- `createdBefore`: Optionally, supply a UTC datetime value (ISO 8601, e.g. `2024-01-15T10:30:00`) to only return versions created strictly before this timestamp. Use this for consistent pagination.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Contracts`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contracts.GetApiV1ContractsContractIdVersions(
        new GetApiV1ContractsContractIdVersionsRequest { ContractId = "some example string" });
    // TODO: Handle 'response' of type PublicApiListContractVersionsResponse
}
catch (ApiException<GetApiV1ContractsContractIdVersionsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ContractsContractIdVersionsRequest](src/Soda/Requests/Contracts/GetApiV1ContractsContractIdVersionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiListContractVersionsResponse](src/Soda/Models/PublicApiListContractVersionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ContractsContractIdVersionsError](src/Soda/Errors/GetApiV1ContractsContractIdVersionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiGetContractResponse&gt; PostApiV1Contracts(PostApiV1ContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to create a new contract on a dataset. The contract is initialized with a template containing the dataset identifier and an empty columns list. Use the publish endpoint to replace this with your full contract YAML.

Provide either `datasetId` or `datasetQualifiedName` in the request body to identify the target dataset. Exactly one must be supplied. If both are supplied, the request is rejected with a 400 error.

## Authorization

Only users with **Manage contracts** permission can create contracts.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Contracts`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contracts.PostApiV1Contracts(new PostApiV1ContractsRequest
    {
        Body = new PublicApiCreateContractRequestDto { Contents = "some example string" },
    });
    // TODO: Handle 'response' of type PublicApiGetContractResponse
}
catch (ApiException<PostApiV1ContractsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ContractsRequest](src/Soda/Requests/Contracts/PostApiV1ContractsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiGetContractResponse](src/Soda/Models/PublicApiGetContractResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ContractsError](src/Soda/Errors/PostApiV1ContractsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostApiV1ContractsActionsCreateSkeleton(PostApiV1ContractsActionsCreateSkeletonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers skeleton contract generation for a single dataset based on its schema.

The dataset must be connected to a Soda Runner and must not already have a published contract.

Provide either `datasetId` (UUID) or `datasetQualifiedName` (e.g. `my_datasource/my_schema/my_table`). Exactly one must be supplied.

Returns `202 Accepted` with a `Location` header pointing to the status endpoint. Use the status endpoint to monitor the progress of the skeleton generation.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Contracts`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Contracts.PostApiV1ContractsActionsCreateSkeleton(new PostApiV1ContractsActionsCreateSkeletonRequest
    {
        Body = new PublicApiCreateSkeletonContractRequestDto(),
    });
}
catch (ApiException<PostApiV1ContractsActionsCreateSkeletonError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ContractsActionsCreateSkeletonRequest](src/Soda/Requests/Contracts/PostApiV1ContractsActionsCreateSkeletonRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ContractsActionsCreateSkeletonError](src/Soda/Errors/PostApiV1ContractsActionsCreateSkeletonError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostApiV1ContractsActionsGenerate(PostApiV1ContractsActionsGenerateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers AI-powered contract generation for one or more datasets. The contract generation runs asynchronously.

Each dataset must be connected to a Soda Runner and must not already have a contract. If any dataset is not eligible, the request is rejected with a `400` response listing the ineligible datasets and reasons.

Provide `datasetIds` (list of UUIDs) and/or `datasetQualifiedNames` (list of qualified names, e.g. `my_datasource/my_schema/my_table`). Both lists are additive. At least one must be non-empty.

Returns `202 Accepted` with a `Location` header pointing to the status endpoint. Use the status endpoint to monitor the progress of the contract generation.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Contracts`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Contracts.PostApiV1ContractsActionsGenerate(new PostApiV1ContractsActionsGenerateRequest
    {
        Body = new PublicApiGenerateContractRequestDto(),
    });
}
catch (ApiException<PostApiV1ContractsActionsGenerateError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ContractsActionsGenerateRequest](src/Soda/Requests/Contracts/PostApiV1ContractsActionsGenerateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ContractsActionsGenerateError](src/Soda/Errors/PostApiV1ContractsActionsGenerateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiGetContractResponse&gt; PostApiV1ContractsContractId(PostApiV1ContractsContractIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to publish new YAML content for an existing contract.

The `contents` field must contain valid Soda contract YAML. If the YAML is malformed or does not conform to the contract schema, the request is rejected with a 400 error.

The `dataset` in the YAML must name the dataset that `contractId` belongs to. Contents naming a different dataset are rejected with a 400 error.

## Authorization

Only users with **Manage contracts** permission can publish contracts.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Contracts`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Contracts.PostApiV1ContractsContractId(new PostApiV1ContractsContractIdRequest
    {
        ContractId = "some example string",
        Body = new PublicApiPublishContractRequestDto { Contents = "some example string" },
    });
    // TODO: Handle 'response' of type PublicApiGetContractResponse
}
catch (ApiException<PostApiV1ContractsContractIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ContractsContractIdRequest](src/Soda/Requests/Contracts/PostApiV1ContractsContractIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiGetContractResponse](src/Soda/Models/PublicApiGetContractResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ContractsContractIdError](src/Soda/Errors/PostApiV1ContractsContractIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostApiV1ContractsContractIdVerify(PostApiV1ContractsContractIdVerifyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint triggers a contract verification scan for the specified contract.

The response, when successful, is `201` and contains headers `Location` and `X-Soda-Scan-Id` which identify the triggered scan. Use the value of `X-Soda-Scan-Id` in the `scanId` parameter of the **Get scan status**, **Get scan logs**, and **Cancel a scan** endpoints.

Optionally, you can provide `checkPaths` to limit verification to specific checks within the contract. Note: `checkPaths` may not be available for all organizations.

## Authorization

Only users with **Manage contracts** permission can verify contracts.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Contracts`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Contracts.PostApiV1ContractsContractIdVerify(new PostApiV1ContractsContractIdVerifyRequest
    {
        ContractId = "some example string",
        Body = new PublicApiVerifyContractRequestDto(),
    });
}
catch (ApiException<PostApiV1ContractsContractIdVerifyError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1ContractsContractIdVerifyRequest](src/Soda/Requests/Contracts/PostApiV1ContractsContractIdVerifyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1ContractsContractIdVerifyError](src/Soda/Errors/PostApiV1ContractsContractIdVerifyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DataSources

> Source: [DataSources](src/Soda/Api/DataSources.cs)

<details>
<summary><code>Task&lt;PublicApiDeleteDatasourceRoleResponse&gt; DeleteApiV1DatasourcesRolesRoleId(DeleteApiV1DatasourcesRolesRoleIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to delete a custom datasource role from your organization's Soda Cloud account. Datasource roles define a named set of permissions that control what actions users can perform on individual datasources, such as creating datasets, managing datasource settings, managing permissions, or deleting the datasource.

Deletion is performed asynchronously and may take some time to complete.

Deletion will fail if the role is still assigned to any datasource permissions or used in responsibility settings.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

## Tags

`Datasources`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.DeleteApiV1DatasourcesRolesRoleId(
        new DeleteApiV1DatasourcesRolesRoleIdRequest { RoleId = "some example string" });
    // TODO: Handle 'response' of type PublicApiDeleteDatasourceRoleResponse
}
catch (ApiException<DeleteApiV1DatasourcesRolesRoleIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1DatasourcesRolesRoleIdRequest](src/Soda/Requests/DataSources/DeleteApiV1DatasourcesRolesRoleIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDeleteDatasourceRoleResponse](src/Soda/Models/PublicApiDeleteDatasourceRoleResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1DatasourcesRolesRoleIdError](src/Soda/Errors/DeleteApiV1DatasourcesRolesRoleIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiDeleteDatasourceResponse&gt; DeleteApiV1DatasourcesDatasourceId(DeleteApiV1DatasourcesDatasourceIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an existing datasource and all its associated resources.

The deletion is performed asynchronously.

## Authorization

Users with the **Delete** permission on the datasource, or the organization-level **Manage datasources and runners** permission, can delete it.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasources`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.DeleteApiV1DatasourcesDatasourceId(
        new DeleteApiV1DatasourcesDatasourceIdRequest { DatasourceId = "some example string" });
    // TODO: Handle 'response' of type PublicApiDeleteDatasourceResponse
}
catch (ApiException<DeleteApiV1DatasourcesDatasourceIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1DatasourcesDatasourceIdRequest](src/Soda/Requests/DataSources/DeleteApiV1DatasourcesDatasourceIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDeleteDatasourceResponse](src/Soda/Models/PublicApiDeleteDatasourceResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1DatasourcesDatasourceIdError](src/Soda/Errors/DeleteApiV1DatasourcesDatasourceIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiListDatasourcesResponse&gt; GetApiV1Datasources(GetApiV1DatasourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to list datasources in your organization.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

- `page`: Supply an integer value. The default value is 0.

- `search`: Supply a string value to filter datasources by name (case-insensitive partial match).

## Authorization

Soda only returns datasources for which the user has the **View** permission. Soda Cloud Admins have access to all datasources.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasources`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.GetApiV1Datasources(new GetApiV1DatasourcesRequest());
    // TODO: Handle 'response' of type PublicApiListDatasourcesResponse
}
catch (ApiException<GetApiV1DatasourcesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasourcesRequest](src/Soda/Requests/DataSources/GetApiV1DatasourcesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiListDatasourcesResponse](src/Soda/Models/PublicApiListDatasourcesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasourcesError](src/Soda/Errors/GetApiV1DatasourcesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiTestConnectionStatusResponse&gt; GetApiV1DatasourcesActionsTestConnectionOperationId(GetApiV1DatasourcesActionsTestConnectionOperationIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to check the status of an asynchronous connection test operation.

Use the operation ID returned by the test connection endpoint to poll for its current state.

## Authorization

Any authenticated Soda Cloud user in your organization may poll the status of a connection test operation.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasources`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.GetApiV1DatasourcesActionsTestConnectionOperationId(
        new GetApiV1DatasourcesActionsTestConnectionOperationIdRequest { OperationId = "some example string" });
    // TODO: Handle 'response' of type PublicApiTestConnectionStatusResponse
}
catch (ApiException<GetApiV1DatasourcesActionsTestConnectionOperationIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasourcesActionsTestConnectionOperationIdRequest](src/Soda/Requests/DataSources/GetApiV1DatasourcesActionsTestConnectionOperationIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiTestConnectionStatusResponse](src/Soda/Models/PublicApiTestConnectionStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasourcesActionsTestConnectionOperationIdError](src/Soda/Errors/GetApiV1DatasourcesActionsTestConnectionOperationIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiDatasourceRolesResponse&gt; GetApiV1DatasourcesRoles(GetApiV1DatasourcesRolesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to gather information about the datasource roles available in your organization's Soda Cloud account. Use the datasource roles to manage access to individual datasources.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 10 and 100, inclusive. The default value is 100.

- `page`: Supply an integer value. The default value is 0.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Any Soda Cloud user in your organization may execute this query.

## Tags

`Datasources`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.GetApiV1DatasourcesRoles(new GetApiV1DatasourcesRolesRequest());
    // TODO: Handle 'response' of type PublicApiDatasourceRolesResponse
}
catch (ApiException<GetApiV1DatasourcesRolesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasourcesRolesRequest](src/Soda/Requests/DataSources/GetApiV1DatasourcesRolesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDatasourceRolesResponse](src/Soda/Models/PublicApiDatasourceRolesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasourcesRolesError](src/Soda/Errors/GetApiV1DatasourcesRolesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiGetDatasourceResponse&gt; GetApiV1DatasourcesDatasourceId(GetApiV1DatasourcesDatasourceIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve a specific datasource by its ID.

## Authorization

Users with the **View** permission on the datasource can retrieve its details.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasources`

## Rate limiting

1000 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.GetApiV1DatasourcesDatasourceId(new GetApiV1DatasourcesDatasourceIdRequest
    {
        DatasourceId = "some example string",
    });
    // TODO: Handle 'response' of type PublicApiGetDatasourceResponse
}
catch (ApiException<GetApiV1DatasourcesDatasourceIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasourcesDatasourceIdRequest](src/Soda/Requests/DataSources/GetApiV1DatasourcesDatasourceIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiGetDatasourceResponse](src/Soda/Models/PublicApiGetDatasourceResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasourcesDatasourceIdError](src/Soda/Errors/GetApiV1DatasourcesDatasourceIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiDatasourceDiagnosticsWarehouseResponse&gt; GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve the diagnostics warehouse configuration for a specific datasource in your organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely forwards it to the customer's warehouse for storage and analysis.

## Authorization

Users with the **View** permission on the datasource can retrieve its diagnostics warehouse configuration.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasources`

## Rate limiting

1000 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(
        new GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest { DatasourceId = "some example string" });
    // TODO: Handle 'response' of type PublicApiDatasourceDiagnosticsWarehouseResponse
}
catch (ApiException<GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest](src/Soda/Requests/DataSources/GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDatasourceDiagnosticsWarehouseResponse](src/Soda/Models/PublicApiDatasourceDiagnosticsWarehouseResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError](src/Soda/Errors/GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiOnboardDatasetsStatusResponse&gt; GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationId(GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to check the status of an asynchronous dataset onboarding operation.

Use the operation ID returned by the onboard datasets endpoint to poll for its current state.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasources`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationId(
        new GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdRequest
        {
            DatasourceId = "some example string",
            OperationId = "some example string",
        });
    // TODO: Handle 'response' of type PublicApiOnboardDatasetsStatusResponse
}
catch (ApiException<GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdRequest](src/Soda/Requests/DataSources/GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiOnboardDatasetsStatusResponse](src/Soda/Models/PublicApiOnboardDatasetsStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError](src/Soda/Errors/GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiDatasourceResponsibilitiesResponse&gt; GetApiV1DatasourcesDatasourceIdResponsibilities(GetApiV1DatasourcesDatasourceIdResponsibilitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to gather information about the user and user groups permissions assigned to a datasource, and their associated roles in your organization's Soda Cloud account.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 1 and 100, inclusive. The default value is 100.

- `page`: Supply an integer value. The default value is 0.

## Authorization

Soda only returns the datasource responsibilities to which the user has **View datasource** permissions. Soda Cloud Admins have access to all datasource responsibilities.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasources`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.GetApiV1DatasourcesDatasourceIdResponsibilities(
        new GetApiV1DatasourcesDatasourceIdResponsibilitiesRequest { DatasourceId = "some example string" });
    // TODO: Handle 'response' of type PublicApiDatasourceResponsibilitiesResponse
}
catch (ApiException<GetApiV1DatasourcesDatasourceIdResponsibilitiesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasourcesDatasourceIdResponsibilitiesRequest](src/Soda/Requests/DataSources/GetApiV1DatasourcesDatasourceIdResponsibilitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDatasourceResponsibilitiesResponse](src/Soda/Models/PublicApiDatasourceResponsibilitiesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasourcesDatasourceIdResponsibilitiesError](src/Soda/Errors/GetApiV1DatasourcesDatasourceIdResponsibilitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiCreateDatasourceResponse&gt; PostApiV1Datasources(PostApiV1DatasourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new V4 datasource with the provided configuration.

The datasource type is extracted from the YAML configuration file contents.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

## Tags

`Datasources`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.PostApiV1Datasources(new PostApiV1DatasourcesRequest
    {
        Body = new PublicApiCreateDatasourceRequestDto { ConfigurationFileContents = "some example string" },
    });
    // TODO: Handle 'response' of type PublicApiCreateDatasourceResponse
}
catch (ApiException<PostApiV1DatasourcesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasourcesRequest](src/Soda/Requests/DataSources/PostApiV1DatasourcesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiCreateDatasourceResponse](src/Soda/Models/PublicApiCreateDatasourceResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasourcesError](src/Soda/Errors/PostApiV1DatasourcesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostApiV1DatasourcesActionsTestConnection(PostApiV1DatasourcesActionsTestConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint triggers an asynchronous connection test for a datasource configuration.

The response includes an operation ID that you can use to poll the status of the connection test.

## Authorization

Any authenticated Soda Cloud user in your organization may test a datasource connection. The test runs against a configuration provided in the request, not against an existing datasource.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasources`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.DataSources.PostApiV1DatasourcesActionsTestConnection(
        new PostApiV1DatasourcesActionsTestConnectionRequest
        {
            Body = new PublicApiTestConnectionRequestDto
            {
                ConfigurationFileContents = "some example string",
                RunnerId = "some example string",
            },
        });
}
catch (ApiException<PostApiV1DatasourcesActionsTestConnectionError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasourcesActionsTestConnectionRequest](src/Soda/Requests/DataSources/PostApiV1DatasourcesActionsTestConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasourcesActionsTestConnectionError](src/Soda/Errors/PostApiV1DatasourcesActionsTestConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiCreateDatasourceRoleResponse&gt; PostApiV1DatasourcesRoles(PostApiV1DatasourcesRolesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to create a new custom datasource role in your organization's Soda Cloud account. Datasource roles define a named set of permissions that control what actions users can perform on individual datasources, such as creating datasets, managing datasource settings, managing permissions, or deleting the datasource.

Once created, the role can be assigned to users or user groups via the datasource responsibilities endpoints.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

## Tags

`Datasources`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.PostApiV1DatasourcesRoles(new PostApiV1DatasourcesRolesRequest
    {
        Body = new PublicApiDatasourceRoleRequestDto { Name = "some example string" },
    });
    // TODO: Handle 'response' of type PublicApiCreateDatasourceRoleResponse
}
catch (ApiException<PostApiV1DatasourcesRolesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasourcesRolesRequest](src/Soda/Requests/DataSources/PostApiV1DatasourcesRolesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiCreateDatasourceRoleResponse](src/Soda/Models/PublicApiCreateDatasourceRoleResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasourcesRolesError](src/Soda/Errors/PostApiV1DatasourcesRolesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiUpdateDatasourceRoleResponse&gt; PostApiV1DatasourcesRolesRoleId(PostApiV1DatasourcesRolesRoleIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to update the name or permissions of an existing custom datasource role. Datasource roles define a named set of permissions that control what actions users can perform on individual datasources, such as creating datasets, managing datasource settings, managing permissions, or deleting the datasource.

Changes apply immediately to all users and user groups assigned this role.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

## Tags

`Datasources`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.PostApiV1DatasourcesRolesRoleId(new PostApiV1DatasourcesRolesRoleIdRequest
    {
        RoleId = "some example string",
        Body = new PublicApiDatasourceRoleRequestDto { Name = "some example string" },
    });
    // TODO: Handle 'response' of type PublicApiUpdateDatasourceRoleResponse
}
catch (ApiException<PostApiV1DatasourcesRolesRoleIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasourcesRolesRoleIdRequest](src/Soda/Requests/DataSources/PostApiV1DatasourcesRolesRoleIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiUpdateDatasourceRoleResponse](src/Soda/Models/PublicApiUpdateDatasourceRoleResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasourcesRolesRoleIdError](src/Soda/Errors/PostApiV1DatasourcesRolesRoleIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiUpdateDatasourceResponse&gt; PostApiV1DatasourcesDatasourceId(PostApiV1DatasourcesDatasourceIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing contract (V4) datasource.

Only the fields provided in the request body will be updated.

## Authorization

Users with the **Manage datasource settings** permission on the datasource, or the organization-level **Manage datasources and runners** permission, can update its configuration.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasources`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.PostApiV1DatasourcesDatasourceId(new PostApiV1DatasourcesDatasourceIdRequest
    {
        DatasourceId = "some example string",
        Body = new PublicApiUpdateDatasourceRequestDto(),
    });
    // TODO: Handle 'response' of type PublicApiUpdateDatasourceResponse
}
catch (ApiException<PostApiV1DatasourcesDatasourceIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasourcesDatasourceIdRequest](src/Soda/Requests/DataSources/PostApiV1DatasourcesDatasourceIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiUpdateDatasourceResponse](src/Soda/Models/PublicApiUpdateDatasourceResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasourcesDatasourceIdError](src/Soda/Errors/PostApiV1DatasourcesDatasourceIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiDatasourceDiagnosticsWarehouseResponse&gt; PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to update the diagnostics warehouse configuration for a specific datasource in your organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely stores it in your warehouse for storage and analysis.

## Table name template

The `tableNameTemplate` field controls how diagnostic tables are named in the warehouse. Use the `{dataset_name}` placeholder to include the source dataset name. For example, `dwh_{dataset_name}_failed` produces table names like `dwh_orders_failed`.

## Authorization

Users with the **Manage datasource settings** permission on the datasource, or the organization-level **Manage datasources and runners** permission, can update its diagnostics warehouse configuration.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasources`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouse(
        new PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest
        {
            DatasourceId = "some example string",
            Body = new PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto(),
        });
    // TODO: Handle 'response' of type PublicApiDatasourceDiagnosticsWarehouseResponse
}
catch (ApiException<PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest](src/Soda/Requests/DataSources/PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDatasourceDiagnosticsWarehouseResponse](src/Soda/Models/PublicApiDatasourceDiagnosticsWarehouseResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError](src/Soda/Errors/PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostApiV1DatasourcesDatasourceIdDiscover(PostApiV1DatasourcesDatasourceIdDiscoverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint triggers a discovery scan on the specified datasource.

Discovery scans detect new tables and schemas in the datasource. Use this to run discovery on-demand instead of waiting for the scheduled cron.

The response includes a `Location` header and `X-Soda-Scan-Id` header identifying the triggered scan. Use the scan ID with the **Get scan status** endpoint to poll for completion.

## Authorization

Users with the **Manage datasource settings** permission on the datasource, or the organization-level **Manage datasources and runners** permission, can trigger discovery on the datasource.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasources`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.DataSources.PostApiV1DatasourcesDatasourceIdDiscover(
        new PostApiV1DatasourcesDatasourceIdDiscoverRequest { DatasourceId = "some example string" });
}
catch (ApiException<PostApiV1DatasourcesDatasourceIdDiscoverError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasourcesDatasourceIdDiscoverRequest](src/Soda/Requests/DataSources/PostApiV1DatasourcesDatasourceIdDiscoverRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasourcesDatasourceIdDiscoverError](src/Soda/Errors/PostApiV1DatasourcesDatasourceIdDiscoverError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostApiV1DatasourcesDatasourceIdOnboardDatasets(PostApiV1DatasourcesDatasourceIdOnboardDatasetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint triggers the asynchronous onboarding of discovered datasets for a datasource.

Supply a list of discovered dataset IDs in the request body to onboard them as datasets.

The response includes an onboarding ID that you can use to poll the status of the onboarding process.

## Authorization

Users with the **Create datasets** permission on the datasource, or the organization-level **Create new datasources and datasets** permission, can onboard discovered datasets.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasources`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.DataSources.PostApiV1DatasourcesDatasourceIdOnboardDatasets(
        new PostApiV1DatasourcesDatasourceIdOnboardDatasetsRequest
        {
            DatasourceId = "some example string",
            Body = new PublicApiOnboardDatasetsRequestDto { DiscoveredDatasetIds = ["some example string"] },
        });
}
catch (ApiException<PostApiV1DatasourcesDatasourceIdOnboardDatasetsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasourcesDatasourceIdOnboardDatasetsRequest](src/Soda/Requests/DataSources/PostApiV1DatasourcesDatasourceIdOnboardDatasetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasourcesDatasourceIdOnboardDatasetsError](src/Soda/Errors/PostApiV1DatasourcesDatasourceIdOnboardDatasetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostApiV1DatasourcesDatasourceIdResponsibilities(PostApiV1DatasourcesDatasourceIdResponsibilitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to update the user and user groups permissions and their associated roles for a datasource in your organization's Soda Cloud account.

**Note**: This API fully replaces the existing responsibilities. The entire list of responsibilities must be provided in the request, including both new and existing entries, as any omissions will result in their removal.

## Authorization

Only users with **Manage datasource responsibilities** permission can update datasource responsibilities. Soda Cloud Admins have permission to update all datasources responsibilities.The Response of this call, when successful, is `201` and contains header `Location` which identify the URL where the responsibilities will eventually become available.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasources`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.DataSources.PostApiV1DatasourcesDatasourceIdResponsibilities(
        new PostApiV1DatasourcesDatasourceIdResponsibilitiesRequest
        {
            DatasourceId = "some example string",
            Body = new PublicApiUpdateDatasourceResponsibilitiesRequestDto
            {
                Responsibilities = [
                    new DatasourceResponsibilityContentRequestDto
                    {
                        RoleId = "some example string",
                        Type = ResponsibilityTypeDto.User,
                    },
                ],
            },
        });
}
catch (ApiException<PostApiV1DatasourcesDatasourceIdResponsibilitiesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasourcesDatasourceIdResponsibilitiesRequest](src/Soda/Requests/DataSources/PostApiV1DatasourcesDatasourceIdResponsibilitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasourcesDatasourceIdResponsibilitiesError](src/Soda/Errors/PostApiV1DatasourcesDatasourceIdResponsibilitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DataStandards

> Source: [DataStandards](src/Soda/Api/DataStandards.cs)

<details>
<summary><code>Task&lt;PublicApiDeleteDataStandardResponse&gt; DeleteApiV1DataStandardsDataStandardId(DeleteApiV1DataStandardsDataStandardIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a data standard for deletion. Deletion is processed asynchronously: the standard and its dataset associations, owners and YAML file are removed in the background.

## Authorization

Only users with **Manage data standards** permission can delete data standards.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

## Tags

`Data Standards`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataStandards.DeleteApiV1DataStandardsDataStandardId(
        new DeleteApiV1DataStandardsDataStandardIdRequest { DataStandardId = "some example string" });
    // TODO: Handle 'response' of type PublicApiDeleteDataStandardResponse
}
catch (ApiException<DeleteApiV1DataStandardsDataStandardIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1DataStandardsDataStandardIdRequest](src/Soda/Requests/DataStandards/DeleteApiV1DataStandardsDataStandardIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDeleteDataStandardResponse](src/Soda/Models/PublicApiDeleteDataStandardResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1DataStandardsDataStandardIdError](src/Soda/Errors/DeleteApiV1DataStandardsDataStandardIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiListDataStandardsResponse&gt; GetApiV1DataStandards(GetApiV1DataStandardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to list the data standards in your organization.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

- `page`: Supply an integer value. The default value is 0.

- `search`: Optionally, use this parameter to perform a fuzzy search on the data standard name and label.

- `status`: Optionally, use this parameter to list only data standards with a given status (`draft`, `active`, `paused`, or `invalid`).

- `sort`: Optionally, sort the results by `name` (default) or `label`.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Data Standards`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataStandards.GetApiV1DataStandards(new GetApiV1DataStandardsRequest());
    // TODO: Handle 'response' of type PublicApiListDataStandardsResponse
}
catch (ApiException<GetApiV1DataStandardsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DataStandardsRequest](src/Soda/Requests/DataStandards/GetApiV1DataStandardsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiListDataStandardsResponse](src/Soda/Models/PublicApiListDataStandardsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DataStandardsError](src/Soda/Errors/GetApiV1DataStandardsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiDataStandardsActivityResponse&gt; GetApiV1DataStandardsActivity(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint returns an organization-wide rollup of data standards activity, including counts of active and total standards, matched datasets, and check results.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Data Standards`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataStandards.GetApiV1DataStandardsActivity();
    // TODO: Handle 'response' of type PublicApiDataStandardsActivityResponse
}
catch (ApiException<GetApiV1DataStandardsActivityError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDataStandardsActivityResponse](src/Soda/Models/PublicApiDataStandardsActivityResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DataStandardsActivityError](src/Soda/Errors/GetApiV1DataStandardsActivityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiGetDataStandardResponse&gt; GetApiV1DataStandardsDataStandardId(GetApiV1DataStandardsDataStandardIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve a specific data standard, including its YAML contents and scope.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Data Standards`

## Rate limiting

1000 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataStandards.GetApiV1DataStandardsDataStandardId(
        new GetApiV1DataStandardsDataStandardIdRequest { DataStandardId = "some example string" });
    // TODO: Handle 'response' of type PublicApiGetDataStandardResponse
}
catch (ApiException<GetApiV1DataStandardsDataStandardIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DataStandardsDataStandardIdRequest](src/Soda/Requests/DataStandards/GetApiV1DataStandardsDataStandardIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiGetDataStandardResponse](src/Soda/Models/PublicApiGetDataStandardResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DataStandardsDataStandardIdError](src/Soda/Errors/GetApiV1DataStandardsDataStandardIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiListDataStandardChecksResponse&gt; GetApiV1DataStandardsDataStandardIdChecks(GetApiV1DataStandardsDataStandardIdChecksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to list the aggregated checks of a specific data standard.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

- `page`: Supply an integer value. The default value is 0.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Data Standards`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataStandards.GetApiV1DataStandardsDataStandardIdChecks(
        new GetApiV1DataStandardsDataStandardIdChecksRequest { DataStandardId = "some example string" });
    // TODO: Handle 'response' of type PublicApiListDataStandardChecksResponse
}
catch (ApiException<GetApiV1DataStandardsDataStandardIdChecksError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DataStandardsDataStandardIdChecksRequest](src/Soda/Requests/DataStandards/GetApiV1DataStandardsDataStandardIdChecksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiListDataStandardChecksResponse](src/Soda/Models/PublicApiListDataStandardChecksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DataStandardsDataStandardIdChecksError](src/Soda/Errors/GetApiV1DataStandardsDataStandardIdChecksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiListDataStandardDatasetsResponse&gt; GetApiV1DataStandardsDataStandardIdDatasets(GetApiV1DataStandardsDataStandardIdDatasetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to list the datasets matched by a specific data standard.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

- `page`: Supply an integer value. The default value is 0.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Data Standards`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataStandards.GetApiV1DataStandardsDataStandardIdDatasets(
        new GetApiV1DataStandardsDataStandardIdDatasetsRequest { DataStandardId = "some example string" });
    // TODO: Handle 'response' of type PublicApiListDataStandardDatasetsResponse
}
catch (ApiException<GetApiV1DataStandardsDataStandardIdDatasetsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DataStandardsDataStandardIdDatasetsRequest](src/Soda/Requests/DataStandards/GetApiV1DataStandardsDataStandardIdDatasetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiListDataStandardDatasetsResponse](src/Soda/Models/PublicApiListDataStandardDatasetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DataStandardsDataStandardIdDatasetsError](src/Soda/Errors/GetApiV1DataStandardsDataStandardIdDatasetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiCreateDataStandardResponse&gt; PostApiV1DataStandards(PostApiV1DataStandardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to create a new data standard from YAML contents, a structured scope, status, owners and an optional schedule.

The `contents` field must contain valid data standard YAML. If the YAML is malformed, the request is rejected with a 400 error.

## Authorization

Only users with **Manage data standards** permission can create data standards.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

## Tags

`Data Standards`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataStandards.PostApiV1DataStandards(new PostApiV1DataStandardsRequest
    {
        Body = new PublicApiDataStandardRequestDto
        {
            Contents = "some example string",
            Name = "some example string",
            Owners = [new DataStandardOwnerRequestDto { Type = DatasetOwnerTypeDto.User }],
            Status = DataStandardStatusDto.Draft,
        },
    });
    // TODO: Handle 'response' of type PublicApiCreateDataStandardResponse
}
catch (ApiException<PostApiV1DataStandardsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DataStandardsRequest](src/Soda/Requests/DataStandards/PostApiV1DataStandardsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiCreateDataStandardResponse](src/Soda/Models/PublicApiCreateDataStandardResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DataStandardsError](src/Soda/Errors/PostApiV1DataStandardsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiExecuteDataStandardsResponse&gt; PostApiV1DataStandardsActionsExecute(PostApiV1DataStandardsActionsExecuteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint triggers a scan that runs the active data standards linked to the specified dataset.

The response, when successful, is `201` and contains the header `X-Soda-Scan-Id` and a `Location` header which identify the triggered scan. Use the value of `X-Soda-Scan-Id` in the `scanId` parameter of the **Get scan status**, **Get scan logs**, and **Cancel a scan** endpoints.

## Authorization

Only users with **Manage data standards** permission can execute data standards.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

## Tags

`Data Standards`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataStandards.PostApiV1DataStandardsActionsExecute(
        new PostApiV1DataStandardsActionsExecuteRequest
        {
            Body = new PublicApiExecuteDataStandardsRequestDto { DatasetId = "some example string" },
        });
    // TODO: Handle 'response' of type PublicApiExecuteDataStandardsResponse
}
catch (ApiException<PostApiV1DataStandardsActionsExecuteError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DataStandardsActionsExecuteRequest](src/Soda/Requests/DataStandards/PostApiV1DataStandardsActionsExecuteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiExecuteDataStandardsResponse](src/Soda/Models/PublicApiExecuteDataStandardsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DataStandardsActionsExecuteError](src/Soda/Errors/PostApiV1DataStandardsActionsExecuteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiPreviewDataStandardScopeResponse&gt; PostApiV1DataStandardsActionsPreviewScope(PostApiV1DataStandardsActionsPreviewScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint evaluates a candidate scope and returns the datasets that would match it, without creating or modifying any data standard.

The `scope` uses the same structured rule grammar as the create-data-standard endpoint. An omitted or empty scope matches **all** datasets, mirroring how a data standard without a scope applies to every dataset. Results are paged with `page` (0-based, default 0) and `size` (between 1 and 1000, default 10).

## Authorization

Only users with **Manage data standards** permission can preview a data standard scope.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

## Tags

`Data Standards`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataStandards.PostApiV1DataStandardsActionsPreviewScope(
        new PostApiV1DataStandardsActionsPreviewScopeRequest
        {
            Body = new PublicApiPreviewDataStandardScopeRequestDto(),
        });
    // TODO: Handle 'response' of type PublicApiPreviewDataStandardScopeResponse
}
catch (ApiException<PostApiV1DataStandardsActionsPreviewScopeError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DataStandardsActionsPreviewScopeRequest](src/Soda/Requests/DataStandards/PostApiV1DataStandardsActionsPreviewScopeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiPreviewDataStandardScopeResponse](src/Soda/Models/PublicApiPreviewDataStandardScopeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DataStandardsActionsPreviewScopeError](src/Soda/Errors/PostApiV1DataStandardsActionsPreviewScopeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiTestDataStandardResponse&gt; PostApiV1DataStandardsActionsTest(PostApiV1DataStandardsActionsTestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint runs the checks of an unsaved data standard against one dataset's live data, without creating or modifying any data standard. The tested standard does not appear in your data standards and no checks or check results are persisted; the outcome is only visible on the triggered scan.

The `contents` field must contain valid data standard YAML. If the YAML is malformed, the request is rejected with a 400 error.

The response, when successful, is `201` and contains the header `X-Soda-Scan-Id` and a `Location` header which identify the triggered scan. Use the value of `X-Soda-Scan-Id` in the `scanId` parameter of the **Get scan status**, **Get scan logs**, and **Cancel a scan** endpoints.

## Authorization

Only users with **Manage data standards** permission who can view the dataset's datasource can test a data standard.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

## Tags

`Data Standards`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataStandards.PostApiV1DataStandardsActionsTest(
        new PostApiV1DataStandardsActionsTestRequest
        {
            Body = new PublicApiTestDataStandardRequestDto
            {
                Contents = "some example string",
                DatasetId = "some example string",
            },
        });
    // TODO: Handle 'response' of type PublicApiTestDataStandardResponse
}
catch (ApiException<PostApiV1DataStandardsActionsTestError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DataStandardsActionsTestRequest](src/Soda/Requests/DataStandards/PostApiV1DataStandardsActionsTestRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiTestDataStandardResponse](src/Soda/Models/PublicApiTestDataStandardResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DataStandardsActionsTestError](src/Soda/Errors/PostApiV1DataStandardsActionsTestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiUpdateDataStandardResponse&gt; PostApiV1DataStandardsDataStandardId(PostApiV1DataStandardsDataStandardIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to replace an existing data standard's YAML contents, scope, status, owners and schedule.

The `contents` field must contain valid data standard YAML. If the YAML is malformed, the request is rejected with a 400 error.

## Authorization

Only users with **Manage data standards** permission can update data standards.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

## Tags

`Data Standards`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataStandards.PostApiV1DataStandardsDataStandardId(
        new PostApiV1DataStandardsDataStandardIdRequest
        {
            DataStandardId = "some example string",
            Body = new PublicApiDataStandardRequestDto
            {
                Contents = "some example string",
                Name = "some example string",
                Owners = [new DataStandardOwnerRequestDto { Type = DatasetOwnerTypeDto.User }],
                Status = DataStandardStatusDto.Draft,
            },
        });
    // TODO: Handle 'response' of type PublicApiUpdateDataStandardResponse
}
catch (ApiException<PostApiV1DataStandardsDataStandardIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DataStandardsDataStandardIdRequest](src/Soda/Requests/DataStandards/PostApiV1DataStandardsDataStandardIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiUpdateDataStandardResponse](src/Soda/Models/PublicApiUpdateDataStandardResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DataStandardsDataStandardIdError](src/Soda/Errors/PostApiV1DataStandardsDataStandardIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiEvaluateDataStandardScopeResponse&gt; PostApiV1DataStandardsDataStandardIdActionsEvaluateScope(PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint re-evaluates a data standard's scope and returns the ids of the datasets that currently match it.

## Authorization

Only users with **Manage data standards** permission can evaluate a data standard's scope.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

## Tags

`Data Standards`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataStandards.PostApiV1DataStandardsDataStandardIdActionsEvaluateScope(
        new PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeRequest { DataStandardId = "some example string" });
    // TODO: Handle 'response' of type PublicApiEvaluateDataStandardScopeResponse
}
catch (ApiException<PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeRequest](src/Soda/Requests/DataStandards/PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiEvaluateDataStandardScopeResponse](src/Soda/Models/PublicApiEvaluateDataStandardScopeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError](src/Soda/Errors/PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiUpdateDataStandardStatusResponse&gt; PostApiV1DataStandardsDataStandardIdActionsStatus(PostApiV1DataStandardsDataStandardIdActionsStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint transitions a data standard to a new status without modifying its contents, scope, owners or schedule.

Allowed transitions are validated; an invalid transition is rejected with a 400 error.

## Authorization

Only users with **Manage data standards** permission can update a data standard's status.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

## Tags

`Data Standards`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataStandards.PostApiV1DataStandardsDataStandardIdActionsStatus(
        new PostApiV1DataStandardsDataStandardIdActionsStatusRequest
        {
            DataStandardId = "some example string",
            Body = new PublicApiUpdateDataStandardStatusRequestDto { Status = DataStandardStatusDto.Draft },
        });
    // TODO: Handle 'response' of type PublicApiUpdateDataStandardStatusResponse
}
catch (ApiException<PostApiV1DataStandardsDataStandardIdActionsStatusError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DataStandardsDataStandardIdActionsStatusRequest](src/Soda/Requests/DataStandards/PostApiV1DataStandardsDataStandardIdActionsStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiUpdateDataStandardStatusResponse](src/Soda/Models/PublicApiUpdateDataStandardStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DataStandardsDataStandardIdActionsStatusError](src/Soda/Errors/PostApiV1DataStandardsDataStandardIdActionsStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Datasets

> Source: [Datasets](src/Soda/Api/Datasets.cs)

<details>
<summary><code>Task&lt;PublicApiDeleteDatasetResponse&gt; DeleteApiV1DatasetsRolesRoleId(DeleteApiV1DatasetsRolesRoleIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to delete a custom dataset role from your organization's Soda Cloud account. Dataset roles define a named set of permissions that control what actions users can perform on individual datasets, such as managing checks, viewing profiling data, configuring the dataset, or managing incidents.

Deletion is performed asynchronously and may take some time to complete.

Deletion will fail if the role is still assigned to any dataset permissions or used in responsibility settings.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

## Tags

`Datasets`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.DeleteApiV1DatasetsRolesRoleId(new DeleteApiV1DatasetsRolesRoleIdRequest
    {
        RoleId = "some example string",
    });
    // TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
}
catch (ApiException<DeleteApiV1DatasetsRolesRoleIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1DatasetsRolesRoleIdRequest](src/Soda/Requests/Datasets/DeleteApiV1DatasetsRolesRoleIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDeleteDatasetResponse](src/Soda/Models/PublicApiDeleteDatasetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1DatasetsRolesRoleIdError](src/Soda/Errors/DeleteApiV1DatasetsRolesRoleIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiDeleteDatasetResponse&gt; DeleteApiV1DatasetsDatasetId(DeleteApiV1DatasetsDatasetIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to delete an existing dataset in your organization's Soda Cloud account.

Deletion is not immediate and can take some time to complete, depending on the size of your dataset. You can check the status of the deletion by calling the **Get dataset** endpoint.

## Authorization

Only users with **Delete dataset** permission can delete a dataset. Soda Cloud Admins have permission to delete any dataset.**See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.DeleteApiV1DatasetsDatasetId(new DeleteApiV1DatasetsDatasetIdRequest
    {
        DatasetId = "some example string",
    });
    // TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
}
catch (ApiException<DeleteApiV1DatasetsDatasetIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1DatasetsDatasetIdRequest](src/Soda/Requests/Datasets/DeleteApiV1DatasetsDatasetIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDeleteDatasetResponse](src/Soda/Models/PublicApiDeleteDatasetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1DatasetsDatasetIdError](src/Soda/Errors/DeleteApiV1DatasetsDatasetIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiDeleteDatasetResponse&gt; DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to delete a column metric monitor for a specific dataset in your organization's Soda Cloud account.

## Authorization

Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can delete column metric monitors. Soda Cloud Admins can delete column metric monitors for all datasets. **See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(
        new DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest
        {
            DatasetId = "some example string",
            MonitorId = "some example string",
        });
    // TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
}
catch (ApiException<DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest](src/Soda/Requests/Datasets/DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDeleteDatasetResponse](src/Soda/Models/PublicApiDeleteDatasetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError](src/Soda/Errors/DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiDeleteDatasetResponse&gt; DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to delete a custom SQL monitor for a specific dataset in your organization's Soda Cloud account.

## Authorization

Only users with **Manage contracts** permission can delete custom SQL monitors. Soda Cloud Admins can delete custom SQL monitors for all datasets. **See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(
        new DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest
        {
            DatasetId = "some example string",
            MonitorId = "some example string",
        });
    // TODO: Handle 'response' of type PublicApiDeleteDatasetResponse
}
catch (ApiException<DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest](src/Soda/Requests/Datasets/DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDeleteDatasetResponse](src/Soda/Models/PublicApiDeleteDatasetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError](src/Soda/Errors/DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiDatasetsResponse&gt; GetApiV1Datasets(GetApiV1DatasetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to gather information about the datasets that in exist in your organization's Soda Cloud account, including information about the Soda Cloud resources with which it is associated, such as data source, incidents, attributes and health status.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

- `page`: Supply an integer value. The default value is 0.

- `from`: Optionally, use this parameter to collect only the information for datasets that have been updated after a particular point in time. Supply an ISO8601 timestamp value. Example: `2023-12-31T10:15:30+01:00`

- `datasourceName`: Optionally, use this parameter to collect only the information for datasets associated with a specific datasource.

- `search`: Optionally, use this parameter to perform a fuzzy search on the dataset name.

If not specified, the query gathers information for all datasets in the account and sorts the results first by dataset name and then by datasource name in ascending order.

## Authorization

Soda only returns the datasets to which the user has **View dataset** permissions. Soda Cloud Admins have access to all datasets.**See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

30 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.GetApiV1Datasets(new GetApiV1DatasetsRequest());
    // TODO: Handle 'response' of type PublicApiDatasetsResponse
}
catch (ApiException<GetApiV1DatasetsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasetsRequest](src/Soda/Requests/Datasets/GetApiV1DatasetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDatasetsResponse](src/Soda/Models/PublicApiDatasetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasetsError](src/Soda/Errors/GetApiV1DatasetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DatasetsContentDto&gt; GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedName(GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to retrieve a single dataset by its qualified name (contractIdentifier) from your organization's Soda Cloud account.

## Authorization

Only users with **View dataset** permission can view a dataset. Soda Cloud Admins have permission to view any dataset. **See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

1000 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedName(
        new GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameRequest
        {
            DatasetQualifiedName = "some example string",
        });
    // TODO: Handle 'response' of type DatasetsContentDto
}
catch (ApiException<GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameRequest](src/Soda/Requests/Datasets/GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatasetsContentDto](src/Soda/Models/DatasetsContentDto.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError](src/Soda/Errors/GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiDatasetRolesResponse&gt; GetApiV1DatasetsRoles(GetApiV1DatasetsRolesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to gather information about the dataset roles available in your organization's Soda Cloud account. Use the dataset roles to manage access to individual datasets.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 10 and 100, inclusive. The default value is 100.

- `page`: Supply an integer value. The default value is 0.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Any Soda Cloud user in your organization may execute this query.

## Tags

`Datasets`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.GetApiV1DatasetsRoles(new GetApiV1DatasetsRolesRequest());
    // TODO: Handle 'response' of type PublicApiDatasetRolesResponse
}
catch (ApiException<GetApiV1DatasetsRolesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasetsRolesRequest](src/Soda/Requests/Datasets/GetApiV1DatasetsRolesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDatasetRolesResponse](src/Soda/Models/PublicApiDatasetRolesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasetsRolesError](src/Soda/Errors/GetApiV1DatasetsRolesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DatasetsContentDto&gt; GetApiV1DatasetsDatasetId(GetApiV1DatasetsDatasetIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to retrieve a single dataset by its ID from your organization's Soda Cloud account.

## Authorization

Only users with **View dataset** permission can view a dataset. Soda Cloud Admins have permission to view any dataset. **See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

1000 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.GetApiV1DatasetsDatasetId(new GetApiV1DatasetsDatasetIdRequest
    {
        DatasetId = "some example string",
    });
    // TODO: Handle 'response' of type DatasetsContentDto
}
catch (ApiException<GetApiV1DatasetsDatasetIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasetsDatasetIdRequest](src/Soda/Requests/Datasets/GetApiV1DatasetsDatasetIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatasetsContentDto](src/Soda/Models/DatasetsContentDto.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasetsDatasetIdError](src/Soda/Errors/GetApiV1DatasetsDatasetIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiListDatasetColumnsResponse&gt; GetApiV1DatasetsDatasetIdColumns(GetApiV1DatasetsDatasetIdColumnsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the active columns of a dataset, each with the attribute values currently assigned to it.

Columns are ordered by name ascending. Columns with no assigned attribute values are returned with an empty `attributes` map.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.

- `page`: Supply a non-negative integer. The default value is 0.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have dataset role permission VIEW to execute this call.

## Tags

`Datasets`

## Rate limiting

1000 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.GetApiV1DatasetsDatasetIdColumns(new GetApiV1DatasetsDatasetIdColumnsRequest
    {
        DatasetId = "some example string",
    });
    // TODO: Handle 'response' of type PublicApiListDatasetColumnsResponse
}
catch (ApiException<GetApiV1DatasetsDatasetIdColumnsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasetsDatasetIdColumnsRequest](src/Soda/Requests/Datasets/GetApiV1DatasetsDatasetIdColumnsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiListDatasetColumnsResponse](src/Soda/Models/PublicApiListDatasetColumnsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasetsDatasetIdColumnsError](src/Soda/Errors/GetApiV1DatasetsDatasetIdColumnsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DatasetComputeWarehouseConfigurationDto&gt; GetApiV1DatasetsDatasetIdComputeWarehouse(GetApiV1DatasetsDatasetIdComputeWarehouseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint retrieves the compute warehouse configuration for a specific dataset in your organization's Soda Cloud account. When the compute warehouse configuration is enabled, the warehouse in the configuration will be used for compute-heavy tasks like data contract execution, metric monitoring, and profiling.

## Authorization

Only users with **View dataset** permission can retrieve dataset compute warehouse configuration. Soda Cloud Admins have permission to view all datasets.**See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.GetApiV1DatasetsDatasetIdComputeWarehouse(
        new GetApiV1DatasetsDatasetIdComputeWarehouseRequest { DatasetId = "some example string" });
    // TODO: Handle 'response' of type DatasetComputeWarehouseConfigurationDto
}
catch (ApiException<GetApiV1DatasetsDatasetIdComputeWarehouseError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasetsDatasetIdComputeWarehouseRequest](src/Soda/Requests/Datasets/GetApiV1DatasetsDatasetIdComputeWarehouseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatasetComputeWarehouseConfigurationDto](src/Soda/Models/DatasetComputeWarehouseConfigurationDto.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasetsDatasetIdComputeWarehouseError](src/Soda/Errors/GetApiV1DatasetsDatasetIdComputeWarehouseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiDatasetDiagnosticsWarehouseResponse&gt; GetApiV1DatasetsDatasetIdDiagnosticsWarehouse(GetApiV1DatasetsDatasetIdDiagnosticsWarehouseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve detailed diagnostics warehouse information for a specific dataset in your organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely forwards it to the customer's warehouse for storage and analysis.

## Authorization

Only users with **View dataset** permission can view dataset diagnostics warehouse. Soda Cloud Admins have access to diagnostics warehouse information for all datasets.**See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

1000 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.GetApiV1DatasetsDatasetIdDiagnosticsWarehouse(
        new GetApiV1DatasetsDatasetIdDiagnosticsWarehouseRequest { DatasetId = "some example string" });
    // TODO: Handle 'response' of type PublicApiDatasetDiagnosticsWarehouseResponse
}
catch (ApiException<GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasetsDatasetIdDiagnosticsWarehouseRequest](src/Soda/Requests/Datasets/GetApiV1DatasetsDatasetIdDiagnosticsWarehouseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDatasetDiagnosticsWarehouseResponse](src/Soda/Models/PublicApiDatasetDiagnosticsWarehouseResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError](src/Soda/Errors/GetApiV1DatasetsDatasetIdDiagnosticsWarehouseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiDatasetMetricMonitoringResponse&gt; GetApiV1DatasetsDatasetIdMetricMonitoring(GetApiV1DatasetsDatasetIdMetricMonitoringRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve detailed metric monitoring configuration information for a specific dataset in your organization's Soda Cloud account.

## Authorization

Only users with **View dataset** permission can view dataset metric monitoring configuration. Soda Cloud Admins have access to metric monitoring configuration information for all datasets.**See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

1000 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.GetApiV1DatasetsDatasetIdMetricMonitoring(
        new GetApiV1DatasetsDatasetIdMetricMonitoringRequest { DatasetId = "some example string" });
    // TODO: Handle 'response' of type PublicApiDatasetMetricMonitoringResponse
}
catch (ApiException<GetApiV1DatasetsDatasetIdMetricMonitoringError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasetsDatasetIdMetricMonitoringRequest](src/Soda/Requests/Datasets/GetApiV1DatasetsDatasetIdMetricMonitoringRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDatasetMetricMonitoringResponse](src/Soda/Models/PublicApiDatasetMetricMonitoringResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasetsDatasetIdMetricMonitoringError](src/Soda/Errors/GetApiV1DatasetsDatasetIdMetricMonitoringError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiDatasetProfilingResponse&gt; GetApiV1DatasetsDatasetIdProfiling(GetApiV1DatasetsDatasetIdProfilingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve detailed profiling information for a specific dataset in your organization's Soda Cloud account. Profiling information provides insights into the dataset's structure, statistical summaries, and data characteristics.

## Authorization

Only users with **Access dataset profiling and sampling** permission can view dataset profiling. Soda Cloud Admins have access to profiling information for all datasets.**See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

1000 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.GetApiV1DatasetsDatasetIdProfiling(
        new GetApiV1DatasetsDatasetIdProfilingRequest { DatasetId = "some example string" });
    // TODO: Handle 'response' of type PublicApiDatasetProfilingResponse
}
catch (ApiException<GetApiV1DatasetsDatasetIdProfilingError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasetsDatasetIdProfilingRequest](src/Soda/Requests/Datasets/GetApiV1DatasetsDatasetIdProfilingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDatasetProfilingResponse](src/Soda/Models/PublicApiDatasetProfilingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasetsDatasetIdProfilingError](src/Soda/Errors/GetApiV1DatasetsDatasetIdProfilingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiDatasetResponsibilitiesResponse&gt; GetApiV1DatasetsDatasetIdResponsibilities(GetApiV1DatasetsDatasetIdResponsibilitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to gather information about the user and user groups permissions assigned to a dataset, and their associated roles in your organization's Soda Cloud account.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 1 and 100, inclusive. The default value is 100.

- `page`: Supply an integer value. The default value is 0.

## Authorization

Soda only returns the dataset responsibilities to which the user has **View dataset** permissions. Soda Cloud Admins have access to all dataset responsibilities.**See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.GetApiV1DatasetsDatasetIdResponsibilities(
        new GetApiV1DatasetsDatasetIdResponsibilitiesRequest { DatasetId = "some example string" });
    // TODO: Handle 'response' of type PublicApiDatasetResponsibilitiesResponse
}
catch (ApiException<GetApiV1DatasetsDatasetIdResponsibilitiesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DatasetsDatasetIdResponsibilitiesRequest](src/Soda/Requests/Datasets/GetApiV1DatasetsDatasetIdResponsibilitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDatasetResponsibilitiesResponse](src/Soda/Models/PublicApiDatasetResponsibilitiesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DatasetsDatasetIdResponsibilitiesError](src/Soda/Errors/GetApiV1DatasetsDatasetIdResponsibilitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiUpdateDatasetRoleResponse&gt; PostApiV1DatasetsRoles(PostApiV1DatasetsRolesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to create a new custom dataset role in your organization's Soda Cloud account. Dataset roles define a named set of permissions that control what actions users can perform on individual datasets, such as managing checks, viewing profiling data, configuring the dataset, or managing incidents.

Once created, the role can be assigned to users or user groups via the dataset responsibilities endpoints.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

## Tags

`Datasets`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.PostApiV1DatasetsRoles(new PostApiV1DatasetsRolesRequest
    {
        Body = new PublicApiDatasetRoleRequestDto { Name = "some example string" },
    });
    // TODO: Handle 'response' of type PublicApiUpdateDatasetRoleResponse
}
catch (ApiException<PostApiV1DatasetsRolesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasetsRolesRequest](src/Soda/Requests/Datasets/PostApiV1DatasetsRolesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiUpdateDatasetRoleResponse](src/Soda/Models/PublicApiUpdateDatasetRoleResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasetsRolesError](src/Soda/Errors/PostApiV1DatasetsRolesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiUpdateDatasetRoleResponse&gt; PostApiV1DatasetsRolesRoleId(PostApiV1DatasetsRolesRoleIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to update the name or permissions of an existing custom dataset role. Dataset roles define a named set of permissions that control what actions users can perform on individual datasets, such as managing checks, viewing profiling data, configuring the dataset, or managing incidents.

Changes apply immediately to all users and user groups assigned this role.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

## Tags

`Datasets`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.PostApiV1DatasetsRolesRoleId(new PostApiV1DatasetsRolesRoleIdRequest
    {
        RoleId = "some example string",
        Body = new PublicApiDatasetRoleRequestDto { Name = "some example string" },
    });
    // TODO: Handle 'response' of type PublicApiUpdateDatasetRoleResponse
}
catch (ApiException<PostApiV1DatasetsRolesRoleIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasetsRolesRoleIdRequest](src/Soda/Requests/Datasets/PostApiV1DatasetsRolesRoleIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiUpdateDatasetRoleResponse](src/Soda/Models/PublicApiUpdateDatasetRoleResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasetsRolesRoleIdError](src/Soda/Errors/PostApiV1DatasetsRolesRoleIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DatasetsContentDto&gt; PostApiV1DatasetsDatasetId(PostApiV1DatasetsDatasetIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to update an existing dataset properties in your organization's Soda Cloud account.

## Authorization

Only users with **Configure dataset** permission can update dataset properties. Soda Cloud Admins have permission to update all datasets.**See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.PostApiV1DatasetsDatasetId(new PostApiV1DatasetsDatasetIdRequest
    {
        DatasetId = "some example string",
        Body = new PublicApiUpdateDatasetDto(),
    });
    // TODO: Handle 'response' of type DatasetsContentDto
}
catch (ApiException<PostApiV1DatasetsDatasetIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasetsDatasetIdRequest](src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatasetsContentDto](src/Soda/Models/DatasetsContentDto.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasetsDatasetIdError](src/Soda/Errors/PostApiV1DatasetsDatasetIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostApiV1DatasetsDatasetIdColumnAttributes(PostApiV1DatasetsDatasetIdColumnAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upsert attribute values on the columns of a dataset.

The request body maps a column name to a map of attribute-name to value. Setting one attribute on a column does not affect other attribute values on the same column. If any column or attribute name is unknown, or any value has the wrong type, the entire request is rejected and no changes are persisted.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have dataset role permission CONFIGURE_DATASET to execute this call.

## Tags

`Datasets`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Datasets.PostApiV1DatasetsDatasetIdColumnAttributes(
        new PostApiV1DatasetsDatasetIdColumnAttributesRequest
        {
            DatasetId = "some example string",
            Body = new PublicApiSetColumnAttributesRequestDto { ColumnAttributes = columnAttributes },
        });
}
catch (ApiException<PostApiV1DatasetsDatasetIdColumnAttributesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasetsDatasetIdColumnAttributesRequest](src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdColumnAttributesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasetsDatasetIdColumnAttributesError](src/Soda/Errors/PostApiV1DatasetsDatasetIdColumnAttributesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiUpdateColumnMetricMonitorResponse&gt; PostApiV1DatasetsDatasetIdColumnMetricMonitors(PostApiV1DatasetsDatasetIdColumnMetricMonitorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to create a new column metric monitor for a specific dataset in your organization's Soda Cloud account.

## Authorization

Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can create column metric monitors. Soda Cloud Admins can create column metric monitors for all datasets.**See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitors(
        new PostApiV1DatasetsDatasetIdColumnMetricMonitorsRequest
        {
            DatasetId = "some example string",
            Body = new PublicApiCreateColumnMetricMonitorRequestDto
            {
                ColumnMetricMonitorConfiguration = new ColumnMetricMonitorConfigurationDto
                {
                    Configuration = new ColumnMonitorConfigurationDto(),
                    MetricType = ColumnMonitorMetricTypeDto.MissingPercentage,
                },
                ColumnName = "some example string",
            },
        });
    // TODO: Handle 'response' of type PublicApiUpdateColumnMetricMonitorResponse
}
catch (ApiException<PostApiV1DatasetsDatasetIdColumnMetricMonitorsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasetsDatasetIdColumnMetricMonitorsRequest](src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdColumnMetricMonitorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiUpdateColumnMetricMonitorResponse](src/Soda/Models/PublicApiUpdateColumnMetricMonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasetsDatasetIdColumnMetricMonitorsError](src/Soda/Errors/PostApiV1DatasetsDatasetIdColumnMetricMonitorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiUpdateColumnMetricMonitorResponse&gt; PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to update an existing column metric monitor for a specific dataset in your organization's Soda Cloud account.

## Authorization

Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can update column metric monitors. Soda Cloud Admins can update column metric monitors for all datasets. **See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId(
        new PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest
        {
            DatasetId = "some example string",
            MonitorId = "some example string",
            Body = new PublicApiUpdateColumnMetricMonitorRequestDto
            {
                Configuration = new ColumnMonitorConfigurationDto(),
            },
        });
    // TODO: Handle 'response' of type PublicApiUpdateColumnMetricMonitorResponse
}
catch (ApiException<PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest](src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiUpdateColumnMetricMonitorResponse](src/Soda/Models/PublicApiUpdateColumnMetricMonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError](src/Soda/Errors/PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiCreateCustomSqlMonitorResponse&gt; PostApiV1DatasetsDatasetIdCustomSqlMonitors(PostApiV1DatasetsDatasetIdCustomSqlMonitorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to create a new custom SQL monitor for a specific dataset in your organization's Soda Cloud account.

## Authorization

Only users with **Manage contracts** permission can create custom SQL monitors. Soda Cloud Admins can create custom SQL monitors for all datasets.**See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitors(
        new PostApiV1DatasetsDatasetIdCustomSqlMonitorsRequest
        {
            DatasetId = "some example string",
            Body = new PublicApiCreateCustomSqlMonitorRequestDto
            {
                Configuration = new CustomSqlMonitorConfigurationDto
                {
                    ResultMetric = "some example string",
                    SqlQuery = "some example string",
                },
                MonitorName = "some example string",
            },
        });
    // TODO: Handle 'response' of type PublicApiCreateCustomSqlMonitorResponse
}
catch (ApiException<PostApiV1DatasetsDatasetIdCustomSqlMonitorsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasetsDatasetIdCustomSqlMonitorsRequest](src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdCustomSqlMonitorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiCreateCustomSqlMonitorResponse](src/Soda/Models/PublicApiCreateCustomSqlMonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasetsDatasetIdCustomSqlMonitorsError](src/Soda/Errors/PostApiV1DatasetsDatasetIdCustomSqlMonitorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiUpdateCustomSqlMonitorResponse&gt; PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to update an existing custom SQL monitor for a specific dataset in your organization's Soda Cloud account.

## Authorization

Only users with **Manage contracts** permission can update custom SQL monitors. Soda Cloud Admins can update custom SQL monitors for all datasets. **See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Datasets.PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId(
        new PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest
        {
            DatasetId = "some example string",
            MonitorId = "some example string",
            Body = new PublicApiUpdateCustomSqlMonitorRequestDto(),
        });
    // TODO: Handle 'response' of type PublicApiUpdateCustomSqlMonitorResponse
}
catch (ApiException<PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest](src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiUpdateCustomSqlMonitorResponse](src/Soda/Models/PublicApiUpdateCustomSqlMonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError](src/Soda/Errors/PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollection(PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint triggers a historical metric collection scan for a specific dataset in your organization's Soda Cloud account.

The dataset must have metric monitoring enabled and a historical collection scan definition configured.

The response includes the scan ID and a Location header pointing to the scan status endpoint.

## Authorization

Only users with **Manage contracts** permission can run historical metric collection. Soda Cloud Admins have access to run historical metric collection for all datasets. **See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Datasets.PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollection(
        new PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionRequest
        {
            DatasetId = "some example string",
        });
}
catch (ApiException<PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionRequest](src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError](src/Soda/Errors/PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostApiV1DatasetsDatasetIdResponsibilities(PostApiV1DatasetsDatasetIdResponsibilitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to update the user and user groups permissions and their associated roles for a dataset in your organization's Soda Cloud account.

**Note**: This API fully replaces the existing responsibilities. The entire list of responsibilities must be provided in the request, including both new and existing entries, as any omissions will result in their removal.

## Authorization

Only users with **Manage dataset responsibilities** permission can update dataset responsibilities. Soda Cloud Admins have permission to update all datasets responsibilities.**See Manage dataset roles for more information.**The Response of this call, when successful, is `201` and contains header `Location` which identify the URL where the responsibilities will eventually become available.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Datasets`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Datasets.PostApiV1DatasetsDatasetIdResponsibilities(
        new PostApiV1DatasetsDatasetIdResponsibilitiesRequest
        {
            DatasetId = "some example string",
            Body = new PublicApiUpdateDatasetResponsibilitiesRequestDto
            {
                Responsibilities = [
                    new DatasetResponsibilityContentRequestDto
                    {
                        RoleId = "some example string",
                        Type = ResponsibilityTypeDto.User,
                    },
                ],
            },
        });
}
catch (ApiException<PostApiV1DatasetsDatasetIdResponsibilitiesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1DatasetsDatasetIdResponsibilitiesRequest](src/Soda/Requests/Datasets/PostApiV1DatasetsDatasetIdResponsibilitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1DatasetsDatasetIdResponsibilitiesError](src/Soda/Errors/PostApiV1DatasetsDatasetIdResponsibilitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DiscoveredDatasets

> Source: [DiscoveredDatasets](src/Soda/Api/DiscoveredDatasets.cs)

<details>
<summary><code>Task&lt;PublicApiDiscoveredDatasetsResponse&gt; GetApiV1DiscoveredDatasets(GetApiV1DiscoveredDatasetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to list datasets that Soda has discovered in your data sources. Discovered datasets are datasets that have been found during a discovery scan but may not yet be onboarded.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

- `page`: Supply an integer value. The default value is 0.

- `datasourceId`: Optionally, use this parameter to collect only the discovered datasets associated with a specific data source.

- `search`: Optionally, use this parameter to perform a search on the dataset name.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Any Soda Cloud user in your organization may execute this query.

## Tags

`Discovered Datasets`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DiscoveredDatasets.GetApiV1DiscoveredDatasets(new GetApiV1DiscoveredDatasetsRequest());
    // TODO: Handle 'response' of type PublicApiDiscoveredDatasetsResponse
}
catch (ApiException<GetApiV1DiscoveredDatasetsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1DiscoveredDatasetsRequest](src/Soda/Requests/DiscoveredDatasets/GetApiV1DiscoveredDatasetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDiscoveredDatasetsResponse](src/Soda/Models/PublicApiDiscoveredDatasetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1DiscoveredDatasetsError](src/Soda/Errors/GetApiV1DiscoveredDatasetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Incidents

> Source: [Incidents](src/Soda/Api/Incidents.cs)

<details>
<summary><code>Task&lt;PublicApiIncidentsResponse&gt; GetApiV1Incidents(GetApiV1IncidentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to gather information about the incidents that exist in your organization's Soda Cloud account.

Each incident carries a `hasRcaReport` flag indicating whether a structured root cause analysis report has been published for it; retrieve the report itself from `GET /api/v1/incidents/{incidentId}/rcaReport`. **`hasRcaReport` is in private preview**: it is `true` or `false` only when the root cause analysis report preview is enabled for your organization, and `null` otherwise.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

- `page`: Supply an integer value. The default value is 0.

- `status`: Optionally, use this parameter to collect only the incidents with a specific status. One of `reported`, `investigating`, `fixing`, `resolved`.

- `severity`: Optionally, use this parameter to collect only the incidents with a specific severity. One of `minor`, `major`, `critical`.

- `datasetId`: Optionally, use this parameter to collect only the incidents associated with a specific dataset. Find the `datasetId` in the URL of the dataset page in Soda Cloud.

- `incidentIds`: Optionally, use this parameter to collect only a specific batch of incidents. Provide multiple values as a comma-separated list of incident IDs, which you can find on the individual incident pages in Soda Cloud. This query parameter is limited to 1000 incident IDs and can be combined with the other query parameters (`status`, `severity`, `datasetId`, `page`, `size`), which are all applied together.

- `leadId`: Optionally, use this parameter to collect only the incidents assigned to a specific lead user. Provide the user id of the incident lead.

- `from`: Optionally, use this parameter to collect only the incidents created on or after this moment, compared against each incident's created timestamp. Supply an ISO8601 timestamp value. Example: `2026-08-01T00:00:00+01:00`

- `to`: Optionally, use this parameter to collect only the incidents created on or before this moment, compared against each incident's created timestamp. Supply an ISO8601 timestamp value. Example: `2026-08-01T23:59:59+01:00`

The `leadId`, `from`, and `to` parameters can be combined with the other query parameters, which are all applied together (AND).

If not specified, the query gathers information for all incidents in the account and sorts the results by incident number in ascending order.

## Authorization

Soda only returns the incidents linked to datasets to which the user has **View dataset** permissions. Soda Cloud Admins have access to all incidents.**See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Incidents`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Incidents.GetApiV1Incidents(new GetApiV1IncidentsRequest());
    // TODO: Handle 'response' of type PublicApiIncidentsResponse
}
catch (ApiException<GetApiV1IncidentsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1IncidentsRequest](src/Soda/Requests/Incidents/GetApiV1IncidentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiIncidentsResponse](src/Soda/Models/PublicApiIncidentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1IncidentsError](src/Soda/Errors/GetApiV1IncidentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiRcaReportContentDto&gt; GetApiV1IncidentsIncidentIdRcaReport(GetApiV1IncidentsIncidentIdRcaReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint returns the structured root cause analysis and impact assessment published on an incident in your organization's Soda Cloud account.

Returns 404 if the incident does not exist or has no RCA report published yet.

## Authorization

Unlike the incident list, this endpoint requires **View dataset** permission on every dataset the incident touches. Soda Cloud Admins have access to all incidents. **See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Incidents`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Incidents.GetApiV1IncidentsIncidentIdRcaReport(
        new GetApiV1IncidentsIncidentIdRcaReportRequest { IncidentId = "some example string" });
    // TODO: Handle 'response' of type PublicApiRcaReportContentDto
}
catch (ApiException<GetApiV1IncidentsIncidentIdRcaReportError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1IncidentsIncidentIdRcaReportRequest](src/Soda/Requests/Incidents/GetApiV1IncidentsIncidentIdRcaReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiRcaReportContentDto](src/Soda/Models/PublicApiRcaReportContentDto.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1IncidentsIncidentIdRcaReportError](src/Soda/Errors/GetApiV1IncidentsIncidentIdRcaReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IncidentContentDto&gt; PostApiV1Incidents(PostApiV1IncidentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to create a new incident linked to one or more monitor results in your organization's Soda Cloud account. The authenticated user becomes the incident reporter.

## Authorization

Only users with **Manage incident** permission can create incidents. Soda Cloud Admins have permission to create incidents on all datasets.**See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Incidents`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Incidents.PostApiV1Incidents(new PostApiV1IncidentsRequest
    {
        Body = new PublicApiCreateIncidentDto
        {
            Description = "some example string",
            MonitorResultIds = ["some example string"],
            Severity = IncidentSeverityDto.Minor,
            Title = "some example string",
        },
    });
    // TODO: Handle 'response' of type IncidentContentDto
}
catch (ApiException<PostApiV1IncidentsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1IncidentsRequest](src/Soda/Requests/Incidents/PostApiV1IncidentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IncidentContentDto](src/Soda/Models/IncidentContentDto.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1IncidentsError](src/Soda/Errors/PostApiV1IncidentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IncidentContentDto&gt; PostApiV1IncidentsIncidentId(PostApiV1IncidentsIncidentIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to update an existing incident title, severity, status, or description in your organization's Soda Cloud account.

## Authorization

Only users with **Manage incident** permission can update incidents. Soda Cloud Admins have permission to update all incidents.**See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Incidents`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Incidents.PostApiV1IncidentsIncidentId(new PostApiV1IncidentsIncidentIdRequest
    {
        IncidentId = "some example string",
        Body = new PublicApiUpdateIncidentDto(),
    });
    // TODO: Handle 'response' of type IncidentContentDto
}
catch (ApiException<PostApiV1IncidentsIncidentIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1IncidentsIncidentIdRequest](src/Soda/Requests/Incidents/PostApiV1IncidentsIncidentIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IncidentContentDto](src/Soda/Models/IncidentContentDto.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1IncidentsIncidentIdError](src/Soda/Errors/PostApiV1IncidentsIncidentIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiRcaReportContentDto&gt; PostApiV1IncidentsIncidentIdRcaReport(PostApiV1IncidentsIncidentIdRcaReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint publishes a structured root cause analysis and impact assessment onto an existing incident in your organization's Soda Cloud account. The report is additive and does not mutate the incident's own fields (title, severity, status, description).

There is one report per incident: publishing replaces any previous report. Publishing to a resolved incident is rejected.

## Authorization

Only users with **Manage incident** permission can publish incident RCA reports. Soda Cloud Admins have permission to publish reports on all incidents.**See Manage dataset roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Incidents`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Incidents.PostApiV1IncidentsIncidentIdRcaReport(
        new PostApiV1IncidentsIncidentIdRcaReportRequest
        {
            IncidentId = "some example string",
            Body = new PublicApiRcaReportDto
            {
                Agent = new PublicApiRcaAgentDto { Name = "some example string" },
                RootCauseAnalysis = new PublicApiRootCauseAnalysisDto
                {
                    Confidence = RcaConfidenceDto.High,
                    GeneratedAt = DateTimeOffset.Parse("2024-01-15T09:30:00Z"),
                    Status = RcaReportStatusDto.Completed,
                    Summary = "some example string",
                },
            },
        });
    // TODO: Handle 'response' of type PublicApiRcaReportContentDto
}
catch (ApiException<PostApiV1IncidentsIncidentIdRcaReportError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1IncidentsIncidentIdRcaReportRequest](src/Soda/Requests/Incidents/PostApiV1IncidentsIncidentIdRcaReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiRcaReportContentDto](src/Soda/Models/PublicApiRcaReportContentDto.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1IncidentsIncidentIdRcaReportError](src/Soda/Errors/PostApiV1IncidentsIncidentIdRcaReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Licensing

> Source: [Licensing](src/Soda/Api/Licensing.cs)

<details>
<summary><code>Task&lt;PublicApiSpuConsumptionResponse&gt; GetApiV1LicensingSpuConsumption(GetApiV1LicensingSpuConsumptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint returns the number of SPUs your organization consumed over a period.

Both bounds are inclusive whole days and any time component is discarded:

- `from`: Optional. Defaults to the first day of the current calendar month.

- `to`: Optional. Defaults to today.

Only organizations on SPU-based licensing accumulate consumption; others always read zero.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

## Tags

`Licensing`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Licensing.GetApiV1LicensingSpuConsumption(new GetApiV1LicensingSpuConsumptionRequest());
    // TODO: Handle 'response' of type PublicApiSpuConsumptionResponse
}
catch (ApiException<GetApiV1LicensingSpuConsumptionError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1LicensingSpuConsumptionRequest](src/Soda/Requests/Licensing/GetApiV1LicensingSpuConsumptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiSpuConsumptionResponse](src/Soda/Models/PublicApiSpuConsumptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1LicensingSpuConsumptionError](src/Soda/Errors/GetApiV1LicensingSpuConsumptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## NotificationRules

> Source: [NotificationRules](src/Soda/Api/NotificationRules.cs)

<details>
<summary><code>Task&lt;PublicApiDeleteNotificationRuleResponse&gt; DeleteApiV1NotificationRulesNotificationRuleId(DeleteApiV1NotificationRulesNotificationRuleIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a notification rule for deletion. Deletion is processed asynchronously.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.

## Tags

`Notification Rules`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NotificationRules.DeleteApiV1NotificationRulesNotificationRuleId(
        new DeleteApiV1NotificationRulesNotificationRuleIdRequest { NotificationRuleId = "some example string" });
    // TODO: Handle 'response' of type PublicApiDeleteNotificationRuleResponse
}
catch (ApiException<DeleteApiV1NotificationRulesNotificationRuleIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1NotificationRulesNotificationRuleIdRequest](src/Soda/Requests/NotificationRules/DeleteApiV1NotificationRulesNotificationRuleIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDeleteNotificationRuleResponse](src/Soda/Models/PublicApiDeleteNotificationRuleResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1NotificationRulesNotificationRuleIdError](src/Soda/Errors/DeleteApiV1NotificationRulesNotificationRuleIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiListNotificationRulesResponse&gt; GetApiV1NotificationRules(GetApiV1NotificationRulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to list the notification rules in your organization.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

- `page`: Supply an integer value. The default value is 0.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Notification Rules`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NotificationRules.GetApiV1NotificationRules(new GetApiV1NotificationRulesRequest());
    // TODO: Handle 'response' of type PublicApiListNotificationRulesResponse
}
catch (ApiException<GetApiV1NotificationRulesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1NotificationRulesRequest](src/Soda/Requests/NotificationRules/GetApiV1NotificationRulesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiListNotificationRulesResponse](src/Soda/Models/PublicApiListNotificationRulesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1NotificationRulesError](src/Soda/Errors/GetApiV1NotificationRulesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiNotificationRuleDto&gt; PostApiV1NotificationRules(PostApiV1NotificationRulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a notification rule with the provided filter and recipients.

The filter is a simplified expression tree (and/or/not/equals/contains/in) over check and monitor attributes; recipients can be users, user groups, emails, integrations, or roles.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.

## Tags

`Notification Rules`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NotificationRules.PostApiV1NotificationRules(new PostApiV1NotificationRulesRequest
    {
        Body = new PublicApiNotificationRuleRequestDto
        {
            Name = "some example string",
            Recipients = [
                new NotificationRecipientDto
                {
                    Triggers = [
                        new NotificationRecipientTriggerDto { Type = NotificationTriggerTypeDto.TestResultLevel },
                    ],
                    Type = NotificationRecipientTypeDto.Email,
                },
            ],
            RuleType = PublicApiRuleTypeDto.Check,
        },
    });
    // TODO: Handle 'response' of type PublicApiNotificationRuleDto
}
catch (ApiException<PostApiV1NotificationRulesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1NotificationRulesRequest](src/Soda/Requests/NotificationRules/PostApiV1NotificationRulesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiNotificationRuleDto](src/Soda/Models/PublicApiNotificationRuleDto.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1NotificationRulesError](src/Soda/Errors/PostApiV1NotificationRulesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiNotificationRuleDto&gt; PostApiV1NotificationRulesNotificationRuleId(PostApiV1NotificationRulesNotificationRuleIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a notification rule. This is a full replacement: the rule's name, type, filter, recipients, status, and customization are all set from the request body.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.

## Tags

`Notification Rules`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NotificationRules.PostApiV1NotificationRulesNotificationRuleId(
        new PostApiV1NotificationRulesNotificationRuleIdRequest
        {
            NotificationRuleId = "some example string",
            Body = new PublicApiNotificationRuleRequestDto
            {
                Name = "some example string",
                Recipients = [
                    new NotificationRecipientDto
                    {
                        Triggers = [
                            new NotificationRecipientTriggerDto { Type = NotificationTriggerTypeDto.TestResultLevel },
                        ],
                        Type = NotificationRecipientTypeDto.Email,
                    },
                ],
                RuleType = PublicApiRuleTypeDto.Check,
            },
        });
    // TODO: Handle 'response' of type PublicApiNotificationRuleDto
}
catch (ApiException<PostApiV1NotificationRulesNotificationRuleIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1NotificationRulesNotificationRuleIdRequest](src/Soda/Requests/NotificationRules/PostApiV1NotificationRulesNotificationRuleIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiNotificationRuleDto](src/Soda/Models/PublicApiNotificationRuleDto.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1NotificationRulesNotificationRuleIdError](src/Soda/Errors/PostApiV1NotificationRulesNotificationRuleIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Runners

> Source: [Runners](src/Soda/Api/Runners.cs)

<details>
<summary><code>Task&lt;object&gt; DeleteApiV1RunnersRunnerId(DeleteApiV1RunnersRunnerIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to delete a specific self-hosted runner by its ID. If the runner is still in use, the request will fail with a `400 Bad Request` response.

Soda-hosted and virtual runners cannot be deleted through this endpoint.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

## Tags

`Runners`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Runners.DeleteApiV1RunnersRunnerId(new DeleteApiV1RunnersRunnerIdRequest
    {
        RunnerId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteApiV1RunnersRunnerIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1RunnersRunnerIdRequest](src/Soda/Requests/Runners/DeleteApiV1RunnersRunnerIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1RunnersRunnerIdError](src/Soda/Errors/DeleteApiV1RunnersRunnerIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiListRunnersResponse&gt; GetApiV1Runners(GetApiV1RunnersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to list runners in your organization.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

- `page`: Supply an integer value. The default value is 0.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Runners`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Runners.GetApiV1Runners(new GetApiV1RunnersRequest());
    // TODO: Handle 'response' of type PublicApiListRunnersResponse
}
catch (ApiException<GetApiV1RunnersError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1RunnersRequest](src/Soda/Requests/Runners/GetApiV1RunnersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiListRunnersResponse](src/Soda/Models/PublicApiListRunnersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1RunnersError](src/Soda/Errors/GetApiV1RunnersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiGetRunnerResponse&gt; GetApiV1RunnersRunnerId(GetApiV1RunnersRunnerIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve a specific runner by its ID.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Tags

`Runners`

## Rate limiting

1000 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Runners.GetApiV1RunnersRunnerId(new GetApiV1RunnersRunnerIdRequest
    {
        RunnerId = "some example string",
    });
    // TODO: Handle 'response' of type PublicApiGetRunnerResponse
}
catch (ApiException<GetApiV1RunnersRunnerIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1RunnersRunnerIdRequest](src/Soda/Requests/Runners/GetApiV1RunnersRunnerIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiGetRunnerResponse](src/Soda/Models/PublicApiGetRunnerResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1RunnersRunnerIdError](src/Soda/Errors/GetApiV1RunnersRunnerIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiCreateRunnerResponse&gt; PostApiV1Runners(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an API key for a new self-hosted runner deployment.

Returns the API key credentials (id and secret) to configure the runner. The credentials are only returned at creation time and cannot be retrieved later, so make sure to store them securely.

After creation the runner does not immediately become visible in Soda Cloud. The runner needs to registers itself using the API key credentials before it becomes available.

See deployment instructions for setting up the runner.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

## Tags

`Runners`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Runners.PostApiV1Runners();
    // TODO: Handle 'response' of type PublicApiCreateRunnerResponse
}
catch (ApiException<PostApiV1RunnersError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiCreateRunnerResponse](src/Soda/Models/PublicApiCreateRunnerResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1RunnersError](src/Soda/Errors/PostApiV1RunnersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Scans

> Source: [Scans](src/Soda/Api/Scans.cs)

<details>
<summary><code>Task DeleteApiV1ScansScanId(DeleteApiV1ScansScanIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to cancel a scan.

Depending on the state of the scan when you call this endpoint, the response returns one of the following:

- Where the state is `pending`, Soda immediately changes the state to `canceled`.

- Where the state is `submitted`, Soda immediately changes the state to `cancelationRequested`. - Where the scan is in any other state, the endpoint returns a `400` (Bad request) response.

This DELETE uses the following parameters to provide specific details:

- `scanId`: Use the value of `X-Soda-Scan-Id` returned as part of the `201` response when you called the **Trigger a scan** endpoint.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Any Soda Cloud user in your organization may execute this query.

## Tags

`Scans`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Scans.DeleteApiV1ScansScanId(new DeleteApiV1ScansScanIdRequest { ScanId = "some example string" });
}
catch (ApiException<DeleteApiV1ScansScanIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1ScansScanIdRequest](src/Soda/Requests/Scans/DeleteApiV1ScansScanIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1ScansScanIdError](src/Soda/Errors/DeleteApiV1ScansScanIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiScanStatusResponse&gt; GetApiV1ScansScanId(GetApiV1ScansScanIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to check on the state of a scan that you executed using the **Trigger a scan** endpoint. Call this endpoint to monitor the status of a scan during its execution.

If you wish to access the logs of a completed scan, use the **Get scan logs** endpoint.

This POST uses the following parameter to provide specific details:

- `scanId`: Use the value of `X-Soda-Scan-Id` returned as part of the `201` response when you called the **Trigger a scan** endpoint.

As a scan executes, you can call this endpoint to progressively collect values based on the state of the scan. Refer to the list below for the states that calls to this endpoint return.

- `queuing`: The scan is in the queue for execution, awaiting a pick-up from a Soda Runner.

- `executing`: A Soda Runner has picked up the scan and is executing.

- `cancelationRequested`: An entity requested cancelation of this scan and the request is awaiting pick-up from the Soda Runner responsible for the scan.

- `timeOutRequested`: A time out has been detected, and an automatic request to stop the scan execution is awaiting pick-up from the Soda Runner responsible for the scan.

- `canceled`: A Soda Runner confirmed that the scan has been cancelled. This is the final state of the scan.

- `timedOut`: A Soda Runner confirmed that the scan has timed-out. This is the final state of the scan.

- `failed`: The scan did not start, or it did not successfully complete because of an unexpected cause. This is the final state of the scan.

- `completedWithErrors`: The scan completed successfully, but there were errors involving some of the checks in the scan. This is the final state of the scan.

- `completedWithFailures`: The scan completed successfully and reveals failed results for some checks. This is the final state of the scan.

- `completedWithWarnings`: The scan completed successfully and reveals warning results for some checks. This is the final state of the scan.

- `completed`: The scan completed successfully and reveals passing results for all checks. This is a final state of a scan

To get the logs of the completed scan, please use API `/api/v1/scans/{scanId}/logs`.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Any Soda Cloud user in your organization may execute this query.

## Tags

`Scans`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Scans.GetApiV1ScansScanId(new GetApiV1ScansScanIdRequest
    {
        ScanId = "some example string",
    });
    // TODO: Handle 'response' of type PublicApiScanStatusResponse
}
catch (ApiException<GetApiV1ScansScanIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ScansScanIdRequest](src/Soda/Requests/Scans/GetApiV1ScansScanIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiScanStatusResponse](src/Soda/Models/PublicApiScanStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ScansScanIdError](src/Soda/Errors/GetApiV1ScansScanIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiScanLogsResponse&gt; GetApiV1ScansScanIdLogs(GetApiV1ScansScanIdLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to gather log details about the final state of a scan you executed using the **Trigger a scan** endpoint. Use this endpoint to study scan logs to investigate issues with its execution.

If you wish to access the state of a scan in progress, use the **Get scan status** endpoint.

This GET is a paginated API that uses the following parameters to request specific details:

- `scanId`: Use the value of `X-Soda-Scan-Id` returned as part of the `201` response when you called the **Trigger a scan** endpoint.

- `size`: Supply an integer value between 100 and 1000, inclusive. The default value is 1000.

- `page`: Supply an integer value. The default value is 0.

The response sorts the the log information by creation timestamp in ascending order.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Any Soda Cloud user in your organization may execute this query.

## Tags

`Scans`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Scans.GetApiV1ScansScanIdLogs(new GetApiV1ScansScanIdLogsRequest
    {
        ScanId = "some example string",
    });
    // TODO: Handle 'response' of type PublicApiScanLogsResponse
}
catch (ApiException<GetApiV1ScansScanIdLogsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1ScansScanIdLogsRequest](src/Soda/Requests/Scans/GetApiV1ScansScanIdLogsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiScanLogsResponse](src/Soda/Models/PublicApiScanLogsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1ScansScanIdLogsError](src/Soda/Errors/GetApiV1ScansScanIdLogsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Secrets

> Source: [Secrets](src/Soda/Api/Secrets.cs)

<details>
<summary><code>Task&lt;PublicApiDeleteSecretResponse&gt; DeleteApiV1SecretsSecretId(DeleteApiV1SecretsSecretIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an existing secret.

The secret cannot be deleted if it is referenced by a datasource configuration.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

## Tags

`Secrets`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Secrets.DeleteApiV1SecretsSecretId(new DeleteApiV1SecretsSecretIdRequest
    {
        SecretId = "some example string",
    });
    // TODO: Handle 'response' of type PublicApiDeleteSecretResponse
}
catch (ApiException<DeleteApiV1SecretsSecretIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1SecretsSecretIdRequest](src/Soda/Requests/Secrets/DeleteApiV1SecretsSecretIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiDeleteSecretResponse](src/Soda/Models/PublicApiDeleteSecretResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1SecretsSecretIdError](src/Soda/Errors/DeleteApiV1SecretsSecretIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiListSecretsResponse&gt; GetApiV1Secrets(GetApiV1SecretsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to list secrets in your organization.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

- `page`: Supply an integer value. The default value is 0.

- `search`: Supply a string value to filter secrets by name (case-insensitive partial match).

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

## Tags

`Secrets`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Secrets.GetApiV1Secrets(new GetApiV1SecretsRequest());
    // TODO: Handle 'response' of type PublicApiListSecretsResponse
}
catch (ApiException<GetApiV1SecretsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1SecretsRequest](src/Soda/Requests/Secrets/GetApiV1SecretsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiListSecretsResponse](src/Soda/Models/PublicApiListSecretsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1SecretsError](src/Soda/Errors/GetApiV1SecretsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiGetEncryptionKeyResponse&gt; GetApiV1SecretsPublicKey(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the RSA public key in JWK (JSON Web Key) format, used for client-side encryption of secret values.

## Usage

When creating or updating a secret, the secret value must be encrypted client-side before sending it to the API. This endpoint provides the RSA public key needed for that encryption.

## Encryption workflow

1. Fetch this public key.

2. Generate a random AES-256-GCM key (32 bytes) and initialization vector (IV, 12 bytes).

3. Encrypt the secret value using AES-256-GCM with the generated key and IV. Base64-encode the ciphertext and prefix it with `encrypted_`. This becomes the `encryptedValue` field.

4. Export the raw AES key and IV as base64 strings and concatenate them as `{base64_key}:::{base64_iv}`. Encrypt this string using RSA-OAEP (SHA-256) with this public key. Base64-encode the result. This becomes the `encryptionKey` field.

5. Use the `encryptedValue` and `encryptionKey` in the create or update secret request.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

## Tags

`Secrets`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Secrets.GetApiV1SecretsPublicKey();
    // TODO: Handle 'response' of type PublicApiGetEncryptionKeyResponse
}
catch (ApiException<GetApiV1SecretsPublicKeyError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiGetEncryptionKeyResponse](src/Soda/Models/PublicApiGetEncryptionKeyResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1SecretsPublicKeyError](src/Soda/Errors/GetApiV1SecretsPublicKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiCreateSecretResponse&gt; PostApiV1Secrets(PostApiV1SecretsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new secret in your organization. Secrets store encrypted credentials that can be referenced in datasource configurations using `${secret.NAME}` placeholders, keeping sensitive values out of plain text.

## Encryption

Secret values must be encrypted **client-side** before sending them to this endpoint. This enables a zero-trust design, where Soda never decrypts the secret. Decryption happens only during scan execution, within the runner.

Use the `GET /api/v1/secretsPublicKey` endpoint to obtain the server's RSA public key. The encryption uses a two-layer scheme:

1. Fetch the RSA public key from `GET /api/v1/secretsPublicKey`.

2. Generate a random AES-256-GCM key (32 bytes) and initialization vector (IV, 12 bytes).

3. Encrypt the secret value using AES-256-GCM with the generated key and IV. Base64-encode the ciphertext and prefix it with `encrypted_`. This becomes the `encryptedValue` field.

4. Export the raw AES key and IV as base64 strings and concatenate them as `{base64_key}:::{base64_iv}`. Encrypt this string using RSA-OAEP (SHA-256) with the public key from step 1. Base64-encode the result. This becomes the `encryptionKey` field.

## Constraints

- The secret `name` must not contain whitespace and must be unique within the organization.

- Both `encryptionKey` and `encryptedValue` are required.

- The organization must have the contracts feature enabled and the secure store must not be disabled.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

## Tags

`Secrets`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Secrets.PostApiV1Secrets(new PostApiV1SecretsRequest
    {
        Body = new PublicApiCreateSecretRequestDto
        {
            EncryptedValue = "some example string",
            EncryptionKey = "some example string",
            Name = "some example string",
        },
    });
    // TODO: Handle 'response' of type PublicApiCreateSecretResponse
}
catch (ApiException<PostApiV1SecretsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1SecretsRequest](src/Soda/Requests/Secrets/PostApiV1SecretsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiCreateSecretResponse](src/Soda/Models/PublicApiCreateSecretResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1SecretsError](src/Soda/Errors/PostApiV1SecretsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiUpdateSecretResponse&gt; PostApiV1SecretsSecretId(PostApiV1SecretsSecretIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the encrypted value of an existing secret. The secret name cannot be changed.

Both `encryptionKey` and `encryptedValue` must be provided together — you cannot update one without the other.

## Encryption

The new secret value must be encrypted **client-side** using the same two-layer encryption scheme as creation. See the `POST /api/v1/secrets` (Create a secret) endpoint for the full encryption workflow.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

## Tags

`Secrets`

## Rate limiting

100 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Secrets.PostApiV1SecretsSecretId(new PostApiV1SecretsSecretIdRequest
    {
        SecretId = "some example string",
        Body = new PublicApiUpdateSecretRequestDto
        {
            EncryptedValue = "some example string",
            EncryptionKey = "some example string",
        },
    });
    // TODO: Handle 'response' of type PublicApiUpdateSecretResponse
}
catch (ApiException<PostApiV1SecretsSecretIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1SecretsSecretIdRequest](src/Soda/Requests/Secrets/PostApiV1SecretsSecretIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiUpdateSecretResponse](src/Soda/Models/PublicApiUpdateSecretResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1SecretsSecretIdError](src/Soda/Errors/PostApiV1SecretsSecretIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/Soda/Api/Users.cs)

<details>
<summary><code>Task&lt;object&gt; DeleteApiV1UserGroupsUserGroupId(DeleteApiV1UserGroupsUserGroupIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to delete an existing user group from your organization's Soda Cloud account.

In case of success, the response returns a `200` (OK) response.

In case user group is not found, the response returns a `404` (Not found) response.

## Authorization

Only users with **Manage organization settings** permission can update user groups.**See Manage global roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

## Tags

`Users`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.DeleteApiV1UserGroupsUserGroupId(new DeleteApiV1UserGroupsUserGroupIdRequest
    {
        UserGroupId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteApiV1UserGroupsUserGroupIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiV1UserGroupsUserGroupIdRequest](src/Soda/Requests/Users/DeleteApiV1UserGroupsUserGroupIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[DeleteApiV1UserGroupsUserGroupIdError](src/Soda/Errors/DeleteApiV1UserGroupsUserGroupIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiUserGroupsResponse&gt; GetApiV1UserGroups(GetApiV1UserGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to gather information about the user groups in your organization's Soda Cloud account, including lists of members.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.

- `page`: Supply an integer value. The default value is 0.

- `search`: Optionally, use this parameter to perform a fuzzy search on the user group name.

If not specified, the query gathers information for all user groups in the account and sorts the results by user group name in ascending order.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Any Soda Cloud user in your organization may execute this query.

## Tags

`Users`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetApiV1UserGroups(new GetApiV1UserGroupsRequest());
    // TODO: Handle 'response' of type PublicApiUserGroupsResponse
}
catch (ApiException<GetApiV1UserGroupsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1UserGroupsRequest](src/Soda/Requests/Users/GetApiV1UserGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiUserGroupsResponse](src/Soda/Models/PublicApiUserGroupsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1UserGroupsError](src/Soda/Errors/GetApiV1UserGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UserGroupContentDto&gt; GetApiV1UserGroupsUserGroupId(GetApiV1UserGroupsUserGroupIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to gather information about a single user group in your organization's Soda Cloud account, including lists of members.

This GET is a non-paginated API that returns a single organization based on its ID.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Any Soda Cloud user in your organization may execute this query.

## Tags

`Users`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetApiV1UserGroupsUserGroupId(new GetApiV1UserGroupsUserGroupIdRequest
    {
        UserGroupId = "some example string",
    });
    // TODO: Handle 'response' of type UserGroupContentDto
}
catch (ApiException<GetApiV1UserGroupsUserGroupIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1UserGroupsUserGroupIdRequest](src/Soda/Requests/Users/GetApiV1UserGroupsUserGroupIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserGroupContentDto](src/Soda/Models/UserGroupContentDto.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1UserGroupsUserGroupIdError](src/Soda/Errors/GetApiV1UserGroupsUserGroupIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiUsersResponse&gt; GetApiV1Users(GetApiV1UsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to gather information about the users in your organization's Soda Cloud account.

This GET is a paginated API that uses the following parameters to request specific details:

- `size`: Supply an integer value between 1 and 1000, inclusive. The default value is 1000.

- `page`: Supply an integer value. The default value is 0.

- `search`: Optionally, use this parameter to perform a fuzzy search on the user first name, last name, or email address.

If not specified, the query gathers information for all users in the account and sorts the results by user name in ascending order.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Any Soda Cloud user in your organization may execute this query.

## Tags

`Users`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetApiV1Users(new GetApiV1UsersRequest());
    // TODO: Handle 'response' of type PublicApiUsersResponse
}
catch (ApiException<GetApiV1UsersError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiV1UsersRequest](src/Soda/Requests/Users/GetApiV1UsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiUsersResponse](src/Soda/Models/PublicApiUsersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1UsersError](src/Soda/Errors/GetApiV1UsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostApiV1UserGroups(PostApiV1UserGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to create a new user group in your organization's Soda Cloud account.

The Response of this call, when successful, is `201` and contains headers `Location` which is a reference to the newly created User Group.

## Authorization

Only users with **Manage organization settings** permission can update user groups.**See Manage global roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

## Tags

`Users`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Users.PostApiV1UserGroups(new PostApiV1UserGroupsRequest
    {
        Body = new PublicApiCreateUserGroupRequestDto { Name = "some example string" },
    });
}
catch (ApiException<PostApiV1UserGroupsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1UserGroupsRequest](src/Soda/Requests/Users/PostApiV1UserGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1UserGroupsError](src/Soda/Errors/PostApiV1UserGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UserGroupContentDto&gt; PostApiV1UserGroupsUserGroupId(PostApiV1UserGroupsUserGroupIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to update an existing user group in your organization's Soda Cloud account.

The Response of this call, when successful, is `200` and contains updated User Group details.

## Authorization

Only users with **Manage organization settings** permission can update user groups.**See Manage global roles for more information.**

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

## Tags

`Users`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.PostApiV1UserGroupsUserGroupId(new PostApiV1UserGroupsUserGroupIdRequest
    {
        UserGroupId = "some example string",
        Body = new PublicApiUpdateUserGroupRequestDto(),
    });
    // TODO: Handle 'response' of type UserGroupContentDto
}
catch (ApiException<PostApiV1UserGroupsUserGroupIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1UserGroupsUserGroupIdRequest](src/Soda/Requests/Users/PostApiV1UserGroupsUserGroupIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserGroupContentDto](src/Soda/Models/UserGroupContentDto.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1UserGroupsUserGroupIdError](src/Soda/Errors/PostApiV1UserGroupsUserGroupIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicApiInviteUserResponse&gt; PostApiV1Users(PostApiV1UsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to invite users to your organization's Soda Cloud account.

Invited users will receive an email with a link to set their password and join your organization in Soda Cloud. Once they complete the setup, they will have access to Soda Cloud based on the roles and permissions you assign.

If your organization is using SSO, invited users will receive an invitation email with a link to Soda Cloud. When they log in using SSO, they are immediately added to the Soda Cloud organization.

You can invite up to 10 users per request. The response contains lists of successful and failed invitations.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

## Tags

`Users`

## Rate limiting

10 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.PostApiV1Users(new PostApiV1UsersRequest
    {
        Body = new PublicApiInviteUserRequestDto { Emails = ["some example string"] },
    });
    // TODO: Handle 'response' of type PublicApiInviteUserResponse
}
catch (ApiException<PostApiV1UsersError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1UsersRequest](src/Soda/Requests/Users/PostApiV1UsersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiInviteUserResponse](src/Soda/Models/PublicApiInviteUserResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1UsersError](src/Soda/Errors/PostApiV1UsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; PostApiV1UsersUserIdDisable(PostApiV1UsersUserIdDisableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint disables a user in your organization's Soda Cloud account.

Disabling a user deactivates their membership in the organization. The user is not deleted and can be reactivated later.

Users in SSO-enabled organizations cannot be disabled via this endpoint, as they are managed by the identity provider.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

## Tags

`Users`

## Rate limiting

60 requests/60 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.PostApiV1UsersUserIdDisable(new PostApiV1UsersUserIdDisableRequest
    {
        UserId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<PostApiV1UsersUserIdDisableError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostApiV1UsersUserIdDisableRequest](src/Soda/Requests/Users/PostApiV1UsersUserIdDisableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[PostApiV1UsersUserIdDisableError](src/Soda/Errors/PostApiV1UsersUserIdDisableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Utility

> Source: [Utility](src/Soda/Api/Utility.cs)

<details>
<summary><code>Task&lt;PublicApiTestLoginResponse&gt; GetApiV1TestLogin(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint enables you to test the API connection to your organization's Soda Cloud account. Use this endpoint to verify that the authentication and authorization details are accurate and the API is ready to accept calls.

## Authentication

User authentication required: `true`

This endpoint accepts authentication via API keys in the `Basic` authentication header, or a pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each request.

## Authorization

Any Soda Cloud user in your organization may execute this query.

## Tags

`Utility`

## Rate limiting

10 requests/10 seconds

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Utility.GetApiV1TestLogin();
    // TODO: Handle 'response' of type PublicApiTestLoginResponse
}
catch (ApiException<GetApiV1TestLoginError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicApiTestLoginResponse](src/Soda/Models/PublicApiTestLoginResponse.cs)</code>

**OnError**: <code>[ApiException](src/Soda/Core/Exceptions/ApiException.cs)&lt;[GetApiV1TestLoginError](src/Soda/Errors/GetApiV1TestLoginError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

