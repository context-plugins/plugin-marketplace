# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [SodaClient](soda/client.py)

## Attributes

> Source: [Attributes](soda/apis/attributes.py)

<details>
<summary><code>def delete_api_v1_attributes_attribute_id(attribute_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDeleteAttributeResponse, DeleteApiV1AttributesAttributeIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.attributes.with_raw_response.delete_api_v1_attributes_attribute_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteAttributeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1AttributesAttributeIdErrorBody
```

**Async**

```python
result = await async_client.attributes.with_raw_response.delete_api_v1_attributes_attribute_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteAttributeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1AttributesAttributeIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>attribute_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDeleteAttributeResponse](soda/models/public_api_delete_attribute_response.py), [DeleteApiV1AttributesAttributeIdErrorBody](soda/errors/delete_api_v1_attributes_attribute_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDeleteAttributeResponse](soda/models/public_api_delete_attribute_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DeleteApiV1AttributesAttributeIdErrorBody](soda/errors/delete_api_v1_attributes_attribute_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_attributes(*, page: int | None = None, resource_type: AttributeResourceTypeDtoOrStr | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiListAttributesResponse, GetApiV1AttributesErrorBody]</code></summary>

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

**Sync**

```python
result = client.attributes.with_raw_response.get_api_v1_attributes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListAttributesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1AttributesErrorBody
```

**Async**

```python
result = await async_client.attributes.with_raw_response.get_api_v1_attributes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListAttributesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1AttributesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>resource_type</code> | <code>[AttributeResourceTypeDtoOrStr](soda/models/enums/attribute_resource_type_dto.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiListAttributesResponse](soda/models/public_api_list_attributes_response.py), [GetApiV1AttributesErrorBody](soda/errors/get_api_v1_attributes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiListAttributesResponse](soda/models/public_api_list_attributes_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1AttributesErrorBody](soda/errors/get_api_v1_attributes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_attributes(body: PublicApiCreateAttributeRequestDto | PublicApiCreateAttributeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiCreateAttributeResponse, PostApiV1AttributesErrorBody]</code></summary>

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

**Sync**

```python
result = client.attributes.with_raw_response.post_api_v1_attributes(
    PublicApiCreateAttributeRequestDto(
        label="some example string",
        name="some example string",
        resource_type=AttributeResourceTypeDto.DATASET,
        type_=AttributeTypeDto.TEXT,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateAttributeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1AttributesErrorBody
```

**Async**

```python
result = await async_client.attributes.with_raw_response.post_api_v1_attributes(
    PublicApiCreateAttributeRequestDto(
        label="some example string",
        name="some example string",
        resource_type=AttributeResourceTypeDto.DATASET,
        type_=AttributeTypeDto.TEXT,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateAttributeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1AttributesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiCreateAttributeRequestDto](soda/models/public_api_create_attribute_request_dto.py) \| [PublicApiCreateAttributeRequestDtoDict](soda/models/public_api_create_attribute_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiCreateAttributeResponse](soda/models/public_api_create_attribute_response.py), [PostApiV1AttributesErrorBody](soda/errors/post_api_v1_attributes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiCreateAttributeResponse](soda/models/public_api_create_attribute_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1AttributesErrorBody](soda/errors/post_api_v1_attributes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_attributes_attribute_id(attribute_id: str, body: PublicApiUpdateAttributeRequestDto | PublicApiUpdateAttributeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiUpdateAttributeResponse, PostApiV1AttributesAttributeIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.attributes.with_raw_response.post_api_v1_attributes_attribute_id(
    "some example string", PublicApiUpdateAttributeRequestDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateAttributeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1AttributesAttributeIdErrorBody
```

**Async**

```python
result = await async_client.attributes.with_raw_response.post_api_v1_attributes_attribute_id(
    "some example string", PublicApiUpdateAttributeRequestDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateAttributeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1AttributesAttributeIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>attribute_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiUpdateAttributeRequestDto](soda/models/public_api_update_attribute_request_dto.py) \| [PublicApiUpdateAttributeRequestDtoDict](soda/models/public_api_update_attribute_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiUpdateAttributeResponse](soda/models/public_api_update_attribute_response.py), [PostApiV1AttributesAttributeIdErrorBody](soda/errors/post_api_v1_attributes_attribute_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiUpdateAttributeResponse](soda/models/public_api_update_attribute_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1AttributesAttributeIdErrorBody](soda/errors/post_api_v1_attributes_attribute_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Checks

> Source: [Checks](soda/apis/checks.py)

<details>
<summary><code>def delete_api_v1_checks_check_id(check_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteApiV1ChecksCheckIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.checks.with_raw_response.delete_api_v1_checks_check_id("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1ChecksCheckIdErrorBody
```

**Async**

```python
result = await async_client.checks.with_raw_response.delete_api_v1_checks_check_id("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1ChecksCheckIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>check_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;None, [DeleteApiV1ChecksCheckIdErrorBody](soda/errors/delete_api_v1_checks_check_id_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteApiV1ChecksCheckIdErrorBody](soda/errors/delete_api_v1_checks_check_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_checks(*, check_ids: str | None = None, data_standard_id: str | None = None, dataset_id: str | None = None, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiChecksResponse, GetApiV1ChecksErrorBody]</code></summary>

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

**Sync**

```python
result = client.checks.with_raw_response.get_api_v1_checks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiChecksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ChecksErrorBody
```

**Async**

```python
result = await async_client.checks.with_raw_response.get_api_v1_checks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiChecksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ChecksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>check_ids</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>data_standard_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dataset_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiChecksResponse](soda/models/public_api_checks_response.py), [GetApiV1ChecksErrorBody](soda/errors/get_api_v1_checks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiChecksResponse](soda/models/public_api_checks_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1ChecksErrorBody](soda/errors/get_api_v1_checks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Contracts

> Source: [Contracts](soda/apis/contracts.py)

<details>
<summary><code>def get_api_v1_contracts(*, dataset_id: str | None = None, dataset_qualified_name: str | None = None, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiListContractsResponse, GetApiV1ContractsErrorBody]</code></summary>

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

**Sync**

```python
result = client.contracts.with_raw_response.get_api_v1_contracts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListContractsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ContractsErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.get_api_v1_contracts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListContractsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ContractsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dataset_qualified_name</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiListContractsResponse](soda/models/public_api_list_contracts_response.py), [GetApiV1ContractsErrorBody](soda/errors/get_api_v1_contracts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiListContractsResponse](soda/models/public_api_list_contracts_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1ContractsErrorBody](soda/errors/get_api_v1_contracts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_contracts_actions_create_skeleton_operation_id(operation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiCreateSkeletonContractStatusResponse, GetApiV1ContractsActionsCreateSkeletonOperationIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.contracts.with_raw_response.get_api_v1_contracts_actions_create_skeleton_operation_id(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateSkeletonContractStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ContractsActionsCreateSkeletonOperationIdErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.get_api_v1_contracts_actions_create_skeleton_operation_id(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateSkeletonContractStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ContractsActionsCreateSkeletonOperationIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>operation_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiCreateSkeletonContractStatusResponse](soda/models/public_api_create_skeleton_contract_status_response.py), [GetApiV1ContractsActionsCreateSkeletonOperationIdErrorBody](soda/errors/get_api_v1_contracts_actions_create_skeleton_operation_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiCreateSkeletonContractStatusResponse](soda/models/public_api_create_skeleton_contract_status_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1ContractsActionsCreateSkeletonOperationIdErrorBody](soda/errors/get_api_v1_contracts_actions_create_skeleton_operation_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_contracts_actions_generate_operation_id(operation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiGenerateContractStatusResponse, GetApiV1ContractsActionsGenerateOperationIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.contracts.with_raw_response.get_api_v1_contracts_actions_generate_operation_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGenerateContractStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ContractsActionsGenerateOperationIdErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.get_api_v1_contracts_actions_generate_operation_id(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGenerateContractStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ContractsActionsGenerateOperationIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>operation_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiGenerateContractStatusResponse](soda/models/public_api_generate_contract_status_response.py), [GetApiV1ContractsActionsGenerateOperationIdErrorBody](soda/errors/get_api_v1_contracts_actions_generate_operation_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiGenerateContractStatusResponse](soda/models/public_api_generate_contract_status_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1ContractsActionsGenerateOperationIdErrorBody](soda/errors/get_api_v1_contracts_actions_generate_operation_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_contracts_contract_id(contract_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiGetContractResponse, GetApiV1ContractsContractIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.contracts.with_raw_response.get_api_v1_contracts_contract_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGetContractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ContractsContractIdErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.get_api_v1_contracts_contract_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGetContractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ContractsContractIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contract_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiGetContractResponse](soda/models/public_api_get_contract_response.py), [GetApiV1ContractsContractIdErrorBody](soda/errors/get_api_v1_contracts_contract_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiGetContractResponse](soda/models/public_api_get_contract_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1ContractsContractIdErrorBody](soda/errors/get_api_v1_contracts_contract_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_contracts_contract_id_versions(contract_id: str, *, created_before: RFC3339DateTime | None = None, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiListContractVersionsResponse, GetApiV1ContractsContractIdVersionsErrorBody]</code></summary>

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

**Sync**

```python
result = client.contracts.with_raw_response.get_api_v1_contracts_contract_id_versions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListContractVersionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ContractsContractIdVersionsErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.get_api_v1_contracts_contract_id_versions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListContractVersionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ContractsContractIdVersionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contract_id</code> | <code>str</code> | Value sent with the request. |
| <code>created_before</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiListContractVersionsResponse](soda/models/public_api_list_contract_versions_response.py), [GetApiV1ContractsContractIdVersionsErrorBody](soda/errors/get_api_v1_contracts_contract_id_versions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiListContractVersionsResponse](soda/models/public_api_list_contract_versions_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1ContractsContractIdVersionsErrorBody](soda/errors/get_api_v1_contracts_contract_id_versions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_contracts(body: PublicApiCreateContractRequestDto | PublicApiCreateContractRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiGetContractResponse, PostApiV1ContractsErrorBody]</code></summary>

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

**Sync**

```python
result = client.contracts.with_raw_response.post_api_v1_contracts(
    PublicApiCreateContractRequestDto(contents="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGetContractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1ContractsErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.post_api_v1_contracts(
    PublicApiCreateContractRequestDto(contents="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGetContractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1ContractsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiCreateContractRequestDto](soda/models/public_api_create_contract_request_dto.py) \| [PublicApiCreateContractRequestDtoDict](soda/models/public_api_create_contract_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiGetContractResponse](soda/models/public_api_get_contract_response.py), [PostApiV1ContractsErrorBody](soda/errors/post_api_v1_contracts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiGetContractResponse](soda/models/public_api_get_contract_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1ContractsErrorBody](soda/errors/post_api_v1_contracts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_contracts_actions_create_skeleton(body: PublicApiCreateSkeletonContractRequestDto | PublicApiCreateSkeletonContractRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PostApiV1ContractsActionsCreateSkeletonErrorBody]</code></summary>

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

**Sync**

```python
result = client.contracts.with_raw_response.post_api_v1_contracts_actions_create_skeleton(
    PublicApiCreateSkeletonContractRequestDto()
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1ContractsActionsCreateSkeletonErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.post_api_v1_contracts_actions_create_skeleton(
    PublicApiCreateSkeletonContractRequestDto()
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1ContractsActionsCreateSkeletonErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiCreateSkeletonContractRequestDto](soda/models/public_api_create_skeleton_contract_request_dto.py) \| [PublicApiCreateSkeletonContractRequestDtoDict](soda/models/public_api_create_skeleton_contract_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;None, [PostApiV1ContractsActionsCreateSkeletonErrorBody](soda/errors/post_api_v1_contracts_actions_create_skeleton_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PostApiV1ContractsActionsCreateSkeletonErrorBody](soda/errors/post_api_v1_contracts_actions_create_skeleton_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_contracts_actions_generate(body: PublicApiGenerateContractRequestDto | PublicApiGenerateContractRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PostApiV1ContractsActionsGenerateErrorBody]</code></summary>

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

**Sync**

```python
result = client.contracts.with_raw_response.post_api_v1_contracts_actions_generate(
    PublicApiGenerateContractRequestDto()
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1ContractsActionsGenerateErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.post_api_v1_contracts_actions_generate(
    PublicApiGenerateContractRequestDto()
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1ContractsActionsGenerateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiGenerateContractRequestDto](soda/models/public_api_generate_contract_request_dto.py) \| [PublicApiGenerateContractRequestDtoDict](soda/models/public_api_generate_contract_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;None, [PostApiV1ContractsActionsGenerateErrorBody](soda/errors/post_api_v1_contracts_actions_generate_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PostApiV1ContractsActionsGenerateErrorBody](soda/errors/post_api_v1_contracts_actions_generate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_contracts_contract_id(contract_id: str, body: PublicApiPublishContractRequestDto | PublicApiPublishContractRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiGetContractResponse, PostApiV1ContractsContractIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.contracts.with_raw_response.post_api_v1_contracts_contract_id(
    "some example string", PublicApiPublishContractRequestDto(contents="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGetContractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1ContractsContractIdErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.post_api_v1_contracts_contract_id(
    "some example string", PublicApiPublishContractRequestDto(contents="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGetContractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1ContractsContractIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contract_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiPublishContractRequestDto](soda/models/public_api_publish_contract_request_dto.py) \| [PublicApiPublishContractRequestDtoDict](soda/models/public_api_publish_contract_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiGetContractResponse](soda/models/public_api_get_contract_response.py), [PostApiV1ContractsContractIdErrorBody](soda/errors/post_api_v1_contracts_contract_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiGetContractResponse](soda/models/public_api_get_contract_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1ContractsContractIdErrorBody](soda/errors/post_api_v1_contracts_contract_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_contracts_contract_id_verify(contract_id: str, body: PublicApiVerifyContractRequestDto | PublicApiVerifyContractRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PostApiV1ContractsContractIdVerifyErrorBody]</code></summary>

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

**Sync**

```python
result = client.contracts.with_raw_response.post_api_v1_contracts_contract_id_verify(
    "some example string", PublicApiVerifyContractRequestDto()
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1ContractsContractIdVerifyErrorBody
```

**Async**

```python
result = await async_client.contracts.with_raw_response.post_api_v1_contracts_contract_id_verify(
    "some example string", PublicApiVerifyContractRequestDto()
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1ContractsContractIdVerifyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contract_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiVerifyContractRequestDto](soda/models/public_api_verify_contract_request_dto.py) \| [PublicApiVerifyContractRequestDtoDict](soda/models/public_api_verify_contract_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;None, [PostApiV1ContractsContractIdVerifyErrorBody](soda/errors/post_api_v1_contracts_contract_id_verify_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PostApiV1ContractsContractIdVerifyErrorBody](soda/errors/post_api_v1_contracts_contract_id_verify_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DataSources

> Source: [DataSources](soda/apis/data_sources.py)

<details>
<summary><code>def delete_api_v1_datasources_roles_role_id(role_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDeleteDatasourceRoleResponse, DeleteApiV1DatasourcesRolesRoleIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.delete_api_v1_datasources_roles_role_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteDatasourceRoleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1DatasourcesRolesRoleIdErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.delete_api_v1_datasources_roles_role_id(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteDatasourceRoleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1DatasourcesRolesRoleIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>role_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDeleteDatasourceRoleResponse](soda/models/public_api_delete_datasource_role_response.py), [DeleteApiV1DatasourcesRolesRoleIdErrorBody](soda/errors/delete_api_v1_datasources_roles_role_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDeleteDatasourceRoleResponse](soda/models/public_api_delete_datasource_role_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DeleteApiV1DatasourcesRolesRoleIdErrorBody](soda/errors/delete_api_v1_datasources_roles_role_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_api_v1_datasources_datasource_id(datasource_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDeleteDatasourceResponse, DeleteApiV1DatasourcesDatasourceIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.delete_api_v1_datasources_datasource_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteDatasourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1DatasourcesDatasourceIdErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.delete_api_v1_datasources_datasource_id(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteDatasourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1DatasourcesDatasourceIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasource_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDeleteDatasourceResponse](soda/models/public_api_delete_datasource_response.py), [DeleteApiV1DatasourcesDatasourceIdErrorBody](soda/errors/delete_api_v1_datasources_datasource_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDeleteDatasourceResponse](soda/models/public_api_delete_datasource_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DeleteApiV1DatasourcesDatasourceIdErrorBody](soda/errors/delete_api_v1_datasources_datasource_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasources(*, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiListDatasourcesResponse, GetApiV1DatasourcesErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.get_api_v1_datasources()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListDatasourcesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasourcesErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.get_api_v1_datasources()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListDatasourcesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasourcesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiListDatasourcesResponse](soda/models/public_api_list_datasources_response.py), [GetApiV1DatasourcesErrorBody](soda/errors/get_api_v1_datasources_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiListDatasourcesResponse](soda/models/public_api_list_datasources_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasourcesErrorBody](soda/errors/get_api_v1_datasources_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasources_actions_test_connection_operation_id(operation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiTestConnectionStatusResponse, GetApiV1DatasourcesActionsTestConnectionOperationIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.get_api_v1_datasources_actions_test_connection_operation_id(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiTestConnectionStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasourcesActionsTestConnectionOperationIdErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.get_api_v1_datasources_actions_test_connection_operation_id(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiTestConnectionStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasourcesActionsTestConnectionOperationIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>operation_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiTestConnectionStatusResponse](soda/models/public_api_test_connection_status_response.py), [GetApiV1DatasourcesActionsTestConnectionOperationIdErrorBody](soda/errors/get_api_v1_datasources_actions_test_connection_operation_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiTestConnectionStatusResponse](soda/models/public_api_test_connection_status_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasourcesActionsTestConnectionOperationIdErrorBody](soda/errors/get_api_v1_datasources_actions_test_connection_operation_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasources_roles(*, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDatasourceRolesResponse, GetApiV1DatasourcesRolesErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.get_api_v1_datasources_roles()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasourceRolesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasourcesRolesErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.get_api_v1_datasources_roles()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasourceRolesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasourcesRolesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDatasourceRolesResponse](soda/models/public_api_datasource_roles_response.py), [GetApiV1DatasourcesRolesErrorBody](soda/errors/get_api_v1_datasources_roles_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDatasourceRolesResponse](soda/models/public_api_datasource_roles_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasourcesRolesErrorBody](soda/errors/get_api_v1_datasources_roles_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasources_datasource_id(datasource_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiGetDatasourceResponse, GetApiV1DatasourcesDatasourceIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.get_api_v1_datasources_datasource_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGetDatasourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasourcesDatasourceIdErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.get_api_v1_datasources_datasource_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGetDatasourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasourcesDatasourceIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasource_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiGetDatasourceResponse](soda/models/public_api_get_datasource_response.py), [GetApiV1DatasourcesDatasourceIdErrorBody](soda/errors/get_api_v1_datasources_datasource_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiGetDatasourceResponse](soda/models/public_api_get_datasource_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasourcesDatasourceIdErrorBody](soda/errors/get_api_v1_datasources_datasource_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasources_datasource_id_diagnostics_warehouse(datasource_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDatasourceDiagnosticsWarehouseResponse, GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.get_api_v1_datasources_datasource_id_diagnostics_warehouse(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasourceDiagnosticsWarehouseResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.get_api_v1_datasources_datasource_id_diagnostics_warehouse(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasourceDiagnosticsWarehouseResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasource_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDatasourceDiagnosticsWarehouseResponse](soda/models/public_api_datasource_diagnostics_warehouse_response.py), [GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody](soda/errors/get_api_v1_datasources_datasource_id_diagnostics_warehouse_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDatasourceDiagnosticsWarehouseResponse](soda/models/public_api_datasource_diagnostics_warehouse_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody](soda/errors/get_api_v1_datasources_datasource_id_diagnostics_warehouse_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasources_datasource_id_onboard_datasets_operation_id(datasource_id: str, operation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiOnboardDatasetsStatusResponse, GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.get_api_v1_datasources_datasource_id_onboard_datasets_operation_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiOnboardDatasetsStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.get_api_v1_datasources_datasource_id_onboard_datasets_operation_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiOnboardDatasetsStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasource_id</code> | <code>str</code> | Value sent with the request. |
| <code>operation_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiOnboardDatasetsStatusResponse](soda/models/public_api_onboard_datasets_status_response.py), [GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdErrorBody](soda/errors/get_api_v1_datasources_datasource_id_onboard_datasets_operation_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiOnboardDatasetsStatusResponse](soda/models/public_api_onboard_datasets_status_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdErrorBody](soda/errors/get_api_v1_datasources_datasource_id_onboard_datasets_operation_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasources_datasource_id_responsibilities(datasource_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDatasourceResponsibilitiesResponse, GetApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.get_api_v1_datasources_datasource_id_responsibilities(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasourceResponsibilitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.get_api_v1_datasources_datasource_id_responsibilities(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasourceResponsibilitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasource_id</code> | <code>str</code> | Value sent with the request. |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDatasourceResponsibilitiesResponse](soda/models/public_api_datasource_responsibilities_response.py), [GetApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody](soda/errors/get_api_v1_datasources_datasource_id_responsibilities_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDatasourceResponsibilitiesResponse](soda/models/public_api_datasource_responsibilities_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody](soda/errors/get_api_v1_datasources_datasource_id_responsibilities_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasources(body: PublicApiCreateDatasourceRequestDto | PublicApiCreateDatasourceRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiCreateDatasourceResponse, PostApiV1DatasourcesErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.post_api_v1_datasources(
    PublicApiCreateDatasourceRequestDto(configuration_file_contents="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateDatasourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.post_api_v1_datasources(
    PublicApiCreateDatasourceRequestDto(configuration_file_contents="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateDatasourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiCreateDatasourceRequestDto](soda/models/public_api_create_datasource_request_dto.py) \| [PublicApiCreateDatasourceRequestDtoDict](soda/models/public_api_create_datasource_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiCreateDatasourceResponse](soda/models/public_api_create_datasource_response.py), [PostApiV1DatasourcesErrorBody](soda/errors/post_api_v1_datasources_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiCreateDatasourceResponse](soda/models/public_api_create_datasource_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1DatasourcesErrorBody](soda/errors/post_api_v1_datasources_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasources_actions_test_connection(body: PublicApiTestConnectionRequestDto | PublicApiTestConnectionRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PostApiV1DatasourcesActionsTestConnectionErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.post_api_v1_datasources_actions_test_connection(
    PublicApiTestConnectionRequestDto(
        configuration_file_contents="some example string", runner_id="some example string"
    ),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesActionsTestConnectionErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.post_api_v1_datasources_actions_test_connection(
    PublicApiTestConnectionRequestDto(
        configuration_file_contents="some example string", runner_id="some example string"
    ),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesActionsTestConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiTestConnectionRequestDto](soda/models/public_api_test_connection_request_dto.py) \| [PublicApiTestConnectionRequestDtoDict](soda/models/public_api_test_connection_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;None, [PostApiV1DatasourcesActionsTestConnectionErrorBody](soda/errors/post_api_v1_datasources_actions_test_connection_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PostApiV1DatasourcesActionsTestConnectionErrorBody](soda/errors/post_api_v1_datasources_actions_test_connection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasources_roles(body: PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiCreateDatasourceRoleResponse, PostApiV1DatasourcesRolesErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.post_api_v1_datasources_roles(
    PublicApiDatasourceRoleRequestDto(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateDatasourceRoleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesRolesErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.post_api_v1_datasources_roles(
    PublicApiDatasourceRoleRequestDto(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateDatasourceRoleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesRolesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiDatasourceRoleRequestDto](soda/models/public_api_datasource_role_request_dto.py) \| [PublicApiDatasourceRoleRequestDtoDict](soda/models/public_api_datasource_role_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiCreateDatasourceRoleResponse](soda/models/public_api_create_datasource_role_response.py), [PostApiV1DatasourcesRolesErrorBody](soda/errors/post_api_v1_datasources_roles_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiCreateDatasourceRoleResponse](soda/models/public_api_create_datasource_role_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1DatasourcesRolesErrorBody](soda/errors/post_api_v1_datasources_roles_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasources_roles_role_id(role_id: str, body: PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiUpdateDatasourceRoleResponse, PostApiV1DatasourcesRolesRoleIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.post_api_v1_datasources_roles_role_id(
    "some example string", PublicApiDatasourceRoleRequestDto(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateDatasourceRoleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesRolesRoleIdErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.post_api_v1_datasources_roles_role_id(
    "some example string", PublicApiDatasourceRoleRequestDto(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateDatasourceRoleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesRolesRoleIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>role_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiDatasourceRoleRequestDto](soda/models/public_api_datasource_role_request_dto.py) \| [PublicApiDatasourceRoleRequestDtoDict](soda/models/public_api_datasource_role_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiUpdateDatasourceRoleResponse](soda/models/public_api_update_datasource_role_response.py), [PostApiV1DatasourcesRolesRoleIdErrorBody](soda/errors/post_api_v1_datasources_roles_role_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiUpdateDatasourceRoleResponse](soda/models/public_api_update_datasource_role_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1DatasourcesRolesRoleIdErrorBody](soda/errors/post_api_v1_datasources_roles_role_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasources_datasource_id(datasource_id: str, body: PublicApiUpdateDatasourceRequestDto | PublicApiUpdateDatasourceRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiUpdateDatasourceResponse, PostApiV1DatasourcesDatasourceIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.post_api_v1_datasources_datasource_id(
    "some example string", PublicApiUpdateDatasourceRequestDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateDatasourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesDatasourceIdErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.post_api_v1_datasources_datasource_id(
    "some example string", PublicApiUpdateDatasourceRequestDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateDatasourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesDatasourceIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasource_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiUpdateDatasourceRequestDto](soda/models/public_api_update_datasource_request_dto.py) \| [PublicApiUpdateDatasourceRequestDtoDict](soda/models/public_api_update_datasource_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiUpdateDatasourceResponse](soda/models/public_api_update_datasource_response.py), [PostApiV1DatasourcesDatasourceIdErrorBody](soda/errors/post_api_v1_datasources_datasource_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiUpdateDatasourceResponse](soda/models/public_api_update_datasource_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1DatasourcesDatasourceIdErrorBody](soda/errors/post_api_v1_datasources_datasource_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasources_datasource_id_diagnostics_warehouse(datasource_id: str, body: PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto | PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDatasourceDiagnosticsWarehouseResponse, PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.post_api_v1_datasources_datasource_id_diagnostics_warehouse(
    "some example string", PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasourceDiagnosticsWarehouseResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.post_api_v1_datasources_datasource_id_diagnostics_warehouse(
    "some example string", PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasourceDiagnosticsWarehouseResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasource_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto](soda/models/public_api_update_datasource_diagnostics_warehouse_request_dto.py) \| [PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoDict](soda/models/public_api_update_datasource_diagnostics_warehouse_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDatasourceDiagnosticsWarehouseResponse](soda/models/public_api_datasource_diagnostics_warehouse_response.py), [PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody](soda/errors/post_api_v1_datasources_datasource_id_diagnostics_warehouse_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDatasourceDiagnosticsWarehouseResponse](soda/models/public_api_datasource_diagnostics_warehouse_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody](soda/errors/post_api_v1_datasources_datasource_id_diagnostics_warehouse_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasources_datasource_id_discover(datasource_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PostApiV1DatasourcesDatasourceIdDiscoverErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.post_api_v1_datasources_datasource_id_discover("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesDatasourceIdDiscoverErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.post_api_v1_datasources_datasource_id_discover(
    "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesDatasourceIdDiscoverErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasource_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;None, [PostApiV1DatasourcesDatasourceIdDiscoverErrorBody](soda/errors/post_api_v1_datasources_datasource_id_discover_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PostApiV1DatasourcesDatasourceIdDiscoverErrorBody](soda/errors/post_api_v1_datasources_datasource_id_discover_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasources_datasource_id_onboard_datasets(datasource_id: str, body: PublicApiOnboardDatasetsRequestDto | PublicApiOnboardDatasetsRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PostApiV1DatasourcesDatasourceIdOnboardDatasetsErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.post_api_v1_datasources_datasource_id_onboard_datasets(
    "some example string", PublicApiOnboardDatasetsRequestDto(discovered_dataset_ids=["some example string"])
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesDatasourceIdOnboardDatasetsErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.post_api_v1_datasources_datasource_id_onboard_datasets(
    "some example string", PublicApiOnboardDatasetsRequestDto(discovered_dataset_ids=["some example string"])
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesDatasourceIdOnboardDatasetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasource_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiOnboardDatasetsRequestDto](soda/models/public_api_onboard_datasets_request_dto.py) \| [PublicApiOnboardDatasetsRequestDtoDict](soda/models/public_api_onboard_datasets_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;None, [PostApiV1DatasourcesDatasourceIdOnboardDatasetsErrorBody](soda/errors/post_api_v1_datasources_datasource_id_onboard_datasets_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PostApiV1DatasourcesDatasourceIdOnboardDatasetsErrorBody](soda/errors/post_api_v1_datasources_datasource_id_onboard_datasets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasources_datasource_id_responsibilities(datasource_id: str, body: PublicApiUpdateDatasourceResponsibilitiesRequestDto | PublicApiUpdateDatasourceResponsibilitiesRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PostApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_sources.with_raw_response.post_api_v1_datasources_datasource_id_responsibilities(
    "some example string",
    PublicApiUpdateDatasourceResponsibilitiesRequestDto(
        responsibilities=[
            DatasourceResponsibilityContentRequestDto(role_id="some example string", type_=ResponsibilityTypeDto.USER)
        ],
    ),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.post_api_v1_datasources_datasource_id_responsibilities(
    "some example string",
    PublicApiUpdateDatasourceResponsibilitiesRequestDto(
        responsibilities=[
            DatasourceResponsibilityContentRequestDto(role_id="some example string", type_=ResponsibilityTypeDto.USER)
        ],
    ),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasource_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiUpdateDatasourceResponsibilitiesRequestDto](soda/models/public_api_update_datasource_responsibilities_request_dto.py) \| [PublicApiUpdateDatasourceResponsibilitiesRequestDtoDict](soda/models/public_api_update_datasource_responsibilities_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;None, [PostApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody](soda/errors/post_api_v1_datasources_datasource_id_responsibilities_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PostApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody](soda/errors/post_api_v1_datasources_datasource_id_responsibilities_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DataStandards

> Source: [DataStandards](soda/apis/data_standards.py)

<details>
<summary><code>def delete_api_v1_data_standards_data_standard_id(data_standard_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDeleteDataStandardResponse, DeleteApiV1DataStandardsDataStandardIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_standards.with_raw_response.delete_api_v1_data_standards_data_standard_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteDataStandardResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1DataStandardsDataStandardIdErrorBody
```

**Async**

```python
result = await async_client.data_standards.with_raw_response.delete_api_v1_data_standards_data_standard_id(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteDataStandardResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1DataStandardsDataStandardIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>data_standard_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDeleteDataStandardResponse](soda/models/public_api_delete_data_standard_response.py), [DeleteApiV1DataStandardsDataStandardIdErrorBody](soda/errors/delete_api_v1_data_standards_data_standard_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDeleteDataStandardResponse](soda/models/public_api_delete_data_standard_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DeleteApiV1DataStandardsDataStandardIdErrorBody](soda/errors/delete_api_v1_data_standards_data_standard_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_data_standards(*, page: int | None = None, search: str | None = None, size: int | None = None, sort: DataStandardSortFieldDtoOrStr | None = None, status: DataStandardStatusDtoOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiListDataStandardsResponse, GetApiV1DataStandardsErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_standards.with_raw_response.get_api_v1_data_standards()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListDataStandardsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DataStandardsErrorBody
```

**Async**

```python
result = await async_client.data_standards.with_raw_response.get_api_v1_data_standards()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListDataStandardsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DataStandardsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>[DataStandardSortFieldDtoOrStr](soda/models/enums/data_standard_sort_field_dto.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[DataStandardStatusDtoOrStr](soda/models/enums/data_standard_status_dto.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiListDataStandardsResponse](soda/models/public_api_list_data_standards_response.py), [GetApiV1DataStandardsErrorBody](soda/errors/get_api_v1_data_standards_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiListDataStandardsResponse](soda/models/public_api_list_data_standards_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DataStandardsErrorBody](soda/errors/get_api_v1_data_standards_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_data_standards_activity(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDataStandardsActivityResponse, GetApiV1DataStandardsActivityErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_standards.with_raw_response.get_api_v1_data_standards_activity()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDataStandardsActivityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DataStandardsActivityErrorBody
```

**Async**

```python
result = await async_client.data_standards.with_raw_response.get_api_v1_data_standards_activity()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDataStandardsActivityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DataStandardsActivityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDataStandardsActivityResponse](soda/models/public_api_data_standards_activity_response.py), [GetApiV1DataStandardsActivityErrorBody](soda/errors/get_api_v1_data_standards_activity_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDataStandardsActivityResponse](soda/models/public_api_data_standards_activity_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DataStandardsActivityErrorBody](soda/errors/get_api_v1_data_standards_activity_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_data_standards_data_standard_id(data_standard_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiGetDataStandardResponse, GetApiV1DataStandardsDataStandardIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_standards.with_raw_response.get_api_v1_data_standards_data_standard_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGetDataStandardResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DataStandardsDataStandardIdErrorBody
```

**Async**

```python
result = await async_client.data_standards.with_raw_response.get_api_v1_data_standards_data_standard_id(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGetDataStandardResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DataStandardsDataStandardIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>data_standard_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiGetDataStandardResponse](soda/models/public_api_get_data_standard_response.py), [GetApiV1DataStandardsDataStandardIdErrorBody](soda/errors/get_api_v1_data_standards_data_standard_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiGetDataStandardResponse](soda/models/public_api_get_data_standard_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DataStandardsDataStandardIdErrorBody](soda/errors/get_api_v1_data_standards_data_standard_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_data_standards_data_standard_id_checks(data_standard_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiListDataStandardChecksResponse, GetApiV1DataStandardsDataStandardIdChecksErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_standards.with_raw_response.get_api_v1_data_standards_data_standard_id_checks(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListDataStandardChecksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DataStandardsDataStandardIdChecksErrorBody
```

**Async**

```python
result = await async_client.data_standards.with_raw_response.get_api_v1_data_standards_data_standard_id_checks(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListDataStandardChecksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DataStandardsDataStandardIdChecksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>data_standard_id</code> | <code>str</code> | Value sent with the request. |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiListDataStandardChecksResponse](soda/models/public_api_list_data_standard_checks_response.py), [GetApiV1DataStandardsDataStandardIdChecksErrorBody](soda/errors/get_api_v1_data_standards_data_standard_id_checks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiListDataStandardChecksResponse](soda/models/public_api_list_data_standard_checks_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DataStandardsDataStandardIdChecksErrorBody](soda/errors/get_api_v1_data_standards_data_standard_id_checks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_data_standards_data_standard_id_datasets(data_standard_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiListDataStandardDatasetsResponse, GetApiV1DataStandardsDataStandardIdDatasetsErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_standards.with_raw_response.get_api_v1_data_standards_data_standard_id_datasets(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListDataStandardDatasetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DataStandardsDataStandardIdDatasetsErrorBody
```

**Async**

```python
result = await async_client.data_standards.with_raw_response.get_api_v1_data_standards_data_standard_id_datasets(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListDataStandardDatasetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DataStandardsDataStandardIdDatasetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>data_standard_id</code> | <code>str</code> | Value sent with the request. |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiListDataStandardDatasetsResponse](soda/models/public_api_list_data_standard_datasets_response.py), [GetApiV1DataStandardsDataStandardIdDatasetsErrorBody](soda/errors/get_api_v1_data_standards_data_standard_id_datasets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiListDataStandardDatasetsResponse](soda/models/public_api_list_data_standard_datasets_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DataStandardsDataStandardIdDatasetsErrorBody](soda/errors/get_api_v1_data_standards_data_standard_id_datasets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_data_standards(body: PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiCreateDataStandardResponse, PostApiV1DataStandardsErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_standards.with_raw_response.post_api_v1_data_standards(
    PublicApiDataStandardRequestDto(
        contents="some example string",
        name="some example string",
        owners=[DataStandardOwnerRequestDto(type_=DatasetOwnerTypeDto.USER)],
        status=DataStandardStatusDto.DRAFT,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateDataStandardResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DataStandardsErrorBody
```

**Async**

```python
result = await async_client.data_standards.with_raw_response.post_api_v1_data_standards(
    PublicApiDataStandardRequestDto(
        contents="some example string",
        name="some example string",
        owners=[DataStandardOwnerRequestDto(type_=DatasetOwnerTypeDto.USER)],
        status=DataStandardStatusDto.DRAFT,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateDataStandardResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DataStandardsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiDataStandardRequestDto](soda/models/public_api_data_standard_request_dto.py) \| [PublicApiDataStandardRequestDtoDict](soda/models/public_api_data_standard_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiCreateDataStandardResponse](soda/models/public_api_create_data_standard_response.py), [PostApiV1DataStandardsErrorBody](soda/errors/post_api_v1_data_standards_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiCreateDataStandardResponse](soda/models/public_api_create_data_standard_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1DataStandardsErrorBody](soda/errors/post_api_v1_data_standards_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_data_standards_actions_execute(body: PublicApiExecuteDataStandardsRequestDto | PublicApiExecuteDataStandardsRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiExecuteDataStandardsResponse, PostApiV1DataStandardsActionsExecuteErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_standards.with_raw_response.post_api_v1_data_standards_actions_execute(
    PublicApiExecuteDataStandardsRequestDto(dataset_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiExecuteDataStandardsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DataStandardsActionsExecuteErrorBody
```

**Async**

```python
result = await async_client.data_standards.with_raw_response.post_api_v1_data_standards_actions_execute(
    PublicApiExecuteDataStandardsRequestDto(dataset_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiExecuteDataStandardsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DataStandardsActionsExecuteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiExecuteDataStandardsRequestDto](soda/models/public_api_execute_data_standards_request_dto.py) \| [PublicApiExecuteDataStandardsRequestDtoDict](soda/models/public_api_execute_data_standards_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiExecuteDataStandardsResponse](soda/models/public_api_execute_data_standards_response.py), [PostApiV1DataStandardsActionsExecuteErrorBody](soda/errors/post_api_v1_data_standards_actions_execute_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiExecuteDataStandardsResponse](soda/models/public_api_execute_data_standards_response.py)</code> -- Created

**On `Failure`**: `error` is <code>[PostApiV1DataStandardsActionsExecuteErrorBody](soda/errors/post_api_v1_data_standards_actions_execute_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_data_standards_actions_preview_scope(body: PublicApiPreviewDataStandardScopeRequestDto | PublicApiPreviewDataStandardScopeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiPreviewDataStandardScopeResponse, PostApiV1DataStandardsActionsPreviewScopeErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_standards.with_raw_response.post_api_v1_data_standards_actions_preview_scope(
    PublicApiPreviewDataStandardScopeRequestDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiPreviewDataStandardScopeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DataStandardsActionsPreviewScopeErrorBody
```

**Async**

```python
result = await async_client.data_standards.with_raw_response.post_api_v1_data_standards_actions_preview_scope(
    PublicApiPreviewDataStandardScopeRequestDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiPreviewDataStandardScopeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DataStandardsActionsPreviewScopeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiPreviewDataStandardScopeRequestDto](soda/models/public_api_preview_data_standard_scope_request_dto.py) \| [PublicApiPreviewDataStandardScopeRequestDtoDict](soda/models/public_api_preview_data_standard_scope_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiPreviewDataStandardScopeResponse](soda/models/public_api_preview_data_standard_scope_response.py), [PostApiV1DataStandardsActionsPreviewScopeErrorBody](soda/errors/post_api_v1_data_standards_actions_preview_scope_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiPreviewDataStandardScopeResponse](soda/models/public_api_preview_data_standard_scope_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1DataStandardsActionsPreviewScopeErrorBody](soda/errors/post_api_v1_data_standards_actions_preview_scope_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_data_standards_actions_test(body: PublicApiTestDataStandardRequestDto | PublicApiTestDataStandardRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiTestDataStandardResponse, PostApiV1DataStandardsActionsTestErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_standards.with_raw_response.post_api_v1_data_standards_actions_test(
    PublicApiTestDataStandardRequestDto(contents="some example string", dataset_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiTestDataStandardResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DataStandardsActionsTestErrorBody
```

**Async**

```python
result = await async_client.data_standards.with_raw_response.post_api_v1_data_standards_actions_test(
    PublicApiTestDataStandardRequestDto(contents="some example string", dataset_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiTestDataStandardResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DataStandardsActionsTestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiTestDataStandardRequestDto](soda/models/public_api_test_data_standard_request_dto.py) \| [PublicApiTestDataStandardRequestDtoDict](soda/models/public_api_test_data_standard_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiTestDataStandardResponse](soda/models/public_api_test_data_standard_response.py), [PostApiV1DataStandardsActionsTestErrorBody](soda/errors/post_api_v1_data_standards_actions_test_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiTestDataStandardResponse](soda/models/public_api_test_data_standard_response.py)</code> -- Created

**On `Failure`**: `error` is <code>[PostApiV1DataStandardsActionsTestErrorBody](soda/errors/post_api_v1_data_standards_actions_test_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_data_standards_data_standard_id(data_standard_id: str, body: PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiUpdateDataStandardResponse, PostApiV1DataStandardsDataStandardIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_standards.with_raw_response.post_api_v1_data_standards_data_standard_id(
    "some example string",
    PublicApiDataStandardRequestDto(
        contents="some example string",
        name="some example string",
        owners=[DataStandardOwnerRequestDto(type_=DatasetOwnerTypeDto.USER)],
        status=DataStandardStatusDto.DRAFT,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateDataStandardResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DataStandardsDataStandardIdErrorBody
```

**Async**

```python
result = await async_client.data_standards.with_raw_response.post_api_v1_data_standards_data_standard_id(
    "some example string",
    PublicApiDataStandardRequestDto(
        contents="some example string",
        name="some example string",
        owners=[DataStandardOwnerRequestDto(type_=DatasetOwnerTypeDto.USER)],
        status=DataStandardStatusDto.DRAFT,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateDataStandardResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DataStandardsDataStandardIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>data_standard_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiDataStandardRequestDto](soda/models/public_api_data_standard_request_dto.py) \| [PublicApiDataStandardRequestDtoDict](soda/models/public_api_data_standard_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiUpdateDataStandardResponse](soda/models/public_api_update_data_standard_response.py), [PostApiV1DataStandardsDataStandardIdErrorBody](soda/errors/post_api_v1_data_standards_data_standard_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiUpdateDataStandardResponse](soda/models/public_api_update_data_standard_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1DataStandardsDataStandardIdErrorBody](soda/errors/post_api_v1_data_standards_data_standard_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_data_standards_data_standard_id_actions_evaluate_scope(data_standard_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiEvaluateDataStandardScopeResponse, PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_standards.with_raw_response.post_api_v1_data_standards_data_standard_id_actions_evaluate_scope(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiEvaluateDataStandardScopeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeErrorBody
```

**Async**

```python
result = await async_client.data_standards.with_raw_response.post_api_v1_data_standards_data_standard_id_actions_evaluate_scope(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiEvaluateDataStandardScopeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>data_standard_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiEvaluateDataStandardScopeResponse](soda/models/public_api_evaluate_data_standard_scope_response.py), [PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeErrorBody](soda/errors/post_api_v1_data_standards_data_standard_id_actions_evaluate_scope_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiEvaluateDataStandardScopeResponse](soda/models/public_api_evaluate_data_standard_scope_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeErrorBody](soda/errors/post_api_v1_data_standards_data_standard_id_actions_evaluate_scope_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_data_standards_data_standard_id_actions_status(data_standard_id: str, body: PublicApiUpdateDataStandardStatusRequestDto | PublicApiUpdateDataStandardStatusRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiUpdateDataStandardStatusResponse, PostApiV1DataStandardsDataStandardIdActionsStatusErrorBody]</code></summary>

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

**Sync**

```python
result = client.data_standards.with_raw_response.post_api_v1_data_standards_data_standard_id_actions_status(
    "some example string", PublicApiUpdateDataStandardStatusRequestDto(status=DataStandardStatusDto.DRAFT)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateDataStandardStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DataStandardsDataStandardIdActionsStatusErrorBody
```

**Async**

```python
result = await async_client.data_standards.with_raw_response.post_api_v1_data_standards_data_standard_id_actions_status(
    "some example string", PublicApiUpdateDataStandardStatusRequestDto(status=DataStandardStatusDto.DRAFT)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateDataStandardStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DataStandardsDataStandardIdActionsStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>data_standard_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiUpdateDataStandardStatusRequestDto](soda/models/public_api_update_data_standard_status_request_dto.py) \| [PublicApiUpdateDataStandardStatusRequestDtoDict](soda/models/public_api_update_data_standard_status_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiUpdateDataStandardStatusResponse](soda/models/public_api_update_data_standard_status_response.py), [PostApiV1DataStandardsDataStandardIdActionsStatusErrorBody](soda/errors/post_api_v1_data_standards_data_standard_id_actions_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiUpdateDataStandardStatusResponse](soda/models/public_api_update_data_standard_status_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1DataStandardsDataStandardIdActionsStatusErrorBody](soda/errors/post_api_v1_data_standards_data_standard_id_actions_status_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Datasets

> Source: [Datasets](soda/apis/datasets.py)

<details>
<summary><code>def delete_api_v1_datasets_roles_role_id(role_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsRolesRoleIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.delete_api_v1_datasets_roles_role_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteDatasetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1DatasetsRolesRoleIdErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.delete_api_v1_datasets_roles_role_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteDatasetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1DatasetsRolesRoleIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>role_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDeleteDatasetResponse](soda/models/public_api_delete_dataset_response.py), [DeleteApiV1DatasetsRolesRoleIdErrorBody](soda/errors/delete_api_v1_datasets_roles_role_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDeleteDatasetResponse](soda/models/public_api_delete_dataset_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DeleteApiV1DatasetsRolesRoleIdErrorBody](soda/errors/delete_api_v1_datasets_roles_role_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_api_v1_datasets_dataset_id(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsDatasetIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.delete_api_v1_datasets_dataset_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteDatasetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1DatasetsDatasetIdErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.delete_api_v1_datasets_dataset_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteDatasetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1DatasetsDatasetIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDeleteDatasetResponse](soda/models/public_api_delete_dataset_response.py), [DeleteApiV1DatasetsDatasetIdErrorBody](soda/errors/delete_api_v1_datasets_dataset_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDeleteDatasetResponse](soda/models/public_api_delete_dataset_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DeleteApiV1DatasetsDatasetIdErrorBody](soda/errors/delete_api_v1_datasets_dataset_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(dataset_id: str, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteDatasetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteDatasetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>monitor_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDeleteDatasetResponse](soda/models/public_api_delete_dataset_response.py), [DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody](soda/errors/delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDeleteDatasetResponse](soda/models/public_api_delete_dataset_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody](soda/errors/delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(dataset_id: str, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteDatasetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteDatasetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>monitor_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDeleteDatasetResponse](soda/models/public_api_delete_dataset_response.py), [DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody](soda/errors/delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDeleteDatasetResponse](soda/models/public_api_delete_dataset_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody](soda/errors/delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasets(*, datasource_name: str | None = None, from_: RFC3339DateTime | None = None, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDatasetsResponse, GetApiV1DatasetsErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.get_api_v1_datasets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.get_api_v1_datasets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasource_name</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>from_</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDatasetsResponse](soda/models/public_api_datasets_response.py), [GetApiV1DatasetsErrorBody](soda/errors/get_api_v1_datasets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDatasetsResponse](soda/models/public_api_datasets_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasetsErrorBody](soda/errors/get_api_v1_datasets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name(dataset_qualified_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DatasetsContentDto, GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatasetsContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatasetsContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_qualified_name</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[DatasetsContentDto](soda/models/datasets_content_dto.py), [GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameErrorBody](soda/errors/get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DatasetsContentDto](soda/models/datasets_content_dto.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameErrorBody](soda/errors/get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasets_roles(*, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDatasetRolesResponse, GetApiV1DatasetsRolesErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.get_api_v1_datasets_roles()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasetRolesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsRolesErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.get_api_v1_datasets_roles()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasetRolesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsRolesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDatasetRolesResponse](soda/models/public_api_dataset_roles_response.py), [GetApiV1DatasetsRolesErrorBody](soda/errors/get_api_v1_datasets_roles_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDatasetRolesResponse](soda/models/public_api_dataset_roles_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasetsRolesErrorBody](soda/errors/get_api_v1_datasets_roles_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasets_dataset_id(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DatasetsContentDto, GetApiV1DatasetsDatasetIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.get_api_v1_datasets_dataset_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatasetsContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsDatasetIdErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.get_api_v1_datasets_dataset_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatasetsContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsDatasetIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[DatasetsContentDto](soda/models/datasets_content_dto.py), [GetApiV1DatasetsDatasetIdErrorBody](soda/errors/get_api_v1_datasets_dataset_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DatasetsContentDto](soda/models/datasets_content_dto.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasetsDatasetIdErrorBody](soda/errors/get_api_v1_datasets_dataset_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasets_dataset_id_columns(dataset_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiListDatasetColumnsResponse, GetApiV1DatasetsDatasetIdColumnsErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.get_api_v1_datasets_dataset_id_columns("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListDatasetColumnsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsDatasetIdColumnsErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.get_api_v1_datasets_dataset_id_columns("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListDatasetColumnsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsDatasetIdColumnsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiListDatasetColumnsResponse](soda/models/public_api_list_dataset_columns_response.py), [GetApiV1DatasetsDatasetIdColumnsErrorBody](soda/errors/get_api_v1_datasets_dataset_id_columns_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiListDatasetColumnsResponse](soda/models/public_api_list_dataset_columns_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasetsDatasetIdColumnsErrorBody](soda/errors/get_api_v1_datasets_dataset_id_columns_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasets_dataset_id_compute_warehouse(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DatasetComputeWarehouseConfigurationDto, GetApiV1DatasetsDatasetIdComputeWarehouseErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.get_api_v1_datasets_dataset_id_compute_warehouse("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatasetComputeWarehouseConfigurationDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsDatasetIdComputeWarehouseErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.get_api_v1_datasets_dataset_id_compute_warehouse(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatasetComputeWarehouseConfigurationDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsDatasetIdComputeWarehouseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[DatasetComputeWarehouseConfigurationDto](soda/models/dataset_compute_warehouse_configuration_dto.py), [GetApiV1DatasetsDatasetIdComputeWarehouseErrorBody](soda/errors/get_api_v1_datasets_dataset_id_compute_warehouse_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DatasetComputeWarehouseConfigurationDto](soda/models/dataset_compute_warehouse_configuration_dto.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasetsDatasetIdComputeWarehouseErrorBody](soda/errors/get_api_v1_datasets_dataset_id_compute_warehouse_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasets_dataset_id_diagnostics_warehouse(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDatasetDiagnosticsWarehouseResponse, GetApiV1DatasetsDatasetIdDiagnosticsWarehouseErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.get_api_v1_datasets_dataset_id_diagnostics_warehouse("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasetDiagnosticsWarehouseResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsDatasetIdDiagnosticsWarehouseErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.get_api_v1_datasets_dataset_id_diagnostics_warehouse(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasetDiagnosticsWarehouseResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsDatasetIdDiagnosticsWarehouseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDatasetDiagnosticsWarehouseResponse](soda/models/public_api_dataset_diagnostics_warehouse_response.py), [GetApiV1DatasetsDatasetIdDiagnosticsWarehouseErrorBody](soda/errors/get_api_v1_datasets_dataset_id_diagnostics_warehouse_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDatasetDiagnosticsWarehouseResponse](soda/models/public_api_dataset_diagnostics_warehouse_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasetsDatasetIdDiagnosticsWarehouseErrorBody](soda/errors/get_api_v1_datasets_dataset_id_diagnostics_warehouse_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasets_dataset_id_metric_monitoring(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDatasetMetricMonitoringResponse, GetApiV1DatasetsDatasetIdMetricMonitoringErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.get_api_v1_datasets_dataset_id_metric_monitoring("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasetMetricMonitoringResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsDatasetIdMetricMonitoringErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.get_api_v1_datasets_dataset_id_metric_monitoring(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasetMetricMonitoringResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsDatasetIdMetricMonitoringErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDatasetMetricMonitoringResponse](soda/models/public_api_dataset_metric_monitoring_response.py), [GetApiV1DatasetsDatasetIdMetricMonitoringErrorBody](soda/errors/get_api_v1_datasets_dataset_id_metric_monitoring_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDatasetMetricMonitoringResponse](soda/models/public_api_dataset_metric_monitoring_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasetsDatasetIdMetricMonitoringErrorBody](soda/errors/get_api_v1_datasets_dataset_id_metric_monitoring_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasets_dataset_id_profiling(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDatasetProfilingResponse, GetApiV1DatasetsDatasetIdProfilingErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.get_api_v1_datasets_dataset_id_profiling("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasetProfilingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsDatasetIdProfilingErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.get_api_v1_datasets_dataset_id_profiling("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasetProfilingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsDatasetIdProfilingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDatasetProfilingResponse](soda/models/public_api_dataset_profiling_response.py), [GetApiV1DatasetsDatasetIdProfilingErrorBody](soda/errors/get_api_v1_datasets_dataset_id_profiling_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDatasetProfilingResponse](soda/models/public_api_dataset_profiling_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasetsDatasetIdProfilingErrorBody](soda/errors/get_api_v1_datasets_dataset_id_profiling_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_datasets_dataset_id_responsibilities(dataset_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDatasetResponsibilitiesResponse, GetApiV1DatasetsDatasetIdResponsibilitiesErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.get_api_v1_datasets_dataset_id_responsibilities("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasetResponsibilitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsDatasetIdResponsibilitiesErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.get_api_v1_datasets_dataset_id_responsibilities(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDatasetResponsibilitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DatasetsDatasetIdResponsibilitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDatasetResponsibilitiesResponse](soda/models/public_api_dataset_responsibilities_response.py), [GetApiV1DatasetsDatasetIdResponsibilitiesErrorBody](soda/errors/get_api_v1_datasets_dataset_id_responsibilities_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDatasetResponsibilitiesResponse](soda/models/public_api_dataset_responsibilities_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DatasetsDatasetIdResponsibilitiesErrorBody](soda/errors/get_api_v1_datasets_dataset_id_responsibilities_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasets_roles(body: PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiUpdateDatasetRoleResponse, PostApiV1DatasetsRolesErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.post_api_v1_datasets_roles(
    PublicApiDatasetRoleRequestDto(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateDatasetRoleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsRolesErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.post_api_v1_datasets_roles(
    PublicApiDatasetRoleRequestDto(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateDatasetRoleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsRolesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiDatasetRoleRequestDto](soda/models/public_api_dataset_role_request_dto.py) \| [PublicApiDatasetRoleRequestDtoDict](soda/models/public_api_dataset_role_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiUpdateDatasetRoleResponse](soda/models/public_api_update_dataset_role_response.py), [PostApiV1DatasetsRolesErrorBody](soda/errors/post_api_v1_datasets_roles_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiUpdateDatasetRoleResponse](soda/models/public_api_update_dataset_role_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1DatasetsRolesErrorBody](soda/errors/post_api_v1_datasets_roles_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasets_roles_role_id(role_id: str, body: PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiUpdateDatasetRoleResponse, PostApiV1DatasetsRolesRoleIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.post_api_v1_datasets_roles_role_id(
    "some example string", PublicApiDatasetRoleRequestDto(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateDatasetRoleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsRolesRoleIdErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.post_api_v1_datasets_roles_role_id(
    "some example string", PublicApiDatasetRoleRequestDto(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateDatasetRoleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsRolesRoleIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>role_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiDatasetRoleRequestDto](soda/models/public_api_dataset_role_request_dto.py) \| [PublicApiDatasetRoleRequestDtoDict](soda/models/public_api_dataset_role_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiUpdateDatasetRoleResponse](soda/models/public_api_update_dataset_role_response.py), [PostApiV1DatasetsRolesRoleIdErrorBody](soda/errors/post_api_v1_datasets_roles_role_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiUpdateDatasetRoleResponse](soda/models/public_api_update_dataset_role_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1DatasetsRolesRoleIdErrorBody](soda/errors/post_api_v1_datasets_roles_role_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasets_dataset_id(dataset_id: str, body: PublicApiUpdateDatasetDto | PublicApiUpdateDatasetDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DatasetsContentDto, PostApiV1DatasetsDatasetIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.post_api_v1_datasets_dataset_id(
    "some example string", PublicApiUpdateDatasetDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatasetsContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.post_api_v1_datasets_dataset_id(
    "some example string", PublicApiUpdateDatasetDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DatasetsContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiUpdateDatasetDto](soda/models/public_api_update_dataset_dto.py) \| [PublicApiUpdateDatasetDtoDict](soda/models/public_api_update_dataset_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[DatasetsContentDto](soda/models/datasets_content_dto.py), [PostApiV1DatasetsDatasetIdErrorBody](soda/errors/post_api_v1_datasets_dataset_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DatasetsContentDto](soda/models/datasets_content_dto.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1DatasetsDatasetIdErrorBody](soda/errors/post_api_v1_datasets_dataset_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasets_dataset_id_column_attributes(dataset_id: str, body: PublicApiSetColumnAttributesRequestDto | PublicApiSetColumnAttributesRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PostApiV1DatasetsDatasetIdColumnAttributesErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.post_api_v1_datasets_dataset_id_column_attributes(
    "some example string", PublicApiSetColumnAttributesRequestDto(column_attributes={})
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdColumnAttributesErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.post_api_v1_datasets_dataset_id_column_attributes(
    "some example string", PublicApiSetColumnAttributesRequestDto(column_attributes={})
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdColumnAttributesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiSetColumnAttributesRequestDto](soda/models/public_api_set_column_attributes_request_dto.py) \| [PublicApiSetColumnAttributesRequestDtoDict](soda/models/public_api_set_column_attributes_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;None, [PostApiV1DatasetsDatasetIdColumnAttributesErrorBody](soda/errors/post_api_v1_datasets_dataset_id_column_attributes_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PostApiV1DatasetsDatasetIdColumnAttributesErrorBody](soda/errors/post_api_v1_datasets_dataset_id_column_attributes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasets_dataset_id_column_metric_monitors(dataset_id: str, body: PublicApiCreateColumnMetricMonitorRequestDto | PublicApiCreateColumnMetricMonitorRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiUpdateColumnMetricMonitorResponse, PostApiV1DatasetsDatasetIdColumnMetricMonitorsErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.post_api_v1_datasets_dataset_id_column_metric_monitors(
    "some example string",
    PublicApiCreateColumnMetricMonitorRequestDto(
        column_metric_monitor_configuration=ColumnMetricMonitorConfigurationDto(
            configuration=ColumnMonitorConfigurationDto(), metric_type=ColumnMonitorMetricTypeDto.MISSING_PERCENTAGE
        ),
        column_name="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateColumnMetricMonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdColumnMetricMonitorsErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.post_api_v1_datasets_dataset_id_column_metric_monitors(
    "some example string",
    PublicApiCreateColumnMetricMonitorRequestDto(
        column_metric_monitor_configuration=ColumnMetricMonitorConfigurationDto(
            configuration=ColumnMonitorConfigurationDto(), metric_type=ColumnMonitorMetricTypeDto.MISSING_PERCENTAGE
        ),
        column_name="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateColumnMetricMonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdColumnMetricMonitorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiCreateColumnMetricMonitorRequestDto](soda/models/public_api_create_column_metric_monitor_request_dto.py) \| [PublicApiCreateColumnMetricMonitorRequestDtoDict](soda/models/public_api_create_column_metric_monitor_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiUpdateColumnMetricMonitorResponse](soda/models/public_api_update_column_metric_monitor_response.py), [PostApiV1DatasetsDatasetIdColumnMetricMonitorsErrorBody](soda/errors/post_api_v1_datasets_dataset_id_column_metric_monitors_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiUpdateColumnMetricMonitorResponse](soda/models/public_api_update_column_metric_monitor_response.py)</code> -- Created

**On `Failure`**: `error` is <code>[PostApiV1DatasetsDatasetIdColumnMetricMonitorsErrorBody](soda/errors/post_api_v1_datasets_dataset_id_column_metric_monitors_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(dataset_id: str, monitor_id: str, body: PublicApiUpdateColumnMetricMonitorRequestDto | PublicApiUpdateColumnMetricMonitorRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiUpdateColumnMetricMonitorResponse, PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
    "some example string",
    "some example string",
    PublicApiUpdateColumnMetricMonitorRequestDto(configuration=ColumnMonitorConfigurationDto()),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateColumnMetricMonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
    "some example string",
    "some example string",
    PublicApiUpdateColumnMetricMonitorRequestDto(configuration=ColumnMonitorConfigurationDto()),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateColumnMetricMonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>monitor_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiUpdateColumnMetricMonitorRequestDto](soda/models/public_api_update_column_metric_monitor_request_dto.py) \| [PublicApiUpdateColumnMetricMonitorRequestDtoDict](soda/models/public_api_update_column_metric_monitor_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiUpdateColumnMetricMonitorResponse](soda/models/public_api_update_column_metric_monitor_response.py), [PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody](soda/errors/post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiUpdateColumnMetricMonitorResponse](soda/models/public_api_update_column_metric_monitor_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody](soda/errors/post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasets_dataset_id_custom_sql_monitors(dataset_id: str, body: PublicApiCreateCustomSqlMonitorRequestDto | PublicApiCreateCustomSqlMonitorRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiCreateCustomSqlMonitorResponse, PostApiV1DatasetsDatasetIdCustomSqlMonitorsErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.post_api_v1_datasets_dataset_id_custom_sql_monitors(
    "some example string",
    PublicApiCreateCustomSqlMonitorRequestDto(
        configuration=CustomSqlMonitorConfigurationDto(
            result_metric="some example string", sql_query="some example string"
        ),
        monitor_name="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateCustomSqlMonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdCustomSqlMonitorsErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.post_api_v1_datasets_dataset_id_custom_sql_monitors(
    "some example string",
    PublicApiCreateCustomSqlMonitorRequestDto(
        configuration=CustomSqlMonitorConfigurationDto(
            result_metric="some example string", sql_query="some example string"
        ),
        monitor_name="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateCustomSqlMonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdCustomSqlMonitorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiCreateCustomSqlMonitorRequestDto](soda/models/public_api_create_custom_sql_monitor_request_dto.py) \| [PublicApiCreateCustomSqlMonitorRequestDtoDict](soda/models/public_api_create_custom_sql_monitor_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiCreateCustomSqlMonitorResponse](soda/models/public_api_create_custom_sql_monitor_response.py), [PostApiV1DatasetsDatasetIdCustomSqlMonitorsErrorBody](soda/errors/post_api_v1_datasets_dataset_id_custom_sql_monitors_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiCreateCustomSqlMonitorResponse](soda/models/public_api_create_custom_sql_monitor_response.py)</code> -- Created

**On `Failure`**: `error` is <code>[PostApiV1DatasetsDatasetIdCustomSqlMonitorsErrorBody](soda/errors/post_api_v1_datasets_dataset_id_custom_sql_monitors_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(dataset_id: str, monitor_id: str, body: PublicApiUpdateCustomSqlMonitorRequestDto | PublicApiUpdateCustomSqlMonitorRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiUpdateCustomSqlMonitorResponse, PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
    "some example string", "some example string", PublicApiUpdateCustomSqlMonitorRequestDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateCustomSqlMonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
    "some example string", "some example string", PublicApiUpdateCustomSqlMonitorRequestDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateCustomSqlMonitorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>monitor_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiUpdateCustomSqlMonitorRequestDto](soda/models/public_api_update_custom_sql_monitor_request_dto.py) \| [PublicApiUpdateCustomSqlMonitorRequestDtoDict](soda/models/public_api_update_custom_sql_monitor_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiUpdateCustomSqlMonitorResponse](soda/models/public_api_update_custom_sql_monitor_response.py), [PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody](soda/errors/post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiUpdateCustomSqlMonitorResponse](soda/models/public_api_update_custom_sql_monitor_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody](soda/errors/post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection(dataset_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection(
    "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody
        ...
```

**Async**

```python
result = await async_client.datasets.with_raw_response.post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection(
    "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;None, [PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody](soda/errors/post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody](soda/errors/post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_datasets_dataset_id_responsibilities(dataset_id: str, body: PublicApiUpdateDatasetResponsibilitiesRequestDto | PublicApiUpdateDatasetResponsibilitiesRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PostApiV1DatasetsDatasetIdResponsibilitiesErrorBody]</code></summary>

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

**Sync**

```python
result = client.datasets.with_raw_response.post_api_v1_datasets_dataset_id_responsibilities(
    "some example string",
    PublicApiUpdateDatasetResponsibilitiesRequestDto(
        responsibilities=[
            DatasetResponsibilityContentRequestDto(role_id="some example string", type_=ResponsibilityTypeDto.USER)
        ],
    ),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdResponsibilitiesErrorBody
```

**Async**

```python
result = await async_client.datasets.with_raw_response.post_api_v1_datasets_dataset_id_responsibilities(
    "some example string",
    PublicApiUpdateDatasetResponsibilitiesRequestDto(
        responsibilities=[
            DatasetResponsibilityContentRequestDto(role_id="some example string", type_=ResponsibilityTypeDto.USER)
        ],
    ),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1DatasetsDatasetIdResponsibilitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiUpdateDatasetResponsibilitiesRequestDto](soda/models/public_api_update_dataset_responsibilities_request_dto.py) \| [PublicApiUpdateDatasetResponsibilitiesRequestDtoDict](soda/models/public_api_update_dataset_responsibilities_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;None, [PostApiV1DatasetsDatasetIdResponsibilitiesErrorBody](soda/errors/post_api_v1_datasets_dataset_id_responsibilities_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PostApiV1DatasetsDatasetIdResponsibilitiesErrorBody](soda/errors/post_api_v1_datasets_dataset_id_responsibilities_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DiscoveredDatasets

> Source: [DiscoveredDatasets](soda/apis/discovered_datasets.py)

<details>
<summary><code>def get_api_v1_discovered_datasets(*, datasource_id: str | None = None, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDiscoveredDatasetsResponse, GetApiV1DiscoveredDatasetsErrorBody]</code></summary>

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

**Sync**

```python
result = client.discovered_datasets.with_raw_response.get_api_v1_discovered_datasets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDiscoveredDatasetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DiscoveredDatasetsErrorBody
```

**Async**

```python
result = await async_client.discovered_datasets.with_raw_response.get_api_v1_discovered_datasets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDiscoveredDatasetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1DiscoveredDatasetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>datasource_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDiscoveredDatasetsResponse](soda/models/public_api_discovered_datasets_response.py), [GetApiV1DiscoveredDatasetsErrorBody](soda/errors/get_api_v1_discovered_datasets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDiscoveredDatasetsResponse](soda/models/public_api_discovered_datasets_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1DiscoveredDatasetsErrorBody](soda/errors/get_api_v1_discovered_datasets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Incidents

> Source: [Incidents](soda/apis/incidents.py)

<details>
<summary><code>def get_api_v1_incidents(*, dataset_id: str | None = None, from_: RFC3339DateTime | None = None, incident_ids: str | None = None, lead_id: str | None = None, page: int | None = None, severity: str | None = None, size: int | None = None, status: str | None = None, to: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiIncidentsResponse, GetApiV1IncidentsErrorBody]</code></summary>

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

**Sync**

```python
result = client.incidents.with_raw_response.get_api_v1_incidents()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiIncidentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1IncidentsErrorBody
```

**Async**

```python
result = await async_client.incidents.with_raw_response.get_api_v1_incidents()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiIncidentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1IncidentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dataset_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>from_</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>incident_ids</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>lead_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>severity</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiIncidentsResponse](soda/models/public_api_incidents_response.py), [GetApiV1IncidentsErrorBody](soda/errors/get_api_v1_incidents_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiIncidentsResponse](soda/models/public_api_incidents_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1IncidentsErrorBody](soda/errors/get_api_v1_incidents_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_incidents_incident_id_rca_report(incident_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiRcaReportContentDto, GetApiV1IncidentsIncidentIdRcaReportErrorBody]</code></summary>

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

**Sync**

```python
result = client.incidents.with_raw_response.get_api_v1_incidents_incident_id_rca_report("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiRcaReportContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1IncidentsIncidentIdRcaReportErrorBody
```

**Async**

```python
result = await async_client.incidents.with_raw_response.get_api_v1_incidents_incident_id_rca_report(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiRcaReportContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1IncidentsIncidentIdRcaReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>incident_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiRcaReportContentDto](soda/models/public_api_rca_report_content_dto.py), [GetApiV1IncidentsIncidentIdRcaReportErrorBody](soda/errors/get_api_v1_incidents_incident_id_rca_report_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiRcaReportContentDto](soda/models/public_api_rca_report_content_dto.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1IncidentsIncidentIdRcaReportErrorBody](soda/errors/get_api_v1_incidents_incident_id_rca_report_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_incidents(body: PublicApiCreateIncidentDto | PublicApiCreateIncidentDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IncidentContentDto, PostApiV1IncidentsErrorBody]</code></summary>

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

**Sync**

```python
result = client.incidents.with_raw_response.post_api_v1_incidents(
    PublicApiCreateIncidentDto(
        description="some example string",
        monitor_result_ids=["some example string"],
        severity=IncidentSeverityDto.MINOR,
        title="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IncidentContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1IncidentsErrorBody
```

**Async**

```python
result = await async_client.incidents.with_raw_response.post_api_v1_incidents(
    PublicApiCreateIncidentDto(
        description="some example string",
        monitor_result_ids=["some example string"],
        severity=IncidentSeverityDto.MINOR,
        title="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IncidentContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1IncidentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiCreateIncidentDto](soda/models/public_api_create_incident_dto.py) \| [PublicApiCreateIncidentDtoDict](soda/models/public_api_create_incident_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[IncidentContentDto](soda/models/incident_content_dto.py), [PostApiV1IncidentsErrorBody](soda/errors/post_api_v1_incidents_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IncidentContentDto](soda/models/incident_content_dto.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1IncidentsErrorBody](soda/errors/post_api_v1_incidents_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_incidents_incident_id(incident_id: str, body: PublicApiUpdateIncidentDto | PublicApiUpdateIncidentDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IncidentContentDto, PostApiV1IncidentsIncidentIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.incidents.with_raw_response.post_api_v1_incidents_incident_id(
    "some example string", PublicApiUpdateIncidentDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IncidentContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1IncidentsIncidentIdErrorBody
```

**Async**

```python
result = await async_client.incidents.with_raw_response.post_api_v1_incidents_incident_id(
    "some example string", PublicApiUpdateIncidentDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IncidentContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1IncidentsIncidentIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>incident_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiUpdateIncidentDto](soda/models/public_api_update_incident_dto.py) \| [PublicApiUpdateIncidentDtoDict](soda/models/public_api_update_incident_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[IncidentContentDto](soda/models/incident_content_dto.py), [PostApiV1IncidentsIncidentIdErrorBody](soda/errors/post_api_v1_incidents_incident_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IncidentContentDto](soda/models/incident_content_dto.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1IncidentsIncidentIdErrorBody](soda/errors/post_api_v1_incidents_incident_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_incidents_incident_id_rca_report(incident_id: str, body: PublicApiRcaReportDto | PublicApiRcaReportDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiRcaReportContentDto, PostApiV1IncidentsIncidentIdRcaReportErrorBody]</code></summary>

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

**Sync**

```python
result = client.incidents.with_raw_response.post_api_v1_incidents_incident_id_rca_report(
    "some example string",
    PublicApiRcaReportDto(
        agent=PublicApiRcaAgentDto(name="some example string"),
        root_cause_analysis=PublicApiRootCauseAnalysisDto(
            confidence=RcaConfidenceDto.HIGH,
            generated_at=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
            status=RcaReportStatusDto.COMPLETED,
            summary="some example string",
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiRcaReportContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1IncidentsIncidentIdRcaReportErrorBody
```

**Async**

```python
result = await async_client.incidents.with_raw_response.post_api_v1_incidents_incident_id_rca_report(
    "some example string",
    PublicApiRcaReportDto(
        agent=PublicApiRcaAgentDto(name="some example string"),
        root_cause_analysis=PublicApiRootCauseAnalysisDto(
            confidence=RcaConfidenceDto.HIGH,
            generated_at=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
            status=RcaReportStatusDto.COMPLETED,
            summary="some example string",
        ),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiRcaReportContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1IncidentsIncidentIdRcaReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>incident_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiRcaReportDto](soda/models/public_api_rca_report_dto.py) \| [PublicApiRcaReportDtoDict](soda/models/public_api_rca_report_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiRcaReportContentDto](soda/models/public_api_rca_report_content_dto.py), [PostApiV1IncidentsIncidentIdRcaReportErrorBody](soda/errors/post_api_v1_incidents_incident_id_rca_report_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiRcaReportContentDto](soda/models/public_api_rca_report_content_dto.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1IncidentsIncidentIdRcaReportErrorBody](soda/errors/post_api_v1_incidents_incident_id_rca_report_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Licensing

> Source: [Licensing](soda/apis/licensing.py)

<details>
<summary><code>def get_api_v1_licensing_spu_consumption(*, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiSpuConsumptionResponse, GetApiV1LicensingSpuConsumptionErrorBody]</code></summary>

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

**Sync**

```python
result = client.licensing.with_raw_response.get_api_v1_licensing_spu_consumption()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiSpuConsumptionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1LicensingSpuConsumptionErrorBody
```

**Async**

```python
result = await async_client.licensing.with_raw_response.get_api_v1_licensing_spu_consumption()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiSpuConsumptionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1LicensingSpuConsumptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from_</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiSpuConsumptionResponse](soda/models/public_api_spu_consumption_response.py), [GetApiV1LicensingSpuConsumptionErrorBody](soda/errors/get_api_v1_licensing_spu_consumption_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiSpuConsumptionResponse](soda/models/public_api_spu_consumption_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1LicensingSpuConsumptionErrorBody](soda/errors/get_api_v1_licensing_spu_consumption_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## NotificationRules

> Source: [NotificationRules](soda/apis/notification_rules.py)

<details>
<summary><code>def delete_api_v1_notification_rules_notification_rule_id(notification_rule_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDeleteNotificationRuleResponse, DeleteApiV1NotificationRulesNotificationRuleIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.notification_rules.with_raw_response.delete_api_v1_notification_rules_notification_rule_id(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteNotificationRuleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1NotificationRulesNotificationRuleIdErrorBody
```

**Async**

```python
result = await async_client.notification_rules.with_raw_response.delete_api_v1_notification_rules_notification_rule_id(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteNotificationRuleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1NotificationRulesNotificationRuleIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>notification_rule_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDeleteNotificationRuleResponse](soda/models/public_api_delete_notification_rule_response.py), [DeleteApiV1NotificationRulesNotificationRuleIdErrorBody](soda/errors/delete_api_v1_notification_rules_notification_rule_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDeleteNotificationRuleResponse](soda/models/public_api_delete_notification_rule_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DeleteApiV1NotificationRulesNotificationRuleIdErrorBody](soda/errors/delete_api_v1_notification_rules_notification_rule_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_notification_rules(*, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiListNotificationRulesResponse, GetApiV1NotificationRulesErrorBody]</code></summary>

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

**Sync**

```python
result = client.notification_rules.with_raw_response.get_api_v1_notification_rules()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListNotificationRulesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1NotificationRulesErrorBody
```

**Async**

```python
result = await async_client.notification_rules.with_raw_response.get_api_v1_notification_rules()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListNotificationRulesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1NotificationRulesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiListNotificationRulesResponse](soda/models/public_api_list_notification_rules_response.py), [GetApiV1NotificationRulesErrorBody](soda/errors/get_api_v1_notification_rules_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiListNotificationRulesResponse](soda/models/public_api_list_notification_rules_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1NotificationRulesErrorBody](soda/errors/get_api_v1_notification_rules_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_notification_rules(body: PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiNotificationRuleDto, PostApiV1NotificationRulesErrorBody]</code></summary>

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

**Sync**

```python
result = client.notification_rules.with_raw_response.post_api_v1_notification_rules(
    PublicApiNotificationRuleRequestDto(
        name="some example string",
        recipients=[
            NotificationRecipientDto(
                triggers=[NotificationRecipientTriggerDto(type_=NotificationTriggerTypeDto.TEST_RESULT_LEVEL)],
                type_=NotificationRecipientTypeDto.EMAIL,
            ),
        ],
        rule_type=PublicApiRuleTypeDto.CHECK,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiNotificationRuleDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1NotificationRulesErrorBody
```

**Async**

```python
result = await async_client.notification_rules.with_raw_response.post_api_v1_notification_rules(
    PublicApiNotificationRuleRequestDto(
        name="some example string",
        recipients=[
            NotificationRecipientDto(
                triggers=[NotificationRecipientTriggerDto(type_=NotificationTriggerTypeDto.TEST_RESULT_LEVEL)],
                type_=NotificationRecipientTypeDto.EMAIL,
            ),
        ],
        rule_type=PublicApiRuleTypeDto.CHECK,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiNotificationRuleDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1NotificationRulesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiNotificationRuleRequestDto](soda/models/public_api_notification_rule_request_dto.py) \| [PublicApiNotificationRuleRequestDtoDict](soda/models/public_api_notification_rule_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiNotificationRuleDto](soda/models/public_api_notification_rule_dto.py), [PostApiV1NotificationRulesErrorBody](soda/errors/post_api_v1_notification_rules_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiNotificationRuleDto](soda/models/public_api_notification_rule_dto.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1NotificationRulesErrorBody](soda/errors/post_api_v1_notification_rules_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_notification_rules_notification_rule_id(notification_rule_id: str, body: PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiNotificationRuleDto, PostApiV1NotificationRulesNotificationRuleIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.notification_rules.with_raw_response.post_api_v1_notification_rules_notification_rule_id(
    "some example string",
    PublicApiNotificationRuleRequestDto(
        name="some example string",
        recipients=[
            NotificationRecipientDto(
                triggers=[NotificationRecipientTriggerDto(type_=NotificationTriggerTypeDto.TEST_RESULT_LEVEL)],
                type_=NotificationRecipientTypeDto.EMAIL,
            ),
        ],
        rule_type=PublicApiRuleTypeDto.CHECK,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiNotificationRuleDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1NotificationRulesNotificationRuleIdErrorBody
```

**Async**

```python
result = await async_client.notification_rules.with_raw_response.post_api_v1_notification_rules_notification_rule_id(
    "some example string",
    PublicApiNotificationRuleRequestDto(
        name="some example string",
        recipients=[
            NotificationRecipientDto(
                triggers=[NotificationRecipientTriggerDto(type_=NotificationTriggerTypeDto.TEST_RESULT_LEVEL)],
                type_=NotificationRecipientTypeDto.EMAIL,
            ),
        ],
        rule_type=PublicApiRuleTypeDto.CHECK,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiNotificationRuleDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1NotificationRulesNotificationRuleIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>notification_rule_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiNotificationRuleRequestDto](soda/models/public_api_notification_rule_request_dto.py) \| [PublicApiNotificationRuleRequestDtoDict](soda/models/public_api_notification_rule_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiNotificationRuleDto](soda/models/public_api_notification_rule_dto.py), [PostApiV1NotificationRulesNotificationRuleIdErrorBody](soda/errors/post_api_v1_notification_rules_notification_rule_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiNotificationRuleDto](soda/models/public_api_notification_rule_dto.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1NotificationRulesNotificationRuleIdErrorBody](soda/errors/post_api_v1_notification_rules_notification_rule_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Runners

> Source: [Runners](soda/apis/runners.py)

<details>
<summary><code>def delete_api_v1_runners_runner_id(runner_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteApiV1RunnersRunnerIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.runners.with_raw_response.delete_api_v1_runners_runner_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1RunnersRunnerIdErrorBody
```

**Async**

```python
result = await async_client.runners.with_raw_response.delete_api_v1_runners_runner_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1RunnersRunnerIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>runner_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;Any, [DeleteApiV1RunnersRunnerIdErrorBody](soda/errors/delete_api_v1_runners_runner_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DeleteApiV1RunnersRunnerIdErrorBody](soda/errors/delete_api_v1_runners_runner_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_runners(*, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiListRunnersResponse, GetApiV1RunnersErrorBody]</code></summary>

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

**Sync**

```python
result = client.runners.with_raw_response.get_api_v1_runners()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListRunnersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1RunnersErrorBody
```

**Async**

```python
result = await async_client.runners.with_raw_response.get_api_v1_runners()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListRunnersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1RunnersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiListRunnersResponse](soda/models/public_api_list_runners_response.py), [GetApiV1RunnersErrorBody](soda/errors/get_api_v1_runners_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiListRunnersResponse](soda/models/public_api_list_runners_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1RunnersErrorBody](soda/errors/get_api_v1_runners_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_runners_runner_id(runner_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiGetRunnerResponse, GetApiV1RunnersRunnerIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.runners.with_raw_response.get_api_v1_runners_runner_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGetRunnerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1RunnersRunnerIdErrorBody
```

**Async**

```python
result = await async_client.runners.with_raw_response.get_api_v1_runners_runner_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGetRunnerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1RunnersRunnerIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>runner_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiGetRunnerResponse](soda/models/public_api_get_runner_response.py), [GetApiV1RunnersRunnerIdErrorBody](soda/errors/get_api_v1_runners_runner_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiGetRunnerResponse](soda/models/public_api_get_runner_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1RunnersRunnerIdErrorBody](soda/errors/get_api_v1_runners_runner_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_runners(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiCreateRunnerResponse, PostApiV1RunnersErrorBody]</code></summary>

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

**Sync**

```python
result = client.runners.with_raw_response.post_api_v1_runners()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateRunnerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1RunnersErrorBody
```

**Async**

```python
result = await async_client.runners.with_raw_response.post_api_v1_runners()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateRunnerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1RunnersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiCreateRunnerResponse](soda/models/public_api_create_runner_response.py), [PostApiV1RunnersErrorBody](soda/errors/post_api_v1_runners_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiCreateRunnerResponse](soda/models/public_api_create_runner_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1RunnersErrorBody](soda/errors/post_api_v1_runners_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Scans

> Source: [Scans](soda/apis/scans.py)

<details>
<summary><code>def delete_api_v1_scans_scan_id(scan_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteApiV1ScansScanIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.scans.with_raw_response.delete_api_v1_scans_scan_id("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1ScansScanIdErrorBody
```

**Async**

```python
result = await async_client.scans.with_raw_response.delete_api_v1_scans_scan_id("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1ScansScanIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scan_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;None, [DeleteApiV1ScansScanIdErrorBody](soda/errors/delete_api_v1_scans_scan_id_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteApiV1ScansScanIdErrorBody](soda/errors/delete_api_v1_scans_scan_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_scans_scan_id(scan_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiScanStatusResponse, GetApiV1ScansScanIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.scans.with_raw_response.get_api_v1_scans_scan_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiScanStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ScansScanIdErrorBody
```

**Async**

```python
result = await async_client.scans.with_raw_response.get_api_v1_scans_scan_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiScanStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ScansScanIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scan_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiScanStatusResponse](soda/models/public_api_scan_status_response.py), [GetApiV1ScansScanIdErrorBody](soda/errors/get_api_v1_scans_scan_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiScanStatusResponse](soda/models/public_api_scan_status_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1ScansScanIdErrorBody](soda/errors/get_api_v1_scans_scan_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_scans_scan_id_logs(scan_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiScanLogsResponse, GetApiV1ScansScanIdLogsErrorBody]</code></summary>

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

**Sync**

```python
result = client.scans.with_raw_response.get_api_v1_scans_scan_id_logs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiScanLogsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ScansScanIdLogsErrorBody
```

**Async**

```python
result = await async_client.scans.with_raw_response.get_api_v1_scans_scan_id_logs("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiScanLogsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ScansScanIdLogsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scan_id</code> | <code>str</code> | Value sent with the request. |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiScanLogsResponse](soda/models/public_api_scan_logs_response.py), [GetApiV1ScansScanIdLogsErrorBody](soda/errors/get_api_v1_scans_scan_id_logs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiScanLogsResponse](soda/models/public_api_scan_logs_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1ScansScanIdLogsErrorBody](soda/errors/get_api_v1_scans_scan_id_logs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Secrets

> Source: [Secrets](soda/apis/secrets.py)

<details>
<summary><code>def delete_api_v1_secrets_secret_id(secret_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiDeleteSecretResponse, DeleteApiV1SecretsSecretIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.secrets.with_raw_response.delete_api_v1_secrets_secret_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteSecretResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1SecretsSecretIdErrorBody
```

**Async**

```python
result = await async_client.secrets.with_raw_response.delete_api_v1_secrets_secret_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiDeleteSecretResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1SecretsSecretIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>secret_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiDeleteSecretResponse](soda/models/public_api_delete_secret_response.py), [DeleteApiV1SecretsSecretIdErrorBody](soda/errors/delete_api_v1_secrets_secret_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiDeleteSecretResponse](soda/models/public_api_delete_secret_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DeleteApiV1SecretsSecretIdErrorBody](soda/errors/delete_api_v1_secrets_secret_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_secrets(*, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiListSecretsResponse, GetApiV1SecretsErrorBody]</code></summary>

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

**Sync**

```python
result = client.secrets.with_raw_response.get_api_v1_secrets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListSecretsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1SecretsErrorBody
```

**Async**

```python
result = await async_client.secrets.with_raw_response.get_api_v1_secrets()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiListSecretsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1SecretsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiListSecretsResponse](soda/models/public_api_list_secrets_response.py), [GetApiV1SecretsErrorBody](soda/errors/get_api_v1_secrets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiListSecretsResponse](soda/models/public_api_list_secrets_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1SecretsErrorBody](soda/errors/get_api_v1_secrets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_secrets_public_key(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiGetEncryptionKeyResponse, GetApiV1SecretsPublicKeyErrorBody]</code></summary>

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

**Sync**

```python
result = client.secrets.with_raw_response.get_api_v1_secrets_public_key()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGetEncryptionKeyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1SecretsPublicKeyErrorBody
```

**Async**

```python
result = await async_client.secrets.with_raw_response.get_api_v1_secrets_public_key()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiGetEncryptionKeyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1SecretsPublicKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiGetEncryptionKeyResponse](soda/models/public_api_get_encryption_key_response.py), [GetApiV1SecretsPublicKeyErrorBody](soda/errors/get_api_v1_secrets_public_key_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiGetEncryptionKeyResponse](soda/models/public_api_get_encryption_key_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1SecretsPublicKeyErrorBody](soda/errors/get_api_v1_secrets_public_key_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_secrets(body: PublicApiCreateSecretRequestDto | PublicApiCreateSecretRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiCreateSecretResponse, PostApiV1SecretsErrorBody]</code></summary>

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

**Sync**

```python
result = client.secrets.with_raw_response.post_api_v1_secrets(
    PublicApiCreateSecretRequestDto(
        encrypted_value="some example string", encryption_key="some example string", name="some example string"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateSecretResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1SecretsErrorBody
```

**Async**

```python
result = await async_client.secrets.with_raw_response.post_api_v1_secrets(
    PublicApiCreateSecretRequestDto(
        encrypted_value="some example string", encryption_key="some example string", name="some example string"
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiCreateSecretResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1SecretsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiCreateSecretRequestDto](soda/models/public_api_create_secret_request_dto.py) \| [PublicApiCreateSecretRequestDtoDict](soda/models/public_api_create_secret_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiCreateSecretResponse](soda/models/public_api_create_secret_response.py), [PostApiV1SecretsErrorBody](soda/errors/post_api_v1_secrets_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiCreateSecretResponse](soda/models/public_api_create_secret_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1SecretsErrorBody](soda/errors/post_api_v1_secrets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_secrets_secret_id(secret_id: str, body: PublicApiUpdateSecretRequestDto | PublicApiUpdateSecretRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiUpdateSecretResponse, PostApiV1SecretsSecretIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.secrets.with_raw_response.post_api_v1_secrets_secret_id(
    "some example string",
    PublicApiUpdateSecretRequestDto(encrypted_value="some example string", encryption_key="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateSecretResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1SecretsSecretIdErrorBody
```

**Async**

```python
result = await async_client.secrets.with_raw_response.post_api_v1_secrets_secret_id(
    "some example string",
    PublicApiUpdateSecretRequestDto(encrypted_value="some example string", encryption_key="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUpdateSecretResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1SecretsSecretIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>secret_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiUpdateSecretRequestDto](soda/models/public_api_update_secret_request_dto.py) \| [PublicApiUpdateSecretRequestDtoDict](soda/models/public_api_update_secret_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiUpdateSecretResponse](soda/models/public_api_update_secret_response.py), [PostApiV1SecretsSecretIdErrorBody](soda/errors/post_api_v1_secrets_secret_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiUpdateSecretResponse](soda/models/public_api_update_secret_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1SecretsSecretIdErrorBody](soda/errors/post_api_v1_secrets_secret_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](soda/apis/users.py)

<details>
<summary><code>def delete_api_v1_user_groups_user_group_id(user_group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteApiV1UserGroupsUserGroupIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.users.with_raw_response.delete_api_v1_user_groups_user_group_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1UserGroupsUserGroupIdErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.delete_api_v1_user_groups_user_group_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiV1UserGroupsUserGroupIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_group_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;Any, [DeleteApiV1UserGroupsUserGroupIdErrorBody](soda/errors/delete_api_v1_user_groups_user_group_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[DeleteApiV1UserGroupsUserGroupIdErrorBody](soda/errors/delete_api_v1_user_groups_user_group_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_user_groups(*, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiUserGroupsResponse, GetApiV1UserGroupsErrorBody]</code></summary>

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

**Sync**

```python
result = client.users.with_raw_response.get_api_v1_user_groups()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUserGroupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1UserGroupsErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.get_api_v1_user_groups()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUserGroupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1UserGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiUserGroupsResponse](soda/models/public_api_user_groups_response.py), [GetApiV1UserGroupsErrorBody](soda/errors/get_api_v1_user_groups_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiUserGroupsResponse](soda/models/public_api_user_groups_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1UserGroupsErrorBody](soda/errors/get_api_v1_user_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_user_groups_user_group_id(user_group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UserGroupContentDto, GetApiV1UserGroupsUserGroupIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.users.with_raw_response.get_api_v1_user_groups_user_group_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserGroupContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1UserGroupsUserGroupIdErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.get_api_v1_user_groups_user_group_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserGroupContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1UserGroupsUserGroupIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_group_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[UserGroupContentDto](soda/models/user_group_content_dto.py), [GetApiV1UserGroupsUserGroupIdErrorBody](soda/errors/get_api_v1_user_groups_user_group_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UserGroupContentDto](soda/models/user_group_content_dto.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1UserGroupsUserGroupIdErrorBody](soda/errors/get_api_v1_user_groups_user_group_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_users(*, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiUsersResponse, GetApiV1UsersErrorBody]</code></summary>

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

**Sync**

```python
result = client.users.with_raw_response.get_api_v1_users()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUsersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1UsersErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.get_api_v1_users()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiUsersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1UsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiUsersResponse](soda/models/public_api_users_response.py), [GetApiV1UsersErrorBody](soda/errors/get_api_v1_users_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiUsersResponse](soda/models/public_api_users_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1UsersErrorBody](soda/errors/get_api_v1_users_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_user_groups(body: PublicApiCreateUserGroupRequestDto | PublicApiCreateUserGroupRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PostApiV1UserGroupsErrorBody]</code></summary>

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

**Sync**

```python
result = client.users.with_raw_response.post_api_v1_user_groups(
    PublicApiCreateUserGroupRequestDto(name="some example string")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1UserGroupsErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.post_api_v1_user_groups(
    PublicApiCreateUserGroupRequestDto(name="some example string")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1UserGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiCreateUserGroupRequestDto](soda/models/public_api_create_user_group_request_dto.py) \| [PublicApiCreateUserGroupRequestDtoDict](soda/models/public_api_create_user_group_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;None, [PostApiV1UserGroupsErrorBody](soda/errors/post_api_v1_user_groups_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PostApiV1UserGroupsErrorBody](soda/errors/post_api_v1_user_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_user_groups_user_group_id(user_group_id: str, body: PublicApiUpdateUserGroupRequestDto | PublicApiUpdateUserGroupRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UserGroupContentDto, PostApiV1UserGroupsUserGroupIdErrorBody]</code></summary>

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

**Sync**

```python
result = client.users.with_raw_response.post_api_v1_user_groups_user_group_id(
    "some example string", PublicApiUpdateUserGroupRequestDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserGroupContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1UserGroupsUserGroupIdErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.post_api_v1_user_groups_user_group_id(
    "some example string", PublicApiUpdateUserGroupRequestDto()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UserGroupContentDto
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1UserGroupsUserGroupIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_group_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PublicApiUpdateUserGroupRequestDto](soda/models/public_api_update_user_group_request_dto.py) \| [PublicApiUpdateUserGroupRequestDtoDict](soda/models/public_api_update_user_group_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[UserGroupContentDto](soda/models/user_group_content_dto.py), [PostApiV1UserGroupsUserGroupIdErrorBody](soda/errors/post_api_v1_user_groups_user_group_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UserGroupContentDto](soda/models/user_group_content_dto.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1UserGroupsUserGroupIdErrorBody](soda/errors/post_api_v1_user_groups_user_group_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_users(body: PublicApiInviteUserRequestDto | PublicApiInviteUserRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiInviteUserResponse, PostApiV1UsersErrorBody]</code></summary>

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

**Sync**

```python
result = client.users.with_raw_response.post_api_v1_users(PublicApiInviteUserRequestDto(emails=["some example string"]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiInviteUserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1UsersErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.post_api_v1_users(
    PublicApiInviteUserRequestDto(emails=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiInviteUserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1UsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicApiInviteUserRequestDto](soda/models/public_api_invite_user_request_dto.py) \| [PublicApiInviteUserRequestDtoDict](soda/models/public_api_invite_user_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiInviteUserResponse](soda/models/public_api_invite_user_response.py), [PostApiV1UsersErrorBody](soda/errors/post_api_v1_users_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiInviteUserResponse](soda/models/public_api_invite_user_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1UsersErrorBody](soda/errors/post_api_v1_users_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_api_v1_users_user_id_disable(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, PostApiV1UsersUserIdDisableErrorBody]</code></summary>

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

**Sync**

```python
result = client.users.with_raw_response.post_api_v1_users_user_id_disable("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1UsersUserIdDisableErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.post_api_v1_users_user_id_disable("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApiV1UsersUserIdDisableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;Any, [PostApiV1UsersUserIdDisableErrorBody](soda/errors/post_api_v1_users_user_id_disable_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[PostApiV1UsersUserIdDisableErrorBody](soda/errors/post_api_v1_users_user_id_disable_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Utility

> Source: [Utility](soda/apis/utility.py)

<details>
<summary><code>def get_api_v1_test_login(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublicApiTestLoginResponse, GetApiV1TestLoginErrorBody]</code></summary>

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

**Sync**

```python
result = client.utility.with_raw_response.get_api_v1_test_login()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiTestLoginResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1TestLoginErrorBody
```

**Async**

```python
result = await async_client.utility.with_raw_response.get_api_v1_test_login()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublicApiTestLoginResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1TestLoginErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](soda/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](soda/core/results.py)&#91;[PublicApiTestLoginResponse](soda/models/public_api_test_login_response.py), [GetApiV1TestLoginErrorBody](soda/errors/get_api_v1_test_login_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublicApiTestLoginResponse](soda/models/public_api_test_login_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[GetApiV1TestLoginErrorBody](soda/errors/get_api_v1_test_login_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 500 | <code>[ErrorResponse](soda/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](soda/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

